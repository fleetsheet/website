import type { NavLink } from '@/config'
import type { ResourcesContent } from '@/data/en/resources'

const demo: NavLink = { label: 'Reservar una demo', href: '/contact' }
const apiAccess: NavLink = { label: 'Solicitar acceso a la API', href: '/contact' }

export const resources: ResourcesContent = {
  menu: {
    label: 'Recursos',
    groups: { platform: 'Plataforma RunFleet' },
    promo: {
      title: 'En marcha en menos de 7 días',
      description:
        'Con RunFleet EasyOnboard, un equipo de onboarding adapta sus flujos de trabajo a Fleet en la primera semana.',
      action: { label: 'Descubrir EasyOnboard', href: '/resources/easyonboard' },
    },
  },
  pages: {
    contentLibrary: {
      label: 'Biblioteca de contenidos',
      summary: 'Guías, ideas y análisis para equipos inmobiliarios y de instalaciones.',
      meta: {
        title: 'Biblioteca de contenidos | Fleet',
        description:
          'Artículos prácticos sobre mantenimiento, IA y operación inmobiliaria del equipo de Fleet, de libre acceso.',
      },
    },
    customerStories: {
      label: 'Casos de clientes',
      summary: 'Cómo los equipos gestionan cada sede con Fleet.',
      meta: {
        title: 'Casos de clientes | Fleet',
        description:
          'Descubra cómo equipos inmobiliarios, logísticos y de retail reducen el mantenimiento correctivo y responden más rápido con Fleet.',
      },
    },
    easyOnboard: {
      label: 'RunFleet EasyOnboard',
      summary: 'Onboarding, formación y soporte para empezar en días.',
      meta: {
        title: 'RunFleet EasyOnboard: onboarding, formación y soporte | Fleet',
        description:
          'Empiece con Fleet en menos de 7 días. Nuestro equipo adapta sus flujos, importa sus datos y forma a sus equipos.',
      },
    },
    developers: {
      label: 'Portal para desarrolladores',
      summary: 'Conecte Fleet a sus sistemas con la API REST.',
      meta: {
        title: 'Portal para desarrolladores | Fleet',
        description:
          'Conecte Fleet con herramientas financieras, ERP y sistemas inmobiliarios mediante la API REST y más de 20 integraciones.',
      },
    },
  },
  contentLibrary: {
    title: 'Explore nuestra biblioteca de contenidos',
    description:
      'Ideas prácticas sobre mantenimiento, IA y operación inmobiliaria del equipo de Fleet, de libre acceso.',
    search: {
      label: 'Buscar artículos',
      placeholder: 'Buscar por palabra clave',
      button: 'Buscar',
    },
    featured: { badge: 'Destacado', action: 'Leer el artículo' },
    topics: {
      label: 'Temas',
      all: 'Todos los temas',
      items: {
        ai: 'IA y automatización',
        maintenance: 'Mantenimiento',
        operations: 'Operación digital',
        retail: 'Retail y centros',
      },
    },
    card: { type: 'Artículo', action: 'Leer artículo', englishOnly: 'En inglés' },
    empty: 'Pruebe otra palabra clave o tema para ver más artículos.',
    cta: {
      title: '¿Listo para poner estas ideas en práctica?',
      description:
        'Reserve una visita guiada y descubra cómo Fleet une a sus equipos, activos y proveedores.',
      primaryAction: demo,
      secondaryAction: { label: 'Explorar la plataforma', href: '/platform' },
    },
  },
  customerStories: {
    hero: {
      eyebrow: 'Casos de clientes',
      title: 'Equipos que gestionan cada sede con confianza',
      description:
        'Descubra cómo equipos inmobiliarios, logísticos y de retail usan Fleet para reducir el trabajo correctivo, conectar a sus técnicos y responder más rápido.',
      action: { label: 'Ver todos los casos', href: '#stories' },
    },
    spotlight: {
      label: 'Cliente destacado',
      previous: 'Caso anterior',
      next: 'Caso siguiente',
      action: 'Leer el caso',
    },
    results: [
      { value: 'Hasta un 40 %', label: 'menos mantenimiento correctivo' },
      { value: 'Menos de 7 días', label: 'para incorporar a su equipo' },
      { value: '99,99 %', label: 'de disponibilidad, garantizada por SLA' },
      { value: '20+', label: 'integraciones con sus sistemas' },
    ],
    filter: {
      label: 'Encuentre su sector',
      all: 'Todos los sectores',
      sectors: {
        realEstate: 'Inmobiliario',
        logistics: 'Logística y almacenes',
        retail: 'Retail y centros',
      },
    },
    stories: [
      {
        sector: 'realEstate',
        organization: 'Desarrollo de uso mixto',
        metric: 'Casi un 40 %',
        metricLabel: 'menos carga de mantenimiento correctivo',
        title:
          'Cómo un desarrollo de uso mixto reunió técnicos, registros de activos y trabajos en un solo lugar',
        quote:
          'Fleet ha reducido nuestro mantenimiento correctivo casi un 40 %. Por fin tenemos a los técnicos, los registros de activos y los trabajos en un solo lugar.',
        author: 'Responsable de operaciones',
      },
      {
        sector: 'logistics',
        organization: 'Centro logístico',
        metric: 'A medida',
        metricLabel: 'una solución con soporte más rápido',
        title: 'Por qué un centro logístico eligió una plataforma pensada para su operación',
        quote:
          'Otras plataformas resultaban demasiado complejas o genéricas. Fleet nos dio una solución a medida con un soporte más rápido.',
        author: 'Director de mantenimiento',
      },
      {
        sector: 'retail',
        organization: 'Operador regional de centros comerciales',
        metric: 'Casi un 40 %',
        metricLabel: 'menos mantenimiento correctivo',
        title: 'Cómo un operador regional de centros ganó visibilidad sobre todas sus sedes',
        quote:
          'Fleet nos ayudó a reducir el mantenimiento correctivo casi un 40 %. Ahora vemos todas nuestras sedes y respondemos más rápido.',
        author: 'Director de operaciones',
      },
    ],
    readStory: 'Leer el caso',
    serve: {
      title: 'Equipos de todo tipo de carteras confían en Fleet',
      description:
        'Desde equipos de operaciones de tres personas hasta departamentos de mantenimiento con cientos de profesionales en varias ciudades.',
      items: [
        {
          label: 'Inmobiliario',
          detail: 'Comercial, residencial y uso mixto',
          href: '/solutions/offices-mixed-use',
        },
        {
          label: 'Logística y almacenes',
          detail: 'Centros, muelles y flotas',
          href: '/solutions/shipping-logistics',
        },
        {
          label: 'Educación y campus',
          detail: 'Colegios, universidades y campus',
          href: '/solutions/healthcare-education',
        },
        {
          label: 'Retail y empresas multisede',
          detail: 'Centros, tiendas y sucursales',
          href: '/solutions/shopping-malls-retail',
        },
        {
          label: 'Entidades sin ánimo de lucro y municipales',
          detail: 'Edificios públicos y comunitarios',
          href: '/solutions/facility-management',
        },
      ],
    },
    share: {
      title: 'Comparta su historia con Fleet',
      description: '¿Logra grandes resultados con Fleet? Nos encantaría presentar a su equipo.',
      action: { label: 'Hable con nosotros', href: '/contact' },
    },
    cta: {
      title: 'Escriba su propio caso de éxito',
      description:
        'Reserve una visita guiada y descubra cómo Fleet apoya a sus equipos, activos y proveedores.',
      primaryAction: demo,
      secondaryAction: { label: 'Explorar la plataforma', href: '/platform' },
    },
  },
  easyOnboard: {
    hero: {
      eyebrow: 'RunFleet EasyOnboard',
      title: 'En marcha con Fleet en menos de 7 días',
      description:
        'Nuestro equipo de onboarding adapta sus flujos, incorpora sus datos y forma a su personal, para que cada sede esté lista desde la primera semana.',
      highlights: ['Onboarding localizado', 'Formación para cada rol', 'Soporte por chat en vivo'],
      primaryAction: demo,
      secondaryAction: { label: 'Ver la base de conocimiento', href: '#knowledge-base' },
    },
    stats: [
      { value: 'Menos de 7 días', label: 'hasta el acceso de proveedores y flujos de trabajo' },
      { value: 'Primera semana', label: 'adaptación de flujos con nuestro equipo' },
      { value: 'Cada rol', label: 'formado, de técnicos a dirección' },
      { value: 'Chat en vivo', label: 'soporte directo de nuestro equipo' },
    ],
    steps: {
      title: 'Su primera semana con Fleet',
      description: 'Un recorrido guiado del inicio a la puesta en marcha, adaptado a su cartera.',
      label: 'Paso',
      items: [
        {
          title: 'Inicio y configuración',
          description:
            'Onboarding localizado y configuración de la cuenta para sus regiones, sedes y equipos.',
        },
        {
          title: 'Adaptar sus flujos',
          description:
            'Nuestro equipo adapta a Fleet sus flujos de mantenimiento, inspección y gestión de proveedores.',
        },
        {
          title: 'Incorporar sus datos',
          description:
            'Importe activos y documentos mediante importaciones, sincronización por API o cargas guiadas.',
        },
        {
          title: 'Invitar a equipos y proveedores',
          description:
            'Dé acceso a técnicos, responsables y proveedores, con flujos de trabajo listos para usar.',
        },
        {
          title: 'Formar y arrancar',
          description:
            'Formación por rol y guías de adopción digital para que cada equipo trabaje con confianza.',
        },
      ],
    },
    knowledge: {
      title: 'Base de conocimiento',
      description: 'Guías para que cada equipo saque el máximo partido a Fleet.',
      search: {
        label: 'Buscar en la base de conocimiento',
        placeholder: 'Buscar temas de onboarding',
      },
      empty: 'Pruebe otra palabra clave para ver más temas.',
      groups: {
        start: 'Primeros pasos',
        maintenance: 'Mantenimiento',
        assets: 'Activos y cumplimiento',
        automation: 'Automatización e integraciones',
      },
      faqs: 'Preguntas frecuentes',
    },
    training: {
      title: 'Formación que da confianza',
      description:
        'Una formación estructurada da a responsables y equipos las habilidades y KPI para gestionar cada inmueble.',
      items: [
        {
          title: 'Estandarización de flujos',
          description: 'Para mantenimiento, inspecciones y gestión de proveedores.',
        },
        {
          title: 'Configuración de KPI',
          description:
            'Para tiempos de respuesta, SLA de trabajos, tasas de cierre y estado de activos.',
        },
        {
          title: 'Comunicación entre equipos',
          description: 'Para alinear las regiones en la operación inmobiliaria.',
        },
        {
          title: 'Guías de adopción digital',
          description: 'Que acompañan a los equipos que dejan el papel o sistemas heredados.',
        },
        {
          title: 'Paneles para dirección',
          description: 'Para ver en tiempo real sedes, zonas y grupos de activos.',
        },
      ],
    },
    support: {
      title: 'Soporte cuando lo necesite',
      description:
        'Personas reales, listas para ayudar a sus equipos mucho después de la puesta en marcha.',
      items: [
        {
          title: 'Soporte por chat en vivo',
          description: 'Un chat cercano que le conecta directamente con nuestro equipo.',
        },
        {
          title: 'Equipo en varios husos horarios',
          description:
            'Un equipo de soporte en distintos husos horarios para carteras multirregión.',
        },
        {
          title: 'Recursos de formación',
          description: 'Un equipo de soporte dedicado y recursos de formación y onboarding.',
        },
      ],
    },
    faqTitle: 'Preguntas sobre el onboarding',
    faq: [
      {
        question: '¿Cuánto se tarda en empezar con Fleet?',
        answer:
          'La mayoría de los equipos empiezan con Fleet en menos de 7 días, con acceso completo para proveedores y flujos de trabajo listos.',
      },
      {
        question: '¿Podemos migrar nuestros datos actuales?',
        answer:
          'Sí. Fleet ofrece rutas de migración a medida: importación de activos, sincronización por API y cargas manuales con soporte.',
      },
      {
        question: '¿Quién configura Fleet para nuestros flujos?',
        answer:
          'El constructor visual de flujos permite a su equipo configurar Fleet con facilidad, y nuestro equipo de onboarding le ayuda a adaptar sus flujos en la primera semana.',
      },
      {
        question: '¿Cómo acceden técnicos y proveedores?',
        answer:
          'Fleet funciona en cualquier navegador móvil, así que técnicos y proveedores empiezan al momento con los trabajos asignados.',
      },
    ],
    cta: {
      title: 'Empiece su primera semana con Fleet',
      description: 'Reserve una visita y planificaremos un onboarding a la medida de su cartera.',
      primaryAction: demo,
      secondaryAction: { label: 'Contactar con el equipo', href: '/contact' },
    },
  },
  developers: {
    hero: {
      eyebrow: 'Portal para desarrolladores',
      title: 'Fleet para desarrolladores',
      description:
        'Todo lo necesario para conectar Fleet con sus sistemas, de herramientas financieras a sistemas inmobiliarios.',
      primaryAction: apiAccess,
      secondaryAction: { label: 'Explorar integraciones', href: '/platform/integrations' },
    },
    cards: [
      {
        title: 'Cree su integración',
        description:
          'Conecte contabilidad, cuentas por pagar/cobrar y ERP con Fleet mediante la API REST, con nuestro equipo a su lado.',
        action: apiAccess,
      },
      {
        title: 'Explore las integraciones',
        description:
          'Vea cómo Fleet se conecta con herramientas financieras, ERP, portales de inquilinos y sistemas del edificio.',
        action: { label: 'Ver integraciones', href: '/platform/integrations' },
      },
      {
        title: 'Manténgase al día',
        description:
          'Siga las novedades del producto y las ideas del equipo de Fleet en la biblioteca de contenidos.',
        action: { label: 'Ir a la biblioteca', href: '/insights' },
      },
    ],
    capabilities: {
      title: 'Capacidades de integración',
      description: 'Formas habituales de conectar Fleet para agilizar la operación.',
      items: [
        {
          title: 'Órdenes de trabajo',
          description:
            'Lleve a Fleet las solicitudes de otros sistemas y mantenga sincronizado el estado de los trabajos.',
          points: ['Crear solicitudes', 'Actualizaciones de estado'],
        },
        {
          title: 'Datos de activos',
          description:
            'Importe y sincronice activos para que todos los sistemas compartan una única fuente de datos.',
          points: ['Importación de activos', 'Sincronización por API'],
        },
        {
          title: 'Finanzas y cuentas por pagar/cobrar',
          description:
            'Una el mantenimiento con contabilidad, cuentas por pagar/cobrar y ERP para informes unificados.',
          points: ['Costes y facturas', 'Informes unificados'],
        },
        {
          title: 'Sistemas inmobiliarios',
          description:
            'Conecte portales de inquilinos, control de accesos y sistemas de gestión del edificio.',
          points: ['Portales de inquilinos', 'Gestión del edificio (BMS)'],
        },
      ],
    },
    platform: {
      title: 'Sobre una plataforma segura y fiable',
      items: [
        { value: 'API REST', label: 'para herramientas financieras, ERP y sistemas inmobiliarios' },
        { value: '20+', label: 'integraciones con sus sistemas' },
        { value: '99,99 %', label: 'de disponibilidad, garantizada por SLA' },
        { value: 'Registros de auditoría', label: 'y almacenamiento cifrado' },
      ],
    },
    cta: {
      title: '¿Listo para conectar Fleet?',
      description:
        'Cuéntenos qué sistemas usa y nuestro equipo le ayudará a planificar la integración.',
      primaryAction: apiAccess,
      secondaryAction: demo,
    },
  },
}
