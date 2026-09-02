# CODING STANDARDS, BOUNDARIES & NEGATIVE CONSTRAINTS
## Sumeet Kumar — Repository Engineering Rules (`rules.md`)

> **Enforcement Level:** STRICT & NON-NEGOTIABLE  
> **Applies To:** All Software Engineers, Autonomous AI Agents, and CI/CD Automation  
> **Repository:** `sumeet-glitch/Sumeet-portfolio`  

---

## 1. Approved Technology & Dependency Whitelist

Only the following libraries, CDNs, and standards are permitted in this codebase:

| Category | Permitted Dependency / Source | Prohibited Alternatives |
| :--- | :--- | :--- |
| **Core Runtime** | Vanilla Modern JavaScript (ES2022+), Semantic HTML5 | Heavy client runtimes (jQuery, AngularJS, Legacy React) |
| **Styling Engine** | Vanilla CSS3 Custom Properties (`:root`), Flexbox, CSS Grid | Tailwind CSS (unless explicitly requested), Bootstrap |
| **Typography** | Google Fonts (`Plus Jakarta Sans`, `Fira Code`, `Space Grotesk`) | Unlicensed or untracked local font binaries |
| **Icon Assets** | Font Awesome Free v6.5.1 CDN (`cdnjs.cloudflare.com`) | Random unverified SVG CDNs or inline messy SVG blobs |
| **Hosting Engine** | GitHub Pages Static Edge CDN | Dynamic servers requiring custom Node/PHP runtimes |

> **STRICT RULE:** No external npm package or third-party CDN script may be added to `index.html` without explicit architectural review and SRI (Subresource Integrity) validation.

---

## 2. Architectural Guidelines & Code Conventions

### 2.1 JavaScript Standards ([script.js](file:///d:/My%20Profile/script.js))
1. **Strict Mode:** All scripts must run under `'use strict';` or within encapsulated IIFE closures.
2. **Subsystem Isolation:** All DOM manipulation and observer initialization must be wrapped in `supervise('Subsystem Name', () => { ... })` watchdogs.
3. **Naming Conventions:**
   - Functions: `camelCase` (e.g., `supervise()`, `filterProjects()`, `openModal()`).
   - Classes / Singletons: `PascalCase` (e.g., `CircuitBreaker`, `LifecycleManager`, `Sanitizer`).
   - Constants / Configuration: `UPPER_SNAKE_CASE` or namespaced objects.
4. **Clean Resource Disposal:** Any created `IntersectionObserver`, `setTimeout`, `setInterval`, or `requestAnimationFrame` must be registered with `LifecycleManager` for deterministic cleanup.
5. **No Direct Unsanitized HTML Ingestion:** Never assign raw user input to `.innerHTML`. Always run input strings through `Sanitizer.escapeHTML()` or use `.textContent`.

### 2.2 CSS & Design System Standards ([style.css](file:///d:/My%20Profile/style.css))
1. **Token Hierarchy:** All color codes, spacing, border radii, and transitions must use CSS variables declared in `:root` (e.g., `var(--accent-gold)`, `var(--bg-main)`).
2. **No Hardcoded Hex in Components:** Avoid raw hex colors inside component blocks; reference the design token system.
3. **Glassmorphism Spec:** Standard glassmorphism requires `background: var(--bg-card);`, `backdrop-filter: blur(16px);`, and `border: 1px solid var(--border-glass);`.
4. **Mobile First & Responsive Cascades:** All media queries must follow standard breakpoints (`max-width: 992px`, `max-width: 768px`, `max-width: 480px`).

---

## 3. Strict AI Operational Boundaries ("DO NOT DO")

Autonomous agents and developers are strictly prohibited from violating the following negative constraints:

- ❌ **DO NOT make unsolicited modifications:** Never alter, refactor, or delete working features, modals, styles, or case study copy outside the explicit scope requested.
- ❌ **DO NOT introduce placeholder code:** Never insert `// TODO: implement later`, `/* ... */`, dummy strings, or incomplete stubs. Every implementation must be fully fleshed out and production-ready.
- ❌ **DO NOT break existing contact and certification links:** Never alter the WhatsApp number (`+91 9153579997`), email address (`sumit.kausik@gmail.com`), or relative paths to `./Certifications/` without user confirmation.
- ❌ **DO NOT expose secrets or credentials:** Never commit API keys, private tokens, or test credentials into client scripts or public HTML.
- ❌ **DO NOT write unhandled asynchronous code:** Never leave a Promise unhandled or a network fetch call without timeout boundaries and error catches.
- ❌ **DO NOT use destructive Git or OS operations:** Never execute `rm -rf`, force-push to `main`, or overwrite Git history without explicit instructions.

---

## 4. Test-Driven Quality Assurance (TDD) Matrix

Every feature addition or bug fix must be verified against the 4-Tier Testing Matrix:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        4-TIER TESTING MATRIX                           │
├──────────────┬─────────────────────────────┬───────────────────────────┤
│ Tier         │ Category                    │ Mandatory Pass Criteria   │
├──────────────┼─────────────────────────────┼───────────────────────────┤
│ **Tier 1**   │ **Happy Path**              │ • All navigation links    │
│              │                             │   scroll to sections.     │
│              │                             │ • Modals open & close.    │
│              │                             │ • Contact form pre-fills. │
├──────────────┼─────────────────────────────┼───────────────────────────┤
│ **Tier 2**   │ **Edge Cases**              │ • Viewports from 320px to │
│              │                             │   2560px render cleanly.  │
│              │                             │ • Empty form submission   │
│              │                             │   shows valid warning.    │
├──────────────┼─────────────────────────────┼───────────────────────────┤
│ **Tier 3**   │ **Fault & Resilience**      │ • Missing DOM element     │
│              │                             │   trapped by supervisor.  │
│              │                             │ • Network timeout handles │
│              │                             │   fallback gracefully.    │
├──────────────┼─────────────────────────────┼───────────────────────────┤
│ **Tier 4**   │ **System Mocking**          │ • Zero destructive OS    │
│              │                             │   calls in test runs.     │
└──────────────┴─────────────────────────────┴───────────────────────────┘
```

---

## 5. Security & Build Hardening Protocols

1. **Content Security Policy (CSP):** Disallow inline script injection from untrusted domains. Restrict font and style sources to Google Fonts and Font Awesome CDNs.
2. **Referrer Policy & Safe Links:** All external links (`target="_blank"`) must include `rel="noopener noreferrer"`.
3. **Production Verification:** Before any deployment to GitHub Pages, inspect browser console for zero warnings, zero 404 errors on certification images, and zero unhandled rejections.
