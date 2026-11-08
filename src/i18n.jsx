import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

/** Bilingual string: { es, en } */
export const bi = (es, en) => ({ es, en });

const LanguageContext = createContext(null);
const STORAGE_KEY = 'portfolio-lang';

function readSavedLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'en') return saved;
  } catch {
    /* localStorage can be blocked */
  }
  return 'es';
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readSavedLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState(next === 'en' ? 'en' : 'es');
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}

/** Returns a function that resolves { es, en } values for the active language. */
export function useTranslate() {
  const { lang } = useLanguage();
  return useCallback(
    (value) => {
      if (value == null) return '';
      if (typeof value === 'string') return value;
      return value[lang] ?? value.es ?? '';
    },
    [lang]
  );
}
