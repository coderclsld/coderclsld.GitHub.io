import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as n}from"./app-C_wt19t6.js";const l={};function t(h,i){return n(),a("div",null,i[0]||(i[0]=[e(`<h1 id="redis的安装与部署" tabindex="-1"><a class="header-anchor" href="#redis的安装与部署"><span>redis的安装与部署</span></a></h1><h2 id="_1、redis的安装" tabindex="-1"><a class="header-anchor" href="#_1、redis的安装"><span>1、redis的安装</span></a></h2><h3 id="下载安装包" tabindex="-1"><a class="header-anchor" href="#下载安装包"><span>下载安装包</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">wget</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> http</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//download.redis.io/releases/redis-4.0.6.tar.gz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="解压" tabindex="-1"><a class="header-anchor" href="#解压"><span>解压</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">tar</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">zxvf</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> redis</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4.0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.6.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">tar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">gz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="yum安装gcc依赖" tabindex="-1"><a class="header-anchor" href="#yum安装gcc依赖"><span>yum安装gcc依赖</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">yum</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> install</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> gcc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="跳转到redis解压目录下编译安装" tabindex="-1"><a class="header-anchor" href="#跳转到redis解压目录下编译安装"><span>跳转到redis解压目录下编译安装</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">make</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> make</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> install</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2、启动redis" tabindex="-1"><a class="header-anchor" href="#_2、启动redis"><span>2、启动redis</span></a></h2><p>切换到安装后的redis目录下，里面有redis.conf文件（redis的配置文件），src目录中有很多redis命令</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//进入src目录运行redis提供的命令启动redis和开启客户端</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">cd src</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//启动redis服务器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">redis</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">server</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//启动redis客户端，就是连接redis服务器来看和操作redis内存的数据的非图形化client</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">redis</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">cli</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、远程连接配置" tabindex="-1"><a class="header-anchor" href="#_3、远程连接配置"><span>3、远程连接配置</span></a></h2><p>远程连接配置要先配置一下redis密码和一些命令</p><p>跳出src目录，可以看到redis.conf文件，下面在这个文件里面进行配置</p><blockquote><p>按ESC键，在底下窗口的打上，/加上想要搜索的关键词，vim就会找到文件的相同关键字,按enter键可以跳到下一个关键字。</p><figure><img src="https://blog-1300924781.cos.ap-guangzhou.myqcloud.com/blog/image-20210209233639879.png" alt="image-20210209233639879" tabindex="0" loading="lazy"><figcaption>image-20210209233639879</figcaption></figure></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//vim打开redis.conf,修改redis.conf文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">vim</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> redis</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">conf</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//以守护进程模式运行（即可以自己后台运行），找到daemonize</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">将 </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">daemonize</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> no</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 修改为 </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">daemonize</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> yes</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//找到 bind 127.0.0.1，将其删掉</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//关闭保护模式，找到protected-mode</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">将 </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">protected</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">mode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> yes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 修改为 </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">protected</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">mode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> no</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//设置密码,找到requirepass</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">将</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">requirepass</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> foobared</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 修改为 </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">requirepass</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 123456</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//123456是我自己设置的密码，可以自己设置</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开6379端口才可以连接访问得到</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">iptables</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">I</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> INPUT</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> tcp</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">m</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> state</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> --</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">state</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> NEW</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">m</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> tcp</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> --</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">dport</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 6379</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">j</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> ACCEPT</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>测试密码有没设置成功的话，可以进入redis的src目录运行</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">redis</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">cli</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//会出现127.0.0.1:6379&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//在其中输入set a 1会报下面的错误</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//(error) NOAUTH Authentication required.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//这就说明我们密码设置成功了，客户端让我们输入密码才能据需折行的操作</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">输入auth </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">123456</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">即我们刚刚设置的密码，会显示OK，说明我们密码是设置成功的，并且和我们设置的一致</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、远程连接" tabindex="-1"><a class="header-anchor" href="#_4、远程连接"><span>4、远程连接</span></a></h2><p>上面配置好的话，就可以试试远程连接啦！！！</p><p>如果没有连接成功，我也是被坑了好几次，可能有一下几种情况：</p><h3 id="一、服务器端口没有打开" tabindex="-1"><a class="header-anchor" href="#一、服务器端口没有打开"><span>一、服务器端口没有打开</span></a></h3><p>仅仅使用iptables可能没有起效过，例如我是腾讯云服务器，我还需要在控制台里面打开6379端口，才能远程连接到redis服务器</p><h3 id="二、有时连接成功了但是长时间不用的话又会连接不上" tabindex="-1"><a class="header-anchor" href="#二、有时连接成功了但是长时间不用的话又会连接不上"><span>二、有时连接成功了但是长时间不用的话又会连接不上</span></a></h3><p>可以先ps -aux|grep redis，看看有没有redis-server在运行，如果有可能是端口又发疯了。</p><p>运行iptables -I INPUT 1 -p tcp -m state --state NEW -m tcp --dport 6379 -j ACCEPT 试试。</p><p>如果没有就是被服务器厂家杀后台，可以重新运行redis-server</p><h4 id="针对程序被服务器杀死-有以下几种解决方法" tabindex="-1"><a class="header-anchor" href="#针对程序被服务器杀死-有以下几种解决方法"><span>针对程序被服务器杀死，有以下几种解决方法：</span></a></h4><h5 id="一、使用nohup执行" tabindex="-1"><a class="header-anchor" href="#一、使用nohup执行"><span>一、使用nohup执行</span></a></h5><h6 id="nohup可以使后面的命令不会响应挂断-sighup-信号。也就是说-通过远程登录执行nohup命令后-即使退出登录后-程序还是会正常执行。通常情况下-nohup命令最后会跟上-字符-表示将这个命令放至后台执行-这样才能真正做到将这个命令放至后台持续的执行。" tabindex="-1"><a class="header-anchor" href="#nohup可以使后面的命令不会响应挂断-sighup-信号。也就是说-通过远程登录执行nohup命令后-即使退出登录后-程序还是会正常执行。通常情况下-nohup命令最后会跟上-字符-表示将这个命令放至后台执行-这样才能真正做到将这个命令放至后台持续的执行。"><span><strong>nohup可以使后面的命令不会响应挂断（SIGHUP）信号。也就是说，通过远程登录执行nohup命令后，即使退出登录后，程序还是会正常执行。通常情况下，nohup命令最后会跟上&amp;字符，表示将这个命令放至后台执行，这样才能真正做到将这个命令放至后台持续的执行。</strong></span></a></h6><h6 id="例如本来是java-jar-xxx-jar-现在是nohub-java-jar-xxx-jar" tabindex="-1"><a class="header-anchor" href="#例如本来是java-jar-xxx-jar-现在是nohub-java-jar-xxx-jar"><span><strong>例如本来是java -jar xxx.jar，现在是nohub java -jar xxx.jar &amp;</strong></span></a></h6><h6 id="那么这样-服务器上的程序就会在后台运行了-不会触发消除机制。" tabindex="-1"><a class="header-anchor" href="#那么这样-服务器上的程序就会在后台运行了-不会触发消除机制。"><span><strong>那么这样，服务器上的程序就会在后台运行了，不会触发消除机制。</strong></span></a></h6><h5 id="二、使用screen执行" tabindex="-1"><a class="header-anchor" href="#二、使用screen执行"><span>二、使用screen执行</span></a></h5><h6 id="linux系统默认没有screen工具-需要先进行安装。" tabindex="-1"><a class="header-anchor" href="#linux系统默认没有screen工具-需要先进行安装。"><span><strong>Linux系统默认没有screen工具，需要先进行安装。</strong></span></a></h6><h6 id="centos系列系统安装命令-yum-install-screen" tabindex="-1"><a class="header-anchor" href="#centos系列系统安装命令-yum-install-screen"><span><strong>CentOS系列系统安装命令：yum install screen</strong></span></a></h6><h6 id="ubuntu-系列系统安装命令-sudo-apt-get-install-screen" tabindex="-1"><a class="header-anchor" href="#ubuntu-系列系统安装命令-sudo-apt-get-install-screen"><span><strong>Ubuntu 系列系统安装命令：sudo apt-get install screen</strong></span></a></h6><h6 id="创建screen窗口-折行命令-screen-s-name-name是自己起的窗口名字-可以随便起" tabindex="-1"><a class="header-anchor" href="#创建screen窗口-折行命令-screen-s-name-name是自己起的窗口名字-可以随便起"><span><strong>创建screen窗口，折行命令：screen -S name，name是自己起的窗口名字，可以随便起</strong></span></a></h6><h6 id="折行完创建窗口命令后-会进入一个新的窗口-现象就是之前的折行命令的文字效果被清空了" tabindex="-1"><a class="header-anchor" href="#折行完创建窗口命令后-会进入一个新的窗口-现象就是之前的折行命令的文字效果被清空了"><span><strong>折行完创建窗口命令后，会进入一个新的窗口，现象就是之前的折行命令的文字效果被清空了</strong></span></a></h6><h6 id="然后你就可以在这个新的窗口折行你要的操作了-即运行程序" tabindex="-1"><a class="header-anchor" href="#然后你就可以在这个新的窗口折行你要的操作了-即运行程序"><span><strong>然后你就可以在这个新的窗口折行你要的操作了，即运行程序</strong></span></a></h6><h6 id="然后退出这个窗口的命令是-先按ctrl-a-然后按d" tabindex="-1"><a class="header-anchor" href="#然后退出这个窗口的命令是-先按ctrl-a-然后按d"><span><strong>然后退出这个窗口的命令是：先按ctrl+a，然后按d</strong></span></a></h6><h6 id="退出后刚刚折行的程序还是会在后台折行-即使关闭了连接也会运行-不会被杀死。" tabindex="-1"><a class="header-anchor" href="#退出后刚刚折行的程序还是会在后台折行-即使关闭了连接也会运行-不会被杀死。"><span><strong>退出后刚刚折行的程序还是会在后台折行，即使关闭了连接也会运行，不会被杀死。</strong></span></a></h6><h6 id="若想回到刚刚的窗口-折行命令-screen-r-d" tabindex="-1"><a class="header-anchor" href="#若想回到刚刚的窗口-折行命令-screen-r-d"><span><strong>若想回到刚刚的窗口，折行命令：screen -r -d</strong></span></a></h6><h6 id="列出在执行的screen窗口-执行命令-screen-ls-会列出所有运行中带有pid的窗口名" tabindex="-1"><a class="header-anchor" href="#列出在执行的screen窗口-执行命令-screen-ls-会列出所有运行中带有pid的窗口名"><span><strong>列出在执行的screen窗口，执行命令：screen -ls，会列出所有运行中带有pid的窗口名</strong></span></a></h6><h6 id="折行screen-r-pid-就可以回到指定的窗口-pid指的是screen-ls列出的指定窗口的pid" tabindex="-1"><a class="header-anchor" href="#折行screen-r-pid-就可以回到指定的窗口-pid指的是screen-ls列出的指定窗口的pid"><span><strong>折行screen -r pid，就可以回到指定的窗口，pid指的是screen -ls列出的指定窗口的pid</strong></span></a></h6><h6 id="关闭指定的窗口进程-杀死-screen-s-进程名-x-quit" tabindex="-1"><a class="header-anchor" href="#关闭指定的窗口进程-杀死-screen-s-进程名-x-quit"><span><strong>关闭指定的窗口进程（杀死）screen -S 进程名 -X quit</strong></span></a></h6><h2 id="_5、设置为服务" tabindex="-1"><a class="header-anchor" href="#_5、设置为服务"><span>5、设置为服务</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/redis</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>下面的命令根据redis的安装目录的位置具体操作</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/redis-5.0.8/redis.conf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/redis/6379.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/redis-5.0.8/utils/redis_init_script</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/init.d/redis_6379</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动&amp;停止</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis_6379.service</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis_6379.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CentOS 6：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis_6379</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis_6379</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是以服务方式启动，原先的redis.conf有修改密码的话，还需要修改脚本<code>/etc/init.d/reds_6379</code>，否则停止服务时会报“无权限”错误</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">REDISPORT</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">6379</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">EXEC</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/bin/redis-server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CLIEXEC</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/bin/redis-cli</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 新增下面一行</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PASSWORD</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">123456</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$CLIEXEC</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> -p </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$REDISPORT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> shutdown</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改为：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$CLIEXEC</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> -a </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$PASSWORD</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> -p </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$REDISPORT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> shutdown</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,63)]))}const p=s(l,[["render",t],["__file","redis的安装和远程连接配置.html.vue"]]),k=JSON.parse(`{"path":"/linux/redis%E7%9A%84%E5%AE%89%E8%A3%85%E5%92%8C%E8%BF%9C%E7%A8%8B%E8%BF%9E%E6%8E%A5%E9%85%8D%E7%BD%AE.html","title":"redis的安装与部署","lang":"en-US","frontmatter":{"date":"2024-08-22T00:00:00.000Z","category":["Linux"],"tag":["redis部署","redis"],"description":"redis的安装与部署 1、redis的安装 下载安装包 解压 yum安装gcc依赖 跳转到redis解压目录下编译安装 2、启动redis 切换到安装后的redis目录下，里面有redis.conf文件（redis的配置文件），src目录中有很多redis命令 3、远程连接配置 远程连接配置要先配置一下redis密码和一些命令 跳出src目录，可以看...","head":[["meta",{"property":"og:url","content":"https://github.com/coderclsld/coderclsld.github.io/linux/redis%E7%9A%84%E5%AE%89%E8%A3%85%E5%92%8C%E8%BF%9C%E7%A8%8B%E8%BF%9E%E6%8E%A5%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"clsld 's blog"}],["meta",{"property":"og:title","content":"redis的安装与部署"}],["meta",{"property":"og:description","content":"redis的安装与部署 1、redis的安装 下载安装包 解压 yum安装gcc依赖 跳转到redis解压目录下编译安装 2、启动redis 切换到安装后的redis目录下，里面有redis.conf文件（redis的配置文件），src目录中有很多redis命令 3、远程连接配置 远程连接配置要先配置一下redis密码和一些命令 跳出src目录，可以看..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog-1300924781.cos.ap-guangzhou.myqcloud.com/blog/image-20210209233639879.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-09T02:58:56.000Z"}],["meta",{"property":"article:author","content":"clsld"}],["meta",{"property":"article:tag","content":"redis部署"}],["meta",{"property":"article:tag","content":"redis"}],["meta",{"property":"article:published_time","content":"2024-08-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-09T02:58:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"redis的安装与部署\\",\\"image\\":[\\"https://blog-1300924781.cos.ap-guangzhou.myqcloud.com/blog/image-20210209233639879.png\\"],\\"datePublished\\":\\"2024-08-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-09T02:58:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"clsld\\",\\"url\\":\\"https://github.com/coderclsld\\"}]}"]]},"headers":[{"level":2,"title":"1、redis的安装","slug":"_1、redis的安装","link":"#_1、redis的安装","children":[{"level":3,"title":"下载安装包","slug":"下载安装包","link":"#下载安装包","children":[]},{"level":3,"title":"解压","slug":"解压","link":"#解压","children":[]},{"level":3,"title":"yum安装gcc依赖","slug":"yum安装gcc依赖","link":"#yum安装gcc依赖","children":[]},{"level":3,"title":"跳转到redis解压目录下编译安装","slug":"跳转到redis解压目录下编译安装","link":"#跳转到redis解压目录下编译安装","children":[]}]},{"level":2,"title":"2、启动redis","slug":"_2、启动redis","link":"#_2、启动redis","children":[]},{"level":2,"title":"3、远程连接配置","slug":"_3、远程连接配置","link":"#_3、远程连接配置","children":[]},{"level":2,"title":"4、远程连接","slug":"_4、远程连接","link":"#_4、远程连接","children":[{"level":3,"title":"一、服务器端口没有打开","slug":"一、服务器端口没有打开","link":"#一、服务器端口没有打开","children":[]},{"level":3,"title":"二、有时连接成功了但是长时间不用的话又会连接不上","slug":"二、有时连接成功了但是长时间不用的话又会连接不上","link":"#二、有时连接成功了但是长时间不用的话又会连接不上","children":[]}]},{"level":2,"title":"5、设置为服务","slug":"_5、设置为服务","link":"#_5、设置为服务","children":[]}],"git":{"createdTime":1675147913000,"updatedTime":1725850736000,"contributors":[{"name":"clsld","email":"807686672@qq.com","commits":1}]},"readingTime":{"minutes":4.44,"words":1333},"filePathRelative":"linux/redis的安装和远程连接配置.md","localizedDate":"August 22, 2024","excerpt":"\\n<h2>1、redis的安装</h2>\\n<h3>下载安装包</h3>\\n<div class=\\"language-javascript line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"javascript\\" data-title=\\"javascript\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">wget</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> http</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">//download.redis.io/releases/redis-4.0.6.tar.gz</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{p as comp,k as data};
