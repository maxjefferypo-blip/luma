function BagDrawer({ open, onClose, qty, setQty }) {
  const { Button, MediaFrame, QuantityStepper, Icon } = LDS;
  return (
    <div aria-hidden={!open} style={{ position: 'fixed', inset: 0, zIndex: 50, pointerEvents: open ? 'auto' : 'none' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'var(--surface-overlay)', opacity: open ? 1 : 0, transition: 'opacity var(--dur-slow) var(--ease-out)' }} />
      <aside role="dialog" aria-label="Bag" style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 'min(440px, 100%)', background: 'var(--bg-page)', boxShadow: 'var(--shadow-overlay)', display: 'flex', flexDirection: 'column', transform: open ? 'none' : 'translateX(100%)', transition: 'transform var(--dur-slow) var(--ease-out)' }}>
        <div style={{ height: 'var(--header-height)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', borderBottom: '1px solid var(--border-hairline)' }}>
          <span className="luma-h3">Bag</span>
          <button type="button" aria-label="Close" onClick={onClose} style={{ width: 44, height: 44, display: 'grid', placeItems: 'center', border: 0, background: 'transparent', cursor: 'pointer', color: 'var(--text-primary)' }}><Icon name="x" size={22} /></button>
        </div>
        <div style={{ flex: 1, overflow: 'auto', padding: 24 }}>
          {qty > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: '88px 1fr', gap: 16 }}>
              <ProductShot src={IMG.front} pad="10%" radius="var(--radius-sm)" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                  <span style={{ font: 'var(--text-body)' }}>{PRODUCT.name}</span>
                  <span style={{ font: 'var(--text-body)' }}>{money(PRODUCT.price * qty)}</span>
                </div>
                <span className="luma-caption">{PRODUCT.descriptor}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 10 }}>
                  <QuantityStepper size="sm" value={qty} onChange={setQty} min={1} max={5} />
                  <button type="button" onClick={() => setQty(0)} style={{ border: 0, background: 'transparent', padding: 0, cursor: 'pointer', font: 'var(--text-caption)', color: 'var(--text-tertiary)', textDecoration: 'underline', textUnderlineOffset: 3 }}>Remove</button>
                </div>
              </div>
            </div>
          ) : (
            <p className="luma-body">Your bag is empty.</p>
          )}
        </div>
        <div style={{ padding: 24, borderTop: '1px solid var(--border-hairline)', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="luma-body">Subtotal</span>
            <span style={{ font: 'var(--text-body)' }}>{money(PRODUCT.price * qty)}</span>
          </div>
          <Button variant="dark" fullWidth caps={false} disabled={qty === 0}>Checkout</Button>
          <span className="luma-caption" style={{ textAlign: 'center' }}>Shipping calculated at checkout.</span>
        </div>
      </aside>
    </div>
  );
}
window.BagDrawer = BagDrawer;
