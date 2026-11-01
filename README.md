<p align="center">
  <a href="https://luma96.netlify.app">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="project/assets/logo/luma-logo-reversed.svg">
      <img src="project/assets/logo/luma-logo-primary.svg" alt="luma" width="220">
    </picture>
  </a>
</p>

<p align="center"><strong>Light, reimagined.</strong></p>

<p align="center">
  Website and design system for Luma, maker of the LC–01 quantum-dot screen protector.
</p>

<p align="center">
  <a href="https://luma96.netlify.app"><strong>Live site</strong></a> ·
  <a href="storefront/README.md">Storefront docs</a> ·
  <a href="project/guidelines/voice/brand-strategy.md">Brand strategy</a>
</p>

<p align="center">
  <img alt="Shopify Hydrogen" src="https://img.shields.io/badge/Shopify-Hydrogen-1F2326?style=flat-square&logo=shopify&logoColor=F5F1EA">
  <img alt="Deployed on Netlify" src="https://img.shields.io/badge/Deployed%20on-Netlify-1F2326?style=flat-square&logo=netlify&logoColor=F5F1EA">
  <img alt="Design system: Claude Design" src="https://img.shields.io/badge/Design%20system-Claude%20Design-D65D42?style=flat-square">
</p>

---

## What's here

```
project/       Luma design system, exported from Claude Design (source of truth: Claude Design)
storefront/    The website: Shopify Hydrogen (headless), deployed on Netlify
docs/          Background: design-session transcripts from Claude Design
netlify.toml   Netlify build settings (builds storefront/)
```

## How changes flow

| Change | Made in | Reaches the site by |
|---|---|---|
| Brand: colours, type, logo, components, tone of voice | **Claude Design** | Re-export, replace `project/`, update `storefront/` to match (pull request) |
| Website: pages, sections, copy, behaviour | `storefront/` | Pull request → Netlify preview → merge to `main` |
| Products, prices, stock, discounts, policies | **Shopify admin** | Live immediately, no deploy |

Rules:

- **Don't edit `project/` by hand.** It's replaced wholesale by each Claude Design export, so manual edits would be lost.
- All copy, claims and figures follow `project/guidelines/voice/brand-strategy.md`.
- Every push to `main` deploys to Netlify. Pull requests get a preview URL.

## Running the website

See [`storefront/README.md`](storefront/README.md) for local dev, the Shopify setup, environment variables and deployment.
