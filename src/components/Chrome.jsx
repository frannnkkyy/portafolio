import { useEffect, useRef, useState } from 'react';
import { navItems, ui } from '../content';
import { useLanguage, useTranslate } from '../i18n';

function useClock(lang) {
  const format = () =>
    new Date().toLocaleTimeString(lang === 'es' ? 'es-MX' : 'en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });

  const [time, setTime] = useState(format);

  useEffect(() => {
    setTime(format());
    const timer = setInterval(() => setTime(format()), 15000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return time;
}

export function MenuBar({ onSearch }) {
  const { lang, setLang } = useLanguage();
  const t = useTranslate();
  const clock = useClock(lang);

  return (
    <header className="menubar">
      <div className="menubar-left">
        <span className="apple-logo" aria-hidden="true">
          🍎
        </span>
        <b>{t(ui.menu.portfolio)}</b>
        <span>{t(ui.menu.file)}</span>
        <span>{t(ui.menu.edit)}</span>
        <span>{t(ui.menu.view)}</span>
        <span>{t(ui.menu.window)}</span>
      </div>

      <div className="menubar-right">
        <button
          className="spotlight-btn"
          type="button"
          onClick={onSearch}
          aria-label={t(ui.searchAria)}
          title={`${t(ui.search)} (⌘K)`}
        >
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.6" />
            <line x1="14" y1="14" x2="18.5" y2="18.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span>{t(ui.search)}</span>
          <span className="spotlight-hint" aria-hidden="true">
            ⌘K
          </span>
        </button>

        <div className="seg" role="group" aria-label={t(ui.language)}>
          <button
            type="button"
            className={lang === 'es' ? 'active' : ''}
            aria-pressed={lang === 'es'}
            onClick={() => setLang('es')}
          >
            ES
          </button>
          <button
            type="button"
            className={lang === 'en' ? 'active' : ''}
            aria-pressed={lang === 'en'}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>

        <span id="clock">{clock}</span>
      </div>
    </header>
  );
}

export function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      const percent = max > 0 ? (root.scrollTop / max) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${percent}%`;
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-bar" ref={barRef} />
    </div>
  );
}

export function Dock() {
  const t = useTranslate();
  const dockRef = useRef(null);

  useEffect(() => {
    const dock = dockRef.current;
    if (!dock) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (window.matchMedia('(max-width:820px)').matches) return undefined;

    const icons = [...dock.querySelectorAll('.dock-icon')];
    const maxDistance = 92;
    const maxScale = 1.22;

    const onMove = (event) => {
      icons.forEach((icon) => {
        const rect = icon.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const distance = Math.abs(event.clientX - center);
        const proximity = Math.max(0, 1 - distance / maxDistance);
        const scale = 1 + proximity * (maxScale - 1);
        icon.style.transform = `translateY(${-proximity * 6}px) scale(${scale})`;
      });
    };

    const onLeave = () => {
      icons.forEach((icon) => {
        icon.style.transform = '';
      });
    };

    dock.addEventListener('mousemove', onMove);
    dock.addEventListener('mouseleave', onLeave);

    return () => {
      dock.removeEventListener('mousemove', onMove);
      dock.removeEventListener('mouseleave', onLeave);
      onLeave();
    };
  }, []);

  return (
    <div className="dock-wrap">
      <nav className="dock" ref={dockRef} aria-label={t(ui.navLabel)}>
        {navItems.map((item) => (
          <a key={item.href} className="dock-item" href={item.href} aria-label={t(item.label)}>
            <div className="dock-icon" style={{ background: item.color }} aria-hidden="true">
              {item.icon}
            </div>
            <div className="dock-refl" style={{ background: item.color }} aria-hidden="true" />
            <span className="dock-label">{t(item.label)}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
