import { AppData } from "@/types/app";

export const apps: AppData[] = [
  {
    slug: "luupy",
    name: "Luupy",
    tagline: "Suscripciones y gastos recurrentes",
    description:
      "Controla tus suscripciones y gastos recurrentes en un solo sitio. Recordatorios suaves, totales claros y categorías para entender en qué se va tu dinero cada mes.",
    longDescription:
      "Luupy reúne tus suscripciones digitales y pagos recurrentes (streaming, software, gimnasio, recibos del hogar) en una vista limpia. Sumas mensuales y anuales, recordatorios antes de cada renovación y categorías para detectar lo que ya no usas.",
    iconClass: "icon-luupy",
    glow: "#c9a2ff",
    iconSrc: "/images/luupy-icon.png",
    initial: "L",
    accentFrom: "#f4a06a",
    accentTo: "#bf5af2",
    category: "Gestor de suscripciones",
    platforms: ["ios", "android"],
    links: {
      appStore:
        "https://apps.apple.com/es/app/luupy-controla-tus-gastos/id6762055476",
      playStore:
        "https://play.google.com/store/apps/details?id=com.cassiopeialabs.luupy",
      instagram: "https://www.instagram.com/luupy.app/",
    },
    screenshots: [],
    features: [
      {
        title: "Tus suscripciones, juntas",
        description:
          "Añade nombre, importe, frecuencia y fecha de renovación. Luupy calcula totales por mes y por año.",
      },
      {
        title: "Recordatorios sin ruido",
        description:
          "Avisos antes de cada renovación para que decidas a tiempo. Sin notificaciones agresivas.",
      },
      {
        title: "Categorías claras",
        description:
          "Streaming, software, hogar, salud… Filtra y descubre dónde puedes recortar.",
      },
      {
        title: "Sincronización entre dispositivos",
        description:
          "Tu cuenta mantiene tus datos al día en todos tus dispositivos, iOS y Android. Inicio de sesión seguro con Firebase.",
      },
    ],
    responsibleParty: {
      name: "Samuel Parreño Martinez",
      email: "luupyapp@outlook.com",
      country: "España",
    },
    privacyShort: {
      data: "Datos de cuenta (email), de suscripciones que tú añades y datos de uso anonimizados para mejorar la app.",
      storage:
        "Almacenamiento en la nube mediante Firebase (Google Cloud) para sincronizar entre tus dispositivos.",
      auth: "Inicio de sesión con Firebase Authentication (email o proveedores soportados). Las credenciales no se almacenan en nuestros servidores.",
      contact:
        "Para ejercer tus derechos GDPR o cualquier duda, escríbenos a luupyapp@outlook.com.",
    },
    lastUpdated: "22 de abril de 2026",
    featured: true,
    status: "live",
  },
  // piripi & gymest use status "wip" — la cinta "En construcción"
  // se muestra en la tarjeta hasta que estén publicadas.
  {
    slug: "piripi",
    name: "Piripi",
    tagline: "Diviértete con tus amigos",
    description:
      "Juegos rápidos para romper el hielo en cualquier fiesta. Retos, rondas y categorías pensadas para grupos reales, sin descargas pesadas ni fricción.",
    longDescription:
      "Piripi reúne retos, rondas y categorías pensadas para encender cualquier plan con amigos: una cena, una previa o una noche sin planes claros. Sin cuentas, sin anuncios y sin conexión: abres la app y en segundos tienes partida.",
    iconClass: "icon-piripi",
    glow: "#ff8fa8",
    iconSrc: "/images/piripi-icon.png",
    initial: "P",
    category: "Diviértete con tus amigos",
    platforms: ["ios"],
    links: {},
    screenshots: [
      {
        src: "/images/apps/piripi/screen-1.webp",
        alt: "Pantalla de inicio de Piripi con el personaje y los modos Piripímetro, Rompehielos y Juegecitos",
      },
      {
        src: "/images/apps/piripi/screen-2.webp",
        alt: "Resultado del Piripímetro: un medidor al 50 % con el mensaje «¡Vas muy fuerte!»",
      },
      {
        src: "/images/apps/piripi/screen-3.webp",
        alt: "Reto «El flamenco»: mantener el equilibrio a la pata coja con el móvil",
      },
      {
        src: "/images/apps/piripi/screen-4.webp",
        alt: "Lista de juegos: El tembleque, Dedos sudados, Speed, Se me lengua la traba y más",
      },
      {
        src: "/images/apps/piripi/screen-5.webp",
        alt: "Juego de la botella girando sobre una mesa de madera",
      },
      {
        src: "/images/apps/piripi/screen-6.webp",
        alt: "Predicciones de futuro: se añaden los nombres de los jugadores antes de empezar",
      },
      {
        src: "/images/apps/piripi/screen-7.webp",
        alt: "Modos rompehielos: ¿Cuánto me conoces?, ¿Verdadero o falso?, El impostor y más",
      },
    ],
    mascot: {
      src: "/images/apps/piripi/mascot-lying.webp",
      alt: "Piripi, el personaje de la app, tumbado y con cara de cansado",
    },
    features: [
      {
        title: "Retos rápidos",
        description:
          "Cartas, rondas y categorías diseñadas para encender una fiesta en segundos.",
      },
      {
        title: "Sin cuenta, sin fricción",
        description:
          "Abres la app y juegas. No hay registro, no hay anuncios molestos, no hay esperas.",
      },
      {
        title: "Funciona offline",
        description:
          "Todo el contenido vive en el dispositivo. No necesitas conexión para jugar.",
      },
    ],
    responsibleParty: {
      name: "Samuel Parreño Martinez",
      email: "samuparre96@gmail.com",
      country: "España",
    },
    privacyShort: {
      data: "No recogemos datos personales. Piripi funciona en local y no pide cuenta de usuario. Los retos y preferencias se guardan en tu dispositivo.",
      storage:
        "Preferencias locales en el dispositivo, sin sincronización en la nube por defecto.",
      auth: "Piripi no requiere autenticación. No hay inicio de sesión, ni cuenta, ni perfil asociado.",
      contact:
        "Para cualquier cuestión sobre privacidad, escríbenos a samuparre96@gmail.com.",
    },
    lastUpdated: "22 de abril de 2026",
    featured: true,
    status: "wip",
  },
  {
    slug: "gymest",
    name: "Gymest",
    tagline: "Entrenamiento y nutrición",
    description:
      "Tu gimnasio y tu dieta en una sola app. Rutinas con progresión automática, registro de series con temporizador de descanso y seguimiento de calorías y macros con escáner de código de barras.",
    longDescription:
      "Gymest diseña tus rutinas según tu objetivo (hipertrofia, fuerza o perder grasa), te dice cuándo toca subir peso en cada ejercicio y lleva la cuenta de lo que comes. Sin cuentas ni anuncios: tus datos viven en tu iPhone y en tu iCloud.",
    iconClass: "icon-gymest",
    glow: "#ffb27a",
    iconSrc: "/images/gymest-icon.png",
    initial: "G",
    accentFrom: "#d2602b",
    accentTo: "#e9763e",
    category: "Entrenamiento y nutrición",
    platforms: ["ios"],
    links: {},
    screenshots: [],
    features: [
      {
        title: "Rutinas que progresan",
        description:
          "Series, repeticiones y descansos según tu objetivo. Gymest te sugiere cuándo subir peso, repetir o descargar.",
      },
      {
        title: "Registro sin fricción",
        description:
          "Apunta cada serie en segundos, con temporizador de descanso en la pantalla de bloqueo y récords personales.",
      },
      {
        title: "Nutrición con escáner",
        description:
          "Calorías, macros y agua del día. Escanea el código de barras de un alimento y se añade solo.",
      },
      {
        title: "Apple Salud e iCloud",
        description:
          "Importa tu peso, guarda tus entrenos en Salud y sincroniza tus datos entre dispositivos con tu iCloud.",
      },
    ],
    responsibleParty: {
      name: "Samuel Parreño Martinez",
      email: "samuparre96@gmail.com",
      country: "España",
    },
    privacyShort: {
      data: "No recogemos datos personales. Tus entrenos, comidas, peso y perfil se guardan en tu dispositivo y en tu iCloud privado; nosotros no tenemos acceso a ellos.",
      storage:
        "Base de datos local en el iPhone, sincronizada con tu cuenta de iCloud (CloudKit, base de datos privada). Sin servidores propios.",
      auth: "Gymest no requiere cuenta. La sincronización usa tu Apple ID de iCloud; no gestionamos ni vemos credenciales.",
      contact:
        "Para cualquier cuestión sobre privacidad, escríbenos a samuparre96@gmail.com.",
    },
    lastUpdated: "30 de septiembre de 2026",
    featured: true,
    status: "wip",
  },
];

export function getApp(slug: string): AppData | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getAllApps(): AppData[] {
  return apps;
}

export function getFeaturedApps(): AppData[] {
  return apps.filter((app) => app.featured);
}
