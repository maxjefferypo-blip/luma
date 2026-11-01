import {createContext, type ReactNode, useContext, useEffect, useId, useState} from 'react';
import {Icon} from '~/components/luma/Icon';

type AsideType = 'search' | 'cart' | 'mobile' | 'closed';
type AsideContextValue = {
  type: AsideType;
  open: (mode: AsideType) => void;
  close: () => void;
};

/**
 * Slide-in drawer from the right over a Charcoal 32% scrim (BagDrawer in the website kit).
 * Used for the bag and the mobile menu. Escape or a click on the scrim closes it.
 */
export function Aside({children, heading, type}: {children?: ReactNode; type: AsideType; heading: ReactNode}) {
  const {type: activeType, close} = useAside();
  const expanded = type === activeType;
  const id = useId();

  useEffect(() => {
    if (!expanded) return;
    const abortController = new AbortController();
    document.addEventListener(
      'keydown',
      (event: KeyboardEvent) => {
        if (event.key === 'Escape') close();
      },
      {signal: abortController.signal},
    );
    const {overflow} = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      abortController.abort();
      document.body.style.overflow = overflow;
    };
  }, [close, expanded]);

  return (
    <div className={`l-drawer${expanded ? ' expanded' : ''}`} role="dialog" aria-modal aria-labelledby={id} aria-hidden={!expanded}>
      <button type="button" className="l-drawer-scrim" onClick={close} aria-label="Close" tabIndex={-1} />
      <aside className="l-drawer-panel">
        <div className="l-drawer-head">
          <span id={id} className="luma-h3">
            {heading}
          </span>
          <button type="button" className="l-icon-btn" onClick={close} aria-label="Close" style={{color: 'var(--text-primary)'}}>
            <Icon name="x" size={22} />
          </button>
        </div>
        <div className="l-drawer-body">{children}</div>
      </aside>
    </div>
  );
}

const AsideContext = createContext<AsideContextValue | null>(null);

Aside.Provider = function AsideProvider({children}: {children: ReactNode}) {
  const [type, setType] = useState<AsideType>('closed');
  return <AsideContext.Provider value={{type, open: setType, close: () => setType('closed')}}>{children}</AsideContext.Provider>;
};

export function useAside() {
  const aside = useContext(AsideContext);
  if (!aside) {
    throw new Error('useAside must be used within an AsideProvider');
  }
  return aside;
}
