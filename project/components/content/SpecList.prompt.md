Specifications — as quiet hairline rows on product pages, or as up to four large figures in a science section.

```jsx
<SpecList items={[
  { label: 'Glass thickness', value: '0.33 mm' },
  { label: 'Light transmittance', value: '≈ 91%' },
  { label: 'Blue-light reduction', value: '17.17%', note: 'TÜV test sample' },
]} />
<SpecList layout="figures" items={[{ value: '0.33 mm', label: 'Tempered glass' }, { value: '≈ 91%', label: 'Light transmittance' }]} />
```

- Every measured figure carries its qualifier in `note`. Never present test results as health benefits.
