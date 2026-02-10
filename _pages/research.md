---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

{% include base_path %}

## Research Overview

Biological function emerges across scales—from molecules and cells to circuits, organs, and behavior. A major bottleneck is **mesoscale imaging**: acquiring long-duration, high-throughput, cellular-resolution measurements over large fields of view in living systems, while keeping phototoxicity and system complexity under control.

Our lab develops **intravital mesoscopy** and **computational microscopy** to bridge this gap. We combine optical design, principled system optimization, and machine-learning–based reconstruction/analysis to enable large-scale neuronal population recording and extract reliable signals from challenging data. Our long-term goal is to connect **large-scale neural activity** to **behavior and computation**, enabling mechanistic and testable models of brain function. 

## Research Areas

### Area 1: Pan-scale brain observation

We develop mesoscale and pan-scale brain observation tools that expand imaging throughput (volume, speed, and duration) while maintaining single-cell resolution. Our approach is to co-design **optical architectures** and **computational reconstruction** under real constraints (space–bandwidth product, aberrations, scattering, phototoxicity, size/weight, and cost), so that the final system performs reliably in vivo.

**Key Projects:**
- **3D mesoscopic brain observation (MesoLF; Nature Methods 2023):** A mesoscale light-field microscope enabling **3D synchronous recording of >10,000 neurons** across multiple mouse brain regions (co–first author). 
- **High-throughput mesoscale 3D imaging (RUSH3D; Cell 2024):** An optical–computational mesoscope achieving **uniform ~2.6 × 2.6 × 6 μm³ resolution** across **~8,000 × 6,000 × 400 μm³** at **~20 volumes/s**, designed for long-term imaging with low phototoxicity (first author).  
- **Freely behaving mesoscale observation (SOMM; Nature Biomedical Engineering 2024):** A systematically optimized miniaturized mesoscope (with diffractive elements) enabling cellular population recording at up to **16 Hz** over **3.6 × 3.6 mm² FOV**, with **~4 μm resolution**, **~300 μm depth-of-field**, and **<2.5 g** total weight.  
- **Miniaturized microscopy with end-to-end ML design (Nature Communications 2023):** An integrated microscope for extended depth-of-field imaging that exceeds the optical performance of common commercial setups (5×, NA 0.1) while occupying **~0.15 cm³** and weighing **~0.5 g**.  

### Area 2: Large-scale neuronal signal processing

As recording throughput grows, the limiting step often becomes **extracting clean cellular signals** from noisy, scattering- and aberration-corrupted measurements—fast enough to keep pace with experiments, and reliably enough to support quantitative conclusions. We build reconstruction and analysis algorithms that turn raw fluorescence measurements into interpretable cellular activity with high fidelity and high efficiency.

**Key Projects:**
- **DeepWonder (Nature Methods 2023):** A synthesis-training-based background removal framework for functional imaging that reduces processing time by ~**10×** while improving the accuracy and reliability of signal extraction. 
- **DiLFM (Light: Science & Applications 2021):** A sparse-encoding, low-phototoxicity light-field reconstruction framework that mitigates artifacts under sub-optimal illumination and extends the usable observation window by **>50×** in phototoxicity-sensitive settings (e.g., zebrafish larvae). 
- **DeepSeMi (Nature Methods 2023):** A denoising approach that yields an effective **~15× photon budget increase** in standard confocal microscopy, enabling longer and gentler observation of light-sensitive biological dynamics.

### Area 3: Neurocircuits, behavior, and NeuroAI

Our tool-building efforts are guided by neuroscience questions: how neural populations coordinate across brain regions to support learning, memory, and flexible behavior. We are developing experimental and computational frameworks that connect **large-scale neural recordings** to **behavioral structure** and **computational models**, with two goals: (i) extract mechanistic principles of neural computation, and (ii) use those principles to inform **NeuroAI** and next-generation **brain–computer interface** ideas.

**Key Directions (in development):**
- **Circuit-to-behavior modeling at scale:** Joint analysis of large neuronal populations with rich behavioral measurements to identify population codes, state structure, and learning dynamics.  
- **Brain–AI alignment tools:** Methods to compare and align internal representations in biological circuits and artificial agents, emphasizing interpretability and hypothesis generation.  
- **ML- and robotics-enabled experimentation:** Using modern machine learning and automated/robotic systems to increase experimental throughput and enable more systematic, closed-loop interrogation strategies.  

## Funding

Our research is supported by:
- **National Natural Science Foundation of China (NSFC)**
- **Tsinghua University internal programs (e.g., Dushi grant)**
- **IDG/McGovern Institute for Brain Research at Tsinghua University**
