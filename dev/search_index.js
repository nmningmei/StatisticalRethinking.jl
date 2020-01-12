var documenterSearchIndex = {"docs":
[{"location":"references.html#References-1","page":"References","title":"References","text":"","category":"section"},{"location":"references.html#","page":"References","title":"References","text":"This package is based on:","category":"page"},{"location":"references.html#","page":"References","title":"References","text":"McElreath: Statistical Rethinking 2nd edition","category":"page"},{"location":"references.html#","page":"References","title":"References","text":"There is no shortage of additional good books on Bayesian statistics. A few of my favorites are:","category":"page"},{"location":"references.html#","page":"References","title":"References","text":"Bolstad: Introduction to Bayesian statistics\nBolstad: Understanding Computational Bayesian Statistics\nGelman, Hill: Data Analysis using regression and multileve,/hierachical models\nKruschke: Doing Bayesian Data Analysis\nLee, Wagenmakers: Bayesian Cognitive Modeling\nGelman, Carlin, and others: Bayesian Data Analysis","category":"page"},{"location":"references.html#","page":"References","title":"References","text":"and a great read (and implementation in DynamicHMC.jl):","category":"page"},{"location":"references.html#","page":"References","title":"References","text":"Betancourt: A Conceptual Introduction to Hamiltonian Monte Carlo","category":"page"},{"location":"intro.html#Purpose-of-this-package-1","page":"Introduction","title":"Purpose of this package","text":"","category":"section"},{"location":"intro.html#","page":"Introduction","title":"Introduction","text":"This package contains Julia versions of selected code snippets and mcmc models contained in the R package \"rethinking\" associated with the book Statistical Rethinking by Richard McElreath.","category":"page"},{"location":"intro.html#","page":"Introduction","title":"Introduction","text":"As stated many times by the author in his online lectures, this package is not intended to take away the hands-on component of the course. The clips are just meant to get you going but learning means experimenting, in this case using Julia and Stan.","category":"page"},{"location":"intro.html#Time-line-1","page":"Introduction","title":"Time line","text":"","category":"section"},{"location":"intro.html#","page":"Introduction","title":"Introduction","text":"The 2nd edition of the book is going to print in March 2020. This is also the target date for completion of v1 of StatisticalRethinking.jl.","category":"page"},{"location":"intro.html#Introduction-1","page":"Introduction","title":"Introduction","text":"","category":"section"},{"location":"intro.html#","page":"Introduction","title":"Introduction","text":"In the book and associated R package rethinking, statistical models are defined as illustrated below:","category":"page"},{"location":"intro.html#","page":"Introduction","title":"Introduction","text":"flist <- alist(\n  height ~ dnorm( mu , sigma ) ,\n  mu <- a + b*weight ,\n  a ~ dnorm( 156 , 100 ) ,\n  b ~ dnorm( 0 , 10 ) ,\n  sigma ~ dunif( 0 , 50 )\n)","category":"page"},{"location":"intro.html#","page":"Introduction","title":"Introduction","text":"The author of the book states: \"If that (the statistical model) doesn't make much sense, good. ... you're holding the right textbook, since this book teaches you how to read and write these mathematical descriptions\" (page 77).","category":"page"},{"location":"intro.html#","page":"Introduction","title":"Introduction","text":"StatisticalRethinkingJulia is intended to allow experimenting with this learning process using Stan and Julia.","category":"page"},{"location":"intro.html#","page":"Introduction","title":"Introduction","text":"In rethinking, posterior values can be approximated by","category":"page"},{"location":"intro.html#","page":"Introduction","title":"Introduction","text":"# Simulate quadratic approximation (for simpler models)\nm4.31 <- quap(flist, data=d2)","category":"page"},{"location":"intro.html#","page":"Introduction","title":"Introduction","text":"or generated using Stan by:","category":"page"},{"location":"intro.html#","page":"Introduction","title":"Introduction","text":"# Generate a Stan model and run a simulation\nm4.32 <- ulam(flist, data=d2)","category":"page"},{"location":"intro.html#","page":"Introduction","title":"Introduction","text":"In v1.x of StatisticalRethinking.jl, R's ulam() has been replaced by StanSample.jl. This means that much earlier on than in the book, StatisticalRethinking.jl introduces the reader to the Stan language.","category":"page"},{"location":"intro.html#","page":"Introduction","title":"Introduction","text":"To help out with this, in the subdirectory scripts/03/intro-stan the Stan language is introduced and the execution of Stan language programs illustrated. Chapter 9 of the book contains a nice introduction to translating the alist R models to the Stan language (just before section 9.5).","category":"page"},{"location":"intro.html#","page":"Introduction","title":"Introduction","text":"The R function quap() in StatisticalRethinking.jl uses the MAP density of the Stan samples as the mean of the Normal distribution. An example can be found in scripts/03/intro-stan/intro-part-4.jl. ","category":"page"},{"location":"future.html#Future-plans-1","page":"Future","title":"Future plans","text":"","category":"section"},{"location":"future.html#","page":"Future","title":"Future","text":"There is a plan to release a version 2 of StatisticalRethinking.jl that will be based on Soss.jl and DynamicHMC.jl. No firm timeline has been set for this.","category":"page"},{"location":"acknowledgements.html#Acknowledgements-1","page":"Acknowledgements","title":"Acknowledgements","text":"","category":"section"},{"location":"acknowledgements.html#","page":"Acknowledgements","title":"Acknowledgements","text":"Of course, without this excellent textbook by Richard McElreath, this package would not have been possible. The author has also been supportive of this work and gave permission to use the datasets.","category":"page"},{"location":"acknowledgements.html#","page":"Acknowledgements","title":"Acknowledgements","text":"Richard Torkar has taken the lead in developing the Turing versions of the models in chapter 8 and subsequent chapters. ","category":"page"},{"location":"acknowledgements.html#","page":"Acknowledgements","title":"Acknowledgements","text":"Tamas Papp has been very helpful during the development of the DynamicHMC versions of the models.","category":"page"},{"location":"acknowledgements.html#","page":"Acknowledgements","title":"Acknowledgements","text":"The TuringLang team and #turing contributors on Slack have been extremely helpful! The Turing examples by Cameron Pfiffer are followed closely in several example scripts.","category":"page"},{"location":"acknowledgements.html#","page":"Acknowledgements","title":"Acknowledgements","text":"The initial approach of using Literate.jl to generate .md files and Jupyter notebooks has been dropped in this version. Please let me know if that functionality is missed.","category":"page"},{"location":"installation.html#Installation-1","page":"Installation","title":"Installation","text":"","category":"section"},{"location":"installation.html#","page":"Installation","title":"Installation","text":"This package can be installed from the REPL as follows:","category":"page"},{"location":"installation.html#","page":"Installation","title":"Installation","text":"] add StatisticalRethinking\n[del] ","category":"page"},{"location":"installation.html#","page":"Installation","title":"Installation","text":"While working through the book/snippets I suggest:","category":"page"},{"location":"installation.html#","page":"Installation","title":"Installation","text":"] dev StatisticalRethinking","category":"page"},{"location":"installation.html#","page":"Installation","title":"Installation","text":"This puts the package source code in your development subdirectory which I find is easier to use from within an editor.","category":"page"},{"location":"layout.html#Layout-of-the-package-1","page":"Layout","title":"Layout of the package","text":"","category":"section"},{"location":"layout.html#","page":"Layout","title":"Layout","text":"Instead of having all snippets in a single file, the snippets are organized by chapter and grouped in clips by related snippets. E.g. chapter 0 of the R package has snippets 0.1 to 0.5. Those have been combined into 2 clips:","category":"page"},{"location":"layout.html#","page":"Layout","title":"Layout","text":"clip-01-03.jl - contains snippets 0.1 through 0.3\nclip-04-05.jl - contains snippets 0.4 and 0.5.","category":"page"},{"location":"layout.html#","page":"Layout","title":"Layout","text":"A single snippet clip will be referred to as 03/clip-02.jl. ","category":"page"},{"location":"index.html#","page":"Functions","title":"Functions","text":"CurrentModule = StatisticalRethinking","category":"page"},{"location":"index.html#rel_path-1","page":"Functions","title":"rel_path","text":"","category":"section"},{"location":"index.html#","page":"Functions","title":"Functions","text":"rel_path(parts...)","category":"page"},{"location":"index.html#StatisticalRethinking.rel_path-Tuple","page":"Functions","title":"StatisticalRethinking.rel_path","text":"rel_path\n\nRelative path using the StatisticalRethinking src/ directory. Copied from DynamicHMCExamples.jl\n\nExample to get access to the data subdirectory\n\nrel_path(\"..\", \"data\")\n\n\n\n\n\n","category":"method"},{"location":"index.html#link-1","page":"Functions","title":"link","text":"","category":"section"},{"location":"index.html#","page":"Functions","title":"Functions","text":"link(df::DataFrame, vars, xrange, xbar) ","category":"page"},{"location":"index.html#StatisticalRethinking.link-Tuple{DataFrame,Any,Any,Any}","page":"Functions","title":"StatisticalRethinking.link","text":"link\n\nCompute the link function\n\nMethod\n\nlink(df, vars, xrange, xbar) \n\nRequired arguments\n\n* `df::DataFrame`               : Chain samples converted to a DataFrame\n* `vars::Vector{Symbol}`        : Variables in DataFrame (2 variables)\n* `xrange::range`               : Range over which link values are computed\n* `xbar::Float64`               : Mean value of observed predictor\n\nReturn values\n\n* `result`                      : Vector of link values\n\n\n\n\n\n","category":"method"},{"location":"index.html#quap-1","page":"Functions","title":"quap","text":"","category":"section"},{"location":"index.html#","page":"Functions","title":"Functions","text":"quap(df::DataFrame)","category":"page"},{"location":"index.html#StatisticalRethinking.quap-Tuple{DataFrame}","page":"Functions","title":"StatisticalRethinking.quap","text":"quap\n\nQuadratic approximation of a posterior distribution\n\nMethod\n\nquap(df) \n\nRequired arguments\n\n* `df::DataFrame`               : Dataframe generated from a chain\n\nReturn values\n\n* `result::Dict`                : Dictionary summarizing approximation\n\nExample\n\n\n# Run stan_sample() on a SampleModel\n\nif success(rc)\n\t\n\tchn = read_samples(sm)\n\tquap(DataFrame(chn))\n\nend\n\n\n\n\n\n\n","category":"method"},{"location":"index.html#scale!-1","page":"Functions","title":"scale!","text":"","category":"section"},{"location":"index.html#","page":"Functions","title":"Functions","text":"scale!(df::DataFrame, vars::Vector{Symbol}, ext=\"_s\")","category":"page"},{"location":"index.html#StatisticalRethinking.scale!","page":"Functions","title":"StatisticalRethinking.scale!","text":"scale!\n\nAugment a DataFrame with scaled values of 1 or more columns\n\nMethod\n\nscale!(df, var, ext) \n\nRequired arguments\n\n* `df::DataFrame`                      : DataFrame\n* `var::Union{Symbol, Vector{Symbol}}` : Variables to scale\n* `ext::String=\"_s\"`                   : Suffix for scaled varable(s)\n\nReturn values\n\n* `result::DataFrame`                  : Augmented DataFrame\n\nExample\n\nscale!(df, :var1)\n\nor\n\nscale!(mydf, [:var1, var2])\n\n\n\n\n\n","category":"function"},{"location":"index.html#sample-1","page":"Functions","title":"sample","text":"","category":"section"},{"location":"index.html#","page":"Functions","title":"Functions","text":"sample(df::DataFrame, n; replace=true, ordered=false)","category":"page"},{"location":"index.html#StatsBase.sample-Tuple{DataFrame,Any}","page":"Functions","title":"StatsBase.sample","text":"sample\n\nSample rows from a DataFrame\n\nMethod\n\nsample(df, n; replace, ordered) \n\nRequired arguments\n\n* `df::DataFrame`               : DataFrame\n* `n::Int`                      : Number of samples\n\nOptional argument\n\n* `rng::AbstractRNG`            : Random number generator\n* `replace::Bool=true`          : Sample with replace \n* `ordered::Bool=false`         : Sort sample \n\nReturn values\n\n* `result`                      : Array of samples\n\n\n\n\n\n","category":"method"},{"location":"index.html#sample-2","page":"Functions","title":"sample","text":"","category":"section"},{"location":"index.html#","page":"Functions","title":"Functions","text":"sample(q::Particles, n; permute=true)","category":"page"},{"location":"index.html#StatsBase.sample-Tuple{Particles,Any}","page":"Functions","title":"StatsBase.sample","text":"sample\n\nSample from a Particles object\n\nMethod\n\nsample(q::Particles, n; permute=true) \n\nRequired arguments\n\n* `q::Particles`                : Particles object\n* `n::Int`                      : Number of samples\n\nOptional argument\n\n* permute::Bool=false`          : Sort sample \n\nThis method uses systematic_sample. See MonteCarloMeasurements.\n\nReturn values\n\n* `result`                      : Vector of samples\n\n\n\n\n\n","category":"method"},{"location":"srgithub.html#StatisticalRethinkingJulia-Github-organization-1","page":"StatisticalRethinkingJulia","title":"StatisticalRethinkingJulia Github organization","text":"","category":"section"},{"location":"srgithub.html#","page":"StatisticalRethinkingJulia","title":"StatisticalRethinkingJulia","text":"StatisticalRethinking.jl is part of the broader StatisticalRethinkingJulia Github organization.","category":"page"},{"location":"srgithub.html#","page":"StatisticalRethinkingJulia","title":"StatisticalRethinkingJulia","text":"Implementations of the models using Stan, DynamicHMC and Turing can be found in StanModels, DynamicHMCModels and TuringModels.","category":"page"},{"location":"srgithub.html#","page":"StatisticalRethinkingJulia","title":"StatisticalRethinkingJulia","text":"StanModels has been updated to use the new suite of packages StanSample.jl, StanOptimize.jl, StanVariational.jl, etc. (all modeled after Tamas Papp's StanDump.jl, StanRun.jl and StanSamples.jl). ","category":"page"},{"location":"srgithub.html#","page":"StatisticalRethinkingJulia","title":"StatisticalRethinkingJulia","text":"While work on StatisticalRethinking.jl v1.x will continue for at least  several more months, work on a v2 has also started by testing a new formulation for the models based on Soss.jl and DynamicHMC.jl, i.e. SossModels.jl.","category":"page"}]
}
