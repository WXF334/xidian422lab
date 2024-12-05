<template><div><h1 id="下载并构建openhitls" tabindex="-1"><a class="header-anchor" href="#下载并构建openhitls"><span>下载并构建OpenHiTLS</span></a></h1>
<h2 id="下载并安装openeuler系统" tabindex="-1"><a class="header-anchor" href="#下载并安装openeuler系统"><span>下载并安装openEuler系统</span></a></h2>
<p><a href="https://www.openeuler.org/zh/download/?version=openEuler%2024.03%20LTS" target="_blank" rel="noopener noreferrer">官方下载地址</a></p>
<h3 id="使用vmware安装openeuler" tabindex="-1"><a class="header-anchor" href="#使用vmware安装openeuler"><span>使用vmware安装openEuler</span></a></h3>
<p>新建虚拟机时注意以下步骤：</p>
<ul>
<li>选择镜像文件</li>
</ul>
<p><img src="@source/.vuepress/public/新建虚拟机1.png" alt=""></p>
<ul>
<li>选择linux内核版本</li>
</ul>
<p><img src="@source/.vuepress/public/新建虚拟机2.png" alt=""></p>
<h2 id="构建及安装指导" tabindex="-1"><a class="header-anchor" href="#构建及安装指导"><span>构建及安装指导</span></a></h2>
<h3 id="_1-准备构建环境" tabindex="-1"><a class="header-anchor" href="#_1-准备构建环境"><span>1. 准备构建环境</span></a></h3>
<p>检查系统中构建工具是否已安装，并能正常使用。</p>
<table>
<thead>
<tr>
<th><strong>名称</strong></th>
<th><strong>推荐版本</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Gcc</td>
<td>&gt;=7.3.0</td>
<td>Linux</td>
</tr>
<tr>
<td>Python</td>
<td>&gt;=3.5</td>
<td>Linux</td>
</tr>
<tr>
<td>CMake</td>
<td>&gt;=3.16</td>
<td>Linux</td>
</tr>
<tr>
<td>Sctp</td>
<td>无版本限制</td>
<td>Linux</td>
</tr>
</tbody>
</table>
<h4 id="查看命令" tabindex="-1"><a class="header-anchor" href="#查看命令"><span>查看命令</span></a></h4>
<p>当前openEuler24.03版本系统自带Gcc和Python，CMake和Sctp需要自行安装，命令如下：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">gcc <span class="token parameter variable">-v</span></span>
<span class="line"></span>
<span class="line">python3 <span class="token parameter variable">-v</span></span>
<span class="line"></span>
<span class="line"><span class="token function">sudo</span> dnf <span class="token function">install</span> cmake</span>
<span class="line">cmake <span class="token parameter variable">-version</span></span>
<span class="line"></span>
<span class="line"><span class="token function">sudo</span> dnf <span class="token function">install</span> lksctp*</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-准备源码" tabindex="-1"><a class="header-anchor" href="#_2-准备源码"><span>2. 准备源码</span></a></h3>
<p>使用git submodule的方式下载，可以直接下载源码和依赖的Securec库，下载命令如下：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> clone --recurse-submodules https://gitcode.com/openhitls/openhitls.git</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-openhitls构建及安装" tabindex="-1"><a class="header-anchor" href="#_3-openhitls构建及安装"><span>3. openHiTLS构建及安装</span></a></h3>
<p>进入openHiTLS后代码目录结构如下：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">使用tree <span class="token parameter variable">-L</span> <span class="token number">1</span>查看目录结构，如下：</span>
<span class="line"></span>
<span class="line">└── openHiTLS</span>
<span class="line">   ├── bsl</span>
<span class="line">   ├── CMakeLists.txt</span>
<span class="line">   ├── config</span>
<span class="line">   ├── configure.py</span>
<span class="line">   ├── crypto</span>
<span class="line">   ├── docs</span>
<span class="line">   ├── include</span>
<span class="line">   ├── LICENSE</span>
<span class="line">   ├── platform</span>
<span class="line">   ├── README-en.md</span>
<span class="line">   ├── README.md</span>
<span class="line">   ├── script</span>
<span class="line">   ├── testcode</span>
<span class="line">   ├── tls</span>
<span class="line">   └── x509</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中：</p>
<ul>
<li>bsl：存放基础功能相关代码；</li>
<li>CMakeLists.txt：构建入口文件</li>
<li>configure.py：提供构建配置命令行功能；</li>
<li>config、script：存放构建相关脚本；</li>
<li>crypto：存放密码学算法能力相关代码；</li>
<li>platform：存放其他依赖的代码；</li>
<li>testcode：存放测试工程类代码。</li>
<li>tls：存放安全传输相关代码；</li>
<li>x509：存放x509证书功能相关代码；</li>
</ul>
<p><strong>源码构建调用CMake进行构建，具体方法下面介绍。</strong></p>
<h4 id="_3-1-cmake构建" tabindex="-1"><a class="header-anchor" href="#_3-1-cmake构建"><span>3.1 CMake构建</span></a></h4>
<p>openHiTLS提供CMake构建方式，可通过configure.py进行配置，之后建议新建build目录用于存放构建过程中的产生的临时文件，进入build目录使用“cmake .. &amp;&amp; make”的方式执行构建。configure.py的配置可以通过<code v-pre>python3 ./configure.py –help</code>查询。
CMake构建的总体执行步骤如下：</p>
<ul>
<li>创建build文件夹存放生成文件，使用python执行配置文件生成modules.cmake文件。
configure.py脚本会直接基于顶层的compile.json和feature.json配置文件修改已有配置。</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">cd</span> openHiTLS</span>
<span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ./build</span>
<span class="line"><span class="token builtin class-name">cd</span> ./build</span>
<span class="line">python3 <span class="token punctuation">..</span>/configure.py <span class="token parameter variable">--system</span> linux <span class="token parameter variable">--bits</span> <span class="token number">64</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>  python执行结果如下：</p>
<p><img src="@source/.vuepress/public/python编译.png" alt=""></p>
<ul>
<li>openHiTLS依赖于libboundscheck库，在之前的准备源码阶段已经一并下载。现在进入Secure_C文件夹中编译，生成动态库libboundscheck.so并放到库文件目录下</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/platform/Secure_C</span>
<span class="line"><span class="token function">make</span> <span class="token assign-left variable">CC</span><span class="token operator">=</span>gcc</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">cp</span> ./lib/libboundscheck.so /usr/local/lib/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>  make编译结果如下：</p>
<p><img src="@source/.vuepress/public/makeCC=gcc.png" alt=""></p>
<ul>
<li>回到build目录下进行make编译</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/build</span>
<span class="line"><span class="token function">make</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>  make编译结果如下：</p>
<p><img src="@source/.vuepress/public/make成功.png" alt=""></p>
<p>构建结果会输出在openHiTLS/build目录下。</p>
<h4 id="_3-2-构建结果安装" tabindex="-1"><a class="header-anchor" href="#_3-2-构建结果安装"><span>3.2 构建结果安装</span></a></h4>
<ul>
<li>安装openHiTLS的构建结果只需要输入如下命令：</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>  至此，构建完成：</p>
<p><img src="@source/.vuepress/public/makeinstall.png" alt=""></p>
</div></template>


