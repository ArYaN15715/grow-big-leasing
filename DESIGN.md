# Design Brief: Grow Big Leasing & Real Estate

## Purpose
Modern immersive commercial leasing platform for Udaipur. Converts WhatsApp inquiries via cinematic UX, smooth motion, and trustworthy commercial ecosystem feel.

## Tone & Aesthetic
Active, cinematic, smooth, minimal, immersive. NOT luxury, NOT corporate premium. Feels like a modern digital business platform with Apple-like refinement and subtle motion.

## Color Palette (OKLCH)
| Role | OKLCH | Hex | Usage |
|------|-------|-----|-------|
| Background | 0.09 0 0 | #111111 | Primary dark surface |
| Surface | 0.12 0 0 | #1B1B1B | Card, elevated surfaces |
| Text Primary | 0.97 0 0 | #F7F7F5 | Headlines, body text |
| Text Secondary | 0.65 0 0 | #ECE9E2 | Subtext, metadata |
| Accent | 0.65 0.15 62 | #C7A66A | Hover, borders, highlights only |
| Border | 0.18 0 0 | #2D2D2D | Subtle divisions |
| Muted | 0.20 0 0 | #333333 | Disabled, tertiary states |

## Typography
**Display**: Space Grotesk, bold (700–900), 1.1 line-height. Headings, CTAs, nav.
**Body**: General Sans, regular (400–600), 1.6 line-height. Body copy, labels.
**Mono**: System monospace for code/metadata.

## Structural Zones
| Zone | Treatment | Purpose |
|------|-----------|----------|
| Header/Nav | Glass-strong + border-bottom gradient | Floating navbar, scroll-to-solid |
| Hero Section | Cinematic slideshow + matte overlay | Immersive entry, WhatsApp CTA |
| Service Cards | Card-immersive + image zoom on hover | Active, interactive service listing |
| Property Cards | Property-card + modal popup on click | Detail reveal with smooth transitions |
| Trust Counters | Numeric animations + staggered reveal | Credibility through motion |
| Why Choose Us | Border-accent cards + icon hover | Conviction-building visual hierarchy |
| Process Flow | Numbered flow + connecting animation | Effortless perception |
| Testimonials | Glass-subtle slider + auto-scroll | Social proof, minimal noise |
| CTA Section | Dark immersive + glowing button | High-conversion focal point |
| Footer | Gradient fade + Google Maps embed | Location anchoring + navigation |

## Shadow Hierarchy
**Subtle**: `0 2px 8px rgba(0, 0, 0, 0.2)` — borders, fine detail
**Elevated**: `0 8px 32px rgba(0, 0, 0, 0.3)` — cards at rest
**Hover/Card**: `0 20px 48px rgba(0, 0, 0, 0.4) + 0 0 20px rgba(199, 166, 106, 0.15)` — interactive states

## Motion Principles
**Timing**: 0.3s–0.6s, ease-out / cubic-bezier(0.34, 1.56, 0.64, 1) for spring feel
**Parallax**: Subtle, layered depth on scroll (no jank)
**Reveals**: Staggered word/element animations, blur-to-clear text
**Hover**: Card lift (–8px), image zoom (1.08x), border glow, shadow expansion
**Buttons**: Soft glow before, subtle scale, no bounce
**Modals**: Fade + scale from 0.95 → 1, smooth backdrop blur

## Key Patterns
1. **Hero Slideshow**: Auto-rotating cinematic commercial space images, overlay text reveal on scroll
2. **Service Cards**: Dual-state hover (image zoom + overlay reveal), category counts
3. **Property Detail Popup**: Click → modal, smooth transition, WhatsApp CTA inside
4. **Trust Counters**: Smooth count-up animation, staggered entry on scroll
5. **Floating CTA**: Sticky WhatsApp button, subtle float animation, mobile-friendly tap area
6. **Glassmorphism Surfaces**: Blur + accent border, only on nav/overlays (not everywhere)

## Signature Detail
Muted gold accent (`#C7A66A`) used ONLY for: hover states, border highlights, button glow, category tags. Never on backgrounds. Creates perceived luxury through restraint, not saturation.

## Constraints
✓ Mobile-first, highly responsive
✓ No luxury marble aesthetic, no corporate premium
✓ No chaotic animations or bouncy effects
✓ All text light on dark — 0.97 on 0.09 = 0.88 contrast
✓ Gold is accent only — never as background
✓ Minimal UI elements, maximum clarity
✓ Smooth 60fps motion throughout
✓ Google Maps integration at footer

## Differentiation
NOT a luxury agency website. NOT a generic listing marketplace. IS a modern, immersive, cinematic commercial opportunity ecosystem that feels active, trustworthy, and alive.
