import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { profile, navItems, ui } from '../content';
import { projects } from '../projects';
import { useLanguage, useTranslate } from '../i18n';
import { asset } from '../asset';
import { TrafficLights } from './ui';

export function Spotlight({ open, onClose, onOpenCV }) {
  const t = useTranslate();
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  const items = useMemo(
    () => [
      ...navItems.map((item) => ({ ...item })),
      ...projects.map((project) => ({
        icon: project.icon,
        color: project.iconGradient,
        label: project.name,
        sub: project.type,
        href: `#project-${project.id}`,
      })),
      {
        icon: '📄',
        color: 'linear-gradient(180deg,#c9a8ff,#8a4fd6 50%,#5f2fa8 51%,#9a5fe0)',
        label: ui.spotlight.cv,
        sub: ui.spotlight.cvSub,
        action: 'cv',
      },
      {
        icon: '📧',
        color: 'linear-gradient(180deg,#8fd0ff,#1e8fe1 50%,#0c6ac9 51%,#2489e5)',
        label: ui.spotlight.email,
        sub: profile.email,
        href: `mailto:${profile.email}`,
      },
      {
        icon: 'in',
        color: 'linear-gradient(180deg,#8fd0ff,#1e8fe1 50%,#0c6ac9 51%,#2489e5)',
        label: ui.spotlight.linkedin,
        sub: 'linkedin.com/in/fcoocarlos',
        href: profile.links.linkedin,
      },
      {
        icon: '⭐',
        color: 'linear-gradient(180deg,#ffd58f,#febc2e 50%,#c98a10 51%,#ffcc55)',
        label: ui.spotlight.github,
        sub: 'github.com/frannnkkyy',
        href: profile.links.github,
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return items;
    return items.filter((item) =>
      `${t(item.label)} ${t(item.sub)}`.toLowerCase().includes(needle)
    );
  }, [items, query, t]);

  const active = filtered.length ? Math.min(activeIndex, filtered.length - 1) : -1;

  const activate = useCallback(
    (item) => {
      if (!item) return;
      if (item.action === 'cv') {
        onClose();
        onOpenCV();
        return;
      }

      onClose();
      if (item.href?.startsWith('#')) {
        window.setTimeout(() => {
          document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 60);
      } else if (item.href?.startsWith('mailto:')) {
        window.location.href = item.href;
      } else if (item.href) {
        window.open(item.href, '_blank', 'noopener,noreferrer');
      }
    },
    [onClose, onOpenCV]
  );

  useEffect(() => {
    if (!open) return undefined;
    setQuery('');
    setActiveIndex(0);
    document.body.classList.add('modal-open');
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 30);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.classList.remove('modal-open');
    };
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        setActiveIndex((current) => Math.min(current + 1, filtered.length - 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setActiveIndex((current) => Math.max(current - 1, 0));
      } else if (event.key === 'Enter') {
        event.preventDefault();
        activate(filtered[active]);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, filtered, active, activate, onClose]);

  if (!open) return null;

  return (
    <div
      className="spotlight-overlay open"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="spotlight-box" role="dialog" aria-modal="true" aria-label={t(ui.searchAria)}>
        <div className="spotlight-input-row">
          <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.6" />
            <line x1="14" y1="14" x2="18.5" y2="18.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t(ui.spotlight.placeholder)}
            autoComplete="off"
            aria-label={t(ui.spotlight.placeholder)}
          />
          <kbd>esc</kbd>
        </div>

        <div className="spotlight-results" role="listbox" aria-label={t(ui.searchAria)}>
          {filtered.length === 0 ? (
            <div className="spotlight-empty">{t(ui.spotlight.empty)}</div>
          ) : (
            filtered.map((item, index) => (
              <button
                key={`${t(item.label)}-${index}`}
                type="button"
                role="option"
                aria-selected={index === active}
                className={`spotlight-item${index === active ? ' active' : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => activate(item)}
              >
                <span className="si-icon" style={{ background: item.color }} aria-hidden="true">
                  {item.icon}
                </span>
                <span className="si-text">
                  <span className="si-label">{t(item.label)}</span>
                  <span className="si-sub">{t(item.sub)}</span>
                </span>
                <span className="si-arrow" aria-hidden="true">
                  ↵
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export function CVViewer({ open, onClose }) {
  const { lang } = useLanguage();
  const t = useTranslate();
  const [version, setVersion] = useState(lang === 'en' ? 'resume' : 'curriculum');
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    setVersion(lang === 'en' ? 'resume' : 'curriculum');
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 50);
    return () => window.clearTimeout(focusTimer);
  }, [open, lang]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('modal-open');
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [open, onClose]);

  if (!open) return null;

  const url = asset(profile.cv[version]);
  const fileName =
    version === 'resume' ? 'Carlos-Constantino-Resume.pdf' : 'Carlos-Constantino-CV.pdf';

  return (
    <div
      className="cv-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="pane cv-window" role="dialog" aria-modal="true" aria-labelledby="cvDialogTitle">
        <div className="pane-bar">
          <TrafficLights inline />
          <span className="pane-title" id="cvDialogTitle">
            {t(ui.cv.title)}
          </span>
          <button
            ref={closeRef}
            className="cv-close"
            type="button"
            onClick={onClose}
            aria-label={t(ui.cv.closeAria)}
          >
            ×
          </button>
        </div>

        <div className="cv-toolbar">
          <div className="cv-tabs" role="tablist" aria-label={t(ui.cv.versionsAria)}>
            <button
              type="button"
              role="tab"
              aria-selected={version === 'curriculum'}
              className={`cv-tab${version === 'curriculum' ? ' active' : ''}`}
              onClick={() => setVersion('curriculum')}
            >
              {t(ui.cv.curriculum)}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={version === 'resume'}
              className={`cv-tab${version === 'resume' ? ' active' : ''}`}
              onClick={() => setVersion('resume')}
            >
              {t(ui.cv.resume)}
            </button>
          </div>
          <a className="btn aqua cv-download" href={url} download={fileName}>
            {t(ui.cv.download)}
          </a>
        </div>

        <iframe className="cv-frame" src={url} title={t(ui.cv.frameTitle)} />
        <p className="cv-fallback">{t(ui.cv.fallback)}</p>
      </div>
    </div>
  );
}
