# Shopify Hydrogen development

This storefront is scaffolded from Shopify's Hydrogen skeleton template. See the README for framework-specific details.

Use the [Shopify AI Toolkit](https://shopify.dev/docs/apps/build/ai-toolkit) for all Shopify API and platform work. If missing, install it in the agent host per that page (or `npx skills add Shopify/shopify-ai-toolkit --list` for skill-compatible hosts).

## Luma brand rules

- All copy, claims and figures follow `../project/guidelines/voice/brand-strategy.md` (claims and figures registers). Figures always travel with their qualifiers.
- Visual source of truth is the design system in `../project/` (tokens, components, `ui_kits/website`). `app/styles/tokens.css` is copied from `../project/tokens/`.
- See `README.md` for what lives in Shopify vs in code.
