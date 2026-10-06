import type { NavLink } from '@/config'
import type { PlatformEntry } from '@/data/en/platform'
import type { CategoryPageContent, SolutionsShared } from '@/data/en/solutions'
import type { CategoryPageId, SolutionGroup, SolutionPageId } from '@/solutions'

export const menu = {
  label: 'Soluciones',
  groups: {
    category: 'Por categoría',
  } satisfies Record<SolutionGroup, string>,
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
        label: 'Facility management',
        photo: {
          id: 'inspectionClipboard',
          alt: 'Inspector completando una lista de control',
        },
      },
      {
        label: 'Centros comerciales y retail',
        photo: {
          id: 'mallAtrium',
          alt: 'Personas en el atrio de un centro comercial',
        },
      },
      {
        label: 'Hostelería y restauración',
        photo: {
          id: 'hotelHousekeeping',
          alt: 'Camarera de pisos preparando una habitación',
        },
      },
      {
        label: 'Transporte y logística',
        photo: {
          id: 'warehouseTeam',
          alt: 'Equipo de almacén revisando existencias entre estanterías',
        },
      },
      {
        label: 'Centros de datos',
        photo: {
          id: 'dataCenter',
          alt: 'Filas de racks de servidores en un centro de datos',
        },
      },
      {
        label: 'Climatización, ascensores y elevadores',
        photo: {
          id: 'hvacTechnicians',
          alt: 'Técnicos de climatización trabajando en equipos de cubierta',
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
      id: 'teamPresentation',
      alt: 'Equipo de operaciones revisando planes en una sala de reuniones',
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
      photo: {
        id: 'technicianPlantRoom',
        alt: 'Técnico revisando equipos en una sala técnica',
      },
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
      photo: {
        id: 'propertyManagerTablet',
        alt: 'Gestora de propiedades con una tableta frente a torres de oficinas',
      },
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
          id: 'managerOnCall',
          alt: 'Responsable hablando por teléfono mientras revisa documentos',
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
          id: 'operationsDesk',
          alt: 'Analista de operaciones trabajando en su escritorio',
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
      photo: {
        id: 'operationsDesk',
        alt: 'Coordinadora gestionando órdenes de trabajo en su escritorio',
      },
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
          id: 'managerOnCall',
          alt: 'Responsable hablando por teléfono mientras revisa documentos',
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
      photo: {
        id: 'engineersRooftop',
        alt: 'Dos ingenieros revisando una tableta en la cubierta',
      },
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
      photo: {
        id: 'residentsNewHome',
        alt: 'Residentes mirando su edificio de viviendas',
      },
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
        id: 'managerOnCall',
        alt: 'Responsable hablando por teléfono mientras revisa documentos',
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
      photo: {
        id: 'vendorHandshake',
        alt: 'Responsable de instalaciones estrechando la mano de un proveedor',
      },
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
