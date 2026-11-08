import { useEffect, useState } from 'react';
import { ui } from './content';
import { useTranslate } from './i18n';
import { Dock, MenuBar, ScrollProgress } from './components/Chrome';
import { CVViewer, Spotlight } from './components/Overlays';
import {
  About,
  Contact,
  Footer,
  Hero,
  Journey,
  Quote,
  Skills,
  TechStack,
} from './components/Sections';
import { Projects } from './components/Projects';
import { TrafficLights } from './components/ui';

export default function App() {
  const t = useTranslate();
  const [loaded, setLoaded] = useState(false);
  const [spotlightOpen, setSpotlightOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!window.location.hash) return undefined;
    const timer = window.setTimeout(() => {
      const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSpotlightOpen(true);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const openCV = () => setCvOpen(true);

  return (
    <>
      <a className="skip-link" href="#main">
        {t(ui.skipToContent)}
      </a>

      <MenuBar onSearch={() => setSpotlightOpen(true)} />
      <ScrollProgress />

      <main id="main" className={`os-window${loaded ? ' loaded' : ''}`}>
        <div className="titlebar">
          <TrafficLights />
          <div className="titlebar-title">{t(ui.titlebar)}</div>
        </div>

        <div className="window-body">
          <Hero onOpenCV={openCV} />
          <About />
          <Journey />
          <TechStack />
          <Skills />
          <Projects />
          <Quote />
          <Contact />
          <Footer />
        </div>
      </main>

      <Dock />

      <Spotlight
        open={spotlightOpen}
        onClose={() => setSpotlightOpen(false)}
        onOpenCV={openCV}
      />
      <CVViewer open={cvOpen} onClose={() => setCvOpen(false)} />
    </>
  );
}
