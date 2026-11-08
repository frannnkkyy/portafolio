import { useEffect, useState } from 'react';
import {
  profile,
  ui,
  education,
  timeline,
  experience,
  techGroups,
  softSkills,
  technicalFocus,
  certifications,
  languages,
} from '../content';
import { useTranslate } from '../i18n';
import { Reveal, SectionHeading, WindowPane, useInView } from './ui';
import { Terminal } from './Terminal';

function FolderIcon() {
  return (
    <div className="icon-wrap" aria-hidden="true">
      <div className="folder-icon">
        <svg viewBox="0 0 60 46" fill="none">
          <defs>
            <linearGradient id="folderGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffe985" />
              <stop offset="45%" stopColor="#ffcc33" />
              <stop offset="46%" stopColor="#f5b800" />
              <stop offset="100%" stopColor="#ffdb5c" />
            </linearGradient>
          </defs>
          <path
            d="M0 8C0 5.79 1.79 4 4 4H22L27 9H56C58.21 9 60 10.79 60 13V40C60 42.21 58.21 44 56 44H4C1.79 44 0 42.21 0 40V8Z"
            fill="url(#folderGrad)"
            stroke="#c98a10"
            strokeWidth="0.6"
          />
        </svg>
      </div>
      <div className="folder-reflect">
        <svg viewBox="0 0 60 46" fill="none">
          <path
            d="M0 8C0 5.79 1.79 4 4 4H22L27 9H56C58.21 9 60 10.79 60 13V40C60 42.21 58.21 44 56 44H4C1.79 44 0 42.21 0 40V8Z"
            fill="#ffcc33"
          />
        </svg>
      </div>
    </div>
  );
}

export function Hero({ onOpenCV }) {
  const t = useTranslate();

  return (
    <section className="hero" id="top">
      <WindowPane title={t(ui.heroPane)} className="hero-pane">
        <FolderIcon />
        <div>
          <h1 className="hero-name">{profile.name}</h1>
          <div className="hero-role">
            {t(profile.role)} | {t(profile.focus)}
          </div>
          <div className="availability-badge">{t(profile.availability)}</div>
          <p className="hero-summary">{t(profile.summary)}</p>

          <div className="hero-quick-links" aria-label={t(ui.navLabel)}>
            <a className="hero-quick-link email-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a
              className="hero-quick-link"
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="hero-quick-link"
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <button className="hero-quick-link" type="button" onClick={onOpenCV}>
              {t(ui.viewCV)}
            </button>
          </div>

          <div className="profile-meta">
            <div className="profile-meta-item">
              <span className="k">{t(profile.meta.location)}</span>
              <span className="v">{t(profile.location)}</span>
            </div>
            <div className="profile-meta-item">
              <span className="k">{t(profile.meta.status)}</span>
              <span className="v">{t(profile.availability)}</span>
            </div>
            <div className="profile-meta-item">
              <span className="k">{t(profile.meta.languages)}</span>
              <span className="v">{t(profile.languages)}</span>
            </div>
          </div>
        </div>
      </WindowPane>
    </section>
  );
}

export function About() {
  const t = useTranslate();

  return (
    <section id="about">
      <SectionHeading eyebrow={t(ui.about.eyebrow)} title={t(ui.about.heading)} />
      <WindowPane title={t(ui.paneAbout)} className="about-pane">
        {ui.about.paragraphs.map((paragraph, index) => (
          <p key={index}>{t(paragraph)}</p>
        ))}
      </WindowPane>
      <Terminal />
    </section>
  );
}

export function Journey() {
  const t = useTranslate();

  return (
    <section id="journey">
      <SectionHeading
        eyebrow={t(ui.journey.eyebrow)}
        title={t(ui.journey.heading)}
        subtitle={t(ui.journey.sub)}
      />

      <div className="journey-grid">
        <WindowPane title={t(ui.journey.eduLabel)}>
          <div className="timeline">
            {education.map((item, index) => (
              <div className="t-item" key={index}>
                <span className="t-date">{t(item.date)}</span>
                <h3>{t(item.title)}</h3>
                <span className="org">{item.org}</span>
              </div>
            ))}
          </div>

          <div className="education-progress">
            <h3>{t(ui.journey.timelineTitle)}</h3>
            <ol className="clean-timeline">
              {timeline.map((item) => (
                <li key={item.year}>
                  <time>{item.year}</time>
                  <span>{t(item.text)}</span>
                </li>
              ))}
            </ol>
          </div>
        </WindowPane>

        <WindowPane title={t(ui.journey.expLabel)}>
          {experience.map((job, index) => (
            <div className="exp-item" key={index}>
              <div className="exp-top">
                <div>
                  <h4>{t(job.company)}</h4>
                  <span className="role-sub">{t(job.role)}</span>
                </div>
                <div className="date">{t(job.date)}</div>
              </div>
              <ul>
                {job.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{t(bullet)}</li>
                ))}
              </ul>
            </div>
          ))}
        </WindowPane>
      </div>
    </section>
  );
}

export function TechStack() {
  const t = useTranslate();

  return (
    <div className="pre-skills">
      <WindowPane title={t(ui.paneTech)} contentClassName="tech-groups">
        {techGroups.map((group) => (
          <div className="tech-group" key={t(group.title)}>
            <strong>{t(group.title)}</strong>
            <div className="chip-grid">
              {group.items.map((item) => (
                <div className="chip" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </WindowPane>
    </div>
  );
}

export function Skills() {
  const t = useTranslate();

  return (
    <section id="skills">
      <SectionHeading
        eyebrow={t(ui.skills.eyebrow)}
        title={t(ui.skills.heading)}
        subtitle={t(ui.skills.sub)}
      />

      <div className="skills-grid">
        <WindowPane title={t(ui.paneToolkit)}>
          <div className="skills-block">
            <span className="block-label">{t(ui.skills.softLabel)}</span>
            <div className="chip-grid">
              {softSkills.map((skill) => (
                <div className="chip soft" key={t(skill)}>
                  {t(skill)}
                </div>
              ))}
            </div>
          </div>

          <div className="skills-block">
            <span className="block-label">{t(ui.skills.focusLabel)}</span>
            <div className="chip-grid">
              {technicalFocus.map((item) => (
                <div className="chip" key={t(item)}>
                  {t(item)}
                </div>
              ))}
            </div>
          </div>
        </WindowPane>

        <WindowPane title={t(ui.paneCerts)}>
          <div className="skills-block">
            <span className="block-label">{t(ui.skills.certLabel)}</span>
            <ul className="list-rows">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <span>{cert.name}</span>
                  <span className="cy">{cert.year}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="skills-block">
            <span className="block-label">{t(ui.skills.langLabel)}</span>
            <ul className="list-rows">
              {languages.map((language) => (
                <li key={t(language.name)}>
                  <span>{t(language.name)}</span>
                  <span className="lvl">{t(language.level)}</span>
                </li>
              ))}
            </ul>
          </div>
        </WindowPane>
      </div>
    </section>
  );
}

function TypewriterHeading({ text }) {
  const [display, setDisplay] = useState(text);
  const [ref, inView] = useInView({ threshold: 0.45 });

  useEffect(() => {
    if (!inView) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(text);
      return undefined;
    }

    setDisplay('');
    let index = 0;
    let timer;

    const typeNext = () => {
      index += 1;
      setDisplay(text.slice(0, index));
      if (index < text.length) {
        timer = window.setTimeout(typeNext, 70 + Math.random() * 45);
      }
    };

    timer = window.setTimeout(typeNext, 220);
    return () => window.clearTimeout(timer);
  }, [inView, text]);

  return (
    <h2 ref={ref} className="contact-typewriter" aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </h2>
  );
}

export function Contact() {
  const t = useTranslate();

  return (
    <section id="contact">
      <WindowPane className="mail-pane" title={t(ui.paneNewMessage)}>
        <div className="contact-copy">
          <TypewriterHeading text={t(ui.contact.heading)} />
          <p>{t(ui.contact.sub)}</p>
        </div>
        <div className="cta-row">
          <a className="btn aqua" href={`mailto:${profile.email}`}>
            {t(ui.contact.email)}
          </a>
          <a
            className="btn ghost"
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(ui.contact.linkedin)}
          </a>
        </div>
      </WindowPane>
    </section>
  );
}

export function Quote() {
  const t = useTranslate();
  return (
    <Reveal as="blockquote" className="personal-quote">
      {t(ui.quote)}
    </Reveal>
  );
}

export function Footer() {
  const t = useTranslate();

  return (
    <footer className="site-footer">
      <div className="pane">
        <div className="pane-content">
          <span>
            © {new Date().getFullYear()} {profile.shortName}. {t(ui.footer.note)}
          </span>
          <div className="footer-links">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>{t(ui.contact.email)}</a>
            <a href="#top">{t(ui.footer.top)}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
