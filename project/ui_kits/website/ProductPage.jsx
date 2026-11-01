function ProductPage({ addToBag, go, initialDevice }) {
  const { Button, Tag, QuantityStepper, Tabs, SpecList, Accordion, Icon, TextLink } = LDS;
  const [qty, setQty] = React.useState(1);
  const [device, setDevice] = React.useState(initialDevice || DEVICES[0]);
  const [tab, setTab] = React.useState('overview');
  const [view, setView] = React.useState(0);
  const [sticky, setSticky] = React.useState(false);
  const buyRef = React.useRef(null);
  const views = [
    { src: IMG.front, alt: 'LC–01 glass in front of a phone', pad: '9%' },
    { src: IMG.rays, alt: 'Light passing through the conversion layer', pad: '6%' },
    { src: IMG.hd, alt: 'Front view, glass offset over the phone', pad: '7%' },
    { src: IMG.layers, alt: 'Exploded view of the five layers', pad: '5%' },
  ];
  React.useEffect(() => {
    const el = buyRef.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => setSticky(!e.isIntersecting && e.boundingClientRect.top < 0), { threshold: 0 });
    io.observe(el); return () => io.disconnect();
  }, []);
  const add = () => addToBag(qty);
  return (
    <main>
      <Section style={{ paddingTop: 40 }}>
        <Container>
          <div style={{ display: 'flex', gap: 8, font: 'var(--text-caption)', color: 'var(--text-tertiary)', marginBottom: 24 }}>
            <a href="#" onClick={(e) => { e.preventDefault(); go('home'); }} style={{ color: 'inherit' }}>Home</a><span>/</span><span>LC–01</span>
          </div>
          <div className="k-pdp">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <ProductShot src={views[view].src} alt={views[view].alt} pad={views[view].pad} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 12 }}>
                {views.map((v, i) => (
                  <button key={v.src} type="button" aria-label={v.alt} onClick={() => setView(i)} style={{ padding: 0, border: 0, background: 'transparent', cursor: 'pointer', borderRadius: 12, outline: view === i ? '1px solid var(--luma-charcoal)' : 'none', outlineOffset: 3 }}>
                    <ProductShot src={v.src} pad="10%" radius="var(--radius-md)" />
                  </button>
                ))}
              </div>
            </div>

            <div className="k-buy" style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div><Tag tone="accent">New</Tag></div>
                <h1 className="luma-h1">{PRODUCT.name}</h1>
                <span className="luma-lead" style={{ marginTop: -8 }}>{PRODUCT.descriptor}</span>
              </div>
              <span style={{ font: 'var(--text-h2)', fontFamily: 'var(--font-display)' }}>{money(PRODUCT.price)}</span>
              <p className="luma-body" style={{ maxWidth: 460 }}>9H tempered glass with quantum dots that absorb a portion of blue light and re-emit it at longer red wavelengths. Includes a dedicated applicator.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span className="luma-caption">Device · <span style={{ color: 'var(--text-primary)' }}>{device}</span></span>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {DEVICES.map((d) => (
                    <Button key={d} size="sm" caps={false} variant={device === d ? 'dark' : 'outline'} onClick={() => setDevice(d)}>{d}</Button>
                  ))}
                </div>
              </div>

              <div ref={buyRef} style={{ display: 'flex', gap: 12 }}>
                <QuantityStepper value={qty} onChange={setQty} max={5} />
                <Button fullWidth onClick={add} style={{ flex: 1 }}>Add to bag — {money(PRODUCT.price * qty)}</Button>
              </div>

              <div className="k-trust" style={{ marginTop: -6 }}>
                <span>Applicator included</span><span>≈ 91% transmittance</span><span>0.33 mm</span>
              </div>

              <SpecList items={[
                { label: 'Blue-light reduction', value: '17.17%', note: 'TÜV report, test sample' },
                { label: 'Surface hardness', value: '9H' },
                { label: 'Coating', value: 'Oleophobic' },
              ]} />
            </div>
          </div>
        </Container>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <Container narrow>
          <Tabs value={tab} onChange={setTab} tabs={[{ id: 'overview', label: 'Overview' }, { id: 'specs', label: 'Specifications' }, { id: 'install', label: 'Installation' }]} />
          <div style={{ paddingTop: 40, minHeight: 280 }}>
            {tab === 'overview' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                <div className="k-split" style={{ gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)' }}>
                  <h2 className="luma-h2">Not just protection. Light conversion.</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <p className="luma-body">Most screen protectors only protect. LC–01 also changes the light that passes through it.</p>
                    <p className="luma-body">Quantum dots within the glass absorb part of the blue light from your display and release it at longer, red wavelengths.</p>
                  </div>
                </div>
                <WaveDiagram />
              </div>
            )}
            {tab === 'specs' && (
              <SpecList items={[
                { label: 'Material', value: 'Tempered glass, 9H' },
                { label: 'Thickness', value: '0.33 mm' },
                { label: 'Coating', value: 'Oleophobic, fingerprint-resistant' },
                { label: 'Light transmission', value: '≈ 91%', note: 'Product specification' },
                { label: 'Blue-light reduction', value: '17.17%', note: 'Reported TÜV test sample' },
                { label: 'Conversion efficiency', value: '28.72%', note: 'Manufacturer-defined test metric — not the share of all blue light converted' },
                { label: 'In the box', value: 'LC–01 glass, applicator' },
              ]} />
            )}
            {tab === 'install' && (
              <Accordion defaultOpen={0} items={[
                { title: '1. Clean the screen', content: 'Wipe the display, then lift any remaining dust.' },
                { title: '2. Fit the applicator', content: 'Place the applicator over your phone. It lines the glass up for you.' },
                { title: '3. Pull the tab', content: 'Pull the tab, wait ten seconds, then lift the applicator away.' },
              ]} />
            )}
          </div>
        </Container>
      </Section>

      <Section tone="stone">
        <Container narrow>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
              <h2 className="luma-h2">More than protection.</h2>
              <TextLink href="#" arrow onClick={(e) => { e.preventDefault(); go('science'); }}>How we tested</TextLink>
            </div>
            <CompareTable highlight="var(--luma-bone)" />
          </div>
        </Container>
      </Section>

      <div className="k-sticky" style={{ transform: sticky ? 'none' : 'translateY(110%)' }} aria-hidden={!sticky}>
        <img src={IMG.front} alt="" style={{ width: 44, height: 44, objectFit: 'contain', background: 'var(--luma-stone)', borderRadius: 8, padding: 4 }} />
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
          <span style={{ font: 'var(--text-body)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{PRODUCT.name} · {device}</span>
          <span className="luma-caption">{money(PRODUCT.price * qty)}</span>
        </div>
        <Button size="sm" onClick={add}>Add to bag</Button>
      </div>
    </main>
  );
}
window.ProductPage = ProductPage;
