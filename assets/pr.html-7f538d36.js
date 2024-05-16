import{_ as o,a as i,b as l,c as n,d as h}from"./PR-48d0e900.js";import{_ as d,r as c,o as p,c as u,a as e,b as a,d as s,e as t}from"./app-ec953868.js";const _={},b=t('<p><img src="'+o+'" alt="Welcome"></p><p>PR全称为Pull Request，它是一种代码库的协作方式。开发者可以通过PR将自己在代码库的修改通知到代码库负责人，由原作者评审代码并决定是否能合入。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>Pull requests let you tell others about changes you&#39;ve pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.</p></div><h1 id="pr操作流程" tabindex="-1"><a class="header-anchor" href="#pr操作流程" aria-hidden="true">#</a> PR操作流程</h1><h2 id="一、fork目标代码库" tabindex="-1"><a class="header-anchor" href="#一、fork目标代码库" aria-hidden="true">#</a> 一、Fork目标代码库</h2><p><img src="'+i+'" alt="fork"></p>',6),m={href:"https://github.com/Lingghh/CodeAnalysis",target:"_blank",rel:"noopener noreferrer"},g=t(`<h2 id="二、克隆fork的代码库并创建分支" tabindex="-1"><a class="header-anchor" href="#二、克隆fork的代码库并创建分支" aria-hidden="true">#</a> 二、克隆Fork的代码库并创建分支</h2><p>在本地克隆Fork的代码库并创建分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>git clone https://github.com/Lingghh/CodeAnalysis
git checkout -b dev/add_qa_20220301
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注：也可以在自己Fork的代码库GitHub页面上创建分支。</p><p><img src="`+l+'" alt="fork1"></p><p>接下来就可以在本地修改代码，修改完成后先push到Fork的代码库中.</p><h2 id="三、在目标项目中提交pr" tabindex="-1"><a class="header-anchor" href="#三、在目标项目中提交pr" aria-hidden="true">#</a> 三、在目标项目中提交PR</h2><h3 id="_1-进入到目标项目中-点击pull-requests-tab-再点击new-pull-request就会进入到创建pr的页面" tabindex="-1"><a class="header-anchor" href="#_1-进入到目标项目中-点击pull-requests-tab-再点击new-pull-request就会进入到创建pr的页面" aria-hidden="true">#</a> 1.进入到目标项目中，点击Pull requests Tab，再点击New pull request就会进入到创建PR的页面</h3><p><img src="'+n+'" alt="New pull request"></p><h3 id="_2-进入pr页面后" tabindex="-1"><a class="header-anchor" href="#_2-进入pr页面后" aria-hidden="true">#</a> 2.进入PR页面后</h3><ul><li><p>点击compare across forks 。</p></li><li><p>点击head repository 。</p></li><li><p>选择自己Fork的代码库和比较的分支，比如我这里选择Lingghh/CodeAnalysis和待合入的分支dev/add_arm64_file 。</p></li><li><p>最后确认commits和changed files是否准确，如果没有问题就可以点击Create pull request 。</p><p><img src="'+h+'" alt="PR"></p></li></ul><p>PR创建后，代码库管理员会评审你提交的代码，并决定是否接受该PR。</p>',12),f={id:"更多信息请参阅github-pullrequest官方文档",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#更多信息请参阅github-pullrequest官方文档","aria-hidden":"true"},"#",-1),q={href:"https://docs.github.com/cn/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests/",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"tca团队诚邀您的加入",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tca团队诚邀您的加入","aria-hidden":"true"},"#"),a(" TCA团队诚邀您的加入")],-1);function x(y,P){const r=c("ExternalLinkIcon");return p(),u("div",null,[b,e("p",null,[a("点击Fork后，会在自己名下产生一个相同代码库，比如我Fork CodeAnalysis项目后，会在我名下多出一个CodeAnalysis代码库，地址为"),e("a",m,[a("https://github.com/Lingghh/CodeAnalysis"),s(r)])]),g,e("h2",f,[k,a(" 更多信息请参阅"),e("a",q,[a("GitHub PullRequest官方文档"),s(r)])]),v])}const C=d(_,[["render",x],["__file","pr.html.vue"]]);export{C as default};
