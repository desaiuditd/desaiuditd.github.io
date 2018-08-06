---
title: Extra HTTP Auth User for EasyEngine
date: 2015-05-27 16:39:28 Z
categories:
- Tech
tags:
- EasyEngine
- Nginx
- HTTP Auth
layout: post
status: publish
date_gmt: '2015-05-27 12:39:28 -0400'
---

{% include JB/setup %}

Add a new user for HTTP Auth in EasyEngine setup.

```shell
openssl passwd -crypt <plain-text-password>
```

Above command will print the encrypted password on the console. Copy the encrypted password.

```shell
cd /etc/nginx
vim htpasswd-ee
```

Add following exact line at the end.

```shell
<username>:<encrypted-password>
```

Save the file.

You can commit this change if you want since EasyEngine keeps the nginx directory under version control.

And That's it ! You're good to go with following credentials for your HTTP Auth.

```shell
username : <username>
password : <plain-text-password>
```
