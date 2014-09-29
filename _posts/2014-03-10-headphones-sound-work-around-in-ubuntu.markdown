---
layout: post
status: publish
published: true
title: Headphones Sound Work Around in Ubuntu
author:
  display_name: Udit Desai
  login: desaiuditd
  email: desaiuditd@gmail.com
  url: http://about.me/desaiuditd
author_login: desaiuditd
author_email: desaiuditd@gmail.com
author_url: http://about.me/desaiuditd
wordpress_id: 116
wordpress_url: http://blog.incognitech.in/?p=116
date: '2014-03-10 16:03:58 -0400'
date_gmt: '2014-03-10 10:18:58 -0400'
categories:
- Tech
tags:
- Ubuntu
- Headphones
- Speakers
comments: []
---
<p>You might have faced this problem that your laptop speakers are working perfectly fine; but the same sound doesn't come when you attach your headphones to the laptop. Here's a small headphones sound work around in ubuntu:</p>
<ol>
<li>Using a Terminal="Applications->Accessories->Terminal"<&#47;li>
<li>Open this file for editing. <code>sudo vim &#47;etc&#47;modprobe.d&#47;alsa-base.conf<&#47;code><&#47;li>
<li>Insert this line at the bottom: <code>options snd-hda-intel model=hp-dv5 enable_msi=1<&#47;code><&#47;li>
<li>Save. Close. Reboot. Check your levels in alsamixer. <code>alsamixer<&#47;code><&#47;li>
<li>Press <code><F6><&#47;code> to select the correct soundcard. Press <code><F3><&#47;code> to show playback levels. <code><F4><&#47;code> selects capture levels [or use <code><Tab><&#47;code>]. Use the left&#47;right arrow keys to select and up&#47;down arrow keys to change levels. <code><M><&#47;code> to mute&#47;unmute.<&#47;li>
<li>Go to "System ->Preferences ->Sound" and make sure the correct sound-card is default and adjust your profile on the hardware tab.<&#47;li>
<li>On the output tab choose the correct device.<&#47;li><br />
<&#47;ol><br />
And there you go !! Your headphones should be banging your ears with the bass ! :+1: :wink:</p>
<p>NOTE : This solution is tested on Ubuntu 13.04.</p>
