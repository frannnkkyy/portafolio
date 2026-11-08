import { bi } from './i18n';

/**
 * frame: browser | phone | arcade
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
      'Durante mis prácticas en Prologis desarrollé una PWA interna para registrar y consultar lecturas de agua y electricidad. Incluye permisos por rol, historial mensual, importación de Excel y reportes imprimibles.',
      'During my internship at Prologis, I built an internal PWA for entering and reviewing water and electricity readings. It includes role-based access, monthly history, Excel imports and printable reports.'
    ),
    outcome: bi(
      'Reuní en una sola herramienta tareas que antes se hacían entre varias hojas.',
      'I brought work that used to be spread across several sheets into one tool.'
    ),
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PWA'],
    frame: 'browser',
    url: 'lecturas-prologis.app',
    aspect: '16 / 9',
    images: [
      {
        file: 'client-dashboard.jpg',
        alt: bi('Panel de consumo para clientes', 'Client utility dashboard'),
      },
      {
        file: 'admin-dashboard.jpg',
        alt: bi('Panel principal de administración', 'Main administration dashboard'),
      },
      {
        file: 'monthly-sheets.jpg',
        alt: bi('Captura de lecturas en hojas mensuales', 'Monthly reading sheets'),
      },
      {
        file: 'user-admin.jpg',
        alt: bi('Gestión de usuarios y permisos', 'User and role management'),
      },
      {
        file: 'login.jpg',
        alt: bi('Inicio de sesión', 'Sign-in screen'),
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
      'Lo hicimos en equipo para consultar planeaciones, cargar archivos y revisar reportes. Yo trabajé principalmente en la API con Express y en conectarla con la interfaz en React. Es un prototipo: el acceso es simulado y los datos no se guardan al cerrar el servidor.',
      'We built this as a team to browse lesson plans, upload files and view reports. I focused on the Express API and connecting it to the React interface. It is still a prototype: sign-in is simulated and data is lost when the server stops.'
    ),
    outcome: bi(
      'La carga, el historial y los reportes ya se pueden recorrer; OCR y una base de datos quedan pendientes.',
      'The upload, history and reports can be explored; OCR and database storage are still to come.'
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
      'Conectamos una app en React Native a una pulsera prototipo con Arduino. La app muestra pasos y mediciones de pulso, presión y oxígeno; Firebase Realtime Database sincroniza los datos y las sesiones anteriores.',
      'We connected a React Native app to an Arduino wearable prototype. It shows steps, pulse, blood pressure and oxygen readings; Firebase Realtime Database syncs the data and past sessions.'
    ),
    outcome: bi(
      'La demo conecta el dispositivo, Firebase y las pantallas de la app.',
      'The demo ties the device, Firebase and the app screens together.'
    ),
    stack: ['React Native', 'Expo', 'Expo Router', 'TypeScript', 'Firebase Realtime Database', 'Arduino'],
    frame: 'phone',
    url: 'fitlink.mobile',
    aspect: '870 / 1807',
    images: [
      { file: 'home.jpg', alt: bi('Inicio de sesión de FitLink', 'FitLink sign-in screen') },
      { file: 'profile.jpg', alt: bi('Perfil y datos personales', 'Profile and personal details') },
      { file: 'information.jpg', alt: bi('Opciones de la aplicación', 'Application settings') },
      { file: 'route.jpg', alt: bi('Seguimiento de una ruta', 'Route tracking screen') },
      { file: 'dashboard.jpg', alt: bi('Resumen de actividad', 'Activity overview') },
    ],
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
      'Hice Yetpaw para editar fotos desde el celular o la computadora, sin subirlas a un servidor. Eliges una foto, pruebas estilos y ajustas el formato antes de guardar. Canvas genera el resultado; al recargar, las imágenes y los cambios desaparecen.',
      'I made Yetpaw so you can edit photos on a phone or computer without uploading them. Choose a photo, try a style and adjust the format before saving. Canvas renders the result; photos and edits are cleared when you reload.'
    ),
    outcome: bi(
      'Hay 15 estilos para fotos; 12 también funcionan con video.',
      'There are 15 styles for photos; 12 also work with video.'
    ),
    stack: ['React', 'Vite', 'JavaScript', 'Canvas API', 'PWA', 'Service Worker'],
    frame: 'phone',
    url: 'yetpaw.vercel.app',
    aspect: '870 / 1807',
    images: [
      {
        file: 'home.jpg',
        alt: bi('Pantalla inicial de Yetpaw', 'Yetpaw start screen'),
      },
      {
        file: 'styles.jpg',
        alt: bi('Selección de estilos de edición', 'Editing style selection'),
      },
      {
        file: 'variants.jpg',
        alt: bi('Selección de variantes', 'Style variant selection'),
      },
      {
        file: 'formats.jpg',
        alt: bi('Formatos disponibles para la imagen', 'Available image formats'),
      },
      {
        file: 'editor.jpg',
        alt: bi('Edición y vista previa del resultado', 'Editor and result preview'),
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
      'Stenovy es una app escolar hecha con Cordova. Tiene accesos para docentes y dirección, además de pantallas para grupos, asistencia con QR y avisos. Firebase sincroniza la información.',
      'Stenovy is a school app built with Cordova. It has teacher and staff access, plus screens for groups, QR attendance and announcements. Firebase syncs the information.'
    ),
    outcome: bi(
      'El flujo reúne asistencia, grupos y avisos en la misma app.',
      'The app brings attendance, groups and announcements into one place.'
    ),
    stack: ['Apache Cordova', 'JavaScript', 'HTML5', 'CSS3', 'Firebase'],
    frame: 'phone',
    url: 'stenovy.mobile',
    aspect: '833 / 1807',
    images: [
      { file: 'roles.jpg', alt: bi('Selección de acceso para docentes o dirección', 'Teacher or staff sign-in choices') },
      { file: 'dashboard.jpg', alt: bi('Panel principal de Stenovy', 'Stenovy dashboard') },
      { file: 'groups.jpg', alt: bi('Grupos y asistencia', 'Groups and attendance') },
      { file: 'announcements.jpg', alt: bi('Formulario para publicar un aviso', 'Create an announcement') },
    ],
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
      'Hice un plataformero 2D en Godot donde cada ronda va más rápido. Programé las mecánicas, los estados de la partida y el puntaje; también preparé la versión para jugar desde el navegador.',
      'I made a 2D platformer in Godot where each round gets faster. I built the game mechanics, states and scoring, then prepared a version that runs in the browser.'
    ),
    outcome: bi(
      'Fue mi primer juego terminado y publicado.',
      'It was the first game I finished and published.'
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
      'Sitio adaptable para un café y bistro, con menú, platillos, información y contacto. Después ordené el código y quité ejemplos de backend que ya no se usaban.',
      'A responsive site for a café and bistro, with its menu, dishes, details and contact information. I later organized the code and removed backend examples the site no longer used.'
    ),
    outcome: bi(
      'Fue mi primer sitio completo; después volví para dejarlo más fácil de mantener.',
      'It was my first complete website. I came back later to make it easier to maintain.'
    ),
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    frame: 'browser',
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
