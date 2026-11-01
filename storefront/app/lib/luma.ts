/**
 * Brand constants for the Luma storefront.
 * Commerce data (price, variants, stock, checkout) comes from Shopify; brand copy and art-directed
 * imagery live in code so every claim stays under the copy rules in project/guidelines/voice/brand-strategy.md.
 */

/** Cleaned product renders (project/assets/product). Served from /public. */
export const IMG = {
  front: '/images/product/lc01-front.png',
  rays: '/images/product/lc01-rays.png',
  hd: '/images/product/lc01-hd.png',
  layers: '/images/product/lc01-layers.png',
} as const;

export const PRODUCT_COPY = {
  name: 'Luma LC–01',
  descriptor: 'Quantum-Dot Screen Protector',
} as const;

/** Used only until the Shopify product's device option is readable (e.g. store not connected yet). */
export const FALLBACK_DEVICES = ['iPhone 16 Pro', 'iPhone 16 Pro Max', 'iPhone 16', 'iPhone 16 Plus'];

export const DEFAULT_PRODUCT_HANDLE = 'lc-01';

export function productHandle(env: Env) {
  return env.PUBLIC_PRODUCT_HANDLE || DEFAULT_PRODUCT_HANDLE;
}

export function productPath(handle: string, search = '') {
  return `/products/${handle}${search ? `?${search}` : ''}`;
}

/** "£39" for whole amounts, "£39.50" otherwise — matches the design's price style. */
export function formatMoney(money: {amount?: string; currencyCode?: string} | null | undefined, quantity = 1) {
  if (!money?.amount || !money.currencyCode) return '';
  const value = Number(money.amount) * quantity;
  const whole = Number.isInteger(Math.round(value * 100) / 100);
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: money.currencyCode,
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/** Shopify CDN images accept a width parameter; local renders are returned unchanged. */
export function sizedImage(url: string, width: number) {
  if (!url.startsWith('http')) return url;
  return `${url}${url.includes('?') ? '&' : '?'}width=${width}`;
}
