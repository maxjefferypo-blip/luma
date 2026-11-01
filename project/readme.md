# Luma Design System

Luma is a premium consumer-technology brand making screen protectors that change how light leaves a device. The first product, **Luma LC–01 Quantum-Dot Screen Protector**, is tempered glass containing quantum dots that absorb a portion of blue light and re-emit it at longer red wavelengths.

Positioning: *science-led technology for better screen time.* Luma should feel like a premium science-and-wellness brand (design-quality reference: Seed), not a phone-accessory company. Personality: minimal, refined, scientific, intelligent, calm, contemporary, trustworthy.

**Surfaces this system serves:** ecommerce website (desktop + mobile), packaging, marketing/social. A website UI kit, listing/social/banner templates and a print logo pack are included.

## Sources

- **Brand brief** (pasted in chat) — positioning, logo rules, core palette, tone, product facts, claims guidance. The brief named three paid typefaces (MIT Quailav, Chamer, Lyu Lin UI); the owner has since approved free alternatives — see **Fonts**.
- **Typography board** — `assets/reference/luma-typography-board.png`. This is the *approved creative direction* and the master visual reference for the wordmark. It is AI-generated: a visual target, not a font master.
- No codebase, Figma file, website, photography or font files were supplied.

### Where this system differs from the board (deliberately)
- **Colours**: the board shows "Luma Red #FF5A3C", "Warm Cream #FAF7F2" etc. The brief's palette (#D65D42 burnt orange, #F5BFA9 peach, Bone, Stone, Mist, Charcoal #1F2326) is used instead, as the brief specifies it explicitly.
- **Eclipse size**: scaled to 80% of the board's size so it reads as a secondary signature, per the brief. Both circles share one radius; orange sits in front.
- **Lettering**: unchanged. The vector was measured from the board pixel-by-pixel and fitted to within ~0.5 unit (at a 152-unit ascender). See the *Wordmark fidelity* card.

---

## Index

| Path | What |
|---|---|
| `styles.css` | Entry point — `@import`s only |
| `tokens/` | `fonts.css` (self-hosted @font-face), `colors.css`, `typography.css`, `spacing.css` (spacing, radii, shadow, motion, layout), `base.css` (element defaults + `.luma-*` type classes) |
| `assets/logo/` | `luma-logo-primary.svg`, `luma-logo-reversed.svg`, `luma-wordmark-charcoal.svg` (no eclipse, one-colour), `luma-eclipse.svg` |
| `assets/logo/print/` | Packaging pack: every logo as vector PDF + SVG + transparent PNG, with README |
| `assets/logo.svg` | Copy of the primary logo |
| `assets/fonts/` | Geist + Figtree variable woff2 (OFL) |
| `assets/icons/` | 16 Lucide line icons (1.5px stroke) |
| `assets/reference/` | Typography board + wordmark crop used for tracing |
| `guidelines/brand/` | Logo cards: primary, reversed, eclipse mark, clear space, eclipse placement, fidelity, misuse, colour specs, colour balance |
| `guidelines/` | Foundation cards: colours, type, spacing, radii, elevation, layout, motion, icons, imagery |
| `components/` | React primitives (see below) |
| `ui_kits/website/` | Click-through website: Home, Shop (LC–01), Science, Bag drawer |
| `templates/product-listing/` | 11 × 1200² ecommerce gallery images, type sized to read on a phone (hero, what it does, how it works, layers, clarity, protection, comparison, results, install, FAQ, lifestyle slot) |
| `templates/social-posts/` | 5 × 1080×1350 feed posts, a 3-slide carousel, 4 × 1080×1920 stories (safe-zone toggle) |
| `templates/web-banners/` | Website heroes (2 × 1920×800 desktop, 1080×1350 mobile) + 3 email headers (1200×600 = 600px @2×). `showCopy` toggle gives text-free versions for live-text heroes |
| `assets/product/` | Transparent cutouts `lc01-front.png`, `lc01-rays.png`, `lc01-hd.png`, `lc01-layers.png` — supplier renders with Chinese lock-screen text and supplier badges removed |
| `SKILL.md` | Agent-skill entry point |
| `guidelines/voice/` | **Brand strategy & messaging** (`brand-strategy.md`) + 10 Voice cards: architecture, promise, principles, say-this, two voices, claims, figures, vocabulary, hooks, microcopy |

### Components
- **brand/** — `Logo` (primary · reversed · wordmark), `EclipseMark`
- **actions/** — `Button` (primary · dark · outline · inverse · ghost; sm/md/lg), `TextLink`, `Icon`
- **forms/** — `Input`, `Checkbox`, `QuantityStepper`
- **content/** — `Tag`, `SpecList` (rows · figures), `Accordion`, `MediaFrame`, `ProductCard`
- **navigation/** — `SiteHeader` (desktop · compact · inverse), `SiteFooter`, `Tabs`

No source defined a component inventory, so this is a standard set sized to a single-product ecommerce brand. **Intentional additions:** `MediaFrame` (holds the art-directed placeholder until photography exists), `SpecList` (product figures must always travel with their qualifiers).

---

## Logo

The five essential assets:

1. **Primary logo** — `assets/logo/luma-logo-primary.svg`: Charcoal wordmark, orange + peach eclipse, on Bone or any light ground.
2. **Reversed logo** — `assets/logo/luma-logo-reversed.svg`: white wordmark; eclipse colours unchanged; on Charcoal or dark photography.
3. **Eclipse brand mark** — `assets/logo/luma-eclipse.svg`: two equal circles, peach behind, orange in front. Favicon, avatar, packaging seal.
4. **Clear space** — `x` = the x-height of the wordmark (height of the *u*), on all four sides. In px: `x ≈ 0.67 × logo height`.
5. **Core colours** — Charcoal #1F2326 · Luma Orange #D65D42 · Luma Peach #F5BFA9 (+ Bone, Stone, Mist grounds).

**Construction.** Monoline geometric lowercase, stroke ≈ 19.2 units on a 152.2-unit ascender (x-height 103.2). The *l* is a vertical stem whose foot curves right into a tapered point on the baseline. The *u* is a pure U with no spur. The *m* is two slightly elliptical arches. The *a* is single-storey: an elliptical bowl, a stem on the right running from mid-bowl to the baseline, and a small notch where the bowl meets the stem. **Eclipse:** the orange circle's centre sits on the outer edge of the *a* stem and its bottom rests on the x-height line. Peach is offset up-right by (0.95r, −0.12r).

**Minimum size:** wordmark 24px tall on screen / 20mm wide in print. Eclipse 12px / 3mm.

**Never:** stretch, recolour, add shadows/glows/outlines, move or resize the eclipse, set "luma" in a live font, place on busy imagery.

The wordmark is outlined vector art and needs no font. The `Logo` component embeds the same path data.

---

## Content fundamentals

**Source of truth: [`guidelines/voice/brand-strategy.md`](guidelines/voice/brand-strategy.md)**: positioning, audiences, messaging architecture, tone, claims register, figures register, touchpoint playbook, hooks and copy QA. Read it before writing any copy on any surface. The "Voice" cards on the Design System tab summarise it.

**The one rule.** Light technology is the central promise. Sleep, evening routines and wellness are *contexts* we can talk about, never *outcomes* we promise.

**Messaging architecture.** Use these in order:
1. **Brand:** "Light, reimagined."
2. **Product:** "A different kind of screen protector."
3. **Explanation:** "Not just protection. Light conversion."
4. **Proof:** "Measured, not assumed."

The brand promise is "Rethink what's between you and your screen." Lead with the mechanism or with curiosity, never with 17.17%.

**Tone.** Curious, precise, confident, accessible, considered. Intelligent without being clinical.
- **Brand voice** is calm and editorial. Use it on the website, packaging, listings, email and ads.
- **Founder voice** is human, curious and occasionally playful. Use it in short video and founder posts.
- Both voices follow the same claims rules.

**Writing style**
- **Person:** "we" for Luma and "you/your" for the reader, used sparingly. Describe the light and the product rather than the customer.
- **Casing:** sentence case everywhere. Uppercase buttons and overlines are a type treatment, so write the source text as "Shop LC–01".
- **Headlines:** short declaratives with a full stop. Two-beat lines are a signature: "Small changes. Different light."
- **Product name:** "Luma LC–01" on first mention, then "LC–01", always with an en dash.
- **Numbers:** always written with a unit and a qualifier, using the exact wording in the figures register:
  - 17.17% blue-light reduction (reported TÜV test sample)
  - 28.72% conversion efficiency (manufacturer-defined test metric; explain that this is *not* the share of all blue light converted)
  - ≈ 91% light transmission (product specification)
  - 9H hardness (product specification)
  - 0.33 mm thickness (product specification)
- **Never:** sleep, eye-health, circadian, melatonin, skin or therapy claims. Never "clinically proven". Never "first" or "only".
- **Disclaimer:** "LC–01 is a screen protector, not a medical device." Include it wherever figures appear.
- **No** exclamation marks, emoji (in brand voice), hype words or urgency tricks. Use British spelling.
- **Microcopy:** literal and brief. "Add to bag", "Explore LC–01", "Choose your model", "Your bag is empty.", "Enter a valid email address."

**Status.** All figures and the claims marked Conditional are provisional until the launch-readiness checklist (§9 of the strategy) is complete.

---

## Visual foundations

**Colour.** Six colours total. Bone (#F5F1EA) is the default page; Charcoal (#1F2326) carries type and the occasional dark section. Stone and Mist are quiet secondary grounds for alternating sections and image placeholders. Luma Orange is rare: the eclipse, the single primary CTA per view, the bag badge. Peach appears in the eclipse and as an occasional soft tag. Text hierarchy uses charcoal-into-bone mixes (`--luma-ink-80`, `--luma-ink-64`), not opacity. Rough balance: Bone 58% · Charcoal 24% · Stone/Mist/Peach/Orange the rest. No gradients, no saturated grounds, no colourful decoration.

**Type.** Geist for Hero/H1/H2 — large, regular weight, tight tracking (−0.025em at H1), sentence case. Figtree for everything else — H3 subheads, body, captions, nav, buttons. Board values are kept exactly: H1 56/64, H2 28/36, Body 16/24, Caption 14/20, Button 16/20. Added: Hero 80/84, H3 20/28, Lead 18/28, Overline 12/16 at +0.24em uppercase (from the board's "SCIENCE FOR A CALMER TOMORROW" treatment). Body copy is set in secondary ink.

**Space & layout.** 4px base scale; sections breathe at 128px (64px mobile). 12-column grid, 1280px max, 48px gutters (20px mobile), 640px max text measure. Composition is editorial: asymmetric two-column splits, a headline on the left and explanation on the right, lots of empty Bone. One idea per section. Sticky 72px header with a hairline bottom border; nothing else is fixed.

**Backgrounds.** Flat colour only. Sections alternate Bone → Stone → Charcoal to create rhythm. Imagery is the only texture. No patterns, no grain overlays, no illustrations as wallpaper.

**Imagery.** Premium, natural, editorial, lifestyle-led. Warm evening light, soft shadows, bedside scenes, neutral interiors, close-up glass and packaging textures, abstract warm light/wavelength studies, simple scientific macro visualisations. Colour vibe: warm, low-contrast, slightly desaturated, never neon or blue-tinted "tech". Until photography exists, use `MediaFrame` placeholders (flat Stone/Mist/Peach with a one-line art-direction caption). Images use `--radius-lg` (20px) for hero/feature frames, `--radius-md` (12px) in grids.

**Corners.** Buttons, tags, steppers: full pill. Image frames 12–20px. Inputs 8px. Checkboxes 4px.

**Borders & cards.** Structure comes from 1px hairlines (`--border-hairline`), not boxes. There are no shadowed cards; a "card" is an image frame plus text beneath. Lists, specs and FAQs are divided by hairlines top and bottom.

**Elevation.** Flat by default. A single shadow (`--shadow-overlay`) is reserved for drawers, dialogs and menus. No inner shadows.

**Transparency & blur.** Only the overlay scrim behind drawers (`--surface-overlay`, Charcoal at 32%). No glassmorphism or backdrop blur.

**Motion.** Calm and functional. Fades and short translations with `--ease-out` (cubic-bezier(.2,.7,.2,1)); 160ms for hover/colour, 240ms for accordions and toggles, 480ms for drawers. No bounce, spring, spin, parallax or autoplaying decoration.

**Hover.** Buttons darken one step (orange → `--accent-hover`; outline gains a Stone fill). Links: hairline underline darkens to full ink. Arrow icons nudge 2–3px right. Product cards nudge their arrow; images don't zoom.

**Press.** Buttons darken a further step (`--accent-press`). No shrink or scale.

**Focus.** 2px Bone gap + 2px Charcoal ring (`--focus-ring`).

---

## Iconography

- No icon set was supplied. **Lucide** (ISC licence) is used as a stand-in: 16 glyphs copied into `assets/icons/` and embedded in the `Icon` component, rendered at a **1.5px stroke** to match the thin arrow on the board's CTA.
- Line only, rounded caps and joins, `currentColor`. Sizes: 16 (inline with captions), 20 (buttons, UI), 22–24 (header).
- Icons are functional only — arrows on CTAs, bag, account, menu, close, plus/minus, chevrons, a few delivery/returns glyphs. Never as decoration beside headings or in bullet lists.
- No emoji. No unicode symbols as icons (the en dash in "LC–01" and "≈" in figures are typography, not icons).
- The eclipse is the only brand graphic. It is not an icon and is never used as a bullet or a pattern.

---

## Fonts

Two typefaces, both free under the **SIL Open Font License 1.1** — fine for web, apps, print, packaging and advertising with no fees. Self-hosted in `assets/fonts/` (variable woff2, Latin subset) and declared in `tokens/fonts.css`.

| Face | Role | Token |
|---|---|---|
| **Geist** Regular (400) | Hero, H1, H2 | `--font-display` |
| **Figtree** Regular (400) / Medium (500) | Body, UI, H3, captions, buttons, nav | `--font-body` |

The **wordmark** is outlined vector art. It was traced from the board (originally set in MIT Quailav) and needs no font file. Never typeset "luma" as a logo.

Desktop font files for designers: Geist from vercel.com/font, Figtree from Google Fonts.
