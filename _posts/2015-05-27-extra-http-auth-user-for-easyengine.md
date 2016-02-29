---
layout: post
status: publish
title: "Extra HTTP Auth User for EasyEngine"
date: '2015-05-27 12:39:28 -0400'
date_gmt: '2015-05-27 12:39:28 -0400'
category:
- Tech
tags:
- EasyEngine
- Nginx
- HTTP Auth
---
{% include JB/setup %}

Add a new user for HTTP Auth in EasyEngine setup.

    openssl passwd -crypt <plain-text-password>

Above command will print the encrypted password on the console. Copy the encrypted password.

    cd /etc/nginx
    vim htpasswd-ee

Add following exact line at the end.

    <username>:<encrypted-password>

Save the file.

You can commit this change if you want since EasyEngine keeps the nginx directory under version control.

And That's it ! You're good to go with following credentials for your HTTP Auth.

    username : <username>
    password : <plain-text-password>
