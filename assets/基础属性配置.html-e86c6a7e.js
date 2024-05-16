import{_ as t,o,c as e,e as n}from"./app-ec953868.js";const s={},r=n('<h1 id="基础属性配置" tabindex="-1"><a class="header-anchor" href="#基础属性配置" aria-hidden="true">#</a> 基础属性配置</h1><ul><li><p><strong>方案名称</strong></p><p>用于标示一个方案，每个方案名称都是唯一的。</p></li><li><p><strong>分析语言</strong></p><p>用于指明该方案是针对代码库何种语言进行分析。初次创建分析方案时会根据语言初始化分析方案相关配置。</p></li><li><p><strong>运行环境</strong></p><p>用于将任务分配到指定的环境节点机器上执行代码分析，需考虑项目在对应环境的节点机器上能否正常执行。</p></li><li><p><strong>环境变量</strong></p><p>每行 key-value 形式，非必填项。</p><ul><li><p><strong>可用于指定特殊编译环境</strong>：如机器有多个 JDK 或者 gradle 环境，项目编译需指定 JDK 或 gradle 版本的可以设定相应环境变量。</p></li><li><p><strong>可用于工具传递参数</strong>： 如<code>ESLINT_MAX_OLD_SPACE_SIZE=4096</code>配置 Js 内存大小</p></li><li><p><strong>可用于指定项目配置</strong>，如<code>PYTHON_VERSION=2</code> 指定为 python2 项目</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>对 Python 的分析默认采用 Python3，如果需要分析 Python2 请在环境变量中设置：PYTHON_VERSION=2</p></div></li></ul></li></ul>',2),l=[r];function i(p,c){return o(),e("div",null,l)}const a=t(s,[["render",i],["__file","基础属性配置.html.vue"]]);export{a as default};
