import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a as l,o as r}from"./app-C_wt19t6.js";const n={};function s(i,e){return r(),t("div",null,e[0]||(e[0]=[l('<h1 id="lsm" tabindex="-1"><a class="header-anchor" href="#lsm"><span>LSM</span></a></h1><h3 id="为什么会有lsm树" tabindex="-1"><a class="header-anchor" href="#为什么会有lsm树"><span>为什么会有LSM树</span></a></h3><p>传统的关系型数据库是用btree作为存储结构，能高效的进行查找，但是保存在磁盘中时它会有一个明显的缺陷，那就是逻辑上相离很近但是物理<br> 上缺相隔很远，这就可能造成大量的磁盘随机读写。随机读写比顺序读写慢很多，为了提升IO性能，我们需要一种能将随机操作变为顺序操作的机制，于是就有了LSM树，LSM树能让我们进行顺序写磁盘，从而大幅度提升写操作。</p><h3 id="lsm树的数据结构" tabindex="-1"><a class="header-anchor" href="#lsm树的数据结构"><span>LSM树的数据结构</span></a></h3><h4 id="三个重要组成部分" tabindex="-1"><a class="header-anchor" href="#三个重要组成部分"><span>三个重要组成部分</span></a></h4><h5 id="memtable" tabindex="-1"><a class="header-anchor" href="#memtable"><span>Memtable</span></a></h5><p>Memtable时在内存中的数据结构，用于保存最近更新的数据，会按照key有序的组织数据，可以是用红黑树也可以是用跳表（Hbase）,因为数据是暂时保存在内存中的，所以要通过WAL（write ahead logging，预写式日志）保证数据可靠性</p><h5 id="immutable-memtable" tabindex="-1"><a class="header-anchor" href="#immutable-memtable"><span>Immutable Memtable</span></a></h5><p>当MemTable达到一定大小后，会转化为Immutable MemTable,Immutable Table时Memtable转为SSTable的一种中间状态，写操作由MemTable处理，在转存过程中不阻塞数据更新操作</p><h5 id="sstable-sorted-string-table" tabindex="-1"><a class="header-anchor" href="#sstable-sorted-string-table"><span>SSTable(Sorted String Table)</span></a></h5><p>有序键值对集合，时LSM树组在磁盘中的数据结构,为了加快SSTable的读取，可以通过key的索引以及布隆过滤器来加快key的查找。</p><p><a href="https://zhuanlan.zhihu.com/p/181498475" target="_blank" rel="noopener noreferrer">LSM树详解</a></p><h3 id="合并操作" tabindex="-1"><a class="header-anchor" href="#合并操作"><span>合并操作</span></a></h3><h4 id="size-tiered策略" tabindex="-1"><a class="header-anchor" href="#size-tiered策略"><span>size-tiered策略</span></a></h4><p>size-tiered策略是hbase采用的合并策略，具体内容是当某个规模的集合达到一定的数据量时，将这些集合合并为一个大的集合，比如有5个50个数据的集合，那么将他们合并我一个250个数据的集合，这种策略有一个缺点是当集合达到一定的数量后，合并操作会变得十分的耗时。</p><h4 id="leveled策略" tabindex="-1"><a class="header-anchor" href="#leveled策略"><span>leveled策略</span></a></h4><p>leveled策略是LevelDB和rocksdb采用的合并策略，size-tiered策略因为会产生大数据量的集合，所以会造成突发的IO和CPU资源，所以leveled策略使用了分层的数据结构来代替原来的大数据集合。<br> leveled策略将集合的大小限制在一个小的范围内如5MB，而且将集合划分为不同的层级，每个层级的集合宗大小是固定且递增的。如第一层为50mb，第二层为500mb，当某一层的数据集合大小达到上限是，就会从这一层中选出一个文件盒下一层合并，或者直接提升到下一层，如在合并中发现了数据冲突，则丢弃下一层的数据，因为低层的数据总是更新的。同时leveled策略会限制，除第一层外，其他的每一层的键值都不会重复，这是通过合并时剔除冗余数据实现的，以此来加速在同一层内数据的线性扫描速度。</p>',17)]))}const h=a(n,[["render",s],["__file","LSM树.html.vue"]]),p=JSON.parse(`{"path":"/database/LSM%E6%A0%91.html","title":"LSM","lang":"en-US","frontmatter":{"date":"2024-08-22T00:00:00.000Z","order":4,"category":["database"],"tag":["LSM"],"description":"LSM 为什么会有LSM树 传统的关系型数据库是用btree作为存储结构，能高效的进行查找，但是保存在磁盘中时它会有一个明显的缺陷，那就是逻辑上相离很近但是物理 上缺相隔很远，这就可能造成大量的磁盘随机读写。随机读写比顺序读写慢很多，为了提升IO性能，我们需要一种能将随机操作变为顺序操作的机制，于是就有了LSM树，LSM树能让我们进行顺序写磁盘，从而大...","head":[["meta",{"property":"og:url","content":"https://github.com/coderclsld/coderclsld.github.io/database/LSM%E6%A0%91.html"}],["meta",{"property":"og:site_name","content":"clsld 's blog"}],["meta",{"property":"og:title","content":"LSM"}],["meta",{"property":"og:description","content":"LSM 为什么会有LSM树 传统的关系型数据库是用btree作为存储结构，能高效的进行查找，但是保存在磁盘中时它会有一个明显的缺陷，那就是逻辑上相离很近但是物理 上缺相隔很远，这就可能造成大量的磁盘随机读写。随机读写比顺序读写慢很多，为了提升IO性能，我们需要一种能将随机操作变为顺序操作的机制，于是就有了LSM树，LSM树能让我们进行顺序写磁盘，从而大..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-09T02:58:56.000Z"}],["meta",{"property":"article:author","content":"clsld"}],["meta",{"property":"article:tag","content":"LSM"}],["meta",{"property":"article:published_time","content":"2024-08-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-09T02:58:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"LSM\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-09T02:58:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"clsld\\",\\"url\\":\\"https://github.com/coderclsld\\"}]}"]]},"headers":[{"level":3,"title":"为什么会有LSM树","slug":"为什么会有lsm树","link":"#为什么会有lsm树","children":[]},{"level":3,"title":"LSM树的数据结构","slug":"lsm树的数据结构","link":"#lsm树的数据结构","children":[]},{"level":3,"title":"合并操作","slug":"合并操作","link":"#合并操作","children":[]}],"git":{"createdTime":1675481249000,"updatedTime":1725850736000,"contributors":[{"name":"clsld","email":"807686672@qq.com","commits":1}]},"readingTime":{"minutes":2.58,"words":773},"filePathRelative":"database/LSM树.md","localizedDate":"August 22, 2024","excerpt":"\\n<h3>为什么会有LSM树</h3>\\n<p>传统的关系型数据库是用btree作为存储结构，能高效的进行查找，但是保存在磁盘中时它会有一个明显的缺陷，那就是逻辑上相离很近但是物理<br>\\n上缺相隔很远，这就可能造成大量的磁盘随机读写。随机读写比顺序读写慢很多，为了提升IO性能，我们需要一种能将随机操作变为顺序操作的机制，于是就有了LSM树，LSM树能让我们进行顺序写磁盘，从而大幅度提升写操作。</p>\\n<h3>LSM树的数据结构</h3>\\n<h4>三个重要组成部分</h4>\\n<h5>Memtable</h5>\\n<p>Memtable时在内存中的数据结构，用于保存最近更新的数据，会按照key有序的组织数据，可以是用红黑树也可以是用跳表（Hbase）,因为数据是暂时保存在内存中的，所以要通过WAL（write ahead logging，预写式日志）保证数据可靠性</p>","autoDesc":true}`);export{h as comp,p as data};
