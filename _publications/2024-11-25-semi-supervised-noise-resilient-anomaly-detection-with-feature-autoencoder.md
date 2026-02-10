---
title: "Semi-supervised noise-resilient anomaly detection with feature autoencoder"
collection: publications
category: manuscripts
permalink: /publication/semi-supervised-noise-resilient-anomaly-detection-with-feature-autoencoder
excerpt: "Most methods only use normal samples to learn anomaly detection (AD) models in an unsupervised manner. However, these samples may be noisy in real-world applications, causing the models to be unable to accurately identi…"
date: 2024-11-25
venue: "Knowledge-Based Systems"
authors: "Tianyi Zhu; Lina Liu; Yibo Sun; Zhi Lu; Yuanlong Zhang; Chao Xu; Jun Chen"
image: /images/pubs/2024/1-s2.0-S0950705124010797-gr1.jpg
paperurl: "https://www.sciencedirect.com/science/article/pii/S0950705124010797"
doi: "10.1016/j.knosys.2024.112445"
citation: "Tianyi Zhu, Lina Liu, Yibo Sun et al. (2024). Semi-supervised noise-resilient anomaly detection with feature autoencoder. Knowledge-Based Systems"
---

## Abstract

Most methods only use normal samples to learn anomaly detection (AD) models in an unsupervised manner. However, these samples may be noisy in real-world applications, causing the models to be unable to accurately identify anomaly objects. In addition, there are a small number of anomaly samples in real industrial production that should be fully utilized to help model discrimination. Existing methods of introducing anomaly samples still have bottlenecks in model identification capabilities. In this paper, by introducing both normal and a few abnormal samples, we propose a novel semi-supervised learning method for anomaly detection, named RobustPatch, which can improve the model discriminability through a self-cross scoring mechanism and the learning of feature AutoEncoder. Our approach contains two core designs: Firstly, we propose a self-cross scoring module, calculating the weights of normal and anomaly features extracted from corresponding images using a self-scoring and cross-scoring manner, respectively. Secondly, our approach proposes a fully connected feature AutoEncoder to rate the extracted features, which is trained with the supervision of the scored weights. Extensive experiments on the MVTecAD and BTAD datasets validate the superior anomaly boundaries discriminability of our approach and superior performance in noise-polluted scenarios.

## Links

- Paper: https://www.sciencedirect.com/science/article/pii/S0950705124010797
- DOI: https://doi.org/10.1016/j.knosys.2024.112445
