---
title: "Slimming the Fat-Tail: Morphing-Flow for Adaptive Time Series Modeling"
collection: publications
category: manuscripts
permalink: /publication/slimming-the-fat-tail-morphing-flow-for-adaptive-time-series-modeling
excerpt: "Temporal sequences, even after stationarization, often exhibit leptokurtic distributions with fat tails and persistent distribution shifts. These properties destabilize feature dynamics, amplify model variance, and hind…"
date: 2025-10-06
venue: "Proceedings of the 42nd International Conference on Machine Learning"
authors: "Tianyu Liu; Kai Sun; Fuchun Sun; Yu Luo; Yuanlong Zhang"
image: /images/pubs/2025/slimming-the-fat-tail-morphing-flow-for-adaptive-time-series-modeling.jpg
paperurl: "https://proceedings.mlr.press/v267/liu25bq.html"
citation: "Tianyu Liu, Kai Sun, Fuchun Sun et al. (2025). Slimming the Fat-Tail: Morphing-Flow for Adaptive Time Series Modeling. Proceedings of the 42nd International Conference on Machine Learning"
---

## Abstract

Temporal sequences, even after stationarization, often exhibit leptokurtic distributions with fat tails and persistent distribution shifts. These properties destabilize feature dynamics, amplify model variance, and hinder model convergence in time series forecasting. To address this, we propose Morphing-Flow (MoF), a framework that combines a spline-based transform layer (Flow) and a test-time-trained method (Morph), which adaptively normalizes non-stationary, fat-tailed distributions while preserving critical extreme features. MoF ensures that inputs remain within a network’s effective activation space—a structured, normal-like distribution—even under distributional drift. Experiments across eight datasets show that MoF achieves state-of-the-art performance: With a simple linear backbone architecture, it matches the performance of state-of-the-art models on datasets such as Electricity and ETTh2. When paired with a patch-based Mamba architecture, MoF outperforms its closest competitor by 6.3% on average and reduces forecasting errors in fat-tailed datasets such as Exchange by 21.7%. Moreover, MoF acts as a plug-and-play module, boosting performance in existing models without architectural changes.

## Links

- Paper: https://proceedings.mlr.press/v267/liu25bq.html
