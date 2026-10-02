import type { BadgeTone } from '@/components/ui/Badge.astro'

export type StatusItem = {
  title: string
  location?: string
  status: string
  tone: BadgeTone
}

export const meta = {
  title: 'Fleet | Datos e inteligencia unificados para el sector inmobiliario',
  description:
    'Fleet es la plataforma de gestión inmobiliaria comercial diseñada para la estrategia, las operaciones y el mantenimiento.',
}

export const hero = {
  announcement: {
    label: 'Nuevo',
    text: 'Agentes de IA basados en reglas para carteras multisede',
    href: '/#ai',
  },
  title: 'Datos e inteligencia unificados para el sector inmobiliario',
  description:
    'Fleet es la plataforma de gestión inmobiliaria comercial diseñada para la estrategia, las operaciones y el mantenimiento: cada sede, activo y orden de trabajo en un solo lugar.',
  primaryAction: { label: 'Solicitar demo', href: '/contact' },
  secondaryAction: { label: 'Explorar la plataforma', href: '/#platform' },
  highlights: [
    'iOS y Android',
    'Registros de auditoría integrados',
    'Datos aislados por organización',
  ],
}

export const showcase = {
  greeting: 'Bienvenido, Napon S.',
  scope: 'Cartera · 14 ubicaciones',
  filters: ['Todas las regiones', 'Últimos 30 días'],
  stats: [
    { label: 'Órdenes abiertas', value: '128' },
    { label: 'SLA cumplido', value: '96,4 %' },
    { label: 'Preventivos pendientes', value: '37' },
  ],
  workOrders: [
    {
      id: 'WO-2291',
      title: 'Alarma de baja presión en enfriadora',
      location: 'Harbour Point · Sala de máquinas',
      status: 'Vencida hace 2 d',
      tone: 'overdue',
    },
    {
      id: 'WO-2304',
      title: 'Cambio de filtros de HVAC',
      location: 'Tower B · Planta 14',
      status: 'Vence en 4 h',
      tone: 'due',
    },
    {
      id: 'WO-2310',
      title: 'Inspección trimestral de puertas cortafuego',
      location: 'Northgate Mall · Escalera A',
      status: 'Programada',
      tone: 'info',
    },
    {
      id: 'WO-2288',
      title: 'Reparación de puerta del muelle de carga',
      location: 'Westport DC · Muelle 07',
      status: 'Completada',
      tone: 'done',
    },
  ] satisfies (StatusItem & { id: string })[],
  prediction: {
    title: 'Predicción de Fleet',
    asset: 'AHU-07 · Tower B, P14',
    risk: 'Riesgo alto',
    message:
      'La vibración supera la línea base desde hace 9 días. Programe mantenimiento preventivo en los próximos 7 días.',
    trend: [30, 34, 32, 38, 36, 42, 40, 48, 55, 60, 66, 72, 80, 92],
    alertFrom: 9,
    rule: 'Regla R-114 · trazable',
    action: 'Crear orden de trabajo',
  },
  audit: [
    { who: 'Aisha K.', what: 'cerró WO-2288', when: '2 min' },
    { who: 'Flujo de trabajo', what: 'escaló WO-2291 al proveedor', when: '1 h' },
    { who: 'Marco L.', what: 'subió el permiso contra incendios', when: '3 h' },
  ],
}

export const unifiedModel = {
  eyebrow: 'Una única fuente de verdad',
  title: 'De herramientas dispersas a un modelo operativo unificado',
  description:
    'Hojas de cálculo, bandejas de entrada, unidades compartidas y portales de proveedores contienen cada uno una parte del panorama. Fleet los conecta en un único registro estructurado, para que cada decisión parta de un contexto completo.',
  sources: [
    'Hojas de cálculo',
    'Hilos de correo',
    'Unidades compartidas',
    'Portales de proveedores',
    'Listas en papel',
  ],
  outputs: ['Paneles en tiempo real', 'Historial de activos', 'Pista de auditoría', 'Predicciones'],
}

export const platform = {
  eyebrow: 'La plataforma',
  title: 'No es un CMMS más. Diseñado para inmuebles multisede.',
  description:
    'Active solo los módulos que su equipo necesita. Todos comparten el mismo modelo de datos: ubicaciones, activos, personas e historial siempre conectados.',
  workOrders: {
    title: 'Órdenes de trabajo y SLA',
    description:
      'Programe tareas preventivas, haga seguimiento de reparaciones puntuales y asigne trabajos a equipos internos o proveedores.',
    items: [
      { initials: 'AK', title: 'Revisión anual de caldera', status: 'Vence en 4 h', tone: 'due' },
      {
        initials: 'ML',
        title: 'Fuga de agua, unidad 3B',
        status: 'Vencida hace 2 d',
        tone: 'overdue',
      },
      {
        initials: 'JT',
        title: 'Prueba de alumbrado de emergencia',
        status: 'Completada',
        tone: 'done',
      },
    ] satisfies (StatusItem & { initials: string })[],
  },
  assets: {
    title: 'Gestión de activos',
    description:
      'Fichas digitales con historial de mantenimiento, costes, garantías y manuales, asignadas a edificios y salas.',
    asset: {
      name: 'Enfriadora CH-02',
      location: 'Harbour Point · Sala de máquinas B2',
      status: 'Operativa',
      facts: [
        { label: 'Último servicio', value: '12 sep' },
        { label: 'Garantía', value: 'mar 2028' },
        { label: 'Coste en el año', value: '$4,210' },
      ],
    },
  },
  documents: {
    title: 'Gestión documental',
    description:
      'Manuales, garantías, informes de inspección y permisos, listos para auditoría y accesibles desde todas las sedes.',
    items: [
      {
        title: 'Certificado de seguridad contra incendios.pdf',
        location: 'Tower B · Permiso',
        status: 'Caduca en 30 d',
        tone: 'due',
      },
      {
        title: 'Manual de O&M CH-02.pdf',
        location: 'Enfriadora CH-02 · Manual',
        status: 'Vinculado',
        tone: 'info',
      },
      {
        title: 'Inspección de ascensores T3.pdf',
        location: 'Ascensores centrales · Informe',
        status: 'Verificado',
        tone: 'done',
      },
    ] satisfies StatusItem[],
  },
  workflows: {
    title: 'Flujos de trabajo personalizados',
    description:
      'Convierta solicitudes en acciones automáticamente. Las aprobaciones generan órdenes de trabajo y avisos a proveedores sin traspasos manuales.',
    steps: [
      { kind: 'Disparador', text: 'Se envía una solicitud de mejora de equipos' },
      { kind: 'Si', text: 'La aprueba el responsable de la sede' },
      { kind: 'Entonces', text: 'Crear una orden de trabajo y avisar al proveedor' },
    ],
  },
  auditLogs: {
    title: 'Registros de auditoría',
    description:
      'Cada cambio queda fechado y atribuido. Cumpla la normativa sin perseguir papeles.',
    entries: [
      { when: '09:42', who: 'Aisha K.', what: 'cambió el estado de WO-2304 a En curso' },
      {
        when: '09:15',
        who: 'Flujo de trabajo',
        what: 'asignó WO-2310 al equipo de FM de Northgate',
      },
      { when: '08:58', who: 'Marco L.', what: 'adjuntó un informe de inspección a CH-02' },
    ],
  },
  mobile: {
    title: 'Móvil para el trabajo de campo',
    description:
      'Técnicos e inquilinos en iOS y Android. Registre incidencias con fotos, notas y activos vinculados.',
    heading: 'Hoy · 4 tareas',
    task: {
      title: 'Inspección de puerta cortafuego',
      location: 'Planta 3 · Escalera A',
      status: 'Vence en 2 h',
      tone: 'due',
    } satisfies StatusItem,
    actions: ['Iniciar', 'Añadir foto'],
  },
}

export const aiAgents = {
  eyebrow: 'Agentes de IA de Fleet',
  title: 'Pregunte lo que quiera sobre su cartera',
  description:
    'El agente de IA de Fleet responde preguntas en lenguaje natural con los datos en tiempo real de su cartera y crea el panel que acompaña a cada respuesta. Sin tablas dinámicas ni solicitudes de informes.',
  points: [
    {
      title: 'Respuestas en lenguaje natural',
      description:
        'Pregunte por costes, SLA, activos o proveedores y obtenga respuestas basadas en sus datos actuales, no en la exportación del mes pasado.',
    },
    {
      title: 'Paneles al instante',
      description:
        'Cada respuesta incluye un gráfico que puede ajustar, compartir o fijar en un panel del equipo.',
    },
    {
      title: 'Cada respuesta, trazable',
      description:
        'Las respuestas citan las órdenes de trabajo y los activos en los que se basan, y se ejecutan en un entorno aislado para cada organización.',
    },
  ],
  chat: {
    assistant: 'Asistente de Fleet',
    context: 'Datos en tiempo real · 14 ubicaciones',
    question:
      '¿Qué sedes tuvieron más tiempo de inactividad de HVAC el último trimestre y cuánto nos costó?',
    answer: {
      lead: 'Harbour Point',
      body: 'encabezó la lista con 46 horas de inactividad de HVAC, sobre todo por la enfriadora CH-02. En todas las sedes, la inactividad de HVAC costó',
      cost: '$38,400',
      tail: 'en el T3, un 18 % más que en el T2.',
    },
    chartTitle: 'Inactividad de HVAC por sede · T3',
    chartBadge: 'Panel generado',
    stats: [
      { label: 'Horas totales', value: '112' },
      { label: 'Coste', value: '$38.4k' },
      { label: 'vs T2', value: '+18 %', trend: 'up' },
    ],
    rows: [
      { site: 'Harbour Point', hours: 46 },
      { site: 'Tower B', hours: 28 },
      { site: 'Northgate Mall', hours: 19 },
      { site: 'Bayview Hotel', hours: 12 },
      { site: 'Westport DC', hours: 7 },
    ],
    sources: 'Fuentes: 86 órdenes de trabajo · 14 activos',
    action: 'Fijar en el panel',
    followUps: [
      'Desglosar por activo',
      'Comparar con el año pasado',
      '¿Qué proveedores intervinieron?',
    ],
    placeholder: 'Pregunte por cualquier sede, activo o proveedor…',
  },
}

export const solutions = {
  eyebrow: 'Soluciones',
  title: 'Una plataforma adaptada a su sector',
  sectors: [
    {
      label: 'Comercial',
      title: 'Oficinas',
      site: 'Harbour Point · 22 plantas',
      description:
        'Mantenga en marcha torres con varios inquilinos gracias a planes preventivos, coordinación de proveedores y paneles de SLA en cada planta.',
      points: [
        'Solicitudes de inquilinos asignadas por planta y especialidad',
        'Rendimiento de proveedores por contrato',
        'Informes de presupuesto por edificio',
      ],
      tasks: [
        {
          title: 'Cambio de filtros de HVAC',
          location: 'Planta 14 · AHU-07',
          status: 'Vence en 4 h',
          tone: 'due',
        },
        {
          title: 'Certificación anual de ascensores',
          location: 'Ascensores centrales P1–P3',
          status: 'Programada',
          tone: 'info',
        },
        {
          title: 'Fallo de iluminación en el vestíbulo',
          location: 'Planta baja',
          status: 'Completada',
          tone: 'done',
        },
      ],
    },
    {
      label: 'Retail',
      title: 'Retail',
      site: 'Northgate Mall · 180 locales',
      description:
        'Mantenga escaparates y zonas comunes listos para recibir clientes con tareas programadas, seguimiento de SLA y paneles en tiempo real, respaldados por flujos personalizados.',
      points: [
        'Revisiones programadas de zonas comunes',
        'Trabajos fuera de horario coordinados con los inquilinos',
        'Seguimiento de SLA por contratista',
      ],
      tasks: [
        {
          title: 'Limpieza a fondo de escalera mecánica',
          location: 'Atrio · E2',
          status: 'Vence en 2 h',
          tone: 'due',
        },
        {
          title: 'Separador de grasas del patio de comidas',
          location: 'Planta 2',
          status: 'Vencida hace 1 d',
          tone: 'overdue',
        },
        {
          title: 'Auditoría de iluminación del aparcamiento',
          location: 'S1–S3',
          status: 'Completada',
          tone: 'done',
        },
      ],
    },
    {
      label: 'Hostelería',
      title: 'Hostelería',
      site: 'Bayview Hotel · 312 habitaciones',
      description:
        'Gestione revisiones preventivas, registros de proveedores y requisitos normativos, con una pista de auditoría para la seguridad de los huéspedes y la tranquilidad regulatoria.',
      points: [
        'Disponibilidad de habitaciones vinculada al mantenimiento',
        'Revisiones contra incendios registradas automáticamente',
        'Prioridad a las incidencias que afectan a huéspedes',
      ],
      tasks: [
        {
          title: 'El aire de la hab. 1204 no enfría',
          location: 'Planta 12',
          status: 'Vence en 1 h',
          tone: 'due',
        },
        {
          title: 'Registro químico de la piscina',
          location: 'Terraza planta 5',
          status: 'Completada',
          tone: 'done',
        },
        {
          title: 'Inspección de campana de cocina',
          location: 'Cocina principal',
          status: 'Programada',
          tone: 'info',
        },
      ],
    },
    {
      label: 'Logística',
      title: 'Logística',
      site: 'Westport DC · 14 muelles',
      description:
        'Elimine el tiempo de inactividad en muelles de carga y equipos con datos del estado de los activos en tiempo real, vinculados directamente a la planificación de reparaciones.',
      points: [
        'Disponibilidad de muelles y puertas por muelle',
        'Historial de servicio de carretillas y equipos de manutención',
        'Coste de inactividad por activo',
      ],
      tasks: [
        {
          title: 'Fuga hidráulica en rampa niveladora',
          location: 'Muelle 07',
          status: 'Vencida hace 3 h',
          tone: 'overdue',
        },
        {
          title: 'Servicio de puerta rápida',
          location: 'Muelles 1–6',
          status: 'Vence en 6 h',
          tone: 'due',
        },
        {
          title: 'Prueba de caudal de rociadores',
          location: 'Almacén A',
          status: 'Completada',
          tone: 'done',
        },
      ],
    },
    {
      label: 'Residencial',
      title: 'Residencial',
      site: 'Parkside Residences · 4 bloques',
      description:
        'Equilibre el mantenimiento de zonas comunes, la rotación de viviendas y las solicitudes de residentes, y mantenga comunidades seguras, satisfechas y en regla.',
      points: [
        'Solicitudes de residentes desde el móvil',
        'Listas de control para rotación de viviendas',
        'Registros normativos por bloque',
      ],
      tasks: [
        {
          title: 'Grifo con fuga, unidad 3B',
          location: 'Bloque C',
          status: 'Vence en 5 h',
          tone: 'due',
        },
        {
          title: 'Revisión de equipos del gimnasio',
          location: 'Casa club',
          status: 'Completada',
          tone: 'done',
        },
        { title: 'Rotación unidad 7A', location: 'Bloque A', status: 'Programada', tone: 'info' },
      ],
    },
    {
      label: 'Flotas de vehículos',
      title: 'Gestión de flotas',
      site: 'Cochera Metro · 64 vehículos',
      description:
        'Mantenimiento, reparaciones, uso y siniestros en un solo panel, con los datos financieros y operativos sincronizados.',
      points: [
        'Kilometraje, uso y horas de inactividad',
        'Siniestros registrados en campo con fotos',
        'Servicio preventivo por kilometraje',
      ],
      tasks: [
        {
          title: 'Servicio de frenos furgoneta V-218',
          location: 'Cochera, puesto 2',
          status: 'Vence en 3 h',
          tone: 'due',
        },
        {
          title: 'Siniestro n.º 4471',
          location: 'Vinculado: V-102',
          status: 'En revisión',
          tone: 'info',
        },
        {
          title: 'Rotación de neumáticos · 6 unidades',
          location: 'Cochera',
          status: 'Completada',
          tone: 'done',
        },
      ],
    },
  ] satisfies {
    label: string
    title: string
    site: string
    description: string
    points: string[]
    tasks: StatusItem[]
  }[],
}

export const consultancy = {
  eyebrow: 'Consultoría de Fleet',
  title: 'Déjenos el trabajo pesado',
  description:
    'Cada fase está vinculada a un impacto operativo, para que la dirección vea cómo la implantación genera resultados medibles.',
  action: { label: 'Hable con un consultor →', href: '/contact' },
  phases: [
    {
      title: 'Evaluar',
      description:
        'Defina lo que necesita y planifique la transición de herramientas dispersas a una sola plataforma.',
    },
    {
      title: 'Modelar el impacto',
      description:
        'Cuantifique la eficiencia laboral, la inactividad, el mantenimiento preventivo y el rendimiento de los proveedores.',
    },
    {
      title: 'Piloto',
      description:
        'Valide flujos de trabajo y KPI con responsables y equipos de campo antes del despliegue completo.',
    },
    {
      title: 'Desplegar',
      description:
        'Flujos de trabajo estandarizados y gobierno de activos en todos los edificios y regiones.',
    },
  ],
}

export const demoCta = {
  title: 'Vea toda su cartera en un solo lugar',
  description:
    'Cinco edificios de oficinas o cincuenta campus: le mostramos una demostración adaptada a sus sedes y activos.',
  primaryAction: { label: 'Solicitar demo', href: '/contact' },
}
