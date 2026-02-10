---
permalink: /
title: "Welcome to Neurolabware"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

## About Our Lab

The Yuanlong Zhang Lab at Tsinghua University develops quantitative technology and computational frameworks to observe brain activity and explain how it gives rise to behavior and cognition. We work at the intersection of systems neuroscience, neuroengineering, and machine learning, with an emphasis on rigorous measurement, reproducible analysis, and interpretable models.

Our long-term goal is to make neural activity measurable at scale, make behavior describable in structured language, and connect brain computation with AI in ways that generate testable scientific hypotheses.

## Research Focus

Our research centers on three connected directions:

- **Pan-scale brain observation (pan-view):** We develop experimental and computational methods for scalable observation of large neuronal populations, aiming to expand both spatial coverage and analytical throughput in behaving animals.
- **Language-describable behavior understanding:** We build pipelines that map rich behavioral data to structured, language-compatible representations, enabling comparison across individuals, tasks, and experiments.
- **NeuroAI:** We develop tools to align brain data and artificial agents (and their internal representations), using each as a model system to better understand the other.

Across these projects, we integrate method development, data engineering, statistical inference, and machine learning to move from raw measurements to mechanistic, testable models.



## Recent News

{% assign news_items = site.posts | where_exp: "post", "post.categories contains 'news'" | sort: "date" | reverse %}
{% if news_items.size > 0 %}
<ul class="news-list">
  {% for post in news_items limit:10 %}
  <li><strong>{{ post.date | date: "%Y-%m-%d" }}</strong> — <a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
{% else %}
<p>No news yet. Add items in <code>_posts/</code> with <code>categories: [news]</code> to auto-populate this section.</p>
{% endif %}

## Recent Publications

{% assign recent_pubs = site.publications | sort: "date" | reverse %}
{% if recent_pubs.size > 0 %}
<ul class="publication-list">
  {% for post in recent_pubs limit:10 %}
  <li><strong>{{ post.date | date: "%Y" }}</strong> — <a href="{{ post.url | relative_url }}">{{ post.title }}</a>{% if post.venue %}, <em>{{ post.venue }}</em>{% endif %}</li>
  {% endfor %}
</ul>
{% else %}
<p>No publications yet.</p>
{% endif %}


## Lab Environment

We provide:
- **Collaborative research:** Shared projects, open discussion, and a culture of constructive feedback.
- **Modern infrastructure:** Access to advanced experimental facilities and computational resources.
- **Mentorship and training:** Regular mentoring, technical onboarding, and opportunities to lead projects and publish.
- **Collaborations:** Active partnerships across Tsinghua and with external research groups.
- **Sustainable pace:** Clear expectations and support for long-term, high-quality research.

## Location

We are located in the Biomedicine Hall at Tsinghua University (Beijing, China). Our lab is part of the School of Life Sciences and is affiliated with the IDG/McGovern Institute for Brain Research at Tsinghua University.

---


## Quick Links

- [Research Projects](/research/) — Current directions and ongoing work
- [Team Members](/team/) — Meet the lab
- [Publications](/publications/) — Papers and preprints
- [Join Us](/joinus/) — Open positions and how to apply
- [Contact](/contact/) — Get in touch
- [Network](https://media.au.tsinghua.edu.cn/) — Limit research group at Tsinghua


*"[Inspirational quote about research or science]"*
