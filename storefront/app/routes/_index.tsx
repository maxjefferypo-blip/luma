import {useRef, useState, type MouseEvent, type ReactNode} from 'react';
import {Link, useLoaderData} from 'react-router';
import type {Route} from './+types/_index';
import {AddToCartButton} from '~/components/AddToCartButton';
import {useAside} from '~/components/Aside';
import {EclipseMark} from '~/components/luma/Brand';
import {Button, TextLink} from '~/components/luma/Button';
import {Tag} from '~/components/luma/Content';
import {Icon} from '~/components/luma/Icon';
import {Container, Marquee, ProductShot, Section, WaveDiagram} from '~/components/luma/Kit';
import {FALLBACK_DEVICES, IMG, formatMoney, productHandle, productPath} from '~/lib/luma';
import {PRODUCT_QUERY} from '~/lib/product';

// Home — flow from the website UI kit (project/ui_kits/website/HomePage.jsx):
// hero → range → in the box → science card → editorial → brand ticker → results carousel → gallery → closing pair.

export const meta: Route.MetaFunction = () => [
  {title: 'Luma — A different kind of screen protector'},
  {
    name: 'description',
    content: 'Luma LC–01 is 9H tempered glass designed to convert a portion of blue light into longer wavelengths. Not just protection. Light conversion.',
  },
];

export async function loader({context}: Route.LoaderArgs) {
  const handle = productHandle(context.env);
  const {product} = await context.storefront.query(PRODUCT_QUERY, {
    variables: {handle, selectedOptions: []},
    cache: context.storefront.CacheShort(),
  });
  return {handle, product};
}

type HomeData = Awaited<ReturnType<typeof loader>>;

/** One card per device option value in Shopify (e.g. Device: iPhone 16 Pro), linking to that variant. */
function useDevices({handle, product}: HomeData) {
  const option = product?.options.find((o) => o.optionValues.length > 1);
  if (!option) return FALLBACK_DEVICES.map((name) => ({name, to: productPath(handle), price: undefined}));
  return option.optionValues.map((v) => ({
    name: v.name,
    to: productPath(handle, new URLSearchParams({[option.name]: v.name}).toString()),
    price: v.firstSelectableVariant?.price,
  }));
}

function DeviceCard({device, to, price, badge}: {device: string; to: string; price?: {amount: string; currencyCode: string}; badge?: string}) {
  return (
    <Link to={to} prefetch="intent" className="k-dcard" aria-label={`Shop LC–01 for ${device}`}>
      {badge && (
        <span style={{position: 'absolute', top: 16, left: 16}}>
          <Tag tone="accent">{badge}</Tag>
        </span>
      )}
      <span className="k-chip">LC–01</span>
      <span style={{font: '400 22px/28px var(--font-body)', marginTop: 12}}>{device}</span>
      <img src={IMG.hd} alt="" loading="lazy" style={{height: 240, margin: '28px 0 32px', objectFit: 'contain', display: 'block'}} />
      <span className="l-btn l-btn--dark l-btn--sm">
        <span>Shop now</span>
        <Icon name="arrow-right" size={16} className="l-btn-arrow" />
      </span>
      <span style={{font: 'var(--text-caption)', color: 'var(--text-inverse-secondary)', marginTop: 14}}>
        {price ? `${formatMoney(price)} · ` : ''}Applicator included
      </span>
    </Link>
  );
}

function Callout({title, children}: {title: string; children: ReactNode}) {
  return (
    <div style={{display: 'flex', gap: 14, alignItems: 'flex-start'}}>
      <span style={{width: 40, flex: 'none', borderTop: '1px dashed var(--luma-ink-64)', marginTop: 9}}></span>
      <div style={{display: 'flex', flexDirection: 'column', gap: 6}}>
        <span className="luma-overline" style={{color: 'var(--text-primary)'}}>{title}</span>
        <span style={{font: 'var(--text-caption)', color: 'var(--text-secondary)'}}>{children}</span>
      </div>
    </div>
  );
}

// Figures and qualifiers follow the figures register in brand-strategy.md. Keep each value with its note.
const RESULTS = [
  {value: '17.17%', label: 'Blue-light reduction', note: 'Reported TÜV test sample', bg: 'var(--luma-charcoal)', ink: 'var(--luma-bone)', sub: 'var(--text-inverse-secondary)'},
  {value: '28.72%', label: 'Conversion efficiency', note: 'Manufacturer-defined test metric — not the share of all screen blue light converted', bg: 'var(--luma-peach)'},
  {value: '≈ 91%', label: 'Light transmission', note: 'Product specification', bg: 'var(--luma-mist)'},
  {value: '0.33 mm', label: 'Glass thickness', note: 'Product specification · 9H surface hardness', bg: 'var(--luma-stone)'},
];

function ResultsCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const to = (n: number) => {
    const el = ref.current;
    const c = el?.children[n] as HTMLElement | undefined;
    if (!el || !c) return;
    el.scrollTo({left: c.offsetLeft - (el.clientWidth - c.clientWidth) / 2, behavior: 'smooth'});
  };
  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    const mid = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let d = Infinity;
    Array.from(el.children).forEach((node, k) => {
      const c = node as HTMLElement;
      const dd = Math.abs(c.offsetLeft + c.clientWidth / 2 - mid);
      if (dd < d) {
        d = dd;
        best = k;
      }
    });
    setI(best);
  };
  const round = {width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--border-strong)', background: 'transparent', display: 'grid', placeItems: 'center', cursor: 'pointer', color: 'var(--text-primary)', padding: 0};
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 32}}>
      <div ref={ref} className="k-carousel" onScroll={onScroll}>
        {RESULTS.map((c, k) => (
          <div key={c.value} className="k-rcard" style={{background: c.bg, color: c.ink || 'var(--text-primary)', opacity: k === i ? 1 : 0.55}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span className="luma-overline" style={{color: c.sub || 'var(--text-secondary)'}}>LC–01 · Measured</span>
              <EclipseMark size={22} />
            </div>
            <span className="k-rcard-value">{c.value}</span>
            <div style={{display: 'flex', flexDirection: 'column', gap: 6}}>
              <span style={{font: '400 22px/28px var(--font-body)'}}>{c.label}</span>
              <span style={{font: 'var(--text-caption)', color: c.sub || 'var(--text-secondary)'}}>{c.note}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16}}>
        <button type="button" aria-label="Previous result" style={round} onClick={() => to(Math.max(0, i - 1))}>
          <Icon name="arrow-left" size={18} />
        </button>
        <div style={{display: 'flex', gap: 8, alignItems: 'center'}}>
          {RESULTS.map((c, k) => (
            <button
              key={c.value}
              type="button"
              aria-label={`Show ${c.label}`}
              aria-current={k === i || undefined}
              onClick={() => to(k)}
              style={{width: k === i ? 24 : 8, height: 8, borderRadius: 4, border: 0, padding: 0, cursor: 'pointer', background: k === i ? 'var(--luma-charcoal)' : 'var(--luma-ink-24)', transition: 'width var(--dur-base) var(--ease-out)'}}
            ></button>
          ))}
        </div>
        <button type="button" aria-label="Next result" style={round} onClick={() => to(Math.min(RESULTS.length - 1, i + 1))}>
          <Icon name="arrow-right" size={18} />
        </button>
      </div>
    </div>
  );
}

/**
 * Lifestyle photography frame. Until photography exists this shows the art-direction brief on Stone.
 * To add a photo, pass `src` (e.g. a Shopify Files URL).
 */
function Slot({w, h, label, mask, src}: {w: number; h: number; label: string; mask?: string; src?: string}) {
  return (
    <div style={{position: 'relative', width: w, height: h, flex: 'none', background: 'var(--luma-stone)', borderRadius: mask ? 0 : 20, clipPath: mask, overflow: 'hidden'}}>
      {src ? (
        <img src={src} alt={label} loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
      ) : (
        <span style={{position: 'absolute', left: 16, right: 16, bottom: 14, font: '12px/16px var(--font-body)', letterSpacing: '0.02em', color: 'var(--text-tertiary)'}}>{label}</span>
      )}
    </div>
  );
}

const BRAND_LINES = ['Light, reimagined.', 'A different kind of screen protector.', 'Not just protection. Light conversion.', 'Measured, not assumed.', 'Rethink what’s between you and your screen.'];

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  const {handle, product} = data;
  const {open} = useAside();
  const devices = useDevices(data);
  const shop = productPath(handle);
  const variant = product?.selectedOrFirstAvailableVariant;
  const scrollTo = (id: string) => (e: MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
      {/* 1 · Hero */}
      <div style={{background: 'var(--luma-charcoal)'}}>
        <div className="k-hero2">
          <Container>
            <div className="k-hero2-grid">
              <div style={{display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 540}}>
                <h1 className="luma-hero">A different kind of screen protector.</h1>
                <p className="luma-lead" style={{maxWidth: 440}}>
                  Most screen protectors protect the glass. LC–01 is designed to do something more — converting a portion of blue light into longer wavelengths.
                </p>
                <div style={{display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap', marginTop: 4}}>
                  <Button iconRight="arrow-right" to={shop}>Explore LC–01</Button>
                  <TextLink href="#science" arrow onClick={scrollTo('science')}>How it works</TextLink>
                </div>
              </div>
              <div className="k-hero2-media">
                {/* lowercase attribute: React 18 doesn't map fetchPriority */}
                <img src={IMG.front} alt="LC–01 glass in front of a phone" {...{fetchpriority: 'high'}} />
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* 2 · Range — one product, cut per device */}
      <Section tone="charcoal" style={{paddingTop: 96}}>
        <Container>
          <div className="k-row-head">
            <h2 className="luma-h1" style={{maxWidth: 560}}>Choose your iPhone model.</h2>
            <div className="k-row-head-side">
              <p style={{font: 'var(--text-body)', color: 'var(--text-inverse-secondary)', maxWidth: 360}}>
                One protector, cut precisely for each model. Every box includes the glass and its applicator.
              </p>
              <TextLink inverse arrow to={shop}>Shop all</TextLink>
            </div>
          </div>
          <div className="k-dgrid">
            {devices.map((d, k) => (
              <DeviceCard key={d.name} device={d.name} to={d.to} price={d.price} badge={k === 0 ? 'New' : undefined} />
            ))}
          </div>
        </Container>
      </Section>

      {/* 3 · In the box */}
      <Section>
        <Container>
          <div className="k-box">
            <div style={{display: 'flex', flexDirection: 'column', gap: 24, alignSelf: 'center'}}>
              <div><Tag tone="accent">In the box</Tag></div>
              <h2 className="luma-h1">Everything you need for a straight fit.</h2>
              <p className="luma-body" style={{maxWidth: 420}}>
                LC–01 glass with its light-conversion layer, and a dedicated applicator that lines it up with your phone. Clean, place, pull the tab.
              </p>
              <div><Button variant="dark" iconRight="arrow-right" to={shop}>Shop LC–01</Button></div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
              <div className="k-box-hero">
                <img src={IMG.front} alt="LC–01 glass in front of a phone" loading="lazy" />
                <div className="k-pin" style={{left: '5%', top: '22%'}}><span className="k-chip k-chip-solid">0.33 mm tempered glass</span><span className="k-pin-line"></span></div>
                <div className="k-pin" style={{left: '5%', top: '58%'}}><span className="k-chip k-chip-solid">Light-conversion layer</span><span className="k-pin-line"></span></div>
                <div className="k-pin" style={{right: '5%', top: '38%', flexDirection: 'row-reverse'}}><span className="k-chip k-chip-solid">Oleophobic coating</span><span className="k-pin-line"></span></div>
              </div>
              <div className="k-thumbs">
                <ProductShot src={IMG.rays} tone="mist" ratio="4 / 3" pad="8%" radius="var(--radius-md)" alt="Light passing through the conversion layer" />
                <ProductShot src={IMG.hd} ratio="4 / 3" pad="8%" radius="var(--radius-md)" alt="Front view" />
                <ProductShot src={IMG.layers} ratio="4 / 3" pad="6%" radius="var(--radius-md)" alt="Exploded view of the layers" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4 · Science card */}
      <section id="science" className="k-frost-sec">
        <img src={IMG.rays} alt="" className="k-frost-bg" loading="lazy" />
        <Container>
          <div className="k-frost">
            <div style={{display: 'flex', flexDirection: 'column', gap: 28}}>
              <span className="luma-overline k-dot">The difference</span>
              <h2 className="luma-h1">Not just protection. Light conversion.</h2>
              <p className="luma-body" style={{maxWidth: 440}}>
                Blocking light and converting light aren’t the same thing. Most protectors leave light unchanged. LC–01 is designed to convert a portion of blue light into longer wavelengths.
              </p>
              <div className="k-stat">
                <div style={{display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start'}}>
                  <span className="k-chip">LC–01</span>
                  <span style={{font: 'var(--text-body)'}}>Blue-light reduction¹</span>
                </div>
                <span style={{font: '400 64px/1 var(--font-display)', letterSpacing: '-0.03em'}}>17.17%</span>
              </div>
              <span className="luma-caption">¹ Reported TÜV test sample. An optical measurement, not a health outcome.</span>
            </div>
            <div className="k-frost-media"><img src={IMG.rays} alt="Light passing through the LC–01 conversion layer" loading="lazy" /></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 48}}>
              <Callout title="Quantum dots">Absorb a portion of the blue light from your display.</Callout>
              <Callout title="Longer wavelengths">That energy leaves as red light. The rest passes through clearly.</Callout>
            </div>
          </div>
        </Container>
      </section>

      {/* 5 · Editorial science teaser */}
      <Section>
        <Container>
          <div className="k-edit">
            <div className="k-edit-copy">
              <span style={{font: '400 22px/28px var(--font-display)'}}>Science <span style={{color: 'var(--text-tertiary)'}}>[01]</span></span>
              <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
                <h2 className="luma-h1">Your screen is a light source.</h2>
                <p className="luma-body" style={{maxWidth: 420}}>
                  Every display gives off a mix of wavelengths. A short read on how LC–01 shifts that mix — what it changes, and what it doesn’t.
                </p>
                <div><Button size="sm" variant="dark" caps={false} iconRight="arrow-right" to="/science">Discover</Button></div>
              </div>
              <span className="luma-overline" style={{color: 'var(--text-tertiary)'}}>
                Science <span style={{margin: '0 8px'}}>/</span> <span style={{color: 'var(--text-primary)'}}>Light 101</span>
              </span>
            </div>
            <div className="k-edit-media"><WaveDiagram style={{width: '100%'}} /></div>
          </div>
        </Container>
      </Section>

      {/* 6 · Brand ticker */}
      <div className="k-ticker">
        <Marquee duration={70} gap={56}>
          {BRAND_LINES.map((l) => (
            <span key={l} style={{display: 'contents'}}>
              <span>{l}</span>
              <EclipseMark size={28} />
            </span>
          ))}
        </Marquee>
      </div>

      {/* 7 · Results carousel */}
      <Section style={{paddingLeft: 0, paddingRight: 0}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 48}}>
          <Container>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, textAlign: 'center'}}>
              <h2 className="luma-h1">Measured, not assumed.</h2>
              <p className="luma-body">Optical results, test conditions and clear limitations. These are measurements on a test sample, not health outcomes.</p>
            </div>
          </Container>
          <ResultsCarousel />
        </div>
      </Section>

      {/* 8 · Gallery */}
      <Section style={{paddingTop: 0}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 48}}>
          <Container>
            <h2 className="luma-h1" style={{maxWidth: 640}}>Rethink what’s between you and your screen.</h2>
          </Container>
          <div className="k-gallery">
            <Slot w={340} h={480} mask="inset(0 round 170px 170px 20px 20px)" label="Bedside, warm lamp light" />
            <div className="k-gcol">
              <ProductShot src={IMG.hd} pad="10%" style={{width: 260, height: 268, aspectRatio: 'auto'}} />
              <Slot w={260} h={200} label="Close-up: glass edge, soft shadow" />
            </div>
            <Slot w={320} h={480} label="Phone in hand, evening interior" />
            <ProductShot src={IMG.rays} tone="mist" pad="8%" style={{width: 360, height: 480, aspectRatio: 'auto', flex: 'none'}} />
            <div className="k-gcol">
              <Slot w={260} h={240} label="Packaging, unboxed on linen" />
              <ProductShot src={IMG.front} pad="10%" style={{width: 260, height: 228, aspectRatio: 'auto'}} />
            </div>
            <Slot w={320} h={480} mask="inset(0 round 20px 20px 160px 160px)" label="Reading on the sofa, low light" />
          </div>
        </div>
      </Section>

      {/* 9 · Closing pair */}
      <Section style={{paddingTop: 0}}>
        <Container>
          <div className="k-duo">
            <div className="k-duo-card" style={{background: 'var(--luma-charcoal)', color: 'var(--luma-bone)'}}>
              <EclipseMark size={40} />
              <h2 className="luma-h1">How we test.</h2>
              <p style={{font: 'var(--text-body)', color: 'var(--text-inverse-secondary)', maxWidth: 360}}>Every figure we publish comes with its source and its limits.</p>
              <Button size="sm" variant="inverse" caps={false} iconRight="arrow-right" to="/science#results">Read the results</Button>
            </div>
            <div className="k-duo-card" style={{background: 'var(--luma-stone)'}}>
              <img src={IMG.front} alt="" loading="lazy" style={{height: 220, display: 'block'}} />
              <h2 className="luma-h2">Small changes. Different light.</h2>
              {/* Adding straight to the bag only makes sense when there's no device to choose. */}
              {variant?.availableForSale && devices.length <= 1 ? (
                <AddToCartButton
                  iconRight="arrow-right"
                  lines={[{merchandiseId: variant.id, quantity: 1, selectedVariant: variant}]}
                  onClick={() => open('cart')}
                >
                  Add to bag — {formatMoney(variant.price)}
                </AddToCartButton>
              ) : (
                <Button iconRight="arrow-right" to={shop}>
                  Choose your model
                </Button>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
