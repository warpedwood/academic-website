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

## Book

My Master's thesis has been published in a book by L'Harmattan in 2019 with a foreword by Irène Bellier. The back cover offers the following summary:

> The Mapuche are often presented as one of the indigenous peoples of Latin America who have shown the fiercest capacity for resistance in the face of Spanish colonisation and, subsequently, in the face of the process of building the Chilean and Argentinian nation-states. This attributed character needs to be reinscribed in the long history of the region, taking into account the importance of the social processes involved in the construction of identity. Through the use of categories such as 'indigenous peoples' or 'nation', in a context of increasing internationalisation of the actors, this construction of Mapuche identity calls into question the 'monocultural' State.

<img src="https://www.editions-harmattan.fr/catalogue/couv/9782343175713r.jpg" alt="drawing" width="600"/>

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
