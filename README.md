# 璟策 · 珠宝门店主动式管理系统 / JingCe · Jewelry Store Proactive Management Demo

> 珠宝零售连锁门店主动式管理系统静态 Demo —— 经营驾驶舱 · 周期任务中心 · AI 经营参谋。
>
> A static demo of a proactive management system for jewelry retail chains — operations cockpit, task center, and AI business advisor.

[![HTML](https://img.shields.io/badge/HTML-Vanilla-orange)](https://developer.mozilla.org/html)
[![No Dependencies](https://img.shields.io/badge/dependencies-zero-success)]()
[![Demo](https://img.shields.io/badge/type-Static%20Demo-blue)]()

---

## 简介 / Overview

本 Demo 由 3 个静态页面构成，使用原生 HTML / CSS / JavaScript，**零外部依赖**，双击即可打开。

This demo consists of 3 static pages built with vanilla HTML / CSS / JavaScript — **zero dependencies**, just double-click to open.

核心业务闭环 / Core business loop：

```
经营异常 / 周期标准 → AI 归因与优先级 → 自动生成动作 → 责任到人 → 证据验收 → 量化考核 → 标准沉淀
Anomaly / scheduled standards → AI attribution & priority → auto-generate actions → assign owners → evidence-based acceptance → quantitative review → standards distillation
```

---

## 页面 / Pages

| 页面 / Page | 文件 / File | 说明 / Description |
|---|---|---|
| 经营驾驶舱 / Operations Cockpit | `index.html` | 经营信号、人货场体征、主动管理闭环、今日周期动作、管理动作与经营结果的关联 / Business signals, people-goods-store vitals, proactive management loop, today's scheduled actions, action-to-result linkage |
| 周期任务中心 / Task Center | `tasks.html` | 日/周/月标准任务、AI 异常插单、责任人、过程证据、验收与考核 / Daily/weekly/monthly standard tasks, AI anomaly insertion, owners, process evidence, acceptance & evaluation |
| AI 经营参谋 / AI Business Advisor | `ai-review.html` | 可解释诊断、根因链、行动方案、收益模拟、量化复盘、门店排名 / Explainable diagnosis, root-cause chain, action plans, benefit simulation, quantitative review, store ranking |

---

## 快速开始 / Quick Start

**方式一：直接打开 / Option 1: Direct open**

双击 `index.html` 即可在浏览器中查看。/ Double-click `index.html` to view in a browser.

**方式二：本地服务器 / Option 2: Local server**

```bash
python3 -m http.server 4173
```

然后打开 / Then open：`http://127.0.0.1:4173/index.html`

---

## 文件结构 / File Structure

```
jewelry-proactive-demo/
├── index.html        # 经营驾驶舱 / Operations cockpit
├── tasks.html        # 周期任务中心 / Task center
├── ai-review.html    # AI 经营参谋 / AI business advisor
├── app.js            # 交互逻辑 / Interaction logic
├── styles.css        # 样式 / Styles
└── README.md
```

---

## 设计理念 / Design Philosophy

- **主动而非被动 / Proactive, not reactive**：不是等门店上报问题，而是系统主动发现异常并派单。/ Instead of waiting for stores to report issues, the system proactively detects anomalies and dispatches tasks.
- **证据驱动 / Evidence-driven**：每个动作都有过程证据和验收记录，管理可追溯。/ Every action has process evidence and acceptance records, making management traceable.
- **闭环沉淀 / Closed-loop distillation**：管理动作的结果沉淀为新的标准，持续优化。/ Action results distill into new standards for continuous improvement.

---

## 说明 / Notes

这是一个**静态展示 Demo**，所有数据为演示用模拟数据，不含后端逻辑。适合用于产品概念演示和方案沟通。

This is a **static presentation demo** — all data is mock data for demonstration purposes, with no backend logic. Suitable for product concept demos and solution communication.
