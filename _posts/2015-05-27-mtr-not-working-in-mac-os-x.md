---
layout: post
title: "mtr not working in Mac OS X"
description: ""
category:
- Tech
tags:
- mtr
- Mac
- OS X
---
{% include JB/setup %}

## Problem

    mtr google.com
    mtr: unable to get raw sockets.

## Solution

    # Follow your version for mtr with `0.86`
    sudo chown root:wheel /usr/local/Cellar/mtr/0.86/sbin/mtr
    sudo chmod u+s /usr/local/Cellar/mtr/0.86/sbin/mtr

## Problem

    mtr google.com
    mtr: command not found

## Solution

Add following line entry in your `.bash_profile` / `.bashrc` / `.zshrc` file.

    alias mtr=/usr/local/sbin/mtr