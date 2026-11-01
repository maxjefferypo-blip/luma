Pill-shaped action button. Use `primary` (orange) for the single most important action in a view — usually "Shop LC–01" or "Add to bag".

```jsx
<Button iconRight="arrow-right">Shop LC–01</Button>
<Button variant="outline">How it works</Button>
<Button variant="inverse" size="lg">Shop now</Button>   {/* on Charcoal */}
<Button variant="dark" fullWidth caps={false}>Checkout</Button>
```

- Variants: `primary` · `dark` · `outline` · `inverse` (on dark grounds) · `ghost`.
- Sizes: `sm` 40 · `md` 52 · `lg` 60. Arrow icons nudge 3px right on hover.
- Copy is short and literal: verb + object. No exclamation marks.
