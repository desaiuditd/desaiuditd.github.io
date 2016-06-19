---
layout: post
status: publish
title: "Download Files from Apache Server Directory Listings"
date: '2016-06-18 20:34:28 -0400'
date_gmt: '2016-06-18 20:34:28 -0400'
category:
- Tech
tags:
- Apache
- wget
- terminal
- shell
- download
---
{% include JB/setup %}

This evening I came across a [Google Search](https://www.google.com/search?q=game+of+thrones+audiobooks) result for [Game of Thrones Audiobooks](http://tinfoilgaming.com/Public/AudioBooks/A%20Song%20of%20Ice%20and%20Fire/) and my immediate question was how can I download all these `.mp3` files at once to my computer. As going through each of those directory and clicking on those files to download was, well a bit too boring and time consuming.

So I gave a thought to it and tried to play with the very famous shell command `wget` and that's it! After few trials it gave me what I needed.

```shell
wget --execute="robots = off" --mirror --convert-links --no-parent --wait=5 <website-url>
```

## Explanation with each options

- `wget`: Simple Command to make CURL request and download remote files to our local machine.
- `--execute="robots = off"`: This will ignore robots.txt file while crawling through pages. It is helpful if you're not getting all of the files.
- `--mirror`: This option will basically mirror the directory structure for the given URL. It's a shortcut for `-N -r -l inf --no-remove-listing` which means:
    - `-N`: don't re-retrieve files unless newer than local
    - `-r`: specify recursive download
    - `-l inf`: maximum recursion depth (inf or 0 for infinite)
    - `--no-remove-listing`: don't remove '.listing' files
- `--convert-links`: make links in downloaded HTML or CSS point to local files
- `--no-parent`: don't ascend to the parent directory
- `--wait=5`: wait 5 seconds between retrievals. So that we don't thrash the server.
- `<website-url>`: This is the website url from where to download the files.

Happy Downloading :smiley:
