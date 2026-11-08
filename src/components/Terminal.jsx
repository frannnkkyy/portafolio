import { useEffect, useState } from 'react';
import { useLanguage, useTranslate } from '../i18n';
import { terminal } from '../content';
import { WindowPane, useInView } from './ui';

export function Terminal() {
  const { lang } = useLanguage();
  const t = useTranslate();
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [lines, setLines] = useState([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!inView) return undefined;

    const source = terminal[lang];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let cancelled = false;
    const pending = [];

    setLines([]);
    setFinished(false);

    if (reducedMotion) {
      setLines(
        source.map((line) =>
          line.output !== undefined
            ? { kind: 'output', text: line.output }
            : { kind: 'command', prompt: line.prompt, text: line.command }
        )
      );
      setFinished(true);
      return undefined;
    }

    const schedule = (callback, delay) => {
      const timer = window.setTimeout(() => {
        if (!cancelled) callback();
      }, delay);
      pending.push(timer);
    };

    let lineIndex = 0;

    const nextLine = () => {
      if (cancelled) return;
      if (lineIndex >= source.length) {
        setFinished(true);
        return;
      }

      const line = source[lineIndex];
      lineIndex += 1;

      if (line.output !== undefined) {
        schedule(() => {
          setLines((current) => [...current, { kind: 'output', text: line.output }]);
          nextLine();
        }, 220);
        return;
      }

      setLines((current) => [
        ...current,
        { kind: 'command', prompt: line.prompt, text: '' },
      ]);

      const characters = line.command.split('');
      let characterIndex = 0;

      const typeCharacter = () => {
        if (cancelled) return;
        characterIndex += 1;
        const partial = line.command.slice(0, characterIndex);
        setLines((current) => {
          const next = [...current];
          next[next.length - 1] = { ...next[next.length - 1], text: partial };
          return next;
        });
        if (characterIndex < characters.length) {
          schedule(typeCharacter, 34);
        } else {
          schedule(nextLine, 320);
        }
      };

      schedule(typeCharacter, 90);
    };

    schedule(nextLine, 220);

    return () => {
      cancelled = true;
      pending.forEach((timer) => window.clearTimeout(timer));
    };
  }, [inView, lang]);

  return (
    <WindowPane title={t(terminal.title)} className="terminal-pane">
      <div className="terminal-body" ref={ref}>
        {lines.map((line, index) =>
          line.kind === 'output' ? (
            <div className="tl out" key={`out-${index}`}>
              {line.text}
            </div>
          ) : (
            <div className="tl" key={`cmd-${index}`}>
              <span className="prompt">{line.prompt} </span>
              {line.text}
            </div>
          )
        )}
        {!finished ? <span className="terminal-cursor" aria-hidden="true" /> : null}
      </div>
    </WindowPane>
  );
}
