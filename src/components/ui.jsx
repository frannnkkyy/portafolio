import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { useTranslate, bi } from '../i18n';

/**
 * Small shared pieces: reveal-on-scroll, window chrome and carousel helpers.
 * Keeping them together avoids a component file per 10 lines.
 */

export function useInView({ threshold = 0.15, rootMargin = '0px 0px -40px 0px', once = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}

export function Reveal({ as: Tag = 'div', className = '', delay = 0, style, children, ...rest }) {
  const [ref, inView] = useInView();
  const classes = ['reveal', inView && 'in-view', className].filter(Boolean).join(' ');

  return (
    <Tag
      ref={ref}
      className={classes}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function TrafficLights({ inline = false }) {
  return (
    <div className={`traffic${inline ? ' inline' : ''}`} aria-hidden="true">
      <span className="dot red" />
      <span className="dot yellow" />
      <span className="dot green" />
    </div>
  );
}

export function WindowPane({
  title,
  className = '',
  contentClassName = '',
  reveal = true,
  children,
  ...rest
}) {
  const Wrapper = reveal ? Reveal : 'div';
  return (
    <Wrapper className={['pane', className].filter(Boolean).join(' ')} {...rest}>
      <div className="pane-bar">
        <TrafficLights inline />
        <span className="pane-title">{title}</span>
      </div>
      <div className={['pane-content', contentClassName].filter(Boolean).join(' ')}>{children}</div>
    </Wrapper>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, className = '' }) {
  return (
    <Reveal className={['section-head', className].filter(Boolean).join(' ')}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </Reveal>
  );
}

/** Autoplay index shared by every project frame. */
export function useCarousel(length, interval = 3800) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (length <= 1 || paused) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = setInterval(() => setIndex((current) => (current + 1) % length), interval);
    return () => clearInterval(timer);
  }, [length, interval, paused]);

  const go = useCallback(
    (next) => {
      if (length <= 0) return;
      setIndex(((next % length) + length) % length);
    },
    [length]
  );

  const handlers = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocus: () => setPaused(true),
    onBlur: () => setPaused(false),
  };

  return { index, go, handlers };
}

export function CarouselDots({ count, index, onSelect, className = 'dots' }) {
  const t = useTranslate();
  const id = useId();
  if (count <= 1) return null;

  return (
    <div className={className}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={`${id}-${i}`}
          type="button"
          className={i === index ? 'active' : ''}
          aria-label={`${t(bi('Imagen', 'Image'))} ${i + 1}`}
          aria-current={i === index ? 'true' : undefined}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  );
}

export function PreviewPlaceholder({ icon, title, label, note, phone = false, colors }) {
  const style = colors ? { '--ph-a': colors[0], '--ph-b': colors[1] } : undefined;
  return (
    <div
      className={`preview-placeholder${phone ? ' phone' : ''}`}
      style={style}
      role="img"
      aria-label={`${title}. ${label}`}
    >
      <div className="preview-placeholder-icon" aria-hidden="true">
        {icon}
      </div>
      <strong>{title}</strong>
      <span>{label}</span>
      {note ? <small>{note}</small> : null}
    </div>
  );
}
