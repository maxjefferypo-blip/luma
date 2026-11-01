The website header. Wordmark left, three nav links, account + bag right. Use on every web page.

```jsx
<SiteHeader active="science" cartCount={1} onNavigate={go} onCart={openBag} />
<SiteHeader compact cartCount={1} />   {/* mobile */}
<SiteHeader inverse />                 {/* over a Charcoal hero */}
```

- Nav labels are single nouns: Science, Shop, Technology. Active link gets a 1px underline.
