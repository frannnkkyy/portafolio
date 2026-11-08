import { useState } from 'react';
import { featuredProjects, otherProjects, projectTotal } from '../projects';
import { ui } from '../content';
import { useTranslate } from '../i18n';
import { asset } from '../asset';
import {
  CarouselDots,
  PreviewPlaceholder,
  Reveal,
  TrafficLights,
  useCarousel,
} from './ui';

function Slides({ project, index }) {
  const t = useTranslate();
  return project.images.map((image, imageIndex) => (
    <img
      key={image.file}
      className={`slide${imageIndex === index ? ' active' : ''}`}
      src={asset(`images/projects/${project.id}/${image.file}`)}
      alt={t(image.alt)}
      loading={imageIndex === 0 ? 'eager' : 'lazy'}
    />
  ));
}

function Placeholder({ project, phone = false }) {
  const t = useTranslate();
  const details = project.placeholder || {};
  return (
    <PreviewPlaceholder
      phone={phone}
      icon={details.icon || project.icon}
      title={t(project.name)}
      label={t(details.label || project.type)}
      note={t(details.note || '')}
      colors={details.colors}
    />
  );
}

function ProjectWindow({ project, children }) {
  return (
    <div className="browser-frame">
      <div className="browser-bar">
        <TrafficLights inline />
        <div className="browser-url">{project.url}</div>
      </div>
      {children}
    </div>
  );
}

function ProjectScreenshots({ project, carousel, className = '', showDots = true }) {
  const style = { '--shot-aspect': project.aspect };

  return (
    <div
      className={`browser-shot carousel${className ? ` ${className}` : ''}`}
      style={style}
      {...carousel.handlers}
    >
      {project.images.length ? (
        <Slides project={project} index={carousel.index} />
      ) : (
        <Placeholder project={project} phone={project.frame === 'phone'} />
      )}
      {showDots ? (
        <CarouselDots
          count={project.images.length}
          index={carousel.index}
          onSelect={carousel.go}
        />
      ) : null}
    </div>
  );
}

function ProjectMedia({ project, carousel }) {
  const t = useTranslate();
  const isArcade = project.frame === 'arcade';
  const screenshotClass = isArcade ? 'arcade-shot' : project.frame === 'phone' ? 'phone-shot' : '';
  const playLink = isArcade ? project.links?.[0] : null;

  return (
    <ProjectWindow project={project}>
      <ProjectScreenshots
        project={project}
        carousel={carousel}
        className={screenshotClass}
        showDots={!isArcade}
      />
      {isArcade ? (
        <div className="arcade-bottom">
          <CarouselDots
            className="arcade-dots"
            count={project.images.length}
            index={carousel.index}
            onSelect={carousel.go}
          />
          {playLink ? (
            <a className="btn arcade-play" href={playLink.href} target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true">▶</span>
              {t(ui.projects.play)}
            </a>
          ) : null}
        </div>
      ) : null}
    </ProjectWindow>
  );
}

function ProjectCard({ project }) {
  const t = useTranslate();
  const carousel = useCarousel(project.images.length);
  const showLinks = project.links?.length && project.frame !== 'arcade';

  return (
    <Reveal
      as="article"
      id={`project-${project.id}`}
      className={`feature${project.reverse ? ' reverse' : ''}`}
    >
      <div className="feature-media">
        <ProjectMedia project={project} carousel={carousel} />
      </div>

      <div className="feature-text">
        <span className="feature-index">
          {t(ui.projects.label)} {String(project.order).padStart(2, '0')} / {String(projectTotal).padStart(2, '0')}
        </span>

        <div className="feature-meta">
          <div className="feature-icon-sm" style={{ background: project.iconGradient }} aria-hidden="true">
            {project.icon}
          </div>
          <span className="widget-date">{project.year}</span>
          {project.team ? <span className="team-badge">{t(project.team)}</span> : null}
        </div>

        <span className="widget-type">{t(project.type)}</span>
        <h3>{t(project.name)}</h3>
        <p className="widget-desc">{t(project.description)}</p>

        <div className="outcome">
          <span className="tick" aria-hidden="true">
            ✓
          </span>
          <span>{t(project.outcome)}</span>
        </div>

        <div className="stack">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        {showLinks ? (
          <div className="project-links">
            {project.links.map((link) => (
              <a
                key={link.href}
                className={`project-link${link.variant === 'primary' ? ' primary' : ''}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(link.label)}
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        ) : null}

        {project.note ? <p className="project-note">{t(project.note)}</p> : null}
      </div>
    </Reveal>
  );
}

export function Projects() {
  const t = useTranslate();
  const [showOthers, setShowOthers] = useState(false);

  return (
    <section id="projects">
      <Reveal className="section-head">
        <div className="projects-heading-row">
          <div className="projects-heading-copy">
            <span className="eyebrow">{t(ui.projects.eyebrow)}</span>
            <h2>{t(ui.projects.heading)}</h2>
            <p>{t(ui.projects.sub)}</p>
          </div>
          <div className="tech-pulse" aria-hidden="true">
            <div className="tech-pulse-core">DEV</div>
          </div>
        </div>

        <div className="tech-status" aria-label={t(ui.projects.statusLabel)}>
          {ui.projects.status.map((item, index) => (
            <span key={index}>
              <i aria-hidden="true" />
              <b>{t(item)}</b>
            </span>
          ))}
        </div>
      </Reveal>

      <div className="feature-list">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <button
        className="project-divider"
        type="button"
        aria-expanded={showOthers}
        aria-controls="other-projects"
        aria-label={t(showOthers ? ui.projects.hideOther : ui.projects.showOther)}
        onClick={() => setShowOthers((current) => !current)}
      >
        <span className="project-divider-copy">
          <span>{t(ui.projects.other)}</span>
          <small>{t(ui.projects.otherHint)}</small>
        </span>
        <span className="project-divider-icon" aria-hidden="true">
          ⌄
        </span>
      </button>

      <div id="other-projects">
        {showOthers ? (
          <div className="feature-list">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
