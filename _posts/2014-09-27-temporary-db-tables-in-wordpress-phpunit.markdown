---
layout: post
status: publish
published: true
title: Temporary DB tables in WordPress PhpUnit
author:
  display_name: Udit Desai
  login: desaiuditd
  email: desaiuditd@gmail.com
  url: http://about.me/desaiuditd
author_login: desaiuditd
author_email: desaiuditd@gmail.com
author_url: http://about.me/desaiuditd
wordpress_id: 279
wordpress_url: http://blog.incognitech.in/?p=279
date: '2014-09-27 11:23:41 -0400'
date_gmt: '2014-09-27 05:38:41 -0400'
categories:
- Tech
tags:
- WordPress
- PhpUnit
- Testing
- Tescases
- Database
- MySQL
comments: []
---
<p>When we set up <a href="https:&#47;&#47;make.wordpress.org&#47;core&#47;handbook&#47;automated-testing&#47;" target="_blank">WordPress-PhpUnit Environment<&#47;a>, to automate test-cases for our plugin&#47;theme (mainly plugins, I've not come across any WP theme which has test cases written for it), we either&nbsp;set it up <a href="http:&#47;&#47;ben.lobaugh.net&#47;blog&#47;84669&#47;how-to-add-unit-testing-and-continuous-integration-to-your-wordpress-plugin" target="_blank">manually<&#47;a> or we take help of <a href="https:&#47;&#47;github.com&#47;wp-cli&#47;wp-cli&#47;wiki&#47;Plugin-Unit-Tests" target="_blank">WP-CLI<&#47;a>&nbsp;to build the scaffolding of our plugin. WordPress has an amazing <a href="https:&#47;&#47;develop.svn.wordpress.org&#47;trunk&#47;tests&#47;phpunit&#47;includes&#47;testcase.php" target="_blank">testcase wrapper class<&#47;a> for PhpUnit that can be used when we make out plugin testable.</p>
<p>Of course, when our plugin does not deal with database then we do not have to worry about as our plugin will only make use of the readily available tables of WordPress and there will not be any need to introduce&nbsp;new database tables. But if we deal with database tables through our plugin then we need these tables when we perform test-cases using PhpUnit.&nbsp;<a href="http:&#47;&#47;codex.wordpress.org&#47;Class_Reference&#47;wpdb" target="_blank">wpdb<&#47;a>&nbsp;&amp; <a href="http:&#47;&#47;codex.wordpress.org&#47;Creating_Tables_with_Plugins" target="_blank">dbDelta<&#47;a>&nbsp;gives you enough&nbsp;power to play with database tables in your plugin. But when we are in PhpUnit environment,&nbsp;schematics are a bit different. WordPress testcase wrapper creates temporary DB&nbsp;tables in WordPress PhpUnit environment. What this means is when we execute test-cases for our plugin, the built-in&nbsp;wrapper class - mentioned before -&nbsp;tells WordPress to create temporary (virtual) tables in MySql and NOT permanent (actual) tables (<a href="https:&#47;&#47;core.trac.wordpress.org&#47;changeset&#47;27041&#47;trunk&#47;tests&#47;phpunit&#47;includes&#47;testcase.php" target="_blank">Reference<&#47;a>). Because of this, your test-cases related DB tables will only exist during the PhpUnit execution. They will be destroyed from the memory.</p>
<p>The sole purpose of such mechanism is to keep the test data away from the database and not bloat the memory with corrupt data, keeping the database intact. If this is the case then you're good to go; but there are times when we can't move ahead and believe that everything is working absolutely fine until we see the actual results ;). We might need those database table to&nbsp;retain its state even after the PhpUnit execution. In that case we can use following solution:</p>
<p>Override <code>setUp<&#47;code> method of&nbsp;<code>WP_UnitTestCase<&#47;code> class in your own testcase class. The method definition should look as follows:</p>
<pre>function setUp() {<br />
    &#47;&#47; Perform the actual task according to parent class.<br />
    parent::setUp();<br />
    &#47;&#47; Remove filters that will create temporary tables. So that permanent tables will be created.<br />
    remove_filter( 'query', array( $this, '_create_temporary_table' ) );<br />
    remove_filter( 'query', array( $this, '_drop_temporary_table' ) );<br />
}<br />
<&#47;pre><br />
Above code will do the trick. Happy coding &amp; testing ! :)</p>
