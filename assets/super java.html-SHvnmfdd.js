import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as n,a as s}from"./app-DevuHzse.js";const i={},t=s('<h1 id="super-java" tabindex="-1"><a class="header-anchor" href="#super-java"><span>super java</span></a></h1><h3 id="项目相关" tabindex="-1"><a class="header-anchor" href="#项目相关"><span>项目相关</span></a></h3><p>这个类需要加上@Aspect注解用以声明这是一个切面，以及其他相关切面语法。</p><p>Spring AOP也是对目标类增强，生成代理类。但是与AspectJ的最大区别在于Spring AOP的运行时增强，而AspectJ是编译时增强。使用了Aspect来定义切面,使用Pointcut来定义切入点，使用Advice来定义增强处理。虽然使用了Aspect的Annotation，但是并没有使用它的编译器和织入器。其实现原理是JDK 动态代理，在运行时生成代理类。</p><p>CGLIB（Code Generation Library）它是一个代码生成类库。它可以在运行时候动态是生成某个类的子类。代理模式为要访问的目标对象提供了一种途径，当访问对象时，它引入了一个间接的层。JDK自从1.3版本开始，就引入了动态代理，并且经常被用来动态地创建代理。JDK的动态代理用起来非常简单，唯一限制便是使用动态代理的对象必须实现一个或多个接口。而CGLIB缺不必有此限制。要想Spring AOP 通过CGLIB生成代理，只需要在Spring 的配置文件引入</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">aop</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">aspectj</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">autoproxy proxy</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">target</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">class</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>基于动态代理来实现，默认如果使用接口的，用JDK提供的动态代理实现，如果是方法则使用CGLIB实现Spring AOP需要依赖IOC容器来管理，并且只能作用于Spring容器，使用纯Java代码实现在性能上，由于Spring AOP是基于动态代理来实现的，在容器启动时需要生成代理实例，在方法调用上也会增加栈的深度，使得Spring AOP的性能不如AspectJ的那么好</p><ol><li><strong>编译时织入</strong>，利用ajc编译器替代javac编译器，直接将源文件(java或者aspect文件)编译成class文件并将切面织入进代码。</li><li><strong>编译后织入</strong>，利用ajc编译器向javac编译期编译后的class文件或jar文件织入切面代码。</li><li><strong>加载时织入</strong>，不使用ajc编译器，利用aspectjweaver.jar工具，使用java agent代理在类加载期将切面织入进代码。</li></ol><h3 id="arraylist和linkedlist分别作用于什么场景" tabindex="-1"><a class="header-anchor" href="#arraylist和linkedlist分别作用于什么场景"><span>ArrayList和LinkedList分别作用于什么场景</span></a></h3><p>ArrayList他底层是数组，他在初始化的时候他的数据量是0，当你add的时候默认会变成10，然后他的扩容是每次扩容到他之前的1.5倍即之前长度+之前的长度&gt;&gt;1，他的特性就是他的查询时比较快的，但是他的删除效率是比较低的，他的查询时根据下标去查的，一般就是数组起始地址加上下标的偏移量，就可以迅速的找到元素。</p><p>LinkedList的底层结构是带有头结点和尾结点的双向链表，他提供两种插入方式，一个是头插LinkedFirst，还有尾插是LinkedLast,他的特性是非常适合于一些经常增加结点，删除结点的操作场景，但是他在查询的时候会比较慢，因为他是一个链表，他在查询的时候需要从第一个开始一个个进行比较。</p><h3 id="怎么在线程不安全下使用list" tabindex="-1"><a class="header-anchor" href="#怎么在线程不安全下使用list"><span>怎么在线程不安全下使用List</span></a></h3><h4 id="vector" tabindex="-1"><a class="header-anchor" href="#vector"><span>Vector</span></a></h4><p>他跟ArrayList一样，底层都是一个数组，但是他和ArrayList又有种区别，就是他其中的大部分方法都是被synchronized关键字所修饰的，所以说他是一个线程安全的，他扩容的时候和ArrayList还是有点区别的，他的扩容是以两倍扩容。</p><h4 id="synchronizedlist" tabindex="-1"><a class="header-anchor" href="#synchronizedlist"><span>synchronizedList</span></a></h4><h5 id="copyonwritearraylist" tabindex="-1"><a class="header-anchor" href="#copyonwritearraylist"><span>CopyOnWriteArrayList</span></a></h5><p>不要拖拉，不要想像别的东西，一切都是不切实际的。</p><h3 id="说一下hashmap" tabindex="-1"><a class="header-anchor" href="#说一下hashmap"><span>说一下HashMap</span></a></h3><p>hash他的底层结构在1.7和1.8的时候有点不一样，他在1.7的时候他的底层结构是一个数组加上一个单链表的结构。然后到1.8的时候就改成了数组加上单链表或者是红黑树的结构，然后说一下单链表到红黑树的转换，他的单链表的长度大于等于8时并且他的hash桶大于等于64的时候，他会将单链表转换为红黑树的形式进行存储，他在红黑树的节点数量如果说是&lt;=6的时候会在转成一个单链表，这是他在1.8版本底层结构的一个变化。接着就是这两个版本都相同的特点就是hash桶他的默认数量是16个，他的默认阈值是0.75，这关系到他的扩容，扩容的时候他是会先检测数组里元素的个数，以为他的loadFactor负载因子默认值为0.75，还有他的桶默认是16，那他就会在桶的数量达到16*0.75就是12，当hash桶的数量大于12的时候就会触发扩容机制，他会将之前的hash桶扩容为之前的两倍，他是通过位运算的形式，将原来的hash桶的数量&lt;&lt;1位，然后在把之前在桶里的那些元素在进行一次hash运算后填充到新的hash桶中，hash冲突了的话就按照链表的形式排列起来，当hash桶数量大于64的时候才将桶中链表长度大于8的链表转化为红黑树。</p><p>他不是线程安全的，hashMap在put操作的时候多线程会有数据覆盖的可能,还有一个原因就是hashmap在1.7的时候在put的时候一个resize的过程，因为是它采用一个头插法的，所以这个过程可能会形成一个环形链表导致一直死循环，所以针对这一点hashmap在1.8的时候改成了尾插了。</p><h3 id="针对hashmap线程安全不安全有没有什么解决办法" tabindex="-1"><a class="header-anchor" href="#针对hashmap线程安全不安全有没有什么解决办法"><span>针对hashmap线程安全不安全有没有什么解决办法</span></a></h3><h4 id="synchronizedmap" tabindex="-1"><a class="header-anchor" href="#synchronizedmap"><span>synchronizedmap</span></a></h4><p>可以使用synchronizedMap 方法包装一下 HashMap，可以得到一个线程安全的 HashMap。其原理的话就是在SynchronizedMap内部维护了一个Map对象，还有一个mutex排斥锁，我们在使用synchronizedMap的时候它有两个构造函数，如果传入了mutex参数，则将对象排斥锁赋值为传入的对象，如果没有，则将对象排斥锁赋值7为this，即调用synchronizedMap的对象。然后它里面的方法都是通过synchronized锁住这个mutex对象，然后在锁住的代码块中调用构造函数传入进来的那个map对象的方法来实现并发操作，其原理就是对所有的修改操作都加上 synchronized。</p><h4 id="hashtable" tabindex="-1"><a class="header-anchor" href="#hashtable"><span>hashtable</span></a></h4><p>hashtable是在对所有数据操作的时候就是在get、put、contain、containsKey、remove方法的前面加上synchronized关键字。hashtable相比hashmap是线程安全的，适合在多线程的情况下使用，但是它的效率就不太乐观。</p><h4 id="hashmap和hashtable有什么不一样的地方吗" tabindex="-1"><a class="header-anchor" href="#hashmap和hashtable有什么不一样的地方吗"><span>hashMap和Hashtable有什么不一样的地方吗</span></a></h4><h5 id="hashtable-是不允许键或值为-null-的-hashmap-的键值则都可以为-null。" tabindex="-1"><a class="header-anchor" href="#hashtable-是不允许键或值为-null-的-hashmap-的键值则都可以为-null。"><span>Hashtable 是不允许键或值为 null 的，HashMap 的键值则都可以为 null。</span></a></h5><p>Hashtable在我们调用put方法，put 了一个 value 为 null ，它会直接抛出空指针异常；如果我们 put 了一个 key 为 null ，他也会抛出空指针异常，原因是他put的方法中药计算key的hash值，调用的是key.hashcode方法，如果key为null，那就调不了hashcode方法，所以那就报空指针异常。</p><p>然后这个hashMap他在调用put方法的时候，他最后return的是一个putval方法，在把这个key传进putval方法的时候调用了一个hash()方法对key进行一个处理，在这个hash方法中如果key是null的话就直接return 0。如果我们 put 进来的 value 是 null，由于 HashMap 的 put 方法不会对 value 是否为 null 进行校验，因此一个 HashMap 对象可以存储多个 value 为 null 的键值对。</p><h5 id="初始化容量不同" tabindex="-1"><a class="header-anchor" href="#初始化容量不同"><span>初始化容量不同</span></a></h5><p>HashMap 的初始容量为 16，Hashtable 初始容量为 11。两者的负载因子默认都是 0.75；</p><h5 id="扩容机制不同" tabindex="-1"><a class="header-anchor" href="#扩容机制不同"><span>扩容机制不同</span></a></h5><p>当现有容量大于总容量 * 负载因子时，HashMap 扩容规则为当前容量翻倍，Hashtable 扩容规则为当前容量翻倍 + 1</p><h5 id="迭代器不同" tabindex="-1"><a class="header-anchor" href="#迭代器不同"><span>迭代器不同</span></a></h5><p>HashMap 中的 Iterator 迭代器是 fail-fast 的，而 Hashtable 的 Enumerator 不是 fail-safe 的。所以，当其他线程改变了HashMap 的结构，如：增加、删除元素，会抛出ConcurrentModificationException 异常，而 Hashtable 则不会。</p><p>fail-fast是java集合中的一种机制， 在用迭代器遍历一个集合对象时，如果遍历过程中对集合对象的内容进行了修改（增加、删除、修改），则会抛出Concurrent Modification Exception。</p><p>fail-safe是当我们对集合的结构做出改变的时候，fail-safe 机制不会抛出异常，util.concurrent 包下的容器都是 fail-safe 的，比如 ConcurrentHashMap，可以在多线程下并发使用，并发修改。至于为什么 不会抛出异常呢是因为当集合的结构被改变的时候，fail-safe 机制会复制一份原集合的数据，然后在复制的那份数据上进行遍历。因此，虽然 fail-safe 不会抛出异常，但存在以下缺点：不能保证遍历的是最新内容。也就是说迭代器遍历的是开始遍历那一刻拿到的集合拷贝，在遍历期间原集合发生的修改迭代器是不知道的；复制时需要额外的空间和时间上的开销。</p><h5 id="fail-fast-的原理是什么" tabindex="-1"><a class="header-anchor" href="#fail-fast-的原理是什么"><span>fail-fast 的原理是什么</span></a></h5><p>迭代器在执行 next() 等方法的时候会调用方法，查看 modCount 和 expectedModCount 是否相等，如果不相等则抛出异常终止遍历，如果相等就返回遍历。expectedModcount 这个值在对象被创建的时候就被赋予了一个固定的值即 modCount，也就是说 expectedModcount 是不变的，但是 modCount 在我们对集合的元素的个数做出改变（删除、插入）的时候会被改变（修改操作不会）。那如果在迭代器下次遍历元素的时候，发现 modCount 这个值发生了改变，那么走到这个判断语句时就会抛出异常。</p><h5 id="concurrenthashmap" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap"><span>ConcurrenthashMap</span></a></h5><p>他的底层数据结构在jdk1.7的时候是个分片数组，为了保证线程安全他有一个segment分段锁，这个segment他是继承了ReentrantLock来保证保证他的这个线程安全的，他每次只给一段segment加锁来保证他的并发多，可以支持segment数组大小容量的并发。他先通过一次hash对segment数组取余找到对应的segment，尝试获取锁，失败则自旋直至成功，获取到锁通过hash对hashentry数组进行取余，找到对应的entry对象，遍历链表，查找对应的key值，如果找到则将旧的value直接覆盖，如果没有找到，则添加到链表头部中。</p><p>另外他在1.8的时候改成了与hashmap一样的数据结构，也就是数组加单链表或者红黑树的数据结构，其次就是它在1.8的时候就放弃了这种分段锁机制，然后使用了synchronized和CAS来操作。然后我们也知道在jdk1.6的时候jvm对synchronized的优化非常大，所以concurrenthashmap也就使用这种方式来保证它的线程安全。</p><p>CAS是compareAndSwap比较并替换，就是字面意思哈，CAS有三个操作数，当前值、内存值、要修改的新值。当当前值与内存值相等，那就将内存值更新为要修改的新值；当当前值与内存值不相等，要么就重试，要么就放弃更新。将当前值与内存值进行比较，判断是否有被修改过的机制就是这就是CAS。</p><p>CAS有没有什么优缺点</p><p>当在并发量大的时候它是始终有一个忙循环的过程，这对cpu的性能消耗是比较大的，另外一个就是它可能会产生一个ABA问题，就是在一个线程折行过程中，有另一个线程更改了变量值然后又把变量改回来了，而我一开始这个线程最后通过CAS操作比较更新值的时候是感知不到这个值是被修改过了，所以这个线程的CAS操作就变成成功的。这个问题可以通过版本号机制来解决。</p><h3 id="既然提到了synchronized那聊一下" tabindex="-1"><a class="header-anchor" href="#既然提到了synchronized那聊一下"><span>既然提到了synchronized那聊一下</span></a></h3><p>他的使用方式的话，他可以用在同步代码块，同步代码块是可以指定任意的对象为锁，当他用在方法标识的时候，他的锁就是他的this，如果用在静态方法则是锁定他的class对象。</p><p>被synchronized修饰了的同步代码块在编译之后会在代码块前后加上两个指令，一个是monitorenter，一个是monitorexit，当一个线程来时他发现他的对象的锁标志位是无锁对应01的状态，他就会尝试给一个互斥锁对象，这个锁对象就会与monitor监视器锁关联，他会在monitor中的锁计数器+1，并且将monitor的指针写入到一个对象头中，并且修改他的锁对象标志位为10，就是它重量级锁的一个标志位，以此来完成换锁的过程。并且他在这个过程中是一个可重入的，他不用每次再重新获取锁在释放锁，他每次进来时就获取这个锁然后在这个锁记录器中+1。他加上锁之后，当其他线程来的时候会检测monitor监视器锁上的计数器不为0，他会在monitor监视状态下，等待去竞争这个锁。然后之前获得锁的线程加上几次锁就得释放几次锁，将计数器清0来完成一个对锁的释放。让其他线程去竞争这个锁，这是它重量级锁中同步代码块的原理。</p><p>同步方法的话就不是这种指令了，而是一个ACC_SYNCHRONIZED标志位 ，是一个flag，jvm去检测到这个flag它就自动去走一个同步方法调用的策略。</p><h4 id="什么时候用synchronized和什么时候用reentrantlock有考虑过吗" tabindex="-1"><a class="header-anchor" href="#什么时候用synchronized和什么时候用reentrantlock有考虑过吗"><span>什么时候用synchronized和什么时候用ReentrantLock有考虑过吗</span></a></h4><p>他两对比的话区别还是蛮大的，首先从层面上synchronized是jvm的一个关键字，ReentrantLock是jdk层面的。synchronized在使用的时候是比较简单的，可以同步代码块和用关键字在方法上声明，不需要关心锁的释放，而ReentrantLock需要手动去lock和配合try catch finally去把它的锁释放。另外一定就是ReentrantLock相比synchronized有几个高级的特性</p><p>关于synchronized他在jdk1.6时候升级还是蛮大的，首先就是它提供了锁升级的机制，首先呢他是无锁状态-&gt;然后到他的偏向锁-&gt;轻量级锁-&gt;再到重量级锁。然后在偏向锁的话，意思也是见名知意，他就是偏向于第一个获得这个锁的线程，他会将他的线程id写到这个锁对象的对象头中，当其他线程来的时候他就立刻结束这个偏向状态，进而进入一个轻量级锁的状态，，轻量级锁它主要是在虚拟机栈中开辟一个空间叫做Lock Record，然后将锁对象的MarkWord写入，然后再尝试将Lock Record的指针使用CAS去修改锁对象头的那个内存区域来完成的一个加锁过程，失败就再次重试，如果重试了10次了还没有修改成功锁对象的内存区域，那么就会再往上膨胀成一个重量级锁，</p><h3 id="你知道volatile的原理吗" tabindex="-1"><a class="header-anchor" href="#你知道volatile的原理吗"><span>你知道volatile的原理吗</span></a></h3><p>volatile是jvm提供的一个关键字 ，说到volatile的话首先要说到我们的计算机模型，cpu和内存之间的性能效率相差了很多数量级，为了让cpu工作效率高，不用等待内存的响应，所以在内存和cpu中加上了高速缓存来做缓冲，然后我们的线程在这个缓存中去工作，首先它取数据会从主内存中取到工作内存中计算，计算完成后在传回去，那这个时候就有一个问题，就是多个线程之间的可见性是如何保证的。他在计算机层面上时候很多协议，在JVM上的话为了屏蔽掉这些复杂的东西，提供了JMM这种模型，像volatile的话，被volatile修饰的一个变量他就可以保证这个变量在所有线程间的可见性，让这个线程在修改这个变量之后他可以立刻刷新到主内存，它在使用时会立即从主内存中取出来刷新那个值，这个是总线嗅探机制，volatile他是不能保证变量的原子性，原子性我们可以使用并发包下面automatic的那些类。还有一个就是volatile可以禁止指令重排序，volatile是通过内存屏障实现的，java编辑器会在生成指令是在适合的位置插入内存屏障指令来禁止特定的类型的处理器重排序。volatile写是在前面和后面分别插入内存屏障，而volatile读操作是在后面插入两个内存屏障。</p><h3 id="重载和重写的区别" tabindex="-1"><a class="header-anchor" href="#重载和重写的区别"><span>重载和重写的区别</span></a></h3><p>重载就是发生在同一个类中，方法名相同，参数类型不同，个数不同，顺序不同，方法返回值和访问修饰符可以不同，发生在编译时；</p><p>重写的话，发生在父子类中，方法名、参数列表必须相同，返回值范围小于等于父类，抛出异常范围小于等于父类，访问修饰符范围大于等于父类，如果父类方法修饰符为private则子类就不能重写该方法。</p><h3 id="接口和抽象类的区别" tabindex="-1"><a class="header-anchor" href="#接口和抽象类的区别"><span>接口和抽象类的区别</span></a></h3><p>抽象类可以有构造方法，接口中不能有构造方法；抽象类可以有任何类型的成员变量，接口中只能有<code>public static final</code>变量；抽象类中可以包括非抽象的普通方法，接口中也可以有非抽象的<code>default</code>方法；抽象类中的抽象方法的访问类型可以是<code>public protected等</code>，但是接口中的抽象方法只能是<code>public</code>类型，并且默认为<code>public abstract</code>类型；抽象类中可以包含静态方法，接口中不能包含静态方法；抽象类和接口中都可以包含静态成员变量，抽象类中的静态成员变量的访问类型可以任意，但是接口中定义的变量只能是也默认是<code>public static final</code>类型；一个类可以实现多个接口，但只能继承一个抽象类。抽象类是不能实例化的，但是特能够通过在继承他的子类中调用他的构造方法来达到实例化的作用，因为子类在实例化的时候会实例化父类，所以子类才能调用父类的构造方法</p><p>接口的设计目的是对类的行为进行约束，也就是提供一种机制，可以强制要求不同的类具有相同的行为，他只约束了行为的有无，但不对如何实行行为进行限制。</p><p>而抽象类的目的是代码复用，当不同的类具有某些相同的行为，且其中一部分行为的实现方式一致时，可以让这些类都派生与一个抽象类。</p><h3 id="reentranlock和aqs" tabindex="-1"><a class="header-anchor" href="#reentranlock和aqs"><span>ReentranLock和AQS</span></a></h3><p>ReentrantLock实现主要依赖于AQS维护一个阻塞队列，多个线程抢锁时，失败则会进入阻塞队列，等待唤醒重新尝试加锁。AQS的子类有公平锁FairSync和非公平锁NoFairSync，ReentrantLock的无参构造默认是非公平锁，有参构造参数是true可以设置成公平锁。</p><p>公平锁ReentrantLock调用Lock方法最终会调用Sync类的tryAcquire函数，获取资源，当前线程只有在队列为空或者是队列首节点的时候才能获取资源，否知会被加入到阻塞队列中。</p><p>非公平锁也是调用tryAcquire,不同的是tryAcquire还会调用nofair TryAcquire。</p><p>公平锁与非公平锁的区别是非公平锁在调用NofairSync的Lock的时候就会马上进行CAS抢锁，抢不到就和公平锁一样进入tryAcquire方法尝试抢锁，如果发现锁被释放了（State == 0），非公平锁马上CAS抢锁，而不会管阻塞队列里是否有线程等待，而公平锁会排队等待。</p><p><strong>AQS的核心思想</strong>是，如果被请求的共享资源空闲，则将当前请求资源的线程设置为有效的工作线程，并将共享资源设置为锁定状态，如果被请求的共享资源被占用，那么就需要一套线程阻塞等待以及被唤醒时锁分配的机制，这个机制AQS是用FIFO队列锁实现的，即将暂时获取不到锁的线程加入到队列中。</p><p>FIFO队列是一个虚拟的双向队列，虚拟的双向队列即不存在队列实例，仅存在节点之间的关联关系。</p><p>AQS就是基于CLH队列，用volatile修饰共享变量state，线程通过CAS去改变状态符，成功则获取锁成功，失败则进入等待队列，等待被唤醒。</p><h3 id="spring是怎么去做到事务隔离级别的" tabindex="-1"><a class="header-anchor" href="#spring是怎么去做到事务隔离级别的"><span>spring是怎么去做到事务隔离级别的</span></a></h3><p>他是提供了一个注解，叫做Transactional，它有七种事务传播行为，隔离级别就是比mysql多了一个默认的</p><p>Spring并不直接管理事务，而是提供了多种事务管理器，他们将事务管理的职责委托给Hibernate或者JTA等持久化机制所提供的相关平台框架的事务来实现。</p><p>Spring事务管理器的接口是org.springframework.transaction.PlatformTransactionManager，通过这个接口，Spring为各个平台如JDBC、Hibernate等都提供了对应的事务管理器，但是具体的实现就是各个平台自己的事情了。</p><h3 id="spring的事务传播机制" tabindex="-1"><a class="header-anchor" href="#spring的事务传播机制"><span>spring的事务传播机制</span></a></h3><p>这里的事务传播机制有七种，有比如说<code>required</code>，required就是我支持当前事务，如果没有创建事务；还有<code>supports</code>，如果没有事务或当前没有事务就以非事务运行；还有<code>mandatory</code>，如果当前没有事务，我就抛出异常；还有<code>not supported</code>就是以非事务运行，如果有挂起；还有<code>never</code>就是以非事务运行，如果有抛出异常；还有一个<code>requires new</code>就是一个支持内嵌的一个事务过程。</p><h3 id="spring-aop简单介绍一下" tabindex="-1"><a class="header-anchor" href="#spring-aop简单介绍一下"><span>Spring AOP简单介绍一下</span></a></h3><p>主要是做一些预热和日志的操作，他可以定义一些切点，将这些切点的一些植面动态的植入进去，很方便的帮我们做一些权限的判断，比如说我们用jwt进入我们系统之前可以用AOP拦截下来判断它的这个权限；然后也可以去把我们的一些日志操作，相应的做一些变更。</p><p>然后AOP主要有两种实现形式一种是可以使用jdk动态代理，第二个就是CGlib字节码技术去创建代理类对象。jdk动态代理主要使用到了java反射中的两个类，一个是proxy，一个是invocationhandler，他通过bind的方式去绑定之前的代理类，就是与原来的实现类做一个关系，并且他是通过proxy.new来创建一个代理对象，然后通过反射invoke去执行那个方法。他们两个也是有一点区别的，jdk proxy他要实现相同接口的这么一个类；CGLIB它就是ASM的一个编辑器，他可以生成一个目标类的一个子类，然后就去实现一个类似代理的功能。至于性能上来说的话，CGLIB在创建对象的过程中，可能会比较慢一些，但是在运行的时候效率更高一些。</p><p><strong>静态代理</strong>，<strong>jdk动态代理</strong>，<strong>cglib动态代理</strong>。但是我们知道，静态代理的重用性太差，一个代理不能同事代理多种类；动态代理可以做到代理的重用，但是即使这样，他们调用起来还是比较麻烦，除了写切面代码以外，我们还需要将代理类耦合进被代理类的调用阶段，在创建被代理类的时候都要先创建代理类，再用代理类去创建被代理类，这就稍微有点麻烦了。</p><h3 id="spring的生命周期" tabindex="-1"><a class="header-anchor" href="#spring的生命周期"><span>spring的生命周期</span></a></h3><h3 id="spring依赖循环" tabindex="-1"><a class="header-anchor" href="#spring依赖循环"><span>spring依赖循环</span></a></h3><p>当A、B两个类发生循环引用时，在A完成实例化后，就使用实例化后的对象去创建一个对象工厂，并添加到三级缓存中，如果A被AOP代理，那么通过这个工厂获取到的就是A代理后的对象，如果A没有被AOP代理，那么这个工厂获取到的就是A实例化的对象。</p><p>当A进行属性注入时，会去创建B，同时B又依赖了A，所以创建B的同时又会去调用getBean(a)来获取需要的依赖，此时的getBean(a)会从缓存中获取：</p><p>第一步，先获取到三级缓存中的工厂；</p><p>第二步，调用对象工工厂的getObject方法来获取到对应的对象，得到这个对象后将其注入到B中。紧接着B会走完它的生命周期流程，包括初始化、后置处理器等。</p><p>当B创建完后，会将B再注入到A中，此时A再完成它的整个生命周期。</p><p>spring在创建Bean的过程中分为三步</p><ol><li><p>实例化，对应方法：<code>AbstractAutowireCapableBeanFactory</code>中的<code>createBeanInstance</code>方法,</p><p>实例化，简单理解就是new了一个对象</p></li><li><p>属性注入，对应方法：<code>AbstractAutowireCapableBeanFactory</code>的<code>populateBean</code>方法</p><p>属性注入，为实例化中new出来的对象填充属性</p></li><li><p>初始化，对应方法：<code>AbstractAutowireCapableBeanFactory</code>的<code>initializeBean</code></p><p>初始化，执行aware接口中的方法，初始化方法，完成<code>AOP</code>代理</p></li></ol><h3 id="spring容器的启动流程" tabindex="-1"><a class="header-anchor" href="#spring容器的启动流程"><span>Spring容器的启动流程</span></a></h3><p>首先是加载配置文件，配置文件可以是xml或者是java配置类，spring它提供了统一的抽象接口BeanDefinitionReader去处理这些配置信息，然后对不同的配置有不同的实现类，比如说xml就有xmlBeanDefinitionReader的实现类，通过实现一层抽象，他就实现了配置并解析注册到容器内。（它解析成BeanDefinition接口的实现类，它包含class名，id，还有别名信息，properties属性，是否是懒加载，是否是原型类型）</p><h3 id="说一说你对反射的理解" tabindex="-1"><a class="header-anchor" href="#说一说你对反射的理解"><span>说一说你对反射的理解</span></a></h3><p>比如说泛型嘛，在运行时候获取到泛型这么一个运行时的类型，拿到它对应业务的一个实体类，去放置它的一些业务信息。因为反射可以获取到运行时的一些状态，所以就能够达到代码复用的过程。</p><h4 id="有没有了解过反射的性能-据我所知反射在大多数情况下性能没有那么好" tabindex="-1"><a class="header-anchor" href="#有没有了解过反射的性能-据我所知反射在大多数情况下性能没有那么好"><span>有没有了解过反射的性能，据我所知反射在大多数情况下性能没有那么好</span></a></h4><p>对，因为反射的时候它会先去方法区里面就是先去看它这个类有没有加载过，没有的话就会有一个类加载的过程，可能就会在一定程度上影响到这个性能</p><h4 id="你知道nginx是怎么做负载均衡的吗或者说知道哪些常见的负载均衡算法" tabindex="-1"><a class="header-anchor" href="#你知道nginx是怎么做负载均衡的吗或者说知道哪些常见的负载均衡算法"><span>你知道nginx是怎么做负载均衡的吗或者说知道哪些常见的负载均衡算法</span></a></h4><p>nginx的负载均衡的话，主要可以做的有几种吧，第一种就是一致性哈希就是他可以跟hashmap的那个key一样，去做一致性哈希，然后负载就是比较均衡的放在各个机器上，还有一种就是加权哈希，因为有的机器它可能性能比较好，我们可以把权给他加大一点，让更多的流量打到它上面。还有一种就是轮询，轮询的可能效果就没有那么好。</p><h4 id="一致性哈希的一致性是什么意思" tabindex="-1"><a class="header-anchor" href="#一致性哈希的一致性是什么意思"><span>一致性哈希的一致性是什么意思</span></a></h4><p>所有的流量过来都是一样的，如果我这次打到了这一台机器上，下一次也还可以打到同一台机器上。</p><h3 id="为什么是三次握手而不是两次或者四次" tabindex="-1"><a class="header-anchor" href="#为什么是三次握手而不是两次或者四次"><span>为什么是三次握手而不是两次或者四次</span></a></h3><p>我所理解的三次握手是我客户端要给服务器去报告我要请求建立连接，顺便把我自己的一个发送能力发送给服务器，让服务器知道，服务器判断我是否可以给你创建连接，把我的一个接收能力返回给客户端，只有三次握手才能够保证就是双方的发送能力和接收能力达到了一个协商好的过程。但是协议没有百分之百可靠的，三次就已经够了，四次也不能保证百分之百可靠。</p><h3 id="mysql索引" tabindex="-1"><a class="header-anchor" href="#mysql索引"><span>Mysql索引</span></a></h3><p>我们使用Hash表存储表数据Key可以存储索引列，Value可以存储行记录或者行磁盘地址。Hash表在等值查询时效率很高，时间复杂度为O(1)；但是不支持范围快速查找，范围查找时还是只能通过扫描全表方式。</p><p>B+树的最底层叶子节点包含了所有的索引项。InnoDB中Data存储的为行数据，而MyIsam中存储的是磁盘地址</p><h3 id="mysql隔离级别" tabindex="-1"><a class="header-anchor" href="#mysql隔离级别"><span>mysql隔离级别</span></a></h3><p>读未提交，字面意义来说就是当前未完成事务可以读到另一个事务没有提交的信息， A事务可以看到B事务未提交的数据更改，即脏读。</p><p>读提交，字面意义来说就是当前未完成的事务能够读取到另一个事务提交的信息，事务A事先读取了数据，事务B紧跟着更改了数据，并提交了事务，而事务A再次读取该数据时，数据已经发生了改变，即不可重复读，这个隔离级别避免了脏读。</p><p>重复读，幻读和不可重复读的意义大致相同，都是可以为完成事务可以读取到另一提交事务的数据。区别在于不同重复读查询的都是同一个项，幻读针对的是一批数据整体，可重复读这个隔离级别避免了不可重复读。</p><p>串行化，事务顺序执行，这个事务级别可以避免幻读。</p><h3 id="mysql-redo和bin" tabindex="-1"><a class="header-anchor" href="#mysql-redo和bin"><span>Mysql redo和bin</span></a></h3><p>当从数据库读取数据时，会首先从Buffer Pool中读取，如果Buffer Pool中没有，则从磁盘读取后放入Buffer Pool；当向数据库写入数据时，会首先写入Buffer Pool，Buffer Pool中修改的数据会定期刷新到磁盘中（这一过程称为刷脏）。<strong>Buffer Pool</strong>的使用大大提高了读写数据的效率，但是也带了新的问题：如果MySQL宕机，而此时Buffer Pool中修改的数据还没有刷新到磁盘，就会导致数据的丢失，事务的持久性无法保证。redo log<strong>被引入来</strong>解决**这个问题</p><h3 id="mysql的调优经验" tabindex="-1"><a class="header-anchor" href="#mysql的调优经验"><span>Mysql的调优经验</span></a></h3><p>在索引这一块，其实是mysql调优比较大的一个过程。我看来得话，我们在创建索引的时候可能会考虑以下几个因素，首先覆盖索引，因为覆盖索引可以减少回表的次数，然后mysql5.6之后对覆盖索引做了进一步的优化，它支持索引下推的一个功能，我把我覆盖索引所覆盖的一个字段，然后进一步的进行筛选，尽量减少回表的次数，这个我们可以用explain看他的执行计划的时候，那个extra字段里面有Using index,然后我们可以看到的，其实我们可以进一步对他进行优化，如果我们的存储介质是机械硬盘的话，我们都知道那个机械硬盘是很怕随机读写的，他有一个磁盘寻址的开销，我们可以吧mrr开开，就是multi range read，他可以把在回表之前把我们的id读到一个buffer里面进行一个排序，把原来的一个随机操作变成一个顺序操作，我觉得这就是覆盖索引可以做的一些优化，可以利用最左原则和覆盖索引配合可以减少一些索引的维护。</p><p>如果是对一些普通索引，如果我们是一个写多读少的服务并且这个服务的为一些要求没有那么高，或者我们的业务代码可以保证唯一性的时候，我们可以普通索引，因为普通索引可以用到change Buffer的，change buffer又可以把一些写操作给缓存下来，我们在读的时候进行这个merge操作，这样的话可以提高我们写入的速度，还有我们内存的一个命中率，这个是我认为在创建索引可以考虑的一些点。</p><p>还有一些点就是如果我这个索引走不上，我们应该考虑哪方面的因素，首先可以考虑是不是我们的sql写得有问题，比如说我们对索引字段进行了一些函数操作，或者是在连接查询的时候两个表的编码不一样，也可以进一步排查是不是有没有可能他两个字段的类型不一样，比如说String，付给它一个ID，如果String跟id比较的话，我们会把String转化成ID，在mysql里面运用到了一个隐式的，一个cast的函数转换，如果我们的sql没有问题后，可以考虑是不是索引统计信息有问题，如果是索引统计信息有问题的话，我们可以去analyze table重新统计索引信息，因为我们知道这个索引信息并不是一个准确值，他是一个随机采样的过程，可能会出现问题，还有就是我们的表如果是增删太多，内存的空洞也比较多，所以都有可能造成我们索引的一个选择问题。</p><h4 id="你觉得explain分析出来的索引一定是最优的吗" tabindex="-1"><a class="header-anchor" href="#你觉得explain分析出来的索引一定是最优的吗"><span>你觉得explain分析出来的索引一定是最优的吗</span></a></h4><p>哦，是不一定的，以为它可能会选错索引，因为我们在索引的时候，可能会涉及到回表操作，还有一些排序操作，可能会走错。</p><h4 id="有没有遇到过索引建的不好-索引走得很慢-查询速度慢的问题" tabindex="-1"><a class="header-anchor" href="#有没有遇到过索引建的不好-索引走得很慢-查询速度慢的问题"><span>有没有遇到过索引建的不好，索引走得很慢，查询速度慢的问题</span></a></h4><p>我觉得碰到这种情况的话，首先我们可以考虑就是用哪个force index，强制走一个索引，但是这个不太好，他是作为一个业务的一个应急预案，因为它可能迁到别的数据库里面他就不支持了，他还需要我们做一个代码的一个重新发布，这个是不太好的。还有有一种就是考虑用覆盖索引加最左匹配原则，看能不能把这个选错的索引给删掉，我觉得这也是一个优化的方案之一，而且也挺常用的。</p><h4 id="存在热点数据需要大批量的去更细你是怎么做的" tabindex="-1"><a class="header-anchor" href="#存在热点数据需要大批量的去更细你是怎么做的"><span>存在热点数据需要大批量的去更细你是怎么做的</span></a></h4><p>这种问题我们可以去吧它写在一个内存的临时表里面，因为我们知道innodb它会维护一个buffer pool的，如果我们直接把大量的一些数据全部都读进去的话，可能会导致一个flash的操作，就是把脏页刷回mysql就是这么一个操作会造成我们线上的一个业务问题</p><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>redis</span></a></h3><p>https://gitee.com/clsld/note-document/blob/master/%E9%9D%A2%E8%AF%95/redis%E9%9D%A2%E8%AF%95%E9%A2%98.md</p><h3 id="java8的一些新特性" tabindex="-1"><a class="header-anchor" href="#java8的一些新特性"><span>java8的一些新特性</span></a></h3><p>stream流、lambda表达式</p><h3 id="再聊多线程的线程池你了解吗" tabindex="-1"><a class="header-anchor" href="#再聊多线程的线程池你了解吗"><span>再聊多线程的线程池你了解吗</span></a></h3><p>首先线程池他是有一个核心线程数，当你的线程运行的时候，当你的线程池如果在启动的时候没有设置预启动加载，它的线程数为0，当提交一个新任务的时候，首先它会是建立一个核心线程，去执行任务，那此时如果一直有来任务，他之前又没有执行完，那么就会继续创建核心线程，当达到核心线程数时，如果还都在忙，那么就会放到一个blockingQueue里面作为节点，如果blockingqueue队列放满了，而且核心线程都在忙，那就会去建立新线程，他这个是叫做非核心线程，若一直创建，数量达到了非核心线程数max_access，就会触发一个拒绝策略，jdk中内置了四种拒绝策略，第一种是abortpolicy，直接抛出异常来解决。第二种是discardpolicy，就是悄无声息的丢弃这个任务。第三种是discardOldestPolicy，丢弃你最早的未执行的任务。最后一种是CallerRunsPolicy，谁调用我的这个线程去执行你的这个任务，它这种方式会影响你的新任务提交速度，关于使用的队列，他是阻塞队列，jdk提供了</p><h3 id="你看过aqs的实现吗" tabindex="-1"><a class="header-anchor" href="#你看过aqs的实现吗"><span>你看过AQS的实现吗</span></a></h3><h3 id="讲一下mysql的索引" tabindex="-1"><a class="header-anchor" href="#讲一下mysql的索引"><span>讲一下mysql的索引</span></a></h3><p>mysql的存储引擎主要有？？，InnoDB引擎的索引类型有B+树索引和哈希索引，默认的索引类型为B+树索引。</p><h3 id="讲一下数据库事务" tabindex="-1"><a class="header-anchor" href="#讲一下数据库事务"><span>讲一下数据库事务</span></a></h3><h3 id="说一下mvcc" tabindex="-1"><a class="header-anchor" href="#说一下mvcc"><span>说一下MVCC</span></a></h3><h3 id="说一下数据库的锁" tabindex="-1"><a class="header-anchor" href="#说一下数据库的锁"><span>说一下数据库的锁</span></a></h3><h3 id="讲一下你怎么进行数据库优化" tabindex="-1"><a class="header-anchor" href="#讲一下你怎么进行数据库优化"><span>讲一下你怎么进行数据库优化</span></a></h3><p>https://mp.weixin.qq.com/s?__biz=MzA4NjU1MzA2MQ==&amp;mid=2647724965&amp;idx=1&amp;sn=3ecfe7712c9cca26eb13f5ed34986292&amp;chksm=87e34b2fb094c2391fcaad206374f05b3293abd62b9c6b764a28165e70da9f2e2c7af8c4bf0e&amp;scene=178&amp;cur_album_id=1815472090754433025#rd</p><h3 id="线程这一块你应该用过把" tabindex="-1"><a class="header-anchor" href="#线程这一块你应该用过把"><span>线程这一块你应该用过把</span></a></h3><h3 id="threadlocal" tabindex="-1"><a class="header-anchor" href="#threadlocal"><span>ThreadLocal</span></a></h3><p>https://mp.weixin.qq.com/s?__biz=MzA4NjU1MzA2MQ==&amp;mid=2647724903&amp;idx=1&amp;sn=b25efdb71824a4f605f3eb4e5f171bc2&amp;chksm=87e34bedb094c2fbea6c0c31f6d6b1b5d8b4dc0dae6b886b70992039cc6d42b863bd4108e11c&amp;scene=21#wechat_redirect</p><h3 id="tcp和udp有什么区别" tabindex="-1"><a class="header-anchor" href="#tcp和udp有什么区别"><span>tcp和udp有什么区别</span></a></h3><h3 id="为什么tcp连接是3次-两次可以吗-为什么关闭的时候是4次" tabindex="-1"><a class="header-anchor" href="#为什么tcp连接是3次-两次可以吗-为什么关闭的时候是4次"><span>为什么tcp连接是3次，两次可以吗，为什么关闭的时候是4次</span></a></h3><h3 id="java基础" tabindex="-1"><a class="header-anchor" href="#java基础"><span>java基础</span></a></h3><p>https://mp.weixin.qq.com/s?__biz=MzA4NjU1MzA2MQ==&amp;mid=2647724779&amp;idx=1&amp;sn=b46860b8f43d8d31712f987241f6df22&amp;chksm=87e34a61b094c37745afed3b87c0ed382791ab494be35394ee5895c1f017ca29eeb58ebda994&amp;scene=21#wechat_redirect</p><h3 id="并发相关" tabindex="-1"><a class="header-anchor" href="#并发相关"><span>并发相关</span></a></h3><p>https://mp.weixin.qq.com/s?__biz=MzA4NjU1MzA2MQ==&amp;mid=2647724650&amp;idx=1&amp;sn=361a6102991e5123a5a94727143aaca3&amp;chksm=87e34ae0b094c3f6ec01c245b38312163af096c2b019e1dd89961279980655f49eb890bb9307&amp;scene=21#wechat_redirect</p><h3 id="redis-1" tabindex="-1"><a class="header-anchor" href="#redis-1"><span>redis</span></a></h3><p>https://mp.weixin.qq.com/s?__biz=MzA4NjU1MzA2MQ==&amp;mid=2647725101&amp;idx=1&amp;sn=63d11f5b3c83121ce8ac905f39a20882&amp;chksm=87e34ca7b094c5b1702263044cd91f20a188c8099936afd800627b077e33406bfd0065df8bdf&amp;scene=21#wechat_redirect</p><h3 id="jvm内存模型" tabindex="-1"><a class="header-anchor" href="#jvm内存模型"><span>JVM内存模型</span></a></h3><p>JVM运行时的内存区域可以分为两大类，一个是它的线程私有区，另一个是线程的共享区，对于线程私有，首先第一个就时它的程序计数器，他是jvm中占用内存比较小的一个地方，也是唯一一块不会发生oom的区域，这里是会告诉CPU当前线程的执行代码执行到哪，上下文切换之后就可以回到一个正确的状态。另外线程私有的还有虚拟机栈和本地方法栈，虚拟机栈中使用的主要是栈帧，一个方法的调用就是入栈到出栈的过程。接着就是线程共享区，首先第一个就是方法区，方法区它其实就是jvm的一个规范，但是呢在1.7版本的时候，它的实现在Hotspot虚拟机中叫做永久代，这里面存放的是一些常量池还有类的元数据信息。在1.8版本的时候，静态变量和字符串常量池被放到了堆中，还有一个区域的堆，堆的话它里面存放的是java产生的对象，对象的实例，他是GC重点回收的一个区域，并且他也是会产生oom的。</p><h4 id="他现在有哪些垃圾回收算法和垃圾回收器" tabindex="-1"><a class="header-anchor" href="#他现在有哪些垃圾回收算法和垃圾回收器"><span>他现在有哪些垃圾回收算法和垃圾回收器</span></a></h4><p>垃圾回收算法的话有四个，</p><p>一个是标记清除，标记一些不可达的对象，将这些对象判断为死亡后依此抹去。判断对象可达有两种方式，一种是引用计数，但是它的欠缺是会产生循环依赖；第二种是根据jvm中可以作为<strong>GCroots</strong>根节点来创建一个链如果不在这个链上的对象就可以回收了，比如说像是虚拟中栈中引用的一些对象，像是方法区中的静态变量所引用的对象，还有些常量引用的对象，还有方法区中引用的一些对象，它可以作为可达性分析根节点的一些对象。它因为这个使用可能会造成很多的内存碎片，并且当它的对象是比较大的时候，它的标记清除效率是比较低的。</p><p>第二种是标记复制，就是将我们的堆划分成两块在GC的时候将一些活动对象直接复制到另一半，然后将不可达对象的那一半抹掉，它的缺点就是会造成你的内存利用效率偏低，好处就是不会产生内存碎片。</p><p>第三个是标记整理，它在标记清除法的基础上添加了一个整理的过程 ，即将所有的存活对象都往一端移动,紧邻排列</p><p>第四个是分代回收算法,它是把上述几种算法整合在了一起，分代收集算法根据<strong>对象存活周期的不同</strong>将堆分成新生代和老生代，默认比例为1:2，新生代又分为Eden 区，from Survivor区（简称S0）,to Survivor区(简称 S1),三者的比例为8:1:1，新生代发生的GC称为Young GC，老年代发生的GC称为Full GC。对象一般分配在Eden区，当 Eden区将满时，触发young GC,然后把存活的对象移到S0区，把 Eden 区对象全部清理以释放出空间，当触发下一次 young GC 时，会把 Eden 区的存活对象和 S0 中的存活对象一起移到 S1, 同时清空 Eden 和 S0 的空间。每一次gc S0, S1 角色互换,垃圾回收我们采用的是<strong>复制算法</strong>。当对象的年龄达到了我们设定的阈值，则会从S0（或S1）晋升到老年代，当某个对象分配需要大量的连续内存时直接分配在老年代，在 S0（或S1） 区相同年龄的对象大小之和大于 S0（或S1）空间一半以上时，则年龄大于等于该年龄的对象也会晋升到老年代。老年代满了，会触发 Full GC, Full GC 会同时回收新生代和老年代。</p><p>cms是可以和用户线程之间并发操作的，GC线程与用户线程之间并行执行，它的特点就是低延迟，它的整个过程的话主要是用来回收老年代的，它的算法使用的是标记清除，可能还混合了一下标记整理，因为它使用标记清除，它会容忍一定的垃圾碎片，当达到阈值时，会触发一次标记整理来清理一下，它的过程的话是有四个阶段，首先是初始标记，到并发标记，接着是重新标记还有一个是并发整理，但是太窄初始标记和重新标记的时候他不是形成并行的，它会短暂的产生Stop The World，但是这时间是很短的，它的并发标记和并发清理这两个阶段的耗时是比较长的，但是他是和用户线程一起并发执行的所以说他是可以最短的实现低延迟，G1可以提前预测停顿时间，cms不行</p><h3 id="oom的一个排除思路和过程" tabindex="-1"><a class="header-anchor" href="#oom的一个排除思路和过程"><span>OOM的一个排除思路和过程</span></a></h3><p>dump了一份JVM堆内存的日志</p><p>借助一些jvisualvm的工具，去查询它dump下来的堆栈信息进行排查</p><h3 id="cpu突然飚高了-怎么排查" tabindex="-1"><a class="header-anchor" href="#cpu突然飚高了-怎么排查"><span>cpu突然飚高了，怎么排查</span></a></h3><p>如果服务是部署在linux上的话，可以top命令看一下，当前cpu百分百的进程id，然后用jstack命令</p><h3 id="对异步编程有哪些了解" tabindex="-1"><a class="header-anchor" href="#对异步编程有哪些了解"><span>对异步编程有哪些了解</span></a></h3><p>使用spring的@Async注解</p><p>Future，向线程池 submit 一个任务后用future对象接收，它的缺陷就是无法得知任务何时完成和得知结果，然后在主线程获取任务结果会导致主线程阻塞。</p><p>然后为了解决这个future的问题，引入了callback的解决方案，比如 Google Guava 包中的 ListenableFuture， 创建异步任务，通过addCallback方法添加处理结果的回调函数，就可以避免获取并处理异步任务执行结果阻塞调起线程的问题，Callback 是将任务执行结果作为接口的入参，在任务完成时回调 Callback 接口，执行后续任务。但 Callback 产生了新的问题，<strong>回调地狱</strong>。</p><p>还有这个completableFuture, 提供了四个静态方法来创建一个异步操作。runAsync方法不支持返回值,supplyAsync可以支持返回值</p><h3 id="netty" tabindex="-1"><a class="header-anchor" href="#netty"><span>Netty</span></a></h3><p>BIO是一个同步并阻塞的IO模式,在读取输入流或者写入输出流时，在读、写动作完成之前，线程会一直阻塞在那里.NIO 是一种同步非阻塞的 I/O 模型,一个线程可以处理多个通道，减少线程创建数量；读写非阻塞，节约资源：没有可读／可写数据时，不会发生阻塞导致线程资源的浪费</p>',166),r=[t];function p(l,h){return n(),e("div",null,r)}const o=a(i,[["render",p],["__file","super java.html.vue"]]),u=JSON.parse(`{"path":"/posts/planlearn/interview/super%20java.html","title":"super java","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2024-08-22T00:00:00.000Z","category":["interview"],"tag":["super","java"],"description":"super java 项目相关 这个类需要加上@Aspect注解用以声明这是一个切面，以及其他相关切面语法。 Spring AOP也是对目标类增强，生成代理类。但是与AspectJ的最大区别在于Spring AOP的运行时增强，而AspectJ是编译时增强。使用了Aspect来定义切面,使用Pointcut来定义切入点，使用Advice来定义增强处理。...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/planlearn/interview/super%20java.html"}],["meta",{"property":"og:site_name","content":"Clsld 's blog"}],["meta",{"property":"og:title","content":"super java"}],["meta",{"property":"og:description","content":"super java 项目相关 这个类需要加上@Aspect注解用以声明这是一个切面，以及其他相关切面语法。 Spring AOP也是对目标类增强，生成代理类。但是与AspectJ的最大区别在于Spring AOP的运行时增强，而AspectJ是编译时增强。使用了Aspect来定义切面,使用Pointcut来定义切入点，使用Advice来定义增强处理。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-22T16:58:49.000Z"}],["meta",{"property":"article:author","content":"clsld"}],["meta",{"property":"article:tag","content":"super"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:published_time","content":"2024-08-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-22T16:58:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"super java\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-22T16:58:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"clsld\\",\\"url\\":\\"https://github.com/coderclsld\\"}]}"]]},"headers":[{"level":3,"title":"项目相关","slug":"项目相关","link":"#项目相关","children":[]},{"level":3,"title":"ArrayList和LinkedList分别作用于什么场景","slug":"arraylist和linkedlist分别作用于什么场景","link":"#arraylist和linkedlist分别作用于什么场景","children":[]},{"level":3,"title":"怎么在线程不安全下使用List","slug":"怎么在线程不安全下使用list","link":"#怎么在线程不安全下使用list","children":[]},{"level":3,"title":"说一下HashMap","slug":"说一下hashmap","link":"#说一下hashmap","children":[]},{"level":3,"title":"针对hashmap线程安全不安全有没有什么解决办法","slug":"针对hashmap线程安全不安全有没有什么解决办法","link":"#针对hashmap线程安全不安全有没有什么解决办法","children":[]},{"level":3,"title":"既然提到了synchronized那聊一下","slug":"既然提到了synchronized那聊一下","link":"#既然提到了synchronized那聊一下","children":[]},{"level":3,"title":"你知道volatile的原理吗","slug":"你知道volatile的原理吗","link":"#你知道volatile的原理吗","children":[]},{"level":3,"title":"重载和重写的区别","slug":"重载和重写的区别","link":"#重载和重写的区别","children":[]},{"level":3,"title":"接口和抽象类的区别","slug":"接口和抽象类的区别","link":"#接口和抽象类的区别","children":[]},{"level":3,"title":"ReentranLock和AQS","slug":"reentranlock和aqs","link":"#reentranlock和aqs","children":[]},{"level":3,"title":"spring是怎么去做到事务隔离级别的","slug":"spring是怎么去做到事务隔离级别的","link":"#spring是怎么去做到事务隔离级别的","children":[]},{"level":3,"title":"spring的事务传播机制","slug":"spring的事务传播机制","link":"#spring的事务传播机制","children":[]},{"level":3,"title":"Spring AOP简单介绍一下","slug":"spring-aop简单介绍一下","link":"#spring-aop简单介绍一下","children":[]},{"level":3,"title":"spring的生命周期","slug":"spring的生命周期","link":"#spring的生命周期","children":[]},{"level":3,"title":"spring依赖循环","slug":"spring依赖循环","link":"#spring依赖循环","children":[]},{"level":3,"title":"Spring容器的启动流程","slug":"spring容器的启动流程","link":"#spring容器的启动流程","children":[]},{"level":3,"title":"说一说你对反射的理解","slug":"说一说你对反射的理解","link":"#说一说你对反射的理解","children":[]},{"level":3,"title":"为什么是三次握手而不是两次或者四次","slug":"为什么是三次握手而不是两次或者四次","link":"#为什么是三次握手而不是两次或者四次","children":[]},{"level":3,"title":"Mysql索引","slug":"mysql索引","link":"#mysql索引","children":[]},{"level":3,"title":"mysql隔离级别","slug":"mysql隔离级别","link":"#mysql隔离级别","children":[]},{"level":3,"title":"Mysql redo和bin","slug":"mysql-redo和bin","link":"#mysql-redo和bin","children":[]},{"level":3,"title":"Mysql的调优经验","slug":"mysql的调优经验","link":"#mysql的调优经验","children":[]},{"level":3,"title":"redis","slug":"redis","link":"#redis","children":[]},{"level":3,"title":"java8的一些新特性","slug":"java8的一些新特性","link":"#java8的一些新特性","children":[]},{"level":3,"title":"再聊多线程的线程池你了解吗","slug":"再聊多线程的线程池你了解吗","link":"#再聊多线程的线程池你了解吗","children":[]},{"level":3,"title":"你看过AQS的实现吗","slug":"你看过aqs的实现吗","link":"#你看过aqs的实现吗","children":[]},{"level":3,"title":"讲一下mysql的索引","slug":"讲一下mysql的索引","link":"#讲一下mysql的索引","children":[]},{"level":3,"title":"讲一下数据库事务","slug":"讲一下数据库事务","link":"#讲一下数据库事务","children":[]},{"level":3,"title":"说一下MVCC","slug":"说一下mvcc","link":"#说一下mvcc","children":[]},{"level":3,"title":"说一下数据库的锁","slug":"说一下数据库的锁","link":"#说一下数据库的锁","children":[]},{"level":3,"title":"讲一下你怎么进行数据库优化","slug":"讲一下你怎么进行数据库优化","link":"#讲一下你怎么进行数据库优化","children":[]},{"level":3,"title":"线程这一块你应该用过把","slug":"线程这一块你应该用过把","link":"#线程这一块你应该用过把","children":[]},{"level":3,"title":"ThreadLocal","slug":"threadlocal","link":"#threadlocal","children":[]},{"level":3,"title":"tcp和udp有什么区别","slug":"tcp和udp有什么区别","link":"#tcp和udp有什么区别","children":[]},{"level":3,"title":"为什么tcp连接是3次，两次可以吗，为什么关闭的时候是4次","slug":"为什么tcp连接是3次-两次可以吗-为什么关闭的时候是4次","link":"#为什么tcp连接是3次-两次可以吗-为什么关闭的时候是4次","children":[]},{"level":3,"title":"java基础","slug":"java基础","link":"#java基础","children":[]},{"level":3,"title":"并发相关","slug":"并发相关","link":"#并发相关","children":[]},{"level":3,"title":"redis","slug":"redis-1","link":"#redis-1","children":[]},{"level":3,"title":"JVM内存模型","slug":"jvm内存模型","link":"#jvm内存模型","children":[]},{"level":3,"title":"OOM的一个排除思路和过程","slug":"oom的一个排除思路和过程","link":"#oom的一个排除思路和过程","children":[]},{"level":3,"title":"cpu突然飚高了，怎么排查","slug":"cpu突然飚高了-怎么排查","link":"#cpu突然飚高了-怎么排查","children":[]},{"level":3,"title":"对异步编程有哪些了解","slug":"对异步编程有哪些了解","link":"#对异步编程有哪些了解","children":[]},{"level":3,"title":"Netty","slug":"netty","link":"#netty","children":[]}],"git":{"createdTime":1675147913000,"updatedTime":1724345929000,"contributors":[{"name":"clsld","email":"807686672@qq.com","commits":1}]},"readingTime":{"minutes":38.4,"words":11520},"filePathRelative":"posts/planlearn/interview/super java.md","localizedDate":"August 22, 2024","excerpt":"\\n<h3>项目相关</h3>\\n<p>这个类需要加上@Aspect注解用以声明这是一个切面，以及其他相关切面语法。</p>\\n<p>Spring AOP也是对目标类增强，生成代理类。但是与AspectJ的最大区别在于Spring AOP的运行时增强，而AspectJ是编译时增强。使用了Aspect来定义切面,使用Pointcut来定义切入点，使用Advice来定义增强处理。虽然使用了Aspect的Annotation，但是并没有使用它的编译器和织入器。其实现原理是JDK 动态代理，在运行时生成代理类。</p>\\n<p>CGLIB（Code Generation Library）它是一个代码生成类库。它可以在运行时候动态是生成某个类的子类。代理模式为要访问的目标对象提供了一种途径，当访问对象时，它引入了一个间接的层。JDK自从1.3版本开始，就引入了动态代理，并且经常被用来动态地创建代理。JDK的动态代理用起来非常简单，唯一限制便是使用动态代理的对象必须实现一个或多个接口。而CGLIB缺不必有此限制。要想Spring AOP 通过CGLIB生成代理，只需要在Spring 的配置文件引入</p>","autoDesc":true}`);export{o as comp,u as data};
