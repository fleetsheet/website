import type { NavLink } from '@/config'
import type { StatusItem } from '@/data/en/home'
import type {
  AnalyticsPageContent,
  IntegrationCategory,
  IntegrationIcon,
  IntegrationItem,
  OverviewModule,
  OverviewVisual,
  PlatformEntry,
  PlatformPageContent,
  PreventiveIcon,
  RunnerAiIcon,
} from '@/data/en/platform'
import type { PlatformDetailId, PlatformGroup, TemplatePageId } from '@/platform'

export const menu = {
  label: 'Plataforma',
  groups: {
    platform: 'Plataforma RunFleet',
    features: 'Funciones principales',
  } satisfies Record<PlatformGroup, string>,
  promo: {
    title: 'Vea Fleet en acción',
    description: 'Un recorrido guiado por la plataforma, adaptado a su cartera.',
    action: { label: 'Reservar una demo', href: '/contact' } satisfies NavLink,
  },
}

export const pageActions = {
  primary: { label: 'Reservar una demo', href: '/contact' },
  secondary: { label: 'Explorar la plataforma', href: '/platform' },
} satisfies Record<string, NavLink>

export const sectionLabels = {
  features: 'Funciones principales',
  useCases: 'Casos de uso',
  related: 'Descubra más',
  relatedTitle: 'Más de la plataforma Fleet',
  learnMore: 'Más información',
}

export const cta = {
  title: 'Vea Fleet en acción',
  description:
    'Reserve una demostración y vea cómo Fleet reúne cada sede, cada activo y cada orden de trabajo en un solo lugar.',
  primaryAction: { label: 'Reservar una demo', href: '/contact' },
  secondaryAction: { label: 'Hablar con nuestro equipo', href: '/contact' },
}

export const pages: {
  overview: PlatformEntry
  webAndMobile: PlatformEntry
  integrations: PlatformEntry
  runnerAi: PlatformEntry
  fleetMail: PlatformEntry
  workflowBuilder: PlatformEntry
  preventiveMaintenance: PlatformEntry
  reactiveMaintenance: PlatformEntry
  analyticsReporting: PlatformEntry
} & Record<TemplatePageId, PlatformPageContent> = {
  overview: {
    label: 'Visión general',
    summary: 'Una plataforma para mantenimiento, activos y operaciones en cada sede.',
    meta: {
      title: 'Visión general de la plataforma | Fleet',
      description:
        'Fleet es la plataforma integral de mantenimiento y operaciones para equipos inmobiliarios, de facility y de operaciones que gestionan activos en varias propiedades.',
    },
  },
  webAndMobile: {
    label: 'Web y móvil',
    summary: 'Gestione la operación desde la oficina o desde la sala de máquinas.',
    meta: {
      title: 'Web y móvil | Fleet',
      description:
        'Fleet funciona en ordenador, tableta y teléfono, con iOS y Android, para que técnicos y responsables compartan los mismos datos en vivo dondequiera que trabajen.',
    },
  },
  integrations: {
    label: 'Más de 20 integraciones',
    summary: 'Conecte Fleet con finanzas, ERP, control de accesos y sistemas del edificio.',
    meta: {
      title: 'Integraciones | Fleet',
      description:
        'Fleet se conecta con sistemas contables y de cuentas por pagar y cobrar, ERP, control de accesos, portales de inquilinos y sistemas de gestión de edificios mediante más de 20 integraciones y una API REST.',
    },
  },
  runnerAi: {
    label: 'RunnerAI',
    summary: 'IA que consulta datos, crea tareas, edita flujos y crea paneles.',
    meta: {
      title: 'RunnerAI | Fleet',
      description:
        'RunnerAI es la IA segura y basada en reglas de Fleet para equipos inmobiliarios y de facility: flujos creados por texto, paneles a petición y operaciones automatizadas.',
    },
  },
  fleetMail: {
    label: 'Fleet Mail',
    summary: 'Convierta correos en órdenes de trabajo y mantenga a todos informados por email.',
    meta: {
      title: 'Fleet Mail | Fleet',
      description:
        'Fleet Mail convierte los correos de inquilinos y proveedores en órdenes de trabajo con seguimiento y envía alertas, aprobaciones y recordatorios por email.',
    },
  },
  workflowBuilder: {
    label: 'Fleet Workflow Builder',
    summary: 'Diseñe aprobaciones, asignaciones y escalados a la medida de su operación.',
    meta: {
      title: 'Fleet Workflow Builder | Fleet',
      description:
        'Adapte su mantenimiento a su estructura, cadenas de aprobación, políticas de proveedores y umbrales de coste con el editor visual de flujos de Fleet.',
    },
  },
  preventiveMaintenance: {
    label: 'Mantenimiento preventivo y predictivo',
    summary: 'Programe trabajos recurrentes y actúe ante las primeras señales.',
    meta: {
      title: 'Mantenimiento preventivo y predictivo | Fleet',
      description:
        'Programe el mantenimiento preventivo de cada activo y use predicciones basadas en reglas para actuar antes de una avería, en todas las sedes de su cartera.',
    },
  },
  reactiveMaintenance: {
    label: 'Mantenimiento correctivo',
    summary: 'Registre, asigne y resuelva con rapidez las reparaciones imprevistas.',
    meta: {
      title: 'Mantenimiento correctivo | Fleet',
      description:
        'Siga las reparaciones imprevistas desde la solicitud hasta la resolución con actualizaciones móviles, asignación inteligente y seguimiento del SLA en tiempo real en cada propiedad.',
    },
  },
  analyticsReporting: {
    label: 'Análisis e informes',
    summary: 'Paneles en vivo e informes exportables para cada nivel de la empresa.',
    meta: {
      title: 'Análisis e informes | Fleet',
      description:
        'Tome decisiones basadas en datos con paneles en vivo, indicadores a medida e informes exportables sobre volumen de trabajos, tiempos de respuesta, cumplimiento y costes.',
    },
  },
  assetManagement: {
    label: 'Gestión de activos',
    summary: 'Un registro en vivo de cada activo, con historial, costes y documentos.',
    meta: {
      title: 'Gestión de activos | Fleet',
      description:
        'Cree un registro digital en vivo de cada activo de sus propiedades, con historial de mantenimiento, costes, garantías y documentos en un solo lugar.',
    },
    eyebrow: 'Gestión de activos',
    title: 'Visibilidad total de cada activo que gestiona',
    description:
      'Desde la climatización de decenas de edificios hasta bombas, ascensores e iluminación, Fleet le ofrece un registro en vivo de cada activo, accesible desde cualquier lugar.',
    highlights: [
      'Fichas digitales de activos',
      'Historial completo de reparaciones',
      'Avisos de garantía',
    ],
    features: {
      title: 'Funciones clave de la gestión de activos de Fleet',
      description:
        'Sus datos de activos se convierten en un motor de eficiencia, presupuestación y planificación proactiva.',
      items: [
        {
          title: 'Fichas digitales de activos',
          description:
            'Registre marca, modelo, número de serie, ubicación, fecha de compra y garantía.',
        },
        {
          title: 'Archivos y documentación',
          description:
            'Vincule manuales, fotos, informes de inspección y certificados a cada activo.',
        },
        {
          title: 'Historial y costes de reparación',
          description:
            'Vea qué se ha hecho, con qué frecuencia y a qué coste, para cada activo de su cartera.',
        },
        {
          title: 'Ubicaciones y zonas',
          description:
            'Organice los activos por edificio, planta, sala o zona, ideal para operaciones multisede.',
        },
        {
          title: 'Trabajos y preventivos vinculados',
          description:
            'Vincule cada activo a su plan de mantenimiento y genere trabajos preventivos automáticamente.',
        },
        {
          title: 'Ciclo de vida y paradas',
          description:
            'Detecte equipos de bajo rendimiento, prevea sustituciones y planifique inversiones.',
        },
      ],
    },
    details: [
      {
        title: 'Sus activos, accesibles desde cualquier lugar',
        description:
          'Los técnicos consultan los datos del activo in situ, registran inspecciones en tiempo real y añaden fotos y notas desde el teléfono.',
        points: [
          'Busque o escanee para abrir cualquier activo',
          'Resultados de inspección registrados en el momento',
          'Historial actualizado al instante para todo el equipo',
        ],
      },
      {
        title: 'Mejores datos para un mejor mantenimiento',
        description:
          'Una información de activos precisa y ordenada prolonga la vida de los equipos y da seguridad al presupuesto.',
        points: [
          'Avisos antes del vencimiento de garantías y contratos',
          'Informes de rendimiento para el presupuesto anual',
          'Previsiones de sustitución basadas en el uso real',
        ],
      },
    ],
    useCases: {
      title: 'Gestión de activos en la práctica',
      description:
        'De carteras inmobiliarias a cadenas hoteleras, los equipos usan Fleet para conocer a fondo su infraestructura crítica.',
      items: [
        'Centralizar los datos de climatización de varios edificios de oficinas',
        'Asignar activos concretos a técnicos de la sede para revisiones periódicas',
        'Seguir el historial de mantenimiento de ascensores con fotos y certificados',
        'Exportar informes de rendimiento para el presupuesto anual',
        'Recibir avisos cuando se acercan vencimientos de garantías o contratos',
      ],
    },
  },
  documentManagement: {
    label: 'Gestión documental',
    summary: 'Cada manual, permiso y certificado, ordenado y listo para auditoría.',
    meta: {
      title: 'Gestión documental | Fleet',
      description:
        'Guarde, organice y encuentre manuales, garantías, permisos e informes de inspección en un solo lugar, vinculados a los activos, trabajos y sedes a los que pertenecen.',
    },
    eyebrow: 'Gestión documental',
    title: 'Todos sus archivos de mantenimiento en un centro inteligente',
    description:
      'Garantías, contratos con proveedores, listas de cumplimiento y procedimientos reunidos en un solo lugar, vinculados al trabajo que respaldan y disponibles en el momento.',
    highlights: [
      'Control de versiones',
      'Vinculados a activos y trabajos',
      'Exportaciones listas para auditoría',
    ],
    features: {
      title: 'Funciones clave de la gestión documental de Fleet',
      description: 'Toda la documentación relevante, disponible justo donde se necesita.',
      items: [
        {
          title: 'Versiones y registro de auditoría',
          description:
            'Vea quién subió qué y cuándo, con historial completo de cambios y restauración sencilla.',
        },
        {
          title: 'Adjuntos en cualquier lugar',
          description:
            'Vincule documentos a activos, trabajos, ubicaciones, proveedores o usuarios.',
        },
        {
          title: 'Etiquetas y categorías',
          description:
            'Clasifique archivos por tipo, sede, departamento o clase de activo para encontrarlos rápido.',
        },
        {
          title: 'Permisos por rol',
          description:
            'Decida quién puede ver, subir o editar cada documento y proteja los archivos sensibles.',
        },
        {
          title: 'Documentos dentro de los trabajos',
          description:
            'Los técnicos abren procedimientos, guías de instalación e informes anteriores desde el propio trabajo.',
        },
        {
          title: 'Exportar y compartir',
          description:
            'Descargue paquetes de documentos para auditorías, traspasos a proveedores o revisiones internas.',
        },
      ],
    },
    details: [
      {
        title: 'Integrada en su ecosistema de mantenimiento',
        description:
          'Cada archivo se encuentra con la búsqueda global y está vinculado a sus paneles e informes.',
        points: [
          'Búsqueda global en todas las sedes',
          'Documentos vinculados a activos, trabajos y proveedores',
          'Almacenamiento integrado en Fleet',
        ],
      },
      {
        title: 'Siempre listo para la inspección',
        description:
          'Certificados, permisos e informes se mantienen al día, con recordatorios antes de cada vencimiento.',
        points: [
          'Seguimiento de vencimientos de permisos y contratos',
          'Registros con fecha y hora para el cumplimiento',
          'Acceso rápido en emergencias o auditorías',
        ],
      },
    ],
    useCases: {
      title: 'Gestión documental en la práctica',
      description:
        'Pensada para equipos que gestionan varias sedes, tipos de activos y contratistas.',
      items: [
        'Subir procedimientos de mantenimiento de ascensores para los técnicos in situ',
        'Vincular certificados de inspección de incendios a flujos de cumplimiento',
        'Guardar contratos de proveedores y seguir sus vencimientos',
        'Adjuntar aprobaciones presupuestarias a los trabajos para una trazabilidad completa',
        'Mantener manuales digitales de climatización, fontanería e iluminación',
      ],
    },
  },
  auditTracking: {
    label: 'Auditorías e inspecciones',
    summary:
      'Registros con fecha y hora e inspecciones que mantienen cada sede lista para auditoría.',
    meta: {
      title: 'Auditorías e inspecciones | Fleet',
      description:
        'Mantenga registros detallados con fecha y hora de cada acción y realice inspecciones digitales para que cada sede esté lista para revisiones de seguridad y auditorías de cumplimiento.',
    },
    eyebrow: 'Auditorías e inspecciones',
    title: 'Cumplimiento y responsabilidad, siempre',
    description:
      'Fleet registra qué se hizo, cuándo y quién lo hizo, y digitaliza sus inspecciones, para que cada sede esté lista para cualquier auditoría interna o externa.',
    highlights: [
      'Registros con fecha y hora',
      'Inspecciones digitales',
      'Informes de auditoría exportables',
    ],
    features: {
      title: 'Funciones clave de auditoría',
      description: 'La preparación para auditorías integrada en el día a día, en segundo plano.',
      items: [
        {
          title: 'Registros de actividad con fecha y hora',
          description:
            'Cada acción se registra automáticamente, desde la creación del trabajo hasta su cierre y los comentarios.',
        },
        {
          title: 'Responsabilidad de cada usuario',
          description:
            'Siga las acciones por usuario o rol, desde el cierre de un técnico hasta la aprobación de un coste.',
        },
        {
          title: 'Inspecciones digitales',
          description: 'Realice listas de inspección en el móvil con fotos, lecturas y firmas.',
        },
        {
          title: 'Registros por trabajo y activo',
          description:
            'Consulte el historial completo, los costes y los documentos de cualquier activo o trabajo.',
        },
        {
          title: 'Aprobaciones configurables',
          description:
            'Defina puntos de control obligatorios para que el cumplimiento se aplique igual en cada sede.',
        },
        {
          title: 'Informes de auditoría exportables',
          description:
            'Genere registros detallados de cualquier periodo o tipo de activo en pocos clics.',
        },
      ],
    },
    details: [
      {
        title: 'Listo para auditoría cada día',
        description:
          'Fleet reúne sus registros a medida que se trabaja, para afrontar la semana de inspección con tranquilidad.',
        points: [
          'Certificados y formularios de cumplimiento en cada registro',
          'Resultados de inspección vinculados a activos y ubicaciones',
          'Rastro documental digital completo para traspasos de propiedades',
        ],
      },
      {
        title: 'Control claro de quién hace qué',
        description:
          'El acceso por roles protege los campos críticos y da plena visibilidad a los equipos de supervisión.',
        points: [
          'Permisos de edición para el personal autorizado',
          'Acceso de lectura para la dirección y los auditores',
          'Registros de cambios con notas e historial de versiones',
        ],
      },
    ],
    useCases: {
      title: 'Auditorías en la práctica',
      description:
        'De una sede a cien, Fleet demuestra que su equipo hace el trabajo correcto de forma constante.',
      items: [
        'Demostrar que las inspecciones rutinarias se hicieron a tiempo en todas las sedes',
        'Mostrar a los reguladores el historial de mantenimiento contra incendios',
        'Ver quién aprobó una reparación de alto coste',
        'Aportar un rastro documental digital en el traspaso de una propiedad',
        'Exportar registros para la revisión anual de cumplimiento',
      ],
    },
  },
}

export const overview = {
  hero: {
    eyebrow: 'La plataforma Fleet',
    title: 'La plataforma de mantenimiento integral para equipos inmobiliarios',
    description:
      'Gestione órdenes de trabajo, activos, proveedores, documentos y cumplimiento en cada propiedad, en una plataforma en la nube creada para equipos inmobiliarios, de facility y de operaciones.',
    primaryAction: { label: 'Reservar una demo', href: '/contact' },
    secondaryAction: { label: 'Hablar con nuestro equipo', href: '/contact' },
  },
  quote: {
    text: 'Fleet ha reducido nuestro mantenimiento correctivo casi un 40 %. Por fin tenemos a los técnicos, los registros de activos y los trabajos en un solo lugar.',
    author: 'Responsable de operaciones, desarrollo de uso mixto',
  },
  learnMore: 'Más información',
  modules: [
    {
      id: 'reactiveMaintenance',
      tag: 'Mantenimiento correctivo',
      title: 'Reparaciones más rápidas, inquilinos más satisfechos',
      description:
        'Registre cada incidencia con fotos y ubicación, envíela al equipo adecuado y sígala hasta su cierre según sus SLA.',
      points: [
        'Trabajos a equipos internos o proveedores según sede y especialidad',
        'Seguimiento del SLA en vivo con avisos antes de cada plazo',
        'Actualizaciones y pruebas fotográficas desde el terreno',
      ],
      visual: {
        kind: 'jobs',
        title: 'Órdenes de trabajo',
        items: [
          {
            title: 'Fuga de agua, vivienda 3B',
            location: 'Bayview Residences',
            status: 'Vencida hace 2 d',
            tone: 'overdue',
          },
          {
            title: 'Reparación puerta de muelle',
            location: 'Westport DC · Muelle 07',
            status: 'Vence en 4 h',
            tone: 'due',
          },
          {
            title: 'Reinicio alarma de ascensor',
            location: 'Tower B · Ascensores',
            status: 'En curso',
            tone: 'info',
          },
          {
            title: 'Fallo de iluminación, planta 2',
            location: 'Northgate Mall',
            status: 'Completada',
            tone: 'done',
          },
        ],
      },
    },
    {
      id: 'assetManagement',
      tag: 'Gestión de activos',
      title: 'Cada activo al alcance de la mano',
      description:
        'Un registro digital en vivo de cada activo de su cartera, con historial, costes, garantías y documentos a un toque.',
      points: [
        'Fichas con marca, modelo, número de serie y garantía',
        'Historial y costes de reparación de cada activo',
        'Datos de ciclo de vida para planificar sustituciones e inversiones',
      ],
      visual: {
        kind: 'asset',
        title: 'Ficha del activo',
        name: 'Enfriadora CH-02',
        location: 'Harbour Point · Sala técnica B2',
        status: 'Operativa',
        facts: [
          { label: 'Último servicio', value: '12 sept.' },
          { label: 'Garantía', value: 'Mar. 2028' },
          { label: 'Coste anual', value: '4.210 $' },
          { label: 'Trabajos abiertos', value: '1' },
        ],
      },
    },
    {
      id: 'analyticsReporting',
      tag: 'Análisis e informes',
      title: 'De los datos a las decisiones',
      description:
        'Paneles en vivo e informes exportables muestran dónde centrarse, desde un activo hasta toda la cartera.',
      points: [
        'Volumen, tiempos de respuesta, cumplimiento y costes en tiempo real',
        'Detalle por edificio, activo, proveedor o equipo',
        'Exportaciones listas para auditorías y consejos',
      ],
      visual: {
        kind: 'chart',
        title: 'Gasto de mantenimiento por sede',
        stats: [
          { label: 'SLA cumplido', value: '96,4 %' },
          { label: 'Gasto anual', value: '184k $' },
        ],
        bars: [
          { label: 'Harbour Point', value: 82 },
          { label: 'Tower B', value: 64 },
          { label: 'Northgate', value: 48 },
          { label: 'Bayview', value: 36 },
          { label: 'Westport', value: 22 },
        ],
      },
    },
  ] satisfies OverviewModule[],
  darkModules: [
    {
      id: 'workflowBuilder',
      tag: 'Fleet Workflow Builder',
      title: 'Trabaje en sintonía con equipos y proveedores',
      description:
        'Diseñe aprobaciones, asignaciones y escalados a la medida de su operación, para que cada tarea llegue a la persona adecuada en el momento adecuado.',
      points: [
        'Asignación condicional por sede, tipo de activo o prioridad',
        'Aprobaciones en varios pasos según coste y urgencia',
        'Acceso inmediato para proveedores con un enlace sencillo',
      ],
      visual: {
        kind: 'steps',
        title: 'Flujo de trabajo',
        steps: [
          { kind: 'Disparador', text: 'Presupuesto de reparación superior a 5.000 $' },
          { kind: 'Si', text: 'Aprobado por el responsable regional' },
          { kind: 'Entonces', text: 'Crear orden de trabajo + avisar al proveedor' },
        ],
      },
    },
    {
      id: 'auditTracking',
      tag: 'Auditorías e inspecciones',
      title: 'Preparado para cada auditoría',
      description:
        'Registros con fecha y hora e inspecciones digitales mantienen cada sede en cumplimiento y cada acción trazable.',
      points: [
        'Cada acción registrada automáticamente por usuario y rol',
        'Listas de inspección digitales con fotos y firmas',
        'Registros exportables de cualquier periodo o tipo de activo',
      ],
      visual: {
        kind: 'log',
        title: 'Registro de auditoría',
        entries: [
          {
            when: '09:42',
            who: 'Aisha K.',
            what: 'completó la inspección de la puerta cortafuegos, escalera A',
          },
          { when: '09:15', who: 'Flujo', what: 'solicitó la aprobación de WO-2291' },
          { when: '08:58', who: 'Marco L.', what: 'subió el certificado del ascensor de Tower B' },
        ],
      },
    },
    {
      id: 'preventiveMaintenance',
      tag: 'Mantenimiento preventivo y predictivo',
      title: 'Resuelva hoy los problemas de mañana',
      description:
        'Planes recurrentes y predicciones basadas en reglas mantienen los equipos en marcha y ayudan a su equipo a actuar a tiempo.',
      points: [
        'Trabajos preventivos automáticos de climatización, fontanería, ascensores e incendios',
        'Alertas predictivas vinculadas a la regla que las generó',
        'Calendario de cumplimiento con recordatorios antes de cada vencimiento',
      ],
      visual: {
        kind: 'jobs',
        title: 'Trabajos planificados',
        items: [
          {
            title: 'Cambio de filtros de climatización',
            location: 'Tower B · AHU-07',
            status: 'Vence en 4 h',
            tone: 'due',
          },
          {
            title: 'Certificación anual de ascensores',
            location: 'Ascensores L1–L3',
            status: 'Programado',
            tone: 'info',
          },
          {
            title: 'Prueba de iluminación de emergencia',
            location: 'Northgate Mall',
            status: 'Completado',
            tone: 'done',
          },
        ],
      },
    },
    {
      id: 'documentManagement',
      tag: 'Gestión documental',
      title: 'Cada archivo donde lo necesita',
      description:
        'Manuales, permisos, certificados y contratos permanecen ordenados, vinculados al trabajo que respaldan y listos para la inspección.',
      points: [
        'Documentos vinculados a activos, trabajos, ubicaciones y proveedores',
        'Control de versiones con historial completo',
        'Recordatorios antes del vencimiento de permisos y contratos',
      ],
      visual: {
        kind: 'files',
        title: 'Documentos',
        items: [
          {
            title: 'Certificado contra incendios.pdf',
            location: 'Tower B · Permiso',
            status: 'Vence en 30 d',
            tone: 'due',
          },
          {
            title: 'Manual CH-02.pdf',
            location: 'Enfriadora CH-02 · Manual',
            status: 'Vinculado',
            tone: 'info',
          },
          {
            title: 'Inspección ascensores T3.pdf',
            location: 'Ascensores · Informe',
            status: 'Verificado',
            tone: 'done',
          },
        ],
      },
    },
  ] satisfies OverviewModule[],
  extend: {
    title: 'Amplíe Fleet a su manera',
    description:
      'Conecte sus herramientas actuales y ponga la IA y el correo al servicio de toda su operación.',
    items: [
      {
        id: 'integrations',
        title: 'Más de 20 integraciones',
        description:
          'Conecte finanzas, ERP, control de accesos, portales de inquilinos y sistemas del edificio con integraciones listas y una API REST.',
        action: 'Ver integraciones',
      },
      {
        id: 'runnerAi',
        title: 'RunnerAI',
        description:
          'Cree flujos y paneles con comandos en lenguaje natural, en servidores seguros y aislados.',
        action: 'Conocer RunnerAI',
      },
      {
        id: 'fleetMail',
        title: 'Fleet Mail',
        description:
          'Convierta los correos entrantes en órdenes de trabajo con seguimiento e informe por correo a equipos y proveedores.',
        action: 'Explorar Fleet Mail',
      },
    ] satisfies { id: PlatformDetailId; title: string; description: string; action: string }[],
  },
  audiences: {
    eyebrow: 'Web y móvil',
    title: 'Una plataforma para todos',
    description:
      'Fleet funciona en ordenador, tableta y teléfono, con apps para iOS y Android, y da a cada persona la vista adecuada de los mismos datos en vivo.',
    action: { label: 'Explorar web y móvil', href: '/platform/web-and-mobile' },
    items: [
      {
        title: 'Para responsables',
        description: 'Planifique, apruebe costes y siga cada sede en paneles en vivo.',
        screen: 'Cartera · 14 sedes',
        tasks: [
          {
            title: 'Aprobar presupuesto',
            location: 'Harbour Point',
            status: 'Vence hoy',
            tone: 'due',
          },
          {
            title: 'Informe SLA, septiembre',
            location: 'Todas las regiones',
            status: 'Listo',
            tone: 'done',
          },
        ],
      },
      {
        title: 'Para equipos de campo',
        description: 'Inicie, actualice y cierre trabajos in situ con fotos, listas y firmas.',
        screen: 'Hoy · 4 tareas',
        tasks: [
          {
            title: 'Inspección puerta cortafuegos',
            location: 'Planta 3 · Escalera A',
            status: 'Vence en 2 h',
            tone: 'due',
          },
          {
            title: 'Revisión anual de caldera',
            location: 'Sala técnica B2',
            status: 'Programado',
            tone: 'info',
          },
        ],
      },
      {
        title: 'Para inquilinos y proveedores',
        description:
          'Envíe solicitudes con fotos, reciba novedades y vea los trabajos asignados con un enlace sencillo.',
        screen: 'Mis solicitudes',
        tasks: [
          {
            title: 'Aire acondicionado caliente',
            location: 'Vivienda 1204',
            status: 'Asignada',
            tone: 'info',
          },
          {
            title: 'Fuga en grifo de cocina',
            location: 'Vivienda 1204',
            status: 'Resuelta',
            tone: 'done',
          },
        ],
      },
    ] satisfies { title: string; description: string; screen: string; tasks: StatusItem[] }[],
  },
  why: {
    eyebrow: 'Por qué Fleet',
    title: 'Creado para el sector inmobiliario, respaldado por personas',
    description:
      'Fleet está pensado para equipos inmobiliarios multisede, con una implantación rápida, precios transparentes por uso y un soporte que conoce su región.',
    stats: [
      { value: 'Hasta un 40 %', label: 'menos mantenimiento correctivo' },
      { value: 'Menos de 7 días', label: 'para poner en marcha a su equipo' },
      { value: '99,99 %', label: 'de disponibilidad con SLA' },
    ],
    points: [
      {
        title: 'Creado para equipos multisede',
        description: 'Reglas, informes y permisos por propiedad, región o cartera.',
      },
      {
        title: 'Seguro desde el diseño',
        description: 'Acceso por roles, almacenamiento cifrado y registros de auditoría completos.',
      },
      {
        title: 'Soporte cercano y local',
        description:
          'Hable con nuestro equipo por chat, con respuesta en menos de una hora para la mayoría de las consultas.',
      },
    ],
  },
  industries: {
    eyebrow: 'Sectores',
    title: 'Una solución para cada tipo de propiedad',
    items: [
      'Centros comerciales y retail',
      'Hostelería y restauración',
      'Transporte marítimo y logística',
      'Comunidades residenciales',
      'Oficinas',
      'Desarrollos de uso mixto',
      'Colegios y campus',
      'Flotas de vehículos',
    ],
  },
}

export const webMobile = {
  hero: {
    eyebrow: 'Web y móvil',
    title: 'Su operación en cualquier pantalla',
    description:
      'Fleet funciona en el navegador y en iOS y Android: los responsables planifican desde el ordenador y los técnicos actualizan los trabajos en tiempo real sobre el terreno.',
    primaryAction: { label: 'Reservar una demo', href: '/contact' },
    highlights: ['iOS y Android', 'En cualquier navegador', 'Sincronización en tiempo real'],
  },
  devices: {
    url: 'app.runfleet.com',
    greeting: 'Bienvenido, John S.',
    scope: 'Cartera · 14 sedes',
    stats: [
      { label: 'Órdenes abiertas', value: '128' },
      { label: 'SLA cumplido', value: '96,4 %' },
      { label: 'Preventivos pendientes', value: '37' },
    ],
    listTitle: 'Órdenes de trabajo',
    items: [
      {
        title: 'Alarma de baja presión en enfriadora',
        location: 'Harbour Point · Sala técnica',
        status: 'Vencida hace 2 d',
        tone: 'overdue',
      },
      {
        title: 'Cambio de filtros de climatización',
        location: 'Tower B · Planta 14',
        status: 'Vence en 4 h',
        tone: 'due',
      },
      {
        title: 'Reparación puerta de muelle',
        location: 'Westport DC · Muelle 07',
        status: 'Completada',
        tone: 'done',
      },
    ] satisfies StatusItem[],
    phoneTitle: 'Hoy · 4 tareas',
    phoneItems: [
      {
        title: 'Inspección puerta cortafuegos',
        location: 'Planta 3 · Escalera A',
        status: 'Vence en 2 h',
        tone: 'due',
      },
      {
        title: 'Revisión anual de caldera',
        location: 'Sala técnica B2',
        status: 'Programado',
        tone: 'info',
      },
    ] satisfies StatusItem[],
    phoneActions: ['Iniciar', 'Añadir foto'],
  },
  audiences: {
    eyebrow: 'Una plataforma para todos',
    title: 'Simplifique sus operaciones de mantenimiento',
    description:
      'Fleet conecta a todas las personas de su operación, con vistas web y móviles pensadas para responsables, equipos de campo, inquilinos y proveedores.',
  },
  rows: [
    {
      tag: 'Control',
      title: 'Visibilidad total desde cualquier pantalla',
      description:
        'Siga cada sede, equipo y proveedor desde el ordenador o el teléfono, con cifras en vivo que se actualizan en cuanto cambia el trabajo.',
      points: [
        'Paneles en vivo de volumen de trabajos, SLA y costes',
        'Aprobaciones y avisos dondequiera que esté',
        'Los mismos datos en ordenador, tableta y teléfono',
      ],
      visual: {
        kind: 'chart',
        title: 'La cartera de un vistazo',
        stats: [
          { label: 'SLA cumplido', value: '96,4 %' },
          { label: 'Trabajos abiertos', value: '128' },
        ],
        bars: [
          { label: 'Harbour Point', value: 46 },
          { label: 'Tower B', value: 28 },
          { label: 'Northgate', value: 19 },
          { label: 'Bayview', value: 12 },
          { label: 'Westport', value: 7 },
        ],
      },
    },
    {
      tag: 'Activos in situ',
      title: 'Cada activo, a un escaneo de distancia',
      description:
        'Escanee o busque un activo para abrir sus manuales, historial y trabajos abiertos en segundos, justo donde se trabaja.',
      points: [
        'Datos, manuales e historial del activo in situ',
        'Inspecciones registradas con fotos y lecturas',
        'Historial actualizado al instante para todo el equipo',
      ],
      visual: {
        kind: 'asset',
        title: 'Activo escaneado',
        name: 'Enfriadora CH-02',
        location: 'Harbour Point · Sala técnica B2',
        status: 'Operativa',
        facts: [
          { label: 'Último servicio', value: '12 sept.' },
          { label: 'Garantía', value: 'Mar. 2028' },
          { label: 'Manual', value: 'Manual CH-02.pdf' },
          { label: 'Trabajos abiertos', value: '1' },
        ],
      },
    },
    {
      tag: 'Comunicación',
      title: 'Comunicación clara con equipos e inquilinos',
      description:
        'Las solicitudes llegan con fotos y ubicación, y todas las personas implicadas ven el avance y las respuestas en el mismo trabajo.',
      points: [
        'Los inquilinos envían solicitudes con fotos desde cualquier dispositivo',
        'Actualizaciones y respuestas guardadas en el historial',
        'Notificaciones en cada asignación y cierre',
      ],
      visual: {
        kind: 'chat',
        title: 'Solicitud · Vivienda 1204',
        request: {
          title: 'Aire acondicionado caliente',
          location: 'Bayview Residences · Vivienda 1204',
          status: 'Asignada',
          tone: 'info',
        },
        messages: [
          {
            from: 'Inquilino',
            text: 'El equipo del salón expulsa aire caliente desde esta mañana.',
            time: '09:12',
            own: false,
          },
          {
            from: 'Aisha K.',
            text: 'Gracias por la foto. Pasaré a las 11:00 para revisar el equipo.',
            time: '09:20',
            own: true,
          },
          { from: 'Inquilino', text: 'Perfecto, gracias.', time: '09:21', own: false },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  field: {
    eyebrow: 'Creado para el terreno',
    title: 'Preparado para sótanos, salas técnicas y sedes remotas',
    description:
      'Fleet se mantiene rápido y fluido con poca cobertura, para que los técnicos actualicen trabajos, añadan fotos y cierren tareas estén donde estén.',
  },
  stories: {
    eyebrow: 'Casos de clientes',
    title: 'Lo que dicen los equipos inmobiliarios',
    items: [
      {
        quote:
          'Fleet ha reducido nuestro mantenimiento correctivo casi un 40 %. Por fin tenemos a los técnicos, los registros de activos y los trabajos en un solo lugar.',
        author: 'Responsable de operaciones',
        company: 'Desarrollo de uso mixto',
      },
      {
        quote:
          'Otras plataformas nos parecían demasiado complejas o genéricas. Fleet nos dio una solución a medida con un soporte más rápido.',
        author: 'Director de mantenimiento',
        company: 'Centro logístico',
      },
    ],
  },
}

export const integrationsPage = {
  hero: {
    eyebrow: 'Integraciones',
    title: 'Conecte Fleet con las herramientas que ya utiliza',
    description:
      'Fleet se integra en su ecosistema con más de 20 integraciones y una API REST abierta, para que sus sistemas financieros, del edificio y de inquilinos trabajen con los mismos datos en vivo.',
    primaryAction: { label: 'Reservar una demo', href: '/contact' },
    highlights: ['Más de 20 integraciones', 'API REST abierta', 'Configuración acompañada'],
  },
  featured: {
    eyebrow: 'Destacadas',
    title: 'Integraciones destacadas',
    items: [
      {
        icon: 'accounting',
        title: 'Contabilidad y cuentas por pagar y cobrar',
        description:
          'Los costes y facturas aprobados llegan a sus sistemas financieros y mantienen el presupuesto exacto del primer presupuesto al pago final.',
      },
      {
        icon: 'bms',
        title: 'Sistemas de gestión de edificios',
        description:
          'Las alarmas y lecturas del BMS crean órdenes de trabajo automáticamente, para que el equipo adecuado actúe en el momento justo.',
      },
      {
        icon: 'api',
        title: 'API REST',
        description:
          'Conecte cualquier sistema con una API REST documentada y segura, alineada con su gobierno de TI.',
      },
    ] satisfies { icon: IntegrationIcon; title: string; description: string }[],
    action: { label: 'Hablar con nuestro equipo', href: '/contact' },
  },
  directory: {
    title: 'Todas las integraciones',
    searchLabel: 'Buscar integraciones',
    searchPlaceholder: 'Buscar por sistema o uso',
    filterLabel: 'Categorías',
    all: 'Todas',
    results: '{count} integraciones',
    empty: 'Pruebe otra búsqueda o categoría, o hable con nuestro equipo sobre su sistema.',
    action: { label: 'Hablar con nuestro equipo', href: '/contact' },
    categories: {
      finance: 'Finanzas',
      operations: 'Operaciones',
      building: 'Sistemas del edificio',
      tenants: 'Inquilinos y comunicación',
      developers: 'Desarrolladores',
    } satisfies Record<IntegrationCategory, string>,
    items: [
      {
        icon: 'accounting',
        category: 'finance',
        title: 'Software contable',
        description:
          'Sincronice costes y facturas aprobados con su contabilidad para mantener presupuestos exactos.',
      },
      {
        icon: 'apAr',
        category: 'finance',
        title: 'Cuentas por pagar y cobrar',
        description:
          'Envíe los costes de reparación aprobados directamente a sus procesos de pagos y cobros.',
      },
      {
        icon: 'finance',
        category: 'finance',
        title: 'Herramientas financieras',
        description:
          'Siga el gasto de mantenimiento por edificio, activo y proveedor junto a sus informes financieros.',
      },
      {
        icon: 'erp',
        category: 'operations',
        title: 'Software ERP',
        description: 'Comparta activos, proveedores y compras con su ERP para informes unificados.',
      },
      {
        icon: 'vendors',
        category: 'operations',
        title: 'Portales de proveedores',
        description:
          'Mantenga datos, trabajos y documentos alineados con los portales de sus contratistas.',
      },
      {
        icon: 'access',
        category: 'building',
        title: 'Control de accesos',
        description: 'Registre automáticamente las visitas in situ y la presencia de proveedores.',
      },
      {
        icon: 'bms',
        category: 'building',
        title: 'Sistemas de gestión de edificios',
        description:
          'Convierta alarmas y lecturas del BMS en órdenes de trabajo en el momento adecuado.',
      },
      {
        icon: 'tenants',
        category: 'tenants',
        title: 'Portales de inquilinos',
        description:
          'Registre las solicitudes de inquilinos como trabajos con seguimiento e informe a los ocupantes.',
      },
      {
        icon: 'email',
        category: 'tenants',
        title: 'Correo con Fleet Mail',
        description:
          'Convierta los correos entrantes en trabajos y envíe novedades y aprobaciones por correo.',
      },
      {
        icon: 'api',
        category: 'developers',
        title: 'API REST',
        description:
          'Cree conexiones propias con cualquier sistema mediante una API REST documentada y segura.',
      },
    ] satisfies IntegrationItem[],
  },
  cta: {
    eyebrow: 'Empiece ahora',
    title: '¿Listo para conectar sus sistemas?',
    description:
      'Cuéntenos qué sistemas utiliza hoy y nuestro equipo planificará cómo se conecta Fleet con ellos durante la implantación.',
    action: { label: 'Reservar una demo', href: '/contact' },
    panelTitle: 'Sistemas conectados',
    panelItems: [
      { title: 'Software contable', location: 'Finanzas', status: 'Conectado', tone: 'done' },
      {
        title: 'Sistema de gestión del edificio',
        location: 'Sistemas del edificio',
        status: 'Conectado',
        tone: 'done',
      },
      { title: 'Portal de inquilinos', location: 'Inquilinos', status: 'Conectado', tone: 'done' },
      { title: 'Software ERP', location: 'Operaciones', status: 'En configuración', tone: 'info' },
    ] satisfies StatusItem[],
  },
}

export const runnerAiPage = {
  hero: {
    eyebrow: 'RunnerAI',
    title: 'Inteligencia que impulsa su operación',
    description:
      'RunnerAI es la IA segura y basada en reglas de Fleet para equipos inmobiliarios y de facility. Escriba lo que necesita y RunnerAI consulta datos, crea tareas, edita flujos y crea paneles para cada sede.',
    primaryAction: { label: 'Reservar una demo', href: '/contact' },
    secondaryAction: { label: 'Hablar con nuestro especialista', href: '/contact' },
    demo: {
      title: 'RunnerAI',
      context: 'Datos en vivo · 14 sedes',
      prompt:
        'Configura una rutina semanal de higiene para cada zona de restauración, con aprobación del supervisor.',
      reply: 'Hecho. He creado un flujo para 9 zonas de restauración en 4 centros comerciales.',
      steps: [
        { kind: 'Cada', text: 'Lunes, 06:00' },
        { kind: 'Luego', text: 'Crear una lista de higiene por zona de restauración' },
        { kind: 'Luego', text: 'Pedir aprobación del supervisor con fotos' },
      ],
      action: 'Desplegar en 9 sedes',
    },
  },
  challenge: {
    pressure: {
      title: 'Las operaciones multisede avanzan rápido',
      description:
        'Tiendas, centros comerciales, centros logísticos y desarrollos de uso mixto suman miles de piezas en movimiento, del mantenimiento y el cumplimiento a los informes y los activos.',
      points: [
        'Miles de tareas en varias regiones',
        'Normas locales para cada sede',
        'Datos repartidos entre equipos',
      ],
    },
    answer: {
      title: 'RunnerAI mantiene el ritmo',
      description:
        'RunnerAI anticipa los siguientes pasos, estructura los flujos y muestra el dato adecuado al instante, para que sus equipos dediquen más tiempo a la operación.',
    },
  },
  capabilities: {
    title: 'Inteligencia para planificar con antelación',
    description:
      'Cuatro formas en que RunnerAI ayuda a su equipo, todas con comandos en lenguaje natural.',
    tabs: [
      {
        icon: 'data',
        label: 'Consulta de datos',
        title: 'Respuestas desde sus datos en vivo',
        description:
          'Haga una pregunta en lenguaje natural y RunnerAI obtiene la respuesta de sus datos operativos en vivo, con las órdenes de trabajo y los activos que la respaldan.',
        points: [
          'Preguntas sobre costes, SLA, activos y proveedores',
          'Respuestas con datos en vivo de todas las sedes',
          'Fuentes indicadas en cada respuesta',
        ],
        visual: {
          kind: 'chat',
          title: 'Pregunte a RunnerAI',
          request: {
            title: 'Datos en vivo · 14 sedes',
            location: 'Fuentes: 86 órdenes · 14 activos',
            status: 'Respondida',
            tone: 'done',
          },
          messages: [
            {
              from: 'Usted',
              text: '¿Qué enfriadoras necesitan servicio este mes?',
              time: '09:12',
              own: true,
            },
            {
              from: 'RunnerAI',
              text: '6 enfriadoras en 3 sedes. Harbour Point tiene 3, incluida CH-02, prevista para el 14 de oct.',
              time: '09:12',
              own: false,
            },
          ],
        },
      },
      {
        icon: 'tasks',
        label: 'Creación de tareas',
        title: 'Tareas creadas con una frase',
        description:
          'Describa el trabajo y RunnerAI crea la orden de trabajo o tarea con el activo, la ubicación, la persona asignada y la fecha límite adecuados.',
        points: [
          'Órdenes y tareas creadas en lenguaje natural',
          'Asignadas al equipo o proveedor adecuado',
          'Listas, activos y fechas añadidos automáticamente',
        ],
        visual: {
          kind: 'jobs',
          title: 'Tareas creadas por RunnerAI',
          items: [
            {
              title: 'Revisar vibración de AHU-07',
              location: 'Tower B · Planta 14 · Aisha K.',
              status: 'Vence mañana',
              tone: 'due',
            },
            {
              title: 'Sustituir luminaria del vestíbulo',
              location: 'Bayview Residences · Marco L.',
              status: 'Asignada',
              tone: 'info',
            },
            {
              title: 'Revisión trimestral de puertas cortafuegos',
              location: 'Northgate Mall · 12 puertas',
              status: 'Programada',
              tone: 'info',
            },
          ],
        },
      },
      {
        icon: 'workflows',
        label: 'Edición de flujos',
        title: 'Edite flujos en segundos',
        description:
          'Indique a RunnerAI qué cambiar y actualiza pasos, disparadores y condiciones, y luego despliega el cambio en todas las sedes o en regiones concretas.',
        points: [
          'Modifique pasos, disparadores y condiciones por texto',
          'Despliegue cambios en todas las sedes o en algunas regiones',
          'Cada cambio queda registrado y es trazable',
        ],
        visual: {
          kind: 'steps',
          title: 'Flujo actualizado',
          steps: [
            {
              kind: 'Disparador',
              text: 'Presupuesto de reparación recibido',
            },
            {
              kind: 'Si',
              text: 'Coste superior a 3.000 $ (antes 5.000 $)',
            },
            {
              kind: 'Entonces',
              text: 'Pedir aprobación del responsable regional',
            },
          ],
        },
      },
      {
        icon: 'dashboards',
        label: 'Creación de paneles',
        title: 'Paneles a petición',
        description:
          'Pida cualquier vista y RunnerAI la crea en segundos con sus datos operativos en vivo, lista para compartir o fijar.',
        points: [
          'Tendencias y acumulación de órdenes de trabajo',
          'Rendimiento de proveedores y comparativas regionales',
          'Resúmenes ejecutivos de toda la cartera',
        ],
        visual: {
          kind: 'chart',
          title: 'Órdenes pendientes · 30 días',
          stats: [
            {
              label: 'Abiertas',
              value: '128',
            },
            {
              label: 'Cerradas',
              value: '412',
            },
          ],
          bars: [
            {
              label: 'Harbour Point',
              value: 34,
            },
            {
              label: 'Tower B',
              value: 27,
            },
            {
              label: 'Northgate',
              value: 25,
            },
            {
              label: 'Bayview',
              value: 22,
            },
            {
              label: 'Westport',
              value: 20,
            },
          ],
        },
      },
    ] satisfies (Omit<OverviewModule, 'id' | 'tag'> & { icon: RunnerAiIcon; label: string })[],
  },
  steps: {
    eyebrow: 'Cómo funciona',
    title: 'De la petición al flujo en marcha',
    items: [
      {
        title: 'Pedir',
        description:
          'Escriba lo que necesita en lenguaje natural, de una nueva rutina a un informe de cartera.',
      },
      {
        title: 'Crear',
        description:
          'RunnerAI estructura el flujo o el panel con sus datos y los estándares del sector.',
      },
      {
        title: 'Desplegar',
        description:
          'Llévelo al instante a cada sede o a regiones concretas, adaptado a las normas locales.',
      },
      {
        title: 'Mejorar',
        description:
          'Los análisis en vivo y las predicciones trazables muestran dónde ajustar, con todas las sedes siguiendo el mismo manual.',
      },
    ],
  },
  rows: [
    {
      tag: 'Productividad',
      title: 'Menos gestión, más operación',
      description:
        'RunnerAI automatiza la creación y el ajuste de los flujos de mantenimiento, cumplimiento, informes y gestión de activos.',
      points: [
        'Comandos sencillos en lugar de configuración manual',
        'Todas las propiedades siguen el mismo manual',
        'Más tiempo para el trabajo in situ',
      ],
      visual: {
        kind: 'log',
        title: 'Actividad de RunnerAI',
        entries: [
          {
            when: '09:42',
            who: 'RunnerAI',
            what: 'actualizó el flujo de inspección de 4 sedes en EAU',
          },
          {
            when: '09:15',
            who: 'RunnerAI',
            what: 'creó el panel semanal de rendimiento de proveedores',
          },
          {
            when: '08:58',
            who: 'RunnerAI',
            what: 'sugirió un plan preventivo para 6 nuevas enfriadoras',
          },
        ],
      },
    },
    {
      tag: 'Decisiones',
      title: 'Decisiones mejores y más rápidas',
      description:
        'Haga una pregunta y obtenga una respuesta en vivo, para que la dirección y los equipos actúen con datos actuales y con confianza.',
      points: [
        'Respuestas basadas en sus datos operativos en vivo',
        'Análisis de paradas y presupuesto a petición',
        'Comparativas regionales en segundos',
      ],
      visual: {
        kind: 'chart',
        title: 'Rendimiento de proveedores · EAU',
        stats: [
          { label: 'Trabajos a tiempo', value: '94 %' },
          { label: 'Respuesta media', value: '2,4 h' },
        ],
        bars: [
          { label: 'Proveedor de climatización', value: 96 },
          { label: 'Proveedor de ascensores', value: 91 },
          { label: 'Proveedor eléctrico', value: 87 },
          { label: 'Proveedor de fontanería', value: 82 },
        ],
      },
    },
    {
      tag: 'Visibilidad',
      title: 'Una visión clara de cada sede',
      description:
        'Los resúmenes de toda la cartera reúnen el pasado, el presente y el futuro de su operación en un solo lugar.',
      points: [
        'Tendencias de órdenes de trabajo y análisis de paradas',
        'Puntuación de riesgo de cumplimiento por sede',
        'Información de presupuesto y mantenimiento preventivo',
      ],
      visual: {
        kind: 'jobs',
        title: 'Top 10 centros · Riesgo',
        items: [
          {
            title: 'Northgate Mall',
            location: '3 puntos de cumplimiento abiertos',
            status: 'Revisar',
            tone: 'due',
          },
          {
            title: 'Harbour Point',
            location: 'Todas las revisiones completas',
            status: 'En plazo',
            tone: 'done',
          },
          {
            title: 'Marina Walk',
            location: '1 activo al final de su vida útil',
            status: 'Planificar',
            tone: 'info',
          },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  rules: {
    eyebrow: 'Basado en reglas',
    title: 'Inteligencia guiada por sus reglas',
    description:
      'RunnerAI trabaja dentro de las reglas que usted define, para que cada acción sea trazable, conforme y coherente con sus estándares corporativos.',
    action: { label: 'Hablar con nuestro especialista', href: '/contact' },
  },
  security: {
    eyebrow: 'Marco de IA seguro',
    title: 'IA dentro de su perímetro',
    description:
      'RunnerAI funciona en servidores dedicados a cada cliente, de modo que la información sensible permanece dentro de su organización.',
    items: [
      { title: 'Cómputo aislado', description: 'Un entorno dedicado para cada organización.' },
      { title: 'Datos cifrados', description: 'Cifrado en tránsito y en reposo.' },
      {
        title: 'Registros de auditoría completos',
        description: 'Cada acción generada por la IA queda registrada y es trazable.',
      },
      {
        title: 'Despliegue flexible',
        description: 'Nube, local o híbrido, compatible con RGPD, PDPL y PDPA.',
      },
    ],
  },
  industries: {
    title: 'Una solución para cada tipo de propiedad',
    description:
      'De carteras de retail a centros logísticos, RunnerAI se adapta a sus activos y a su mercado.',
  },
  integrate: {
    title: 'Creado para integrarse',
    description:
      'RunnerAI trabaja con las más de 20 integraciones de Fleet y aprovecha datos financieros, del edificio y de inquilinos para una visión completa.',
    action: { label: 'Ver todas las integraciones', href: '/platform/integrations' },
  },
}

export const fleetMailPage = {
  hero: {
    eyebrow: 'Fleet Mail',
    title: 'Cada correo, un trabajo con seguimiento',
    description:
      'Fleet Mail convierte las solicitudes de inquilinos y proveedores en órdenes de trabajo en cuanto llegan y mantiene a todos informados con correos automáticos.',
    primaryAction: { label: 'Reservar una demo', href: '/contact' },
    secondaryAction: { label: 'Hablar con nuestro equipo', href: '/contact' },
    hub: { center: 'Fleet Mail', nodes: ['Inquilinos', 'Proveedores', 'Técnicos', 'Responsables'] },
  },
  challenge: {
    pressure: {
      title: 'Las solicitudes llegan desde todas partes',
      description:
        'Inquilinos, proveedores y personal envían solicitudes, presupuestos y novedades a buzones compartidos, y cada mensaje contiene parte de un trabajo.',
      points: ['Solicitudes de inquilinos', 'Presupuestos de proveedores', 'Buzones compartidos'],
    },
    answer: {
      title: 'Fleet Mail lo reúne todo',
      description:
        'Cada correo pasa a formar parte de un registro estructurado, con el equipo adecuado asignado y todos al día.',
    },
  },
  intro: {
    title: 'Cada conversación avanza, en un solo lugar',
    description:
      'Solicitudes, respuestas y aprobaciones circulan por un registro que todo su equipo puede ver, mientras inquilinos y proveedores siguen usando el correo de siempre.',
  },
  rows: [
    {
      tag: 'Buzón compartido',
      title: 'Una cola organizada',
      description:
        'Un buzón compartido se convierte en una cola ordenada, con cada solicitud registrada, priorizada y asignada.',
      points: [
        'Cada solicitud con remitente, adjuntos y ubicación',
        'Solicitudes duplicadas agrupadas en un solo trabajo',
        'Tiempos de respuesta medidos según sus SLA',
      ],
      visual: {
        kind: 'jobs',
        title: 'maintenance@ · Hoy',
        items: [
          {
            title: 'Luz apagada en el vestíbulo',
            location: 'De: inquilino vivienda 1204',
            status: 'Orden creada',
            tone: 'info',
          },
          {
            title: 'Presupuesto revisión enfriadora',
            location: 'De: proveedor de climatización',
            status: 'Pendiente de aprobación',
            tone: 'due',
          },
          {
            title: 'RE: fuga en grifo de cocina',
            location: 'De: inquilino vivienda 802',
            status: 'Resuelta',
            tone: 'done',
          },
        ],
      },
    },
    {
      tag: 'Del correo a la orden',
      title: 'Las solicitudes se convierten en órdenes al instante',
      description:
        'Cada correo se convierte en una orden de trabajo y cada respuesta se añade a su historial, para mantener toda la conversación en contexto.',
      points: [
        'Fotos y documentos adjuntos a la orden de trabajo',
        'Asignación inteligente por sede, categoría y prioridad',
        'Respuestas guardadas automáticamente en el historial',
      ],
      visual: {
        kind: 'chat',
        title: 'WO-2318 · Hilo de correo',
        request: {
          title: 'Luz apagada en el vestíbulo',
          location: 'Bayview Residences · Vestíbulo',
          status: 'Asignada',
          tone: 'info',
        },
        messages: [
          {
            from: 'Inquilino',
            text: 'La luz principal del vestíbulo se apagó esta tarde.',
            time: '18:04',
            own: false,
          },
          {
            from: 'Fleet Mail',
            text: 'Gracias. La orden WO-2318 está creada y asignada a Marco L.',
            time: '18:04',
            own: true,
          },
          {
            from: 'Marco L.',
            text: 'Luminaria sustituida. Foto adjunta.',
            time: '09:30',
            own: true,
          },
        ],
      },
    },
    {
      tag: 'Aprobaciones',
      title: 'Aprobaciones con un clic',
      description:
        'Los responsables aprueban o rechazan costes desde el propio correo y el trabajo avanza automáticamente.',
      points: [
        'Solicitudes de aprobación enviadas a la persona adecuada',
        'Aprobar o rechazar con un clic desde la bandeja',
        'Cada decisión queda registrada en el trabajo',
      ],
      visual: {
        kind: 'steps',
        title: 'Aprobación por correo',
        steps: [
          { kind: 'Correo', text: 'Presupuesto recibido: 3.800 $' },
          { kind: 'Aprobar', text: 'La responsable financiera aprueba desde su bandeja' },
          { kind: 'Luego', text: 'Proveedor avisado + trabajo programado' },
        ],
      },
    },
    {
      tag: 'Novedades',
      title: 'Todos siguen informados',
      description:
        'Fleet envía el mensaje adecuado en el momento adecuado, para que equipos, proveedores e inquilinos sepan siempre el siguiente paso.',
      points: [
        'Notificaciones de asignación y vencimiento',
        'Escalados cuando se acercan los plazos',
        'Resúmenes de cierre con prueba fotográfica',
      ],
      visual: {
        kind: 'log',
        title: 'Correos enviados hoy',
        entries: [
          {
            when: '09:31',
            who: 'Inquilino, vivienda 1204',
            what: 'recibió un resumen de cierre con foto',
          },
          { when: '08:00', who: 'Marco L.', what: 'recibió sus 4 tareas de hoy' },
          {
            when: '07:45',
            who: 'Responsable regional',
            what: 'recibió el resumen semanal de trabajos vencidos',
          },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  flow: {
    eyebrow: 'Cómo funciona',
    title: 'Del buzón al trabajo resuelto',
    items: [
      {
        title: 'Recibir',
        description:
          'Inquilinos y proveedores escriben a su dirección de mantenimiento como siempre.',
      },
      {
        title: 'Crear',
        description:
          'Fleet Mail convierte cada correo en una orden de trabajo con sus fotos y ubicación.',
      },
      {
        title: 'Asignar',
        description:
          'El trabajo llega al equipo o proveedor adecuado según sede, categoría y prioridad.',
      },
      {
        title: 'Informar',
        description: 'Todos reciben automáticamente correos de avance, aprobación y cierre.',
      },
    ],
  },
  banner: {
    eyebrow: 'Pensado para cada remitente',
    title: 'Un correo que funciona para todos',
    description:
      'Inquilinos y proveedores siguen usando el correo de siempre, mientras su equipo trabaja con un registro estructurado y con seguimiento.',
    action: { label: 'Hablar con nuestro equipo', href: '/contact' },
  },
  connect: {
    title: 'Conecte toda su operación',
    description:
      'Fleet Mail forma parte de la plataforma Fleet, así que cada correo se vincula a sus activos, documentos, flujos e informes.',
    items: [
      {
        title: 'Todos en el mismo registro',
        description:
          'Inquilinos, proveedores y personal siguen un mismo trabajo, con cada mensaje en contexto.',
      },
      {
        title: 'Una visión clara de cada solicitud',
        description: 'Volúmenes, tiempos de respuesta y solicitudes abiertas en todas las sedes.',
      },
      {
        title: 'Más tiempo para el trabajo real',
        description: 'El registro y las novedades automáticas devuelven tiempo al trabajo in situ.',
      },
    ],
  },
  industries: {
    title: 'Una solución para cada tipo de propiedad',
    description:
      'De comunidades residenciales a centros logísticos, Fleet Mail se adapta a cómo se comunica cada propiedad.',
  },
  integrate: {
    title: 'Creado para integrarse',
    description:
      'Fleet Mail funciona junto a las más de 20 integraciones de Fleet, incluidos portales de inquilinos, herramientas financieras y sistemas del edificio.',
    action: { label: 'Ver todas las integraciones', href: '/platform/integrations' },
  },
}

export const workflowBuilderPage = {
  hero: {
    eyebrow: 'Fleet Workflow Builder',
    title: 'Flujos de trabajo que se adaptan a su forma de operar',
    description:
      'Adapte su mantenimiento a su estructura, cadenas de aprobación, políticas de proveedores y umbrales de coste con un editor visual que cualquier persona del equipo puede usar.',
    primaryAction: { label: 'Reservar una demo', href: '/contact' },
    highlights: ['Editor visual', 'Aprobaciones en varios pasos', 'En marcha la primera semana'],
  },
  build: {
    eyebrow: 'Fleet Workflow Builder',
    title: 'Construya su propio Fleet',
    description:
      'Usted define el proceso y Fleet lo aplica, para que cada tarea llegue a la persona adecuada en el momento adecuado, siempre.',
    helpTitle: 'Le ayudamos a trasladar cada proceso',
    helpDescription:
      'Nuestro equipo de incorporación traslada con usted aprobaciones, asignaciones y escalados a Fleet durante la primera semana.',
    action: { label: 'Hablar con nuestro equipo', href: '/contact' },
    center: 'Flujo',
    nodes: ['Aprobaciones', 'Asignación', 'Escalados', 'Avisos', 'Roles', 'Sedes'],
  },
  panels: {
    blocks: {
      title: 'Todas las piezas en un solo lugar',
      description:
        'Combine disparadores, condiciones y acciones para seguir los procedimientos de cada sede.',
      panelTitle: 'Piezas del flujo',
      status: 'Añadido',
      items: [
        {
          title: 'Disparador',
          description: 'Nueva solicitud, coste sobre el umbral o plazo próximo',
        },
        { title: 'Condición', description: 'Sede, tipo de activo, prioridad, proveedor o coste' },
        { title: 'Aprobación', description: 'Visto bueno del supervisor, la dirección o finanzas' },
        { title: 'Acción', description: 'Asignar, avisar, escalar o crear una orden de trabajo' },
      ],
    },
    integrations: {
      title: 'La integración es clave',
      description:
        'Los flujos actúan sobre documentos, activos, permisos y proveedores, y se conectan con sistemas financieros, del edificio y de inquilinos.',
      panelTitle: 'Conectado a sus flujos',
      action: { label: 'Ver integraciones', href: '/platform/integrations' },
      items: [
        {
          title: 'Software contable',
          location: 'Costes aprobados sincronizados automáticamente',
          status: 'Conectado',
          tone: 'done',
        },
        {
          title: 'Sistema de gestión del edificio',
          location: 'Las alarmas inician flujos',
          status: 'Conectado',
          tone: 'done',
        },
        {
          title: 'Fleet Mail',
          location: 'Aprobaciones por correo',
          status: 'Conectado',
          tone: 'done',
        },
      ] satisfies StatusItem[],
    },
  },
  templates: {
    title: 'Todos sus procesos en una sola plataforma',
    description:
      'Empiece con flujos listos para procesos habituales y adapte cada uno a sus sedes, roles y umbrales.',
    tag: 'Plantilla',
    items: [
      {
        title: 'Aprobación de más de 5.000 $',
        description: 'Visto bueno del supervisor antes de programar',
      },
      {
        title: 'Proveedor por edificio',
        description: 'Fontanería a proveedor en el edificio A, equipo interno en el B',
      },
      {
        title: 'Preventivo y correctivo separados',
        description: 'Preventivo a personal dedicado, correctivo a equipos generales',
      },
      {
        title: 'Avisos de plazos SLA',
        description: 'Responsables regionales avisados antes de cada plazo',
      },
      {
        title: 'Entrada de inquilinos',
        description: 'Inspección, revisión de activos y documentos',
      },
      {
        title: 'Revisión de documentos de cumplimiento',
        description: 'Documentos obligatorios adjuntos antes del cierre',
      },
    ],
  },
  benefits: {
    learnMore: 'Más información',
    items: [
      {
        href: '/features/audit-tracking',
        title: 'Coherencia',
        description: 'Cada trabajo sigue los mismos pasos, con una operación precisa y conforme.',
      },
      {
        href: '/features/reactive-maintenance',
        title: 'Eficiencia',
        description: 'La lógica repetible reduce los traspasos manuales de la creación al cierre.',
      },
      {
        href: '/features/analytics-and-reporting',
        title: 'Visibilidad',
        description: 'Los flujos estructurados generan datos más limpios e informes más útiles.',
      },
    ],
  },
}

export const preventivePage = {
  hero: {
    eyebrow: 'Mantenimiento preventivo y predictivo',
    title: 'Siempre un paso por delante de cada avería',
    description:
      'Planifique el mantenimiento recurrente de cada activo, actúe con predicciones basadas en reglas y mantenga los equipos en marcha en cada sede, con hasta un 40 % menos de trabajo correctivo.',
    primaryAction: { label: 'Reservar una demo', href: '/contact' },
    secondaryAction: { label: 'Explorar la plataforma', href: '/platform' },
    highlights: [
      'Planes recurrentes',
      'Predicciones basadas en reglas',
      'Calendario de cumplimiento',
    ],
    prediction: {
      title: 'Predicción de Fleet',
      asset: 'AHU-07 · Tower B, P14',
      risk: 'Riesgo alto',
      message:
        'Vibración por encima de lo normal durante 9 días. Programe mantenimiento en 7 días.',
      action: 'Crear orden de trabajo',
    },
  },
  challenge: {
    pressure: {
      title: 'Cada activo tiene su propio ritmo',
      description:
        'Climatización, ascensores, fontanería, iluminación e incendios siguen sus propios planes, listas y fechas de cumplimiento en cada sede.',
      points: ['Planes recurrentes', 'Inspecciones reglamentarias', 'Varias sedes'],
    },
    answer: {
      title: 'Fleet mantiene cada plan al día',
      description:
        'Fleet convierte los planes de mantenimiento en programaciones automáticas y usa datos en vivo para mostrar dónde actuar después.',
    },
  },
  capabilities: {
    title: 'La forma inteligente de gestionar su mantenimiento preventivo',
    description:
      'De las programaciones recurrentes a las predicciones trazables, todo su programa en una sola plataforma.',
    tabs: [
      {
        icon: 'schedules',
        label: 'Programación',
        title: 'Planes preventivos recurrentes',
        description:
          'Programe tareas preventivas de climatización, fontanería, iluminación, ascensores e incendios por tiempo o por uso.',
        points: [
          'Programación por tiempo y por uso',
          'Listas de buenas prácticas por tipo de activo',
          'Carga repartida entre técnicos y proveedores',
        ],
        visual: {
          kind: 'jobs',
          title: 'Trabajos planificados · Esta semana',
          items: [
            {
              title: 'Cambio de filtros de climatización',
              location: 'Tower B · AHU-07',
              status: 'Vence en 4 h',
              tone: 'due',
            },
            {
              title: 'Certificación anual de ascensores',
              location: 'Ascensores L1–L3',
              status: 'Programado',
              tone: 'info',
            },
            {
              title: 'Prueba de iluminación de emergencia',
              location: 'Northgate Mall',
              status: 'Completado',
              tone: 'done',
            },
          ],
        },
      },
      {
        icon: 'workOrders',
        label: 'Órdenes de trabajo',
        title: 'Trabajos creados automáticamente',
        description:
          'Fleet genera las órdenes preventivas a partir del plan de cada activo y las asigna al equipo adecuado, con listas adjuntas.',
        points: [
          'Órdenes generadas desde cada plan de mantenimiento',
          'Asignadas a equipos internos o proveedores',
          'Pruebas fotográficas y lecturas al cerrar',
        ],
        visual: {
          kind: 'steps',
          title: 'Automatización preventiva',
          steps: [
            { kind: 'Plan', text: 'Enfriadora CH-02 · servicio trimestral' },
            { kind: 'Luego', text: 'Crear la orden 14 días antes' },
            { kind: 'Luego', text: 'Asignar al proveedor de climatización + adjuntar lista' },
          ],
        },
      },
      {
        icon: 'predictions',
        label: 'Predicciones',
        title: 'Alertas predictivas trazables',
        description:
          'El aprendizaje automático basado en reglas evalúa el riesgo con datos en vivo e históricos, y cada alerta remite a su regla.',
        points: [
          'Riesgo evaluado con datos en vivo e históricos',
          'Cada alerta vinculada a la regla que la generó',
          'Un clic de la predicción a la orden de trabajo',
        ],
        visual: {
          kind: 'jobs',
          title: 'Alertas de riesgo',
          items: [
            {
              title: 'Vibración de AHU-07 en aumento',
              location: 'Tower B · Planta 14',
              status: 'Riesgo alto',
              tone: 'overdue',
            },
            {
              title: 'Desviación de presión en bomba P-03',
              location: 'Harbour Point',
              status: 'Riesgo medio',
              tone: 'due',
            },
            {
              title: 'Enfriadora CH-02 de nuevo en rango',
              location: 'Harbour Point',
              status: 'Resuelto',
              tone: 'done',
            },
          ],
        },
      },
      {
        icon: 'compliance',
        label: 'Cumplimiento',
        title: 'Un calendario de cumplimiento para cada sede',
        description:
          'Siga inspecciones reglamentarias y certificados con recordatorios antes de cada vencimiento, y guarde la evidencia en cada registro.',
        points: [
          'Recordatorios antes de cada inspección y certificado',
          'Certificados guardados con cada activo',
          'Historial listo para auditoría en cada sede',
        ],
        visual: {
          kind: 'files',
          title: 'Próximo cumplimiento',
          items: [
            {
              title: 'Certificado contra incendios',
              location: 'Tower B · Vence 30 oct.',
              status: 'En 24 d',
              tone: 'due',
            },
            {
              title: 'Informe de inspección de ascensores',
              location: 'Ascensores · Vence 12 nov.',
              status: 'Programado',
              tone: 'info',
            },
            {
              title: 'Evaluación de riesgo de legionela',
              location: 'Bayview Residences',
              status: 'Al día',
              tone: 'done',
            },
          ],
        },
      },
    ] satisfies (Omit<OverviewModule, 'id' | 'tag'> & { icon: PreventiveIcon; label: string })[],
  },
  rows: [
    {
      tag: 'IA basada en reglas',
      title: 'Predicciones que evitan paradas',
      description:
        'Fleet sigue la evolución de los equipos y detecta señales tempranas, para que su equipo actúe antes de que afecte a los inquilinos.',
      points: [
        'Las lecturas por encima de lo normal generan una alerta',
        'Siguiente paso recomendado en cada alerta',
        'Planes sugeridos para equipos nuevos con RunnerAI',
      ],
      visual: {
        kind: 'log',
        title: 'Actividad predictiva',
        entries: [
          {
            when: '09:42',
            who: 'Fleet',
            what: 'detectó vibración de AHU-07 por encima de lo normal durante 9 días',
          },
          { when: '09:44', who: 'Aisha K.', what: 'creó una orden de trabajo desde la alerta' },
          {
            when: '08:58',
            who: 'RunnerAI',
            what: 'sugirió un plan preventivo para 6 enfriadoras nuevas',
          },
        ],
      },
    },
    {
      tag: 'Planificación',
      title: 'La prevención compensa',
      description:
        'Pase del trabajo correctivo al mantenimiento planificado y vea la diferencia en disponibilidad, costes y confort.',
      points: [
        'Trabajo preventivo y correctivo seguidos en paralelo',
        'Gasto planificado según el ciclo de vida',
        'Incidencias recurrentes convertidas en tareas preventivas',
      ],
      visual: {
        kind: 'chart',
        title: 'Proporción de mantenimiento planificado',
        stats: [
          { label: 'Trabajo planificado', value: '78 %' },
          { label: 'Trabajo correctivo', value: '22 %' },
        ],
        bars: [
          { label: 'Harbour Point', value: 84 },
          { label: 'Tower B', value: 80 },
          { label: 'Northgate', value: 76 },
          { label: 'Bayview', value: 72 },
          { label: 'Westport', value: 68 },
        ],
      },
    },
    {
      tag: 'Equipos y proveedores',
      title: 'Coordinación fluida con equipos y proveedores',
      description:
        'Envíe cada trabajo preventivo a técnicos internos o proveedores contratados y siga el avance en tiempo real.',
      points: [
        'Trabajos asignados por sede, especialidad y contrato',
        'Los proveedores entran con un enlace sencillo',
        'Pruebas fotográficas y lecturas en cada cierre',
      ],
      visual: {
        kind: 'jobs',
        title: 'Preventivo del mes por responsable',
        items: [
          {
            title: 'Equipo interno de climatización',
            location: '24 trabajos · 3 sedes',
            status: '92 % hecho',
            tone: 'done',
          },
          {
            title: 'Proveedor de ascensores',
            location: '9 trabajos · 5 sedes',
            status: 'En plazo',
            tone: 'info',
          },
          {
            title: 'Proveedor contra incendios',
            location: '12 trabajos · 4 sedes',
            status: '2 vencen hoy',
            tone: 'due',
          },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  steps: {
    eyebrow: 'Cómo funciona',
    title: 'Del plan a la evidencia',
    items: [
      {
        title: 'Planificar',
        description:
          'Cargue sus activos y planes de mantenimiento, o empiece con plantillas de buenas prácticas.',
      },
      {
        title: 'Programar',
        description: 'Fleet crea y asigna las órdenes automáticamente antes de cada vencimiento.',
      },
      {
        title: 'Completar',
        description: 'Los técnicos siguen las listas y registran fotos y lecturas in situ.',
      },
      {
        title: 'Predecir',
        description:
          'Los datos en vivo e históricos muestran el riesgo a tiempo y los planes mejoran continuamente.',
      },
    ],
  },
  banner: {
    eyebrow: 'Empiece ahora',
    title: 'Planifique bien su mantenimiento preventivo',
    description:
      'Nuestro equipo carga con usted los activos y planes de mantenimiento durante la implantación, para que las programaciones funcionen desde la primera semana.',
    action: { label: 'Reservar una demo', href: '/contact' },
  },
  trust: {
    title: 'Un mantenimiento preventivo en el que puede confiar',
    description:
      'Fleet está creado para equipos inmobiliarios que gestionan activos complejos en varias propiedades.',
    items: [
      {
        title: 'Creado para el sector inmobiliario',
        description: 'Reglas y planes por propiedad, región o cartera.',
      },
      {
        title: 'Móvil sobre el terreno',
        description:
          'Los técnicos completan listas en cualquier teléfono o tableta, iOS y Android.',
      },
      {
        title: 'Registros listos para auditoría',
        description: 'Cada inspección y servicio queda con fecha, hora y responsable.',
      },
    ],
  },
  quote: {
    text: 'Fleet ha reducido nuestro mantenimiento correctivo casi un 40 %. Por fin tenemos a los técnicos, los registros de activos y los trabajos en un solo lugar.',
    author: 'Responsable de operaciones',
    company: 'Desarrollo de uso mixto',
  },
  industries: {
    title: 'Mantenimiento preventivo para cada tipo de propiedad',
    description:
      'De centros comerciales a centros logísticos, Fleet se adapta a sus activos y a su mercado.',
  },
  integrate: {
    title: 'Creado para integrarse',
    description:
      'Conecte su sistema de gestión del edificio para que alarmas y lecturas alimenten sus planes preventivos, junto a más de 20 integraciones.',
    action: { label: 'Ver todas las integraciones', href: '/platform/integrations' },
  },
}

export const reactivePage = {
  hero: {
    eyebrow: 'Mantenimiento correctivo',
    title: 'Cada reparación, resuelta con rapidez',
    description:
      'Registre las incidencias en cuanto ocurren, envíelas al equipo adecuado y siga cada reparación hasta su cierre según sus SLA.',
    primaryAction: { label: 'Reservar una demo', href: '/contact' },
    secondaryAction: { label: 'Explorar la plataforma', href: '/platform' },
    highlights: ['Seguimiento del SLA en vivo', 'Solicitudes con fotos', 'Asignación inteligente'],
    visual: {
      kind: 'jobs',
      title: 'Órdenes de trabajo · Hoy',
      items: [
        {
          title: 'Fuga de agua, vivienda 3B',
          location: 'Bayview Residences · Foto adjunta',
          status: 'Vencida hace 2 h',
          tone: 'overdue',
        },
        {
          title: 'Reparación puerta de muelle',
          location: 'Westport DC · Proveedor contratado',
          status: 'Asignada',
          tone: 'info',
        },
        {
          title: 'Alarma de enfriadora',
          location: 'Harbour Point · Técnico de guardia',
          status: 'En curso',
          tone: 'due',
        },
        {
          title: 'Fallo de iluminación, planta 2',
          location: 'Northgate Mall',
          status: 'Completada',
          tone: 'done',
        },
      ],
    } satisfies OverviewVisual,
  },
  columns: [
    {
      title: 'Estado claro de cada trabajo',
      description:
        'Cada solicitud, del aviso al cierre, con estado en vivo, temporizadores de SLA y pruebas fotográficas en un solo lugar.',
    },
    {
      title: 'Novedades para todos los implicados',
      description:
        'Inquilinos, técnicos, proveedores y responsables reciben la novedad adecuada en el momento justo, por app o correo.',
    },
    {
      title: 'Registros en la nube',
      description:
        'Cada trabajo, foto y aprobación se guarda de forma segura y está disponible en cualquier dispositivo, desde cualquier lugar.',
    },
  ],
  rows: [
    {
      tag: 'Gestión de órdenes de trabajo',
      title: 'Mantenimiento correctivo de principio a fin',
      description:
        'Desde el primer aviso hasta el cierre, cada reparación sigue un camino claro, con las personas adecuadas informadas en cada paso.',
      points: [
        'Solicitudes a equipos internos o proveedores según sede, especialidad y urgencia',
        'Costes por encima del umbral enviados automáticamente a quien debe aprobarlos',
        'Trabajos abiertos, vencidos y completados visibles en todas las propiedades',
      ],
      visual: {
        kind: 'jobs',
        title: 'Panel de trabajos · Todas las sedes',
        items: [
          {
            title: '42 trabajos abiertos',
            location: 'En 14 sedes',
            status: 'En vivo',
            tone: 'info',
          },
          {
            title: '3 trabajos cerca del plazo SLA',
            location: 'Supervisores avisados',
            status: 'Vence pronto',
            tone: 'due',
          },
          {
            title: 'Presupuesto de reparación de más de 3.000 $',
            location: 'Enviado a finanzas para su aprobación',
            status: 'Aprobación',
            tone: 'due',
          },
          {
            title: '118 trabajos cerrados esta semana',
            location: 'Prueba fotográfica en cada uno',
            status: 'Hecho',
            tone: 'done',
          },
        ],
      },
    },
    {
      tag: 'Comunicación',
      title: 'Directo al grano',
      description:
        'Las solicitudes llegan con fotos, ubicación y datos del activo, para que los técnicos entiendan el problema antes de llegar.',
      points: [
        'Fotos y vídeos aportados por el solicitante',
        'Historial y manuales del activo en cada trabajo',
        'Respuestas y novedades guardadas en el historial',
      ],
      visual: {
        kind: 'chat',
        title: 'WO-2291 · Fuga de agua',
        request: {
          title: 'Fuga de agua, vivienda 3B',
          location: 'Bayview Residences · Válvula de montante V-12',
          status: 'Asignada',
          tone: 'info',
        },
        messages: [
          {
            from: 'Inquilino',
            text: 'Entra agua por el techo del baño. Adjunto foto.',
            time: '08:12',
            own: false,
          },
          {
            from: 'Marco L.',
            text: 'Voy para allá. La válvula V-12 se revisó en junio, la compruebo primero.',
            time: '08:20',
            own: true,
          },
          {
            from: 'Marco L.',
            text: 'Junta sustituida y fuga reparada. Fotos añadidas al trabajo.',
            time: '11:05',
            own: true,
          },
        ],
      },
    },
    {
      tag: 'Ubicación',
      title: 'Cada trabajo, en su sitio',
      description:
        'Cada reparación está vinculada a su edificio, planta, sala y activo, para que la persona adecuada vaya directa al lugar correcto.',
      points: [
        'Trabajos organizados por edificio, planta, sala o zona',
        'Trabajos en la misma ubicación agrupados automáticamente',
        'Incidencias recurrentes destacadas por edificio y activo',
      ],
      visual: {
        kind: 'asset',
        title: 'Ubicación del trabajo',
        name: 'Válvula de montante V-12',
        location: 'Bayview Residences · Planta 3 · Vivienda 3B',
        status: 'En reparación',
        facts: [
          { label: 'Edificio', value: 'Bayview Residences' },
          { label: 'Planta', value: 'Planta 3' },
          { label: 'Último servicio', value: '14 jun.' },
          { label: 'Trabajos este año', value: '2' },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  happy: {
    eyebrow: 'Calidad del servicio',
    title: 'Todo funciona y todos están satisfechos',
    description:
      'Las reparaciones rápidas y bien documentadas mantienen a los inquilinos satisfechos y a los equipos responsables. El seguimiento del SLA en vivo muestra dónde el servicio es sólido y dónde intervenir.',
    points: [
      'Tiempos de respuesta y resolución medidos en vivo',
      'Avisos antes de que venza un plazo',
      'Rendimiento del SLA revisado cada mes por edificio',
    ],
    visual: {
      kind: 'chart',
      title: 'SLA cumplido por edificio · Septiembre',
      stats: [
        { label: 'SLA cumplido', value: '96,4 %' },
        { label: 'Respuesta media', value: '1,8 h' },
      ],
      bars: [
        { label: 'Harbour Point', value: 98 },
        { label: 'Tower B', value: 97 },
        { label: 'Northgate', value: 96 },
        { label: 'Bayview', value: 95 },
        { label: 'Westport', value: 93 },
      ],
    } satisfies OverviewVisual,
  },
}

export const analyticsPage: AnalyticsPageContent = {
  hero: {
    eyebrow: 'Análisis e informes',
    title: 'Decisiones operativas mejor fundamentadas',
    description:
      'Fleet convierte el mantenimiento diario en información útil, con paneles en vivo e informes exportables para cada equipo, sede y activo.',
    primaryAction: {
      label: 'Reservar una demo',
      href: '/contact',
    },
    secondaryAction: {
      label: 'Explorar la plataforma',
      href: '/platform',
    },
    highlights: ['Paneles en vivo', 'Indicadores a medida', 'Exportación con un clic'],
    visual: {
      kind: 'chart',
      title: 'Gasto de mantenimiento vs presupuesto · año',
      stats: [
        {
          label: 'Gasto anual',
          value: '184k $',
        },
        {
          label: 'Presupuesto usado',
          value: '71 %',
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
  columns: [
    {
      title: 'Indicadores en tiempo real',
      description:
        'Siga el volumen de trabajos, los tiempos de respuesta, el cumplimiento y los costes en cada sede a medida que cambian.',
    },
    {
      title: 'Paneles a medida',
      description:
        'Cree vistas para cada departamento y rol, desde los técnicos hasta la dirección.',
    },
    {
      title: 'Informes detallados',
      description:
        'Analice el rendimiento por edificio, activo, proveedor o equipo y exporte informes en pocos clics.',
    },
  ],
  rows: [
    {
      tag: 'Gasto',
      title: 'Mantenga el gasto de mantenimiento en presupuesto',
      description:
        'Vea el gasto por centro de coste al momento y compárelo con el presupuesto de cada sede, para actuar antes de que se desvíe.',
      points: [
        'Gasto por edificio, activo y proveedor',
        'Comparativas presupuestarias por sede',
        'Costes por encima del umbral enviados a aprobación',
      ],
      visual: {
        kind: 'jobs',
        title: 'Presupuesto por centro de coste',
        items: [
          {
            title: 'Mantenimiento de climatización',
            location: '62k $ de 80k $',
            status: '78 % usado',
            tone: 'info',
          },
          {
            title: 'Ascensores y escaleras mecánicas',
            location: '31k $ de 35k $',
            status: '89 % usado',
            tone: 'due',
          },
          {
            title: 'Protección contra incendios',
            location: '18k $ de 30k $',
            status: '60 % usado',
            tone: 'done',
          },
        ],
      },
    },
    {
      tag: 'Análisis de costes',
      title: 'Análisis de costes completo',
      description: 'Entienda adónde va cada euro, desde un solo activo hasta toda la cartera.',
      points: [
        'Historial y costes de reparación de cada activo',
        'Costes de proveedores comparados entre regiones',
        'Activos que más presupuesto consumen destacados',
      ],
      visual: {
        kind: 'jobs',
        title: 'Principales fuentes de coste · T3',
        items: [
          {
            title: 'Enfriadora CH-02',
            location: 'Harbour Point · 9 trabajos',
            status: '12.400 $',
            tone: 'neutral',
          },
          {
            title: 'Batería de ascensores L1–L3',
            location: 'Northgate Mall · 6 trabajos',
            status: '8.900 $',
            tone: 'neutral',
          },
          {
            title: 'Puertas de muelle',
            location: 'Westport DC · 4 trabajos',
            status: '5.200 $',
            tone: 'neutral',
          },
        ],
      },
    },
    {
      tag: 'Previsión',
      title: 'Planifique con datos',
      description:
        'La información de ciclo de vida y paradas ayuda a prever sustituciones y planificar inversiones con confianza.',
      points: [
        'Previsiones de sustitución basadas en el uso real',
        'Información de paradas y ciclo de vida',
        'Tendencias de preventivo y correctivo en el tiempo',
      ],
      visual: {
        kind: 'chart',
        title: 'Previsión de inversión en sustituciones',
        stats: [
          {
            label: 'Próximos 12 meses',
            value: '96k $',
          },
          {
            label: 'Activos previstos',
            value: '14',
          },
        ],
        bars: [
          {
            label: '2027',
            value: 40,
          },
          {
            label: '2028',
            value: 64,
          },
          {
            label: '2029',
            value: 52,
          },
          {
            label: '2030',
            value: 78,
          },
          {
            label: '2031',
            value: 58,
          },
        ],
      },
    },
  ],
  reports: {
    eyebrow: 'Informes',
    title: 'Su operación. Sus informes.',
    description:
      'Comparta las cifras adecuadas con las personas adecuadas, a tiempo y en el formato que necesitan.',
    points: [
      'Informes programados enviados por correo',
      'Exportaciones para auditorías y consejos',
      'Resúmenes de toda la cartera',
      'Informes para cada departamento y rol',
    ],
    visual: {
      kind: 'steps',
      title: 'Informe programado',
      steps: [
        {
          kind: 'Datos',
          text: 'Órdenes, SLA y costes',
        },
        {
          kind: 'Filtro',
          text: 'Región EAU · últimos 30 días',
        },
        {
          kind: 'Enviar',
          text: 'Cada lunes a los responsables regionales',
        },
      ],
    },
  },
  extras: [
    {
      icon: 'ai',
      title: 'Paneles a petición con RunnerAI',
      description:
        'Haga una pregunta en lenguaje natural y RunnerAI crea el panel con sus datos en vivo en segundos.',
      action: {
        label: 'Conocer RunnerAI',
        href: '/platform/runner-ai',
      },
    },
    {
      icon: 'plug',
      title: 'Conecte sus datos con sus herramientas',
      description:
        'Comparta los datos de Fleet con herramientas financieras y de negocio mediante más de 20 integraciones y una API REST abierta.',
      action: {
        label: 'Ver todas las integraciones',
        href: '/platform/integrations',
      },
    },
  ],
}
