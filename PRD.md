# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Sumeet Kumar — Enterprise AI & Analytics Portfolio Platform

> **Document Version:** 2.0.0  
> **Status:** Production / Live  
> **Repository:** `sumeet-glitch/Sumeet-portfolio`  
> **Deployment Target:** GitHub Pages (`https://sumeet-glitch.github.io/Sumeet-portfolio/`)  
> **Author:** Sumeet Kumar (AI Developer & Financial Analytics Specialist)

---

## 1. Executive Summary & Problem Statement

### 1.1 The Problem
In enterprise technology and financial operations, technical decision-makers (CTOs, Head of Analytics, VPs of Finance) struggle to find talent capable of bridging the gap between deep financial domain knowledge (budget variance, ledger reconciliation, multi-franchise P&L auditing) and cutting-edge software engineering (Python, FastAPI, Power BI DAX, and Generative AI orchestration). Standard resumes fail to demonstrate architecture workflows, live interactive design systems, and verified certification credentials.

### 1.2 The Solution
The **Sumeet Kumar Enterprise AI & Analytics Portfolio Platform** is a bespoke, high-performance, single-page application (SPA) engineered to demonstrate 13+ years of enterprise data transformation, AI systems development, and financial automation. It provides recruiters, clients, and technical stakeholders with:
1. Interactive project architecture modals showing end-to-end data pipelines (e.g., Project Jarvis, SKAI Intelligence).
2. Filterable project portfolios spanning AI Automation, Power BI BI Suites, and Financial Reconciliation Engines.
3. Live credential verification through a 3D-interactive certification gallery backed by 18 authentic PDF/JPEG artifacts.
4. Omnichannel instant-engagement pipelines (Direct WhatsApp, RFC 6068 Mailto, Phone, and LinkedIn).

---

## 2. Target Audience & Stakeholder Personas

| Persona | Role / Profile | Core Needs & Goals | Primary Conversion Path |
| :--- | :--- | :--- | :--- |
| **Enterprise Recruiter / Talent Lead** | Senior Technical Recruiter hiring for Senior Data / AI / BI Roles | Validate experience depth (13+ years), certifications, technical stack, and contact availability. | Click "Get in Touch" / WhatsApp / Direct Email |
| **CTO / Head of Engineering** | Executive seeking AI Developer / Automation Architect | Verify architecture rigor, self-healing code patterns, clean code design, and full-stack capabilities. | Explore Project Architecture Modals (Jarvis / SKAI) |
| **VP of Finance / COO** | Business Leader looking for Financial BI & Reconciliation Automation | Evaluate business impact, cost-reduction metrics (40% overhead reduction, 50% reporting acceleration). | Review Power BI & Reconciliation Case Studies |
| **Consulting Client / Business Owner** | Small/Medium Enterprise looking for custom BI dashboards or retail systems | Review past delivery (Swadeshi Retail, ATS Resume Pro) and initiate rapid project discovery. | Floating WhatsApp Widget / Contact Form |

---

## 3. Core Features & Functional Capabilities

### 3.1 Hero & Executive Positioning Engine
- **Dynamic Role Typist:** Animated cycling across key specializations (`Data Analyst`, `Business Intelligence Specialist`, `Financial Reporting & Operations Analyst`, `Power BI & Automation Expert`, `AI Developer & Solution Architect`).
- **Telemetry Counter:** Animated statistics bar computing real-time easing for:
  - `13+` Years Experience
  - `50+` Enterprise Projects Delivered
  - `100%` Audit & Reconciliation Accuracy
  - `40%` Process Efficiency Gains
- **Instant CTAs:** High-contrast buttons for "Explore Projects", "Chat on WhatsApp", and "LinkedIn".

### 3.2 Interactive Project Architecture & Case Study Explorer
- **Category Filter Tabs:** Multi-facet filtering by `all`, `ai`, `powerbi`, `finance`, and `retail`.
- **Architectural Flow Modals:** Dynamic modal popups with ASCII data flow pipelines for:
  - `Project Jarvis`: Voice API ➔ Intent Router ➔ FastAPI Local Daemon ➔ OS Execution.
  - `SKAI Intelligence`: Enterprise Data ➔ JSON ETL Parser ➔ LLM Orchestration ➔ Executive Synthesis.
  - `Power BI Executive Dashboard`: SQL Server Feeds ➔ Power Query ETL ➔ DAX Modeling ➔ Executive KPI Dashboards.
  - `Automated Reconciliation Pipeline`: Multi-source Invoices ➔ Power Pivot Relational Engine ➔ Automated Variance Detection.
  - `Swadeshi Retail Management`: Inventory Auditing ➔ Supplier Ledger Verification ➔ POS Telemetry.
  - `ATS Resume Pro`: LLM Prompt Parsing ➔ Keyword Scoring ➔ Match Analytics.

### 3.3 Dynamic Skill Competency Matrix
- **Automated Fill Progress Bars:** Triggered via `IntersectionObserver` when entering viewport.
- **Synchronized Numeric Counter:** Counts up from 0 to target score ($85\% - 95\%$) over 1200ms duration.
- **Categorized Competencies:**
  - AI & Web Engineering (Python, FastAPI, React.js, LLM Orchestration, LangChain).
  - Business Intelligence (Power BI, DAX, Power Query M, SQL Server, Tableau).
  - Financial Engineering (Reconciliation, Budget Variance, P&L Auditing).
  - Automation (RPA, Batch Scripts, OS Automation).

### 3.4 3D-Interactive Certification Verification Gallery
- **Mouse-Follow Tilt Calculations:** 3D perspective tilt ($X/Y$ rotation) on card hover.
- **18 Verified Documents:** Direct modal/new-tab viewing of official certifications from Physics Wallah (PW Skills), Deloitte, Skill Nation, and Executive Banking programs.

### 3.5 Omnichannel Lead Generation & Contact Interface
- **Form Submission Bridge:** Client-side sanitized contact form formatting mailto payloads with encoded subjects and bodies.
- **Floating WhatsApp Widget:** Persistent, pulse-animated widget with pre-formatted discovery message linking directly to `+91 9153579997`.
- **Direct Phone & Email Chips:** Click-to-call and click-to-email hooks with copy-safe attributes.

---

## 4. Non-Functional Requirements (NFRs)

1. **Performance & Page Speed:**
   - First Contentful Paint (FCP) $\le 1.0\text{s}$.
   - Largest Contentful Paint (LCP) $\le 1.8\text{s}$.
   - Cumulative Layout Shift (CLS) $\le 0.05$.
2. **Resilience & Fault Tolerance:**
   - Zero-crash guarantee via global `error` and `unhandledrejection` traps.
   - Subsystems isolated with `supervise()` try-catch watchdogs.
   - Circuit-breaker wrapped fetch utilities.
3. **Responsive Viewport Matrix:**
   - Ultra-wide 4K ($2560\text{px}+$): Max-width container clamped at $1200\text{px}$.
   - Desktop / Laptop ($1024\text{px} - 1440\text{px}$): Multi-column grid.
   - Tablet ($768\text{px} - 1023\text{px}$): 2-column adaptive layout.
   - Mobile ($320\text{px} - 767\text{px}$): Single-column stack with slide-out drawer menu.
4. **Accessibility (a11y):**
   - WCAG 2.1 AA Compliance for contrast ratios (Gold `#f59e0b` against Dark Navy `#060d17`).
   - Explicit `aria-label` tags on all icon buttons and modal close triggers.

---

## 5. Out of Scope / Future Enhancements

- [ ] **Live Interactive LLM Chatbot Widget:** Client-side embed of a fine-tuned RAG assistant answering career and technical queries based on Sumeet's resume.
- [ ] **Headless Backend (FastAPI / Cloudflare Worker):** Automated contact form submission to a serverless webhook sending instant Telegram/Email alerts.
- [ ] **WebAssembly (WASM) BI Demo Sandbox:** In-browser DuckDB / WASM instance allowing visitors to query mock financial datasets directly inside the portfolio.
- [ ] **Automated GitHub Activity Visualizer:** Live GraphQL feed fetching real-time repository commits and deployment statuses.
