using CmdStan, StanMCMCChain, Distributions, Statistics, StatPlots, Plots
gr(size=(500,800))

ProjDir = @__DIR__
cd(ProjDir) do

  binomialstanmodel = "
  // Inferring a Rate
  data {
    int N;
    int<lower=0> k[N];
    int<lower=1> n[N];
  }
  parameters {
    real<lower=0,upper=1> theta;
    real<lower=0,upper=1> thetaprior;
  }
  model {
    // Prior Distribution for Rate Theta
    theta ~ beta(1, 1);
    thetaprior ~ beta(1, 1);

    // Observed Counts
    k ~ binomial(n, theta);
  }
  "

  global stanmodel, chn, sim, binomialdata, hpd_array
  stanmodel = Stanmodel(name="binomial", monitors = ["theta"], model=binomialstanmodel,
    output_format=:mcmcchain)

  hpd_array = Vector{MCMCChain.ChainSummary}(undef, 10)
  
  for j in 0:9
 
    N2 = 2^j
    d = Binomial(9, 0.66)
    n2 = Int.(9 * ones(Int, N2))
    #k2 = Int.(6 * ones(Int, N2))
    k2 = rand(d, N2)

    binomialdata = [
      Dict("N" => length(n2), "n" => n2, "k" => k2)
    ]

 
    global df
    rc, chn, cnames = stan(stanmodel, binomialdata, ProjDir, diagnostics=false,
      CmdStanDir=CMDSTAN_HOME)

    if rc == 0
      println()
      p = Vector{Plots.Plot{Plots.GRBackend}}(undef, 4)
      x = 0:0.001:1
      for i in 1:4
        vals = convert.(Float64, chn.value[:, 1, i])
        @show res = fit_mle(Normal, vals)
        μ = round(res.μ, digits=2)
        σ = round(res.σ, digits=2)
        p[i] = density(vals, lab="Chain $i density", title="$(N2) data points")
        plot!(p[i], x, pdf.(Normal(res.μ, res.σ), x), lab="Fitted Normal($μ, $σ)")
      end
      plot(p..., layout=(4, 1))
      savefig("s2_8_$j.pdf") #src
    end
  
    println()
    display(binomialdata)
    describe(chn)
    hpd_array[j+1] = MCMCChain.hpd(chn)
  end
end # cd
