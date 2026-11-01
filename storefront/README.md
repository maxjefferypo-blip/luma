# Luma storefront (headless Shopify)

The Luma website as a headless Shopify store: **Shopify Hydrogen** (React Router 7) deployed on **Netlify** (Edge Functions), styled with the Luma design system from `../project/`. Shopify handles products, prices, stock, the cart, checkout, customer accounts and policies. This app is the branded front end.

| Page | Route | Source design |
|---|---|---|
| Home | `/` | `project/ui_kits/website/HomePage.jsx` |
| LC–01 product | `/products/lc-01` | `ProductPage.jsx` |
| The science | `/science` (`#technology`, `#results`) | `SciencePage.jsx` |
| Bag drawer + `/cart` | drawer on every page | `BagDrawer.jsx` |
| Account, policies, search, blogs, pages | skeleton routes, restyled | Hydrogen skeleton |

## Run it

Requires Node 22 or 24.

```bash
cp .env.example .env             # fill in your Shopify store's Storefront API keys
npm install
npm run dev                      # http://localhost:5173
```

Without store keys, Hydrogen falls back to Shopify's demo store (mock.shop): the home page renders, but `/products/lc-01` is a 404 because mock.shop has no LC–01.

Other scripts: `npm run build`, `npm run typecheck`, `npm run lint`, `npm run codegen` (regenerates GraphQL types after changing a query).

## Deploy to Netlify

`netlify.toml` at the repo root already sets the base directory (`storefront`), the build command and the publish folder. `server.ts` is deployed as a Netlify Edge Function by `@netlify/vite-plugin-react-router`; static files are served from `dist/client`.

1. Netlify › **Add new site › Import an existing project** › pick this GitHub repo. Leave the build settings as detected.
2. **Site configuration › Environment variables**: add every variable from `.env.example` (`SESSION_SECRET`, `PUBLIC_STORE_DOMAIN`, `PUBLIC_STOREFRONT_API_TOKEN`, `PRIVATE_STOREFRONT_API_TOKEN`, `PUBLIC_STOREFRONT_ID`, `PUBLIC_CHECKOUT_DOMAIN`, and the customer-account ones if you use `/account`).
3. Deploy. Every pull request gets a Netlify deploy preview URL.

The Storefront API keys come from Shopify admin › **Headless** sales channel (or Hydrogen channel) › your storefront.

## Set up Shopify (one-off)

1. **Install the Headless sales channel** (Shopify admin › Sales channels) and create a storefront. This provides the Storefront API tokens for Netlify.
2. **Create the product**
   - Handle: `lc-01` (or set `PUBLIC_PRODUCT_HANDLE`).
   - Title: `Luma LC–01`, with an en dash.
   - Variants: one option named **`Device`**, with one value per iPhone model, e.g. `iPhone 16 Pro`. The home page's device cards and the product page's model buttons are generated from these values.
   - Price, SKU, inventory and stock tracking per variant. A sold-out variant shows "Sold out".
   - Images (optional): upload the cutouts from `project/assets/product/`. Until then the product page uses the same renders from `public/images/product/`.
   - SEO title and description (optional): used for the page `<title>` and meta description.
   - Metafield `custom.descriptor` (optional, single-line text): replaces "Quantum-Dot Screen Protector" under the title.
3. **Markets:** United Kingdom, GBP. The storefront requests prices in `GB` (`app/lib/context.ts`).
4. **Policies** (Settings › Policies): shipping and refund. The footer links to `/policies/shipping-policy` and `/policies/refund-policy`.
5. **Contact page:** create a page with the handle `contact`. The footer links to `/pages/contact`.
6. **Customer accounts:** turn on the new customer accounts and add the Customer Account API values (`PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID`, `SHOP_ID`) to Netlify's environment variables, so the header's account icon (`/account`) works. Add your Netlify domain to the Customer Account API's allowed callback URLs.

## What lives where

- **In Shopify:** product title, price, variants, stock, product images, SEO fields, the cart, checkout, discounts (`/discount/CODE` links work), customers, policies, pages.
- **In code:** all brand copy, published figures and their qualifiers, art-directed imagery and navigation.

This split is deliberate. Every claim and number has to follow `project/guidelines/voice/brand-strategy.md` (claims and figures registers). Keeping them in code means they get reviewed, and can't be edited live in the admin. If a figure or claim changes, update the registers first, then `app/routes/_index.tsx`, `products.$handle.tsx`, `science.tsx` and `app/components/luma/Kit.tsx` (`CompareTable`).

**Newsletter (footer):** `app/routes/newsletter.tsx` creates a Shopify customer with email-marketing consent, so subscribers appear under Customers › Email subscribed. If you move to Klaviyo or Shopify Forms, swap that action's body.

## Code map

```
app/
  styles/tokens.css       design tokens + @font-face (from project/tokens/*.css)
  styles/app.css          base + website-kit layout (.k-*) + component classes (.l-*)
  components/luma/        design-system components as TSX: Button, TextLink, Icon, Logo, EclipseMark,
                          Tag, SpecList, Accordion, Tabs, QuantityStepper, plus kit helpers
                          (Section, Container, ProductShot, WaveDiagram, CompareTable, Marquee)
  components/Header.tsx   announcement bar + SiteHeader (cart badge, mobile menu button)
  components/Footer.tsx   SiteFooter + newsletter form
  components/Aside.tsx    drawer (bag, mobile menu)
  components/Cart*.tsx    bag lines, quantity, remove, subtotal, Shopify checkout
  lib/luma.ts             brand constants, image paths, price formatting
  lib/product.ts          shared product query (home + product page)
  routes/                 _index, products.$handle, science, newsletter, cart, + skeleton routes
server.ts                 Netlify Edge Function entry (creates the Hydrogen context per request)
public/fonts, public/images/product   self-hosted Geist/Figtree and the product renders
```

Design tokens are copied from `project/tokens/`. If the design system changes, regenerate `app/styles/tokens.css` from those files (the font URLs point to `/fonts/`).

## Still placeholder / to do

- **Lifestyle photography:** the home gallery shows the art-direction frames (`Slot` in `_index.tsx`). Pass `src` once photos exist.
- **Price and device list:** these now come from Shopify. The £39 and iPhone 16 models in the designs were placeholders.
- **Home closing card:** the prototype's "Add to bag — £39" became "Choose your model", because adding a default iPhone model without asking would ship the wrong glass. With a single-variant product it adds straight to the bag.
- **Search and blog:** the skeleton routes still work (`/search`, `/blogs`), restyled, but aren't linked from the navigation.
