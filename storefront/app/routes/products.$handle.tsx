import {useEffect, useRef, useState} from 'react';
import {Link, useLoaderData, useNavigate} from 'react-router';
import type {Route} from './+types/products.$handle';
import {
  getSelectedProductOptions,
  Analytics,
  useOptimisticVariant,
  getProductOptions,
  getAdjacentAndFirstAvailableVariants,
  useSelectedOptionInUrlParam,
} from '@shopify/hydrogen';
import {AddToCartButton} from '~/components/AddToCartButton';
import {useAside} from '~/components/Aside';
import {Button, TextLink} from '~/components/luma/Button';
import {Accordion, QuantityStepper, SpecList, Tabs, Tag} from '~/components/luma/Content';
import {CompareTable, Container, ProductShot, Section, WaveDiagram} from '~/components/luma/Kit';
import {IMG, PRODUCT_COPY, formatMoney, sizedImage} from '~/lib/luma';
import {PRODUCT_QUERY} from '~/lib/product';
import {redirectIfHandleIsLocalized} from '~/lib/redirect';

// Product page — layout from project/ui_kits/website/ProductPage.jsx.
// Shopify supplies title, price, variants (device), stock, images and checkout; brand copy and figures live here.

export const meta: Route.MetaFunction = ({data}) => {
  const product = data?.product;
  return [
    {title: `${product?.seo.title || product?.title || PRODUCT_COPY.name} | Luma`},
    {
      name: 'description',
      content:
        product?.seo.description ||
        '9H tempered glass with quantum dots that absorb a portion of blue light and re-emit it at longer red wavelengths. Includes a dedicated applicator.',
    },
    {tagName: 'link', rel: 'canonical', href: `/products/${product?.handle}`},
  ];
};

export async function loader({context, params, request}: Route.LoaderArgs) {
  const {handle} = params;
  const {storefront} = context;

  if (!handle) {
    throw new Error('Expected product handle to be defined');
  }

  const {product} = await storefront.query(PRODUCT_QUERY, {
    variables: {handle, selectedOptions: getSelectedProductOptions(request)},
  });

  if (!product?.id) {
    throw new Response(null, {status: 404});
  }

  // The API handle might be localized, so redirect to the localized handle
  redirectIfHandleIsLocalized(request, {handle, data: product});

  return {product};
}

/** Cleaned renders, used until the Shopify product has its own images. */
const FALLBACK_VIEWS = [
  {src: IMG.front, thumb: IMG.front, alt: 'LC–01 glass in front of a phone', pad: '9%'},
  {src: IMG.rays, thumb: IMG.rays, alt: 'Light passing through the conversion layer', pad: '6%'},
  {src: IMG.hd, thumb: IMG.hd, alt: 'Front view, glass offset over the phone', pad: '7%'},
  {src: IMG.layers, thumb: IMG.layers, alt: 'Exploded view of the five layers', pad: '5%'},
];

const MAX_QTY = 5;

export default function Product() {
  const {product} = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const {open} = useAside();

  // Optimistically selects a variant with the available variant information
  const selectedVariant = useOptimisticVariant(product.selectedOrFirstAvailableVariant, getAdjacentAndFirstAvailableVariants(product));
  // Writes the selected options to the URL (without navigating) when none are set
  useSelectedOptionInUrlParam(selectedVariant.selectedOptions);
  const productOptions = getProductOptions({...product, selectedOrFirstAvailableVariant: selectedVariant});

  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState('overview');
  const [view, setView] = useState(0);
  const [sticky, setSticky] = useState(false);
  const buyRef = useRef<HTMLDivElement>(null);

  const views = product.images.nodes.length
    ? product.images.nodes.map((img) => ({src: sizedImage(img.url, 1400), thumb: sizedImage(img.url, 320), alt: img.altText || product.title, pad: '6%'}))
    : FALLBACK_VIEWS;
  const current = views[Math.min(view, views.length - 1)];

  // Sticky add-to-bag bar once the buy row scrolls out above the viewport.
  useEffect(() => {
    const el = buyRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setSticky(!e.isIntersecting && e.boundingClientRect.top < 0), {threshold: 0});
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const available = !!selectedVariant?.availableForSale;
  const lines = selectedVariant ? [{merchandiseId: selectedVariant.id, quantity: qty, selectedVariant}] : [];
  const descriptor = product.descriptor?.value || PRODUCT_COPY.descriptor;
  const choices = productOptions.filter((o) => o.optionValues.length > 1);
  const variantLabel = choices.map((o) => o.optionValues.find((v) => v.selected)?.name).filter(Boolean).join(' · ');

  return (
    <>
      <Section style={{paddingTop: 40}}>
        <Container>
          <nav aria-label="Breadcrumb" style={{display: 'flex', gap: 8, font: 'var(--text-caption)', color: 'var(--text-tertiary)', marginBottom: 24}}>
            <Link to="/" style={{color: 'inherit'}}>Home</Link>
            <span>/</span>
            <span>{product.title}</span>
          </nav>
          <div className="k-pdp">
            <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
              <ProductShot src={current.src} alt={current.alt} pad={current.pad} loading="eager" />
              {views.length > 1 && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 12}}>
                  {views.map((v, i) => (
                    <button
                      key={v.src}
                      type="button"
                      aria-label={v.alt}
                      aria-pressed={view === i}
                      onClick={() => setView(i)}
                      style={{padding: 0, border: 0, background: 'transparent', cursor: 'pointer', borderRadius: 12, outline: view === i ? '1px solid var(--luma-charcoal)' : 'none', outlineOffset: 3}}
                    >
                      <ProductShot src={v.thumb} pad="10%" radius="var(--radius-md)" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="k-buy" style={{display: 'flex', flexDirection: 'column', gap: 26}}>
              <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
                <div><Tag tone="accent">New</Tag></div>
                <h1 className="luma-h1">{product.title}</h1>
                <span className="luma-lead" style={{marginTop: -8}}>{descriptor}</span>
              </div>
              <div style={{display: 'flex', alignItems: 'baseline', gap: 12}}>
                <span style={{font: 'var(--text-h2)', fontFamily: 'var(--font-display)'}}>{formatMoney(selectedVariant?.price)}</span>
                {selectedVariant?.compareAtPrice && Number(selectedVariant.compareAtPrice.amount) > Number(selectedVariant.price.amount) && (
                  <s className="luma-caption">{formatMoney(selectedVariant.compareAtPrice)}</s>
                )}
              </div>
              <p className="luma-body" style={{maxWidth: 460}}>
                9H tempered glass with quantum dots that absorb a portion of blue light and re-emit it at longer red wavelengths. Includes a dedicated applicator.
              </p>

              {choices.map((option) => {
                const selected = option.optionValues.find((v) => v.selected);
                return (
                  <div key={option.name} style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                    <span className="luma-caption">
                      {option.name} · <span style={{color: 'var(--text-primary)'}}>{selected?.name}</span>
                    </span>
                    <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
                      {option.optionValues.map((v) =>
                        v.isDifferentProduct ? (
                          // Combined-listing child product: a real link for SEO.
                          <Button key={v.name} size="sm" caps={false} variant={v.selected ? 'dark' : 'outline'} to={`/products/${v.handle}?${v.variantUriQuery}`}>
                            {v.name}
                          </Button>
                        ) : (
                          // Same product: update the search param without a navigation entry (no duplicate URLs for bots).
                          <Button
                            key={v.name}
                            size="sm"
                            caps={false}
                            variant={v.selected ? 'dark' : 'outline'}
                            aria-pressed={v.selected}
                            disabled={!v.exists}
                            title={v.available ? undefined : 'Sold out'}
                            style={v.available ? undefined : {opacity: 0.4}}
                            onClick={() => {
                              if (!v.selected) void navigate(`?${v.variantUriQuery}`, {replace: true, preventScrollReset: true});
                            }}
                          >
                            {v.name}
                          </Button>
                        ),
                      )}
                    </div>
                  </div>
                );
              })}

              <div ref={buyRef} style={{display: 'flex', gap: 12}}>
                <QuantityStepper value={qty} onChange={setQty} max={MAX_QTY} />
                <div style={{flex: 1}}>
                  <AddToCartButton fullWidth disabled={!available} lines={lines} onClick={() => open('cart')}>
                    {available ? `Add to bag — ${formatMoney(selectedVariant.price, qty)}` : 'Sold out'}
                  </AddToCartButton>
                </div>
              </div>

              <div className="k-trust" style={{marginTop: -6}}>
                <span>Applicator included</span>
                <span>≈ 91% transmittance</span>
                <span>0.33 mm</span>
              </div>

              <SpecList
                items={[
                  {label: 'Blue-light reduction', value: '17.17%', note: 'TÜV report, test sample'},
                  {label: 'Surface hardness', value: '9H'},
                  {label: 'Coating', value: 'Oleophobic'},
                ]}
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section id="details" style={{paddingTop: 0}}>
        <Container narrow>
          <Tabs
            value={tab}
            onChange={setTab}
            tabs={[
              {id: 'overview', label: 'Overview'},
              {id: 'specs', label: 'Specifications'},
              {id: 'install', label: 'Installation'},
            ]}
          />
          <div style={{paddingTop: 40, minHeight: 280}}>
            {tab === 'overview' && (
              <div style={{display: 'flex', flexDirection: 'column', gap: 40}}>
                <div className="k-split" style={{gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)'}}>
                  <h2 className="luma-h2">Not just protection. Light conversion.</h2>
                  <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
                    <p className="luma-body">Most screen protectors only protect. LC–01 also changes the light that passes through it.</p>
                    <p className="luma-body">Quantum dots within the glass absorb part of the blue light from your display and release it at longer, red wavelengths.</p>
                  </div>
                </div>
                <WaveDiagram />
              </div>
            )}
            {tab === 'specs' && (
              <SpecList
                items={[
                  {label: 'Material', value: 'Tempered glass, 9H'},
                  {label: 'Thickness', value: '0.33 mm'},
                  {label: 'Coating', value: 'Oleophobic, fingerprint-resistant'},
                  {label: 'Light transmission', value: '≈ 91%', note: 'Product specification'},
                  {label: 'Blue-light reduction', value: '17.17%', note: 'Reported TÜV test sample'},
                  {label: 'Conversion efficiency', value: '28.72%', note: 'Manufacturer-defined test metric — not the share of all blue light converted'},
                  {label: 'In the box', value: 'LC–01 glass, applicator'},
                ]}
              />
            )}
            {tab === 'install' && (
              <Accordion
                defaultOpen={0}
                items={[
                  {title: '1. Clean the screen', content: 'Wipe the display, then lift any remaining dust.'},
                  {title: '2. Fit the applicator', content: 'Place the applicator over your phone. It lines the glass up for you.'},
                  {title: '3. Pull the tab', content: 'Pull the tab, wait ten seconds, then lift the applicator away.'},
                ]}
              />
            )}
          </div>
        </Container>
      </Section>

      <Section tone="stone">
        <Container narrow>
          <div style={{display: 'flex', flexDirection: 'column', gap: 40}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap'}}>
              <h2 className="luma-h2">More than protection.</h2>
              <TextLink to="/science#results" arrow>How we tested</TextLink>
            </div>
            <CompareTable highlight="var(--luma-bone)" />
          </div>
        </Container>
      </Section>

      <div
        className="k-sticky"
        aria-hidden={!sticky}
        style={{
          transform: sticky ? 'none' : 'translateY(110%)',
          // hidden (not focusable) once it has slid away
          visibility: sticky ? 'visible' : 'hidden',
          transition: `transform var(--dur-slow) var(--ease-out), visibility 0s linear ${sticky ? '0s' : 'var(--dur-slow)'}`,
        }}
      >
        <img src={views[0].thumb} alt="" style={{width: 44, height: 44, objectFit: 'contain', background: 'var(--luma-stone)', borderRadius: 8, padding: 4}} />
        <div style={{display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1}}>
          <span style={{font: 'var(--text-body)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
            {product.title}
            {variantLabel ? ` · ${variantLabel}` : ''}
          </span>
          <span className="luma-caption">{formatMoney(selectedVariant?.price, qty)}</span>
        </div>
        <AddToCartButton size="sm" disabled={!available} lines={lines} onClick={() => open('cart')}>
          {available ? 'Add to bag' : 'Sold out'}
        </AddToCartButton>
      </div>

      <Analytics.ProductView
        data={{
          products: [
            {
              id: product.id,
              title: product.title,
              price: selectedVariant?.price.amount || '0',
              vendor: product.vendor,
              variantId: selectedVariant?.id || '',
              variantTitle: selectedVariant?.title || '',
              quantity: 1,
            },
          ],
        }}
      />
    </>
  );
}
