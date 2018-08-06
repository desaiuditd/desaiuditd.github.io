---
title: Tags
layout: page
header: Posts By Tag
group: navigation
---

{% include JB/setup %}

<!-- Google Adsense -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Incognitech AdSense -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-2157482864791682"
     data-ad-slot="3785934257"
     data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

<ul class="tag_box inline">
  {% assign tags_list = site.tags %}  
  {% include JB/tags_list %}
</ul>


{% for tag in site.tags %}
  <h2 id="{{ tag[0] }}-ref">{{ tag[0] }}</h2>
  <ul>
    {% assign pages_list = tag[1] %}  
    {% include JB/pages_list %}
  </ul>
{% endfor %}

<!-- Google Adsense -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Incognitech AdSense -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-2157482864791682"
     data-ad-slot="3785934257"
     data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
