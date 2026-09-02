# DESIGN SYSTEM, THEME & UI/UX STANDARDS
## Sumeet Kumar — Enterprise UI Specification (`design.md`)

> **Design Theme:** Executive Dark Navy & Amber Gold Glassmorphism  
> **Aesthetic Philosophy:** Premium, Modern, High-Contrast, Data-Dense, and Micro-Animated  
> **Source Files:** [style.css](file:///d:/My%20Profile/style.css), [index.html](file:///d:/My%20Profile/index.html)  

---

## 1. Color Palette & Design Tokens

All colors are systematically governed by CSS custom properties in `:root`:

### 1.1 Core Palette

| Variable Name | Hex / RGBA Code | Swatch & Usage |
| :--- | :--- | :--- |
| `--bg-main` | `#060d17` | Deep Navy Root Canvas Background |
| `--bg-deep` | `#060d1f` | Deep Space Background Variant |
| `--bg-card` | `#0d1b2a` / `rgba(15, 30, 60, 0.6)` | Glassmorphism Card Surface with 60% Alpha |
| `--bg-card-hover` | `#132742` / `rgba(20, 42, 80, 0.8)` | Elevated Surface State on Pointer Hover |
| `--accent-gold` | `#f59e0b` | Primary Amber Gold Accent (CTAs, Highlights, Badges) |
| `--accent-gold-light`| `#fbbf24` | Lighter Gold Tone for Code Blocks & Monospace Highlights |
| `--accent-gold-glow` | `rgba(245, 158, 11, 0.15)` | Diffuse Radial Glow for Interactive Elements |
| `--text-heading` | `#f8fafc` | High-Contrast Slate White for `h1` - `h4` Headings |
| `--text-body` | `#94a3b8` | Muted Silver Slate for Paragraphs & Descriptions |
| `--text-muted` | `#64748b` | Low-Emphasis Slate for Subtitles, Metadata & Dates |
| `--border-color` | `rgba(245, 158, 11, 0.22)` | Accent Card Borders & Visual Separators |
| `--border-glass` | `rgba(255, 255, 255, 0.08)`| Subtle Translucent Border for Frosted Glass Effect |
| `--whatsapp-green` | `#25D366` | Official WhatsApp Brand Color for Action Widgets |
| `--whatsapp-green-dark`| `#128C7E` | Dark WhatsApp Gradient Anchor |

### 1.2 Gradients & Shadows
```css
/* Ambient Background Gradients */
background-image:
    radial-gradient(circle at 15% 15%, rgba(245, 158, 11, 0.06) 0%, transparent 45%),
    radial-gradient(circle at 85% 70%, rgba(13, 27, 42, 0.85) 0%, transparent 55%);

/* Card & Interactive Elevation */
--shadow-card: 0 12px 36px -10px rgba(0, 0, 0, 0.5);
--shadow-glow: 0 0 35px rgba(251, 191, 36, 0.15);
--whatsapp-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
```

---

## 2. Typography & Hierarchy

### 2.1 Font Families
- **Primary Body & UI:** `'Plus Jakarta Sans', sans-serif` (Clean, geometric, contemporary legibility).
- **Secondary Headings:** `'Space Grotesk', sans-serif` (Tech-forward architectural identity).
- **Code, Metrics & Telemetry:** `'Fira Code', monospace` (Ligature-enabled tabular data & ASCII pipelines).

### 2.2 Type Scale

| Element | Font Family | Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title (`h1`)** | `Plus Jakarta Sans` | `3.2rem` ($51.2\text{px}$) | `800` (Bold) | `1.15` | `-0.03em` |
| **Section Title (`h2`)**| `Plus Jakarta Sans` | `2.2rem` ($35.2\text{px}$) | `700` (Bold) | `1.25` | `-0.02em` |
| **Card Heading (`h3`)** | `Plus Jakarta Sans` | `1.35rem` ($21.6\text{px}$) | `700` (Bold) | `1.3` | `-0.01em` |
| **Subheadings (`h4`)** | `Plus Jakarta Sans` | `1.1rem` ($17.6\text{px}$) | `600` (Semi) | `1.4` | `0` |
| **Monospace Badges** | `Fira Code` | `0.85rem` ($13.6\text{px}$) | `500` (Medium)| `1.4` | `+0.02em` |
| **Body Paragraphs** | `Plus Jakarta Sans` | `1.0rem` ($16.0\text{px}$) | `400` (Regular)| `1.7` | `0` |
| **Footnotes / Muted** | `Fira Code` | `0.82rem` ($13.1\text{px}$) | `400` (Regular)| `1.6` | `0` |

---

## 3. Component Design Patterns

### 3.1 Buttons & Interactive CTAs
1. **Primary Button (`.btn-primary`):**
   - Solid Amber Gold gradient fill (`#f59e0b` to `#d97706`).
   - Text: `#060d17` (Dark Navy Bold for maximum contrast).
   - Border radius: `8px`.
   - Hover: `transform: translateY(-2px); box-shadow: 0 8px 20px rgba(245, 158, 11, 0.35);`.
2. **WhatsApp Action Button (`.btn-whatsapp` / `.whatsapp-float`):**
   - WhatsApp Green gradient (`#25D366` to `#128C7E`).
   - White text (`#ffffff`), glowing pulse keyframe animation.
3. **Secondary Outline Button (`.btn-secondary`):**
   - Translucent background (`rgba(255, 255, 255, 0.05)`), border `1px solid var(--border-glass)`.
   - Hover: border color turns to `var(--accent-gold)`.

### 3.2 Glassmorphism Cards (`.project-card`, `.achieve-card`, `.exp-card`)
- **Backdrop Filter:** `backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);`
- **Border:** `1px solid rgba(255, 255, 255, 0.08)` transitioning to `rgba(245, 158, 11, 0.35)` on hover.
- **Top Accent Line:** `border-top: 3px solid var(--accent-gold);` on achievement and experience cards.
- **Corner Radius:** `14px` for cards, `12px` for nested boxes.

### 3.3 3D Perspective Certification Cards (`.cert-card`)
- **Container Perspective:** `perspective: 1000px;`
- **Dynamic Mouse-Follow:** JavaScript calculates offset $X/Y$ from card center, applying `rotateX(${deg}) rotateY(${deg}) translateY(-6px)`.
- **Thumbnail Display:** Embedded certificate image thumbnail (`.cert-thumb`) with smooth scale on focus.

### 3.4 Modal Backdrops & Dialogs (`.modal-backdrop`, `.modal-content`)
- **Backdrop:** `background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(8px); z-index: 2000;`
- **Modal Box:** `max-width: 680px; max-height: 85vh; border: 1px solid var(--accent-gold); border-radius: 16px;`
- **ASCII Architecture Box:** Dark gold-tinted box (`background: rgba(245, 158, 11, 0.05); font-family: var(--font-mono);`) rendering data pipeline flowcharts.

---

## 4. Responsive Layout & Breakpoint System

```css
/* Standard Responsive Grid */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* 1. Large Screens & Laptops (Desktop Default: > 992px) */
/* 2. Tablets & Small Laptops (<= 992px) */
@media (max-width: 992px) {
    .hero-content { grid-template-columns: 1fr; text-align: center; }
    .about-grid { grid-template-columns: 1fr; text-align: center; }
    .stats-bar { grid-template-columns: repeat(2, 1fr); }
}

/* 3. Mobile Devices (<= 768px) */
@media (max-width: 768px) {
    .nav-links { display: none; flex-direction: column; position: absolute; top: 80px; }
    .nav-links.active { display: flex; }
    .mobile-toggle { display: block; }
    .hero-title { font-size: 2.4rem; }
    .stats-bar { grid-template-columns: 1fr; }
    .whatsapp-float-text { display: none; }
    .whatsapp-float { padding: 12px; border-radius: 50%; }
}

/* 4. Small Mobile Phones (<= 480px) */
@media (max-width: 480px) {
    .hero-title { font-size: 2.0rem; }
    .container { padding: 0 1.2rem; }
}
```

---

## 5. Animation & Micro-Interactions

| Animation Name | Target Elements | Timing & Easing | Effect |
| :--- | :--- | :--- | :--- |
| `orbFloat` | `.bg-orbs .orb` | `22s ease-in-out infinite` | Ambient background color orbs floating smoothly |
| `whatsappPulse` | `.whatsapp-float` | `3s infinite` | Radial wave pulse attracting user attention |
| `modalFadeIn` | `.modal-content` | `0.3s ease-out` | Smooth upward slide and opacity reveal |
| `pop-in` | `.social-icon-btn` | `0.4s cubic-bezier(0.4, 0, 0.2, 1)` | Staggered pop-in for hero social buttons |
| `flip-in` | `#mission-card`, `#vision-card` | `0.6s ease-out` | 3D perspective flip when entering viewport |
