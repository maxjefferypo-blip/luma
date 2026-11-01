---
name: luma-design
description: Use this skill to generate well-branded interfaces and assets for Luma, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the readme.md file within this skill, and explore the other available files. **Before writing any copy, read `guidelines/voice/brand-strategy.md`**: it is the source of truth for positioning, tone, approved and prohibited claims, figure qualifiers and touchpoint examples.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key rules to never break:
- The logo is `assets/logo/*.svg` (or the `Logo` component). Never type "luma" in a font as a logo, never redraw it, recolour it or move the eclipse.
- Two typefaces only: Geist (Hero/H1/H2) and Figtree (everything else), both free (SIL OFL), self-hosted in assets/fonts/. The wordmark is outlined SVG — no font.
- Bone and Charcoal dominate; Luma Orange is a rare accent. No gradients, no neon, no decorative graphics.
- Copy follows the messaging architecture: Brand "Light, reimagined.", then Product "A different kind of screen protector.", then Explanation "Not just protection. Light conversion.", then Proof "Measured, not assumed." Lead with the mechanism or with curiosity, never with a number.
- Light technology is the promise; sleep and wellness are context only. Never claim sleep, eye-health, circadian, skin or therapy benefits, "clinically proven", or "first/only".
- Every figure carries its qualifier from the figures register (e.g. "17.17% blue-light reduction, reported TÜV test sample"). All figures are provisional.
- Tone: curious, precise, confident, accessible, considered. Sentence case, no exclamation marks, no emoji, British spelling.
