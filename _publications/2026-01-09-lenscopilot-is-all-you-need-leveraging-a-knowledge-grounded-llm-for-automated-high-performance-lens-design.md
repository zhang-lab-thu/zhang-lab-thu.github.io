---
title: "LensCopilot is all you need: leveraging a knowledge-grounded LLM for automated high-performance lens design"
collection: publications
category: manuscripts
pub_type: conference
permalink: /publication/lenscopilot-is-all-you-need-leveraging-a-knowledge-grounded-llm-for-automated-high-performance-lens-design
excerpt: "Designing multi-elements high-performance optical systems ab initio remains challenging due to a high-dimensional, non-convex search landscape where conventional optimizers without strong initial structures are prone to…"
date: 2026-01-09
venue: "Fifth International Computational Imaging Conference (CITA 2025)"
authors: "Rongkang Zhu; Mingrui Wang; Yuanlong Zhang"
image: /images/pubs/2026/lenscopilot-is-all-you-need-leveraging-a-knowledge-grounded-llm-for-automated-high-performance-lens-design.jpg
paperurl: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/14000/140003V/LensCopilot-is-all-you-need--leveraging-a-knowledge-grounded/10.1117/12.3093653.full"
doi: "10.1117/12.3093653"
citation: "Rongkang Zhu, Mingrui Wang, Yuanlong Zhang (2026). LensCopilot is all you need: leveraging a knowledge-grounded LLM for automated high-performance lens design. Fifth International Computational Imaging Conference (CITA 2025)"
---

## Abstract

Designing multi-elements high-performance optical systems ab initio remains challenging due to a high-dimensional, non-convex search landscape where conventional optimizers without strong initial structures are prone to local minima. We introduce LensCopilot, an autonomous optical-design agent that translates high-level, natural-language intent into an executable, staged optimization program and ultimately into diffraction-limited solutions. LensCopilot first compiles a human-readable curriculum specifying (i) the staged evolution of system specifications (e.g., field of view and aperture) and (ii) a disciplined release schedule for design degrees of freedom, especially aspheric coefficients on designated surfaces. The curriculum also covers merit-function templates and operand/constraint mapping. During execution, a deterministic engine consumes the curriculum and executes a fixed local–Hammer–local (LHL) schedule with per-stage budgets declared in the curriculum. Each stage performs scheduled variable unlocks and constraint updates, interpolates target specifications, instantiates a template-based merit function, and runs the LHL loop; all micro-steps are checkpointed for traceability. All ray tracing and merit-function optimizations are executed via zosAutopt, our Python API layer for Zemax OpticStudio. Evaluations on asphere-intensive imaging objectives, including compact wide-angle (3P), telephoto (5P), and fast high-performance (6P) lenses, show near-diffraction-limited image quality with reduced design time and minimal manual effort. This framework provides a principled bridge from natural-language intent to manufacturable, high-performance optics.

## Links

- Paper: https://www.spiedigitallibrary.org/conference-proceedings-of-spie/14000/140003V/LensCopilot-is-all-you-need--leveraging-a-knowledge-grounded/10.1117/12.3093653.full
- DOI: https://doi.org/10.1117/12.3093653
