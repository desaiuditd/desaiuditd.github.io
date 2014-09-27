---
layout: post
status: publish
published: true
title: Skype Notification Sound Distorted in Ubuntu
author:
  display_name: Udit Desai
  login: desaiuditd
  email: desaiuditd@gmail.com
  url: http://about.me/desaiuditd
author_login: desaiuditd
author_email: desaiuditd@gmail.com
author_url: http://about.me/desaiuditd
wordpress_id: 257
wordpress_url: http://blog.incognitech.in/?p=257
date: '2014-07-17 17:21:29 -0400'
date_gmt: '2014-07-17 11:36:29 -0400'
categories:
- Tech
tags:
- Ubuntu
- skype
- Notification Sound
- Distorted sound
- Skype Notification Distorted
comments: []
---
<p>It has been noticed and seems to be a common problem in Linux Community users that Skype doesn't get along well with Linux Distros. Recently I upgraded to Ubuntu 14.04 &amp; I was sure enough that it's not going to be in peace for long. The very first problem I observed that the Skype notification sound distorted in Ubuntu when it played &amp; also the distortion continued unless I&nbsp;logged out or shut down the machine.</p>
<p>Here are&nbsp;simple steps to follow in order to fix this issue:</p>
<ol>
<li>Open the file&nbsp;<code>&#47;etc&#47;pulse&#47;default.pa<&#47;code> in your favorite text editor&nbsp;with root privileges. E.g.,&nbsp;<code>sudo vim &#47;etc&#47;pulse&#47;default.pa<&#47;code><&#47;li>
<li>Search for the line : <code>load-module module-hal-detect<&#47;code><&#47;li>
<li>Append&nbsp;<code>tsched=0<&#47;code> to the end. i.e.,&nbsp;<code>load-module module-hal-detect tsched=0<&#47;code><&#47;li>
<li>Restart pulse or just restart your machine &amp; the distortion should be gone.<&#47;li>
<li>If you do not have a line with&nbsp;<code>load-module module-hal-detect<&#47;code> then search for the line :&nbsp;<code>load-module module-udev-detect<&#47;code><&#47;li>
<li>Append <code>tsched=0<&#47;code> to the end. i.e., <code>load-module module-udev-detect tsched=0<&#47;code>. And then&nbsp;restart the machine.<&#47;li><br />
<&#47;ol><br />
NOTE :&nbsp;Not sure what the side effects are by disabling Glitch Free Audio; but hey, at least it doesn't bug you with its annoying sound anymore :wink: :smile:</p>
