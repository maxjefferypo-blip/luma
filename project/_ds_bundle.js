/* @ds-bundle: {"format":4,"namespace":"LumaDesignSystem_64bcc8","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Icon","sourcePath":"components/actions/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/actions/Icon.jsx"},{"name":"TextLink","sourcePath":"components/actions/TextLink.jsx"},{"name":"EclipseMark","sourcePath":"components/brand/EclipseMark.jsx"},{"name":"WORDMARK_PATH","sourcePath":"components/brand/Logo.jsx"},{"name":"ECLIPSE","sourcePath":"components/brand/Logo.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"MediaFrame","sourcePath":"components/content/MediaFrame.jsx"},{"name":"ProductCard","sourcePath":"components/content/ProductCard.jsx"},{"name":"SpecList","sourcePath":"components/content/SpecList.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"074f8a8d78cc","components/actions/Icon.jsx":"13bdbca0701b","components/actions/TextLink.jsx":"2ad633088e46","components/brand/EclipseMark.jsx":"87c41db9332f","components/brand/Logo.jsx":"824bbafae409","components/content/Accordion.jsx":"58698fb67f99","components/content/MediaFrame.jsx":"e02939e1038b","components/content/ProductCard.jsx":"1a317f405dcc","components/content/SpecList.jsx":"d74efdfe40c0","components/content/Tag.jsx":"e34a35ec3e59","components/forms/Checkbox.jsx":"f4a034818f72","components/forms/Input.jsx":"328a019912b8","components/forms/QuantityStepper.jsx":"59f184f48981","components/navigation/SiteFooter.jsx":"42b6f87e6138","components/navigation/SiteHeader.jsx":"ba06c1fae2a1","components/navigation/Tabs.jsx":"c99f3f1f9386","ui_kits/website/BagDrawer.jsx":"560009b811b9","ui_kits/website/HomePage.jsx":"f65f4177934f","ui_kits/website/ProductPage.jsx":"f23dc7bafdad","ui_kits/website/SciencePage.jsx":"0134a3cf6831","ui_kits/website/Shared.jsx":"ba40b53efe56","ui_kits/website/image-slot.js":"fff26d081c8d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LumaDesignSystem_64bcc8 = window.LumaDesignSystem_64bcc8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Icon.jsx
try { (() => {
// Glyph data copied from lucide-static@0.460.0 (ISC). Luma renders them at a 1.5px stroke.
const GLYPHS = {
  "arrow-right": [["path", {
    "d": "M5 12h14"
  }], ["path", {
    "d": "m12 5 7 7-7 7"
  }]],
  "arrow-up-right": [["path", {
    "d": "M7 7h10v10"
  }], ["path", {
    "d": "M7 17 17 7"
  }]],
  "arrow-left": [["path", {
    "d": "m12 19-7-7 7-7"
  }], ["path", {
    "d": "M19 12H5"
  }]],
  "plus": [["path", {
    "d": "M5 12h14"
  }], ["path", {
    "d": "M12 5v14"
  }]],
  "minus": [["path", {
    "d": "M5 12h14"
  }]],
  "x": [["path", {
    "d": "M18 6 6 18"
  }], ["path", {
    "d": "m6 6 12 12"
  }]],
  "check": [["path", {
    "d": "M20 6 9 17l-5-5"
  }]],
  "chevron-down": [["path", {
    "d": "m6 9 6 6 6-6"
  }]],
  "chevron-right": [["path", {
    "d": "m9 18 6-6-6-6"
  }]],
  "shopping-bag": [["path", {
    "d": "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
  }], ["path", {
    "d": "M3 6h18"
  }], ["path", {
    "d": "M16 10a4 4 0 0 1-8 0"
  }]],
  "menu": [["line", {
    "x1": "4",
    "x2": "20",
    "y1": "12",
    "y2": "12"
  }], ["line", {
    "x1": "4",
    "x2": "20",
    "y1": "6",
    "y2": "6"
  }], ["line", {
    "x1": "4",
    "x2": "20",
    "y1": "18",
    "y2": "18"
  }]],
  "user": [["path", {
    "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
  }], ["circle", {
    "cx": "12",
    "cy": "7",
    "r": "4"
  }]],
  "search": [["circle", {
    "cx": "11",
    "cy": "11",
    "r": "8"
  }], ["path", {
    "d": "m21 21-4.3-4.3"
  }]],
  "package": [["path", {
    "d": "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
  }], ["path", {
    "d": "M12 22V12"
  }], ["path", {
    "d": "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"
  }], ["path", {
    "d": "m7.5 4.27 9 5.15"
  }]],
  "rotate-ccw": [["path", {
    "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
  }], ["path", {
    "d": "M3 3v5h5"
  }]],
  "info": [["circle", {
    "cx": "12",
    "cy": "12",
    "r": "10"
  }], ["path", {
    "d": "M12 16v-4"
  }], ["path", {
    "d": "M12 8h.01"
  }]]
};
function Icon({
  name,
  size = 20,
  strokeWidth = 1.5,
  color = 'currentColor',
  title,
  style,
  ...rest
}) {
  const els = GLYPHS[name];
  if (!els) return null;
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    role: title ? 'img' : undefined,
    'aria-hidden': title ? undefined : true,
    style: {
      display: 'block',
      flex: 'none',
      ...style
    },
    ...rest
  }, title ? React.createElement('title', null, title) : null, els.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
const ICON_NAMES = Object.keys(GLYPHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    height: 40,
    padding: '0 20px',
    fontSize: 14,
    gap: 8,
    icon: 16
  },
  md: {
    height: 52,
    padding: '0 28px',
    fontSize: 16,
    gap: 12,
    icon: 20
  },
  lg: {
    height: 60,
    padding: '0 36px',
    fontSize: 16,
    gap: 14,
    icon: 20
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--accent)',
    hover: 'var(--accent-hover)',
    press: 'var(--accent-press)',
    fg: 'var(--text-on-accent)',
    border: 'transparent'
  },
  dark: {
    bg: 'var(--luma-charcoal)',
    hover: 'var(--luma-ink-80)',
    press: '#000000',
    fg: 'var(--luma-bone)',
    border: 'transparent'
  },
  outline: {
    bg: 'transparent',
    hover: 'var(--luma-stone)',
    press: 'var(--luma-ink-14)',
    fg: 'var(--text-primary)',
    border: 'var(--luma-charcoal)'
  },
  inverse: {
    bg: 'var(--luma-bone)',
    hover: 'var(--luma-stone)',
    press: 'var(--luma-ink-14)',
    fg: 'var(--luma-charcoal)',
    border: 'transparent'
  },
  ghost: {
    bg: 'transparent',
    hover: 'rgba(31,35,38,.06)',
    press: 'rgba(31,35,38,.10)',
    fg: 'var(--text-primary)',
    border: 'transparent'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  caps = true,
  iconRight,
  iconLeft,
  fullWidth = false,
  disabled = false,
  href,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const bg = disabled ? v.bg : press ? v.press : hover ? v.hover : v.bg;
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled,
    "aria-disabled": disabled || undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      borderRadius: 'var(--radius-pill)',
      background: bg,
      color: v.fg,
      border: `1px solid ${v.border}`,
      font: `var(--weight-medium) ${s.fontSize}px/20px var(--font-body)`,
      letterSpacing: caps ? 'var(--type-button-track)' : '0',
      textTransform: caps ? 'uppercase' : 'none',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--dur-fast) var(--ease-out), opacity var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }), /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon,
    style: {
      transform: hover && !disabled && iconRight.startsWith('arrow') ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function TextLink({
  children,
  href = '#',
  arrow = false,
  inverse = false,
  size = 'body',
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const color = inverse ? 'var(--text-inverse)' : 'var(--text-primary)';
  const line = inverse ? 'rgba(245,241,234,.4)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color,
      font: size === 'caption' ? 'var(--text-caption)' : 'var(--text-body)',
      textDecoration: 'underline',
      textDecorationThickness: 1,
      textUnderlineOffset: 4,
      textDecorationColor: hover ? 'currentColor' : line,
      transition: 'text-decoration-color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), children, arrow && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16,
    style: {
      transform: hover ? 'translateX(2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/brand/EclipseMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Standalone eclipse: peach behind, orange in front. Same geometry as the logo's eclipse.
function EclipseMark({
  size = 32,
  title,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 51.56 51.56",
    width: size,
    height: size,
    role: title ? 'img' : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : true,
    style: {
      display: 'block',
      flex: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("circle", {
    cx: "34.06",
    cy: "24.7",
    r: "17.5",
    fill: "var(--logo-eclipse-back, #F5BFA9)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "26.86",
    r: "17.5",
    fill: "var(--logo-eclipse-front, #D65D42)"
  }));
}
Object.assign(__ds_scope, { EclipseMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/EclipseMark.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Master vector wordmark, traced from the approved typography board (units: 1 = 1px at 152.2px ascender).
const WORDMARK_PATH = 'M0 0H20.6V117.2C20.6 141.2 32.74 148.19 37.2 152.2H26.8A26.8 32.4 0 0 1 0 119.8ZM39.7 49H59V105.4A30.15 30.2 0 0 0 119.3 105.4V49H138.5V105.4A49.4 49.4 0 0 1 39.7 105.4ZM148.4 152.2V83.2A39.8 36.3 0 0 1 218.58 59.75A39.4 36.3 0 0 1 288.05 83.2V152.2H269.3V86.3A20.65 21.1 0 0 0 228 86.3V152.2H209.2V86.3A20.85 21.1 0 0 0 167.5 86.3V152.2ZM404 152.2V100.35A53.7 54.35 0 0 0 350.3 46A53.7 54.35 0 0 0 296.6 100.35A53.7 54.35 0 0 0 350.3 154.7C372.3 154.7 382.65 140.04 385.3 135.8V152.2ZM385.3 100.25A34.4 35.55 0 0 1 316.5 100.25A34.4 35.55 0 0 1 385.3 100.25Z';
// Eclipse: orange centre sits on the a-stem's outer edge (x=404); its bottom rests on the x-height (y=49).
const ECLIPSE = {
  r: 17.5,
  front: [404, 31.5],
  back: [420.56, 29.34]
};
function Logo({
  variant = 'primary',
  height = 32,
  title = 'luma',
  style,
  ...rest
}) {
  const withEclipse = variant !== 'wordmark';
  const vbW = withEclipse ? 438.06 : 404;
  const ink = variant === 'reversed' ? 'var(--logo-ink-reversed, #FFFFFF)' : 'var(--logo-ink, #1F2326)';
  const width = height * vbW / 154.7;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: `0 0 ${vbW} 154.7`,
    width: width,
    height: height,
    role: "img",
    "aria-label": title,
    style: {
      display: 'block',
      flex: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: WORDMARK_PATH,
    fill: ink
  }), withEclipse && /*#__PURE__*/React.createElement("circle", {
    cx: ECLIPSE.back[0],
    cy: ECLIPSE.back[1],
    r: ECLIPSE.r,
    fill: "var(--logo-eclipse-back, #F5BFA9)"
  }), withEclipse && /*#__PURE__*/React.createElement("circle", {
    cx: ECLIPSE.front[0],
    cy: ECLIPSE.front[1],
    r: ECLIPSE.r,
    fill: "var(--logo-eclipse-front, #D65D42)"
  }));
}
Object.assign(__ds_scope, { WORDMARK_PATH, ECLIPSE, Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
const {
  useState
} = React;
function Accordion({
  items = [],
  defaultOpen = -1,
  inverse = false,
  style
}) {
  const [open, setOpen] = useState(defaultOpen);
  const ink = inverse ? 'var(--text-inverse)' : 'var(--text-primary)';
  const line = inverse ? 'var(--border-inverse)' : 'var(--border-hairline)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${line}`,
      ...style
    }
  }, items.map((it, i) => {
    const on = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: `1px solid ${line}`
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-expanded": on,
      onClick: () => setOpen(on ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24,
        padding: '20px 0',
        background: 'transparent',
        border: 0,
        color: ink,
        font: 'var(--text-h3)',
        textAlign: 'left',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", null, it.title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "plus",
      size: 20,
      style: {
        transform: on ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: on ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 24,
        maxWidth: 640,
        font: 'var(--text-body)',
        color: inverse ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)'
      }
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/MediaFrame.jsx
try { (() => {
const TONES = {
  stone: 'var(--luma-stone)',
  mist: 'var(--luma-mist)',
  bone: 'var(--luma-bone)',
  peach: 'var(--luma-peach)',
  charcoal: 'var(--luma-charcoal)'
};
function MediaFrame({
  src,
  alt = '',
  ratio = '4 / 5',
  radius = 'md',
  tone = 'stone',
  caption,
  fit = 'cover',
  style,
  children
}) {
  const r = radius === 'none' ? 0 : `var(--radius-${radius})`;
  const dark = tone === 'charcoal';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      borderRadius: r,
      overflow: 'hidden',
      background: TONES[tone] || TONES.stone,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: fit,
      display: 'block'
    }
  }) : caption && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 14,
      right: 16,
      font: '12px/16px var(--font-body)',
      letterSpacing: '0.02em',
      color: dark ? 'var(--text-inverse-secondary)' : 'var(--text-tertiary)'
    }
  }, caption), children);
}
Object.assign(__ds_scope, { MediaFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MediaFrame.jsx", error: String((e && e.message) || e) }); }

// components/content/SpecList.jsx
try { (() => {
function SpecList({
  items = [],
  layout = 'rows',
  inverse = false,
  style
}) {
  const ink = inverse ? 'var(--text-inverse)' : 'var(--text-primary)';
  const sub = inverse ? 'var(--text-inverse-secondary)' : 'var(--text-tertiary)';
  const line = inverse ? 'var(--border-inverse)' : 'var(--border-hairline)';
  if (layout === 'figures') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.min(items.length, 4)}, minmax(0,1fr))`,
        gap: 24,
        ...style
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: `1px solid ${line}`,
        paddingTop: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-regular) 40px/44px var(--font-display)',
        letterSpacing: '-0.025em',
        color: ink
      }
    }, it.value), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--text-caption)',
        color: inverse ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)'
      }
    }, it.label), it.note && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '12px/16px var(--font-body)',
        color: sub
      }
    }, it.note))));
  }
  return /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 24,
      padding: '14px 0',
      borderTop: `1px solid ${line}`,
      borderBottom: i === items.length - 1 ? `1px solid ${line}` : 'none'
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      flex: '1 1 0',
      minWidth: 0,
      font: 'var(--text-caption)',
      color: inverse ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)'
    }
  }, it.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      flex: '0 0 auto',
      maxWidth: '62%',
      margin: 0,
      font: 'var(--text-body)',
      color: ink,
      textAlign: 'right'
    }
  }, it.value, it.note && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '12px/16px var(--font-body)',
      color: sub
    }
  }, it.note)))));
}
Object.assign(__ds_scope, { SpecList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SpecList.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: 'var(--luma-stone)',
    fg: 'var(--text-primary)',
    bd: 'transparent'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--text-primary)',
    bd: 'var(--border-strong)'
  },
  accent: {
    bg: 'var(--luma-peach)',
    fg: 'var(--luma-charcoal)',
    bd: 'transparent'
  },
  cool: {
    bg: 'var(--luma-mist)',
    fg: 'var(--luma-charcoal)',
    bd: 'transparent'
  },
  inverse: {
    bg: 'rgba(245,241,234,.12)',
    fg: 'var(--luma-bone)',
    bd: 'transparent'
  }
};
function Tag({
  children,
  tone = 'neutral',
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 26,
      padding: '0 12px',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.bd}`,
      font: 'var(--weight-medium) 11px/16px var(--font-body)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/ProductCard.jsx
try { (() => {
const {
  useState
} = React;
function ProductCard({
  name,
  descriptor,
  price,
  tag,
  image,
  imageCaption = 'Product on Stone',
  tone = 'stone',
  href = '#',
  onClick,
  style
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      color: 'var(--text-primary)',
      textDecoration: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MediaFrame, {
    src: image,
    ratio: "4 / 5",
    tone: tone,
    caption: imageCaption
  }, tag && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: "inverse",
    style: {
      position: 'absolute',
      top: 14,
      left: 14,
      background: 'var(--luma-bone)',
      color: 'var(--luma-charcoal)'
    }
  }, tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-h3)'
    }
  }, name), descriptor && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-tertiary)'
    }
  }, descriptor)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--text-body)'
    }
  }, price, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 18,
    style: {
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const {
  useState
} = React;
function Checkbox({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled,
  style
}) {
  const [inner, setInner] = useState(defaultChecked);
  const on = checked ?? inner;
  const toggle = () => {
    if (disabled) return;
    const n = !on;
    if (checked === undefined) setInner(n);
    onChange && onChange(n);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "checkbox",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      width: 20,
      height: 20,
      marginTop: 2,
      flex: 'none',
      borderRadius: 'var(--radius-xs)',
      border: `1px solid ${on ? 'var(--luma-charcoal)' : 'var(--border-strong)'}`,
      background: on ? 'var(--luma-charcoal)' : 'transparent',
      color: 'var(--luma-bone)',
      display: 'grid',
      placeItems: 'center',
      padding: 0,
      cursor: 'inherit',
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    strokeWidth: 2
  })), label && /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useId
} = React;
function Input({
  label,
  hint,
  error,
  value,
  defaultValue,
  onChange,
  placeholder,
  type = 'text',
  size = 'md',
  inverse = false,
  trailing,
  disabled,
  id,
  style,
  inputStyle,
  ...rest
}) {
  const auto = useId();
  const fid = id || auto;
  const [focus, setFocus] = useState(false);
  const h = size === 'sm' ? 40 : 52;
  const ink = inverse ? 'var(--text-inverse)' : 'var(--text-primary)';
  const sub = inverse ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)';
  const border = error ? 'var(--state-error)' : focus ? inverse ? 'var(--luma-bone)' : 'var(--border-focus)' : inverse ? 'rgba(245,241,234,.28)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      font: 'var(--text-caption)',
      color: sub
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: h,
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${border}`,
      background: 'transparent',
      padding: '0 4px 0 16px',
      gap: 8,
      opacity: disabled ? 0.5 : 1,
      transition: 'border-color var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: type,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    "aria-invalid": !!error || undefined,
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      border: 0,
      outline: 'none',
      background: 'transparent',
      color: ink,
      font: 'var(--text-body)',
      padding: 0,
      ...inputStyle
    }
  }, rest)), trailing), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: error ? 'var(--state-error)' : inverse ? 'var(--text-inverse-secondary)' : 'var(--text-tertiary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
const {
  useState
} = React;
function QuantityStepper({
  value,
  defaultValue = 1,
  min = 1,
  max = 9,
  onChange,
  size = 'md',
  style
}) {
  const [inner, setInner] = useState(defaultValue);
  const v = value ?? inner;
  const set = n => {
    const c = Math.max(min, Math.min(max, n));
    if (value === undefined) setInner(c);
    onChange && onChange(c);
  };
  const h = size === 'sm' ? 36 : 52;
  const btn = dis => ({
    width: h,
    height: h - 2,
    border: 0,
    background: 'transparent',
    color: 'var(--text-primary)',
    display: 'grid',
    placeItems: 'center',
    cursor: dis ? 'not-allowed' : 'pointer',
    opacity: dis ? 0.3 : 1,
    padding: 0
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: h,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-strong)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Decrease",
    onClick: () => set(v - 1),
    disabled: v <= min,
    style: btn(v <= min)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    "aria-live": "polite",
    style: {
      minWidth: 20,
      textAlign: 'center',
      font: 'var(--text-body)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, v), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Increase",
    onClick: () => set(v + 1),
    disabled: v >= max,
    style: btn(v >= max)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 16
  })));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
const DEFAULT_COLUMNS = [{
  title: 'Shop',
  links: ['LC–01', 'Applicator', 'Gift cards']
}, {
  title: 'Learn',
  links: ['The science', 'Test results', 'Installation']
}, {
  title: 'Help',
  links: ['Shipping', 'Returns', 'Contact']
}];
function SiteFooter({
  columns = DEFAULT_COLUMNS,
  disclaimer = 'Luma LC–01 is a screen protector, not a medical device. Test figures describe a measured sample and are not health claims.',
  compact = false,
  statement,
  signature = false,
  style
}) {
  const link = {
    font: 'var(--text-caption)',
    color: 'var(--text-inverse-secondary)',
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bg-inverse)',
      color: 'var(--text-inverse)',
      padding: compact ? '56px var(--gutter-mobile) 32px' : '96px var(--gutter-desktop) 40px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: compact ? '1fr' : 'minmax(0,1.4fr) repeat(3, minmax(0,1fr))',
      gap: compact ? 40 : 48,
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      maxWidth: statement ? 520 : 380
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "reversed",
    height: 36
  }), statement && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-h2)',
      letterSpacing: 'var(--type-h2-track)',
      color: 'var(--text-inverse)',
      margin: '8px 0 16px'
    }
  }, statement), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-inverse-secondary)'
    }
  }, "Notes on light, screens and the science behind LC\u201301. Occasional, never noisy."), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    inverse: true,
    placeholder: "Email address",
    "aria-label": "Email address",
    trailing: /*#__PURE__*/React.createElement(__ds_scope.Button, {
      size: "sm",
      variant: "inverse"
    }, "Join")
  })), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-overline)',
      letterSpacing: 'var(--type-overline-track)',
      textTransform: 'uppercase',
      color: 'var(--text-inverse)',
      marginBottom: 4
    }
  }, c.title), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: link
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: compact ? '48px auto 0' : '96px auto 0',
      paddingTop: 24,
      borderTop: '1px solid var(--border-inverse)',
      display: 'flex',
      flexDirection: compact ? 'column' : 'row',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '12px/18px var(--font-body)',
      color: 'var(--text-inverse-secondary)',
      maxWidth: 560
    }
  }, disclaimer), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '12px/18px var(--font-body)',
      color: 'var(--text-inverse-secondary)',
      whiteSpace: 'nowrap'
    }
  }, "\xA9 Luma")), signature && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: compact ? '48px auto 0' : '120px auto 0'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "reversed",
    style: {
      width: '100%',
      height: 'auto'
    }
  })));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
const {
  useState
} = React;
function NavLink({
  item,
  active,
  inverse,
  onNavigate
}) {
  const [hover, setHover] = useState(false);
  const ink = inverse ? 'var(--text-inverse)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("a", {
    href: item.href || '#',
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(item.id || item.href);
      }
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      font: 'var(--text-body)',
      color: ink,
      textDecoration: 'none',
      paddingBottom: 2,
      borderBottom: `1px solid ${active || hover ? 'currentColor' : 'transparent'}`,
      transition: 'border-color var(--dur-fast) var(--ease-out)'
    }
  }, item.label);
}
function SiteHeader({
  links = [{
    id: 'science',
    label: 'Science'
  }, {
    id: 'shop',
    label: 'Shop'
  }, {
    id: 'technology',
    label: 'Technology'
  }],
  active,
  cartCount = 0,
  onNavigate,
  onCart,
  onHome,
  inverse = false,
  compact = false,
  action,
  style
}) {
  const ink = inverse ? 'var(--text-inverse)' : 'var(--text-primary)';
  const iconBtn = {
    width: 44,
    height: 44,
    display: 'grid',
    placeItems: 'center',
    background: 'transparent',
    border: 0,
    color: ink,
    cursor: 'pointer',
    padding: 0,
    position: 'relative'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--header-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      padding: compact ? '0 var(--gutter-mobile)' : '0 var(--gutter-desktop)',
      borderBottom: `1px solid ${inverse ? 'var(--border-inverse)' : 'var(--border-hairline)'}`,
      background: inverse ? 'var(--bg-inverse)' : 'var(--bg-page)',
      color: ink,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Luma home",
    onClick: e => {
      if (onHome) {
        e.preventDefault();
        onHome();
      }
    },
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: compact ? 24 : 28,
    variant: inverse ? 'reversed' : 'primary'
  })), !compact && /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l.id || l.label,
    item: l,
    active: active === (l.id || l.href),
    inverse: inverse,
    onNavigate: onNavigate
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, action && !compact && /*#__PURE__*/React.createElement("div", {
    style: {
      marginRight: 12,
      display: 'flex'
    }
  }, action), !compact && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Account",
    style: iconBtn
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "user",
    size: 22
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": `Bag, ${cartCount} items`,
    onClick: onCart,
    style: iconBtn
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "shopping-bag",
    size: 22
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 6,
      right: 4,
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      borderRadius: 9,
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      font: '500 11px/18px var(--font-body)',
      textAlign: 'center'
    }
  }, cartCount)), compact && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Menu",
    style: iconBtn
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "menu",
    size: 22
  }))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 32,
      boxShadow: 'inset 0 -1px 0 var(--border-hairline)',
      overflowX: 'auto',
      ...style
    }
  }, tabs.map(t => {
    const id = t.id || t.label;
    const on = value === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      type: "button",
      "aria-selected": on,
      onClick: () => onChange && onChange(id),
      style: {
        background: 'transparent',
        border: 0,
        padding: '0 0 14px',
        cursor: 'pointer',
        font: 'var(--text-body)',
        color: on ? 'var(--text-primary)' : 'var(--text-tertiary)',
        boxShadow: on ? 'inset 0 -1px 0 var(--luma-charcoal)' : 'none',
        whiteSpace: 'nowrap',
        transition: 'color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BagDrawer.jsx
try { (() => {
function BagDrawer({
  open,
  onClose,
  qty,
  setQty
}) {
  const {
    Button,
    MediaFrame,
    QuantityStepper,
    Icon
  } = LDS;
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": !open,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      pointerEvents: open ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-overlay)',
      opacity: open ? 1 : 0,
      transition: 'opacity var(--dur-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    role: "dialog",
    "aria-label": "Bag",
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 'min(440px, 100%)',
      background: 'var(--bg-page)',
      boxShadow: 'var(--shadow-overlay)',
      display: 'flex',
      flexDirection: 'column',
      transform: open ? 'none' : 'translateX(100%)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--header-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "luma-h3"
  }, "Bag"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      width: 44,
      height: 44,
      display: 'grid',
      placeItems: 'center',
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 22
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 24
    }
  }, qty > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '88px 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ProductShot, {
    src: IMG.front,
    pad: "10%",
    radius: "var(--radius-sm)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body)'
    }
  }, PRODUCT.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body)'
    }
  }, money(PRODUCT.price * qty))), /*#__PURE__*/React.createElement("span", {
    className: "luma-caption"
  }, PRODUCT.descriptor), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    size: "sm",
    value: qty,
    onChange: setQty,
    min: 1,
    max: 5
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setQty(0),
    style: {
      border: 0,
      background: 'transparent',
      padding: 0,
      cursor: 'pointer',
      font: 'var(--text-caption)',
      color: 'var(--text-tertiary)',
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  }, "Remove")))) : /*#__PURE__*/React.createElement("p", {
    className: "luma-body"
  }, "Your bag is empty.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "luma-body"
  }, "Subtotal"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body)'
    }
  }, money(PRODUCT.price * qty))), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    fullWidth: true,
    caps: false,
    disabled: qty === 0
  }, "Checkout"), /*#__PURE__*/React.createElement("span", {
    className: "luma-caption",
    style: {
      textAlign: 'center'
    }
  }, "Shipping calculated at checkout."))));
}
window.BagDrawer = BagDrawer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BagDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
// Home — flow modelled on premium science-led DTC sites: hero → range → in the box →
// science card → editorial → brand ticker → results carousel → gallery → closing pair.

function DeviceCard({
  device,
  badge,
  onShop
}) {
  const {
    Button,
    Tag
  } = LDS;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "k-dcard",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onShop,
    style: {
      background: hover ? 'rgba(245,241,234,.13)' : 'rgba(245,241,234,.07)',
      transform: hover ? 'translateY(-8px)' : 'none'
    }
  }, badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "accent"
  }, badge)), /*#__PURE__*/React.createElement("span", {
    className: "k-chip"
  }, "LC\u201301"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 22px/28px var(--font-body)',
      marginTop: 12
    }
  }, device), /*#__PURE__*/React.createElement("img", {
    src: IMG.hd,
    alt: "",
    style: {
      height: 240,
      margin: '28px 0 32px',
      objectFit: 'contain',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    caps: false,
    variant: hover ? 'inverse' : 'dark',
    iconRight: hover ? 'arrow-right' : undefined,
    style: {
      border: hover ? undefined : '1px solid rgba(245,241,234,.18)'
    }
  }, "Shop now"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-inverse-secondary)',
      marginTop: 14
    }
  }, money(PRODUCT.price), " \xB7 Applicator included"));
}
function Callout({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      flex: 'none',
      borderTop: '1px dashed var(--luma-ink-64)',
      marginTop: 9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "luma-overline",
    style: {
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-secondary)'
    }
  }, children)));
}
function ResultsCarousel() {
  const {
    Icon,
    EclipseMark
  } = LDS;
  const ref = React.useRef(null);
  const [i, setI] = React.useState(0);
  const cards = [{
    value: '17.17%',
    label: 'Blue-light reduction',
    note: 'Reported TÜV test sample',
    bg: 'var(--luma-charcoal)',
    ink: 'var(--luma-bone)',
    sub: 'var(--text-inverse-secondary)'
  }, {
    value: '28.72%',
    label: 'Conversion efficiency',
    note: 'Manufacturer-defined test metric — not the share of all screen blue light converted',
    bg: 'var(--luma-peach)'
  }, {
    value: '≈ 91%',
    label: 'Light transmission',
    note: 'Product specification',
    bg: 'var(--luma-mist)'
  }, {
    value: '0.33 mm',
    label: 'Glass thickness',
    note: 'Product specification · 9H surface hardness',
    bg: 'var(--luma-stone)'
  }];
  const to = n => {
    const el = ref.current;
    const c = el && el.children[n];
    if (!c) return;
    el.scrollTo({
      left: c.offsetLeft - (el.clientWidth - c.clientWidth) / 2,
      behavior: 'smooth'
    });
  };
  const onScroll = () => {
    const el = ref.current;
    const mid = el.scrollLeft + el.clientWidth / 2;
    let best = 0,
      d = Infinity;
    [...el.children].forEach((c, k) => {
      const dd = Math.abs(c.offsetLeft + c.clientWidth / 2 - mid);
      if (dd < d) {
        d = dd;
        best = k;
      }
    });
    setI(best);
  };
  const round = {
    width: 44,
    height: 44,
    borderRadius: '50%',
    border: '1px solid var(--border-strong)',
    background: 'transparent',
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer',
    color: 'var(--text-primary)',
    padding: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "k-carousel",
    onScroll: onScroll
  }, cards.map((c, k) => /*#__PURE__*/React.createElement("div", {
    key: c.value,
    className: "k-rcard",
    style: {
      background: c.bg,
      color: c.ink || 'var(--text-primary)',
      opacity: k === i ? 1 : 0.55
    },
    onClick: () => to(k)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "luma-overline",
    style: {
      color: c.sub || 'var(--text-secondary)'
    }
  }, "LC\u201301 \xB7 Measured"), /*#__PURE__*/React.createElement(EclipseMark, {
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    className: "k-rcard-value"
  }, c.value), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 22px/28px var(--font-body)'
    }
  }, c.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: c.sub || 'var(--text-secondary)'
    }
  }, c.note))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous",
    style: round,
    onClick: () => to(Math.max(0, i - 1))
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, cards.map((c, k) => /*#__PURE__*/React.createElement("button", {
    key: c.value,
    type: "button",
    "aria-label": `Show ${c.label}`,
    onClick: () => to(k),
    style: {
      width: k === i ? 24 : 8,
      height: 8,
      borderRadius: 4,
      border: 0,
      padding: 0,
      cursor: 'pointer',
      background: k === i ? 'var(--luma-charcoal)' : 'var(--luma-ink-24)',
      transition: 'width var(--dur-base) var(--ease-out)'
    }
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Next",
    style: round,
    onClick: () => to(Math.min(cards.length - 1, i + 1))
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18
  }))));
}
function Slot({
  id,
  w,
  h,
  label,
  mask
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: id,
    shape: "rounded",
    radius: "20",
    mask: mask,
    placeholder: label
  }));
}
function HomePage({
  go,
  addToBag
}) {
  const {
    Button,
    TextLink,
    Tag,
    EclipseMark
  } = LDS;
  const shop = () => go('shop');
  const scrollTo = id => e => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop - 72,
      behavior: 'smooth'
    });
  };
  const lines = ['Light, reimagined.', 'A different kind of screen protector.', 'Not just protection. Light conversion.', 'Measured, not assumed.', 'Rethink what’s between you and your screen.'];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--luma-charcoal)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-hero2"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "k-hero2-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "luma-hero"
  }, "A different kind of screen protector."), /*#__PURE__*/React.createElement("p", {
    className: "luma-lead",
    style: {
      maxWidth: 440
    }
  }, "Most screen protectors protect the glass. LC\u201301 is designed to do something more \u2014 converting a portion of blue light into longer wavelengths."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      flexWrap: 'wrap',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    iconRight: "arrow-right",
    onClick: shop
  }, "Explore LC\u201301"), /*#__PURE__*/React.createElement(TextLink, {
    href: "#science",
    arrow: true,
    onClick: scrollTo('science')
  }, "How it works"))), /*#__PURE__*/React.createElement("div", {
    className: "k-hero2-media"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.front,
    alt: "LC\u201301 glass in front of a phone"
  })))))), /*#__PURE__*/React.createElement(Section, {
    tone: "charcoal",
    style: {
      paddingTop: 96
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "k-row-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "luma-h1",
    style: {
      maxWidth: 560
    }
  }, "Choose your iPhone model."), /*#__PURE__*/React.createElement("div", {
    className: "k-row-head-side"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-inverse-secondary)',
      maxWidth: 360
    }
  }, "One protector, cut precisely for each model. Every box includes the glass and its applicator."), /*#__PURE__*/React.createElement(TextLink, {
    inverse: true,
    arrow: true,
    href: "#",
    onClick: e => {
      e.preventDefault();
      shop();
    }
  }, "Shop all"))), /*#__PURE__*/React.createElement("div", {
    className: "k-dgrid"
  }, DEVICES.map((d, k) => /*#__PURE__*/React.createElement(DeviceCard, {
    key: d,
    device: d,
    badge: k === 0 ? 'New' : null,
    onShop: () => go('shop', d)
  }))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "k-box"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    tone: "accent"
  }, "In the box")), /*#__PURE__*/React.createElement("h2", {
    className: "luma-h1"
  }, "Everything you need for a straight fit."), /*#__PURE__*/React.createElement("p", {
    className: "luma-body",
    style: {
      maxWidth: 420
    }
  }, "LC\u201301 glass with its light-conversion layer, and a dedicated applicator that lines it up with your phone. Clean, place, pull the tab."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    iconRight: "arrow-right",
    onClick: shop
  }, "Shop LC\u201301"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-box-hero"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.front,
    alt: "LC\u201301 glass in front of a phone"
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-pin",
    style: {
      left: '5%',
      top: '22%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-chip k-chip-solid"
  }, "0.33 mm tempered glass"), /*#__PURE__*/React.createElement("span", {
    className: "k-pin-line"
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-pin",
    style: {
      left: '5%',
      top: '58%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-chip k-chip-solid"
  }, "Light-conversion layer"), /*#__PURE__*/React.createElement("span", {
    className: "k-pin-line"
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-pin",
    style: {
      right: '5%',
      top: '38%',
      flexDirection: 'row-reverse'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-chip k-chip-solid"
  }, "Oleophobic coating"), /*#__PURE__*/React.createElement("span", {
    className: "k-pin-line"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "k-thumbs"
  }, /*#__PURE__*/React.createElement(ProductShot, {
    src: IMG.rays,
    tone: "mist",
    ratio: "4 / 3",
    pad: "8%",
    radius: "var(--radius-md)",
    alt: "Light passing through the conversion layer"
  }), /*#__PURE__*/React.createElement(ProductShot, {
    src: IMG.hd,
    ratio: "4 / 3",
    pad: "8%",
    radius: "var(--radius-md)",
    alt: "Front view"
  }), /*#__PURE__*/React.createElement(ProductShot, {
    src: IMG.layers,
    ratio: "4 / 3",
    pad: "6%",
    radius: "var(--radius-md)",
    alt: "Exploded view of the layers"
  })))))), /*#__PURE__*/React.createElement("section", {
    id: "science",
    className: "k-frost-sec"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.rays,
    alt: "",
    className: "k-frost-bg"
  }), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "k-frost"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "luma-overline k-dot"
  }, "The difference"), /*#__PURE__*/React.createElement("h2", {
    className: "luma-h1"
  }, "Not just protection. Light conversion."), /*#__PURE__*/React.createElement("p", {
    className: "luma-body",
    style: {
      maxWidth: 440
    }
  }, "Blocking light and converting light aren\u2019t the same thing. Most protectors leave light unchanged. LC\u201301 is designed to convert a portion of blue light into longer wavelengths."), /*#__PURE__*/React.createElement("div", {
    className: "k-stat"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-chip"
  }, "LC\u201301"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body)'
    }
  }, "Blue-light reduction\xB9")), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 64px/1 var(--font-display)',
      letterSpacing: '-0.03em'
    }
  }, "17.17%")), /*#__PURE__*/React.createElement("span", {
    className: "luma-caption"
  }, "\xB9 Reported T\xDCV test sample. An optical measurement, not a health outcome.")), /*#__PURE__*/React.createElement("div", {
    className: "k-frost-media"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.rays,
    alt: "Light passing through the LC\u201301 conversion layer"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    title: "Quantum dots"
  }, "Absorb a portion of the blue light from your display."), /*#__PURE__*/React.createElement(Callout, {
    title: "Longer wavelengths"
  }, "That energy leaves as red light. The rest passes through clearly."))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "k-edit"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-edit-copy"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 22px/28px var(--font-display)'
    }
  }, "Science ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)'
    }
  }, "[01]")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "luma-h1"
  }, "Your screen is a light source."), /*#__PURE__*/React.createElement("p", {
    className: "luma-body",
    style: {
      maxWidth: 420
    }
  }, "Every display gives off a mix of wavelengths. A short read on how LC\u201301 shifts that mix \u2014 what it changes, and what it doesn\u2019t."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "dark",
    caps: false,
    iconRight: "arrow-right",
    onClick: () => go('science')
  }, "Discover"))), /*#__PURE__*/React.createElement("span", {
    className: "luma-overline",
    style: {
      color: 'var(--text-tertiary)'
    }
  }, "Science ", /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '0 8px'
    }
  }, "/"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "Light 101"))), /*#__PURE__*/React.createElement("div", {
    className: "k-edit-media"
  }, /*#__PURE__*/React.createElement(WaveDiagram, {
    style: {
      width: '100%'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "k-ticker"
  }, /*#__PURE__*/React.createElement(Marquee, {
    duration: 70,
    gap: 56
  }, lines.map(l => /*#__PURE__*/React.createElement(React.Fragment, {
    key: l
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement(EclipseMark, {
    size: 28
  }))))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingLeft: 0,
      paddingRight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "luma-h1"
  }, "Measured, not assumed."), /*#__PURE__*/React.createElement("p", {
    className: "luma-body"
  }, "Optical results, test conditions and clear limitations. These are measurements on a test sample, not health outcomes."))), /*#__PURE__*/React.createElement(ResultsCarousel, null))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("h2", {
    className: "luma-h1",
    style: {
      maxWidth: 640
    }
  }, "Rethink what\u2019s between you and your screen.")), /*#__PURE__*/React.createElement("div", {
    className: "k-gallery"
  }, /*#__PURE__*/React.createElement(Slot, {
    id: "home-g1",
    w: 340,
    h: 480,
    mask: "inset(0 round 170px 170px 20px 20px)",
    label: "Bedside, warm lamp light"
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-gcol"
  }, /*#__PURE__*/React.createElement(ProductShot, {
    src: IMG.hd,
    pad: "10%",
    style: {
      width: 260,
      height: 268,
      aspectRatio: 'auto'
    }
  }), /*#__PURE__*/React.createElement(Slot, {
    id: "home-g2",
    w: 260,
    h: 200,
    label: "Close-up: glass edge, soft shadow"
  })), /*#__PURE__*/React.createElement(Slot, {
    id: "home-g3",
    w: 320,
    h: 480,
    label: "Phone in hand, evening interior"
  }), /*#__PURE__*/React.createElement(ProductShot, {
    src: IMG.rays,
    tone: "mist",
    pad: "8%",
    style: {
      width: 360,
      height: 480,
      aspectRatio: 'auto',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-gcol"
  }, /*#__PURE__*/React.createElement(Slot, {
    id: "home-g4",
    w: 260,
    h: 240,
    label: "Packaging, unboxed on linen"
  }), /*#__PURE__*/React.createElement(ProductShot, {
    src: IMG.front,
    pad: "10%",
    style: {
      width: 260,
      height: 228,
      aspectRatio: 'auto'
    }
  })), /*#__PURE__*/React.createElement(Slot, {
    id: "home-g5",
    w: 320,
    h: 480,
    mask: "inset(0 round 20px 20px 160px 160px)",
    label: "Reading on the sofa, low light"
  })))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "k-duo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-duo-card",
    style: {
      background: 'var(--luma-charcoal)',
      color: 'var(--luma-bone)'
    }
  }, /*#__PURE__*/React.createElement(EclipseMark, {
    size: 40
  }), /*#__PURE__*/React.createElement("h2", {
    className: "luma-h1"
  }, "How we test."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-inverse-secondary)',
      maxWidth: 360
    }
  }, "Every figure we publish comes with its source and its limits."), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "inverse",
    caps: false,
    iconRight: "arrow-right",
    onClick: () => go('science')
  }, "Read the results")), /*#__PURE__*/React.createElement("div", {
    className: "k-duo-card",
    style: {
      background: 'var(--luma-stone)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.front,
    alt: "",
    style: {
      height: 220,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    className: "luma-h2"
  }, "Small changes. Different light."), /*#__PURE__*/React.createElement(Button, {
    iconRight: "arrow-right",
    onClick: addToBag
  }, "Add to bag \u2014 ", money(PRODUCT.price)))))));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductPage.jsx
try { (() => {
function ProductPage({
  addToBag,
  go,
  initialDevice
}) {
  const {
    Button,
    Tag,
    QuantityStepper,
    Tabs,
    SpecList,
    Accordion,
    Icon,
    TextLink
  } = LDS;
  const [qty, setQty] = React.useState(1);
  const [device, setDevice] = React.useState(initialDevice || DEVICES[0]);
  const [tab, setTab] = React.useState('overview');
  const [view, setView] = React.useState(0);
  const [sticky, setSticky] = React.useState(false);
  const buyRef = React.useRef(null);
  const views = [{
    src: IMG.front,
    alt: 'LC–01 glass in front of a phone',
    pad: '9%'
  }, {
    src: IMG.rays,
    alt: 'Light passing through the conversion layer',
    pad: '6%'
  }, {
    src: IMG.hd,
    alt: 'Front view, glass offset over the phone',
    pad: '7%'
  }, {
    src: IMG.layers,
    alt: 'Exploded view of the five layers',
    pad: '5%'
  }];
  React.useEffect(() => {
    const el = buyRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setSticky(!e.isIntersecting && e.boundingClientRect.top < 0), {
      threshold: 0
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const add = () => addToBag(qty);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      font: 'var(--text-caption)',
      color: 'var(--text-tertiary)',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      color: 'inherit'
    }
  }, "Home"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", null, "LC\u201301")), /*#__PURE__*/React.createElement("div", {
    className: "k-pdp"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ProductShot, {
    src: views[view].src,
    alt: views[view].alt,
    pad: views[view].pad
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
      gap: 12
    }
  }, views.map((v, i) => /*#__PURE__*/React.createElement("button", {
    key: v.src,
    type: "button",
    "aria-label": v.alt,
    onClick: () => setView(i),
    style: {
      padding: 0,
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      borderRadius: 12,
      outline: view === i ? '1px solid var(--luma-charcoal)' : 'none',
      outlineOffset: 3
    }
  }, /*#__PURE__*/React.createElement(ProductShot, {
    src: v.src,
    pad: "10%",
    radius: "var(--radius-md)"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "k-buy",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    tone: "accent"
  }, "New")), /*#__PURE__*/React.createElement("h1", {
    className: "luma-h1"
  }, PRODUCT.name), /*#__PURE__*/React.createElement("span", {
    className: "luma-lead",
    style: {
      marginTop: -8
    }
  }, PRODUCT.descriptor)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-h2)',
      fontFamily: 'var(--font-display)'
    }
  }, money(PRODUCT.price)), /*#__PURE__*/React.createElement("p", {
    className: "luma-body",
    style: {
      maxWidth: 460
    }
  }, "9H tempered glass with quantum dots that absorb a portion of blue light and re-emit it at longer red wavelengths. Includes a dedicated applicator."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "luma-caption"
  }, "Device \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, device)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, DEVICES.map(d => /*#__PURE__*/React.createElement(Button, {
    key: d,
    size: "sm",
    caps: false,
    variant: device === d ? 'dark' : 'outline',
    onClick: () => setDevice(d)
  }, d)))), /*#__PURE__*/React.createElement("div", {
    ref: buyRef,
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    onChange: setQty,
    max: 5
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: add,
    style: {
      flex: 1
    }
  }, "Add to bag \u2014 ", money(PRODUCT.price * qty))), /*#__PURE__*/React.createElement("div", {
    className: "k-trust",
    style: {
      marginTop: -6
    }
  }, /*#__PURE__*/React.createElement("span", null, "Applicator included"), /*#__PURE__*/React.createElement("span", null, "\u2248 91% transmittance"), /*#__PURE__*/React.createElement("span", null, "0.33 mm")), /*#__PURE__*/React.createElement(SpecList, {
    items: [{
      label: 'Blue-light reduction',
      value: '17.17%',
      note: 'TÜV report, test sample'
    }, {
      label: 'Surface hardness',
      value: '9H'
    }, {
      label: 'Coating',
      value: 'Oleophobic'
    }]
  }))))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(Container, {
    narrow: true
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      id: 'overview',
      label: 'Overview'
    }, {
      id: 'specs',
      label: 'Specifications'
    }, {
      id: 'install',
      label: 'Installation'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 40,
      minHeight: 280
    }
  }, tab === 'overview' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-split",
    style: {
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "luma-h2"
  }, "Not just protection. Light conversion."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "luma-body"
  }, "Most screen protectors only protect. LC\u201301 also changes the light that passes through it."), /*#__PURE__*/React.createElement("p", {
    className: "luma-body"
  }, "Quantum dots within the glass absorb part of the blue light from your display and release it at longer, red wavelengths."))), /*#__PURE__*/React.createElement(WaveDiagram, null)), tab === 'specs' && /*#__PURE__*/React.createElement(SpecList, {
    items: [{
      label: 'Material',
      value: 'Tempered glass, 9H'
    }, {
      label: 'Thickness',
      value: '0.33 mm'
    }, {
      label: 'Coating',
      value: 'Oleophobic, fingerprint-resistant'
    }, {
      label: 'Light transmission',
      value: '≈ 91%',
      note: 'Product specification'
    }, {
      label: 'Blue-light reduction',
      value: '17.17%',
      note: 'Reported TÜV test sample'
    }, {
      label: 'Conversion efficiency',
      value: '28.72%',
      note: 'Manufacturer-defined test metric — not the share of all blue light converted'
    }, {
      label: 'In the box',
      value: 'LC–01 glass, applicator'
    }]
  }), tab === 'install' && /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: 0,
    items: [{
      title: '1. Clean the screen',
      content: 'Wipe the display, then lift any remaining dust.'
    }, {
      title: '2. Fit the applicator',
      content: 'Place the applicator over your phone. It lines the glass up for you.'
    }, {
      title: '3. Pull the tab',
      content: 'Pull the tab, wait ten seconds, then lift the applicator away.'
    }]
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "stone"
  }, /*#__PURE__*/React.createElement(Container, {
    narrow: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "luma-h2"
  }, "More than protection."), /*#__PURE__*/React.createElement(TextLink, {
    href: "#",
    arrow: true,
    onClick: e => {
      e.preventDefault();
      go('science');
    }
  }, "How we tested")), /*#__PURE__*/React.createElement(CompareTable, {
    highlight: "var(--luma-bone)"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "k-sticky",
    style: {
      transform: sticky ? 'none' : 'translateY(110%)'
    },
    "aria-hidden": !sticky
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.front,
    alt: "",
    style: {
      width: 44,
      height: 44,
      objectFit: 'contain',
      background: 'var(--luma-stone)',
      borderRadius: 8,
      padding: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, PRODUCT.name, " \xB7 ", device), /*#__PURE__*/React.createElement("span", {
    className: "luma-caption"
  }, money(PRODUCT.price * qty))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: add
  }, "Add to bag")));
}
window.ProductPage = ProductPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SciencePage.jsx
try { (() => {
function SciencePage({
  go
}) {
  const {
    Button,
    MediaFrame,
    SpecList
  } = LDS;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 96
    }
  }, /*#__PURE__*/React.createElement(Container, {
    narrow: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "The science"), /*#__PURE__*/React.createElement("h1", {
    className: "luma-hero"
  }, "Light, reimagined."), /*#__PURE__*/React.createElement("p", {
    className: "luma-lead",
    style: {
      maxWidth: 560
    }
  }, "A plain explanation of what LC\u201301 does to the light from your screen, and how we measured it.")))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)',
      gap: 24
    },
    className: "k-sci-media"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--luma-mist)',
      borderRadius: 'var(--radius-lg)',
      padding: '48px 40px',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(WaveDiagram, {
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement(ProductShot, {
    src: IMG.rays,
    alt: "Light passing through the LC\u201301 conversion layer",
    pad: "6%"
  })))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(Container, {
    narrow: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-split",
    style: {
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "luma-h2"
  }, "What quantum dots do."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "luma-body"
  }, "Quantum dots are semiconductor particles a few nanometres across. Their size decides which colour of light they give off."), /*#__PURE__*/React.createElement("p", {
    className: "luma-body"
  }, "In LC\u201301, they are tuned to absorb part of the blue light a screen emits and re-emit that energy at longer, red wavelengths. The rest of the light passes through the glass unchanged."))))), /*#__PURE__*/React.createElement(Section, {
    tone: "stone"
  }, /*#__PURE__*/React.createElement(Container, {
    narrow: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-split",
    style: {
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "Test results"), /*#__PURE__*/React.createElement("h2", {
    className: "luma-h2"
  }, "Measured, not assumed.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(SpecList, {
    items: [{
      label: 'Blue-light reduction',
      value: '17.17%',
      note: 'Reported TÜV test sample'
    }, {
      label: 'Conversion efficiency',
      value: '28.72%',
      note: 'Manufacturer-defined test metric. It isn’t the share of all screen blue light that becomes red light.'
    }, {
      label: 'Light transmission',
      value: '≈ 91%',
      note: 'Product specification'
    }, {
      label: 'Glass thickness',
      value: '0.33 mm',
      note: 'Product specification'
    }]
  }), /*#__PURE__*/React.createElement("p", {
    className: "luma-caption"
  }, "These figures describe a measured sample. They are not clinical results, and LC\u201301 is not a medical device."))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Container, {
    narrow: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-split",
    style: {
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "luma-h2"
  }, "What we don\u2019t claim."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "luma-body"
  }, "We don\u2019t claim LC\u201301 improves sleep, eye health or circadian rhythm, and it isn\u2019t red-light therapy. We describe what it does to light, and show how we measured it."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconRight: "arrow-right",
    onClick: () => go('shop')
  }, "Shop LC\u201301")))))));
}
window.SciencePage = SciencePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SciencePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
// Shared layout helpers + product media for the Luma website kit.
const LDS = window.LumaDesignSystem_64bcc8;
const IMG = {
  front: '../../assets/product/lc01-front.png',
  rays: '../../assets/product/lc01-rays.png',
  hd: '../../assets/product/lc01-hd.png',
  layers: '../../assets/product/lc01-layers.png'
};
function Container({
  children,
  style,
  narrow
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "k-container",
    style: {
      maxWidth: narrow ? 960 : 'var(--container-max)',
      ...style
    }
  }, children);
}
function Section({
  children,
  tone = 'bone',
  style,
  id
}) {
  const bg = {
    bone: 'var(--bg-page)',
    stone: 'var(--bg-subtle)',
    mist: 'var(--bg-cool)',
    charcoal: 'var(--bg-inverse)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    className: "k-section",
    style: {
      background: bg,
      color: tone === 'charcoal' ? 'var(--text-inverse)' : 'var(--text-primary)',
      ...style
    }
  }, children);
}
function Overline({
  children,
  inverse,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "luma-overline",
    style: {
      display: 'block',
      color: inverse ? 'var(--text-inverse-secondary)' : 'var(--text-tertiary)',
      ...style
    }
  }, children);
}
function Step({
  n,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '12px/16px var(--font-body)',
      letterSpacing: '0.16em',
      color: 'var(--text-tertiary)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    className: "luma-h3"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "luma-body"
  }, children));
}

// Product cutout on a tonal panel. `pad` insets the image so it never touches the frame.
function ProductShot({
  src,
  alt = '',
  tone = 'stone',
  ratio = '1 / 1',
  pad = '8%',
  radius = 'var(--radius-lg)',
  style
}) {
  const bg = {
    stone: 'var(--luma-stone)',
    bone: 'var(--luma-bone)',
    mist: 'var(--luma-mist)'
  }[tone] || tone;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      borderRadius: radius,
      background: bg,
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: pad,
      width: `calc(100% - 2 * ${pad})`,
      height: `calc(100% - 2 * ${pad})`,
      objectFit: 'contain',
      display: 'block'
    }
  }));
}
const WAVE_IN = 'M0 150C4.6 129.5 8.9 110 14 110C19.1 110 23.4 129.5 28 150C32.6 170.5 36.9 190 42 190C47.1 190 51.4 170.5 56 150C60.6 129.5 64.9 110 70 110C75.1 110 79.4 129.5 84 150C88.6 170.5 92.9 190 98 190C103.1 190 107.4 170.5 112 150C116.6 129.5 120.9 110 126 110C131.1 110 135.4 129.5 140 150C144.6 170.5 148.9 190 154 190C159.1 190 163.4 170.5 168 150C172.6 129.5 176.9 110 182 110C187.1 110 191.4 129.5 196 150C200.6 170.5 204.9 190 210 190C215.1 190 219.4 170.5 224 150C228.6 129.5 232.9 110 238 110C243.1 110 247.4 129.5 252 150C256.6 170.5 260.9 190 266 190C271.1 190 275.4 170.5 280 150C284.6 129.5 288.9 110 294 110C299.1 110 303.4 129.5 308 150C312.6 170.5 316.9 190 322 190C327.1 190 331.4 170.5 336 150C340.6 129.5 344.9 110 350 110C355.1 110 359.4 129.5 364 150C368.6 170.5 372.9 190 378 190C383.1 190 387.4 170.5 392 150C396.6 129.5 400.9 110 406 110C411.1 110 415.4 129.5 420 150C424.6 170.5 428.9 190 434 190C439.1 190 443.4 170.5 448 150C452.6 129.5 456.9 110 462 110';
const WAVE_REST = 'M570 150C574.6 141.8 578.9 134 584 134C589.1 134 593.4 141.8 598 150C602.6 158.2 606.9 166 612 166C617.1 166 621.4 158.2 626 150C630.6 141.8 634.9 134 640 134C645.1 134 649.4 141.8 654 150C658.6 158.2 662.9 166 668 166C673.1 166 677.4 158.2 682 150C686.6 141.8 690.9 134 696 134C701.1 134 705.4 141.8 710 150C714.6 158.2 718.9 166 724 166C729.1 166 733.4 158.2 738 150C742.6 141.8 746.9 134 752 134C757.1 134 761.4 141.8 766 150C770.6 158.2 774.9 166 780 166C785.1 166 789.4 158.2 794 150C798.6 141.8 802.9 134 808 134C813.1 134 817.4 141.8 822 150C826.6 158.2 830.9 166 836 166C841.1 166 845.4 158.2 850 150C854.6 141.8 858.9 134 864 134C869.1 134 873.4 141.8 878 150C882.6 158.2 886.9 166 892 166C897.1 166 901.4 158.2 906 150C910.6 141.8 914.9 134 920 134C925.1 134 929.4 141.8 934 150C938.6 158.2 942.9 166 948 166C953.1 166 957.4 158.2 962 150C966.6 141.8 970.9 134 976 134C981.1 134 985.4 141.8 990 150C994.6 158.2 998.9 166 1004 166C1009.1 166 1013.4 158.2 1018 150C1022.6 141.8 1026.9 134 1032 134';
const WAVE_OUT = 'M570 150C576.4 129.5 582.5 110 589.6 110C596.7 110 602.8 129.5 609.2 150C615.6 170.5 621.7 190 628.8 190C635.9 190 642 170.5 648.4 150C654.8 129.5 660.9 110 668 110C675.1 110 681.2 129.5 687.6 150C694 170.5 700.1 190 707.2 190C714.3 190 720.4 170.5 726.8 150C733.2 129.5 739.3 110 746.4 110C753.5 110 759.6 129.5 766 150C772.4 170.5 778.5 190 785.6 190C792.7 190 798.8 170.5 805.2 150C811.6 129.5 817.7 110 824.8 110C831.9 110 838 129.5 844.4 150C850.8 170.5 856.9 190 864 190C871.1 190 877.2 170.5 883.6 150C890 129.5 896.1 110 903.2 110C910.3 110 916.4 129.5 922.8 150C929.2 170.5 935.3 190 942.4 190C949.5 190 955.6 170.5 962 150C968.4 129.5 974.5 110 981.6 110C988.7 110 994.8 129.5 1001.2 150C1007.6 170.5 1013.7 190 1020.8 190';
function WaveDiagram({
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1040 300",
    style: {
      width: '100%',
      height: 'auto',
      display: 'block',
      overflow: 'visible'
    },
    role: "img",
    "aria-label": "Blue light enters the glass; longer red wavelengths leave it"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "150",
    x2: "1040",
    y2: "150",
    stroke: "#C2C0BB",
    strokeWidth: "2",
    strokeDasharray: "6 10"
  }), /*#__PURE__*/React.createElement("path", {
    d: WAVE_IN,
    fill: "none",
    stroke: "#1F2326",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: WAVE_REST,
    fill: "none",
    stroke: "#1F2326",
    strokeOpacity: ".3",
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: WAVE_OUT,
    fill: "none",
    stroke: "#D65D42",
    strokeWidth: "4",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "466",
    y: "6",
    width: "100",
    height: "288",
    rx: "26",
    fill: "#F5BFA9",
    fillOpacity: ".5",
    stroke: "#1F2326",
    strokeWidth: "2"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      font: 'var(--text-caption)',
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Blue light in"), /*#__PURE__*/React.createElement("span", null, "LC\u201301"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--luma-orange-deep)'
    }
  }, "Longer red wavelengths out")));
}
function Check({
  color = '#1F2326'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-label": "Yes"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }));
}
function CompareTable({
  highlight = 'var(--luma-stone)'
}) {
  const rows = [['9H surface hardness', true, true], ['Oleophobic coating', 'Varies', true], ['Converts a portion of blue light', '—', 'accent'], ['Measured blue-light reduction', '—', '17.17%*'], ['Applicator included', 'Varies', true]];
  const cell = v => v === true ? /*#__PURE__*/React.createElement(Check, null) : v === 'accent' ? /*#__PURE__*/React.createElement(Check, {
    color: "#D65D42"
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: v.endsWith('*') ? 'var(--text-primary)' : 'var(--text-tertiary)',
      fontWeight: v.endsWith('*') ? 500 : 400
    }
  }, v);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-compare"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-compare-h",
    style: {
      textAlign: 'left'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "k-compare-h"
  }, "Standard"), /*#__PURE__*/React.createElement("span", {
    className: "k-compare-h k-compare-luma",
    style: {
      background: highlight,
      borderRadius: '16px 16px 0 0'
    }
  }, /*#__PURE__*/React.createElement(LDS.Logo, {
    height: 20
  })), rows.map(([label, a, b]) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: label
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-compare-c",
    style: {
      justifyContent: 'flex-start',
      textAlign: 'left'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "k-compare-c"
  }, cell(a)), /*#__PURE__*/React.createElement("span", {
    className: "k-compare-c k-compare-luma",
    style: {
      background: highlight
    }
  }, cell(b))))), /*#__PURE__*/React.createElement("span", {
    className: "luma-caption"
  }, "*T\xDCV report, test sample. Standard = typical tempered-glass protector."));
}
const PRODUCT = {
  name: 'Luma LC–01',
  descriptor: 'Quantum-Dot Screen Protector',
  price: 39
}; // price is a placeholder
const DEVICES = ['iPhone 16 Pro', 'iPhone 16 Pro Max', 'iPhone 16', 'iPhone 16 Plus']; // placeholder model list
const money = n => `£${n.toFixed(0)}`;

// Seamless horizontal ticker. Content is rendered twice; the track slides by half its width.
function Marquee({
  children,
  duration = 40,
  gap = 48,
  className = '',
  style
}) {
  const half = hidden => /*#__PURE__*/React.createElement("div", {
    className: "k-marquee-half",
    "aria-hidden": hidden || undefined,
    style: {
      gap,
      paddingRight: gap
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    className: 'k-marquee ' + className,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-marquee-track",
    style: {
      animationDuration: duration + 's'
    }
  }, half(false), half(true)));
}
Object.assign(window, {
  LDS,
  IMG,
  Container,
  Section,
  Overline,
  Step,
  ProductShot,
  WaveDiagram,
  CompareTable,
  Check,
  PRODUCT,
  DEVICES,
  money,
  Marquee
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.EclipseMark = __ds_scope.EclipseMark;

__ds_ns.WORDMARK_PATH = __ds_scope.WORDMARK_PATH;

__ds_ns.ECLIPSE = __ds_scope.ECLIPSE;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.MediaFrame = __ds_scope.MediaFrame;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SpecList = __ds_scope.SpecList;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
