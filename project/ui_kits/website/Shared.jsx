// Shared layout helpers + product media for the Luma website kit.
const LDS = window.LumaDesignSystem_64bcc8;
const IMG = {
  front: '../../assets/product/lc01-front.png',
  rays: '../../assets/product/lc01-rays.png',
  hd: '../../assets/product/lc01-hd.png',
  layers: '../../assets/product/lc01-layers.png',
};

function Container({ children, style, narrow }) {
  return <div className="k-container" style={{ maxWidth: narrow ? 960 : 'var(--container-max)', ...style }}>{children}</div>;
}

function Section({ children, tone = 'bone', style, id }) {
  const bg = { bone: 'var(--bg-page)', stone: 'var(--bg-subtle)', mist: 'var(--bg-cool)', charcoal: 'var(--bg-inverse)' }[tone];
  return <section id={id} className="k-section" style={{ background: bg, color: tone === 'charcoal' ? 'var(--text-inverse)' : 'var(--text-primary)', ...style }}>{children}</section>;
}

function Overline({ children, inverse, style }) {
  return <span className="luma-overline" style={{ display: 'block', color: inverse ? 'var(--text-inverse-secondary)' : 'var(--text-tertiary)', ...style }}>{children}</span>;
}

function Step({ n, title, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, borderTop: '1px solid var(--border-hairline)', paddingTop: 20 }}>
      <span style={{ font: '12px/16px var(--font-body)', letterSpacing: '0.16em', color: 'var(--text-tertiary)' }}>{n}</span>
      <span className="luma-h3">{title}</span>
      <p className="luma-body">{children}</p>
    </div>
  );
}

// Product cutout on a tonal panel. `pad` insets the image so it never touches the frame.
function ProductShot({ src, alt = '', tone = 'stone', ratio = '1 / 1', pad = '8%', radius = 'var(--radius-lg)', style }) {
  const bg = { stone: 'var(--luma-stone)', bone: 'var(--luma-bone)', mist: 'var(--luma-mist)' }[tone] || tone;
  return (
    <div style={{ position: 'relative', aspectRatio: ratio, borderRadius: radius, background: bg, overflow: 'hidden', ...style }}>
      <img src={src} alt={alt} style={{ position: 'absolute', inset: pad, width: `calc(100% - 2 * ${pad})`, height: `calc(100% - 2 * ${pad})`, objectFit: 'contain', display: 'block' }} />
    </div>
  );
}

const WAVE_IN = 'M0 150C4.6 129.5 8.9 110 14 110C19.1 110 23.4 129.5 28 150C32.6 170.5 36.9 190 42 190C47.1 190 51.4 170.5 56 150C60.6 129.5 64.9 110 70 110C75.1 110 79.4 129.5 84 150C88.6 170.5 92.9 190 98 190C103.1 190 107.4 170.5 112 150C116.6 129.5 120.9 110 126 110C131.1 110 135.4 129.5 140 150C144.6 170.5 148.9 190 154 190C159.1 190 163.4 170.5 168 150C172.6 129.5 176.9 110 182 110C187.1 110 191.4 129.5 196 150C200.6 170.5 204.9 190 210 190C215.1 190 219.4 170.5 224 150C228.6 129.5 232.9 110 238 110C243.1 110 247.4 129.5 252 150C256.6 170.5 260.9 190 266 190C271.1 190 275.4 170.5 280 150C284.6 129.5 288.9 110 294 110C299.1 110 303.4 129.5 308 150C312.6 170.5 316.9 190 322 190C327.1 190 331.4 170.5 336 150C340.6 129.5 344.9 110 350 110C355.1 110 359.4 129.5 364 150C368.6 170.5 372.9 190 378 190C383.1 190 387.4 170.5 392 150C396.6 129.5 400.9 110 406 110C411.1 110 415.4 129.5 420 150C424.6 170.5 428.9 190 434 190C439.1 190 443.4 170.5 448 150C452.6 129.5 456.9 110 462 110';
const WAVE_REST = 'M570 150C574.6 141.8 578.9 134 584 134C589.1 134 593.4 141.8 598 150C602.6 158.2 606.9 166 612 166C617.1 166 621.4 158.2 626 150C630.6 141.8 634.9 134 640 134C645.1 134 649.4 141.8 654 150C658.6 158.2 662.9 166 668 166C673.1 166 677.4 158.2 682 150C686.6 141.8 690.9 134 696 134C701.1 134 705.4 141.8 710 150C714.6 158.2 718.9 166 724 166C729.1 166 733.4 158.2 738 150C742.6 141.8 746.9 134 752 134C757.1 134 761.4 141.8 766 150C770.6 158.2 774.9 166 780 166C785.1 166 789.4 158.2 794 150C798.6 141.8 802.9 134 808 134C813.1 134 817.4 141.8 822 150C826.6 158.2 830.9 166 836 166C841.1 166 845.4 158.2 850 150C854.6 141.8 858.9 134 864 134C869.1 134 873.4 141.8 878 150C882.6 158.2 886.9 166 892 166C897.1 166 901.4 158.2 906 150C910.6 141.8 914.9 134 920 134C925.1 134 929.4 141.8 934 150C938.6 158.2 942.9 166 948 166C953.1 166 957.4 158.2 962 150C966.6 141.8 970.9 134 976 134C981.1 134 985.4 141.8 990 150C994.6 158.2 998.9 166 1004 166C1009.1 166 1013.4 158.2 1018 150C1022.6 141.8 1026.9 134 1032 134';
const WAVE_OUT = 'M570 150C576.4 129.5 582.5 110 589.6 110C596.7 110 602.8 129.5 609.2 150C615.6 170.5 621.7 190 628.8 190C635.9 190 642 170.5 648.4 150C654.8 129.5 660.9 110 668 110C675.1 110 681.2 129.5 687.6 150C694 170.5 700.1 190 707.2 190C714.3 190 720.4 170.5 726.8 150C733.2 129.5 739.3 110 746.4 110C753.5 110 759.6 129.5 766 150C772.4 170.5 778.5 190 785.6 190C792.7 190 798.8 170.5 805.2 150C811.6 129.5 817.7 110 824.8 110C831.9 110 838 129.5 844.4 150C850.8 170.5 856.9 190 864 190C871.1 190 877.2 170.5 883.6 150C890 129.5 896.1 110 903.2 110C910.3 110 916.4 129.5 922.8 150C929.2 170.5 935.3 190 942.4 190C949.5 190 955.6 170.5 962 150C968.4 129.5 974.5 110 981.6 110C988.7 110 994.8 129.5 1001.2 150C1007.6 170.5 1013.7 190 1020.8 190';

function WaveDiagram({ style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, ...style }}>
      <svg viewBox="0 0 1040 300" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }} role="img" aria-label="Blue light enters the glass; longer red wavelengths leave it">
        <line x1="0" y1="150" x2="1040" y2="150" stroke="#C2C0BB" strokeWidth="2" strokeDasharray="6 10" />
        <path d={WAVE_IN} fill="none" stroke="#1F2326" strokeWidth="3" strokeLinecap="round" />
        <path d={WAVE_REST} fill="none" stroke="#1F2326" strokeOpacity=".3" strokeWidth="2" strokeLinecap="round" />
        <path d={WAVE_OUT} fill="none" stroke="#D65D42" strokeWidth="4" strokeLinecap="round" />
        <rect x="466" y="6" width="100" height="288" rx="26" fill="#F5BFA9" fillOpacity=".5" stroke="#1F2326" strokeWidth="2" />
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, font: 'var(--text-caption)', color: 'var(--text-tertiary)' }}>
        <span>Blue light in</span><span>LC–01</span><span style={{ color: 'var(--luma-orange-deep)' }}>Longer red wavelengths out</span>
      </div>
    </div>
  );
}

function Check({ color = '#1F2326' }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Yes"><path d="M20 6 9 17l-5-5" /></svg>;
}

function CompareTable({ highlight = 'var(--luma-stone)' }) {
  const rows = [
    ['9H surface hardness', true, true],
    ['Oleophobic coating', 'Varies', true],
    ['Converts a portion of blue light', '—', 'accent'],
    ['Measured blue-light reduction', '—', '17.17%*'],
    ['Applicator included', 'Varies', true],
  ];
  const cell = (v) => v === true ? <Check /> : v === 'accent' ? <Check color="#D65D42" /> : <span style={{ color: v.endsWith('*') ? 'var(--text-primary)' : 'var(--text-tertiary)', fontWeight: v.endsWith('*') ? 500 : 400 }}>{v}</span>;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div className="k-compare">
        <span className="k-compare-h" style={{ textAlign: 'left' }}></span>
        <span className="k-compare-h">Standard</span>
        <span className="k-compare-h k-compare-luma" style={{ background: highlight, borderRadius: '16px 16px 0 0' }}><LDS.Logo height={20} /></span>
        {rows.map(([label, a, b]) => (
          <React.Fragment key={label}>
            <span className="k-compare-c" style={{ justifyContent: 'flex-start', textAlign: 'left' }}>{label}</span>
            <span className="k-compare-c">{cell(a)}</span>
            <span className="k-compare-c k-compare-luma" style={{ background: highlight }}>{cell(b)}</span>
          </React.Fragment>
        ))}
      </div>
      <span className="luma-caption">*TÜV report, test sample. Standard = typical tempered-glass protector.</span>
    </div>
  );
}

const PRODUCT = { name: 'Luma LC–01', descriptor: 'Quantum-Dot Screen Protector', price: 39 }; // price is a placeholder
const DEVICES = ['iPhone 16 Pro', 'iPhone 16 Pro Max', 'iPhone 16', 'iPhone 16 Plus']; // placeholder model list
const money = (n) => `£${n.toFixed(0)}`;

// Seamless horizontal ticker. Content is rendered twice; the track slides by half its width.
function Marquee({ children, duration = 40, gap = 48, className = '', style }) {
  const half = (hidden) => <div className="k-marquee-half" aria-hidden={hidden || undefined} style={{ gap, paddingRight: gap }}>{children}</div>;
  return <div className={'k-marquee ' + className} style={style}><div className="k-marquee-track" style={{ animationDuration: duration + 's' }}>{half(false)}{half(true)}</div></div>;
}

Object.assign(window, { LDS, IMG, Container, Section, Overline, Step, ProductShot, WaveDiagram, CompareTable, Check, PRODUCT, DEVICES, money, Marquee });
