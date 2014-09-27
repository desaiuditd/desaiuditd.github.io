---
layout: post
status: publish
published: true
title: Skype Audio on Ubuntu
author:
  display_name: Udit Desai
  login: desaiuditd
  email: desaiuditd@gmail.com
  url: http://about.me/desaiuditd
author_login: desaiuditd
author_email: desaiuditd@gmail.com
author_url: http://about.me/desaiuditd
wordpress_id: 69
wordpress_url: http://blog.incognitech.in/?p=69
date: '2014-01-05 21:24:46 -0500'
date_gmt: '2014-01-05 15:39:46 -0500'
categories:
- Tech
tags:
- Ubuntu
- skype
- audio
- voice calls
comments: []
---
<p>Here comes another experimental solution for the Skype Audio problem in Linux Distros. You must have noticed that your Skype does not trigger the typical Sign-in sound when you log in to your Skype account at your machine start-up. It also must have happened that you are not able to execute your voice calls over Skype. So all your music files, video files, music players, video players are working except Skype audio on Ubuntu machine of yours is dead. Here is a trick that you can follow to solve this little problem.<span style="color: #767676;"><span style="text-decoration: line-through;"><br />
<&#47;span><&#47;span></p>
<ol>
<li>Select Skype Options.<&#47;li>
<li>Go to "Sound Devices" section.<&#47;li>
<li>Now here comes the tricky part. You will have to set microphone device, speaker device and ringing device that you want your Skype application to use. By default Skype tries to use the default dedicated device &nbsp;for its task; but due to incompatible driver issue or due to any unknown reason it doesn't go well with the default device.<&#47;li>
<li>If your motherboard is of Intel family then here's the trick. Select the options as given in the screenshots provided below.<br />
- <strong>Microphone :<&#47;strong> HDA Intel PCH, STAC92xx Analog (hw:1,0)<br />
- <strong>Speakers :<&#47;strong>&nbsp;HDA Intel PCH, STAC92xx Analog hardware device without any software conversions (plughw: CARD = PCH, DEV = 0)<br />
-&nbsp;<strong>Ringing<&#47;strong> :&nbsp;HDA Intel PCH, STAC92xx Analog hardware device without any software conversions (plughw: CARD = PCH, DEV = 0)Normally, you can keep same device for Ringing &amp; Speakers.<&#47;li></p>
<li>Many community people have opinion that you will have to play around with the possible choices over here and try out each combination with a little guess work.<&#47;li>
<li>But my guess is try to go with the device which has name of your motherboard family variant. So e.g., if your mother board is of Intel family then try out combinations with Intel devices.- These are some of the other combinations that I found on community forums which might work.
<ul>
<li>Sound In: HDA Intel (hw:Intel, 0)<&#47;li>
<li>Sound Out: HDA Intel (plughw:Intel, 0)<&#47;li>
<li>Ringing: HDA Intel (plughw, Intel, 0)<&#47;li><br />
<&#47;ul><br />
<&#47;li></p>
<li>After selecting a proper combination of devices; test your configuration with "Make a test sound" &amp; "Make a test call" buttons. You will be able to hear the log in sound and make a successful test call.<&#47;li><br />
<&#47;ol><br />
<strong>Screenshots:<&#47;strong></p>
<p>[gallery type="rectangular" ids="77,78,79"]</p>
