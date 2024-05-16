import{_ as r}from"./start_scan_03-f1dea0e4.js";import{_ as n,r as o,o as l,c,a as e,b as t,d as a,e as i}from"./app-ec953868.js";const s={},h=i('<h1 id="客户端本地分析" tabindex="-1"><a class="header-anchor" href="#客户端本地分析" aria-hidden="true">#</a> 客户端本地分析</h1><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><ul><li><p>希望在本地随时分析。</p></li><li><p>接入持续集成系统实现自动化分析。</p></li></ul><h2 id="前置步骤" tabindex="-1"><a class="header-anchor" href="#前置步骤" aria-hidden="true">#</a> 前置步骤</h2><p><strong>1. 客户端运行环境机器配置推荐</strong></p><table><thead><tr><th style="text-align:right;">操作系统</th><th style="text-align:left;">推荐配置</th></tr></thead><tbody><tr><td style="text-align:right;">Linux</td><td style="text-align:left;">8核16G内存，硬盘空间256G（可用空间不低于100G）</td></tr><tr><td style="text-align:right;">Mac</td><td style="text-align:left;">8核16G内存，硬盘空间256G（可用空间不低于100G）</td></tr><tr><td style="text-align:right;">Windows</td><td style="text-align:left;">8核16G内存，硬盘空间256G（可用空间不低于100G）</td></tr></tbody></table><p>以上为推荐配置，实际情况需要考虑扫描对象代码库的大小，按实际情况增加磁盘空间。</p><p><strong>2. 本地需具备客户端</strong></p>',8),p={href:"https://github.com/Tencent/CodeAnalysis",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/Tencent/CodeAnalysis/releases",target:"_blank",rel:"noopener noreferrer"},g=i('<p><strong>3. 安装Python环境和第三方库（仅客户端源码启动分析需要）</strong></p><ul><li>预装Python3.7、pip，支持 <code>python3</code> 和 <code>pip3</code> 命令</li><li>安装依赖：<code>pip3 install -r CodeAnalysis/client/requirements/app_reqs.pip</code></li></ul><p><strong>4. 安装第三方工具（docker下启动分析可跳过）</strong></p><ul><li>进入到<code>client/requirements</code>目录</li><li>在命令行中执行安装脚本<code>install.sh</code>(linux/mac环境)或<code>install.bat</code>(windows环境)</li></ul><h2 id="分析配置" tabindex="-1"><a class="header-anchor" href="#分析配置" aria-hidden="true">#</a> 分析配置</h2><h3 id="配置客户端-config-ini-文件" tabindex="-1"><a class="header-anchor" href="#配置客户端-config-ini-文件" aria-hidden="true">#</a> 配置客户端 <code>config.ini</code> 文件</h3><ul><li>将 <code>&lt;Server IP地址&gt;</code> 替换成实际的TCA平台IP（可包含端口号）</li></ul><h3 id="配置客户端-codedog-ini-文件" tabindex="-1"><a class="header-anchor" href="#配置客户端-codedog-ini-文件" aria-hidden="true">#</a> 配置客户端 <code>codedog.ini</code> 文件</h3><p><code>codedog.ini</code>获取方法：</p>',9),_=e("li",null,[e("p",null,[t("方法一： 打开TCA源码"),e("code",null,"CodeAnalysis/client/codedog.ini"),t("，填写配置信息")])],-1),b={href:"https://github.com/Tencent/CodeAnalysis/releases",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,[e("p",null,"方法三： 在TCA平台平台上配置好对应信息后，下载配置文件到本地使用。"),e("p",null,[e("img",{src:r,alt:"下载配置文件"})])],-1),x=i(`<p><code>codedog.ini</code>中以下字段为必填项：</p><table><thead><tr><th style="text-align:left;">字段名</th><th style="text-align:left;">填写说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>token</code></td><td style="text-align:left;">从TCA平台页面获取，前往[个人中心]-[个人令牌]-复制Token</td></tr><tr><td style="text-align:left;"><code>org_sid</code>(团队编号)</td><td style="text-align:left;">从TCA平台项目概览页面URL中获取，项目概览URL格式：<code>http://{域名}/t/{org_sid}/p/{team_name}/profile</code></td></tr><tr><td style="text-align:left;"><code>team_name</code>(项目名称)</td><td style="text-align:left;">同上</td></tr><tr><td style="text-align:left;"><code>source_dir</code></td><td style="text-align:left;">本地代码目录路径</td></tr></tbody></table><p>其他字段按需填写。</p><h2 id="启动代码分析" tabindex="-1"><a class="header-anchor" href="#启动代码分析" aria-hidden="true">#</a> 启动代码分析</h2><p>启动客户端分析有三种方式可选：<a href="#%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%BA%90%E7%A0%81%E4%B8%8B%E5%90%AF%E5%8A%A8%E5%88%86%E6%9E%90">客户端源码下启动分析</a>、<a href="#%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%90%AF%E5%8A%A8%E5%88%86%E6%9E%90">客户端二进制启动分析</a>、<a href="#docker%E4%B8%8B%E5%90%AF%E5%8A%A8%E5%88%86%E6%9E%90">docker下启动分析</a></p><h3 id="客户端源码下启动分析" tabindex="-1"><a class="header-anchor" href="#客户端源码下启动分析" aria-hidden="true">#</a> 客户端源码下启动分析</h3><ul><li><p>进入到客户端<code>client</code>目录下</p></li><li><p>执行命令： 客户端源码：<code>python3 codepuppy.py localscan</code></p></li></ul><h3 id="客户端二进制启动分析" tabindex="-1"><a class="header-anchor" href="#客户端二进制启动分析" aria-hidden="true">#</a> 客户端二进制启动分析</h3><ul><li><p>进入到客户端<code>client</code>目录下</p></li><li><p>执行命令： 客户端源码：<code>./codepuppy localscan</code></p></li></ul><h3 id="docker下启动分析" tabindex="-1"><a class="header-anchor" href="#docker下启动分析" aria-hidden="true">#</a> docker下启动分析</h3><h4 id="_1-构建docker镜像" tabindex="-1"><a class="header-anchor" href="#_1-构建docker镜像" aria-hidden="true">#</a> 1. 构建docker镜像</h4><p>在client目录下，执行以下命令：<code>docker build -t tca-client .</code><br><strong>(需已安装Docker)</strong></p><h4 id="_2-执行docker容器" tabindex="-1"><a class="header-anchor" href="#_2-执行docker容器" aria-hidden="true">#</a> 2. 执行Docker容器</h4><div class="custom-container warning"><p class="custom-container-title">注意</p><p>注意：因为以下步骤会将代码目录挂载到容器中，需要先将codedog.ini里面的source_dir修改为/workspace/src，其他参数保持不变。</p></div><p>执行Docker容器有以下两种方式：</p><h4 id="直接使用docker运行" tabindex="-1"><a class="header-anchor" href="#直接使用docker运行" aria-hidden="true">#</a> 直接使用docker运行</h4><p>在<code>client</code>目录下，执行以下命令：(注意：按照实际情况填写<code>SOURCE_DIR</code>环境变量值)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>export SOURCE_DIR=需要扫描的代码目录绝对路径
docker run -it --rm  -v $PWD:/workspace/client -v $SOURCE_DIR:/workspace/src  --name tca-client tca-client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用docker内bash终端运行" tabindex="-1"><a class="header-anchor" href="#使用docker内bash终端运行" aria-hidden="true">#</a> 使用docker内bash终端运行</h4><p>通过以下方式，进入容器内的bash终端后，通过命令行启动client代码：<br> 在<code>client</code>目录下，执行以下命令：(注意：按照实际情况填写<code>SOURCE_DIR</code>环境变量值)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>export SOURCE_DIR=需要扫描的代码目录绝对路径
docker run -it --rm  -v $PWD:/workspace/client -v $SOURCE_DIR:/workspace/src  --name tca-client tca-client bash
# 进入容器内终端，通过命令行执行扫描
python3 codepuppy.py localscan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function m(E,k){const d=o("ExternalLinkIcon");return l(),c("div",null,[h,e("p",null,[t("下载"),e("a",p,[t("开源版源码"),a(d)]),t("。 或从"),e("a",u,[t("开源版release"),a(d)]),t("下载客户端以运行客户端二进制；")]),g,e("ul",null,[_,e("li",null,[e("p",null,[t("方法二： 从"),e("a",b,[t("开源版release"),a(d)]),t("下载客户端包，解压后打开codedog.ini，填写配置信息。")])]),f]),x])}const A=n(s,[["render",m],["__file","本地分析.html.vue"]]);export{A as default};
