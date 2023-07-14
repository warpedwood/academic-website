---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

 <script src="https://bibbase.org/show?bib=https%3A%2F%2Fbibbase.org%2Fzotero-mypublications%2Fpablobarnierkhawam&jsonp=1"></script>

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
