import { bi } from './helpers';

export const profile = {
  name: 'Carlos Francisco Constantino Ramos',
  shortName: 'Carlos Constantino',
  role: bi('Desarrollador de Software Junior', 'Junior Software Developer'),
  focus: bi('Aplicaciones web y móviles', 'Web and mobile applications'),
  availability: bi('Disponible para nuevas oportunidades', 'Open to new opportunities'),
  summary: bi(
    'Construyo aplicaciones web y móviles con React, Next.js y TypeScript. Me gusta que la interfaz resuelva un proceso real y que el código pueda entenderlo alguien más.',
    'I build web and mobile applications with React, Next.js and TypeScript. I care about interfaces that solve a real process and code that someone else can pick up.'
  ),
  location: bi('Reynosa, Tamaulipas · México', 'Reynosa, Tamaulipas · Mexico'),
  languages: bi('Español (nativo) · Inglés (B2)', 'Spanish (native) · English (B2)'),
  email: 'carlosfran.constantino@outlook.com',
  phone: '+52 (899) 428 6129',
  links: {
    github: 'https://github.com/frannnkkyy',
    linkedin: 'https://www.linkedin.com/in/fcoocarlos/',
    portfolio: 'https://portafoliofrann.netlify.app/',
    repository: 'https://github.com/frannnkkyy/portafolio',
  },
  cv: {
    es: '/cv/carlos-constantino-cv-es.pdf',
    en: '/cv/carlos-constantino-cv-en.pdf',
  },
  meta: {
    location: bi('Ubicación', 'Location'),
    status: bi('Estado', 'Status'),
    languages: bi('Idiomas', 'Languages'),
  },
};
