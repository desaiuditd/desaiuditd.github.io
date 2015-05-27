---
layout: post
title: "Extra HTTP Auth User for EasyEngine"
description: ""
category:
- Tech
tags:
- EasyEngine
- Nginx
- HTTP Auth
---
{% include JB/setup %}

Add a new user for HTTP Auth in EasyEngine setup.

```bash
openssl passwd -crypt <plain-text-password>
```

Above command will print the encrypted password on the console. Copy the encrypted password.

```bash
cd /etc/nginx
vim htpasswd-ee
```

Add following exact line at the end.

```bash
<username>:<encrypted-password>
```

Save the file.

You can commit this change if you want since EasyEngine keeps the nginx directory under version control.

And That's it ! You're good to go with following credentials for your HTTP Auth.

```bash
username : <username>
password : <plain-text-password>
```
