---
layout: post
status: publish
published: true
title: Beats Audio On Ubuntu (HP Envy 15)
author:
  display_name: Udit Desai
  login: desaiuditd
  email: desaiuditd@gmail.com
  url: http://about.me/desaiuditd
author_login: desaiuditd
author_email: desaiuditd@gmail.com
author_url: http://about.me/desaiuditd
wordpress_id: 33
wordpress_url: http://incognitech.wordpress.com/?p=33
date: '2013-10-27 20:11:41 -0400'
date_gmt: '2013-10-27 14:41:41 -0400'
categories:
- Tech
tags:
- Beats Audio
- Dual Speakers
- Envy 15
- HP
- Linux
- Sub-Woofer
- Ubuntu
comments:
- id: 4
  author: grateful reader
  author_email: bilalbox@gmail.com
  author_url: ''
  date: '2014-06-15 11:39:00 -0400'
  date_gmt: '2014-06-15 05:54:00 -0400'
  content: Excellent post. Worked a treat. Note that the mute LED lights up on the
    keyboard, and you lose your notification tray volume control icon, but after a
    minute or so it reappears and you can unmute the audio. Thanks!
- id: 5
  author: Udit Desai
  author_email: desaiuditd@gmail.com
  author_url: http://blog.incognitech.in
  date: '2014-06-16 19:08:00 -0400'
  date_gmt: '2014-06-16 13:23:00 -0400'
  content: |-
    Glad that it helped you ! :)
    Happy to help :)
---
<p>The very new HP Envy 15 or any other high config machine with Beats Audio with its 4 audio speakers (2 under the display &amp; 2 below the keyboard in the back panel) and sub-woofer&nbsp;boasting Beats Audio technology which in itself is a tremendous piece of work in the audio technology domain. It has an impressive audio output registering an average 85 decibels on playing Bryan Adam's Summer of '69.</p>
<p>But the tricky part is; if you are a Ubuntu Geek and want to run the same machine on Ubuntu with the expectation that it will run perfectly fine just like it runs on pre-installed Windows; then you are mistaken. Ubuntu by default takes the default Intel on-board audio controller instead of Beats' external one and your beats audio on ubuntu are dead. You will need to explicitly tell you machine to override the on-board audio controller. It is a big turn off if you can't get your machine working on its full capacity even though it is capable of doing so. Here is an easy to go steps to get that outstanding result back on Ubuntu:</p>
<ol>
<li>Firstly you will need to install hda-jack-retask tool; which mainly helps us to re-task the audio jack pins on our motherboard.<&#47;li>
<li><code>sudo apt-add-repository ppa:diwic&#47;hda<&#47;code><&#47;li>
<li><code>sudo apt-get update<&#47;code><&#47;li>
<li><code>sudo apt-get install hda-jack-retask<&#47;code><&#47;li>
<li><code>hda-jack-retask &amp;<&#47;code><&#47;li>
<li>Open hda-jack-retask<&#47;li>
<li>Select the IDT 92HD91BXX codec (may be different on other models; but definately other than your on-board controller i.e., Intel-XXX).<&#47;li>
<li>Check the "Show unconnected pins" box (the internal speakers do not show as connected)<&#47;li>
<li>Remap 0x0d (Internal Speaker, which is your Front side) to "Internal speaker"<&#47;li>
<li>Remap 0x0f ("Not connected", which is the under-display speakers) to "Internal speaker"<&#47;li>
<li>Remap 0x10 ("Not connected", which is the subwoofer) to "Internal speaker (LFE)"<&#47;li>
<li>Apply &amp; test audio output with any media player.<&#47;li>
<li>Select "Install boot override" to save the settings to apply at boot time.<&#47;li>
<li>Reboot. When it comes back, you should have full sound from all speakers. Also test headphones. Plugging in headphones should disable sound from all internal speakers.<&#47;li><br />
<&#47;ol></p>
<p style="text-align: center;"><a href="http:&#47;&#47;blog.incognitech.in&#47;wp-content&#47;uploads&#47;2013&#47;10&#47;selection_001.png"><img class="alignnone size-medium wp-image-39" src="http:&#47;&#47;blog.incognitech.in&#47;wp-content&#47;uploads&#47;2013&#47;10&#47;selection_001.png?w=279" alt="Selection_001" width="279" height="300" &#47;><&#47;a><&#47;p></p>
<p style="text-align: left;">NOTE : This solution will work on Ubuntu 12.04, 12.10 &amp; 13.04. From 13.10 on wards hda-jack-retask has been moved to another ppa repository; and the pulse configuration for the Audio Jack Tasks is changed as well.<&#47;p></p>
<p style="text-align: left;">As of Ubuntu 13.10, hda-jack-retask is part of alsa-tools. Just install the alsa-tools-gui package from the regular archive and start "hdajackretask". (Note: if you don't have a .pulse directory, try symlinking .pulse to .config&#47;pulse - and remove the symlink again when you have closed hda-jack-retask. Solution is not tested with guarantee that it would work on all the machines.)</p>
<p>UPDATE : Tested on 14.04 as well &amp; it works properly.<&#47;p></p>
