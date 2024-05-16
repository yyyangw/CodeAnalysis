import{_ as c,r as s,o as r,c as d,a as e,b as a,d as o,e as t}from"./app-ec953868.js";const i={},l=e("h1",{id:"tca-web",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tca-web","aria-hidden":"true"},"#"),a(" TCA Web")],-1),p=e("h2",{id:"工程结构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#工程结构","aria-hidden":"true"},"#"),a(" 工程结构")],-1),h={href:"https://www.lernajs.cn/",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"monorepo",-1),m={class:"custom-container tip"},v=e("p",{class:"custom-container-title"},"TIP",-1),b={href:"https://github.com/lerna/lerna",target:"_blank",rel:"noopener noreferrer"},_={href:"http://www.febeacon.com/lerna-docs-zh-cn/",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>由 <code>framework</code>、<code>login</code>、<code>tca-layout</code>、<code>tca-analysis</code>、<code>tca-manage</code>微前端以及<code>tca-document</code>前端帮助文档组成。</p><h3 id="packages-目录说明" tabindex="-1"><a class="header-anchor" href="#packages-目录说明" aria-hidden="true">#</a> packages 目录说明</h3><ul><li><p><code>shared</code>: 公共模块</p></li><li><p><code>framework</code>: 微前端基座</p></li><li><p><code>login</code>: 登录微前端</p></li><li><p><code>tca-layout</code>: 腾讯云代码分析layout微前端</p></li><li><p><code>tca-analysis</code>: 腾讯云代码分析analysis微前端</p></li><li><p><code>tca-manage</code>: 腾讯云代码分析后台管理微前端</p></li><li><p><code>tca-document</code>: 腾讯云代码分析帮助文档</p></li></ul><h2 id="基于构建后资源部署-tca-deploy-source" tabindex="-1"><a class="header-anchor" href="#基于构建后资源部署-tca-deploy-source" aria-hidden="true">#</a> 基于构建后资源部署（tca-deploy-source）</h2><p>已将当前版本各个微前端构建打包到此目录，可通过阅读该目录下的 <strong>README</strong> 直接进行前端部署。</p><h2 id="基于开发模式启动" tabindex="-1"><a class="header-anchor" href="#基于开发模式启动" aria-hidden="true">#</a> 基于开发模式启动</h2><ul><li><p>按上一节完成一套 <strong>TCA Web</strong> 部署</p></li><li><p>根据要调整的内容，启动对应的微前端（login、tca-layout、tca-analysis），具体可进入不同 <code>package</code> 参考阅读其目录下的 <code>README</code> 进行开发。</p></li></ul><p><strong>其他</strong>：</p><ul><li><p><strong>根目录下启动单个项目</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># framework
yarn dev --scope framework
# login
PUBLIC_PATH=http://127.0.0.1:5055/ yarn dev --scope login
# tca-layout
PUBLIC_PATH=http://127.0.0.1:5056/ yarn dev --scope tca-layout
# tca-analysis
PUBLIC_PATH=http://127.0.0.1:5057/ yarn dev --scope tca-analysis
# tca-manage
PUBLIC_PATH=http://127.0.0.1:5058/ yarn dev --scope tca-manage
# tca-document
yarn dev --scope tca-document
# 或进入对应项目内，查阅对应README
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="本地开发后构建部署" tabindex="-1"><a class="header-anchor" href="#本地开发后构建部署" aria-hidden="true">#</a> 本地开发后构建部署</h2><ul><li><p>如对项目进行变更，本地开发结束后，需要部署最新资源可通过执行 <code>sh build-source.sh</code> 将构建后资源更新到<strong>tca-deploy-source</strong> 目录内，再参考该目录下的 <strong>README</strong> 直接进行前端更新/重新部署操作。</p></li><li><p>可通过阅读 <code>build-source.sh</code> 内容，以及 <strong>tca-deploy-source</strong> 目录下的 <strong>README</strong>，用户可根据需要自行进行前端部署。</p></li></ul>`,11);function f(y,k){const n=s("ExternalLinkIcon");return r(),d("div",null,[l,p,e("p",null,[a("TCA Web 采用 "),e("a",h,[a("Lerna"),o(n)]),a(" 进行 "),u,a(" 管理。")]),e("div",m,[v,e("p",null,[e("a",b,[a("Lerna GitHub地址"),o(n)])]),e("p",null,[e("a",_,[a("Lerna 中文命令文档"),o(n)])])]),g])}const x=c(i,[["render",f],["__file","web.html.vue"]]);export{x as default};
