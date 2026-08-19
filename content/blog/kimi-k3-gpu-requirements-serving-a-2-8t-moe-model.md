---
title: "Kimi K3 GPU Requirements: Serving a 2.8T MoE Model"
excerpt: "Kimi K3 is a 2.8T MoE model whose weights alone need 1.56TB of VRAM. See the real H200, B200, and B300 node counts to serve it, and why self-hosting means a 16-to-32 GPU cluster."
date: "2026-08-18"
image: "/blog/kimi-k3-gpu-requirements-serving-a-2-8t-moe-model.webp"
type: "engineering"
featured: 0
tags:
  - Kimi K3
  - GPU Requirements
  - MoE Model
  - B200 GPU
  - H200 GPU
  - LLM Inference
faqs:
  - question: "How much VRAM does Kimi K3 need?"
    answer: "The released MXFP4 checkpoint is 1,560.94GB, so plan around 1.56TB of HBM for weights alone, before KV cache and overhead. The naive 4-bit estimate of 1.4TB is wrong because it ignores activation scales, embeddings, layer norms, attention projections, and the vision encoder."
  - question: "How many GPUs do you need to serve Kimi K3?"
    answer: "Self-hosting Kimi K3 means a 16-to-32 GPU cluster in most configs. It fits on a single 8x B300 node (2,304GB), but needs 16x B200 across two nodes or 32x H200 across four because an 8x B200 node is 25GB short on weights alone."
  - question: "Why does an 8x B200 node not fit Kimi K3?"
    answer: "An 8x B200 node totals 1,536GB of HBM, and the Kimi K3 checkpoint is 1,560.94GB. The weights are 25GB larger than the whole node before you allocate a single byte of KV cache, so B200 deployments start at 16 GPUs across two nodes."
  - question: "Does Kimi K3 keep all experts in memory?"
    answer: "Yes. Kimi K3 activates 104B of its 2.8T parameters per token, but the router can pick any of the 896 experts for any token, so all experts must stay resident in HBM. MoE saves compute, not memory."
---

Kimi K3 is a 2.8 trillion-parameter Mixture-of-Experts model that activates only 104B parameters per token, yet every expert still has to sit in VRAM. This is the memory math for serving it: why the weights alone need 1.56TB, how a 1M-token KV cache behaves, and the real H200, B200, and B300 node counts to run it. Short version: self-hosting Kimi K3 means a 16-to-32 GPU cluster, so rent it instead of buying it.

Moonshot AI launched Kimi K3 on July 16, 2026, with open weights following in late July under the custom Kimi K3 License, not MIT ([Hugging Face](https://huggingface.co/moonshotai/Kimi-K3), [buildfastwithai](https://www.buildfastwithai.com/blogs/kimi-k3-review)). It's the first open 3T-class release, and it's big enough that "which GPU" is the wrong question. The right question is "how many nodes."

## **GPU Requirements for LLM Inference, in Three Numbers**

Every LLM serving budget comes down to three line items. Get these right and you size the cluster correctly on the first try.

* **Weights baseline:** A fixed cost set by parameter count and precision. It never changes at runtime.
* **KV cache:** The per-request memory that grows with context length and concurrency. For long-context models this is usually the largest runtime cost ([Modular handbook](https://handbook.modular.com/getting-started/calculating-gpu-memory-for-llms)).
* **Overhead:** Activations, workspace buffers, CUDA graphs, and framework allocations, typically another 15-20% on top ([Spheron](https://www.spheron.network/blog/gpu-memory-requirements-llm/)).

Add them, add headroom, then divide by the HBM per GPU. That division is your node count.

### **Weights Baseline: The Rule of Thumb**

Start with the back-of-the-envelope number, then correct it. The rule of thumb is about 2GB of VRAM per billion parameters at FP16, roughly 0.5GB per billion at 4-bit, plus 15-20% on top for KV cache, activations, and framework overhead ([Spheron](https://www.spheron.network/blog/gpu-memory-requirements-llm/)).

A 70B model at FP16 lands near 140GB of weights. At 4-bit it drops to about 35GB. That scaling is linear and predictable, which is exactly why people assume a 2.8T model at 4-bit "should" fit in 1.4TB. It doesn't, and the gap is where deployments die.

### **KV Cache and Activations: The +15-20% That Long Context Breaks**

The 15-20% overhead figure holds at short context. It stops holding the moment you serve long prompts or many concurrent users.

Look at a Llama 3.1 70B example: the KV cache is about 0.6GB at 2,048 tokens and about 40GB at 128,000 tokens ([Spheron](https://www.spheron.network/blog/gpu-memory-requirements-llm/)). Same weights, sixty-six times the cache. At full context, KV cache can exceed the weights themselves. Kimi K3's native window is 1,048,576 tokens, so this isn't a corner case for K3. It is the design point.

## **Why a 2.8T MoE Needs Full Weights Resident but Sparse Compute**

Mixture-of-Experts saves compute, not memory. That distinction decides your hardware bill.

Kimi K3 routes each token to 16 experts out of 896, plus 2 shared experts, activating 104B of its 2.8T parameters ([Hugging Face](https://huggingface.co/moonshotai/Kimi-K3)). That's an activation rate under 4%, so the FLOPs per token look like a 104B dense model. The catch: the router can pick any expert for any token, so all 896 experts must be loaded and ready. Sparse compute, dense memory.

### **104B Active, 896 Experts Resident**

You can't page experts in and out per token without wrecking latency. At production throughput the router touches most experts across a batch anyway. So the full parameter set stays in HBM, and the 104B active figure tells you how fast inference runs, not how much memory you need. Memory is set by the checkpoint size, full stop.

### **The MXFP4 Checkpoint Is 1.56TB, Not 1.4TB**

Kimi K3 ships natively in MXFP4 weights with MXFP8 activations. The released checkpoint is 1,560.94GB across 96 shards, rising to about 2.8TB at MXFP8 and about 5.6TB at BF16 ([Spheron](https://www.spheron.network/blog/deploy-kimi-k3-gpu-cloud/)).

The naive 4-bit math gives 1.4TB. The real checkpoint is 1.56TB because that 4-bit estimate ignores activation scales, embeddings, layer norms, attention projections, and the vision encoder. As Spheron's deployment guide puts it:

> "Plan around 1.56TB, not 1.4TB. That 160GB difference is exactly the margin that decides whether an 8-GPU B200 node loads the model or dies."

That 160GB is the whole game. It's the difference between one node and two.

## **KV Cache at 1M Context: The Real Memory Killer**

At a million tokens, the weights are the easy part. Here is the direct answer: KV cache scales linearly with context length and with the number of concurrent requests, so a 1M-token model serving real traffic can spend more HBM on cache than on weights unless the architecture fights back. Kimi K3 fights back with linear attention.

### **How KV Cache Scales With Context and Concurrency**

KV cache size is proportional to sequence length times batch size times the number of full-attention layers times the per-token key/value footprint. Double the context, double the cache. Double the concurrent users, double it again.

For a conventional 1M-context model, this is untenable. A handful of full-context requests would swamp even a multi-node cluster's memory before the weights got a look in. This is the constraint Kimi K3 was architected around.

### **How Kimi Delta Attention Cuts KV Cache Up to 75%**

Kimi K3 uses Kimi Delta Attention (KDA), a gated delta-rule linear attention, interleaved with full-attention Multi-Head Latent Attention (MLA) layers at a 3:1 ratio ([arXiv:2510.26692](https://arxiv.org/abs/2510.26692)). Three out of every four attention layers carry a constant-size recurrent state instead of a KV cache that grows with context. Only the fourth layer holds a true growing cache.

The payoff is measured. From Moonshot AI's Kimi Linear paper:

> "With an identical training recipe, Kimi Linear outperforms full MLA with a sizeable margin across all evaluated tasks, while reducing KV cache usage by up to 75% and achieving up to 6 times decoding throughput for a 1M context." ([arXiv:2510.26692](https://arxiv.org/abs/2510.26692))

Up to 75% less KV cache and up to 6x decode throughput at 1M context. The MLA layers still grow, so cache isn't free, but KDA is what makes a 1M window serveable at all rather than a spec-sheet number.

## **H200 vs B200 Node Counts to Serve Kimi K3**

Now the buyer's decision. You need enough aggregate HBM to hold 1.56TB of weights plus KV cache plus overhead, with real headroom. Here is what each Blackwell and Hopper generation gives you per 8-GPU node.

| GPU | HBM per GPU | Bandwidth | 8-GPU node HBM |
|---|-------|------|--------|
| H200 | 141GB | 4.8 TB/s | 1,128GB |
| B200 | 192GB | up to 8 TB/s | 1,536GB |
| B300 | 288GB | 8 TB/s | 2,304GB |

Sources: [NVIDIA H200](https://www.nvidia.com/en-us/data-center/h200/), [B200 specs](https://jarvislabs.ai/ai-faqs/nvidia-b200-specs), [B300 (Blackwell Ultra)](https://www.runpod.io/articles/guides/nvidia-b300).

### **Why an 8x B200 Node Doesn't Fit the Checkpoint**

An 8x B200 node totals 1,536GB of HBM3e. The checkpoint is 1,560.94GB. The weights alone are 25GB larger than the whole node before you allocate a single byte of KV cache ([Spheron](https://www.spheron.network/blog/deploy-kimi-k3-gpu-cloud/)).

This is the 160GB margin made concrete. Fits on paper if you misread it as 1.4TB, dies in practice at 1.56TB. B200 deployments therefore start at 16 GPUs across two nodes, not one.

### **Realistic Configs for Kimi K3**

These are the working topologies. Pick by what silicon you can actually get.

* **8x B300, single node (2,304GB):** The cleanest option. Native FP4 support, and at [288GB of HBM3e per Blackwell Ultra card](https://blog.neevcloud.com/nvidia-b300-gpu-for-ai-inference-specs-and-pricing/), 2,304GB holds the 1.56TB checkpoint with room for cache. vLLM day-0 guidance floors K3 at one 8x B300 node ([Runpod](https://www.runpod.io/articles/guides/kimi-k3-technical-faq)).
* **16x B200, two nodes (3,072GB):** The standard Blackwell fallback when B300 supply is tight. Needs high-bandwidth interconnect between nodes ([Runpod](https://www.runpod.io/articles/guides/kimi-k3-technical-faq)).
* **32x H200, four nodes (4,512GB):** The Hopper route, using W4A16 dequantization. More GPUs, more interconnect, but H200 supply is deep ([Spheron](https://www.spheron.network/blog/deploy-kimi-k3-gpu-cloud/)).
* **GB200 NVL72:** For production scale, the rack links 72 Blackwell GPUs and 36 Grace CPUs with 13.4TB of HBM3e and 130 TB/s of NVLink ([NVIDIA](https://www.nvidia.com/en-us/data-center/gb200-nvl72/)). One coherent fabric for the whole model plus heavy concurrency.

A worked decision: you have a 1M-context agent workload and want single-node simplicity. The checkpoint is 1.56TB. An 8x B300 node is 2,304GB, leaving roughly 740GB for KV cache and overhead after weights. KDA has already cut the cache by up to 75%, so that headroom serves real concurrency. One node clears it. Drop to 8x B200 (1,536GB) and you're 25GB short before cache. That single row in the table is the entire sizing exercise.

## **Deploy Kimi K3 on NeevCloud GPUs Today**

Standing up 1.56TB of HBM in-house means procuring 8 to 32 Blackwell or Hopper GPUs, wiring a low-latency multi-node fabric, and babysitting the whole stack. That's months of lead time and capital for one model. Rent the exact node shape instead.

NeevCloud gives you on-demand H200, B200, B300, and GB200 nodes with the interconnect Kimi K3 needs, per-second billing, and no egress traps or lock-in. You provision the cluster, we own every layer from silicon to endpoint.

* **Match the topology to the table above:** Single 8x B300 node, 16x B200 across two nodes, or 32x H200 across four, provisioned in minutes on [NeevCloud GPU compute](https://docs.ai.neevcloud.com/).
* **Serve with your stack:** vLLM or SGLang, orchestrated the way our [Kubernetes-native inference operators](https://blog.neevcloud.com/operators-for-the-inference-era-simplifying-llm-serving-on-kubernetes/) already handle multi-node LLM serving.
* **Skip self-hosting entirely if you want:** If a 16-to-32 GPU cluster is more than your workload needs, our [Model APIs and Playground](https://blog.neevcloud.com/from-playground-to-production-deploying-llms-with-neevcloud-ai-inference/) run frontier open models like [GLM-5.2](https://blog.neevcloud.com/glm-5-2-on-neevcloud-capabilities-availability-and-how-developers-can-use-it/) on managed, pay-per-token endpoints.

Renting the right node beats owning the wrong one, and it beats standing up 1.56TB of HBM to find out you miscounted by 160GB. See [how managed GPU services cut infrastructure overhead](https://blog.neevcloud.com/how-gpu-ai-services-help-enterprises-build-ai-faster-without-infrastructure-overhead/), then spin up a node.

Provision a Kimi K3-ready GPU cluster on NeevCloud. [Talk to our team](/contact-neevcloud), or sign up and start serving. Your first B300 node is already warming up.

Note on figures: Kimi K3's launch benchmarks (93.5 GPQA Diamond, 88.3 Terminal-Bench 2.1, 91.2 BrowseComp) are Moonshot AI's own reported numbers as of the July 2026 release ([buildfastwithai](https://www.buildfastwithai.com/blogs/kimi-k3-review)). GPU specs and node counts are current as of this post's date and can change with new silicon.
