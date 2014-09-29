---
layout: post
status: publish
published: true
title: WhatsApp on Ubuntu
author:
  display_name: Udit Desai
  login: desaiuditd
  email: desaiuditd@gmail.com
  url: http://about.me/desaiuditd
author_login: desaiuditd
author_email: desaiuditd@gmail.com
author_url: http://about.me/desaiuditd
wordpress_id: 167
wordpress_url: http://blog.incognitech.in/?p=167
date: '2014-03-27 03:41:07 -0400'
date_gmt: '2014-03-26 21:56:07 -0400'
categories:
- Tech
tags:
- Ubuntu
- WhatsApp
comments:
- id: 6
  author: nicolas cuevas
  author_email: nicolascuevas@gmail.com
  author_url: ''
  date: '2014-07-25 21:14:00 -0400'
  date_gmt: '2014-07-25 15:29:00 -0400'
  content: nice post, i'll try it
- id: 7
  author: Udit Desai
  author_email: desaiuditd@gmail.com
  author_url: http://blog.incognitech.in
  date: '2014-07-31 02:19:00 -0400'
  date_gmt: '2014-07-30 20:34:00 -0400'
  content: |-
    Please do share your feedback. Let me know if you have any doubts.

    Happy to help. :)
- id: 8
  author: Azeez Abass
  author_email: blue-boy-cool@hotmail.com
  author_url: ''
  date: '2014-08-31 19:08:00 -0400'
  date_gmt: '2014-08-31 13:23:00 -0400'
  content: sweet! i was looking for the emojins
- id: 9
  author: DHEERENDRA PRASAD
  author_email: prasad.dheerendra@gmail.com
  author_url: ''
  date: '2014-09-20 18:49:00 -0400'
  date_gmt: '2014-09-20 13:04:00 -0400'
  content: I am getting server closed connection when I am filling all the details.
    Can you help on it?
- id: 10
  author: DHEERENDRA PRASAD
  author_email: prasad.dheerendra@gmail.com
  author_url: ''
  date: '2014-09-20 18:49:00 -0400'
  date_gmt: '2014-09-20 13:04:00 -0400'
  content: I am getting server closed connection when I am filling all the details.
    I am using elementary os luna which runs on ubuntu 12.04 LTS.
- id: 11
  author: Udit Desai
  author_email: desaiuditd@gmail.com
  author_url: http://blog.incognitech.in
  date: '2014-09-27 11:31:00 -0400'
  date_gmt: '2014-09-27 05:46:00 -0400'
  content: |-
    I'm really sorry, I do not have any knowledge on Luna.
    It maybe possible that WhatsApp has closed this loophole. Not sure though. Because I myself have stopped using this solution, as I've moved out from using WhatsApp itself :).
---
<h2><a href="http:&#47;&#47;blog.incognitech.in&#47;wp-content&#47;uploads&#47;2014&#47;03&#47;ubuntuwhatsapp2.png"><img class="size-medium wp-image-182 aligncenter" alt="ubuntuwhatsapp2" src="http:&#47;&#47;blog.incognitech.in&#47;wp-content&#47;uploads&#47;2014&#47;03&#47;ubuntuwhatsapp2-257x266.png" width="257" height="266" &#47;><&#47;a><&#47;h2></p>
<h2>Installation and configuration<&#47;h2></p>
<ol>
<li><code>apt-get install python python-dateutil python-argparse<&#47;code><&#47;li>
<li><code>wget https:&#47;&#47;github.com&#47;tgalal&#47;yowsup&#47;archive&#47;master.zip<&#47;code><&#47;li>
<li><code>unzip master.zip<&#47;code><&#47;li>
<li><code>cd yowsup-master&#47;src<&#47;code><&#47;li>
<li><code>cp config.example yowsup-cli.config\<&#47;code><&#47;li>
<li><code>cat yowsup-cli.config<&#47;code><&#47;li><br />
<&#47;ol></p>
<pre>cc=34<br />
phone=34123456789<br />
id=<br />
password=<&#47;pre></p>
<ol start="7">
<li><code>chmod +x yowsup-cli<&#47;code><&#47;li>
<li><code>.&#47;yowsup-cli --requestcode sms --config yowsup-cli.config<&#47;code><&#47;li><br />
<&#47;ol></p>
<pre>status: sent<br />
retry_after: 3605<br />
length: 6<br />
method: sms<&#47;pre></p>
<ol start="9">
<li><code>.&#47;yowsup-cli --register 123-456 --config yowsup-cli.config<&#47;code><&#47;li><br />
<&#47;ol></p>
<pre>status: ok<br />
kind: free<br />
pw: S1nBGCvZhb6TBQrbm2sQCfSLkXM=<br />
price: 0,89<br />
price_expiration: 1362803446<br />
currency: EUR<br />
cost: 0.89<br />
expiration: 1391344106<br />
login: 34123456789<br />
type: new<&#47;pre></p>
<ol start="10">
<li>Copy the <code>pw<&#47;code> field from the output &amp; paste it in front of <code>password<&#47;code> field in the <code>yowsup-cli.config<&#47;code>.Your <code>yowsup-cli.config<&#47;code> should look like below:<code>cat yowsup-cli.config<&#47;code><&#47;li><br />
<&#47;ol></p>
<pre>cc=34<br />
phone=34123456789<br />
id=<br />
password=S1nBGCvZhb6TBQrbm2sQCfSLkXM=<&#47;pre></p>
<h2>Send a message<&#47;h2><br />
<code>.&#47;yowsup-cli --send 34111222333 "Test message" --wait --config yowsup-cli.config<&#47;code></p>
<pre>Connecting to c.whatsapp.net<br />
Authed 34123456789<br />
Sent message<br />
Got sent receipt<&#47;pre></p>
<h2>Receive messages<&#47;h2><br />
<code>.&#47;yowsup-cli --listen --autoack --keepalive --config yowsup-cli.config<&#47;code></p>
<pre>Connecting to c.whatsapp.net<br />
Authed 34123456789<br />
34111222333@s.whatsapp.net [02-02-2013 14:14]:I have received a test message from you<&#47;pre></p>
<h2>Interactive: Send and receive messages<&#47;h2><br />
<code>.&#47;yowsup-cli --interactive 34111222333 --wait --autoack --keepalive --config yowsup-cli.config<&#47;code></p>
<pre>Connecting to c.whatsapp.net<br />
Authed 34123456789<br />
Starting Interactive chat with 34111222333<br />
Enter Message or command: (&#47;available, &#47;lastseen, &#47;unavailable)<br />
Yes, I know it<br />
34123456789 [02-02-2013 14:15]:Yes, I know it<br />
Enter Message or command: (&#47;available, &#47;lastseen, &#47;unavailable)<br />
34111222333@s.whatsapp.net [02-02-2013 14:16]:What are you doing?<br />
Enter Message or command: (&#47;available, &#47;lastseen, &#47;unavailable)<br />
Testing a new application<br />
34123456789 [02-02-2013 14:16]:Testing a new application<br />
Enter Message or command: (&#47;available, &#47;lastseen, &#47;unavailable)<br />
&#47;unavailable<&#47;pre></p>
<h2>Too much of geeky stuff ??<&#47;h2></p>
<ol>
<li>Skip all the steps of sending and receiving a message. Just install the WhatsApp client &amp; configure it as mentioned.<&#47;li>
<li>We will use Pidgin Instant Messenger to make this work. Install it if you don't have it.<br />
<code>sudo apt-get install pidgin<&#47;code><&#47;li></p>
<li>Then install WhatsApp protocol implementation for Pidgin.<br />
<code>sudo add-apt-repository ppa:whatsapp-purple&#47;ppa<&#47;code><br />
<code>sudo apt-get update<&#47;code><br />
<code>sudo apt-get install pidgin-whatsapp<&#47;code><&#47;li></p>
<li>Now simply launch Pidgin. Add a whatsapp account, put username as the phone number with country code ( as written above) and password as the string we obtained earlier.<&#47;li>
<li>Use WhatsApp on Ubuntu of yours. ( P.S.: Don&rsquo;t use it simultaneously on your mobile )<&#47;li><br />
<&#47;ol></p>
<h2>WhatsApp Emojis for Pidgin<&#47;h2><br />
You need to install and enable the <strong>Emoji smiley theme<&#47;strong>. Just copy one of the sub-directories from following Git repositories to <code>$HOME&#47;.purple&#47;smileys&#47;<&#47;code> and enable the newly installed theme in the Pidgin preferences window.</p>
<ul>
<li><a href="https:&#47;&#47;github.com&#47;stv0g&#47;unicode-emoji">https:&#47;&#47;github.com&#47;stv0g&#47;unicode-emoji<&#47;a><&#47;li>
<li><a href="https:&#47;&#47;github.com&#47;VxJasonxV&#47;emoji-for-pidgin">https:&#47;&#47;github.com&#47;VxJasonxV&#47;emoji-for-pidgin<&#47;a><&#47;li><br />
<&#47;ul></p>
<h2>Known Issues<&#47;h2><br />
I've tested this on my Ubuntu 13.04 (64 bit) &amp; it seems to be working perfectly. Though the trouble part is at the other hand. Whenever the other person receives a message sent by us via Pidgin; the mobile phone hangs up a bit &amp; WhatsApp gets crashed ;) :P</p>
<p>Yet, it's all togather a different story whether WhatsApp mobile app is reading messages properly &nbsp;which comes from Pidgin or not. Maybe Pidgin seems to be sending any unknown message&#47;socket headers which the mobile app can't decode. (Tested on Samsung S Advance &amp; Micromax Canvas) &nbsp;Anyways, this is problem is for the mobile users :P and not for you if you want to use WhatsApp on your machine.</p>
<p>Regarding Emojis, some of them might not work but this is the best that I've come across.</p>
<p>&nbsp;</p>
<p>P.S. : This method will not work if you're already using WhatsApp on your mobile with same mobile number. You will need another number to get this working.</p>
