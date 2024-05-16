import{_ as i,a}from"./createcustomrule-3919c596.js";import{_ as d,a as h}from"./scheme_codelint_03-5bcd9286.js";import{_,r as s,o as p,c as u,a as e,b as o,d as t,w as c,e as l}from"./app-ec953868.js";const g={},x=l('<h1 id="tca-armory-r-使用手册" tabindex="-1"><a class="header-anchor" href="#tca-armory-r-使用手册" aria-hidden="true">#</a> TCA-Armory-R 使用手册</h1><p>TCA独立工具TCA-Armory-R，别名RegexScanner，正则匹配工具，支持扫描文件名称和文本内容，支持页面直接<strong>自定义创建规则</strong>。</p><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ul><li>检测项目中的文件名，比如漏洞文件log4j-core-2.10.1.jar</li><li>检测代码文件中的文本内容，比如高危函数vsscanf</li><li>检测配置文件中的文本内容，比如账号密码明文</li></ul><h2 id="对比regexscan、regexfilescan" tabindex="-1"><a class="header-anchor" href="#对比regexscan、regexfilescan" aria-hidden="true">#</a> 对比RegexScan、RegexFileScan</h2>',5),m=e("li",null,"单个工具即可完成文件名和文件内容的检查",-1),f=e("li",null,"扫描速度更快，大概减少60%的耗时",-1),A=e("li",null,"单条规则内支持多条正则表达式",-1),k=e("li",null,"支持正则过滤",-1),b=e("li",null,"支持匹配分组和熵检测",-1),y={href:"https://pkg.go.dev/regexp/syntax",target:"_blank",rel:"noopener noreferrer"},E=e("h2",{id:"快速接入",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#快速接入","aria-hidden":"true"},"#"),o(" 快速接入")],-1),T=e("p",null,"以下是接入步骤：",-1),C=e("li",null,"在代码分析创建项目，自定义规则包里添加想要进行扫描的TCA-Armory-R规则",-1),v=e("li",null,"启动分析即可",-1),R=l('<h2 id="自定义规则" tabindex="-1"><a class="header-anchor" href="#自定义规则" aria-hidden="true">#</a> 自定义规则</h2><h3 id="_1-开放支持自定义规则权限" tabindex="-1"><a class="header-anchor" href="#_1-开放支持自定义规则权限" aria-hidden="true">#</a> 1. 开放支持自定义规则权限</h3><p>开放<strong>支持自定义规则</strong>权限，需平台管理员在<strong>管理入口</strong>-<strong>工具管理</strong>中找到TCA-Armory-R工具，并将其权限状态调整为<strong>支持自定义规则</strong>。</p>',3),B=l('<h3 id="_2-添加规则" tabindex="-1"><a class="header-anchor" href="#_2-添加规则" aria-hidden="true">#</a> 2. 添加规则</h3><p>进入工具管理入口，进入TCA-Armory-R工具页面，选择上方的“自定义规则”，然后点击“添加规则”:</p><p><img src="'+i+'" alt="添加自定义规则"></p><h3 id="_3-填写规则信息" tabindex="-1"><a class="header-anchor" href="#_3-填写规则信息" aria-hidden="true">#</a> 3. 填写规则信息</h3><p>进入“创建规则”页面，按照需求填写相关信息，完成后，点击页面最后的“确定”按钮提交。</p><h3 id="规则示例" tabindex="-1"><a class="header-anchor" href="#规则示例" aria-hidden="true">#</a> 规则示例：</h3><p>规则扫描场景：扫描代码中的 github token，如果token以明文形式写在源码文件中，会造成隐私泄露，可能造成严重的安全事故。</p><p>正则表达式：匹配 github token 字符串，根据github token的一般形式，可以推断出正则表达式 ((ghp|gho|ghu|ghs)_[0-9a-zA-Z]{36})。</p>',8),N={class:"custom-container tip"},z=e("p",{class:"custom-container-title"},"提示",-1),F={href:"https://pkg.go.dev/regexp/syntax",target:"_blank",rel:"noopener noreferrer"},S=l('<p>建议先测试好正则表达式是否正确，正则表达式测试网站推荐：http://tool.oschina.net/regex</p><p><img src="'+a+'" alt="填写自定义规则"></p><h3 id="字段解释" tabindex="-1"><a class="header-anchor" href="#字段解释" aria-hidden="true">#</a> 字段解释</h3><p>规则名称、前端展示名称：建议使用单词首字母大写的格式，如 DetectedGithubToken</p><p>规则简述：作为扫描出来到问题标题</p><p>规则参数：</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p><strong>规则参数中的(3)(4)(5)属于新功能，需要将客户端client和工具库TCA-Armory更新到最新版本</strong></p></div>',7),j=e("li",null,[e("p",null,"(1) 参数格式类似ini的格式， 也就是key = value的格式")],-1),q=e("code",null,"regex",-1),w=e("code",null,"regex=((ghp|gho|ghu|ghs)_[0-9a-zA-Z]{36})",-1),Z={href:"https://pkg.go.dev/regexp/syntax",target:"_blank",rel:"noopener noreferrer"},L={href:"http://tool.oschina.net/regex",target:"_blank",rel:"noopener noreferrer"},V=l("<li><p>(3) [可选] <code>regex{N}</code> 参数，只有在已有<code>regex</code>参数情况下生效，用于扩展扫描的正则表达式，其中 N 从1开始计数，例如: <code>regex1=EAAAACZAVC6ygB[0-9A-Za-z]+</code>, <code>regex2=EAAAAZAw4[0-9A-Za-z]+</code>。<code>regex{N}</code>和<code>regex</code>的表达式均为<strong>或</strong>关系，每一个匹配结果上报一个问题。</p></li><li><p>(4) [可选] <code>regex_not</code> 参数，用于指定正则过滤表达式，例如: <code>regex_not=(?i)example</code>。可以对(2)(3)中regex匹配的字符串进行筛选，如果匹配则过滤该结果，不予上报。</p></li><li><p>(5) [可选] <code>regex_not{N}</code> 参数，只有在已有<code>regex_not</code>参数情况下生效，用于扩展正则过滤表达式，其中 N 从1开始计数，例如: <code>regex_not1=(?i)test</code>, <code>regex_not2=(?i)fake</code>。<code>regex_not{N}</code>和<code>regex_not</code>的表达式均为<strong>或</strong>关系。</p></li><li><p>(6) [必选] <code>msg</code> 参数，用于展现issue说明， 例如: <code>msg=检测到高危函数%s，建议替换。</code></p><ul><li><p>msg中的“%s”使用regex中的group（用“()&quot;括起来的部分）一一匹配，单个%s默认为整个regex匹配的字符串</p></li><li><p>如果regex没有定义group，则msg最多有一个%s, 并由整个regex匹配的字符串替代</p></li><li><p>如果msg里没有包含“%s”，则直接显示msg</p></li><li><p>如果msg没有提供，则会给出默认信息</p></li></ul></li><li><p>(7) [可选] <code>ignore_comment</code> 参数，用于指定是否忽略注释代码，可选值：True、true、False、false 。例如: <code>ignore_comment=True</code>, 默认是False</p></li><li><p>(8) [可选] <code>file_scan</code> 参数，用于指定是否扫描文件名称，可选值：True、true、False、false 。例如: <code>file_scan=True</code>, 默认是False</p></li><li><p>(9) [可选] <code>include</code> 参数，用于指定只扫描的文件匹配范围，基于相对路径，使用通配符格式，多项使用英文分号（;）隔开。例如: <code>include=src/test;src/main.*;*.cpp</code></p></li>",7),G=e("p",null,[o("(10) [可选] "),e("code",null,"exclude"),o(" 参数，用于指定不扫描的文件匹配范围，格式同include参数，例如: "),e("code",null,"exclude=tests;*.json")],-1),D=e("code",null,"exclude",-1),I=e("code",null,"include",-1),M={href:"https://pkg.go.dev/path/filepath#Match",target:"_blank",rel:"noopener noreferrer"},H=e("code",null,"**",-1),J=e("strong",null,"默认匹配前后目录",-1),K=l("<blockquote><ol><li><code>exclude=*.py</code> 会忽略以下文件: main.py, src/main.py, main.py/install.sh</li><li><code>exclude=tests</code> 会忽略以下文件: tests/test.py, a/tests/b/test.py</li><li><code>include=main.*</code> 会只扫描以下文件: src/main.py, app/main.go</li><li><code>include=src</code>且<code>exclude=src/lib</code> 会只扫描以下文件: src/main.py, src/project/proj.py; 忽略以下文件: src/lib/lib.py, src/lib/package/pack.js</li></ol></blockquote>",1),O=e("li",null,[e("p",null,[o("(11)[可选] "),e("code",null,"match_group"),o(" 参数，用于指定正则匹配的分组，数值不能大于正则匹配分组数，例如： "),e("code",null,"regex=(aws_account_id)\\s{0,50}(:|=>|=)\\s{0,50}([0-9]{12})"),e("code",null,"match_group=3"),o("，匹配到第3个分组"),e("code",null,"([0-9]{12})")])],-1),P=e("p",null,[o("(12)[可选] "),e("code",null,"entropy"),o(" 参数，用于指定正则匹配结果的最小信息熵，例如："),e("code",null,"entropy=3"),o("，熵不大于3的匹配结果将被过滤")],-1),Q={href:"https://zh.wikipedia.org/wiki/%E7%86%B5_(%E4%BF%A1%E6%81%AF%E8%AE%BA)",target:"_blank",rel:"noopener noreferrer"},U=e("h3",{id:"_4-将自定义规则添加到项目分析方案中",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-将自定义规则添加到项目分析方案中","aria-hidden":"true"},"#"),o(" 4. 将自定义规则添加到项目分析方案中")],-1),W=e("p",null,"进入 代码分析 - 分析方案 - 代码检查 - 自定义规则包 - 查看详细规则，添加规则。",-1),X=e("p",null,[e("img",{src:d,alt:"点击自定义规则包"})],-1),Y=e("p",null,[e("img",{src:h,alt:"添加规则"})],-1);function $(ee,oe){const n=s("ExternalLinkIcon"),r=s("RouterLink");return p(),u("div",null,[x,e("ul",null,[m,f,A,k,b,e("li",null,[e("em",null,[o("只支持"),e("a",y,[o("go的正则语法"),t(n)])])])]),E,T,e("ol",null,[e("li",null,[o("属于增强分析模块，需要先"),t(r,{to:"/zh/quickStarted/enhanceDeploy.html"},{default:c(()=>[o("部署CLS")]),_:1})]),C,v]),R,e("p",null,[o("规则权限详见"),t(r,{to:"/zh/guide/%E5%B7%A5%E5%85%B7%E7%AE%A1%E7%90%86/%E8%87%AA%E5%AE%9A%E4%B9%89%E8%A7%84%E5%88%99.html"},{default:c(()=>[o("自定义规则权限说明")]),_:1})]),B,e("div",N,[z,e("p",null,[e("strong",null,[o("只支持go正则语法: "),e("a",F,[o("regexp"),t(n)])])])]),S,e("ul",null,[j,e("li",null,[e("p",null,[o("(2) [必选] "),q,o(" 参数，用于指定扫描的正则表达式，例如: "),w,o("。"),e("strong",null,[o("只支持go正则语法: "),e("a",Z,[o("regexp"),t(n)])]),o("。建议先测试好正则表达式是否正确，正则表达式测试网站推荐："),e("a",L,[o("http://tool.oschina.net/regex"),t(n)])])]),V,e("li",null,[G,e("blockquote",null,[e("p",null,[o("路径过滤（"),D,o(", "),I,o("）采用Glob-Style的匹配模式，详见 "),e("a",M,[o("Go-filepath-Match"),t(n)]),o("， 除了 "),H,o(" 用来匹配零或多个目录，本工具会"),J,o("。举例:")]),K])]),O,e("li",null,[P,e("blockquote",null,[e("p",null,[o("信息熵："),e("a",Q,[o("熵(信息论)"),t(n)]),o(" 可用于敏感信息（密钥、token）的检测 含义：可以理解为字符串的混乱程度，字符越随机，熵越大。因此，设置合适的熵，可以过滤掉一些误报或者人为测试用例。")])])])]),U,W,X,Y])}const re=_(g,[["render",$],["__file","TCA-Armory-R.html.vue"]]);export{re as default};
