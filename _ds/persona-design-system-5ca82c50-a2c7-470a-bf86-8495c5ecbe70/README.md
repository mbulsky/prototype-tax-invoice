# Persona Design System

The open-source design system from **PT Privy Identitas Digital** ("Privy") — Indonesia's largest digital signature and identity-verification platform. Persona is the UI library and visual language Privy uses to build its product surfaces: the consumer signing app, the enterprise dashboard, and the marketing site.

> **About the brand.** Privy started as an electronic-signature service and has grown into an integrated identity stack (KTP/face verification, OCR, biometrics, e-meterai stamping, document workflow, certified delivery). Most copy and product surface is in Indonesian; this system also supports English. The system itself is called *Persona* — same brand family, different product.

---

## Source

This design system is reconstructed from the upstream open-source repo. Browse it for anything missing here:

- **GitHub:** https://github.com/privy-open-source/design-system
- **Live docs:** https://privy-open-source.github.io/design-system/
- **NPM:** `@privyid/persona`, `@privyid/persona-icon`, `@privyid/persona-ilustration`, `@privyid/tailwind-preset`

Production Persona is **Vue 3 + Tailwind + PostCSS**. The recreations here are framework-agnostic CSS + a small JSX layer for the UI-kit demos.

---

## Index — what's in this folder

| Path | What's there |
|---|---|
| `colors_and_type.css` | Single source of truth for tokens — palette, semantic vars, type scale, radii, shadows, z-index, spacing. Import this and you have the system. |
| `components/ds.css` | Reusable button / input / badge / banner / card / avatar / toggle / table styles built on top of the tokens. |
| `assets/` | Privy logos, brand marks, sample images, and **18 Persona Illustration spots**. |
| `assets/illustrations/` | Hero/spot SVGs — used for empty/onboarding/error states. |
| `fonts/` | `persona-icon` icon font (600+ glyphs) — `.woff2` / `.woff` / `.ttf` + CSS classes (`pi-*`). |
| `preview/` | Card-sized HTML specimens — colors, type, components. Each is registered to the Design System tab. |
| `ui_kits/dashboard/` | Hi-fi recreation of the **Privy enterprise dashboard** (document inbox + signing flow). |
| `ui_kits/web/` | Hi-fi recreation of the **Privy marketing website** (hero, features, footer). |
| `SKILL.md` | Agent-skill manifest so this folder can be downloaded and used directly in Claude Code. |

---

## Quickstart

```html
<link rel="stylesheet" href="colors_and_type.css">
<link rel="stylesheet" href="components/ds.css">

<button class="p-btn p-btn--md p-btn--primary">
  <i class="pi-signature"></i> Sign document
</button>
```

Want a token? Use the semantic one first (`var(--fg-default)`, `var(--brand-action)`), drop to the raw palette only when the semantic doesn't fit.

---

## Content Fundamentals

**Voice.** Direct, helpful, and quietly confident. Privy's product handles money, identity, and legal documents — copy never gets cute or jokey, but it's also never bureaucratic. Read like a trustworthy colleague who knows the regulation, not a lawyer who's hiding behind it.

**Person.** Second-person *you* for the user; first-person plural *we* sparingly, only for Privy itself ("We'll never share your address."). Indonesian product copy uses *Anda* (formal you), never *kamu*.

**Casing.** **Sentence case** everywhere — buttons, headings, menu items, page titles. Title Case is reserved for proper nouns and product names (Privy, Persona, e-Meterai, Privy Pass, KTP). Acronyms stay uppercase (OTP, KTP, NPWP, API).

**Tone calibration by surface.**
- *Auth / OTP / signing* → terse, instructional, never alarmist. ("Enter the 6-digit code we sent to •••• 4421.")
- *Empty states* → encouraging, action-oriented. ("Nothing here yet — upload a document to get started.")
- *Errors* → say what happened, what to do, in that order. Don't blame the user. ("We couldn't read this ID — try better lighting and hold the card flat.")
- *Marketing* → confident but plain. Lead with the customer outcome, not Privy's tech.

**Numbers & dates.** Indonesian Rupiah is `Rp` with a thin space (`Rp 1.250.000` — period thousands separator). Dates use `D MMM YYYY` in product; the marketing site is comfortable with `DD/MM/YYYY`. Times use 24-hour (`14:30 WIB`).

**Avoid.** Emoji in product UI (none used in upstream code). Exclamation marks (one is plenty; two is a red flag). The words *easy*, *simply*, *just*. Filler like *please*, *kindly*. Stacked hedges (*may potentially*).

**Examples — same idea, three surfaces:**
- Button label · `Sign document` (not *Click here to sign*)
- Banner · `Heads up. Your e-meterai stock will refresh on June 1.`
- Error · `Signature failed. The OTP didn't match. Please retry within 5 minutes.`

---

## Visual Foundations

**Type.** **DM Sans** for all UI and marketing — a humanist geometric sans that reads warm but stays neutral. **DM Mono** for code, document IDs, OTP digits, and the occasional numeric callout. Hierarchy is driven by **size and weight** (regular 400 / medium 500 / bold 700) far more than color or styling. Headings are weight-regular at the top of the scale (h1/h2/h3) and shift to medium below (h4/h5).

**Color.** Reserved by design — most of the canvas is neutral gray on near-white (`#FBFCFD` surfaces over `#F4F5F7` ground). Color earns its place:
- **Privy red** (`#E42E2C`) is the brand and the *only* primary-CTA color. Use it sparingly — one per view.
- **Accent blue** (`#008AFF` / `#0075D9`) is for links, info states, and selection. It does most of the day-to-day color work.
- **Semantic green / orange / red** for success / warning / danger banners and tags.
- The full palette has 12 hues × 12 stops; use the extended hues (purple, teal, lime, pink) only for data viz, illustrations, or labels that need to disambiguate categories.

**Backgrounds.** Solid color, full stop. Persona avoids gradients in chrome — the one branded gradient in the upstream code is `linear-gradient(90deg, #37162E → #912121)` for a single hero treatment, and it's clearly an exception. No mesh gradients, no glassmorphism, no decorative noise. Imagery is photographic when present (no painterly illustration); spot illustrations are flat with a soft peach/blue palette and rounded forms (see `assets/illustrations/`).

**Corner radius.** Three usable tiers:
- `8px` (default) — buttons, inputs, tags.
- `12px` (`md`) — cards.
- `9999px` (`full`) — badges, avatars, toggle tracks, occasional pill CTAs.
Everything else (4–22px) exists for size matching (`xs` button → `4px`, `xl` button → no, pills only).

**Shadows.** Five tiers used like elevation steps, not decoration:
- `sm` (tooltip, default card)
- `lg` (button on hover — never on rest)
- `xl` (dropdown, toast, callout card)
- `2xl` (modal)
- `mask` is a special `0 0 0 9999px rgba(0,0,0,.5)` for backdrops.

**Borders.** 1px is the only weight. Color is the variable: `--border-subtlest` (gray-5) for dense table separators, `--border-default` (gray-20) for input chrome, `--border-emphasis` (gray-30) for hover affordance on inputs.

**Hover & press.**
- Buttons darken one step (`red-40 → red-50`) and pick up `shadow-lg`.
- Pressed state darkens one more step (`red-50 → red-60`) and drops the shadow.
- Ghost / link buttons add a `bg-gray-5` wash on hover.
- Inputs swap `border-default → border-emphasis` on hover, then to `blue-40` with a 3px `blue-0` focus ring.

**Motion.** Transitions are short and unflashy — `120–200ms`, `ease` curves. No bounces, no springs in product. Persona's tailwind preset ships `@privyid/tailwind-animation` with fade/slide variants — used for modal/sheet entry and dropdown menus. There is **no** bespoke easing curve; the system leans on Tailwind defaults.

**Transparency & blur.** Used only for two things:
1. **Backdrops** — `rgba(0,0,0,.50)` behind modals and sheets.
2. **Alpha overlays** — `alpha-black-5`/`-10` tints for hover surfaces over imagery. Backdrop blur is not part of the system.

**Layout.** Container max-widths default to Tailwind's; product surfaces are app-shell driven (sidebar + main). Sticky nav has a `z-index: 1040`; modals sit at `1050`; toasts/notifies float at `1090`. Spacing follows the standard 4px scale (`4, 8, 12, 16, 24, 32, 48, 64, 80, 96`).

**Imagery.** Photography is bright, warm (not cold corporate blue), with real Indonesian users — no stock people-shaking-hands. Illustrations (Persona Illustration package) are flat vector spots with peach skin tones, light-blue accents, and rounded geometric shapes. Always face-on or 3/4 view; no isometric grids.

---

## Iconography

Persona ships its **own icon font** — `@privyid/persona-icon` — with **600+ glyphs**, each available in regular (line) and `-solid` (filled) variants. It's the *only* icon system used across Privy product. Glyphs include the full UX vocabulary (`pi-home`, `pi-search`, `pi-settings`, `pi-trash`, `pi-edit` …) plus Privy-specific concepts (`pi-signature`, `pi-stamp`, `pi-document-seal`, `pi-e-meterai`, `pi-fingerprint`, `pi-ktp`, `pi-privy-balance`).

### How to use

```html
<link rel="stylesheet" href="fonts/persona-icon.css">

<i class="pi-document-signed"></i>     <!-- inline icon -->
<button class="p-btn p-btn--md p-btn--primary">
  <i class="pi-signature"></i> Sign
</button>
```

The font ships as `.woff2`/`.woff`/`.ttf` in `fonts/`. Color is `currentColor` so the icon takes the parent's text color — pair with the semantic foreground vars (`var(--fg-default)`, `var(--brand-action)`, etc.).

**Style rules**
- Regular weight is the default. Use `-solid` to mark a *selected* state in nav, or to add visual weight to status indicators (✓ success, ! warning).
- Don't mix icon weights inside the same row of UI — pick one per surface.
- Inline icons render at `1em` and align to baseline; size with `font-size`.
- Don't tint icons in arbitrary colors; use one of the semantic foreground tokens.

**Emoji & unicode.** Not used. The upstream codebase ships zero emoji in chrome or copy. Avoid them unless the user explicitly requests them.

**SVG illustrations.** Distinct from icons — see `assets/illustrations/`. Used at 96–150px for empty/onboarding/error states (`document-template.svg`, `id-card.svg`, `liveness.svg`, `page-not-found.svg`, etc.). The full upstream set is in [`packages/persona-ilustration`](https://github.com/privy-open-source/design-system/tree/main/packages/persona-ilustration) — pull more on demand.

> **Font-substitution note.** This system uses the real Persona Icon font files (imported from the upstream repo). No substitution was made.

---

## Tokens at a glance

```
Brand          --brand-action       #E42E2C   (red-40)
               --brand-accent       #008AFF   (blue-40)

Foreground     --fg-default         gray-95    body
               --fg-subtle          gray-60    secondary
               --fg-subtlest        gray-35    tertiary / placeholder

Background     --bg-default         gray-0     card surface
               --bg-ground          gray-5     app canvas
               --bg-base            gray-10    page chrome

Status         info / success / warning / danger × {fg, bg, border, emphasis}

Radius         default 8px · md 12px (cards) · full 9999px (pills)
Shadow         sm · md · lg · xl · 2xl · mask
Type           DM Sans (UI) · DM Mono (code) · Persona Icon (glyphs)
Scale (px)     11 12 14 16 20 24 36 48 60 72
```

---

## Want more?

The upstream repo has a lot more than what's here. If you need a component that isn't recreated (`@privyid/persona` has 89 components — calendar, cropper, datepicker, tour, tiptap-based markdown editor, PIN input, signature pad, QR scanner, …), browse the source:

- https://github.com/privy-open-source/design-system/tree/main/src/components
- https://github.com/privy-open-source/design-system/tree/main/src/styleguide
- https://github.com/privy-open-source/design-system/tree/main/src/foundation

The Vue + Tailwind implementation there is the production source of truth.
