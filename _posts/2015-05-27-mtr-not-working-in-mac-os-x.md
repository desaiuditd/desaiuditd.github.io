---
layout: post
status: publish
title: "mtr not working in Mac OS X"
date: '2015-05-27 12:39:28 -0400'
date_gmt: '2015-05-27 12:39:28 -0400'
category:
- Tech
tags:
- mtr
- Mac
- OS X
---
{% include JB/setup %}

## Problem

```shell
mtr google.com
mtr: unable to get raw sockets.
```

## Solution

```shell
# Follow your version for mtr with `0.86`
sudo chown root:wheel /usr/local/Cellar/mtr/0.86/sbin/mtr
sudo chmod u+s /usr/local/Cellar/mtr/0.86/sbin/mtr
```

## Problem

```shell
mtr google.com
mtr: command not found
```

## Solution

Add following line entry in your `.bash_profile` / `.bashrc` / `.zshrc` file.

```shell
alias mtr=/usr/local/sbin/mtr
```
