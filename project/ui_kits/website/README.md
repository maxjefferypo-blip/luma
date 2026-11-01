# Luma — Website UI kit

Click-through recreation of the Luma ecommerce site, composed entirely from the design-system components (`window.LumaDesignSystem_64bcc8`).

**Screens**
- `HomePage.jsx` — flow modelled on Seed's homepage (not copied): scrolling Peach announcement bar → Stone hero with rounded base over Charcoal → Charcoal device range (4 cards, hover lift) → "In the box" with pinned callouts + 3 thumbs → frosted science card on Mist (stat + callouts) → editorial "Science [01]" teaser with wave diagram → display-type brand ticker with eclipse separators → "Measured, not promised." results carousel → lifestyle gallery strip (image slots — drop photos in) → closing pair (How we test · Add to bag). Previous version kept at `archive/homepage-v1.jsx`.
- `ProductPage.jsx` — 4-image gallery (real renders), sticky buy box, device choice, quantity + Add to bag with live price, trust row, key specs, tabs (Overview with diagram · Specifications · Installation), comparison, and a sticky add-to-bag bar once the buy box scrolls away.
- `SciencePage.jsx` — plain-language science with diagram + rays render, test results with qualifiers, "What we don't claim".
- `BagDrawer.jsx` — slide-in bag with product thumbnail, quantity, subtotal, checkout.
- `Shared.jsx` — Container, Section, Overline, Step, ProductShot, WaveDiagram, CompareTable, Marquee, product + device constants.
- Footer uses `SiteFooter statement=… signature` (mission line + full-width wordmark); header uses `SiteHeader action={<Button/>}`.

**Interactions**: header nav switches pages (persisted in localStorage), Add to bag opens the drawer and updates the header count, tabs/accordions/steppers are live. Below 900px the layout collapses to the mobile header and single column.

**Not from a source**: no existing website was supplied, so these screens are an original layout built from the brief and the typography board. Price (£39) and the device list are placeholders. Product imagery is the cleaned supplier renders in `assets/product/`; lifestyle photography is still to come.
