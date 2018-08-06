---
title: Categories
layout: page
header: Posts By Category
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
  {% assign categories_list = site.categories %}
  {% include JB/categories_list %}
</ul>


{% for category in site.categories %}
  <h2 id="{{ category[0] }}-ref">{{ category[0] | join: "/" }}</h2>
  <ul>
    {% assign pages_list = category[1] %}  
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
