import{_ as o,c as t,o as n,a2 as s,j as r,a}from"./chunks/framework.BtLJ_pvx.js";const u=JSON.parse('{"title":"uroboroSQLとは","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"uroboroSQLとは"}],["meta",{"name":"og:url","content":"/uroborosql-doc_v0.x/why_uroborosql/"}]]},"headers":[],"relativePath":"why_uroborosql/index.md","filePath":"why_uroborosql/index.md"}'),l={name:"why_uroborosql/index.md"};function i(h,e,p,b,d,g){return n(),t("div",null,e[0]||(e[0]=[s('<h1 id="uroborosqlとは" tabindex="-1">uroboroSQLとは <a class="header-anchor" href="#uroborosqlとは" aria-label="Permalink to &quot;uroboroSQLとは&quot;">​</a></h1><p><strong>uroboroSQL</strong>は2Way-SQLが利用可能なJava製のシンプルなSQL実行ライブラリです。</p><p><a href="https://www.future.co.jp/architect/" target="_blank" rel="noreferrer">フューチャーアーキテクト</a>社内にて、2006-2007年頃に<a href="http://s2dao.seasar.org/ja/" target="_blank" rel="noreferrer">S2Dao</a>を参考に開発され、プロジェクトで実際に利用されて現在まで改善が続けられてきました。社内ではWebアプリケーションフレームワークや各種設計開発支援ツールと連携・統合される形で利用されています。</p><p>とはいえ、社内で秘伝のタレ化していることは否めず、開発フェーズでは開発パートナーさんからも「ググれない」から使い方がわからないいう声もちらほら。だったらOSS化してしまえということのが公開のきっかけです。</p><h2 id="uroborosqlを使う理由" tabindex="-1">uroboroSQLを使う理由 <a class="header-anchor" href="#uroborosqlを使う理由" aria-label="Permalink to &quot;uroboroSQLを使う理由&quot;">​</a></h2><p>JavaからRDBにアクセスするとき、Java標準のJPA(Java Persistence API)の実装である<a href="https://www.eclipse.org/eclipselink/" target="_blank" rel="noreferrer">EclipseLink</a>、<a href="http://openjpa.apache.org/" target="_blank" rel="noreferrer">OpenJPA</a>はもとより、歴史のあるORMとして<a href="https://hibernate.org/" target="_blank" rel="noreferrer">Hibernate</a>、<a href="http://www.mybatis.org/mybatis-3/ja/index.html" target="_blank" rel="noreferrer">MyBatis</a>、<a href="https://spring.io/projects/spring-data-jdbc#overview" target="_blank" rel="noreferrer">Spring Data JDBC</a>といったグローバルで使われているものもありますし、日本でよく使われてきた<a href="http://s2dao.seasar.org/ja/" target="_blank" rel="noreferrer">S2Dao</a>、<a href="http://s2container.seasar.org/2.4/ja/s2jdbc.html" target="_blank" rel="noreferrer">S2JDBC</a>、<a href="http://dbflute.seasar.org/" target="_blank" rel="noreferrer">DBflute</a>、<a href="https://doma.readthedocs.io/en/stable/" target="_blank" rel="noreferrer">Doma</a>といったものもあります。</p><p>こういった数多のDB系ライブラリ・フレームワークの中で解決したい領域もそれぞれですが、<strong>uroboroSQL</strong>は主にSQL中心の設計コンセプトを採用しています。Javaを中心に考えてSQLを組み立てるという思想ではなく、SQLに足りないところをJavaで補うという思想です。</p><p>これはエンタープライズシステムにおいて、ORマッパーやクエリビルダでは実装しきれない、hint句による実行計画の指定や分析関数の利用など複雑かつDBプロダクト依存のSQLを使う場合に有効と考えています。</p><p>そのため、<strong>uroboroSQL</strong>はSQLは2Way-SQL方式で記述ができるものの、ORMでよくあるエンティティクラスとリレーションをたどって遅延ロードして子エンティティを取得するなどの機能は有していません。（単純なエンティティクラスへのマッピングは提供しています）</p><p>その分、エンタープライズで培われたノウハウとして、区分値サポート、リトライ、フィルターによるカスタマイズなどの機能を充実させています。また、2Way-SQLのIF分岐に対してカバレッジを取れるようにするという、品質視点での機能があるのも特徴です。</p><h3 style="text-align:center;">SQLの能力を最大限活かしつつ、生産性と品質を高めたい</h3><p>それが<strong>uroboroSQL</strong>の最大の関心事なのです。</p><h2 id="further-reading" tabindex="-1">Further Reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to &quot;Further Reading&quot;">​</a></h2>',13),r("iframe",{src:"//www.slideshare.net/slideshow/embed_code/key/bOHqva5K4q4X7R",width:"595",height:"485",frameborder:"0",marginwidth:"0",marginheight:"0",scrolling:"no",style:{border:"1px solid #CCC","border-width":"1px","margin-top":"10px","margin-bottom":"5px","max-width":"100%"},allowfullscreen:""},null,-1),a(),r("div",{style:{"margin-bottom":"5px"}},[r("strong",null,[r("a",{href:"//www.slideshare.net/KenichiHoshi1/uroborosql-osc2017-tokyospring",title:"uroboroSQLの紹介 (OSC2017 Tokyo/Spring)",target:"_blank"},"uroboroSQLの紹介 (OSC2017 Tokyo/Spring)")]),a(" from "),r("strong",null,[r("a",{href:"https://www.slideshare.net/KenichiHoshi1",target:"_blank"},"Kenichi Hoshi")])],-1)]))}const f=o(l,[["render",i]]);export{u as __pageData,f as default};
