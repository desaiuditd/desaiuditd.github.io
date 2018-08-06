---
title: Multiple Instances of Skype
date: 2014-09-27 15:56:30 Z
categories:
- Tech
tags:
- Skype
- Multiple Instances
layout: post
status: publish
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
date_gmt: '2014-09-27 06:11:30 -0400'
comments: []
---

Follow these steps to run multiple instances of Skype on same machine.

### Windows

- From the Windows taskbar, click **Start** > **Run** (or press the **Windows** ![Windows](/uploads/2014/09/fa829.png) + **R** keys on your keyboard at the same time).

- In the Run window, type the following command (including the quotes) and press **Ok**:

    - For 32-bit operating systems: `"C:Program FilesSkypePhoneSkype.exe" /secondary`
    - For 64-bit operating systems: `"C:Program Files (x86)SkypePhoneSkype.exe" /secondary`

### Linux

- Press **Alt + F2** and type the following command: `skype --secondary`
- **Alternative :** Open a terminal and use the following command in it: `skype --secondary &`

### Mac

- Use this command in terminal: `sudo /Applications/Skype.app/Contents/MacOS/Skype /secondary`
