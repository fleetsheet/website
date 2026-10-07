import type { NavLink } from '@/config'
import type { AboutContent } from '@/data/en/about'

const demo: NavLink = { label: 'Reservar una demo', href: '/contact' }

export const about: AboutContent = {
  menu: {
    label: 'Sobre Fleet',
    groups: { company: 'Empresa' },
    promo: {
      title: 'Únase al equipo de Fleet',
      description:
        'Ayude a equipos inmobiliarios de todo el mundo a gestionar sus edificios con claridad, control y tranquilidad.',
      action: { label: 'Ver empleos', href: '/about/careers' },
    },
  },
  pages: {
    story: {
      label: 'Nuestra historia',
      summary: 'Nuestra misión, nuestros valores y los equipos a los que servimos.',
      meta: {
        title: 'Sobre Fleet: historia, misión y valores | Fleet',
        description:
          'Fleet da a equipos inmobiliarios, responsables de operaciones y facility managers la claridad, el control y la tranquilidad que merecen. Conozca nuestra historia, misión y valores.',
      },
    },
    careers: {
      label: 'Empleo',
      summary: 'Crezca con un equipo que construye el futuro de la operación inmobiliaria.',
      meta: {
        title: 'Trabajar en Fleet | Fleet',
        description:
          'Construya el futuro de la operación inmobiliaria con Fleet. Descubra cómo trabajamos, dónde estamos y cómo unirse al equipo.',
      },
    },
    partners: {
      label: 'Partners',
      summary: 'Recomiende, implemente o integre Fleet.',
      meta: {
        title: 'Programa de partners | Fleet',
        description:
          'Crezca con Fleet como partner de referencia, de consultoría e implantación o tecnológico, y ayude a los equipos inmobiliarios a gestionar cada sede con confianza.',
      },
    },
  },
  offices: [
    { city: 'Bangkok', region: 'Tailandia' },
    { city: 'Los Ángeles', region: 'Estados Unidos' },
    { city: 'Singapur', region: 'Singapur' },
  ],
  story: {
    hero: {
      eyebrow: 'Sobre Fleet',
      title: 'Conozca Fleet',
      description:
        'Nuestra misión es dar a equipos inmobiliarios, responsables de operaciones y facility managers la claridad, el control y la tranquilidad que merecen.',
      photos: [
        { id: 'officeTeam', alt: 'Compañeros conversando en una mesa de una oficina luminosa' },
        { id: 'teamWorkshop', alt: 'Un equipo planificando junto a una pizarra' },
        { id: 'officeCollaboration', alt: 'Compañeros colaborando en una oficina abierta' },
      ],
    },
    story: {
      eyebrow: 'Nuestra historia',
      title: 'Creado para los equipos que mantienen los edificios en marcha',
      chapters: [
        {
          label: 'El inicio',
          title: 'Una observación sencilla',
          description:
            'Fleet nació al ver a equipos de mantenimiento gestionar edificios con hojas de cálculo, cadenas de correos y chats de grupo.',
        },
        {
          label: 'La idea',
          title: 'Una forma mejor de trabajar',
          description:
            'Quisimos crear un software tan rápido y flexible como los equipos que lo usan, listo para cada sede y cada activo.',
        },
        {
          label: 'La plataforma',
          title: 'Fleet toma forma',
          description:
            'Una plataforma en la nube y móvil, para iOS y Android, que simplifica el mantenimiento en múltiples sedes y activos.',
        },
        {
          label: 'Hoy',
          title: 'La confianza de muchas carteras',
          description:
            'De cinco edificios de oficinas a cincuenta campus escolares, Fleet ayuda a los equipos a hacer el trabajo adecuado, más rápido y mejor.',
        },
      ],
    },
    mission: {
      eyebrow: 'Nuestra misión',
      title: 'Conectar el mundo físico con herramientas digitales',
      description:
        'Construimos un futuro sostenible reinventando el software inmobiliario y conectando nuestro mundo físico con herramientas digitales.',
      photo: {
        id: 'propertyManager',
        alt: 'Gestora inmobiliaria con una tableta frente a rascacielos',
      },
      valuesTitle: 'Nuestros valores',
      values: [
        {
          title: 'Claridad ante todo',
          description: 'Los datos de mantenimiento deben ser claros y fáciles de usar.',
        },
        {
          title: 'Rapidez frente a complejidad',
          description: 'Más rápido es mejor, sobre todo para los equipos de operaciones.',
        },
        {
          title: 'Centrado en las personas',
          description: 'Pensado para quienes hacen el trabajo y para quienes lo revisan.',
        },
        {
          title: 'Confianza por defecto',
          description: 'Seguro, transparente y responsable en todo lo que construimos.',
        },
      ],
    },
    offices: {
      eyebrow: 'Nuestras oficinas',
      title: 'Dónde encontrarnos',
      description:
        'Nuestros equipos trabajan en tres ciudades para dar servicio a carteras en muchas regiones.',
    },
    careers: {
      title: 'Construya lo que viene con nosotros',
      description:
        'Ayude a los equipos inmobiliarios a gestionar cada edificio con claridad y confianza. Descubra la vida en Fleet.',
      action: { label: 'Ver empleos', href: '/about/careers' },
    },
    cta: {
      title: 'Vea Fleet en acción',
      description: 'Reserve una visita guiada adaptada a su cartera y a sus equipos.',
      primaryAction: demo,
      secondaryAction: { label: 'Contacto', href: '/contact' },
    },
  },
  careers: {
    hero: {
      eyebrow: 'Empleo',
      title: 'Construya con nosotros el futuro de la operación inmobiliaria',
      description:
        'Únase a un equipo que convierte el caos del mantenimiento en claridad para equipos inmobiliarios y de instalaciones de todo el mundo.',
      action: { label: 'Unirse al equipo', href: '#join' },
      photos: [
        { id: 'welcomeHandshake', alt: 'Un nuevo compañero recibido con un apretón de manos' },
        { id: 'officeTeam', alt: 'Compañeros conversando en una mesa de una oficina luminosa' },
        { id: 'teamWorkshop', alt: 'Un equipo planificando junto a una pizarra' },
        { id: 'officeCollaboration', alt: 'Compañeros colaborando en una oficina abierta' },
      ],
    },
    growth: {
      title: 'Crecemos con cada edificio al que damos servicio',
      description:
        'Fleet da servicio a equipos de inmobiliario, logística, educación, retail e instalaciones públicas, y nuestro equipo crece con ellos.',
      stats: [
        { value: '3', label: 'ciudades con oficina' },
        { value: '5', label: 'sectores a los que servimos' },
        { value: '20+', label: 'integraciones disponibles' },
        { value: '99,99 %', label: 'de disponibilidad garantizada' },
      ],
    },
    culture: {
      eyebrow: 'La vida en Fleet',
      title: 'Cómo trabajamos',
      description:
        'Nuestros valores guían cómo construimos Fleet y cómo trabajamos juntos cada día.',
      items: [
        {
          title: 'Claridad ante todo',
          description: 'Compartimos el contexto abiertamente para que todos decidan con confianza.',
        },
        {
          title: 'Rapidez frente a complejidad',
          description: 'Preferimos soluciones sencillas y entregamos mejoras rápido.',
        },
        {
          title: 'Centrado en las personas',
          description:
            'Pasamos tiempo con quienes hacen el trabajo y construimos para su día a día.',
        },
        {
          title: 'Confianza por defecto',
          description: 'Nos damos autonomía y asumimos la responsabilidad de los resultados.',
        },
      ],
    },
    spotlight: {
      title: 'Creado por personas a las que les importa el trabajo',
      description:
        'Cada función nace de un equipo real en un edificio real. Escuchamos a técnicos, gestores y proveedores, y creamos herramientas que facilitan su día.',
      points: [
        'Cerca de los clientes en cada región',
        'Responsabilidad de la idea al lanzamiento',
        'Espacio para aprender y crecer',
      ],
      photo: { id: 'colleaguesTablets', alt: 'Dos compañeros revisando trabajo en tabletas' },
    },
    offices: {
      eyebrow: 'Nuestras oficinas',
      title: 'Dónde podría trabajar',
      description: 'Trabaje con compañeros en Bangkok, Los Ángeles y Singapur.',
    },
    join: {
      eyebrow: 'Cómo unirse',
      title: 'Su camino hacia Fleet',
      label: 'Paso',
      steps: [
        {
          title: 'Envíe su CV',
          description: 'Cuéntenos sobre usted y el trabajo que le gustaría hacer.',
        },
        {
          title: 'Primera conversación',
          description: 'Una charla cercana sobre su experiencia y lo que busca.',
        },
        {
          title: 'Conozca al equipo',
          description: 'Hable con sus futuros compañeros y explore el puesto juntos.',
        },
        {
          title: 'Bienvenida',
          description: 'Todo lo necesario para aportar desde el primer día.',
        },
      ],
    },
    invite: {
      title: '¿Listo para unirse a Fleet?',
      description:
        'Siempre nos alegra conocer a personas con talento. Envíenos su CV y cuéntenos cómo le gustaría contribuir.',
      primaryAction: { label: 'Enviar su CV', href: '/contact' },
      secondaryAction: { label: 'Leer nuestra historia', href: '/about' },
    },
  },
  partners: {
    hero: {
      eyebrow: 'Partners',
      title: 'Crezca con Fleet',
      description:
        'Sea partner de Fleet y ayude a equipos inmobiliarios de todo el mundo a gestionar cada sede con confianza. Elija el camino que mejor encaje con su negocio, desde simples recomendaciones hasta una colaboración a largo plazo.',
      photos: [
        { id: 'blueprintPlanning', alt: 'Un equipo revisando planos de un edificio' },
        { id: 'engineersRooftop', alt: 'Dos ingenieros revisando una tableta en una cubierta' },
        { id: 'welcomeHandshake', alt: 'Dos socios estrechándose la mano' },
      ],
    },
    programs: {
      eyebrow: 'Caminos de colaboración',
      title: 'Sea partner de Fleet',
      description: 'Tres formas de crecer juntos, cada una con el apoyo de nuestro equipo.',
      items: [
        {
          title: 'Partner de referencia',
          description:
            '¿Conoce equipos que funcionarían mejor con Fleet? Preséntenoslos y nuestro equipo se ocupa de la demo, el onboarding y el soporte.',
          points: [
            'Presentaciones sencillas',
            'Nuestro equipo dirige cada demo',
            'Poco esfuerzo para usted',
          ],
          action: { label: 'Recomendar un equipo', href: '/contact' },
        },
        {
          title: 'Partner de consultoría e implantación',
          description:
            'Ayude a sus clientes a planificar, lanzar y ampliar Fleet con diseño de flujos, migración de datos y formación.',
          points: [
            'Recursos de onboarding y formación',
            'Guías de flujos y KPI',
            'Implantación conjunta con nuestro equipo',
          ],
          action: { label: 'Solicitar como partner de consultoría', href: '/contact' },
        },
        {
          title: 'Partner tecnológico',
          description:
            'Conecte su producto o plataforma con Fleet mediante la API REST y llegue a equipos inmobiliarios y de instalaciones.',
          points: [
            'Acceso a la API REST',
            'Apoyo en la integración',
            'Valor compartido para clientes comunes',
          ],
          action: { label: 'Solicitar como partner tecnológico', href: '/contact' },
        },
      ],
    },
    why: {
      title: 'Por qué ser partner de Fleet',
      description: 'Una plataforma que sus clientes disfrutarán, con un equipo que le respalda.',
      items: [
        {
          title: 'Hecho para el sector inmobiliario',
          description: 'Diseñado para equipos inmobiliarios y de instalaciones con varias sedes.',
        },
        {
          title: 'Rápido de lanzar',
          description:
            'La mayoría de los equipos empiezan en menos de 7 días con los flujos listos.',
        },
        {
          title: 'Precio por uso',
          description: 'Los clientes pagan por lo que usan, con facturación transparente.',
        },
        {
          title: 'Abierto a integraciones',
          description:
            'Una API REST y más de 20 integraciones conectan Fleet con los sistemas existentes.',
        },
        {
          title: 'Presencia regional',
          description: 'Equipos en Bangkok, Los Ángeles y Singapur con onboarding localizado.',
        },
        {
          title: 'Pensado para móvil',
          description: 'Funciona en cualquier navegador en iOS y Android, listo para cada técnico.',
        },
      ],
    },
    referral: {
      badge: 'Partner de referencia',
      title: '¿Conoce un equipo que necesite Fleet?',
      description: 'Preséntenoslo y nuestro equipo se encargará del resto.',
      action: { label: 'Recomendar un equipo', href: '/contact' },
    },
    cta: {
      title: 'Crezcamos juntos',
      description: 'Cuéntenos sobre su negocio y encontraremos el camino de colaboración adecuado.',
      primaryAction: { label: 'Ser partner', href: '/contact' },
      secondaryAction: { label: 'Leer nuestra historia', href: '/about' },
    },
  },
}
