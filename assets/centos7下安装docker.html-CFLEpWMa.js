import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,a as e}from"./app-DevuHzse.js";const l={},n=e(`<h1 id="centos7下安装docker" tabindex="-1"><a class="header-anchor" href="#centos7下安装docker"><span>centos7下安装docker</span></a></h1><h3 id="一、查看内核是否符合安装要求" tabindex="-1"><a class="header-anchor" href="#一、查看内核是否符合安装要求"><span>一、查看内核是否符合安装要求</span></a></h3><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">uname </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">r</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><table><thead><tr><th>centos版本</th><th>内核要求</th></tr></thead><tbody><tr><td>centos 7 x64</td><td>3.10以上</td></tr><tr><td>centos 6.5+ x64</td><td>2.6.32—431以上</td></tr></tbody></table><h3 id="二、卸载旧版本" tabindex="-1"><a class="header-anchor" href="#二、卸载旧版本"><span>二、卸载旧版本</span></a></h3><p>docker旧版本的名称为docker、docker-engine或者docker-io</p><p>如果之前安装过旧版本的要先卸载旧版本，才能安装新版本</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">sudo yum remove docker \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">				docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">client \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">				docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">client</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">latest \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">				docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">common \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">				docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">latest \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">				docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">latest</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">logrotate \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">				docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">logrotate \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">				docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">selinux \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">				docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">engine</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">selinux \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">				docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">engine \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">				docker.io</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、安装依赖包" tabindex="-1"><a class="header-anchor" href="#三、安装依赖包"><span>三、安装依赖包</span></a></h3><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">sudo yum install </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">y yum</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">utils \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">device</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">mapper</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">persistent</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">data \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">lvm2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四、配置镜像仓库" tabindex="-1"><a class="header-anchor" href="#四、配置镜像仓库"><span>四、配置镜像仓库</span></a></h3><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#添加docker官方仓库</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">sudo yum</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">config</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">manager \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">	--</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">add-repo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	https:</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">//</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">dowmload.docker.com</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">linux</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">centos</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">ce.repo</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#添加阿里云镜象仓库</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">sudo yum</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">config</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">manager \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">	--</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">add-repo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	https:</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">//</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">mirrors.aliyun.com</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">ce</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">linux</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">centos</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">ce.repo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="五、安装docker" tabindex="-1"><a class="header-anchor" href="#五、安装docker"><span>五、安装docker</span></a></h3><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">sudo yum list docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">ce </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">showduuplicates | sort </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">r</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#列出可以安装的docker版本</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">sudo yum install docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">ce</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#下载最新版本</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">sudo ymu install </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">y docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">ce</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">18.03</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">ce</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">el7.centos</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#安装指定版本</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="六、启动docker" tabindex="-1"><a class="header-anchor" href="#六、启动docker"><span>六、启动docker</span></a></h3><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#启动</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">sudo systemctl start docker</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">sudo service start docker</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#停止</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">sudo systemctl stop docker</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#重启</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">sudo systemctl restart docker</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#检查docker运行是否正常</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">sudo docker run hello</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">world</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="七、检查docker是否安装成功" tabindex="-1"><a class="header-anchor" href="#七、检查docker是否安装成功"><span>七、检查docker是否安装成功</span></a></h3><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#查看docker安装版本号</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">decker </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="八、卸载docker" tabindex="-1"><a class="header-anchor" href="#八、卸载docker"><span>八、卸载docker</span></a></h3><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">sudo yum remove deocker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">ce</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">sudo rm </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">rf </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">lib</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">docker</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),t=[n];function h(k,d){return a(),i("div",null,t)}const c=s(l,[["render",h],["__file","centos7下安装docker.html.vue"]]),o=JSON.parse(`{"path":"/posts/linux/centos7%E4%B8%8B%E5%AE%89%E8%A3%85docker.html","title":"centos7下安装docker","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2024-08-22T00:00:00.000Z","category":["Linux"],"tag":["docker"],"description":"centos7下安装docker 一、查看内核是否符合安装要求 二、卸载旧版本 docker旧版本的名称为docker、docker-engine或者docker-io 如果之前安装过旧版本的要先卸载旧版本，才能安装新版本 三、安装依赖包 四、配置镜像仓库 五、安装docker 六、启动docker 七、检查docker是否安装成功 八、卸载docker","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/linux/centos7%E4%B8%8B%E5%AE%89%E8%A3%85docker.html"}],["meta",{"property":"og:site_name","content":"Clsld 's blog"}],["meta",{"property":"og:title","content":"centos7下安装docker"}],["meta",{"property":"og:description","content":"centos7下安装docker 一、查看内核是否符合安装要求 二、卸载旧版本 docker旧版本的名称为docker、docker-engine或者docker-io 如果之前安装过旧版本的要先卸载旧版本，才能安装新版本 三、安装依赖包 四、配置镜像仓库 五、安装docker 六、启动docker 七、检查docker是否安装成功 八、卸载docker"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-22T16:58:49.000Z"}],["meta",{"property":"article:author","content":"clsld"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:published_time","content":"2024-08-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-22T16:58:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"centos7下安装docker\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-22T16:58:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"clsld\\",\\"url\\":\\"https://github.com/coderclsld\\"}]}"]]},"headers":[{"level":3,"title":"一、查看内核是否符合安装要求","slug":"一、查看内核是否符合安装要求","link":"#一、查看内核是否符合安装要求","children":[]},{"level":3,"title":"二、卸载旧版本","slug":"二、卸载旧版本","link":"#二、卸载旧版本","children":[]},{"level":3,"title":"三、安装依赖包","slug":"三、安装依赖包","link":"#三、安装依赖包","children":[]},{"level":3,"title":"四、配置镜像仓库","slug":"四、配置镜像仓库","link":"#四、配置镜像仓库","children":[]},{"level":3,"title":"五、安装docker","slug":"五、安装docker","link":"#五、安装docker","children":[]},{"level":3,"title":"六、启动docker","slug":"六、启动docker","link":"#六、启动docker","children":[]},{"level":3,"title":"七、检查docker是否安装成功","slug":"七、检查docker是否安装成功","link":"#七、检查docker是否安装成功","children":[]},{"level":3,"title":"八、卸载docker","slug":"八、卸载docker","link":"#八、卸载docker","children":[]}],"git":{"createdTime":1675147913000,"updatedTime":1724345929000,"contributors":[{"name":"clsld","email":"807686672@qq.com","commits":1}]},"readingTime":{"minutes":1.04,"words":311},"filePathRelative":"posts/linux/centos7下安装docker.md","localizedDate":"August 22, 2024","excerpt":"\\n<h3>一、查看内核是否符合安装要求</h3>\\n<div class=\\"language-powershell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"powershell\\" data-title=\\"powershell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">uname </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">-</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">r</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{c as comp,o as data};
