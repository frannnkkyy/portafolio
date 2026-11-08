import { bi } from './i18n';

/**
 * frame: how the screenshots are presented
 *   browser | notebook | phone | arcade | tablet
 * images: files inside public/images/projects/<id>/
 */
export const projects = [
  {
    id: 'prologis',
    order: 1,
    featured: true,
    name: bi('Sistema de Lecturas — Prologis', 'Utility Readings — Prologis'),
    type: bi('PWA · Gestión y análisis', 'PWA · Management and analytics'),
    year: '2026',
    icon: '📊',
    iconGradient: 'linear-gradient(180deg,#c9a8ff,#8a4fd6 50%,#5f2fa8 51%,#9a5fe0)',
    description: bi(
      'Piloto interno para reunir la captura, validación y consulta de lecturas de agua y electricidad. Tiene accesos por rol, historial por periodo, importación desde Excel y reportes listos para imprimir.',
      'An internal pilot that brings water and electricity reading capture, validation and lookup into one place. It has role-based access, period history, Excel imports and print-ready reports.'
    ),
    outcome: bi(
      'Reemplazó el ida y vuelta de hojas sueltas por una sola interfaz para capturar y revisar lecturas.',
      'It replaced back-and-forth spreadsheets with a single place to capture and review readings.'
    ),
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PWA'],
    frame: 'notebook',
    url: 'lecturas-prologis.app',
    aspect: '16 / 9',
    images: [
      {
        file: 'monthly-reading-capture.png',
        alt: bi('Captura mensual de lecturas', 'Monthly reading capture'),
      },
      {
        file: 'admin-role-profile.png',
        alt: bi('Cuenta con rol de administrador', 'Admin role profile'),
      },
      {
        file: 'printable-utility-report.png',
        alt: bi('Reporte de consumos listo para imprimir', 'Printable utility report'),
      },
      {
        file: 'monthly-sheets-qr-workflow.png',
        alt: bi('Hojas mensuales y flujo de registro', 'Monthly sheets and capture workflow'),
      },
    ],
    note: bi(
      'Caso de estudio con datos de demostración. El código y la información interna no son públicos. No es una página oficial de Prologis.',
      'Case study with demonstration data. The source code and internal information are not public. This is not an official Prologis website.'
    ),
    links: [
      {
        label: bi('Ver caso de estudio', 'View case study'),
        href: 'https://github.com/frannnkkyy/utility-readings-pwa-case-study',
        variant: 'primary',
      },
    ],
  },
  {
    id: 'academic-planning',
    order: 2,
    featured: true,
    name: bi('Sistema de Planeaciones — UTTN', 'Lesson Planning System — UTTN'),
    type: bi('Prototipo web · Proyecto integrador', 'Web prototype · Capstone project'),
    year: '2026',
    icon: '🏫',
    iconGradient: 'linear-gradient(180deg,#7fe0d8,#1fa89c 50%,#0c7268 51%,#2fbcae)',
    team: bi('Proyecto en equipo', 'Team project'),
    reverse: true,
    description: bi(
      'Proyecto integrador en equipo para centralizar la consulta de planeaciones, reportes y carga de archivos. El prototipo tiene un frontend en React y una API en Express; por ahora usa autenticación simulada y datos en memoria. Yo me enfoqué en el backend y en conectar los datos con la interfaz.',
      'A team capstone project to bring planning records, reports and file uploads into one place. The prototype has a React frontend and an Express API; authentication is simulated and data is stored in memory for now. I focused on the backend and connecting its data to the interface.'
    ),
    outcome: bi(
      'Quedó un flujo navegable de carga, historial y reportes; la extracción OCR y la persistencia en base de datos siguen pendientes.',
      'The prototype now has a navigable upload, history and reporting flow; OCR extraction and database persistence are still pending.'
    ),
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'REST API', 'JavaScript'],
    frame: 'browser',
    url: 'planeaciones.uttn.edu.mx',
    aspect: '16 / 9',
    images: [
      {
        file: 'academic-planning-dashboard.png',
        alt: bi('Historial de planeaciones', 'Planning history dashboard'),
      },
      {
        file: 'upload.png',
        alt: bi('Carga de una planeación', 'Uploading a planning document'),
      },
      {
        file: 'reports.png',
        alt: bi('Reportes y estadísticas', 'Reports and statistics'),
      },
      {
        file: 'dashboard.png',
        alt: bi('Configuración del sistema', 'System configuration'),
      },
    ],
    links: [
      {
        label: bi('Ver repositorio', 'View repository'),
        href: 'https://github.com/frannnkkyy/academic-planning-dashboard',
        variant: 'primary',
      },
    ],
  },
  {
    id: 'fitlink',
    order: 3,
    featured: true,
    name: 'FitLink',
    type: bi('Aplicación móvil · IoT', 'Mobile app · IoT'),
    year: '2025',
    icon: '⌚',
    iconGradient: 'linear-gradient(180deg,#ffd58f,#febc2e 50%,#c98a10 51%,#ffcc55)',
    description: bi(
      'Aplicación móvil conectada a una pulsera prototipo con Arduino. Muestra pasos, frecuencia cardiaca, presión y oxígeno en sangre, con gráficas y un historial de mediciones que se sincroniza por Firebase Realtime Database.',
      'A mobile app connected to an Arduino-based wearable prototype. It shows steps, heart rate, blood pressure and blood oxygen, with charts and a measurement history synced through Firebase Realtime Database.'
    ),
    outcome: bi(
      'El prototipo unió la app, los sensores y la base de datos en una sola demo funcional.',
      'The prototype brought the app, the sensors and the database together in one working demo.'
    ),
    stack: ['React Native', 'Expo', 'Expo Router', 'TypeScript', 'Firebase Realtime Database', 'Arduino'],
    frame: 'phone',
    url: 'fitlink.mobile',
    aspect: '870 / 1807',
    images: [],
    placeholder: {
      icon: '⌚',
      label: bi('React Native · Arduino · Firebase', 'React Native · Arduino · Firebase'),
      note: bi('Vista de la app', 'App preview'),
      colors: ['#a6ff00', '#0b6b3a'],
    },
    links: [
      {
        label: bi('Ver repositorio', 'View repository'),
        href: 'https://github.com/frannnkkyy/fitlink-fitness-app',
        variant: 'primary',
      },
    ],
  },
  {
    id: 'yetpaw',
    order: 4,
    featured: true,
    name: 'Yetpaw',
    type: bi('Editor de fotos · PWA', 'Photo editor · PWA'),
    year: '2026',
    icon: '🐾',
    iconGradient: 'linear-gradient(180deg,#ffe985,#ffcc33 50%,#f5b800 51%,#ffdb5c)',
    reverse: true,
    description: bi(
      'Editor de fotos que corre completo en el navegador. Se elige una imagen o se toma una foto, luego el estilo, la variante, el formato y el ajuste final. Son 15 estilos, todos dibujados con Canvas, sin subir la foto a ningún servidor y sin guardar nada al recargar.',
      'A photo editor that runs entirely in the browser. Pick an image or take a photo, then choose a style, a variant, an aspect ratio and the final crop. There are 15 styles, all rendered with Canvas, with no upload and nothing saved after a reload.'
    ),
    outcome: bi(
      '15 estilos, 12 disponibles para video y todo el procesamiento del lado del cliente.',
      '15 styles, 12 available for video, and all processing kept on the client.'
    ),
    stack: ['React', 'Vite', 'JavaScript', 'Canvas API', 'PWA', 'Service Worker'],
    frame: 'browser',
    url: 'yetpaw.vercel.app',
    aspect: '4 / 3',
    images: [
      {
        file: 'home.png',
        alt: bi('Pantalla inicial de Yetpaw', 'Yetpaw start screen'),
      },
    ],
    links: [
      {
        label: bi('Abrir Yetpaw', 'Open Yetpaw'),
        href: 'https://yetpaw.vercel.app',
        variant: 'primary',
      },
      {
        label: bi('Ver repositorio', 'View repository'),
        href: 'https://github.com/frannnkkyy/yetpaw',
      },
    ],
  },
  {
    id: 'stenovy',
    order: 5,
    name: 'Stenovy',
    type: bi('Aplicación móvil', 'Mobile app'),
    year: '2024',
    icon: '⭐',
    iconGradient: 'linear-gradient(180deg,#8fd0ff,#1e8fe1 50%,#0c6ac9 51%,#2489e5)',
    description: bi(
      'Aplicación móvil para registrar asistencia con códigos QR. Incluye grupos, credenciales, avisos y vistas distintas para docentes y administración, con Firebase sincronizando los datos.',
      'A mobile app for tracking attendance with QR codes. It includes groups, student IDs, announcements and separate views for teachers and staff, with Firebase keeping data in sync.'
    ),
    outcome: bi(
      'El prototipo permitió probar el registro por QR junto con la gestión de grupos y avisos.',
      'The prototype was used to test QR check-in alongside group and announcement management.'
    ),
    stack: ['Apache Cordova', 'JavaScript', 'HTML5', 'CSS3', 'Firebase'],
    frame: 'phone',
    url: 'stenovy.mobile',
    aspect: '833 / 1807',
    images: [],
    placeholder: {
      icon: '⭐',
      label: bi('Apache Cordova · Firebase', 'Apache Cordova · Firebase'),
      note: bi('Capturas en recuperación', 'Screenshots being recovered'),
      colors: ['#7fd4ff', '#1e8fe1'],
    },
    links: [
      {
        label: bi('Ver repositorio', 'View repository'),
        href: 'https://github.com/frannnkkyy/stenovy',
      },
    ],
  },
  {
    id: 'jumpie',
    order: 6,
    name: 'Jumpie',
    type: bi('Videojuego 2D · Godot', '2D game · Godot'),
    year: '2026',
    icon: '🕹️',
    iconGradient: 'linear-gradient(180deg,#a8f08a,#4fbf3a 50%,#2f8f22 51%,#5cd045)',
    reverse: true,
    description: bi(
      'Plataformero 2D donde la velocidad sube con cada ronda. Diseñé la mecánica, los estados de partida, el puntaje y la versión web en Godot. Se juega directo en el navegador.',
      'A 2D platformer where the speed goes up every round. I designed the mechanics, game states, scoring and the web build in Godot. You can play it right in the browser.'
    ),
    outcome: bi(
      'Mi primer juego terminado y publicado, de principio a fin.',
      'My first game finished and published, start to finish.'
    ),
    stack: ['Godot Engine', 'GDScript', 'Pixel Art'],
    frame: 'arcade',
    url: 'jumpie.app',
    aspect: '16 / 9',
    images: [
      {
        file: 'gameplay-1.jpg',
        alt: bi('Partida de Jumpie en un escenario de plataformas', 'Jumpie gameplay on a platform stage'),
      },
      {
        file: 'gameplay-2.jpg',
        alt: bi('Jumpie con plataformas elevadas', 'Jumpie with raised platforms'),
      },
      {
        file: 'gameover.jpg',
        alt: bi('Pantalla de derrota y puntaje', 'Game over screen and score'),
      },
    ],
    links: [
      {
        label: bi('Jugar en itch.io', 'Play on itch.io'),
        href: 'https://hannkie.itch.io/jumpie',
        variant: 'primary',
      },
    ],
  },
  {
    id: 'encinos',
    order: 7,
    name: 'Encinos Café & Bistro',
    type: bi('Sitio web', 'Website'),
    year: '2023',
    icon: '🌳',
    iconGradient: 'linear-gradient(180deg,#8ee69a,#28c840 50%,#0f9c2c 51%,#37cf4e)',
    description: bi(
      'Sitio web para un café y bistro: menú digital, platillos, información y contacto. Lo rehíce después para ordenar los assets, quitar código viejo y dejar una estructura más fácil de mantener.',
      'A website for a café and bistro: digital menu, dishes, info and contact. I rebuilt it later to organize the assets, remove old code and leave a structure that is easier to maintain.'
    ),
    outcome: bi(
      'Fue mi primer proyecto web completo y después lo reorganicé para publicarlo en el portafolio.',
      'It was my first complete website, and I later reorganized it to publish it in my portfolio.'
    ),
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    frame: 'tablet',
    url: 'encinos.cafe',
    aspect: '16 / 10',
    images: [
      { file: 'home.png', alt: bi('Página de inicio de Encinos', 'Encinos home page') },
      { file: 'menu.png', alt: bi('Menú digital de Encinos', 'Encinos digital menu') },
      { file: 'cookbook.png', alt: bi('Catálogo de platillos', 'Dish catalog') },
      { file: 'about.png', alt: bi('Página acerca de Encinos', 'Encinos about page') },
      { file: 'contact.png', alt: bi('Página de contacto de Encinos', 'Encinos contact page') },
    ],
    links: [
      {
        label: bi('Ver repositorio', 'View repository'),
        href: 'https://github.com/frannnkkyy/encinos-cafe-website',
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);
export const projectTotal = projects.length;
