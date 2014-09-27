---
layout: post
status: publish
published: true
title: Multiple Instances of Skype
author:
  display_name: Udit Desai
  login: desaiuditd
  email: desaiuditd@gmail.com
  url: http://about.me/desaiuditd
author_login: desaiuditd
author_email: desaiuditd@gmail.com
author_url: http://about.me/desaiuditd
wordpress_id: 290
wordpress_url: http://blog.incognitech.in/?p=290
date: '2014-09-27 11:56:30 -0400'
date_gmt: '2014-09-27 06:11:30 -0400'
categories:
- Uncategorized
tags: []
comments: []
---
<p>Follow these steps to run multiple instances of Skype on same machine.</p>
<h3>Windows<&#47;h3></p>
<ul>
<li>From the Windows taskbar, click <strong>Start<&#47;strong> > <strong>Run<&#47;strong> (or press the <strong>Windows&nbsp;<&#47;strong><a href="http:&#47;&#47;blog.incognitech.in&#47;wp-content&#47;uploads&#47;2014&#47;09&#47;fa829.png"><img class="alignnone size-full wp-image-293" src="http:&#47;&#47;blog.incognitech.in&#47;wp-content&#47;uploads&#47;2014&#47;09&#47;fa829.png" alt="fa829" width="16" height="16" &#47;><&#47;a>&nbsp;+ <strong>R<&#47;strong> keys on your keyboard at the same time).<&#47;li>
<li>In the Run window, type the following command (including the quotes) and press <strong>Ok<&#47;strong>:
<ul>
<li>For 32-bit operating systems:
<pre>"C:\Program Files\Skype\Phone\Skype.exe" &#47;secondary<&#47;pre><br />
<&#47;li></p>
<li>For 64-bit operating systems:
<pre>"C:\Program Files (x86)\Skype\Phone\Skype.exe" &#47;secondary<&#47;pre><br />
<&#47;li><br />
<&#47;ul><br />
<&#47;li><br />
<&#47;ul></p>
<h3>Linux<&#47;h3></p>
<ul>
<li>Press <strong>Alt + F2<&#47;strong> and type the following command:
<pre>skype --secondary<&#47;pre><br />
<&#47;li></p>
<li><strong>Alternative : <&#47;strong>Open a terminal and&nbsp;use the following command in it:
<pre>skype --secondary &amp;<&#47;pre><br />
<&#47;li><br />
<&#47;ul></p>
<h3>Mac<&#47;h3></p>
<ul>
<li>Use this command in terminal:
<pre><code>sudo &#47;Applications&#47;Skype.app&#47;Contents&#47;MacOS&#47;Skype &#47;secondary<&#47;code><&#47;pre><br />
<&#47;li><br />
<&#47;ul></p>
