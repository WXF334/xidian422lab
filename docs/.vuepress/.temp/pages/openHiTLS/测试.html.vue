<template><div><h1 id="测试指南" tabindex="-1"><a class="header-anchor" href="#测试指南"><span>测试指南</span></a></h1>
<p>在构建完OpenHiTLS后，执行测试代码。测试工程依赖编译源码，参考《下载并构建OpenHiTLS》准备构建源码编译依赖的环境等，确保源码能够得到正确编译。</p>
<h2 id="测试代码目录结构" tabindex="-1"><a class="header-anchor" href="#测试代码目录结构"><span>测试代码目录结构</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">./testcode/</span>
<span class="line">├── CMakeLists.txt</span>
<span class="line">├── common</span>
<span class="line">│   ├── execute_base.c</span>
<span class="line">│   └── execute_test.c</span>
<span class="line">├── demo</span>
<span class="line">├── framework</span>
<span class="line">│   ├── crypto</span>
<span class="line">│   ├── gen_test</span>
<span class="line">│   ├── include</span>
<span class="line">│   ├── process</span>
<span class="line">│   ├── stub</span>
<span class="line">│   └── tls</span>
<span class="line">├── output</span>
<span class="line">├── script</span>
<span class="line">│   ├── all_mini_test.sh</span>
<span class="line">│   ├── build_hitls.sh</span>
<span class="line">│   ├── build_sdv.sh</span>
<span class="line">│   ├── execute_sdv.sh</span>
<span class="line">│   └── mini_build_test.sh</span>
<span class="line">├── sdv</span>
<span class="line">│   ├── build</span>
<span class="line">│   ├── CMakeLists.txt</span>
<span class="line">│   ├── log</span>
<span class="line">│   ├── report</span>
<span class="line">│   └── testcase</span>
<span class="line">└── testdata</span>
<span class="line">    ├── cert</span>
<span class="line">    └── tls</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中：</p>
<ul>
<li>common：公共类测试框架代码</li>
<li>demo：openHiTLS功能测试demo</li>
<li>framework：openHiTLS测试用例的框架代码</li>
<li>output：用例测试结果及过程文件输出目录</li>
<li>script：测试脚本类代码目录</li>
<li>sdv：openHiTLS功能场景测试用例代码</li>
<li>testdata：存放测试类数据等</li>
</ul>
<h2 id="功能测试执行指导" tabindex="-1"><a class="header-anchor" href="#功能测试执行指导"><span>功能测试执行指导</span></a></h2>
<h3 id="_1-测试框架说明" tabindex="-1"><a class="header-anchor" href="#_1-测试框架说明"><span>1. 测试框架说明</span></a></h3>
<p>使用社区开发的测试框架，提供公共的配置和方法以便社区开发者进行测试代码的编写和执行。一个测试单元由function文件（.c）和data（.data）文件组成，分别保存测试函数和测试数据。</p>
<p><img src="@source/.vuepress/public/测试框架.jpg" alt=""></p>
<h3 id="_2-脚本参数说明" tabindex="-1"><a class="header-anchor" href="#_2-脚本参数说明"><span>2. 脚本参数说明</span></a></h3>
<table>
<thead>
<tr>
<th><strong>命令</strong></th>
<th><strong>含义</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>bash build_hitls.sh</td>
<td>编译全量源码。</td>
</tr>
<tr>
<td>bash build_sdv.sh</td>
<td>编译全量测试代码。</td>
</tr>
<tr>
<td>bash execute_sdv.sh</td>
<td>执行测试用例。</td>
</tr>
</tbody>
</table>
<ul>
<li>build_hitls.sh脚本参数说明</li>
</ul>
<table>
<thead>
<tr>
<th><strong>脚本参数</strong></th>
<th><strong>执行方式</strong></th>
<th><strong>参数说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>gcov</td>
<td>bash build_hitls.sh gcov</td>
<td>开启获取覆盖率能力。</td>
</tr>
<tr>
<td>debug</td>
<td>bash build_hitls.sh debug</td>
<td>开启debug调试能力。</td>
</tr>
<tr>
<td>asan</td>
<td>bash build_hitls.sh asan</td>
<td>开启内存监测能力。</td>
</tr>
</tbody>
</table>
<ul>
<li>build_sdv.sh脚本参数说明</li>
</ul>
<table>
<thead>
<tr>
<th><strong>脚本参数</strong></th>
<th><strong>执行方式</strong></th>
<th><strong>参数说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>--help或-h</td>
<td>bash build_sdv.sh --help</td>
<td>获取帮助信息。</td>
</tr>
<tr>
<td>no-crypto</td>
<td>bash build_sdv.sh no-crypto</td>
<td>裁剪掉crypto模块用例。</td>
</tr>
<tr>
<td>no-bsl</td>
<td>bash build_sdv.sh no-bsl</td>
<td>裁剪掉bsl模块用例。</td>
</tr>
<tr>
<td>verbose</td>
<td>bash build_sdv.sh verbose</td>
<td>显示构建过程详细信息。</td>
</tr>
<tr>
<td>gcov</td>
<td>bash build_sdv.sh gcov</td>
<td>开启获取覆盖率能力。</td>
</tr>
<tr>
<td>asan</td>
<td>bash build_sdv.sh asan</td>
<td>开启内存监测能力 。</td>
</tr>
<tr>
<td>big-endian</td>
<td>bash build_sdv.sh big-endian</td>
<td>大端环境编译选项。</td>
</tr>
<tr>
<td>run-tests</td>
<td>bash build_sdv.sh run-tests=xxx1xxx2xxx3</td>
<td>编译指定测试套。</td>
</tr>
</tbody>
</table>
<ul>
<li>execute_sdv.sh脚本参数说明</li>
</ul>
<table>
<thead>
<tr>
<th><strong>脚本参数</strong></th>
<th><strong>执行方式</strong></th>
<th><strong>参数说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>&lt;file name&gt;</td>
<td>bash execute_sdv.sh test_suites_xxx ...</td>
<td>执行指定文件下的所有用例。</td>
</tr>
<tr>
<td>&lt;test name&gt;</td>
<td>bash execute_sdv.sh UT_CRYPTO_xxx SDV_CRYPTO_xxx ...</td>
<td>执行指定用例名用例。</td>
</tr>
</tbody>
</table>
<p>备注：脚本参数可以以组合形式传给脚本，例如：</p>
<ul>
<li>默认方式构建源码：bash build_hitls.sh</li>
<li>源码构建过程中开启asan、debug及覆盖率：bash build_hitls.sh asan gcov debug</li>
<li>测试代码构建过程中开启asan、覆盖率及显示构建详情：bash build_sdv.sh asan gcov verbose</li>
<li>默认方式构建源码：bash build_hitls.sh</li>
<li>默认方式执行全量用例：bash execute_sdv.sh</li>
<li>执行指定的测试集合：bash execute_sdv.sh test_suites_xxx1 test_suites_xxx2</li>
</ul>
<h3 id="_3-用例执行流程" tabindex="-1"><a class="header-anchor" href="#_3-用例执行流程"><span>3. 用例执行流程</span></a></h3>
<p>测试工程主要依赖以下脚本：</p>
<ul>
<li><strong>build_hitls.sh</strong>： 一键式构建源码脚本</li>
<li><strong>build_sdv.sh</strong> ： 一键式构建测试用例脚本</li>
<li><strong>execute_sdv.sh</strong> ： 一键式执行用例脚本</li>
</ul>
<p><img src="@source/.vuepress/public/测试脚本流程.jpg" alt=""></p>
<p>依次执行以下命令</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/testcode/script/</span>
<span class="line"><span class="token function">bash</span> build_hitls.sh</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/.vuepress/public/build_hitls.png" alt=""></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">bash</span> build_sdv.sh</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="@source/.vuepress/public/build_sdv.png" alt=""></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">bash</span> execute_sdv.sh</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="@source/.vuepress/public/execute_sdv.png" alt=""></p>
<p>测试通过</p>
</div></template>


