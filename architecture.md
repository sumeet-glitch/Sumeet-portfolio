# SYSTEM ARCHITECTURE & TECHNICAL SPECIFICATIONS
## Sumeet Kumar — Enterprise Portfolio Architecture (`architecture.md`)

> **Architectural Paradigm:** Self-Healing Static Single-Page Application (SPA) with Distributed Service Modals  
> **Repository:** `sumeet-glitch/Sumeet-portfolio`  
> **Deployment Model:** Edge-Cached Static CDN via GitHub Pages  

---

## 1. High-Level System Topology

```
                                    ┌──────────────────────────────────────┐
                                    │             USER CLIENT              │
                                    │    (Web / Desktop / Mobile View)     │
                                    └──────────────────┬───────────────────┘
                                                       │
                                          HTTPS / DNS  │ (GitHub Pages Edge CDN)
                                                       ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                CLIENT-SIDE APPLICATION RUNTIME                                   │
│                                                                                                  │
│  ┌─────────────────────────┐   ┌───────────────────────────┐   ┌──────────────────────────────┐  │
│  │     STRUCTURE LAYER     │   │      STYLING ENGINE       │   │    RESILIENT RUNTIME ENGINE  │  │
│  │  Semantic HTML5 Blocks  │   │  CSS3 Custom Properties   │   │  Subsystem Watchdogs         │  │
│  │  Accessibility Landmarks│   │  Glassmorphism Tokens     │   │  Global Error Trapping       │  │
│  │  Modal Backdrops        │   │  Keyframe Animations      │   │  Circuit Breaker Engine      │  │
│  └────────────┬────────────┘   └─────────────┬─────────────┘   └──────────────┬───────────────┘  │
│               │                              │                                │                  │
│               └──────────────────────────────┼────────────────────────────────┘                  │
│                                              ▼                                                   │
│                               ┌─────────────────────────────┐                                    │
│                               │  LIFECYCLE & EVENT MANAGER  │                                    │
│                               │  • IntersectionObservers    │                                    │
│                               │  • 3D Mouse Tilt Matrix     │                                    │
│                               │  • Typing Looper Engine     │                                    │
│                               │  • Clean Resource Disposal  │                                    │
│                               └──────────────┬──────────────┘                                    │
└──────────────────────────────────────────────┼───────────────────────────────────────────────────┘
                                               │
               ┌───────────────────────────────┼───────────────────────────────┐
               ▼                               ▼                               ▼
 ┌───────────────────────────┐   ┌───────────────────────────┐   ┌───────────────────────────┐
 │   COMMUNICATION BRIDGES   │   │    ENTERPRISE PROJECT     │   │    AUTHENTICATED MEDIA    │
 │                           │   │    ARCHITECTURE FLOWS     │   │    CREDENTIAL REPOSITORY  │
 │ • WhatsApp API (wa.me)    │   │ • Project Jarvis (FastAPI)│   │ • 18 Verified Certificate │
 │ • RFC 6068 Mailto RFC     │   │ • SKAI Engine (LLM ETL)   │   │   PDF & High-Res JPGs     │
 │ • LinkedIn Graph Profile  │   │ • Power BI DAX Pipeline   │   │ • Profile Imagery (PIC/)  │
 └───────────────────────────┘   └───────────────────────────┘   └───────────────────────────┘
```

---

## 2. Technology Stack & Specifications

| Layer | Technology | Version / Spec | Purpose & Implementation |
| :--- | :--- | :--- | :--- |
| **Markup Language** | HTML5 | Living Standard (W3C) | Semantic document tree (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`). |
| **Styling & Theming** | Vanilla CSS3 | Level 3 / Level 4 | Design system tokens (`:root`), glassmorphism cards, CSS Grid, Flexbox, Orb keyframe animations. |
| **Client Engine** | JavaScript | ES2022+ / Vanilla | Subsystem supervisor wrappers, `IntersectionObserver`, `requestAnimationFrame`, `CircuitBreaker`. |
| **Typography** | Google Fonts API | CDN (preconnect) | `Plus Jakarta Sans` (Sans-serif UI), `Fira Code` (Monospace Code/Telemetry), `Space Grotesk`. |
| **Iconography** | Font Awesome | v6.5.1 CDN | Vector icon glyphs for enterprise technologies, navigation items, and contact channels. |
| **Hosting & CDN** | GitHub Pages CDN | Fastly / Edge TLS 1.3 | Global multi-region edge delivery with automated Git deploy triggers. |
| **Version Control** | Git & GitHub | Git 2.4x | Version tracking, atomic commits, and repository governance via `AGENT_RULES.md`. |

---

## 3. Repository Directory Structure & File Map

```
d:\My Profile\
├── .git\                                  # Git version control metadata & commit history
├── Certifications\                        # High-resolution verified credential artifacts
│   ├── 3c4ccf01-0a60-4ad8-82ff-4f815d7730cf.pdf                                # PW Skills Verification PDF
│   ├── 6a3cf7f048e4848b51bff0d2.pdf                                            # Specialized Analytics Verification PDF
│   ├── ADVANCE CERTIFICATES IN DATA ANALYSIS.jpeg                               # Advanced Data Analytics Credential
│   ├── BE 10X.jpeg                                                              # Be10X AI Tools Certification
│   ├── Certification Of Participation Internship CAT.jpg                        # Executive CAT Analytics Internship Certificate
│   ├── Certification Power BI Workshop.jpg                                      # Power BI Workshop Credential
│   ├── Certification Skill Nation Generative AI Tools .jpg                      # Skill Nation Gen AI Tools Certificate
│   ├── Deloitte Certification Data Analytics Job Simulation.jpg                 # Deloitte Data Analytics Job Simulation
│   ├── FOUNDATION COURSES AT PVT BANKING.pdf                                    # Private Banking Foundation PDF
│   ├── GEN AI WITH M365 & COPILOT.pdf                                           # Microsoft 365 Copilot & Gen AI PDF
│   ├── GEN AI.jpeg                                                              # Generative AI Core Certificate
│   ├── POWER BI.jpeg                                                            # Power BI Mastery Certificate
│   ├── Physics Wallah Certification For Foundation Course in Private Banking.jpg# PW Private Banking Certificate
│   ├── Physics Wallah Certification For Gen AI with Microsoft 365 and Co-pilot.jpg # PW Copilot Gen AI Certificate
│   ├── Physics Wallah Certification For Generative AI for All.jpg               # PW Generative AI for All Certificate
│   ├── Physics Wallah Certification For Generative AI for Developers.jpg         # PW Gen AI for Developers Certificate
│   ├── Physics Wallah Certification For React.Js - Basics to Advance.jpg        # PW React.js Full-Stack Certificate
│   └── Physics Wallah Certification for Excel For Finance.jpg                   # PW Financial Modeling in Excel Certificate
├── PIC\                                   # Imagery and photography assets
│   └── MY PIC.jpeg                                                              # Official Profile Photography (Sumeet Kumar)
├── AGENT_RULES.md                         # Master enterprise architect & security governance protocol
├── architecture.md                        # Complete system architecture and technical specifications
├── design.md                              # Unified design system, color tokens, and UI/UX standards
├── index.html                             # Core SPA presentation layout, case studies, and modal templates
├── memory.md                              # Cross-session active state and operational memory store
├── phases.md                              # Project lifecycle roadmap and Definition of Done (DoD)
├── PRD.md                                 # Product Requirements Document & stakeholder personas
├── rules.md                               # Strict coding standards, negative constraints, and boundary rules
├── script.js                              # Resilient self-healing runtime, watchdog supervisor, and DOM engine
└── style.css                              # Design system stylesheet, glassmorphism rules, and keyframes
```

---

## 4. Component Architecture & Subsystems

### 4.1 Resilient Runtime Subsystems ([script.js](file:///d:/My%20Profile/script.js))
1. **Global Error Trap & Watchdog:**
   - Intercepts `window.addEventListener('error')` and `window.addEventListener('unhandledrejection')`.
   - Prevents fatal script errors from terminating root browser execution.
2. **Subsystem Supervisor (`supervise(name, fn, fallback)`):**
   - Encapsulates discrete DOM subsystems in fault-tolerant execution blocks.
3. **Circuit Breaker Engine (`CircuitBreaker`):**
   - Three-state finite state machine (`CLOSED`, `OPEN`, `HALF-OPEN`) preventing cascading network failures.
4. **Lifecycle & Resource Disposal Manager (`LifecycleManager`):**
   - Maintains memory registries of active `IntersectionObserver` instances, `setTimeout` timers, and `requestAnimationFrame` IDs.
   - Cleans up all resources on `beforeunload` to prevent memory leaks.

### 4.2 Presentation & Interaction Components ([index.html](file:///d:/My%20Profile/index.html))
1. **Navbar Component:** Fixed blurred header (`backdrop-filter: blur(16px)`), responsive mobile slide-out drawer, and dynamic active link tracker based on viewport position.
2. **Hero Component:** Call-to-action buttons, typing role animator, and real-time statistics counter.
3. **Projects Grid Component:** Multi-category filter with animated display transitions and dynamic case-study modal triggers.
4. **Skills Matrix Component:** Two-column categorized skill cards with progress bars and dynamic percentage counters.
5. **Certifications Showcase:** Multi-column 3D perspective grid with dynamic mouse-follow transform calculations.
6. **Contact Hub:** Integrated client-side sanitized contact form, direct WhatsApp floating widget, and click-to-contact chips.

---

## 5. Data Contracts & Schemas

### 5.1 Project Case Study Entity Schema
```typescript
interface ProjectCaseStudy {
    id: string;
    title: string;
    category: 'ai' | 'powerbi' | 'finance' | 'retail';
    subtitle: string;
    description: string;
    architecturePipeline: string; // ASCII pipeline representation
    highlights: string[];
    metrics: {
        label: string;
        value: string;
    }[];
    techStack: string[];
}
```

### 5.2 Certification Entity Schema
```typescript
interface CertificationItem {
    id: string;
    provider: string;
    name: string;
    category: 'AI & Gen AI' | 'Business Intelligence' | 'Financial Modeling' | 'Web Engineering';
    filePath: string;
    fileType: 'pdf' | 'jpg' | 'jpeg';
    credentialUrl?: string;
}
```

### 5.3 Telemetry Metric Entity Schema
```typescript
interface TelemetryMetric {
    id: string;
    targetCount: number;
    suffix: string;
    label: string;
    durationMs: number;
}
```

---

## 6. Network & Communication Architecture

1. **WhatsApp Direct API Protocol:**
   - Target URL format: `https://wa.me/919153579997?text={URL_ENCODED_MESSAGE}`
   - Action: Opens WhatsApp Web or WhatsApp Native Client with a pre-populated inquiry string.
2. **RFC 6068 Mailto Protocol:**
   - Target URL format: `mailto:sumit.kausik@gmail.com?subject={ENCODED_SUBJECT}&body={ENCODED_BODY}`
   - Action: Launches local OS default email client (Outlook, Thunderbird, Apple Mail) with sanitized contact form payload.
3. **LinkedIn Professional Graph:**
   - Target URL: `https://linkedin.com/in/sumeet-kumar-86038010b` with `rel="noopener noreferrer"`.
