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
    iconSrc: "/images/luupy-icon.png",
    initial: "L",
    accentFrom: "#f4a06a",
    accentTo: "#bf5af2",
    category: "Gestor de suscripciones",
    platforms: ["ios"],
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
          "Tu cuenta mantiene tus datos al día en iPhone e iPad. Inicio de sesión seguro con Firebase.",
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
  // piripi & mimoney use status "wip" — la cinta "En construcción"
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
    iconSrc: "/images/piripi-icon.png",
    initial: "P",
    category: "Diviértete con tus amigos",
    platforms: ["ios"],
    links: {},
    screenshots: [],
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
    slug: "mimoney",
    name: "Mimoney",
    tagline: "Finanzas personales",
    description:
      "Un lugar tranquilo para ver en qué se va tu dinero. Categorías simples, entradas rápidas, sin conectar cuentas ni pedir permisos innecesarios.",
    iconClass: "icon-mimoney",
    iconSrc: "/images/mimoney-icon.png",
    initial: "M",
    category: "Finanzas personales",
    platforms: ["ios"],
    links: {},
    screenshots: [],
    features: [
      {
        title: "Tus movimientos, en local",
        description:
          "Apuntas ingresos y gastos a mano. Mimoney no se conecta con bancos ni terceros.",
      },
      {
        title: "Categorías simples",
        description:
          "Pocas categorías, bien pensadas. Suma por mes, por categoría y por etiqueta.",
      },
      {
        title: "Bloqueo con biometría",
        description:
          "Face ID, Touch ID o huella opcional para abrir la app. Tus datos no salen del dispositivo.",
      },
    ],
    privacyShort: {
      data: "Mimoney no conecta con bancos ni proveedores financieros. Los movimientos que introduces nunca salen de tu dispositivo.",
      storage:
        "Base de datos local cifrada; backup opcional bajo control del usuario.",
      auth: "Opcionalmente biometría (Face ID, Touch ID o huella) para abrir la app. No gestionamos credenciales ni las transmitimos.",
      contact:
        "Cualquier duda, a samuparre96@gmail.com.",
    },
    lastUpdated: "22 de abril de 2026",
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
