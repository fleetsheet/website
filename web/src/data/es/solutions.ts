import type { NavLink } from '@/config'
import type { PlatformEntry } from '@/data/en/platform'
import type { CategoryPageContent, SolutionsShared } from '@/data/en/solutions'
import type { CategoryPageId, IndustryPageId, SolutionGroup, SolutionPageId } from '@/solutions'

export const menu = {
  label: 'Soluciones',
  groups: {
    category: 'Por categoría',
    industry: 'Por sector',
  } satisfies Record<SolutionGroup, string>,
  contact: '¿No encuentra su sector? Hable con nosotros',
  promo: {
    title: 'Encuentre su solución',
    description: 'Descubra cómo Fleet se adapta a su operación, su cartera y su equipo.',
    action: {
      label: 'Reservar una demo',
      href: '/contact',
    } satisfies NavLink,
  },
}

export const pages: Record<SolutionPageId, PlatformEntry> = {
  cafm: {
    label: 'CAFM/GMAO',
    summary: 'Un sistema conectado para mantenimiento, activos e instalaciones.',
    meta: {
      title: 'Software CAFM y GMAO para equipos con varias sedes | Fleet',
      description:
        'Fleet es la plataforma CAFM y GMAO en la nube que reúne órdenes de trabajo, mantenimiento preventivo, activos y cumplimiento en cada sede.',
    },
  },
  pms: {
    label: 'PMS/REMS',
    summary: 'Operaciones inmobiliarias y de propiedades en una vista en vivo.',
    meta: {
      title: 'Software de gestión de propiedades e inmuebles | Fleet',
      description:
        'Gestione la operación de toda su cartera con Fleet: presupuestos, documentos, mantenimiento e informes en una plataforma.',
    },
  },
  workOrders: {
    label: 'Órdenes de trabajo',
    summary: 'Cree, asigne y cierre cada trabajo con total visibilidad.',
    meta: {
      title: 'Software de gestión de órdenes de trabajo | Fleet',
      description:
        'Cree, asigne, siga y cierre órdenes de trabajo en todas sus sedes, con actualizaciones móviles, seguimiento de SLA y fotos de evidencia.',
    },
  },
  fieldService: {
    label: 'Optimización del servicio de campo',
    summary: 'El técnico adecuado en la sede adecuada, listo para trabajar.',
    meta: {
      title: 'Software de optimización del servicio de campo | Fleet',
      description:
        'Planifique, asigne y siga equipos de campo y contratistas en todas sus sedes, con listas móviles, estado en vivo e informes de rendimiento.',
    },
  },
  tenants: {
    label: 'Gestión de inquilinos y residentes',
    summary: 'Solicitudes, avisos y un servicio que los residentes pueden seguir.',
    meta: {
      title: 'Software de gestión de inquilinos y residentes | Fleet',
      description:
        'Reciba solicitudes de inquilinos y residentes, mantenga a todos informados y resuelva incidencias rápido en cada edificio y vivienda con Fleet.',
    },
  },
  vendors: {
    label: 'Gestión de proveedores y contratistas',
    summary: 'Contratistas, presupuestos, contratos y rendimiento en un lugar.',
    meta: {
      title: 'Software de gestión de proveedores y contratistas | Fleet',
      description:
        'Coordine contratistas y proveedores en una plataforma, con presupuestos, aprobaciones, contratos, certificados y evaluaciones de rendimiento.',
    },
  },
  facilityManagement: {
    label: 'Facility management',
    summary: 'Cada edificio, activo y equipo en un solo panel.',
    meta: {
      title: 'Software de facility management | Fleet',
      description:
        'Gestione la operación de cada sede con Fleet: órdenes de trabajo, mantenimiento preventivo, activos, proveedores y cumplimiento en una plataforma.',
    },
  },
  retail: {
    label: 'Centros comerciales y retail',
    summary: 'Tiendas y zonas comunes listas cada día.',
    meta: {
      title: 'Software de mantenimiento para centros comerciales y retail | Fleet',
      description:
        'Mantenga sus centros listos para los visitantes con órdenes rápidas, planes para ascensores y climatización, coordinación con inquilinos y control del gasto.',
    },
  },
  hospitality: {
    label: 'Hostelería y restauración',
    summary: 'Sala y trastienda listas para cada huésped.',
    meta: {
      title: 'Software de mantenimiento para hoteles y restaurantes | Fleet',
      description:
        'Proteja la experiencia del huésped con órdenes móviles, revisiones de equipos de cocina, cumplimiento de seguridad y mantenimiento preventivo.',
    },
  },
  healthcareEducation: {
    label: 'Salud y educación',
    summary: 'Edificios seguros y conformes para pacientes y estudiantes.',
    meta: {
      title: 'Software de mantenimiento para salud y educación | Fleet',
      description:
        'Mantenga hospitales, clínicas, colegios y campus seguros y conformes con mantenimiento preventivo, registros listos para auditoría y reparaciones rápidas.',
    },
  },
  logistics: {
    label: 'Transporte y logística',
    summary: 'Muelles, equipos y vehículos siempre en movimiento.',
    meta: {
      title: 'Software de mantenimiento para logística y almacenes | Fleet',
      description:
        'Mantenga muelles, cintas, carretillas y vehículos en marcha con órdenes móviles, planes preventivos y seguimiento de paradas en cada centro.',
    },
  },
  hvacLifts: {
    label: 'Climatización, ascensores y escaleras',
    summary: 'Instalaciones críticas al día y certificadas.',
    meta: {
      title: 'Software de mantenimiento de climatización y ascensores | Fleet',
      description:
        'Planifique y demuestre el mantenimiento de climatización, ascensores y escaleras mecánicas con planes recurrentes, certificados, proveedores y análisis de paradas.',
    },
  },
  dataCenters: {
    label: 'Centros de datos',
    summary: 'Refrigeración, energía y disponibilidad bajo control.',
    meta: {
      title: 'Software de mantenimiento para centros de datos | Fleet',
      description:
        'Proteja la disponibilidad con planes para refrigeración y energía, alertas conectadas al BMS, registros de cambios completos y proveedores.',
    },
  },
  fitness: {
    label: 'Gimnasios y centros de bienestar',
    summary: 'Espacios limpios, seguros y operativos para los socios.',
    meta: {
      title: 'Software de mantenimiento para gimnasios y centros de bienestar | Fleet',
      description:
        'Mantenga gimnasios, estudios, piscinas y spas limpios, seguros y operativos con revisiones de equipos, planes de limpieza y reparaciones rápidas.',
    },
  },
  mep: {
    label: 'Mantenimiento MEP',
    summary: 'Mecánica, electricidad y fontanería en un solo flujo.',
    meta: {
      title: 'Software de mantenimiento de instalaciones MEP | Fleet',
      description:
        'Gestione el mantenimiento mecánico, eléctrico y de fontanería de su cartera con planes preventivos, asignación por oficio y registros de cumplimiento.',
    },
  },
  offices: {
    label: 'Oficinas y uso mixto',
    summary: 'Lugares de trabajo productivos y zonas comunes impecables.',
    meta: {
      title: 'Software de mantenimiento para oficinas y edificios mixtos | Fleet',
      description:
        'Gestione oficinas y desarrollos de uso mixto con solicitudes de inquilinos, mantenimiento preventivo, proveedores e informes de toda la cartera.',
    },
  },
  industrial: {
    label: 'Fábricas y plantas industriales',
    summary: 'Activos de producción mantenidos para la máxima disponibilidad.',
    meta: {
      title: 'Software de mantenimiento para fábricas y plantas | Fleet',
      description:
        'Maximice la disponibilidad con registro de activos, mantenimiento preventivo y por uso, inspecciones de seguridad y análisis de paradas.',
    },
  },
  vehicles: {
    label: 'Gestión de vehículos',
    summary: 'Cada vehículo, de la compra a la baja.',
    meta: {
      title: 'Software de gestión de flotas de vehículos | Fleet',
      description:
        'Gestione cada vehículo en un solo lugar: compra, mantenimiento, matriculaciones, siniestros, multas y uso, con registros listos para auditoría.',
    },
  },
}

export const shared: SolutionsShared = {
  actions: {
    primary: {
      label: 'Reservar una demo',
      href: '/contact',
    },
    secondary: {
      label: 'Explorar la plataforma',
      href: '/platform',
    },
  },
  results: {
    eyebrow: 'Resultados',
    title: 'Resultados medibles en cada sede',
    description:
      'Los equipos inmobiliarios y de facility management usan Fleet para reducir el correctivo, empezar rápido y mantener la operación en marcha.',
    items: [
      {
        value: 'Hasta un 40 %',
        label: 'menos mantenimiento correctivo',
      },
      {
        value: 'Menos de 7 días',
        label: 'para poner en marcha a su equipo',
      },
      {
        value: '99,99 %',
        label: 'de disponibilidad, garantizada por SLA',
      },
      {
        value: '20+',
        label: 'integraciones con sus herramientas',
      },
    ],
  },
  why: {
    title: 'Por qué los equipos eligen Fleet',
    description:
      'Fleet está creado para equipos inmobiliarios y de facility management con varias sedes, con la configuración en su núcleo.',
    items: [
      {
        title: 'Flexible',
        description: 'Flujos, reglas y paneles configurados por inmueble, región o cartera.',
      },
      {
        title: 'Inteligente',
        description:
          'RunnerAI y las predicciones basadas en reglas muestran a cada equipo qué atender después.',
      },
      {
        title: 'Colaborativo',
        description:
          'Equipos propios, proveedores y responsables comparten un mismo registro en vivo en cualquier dispositivo.',
      },
    ],
  },
  industries: {
    title: 'Una plataforma para cada sector',
    description: 'Fleet se adapta a los activos, equipos y estándares de su sector.',
    items: [
      {
        id: 'facilityManagement',
        photo: {
          id: 'inspectionClipboard',
          alt: 'Inspector completando una lista de control',
        },
      },
      {
        id: 'retail',
        photo: {
          id: 'mallAtrium',
          alt: 'Personas en el atrio de un centro comercial',
        },
      },
      {
        id: 'hospitality',
        photo: {
          id: 'hotelHousekeeping',
          alt: 'Camarera de pisos preparando una habitación',
        },
      },
      {
        id: 'healthcareEducation',
        photo: {
          id: 'cleanerCorridor',
          alt: 'Limpiador desinfectando el pomo de una puerta',
        },
      },
      {
        id: 'logistics',
        photo: {
          id: 'warehouseTeam',
          alt: 'Equipo de almacén revisando existencias entre estanterías',
        },
      },
      {
        id: 'hvacLifts',
        photo: {
          id: 'hvacTechnicians',
          alt: 'Técnicos de climatización trabajando en equipos de cubierta',
        },
      },
      {
        id: 'dataCenters',
        photo: {
          id: 'dataCenter',
          alt: 'Filas de racks de servidores en un centro de datos',
        },
      },
      {
        id: 'fitness',
        photo: {
          id: 'acFilterService',
          alt: 'Técnico cambiando un filtro de aire acondicionado',
        },
      },
      {
        id: 'mep',
        photo: {
          id: 'electricianPanel',
          alt: 'Electricista trabajando en un cuadro eléctrico',
        },
      },
      {
        id: 'offices',
        photo: {
          id: 'officeFloor',
          alt: 'Oficina diáfana con personas trabajando',
        },
      },
      {
        id: 'industrial',
        photo: {
          id: 'plantManagers',
          alt: 'Director de planta reunido con ingenieros con casco',
        },
      },
      {
        id: 'vehicles',
        photo: {
          id: 'fleetVans',
          alt: 'Furgonetas de reparto aparcadas frente a un almacén',
        },
      },
    ],
  },
  integrate: {
    title: 'Fleet se integra con sus herramientas',
    description:
      'Conecte contabilidad, ERP, sistemas de gestión del edificio, portales de inquilinos y control de accesos con más de 20 integraciones y una API REST abierta.',
    action: {
      label: 'Ver todas las integraciones',
      href: '/platform/integrations',
    },
  },
  faqTitle: 'Preguntas frecuentes',
  cta: {
    title: 'Gestione cada sede con confianza',
    description:
      'Descubra en una visita guiada cómo Fleet reúne a sus equipos, activos y proveedores, adaptado a su cartera.',
    primaryAction: {
      label: 'Reservar una demo',
      href: '/contact',
    },
    secondaryAction: {
      label: 'Explorar la plataforma',
      href: '/platform',
    },
    photo: {
      id: 'techniciansPanel',
      alt: 'Dos técnicos revisando un panel de equipos',
    },
  },
}

export const categories: Record<CategoryPageId, CategoryPageContent> = {
  cafm: {
    hero: {
      eyebrow: 'CAFM/GMAO',
      title: 'Software CAFM y GMAO para operaciones conectadas',
      description:
        'Fleet reúne edificios, activos, personas y registros de cumplimiento en una plataforma en la nube, para que cada sede funcione con información en vivo.',
      highlights: [
        'Órdenes y preventivo',
        'Historial de activos',
        'Registros listos para auditoría',
      ],
      visual: {
        kind: 'jobs',
        title: 'Órdenes de trabajo · Harbour Point',
        items: [
          {
            title: 'Alarma de baja presión en enfriadora',
            location: 'Sala técnica B2',
            status: 'En curso',
            tone: 'info',
          },
          {
            title: 'Prueba trimestral bomba contra incendios',
            location: 'Sala de bombas',
            status: 'Para hoy',
            tone: 'due',
          },
          {
            title: 'Reparación de iluminación del vestíbulo',
            location: 'Planta 1',
            status: 'Completada',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Las instalaciones crecen en complejidad cada año',
        description:
          'Más edificios, activos, proveedores y fechas de cumplimiento, cada uno con sus propios registros, calendarios y estándares.',
        points: ['Muchas sedes', 'Muchos sistemas', 'Muchos estándares'],
      },
      answer: {
        title: 'Todo conectado en un solo CAFM',
        description:
          'Fleet reúne activos, equipos, proveedores y flujos en una plataforma flexible creada para el sector inmobiliario con varias sedes.',
      },
    },
    capabilities: {
      title: 'Creado para todas sus necesidades de facility management',
      description:
        'De la primera solicitud al informe final, todo el mantenimiento en un solo lugar.',
      tabs: [
        {
          icon: 'workOrders',
          label: 'Órdenes',
          title: 'Resuelva antes las reparaciones',
          description:
            'Cree, asigne y siga reparaciones puntuales con fotos, prioridades y actualizaciones en vivo desde el terreno.',
          points: [
            'Solicitudes con fotos y ubicación',
            'Trabajos para equipos propios o proveedores',
            'Plazos SLA en cada trabajo',
          ],
          visual: {
            kind: 'jobs',
            title: 'Trabajos correctivos · Tower B',
            items: [
              {
                title: 'Fuga de agua',
                location: 'Planta 12 · Vivienda 3B',
                status: '2 h de retraso',
                tone: 'overdue',
              },
              {
                title: 'El aire no enfría',
                location: 'Planta 8 · Oficina',
                status: 'Asignado',
                tone: 'info',
              },
              {
                title: 'Cierrapuertas averiado',
                location: 'Vestíbulo',
                status: 'Resuelto',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Preventivo',
          title: 'Anticípese y alargue la vida útil',
          description:
            'Programe mantenimiento recurrente de climatización, fontanería, iluminación y protección contra incendios por tiempo o por uso.',
          points: [
            'Planes recurrentes por tipo de activo',
            'Listas de control en cada visita',
            'Órdenes creadas antes del vencimiento',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan preventivo',
            steps: [
              {
                kind: 'Plan',
                text: 'AHU-07 · servicio mensual',
              },
              {
                kind: 'Luego',
                text: 'Crear la orden 7 días antes',
              },
              {
                kind: 'Luego',
                text: 'Asignar al equipo de clima con lista de control',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Activos',
          title: 'Cada activo, totalmente documentado',
          description:
            'Mantenga un registro en vivo de cada activo con su historial, costes, garantías y manuales.',
          points: [
            'Fichas digitales de cada activo',
            'Historial y costes de reparación',
            'Avisos de garantías y contratos',
          ],
          visual: {
            kind: 'asset',
            title: 'Ficha del activo',
            name: 'Enfriadora CH-02',
            location: 'Harbour Point · Sala técnica B2',
            status: 'Operativo',
            facts: [
              {
                label: 'Último servicio',
                value: '12 sep',
              },
              {
                label: 'Garantía',
                value: 'Mar 2028',
              },
              {
                label: 'Coste del año',
                value: '4.210 $',
              },
              {
                label: 'Trabajos abiertos',
                value: '1',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Informes',
          title: 'Decisiones basadas en datos en vivo',
          description:
            'Vea qué edificios tienen más incidencias recurrentes, qué activos consumen más presupuesto y qué equipos cumplen sus SLA.',
          points: [
            'Paneles en vivo por sede y equipo',
            'KPI personalizados para cada rol',
            'Exportaciones para auditorías y comités',
          ],
          visual: {
            kind: 'chart',
            title: 'SLA cumplido por sede · T3',
            stats: [
              {
                label: 'SLA cumplido',
                value: '96,4 %',
              },
              {
                label: 'Trabajos abiertos',
                value: '128',
              },
            ],
            bars: [
              {
                label: 'Harbour Point',
                value: 96,
              },
              {
                label: 'Tower B',
                value: 92,
              },
              {
                label: 'Northgate',
                value: 89,
              },
              {
                label: 'Bayview',
                value: 94,
              },
              {
                label: 'Westport',
                value: 90,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Automatización',
        title: 'Operaciones más inteligentes que escalan',
        description:
          'Automatice tareas administrativas con el Workflow Builder y deje que RunnerAI indique qué necesita atención.',
        points: [
          'Plantillas recurrentes y avisos inteligentes',
          'Aprobaciones por coste, sede o activo',
          'Sugerencias de RunnerAI con datos en vivo',
        ],
        visual: {
          kind: 'log',
          title: 'Actividad de RunnerAI',
          entries: [
            {
              when: '09:42',
              who: 'RunnerAI',
              what: 'sugirió un plan preventivo para 6 enfriadoras nuevas',
            },
            {
              when: '09:15',
              who: 'RunnerAI',
              what: 'señaló 3 sedes con averías de clima repetidas',
            },
          ],
        },
        photo: {
          id: 'hvacTechnicians',
          alt: 'Técnicos de climatización trabajando en equipos de cubierta',
        },
      },
      {
        tag: 'Cumplimiento',
        title: 'Registros listos para auditoría en cada sede',
        description:
          'Registros de auditoría, almacenamiento de documentos y control de versiones mantienen en orden cada servicio, permiso e inspección.',
        points: [
          'Registros con fecha y hora de cada acción',
          'Certificados guardados con cada activo',
          'Exportaciones para cualquier auditoría en pocos clics',
        ],
        visual: {
          kind: 'files',
          title: 'Cumplimiento · Tower B',
          items: [
            {
              title: 'Certificado contra incendios.pdf',
              location: 'Válido hasta jun 2027',
              status: 'Válido',
              tone: 'done',
            },
            {
              title: 'Inspección ascensores T3.pdf',
              location: 'Ascensores centrales',
              status: 'Verificado',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'inspectionClipboard',
          alt: 'Inspector completando una lista de control',
        },
      },
      {
        tag: 'Colaboración',
        title: 'Un registro compartido para todos los equipos',
        description:
          'Técnicos propios, proveedores y responsables trabajan sobre el mismo registro en vivo, en cualquier móvil, tableta u ordenador.',
        points: [
          'Actualizaciones compartidas en tiempo real',
          'Foto de evidencia en cada trabajo cerrado',
          'Acceso rápido para proveedores',
        ],
        visual: {
          kind: 'jobs',
          title: 'Actividad del equipo',
          items: [
            {
              title: 'Marco L. · Interno',
              location: 'Cerró WO-2291',
              status: 'Hecho',
              tone: 'done',
            },
            {
              title: 'CoolAir · Proveedor',
              location: 'Aceptó WO-2304',
              status: 'Aceptado',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'colleaguesTablets',
          alt: 'Dos compañeros revisando trabajos en tabletas',
        },
      },
    ],
    quote: {
      text: 'Fleet ha reducido nuestro mantenimiento correctivo casi un 40 %. Por fin tenemos a los técnicos, los registros de activos y los trabajos en un solo lugar.',
      author: 'Responsable de operaciones',
      company: 'Desarrollo de uso mixto',
      photo: {
        id: 'factoryTechnician',
        alt: 'Técnico revisando un equipo con una tableta',
      },
    },
    faq: [
      {
        question: '¿Qué es un software CAFM?',
        answer:
          'Un software CAFM (gestión de instalaciones asistida por ordenador) reúne edificios, activos, mantenimiento, documentos y personas en un sistema, para planificar, gestionar e informar sobre cada sede.',
      },
      {
        question: '¿Qué diferencia hay entre CAFM y GMAO?',
        answer:
          'Un GMAO se centra en el mantenimiento y los activos, y un CAFM abarca toda la operación de las instalaciones. Fleet combina ambos: órdenes, preventivo, activos, documentos e informes en una plataforma.',
      },
      {
        question: '¿Puede Fleet gestionar varias sedes?',
        answer:
          'Sí. Fleet admite varias sedes de forma nativa: reglas y flujos por inmueble, supervisores regionales e informes consolidados de toda la cartera.',
      },
      {
        question: '¿Se integra Fleet con mis sistemas actuales?',
        answer:
          'Sí. Fleet se conecta con contabilidad, ERP, sistemas de gestión del edificio, portales de inquilinos y control de accesos mediante más de 20 integraciones y una API REST abierta.',
      },
      {
        question: '¿Cuánto tarda la implantación de Fleet?',
        answer:
          'La mayoría de los equipos empiezan en menos de 7 días. Nuestro equipo de implantación le ayuda a importar activos, planes de mantenimiento y usuarios.',
      },
    ],
  },
  pms: {
    hero: {
      eyebrow: 'PMS/REMS',
      title: 'Gestión de propiedades e inmuebles en una plataforma',
      description:
        'Fleet ofrece a los equipos inmobiliarios una vista en vivo de cada propiedad, desde presupuestos y documentos hasta mantenimiento, proveedores y cumplimiento.',
      highlights: ['Vista de cartera', 'Control de presupuesto', 'Informes para comités'],
      visual: {
        kind: 'asset',
        title: 'Ficha de la propiedad',
        name: 'Harbour Point',
        location: 'Uso mixto · 14 plantas',
        status: 'Activa',
        facts: [
          {
            label: 'Trabajos abiertos',
            value: '12',
          },
          {
            label: 'SLA cumplido',
            value: '96,4 %',
          },
          {
            label: 'Gasto del año',
            value: '184.000 $',
          },
          {
            label: 'Presupuesto usado',
            value: '71 %',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Cada propiedad tiene su propio ritmo',
        description:
          'Contratos de arrendamiento, presupuestos, mantenimiento, proveedores y plazos avanzan a un ritmo distinto en cada edificio.',
        points: ['Datos de cartera', 'Presupuestos por propiedad', 'Informes a propietarios'],
      },
      answer: {
        title: 'Una única fuente de verdad para su cartera',
        description:
          'Fleet unifica los datos operativos de cada propiedad para que gestores de activos, gestores de propiedades y propietarios trabajen con las mismas cifras en vivo.',
      },
    },
    capabilities: {
      title: 'Gestione su cartera con claridad',
      description: 'Operación, finanzas y mantenimiento conectados en una plataforma.',
      tabs: [
        {
          icon: 'portfolio',
          label: 'Cartera',
          title: 'Cada propiedad de un vistazo',
          description:
            'Vea trabajos abiertos, gasto y estado de cumplimiento de cada propiedad en un mapa y un panel.',
          points: [
            'Vistas de mapa y lista de cada propiedad',
            'Estado por edificio, región o propietario',
            'Del nivel de cartera al de activo',
          ],
          visual: {
            kind: 'chart',
            title: 'Gasto por propiedad · año',
            stats: [
              {
                label: 'Gasto',
                value: '184.000 $',
              },
              {
                label: 'Propiedades',
                value: '14',
              },
            ],
            bars: [
              {
                label: 'Harbour Point',
                value: 82,
              },
              {
                label: 'Tower B',
                value: 64,
              },
              {
                label: 'Northgate',
                value: 48,
              },
              {
                label: 'Bayview',
                value: 36,
              },
              {
                label: 'Westport',
                value: 22,
              },
            ],
          },
        },
        {
          icon: 'budget',
          label: 'Presupuestos',
          title: 'Presupuestos y costes bajo control',
          description:
            'Siga el gasto de mantenimiento por propiedad, centro de coste y proveedor frente al presupuesto, con aprobaciones a partir de umbrales definidos.',
          points: [
            'Presupuesto frente a real en cada propiedad',
            'Gasto por centro de coste y proveedor',
            'Aprobaciones a partir de umbrales',
          ],
          visual: {
            kind: 'jobs',
            title: 'Presupuesto por propiedad',
            items: [
              {
                title: 'Harbour Point',
                location: '62.000 $ de 80.000 $',
                status: '78 % usado',
                tone: 'info',
              },
              {
                title: 'Tower B',
                location: '31.000 $ de 35.000 $',
                status: '89 % usado',
                tone: 'due',
              },
              {
                title: 'Bayview',
                location: '18.000 $ de 30.000 $',
                status: '60 % usado',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'documents',
          label: 'Documentos',
          title: 'De los arrendamientos a los informes de servicio',
          description:
            'Guarde arrendamientos, contratos, permisos e informes, vinculados a la propiedad, la unidad y el activo correspondientes.',
          points: [
            'Archivos vinculados a propiedades y unidades',
            'Historial de versiones de cada documento',
            'Avisos antes del vencimiento de permisos y contratos',
          ],
          visual: {
            kind: 'files',
            title: 'Documentos · Harbour Point',
            items: [
              {
                title: 'Relación de arrendamientos 2026.pdf',
                location: 'Arrendamiento',
                status: 'Vigente',
                tone: 'done',
              },
              {
                title: 'Permiso contra incendios.pdf',
                location: 'Vence en 30 días',
                status: 'Renovar',
                tone: 'due',
              },
              {
                title: 'Informe de servicio de clima.pdf',
                location: 'Sala técnica B2',
                status: 'Verificado',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Informes',
          title: 'Informes listos para el comité',
          description:
            'Comparta paneles de solo lectura con propietarios y comités, y programe informes para cada parte interesada.',
          points: [
            'Paneles de solo lectura para propietarios',
            'Informes programados por correo',
            'Resúmenes ejecutivos de toda la cartera',
          ],
          visual: {
            kind: 'steps',
            title: 'Informe al propietario',
            steps: [
              {
                kind: 'Datos',
                text: 'Gasto, SLA y trabajos abiertos',
              },
              {
                kind: 'Filtro',
                text: 'Harbour Point · último trimestre',
              },
              {
                kind: 'Enviar',
                text: 'Primer lunes de cada mes',
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Mantenimiento',
        title: 'Mantenimiento conectado a cada propiedad',
        description:
          'Órdenes, planes preventivos e historial de activos se consolidan en cada propiedad, para ver la salud operativa de toda la cartera.',
        points: [
          'Trabajos abiertos y vencidos por propiedad',
          'Cumplimiento del preventivo por edificio',
          'Costes de activos consolidados en la cartera',
        ],
        visual: {
          kind: 'jobs',
          title: 'Salud de la cartera',
          items: [
            {
              title: 'Harbour Point',
              location: '12 trabajos abiertos',
              status: 'En plazo',
              tone: 'done',
            },
            {
              title: 'Tower B',
              location: '3 trabajos vencidos',
              status: 'Revisar',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'apartmentBuilding',
          alt: 'Edificios residenciales modernos con jardines',
        },
      },
      {
        tag: 'Varias sedes',
        title: 'De un edificio a toda una cartera',
        description:
          'Defina reglas y flujos por propiedad, asigne equipos regionales y consolide informes para ver todas las ubicaciones.',
        points: [
          'Reglas y flujos por propiedad',
          'Equipos y permisos regionales',
          'Informes consolidados de la cartera',
        ],
        visual: {
          kind: 'steps',
          title: 'Despliegue regional',
          steps: [
            {
              kind: 'Región',
              text: 'EAU · 6 propiedades',
            },
            {
              kind: 'Luego',
              text: 'Aplicar reglas de aprobación',
            },
            {
              kind: 'Luego',
              text: 'Consolidar el informe semanal',
            },
          ],
        },
        photo: {
          id: 'engineersRooftop',
          alt: 'Dos ingenieros revisando una tableta en la cubierta',
        },
      },
      {
        tag: 'RunnerAI',
        title: 'Respuestas sobre la cartera en segundos',
        description:
          'Pida a RunnerAI el rendimiento de proveedores por región o un panel de riesgos de sus principales propiedades, y lo construye con datos en vivo.',
        points: [
          'Preguntas en lenguaje natural',
          'Paneles creados en segundos',
          'Respuestas con datos en vivo de la cartera',
        ],
        visual: {
          kind: 'log',
          title: 'Actividad de RunnerAI',
          entries: [
            {
              when: '10:05',
              who: 'Usted',
              what: 'pidió el rendimiento de proveedores en EAU',
            },
            {
              when: '10:05',
              who: 'RunnerAI',
              what: 'creó un panel para 6 propiedades',
            },
          ],
        },
        photo: {
          id: 'warehouseAnalytics',
          alt: 'Supervisor revisando gráficos de rendimiento en pantalla',
        },
      },
    ],
    quote: {
      text: 'Fleet nos ayudó a reducir el mantenimiento correctivo casi un 40 %. Ahora vemos todas nuestras sedes y respondemos más rápido.',
      author: 'Director de operaciones',
      company: 'Operador regional de centros comerciales',
      photo: {
        id: 'mallAtrium',
        alt: 'Personas en el atrio de un centro comercial',
      },
    },
    faq: [
      {
        question: '¿Qué es un PMS o REMS?',
        answer:
          'Un sistema de gestión de propiedades (PMS) o de gestión inmobiliaria (REMS) reúne la información de sus propiedades, desde presupuestos y documentos hasta mantenimiento y proveedores, para gestionar e informar sobre la cartera.',
      },
      {
        question: '¿Cómo ayuda Fleet a los equipos de gestión de propiedades?',
        answer:
          'Fleet conecta mantenimiento, activos, documentos, proveedores y presupuestos de cada propiedad, con paneles que van de un activo a toda la cartera.',
      },
      {
        question: '¿Pueden propietarios y comités ver el rendimiento?',
        answer:
          'Sí. Comparta paneles de solo lectura con propietarios, comités y juntas, y programe informes por correo electrónico.',
      },
      {
        question: '¿Se conecta Fleet con mi sistema de gestión de propiedades o de contabilidad?',
        answer:
          'Sí. Fleet se integra con herramientas de contabilidad, ERP y gestión de propiedades mediante más de 20 integraciones y una API REST abierta.',
      },
      {
        question: '¿Puede Fleet crecer con nuestra cartera?',
        answer:
          'Sí. Fleet admite un edificio o cientos, con reglas por propiedad, equipos regionales e informes de toda la cartera.',
      },
    ],
  },
  workOrders: {
    hero: {
      eyebrow: 'Órdenes de trabajo',
      title: 'Gestión de órdenes de trabajo que mantiene cada trabajo en marcha',
      description:
        'Cree, asigne, siga y cierre cada orden de trabajo en todas sus sedes, con actualizaciones en vivo desde el terreno y total visibilidad para los responsables.',
      highlights: ['Actualizaciones móviles', 'Seguimiento de SLA', 'Fotos de evidencia'],
      visual: {
        kind: 'jobs',
        title: 'Órdenes de trabajo · Hoy',
        items: [
          {
            title: 'Servicio anual de caldera',
            location: 'Northgate · Sala técnica',
            status: 'En 4 h',
            tone: 'due',
          },
          {
            title: 'Fuga de agua, vivienda 3B',
            location: 'Tower B · Planta 12',
            status: 'En curso',
            tone: 'info',
          },
          {
            title: 'Prueba de iluminación de emergencia',
            location: 'Bayview · Todas las plantas',
            status: 'Completada',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Cada solicitud necesita un camino claro',
        description:
          'Las solicitudes llegan por teléfono, correo y chat, y cada una necesita un responsable, una prioridad y una fecha.',
        points: ['Muchos canales', 'Muchos equipos', 'Muchas prioridades'],
      },
      answer: {
        title: 'Un flujo de la solicitud a la resolución',
        description:
          'Fleet convierte cada solicitud en una orden de trabajo con seguimiento, dirigida al equipo adecuado con SLA y estados integrados.',
      },
    },
    capabilities: {
      title: 'Cada orden de trabajo, de principio a fin',
      description: 'Reciba, asigne, complete e informe sobre los trabajos en un flujo conectado.',
      tabs: [
        {
          icon: 'requests',
          label: 'Solicitudes',
          title: 'Reciba solicitudes desde cualquier canal',
          description:
            'Las solicitudes del personal, de inquilinos y por correo se convierten en órdenes de trabajo automáticamente, con fotos y ubicación.',
          points: [
            'Del correo a la orden con Fleet Mail',
            'Fotos y ubicación en cada solicitud',
            'Solicitudes registradas desde cualquier canal',
          ],
          visual: {
            kind: 'steps',
            title: 'Nueva solicitud',
            steps: [
              {
                kind: 'Correo',
                text: 'El aire no enfría, planta 8',
              },
              {
                kind: 'Luego',
                text: 'Orden WO-2310 creada',
              },
              {
                kind: 'Luego',
                text: 'Asignada al equipo de clima',
              },
            ],
          },
        },
        {
          icon: 'routing',
          label: 'Asignación',
          title: 'Cada trabajo al equipo adecuado',
          description:
            'Asigne por ubicación, oficio o proveedor, con niveles de prioridad y avisos automáticos.',
          points: [
            'Reglas de asignación por sede y oficio',
            'Prioridades con objetivos SLA',
            'Aviso inmediato al asignar',
          ],
          visual: {
            kind: 'jobs',
            title: 'Cola de asignación',
            items: [
              {
                title: 'El aire no enfría',
                location: 'Planta 8 · Clima',
                status: 'Equipo de clima',
                tone: 'info',
              },
              {
                title: 'Fallo de puerta de ascensor',
                location: 'Ascensores centrales · Ascensores',
                status: 'LiftCo',
                tone: 'info',
              },
              {
                title: 'Grifo que gotea',
                location: 'Vivienda 1204 · Fontanería',
                status: 'Interno',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'mobile',
          label: 'Móvil',
          title: 'Actualizaciones directas desde el terreno',
          description:
            'Los técnicos aceptan trabajos, añaden fotos y cierran órdenes desde cualquier móvil o tableta, iOS y Android.',
          points: [
            'Trabajos aceptados desde el móvil',
            'Fotos y notas al cerrar',
            'Estado compartido al instante',
          ],
          visual: {
            kind: 'log',
            title: 'Actividad WO-2310',
            entries: [
              {
                when: '09:12',
                who: 'Fleet',
                what: 'creó la orden desde el correo',
              },
              {
                when: '09:20',
                who: 'Marco L.',
                what: 'aceptó y va a la planta 8',
              },
              {
                when: '10:05',
                who: 'Marco L.',
                what: 'cerró el trabajo con 3 fotos',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'SLA',
          title: 'Seguimiento de SLA en cada trabajo',
          description:
            'Controle trabajos abiertos, tiempos de respuesta y trabajos vencidos desde un panel.',
          points: [
            'Tiempos de respuesta y resolución',
            'Trabajos vencidos destacados',
            'Resultados SLA por sede y equipo',
          ],
          visual: {
            kind: 'chart',
            title: 'Tiempo medio de respuesta · horas',
            stats: [
              {
                label: 'SLA cumplido',
                value: '96,4 %',
              },
              {
                label: 'Trabajos abiertos',
                value: '128',
              },
            ],
            bars: [
              {
                label: 'Lun',
                value: 3,
              },
              {
                label: 'Mar',
                value: 2,
              },
              {
                label: 'Mié',
                value: 4,
              },
              {
                label: 'Jue',
                value: 2,
              },
              {
                label: 'Vie',
                value: 3,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Plantillas',
        title: 'Trabajos recurrentes en piloto automático',
        description:
          'Las plantillas crean las órdenes rutinarias según el calendario, con listas de control y responsables.',
        points: [
          'Plantillas para trabajos rutinarios',
          'Listas de control adjuntas automáticamente',
          'Responsables por sede y oficio',
        ],
        visual: {
          kind: 'steps',
          title: 'Trabajo recurrente',
          steps: [
            {
              kind: 'Cada',
              text: 'Lunes, 06:00',
            },
            {
              kind: 'Luego',
              text: 'Crear lista de limpieza por planta',
            },
          ],
        },
        photo: {
          id: 'engineersRooftop',
          alt: 'Dos ingenieros revisando una tableta en la cubierta',
        },
      },
      {
        tag: 'Aprobaciones',
        title: 'Aprobaciones de coste integradas',
        description:
          'Los presupuestos por encima de umbrales definidos llegan al aprobador adecuado, y cada decisión queda registrada en el trabajo.',
        points: [
          'Umbrales por sede o categoría',
          'Aprobaciones desde el móvil o el correo',
          'Cada decisión registrada',
        ],
        visual: {
          kind: 'jobs',
          title: 'Aprobaciones pendientes',
          items: [
            {
              title: 'Presupuesto reparación enfriadora',
              location: '6.800 $ · Harbour Point',
              status: 'Aprobar',
              tone: 'due',
            },
            {
              title: 'Sustitución puerta de ascensor',
              location: '2.100 $ · Tower B',
              status: 'Aprobado',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'acFilterService',
          alt: 'Técnico cambiando un filtro de aire acondicionado',
        },
      },
      {
        tag: 'Informes',
        title: 'Aprenda de cada trabajo',
        description:
          'Detecte incidencias recurrentes por edificio, activo o proveedor y úselas para mejorar su estrategia preventiva.',
        points: [
          'Incidencias recurrentes por activo',
          'Coste por trabajo y por sede',
          'Tendencias a lo largo del tiempo',
        ],
        visual: {
          kind: 'chart',
          title: 'Incidencias recurrentes · T3',
          stats: [
            {
              label: 'Averías repetidas',
              value: '14',
            },
            {
              label: 'Sedes',
              value: '5',
            },
          ],
          bars: [
            {
              label: 'Clima',
              value: 46,
            },
            {
              label: 'Ascensores',
              value: 28,
            },
            {
              label: 'Fontanería',
              value: 19,
            },
            {
              label: 'Iluminación',
              value: 12,
            },
            {
              label: 'Puertas',
              value: 7,
            },
          ],
        },
        photo: {
          id: 'warehouseAnalytics',
          alt: 'Supervisor revisando gráficos de rendimiento en pantalla',
        },
      },
    ],
    quote: {
      text: 'Otras plataformas resultaban demasiado complejas o genéricas. Fleet nos dio una solución a medida con un soporte más rápido.',
      author: 'Director de mantenimiento',
      company: 'Centro logístico',
      photo: {
        id: 'hvacTechnicians',
        alt: 'Técnicos de climatización trabajando en equipos de cubierta',
      },
    },
    faq: [
      {
        question: '¿Qué es un software de gestión de órdenes de trabajo?',
        answer:
          'Es un software que sigue cada trabajo de mantenimiento desde la solicitud hasta el cierre, con responsable, prioridad, fecha, coste y evidencia del trabajo.',
      },
      {
        question: '¿Cómo se convierten las solicitudes en órdenes de trabajo?',
        answer:
          'Las solicitudes del personal, de inquilinos y por correo se convierten en órdenes automáticamente. Con Fleet Mail, un correo a su buzón de mantenimiento crea una orden con todos los detalles.',
      },
      {
        question: '¿Pueden los proveedores recibir y actualizar órdenes?',
        answer:
          'Sí. Los proveedores reciben los trabajos con acceso rápido y luego los aceptan, actualizan y cierran con fotos y notas.',
      },
      {
        question: '¿Necesitan los técnicos dispositivos especiales?',
        answer:
          'Fleet funciona en cualquier móvil, tableta u ordenador, iOS y Android, para que los técnicos empiecen enseguida.',
      },
      {
        question: '¿Cómo sigue Fleet los SLA?',
        answer:
          'Cada orden lleva objetivos SLA de respuesta y resolución, y los paneles muestran resultados por sede, equipo y proveedor.',
      },
    ],
  },
  fieldService: {
    hero: {
      eyebrow: 'Optimización del servicio de campo',
      title: 'Optimización del servicio de campo para equipos móviles',
      description:
        'Envíe al técnico adecuado a la sede adecuada con la información adecuada, y siga el avance en vivo desde la primera visita hasta el cierre.',
      highlights: ['Asignación inteligente', 'Listas móviles', 'Estado en vivo'],
      visual: {
        kind: 'log',
        title: 'Actividad de campo · Hoy',
        entries: [
          {
            when: '08:10',
            who: 'Aisha K.',
            what: 'llegó a Northgate · Sala técnica',
          },
          {
            when: '09:35',
            who: 'CoolAir',
            what: 'completó el servicio de AHU-07 con lecturas',
          },
          {
            when: '10:20',
            who: 'Marco L.',
            what: 'inició la inspección de ascensores en Tower B',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Los equipos de campo cubren más terreno',
        description:
          'Los técnicos se mueven cada día entre sedes, oficios y proveedores, y cada visita necesita los datos correctos a mano.',
        points: ['Varias sedes', 'Oficios distintos', 'SLA exigentes'],
      },
      answer: {
        title: 'Cada visita lista para trabajar',
        description:
          'Fleet da a los técnicos los detalles del trabajo, el historial y las listas de control en el móvil, y a los responsables una vista en vivo de cada equipo.',
      },
    },
    capabilities: {
      title: 'Optimice cada visita de campo',
      description: 'Planifique, asigne, complete y mida el trabajo de campo en toda su cartera.',
      tabs: [
        {
          icon: 'scheduling',
          label: 'Planificación',
          title: 'Planifique el día con confianza',
          description:
            'Programe trabajo preventivo y correctivo por sede, oficio y disponibilidad, con la carga equilibrada entre equipos y proveedores.',
          points: [
            'Calendarios por sede, oficio y disponibilidad',
            'Carga equilibrada entre equipos',
            'Preventivo y correctivo juntos',
          ],
          visual: {
            kind: 'jobs',
            title: 'Hoy · Northgate',
            items: [
              {
                title: 'Servicio mensual AHU-07',
                location: '08:00 · Aisha K.',
                status: 'Programado',
                tone: 'info',
              },
              {
                title: 'Inspección de puertas cortafuego',
                location: '11:00 · Marco L.',
                status: 'Programado',
                tone: 'info',
              },
              {
                title: 'Revisión sala de bombas',
                location: '14:00 · CoolAir',
                status: 'Confirmado',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'routing',
          label: 'Asignación',
          title: 'Asigne por ubicación y oficio',
          description:
            'Envíe cada trabajo al técnico o proveedor cualificado más cercano, por edificio, zona o tipo de tarea.',
          points: [
            'Asignación por edificio y zona',
            'Habilidades ajustadas a cada trabajo',
            'Proveedores en el mismo flujo',
          ],
          visual: {
            kind: 'steps',
            title: 'Regla de asignación',
            steps: [
              {
                kind: 'Disparador',
                text: 'Trabajo de clima en Northgate',
              },
              {
                kind: 'Si',
                text: 'La prioridad es alta',
              },
              {
                kind: 'Luego',
                text: 'Asignar al técnico de clima más cercano',
              },
            ],
          },
        },
        {
          icon: 'mobile',
          label: 'En sitio',
          title: 'Todo lo que el técnico necesita en sitio',
          description:
            'Historial del activo, manuales y listas de control se abren desde el trabajo, con fotos, lecturas y firmas recogidas al momento.',
          points: [
            'Activos abiertos por búsqueda o escaneo',
            'Listas con fotos y lecturas',
            'Firma al finalizar',
          ],
          visual: {
            kind: 'asset',
            title: 'Activo en sitio',
            name: 'Ascensor L2',
            location: 'Northgate Mall · Ascensores centrales',
            status: 'Servicio pendiente',
            facts: [
              {
                label: 'Última inspección',
                value: '02 ago',
              },
              {
                label: 'Certificado',
                value: 'Válido hasta ene 2027',
              },
              {
                label: 'Manual',
                value: 'Manual ascensor L2.pdf',
              },
              {
                label: 'Trabajos abiertos',
                value: '2',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Rendimiento',
          title: 'Mida el rendimiento en campo',
          description:
            'Vea tiempos de respuesta, resolución en la primera visita y resultados SLA por técnico, equipo y proveedor.',
          points: [
            'Tiempos de respuesta por equipo',
            'Tasa de resolución en la primera visita',
            'Resultados SLA por proveedor',
          ],
          visual: {
            kind: 'chart',
            title: 'Resolución en la primera visita · T3',
            stats: [
              {
                label: 'Primera visita',
                value: '87 %',
              },
              {
                label: 'SLA cumplido',
                value: '96,4 %',
              },
            ],
            bars: [
              {
                label: 'Clima',
                value: 88,
              },
              {
                label: 'Ascensores',
                value: 84,
              },
              {
                label: 'Electricidad',
                value: 91,
              },
              {
                label: 'Fontanería',
                value: 86,
              },
              {
                label: 'Incendios',
                value: 93,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Móvil',
        title: 'Creado para cualquier condición',
        description:
          'Fleet funciona en zonas con poca conectividad, como salas técnicas, sótanos y aparcamientos, para que las actualizaciones lleguen al equipo donde se trabaja.',
        points: [
          'Rendimiento con poca conectividad',
          'Cualquier móvil o tableta, iOS y Android',
          'Fotos y lecturas guardadas en el trabajo',
        ],
        visual: {
          kind: 'jobs',
          title: 'Actualizaciones de campo',
          items: [
            {
              title: 'Revisión de bomba en sótano',
              location: 'Aparcamiento B2',
              status: 'Sincronizado',
              tone: 'done',
            },
            {
              title: 'Servicio de AHU en cubierta',
              location: 'Cubierta',
              status: 'Sincronizado',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'factoryTechnician',
          alt: 'Técnico revisando un equipo con una tableta',
        },
      },
      {
        tag: 'Comunicación',
        title: 'Avisos y aprobaciones en tiempo real',
        description:
          'Los técnicos reciben al instante trabajos nuevos, aprobaciones y novedades, y los responsables ven cada cambio de estado en el momento.',
        points: [
          'Avisos de trabajo instantáneos',
          'Aprobaciones desde el terreno',
          'Estado en vivo para responsables',
        ],
        visual: {
          kind: 'log',
          title: 'Avisos',
          entries: [
            {
              when: '09:02',
              who: 'Fleet',
              what: 'envió el trabajo urgente WO-2318 a Aisha K.',
            },
            {
              when: '09:06',
              who: 'Aisha K.',
              what: 'aceptó y va de camino',
            },
          ],
        },
        photo: {
          id: 'technicianPlantRoom',
          alt: 'Técnico revisando equipos en una sala técnica',
        },
      },
      {
        tag: 'Proveedores',
        title: 'Contratistas en el mismo flujo',
        description:
          'Los técnicos externos aceptan, actualizan y cierran trabajos con acceso rápido, junto a su equipo propio.',
        points: [
          'Acceso rápido para proveedores',
          'Mismas listas y estándares',
          'Trabajos de proveedores en el mismo panel',
        ],
        visual: {
          kind: 'jobs',
          title: 'Trabajos de proveedores',
          items: [
            {
              title: 'CoolAir · Clima',
              location: '4 trabajos hoy',
              status: 'En plazo',
              tone: 'done',
            },
            {
              title: 'LiftCo · Ascensores',
              location: '2 trabajos hoy',
              status: '1 pendiente',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'hvacTechnicians',
          alt: 'Técnicos de climatización trabajando en equipos de cubierta',
        },
      },
    ],
    quote: {
      text: 'Fleet ha reducido nuestro mantenimiento correctivo casi un 40 %. Por fin tenemos a los técnicos, los registros de activos y los trabajos en un solo lugar.',
      author: 'Responsable de operaciones',
      company: 'Desarrollo de uso mixto',
      photo: {
        id: 'warehouseTeam',
        alt: 'Equipo de almacén revisando existencias entre estanterías',
      },
    },
    faq: [
      {
        question: '¿Qué es la optimización del servicio de campo?',
        answer:
          'Es planificar, asignar y completar el trabajo en sitio de forma eficiente, para que los técnicos lleguen al trabajo correcto con la información correcta y los responsables sigan los resultados.',
      },
      {
        question: '¿Cómo asigna Fleet los trabajos?',
        answer:
          'Las reglas de asignación reparten los trabajos por edificio, zona, oficio o proveedor, con prioridades y objetivos SLA en cada trabajo.',
      },
      {
        question: '¿Funciona Fleet con poca cobertura?',
        answer:
          'Fleet está diseñado para rendir en zonas con poco ancho de banda, como salas técnicas, sótanos y aparcamientos.',
      },
      {
        question: '¿Pueden usar Fleet los contratistas externos?',
        answer:
          'Sí. Los proveedores acceden rápido a sus trabajos y siguen las mismas listas y estándares que su equipo propio.',
      },
      {
        question: '¿Qué ven los responsables en tiempo real?',
        answer:
          'Ven el estado de los trabajos, la actividad de los técnicos, los trabajos vencidos y los resultados SLA de cada sede en el momento.',
      },
    ],
  },
  tenants: {
    hero: {
      eyebrow: 'Gestión de inquilinos y residentes',
      title: 'Gestión de inquilinos y residentes que genera confianza',
      description:
        'Dé a inquilinos y residentes una forma sencilla de hacer solicitudes, infórmeles en cada paso y resuelva rápido en todos sus edificios.',
      highlights: ['Solicitudes sencillas', 'Avisos claros', 'Resolución más rápida'],
      visual: {
        kind: 'jobs',
        title: 'Solicitudes de residentes · Bayview',
        items: [
          {
            title: 'Fuga en el grifo de la cocina',
            location: 'Vivienda 1204',
            status: 'Resuelta',
            tone: 'done',
          },
          {
            title: 'El aire no enfría',
            location: 'Vivienda 806',
            status: 'Técnico en camino',
            tone: 'info',
          },
          {
            title: 'Luz del vestíbulo fundida',
            location: 'Torre A · Vestíbulo',
            status: 'Programada',
            tone: 'due',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Los residentes esperan un servicio rápido y visible',
        description:
          'Las solicitudes de fontanería, climatización e iluminación llegan cada día, y los residentes quieren saber quién se encarga y cuándo.',
        points: ['Solicitudes diarias', 'Muchas viviendas', 'Zonas comunes'],
      },
      answer: {
        title: 'Cada solicitud seguida hasta su resolución',
        description:
          'Fleet convierte cada solicitud en una orden con un estado claro, para que residentes, responsables y técnicos compartan la misma vista.',
      },
    },
    capabilities: {
      title: 'Una mejor experiencia para vivir y trabajar',
      description:
        'De la primera solicitud al cierre, un servicio que residentes e inquilinos pueden seguir.',
      tabs: [
        {
          icon: 'requests',
          label: 'Solicitudes',
          title: 'Solicitudes sencillas',
          description:
            'Las solicitudes llegan por correo, desde su portal de inquilinos o desde recepción, y se convierten en órdenes automáticamente.',
          points: [
            'Del correo a la orden con Fleet Mail',
            'Integración con portales de inquilinos',
            'Registro en recepción en segundos',
          ],
          visual: {
            kind: 'steps',
            title: 'Solicitud de residente',
            steps: [
              {
                kind: 'Correo',
                text: 'Gotea el grifo de la cocina, vivienda 1204',
              },
              {
                kind: 'Luego',
                text: 'Orden creada con fotos',
              },
              {
                kind: 'Luego',
                text: 'Fontanero asignado para hoy',
              },
            ],
          },
        },
        {
          icon: 'communication',
          label: 'Avisos',
          title: 'Estado claro en cada paso',
          description:
            'Fleet mantiene informados a todos desde el primer aviso hasta el cierre, con novedades a medida que avanza el trabajo.',
          points: [
            'Avisos en cada etapa del trabajo',
            'Foto de evidencia al cerrar',
            'Estado visible para recepción',
          ],
          visual: {
            kind: 'log',
            title: 'Avisos de la solicitud',
            entries: [
              {
                when: '09:10',
                who: 'Fleet',
                what: 'recibió la solicitud de la vivienda 1204',
              },
              {
                when: '09:25',
                who: 'Fleet',
                what: 'asignó al fontanero interno',
              },
              {
                when: '11:40',
                who: 'Marco L.',
                what: 'resolvió la fuga con fotos',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Viviendas',
          title: 'Historial de cada vivienda',
          description:
            'Guarde el historial de mantenimiento de cada vivienda y activo común, desde ascensores y bombas hasta vestíbulos y aparcamientos.',
          points: [
            'Historial de mantenimiento por vivienda',
            'Activos comunes según el plan',
            'Costes por vivienda y zona',
          ],
          visual: {
            kind: 'asset',
            title: 'Ficha de la vivienda',
            name: 'Vivienda 1204',
            location: 'Bayview · Torre A',
            status: 'Ocupada',
            facts: [
              {
                label: 'Solicitudes del año',
                value: '4',
              },
              {
                label: 'Última visita',
                value: '18 sep',
              },
              {
                label: 'Trabajos abiertos',
                value: '0',
              },
              {
                label: 'Coste del año',
                value: '640 $',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Informes',
          title: 'Tiempos de resolución visibles para la junta',
          description:
            'Siga tiempos de resolución y gasto por edificio, zona o vivienda, y comparta paneles de solo lectura con comités y juntas.',
          points: [
            'Tiempos de resolución por edificio',
            'Gasto por zona y vivienda',
            'Paneles de solo lectura para la junta',
          ],
          visual: {
            kind: 'chart',
            title: 'Resolución media · días',
            stats: [
              {
                label: 'Resueltas',
                value: '312',
              },
              {
                label: 'Abiertas',
                value: '8',
              },
            ],
            bars: [
              {
                label: 'Torre A',
                value: 2,
              },
              {
                label: 'Torre B',
                value: 3,
              },
              {
                label: 'Villas',
                value: 2,
              },
              {
                label: 'Podio',
                value: 1,
              },
              {
                label: 'Aparcamiento',
                value: 2,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Recepción',
        title: 'Recepción, seguridad y mantenimiento en sintonía',
        description:
          'Las vistas por rol dan a conserjería, seguridad y mantenimiento justo lo que necesitan para actuar rápido.',
        points: [
          'Vistas adaptadas a cada rol',
          'Solicitudes registradas en recepción',
          'Notas de relevo entre turnos',
        ],
        visual: {
          kind: 'jobs',
          title: 'Recepción',
          items: [
            {
              title: 'Luz del cuarto de paquetería',
              location: 'Registrado por conserjería',
              status: 'Asignado',
              tone: 'info',
            },
            {
              title: 'Fallo en acceso de la puerta',
              location: 'Registrado por seguridad',
              status: 'Resuelto',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'supportAgent',
          alt: 'Agente de atención al cliente con auriculares',
        },
      },
      {
        tag: 'Zonas comunes',
        title: 'Activos comunes en perfecto estado',
        description:
          'Tareas programadas, avisos en tiempo real y registros de auditoría mantienen en marcha ascensores, bombas, protección contra incendios y servicios comunes.',
        points: [
          'Planes preventivos para activos comunes',
          'Avisos de averías en tiempo real',
          'Registro de auditoría de cada visita',
        ],
        visual: {
          kind: 'jobs',
          title: 'Activos comunes · Bayview',
          items: [
            {
              title: 'Revisión mensual ascensor L1',
              location: 'Torre A',
              status: 'Completada',
              tone: 'done',
            },
            {
              title: 'Servicio bomba de piscina',
              location: 'Zona de ocio',
              status: 'Para hoy',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'apartmentBuilding',
          alt: 'Edificios residenciales modernos con jardines',
        },
      },
      {
        tag: 'Servicio',
        title: 'Un servicio de nivel hotelero',
        description:
          'Limpieza, pisos y mantenimiento siguen el calendario, para que cada espacio esté listo para residentes e invitados.',
        points: [
          'Calendarios de limpieza y pisos',
          'Listas con foto de evidencia',
          'Estándares comunes en todos los edificios',
        ],
        visual: {
          kind: 'steps',
          title: 'Lista de cambio de inquilino',
          steps: [
            {
              kind: 'Vivienda',
              text: 'Vivienda 806 · entrada el viernes',
            },
            {
              kind: 'Luego',
              text: 'Limpieza a fondo e inspección',
            },
            {
              kind: 'Luego',
              text: 'Llaves listas en recepción',
            },
          ],
        },
        photo: {
          id: 'hotelHousekeeping',
          alt: 'Camarera de pisos preparando una habitación',
        },
      },
    ],
    quote: {
      text: 'Fleet ha reducido nuestro mantenimiento correctivo casi un 40 %. Por fin tenemos a los técnicos, los registros de activos y los trabajos en un solo lugar.',
      author: 'Responsable de operaciones',
      company: 'Desarrollo de uso mixto',
      photo: {
        id: 'technicianDrill',
        alt: 'Técnico instalando un soporte con un taladro',
      },
    },
    faq: [
      {
        question: '¿Cómo hacen las solicitudes inquilinos y residentes?',
        answer:
          'Las solicitudes llegan por correo con Fleet Mail, desde su portal de inquilinos mediante integraciones o a través de recepción y seguridad, y cada una se convierte en una orden de trabajo.',
      },
      {
        question: '¿Cómo se mantiene informados a los residentes?',
        answer:
          'Fleet mantiene a todos al tanto desde el primer aviso hasta el cierre, con novedades a medida que avanza el trabajo y foto de evidencia al terminar.',
      },
      {
        question: '¿Podemos seguir el mantenimiento por vivienda?',
        answer:
          'Sí. Fleet guarda el historial y los costes de cada vivienda y activo común en todos los edificios y zonas.',
      },
      {
        question: '¿Pueden las juntas y comités ver el rendimiento?',
        answer:
          'Sí. Comparta paneles de solo lectura con comités y juntas, con tiempos de resolución y gasto por edificio.',
      },
      {
        question: '¿Sirve Fleet también para inquilinos comerciales?',
        answer:
          'Sí. Fleet da servicio a comunidades residenciales, oficinas, comercios y desarrollos de uso mixto en una plataforma.',
      },
    ],
  },
  vendors: {
    hero: {
      eyebrow: 'Gestión de proveedores y contratistas',
      title: 'Gestión de proveedores y contratistas en todas sus sedes',
      description:
        'Coordine contratistas, presupuestos, contratos y rendimiento en una plataforma, con cada trabajo, aprobación y documento registrados.',
      highlights: [
        'Evaluación de proveedores',
        'Aprobación de presupuestos',
        'Seguimiento de contratos',
      ],
      visual: {
        kind: 'jobs',
        title: 'Proveedores · Este mes',
        items: [
          {
            title: 'CoolAir · Clima',
            location: '42 trabajos · 98 % a tiempo',
            status: 'Preferente',
            tone: 'done',
          },
          {
            title: 'LiftCo · Ascensores',
            location: '18 trabajos · 91 % a tiempo',
            status: 'Revisión pendiente',
            tone: 'due',
          },
          {
            title: 'BrightSpark · Electricidad',
            location: '27 trabajos · 95 % a tiempo',
            status: 'En renovación',
            tone: 'info',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Los socios impulsan su operación',
        description:
          'Los socios de climatización, ascensores, limpieza y seguridad aportan cada uno sus contratos, presupuestos, certificados y niveles de servicio.',
        points: ['Muchos contratistas', 'Muchos contratos', 'Muchos presupuestos'],
      },
      answer: {
        title: 'Un proceso compartido para cada socio',
        description:
          'Fleet da a los proveedores acceso rápido a sus trabajos y a usted plena visibilidad de coste, calidad y cumplimiento.',
      },
    },
    capabilities: {
      title: 'Gestione cada relación con proveedores',
      description: 'Del alta a la evaluación, la coordinación de proveedores en un lugar.',
      tabs: [
        {
          icon: 'vendors',
          label: 'Directorio',
          title: 'Un directorio completo de proveedores',
          description:
            'Guarde contactos, oficios, zonas de cobertura, certificados y tarifas de cada proveedor en un lugar.',
          points: [
            'Oficios y zonas de cobertura',
            'Tarifas y condiciones del contrato',
            'Certificados y seguros registrados',
          ],
          visual: {
            kind: 'jobs',
            title: 'Directorio de proveedores',
            items: [
              {
                title: 'CoolAir',
                location: 'Clima · Todas las sedes',
                status: 'Activo',
                tone: 'done',
              },
              {
                title: 'LiftCo',
                location: 'Ascensores · Región EAU',
                status: 'Activo',
                tone: 'done',
              },
              {
                title: 'SafeGuard',
                location: 'Protección contra incendios · Tower B',
                status: 'En alta',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'approvals',
          label: 'Presupuestos',
          title: 'Presupuestos y aprobaciones en flujo',
          description:
            'Los proveedores envían presupuestos en el propio trabajo, y las aprobaciones se dirigen por coste, sede o categoría.',
          points: [
            'Presupuestos adjuntos al trabajo',
            'Aprobaciones por umbral',
            'Cada decisión registrada',
          ],
          visual: {
            kind: 'steps',
            title: 'Aprobación de presupuesto',
            steps: [
              {
                kind: 'Presupuesto',
                text: 'CoolAir · 3.800 $ reparación de enfriadora',
              },
              {
                kind: 'Aprobar',
                text: 'La responsable financiera aprueba desde el correo',
              },
              {
                kind: 'Luego',
                text: 'Proveedor avisado y trabajo programado',
              },
            ],
          },
        },
        {
          icon: 'documents',
          label: 'Contratos',
          title: 'Contratos y certificados al día',
          description:
            'Siga condiciones de contrato, seguros y certificados, con avisos antes de cada vencimiento.',
          points: [
            'Condiciones de contrato por proveedor',
            'Seguimiento de seguros y certificados',
            'Avisos antes del vencimiento',
          ],
          visual: {
            kind: 'files',
            title: 'Documentos de proveedores',
            items: [
              {
                title: 'Contrato de servicio LiftCo.pdf',
                location: 'Se renueva en 30 días',
                status: 'Renovar',
                tone: 'due',
              },
              {
                title: 'Seguro CoolAir.pdf',
                location: 'Válido hasta mar 2027',
                status: 'Válido',
                tone: 'done',
              },
              {
                title: 'Certificado SafeGuard.pdf',
                location: 'Subido hoy',
                status: 'Revisar',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Rendimiento',
          title: 'Evaluación de cada proveedor',
          description:
            'Compare tiempos de respuesta, resultados SLA y costes entre proveedores y regiones.',
          points: [
            'Tiempos de respuesta por proveedor',
            'Resultados SLA por región',
            'Coste por trabajo comparado',
          ],
          visual: {
            kind: 'chart',
            title: 'Trabajos a tiempo · T3',
            stats: [
              {
                label: 'Proveedores',
                value: '24',
              },
              {
                label: 'A tiempo',
                value: '95 %',
              },
            ],
            bars: [
              {
                label: 'CoolAir',
                value: 98,
              },
              {
                label: 'LiftCo',
                value: 91,
              },
              {
                label: 'BrightSpark',
                value: 95,
              },
              {
                label: 'SafeGuard',
                value: 93,
              },
              {
                label: 'CleanPro',
                value: 96,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Acceso',
        title: 'Proveedores operativos en minutos',
        description:
          'Los proveedores acceden rápido a sus propios trabajos y documentos, para que los nuevos socios trabajen desde el primer día.',
        points: [
          'Acceso rápido con mínima configuración',
          'Cada proveedor ve solo sus trabajos',
          'Mismos estándares que los equipos propios',
        ],
        visual: {
          kind: 'jobs',
          title: 'Alta de proveedores',
          items: [
            {
              title: 'SafeGuard',
              location: 'Acceso concedido',
              status: 'Activo',
              tone: 'done',
            },
            {
              title: 'CleanPro',
              location: 'Invitación enviada',
              status: 'Pendiente',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'partnerMeeting',
          alt: 'Reunión de equipo con socios alrededor de una mesa',
        },
      },
      {
        tag: 'Suministradores',
        title: 'Suministradores vinculados a los activos',
        description:
          'Vincule suministradores a los activos y contratos que atienden, con garantía y datos de servicio visibles en cada trabajo.',
        points: [
          'Suministradores vinculados a activos',
          'Garantía visible en cada trabajo',
          'Historial de servicio por suministrador',
        ],
        visual: {
          kind: 'asset',
          title: 'Vínculo con suministrador',
          name: 'Enfriadora CH-02',
          location: 'Suministrador · CoolAir',
          status: 'En garantía',
          facts: [
            {
              label: 'Garantía',
              value: 'Mar 2028',
            },
            {
              label: 'Trabajos del año',
              value: '6',
            },
            {
              label: 'Coste del año',
              value: '4.210 $',
            },
            {
              label: 'Contrato',
              value: 'Anual',
            },
          ],
        },
        photo: {
          id: 'stockCheck',
          alt: 'Coordinador revisando existencias en estanterías',
        },
      },
      {
        tag: 'Comunicación',
        title: 'Comunicación clara con cada socio',
        description:
          'Novedades, fotos y aprobaciones fluyen en tiempo real entre su equipo y los proveedores, en Fleet o por correo con Fleet Mail.',
        points: [
          'Novedades y fotos en tiempo real',
          'Aprobaciones por correo o en Fleet',
          'Historial completo en cada trabajo',
        ],
        visual: {
          kind: 'log',
          title: 'Hilo con proveedor · WO-2304',
          entries: [
            {
              when: '09:14',
              who: 'CoolAir',
              what: 'compartió un presupuesto de 3.800 $',
            },
            {
              when: '09:40',
              who: 'Finanzas',
              what: 'aprobó el presupuesto por correo',
            },
          ],
        },
        photo: {
          id: 'colleaguesTablets',
          alt: 'Dos compañeros revisando trabajos en tabletas',
        },
      },
    ],
    quote: {
      text: 'Otras plataformas resultaban demasiado complejas o genéricas. Fleet nos dio una solución a medida con un soporte más rápido.',
      author: 'Director de mantenimiento',
      company: 'Centro logístico',
      photo: {
        id: 'warehouseTeam',
        alt: 'Equipo de almacén revisando existencias entre estanterías',
      },
    },
    faq: [
      {
        question: '¿Cómo acceden los proveedores a Fleet?',
        answer:
          'Los proveedores acceden rápido a sus propios trabajos y documentos con mínima configuración, en cualquier móvil, tableta u ordenador.',
      },
      {
        question: '¿Pueden los proveedores enviar presupuestos en Fleet?',
        answer:
          'Sí. Los proveedores adjuntan presupuestos al trabajo y la aprobación llega a la persona adecuada según coste, sede o categoría.',
      },
      {
        question: '¿Cómo mide Fleet el rendimiento de los proveedores?',
        answer:
          'Fleet registra tiempos de respuesta, resultados SLA y costes de cada trabajo, y las evaluaciones comparan proveedores por región y oficio.',
      },
      {
        question: '¿Puede Fleet seguir contratos y certificados de proveedores?',
        answer:
          'Sí. Guarde contratos, seguros y certificados de cada proveedor, con avisos antes de cada vencimiento.',
      },
      {
        question: '¿Funciona Fleet con proveedores en varias regiones?',
        answer:
          'Sí. Defina zonas de cobertura y reglas por región, y compare el rendimiento de proveedores en toda su cartera.',
      },
    ],
  },
}

export const industries: Record<IndustryPageId, CategoryPageContent> = {
  facilityManagement: {
    hero: {
      eyebrow: 'Facility management',
      title: 'Software de facility management para cada sede',
      description:
        'Fleet es su panel de control digital para la operación de edificios, del mantenimiento rutinario a las reparaciones imprevistas, para que cada edificio esté en plena forma.',
      highlights: ['Control centralizado', 'Órdenes automatizadas', 'Seguimiento de activos'],
      visual: {
        kind: 'jobs',
        title: 'Edificios · Hoy',
        items: [
          {
            title: 'Cambio de filtro de climatización',
            location: 'Tower B · Planta 4',
            status: 'En curso',
            tone: 'info',
          },
          {
            title: 'Revisión de extintores',
            location: 'Harbour Point · Todas las plantas',
            status: 'Para hoy',
            tone: 'due',
          },
          {
            title: 'Reparación puerta del vestíbulo',
            location: 'Northgate · Entrada',
            status: 'Completada',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Cada año hay más que gestionar',
        description:
          'Edificios, equipos, proveedores y personal en una o varias sedes, cada uno con sus calendarios, presupuestos y requisitos.',
        points: ['Muchos edificios', 'Muchos proveedores', 'Muchos estándares'],
      },
      answer: {
        title: 'Una plataforma para cada edificio',
        description:
          'Fleet reúne mantenimiento, activos, proveedores y cumplimiento en una plataforma en la nube para dirigir cada sede con confianza.',
      },
    },
    capabilities: {
      title: 'Creado para equipos de facility management modernos',
      description:
        'Cree, siga y cierre trabajos alineados con presupuestos, cumplimiento y la realidad del terreno.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Preventivo',
          title: 'Planes para cada instalación',
          description:
            'Programe y automatice el mantenimiento de climatización, fontanería, iluminación y protección contra incendios por tiempo o por uso.',
          points: [
            'Planes recurrentes por tipo de activo',
            'Listas de control en cada visita',
            'Órdenes creadas antes del vencimiento',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan preventivo',
            steps: [
              {
                kind: 'Plan',
                text: 'Protección contra incendios · revisión mensual',
              },
              {
                kind: 'Luego',
                text: 'Crear órdenes 7 días antes',
              },
              {
                kind: 'Luego',
                text: 'Asignar al equipo de seguridad con lista',
              },
            ],
          },
        },
        {
          icon: 'workOrders',
          label: 'Reparaciones',
          title: 'Reparaciones puntuales bajo control',
          description:
            'Registre y asigne reparaciones con fotos, actualizaciones móviles y plazos SLA en cada trabajo.',
          points: [
            'Solicitudes con fotos y ubicación',
            'Trabajos para equipos o proveedores',
            'Cumplimiento de SLA en un panel',
          ],
          visual: {
            kind: 'jobs',
            title: 'Reparaciones abiertas',
            items: [
              {
                title: 'Fuga en tubería',
                location: 'Tower B · Sótano',
                status: 'Asignado',
                tone: 'info',
              },
              {
                title: 'Manilla de ventana rota',
                location: 'Harbour Point · P7',
                status: 'Para hoy',
                tone: 'due',
              },
              {
                title: 'Sensor de luz averiado',
                location: 'Northgate · P2',
                status: 'Resuelto',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Activos',
          title: 'Historial de cada activo',
          description:
            'Registre el historial por edificio, planta o equipo, con costes y documentos.',
          points: [
            'Historial por edificio, planta y activo',
            'Costes y paradas por activo',
            'Manuales y certificados adjuntos',
          ],
          visual: {
            kind: 'asset',
            title: 'Ficha del activo',
            name: 'Caldera B-01',
            location: 'Northgate · Sala técnica',
            status: 'Operativo',
            facts: [
              {
                label: 'Último servicio',
                value: '03 sep',
              },
              {
                label: 'Próximo servicio',
                value: '03 dic',
              },
              {
                label: 'Coste del año',
                value: '2.940 $',
              },
              {
                label: 'Trabajos abiertos',
                value: '0',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Informes',
          title: 'Decisiones operativas mejor fundamentadas',
          description:
            'Vea qué edificios tienen más incidencias recurrentes, qué activos consumen más presupuesto y qué equipos cumplen sus SLA.',
          points: [
            'Incidencias recurrentes por edificio',
            'Gasto por activo y centro de coste',
            'Resultados SLA por equipo',
          ],
          visual: {
            kind: 'chart',
            title: 'Trabajos abiertos por sede',
            stats: [
              {
                label: 'Trabajos abiertos',
                value: '128',
              },
              {
                label: 'SLA cumplido',
                value: '96,4 %',
              },
            ],
            bars: [
              {
                label: 'Harbour Point',
                value: 34,
              },
              {
                label: 'Tower B',
                value: 29,
              },
              {
                label: 'Northgate',
                value: 26,
              },
              {
                label: 'Bayview',
                value: 22,
              },
              {
                label: 'Westport',
                value: 17,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Cumplimiento',
        title: 'Cumplimiento y trazabilidad',
        description:
          'Registros de auditoría, almacenamiento de documentos y control de versiones mantienen cada servicio, permiso e inspección disponibles.',
        points: [
          'Registro de cada acción',
          'Permisos y certificados guardados',
          'Inspecciones vinculadas a activos',
        ],
        visual: {
          kind: 'files',
          title: 'Cumplimiento · Harbour Point',
          items: [
            {
              title: 'Certificado contra incendios.pdf',
              location: 'Válido hasta jun 2027',
              status: 'Válido',
              tone: 'done',
            },
            {
              title: 'Permiso de ascensor.pdf',
              location: 'Se renueva en 30 días',
              status: 'Renovar',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'inspectionClipboard',
          alt: 'Inspector completando una lista de control',
        },
      },
      {
        tag: 'Móvil',
        title: 'Mantenimiento en tiempo real desde cualquier lugar',
        description:
          'Fleet funciona en móviles, tabletas y ordenadores. Registre trabajos sobre la marcha, reciba avisos de retraso y fotos de evidencia al terminar.',
        points: [
          'Trabajos desde cualquier dispositivo',
          'Avisos de trabajos vencidos',
          'Foto de evidencia al cerrar',
        ],
        visual: {
          kind: 'log',
          title: 'Novedades de campo',
          entries: [
            {
              when: '09:20',
              who: 'Marco L.',
              what: 'cerró la revisión de la caldera con 4 fotos',
            },
            {
              when: '09:05',
              who: 'Fleet',
              what: 'señaló 2 trabajos vencidos en Tower B',
            },
          ],
        },
        photo: {
          id: 'technicianPlantRoom',
          alt: 'Técnico revisando equipos en una sala técnica',
        },
      },
      {
        tag: 'Varias sedes',
        title: 'Escale a todas sus ubicaciones',
        description:
          'Defina reglas y flujos por inmueble, asigne supervisores regionales y consolide informes de toda la cartera.',
        points: [
          'Reglas y flujos por inmueble',
          'Supervisores regionales',
          'Informes de toda la cartera',
        ],
        visual: {
          kind: 'jobs',
          title: 'Cartera · Esta semana',
          items: [
            {
              title: 'Harbour Point',
              location: '34 trabajos · 97 % a tiempo',
              status: 'En plazo',
              tone: 'done',
            },
            {
              title: 'Tower B',
              location: '29 trabajos · 89 % a tiempo',
              status: 'Revisar',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'officeCorridor',
          alt: 'Personas caminando por un pasillo de oficinas luminoso',
        },
      },
    ],
    quote: {
      text: 'Fleet ha reducido nuestro mantenimiento correctivo casi un 40 %. Por fin tenemos a los técnicos, los registros de activos y los trabajos en un solo lugar.',
      author: 'Responsable de operaciones',
      company: 'Desarrollo de uso mixto',
      photo: {
        id: 'hvacTechnicians',
        alt: 'Técnicos de climatización trabajando en equipos de cubierta',
      },
    },
    faq: [
      {
        question: '¿Qué es un software de facility management?',
        answer:
          'Reúne edificios, activos, mantenimiento, proveedores y registros de cumplimiento en un sistema, para planificar, gestionar e informar sobre cada sede.',
      },
      {
        question: '¿Sirve Fleet para campus, oficinas y desarrollos de uso mixto?',
        answer:
          'Sí. Fleet da servicio a cualquier tipo de edificio, desde un inmueble hasta campus y carteras con muchas sedes, en una plataforma en la nube.',
      },
      {
        question: '¿Cómo ayuda Fleet con el cumplimiento?',
        answer:
          'Incluye registros de auditoría, almacenamiento de documentos y control de versiones, para que cada servicio, permiso e inspección esté listo para revisión.',
      },
      {
        question: '¿Se conecta Fleet con nuestros otros sistemas?',
        answer:
          'Sí. Fleet se conecta con contabilidad, control de accesos, portales de inquilinos y sistemas de gestión del edificio mediante más de 20 integraciones y una API REST abierta.',
      },
    ],
  },
  retail: {
    hero: {
      eyebrow: 'Centros comerciales y retail',
      title: 'Mantenimiento que mantiene cada tienda lista para los visitantes',
      description:
        'Fleet ayuda a los equipos de centros comerciales a anticiparse en tiendas, zonas comunes y trastienda, para que cada visita refleje sus estándares.',
      highlights: [
        'Órdenes rápidas',
        'Coordinación con inquilinos',
        'Gasto por planta e inquilino',
      ],
      visual: {
        kind: 'jobs',
        title: 'Northgate Mall · Hoy',
        items: [
          {
            title: 'Ruido escalera E3',
            location: 'Planta 1 · Atrio',
            status: 'En curso',
            tone: 'info',
          },
          {
            title: 'Revisión clima food court',
            location: 'Planta 3',
            status: 'Para hoy',
            tone: 'due',
          },
          {
            title: 'Iluminación tienda 214',
            location: 'Planta 2 · Moda',
            status: 'Completada',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Los visitantes ven cada retraso',
        description:
          'La afluencia pone a trabajar ascensores, escaleras mecánicas, climatización e iluminación todo el día, y los inquilinos esperan un servicio rápido y fiable.',
        points: ['Mucha afluencia', 'Muchos inquilinos', 'Muchos proveedores'],
      },
      answer: {
        title: 'Operación proactiva en cada centro',
        description:
          'Fleet combina órdenes rápidas, planes preventivos e historial por inquilino, para ir siempre un paso por delante.',
      },
    },
    capabilities: {
      title: 'Creado para espacios de mucha afluencia',
      description:
        'Del correctivo al preventivo y la coordinación con inquilinos, en una plataforma.',
      tabs: [
        {
          icon: 'workOrders',
          label: 'Órdenes',
          title: 'Asignación rápida de órdenes',
          description:
            'El equipo registra trabajos al instante desde cualquier dispositivo, con avisos, aprobaciones y escalado.',
          points: [
            'Trabajos desde cualquier dispositivo',
            'Escalado de urgencias',
            'Aprobaciones para trabajos externos',
          ],
          visual: {
            kind: 'jobs',
            title: 'Asignados hoy',
            items: [
              {
                title: 'Gotera en el techo',
                location: 'Planta 2 · Pasillo B',
                status: 'Equipo de fontanería',
                tone: 'info',
              },
              {
                title: 'Persiana metálica averiada',
                location: 'Tienda 118',
                status: 'CoolAir',
                tone: 'info',
              },
              {
                title: 'Limpieza de derrame',
                location: 'Planta 1 · Atrio',
                status: 'Hecho',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Preventivo',
          title: 'Escaleras, ascensores y clima al día',
          description:
            'Automatice el mantenimiento de escaleras mecánicas, ascensores y aire acondicionado, con procedimientos disponibles en sitio.',
          points: [
            'Preventivo de escaleras, ascensores y clima',
            'Procedimientos en sitio',
            'Proveedores por tipo de activo',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan de escaleras',
            steps: [
              {
                kind: 'Plan',
                text: 'Escaleras E1–E6 · servicio mensual',
              },
              {
                kind: 'Luego',
                text: 'Asignar LiftCo con lista de control',
              },
              {
                kind: 'Luego',
                text: 'Registrar el certificado en cada activo',
              },
            ],
          },
        },
        {
          icon: 'tenants',
          label: 'Inquilinos',
          title: 'Historial por tienda y local',
          description:
            'Registre el historial por tienda, marca o local, y coordine seguridad y limpieza con paneles compartidos.',
          points: [
            'Historial por tienda, marca y local',
            'Paneles compartidos',
            'Solicitudes de inquilinos hasta el cierre',
          ],
          visual: {
            kind: 'asset',
            title: 'Ficha del local',
            name: 'Tienda 214',
            location: 'Northgate Mall · Planta 2',
            status: 'Abierta',
            facts: [
              {
                label: 'Solicitudes del año',
                value: '7',
              },
              {
                label: 'Última visita',
                value: '14 sep',
              },
              {
                label: 'Trabajos abiertos',
                value: '1',
              },
              {
                label: 'Coste del año',
                value: '1.860 $',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Presupuestos',
          title: 'Más visibilidad, mejores presupuestos',
          description:
            'Compare el rendimiento por ubicación, tipo de activo o proveedor para priorizar CAPEX y OPEX.',
          points: [
            'Gasto por planta, inquilino y activo',
            'Incidencias recurrentes por zona',
            'Proveedores comparados',
          ],
          visual: {
            kind: 'chart',
            title: 'Gasto de mantenimiento por planta · T3',
            stats: [
              {
                label: 'Gasto T3',
                value: '62.000 $',
              },
              {
                label: 'Incidencias recurrentes',
                value: '11',
              },
            ],
            bars: [
              {
                label: 'Planta 1',
                value: 82,
              },
              {
                label: 'Planta 2',
                value: 64,
              },
              {
                label: 'Planta 3',
                value: 58,
              },
              {
                label: 'Aparcamiento',
                value: 31,
              },
              {
                label: 'Cubierta',
                value: 24,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Zonas comunes',
        title: 'Zonas comunes listas para cada visitante',
        description:
          'Atrios, pasillos, aseos y food courts siguen limpios y operativos con tareas programadas y reparaciones rápidas.',
        points: [
          'Planes de limpieza y revisión',
          'Arreglos rápidos de lo visible',
          'Foto de evidencia al cerrar',
        ],
        visual: {
          kind: 'jobs',
          title: 'Zonas comunes · Hoy',
          items: [
            {
              title: 'Revisión de aseos P2',
              location: 'Cada 2 horas',
              status: 'En plazo',
              tone: 'done',
            },
            {
              title: 'Iluminación del atrio',
              location: 'Planta 1',
              status: 'Programado',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'mallAtrium',
          alt: 'Personas en el atrio de un centro comercial',
        },
      },
      {
        tag: 'Transporte vertical',
        title: 'Ascensores y escaleras en los que confiar',
        description:
          'Planes preventivos, procedimientos y certificados mantienen el transporte vertical seguro para los visitantes.',
        points: [
          'Planes de servicio mensuales',
          'Certificados vinculados a los activos',
          'Paradas por unidad',
        ],
        visual: {
          kind: 'asset',
          title: 'Ficha del activo',
          name: 'Escalera E3',
          location: 'Northgate Mall · Atrio',
          status: 'Servicio pendiente',
          facts: [
            {
              label: 'Último servicio',
              value: '02 sep',
            },
            {
              label: 'Certificado',
              value: 'Válido hasta feb 2027',
            },
            {
              label: 'Parada T3',
              value: '3 h',
            },
            {
              label: 'Proveedor',
              value: 'LiftCo',
            },
          ],
        },
        photo: {
          id: 'liftTechnician',
          alt: 'Técnico trabajando dentro de una cabina de ascensor',
        },
      },
      {
        tag: 'Equipos',
        title: 'Seguridad, limpieza y mantenimiento en sintonía',
        description:
          'Paneles compartidos alinean a seguridad, limpieza y mantenimiento en cada incidencia abierta.',
        points: [
          'Paneles compartidos',
          'Incidencias registradas por cualquier equipo',
          'Un responsable para cada trabajo',
        ],
        visual: {
          kind: 'log',
          title: 'Actividad compartida',
          entries: [
            {
              when: '10:12',
              who: 'Seguridad',
              what: 'registró una puerta averiada en la entrada C',
            },
            {
              when: '10:20',
              who: 'Mantenimiento',
              what: 'asignó la reparación a CoolAir',
            },
          ],
        },
        photo: {
          id: 'cleanerCorridor',
          alt: 'Limpiador desinfectando el pomo de una puerta',
        },
      },
    ],
    quote: {
      text: 'Fleet nos ayudó a reducir el mantenimiento correctivo casi un 40 %. Ahora vemos todas nuestras sedes y respondemos más rápido.',
      author: 'Director de operaciones',
      company: 'Operador regional de centros comerciales',
      photo: {
        id: 'acFilterService',
        alt: 'Técnico cambiando un filtro de aire acondicionado',
      },
    },
    faq: [
      {
        question: '¿Cómo ayuda Fleet a la operación de centros comerciales?',
        answer:
          'Fleet reúne órdenes, mantenimiento de ascensores, escaleras y climatización, coordinación con inquilinos y control del gasto en una plataforma para cada centro.',
      },
      {
        question: '¿Podemos seguir el mantenimiento por inquilino o local?',
        answer:
          'Sí. Registre el historial por tienda, marca o local y controle el gasto por planta, inquilino o activo.',
      },
      {
        question: '¿Pueden usar Fleet los técnicos externos?',
        answer:
          'Sí. Los proveedores acceden rápido a sus trabajos, con permisos y aprobaciones definidos por su equipo.',
      },
      {
        question: '¿Fleet se adapta a varios centros?',
        answer:
          'Sí. Fleet gestiona un centro o 30 inmuebles comerciales, con reglas e informes por inmueble y región.',
      },
    ],
  },
  hospitality: {
    hero: {
      eyebrow: 'Hostelería y restauración',
      title: 'Mantenimiento hotelero que protege cada experiencia del huésped',
      description:
        'Fleet ayuda a hoteles, resorts y restaurantes a anticiparse en habitaciones, cocinas y zonas públicas, con órdenes móviles y cumplimiento integrado.',
      highlights: [
        'Seguimiento por habitación',
        'Revisión de equipos de cocina',
        'Cumplimiento de seguridad',
      ],
      visual: {
        kind: 'jobs',
        title: 'Solicitudes del hotel · Hoy',
        items: [
          {
            title: 'El aire no enfría',
            location: 'Habitación 1204',
            status: 'Técnico en camino',
            tone: 'info',
          },
          {
            title: 'Grifo que gotea',
            location: 'Habitación 806',
            status: 'Resuelto',
            tone: 'done',
          },
          {
            title: 'Alarma de cámara frigorífica',
            location: 'Cocina principal',
            status: 'Urgente',
            tone: 'overdue',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Los huéspedes notan cada detalle',
        description:
          'Un aire ruidoso, un grifo que gotea o un ascensor averiado marcan una estancia, y las cocinas dependen de cada nevera y freidora.',
        points: ['Habitaciones', 'Cocinas', 'Zonas públicas'],
      },
      answer: {
        title: 'Excelencia operativa entre bastidores',
        description:
          'Fleet coordina pisos, mantenimiento, F&B y proveedores para resolver rápido y que los huéspedes disfruten cada momento.',
      },
    },
    capabilities: {
      title: 'Creado para la operación hotelera',
      description: 'Mantenimiento de sala y trastienda en una plataforma.',
      tabs: [
        {
          icon: 'requests',
          label: 'Avisos',
          title: 'Avisos rápidos desde cualquier lugar',
          description:
            'El personal avisa de grifos que gotean o fallos del aire desde tabletas o móviles, por habitación, suite o zona.',
          points: [
            'Trabajos por habitación y zona',
            'Avisos de cualquier miembro del equipo',
            'Programación fuera de horas punta',
          ],
          visual: {
            kind: 'steps',
            title: 'Solicitud del huésped',
            steps: [
              {
                kind: 'Aviso',
                text: 'El aire no enfría, habitación 1204',
              },
              {
                kind: 'Luego',
                text: 'Orden creada y localizada',
              },
              {
                kind: 'Luego',
                text: 'Técnico asignado, huésped informado',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Preventivo',
          title: 'Cocinas e instalaciones al día',
          description:
            'Automatice el servicio de climatización, neveras, hornos y ascensores, con listas de control en cada visita.',
          points: [
            'Revisión de equipos de cocina',
            'Planes de clima y ascensores',
            'Listas con foto de evidencia',
          ],
          visual: {
            kind: 'jobs',
            title: 'Revisiones de cocina · Esta semana',
            items: [
              {
                title: 'Servicio de cámara frigorífica',
                location: 'Cocina principal',
                status: 'Completada',
                tone: 'done',
              },
              {
                title: 'Limpieza de separador de grasas',
                location: 'Trastienda',
                status: 'Programada',
                tone: 'info',
              },
              {
                title: 'Inspección horno mixto',
                location: 'Cocina de banquetes',
                status: 'Para hoy',
                tone: 'due',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: 'Cumplimiento',
          title: 'Salud, seguridad y normas alimentarias',
          description:
            'Siga las inspecciones contra incendios y las auditorías de almacenamiento de alimentos, con registros para cada revisión.',
          points: [
            'Inspecciones contra incendios',
            'Auditorías de almacenamiento',
            'Registro de cada revisión',
          ],
          visual: {
            kind: 'files',
            title: 'Cumplimiento · Harbour Hotel',
            items: [
              {
                title: 'Inspección contra incendios.pdf',
                location: 'Realizada el 12 sep',
                status: 'Válido',
                tone: 'done',
              },
              {
                title: 'Auditoría de almacén de alimentos.pdf',
                location: 'En 7 días',
                status: 'Pendiente',
                tone: 'due',
              },
              {
                title: 'Certificado de ascensor.pdf',
                location: 'Válido hasta ene 2027',
                status: 'Válido',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Costes',
          title: 'Menos paradas y costes operativos',
          description:
            'Siga el historial de reparaciones y los equipos que más mantenimiento requieren para planificar sustituciones y presupuestos.',
          points: [
            'Historial por activo',
            'Gasto por habitaciones, cocinas y zonas',
            'Previsión de sustituciones',
          ],
          visual: {
            kind: 'chart',
            title: 'Gasto de mantenimiento por zona · T3',
            stats: [
              {
                label: 'Gasto T3',
                value: '48.000 $',
              },
              {
                label: 'Habitaciones atendidas',
                value: '312',
              },
            ],
            bars: [
              {
                label: 'Habitaciones',
                value: 74,
              },
              {
                label: 'Cocinas',
                value: 61,
              },
              {
                label: 'Zonas públicas',
                value: 38,
              },
              {
                label: 'Spa y piscina',
                value: 27,
              },
              {
                label: 'Trastienda',
                value: 22,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Sala',
        title: 'Cada habitación lista para la llegada',
        description:
          'Pisos y mantenimiento comparten la vista de cada habitación para reparar antes del siguiente huésped.',
        points: [
          'Estado de habitaciones compartido',
          'Reparaciones según ocupación',
          'Foto de evidencia al cerrar',
        ],
        visual: {
          kind: 'jobs',
          title: 'Habitaciones · Planta 12',
          items: [
            {
              title: 'Habitación 1204',
              location: 'Reparación del aire',
              status: 'En curso',
              tone: 'info',
            },
            {
              title: 'Habitación 1210',
              location: 'Lista para la llegada',
              status: 'Lista',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'hotelReception',
          alt: 'Huéspedes registrándose en la recepción de un hotel',
        },
      },
      {
        tag: 'Trastienda',
        title: 'Cocinas que no fallan ningún servicio',
        description:
          'Revisiones programadas y reparaciones rápidas mantienen neveras, freidoras y extracción en marcha en cada servicio.',
        points: [
          'Revisión antes de cada servicio',
          'Proveedores para sistemas especiales',
          'Paradas por equipo',
        ],
        visual: {
          kind: 'log',
          title: 'Actividad de cocina',
          entries: [
            {
              when: '06:10',
              who: 'Chef Ana',
              what: 'avisó de la alarma de la cámara frigorífica',
            },
            {
              when: '06:18',
              who: 'Fleet',
              what: 'asignó a CoolAir como urgente',
            },
          ],
        },
        photo: {
          id: 'chefManager',
          alt: 'Chef y gerente revisando una tableta en la cocina',
        },
      },
      {
        tag: 'Pisos',
        title: 'Pisos y mantenimiento en sintonía',
        description:
          'Vistas propias para pisos, mantenimiento, F&B y recepción mantienen a cada equipo en el trabajo adecuado.',
        points: [
          'Vistas para cada equipo',
          'Incidencias registradas al limpiar',
          'Notas de relevo entre turnos',
        ],
        visual: {
          kind: 'steps',
          title: 'Cambio de habitación',
          steps: [
            {
              kind: 'Limpieza',
              text: 'Habitación 806 · salida 11:00',
            },
            {
              kind: 'Luego',
              text: 'Pisos avisa de un grifo que gotea',
            },
            {
              kind: 'Luego',
              text: 'Reparado antes de la llegada de las 15:00',
            },
          ],
        },
        photo: {
          id: 'hotelHousekeeping',
          alt: 'Camarera de pisos preparando una habitación',
        },
      },
    ],
    quote: {
      text: 'Fleet ha reducido nuestro mantenimiento correctivo casi un 40 %. Por fin tenemos a los técnicos, los registros de activos y los trabajos en un solo lugar.',
      author: 'Responsable de operaciones',
      company: 'Desarrollo de uso mixto',
      photo: {
        id: 'busyKitchen',
        alt: 'Cocineros en una cocina profesional con mucha actividad',
      },
    },
    faq: [
      {
        question: '¿Cómo ayuda Fleet a hoteles y restaurantes?',
        answer:
          'Fleet ofrece órdenes móviles, planes preventivos para cocinas e instalaciones, seguimiento del cumplimiento e informes en una plataforma.',
      },
      {
        question: '¿Puede el personal avisar desde las habitaciones?',
        answer:
          'Sí. Cualquier miembro del equipo avisa desde un móvil o tableta, por habitación, suite o zona, con fotos.',
      },
      {
        question: '¿Puede Fleet seguir la seguridad alimentaria y contra incendios?',
        answer:
          'Sí. Fleet sigue inspecciones contra incendios, auditorías de almacenamiento de alimentos y otras tareas de cumplimiento con registros.',
      },
      {
        question: '¿Podemos programar el mantenimiento según los huéspedes?',
        answer:
          'Sí. Programe trabajos fuera de las horas punta y coordine pisos y mantenimiento para no molestar a los huéspedes.',
      },
    ],
  },
  healthcareEducation: {
    hero: {
      eyebrow: 'Salud y educación',
      title: 'Mantenimiento fiable para centros de salud y educación',
      description:
        'Mantenga hospitales, clínicas, colegios y campus seguros, conformes y cómodos, con planes preventivos, reparaciones rápidas y registros listos para auditoría.',
      highlights: ['Planes preventivos', 'Registros listos para auditoría', 'Reparaciones rápidas'],
      visual: {
        kind: 'jobs',
        title: 'Solicitudes del campus · Hoy',
        items: [
          {
            title: 'Revisión clima planta 3',
            location: 'Ala este · Planta 3',
            status: 'En curso',
            tone: 'info',
          },
          {
            title: 'Inspección puerta cortafuego',
            location: 'Edificio de ciencias',
            status: 'Para hoy',
            tone: 'due',
          },
          {
            title: 'Proyector del aula',
            location: 'Aula B12',
            status: 'Completada',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Los espacios críticos necesitan instalaciones fiables',
        description:
          'Climatización, ascensores, protección contra incendios e higiene protegen a pacientes, personal y estudiantes, y cada revisión necesita un registro.',
        points: ['Zonas de pacientes', 'Aulas', 'Estándares estrictos'],
      },
      answer: {
        title: 'Edificios seguros y conformes cada día',
        description:
          'Fleet planifica el mantenimiento, sigue cada reparación y guarda los registros, para que sus equipos se centren en cuidar y enseñar.',
      },
    },
    capabilities: {
      title: 'Creado para centros seguros y conformes',
      description:
        'De la calidad del aire a la protección contra incendios, cada instalación planificada y demostrada.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Preventivo',
          title: 'Planes para instalaciones críticas',
          description:
            'Programe el mantenimiento de climatización, ascensores, grupos electrógenos y protección contra incendios, con listas en cada visita.',
          points: [
            'Planes para instalaciones críticas',
            'Listas con lecturas',
            'Órdenes antes del vencimiento',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan preventivo',
            steps: [
              {
                kind: 'Plan',
                text: 'Clima de plantas · cambio de filtros mensual',
              },
              {
                kind: 'Luego',
                text: 'Crear la orden 7 días antes',
              },
              {
                kind: 'Luego',
                text: 'Asignar al equipo de clima con lista',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: 'Cumplimiento',
          title: 'Inspecciones y certificados registrados',
          description:
            'Siga inspecciones, certificados y permisos, con avisos antes de cada vencimiento.',
          points: [
            'Inspecciones por edificio',
            'Certificados vinculados a activos',
            'Avisos antes del vencimiento',
          ],
          visual: {
            kind: 'files',
            title: 'Cumplimiento · Ala este',
            items: [
              {
                title: 'Inspección de puertas cortafuego.pdf',
                location: 'Realizada el 03 sep',
                status: 'Válido',
                tone: 'done',
              },
              {
                title: 'Certificado de ascensor.pdf',
                location: 'Se renueva en 30 días',
                status: 'Renovar',
                tone: 'due',
              },
              {
                title: 'Registro de prueba del grupo.pdf',
                location: 'Mensual',
                status: 'Verificado',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'workOrders',
          label: 'Reparaciones',
          title: 'Respuesta rápida a cada solicitud',
          description:
            'Personal y docentes avisan desde cualquier dispositivo, y los trabajos llegan al equipo adecuado con prioridades y SLA.',
          points: [
            'Solicitudes desde cualquier dispositivo',
            'Prioridad para zonas críticas',
            'Plazos SLA en cada trabajo',
          ],
          visual: {
            kind: 'jobs',
            title: 'Solicitudes abiertas',
            items: [
              {
                title: 'Campana de laboratorio',
                location: 'Edificio de ciencias',
                status: 'Urgente',
                tone: 'overdue',
              },
              {
                title: 'Lavabo con fuga',
                location: 'Planta 2',
                status: 'Asignado',
                tone: 'info',
              },
              {
                title: 'Silla rota',
                location: 'Aula A04',
                status: 'Resuelto',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Informes',
          title: 'Informes claros para la dirección',
          description:
            'Muestre tiempos de respuesta, estado de cumplimiento y gasto por edificio a la dirección y a los reguladores.',
          points: [
            'Tiempos de respuesta por edificio',
            'Cumplimiento de un vistazo',
            'Exportaciones para revisiones',
          ],
          visual: {
            kind: 'chart',
            title: 'Trabajo planificado completado · T3',
            stats: [
              {
                label: 'A tiempo',
                value: '97 %',
              },
              {
                label: 'Inspecciones',
                value: '186',
              },
            ],
            bars: [
              {
                label: 'Ala este',
                value: 98,
              },
              {
                label: 'Ala oeste',
                value: 96,
              },
              {
                label: 'Ciencias',
                value: 95,
              },
              {
                label: 'Biblioteca',
                value: 99,
              },
              {
                label: 'Polideportivo',
                value: 94,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Higiene',
        title: 'Espacios limpios en cada turno',
        description:
          'Planes de limpieza con listas y fotos de evidencia mantienen plantas, aulas y aseos al nivel adecuado.',
        points: [
          'Planes de limpieza por zona',
          'Listas con foto de evidencia',
          'Incidencias registradas en las rondas',
        ],
        visual: {
          kind: 'jobs',
          title: 'Rondas de limpieza',
          items: [
            {
              title: 'Aseos planta 3',
              location: 'Cada 2 horas',
              status: 'En plazo',
              tone: 'done',
            },
            {
              title: 'Limpieza a fondo del comedor',
              location: 'Diaria · 15:00',
              status: 'Programada',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'cleanerCorridor',
          alt: 'Limpiador desinfectando el pomo de una puerta',
        },
      },
      {
        tag: 'Calidad del aire',
        title: 'Aire cómodo y saludable',
        description:
          'Los planes de climatización mantienen filtros, unidades de tratamiento de aire y refrigeración en plena forma para pacientes y estudiantes.',
        points: [
          'Cambio de filtros según plan',
          'Lecturas en cada visita',
          'Fallos detectados a tiempo',
        ],
        visual: {
          kind: 'steps',
          title: 'Plan de calidad del aire',
          steps: [
            {
              kind: 'Cada',
              text: 'Mes · todas las UTA',
            },
            {
              kind: 'Luego',
              text: 'Cambiar filtros y registrar lecturas',
            },
          ],
        },
        photo: {
          id: 'acFilterService',
          alt: 'Técnico cambiando un filtro de aire acondicionado',
        },
      },
      {
        tag: 'Energía y seguridad',
        title: 'Energía y seguridad siempre listas',
        description:
          'Grupos electrógenos, cuadros eléctricos y sistemas contra incendios se prueban según el calendario, con cada resultado registrado.',
        points: [
          'Pruebas de grupos y cuadros',
          'Inspección de sistemas contra incendios',
          'Resultados vinculados a cada activo',
        ],
        visual: {
          kind: 'asset',
          title: 'Ficha del activo',
          name: 'Grupo electrógeno G-01',
          location: 'Ala este · Sala técnica',
          status: 'Probado',
          facts: [
            {
              label: 'Última prueba',
              value: '01 oct',
            },
            {
              label: 'Próxima prueba',
              value: '01 nov',
            },
            {
              label: 'Horas de marcha',
              value: '412',
            },
            {
              label: 'Trabajos abiertos',
              value: '0',
            },
          ],
        },
        photo: {
          id: 'electricianPanel',
          alt: 'Electricista trabajando en un cuadro eléctrico',
        },
      },
    ],
    quote: {
      text: 'Fleet ha reducido nuestro mantenimiento correctivo casi un 40 %. Por fin tenemos a los técnicos, los registros de activos y los trabajos en un solo lugar.',
      author: 'Responsable de operaciones',
      company: 'Desarrollo de uso mixto',
      photo: {
        id: 'officeCorridor',
        alt: 'Personas caminando por un pasillo de oficinas luminoso',
      },
    },
    faq: [
      {
        question: '¿Sirve Fleet para hospitales, clínicas y colegios?',
        answer:
          'Sí. Fleet da servicio a centros de salud y educación de cualquier tamaño, desde una clínica o colegio hasta campus con muchas sedes.',
      },
      {
        question: '¿Cómo ayuda Fleet en inspecciones y auditorías?',
        answer:
          'Fleet guarda inspecciones, certificados y permisos con registros de auditoría y avisos antes de cada vencimiento.',
      },
      {
        question: '¿Pueden avisar el personal y los docentes?',
        answer:
          'Sí. Cualquier persona invitada avisa desde un móvil o tableta, y las solicitudes se convierten en órdenes con prioridades y SLA.',
      },
      {
        question: '¿Podemos informar a la dirección?',
        answer:
          'Sí. Paneles y exportaciones muestran tiempos de respuesta, estado de cumplimiento y gasto por edificio.',
      },
    ],
  },
  logistics: {
    hero: {
      eyebrow: 'Transporte y logística',
      title: 'Mantenimiento logístico que mantiene cada envío en movimiento',
      description:
        'Fleet ayuda a los equipos logísticos a mantener almacenes, muelles, equipos y vehículos en marcha, con avisos rápidos y planes preventivos en cada centro.',
      highlights: ['Avisos rápidos', 'Preventivo para toda la flota', 'Seguimiento de paradas'],
      visual: {
        kind: 'jobs',
        title: 'Westport DC · Hoy',
        items: [
          {
            title: 'Puerta de muelle 4 averiada',
            location: 'Zona de carga',
            status: 'Urgente',
            tone: 'overdue',
          },
          {
            title: 'Servicio cinta C2',
            location: 'Clasificación',
            status: 'En curso',
            tone: 'info',
          },
          {
            title: 'Revisión carretilla FL-07',
            location: 'Patio',
            status: 'Completada',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Cada hora de parada tiene efecto dominó',
        description:
          'Cuando falla una puerta de muelle o se para una cinta, cambian los plazos de clientes, transportistas y equipos.',
        points: ['Muelles de carga', 'Cintas', 'Vehículos'],
      },
      answer: {
        title: 'Capacidad protegida con mantenimiento proactivo',
        description:
          'Fleet registra incidencias desde la nave, programa el preventivo y sigue cada activo, para que los envíos lleguen a tiempo.',
      },
    },
    capabilities: {
      title: 'Creado para la logística de ritmo rápido',
      description: 'Almacenes, equipos y vehículos en un solo panel.',
      tabs: [
        {
          icon: 'workOrders',
          label: 'Avisos de nave',
          title: 'Avisos rápidos desde la nave',
          description:
            'Técnicos y supervisores registran incidencias desde el móvil, y los trabajos llegan a equipos propios o proveedores por región o rol.',
          points: [
            'Incidencias desde el móvil',
            'Trabajos por región o rol',
            'Proveedores en el mismo flujo',
          ],
          visual: {
            kind: 'jobs',
            title: 'Trabajos abiertos',
            items: [
              {
                title: 'Rampa niveladora bloqueada',
                location: 'Muelle 6',
                status: 'Asignado',
                tone: 'info',
              },
              {
                title: 'Daño en estantería',
                location: 'Pasillo 14',
                status: 'Inspeccionar',
                tone: 'due',
              },
              {
                title: 'Cargador averiado',
                location: 'Zona de carretillas',
                status: 'Resuelto',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Preventivo',
          title: 'Ninguna revisión crítica olvidada',
          description:
            'Automatice el servicio de vehículos, cintas y montacargas, con disparadores por kilómetros, horas de uso o tiempo.',
          points: [
            'Disparadores por horas, km o tiempo',
            'Avisos automáticos de inspección',
            'Menos reparaciones urgentes',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan por uso',
            steps: [
              {
                kind: 'Disparador',
                text: 'Carretilla FL-07 alcanza 500 horas',
              },
              {
                kind: 'Luego',
                text: 'Crear orden de servicio',
              },
              {
                kind: 'Luego',
                text: 'Asignar al taller de flota',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Equipos',
          title: 'Coste e historial de cada activo',
          description:
            'Vea el historial y el coste por carretilla, vehículo o sistema, e identifique los cuellos de botella.',
          points: [
            'Historial por activo',
            'Coste por carretilla y sistema',
            'Cuellos de botella destacados',
          ],
          visual: {
            kind: 'asset',
            title: 'Ficha del activo',
            name: 'Cinta C2',
            location: 'Westport DC · Clasificación',
            status: 'Operativo',
            facts: [
              {
                label: 'Horas de marcha',
                value: '6.420',
              },
              {
                label: 'Último servicio',
                value: '18 sep',
              },
              {
                label: 'Parada T3',
                value: '5 h',
              },
              {
                label: 'Coste del año',
                value: '7.850 $',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Análisis',
          title: 'Paradas y tiempos de respuesta',
          description:
            'Controle paradas y tiempos de respuesta en todas las ubicaciones y detecte señales de alerta.',
          points: [
            'Paradas por sede y activo',
            'Tiempos de respuesta por equipo',
            'Tendencias que avisan pronto',
          ],
          visual: {
            kind: 'chart',
            title: 'Horas de parada por centro · T3',
            stats: [
              {
                label: 'Parada T3',
                value: '38 h',
              },
              {
                label: 'SLA cumplido',
                value: '95,1 %',
              },
            ],
            bars: [
              {
                label: 'Westport DC',
                value: 14,
              },
              {
                label: 'Harbour hub',
                value: 9,
              },
              {
                label: 'Northgate DC',
                value: 7,
              },
              {
                label: 'Aeropuerto',
                value: 5,
              },
              {
                label: 'Bayview',
                value: 3,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Almacenes',
        title: 'Almacenes y muelles listos para cada turno',
        description:
          'Muelles, puertas, estanterías e iluminación se inspeccionan según el calendario, y las averías se registran y resuelven rápido.',
        points: [
          'Inspección de muelles y puertas',
          'Revisión de estanterías programada',
          'Arreglos rápidos en la nave',
        ],
        visual: {
          kind: 'jobs',
          title: 'Revisión de muelles · Hoy',
          items: [
            {
              title: 'Puertas de muelle 1–8',
              location: 'Inspección diaria',
              status: 'Completada',
              tone: 'done',
            },
            {
              title: 'Rampa niveladora 6',
              location: 'Avería registrada',
              status: 'Asignado',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'warehouseTeam',
          alt: 'Equipo de almacén revisando existencias entre estanterías',
        },
      },
      {
        tag: 'Vehículos',
        title: 'Vehículos listos y conformes',
        description:
          'Camiones, furgonetas y vehículos de servicio comparten el mismo panel, de los registros de mantenimiento a matriculaciones e inspecciones.',
        points: [
          'Mantenimiento por km y horas',
          'Avisos de inspección y matriculación',
          'Registros listos para auditoría',
        ],
        visual: {
          kind: 'log',
          title: 'Avisos de vehículos',
          entries: [
            {
              when: '08:00',
              who: 'Fleet',
              what: 'programó el servicio de la furgoneta V-12 a los 30.000 km',
            },
            {
              when: '08:05',
              who: 'Fleet',
              what: 'señaló la renovación de matrícula del camión T-03',
            },
          ],
        },
        photo: {
          id: 'fleetManager',
          alt: 'Responsable de flota con una tableta frente a camiones',
        },
      },
      {
        tag: 'Análisis',
        title: 'Menos interrupciones, más capacidad',
        description:
          'Las tendencias muestran qué equipos frenan la operación para planificar sustituciones a tiempo.',
        points: [
          'Equipos que generan cuellos de botella',
          'Planificación de sustituciones',
          'Visibilidad de todas las ubicaciones',
        ],
        visual: {
          kind: 'chart',
          title: 'Principales causas de parada · T3',
          stats: [],
          bars: [
            {
              label: 'Puertas de muelle',
              value: 12,
            },
            {
              label: 'Cintas',
              value: 9,
            },
            {
              label: 'Carretillas',
              value: 7,
            },
            {
              label: 'Estanterías',
              value: 4,
            },
            {
              label: 'Iluminación',
              value: 2,
            },
          ],
        },
        photo: {
          id: 'warehouseAnalytics',
          alt: 'Supervisor revisando gráficos de rendimiento en pantalla',
        },
      },
    ],
    quote: {
      text: 'Otras plataformas resultaban demasiado complejas o genéricas. Fleet nos dio una solución a medida con un soporte más rápido.',
      author: 'Director de mantenimiento',
      company: 'Centro logístico',
      photo: {
        id: 'stockCheck',
        alt: 'Coordinador revisando existencias en estanterías',
      },
    },
    faq: [
      {
        question: '¿Cómo ayuda Fleet a la logística y los almacenes?',
        answer:
          'Fleet permite registrar incidencias desde la nave, programar el preventivo de muelles, cintas, montacargas y vehículos y seguir las paradas en cada centro.',
      },
      {
        question: '¿Se puede activar el mantenimiento por uso?',
        answer:
          'Sí. Defina disparadores por kilómetros, horas de uso o tiempo, con avisos automáticos de inspección y servicio.',
      },
      {
        question: '¿Puede Fleet gestionar también nuestros vehículos?',
        answer:
          'Sí. La gestión de vehículos de Fleet ofrece la misma visibilidad, de los registros de mantenimiento y matriculaciones a los datos de conductores.',
      },
      {
        question: '¿Pueden trabajar los proveedores en Fleet?',
        answer:
          'Sí. Asigne trabajos a equipos propios o proveedores por región o rol, con accesos, aprobaciones y SLA bajo su control.',
      },
    ],
  },
  hvacLifts: {
    hero: {
      eyebrow: 'Climatización, ascensores y escaleras',
      title: 'Mantenimiento de climatización y ascensores siempre al día',
      description:
        'Planifique, realice y demuestre el mantenimiento de aire acondicionado, ascensores y escaleras mecánicas en cada edificio, con certificados y coordinación de proveedores integrados.',
      highlights: ['Planes recurrentes', 'Certificados registrados', 'Coordinación de proveedores'],
      visual: {
        kind: 'jobs',
        title: 'Sistemas críticos · Hoy',
        items: [
          {
            title: 'Servicio enfriadora CH-02',
            location: 'Harbour Point · Sala técnica',
            status: 'En curso',
            tone: 'info',
          },
          {
            title: 'Revisión mensual ascensor L2',
            location: 'Torre B · Núcleo',
            status: 'Para hoy',
            tone: 'due',
          },
          {
            title: 'Inspección escalera E3',
            location: 'Northgate Mall',
            status: 'Completada',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Los sistemas críticos funcionan cada día',
        description:
          'Refrigeración, ascensores y escaleras funcionan a diario, y cada uno necesita servicio regular, certificados y respuesta rápida ante fallos.',
        points: ['Enfriadoras y UTA', 'Ascensores y escaleras', 'Proveedores especialistas'],
      },
      answer: {
        title: 'Cada sistema planificado y demostrado',
        description:
          'Fleet programa cada servicio, lo asigna al especialista adecuado y guarda el certificado en el activo.',
      },
    },
    capabilities: {
      title: 'Instalaciones del edificio siempre en marcha',
      description: 'Planes preventivos, proveedores especialistas y certificados en un solo lugar.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Planes',
          title: 'Servicio recurrente para cada equipo',
          description:
            'Programe enfriadoras, UTA, ascensores y escaleras por tiempo o uso, con listas de buenas prácticas.',
          points: [
            'Planes por tiempo o uso',
            'Listas por tipo de sistema',
            'Órdenes antes del vencimiento',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan de servicio de ascensores',
            steps: [
              {
                kind: 'Plan',
                text: 'Ascensores L1–L4 · servicio mensual',
              },
              {
                kind: 'Luego',
                text: 'Asignar a LiftCo con lista',
              },
              {
                kind: 'Luego',
                text: 'Adjuntar certificado de servicio',
              },
            ],
          },
        },
        {
          icon: 'vendors',
          label: 'Proveedores',
          title: 'Especialistas asignados automáticamente',
          description:
            'Envíe los trabajos de climatización y ascensores al proveedor especialista adecuado por sede y sistema, con SLA en cada trabajo.',
          points: [
            'Proveedores por sistema y sede',
            'SLA en cada trabajo',
            'Presupuestos y aprobaciones en el flujo',
          ],
          visual: {
            kind: 'jobs',
            title: 'Trabajos especializados',
            items: [
              {
                title: 'CoolAir · Climatización',
                location: '6 trabajos hoy',
                status: 'En plazo',
                tone: 'done',
              },
              {
                title: 'LiftCo · Ascensores',
                location: '3 trabajos hoy',
                status: '1 pendiente',
                tone: 'due',
              },
              {
                title: 'Escalift · Escaleras',
                location: '2 trabajos hoy',
                status: 'Programado',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Activos',
          title: 'Certificados e historial por equipo',
          description:
            'Cada equipo guarda su historial de servicio, certificados, manuales y paradas en una ficha.',
          points: [
            'Certificados vinculados a cada equipo',
            'Historial de servicio y costes',
            'Manuales disponibles in situ',
          ],
          visual: {
            kind: 'asset',
            title: 'Ficha del activo',
            name: 'Ascensor L2',
            location: 'Torre B · Ascensores del núcleo',
            status: 'Servicio pendiente',
            facts: [
              {
                label: 'Último servicio',
                value: '02 sep',
              },
              {
                label: 'Certificado',
                value: 'Válido hasta ene 2027',
              },
              {
                label: 'Parada T3',
                value: '4 h',
              },
              {
                label: 'Proveedor',
                value: 'LiftCo',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Paradas',
          title: 'Paradas analizadas por sistema',
          description:
            'Detecte equipos con fallos recurrentes y planifique sustituciones con datos de ciclo de vida.',
          points: [
            'Paradas por sistema y sede',
            'Fallos recurrentes destacados',
            'Previsión de sustituciones',
          ],
          visual: {
            kind: 'chart',
            title: 'Horas de parada por sistema · T3',
            stats: [
              {
                label: 'Parada total',
                value: '61 h',
              },
              {
                label: 'Equipos en riesgo',
                value: '5',
              },
            ],
            bars: [
              {
                label: 'Enfriadoras',
                value: 22,
              },
              {
                label: 'UTA',
                value: 15,
              },
              {
                label: 'Ascensores',
                value: 12,
              },
              {
                label: 'Escaleras',
                value: 8,
              },
              {
                label: 'Splits',
                value: 4,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Climatización',
        title: 'Refrigeración a la altura de la demanda',
        description:
          'Enfriadoras, UTA y unidades de cubierta reciben servicio según el plan, con lecturas en cada visita.',
        points: [
          'Lecturas registradas in situ',
          'Planes de filtros y baterías',
          'Fallos detectados a tiempo',
        ],
        visual: {
          kind: 'jobs',
          title: 'Plan de climatización · Octubre',
          items: [
            {
              title: 'Unidades de cubierta RTU 1–12',
              location: 'Harbour Point',
              status: 'Programada',
              tone: 'info',
            },
            {
              title: 'Cambio de filtros UTA-07',
              location: 'Torre B',
              status: 'Completada',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'rooftopUnits',
          alt: 'Equipos de aire acondicionado en la cubierta de un edificio',
        },
      },
      {
        tag: 'Ascensores',
        title: 'Ascensores y escaleras certificados y seguros',
        description:
          'Revisiones mensuales, inspecciones reglamentarias y certificados al día para cada equipo.',
        points: [
          'Revisiones mensuales por proveedor',
          'Inspecciones reglamentarias seguidas',
          'Certificados renovados a tiempo',
        ],
        visual: {
          kind: 'files',
          title: 'Certificados de ascensores',
          items: [
            {
              title: 'Certificado ascensor L1.pdf',
              location: 'Válido hasta mar 2027',
              status: 'Válido',
              tone: 'done',
            },
            {
              title: 'Certificado ascensor L2.pdf',
              location: 'Se renueva en 30 días',
              status: 'Renovar',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'liftShaft',
          alt: 'Técnicos trabajando en el hueco de un ascensor',
        },
      },
      {
        tag: 'Respuesta',
        title: 'Respuesta rápida ante cada fallo',
        description:
          'Las alarmas del BMS y los avisos del personal se convierten en órdenes priorizadas para el especialista adecuado.',
        points: [
          'Alarmas del BMS a órdenes',
          'Prioridad por sistema y sede',
          'Proveedores avisados al instante',
        ],
        visual: {
          kind: 'log',
          title: 'Respuesta a fallos',
          entries: [
            {
              when: '14:02',
              who: 'BMS',
              what: 'informó de temperatura alta en la UTA-07',
            },
            {
              when: '14:03',
              who: 'Fleet',
              what: 'creó un trabajo urgente para CoolAir',
            },
          ],
        },
        photo: {
          id: 'hvacTechnicians',
          alt: 'Técnicos de climatización trabajando en equipos de cubierta',
        },
      },
    ],
    quote: {
      text: 'Fleet ha reducido nuestro mantenimiento correctivo casi un 40 %. Por fin tenemos a los técnicos, los registros de activos y los trabajos en un solo lugar.',
      author: 'Responsable de operaciones',
      company: 'Desarrollo de uso mixto',
      photo: {
        id: 'liftTechnician',
        alt: 'Técnico trabajando dentro de una cabina de ascensor',
      },
    },
    faq: [
      {
        question: '¿Puede Fleet gestionar juntos la climatización y los ascensores?',
        answer:
          'Sí. Fleet planifica y sigue el mantenimiento de climatización, ascensores y escaleras en una plataforma, con planes, proveedores y certificados para cada equipo.',
      },
      {
        question: '¿Puede Fleet guardar los certificados de ascensores?',
        answer:
          'Sí. Los certificados se vinculan a cada ascensor o escalera, con avisos antes de que caduquen.',
      },
      {
        question: '¿Pueden las alarmas del BMS crear órdenes de trabajo?',
        answer:
          'Sí. Con las integraciones del sistema de gestión del edificio, las alarmas y lecturas alimentan sus planes de mantenimiento y crean trabajos.',
      },
      {
        question: '¿Cómo trabajan los proveedores especialistas en Fleet?',
        answer:
          'Los proveedores reciben los trabajos de sus sistemas y sedes, envían presupuestos y cierran el trabajo con fotos y certificados.',
      },
    ],
  },
  dataCenters: {
    hero: {
      eyebrow: 'Centros de datos',
      title: 'Mantenimiento de centros de datos que protege la disponibilidad',
      description:
        'Mantenga refrigeración, energía y seguridad en plena forma con planes preventivos, alertas conectadas al BMS y registros completos de cambios.',
      highlights: [
        'Planes de refrigeración y energía',
        'Alertas conectadas al BMS',
        'Registros completos de cambios',
      ],
      visual: {
        kind: 'jobs',
        title: 'Sala de datos · Hoy',
        items: [
          {
            title: 'Filtros de la unidad CRAH 4',
            location: 'Sala A',
            status: 'En curso',
            tone: 'info',
          },
          {
            title: 'Inspección de baterías del SAI',
            location: 'Sala eléctrica 2',
            status: 'Para hoy',
            tone: 'due',
          },
          {
            title: 'Prueba de carga del grupo',
            location: 'Patio',
            status: 'Completada',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'La disponibilidad depende del edificio',
        description:
          'Refrigeración, distribución eléctrica y extinción funcionan día y noche, y cada intervención necesita planificación y registro.',
        points: ['Refrigeración', 'Energía', 'Extinción'],
      },
      answer: {
        title: 'Cada sistema mantenido con precisión',
        description:
          'Fleet programa cada tarea, la asigna a equipos cualificados y registra cada cambio para auditorías y SLA.',
      },
    },
    capabilities: {
      title: 'Creado para instalaciones críticas',
      description: 'Mantenimiento planificado, cambios controlados y trazabilidad completa.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Preventivo',
          title: 'Planes de refrigeración y energía',
          description:
            'Programe unidades CRAH, enfriadoras, SAI y grupos electrógenos por tiempo u horas de marcha, con listas detalladas.',
          points: [
            'Planes por tiempo u horas de marcha',
            'Listas y lecturas detalladas',
            'Trabajo planificado antes de cada ventana',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan del grupo electrógeno',
            steps: [
              {
                kind: 'Cada',
                text: 'Mes · primer martes',
              },
              {
                kind: 'Luego',
                text: 'Prueba de carga de 60 minutos',
              },
              {
                kind: 'Luego',
                text: 'Registrar lecturas en el historial de G-01',
              },
            ],
          },
        },
        {
          icon: 'approvals',
          label: 'Cambios',
          title: 'Cambios controlados',
          description:
            'Los puntos de aprobación aseguran que cada intervención esté planificada, aprobada y registrada antes de empezar.',
          points: [
            'Aprobación antes de empezar',
            'Ventanas de mantenimiento respetadas',
            'Cada cambio registrado',
          ],
          visual: {
            kind: 'jobs',
            title: 'Solicitudes de cambio',
            items: [
              {
                title: 'Cambio de módulo SAI',
                location: 'Sala eléctrica 2',
                status: 'Aprobar',
                tone: 'due',
              },
              {
                title: 'Actualización firmware CRAH',
                location: 'Sala A',
                status: 'Aprobado',
                tone: 'done',
              },
              {
                title: 'Inspección de PDU',
                location: 'Sala B',
                status: 'Programada',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Activos',
          title: 'Historial completo de cada activo',
          description:
            'Cada enfriadora, SAI, PDU y grupo guarda su historial de servicio, lecturas y documentos.',
          points: [
            'Lecturas e historial por activo',
            'Garantías y contratos',
            'Manuales disponibles in situ',
          ],
          visual: {
            kind: 'asset',
            title: 'Ficha del activo',
            name: 'SAI-2B',
            location: 'Sala eléctrica 2',
            status: 'Operativo',
            facts: [
              {
                label: 'Último servicio',
                value: '15 ago',
              },
              {
                label: 'Edad de baterías',
                value: '3 años',
              },
              {
                label: 'Carga',
                value: '62 %',
              },
              {
                label: 'Trabajos abiertos',
                value: '1',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Informes',
          title: 'Informes listos para SLA',
          description:
            'Muestre a clientes y auditores el trabajo planificado completado, los tiempos de respuesta y el historial de cambios.',
          points: [
            'Trabajo planificado completado',
            'Tiempos de respuesta por prioridad',
            'Exportaciones para auditorías',
          ],
          visual: {
            kind: 'chart',
            title: 'Trabajo planificado completado · T3',
            stats: [
              {
                label: 'A tiempo',
                value: '99,2 %',
              },
              {
                label: 'Cambios',
                value: '84',
              },
            ],
            bars: [
              {
                label: 'Refrigeración',
                value: 99,
              },
              {
                label: 'Energía',
                value: 100,
              },
              {
                label: 'Incendios',
                value: 98,
              },
              {
                label: 'Seguridad',
                value: 99,
              },
              {
                label: 'Edificio',
                value: 97,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Refrigeración',
        title: 'Refrigeración bajo vigilancia constante',
        description:
          'Las alarmas y lecturas del BMS alimentan los planes preventivos, para atender las unidades antes de que baje su rendimiento.',
        points: [
          'Lecturas del BMS en los planes',
          'Planes de filtros y baterías',
          'Alertas convertidas en órdenes',
        ],
        visual: {
          kind: 'log',
          title: 'Alertas de refrigeración',
          entries: [
            {
              when: '02:14',
              who: 'BMS',
              what: 'informó de subida de temperatura de impulsión en CRAH 4',
            },
            {
              when: '02:15',
              who: 'Fleet',
              what: 'creó un trabajo prioritario para el ingeniero de guardia',
            },
          ],
        },
        photo: {
          id: 'dataCenter',
          alt: 'Filas de racks de servidores en un centro de datos',
        },
      },
      {
        tag: 'Energía',
        title: 'Sistemas eléctricos probados y listos',
        description:
          'SAI, baterías, PDU y grupos se prueban según el calendario, con cada resultado registrado.',
        points: [
          'Inspección de SAI y baterías',
          'Pruebas de carga de grupos',
          'Resultados vinculados a cada activo',
        ],
        visual: {
          kind: 'jobs',
          title: 'Revisiones eléctricas · Octubre',
          items: [
            {
              title: 'Prueba de carga grupo G-01',
              location: 'Mensual',
              status: 'Completada',
              tone: 'done',
            },
            {
              title: 'Revisión de baterías SAI-2B',
              location: 'Trimestral',
              status: 'Para hoy',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'electricianPanel',
          alt: 'Electricista trabajando en un cuadro eléctrico',
        },
      },
      {
        tag: 'Equipos',
        title: 'Ingenieros y proveedores en un mismo flujo',
        description:
          'Ingenieros propios y proveedores especialistas siguen los mismos procedimientos, aprobaciones y registros.',
        points: [
          'Mismos procedimientos para todos',
          'Acceso de proveedores a sus trabajos',
          'Historial completo en cada trabajo',
        ],
        visual: {
          kind: 'jobs',
          title: 'Equipos de hoy',
          items: [
            {
              title: 'Ingenieros in situ',
              location: '6 trabajos',
              status: 'En plazo',
              tone: 'done',
            },
            {
              title: 'CoolAir · Refrigeración',
              location: '2 trabajos',
              status: 'Programado',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'techniciansPanel',
          alt: 'Dos técnicos revisando un panel de equipos',
        },
      },
    ],
    quote: {
      text: 'Otras plataformas resultaban demasiado complejas o genéricas. Fleet nos dio una solución a medida con un soporte más rápido.',
      author: 'Director de mantenimiento',
      company: 'Centro logístico',
      photo: {
        id: 'factoryTechnician',
        alt: 'Técnico revisando un equipo con una tableta',
      },
    },
    faq: [
      {
        question: '¿Puede Fleet dar servicio a equipos de centros de datos?',
        answer:
          'Sí. Fleet planifica y sigue el mantenimiento de refrigeración, energía e incendios, con aprobaciones, lecturas y registros completos de cambios.',
      },
      {
        question: '¿Puede el mantenimiento seguir las horas de marcha?',
        answer:
          'Sí. Programe el trabajo por tiempo o uso, como las horas de marcha de grupos electrógenos y SAI.',
      },
      {
        question: '¿Pueden las alarmas del BMS crear órdenes de trabajo?',
        answer:
          'Sí. Las integraciones con el sistema de gestión del edificio permiten que alarmas y lecturas alimenten los planes preventivos y creen trabajos.',
      },
      {
        question: '¿Podemos mostrar el cumplimiento de SLA a los clientes?',
        answer:
          'Sí. Paneles y exportaciones muestran el trabajo planificado completado, los tiempos de respuesta y el historial de cambios.',
      },
    ],
  },
  fitness: {
    hero: {
      eyebrow: 'Gimnasios y centros de bienestar',
      title: 'Mantenimiento de gimnasios que los socios notan',
      description:
        'Mantenga gimnasios, estudios, piscinas y spas limpios, seguros y en pleno funcionamiento, con revisiones de equipos, planes de limpieza y reparaciones rápidas.',
      highlights: ['Revisión de equipos', 'Planes de limpieza', 'Reparaciones rápidas'],
      visual: {
        kind: 'jobs',
        title: 'Solicitudes del club · Hoy',
        items: [
          {
            title: 'Cinta de correr T-08',
            location: 'Zona de cardio',
            status: 'En curso',
            tone: 'info',
          },
          {
            title: 'Control de pH de la piscina',
            location: 'Piscina',
            status: 'Para hoy',
            tone: 'due',
          },
          {
            title: 'Calefactor de la sauna',
            location: 'Spa',
            status: 'Completada',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Los socios esperan que todo funcione',
        description:
          'Máquinas, duchas, piscinas y aire acondicionado se usan sin parar, y los socios notan cada cartel de averiado.',
        points: ['Equipos', 'Piscinas y spas', 'Horarios intensos'],
      },
      answer: {
        title: 'Cada espacio listo para cada socio',
        description:
          'Fleet programa revisiones, recoge incidencias del personal y los socios y agiliza las reparaciones en cada club.',
      },
    },
    capabilities: {
      title: 'Creado para clubes y estudios con mucha actividad',
      description: 'Equipos, limpieza e instalaciones gestionados en un solo lugar.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Equipos',
          title: 'Revisión de equipos según el plan',
          description:
            'Planifique inspecciones y servicio de cintas, bicicletas, racks y máquinas de musculación, con listas de control.',
          points: [
            'Planes por tipo de máquina',
            'Revisiones diarias de seguridad',
            'Historial de cada máquina',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan de cardio',
            steps: [
              {
                kind: 'Cada',
                text: 'Semana · lunes 06:00',
              },
              {
                kind: 'Luego',
                text: 'Inspeccionar todas las máquinas de cardio',
              },
              {
                kind: 'Luego',
                text: 'Registrar incidencias como órdenes',
              },
            ],
          },
        },
        {
          icon: 'requests',
          label: 'Solicitudes',
          title: 'Averías resueltas rápido',
          description:
            'El personal registra un equipo averiado desde el móvil en segundos, y la reparación llega al técnico o proveedor adecuado.',
          points: [
            'Incidencias en segundos',
            'Fotos de cada avería',
            'Proveedores para equipos especiales',
          ],
          visual: {
            kind: 'jobs',
            title: 'Solicitudes abiertas',
            items: [
              {
                title: 'Remo R-02',
                location: 'Zona de cardio',
                status: 'Asignado',
                tone: 'info',
              },
              {
                title: 'Desagüe de la ducha',
                location: 'Vestuario masculino',
                status: 'Urgente',
                tone: 'overdue',
              },
              {
                title: 'Altavoz del estudio',
                location: 'Estudio 2',
                status: 'Resuelto',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: 'Piscinas y spas',
          title: 'Controles de agua y seguridad registrados',
          description:
            'Registre los controles de piscina, sauna y baño de vapor con lecturas, para cumplir los estándares cada día.',
          points: [
            'Lecturas diarias del agua',
            'Revisión de sauna y vapor',
            'Registros listos para inspección',
          ],
          visual: {
            kind: 'files',
            title: 'Registros diarios · Piscina',
            items: [
              {
                title: 'Lecturas del agua.pdf',
                location: '3 registros hoy',
                status: 'Completo',
                tone: 'done',
              },
              {
                title: 'Revisión del material de socorrismo.pdf',
                location: 'Diaria',
                status: 'Completo',
                tone: 'done',
              },
              {
                title: 'Inspección de seguridad del spa.pdf',
                location: 'En 5 días',
                status: 'Pendiente',
                tone: 'due',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Informes',
          title: 'Disponibilidad en cada club',
          description:
            'Vea la disponibilidad de equipos, los costes de reparación y los fallos recurrentes por club para planificar mejoras.',
          points: [
            'Disponibilidad por club',
            'Coste de reparación por máquina',
            'Planificación de mejoras',
          ],
          visual: {
            kind: 'chart',
            title: 'Disponibilidad de equipos por club · T3',
            stats: [
              {
                label: 'Disponibilidad',
                value: '97,8 %',
              },
              {
                label: 'Reparaciones',
                value: '46',
              },
            ],
            bars: [
              {
                label: 'Harbour',
                value: 98,
              },
              {
                label: 'Northgate',
                value: 97,
              },
              {
                label: 'Torre B',
                value: 99,
              },
              {
                label: 'Bayview',
                value: 96,
              },
              {
                label: 'Westport',
                value: 98,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Aire y confort',
        title: 'Aire fresco y temperatura agradable',
        description:
          'Los planes preventivos de climatización mantienen estudios y salas cómodos en cada clase.',
        points: [
          'Cambio de filtros según plan',
          'Lecturas en cada visita',
          'Fallos detectados a tiempo',
        ],
        visual: {
          kind: 'jobs',
          title: 'Climatización · Este mes',
          items: [
            {
              title: 'Servicio del aire del estudio 1',
              location: 'Club Harbour',
              status: 'Completada',
              tone: 'done',
            },
            {
              title: 'Filtros UTA de la sala',
              location: 'Club Northgate',
              status: 'Programada',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'acFilterService',
          alt: 'Técnico cambiando un filtro de aire acondicionado',
        },
      },
      {
        tag: 'Limpieza',
        title: 'Vestuarios limpios cada hora',
        description:
          'Rondas de limpieza con listas y fotos de evidencia mantienen vestuarios, duchas y estudios impecables.',
        points: [
          'Rondas de limpieza cada hora',
          'Listas con foto de evidencia',
          'Incidencias registradas en las rondas',
        ],
        visual: {
          kind: 'steps',
          title: 'Ronda de limpieza',
          steps: [
            {
              kind: 'Cada',
              text: 'Hora · de 06:00 a 22:00',
            },
            {
              kind: 'Luego',
              text: 'Limpiar vestuarios y registrar fotos',
            },
          ],
        },
        photo: {
          id: 'cleanerCorridor',
          alt: 'Limpiador desinfectando el pomo de una puerta',
        },
      },
      {
        tag: 'Instalaciones',
        title: 'Duchas, piscinas y salas técnicas en marcha',
        description:
          'Fontanería, bombas y calentadores se mantienen según el plan, con respuesta rápida ante fugas.',
        points: [
          'Servicio de bombas y calentadores',
          'Respuesta rápida ante fugas',
          'Historial de cada activo',
        ],
        visual: {
          kind: 'asset',
          title: 'Ficha del activo',
          name: 'Bomba de piscina PP-1',
          location: 'Club Harbour · Sala técnica',
          status: 'Operativo',
          facts: [
            {
              label: 'Último servicio',
              value: '20 sep',
            },
            {
              label: 'Próximo servicio',
              value: '20 dic',
            },
            {
              label: 'Horas de marcha',
              value: '2.140',
            },
            {
              label: 'Trabajos abiertos',
              value: '0',
            },
          ],
        },
        photo: {
          id: 'plumberRepair',
          alt: 'Fontanero reparando el fregadero de una cocina',
        },
      },
    ],
    quote: {
      text: 'Fleet ha reducido nuestro mantenimiento correctivo casi un 40 %. Por fin tenemos a los técnicos, los registros de activos y los trabajos en un solo lugar.',
      author: 'Responsable de operaciones',
      company: 'Desarrollo de uso mixto',
      photo: {
        id: 'technicianDrill',
        alt: 'Técnico instalando un soporte con un taladro',
      },
    },
    faq: [
      {
        question: '¿Es Fleet adecuado para gimnasios y centros de bienestar?',
        answer:
          'Sí. Fleet ayuda a gimnasios, estudios, piscinas y spas a mantener equipos e instalaciones, con reparaciones rápidas y planes de limpieza.',
      },
      {
        question: '¿Puede el personal avisar de equipos averiados?',
        answer:
          'Sí. El personal registra el equipo averiado desde el móvil con fotos, y la reparación llega al técnico o proveedor adecuado.',
      },
      {
        question: '¿Podemos registrar los controles de piscinas y spas?',
        answer:
          'Sí. Registre lecturas diarias y revisiones de seguridad de piscinas, saunas y baños de vapor, listas para inspección.',
      },
      {
        question: '¿Podemos gestionar varios clubes?',
        answer:
          'Sí. Fleet da servicio a operadores con varias sedes, con reglas, paneles e informes por club y región.',
      },
    ],
  },
  mep: {
    hero: {
      eyebrow: 'Mantenimiento MEP',
      title: 'Mantenimiento MEP en toda su cartera',
      description:
        'Gestione el trabajo mecánico, eléctrico y de fontanería en un solo flujo, con planes preventivos, asignación por oficio y registros de cumplimiento en cada edificio.',
      highlights: ['Asignación por oficio', 'Planes preventivos', 'Registros de cumplimiento'],
      visual: {
        kind: 'jobs',
        title: 'Trabajos MEP · Hoy',
        items: [
          {
            title: 'Cuadro de distribución DB-3',
            location: 'Torre B · Planta 6',
            status: 'En curso',
            tone: 'info',
          },
          {
            title: 'Servicio del grupo de presión',
            location: 'Harbour Point · Sótano',
            status: 'Para hoy',
            tone: 'due',
          },
          {
            title: 'Cambio de correa UTA-07',
            location: 'Northgate · Cubierta',
            status: 'Completada',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Tres oficios, un edificio',
        description:
          'Los sistemas mecánicos, eléctricos y de fontanería dependen entre sí, y cada oficio tiene sus planes, especialistas y estándares.',
        points: ['Mecánica', 'Electricidad', 'Fontanería'],
      },
      answer: {
        title: 'El trabajo MEP en un flujo coordinado',
        description:
          'Fleet planifica cada oficio, asigna los trabajos al especialista adecuado y mantiene un registro único de cada sistema.',
      },
    },
    capabilities: {
      title: 'Cada oficio, coordinado',
      description:
        'Planes, asignación y registros para sistemas mecánicos, eléctricos y de fontanería.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Preventivo',
          title: 'Planes para cada sistema MEP',
          description:
            'Programe climatización, cuadros eléctricos, bombas y sistemas de agua por tiempo o uso, con listas por oficio.',
          points: [
            'Listas por oficio',
            'Planes por tiempo o uso',
            'Trabajos antes del vencimiento',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan eléctrico',
            steps: [
              {
                kind: 'Plan',
                text: 'Cuadros de distribución · trimestral',
              },
              {
                kind: 'Luego',
                text: 'Termografía y apriete de bornes',
              },
              {
                kind: 'Luego',
                text: 'Registrar resultados en cada cuadro',
              },
            ],
          },
        },
        {
          icon: 'routing',
          label: 'Asignación',
          title: 'Trabajos asignados por oficio',
          description:
            'Las solicitudes llegan al técnico propio o proveedor especialista adecuado por oficio, sede y prioridad.',
          points: [
            'Asignación por oficio y sede',
            'Prioridades con objetivos SLA',
            'Proveedores en el mismo flujo',
          ],
          visual: {
            kind: 'jobs',
            title: 'Asignación · Hoy',
            items: [
              {
                title: 'Sin agua caliente',
                location: 'Harbour Point · P9',
                status: 'Fontanería',
                tone: 'info',
              },
              {
                title: 'Diferencial disparado',
                location: 'Torre B · P6',
                status: 'Electricidad',
                tone: 'info',
              },
              {
                title: 'UTA ruidosa',
                location: 'Northgate · Cubierta',
                status: 'Mecánica',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Activos',
          title: 'Un registro para todos los sistemas',
          description:
            'Bombas, cuadros, calderas y UTA comparten un registro con historial, costes y documentos.',
          points: [
            'Historial y costes por activo',
            'Esquemas unifilares y manuales',
            'Garantía en cada trabajo',
          ],
          visual: {
            kind: 'asset',
            title: 'Ficha del activo',
            name: 'Grupo de presión P-03',
            location: 'Harbour Point · Sótano',
            status: 'Servicio pendiente',
            facts: [
              {
                label: 'Último servicio',
                value: '10 jul',
              },
              {
                label: 'Horas de marcha',
                value: '8.310',
              },
              {
                label: 'Coste del año',
                value: '1.420 $',
              },
              {
                label: 'Trabajos abiertos',
                value: '1',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Informes',
          title: 'Carga de trabajo por oficio',
          description:
            'Equilibre la carga y el gasto entre los equipos de mecánica, electricidad y fontanería.',
          points: [
            'Trabajos por oficio y sede',
            'Gasto por oficio',
            'Fallos recurrentes por sistema',
          ],
          visual: {
            kind: 'chart',
            title: 'Trabajos por oficio · T3',
            stats: [
              {
                label: 'Trabajos T3',
                value: '642',
              },
              {
                label: 'SLA cumplido',
                value: '95,8 %',
              },
            ],
            bars: [
              {
                label: 'Mecánica',
                value: 248,
              },
              {
                label: 'Electricidad',
                value: 196,
              },
              {
                label: 'Fontanería',
                value: 158,
              },
              {
                label: 'Incendios',
                value: 40,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Electricidad',
        title: 'Sistemas eléctricos probados y seguros',
        description:
          'Cuadros, iluminación y sistemas de emergencia se prueban según el calendario, con cada resultado registrado.',
        points: [
          'Pruebas de cuadros e iluminación',
          'Revisión del alumbrado de emergencia',
          'Resultados vinculados a cada activo',
        ],
        visual: {
          kind: 'jobs',
          title: 'Revisiones eléctricas',
          items: [
            {
              title: 'Prueba del alumbrado de emergencia',
              location: 'Todas las plantas',
              status: 'Completada',
              tone: 'done',
            },
            {
              title: 'Termografía DB-3',
              location: 'Torre B · P6',
              status: 'Programada',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'electricianPanel',
          alt: 'Electricista trabajando en un cuadro eléctrico',
        },
      },
      {
        tag: 'Fontanería',
        title: 'Fontanería siempre en marcha',
        description:
          'Bombas, calentadores y saneamiento se mantienen según el plan, con respuesta rápida ante fugas.',
        points: [
          'Servicio de bombas y calentadores',
          'Respuesta rápida ante fugas',
          'Registros de los sistemas de agua',
        ],
        visual: {
          kind: 'log',
          title: 'Actividad de fontanería',
          entries: [
            {
              when: '07:40',
              who: 'Recepción',
              what: 'informó de falta de agua caliente en la planta 9',
            },
            {
              when: '07:45',
              who: 'Fleet',
              what: 'asignó al fontanero propio como urgente',
            },
          ],
        },
        photo: {
          id: 'plumberRepair',
          alt: 'Fontanero reparando el fregadero de una cocina',
        },
      },
      {
        tag: 'Mecánica',
        title: 'Sistemas mecánicos a pleno rendimiento',
        description:
          'UTA, ventiladores y enfriadoras reciben servicio con lecturas registradas, para un rendimiento constante.',
        points: [
          'Lecturas registradas in situ',
          'Cambio de correas y filtros',
          'Fallos detectados a tiempo',
        ],
        visual: {
          kind: 'steps',
          title: 'Servicio de UTA',
          steps: [
            {
              kind: 'Cada',
              text: 'Trimestre · todas las UTA',
            },
            {
              kind: 'Luego',
              text: 'Cambiar correas y filtros, registrar lecturas',
            },
          ],
        },
        photo: {
          id: 'acFilterService',
          alt: 'Técnico cambiando un filtro de aire acondicionado',
        },
      },
    ],
    quote: {
      text: 'Fleet ha reducido nuestro mantenimiento correctivo casi un 40 %. Por fin tenemos a los técnicos, los registros de activos y los trabajos en un solo lugar.',
      author: 'Responsable de operaciones',
      company: 'Desarrollo de uso mixto',
      photo: {
        id: 'hvacTechnicians',
        alt: 'Técnicos de climatización trabajando en equipos de cubierta',
      },
    },
    faq: [
      {
        question: '¿Qué es el mantenimiento MEP?',
        answer:
          'El mantenimiento MEP abarca los sistemas mecánicos, eléctricos y de fontanería de un edificio, como climatización, distribución eléctrica, iluminación, bombas y agua.',
      },
      {
        question: '¿Puede Fleet asignar trabajos por oficio?',
        answer:
          'Sí. Las reglas de asignación envían cada trabajo al técnico propio o proveedor especialista adecuado por oficio, sede y prioridad.',
      },
      {
        question: '¿Podemos guardar documentos MEP en Fleet?',
        answer:
          'Sí. Guarde manuales, esquemas, certificados y resultados de pruebas en cada activo, disponibles in situ.',
      },
      {
        question: '¿Sirve Fleet para empresas instaladoras MEP?',
        answer:
          'Sí. Las empresas gestionan el mantenimiento de varios clientes y sedes, con reglas, informes y accesos por cliente.',
      },
    ],
  },
  offices: {
    hero: {
      eyebrow: 'Oficinas y usos mixtos',
      title: 'Mantenimiento de oficinas y edificios mixtos para espacios productivos',
      description:
        'Mantenga oficinas, espacios comunes y desarrollos de uso mixto en perfecto funcionamiento, con solicitudes de inquilinos, planes preventivos e informes de toda la cartera.',
      highlights: ['Solicitudes de inquilinos', 'Planes preventivos', 'Informes de cartera'],
      visual: {
        kind: 'jobs',
        title: 'Torre B · Hoy',
        items: [
          {
            title: 'Aire de la sala de reuniones',
            location: 'Planta 14',
            status: 'En curso',
            tone: 'info',
          },
          {
            title: 'Revisión mensual ascensor L3',
            location: 'Ascensores del núcleo',
            status: 'Para hoy',
            tone: 'due',
          },
          {
            title: 'Fuga en grifo de cocina',
            location: 'Planta 9 · Office',
            status: 'Completada',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'El trabajo depende del confort y la disponibilidad',
        description:
          'Aire acondicionado, ascensores, iluminación y servicios comunes marcan cómo viven el día inquilinos y empleados.',
        points: ['Inquilinos', 'Espacios comunes', 'Instalaciones'],
      },
      answer: {
        title: 'Operación fluida en cada planta',
        description:
          'Fleet conecta solicitudes de inquilinos, mantenimiento preventivo y proveedores para que cada planta sea cómoda y productiva.',
      },
    },
    capabilities: {
      title: 'Creado para oficinas y usos mixtos',
      description:
        'De las solicitudes de inquilinos a las instalaciones, cada planta gestionada en un solo lugar.',
      tabs: [
        {
          icon: 'requests',
          label: 'Solicitudes',
          title: 'Solicitudes de inquilinos hasta el cierre',
          description:
            'Las solicitudes llegan por correo, desde su portal de inquilinos o desde recepción y se convierten en órdenes automáticamente.',
          points: [
            'Del correo a la orden con Fleet Mail',
            'Integraciones con portales de inquilinos',
            'Avisos de estado en cada paso',
          ],
          visual: {
            kind: 'steps',
            title: 'Solicitud de inquilino',
            steps: [
              {
                kind: 'Correo',
                text: 'Sala de reuniones con calor, planta 14',
              },
              {
                kind: 'Luego',
                text: 'Orden creada y asignada',
              },
              {
                kind: 'Luego',
                text: 'Inquilino informado al cerrar',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Preventivo',
          title: 'Instalaciones según el plan',
          description:
            'Planifique el mantenimiento de climatización, ascensores, iluminación y protección contra incendios por tiempo o uso en cada edificio.',
          points: [
            'Planes para cada sistema',
            'Listas en cada visita',
            'Trabajo fuera del horario de oficina',
          ],
          visual: {
            kind: 'jobs',
            title: 'Planificado esta semana',
            items: [
              {
                title: 'Servicio ascensores L1–L4',
                location: 'Ascensores del núcleo',
                status: 'Programada',
                tone: 'info',
              },
              {
                title: 'Prueba de alarma de incendios',
                location: 'Todas las plantas',
                status: 'Completada',
                tone: 'done',
              },
              {
                title: 'Cambio de filtros UTA',
                location: 'Cubierta',
                status: 'Para hoy',
                tone: 'due',
              },
            ],
          },
        },
        {
          icon: 'tenants',
          label: 'Inquilinos',
          title: 'Historial por planta e inquilino',
          description:
            'Siga trabajos y costes por planta, inquilino y espacio común para repercusiones y planificación.',
          points: [
            'Historial por planta e inquilino',
            'Costes para repercutir',
            'Cuidado de espacios comunes',
          ],
          visual: {
            kind: 'asset',
            title: 'Ficha del inquilino',
            name: 'Planta 14 · Northwind Ltd',
            location: 'Torre B',
            status: 'Ocupada',
            facts: [
              {
                label: 'Solicitudes del año',
                value: '9',
              },
              {
                label: 'Última visita',
                value: '28 sep',
              },
              {
                label: 'Trabajos abiertos',
                value: '1',
              },
              {
                label: 'Coste del año',
                value: '2.310 $',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Informes',
          title: 'Informes de toda la cartera',
          description:
            'Compare tiempos de respuesta, gasto y solicitudes entre edificios y comparta paneles con los propietarios.',
          points: [
            'Tiempos de respuesta por edificio',
            'Gasto por edificio y planta',
            'Paneles de solo lectura para propietarios',
          ],
          visual: {
            kind: 'chart',
            title: 'Solicitudes de inquilinos por edificio · T3',
            stats: [
              {
                label: 'Solicitudes',
                value: '486',
              },
              {
                label: 'Resueltas a tiempo',
                value: '96 %',
              },
            ],
            bars: [
              {
                label: 'Torre B',
                value: 142,
              },
              {
                label: 'Harbour Point',
                value: 118,
              },
              {
                label: 'Northgate',
                value: 96,
              },
              {
                label: 'Bayview',
                value: 74,
              },
              {
                label: 'Westport',
                value: 56,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Puestos de trabajo',
        title: 'Plantas cómodas y productivas',
        description:
          'Aire acondicionado, iluminación y salas de reuniones se mantienen según el plan, y las incidencias se resuelven rápido.',
        points: [
          'Incidencias de confort resueltas rápido',
          'Salas revisadas a diario',
          'Trabajo fuera del horario de oficina',
        ],
        visual: {
          kind: 'jobs',
          title: 'Planta 14 · Hoy',
          items: [
            {
              title: 'Aire de la sala de reuniones',
              location: 'Asignado a CoolAir',
              status: 'En curso',
              tone: 'info',
            },
            {
              title: 'Fuga en grifo del office',
              location: 'Fontanero propio',
              status: 'Hecho',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'officeFloor',
          alt: 'Oficina diáfana con personas trabajando',
        },
      },
      {
        tag: 'Espacios comunes',
        title: 'Vestíbulos y servicios siempre listos',
        description:
          'Vestíbulos, ascensores, aparcamientos y servicios comunes se mantienen limpios, seguros y operativos para cada visitante.',
        points: [
          'Revisión de vestíbulo y ascensores',
          'Iluminación y barreras del aparcamiento',
          'Limpieza con foto de evidencia',
        ],
        visual: {
          kind: 'steps',
          title: 'Rutina del vestíbulo',
          steps: [
            {
              kind: 'Cada',
              text: 'Día · 07:00',
            },
            {
              kind: 'Luego',
              text: 'Revisar vestíbulo, ascensores y tornos',
            },
          ],
        },
        photo: {
          id: 'officeCorridor',
          alt: 'Personas caminando por un pasillo de oficinas luminoso',
        },
      },
      {
        tag: 'Recepción',
        title: 'Recepción y mantenimiento en sintonía',
        description:
          'Recepción y seguridad registran incidencias de inquilinos y visitantes, y cada trabajo se sigue hasta el cierre.',
        points: [
          'Incidencias registradas en recepción',
          'Avisos compartidos con inquilinos',
          'Notas de relevo entre turnos',
        ],
        visual: {
          kind: 'log',
          title: 'Registro de recepción',
          entries: [
            {
              when: '09:05',
              who: 'Recepción',
              what: 'registró un torno averiado en la entrada B',
            },
            {
              when: '09:12',
              who: 'Fleet',
              what: 'asignó la reparación al proveedor de sistemas de seguridad',
            },
          ],
        },
        photo: {
          id: 'supportAgent',
          alt: 'Agente de atención al cliente con auriculares',
        },
      },
    ],
    quote: {
      text: 'Fleet ha reducido nuestro mantenimiento correctivo casi un 40 %. Por fin tenemos a los técnicos, los registros de activos y los trabajos en un solo lugar.',
      author: 'Responsable de operaciones',
      company: 'Desarrollo de uso mixto',
      photo: {
        id: 'acFilterService',
        alt: 'Técnico cambiando un filtro de aire acondicionado',
      },
    },
    faq: [
      {
        question: '¿Cómo ayuda Fleet a oficinas y edificios de uso mixto?',
        answer:
          'Fleet conecta solicitudes de inquilinos, mantenimiento preventivo, proveedores e informes, para que cada planta y espacio común sea cómodo y funcione.',
      },
      {
        question: '¿Cómo envían los inquilinos sus solicitudes?',
        answer:
          'Por correo con Fleet Mail, desde su portal de inquilinos mediante integraciones o a través del personal de recepción y seguridad.',
      },
      {
        question: '¿Podemos seguir los costes por inquilino?',
        answer:
          'Sí. Siga trabajos y costes por planta e inquilino para repercusiones y planificación del presupuesto.',
      },
      {
        question: '¿Pueden los propietarios ver el rendimiento del edificio?',
        answer:
          'Sí. Comparta paneles de solo lectura con propietarios y consejos, con tiempos de respuesta y gasto por edificio.',
      },
    ],
  },
  industrial: {
    hero: {
      eyebrow: 'Fábricas y plantas industriales',
      title: 'Mantenimiento de fábricas y plantas para la máxima disponibilidad',
      description:
        'Mantenga en marcha activos de producción, servicios auxiliares y sistemas de seguridad con registros de activos, planes preventivos y por uso, y análisis de paradas.',
      highlights: ['Planes por uso', 'Inspecciones de seguridad', 'Análisis de paradas'],
      visual: {
        kind: 'jobs',
        title: 'Planta 1 · Hoy',
        items: [
          {
            title: 'Servicio del compresor C-2',
            location: 'Servicios auxiliares',
            status: 'En curso',
            tone: 'info',
          },
          {
            title: 'Inspección de resguardos línea 3',
            location: 'Producción',
            status: 'Para hoy',
            tone: 'due',
          },
          {
            title: 'Tratamiento de agua de caldera',
            location: 'Sala de calderas',
            status: 'Completada',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'La producción depende de cada activo',
        description:
          'Líneas, compresores, calderas y sistemas de seguridad trabajan en secuencia, y cada parada afecta a la producción y las entregas.',
        points: ['Líneas de producción', 'Servicios auxiliares', 'Sistemas de seguridad'],
      },
      answer: {
        title: 'Disponibilidad planificada de antemano',
        description:
          'Fleet convierte los datos de activos en planes preventivos y por uso, para actuar antes de que una avería pare la producción.',
      },
    },
    capabilities: {
      title: 'Creado para la operación industrial',
      description: 'Activos, planes, seguridad y análisis para cada planta.',
      tabs: [
        {
          icon: 'assets',
          label: 'Activos',
          title: 'Un registro para cada máquina',
          description:
            'Cree fichas digitales de máquinas, servicios auxiliares y sistemas de seguridad, organizadas por planta, línea y zona.',
          points: [
            'Fichas por planta, línea y zona',
            'Historial, costes y manuales',
            'Repuestos anotados en cada activo',
          ],
          visual: {
            kind: 'asset',
            title: 'Ficha del activo',
            name: 'Compresor C-2',
            location: 'Planta 1 · Servicios auxiliares',
            status: 'Operativo',
            facts: [
              {
                label: 'Horas de marcha',
                value: '12.840',
              },
              {
                label: 'Último servicio',
                value: '09 sep',
              },
              {
                label: 'Parada T3',
                value: '2 h',
              },
              {
                label: 'Coste del año',
                value: '5.620 $',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Por uso',
          title: 'Mantenimiento por horas o ciclos',
          description:
            'Active el mantenimiento por horas de marcha, ciclos o tiempo, para ajustar el servicio al uso real del equipo.',
          points: [
            'Disparadores por horas o ciclos',
            'Listas por tipo de máquina',
            'Menos reparaciones urgentes',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan por uso',
            steps: [
              {
                kind: 'Disparador',
                text: 'Compresor C-2 alcanza 13.000 horas',
              },
              {
                kind: 'Luego',
                text: 'Crear orden de servicio',
              },
              {
                kind: 'Luego',
                text: 'Asignar al equipo de servicios auxiliares',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: 'Seguridad',
          title: 'Inspecciones de seguridad registradas',
          description:
            'Programe revisiones de resguardos, inspecciones de equipos a presión y pruebas contra incendios, con cada resultado registrado.',
          points: [
            'Revisión de resguardos y enclavamientos',
            'Inspección de equipos a presión',
            'Registros listos para auditoría',
          ],
          visual: {
            kind: 'files',
            title: 'Registros de seguridad · Planta 1',
            items: [
              {
                title: 'Inspección de equipos a presión.pdf',
                location: 'Realizada el 12 sep',
                status: 'Válido',
                tone: 'done',
              },
              {
                title: 'Revisión de resguardos línea 3.pdf',
                location: 'Para hoy',
                status: 'Pendiente',
                tone: 'due',
              },
              {
                title: 'Prueba de extinción.pdf',
                location: 'Válido hasta mar 2027',
                status: 'Válido',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Paradas',
          title: 'Análisis de paradas por línea',
          description: 'Vea qué líneas y activos causan más paradas y dónde invertir.',
          points: [
            'Paradas por línea y activo',
            'Costes de reparación en el tiempo',
            'Planificación de sustituciones',
          ],
          visual: {
            kind: 'chart',
            title: 'Horas de parada por línea · T3',
            stats: [
              {
                label: 'Parada T3',
                value: '27 h',
              },
              {
                label: 'Trabajo planificado',
                value: '94 %',
              },
            ],
            bars: [
              {
                label: 'Línea 1',
                value: 4,
              },
              {
                label: 'Línea 2',
                value: 6,
              },
              {
                label: 'Línea 3',
                value: 9,
              },
              {
                label: 'Auxiliares',
                value: 5,
              },
              {
                label: 'Envasado',
                value: 3,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Producción',
        title: 'Líneas en marcha turno tras turno',
        description:
          'Los operarios avisan de fallos desde la planta, y mantenimiento responde con la prioridad y los repuestos adecuados.',
        points: [
          'Fallos avisados desde la planta',
          'Prioridad según el impacto en la línea',
          'Reparaciones seguidas hasta el cierre',
        ],
        visual: {
          kind: 'log',
          title: 'Actividad de la línea 3',
          entries: [
            {
              when: '13:20',
              who: 'Operario',
              what: 'informó de un atasco en la llenadora de la línea 3',
            },
            {
              when: '13:22',
              who: 'Fleet',
              what: 'asignó al técnico de turno como urgente',
            },
          ],
        },
        photo: {
          id: 'factoryTechnician',
          alt: 'Técnico revisando un equipo con una tableta',
        },
      },
      {
        tag: 'Servicios auxiliares',
        title: 'Servicios auxiliares al ritmo de la producción',
        description:
          'Compresores, calderas y enfriadoras reciben servicio según el uso, con lecturas en cada visita.',
        points: [
          'Servicio por horas de marcha',
          'Lecturas registradas in situ',
          'Fallos detectados a tiempo',
        ],
        visual: {
          kind: 'jobs',
          title: 'Servicios auxiliares · Esta semana',
          items: [
            {
              title: 'Inspección de caldera B-1',
              location: 'Sala de calderas',
              status: 'Completada',
              tone: 'done',
            },
            {
              title: 'Servicio enfriadora CH-5',
              location: 'Servicios auxiliares',
              status: 'Programada',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'techniciansPanel',
          alt: 'Dos técnicos revisando un panel de equipos',
        },
      },
      {
        tag: 'Dirección',
        title: 'El rendimiento de cada planta de un vistazo',
        description:
          'Los jefes de planta ven paradas, trabajo planificado completado y gasto de mantenimiento en cada sede.',
        points: [
          'Paradas por planta y línea',
          'Trabajo planificado completado',
          'Gasto por centro de coste',
        ],
        visual: {
          kind: 'jobs',
          title: 'Plantas · T3',
          items: [
            {
              title: 'Planta 1',
              location: '94 % del trabajo planificado',
              status: 'En plazo',
              tone: 'done',
            },
            {
              title: 'Planta 2',
              location: '88 % del trabajo planificado',
              status: 'Revisar',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'plantManagers',
          alt: 'Director de planta reunido con ingenieros con casco',
        },
      },
    ],
    quote: {
      text: 'Otras plataformas resultaban demasiado complejas o genéricas. Fleet nos dio una solución a medida con un soporte más rápido.',
      author: 'Director de mantenimiento',
      company: 'Centro logístico',
      photo: {
        id: 'warehouseTeam',
        alt: 'Equipo de almacén revisando existencias entre estanterías',
      },
    },
    faq: [
      {
        question: '¿Es Fleet adecuado para fábricas y plantas?',
        answer:
          'Sí. Fleet gestiona activos de producción, servicios auxiliares y sistemas de seguridad, con planes preventivos y por uso y análisis de paradas.',
      },
      {
        question: '¿Puede el mantenimiento seguir horas de marcha o ciclos?',
        answer:
          'Sí. Active el mantenimiento por horas de marcha, ciclos o tiempo, para ajustar el servicio al uso real del equipo.',
      },
      {
        question: '¿Puede Fleet seguir las inspecciones de seguridad?',
        answer:
          'Sí. Programe y registre revisiones de resguardos, inspecciones de equipos a presión y pruebas contra incendios, listas para auditoría.',
      },
      {
        question: '¿Podemos comparar el rendimiento entre plantas?',
        answer:
          'Sí. Los paneles muestran paradas, trabajo planificado completado y gasto por planta y línea.',
      },
    ],
  },
  vehicles: {
    hero: {
      eyebrow: 'Gestión de vehículos',
      title: 'Gestión de vehículos de la compra a la baja',
      description:
        'Gestione cada vehículo en un solo lugar, del pedido y la matriculación al mantenimiento, siniestros y baja, con registros listos para auditoría.',
      highlights: [
        'Ciclo de vida completo',
        'Mantenimiento por kilometraje',
        'Siniestros y multas',
      ],
      visual: {
        kind: 'jobs',
        title: 'Vehículos de flota · Hoy',
        items: [
          {
            title: 'Servicio furgoneta V-12',
            location: 'Toca a los 30.000 km',
            status: 'Programada',
            tone: 'info',
          },
          {
            title: 'Matrícula camión T-03',
            location: 'Se renueva en 14 días',
            status: 'Pendiente',
            tone: 'due',
          },
          {
            title: 'Cambio de neumáticos V-07',
            location: 'Taller',
            status: 'Completada',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Cada vehículo tiene una larga lista de tareas',
        description:
          'Compras, matriculaciones, servicios, multas y siniestros implican equipos, documentos y plazos distintos.',
        points: ['Compras', 'Mantenimiento', 'Cumplimiento'],
      },
      answer: {
        title: 'Cada vehículo, cada etapa, en un solo lugar',
        description:
          'Fleet da a compras, operaciones y finanzas una vista de cada vehículo, con cada registro listo para auditoría.',
      },
    },
    capabilities: {
      title: 'Gestión completa del ciclo de vida del vehículo',
      description: 'De la adquisición a la baja, cada movimiento registrado y listo para informes.',
      tabs: [
        {
          icon: 'assets',
          label: 'Ciclo de vida',
          title: 'Cada vehículo, cada etapa',
          description: 'Siga pedido, entrega, alta, uso activo y baja de cada vehículo.',
          points: ['Compra y alta', 'Estado activo, parado o retirado', 'Registros de baja'],
          visual: {
            kind: 'asset',
            title: 'Ficha del vehículo',
            name: 'Furgoneta V-12',
            location: 'Westport DC · Reparto',
            status: 'Activo',
            facts: [
              {
                label: 'Kilometraje',
                value: '29.640 km',
              },
              {
                label: 'Próximo servicio',
                value: '30.000 km',
              },
              {
                label: 'Matrícula',
                value: 'Válida hasta mar 2027',
              },
              {
                label: 'Coste del año',
                value: '3.180 $',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Mantenimiento',
          title: 'Mantenimiento por kilómetros y tiempo',
          description:
            'Programe el mantenimiento preventivo por kilometraje, horas de motor o tiempo, y siga las reparaciones automáticamente.',
          points: [
            'Disparadores por km o tiempo',
            'Técnicos asignados automáticamente',
            'Reparaciones seguidas hasta el cierre',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan de servicio',
            steps: [
              {
                kind: 'Disparador',
                text: 'Furgoneta V-12 alcanza 30.000 km',
              },
              {
                kind: 'Luego',
                text: 'Reservar servicio en taller',
              },
              {
                kind: 'Luego',
                text: 'Registrar factura en el historial',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: 'Cumplimiento',
          title: 'Matriculaciones, multas y siniestros',
          description:
            'Gestione renovaciones, multas y siniestros con avisos, fotos y resúmenes de costes.',
          points: [
            'Avisos de renovación',
            'Multas con plazos y pagos',
            'Siniestros registrados desde la calle',
          ],
          visual: {
            kind: 'files',
            title: 'Cumplimiento · Este mes',
            items: [
              {
                title: 'Matrícula camión T-03',
                location: 'Se renueva en 14 días',
                status: 'Renovar',
                tone: 'due',
              },
              {
                title: 'Multa de aparcamiento n.º 4471',
                location: 'Pagada el 02 oct',
                status: 'Cerrada',
                tone: 'done',
              },
              {
                title: 'Siniestro furgoneta V-05',
                location: 'Peritaje en curso',
                status: 'Abierto',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Utilización',
          title: 'Utilización y control de costes',
          description:
            'Controle uso, kilometraje y horas paradas para detectar vehículos infrautilizados y mejorar el retorno.',
          points: [
            'Uso y horas paradas',
            'Coste por vehículo',
            'Activos infrautilizados destacados',
          ],
          visual: {
            kind: 'chart',
            title: 'Utilización por tipo de vehículo · T3',
            stats: [
              {
                label: 'Vehículos',
                value: '86',
              },
              {
                label: 'Utilización',
                value: '78 %',
              },
            ],
            bars: [
              {
                label: 'Furgonetas',
                value: 84,
              },
              {
                label: 'Camiones',
                value: 79,
              },
              {
                label: 'Turismos',
                value: 64,
              },
              {
                label: 'Carretillas',
                value: 88,
              },
              {
                label: 'Servicio',
                value: 71,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'En ruta',
        title: 'Incidencias registradas en ruta',
        description:
          'Los conductores registran incidencias con fotos y notas vinculadas al vehículo, y los responsables reciben el aviso al instante.',
        points: [
          'Partes de incidencia desde el móvil',
          'Fotos y notas adjuntas',
          'Avisos inmediatos a responsables',
        ],
        visual: {
          kind: 'log',
          title: 'Registro de incidencias',
          entries: [
            {
              when: '16:40',
              who: 'Conductor',
              what: 'informó de una puerta rayada en la furgoneta V-05',
            },
            {
              when: '16:41',
              who: 'Fleet',
              what: 'abrió un siniestro y avisó al responsable de flota',
            },
          ],
        },
        photo: {
          id: 'vanDriver',
          alt: 'Conductor sonriente al volante de una furgoneta',
        },
      },
      {
        tag: 'Inspecciones',
        title: 'Cada vehículo listo para la ruta',
        description:
          'Inspecciones y listas programadas mantienen cada vehículo seguro, conforme y listo para la siguiente ruta.',
        points: [
          'Listas de revisión antes de salir',
          'Defectos convertidos en órdenes',
          'Historial de inspecciones por vehículo',
        ],
        visual: {
          kind: 'jobs',
          title: 'Inspecciones · Hoy',
          items: [
            {
              title: 'Furgonetas V-01 a V-12',
              location: 'Revisión antes de salir',
              status: 'Completada',
              tone: 'done',
            },
            {
              title: 'Camión T-03',
              location: 'Inspección de frenos',
              status: 'Programada',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'fleetInspection',
          alt: 'Inspector revisando furgonetas con una tableta',
        },
      },
      {
        tag: 'Finanzas',
        title: 'Finanzas y operaciones en sintonía',
        description:
          'Los datos de mantenimiento, combustible y uso se reúnen en un panel para presupuestos y decisiones de contratos.',
        points: [
          'Costes por vehículo y tipo',
          'Comparativa de proveedores y contratos',
          'Seguimiento del presupuesto',
        ],
        visual: {
          kind: 'chart',
          title: 'Coste por tipo de vehículo · Año',
          stats: [],
          bars: [
            {
              label: 'Camiones',
              value: 48,
            },
            {
              label: 'Furgonetas',
              value: 36,
            },
            {
              label: 'Turismos',
              value: 18,
            },
            {
              label: 'Carretillas',
              value: 14,
            },
            {
              label: 'Servicio',
              value: 22,
            },
          ],
        },
        photo: {
          id: 'fleetVans',
          alt: 'Furgonetas de reparto aparcadas frente a un almacén',
        },
      },
    ],
    quote: {
      text: 'Otras plataformas resultaban demasiado complejas o genéricas. Fleet nos dio una solución a medida con un soporte más rápido.',
      author: 'Director de mantenimiento',
      company: 'Centro logístico',
      photo: {
        id: 'fleetManager',
        alt: 'Responsable de flota con una tableta frente a camiones',
      },
    },
    faq: [
      {
        question: '¿Qué abarca la gestión de vehículos de Fleet?',
        answer:
          'Todo el ciclo de vida del vehículo: compra, alta, mantenimiento, matriculaciones, multas, siniestros, utilización y baja.',
      },
      {
        question: '¿Se puede programar el mantenimiento por kilometraje?',
        answer:
          'Sí. Programe el mantenimiento preventivo por kilometraje, horas de motor o tiempo, con técnicos asignados automáticamente.',
      },
      {
        question: '¿Pueden los conductores registrar incidencias?',
        answer:
          'Sí. Los conductores registran incidencias en ruta con fotos y notas, y los responsables reciben el aviso al instante.',
      },
      {
        question: '¿Se conecta la gestión de vehículos con nuestras herramientas financieras?',
        answer:
          'Sí. Fleet se integra con herramientas financieras y ERP, para que los costes de mantenimiento y uso lleguen a informes unificados.',
      },
    ],
  },
}
