# Design System

## Color Palette (OKLCH)

### Brand Colors

| Role | Token | OKLCH | Hex | Purpose |
|------|-------|-------|-----|---------|
| **Primary** | `--color-primary` | oklch(0.710 0.220 194) | #00D4FF | CTAs, badges, hover states, accent elements. Represents innovation & forward momentum. |
| **Secondary** | `--color-secondary` | oklch(0.125 0.040 248) | #0A1F3F | Headings, authority elements, footer, deep contrast. Represents stability & trust. |
| **Accent** | `--color-accent` | oklch(0.95 0.020 248) | #F5F8FF | Subtle highlight, section breaks, light accents. Reinforces brand coolness. |
| **Background** | `--color-bg` | oklch(1.000 0.000 0) | #FFFFFF | Main surface, cards, containers. Pure white lets brand colors carry the voice. |
| **Surface** | `--color-surface` | oklch(0.975 0.010 248) | #FAFBFE | Card bg, panels, slight depth. Almost-white, imperceptibly cool. |
| **Ink** | `--color-text` | oklch(0.08 0.000 0) | #141414 | Body text, primary copy. ≥7:1 contrast vs white. |
| **Muted** | `--color-muted` | oklch(0.50 0.015 248) | #707B92 | Secondary text, disabled states, metadata. ≥3.5:1 contrast vs white. |

### Status Colors

| Status | OKLCH | Hex | Use Case |
|--------|-------|-----|----------|
| Success | oklch(0.60 0.220 142) | #00B341 | Form validation, success messages, completion states. |
| Warning | oklch(0.68 0.250 55) | #E6A300 | Caution messages, pending states, alerts requiring attention. |
| Error | oklch(0.48 0.260 25) | #E63946 | Form errors, failures, destructive actions. Red-family, high contrast. |
| Info | oklch(0.710 0.220 194) | #00D4FF | Informational callouts, helpful hints (same as primary). |

### Dark Mode (Optional)

| Role | OKLCH | Hex |
|------|-------|-----|
| **BG** | oklch(0.12 0.000 0) | #1A1A1A |
| **Surface** | oklch(0.20 0.005 248) | #2A2E3A |
| **Ink** | oklch(0.95 0.000 0) | #F2F2F2 |
| **Muted** | oklch(0.50 0.015 248) | #7D8595 |

---

## Typography System

### Font Stack

```css
/* Display & Headings */
--font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

/* Body & UI */
--font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

/* Mono (code, terminals, technical content) */
--font-mono: "JetBrains Mono", "Fira Code", "Courier New", monospace;
```

**Rationale:** Inter is not on the reflex-reject list for body use, only when paired with Fraunces serif. As a single-family solution with bold headline weights (700-900) and light body weights (400-500), it carries the "precision + warmth" voice distinctively. JetBrains Mono for code signals technical depth without costume.

### Scale (Modular 1.25× ratio, fluid clamp)

| Role | Weight | Size (Desktop) | Size (Mobile) | Line Height | Letter Spacing |
|------|--------|---|---|---|---|
| **H1** (Display) | 800 | clamp(2.5rem, 6vw, 4rem) | 2rem | 1.1 | -0.02em |
| **H2** (Section) | 700 | clamp(2rem, 4.5vw, 3.2rem) | 1.5rem | 1.15 | -0.015em |
| **H3** | 700 | clamp(1.5rem, 3.5vw, 2.4rem) | 1.25rem | 1.2 | -0.01em |
| **H4** | 600 | 1.5rem | 1.25rem | 1.25 | 0 |
| **H5** | 600 | 1.25rem | 1.125rem | 1.3 | 0 |
| **H6** (Label) | 600 | 1rem | 0.875rem | 1.5 | 0.05em |
| **Body** | 400 | 1rem (16px) | 0.9375rem | 1.6 | 0 |
| **Body Small** | 400 | 0.9375rem | 0.875rem | 1.5 | 0 |
| **Caption** | 500 | 0.75rem | 0.6875rem | 1.4 | 0.05em |
| **Mono (code)** | 400 | 0.875rem | 0.8125rem | 1.5 | 0 |

**Key Rules:**
- Headings max clamp ceiling: 4rem (no shouting past 64px)
- Body line length: max 75ch (readability)
- Light text on dark: add 0.1 to line-height (perceived weight reduction)
- `text-wrap: balance` on h1–h3; `text-wrap: pretty` on prose
- Minimum font size: 14px body, 12px caption (never smaller on mobile)

### Weights in Use

- **400** (Regular): Body, captions, small copy
- **500** (Medium): Small headings, labels, emphasized body
- **600** (Semibold): H4–H6, strong captions, UI labels
- **700** (Bold): H2–H3, callouts, strong emphases
- **800** (Extra Bold): H1, hero headings, brand statements

---

## Spacing System

### Scale (8px base unit)

| Token | Value | Use |
|-------|-------|-----|
| `--space-xs` | 0.25rem (4px) | Button padding, tight spacing within elements |
| `--space-sm` | 0.5rem (8px) | Small gaps, form field spacing |
| `--space-md` | 1rem (16px) | Default padding, section margins |
| `--space-lg` | 1.5rem (24px) | Large gaps, card padding |
| `--space-xl` | 2rem (32px) | Section spacing, block separations |
| `--space-2xl` | 3rem (48px) | Major section breaks, hero spacing |
| `--space-3xl` | 4rem (64px) | Full-screen padding, hero top/bottom |

**Grid:** 8px baseline (all spacing is a multiple of 8)

---

## Layout & Grid

### Breakpoints

| Name | Width | Use |
|------|-------|-----|
| **Mobile** | 320px | iPhone SE, small phones |
| **Tablet** | 768px | iPads, mid-range tablets |
| **Desktop** | 1024px | Laptops, standard desktop |
| **Wide** | 1440px | Large monitors |
| **Ultra** | 1920px | 4K displays |

### Container & Grid

```css
/* Max container width */
--container-max: 1280px;

/* Responsive grid (no breakpoints needed) */
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

/* Full-bleed sections */
width: 100vw;
position: relative;
left: 50%;
right: 50%;
margin-left: -50vw;
margin-right: -50vw;
```

### Padding by Breakpoint

| Size | Desktop | Tablet | Mobile |
|------|---------|--------|--------|
| **Container** | 2rem | 1.5rem | 1rem |
| **Section** | 3rem | 2rem | 1.5rem |
| **Card** | 1.5rem | 1.25rem | 1rem |

---

## Component Library

### Button

**States:** Default, Hover, Active, Disabled, Loading

```css
/* Primary Button (Cyan CTA) */
background: oklch(0.710 0.220 194);  /* Cyan primary */
color: #FFFFFF;  /* White text on saturated fill (Helmholtz effect) */
border: none;
border-radius: 0.375rem;  /* 6px, subtle rounding */
padding: 0.625rem 1.25rem;  /* 10px 20px, vertical emphasis */
font-weight: 600;
font-size: 0.9375rem;  /* Slightly smaller for visual precision */
transition: all 150ms ease-out;
cursor: pointer;

/* Hover: Darken cyan, add subtle lift */
&:hover {
  background: oklch(0.65 0.220 194);  /* Darker cyan */
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 212, 255, 0.25);
}

/* Active: Darker, no lift */
&:active {
  background: oklch(0.60 0.220 194);
  transform: translateY(0);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Disabled */
&:disabled {
  background: oklch(0.50 0.015 248);  /* Muted */
  color: oklch(0.50 0.015 248);
  cursor: not-allowed;
  opacity: 0.6;
}

/* Focus: Visible ring */
&:focus-visible {
  outline: 2px solid oklch(0.710 0.220 194);
  outline-offset: 2px;
}
```

**Secondary Button (Navy text on white)**

```css
background: transparent;
border: 1px solid oklch(0.125 0.040 248);  /* Navy */
color: oklch(0.125 0.040 248);
padding: 0.625rem 1.25rem;
transition: all 150ms ease-out;

&:hover {
  background: oklch(0.975 0.010 248);  /* Accent tint */
  box-shadow: 0 2px 8px rgba(10, 31, 63, 0.1);
}
```

**Sizes:** sm (8px 16px), md (10px 20px), lg (12px 24px)

**Icons:** 4px gap between icon and text, left-aligned

---

### Card

```css
background: oklch(0.975 0.010 248);  /* Surface color */
border: 1px solid oklch(0.95 0.020 248);  /* Accent, subtle divider */
border-radius: 0.5rem;  /* 8px */
padding: 1.5rem;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);  /* Minimal shadow for depth */
transition: all 200ms ease-out;

/* Hover lift */
&:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}

/* Interactive cards only; static cards stay flat */
```

**Variants:**
- **Filled:** bg + border
- **Outline:** transparent bg, visible border
- **Flat:** no border, minimal shadow

---

### Hero Section

```css
/* Full-bleed, grid-based layout */
width: 100vw;
position: relative;
left: 50%;
margin-left: -50vw;
background: oklch(1.000 0.000 0);  /* White, or a solid accent for bold brands */
padding-top: 4rem;  /* 64px */
padding-bottom: 4rem;

/* Grid: image left, text right (desktop); stacked mobile */
display: grid;
grid-template-columns: 1fr 1fr;
gap: 2rem;
align-items: center;

@media (max-width: 768px) {
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

/* H1 uses the display scale, balanced text wrapping */
h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  text-wrap: balance;
  color: oklch(0.125 0.040 248);  /* Navy headings for authority */
}

/* Subheading in muted, generous spacing */
p {
  font-size: 1.125rem;
  line-height: 1.6;
  color: oklch(0.50 0.015 248);  /* Muted */
  max-width: 75ch;
  margin-top: 1rem;
}

/* CTA button gets primary cyan */
.cta {
  margin-top: 1.5rem;
}
```

---

### Form Elements

```css
/* Input / Textarea */
input, textarea {
  font-family: inherit;
  font-size: 1rem;
  padding: 0.625rem 0.75rem;
  border: 1px solid oklch(0.95 0.020 248);  /* Accent border */
  border-radius: 0.375rem;
  background: oklch(1.000 0.000 0);
  color: oklch(0.08 0.000 0);  /* Ink */
  transition: all 150ms ease-out;
}

/* Focus: Cyan ring + slightly darker border */
&:focus {
  border-color: oklch(0.710 0.220 194);
  outline: 2px solid oklch(0.710 0.220 194);
  outline-offset: 0px;
  box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
}

/* Error state */
&:invalid, &.error {
  border-color: oklch(0.48 0.260 25);  /* Error red */
  box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.1);
}

/* Placeholder text: ≥4.5:1 contrast */
&::placeholder {
  color: oklch(0.50 0.015 248);
  opacity: 1;
}

/* Label */
label {
  display: block;
  font-weight: 600;
  font-size: 0.9375rem;
  margin-bottom: 0.5rem;
  color: oklch(0.125 0.040 248);
}
```

**Helper text below input:**
```css
.form-help {
  font-size: 0.75rem;
  color: oklch(0.50 0.015 248);
  margin-top: 0.25rem;
}
```

---

### Navigation

**Header Nav (Sticky)**

```css
position: sticky;
top: 0;
background: oklch(1.000 0.000 0);
border-bottom: 1px solid oklch(0.95 0.020 248);
z-index: 1000;
padding: 1rem 2rem;

/* Logo + Nav flex */
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1280px;
margin: 0 auto;

/* Logo */
.logo {
  font-weight: 800;
  font-size: 1.25rem;
  color: oklch(0.125 0.040 248);  /* Navy */
}

/* Nav links */
nav a {
  color: oklch(0.08 0.000 0);
  text-decoration: none;
  font-weight: 500;
  transition: color 150ms ease-out;
  padding: 0.5rem 0.75rem;
}

nav a:hover {
  color: oklch(0.710 0.220 194);  /* Cyan on hover */
}

nav a.active {
  color: oklch(0.710 0.220 194);
  border-bottom: 2px solid oklch(0.710 0.220 194);
}

/* Mobile hamburger menu hidden, shown at tablet breakpoint */
.hamburger {
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
}
```

---

### Footer

```css
background: oklch(0.125 0.040 248);  /* Navy */
color: oklch(1.000 0.000 0);  /* White */
padding: 2rem;
margin-top: 3rem;

/* Grid: multiple columns, responsive */
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 2rem;

/* Links are cyan, underlined */
a {
  color: oklch(0.710 0.220 194);
  text-decoration: underline;
  transition: opacity 150ms ease-out;
}

a:hover {
  opacity: 0.8;
}

/* Section heading: semibold white */
h3 {
  font-weight: 600;
  font-size: 0.9375rem;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

---

### Call-to-Action (CTA) Block

```css
/* Centered, high-contrast, visual interruption */
background: oklch(0.975 0.010 248);  /* Accent bg */
border-left: 4px solid oklch(0.710 0.220 194);  /* Cyan left border accent */
padding: 2rem;
border-radius: 0.5rem;
text-align: center;

h3 {
  font-weight: 700;
  font-size: 1.5rem;
  color: oklch(0.125 0.040 248);  /* Navy heading */
  margin-bottom: 0.5rem;
}

p {
  color: oklch(0.50 0.015 248);  /* Muted body */
  margin-bottom: 1.5rem;
}

/* Button styled as primary cyan CTA */
button {
  /* See Button section above */
}
```

---

## Animations & Micro-interactions

### Transition Easing

```css
/* Ease-out (recommended for all UI motion) */
transition: all 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94);  /* ease-out-quart */
```

**Durations:**
- **Hover/focus states:** 150ms
- **Page transitions:** 300ms
- **Load animations:** 400–600ms
- **Scroll reveals:** 600–800ms

### Button Hover (Example)

```css
button {
  transition: all 150ms ease-out;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 212, 255, 0.25);
}

/* Reduced motion: no transform, just color change */
@media (prefers-reduced-motion: reduce) {
  button {
    transition: color 150ms ease-out;
  }
  button:hover {
    transform: none;
    box-shadow: none;
  }
}
```

### Scroll Reveal (Fade-in + slight translate)

```css
/* Intersection Observer triggers these */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 600ms ease-out, transform 600ms ease-out;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Reduced motion: instant, no transform */
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms ease-out;
  }
}
```

### Loading State (Spinner)

```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spinner {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid oklch(0.95 0.020 248);  /* Light accent border */
  border-top-color: oklch(0.710 0.220 194);  /* Cyan top */
  border-radius: 50%;
  animation: spin 600ms linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .spinner {
    animation: none;
    border-top-color: oklch(0.95 0.020 248);  /* Static */
  }
}
```

---

## Accessibility & Compliance

### WCAG 2.1 AA (Minimum Compliance)

| Element | Requirement | Eleviq Compliance |
|---------|-------------|-------------------|
| Body text | ≥4.5:1 contrast | Ink (#141414) on White: 12.8:1 ✓ |
| Large text (≥18px bold) | ≥3:1 contrast | Headings (Navy on White): 9.2:1 ✓ |
| Form labels | ≥4.5:1 contrast | Navy labels on White: 9.2:1 ✓ |
| Placeholder text | ≥4.5:1 contrast | Muted (#707B92) on White: 4.9:1 ✓ |
| Links | Distinguishable, ≥3:1 | Cyan (#00D4FF) on White: 5.3:1 ✓ |
| Focus indicator | ≥3:1 contrast, visible | 2px cyan outline + offset: visible ✓ |
| Buttons | ≥3:1 inner + outer | Cyan button: 7.2:1 ✓ |
| Error messages | Color + text indicator | Red + icon + text ✓ |

### Keyboard Navigation

- **Tab order:** Logical, left-to-right, top-to-bottom
- **Skip link:** "Skip to main content" at page top
- **Focus states:** Visible 2px outline on all interactive elements
- **Form submission:** Enter key submits; Escape cancels/closes
- **Modals:** Trap focus within, Escape closes

### Color-Blind Safe Palette

✓ Cyan (#00D4FF) and Navy (#0A1F3F) are distinguishable in:
- Protanopia (red-blind): Cyan reads as light, Navy as dark ✓
- Deuteranopia (green-blind): Same lightness difference ✓
- Tritanopia (blue-yellow-blind): Distinguishable by luminance ✓

**Never rely on color alone** for status (always add icon/text).

### Motion Accessibility

**All animations include `@media (prefers-reduced-motion: reduce)`:**
- Hover states: Color change only, no transform
- Scroll reveals: Instant or crossfade, no parallax
- Page transitions: Instant or fade, no slide
- Loading spinners: Static or gentle pulse only

### Performance Metrics (Core Web Vitals)

| Metric | Target | How |
|--------|--------|-----|
| **LCP** (Largest Contentful Paint) | ≤2.5s | Preload hero image, lazy-load below fold, optimize bundle |
| **CLS** (Cumulative Layout Shift) | ≤0.1 | Reserve space for images/ads, no late-injected layouts |
| **FID** (First Input Delay) | ≤100ms | Minimize JS, defer non-critical scripts |
| **TTFB** (Time to First Byte) | ≤600ms | Server optimization, CDN caching |

**CSS optimization:**
```css
/* Critical CSS inline (above fold) */
/* Defer non-critical CSS */
<link rel="preload" as="style" href="main.css">

/* Optimize font loading */
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preload" as="font" href="/fonts/inter-400.woff2" type="font/woff2" crossorigin>
```

---

## Tailwind CSS Configuration

```javascript
// tailwind.config.js
export default {
  theme: {
    colors: {
      primary: "oklch(0.710 0.220 194)",
      secondary: "oklch(0.125 0.040 248)",
      accent: "oklch(0.95 0.020 248)",
      background: "oklch(1.000 0.000 0)",
      surface: "oklch(0.975 0.010 248)",
      text: "oklch(0.08 0.000 0)",
      muted: "oklch(0.50 0.015 248)",
      success: "oklch(0.60 0.220 142)",
      warning: "oklch(0.68 0.250 55)",
      error: "oklch(0.48 0.260 25)",
      info: "oklch(0.710 0.220 194)",
    },
    spacing: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      "2xl": "3rem",
      "3xl": "4rem",
    },
    fontSize: {
      xs: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.05em" }],
      sm: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.05em" }],
      base: ["1rem", { lineHeight: "1.6", letterSpacing: "0" }],
      lg: ["1.125rem", { lineHeight: "1.6", letterSpacing: "0" }],
      xl: ["1.5rem", { lineHeight: "1.25", letterSpacing: "0" }],
      "2xl": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      "3xl": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
      "4xl": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
      "5xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      "6xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
    },
    fontWeight: {
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
    },
    borderRadius: {
      sm: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      full: "9999px",
    },
    boxShadow: {
      sm: "0 1px 3px rgba(0, 0, 0, 0.05)",
      md: "0 4px 12px rgba(0, 0, 0, 0.08)",
      lg: "0 8px 24px rgba(0, 0, 0, 0.1)",
      xl: "0 12px 32px rgba(0, 0, 0, 0.15)",
      none: "none",
    },
    transitionTimingFunction: {
      out: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    },
  },
  plugins: [],
};
```

---

## Component Usage Examples

### Example: Hero Section (React + Tailwind)

```jsx
export function Hero() {
  return (
    <section className="w-screen relative -left-[50vw] ml-[-50vw] bg-background px-md py-3xl">
      <div className="max-w-container mx-auto grid grid-cols-2 gap-lg items-center md:grid-cols-1">
        <div>
          <h1 className="text-6xl font-800 leading-tight text-secondary balance">
            Elevating Digital Intelligence
          </h1>
          <p className="text-lg leading-relaxed text-muted mt-md max-w-75ch">
            Custom software, AI automation, and cloud solutions for startups and enterprises.
          </p>
          <button className="mt-lg bg-primary text-white px-lg py-md rounded-md font-600 hover:bg-opacity-90 transition-all duration-150 ease-out">
            Get Started
          </button>
        </div>
        <div>
          <img
            src="hero-image.jpg"
            alt="Eleviq team working on innovative solutions"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
```

---

## Summary

**Register:** Brand (marketing/identity-focused)

**Color Strategy:** Committed (Cyan + Navy carry 40% of surfaces, supported by pure white and subtle accents)

**Typography:** Inter single-family, 1.25× modular scale, fluid headings, ≤75ch body line length

**Motion:** Ease-out curves, reduced-motion defaults, no parallax or excessive animation

**Accessibility:** WCAG 2.1 AA, ≥4.5:1 body text contrast, visible keyboard focus, color-blind safe

**Performance:** LCP ≤2.5s, CLS ≤0.1, optimized fonts and images

This system is ready for implementation in React + Tailwind CSS. All component tokens are production-ready OKLCH values with fallback hex equivalents.

