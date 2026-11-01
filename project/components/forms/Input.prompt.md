Single-line text field for email capture, checkout and search.

```jsx
<Input label="Email" placeholder="you@example.com" />
<Input label="Email" error="Enter a valid email address." />
<Input placeholder="Email address" trailing={<Button size="sm">Join</Button>} />
<Input inverse placeholder="Email address" />   {/* on Charcoal */}
```

- Labels sit above, in caption size. Errors are one plain sentence.
