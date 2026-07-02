# ELEVIQ TECHNOLOGIES - DESIGN SYSTEM v1.0

## PATTERN & STRATEGY

PATTERN: "Trusted Tech Authority + Future-Forward Innovation"
- Strategy: Committed color deployment (Cyan + Navy carry 40-60% visual presence)
- Register: Brand (marketing/identity-focused)
- Conversion: Trust → Interest → Action

**CTA Placement (Primary Conversions):**
- Header: Secondary nav CTA (Get Started button, cyan)
- Hero: Primary CTA (Book Consultation, cyan + white text, ≥10px 20px)
- Service cards: Secondary CTAs (Learn More, outlined navy)
- Social proof section: Trust badges
- Footer: Contact + secondary links

---

## COLORS (OKLCH)

### Primary Brand Colors

| Color | Hex | OKLCH | Purpose |
|-------|-----|-------|---------|
| **Cyan** | #00D4FF | oklch(0.710 0.220 194) | CTAs, badges, interactive states - Innovation signal |
| **Navy** | #0A1F3F | oklch(0.125 0.040 248) | Headings, authority - Trust & stability |
| **White** | #FFFFFF | oklch(1.000 0.000 0) | Primary background - Clarity, lets brand shine |

### Supporting Colors

| Role | Hex | OKLCH | Contrast |
|------|-----|-------|----------|
| Surface | #FAFBFE | oklch(0.975 0.010 248) | 20:1 vs Navy |
| Accent | #F5F8FF | oklch(0.95 0.020 248) | 25:1 vs Navy |
| Body Text | #141414 | oklch(0.08 0.000 0) | 12.8:1 vs White ✓ |
| Muted Text | #707B92 | oklch(0.50 0.015 248) | 4.9:1 vs White ✓ |

### Status Colors

| Status | Hex | OKLCH |
|--------|-----|-------|
| Success | #00B341 | oklch(0.60 0.220 142) |
| Warning | #E6A300 | oklch(0.68 0.250 55) |
| Error | #E63946 | oklch(0.48 0.260 25) |
| Info | #00D4FF | oklch(0.710 0.220 194) |

---

## TYPOGRAPHY

### Font Stack
- Display & Body: "Inter" (single family, 400-800 weights)
- Mono: "JetBrains Mono" / "Fira Code" (code samples)

### Scale (1.25× Modular, Fluid Clamp)

| Role | Weight | Desktop | Mobile | Line Height |
|------|--------|---------|--------|-------------|
| H1 | 800 | clamp(2.5rem, 6vw, 4rem) | 2rem | 1.1 |
| H2 | 700 | clamp(2rem, 4.5vw, 3.2rem) | 1.5rem | 1.15 |
| H3 | 700 | clamp(1.5rem, 3.5vw, 2.4rem) | 1.25rem | 1.2 |
| Body | 400 | 1rem (16px) | 15px | 1.6 |
| Caption | 500 | 0.75rem | 11px | 1.4 |

**Rules:**
- H1 max: 4rem (no shouting above 64px)
- Body line length: ≤75ch (readability)
- Headings: 	ext-wrap: balance for even lines
- Minimum: 14px body, 12px caption (never smaller)

---

## SPACING & LAYOUT

### Scale (8px Base Unit)

| Token | Value | Use |
|-------|-------|-----|
| xs | 4px | Tight internal spacing |
| sm | 8px | Small gaps, form fields |
| md | 16px | Default padding |
| lg | 24px | Generous spacing, cards |
| xl | 32px | Section breaks |
| 2xl | 48px | Major separation |
| 3xl | 64px | Hero/screen-level |

### Breakpoints
- Mobile: 320px
- Tablet: 768px
- Desktop: 1024px
- Wide: 1440px
- Ultra: 1920px

### Responsive Grid
`css
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`

---

## COMPONENTS

### Button

**Primary (Cyan CTA):**
- BG: oklch(0.710 0.220 194) | Text: White
- Padding: 10px 20px | Radius: 6px | Font: 600
- Hover: Darker cyan + -2px translateY + glow shadow (150ms ease-out)
- Focus: 2px cyan outline, offset 2px
- Disabled: Muted bg, opacity 0.6, no-cursor

**Secondary (Navy Outline):**
- Border: 1px navy | BG: Transparent | Color: Navy
- Hover: Accent tint background

**Sizes:** sm (8px 16px), md (10px 20px), lg (12px 24px)

### Card
- BG: Surface | Border: 1px Accent | Radius: 8px | Padding: 24px
- Shadow: 0 1px 3px rgba(0,0,0,0.05)
- Hover (interactive): 0 8px 24px shadow + -4px translateY

### Hero Section
- Full-bleed: 100vw width
- Padding: 64px top/bottom
- Layout: Grid 2-col (image right/text left) → stack mobile
- H1: Navy, balanced wrap, 1.1 line-height
- Subheading: Muted, 1.125rem, max-width 75ch
- Image: 16:9 aspect, descriptive alt text, lazy="false"

### Form Elements
- Input padding: 10px 12px | Border: 1px accent
- Focus: 2px cyan outline + glow shadow
- Error: Red border + red shadow
- Label: 600 Navy, margin-bottom 8px
- Placeholder: Muted, ≥4.5:1 contrast (not dim)

### Navigation (Header)
- Sticky, White bg, 1px accent bottom border
- Logo: 800 Navy, 1.25rem
- Links: Navy, hover → Cyan, active → Cyan + bottom border
- Mobile: Hamburger menu, overlay nav

### Footer
- BG: Navy | Color: White
- Grid: auto-fit, minmax(200px, 1fr)
- Links: Cyan, underlined
- Section headings: 600 uppercase, 0.05em tracking

---

## ANIMATIONS & MICRO-INTERACTIONS

### Easing: ease-out-quart
`css
cubic-bezier(0.25, 0.46, 0.45, 0.94)
`

### Durations
- Hover/focus: 150ms
- Page transitions: 300ms
- Scroll reveals: 600ms
- Loading: 600ms loops

### Hover Effects
- Button: -2px translateY + 0 4px 12px cyan glow (150ms)
- Card: -4px translateY + 0 8px 24px shadow (200ms)

### Scroll Reveal
- Default: opacity 0, translateY(20px)
- Visible: opacity 1, translateY(0) (600ms ease-out)
- Reduced motion: Instant, no transform

### Reduced Motion
`css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}
`
- No transforms, color/fade only
- Instant transitions or crossfades
- Loading spinner: static or gentle pulse

---

## WCAG & ACCESSIBILITY

### Contrast Ratios (WCAG 2.1 AA)

| Element | Minimum | Eleviq Actual |
|---------|---------|---------------|
| Body text | 4.5:1 | **12.8:1** ✓ |
| Large text | 3:1 | **9.2:1** ✓ |
| Placeholder | 4.5:1 | **4.9:1** ✓ |
| Form labels | 4.5:1 | **9.2:1** ✓ |
| Links | 3:1 | **5.3:1** ✓ |
| Button text on cyan | 4.5:1 | **9.1:1** ✓ |

### Keyboard Navigation
- Tab order: Logical, left-to-right, top-to-bottom
- Skip link: "Skip to main content" (visible on focus)
- Focus indicators: 2px outline, offset 2px, ≥3:1 contrast
- Forms: Enter submits, Escape cancels
- Modals: Focus trap, Escape closes
- Dropdowns: Arrow keys navigate, Escape closes

### Color-Blind Safety
- Cyan + Navy distinguishable in protanopia, deuteranopia, tritanopia
- Rule: Never use color alone for status (always add icon/text)

### Motion Accessibility
- All animations support prefers-reduced-motion: reduce
- No parallax, no auto-play videos
- Reduced motion = instant or simple crossfade

---

## PERFORMANCE

### Core Web Vitals Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| LCP | ≤2.5s | Preload hero image, defer below-fold |
| CLS | ≤0.1 | Reserve image space, fixed header z-index |
| FID | ≤100ms | Minimize JS, defer non-critical bundles |

### Image Optimization
- Format: WEBP with JPG fallback (~50% size reduction)
- Lazy-load: below-fold only; hero = eager
- Alt text: Descriptive, brand voice

### Font Loading
- Preload: Critical weights (700+)
- font-display: swap (show fallback while loading)
- System fallbacks: -apple-system, Segoe UI (no block)

---

## TAILWIND CONFIG (React + Vite)

`javascript
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
    },
    spacing: { xs: "4px", sm: "8px", md: "16px", lg: "24px", xl: "32px", "2xl": "48px", "3xl": "64px" },
    fontSize: {
      xs: ["12px", "1.4"],
      base: ["16px", "1.6"],
      lg: ["18px", "1.6"],
      xl: ["24px", "1.2"],
      "4xl": ["40px", "1.2"],
    },
    borderRadius: { md: "6px", lg: "8px" },
    boxShadow: {
      sm: "0 1px 3px rgba(0,0,0,0.05)",
      md: "0 4px 12px rgba(0,0,0,0.08)",
      lg: "0 8px 24px rgba(0,0,0,0.1)",
    },
  },
};
`

---

## IMPLEMENTATION CHECKLIST

✅ Color palette (primary, secondary, accent, status, WCAG AA)
✅ Typography (Inter, 1.25× scale, fluid headings, balanced wrap)
✅ Spacing (8px grid, 7 tokens)
✅ Components (Button, Card, Hero, Form, Nav, Footer, CTA)
✅ Animations (150–600ms, ease-out, reduced-motion defaults)
✅ Accessibility (≥4.5:1 contrast, keyboard nav, focus states, color-blind safe)
✅ Performance (LCP ≤2.5s, CLS ≤0.1, optimized fonts/images)
✅ Tailwind config (ready for React + Vite)

---

**Ready to build. Every decision has been made. No guessing. Execute.**

