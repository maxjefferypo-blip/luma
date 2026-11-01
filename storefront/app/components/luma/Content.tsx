import {useState, type CSSProperties, type ReactNode} from 'react';
import {Icon} from './Icon';

const TAG_TONES = {
  neutral: {bg: 'var(--luma-stone)', fg: 'var(--text-primary)', bd: 'transparent'},
  outline: {bg: 'transparent', fg: 'var(--text-primary)', bd: 'var(--border-strong)'},
  accent: {bg: 'var(--luma-peach)', fg: 'var(--luma-charcoal)', bd: 'transparent'},
  cool: {bg: 'var(--luma-mist)', fg: 'var(--luma-charcoal)', bd: 'transparent'},
  inverse: {bg: 'rgba(245,241,234,.12)', fg: 'var(--luma-bone)', bd: 'transparent'},
};

/** Small uppercase pill label ("New", "In the box"). */
export function Tag({children, tone = 'neutral', style}: {children: ReactNode; tone?: keyof typeof TAG_TONES; style?: CSSProperties}) {
  const t = TAG_TONES[tone];
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', height: 26, padding: '0 12px', borderRadius: 'var(--radius-pill)',
        background: t.bg, color: t.fg, border: `1px solid ${t.bd}`, font: 'var(--weight-medium) 11px/16px var(--font-body)',
        letterSpacing: '0.14em', textTransform: 'uppercase', whiteSpace: 'nowrap', ...style,
      }}
    >
      {children}
    </span>
  );
}

export interface SpecItem {
  label: string;
  value: ReactNode;
  /** Required qualifier for any published figure (see brand-strategy.md figures register). */
  note?: string;
}

/** Product figures always travel with their qualifiers. `rows` = label/value list; `figures` = large numbers. */
export function SpecList({items = [], layout = 'rows', inverse = false, style}: {items: SpecItem[]; layout?: 'rows' | 'figures'; inverse?: boolean; style?: CSSProperties}) {
  const ink = inverse ? 'var(--text-inverse)' : 'var(--text-primary)';
  const sub = inverse ? 'var(--text-inverse-secondary)' : 'var(--text-tertiary)';
  const line = inverse ? 'var(--border-inverse)' : 'var(--border-hairline)';
  const label = inverse ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)';
  if (layout === 'figures') {
    return (
      <div style={{display: 'grid', gridTemplateColumns: `repeat(${Math.min(items.length, 4)}, minmax(0,1fr))`, gap: 24, ...style}}>
        {items.map((it) => (
          <div key={it.label} style={{borderTop: `1px solid ${line}`, paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 6}}>
            <span style={{font: 'var(--weight-regular) 40px/44px var(--font-display)', letterSpacing: '-0.025em', color: ink}}>{it.value}</span>
            <span style={{font: 'var(--text-caption)', color: label}}>{it.label}</span>
            {it.note && <span style={{font: '12px/16px var(--font-body)', color: sub}}>{it.note}</span>}
          </div>
        ))}
      </div>
    );
  }
  return (
    <dl style={{margin: 0, ...style}}>
      {items.map((it, i) => (
        <div
          key={it.label}
          style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 24, padding: '14px 0',
            borderTop: `1px solid ${line}`, borderBottom: i === items.length - 1 ? `1px solid ${line}` : 'none',
          }}
        >
          <dt style={{flex: '1 1 0', minWidth: 0, font: 'var(--text-caption)', color: label}}>{it.label}</dt>
          <dd style={{flex: '0 0 auto', maxWidth: '62%', margin: 0, font: 'var(--text-body)', color: ink, textAlign: 'right'}}>
            {it.value}
            {it.note && <span style={{display: 'block', font: '12px/16px var(--font-body)', color: sub}}>{it.note}</span>}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Hairline-divided disclosure list. */
export function Accordion({items = [], defaultOpen = -1, inverse = false, style}: {items: {title: string; content: ReactNode}[]; defaultOpen?: number; inverse?: boolean; style?: CSSProperties}) {
  const [open, setOpen] = useState(defaultOpen);
  const ink = inverse ? 'var(--text-inverse)' : 'var(--text-primary)';
  const line = inverse ? 'var(--border-inverse)' : 'var(--border-hairline)';
  return (
    <div style={{borderTop: `1px solid ${line}`, ...style}}>
      {items.map((it, i) => {
        const on = open === i;
        return (
          <div key={it.title} style={{borderBottom: `1px solid ${line}`}}>
            <button
              type="button"
              aria-expanded={on}
              onClick={() => setOpen(on ? -1 : i)}
              style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, padding: '20px 0', background: 'transparent', border: 0, color: ink, font: 'var(--text-h3)', textAlign: 'left', cursor: 'pointer'}}
            >
              <span>{it.title}</span>
              <Icon name="plus" size={20} style={{transform: on ? 'rotate(45deg)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)'}} />
            </button>
            <div style={{display: 'grid', gridTemplateRows: on ? '1fr' : '0fr', transition: 'grid-template-rows var(--dur-base) var(--ease-out)'}}>
              <div style={{overflow: 'hidden'}}>
                <div style={{paddingBottom: 24, maxWidth: 640, font: 'var(--text-body)', color: inverse ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)'}}>{it.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Underline tabs. */
export function Tabs({tabs = [], value, onChange, style}: {tabs: {id: string; label: string}[]; value: string; onChange: (id: string) => void; style?: CSSProperties}) {
  return (
    <div role="tablist" style={{display: 'flex', gap: 32, boxShadow: 'inset 0 -1px 0 var(--border-hairline)', overflowX: 'auto', ...style}}>
      {tabs.map((t) => {
        const on = value === t.id;
        return (
          <button
            key={t.id}
            role="tab"
            type="button"
            aria-selected={on}
            onClick={() => onChange(t.id)}
            style={{background: 'transparent', border: 0, padding: '0 0 14px', cursor: 'pointer', font: 'var(--text-body)', color: on ? 'var(--text-primary)' : 'var(--text-tertiary)', boxShadow: on ? 'inset 0 -1px 0 var(--luma-charcoal)' : 'none', whiteSpace: 'nowrap', transition: 'color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'}}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}

/** Pill quantity control (controlled). The bag drawer reuses the same .l-stepper classes with cart forms. */
export function QuantityStepper({value, min = 1, max = 9, onChange, size = 'md', style}: {value: number; min?: number; max?: number; onChange: (n: number) => void; size?: 'sm' | 'md'; style?: CSSProperties}) {
  const set = (n: number) => onChange(Math.max(min, Math.min(max, n)));
  return (
    <div className={`l-stepper${size === 'sm' ? ' l-stepper--sm' : ''}`} style={style}>
      <button type="button" className="l-stepper-btn" aria-label="Decrease quantity" onClick={() => set(value - 1)} disabled={value <= min}>
        <Icon name="minus" size={16} />
      </button>
      <span className="l-stepper-value" aria-live="polite">{value}</span>
      <button type="button" className="l-stepper-btn" aria-label="Increase quantity" onClick={() => set(value + 1)} disabled={value >= max}>
        <Icon name="plus" size={16} />
      </button>
    </div>
  );
}
