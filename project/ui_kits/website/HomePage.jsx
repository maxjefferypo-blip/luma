// Home — flow modelled on premium science-led DTC sites: hero → range → in the box →
// science card → editorial → brand ticker → results carousel → gallery → closing pair.

function DeviceCard({ device, badge, onShop }) {
  const { Button, Tag } = LDS;
  const [hover, setHover] = React.useState(false);
  return (
    <div className="k-dcard" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onShop}
      style={{ background: hover ? 'rgba(245,241,234,.13)' : 'rgba(245,241,234,.07)', transform: hover ? 'translateY(-8px)' : 'none' }}>
      {badge && <span style={{ position: 'absolute', top: 16, left: 16 }}><Tag tone="accent">{badge}</Tag></span>}
      <span className="k-chip">LC–01</span>
      <span style={{ font: '400 22px/28px var(--font-body)', marginTop: 12 }}>{device}</span>
      <img src={IMG.hd} alt="" style={{ height: 240, margin: '28px 0 32px', objectFit: 'contain', display: 'block' }} />
      <Button size="sm" caps={false} variant={hover ? 'inverse' : 'dark'} iconRight={hover ? 'arrow-right' : undefined} style={{ border: hover ? undefined : '1px solid rgba(245,241,234,.18)' }}>Shop now</Button>
      <span style={{ font: 'var(--text-caption)', color: 'var(--text-inverse-secondary)', marginTop: 14 }}>{money(PRODUCT.price)} · Applicator included</span>
    </div>
  );
}

function Callout({ title, children }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <span style={{ width: 40, flex: 'none', borderTop: '1px dashed var(--luma-ink-64)', marginTop: 9 }}></span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span className="luma-overline" style={{ color: 'var(--text-primary)' }}>{title}</span>
        <span style={{ font: 'var(--text-caption)', color: 'var(--text-secondary)' }}>{children}</span>
      </div>
    </div>
  );
}

function ResultsCarousel() {
  const { Icon, EclipseMark } = LDS;
  const ref = React.useRef(null);
  const [i, setI] = React.useState(0);
  const cards = [
    { value: '17.17%', label: 'Blue-light reduction', note: 'Reported TÜV test sample', bg: 'var(--luma-charcoal)', ink: 'var(--luma-bone)', sub: 'var(--text-inverse-secondary)' },
    { value: '28.72%', label: 'Conversion efficiency', note: 'Manufacturer-defined test metric — not the share of all screen blue light converted', bg: 'var(--luma-peach)' },
    { value: '≈ 91%', label: 'Light transmission', note: 'Product specification', bg: 'var(--luma-mist)' },
    { value: '0.33 mm', label: 'Glass thickness', note: 'Product specification · 9H surface hardness', bg: 'var(--luma-stone)' },
  ];
  const to = (n) => {
    const el = ref.current; const c = el && el.children[n]; if (!c) return;
    el.scrollTo({ left: c.offsetLeft - (el.clientWidth - c.clientWidth) / 2, behavior: 'smooth' });
  };
  const onScroll = () => {
    const el = ref.current; const mid = el.scrollLeft + el.clientWidth / 2;
    let best = 0, d = Infinity;
    [...el.children].forEach((c, k) => { const dd = Math.abs(c.offsetLeft + c.clientWidth / 2 - mid); if (dd < d) { d = dd; best = k; } });
    setI(best);
  };
  const round = { width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--border-strong)', background: 'transparent', display: 'grid', placeItems: 'center', cursor: 'pointer', color: 'var(--text-primary)', padding: 0 };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div ref={ref} className="k-carousel" onScroll={onScroll}>
        {cards.map((c, k) => (
          <div key={c.value} className="k-rcard" style={{ background: c.bg, color: c.ink || 'var(--text-primary)', opacity: k === i ? 1 : 0.55 }} onClick={() => to(k)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="luma-overline" style={{ color: c.sub || 'var(--text-secondary)' }}>LC–01 · Measured</span>
              <EclipseMark size={22} />
            </div>
            <span className="k-rcard-value">{c.value}</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ font: '400 22px/28px var(--font-body)' }}>{c.label}</span>
              <span style={{ font: 'var(--text-caption)', color: c.sub || 'var(--text-secondary)' }}>{c.note}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
        <button type="button" aria-label="Previous" style={round} onClick={() => to(Math.max(0, i - 1))}><Icon name="arrow-left" size={18} /></button>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {cards.map((c, k) => <button key={c.value} type="button" aria-label={`Show ${c.label}`} onClick={() => to(k)} style={{ width: k === i ? 24 : 8, height: 8, borderRadius: 4, border: 0, padding: 0, cursor: 'pointer', background: k === i ? 'var(--luma-charcoal)' : 'var(--luma-ink-24)', transition: 'width var(--dur-base) var(--ease-out)' }}></button>)}
        </div>
        <button type="button" aria-label="Next" style={round} onClick={() => to(Math.min(cards.length - 1, i + 1))}><Icon name="arrow-right" size={18} /></button>
      </div>
    </div>
  );
}

function Slot({ id, w, h, label, mask }) {
  return <div style={{ width: w, height: h, flex: 'none' }}><image-slot id={id} shape="rounded" radius="20" mask={mask} placeholder={label}></image-slot></div>;
}

function HomePage({ go, addToBag }) {
  const { Button, TextLink, Tag, EclipseMark } = LDS;
  const shop = () => go('shop');
  const scrollTo = (id) => (e) => { e.preventDefault(); const el = document.getElementById(id); if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' }); };
  const lines = ['Light, reimagined.', 'A different kind of screen protector.', 'Not just protection. Light conversion.', 'Measured, not assumed.', 'Rethink what’s between you and your screen.'];
  return (
    <main>
      {/* 1 · Hero */}
      <div style={{ background: 'var(--luma-charcoal)' }}>
        <div className="k-hero2">
          <Container>
            <div className="k-hero2-grid">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 540 }}>
                <h1 className="luma-hero">A different kind of screen protector.</h1>
                <p className="luma-lead" style={{ maxWidth: 440 }}>Most screen protectors protect the glass. LC–01 is designed to do something more — converting a portion of blue light into longer wavelengths.</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap', marginTop: 4 }}>
                  <Button iconRight="arrow-right" onClick={shop}>Explore LC–01</Button>
                  <TextLink href="#science" arrow onClick={scrollTo('science')}>How it works</TextLink>
                </div>
              </div>
              <div className="k-hero2-media"><img src={IMG.front} alt="LC–01 glass in front of a phone" /></div>
            </div>
          </Container>
        </div>
      </div>

      {/* 2 · Range — one product, cut per device */}
      <Section tone="charcoal" style={{ paddingTop: 96 }}>
        <Container>
          <div className="k-row-head">
            <h2 className="luma-h1" style={{ maxWidth: 560 }}>Choose your iPhone model.</h2>
            <div className="k-row-head-side">
              <p style={{ font: 'var(--text-body)', color: 'var(--text-inverse-secondary)', maxWidth: 360 }}>One protector, cut precisely for each model. Every box includes the glass and its applicator.</p>
              <TextLink inverse arrow href="#" onClick={(e) => { e.preventDefault(); shop(); }}>Shop all</TextLink>
            </div>
          </div>
          <div className="k-dgrid">
            {DEVICES.map((d, k) => <DeviceCard key={d} device={d} badge={k === 0 ? 'New' : null} onShop={() => go('shop', d)} />)}
          </div>
        </Container>
      </Section>

      {/* 3 · In the box */}
      <Section>
        <Container>
          <div className="k-box">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignSelf: 'center' }}>
              <div><Tag tone="accent">In the box</Tag></div>
              <h2 className="luma-h1">Everything you need for a straight fit.</h2>
              <p className="luma-body" style={{ maxWidth: 420 }}>LC–01 glass with its light-conversion layer, and a dedicated applicator that lines it up with your phone. Clean, place, pull the tab.</p>
              <div><Button variant="dark" iconRight="arrow-right" onClick={shop}>Shop LC–01</Button></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div className="k-box-hero">
                <img src={IMG.front} alt="LC–01 glass in front of a phone" />
                <div className="k-pin" style={{ left: '5%', top: '22%' }}><span className="k-chip k-chip-solid">0.33 mm tempered glass</span><span className="k-pin-line"></span></div>
                <div className="k-pin" style={{ left: '5%', top: '58%' }}><span className="k-chip k-chip-solid">Light-conversion layer</span><span className="k-pin-line"></span></div>
                <div className="k-pin" style={{ right: '5%', top: '38%', flexDirection: 'row-reverse' }}><span className="k-chip k-chip-solid">Oleophobic coating</span><span className="k-pin-line"></span></div>
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
        <img src={IMG.rays} alt="" className="k-frost-bg" />
        <Container>
          <div className="k-frost">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <span className="luma-overline k-dot">The difference</span>
              <h2 className="luma-h1">Not just protection. Light conversion.</h2>
              <p className="luma-body" style={{ maxWidth: 440 }}>Blocking light and converting light aren’t the same thing. Most protectors leave light unchanged. LC–01 is designed to convert a portion of blue light into longer wavelengths.</p>
              <div className="k-stat">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
                  <span className="k-chip">LC–01</span>
                  <span style={{ font: 'var(--text-body)' }}>Blue-light reduction¹</span>
                </div>
                <span style={{ font: '400 64px/1 var(--font-display)', letterSpacing: '-0.03em' }}>17.17%</span>
              </div>
              <span className="luma-caption">¹ Reported TÜV test sample. An optical measurement, not a health outcome.</span>
            </div>
            <div className="k-frost-media"><img src={IMG.rays} alt="Light passing through the LC–01 conversion layer" /></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
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
              <span style={{ font: '400 22px/28px var(--font-display)' }}>Science <span style={{ color: 'var(--text-tertiary)' }}>[01]</span></span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <h2 className="luma-h1">Your screen is a light source.</h2>
                <p className="luma-body" style={{ maxWidth: 420 }}>Every display gives off a mix of wavelengths. A short read on how LC–01 shifts that mix — what it changes, and what it doesn’t.</p>
                <div><Button size="sm" variant="dark" caps={false} iconRight="arrow-right" onClick={() => go('science')}>Discover</Button></div>
              </div>
              <span className="luma-overline" style={{ color: 'var(--text-tertiary)' }}>Science <span style={{ margin: '0 8px' }}>/</span> <span style={{ color: 'var(--text-primary)' }}>Light 101</span></span>
            </div>
            <div className="k-edit-media"><WaveDiagram style={{ width: '100%' }} /></div>
          </div>
        </Container>
      </Section>

      {/* 6 · Brand ticker */}
      <div className="k-ticker">
        <Marquee duration={70} gap={56}>
          {lines.map((l) => <React.Fragment key={l}><span>{l}</span><EclipseMark size={28} /></React.Fragment>)}
        </Marquee>
      </div>

      {/* 7 · Results carousel */}
      <Section style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          <Container>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, textAlign: 'center' }}>
              <h2 className="luma-h1">Measured, not assumed.</h2>
              <p className="luma-body">Optical results, test conditions and clear limitations. These are measurements on a test sample, not health outcomes.</p>
            </div>
          </Container>
          <ResultsCarousel />
        </div>
      </Section>

      {/* 8 · Gallery */}
      <Section style={{ paddingTop: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          <Container>
            <h2 className="luma-h1" style={{ maxWidth: 640 }}>Rethink what’s between you and your screen.</h2>
          </Container>
          <div className="k-gallery">
            <Slot id="home-g1" w={340} h={480} mask="inset(0 round 170px 170px 20px 20px)" label="Bedside, warm lamp light" />
            <div className="k-gcol">
              <ProductShot src={IMG.hd} pad="10%" style={{ width: 260, height: 268, aspectRatio: 'auto' }} />
              <Slot id="home-g2" w={260} h={200} label="Close-up: glass edge, soft shadow" />
            </div>
            <Slot id="home-g3" w={320} h={480} label="Phone in hand, evening interior" />
            <ProductShot src={IMG.rays} tone="mist" pad="8%" style={{ width: 360, height: 480, aspectRatio: 'auto', flex: 'none' }} />
            <div className="k-gcol">
              <Slot id="home-g4" w={260} h={240} label="Packaging, unboxed on linen" />
              <ProductShot src={IMG.front} pad="10%" style={{ width: 260, height: 228, aspectRatio: 'auto' }} />
            </div>
            <Slot id="home-g5" w={320} h={480} mask="inset(0 round 20px 20px 160px 160px)" label="Reading on the sofa, low light" />
          </div>
        </div>
      </Section>

      {/* 9 · Closing pair */}
      <Section style={{ paddingTop: 0 }}>
        <Container>
          <div className="k-duo">
            <div className="k-duo-card" style={{ background: 'var(--luma-charcoal)', color: 'var(--luma-bone)' }}>
              <EclipseMark size={40} />
              <h2 className="luma-h1">How we test.</h2>
              <p style={{ font: 'var(--text-body)', color: 'var(--text-inverse-secondary)', maxWidth: 360 }}>Every figure we publish comes with its source and its limits.</p>
              <Button size="sm" variant="inverse" caps={false} iconRight="arrow-right" onClick={() => go('science')}>Read the results</Button>
            </div>
            <div className="k-duo-card" style={{ background: 'var(--luma-stone)' }}>
              <img src={IMG.front} alt="" style={{ height: 220, display: 'block' }} />
              <h2 className="luma-h2">Small changes. Different light.</h2>
              <Button iconRight="arrow-right" onClick={addToBag}>Add to bag — {money(PRODUCT.price)}</Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
window.HomePage = HomePage;
