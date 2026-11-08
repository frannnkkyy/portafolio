import { bi } from './i18n';

export const profile = {
  name: 'Carlos Francisco Constantino Ramos',
  shortName: 'Carlos Constantino',
  role: bi('Desarrollador de Software Junior', 'Junior Software Developer'),
  focus: bi('Aplicaciones web, móviles y PWA', 'Web, mobile and PWA applications'),
  availability: bi('Disponible para nuevas oportunidades', 'Open to new opportunities'),
  summary: bi(
    'Trabajo en la parte de la aplicación que la gente ve y usa: interfaces web y móviles conectadas a servicios, bases de datos y datos en tiempo real.',
    'I work on the part of the product people actually see and use: web and mobile interfaces connected to services, databases and real-time data.'
  ),
  location: bi('Reynosa, Tamaulipas · México', 'Reynosa, Tamaulipas · Mexico'),
  languages: bi('Español (nativo) · Inglés (B2)', 'Spanish (native) · English (B2)'),
  email: 'carlosfran.constantino@outlook.com',
  links: {
    github: 'https://github.com/frannnkkyy',
    linkedin: 'https://www.linkedin.com/in/fcoocarlos/',
    repository: 'https://github.com/frannnkkyy/portafolio',
  },
  cv: {
    curriculum: '/cv/carlos-constantino-cv-es.pdf',
    resume: '/cv/carlos-constantino-cv-en.pdf',
  },
  meta: {
    location: bi('Ubicación', 'Location'),
    status: bi('Estado', 'Status'),
    languages: bi('Idiomas', 'Languages'),
  },
};

export const navItems = [
  {
    href: '#top',
    icon: '🏠',
    color: 'linear-gradient(180deg,#8fd0ff,#1e8fe1 50%,#0c6ac9 51%,#2489e5)',
    label: bi('Inicio', 'Home'),
    sub: bi('Volver arriba', 'Back to top'),
  },
  {
    href: '#about',
    icon: '👤',
    color: 'linear-gradient(180deg,#ffd58f,#febc2e 50%,#c98a10 51%,#ffcc55)',
    label: bi('Sobre mí', 'About'),
    sub: bi('Perfil profesional', 'Professional profile'),
  },
  {
    href: '#journey',
    icon: '🎓',
    color: 'linear-gradient(180deg,#8ee69a,#28c840 50%,#0f9c2c 51%,#37cf4e)',
    label: bi('Trayectoria', 'Journey'),
    sub: bi('Educación y experiencia', 'Education and experience'),
  },
  {
    href: '#skills',
    icon: '🛠️',
    color: 'linear-gradient(180deg,#c9a8ff,#8a4fd6 50%,#5f2fa8 51%,#9a5fe0)',
    label: bi('Habilidades', 'Skills'),
    sub: bi('Tecnologías y certificaciones', 'Technologies and certifications'),
  },
  {
    href: '#projects',
    icon: '💼',
    color: 'linear-gradient(180deg,#ff9f9c,#ff5f57 50%,#c73a32 51%,#ff7f78)',
    label: bi('Proyectos', 'Projects'),
    sub: bi('Trabajo seleccionado', 'Selected work'),
  },
  {
    href: '#contact',
    icon: '✉️',
    color: 'linear-gradient(180deg,#9fe8e0,#2fb8ac 50%,#178f85 51%,#4fd0c4)',
    label: bi('Contacto', 'Contact'),
    sub: bi('Enviar correo o LinkedIn', 'Send an email or connect on LinkedIn'),
  },
];

export const ui = {
  skipToContent: bi('Saltar al contenido', 'Skip to content'),
  titlebar: bi('Carlos Ramos — Portafolio.app', 'Carlos Ramos — Portfolio.app'),
  navLabel: bi('Navegación principal', 'Main navigation'),
  search: bi('Buscar', 'Search'),
  searchAria: bi('Buscar en el portafolio', 'Search the portfolio'),
  language: bi('Idioma', 'Language'),
  viewCV: bi('Ver CV', 'View résumé'),
  menu: {
    portfolio: bi('Portafolio', 'Portfolio'),
    file: bi('Archivo', 'File'),
    edit: bi('Edición', 'Edit'),
    view: bi('Ver', 'View'),
    window: bi('Ventana', 'Window'),
  },
  heroPane: bi('carlos-ramos — Obtener info', 'carlos-ramos — Get Info'),
  paneAbout: bi('acerca-de.txt', 'about-me.txt'),
  paneTech: bi('Tecnologías', 'Technologies'),
  paneToolkit: bi('Caja de herramientas', 'Toolbox'),
  paneCerts: bi('Certificaciones e idiomas', 'Certifications & languages'),
  paneNewMessage: bi('Mensaje nuevo', 'New Message'),
  about: {
    eyebrow: bi('Sobre mí', 'About me'),
    heading: bi('Un poco de contexto', 'A little context'),
    paragraphs: [
      bi(
        'Soy desarrollador de software junior y estudié Ingeniería en Desarrollo y Gestión de Software. Antes hice el TSU en Tecnologías de la Información. La mayor parte de mi experiencia está en aplicaciones web y móviles: interfaces, conexión con servicios y bases de datos.',
        "I'm a junior software developer with a degree in Software Development and Management, and a previous technician degree in Information Technology. Most of my experience is in web and mobile applications: interfaces, services and databases."
      ),
      bi(
        'En Prologis hice mis prácticas y desarrollé un piloto interno para capturar y consultar lecturas de agua y electricidad. Ahí aprendí lo que implica que una herramienta la use gente que no trabaja en software. Fuera de eso he trabajado con React, Next.js, TypeScript, Supabase, Firebase y Arduino.',
        'At Prologis I did my internship and built an internal pilot for capturing and looking up water and electricity readings. That taught me what it takes for a tool to be used by people who do not work in software. Outside of that I have worked with React, Next.js, TypeScript, Supabase, Firebase and Arduino.'
      ),
      bi(
        'Me gusta entender cómo se hace una tarea hoy, quitarle pasos y dejarla en una pantalla que se entienda sin manual. También me importa que el código quede claro para quien lo retome después.',
        'I like understanding how a task is done today, removing steps and leaving it in a screen that makes sense without a manual. I also care that the code is clear for whoever picks it up next.'
      ),
    ],
  },
  journey: {
    eyebrow: bi('Trayectoria', 'Journey'),
    heading: bi('Educación y experiencia', 'Education and experience'),
    sub: bi(
      'Formación técnica, ingeniería en software y trabajo real en el camino.',
      'Technical training, a software engineering degree and real work along the way.'
    ),
    eduLabel: bi('Educación', 'Education'),
    expLabel: bi('Experiencia', 'Experience'),
    timelineTitle: bi('En orden', 'Timeline'),
  },
  skills: {
    eyebrow: bi('Caja de herramientas', 'Toolbox'),
    heading: bi('Habilidades y certificaciones', 'Skills and certifications'),
    sub: bi(
      'Lo que uso para programar, diseñar interfaces, documentar y dar seguimiento a un proyecto.',
      'What I use to build software, design interfaces, document work and keep a project moving.'
    ),
    softLabel: bi('Habilidades blandas', 'Soft skills'),
    focusLabel: bi('Enfoque técnico', 'Technical focus'),
    certLabel: bi('Certificaciones', 'Certifications'),
    langLabel: bi('Idiomas', 'Languages'),
  },
  projects: {
    eyebrow: bi('Trabajo seleccionado', 'Selected work'),
    heading: bi('Proyectos destacados', 'Featured projects'),
    sub: bi(
      'Algunos trabajos académicos y profesionales. En cada uno anoto qué hice y con qué lo construí.',
      'A few academic and professional projects. Each one lists what I did and what I built it with.'
    ),
    label: bi('Proyecto', 'Project'),
    other: bi('Otros proyectos', 'Other projects'),
    otherHint: bi('Stenovy, Jumpie y Encinos', 'Stenovy, Jumpie and Encinos'),
    showOther: bi('Mostrar otros proyectos', 'Show other projects'),
    hideOther: bi('Ocultar otros proyectos', 'Hide other projects'),
    play: bi('Jugar', 'Play'),
    statusLabel: bi('Estado del stack', 'Stack status'),
    status: [
      bi('UI responsive', 'Responsive UI'),
      'Web · Mobile · PWA',
      bi('Flujo con Git', 'Git workflow'),
      bi('APIs y datos', 'APIs and data'),
    ],
  },
  contact: {
    heading: bi('Cuéntame qué necesitas', 'Tell me what you need'),
    sub: bi(
      'Estoy buscando mi siguiente oportunidad como desarrollador junior. Si tienes un proyecto, una vacante o simplemente quieres comparar notas, escríbeme.',
      "I'm looking for my next opportunity as a junior developer. If you have a project, an opening, or just want to compare notes, send me a message."
    ),
    email: bi('Enviar correo', 'Send email'),
    linkedin: bi('Ver LinkedIn', 'View LinkedIn'),
  },
  quote: bi(
    'Me gusta cuando una herramienta hace que una tarea pesada se sienta sencilla.',
    'I like it when a tool makes a heavy task feel simple.'
  ),
  footer: {
    note: bi('Hecho con React y Vite. El diseño toma algunas ideas de macOS.', 'Built with React and Vite. The design borrows a few ideas from macOS.'),
    top: bi('Volver arriba', 'Back to top'),
  },
  spotlight: {
    placeholder: bi('Buscar en el portafolio…', 'Search the portfolio…'),
    empty: bi('Sin resultados', 'No results'),
    cv: bi('Ver CV', 'View résumé'),
    cvSub: bi('Currículum en español o résumé en inglés', 'Spanish CV or English résumé'),
    email: bi('Enviar correo', 'Send email'),
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  cv: {
    title: bi('Visor de CV', 'Résumé Viewer'),
    curriculum: bi('Currículum (ES)', 'Curriculum (ES)'),
    resume: bi('Resume (EN)', 'Résumé (EN)'),
    download: bi('Descargar PDF', 'Download PDF'),
    closeAria: bi('Cerrar visor de CV', 'Close résumé viewer'),
    versionsAria: bi('Versión del documento', 'Document version'),
    frameTitle: bi('Vista previa del documento seleccionado', 'Preview of the selected document'),
    fallback: bi(
      'Si la vista previa no carga, usa el botón de descarga.',
      'If the preview does not load, use the download button.'
    ),
  },
};

export const education = [
  {
    date: bi('Enero 2025 — Agosto 2026', 'January 2025 — August 2026'),
    title: bi('Ingeniería en Desarrollo y Gestión de Software', 'Engineering in Software Development and Management'),
    org: 'Universidad Tecnológica de Tamaulipas Norte',
  },
  {
    date: bi('Agosto 2022 — Diciembre 2024', 'August 2022 — December 2024'),
    title: bi(
      'TSU en Tecnologías de la Información, Desarrollo de Software Multiplataforma',
      'University Technician in Information Technology, Multiplatform Software Development'
    ),
    org: 'Universidad Tecnológica de Tamaulipas Norte',
  },
  {
    date: '2019 — 2022',
    title: bi('Técnico en Gestión de Recursos Humanos', 'Human Resources Management Technician'),
    org: 'CETIS',
  },
];

export const timeline = [
  {
    year: '2026',
    text: bi(
      'Terminé la ingeniería y desarrollé el piloto de lecturas durante mis prácticas en Prologis.',
      'Finished my engineering degree and built the readings pilot during my Prologis internship.'
    ),
  },
  {
    year: '2025',
    text: bi('Empecé la Ingeniería en Desarrollo y Gestión de Software.', 'Started the Engineering in Software Development and Management program.'),
  },
  {
    year: '2024',
    text: bi(
      'Terminé el TSU y trabajé con ServiceNow y una plataforma de cursos.',
      'Finished the technician degree and worked with ServiceNow and an online learning platform.'
    ),
  },
  {
    year: '2022',
    text: bi('Entré al TSU en Tecnologías de la Información.', 'Started the Information Technology technician program.'),
  },
];

export const experience = [
  {
    company: 'Prologis',
    role: bi('Practicante de Mantenimiento | Proyecto interno de software', 'Maintenance Intern | Internal software project'),
    date: bi('Enero 2026 — Agosto 2026', 'January 2026 — August 2026'),
    bullets: [
      bi(
        'Revisé instalaciones y di seguimiento a necesidades de mantenimiento e infraestructura.',
        'Inspected facilities and followed up on maintenance and infrastructure needs.'
      ),
      bi('Organicé lecturas de agua y electricidad de varias propiedades.', 'Organized water and electricity readings across several properties.'),
      bi(
        'Desarrollé un piloto en formato PWA para capturar, validar y consultar lecturas.',
        'Built a PWA pilot to capture, validate and look up readings.'
      ),
      bi(
        'Implementé accesos por rol, historial por periodo, importación desde Excel y reportes imprimibles.',
        'Implemented role-based access, period history, Excel imports and printable reports.'
      ),
      bi(
        'Escribí documentación y material de apoyo para las personas que usarían la herramienta.',
        'Wrote documentation and support material for the people who would use the tool.'
      ),
    ],
  },
  {
    company: bi('Presidencia Municipal de Reynosa', 'Municipal Government of Reynosa'),
    role: bi('Auxiliar administrativo', 'Administrative Assistant'),
    date: bi('Febrero 2025 — Octubre 2025', 'February 2025 — October 2025'),
    bullets: [
      bi('Revisé y acredité pagos en línea.', 'Reviewed and validated online payments.'),
      bi('Organicé expedientes, trámites y documentación oficial.', 'Organized files, procedures and official documents.'),
      bi('Elaboré avalúos, manifiestos y reportes administrativos.', 'Prepared valuations, declarations and administrative reports.'),
      bi('Atendí a ciudadanos y canalicé solicitudes a las áreas correspondientes.', 'Assisted citizens and routed requests to the right departments.'),
      bi('Manejé información confidencial con cuidado.', 'Handled confidential information with care.'),
    ],
  },
  {
    company: 'BCS AIS Ensambles México',
    role: bi('Becario de producción', 'Production Intern'),
    date: bi('Noviembre 2024 — Febrero 2025', 'November 2024 — February 2025'),
    bullets: [
      bi('Elaboré ayudas visuales, hojas de proceso y documentación para producción.', 'Created visual aids, process sheets and documentation for production.'),
      bi('Apoyé en la estandarización de procesos y en ordenar información de manufactura.', 'Helped standardize processes and organize manufacturing information.'),
      bi('Mantuve registros en hojas de cálculo y sistemas internos.', 'Kept records in spreadsheets and internal systems.'),
      bi('Di soporte básico a computadoras y laptops.', 'Provided basic support for computers and laptops.'),
    ],
  },
  {
    company: 'Ipsum Technology',
    role: bi('Becario de TI', 'IT Intern'),
    date: bi('Septiembre 2024 — Noviembre 2024', 'September 2024 — November 2024'),
    bullets: [
      bi(
        'Desarrollé un prototipo de plataforma de cursos con React, JavaScript, Tailwind CSS y Firebase.',
        'Built a prototype learning platform with React, JavaScript, Tailwind CSS and Firebase.'
      ),
      bi('Construí las vistas de cursos, progreso y certificados.', 'Built the course, progress and certificate views.'),
      bi('Configuré Firebase para autenticación y almacenamiento.', 'Set up Firebase for authentication and storage.'),
      bi('Hice ejercicios de configuración y familiarización con ServiceNow.', 'Completed configuration and familiarization exercises with ServiceNow.'),
    ],
  },
];

export const techGroups = [
  {
    title: bi('Desarrollo web', 'Web development'),
    items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite'],
  },
  {
    title: bi('Interfaz', 'Interface'),
    items: ['HTML5', 'CSS3', 'Tailwind CSS', 'Figma'],
  },
  {
    title: bi('Datos y servicios', 'Data and services'),
    items: ['Supabase', 'Firebase', 'SQL Server', 'MySQL', 'REST APIs'],
  },
  {
    title: bi('Móvil e IoT', 'Mobile and IoT'),
    items: ['React Native', 'Expo', 'Apache Cordova', 'Arduino'],
  },
  {
    title: bi('Herramientas', 'Tools'),
    items: ['Git', 'GitHub', 'Docker', 'ServiceNow', 'Microsoft 365', 'Adobe Creative Suite'],
  },
  {
    title: bi('También he usado', 'Also worked with'),
    items: ['Godot', 'GDScript', 'PHP', 'Canvas API', 'PWA', 'Service Workers', 'Python'],
  },
];

export const softSkills = [
  bi('Aprendizaje rápido', 'Fast learner'),
  bi('Proactividad', 'Proactive'),
  bi('Trabajo en equipo', 'Teamwork'),
  bi('Adaptabilidad', 'Adaptability'),
  bi('Pensamiento crítico', 'Critical thinking'),
];

export const technicalFocus = [
  bi('Interfaces web responsivas', 'Responsive web interfaces'),
  bi('Aplicaciones móviles y PWA', 'Mobile applications and PWAs'),
  bi('Integración de APIs y datos', 'API and data integration'),
  bi('Prototipado y experiencia de usuario', 'Prototyping and user experience'),
];

export const certifications = [
  { name: 'Figma Essential Training', year: '2026' },
  { name: 'Essential HTML', year: '2026' },
  { name: 'Google: Cloud Computing Foundations', year: '2024' },
  { name: 'IoT Fundamentals: Connecting Things', year: '2024' },
  { name: 'Cisco: Networking Essentials', year: '2023' },
];

export const languages = [
  { name: bi('Español', 'Spanish'), level: bi('Nativo', 'Native') },
  { name: bi('Inglés', 'English'), level: bi('Intermedio alto (B2)', 'Upper intermediate (B2)') },
];

export const terminal = {
  title: bi('Terminal — perfil-jr.zsh', 'Terminal — junior-profile.zsh'),
  es: [
    { prompt: 'carlos@portfolio ~ %', command: 'whoami' },
    { output: 'Carlos Francisco Constantino Ramos — Desarrollador de Software Junior' },
    { prompt: 'carlos@portfolio ~ %', command: 'cat stack.txt' },
    { output: 'JavaScript · TypeScript · React · Next.js · Supabase · Firebase' },
    { prompt: 'carlos@portfolio ~ %', command: './disponibilidad --check' },
    { output: '✓ Disponible para nuevas oportunidades como desarrollador junior' },
    { prompt: 'carlos@portfolio ~ %', command: '' },
  ],
  en: [
    { prompt: 'carlos@portfolio ~ %', command: 'whoami' },
    { output: 'Carlos Francisco Constantino Ramos — Junior Software Developer' },
    { prompt: 'carlos@portfolio ~ %', command: 'cat stack.txt' },
    { output: 'JavaScript · TypeScript · React · Next.js · Supabase · Firebase' },
    { prompt: 'carlos@portfolio ~ %', command: './availability --check' },
    { output: '✓ Open to new opportunities as a junior software developer' },
    { prompt: 'carlos@portfolio ~ %', command: '' },
  ],
};
