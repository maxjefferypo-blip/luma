# Luma

Website and design system for **Luma**, maker of the LC–01 quantum-dot screen protector.

Live: https://luma96.netlify.app

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
