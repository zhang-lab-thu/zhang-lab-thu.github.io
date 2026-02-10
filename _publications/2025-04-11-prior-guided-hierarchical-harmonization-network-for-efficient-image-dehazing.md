---
title: "Prior-guided Hierarchical Harmonization Network for Efficient Image Dehazing"
collection: publications
category: manuscripts
pub_type: journal
permalink: /publication/prior-guided-hierarchical-harmonization-network-for-efficient-image-dehazing
excerpt: "Image dehazing is a crucial task that involves the enhancement of degraded images to recover their sharpness and textures. While vision Transformers have exhibited impressive results in diverse dehazing tasks, their qua…"
date: 2025-04-11
venue: "Proceedings of the AAAI Conference on Artificial Intelligence"
authors: "Xiongfei Su; Siyuan Li; Yuning Cui; Miao Cao; Yulun Zhang; Zheng Chen; Zongliang Wu; Zedong Wang; Yuanlong Zhang; Xin Yuan"
image: /images/pubs/2025/prior-guided-hierarchical-harmonization-network-for-efficient-image-dehazing.jpg
paperurl: "https://ojs.aaai.org/index.php/AAAI/article/view/32756"
doi: "10.1609/aaai.v39i7.32756"
citation: "Xiongfei Su, Siyuan Li, Yuning Cui et al. (2025). Prior-guided Hierarchical Harmonization Network for Efficient Image Dehazing. Proceedings of the AAAI Conference on Artificial Intelligence"
---

## Abstract

Image dehazing is a crucial task that involves the enhancement of degraded images to recover their sharpness and textures. While vision Transformers have exhibited impressive results in diverse dehazing tasks, their quadratic complexity and lack of dehazing priors pose significant drawbacks for real-world applications. In this paper, guided by triple priors, Bright Channel Prior (BCP), Dark Channel Prior (DCP), and Histogram Equalization (HE), we propose a Prior-guided Hierarchical Harmonization Network (PGHHNet) for image dehazing. PGHNet is built upon the UNet-like architecture with an efficient encoder and decoder, consisting of two module types: (1) Prior aggregation module that injects BCP/DCP and selects diverse contexts with gating attention. (2) Feature harmonization modules that subtract low-frequency components from spatial and channel aspects and learn more informative feature distributions to equalize the feature maps. Inspired by observing the sparsity of BCP/DCP and the histogram equalization, we harmonize the deep features using a histogram equation-guided module and further leverage BCP/DCP to guide spatial attention through a sandwich module as the bottleneck. Comprehensive experiments demonstrate that our model efficiently attains the highest level of performance among existing methods across four different datasets for image dehazing tasks.

## Links

- Paper: https://ojs.aaai.org/index.php/AAAI/article/view/32756
- DOI: https://doi.org/10.1609/aaai.v39i7.32756
