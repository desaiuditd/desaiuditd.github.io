---
layout: page
title : Portfolio
header : Project Archive
group: navigation
---
<div id="portfolio">

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

  {% include JB/setup %}

  <div class="row">
  {% for portfolio in site.data.portfolios %}
      <div class="col-md-4 col-sm-6 portfolio-item">
          <a href="#portfolioModal{{ portfolio.id }}" class="portfolio-link" data-toggle="modal">
              <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                      <i class="fa fa-plus fa-3x"></i>
                  </div>
              </div>
              <img src="{{ ASSET_PATH }}/img/portfolio/{{ portfolio.thumbnail }}" class="img-responsive" alt="">
              <div class="portfolio-caption">
                  <h4>{{ portfolio.title }}</h4>
                  <p class="text-muted">{{ portfolio.subtitle }}</p>
              </div>
          </a>
      </div>
  {% endfor %}
  </div>

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

</div>
