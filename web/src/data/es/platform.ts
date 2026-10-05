import type { NavLink } from '@/config'
import type { StatusItem } from '@/data/en/home'
import type { OverviewModule, PlatformEntry, PlatformPageContent } from '@/data/en/platform'
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

export const pages: { overview: PlatformEntry; webAndMobile: PlatformEntry } & Record<
  TemplatePageId,
  PlatformPageContent
> = {
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
    eyebrow: 'Integraciones',
    title: 'Conecte Fleet con las herramientas que ya utiliza',
    description:
      'Fleet se integra en su ecosistema tecnológico con más de 20 integraciones y una API REST abierta, para una operación conectada de principio a fin.',
    highlights: ['Más de 20 integraciones', 'API REST abierta', 'Configuración acompañada'],
    features: {
      title: 'Integraciones para toda su operación',
      description:
        'Reúna datos financieros, inmobiliarios y del edificio para que cada equipo trabaje con la misma información.',
      items: [
        {
          title: 'Contabilidad y cuentas por pagar y cobrar',
          description:
            'Sincronice costes, facturas y aprobaciones con sus herramientas financieras para mantener presupuestos exactos.',
        },
        {
          title: 'Sistemas ERP',
          description:
            'Comparta activos, proveedores y compras con su ERP para informes unificados.',
        },
        {
          title: 'Control de accesos',
          description:
            'Conecte sus sistemas de acceso para registrar automáticamente visitas y presencia de proveedores.',
        },
        {
          title: 'Portales de inquilinos',
          description:
            'Convierta las solicitudes de inquilinos en órdenes de trabajo con seguimiento e informe a los ocupantes.',
        },
        {
          title: 'Sistemas de gestión de edificios',
          description:
            'Lleve alarmas y lecturas del BMS a Fleet para generar trabajos en el momento adecuado.',
        },
        {
          title: 'API REST',
          description:
            'Cree conexiones propias con cualquier sistema mediante una API REST documentada y segura.',
        },
      ],
    },
    details: [
      {
        title: 'Finanzas y operaciones sincronizadas',
        description:
          'Mantenimiento y finanzas avanzan alineados, desde el primer presupuesto hasta la última factura.',
        points: [
          'Las aprobaciones de costes llegan directamente a su proceso de cuentas por pagar',
          'Seguimiento presupuestario por edificio, activo y proveedor',
          'Informes exportables para finanzas y consejo',
        ],
      },
      {
        title: 'Seguro desde el diseño',
        description:
          'Cada integración sigue su gobierno de TI, con permisos claros y trazabilidad completa.',
        points: [
          'Datos cifrados en tránsito y en reposo',
          'Puntos de conexión autorizados según sus políticas de TI',
          'Registros de auditoría de cada dato sincronizado',
        ],
      },
    ],
    useCases: {
      title: 'Integraciones en la práctica',
      description:
        'Los equipos conectan Fleet para evitar la doble introducción de datos y mantener cada sistema al día.',
      items: [
        'Enviar los costes de reparación aprobados a su sistema contable',
        'Crear órdenes de trabajo automáticamente a partir de alarmas del BMS',
        'Sincronizar los datos de proveedores entre Fleet y su ERP',
        'Registrar como trabajos las solicitudes del portal de inquilinos',
        'Alimentar sus paneles de BI corporativos con datos de Fleet',
      ],
    },
  },
  runnerAi: {
    label: 'RunnerAI',
    summary: 'Agentes de IA que crean flujos y paneles a partir de lenguaje natural.',
    meta: {
      title: 'RunnerAI | Fleet',
      description:
        'RunnerAI es la IA segura y basada en reglas de Fleet para equipos inmobiliarios y de facility: flujos creados por texto, paneles a petición y operaciones automatizadas.',
    },
    eyebrow: 'RunnerAI',
    title: 'Agentes de IA para el sector inmobiliario y facility management',
    description:
      'RunnerAI crea flujos de trabajo, ofrece análisis y genera paneles a partir de simples comandos de texto, para que sus equipos dediquen más tiempo al trabajo sobre el terreno.',
    highlights: [
      'Comandos en lenguaje natural',
      'Basado en reglas y trazable',
      'Datos aislados por organización',
    ],
    features: {
      title: 'Qué hace RunnerAI',
      description:
        'Inteligencia operativa integrada que anticipa los siguientes pasos, estructura los flujos y muestra el dato adecuado al instante.',
      items: [
        {
          title: 'Flujos por comando de texto',
          description:
            'Escriba lo que necesita y RunnerAI lo convierte en un flujo estandarizado para cada sede.',
        },
        {
          title: 'Ajustes en tiempo real',
          description:
            'Modifique pasos, disparadores y condiciones en segundos y despliéguelos en todas o en algunas regiones.',
        },
        {
          title: 'Plantillas según estándares del sector',
          description:
            'Empiece con flujos de buenas prácticas para su tipo de propiedad, sus activos y su mercado.',
        },
        {
          title: 'Paneles a petición',
          description:
            'Pida cualquier vista, como los equipos al final de su vida útil, y obtenga un panel en vivo en segundos.',
        },
        {
          title: 'Aprendizaje automático basado en reglas',
          description:
            'Las predicciones siguen reglas definidas, de modo que cada acción es trazable, conforme y coherente.',
        },
        {
          title: 'En su idioma',
          description:
            'Cree y ajuste flujos en inglés o en su idioma, adaptados a la normativa local.',
        },
      ],
    },
    details: [
      {
        title: 'Paneles a sus órdenes',
        description:
          'Haga una pregunta y RunnerAI crea el panel con sus datos operativos en vivo, listo para compartir o fijar.',
        points: [
          'Tendencias y acumulación de órdenes de trabajo',
          'Análisis de paradas de activos y puntuación de riesgo de cumplimiento',
          'Rendimiento de proveedores y comparativas regionales',
          'Resúmenes ejecutivos de toda la cartera',
        ],
      },
      {
        title: 'IA dentro de su perímetro',
        description:
          'RunnerAI funciona en servidores dedicados a cada cliente, de modo que los datos sensibles permanecen dentro de su organización.',
        points: [
          'Entornos de cómputo aislados para cada organización',
          'Cifrado en tránsito y en reposo',
          'Registros de auditoría de cada acción generada por la IA',
          'Compatibilidad con RGPD, PDPL, PDPA y despliegue local o híbrido',
        ],
      },
    ],
    useCases: {
      title: 'Pregunte a RunnerAI',
      description:
        'Algunas de las peticiones que los equipos inmobiliarios hacen a RunnerAI cada día.',
      items: [
        'Muéstrame los equipos cerca del final de su vida útil en todas las sedes',
        'Resume la acumulación de órdenes de trabajo de los últimos 30 días',
        'Dame el rendimiento de proveedores en la región de EAU',
        'Crea un panel de riesgos para nuestros 10 principales centros comerciales',
        'Configura una rutina semanal de higiene para cada zona de restauración',
      ],
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
    eyebrow: 'Fleet Mail',
    title: 'Cada correo, un trabajo con seguimiento',
    description:
      'Fleet Mail convierte las solicitudes de inquilinos y proveedores en órdenes de trabajo en cuanto llegan y mantiene informados a equipos y proveedores con correos automáticos.',
    highlights: [
      'Del correo a la orden',
      'Respuestas en el trabajo',
      'Actualizaciones automáticas',
    ],
    features: {
      title: 'Su bandeja de entrada, conectada con la operación',
      description:
        'Solicitudes, respuestas y aprobaciones circulan por un único registro estructurado que todo el equipo puede ver.',
      items: [
        {
          title: 'Del correo a la orden de trabajo',
          description:
            'Cada solicitud entrante se convierte en una orden con su remitente, adjuntos y ubicación.',
        },
        {
          title: 'Historial de conversaciones',
          description:
            'Las respuestas se añaden automáticamente al historial del trabajo y mantienen todo en contexto.',
        },
        {
          title: 'Asignación inteligente',
          description:
            'Las solicitudes llegan al equipo o proveedor adecuado según sede, categoría y prioridad.',
        },
        {
          title: 'Alertas por correo',
          description:
            'Equipos y proveedores reciben asignaciones, vencimientos y recordatorios directamente en su bandeja.',
        },
        {
          title: 'Aprobaciones por correo',
          description:
            'Los responsables aprueban o rechazan costes con un clic desde el propio correo.',
        },
        {
          title: 'Seguimiento para solicitantes',
          description:
            'Los inquilinos reciben confirmación y avances hasta que su solicitud queda resuelta.',
        },
      ],
    },
    details: [
      {
        title: 'Solicitudes organizadas al instante',
        description:
          'Un buzón compartido se convierte en una cola ordenada, con cada solicitud registrada, priorizada y asignada.',
        points: [
          'Fotos y documentos adjuntos a la orden de trabajo',
          'Solicitudes duplicadas agrupadas en un solo trabajo',
          'Tiempos de respuesta medidos según sus SLA',
        ],
      },
      {
        title: 'Avisos que llegan a las personas adecuadas',
        description:
          'Fleet envía el mensaje adecuado en el momento adecuado, para que equipos y proveedores sepan siempre el siguiente paso.',
        points: [
          'Notificaciones de asignación y vencimiento',
          'Escalados cuando se acercan los plazos',
          'Resúmenes de cierre con prueba fotográfica',
        ],
      },
    ],
    useCases: {
      title: 'Fleet Mail en la práctica',
      description: 'El correo funciona como todos esperan, ahora con seguimiento completo.',
      items: [
        'Un inquilino avisa por correo de una luz averiada y se crea un trabajo automáticamente',
        'Un proveedor responde con un presupuesto que queda en el historial del trabajo',
        'Una responsable financiera aprueba un coste de reparación desde su bandeja',
        'Un técnico recibe cada tarde por correo los trabajos del día siguiente',
        'Un responsable regional recibe cada semana un resumen de trabajos vencidos',
      ],
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
    eyebrow: 'Fleet Workflow Builder',
    title: 'Flujos de trabajo que se adaptan a su forma de operar',
    description:
      'Adapte su mantenimiento a su estructura, cadenas de aprobación, políticas de proveedores y umbrales de coste con un editor visual que cualquier persona del equipo puede usar.',
    highlights: ['Editor visual', 'Aprobaciones en varios pasos', 'En marcha la primera semana'],
    features: {
      title: 'Configúrelo una vez y aplíquelo en todas partes',
      description:
        'Usted define el proceso y Fleet lo aplica, para que cada tarea llegue a la persona adecuada en el momento adecuado.',
      items: [
        {
          title: 'Asignación condicional',
          description:
            'Asigne trabajos por sede, tipo, prioridad o categoría de activo, como los ascensores a un proveedor concreto.',
        },
        {
          title: 'Aprobaciones en varios pasos',
          description:
            'Exija la aprobación de dirección o finanzas según el coste, la urgencia o el alcance.',
        },
        {
          title: 'Responsabilidades por rol',
          description:
            'Defina quién puede ver, aprobar, asignar o cerrar tareas: técnicos, supervisores y proveedores.',
        },
        {
          title: 'Notificaciones y escalados',
          description:
            'Avise automáticamente a los equipos cuando se acerca un plazo o un trabajo espera asignación.',
        },
        {
          title: 'Flujos por sede',
          description: 'Adapte cada edificio o región a sus propios procedimientos operativos.',
        },
        {
          title: 'Conectado a todos los módulos',
          description:
            'Los flujos actúan sobre documentos, activos, permisos y proveedores en un solo sistema.',
        },
      ],
    },
    details: [
      {
        title: 'Fácil de configurar, potente en acción',
        description:
          'Arrastre, suelte y publique. Nuestro equipo de incorporación le ayuda a trasladar sus flujos a Fleet durante la primera semana.',
        points: [
          'Editor visual pensado para equipos de operaciones',
          'Plantillas listas para procesos habituales',
          'Pruebas de los cambios antes de desplegarlos',
        ],
      },
      {
        title: 'Coherencia, eficiencia y visibilidad',
        description:
          'Cada trabajo sigue los mismos pasos, lo que mantiene la operación precisa y hace los informes más claros.',
        points: [
          'Pasos de cumplimiento, como revisar documentos, aplicados automáticamente',
          'Menos traspasos manuales de la creación al cierre',
          'Datos estructurados para informes más útiles',
        ],
      },
    ],
    useCases: {
      title: 'Flujos que crean los equipos',
      description: 'Flujos habituales que los equipos inmobiliarios configuran en su primer mes.',
      items: [
        'Fontanería del edificio A a un proveedor y del edificio B al equipo interno',
        'Aprobación del supervisor para cualquier trabajo de más de 5.000 $',
        'Trabajos preventivos a personal dedicado y correctivos a equipos generales',
        'Aviso a los responsables regionales cuando se acercan los plazos del SLA',
        'Proceso de entrada de inquilinos con inspección, revisión de activos y documentos',
      ],
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
    eyebrow: 'Mantenimiento preventivo y predictivo',
    title: 'Siempre un paso por delante de cada avería',
    description:
      'Planifique el mantenimiento recurrente de cada activo y detecte riesgos a tiempo con predicciones basadas en reglas, para que los equipos funcionen y los inquilinos estén satisfechos.',
    highlights: [
      'Planes recurrentes',
      'Predicciones basadas en reglas',
      'Hasta un 40 % menos de correctivo',
    ],
    features: {
      title: 'Planifique el mantenimiento con confianza',
      description:
        'Sus planes de mantenimiento se convierten en programaciones automáticas y los datos en vivo indican dónde actuar después.',
      items: [
        {
          title: 'Planes preventivos recurrentes',
          description:
            'Programe tareas preventivas de climatización, fontanería, iluminación, ascensores e incendios por tiempo o por uso.',
        },
        {
          title: 'Creación automática de trabajos',
          description:
            'Fleet genera las órdenes preventivas a partir del plan de cada activo y las asigna al equipo adecuado.',
        },
        {
          title: 'Alertas predictivas',
          description:
            'Las lecturas por encima de lo habitual generan una alerta trazable con el siguiente paso recomendado.',
        },
        {
          title: 'Plantillas según estándares del sector',
          description:
            'Empiece con listas de comprobación de buenas prácticas para cada tipo de activo y adáptelas a sus sedes.',
        },
        {
          title: 'Planificación de cargas',
          description:
            'Reparta el trabajo entre técnicos y proveedores y vea de un vistazo lo que viene.',
        },
        {
          title: 'Calendario de cumplimiento',
          description:
            'Siga inspecciones reglamentarias y certificados con recordatorios antes de cada vencimiento.',
        },
      ],
    },
    details: [
      {
        title: 'De la programación al trabajo validado',
        description:
          'Cada tarea preventiva incluye su lista de comprobación, el historial del activo y los documentos, para que los técnicos lleguen preparados.',
        points: [
          'Listas de comprobación y procedimientos en cada tarea',
          'Pruebas fotográficas y lecturas registradas al cerrar',
          'Escalado automático de tareas vencidas',
        ],
      },
      {
        title: 'Predicciones que puede rastrear',
        description:
          'El aprendizaje automático basado en reglas de Fleet explica cada recomendación, para que los equipos actúen con seguridad.',
        points: [
          'Riesgo de los equipos evaluado con datos en vivo e históricos',
          'Cada alerta vinculada a la regla que la generó',
          'Un clic de la predicción a la orden de trabajo',
        ],
      },
    ],
    useCases: {
      title: 'Mantenimiento preventivo en la práctica',
      description:
        'Cómo los equipos inmobiliarios mantienen sus sistemas críticos en perfecto estado.',
      items: [
        'Cambio trimestral de filtros de climatización en cada edificio',
        'Certificación anual de ascensores con aviso 30 días antes',
        'Pruebas mensuales de iluminación de emergencia registradas con fotos',
        'Vibración de una enfriadora vigilada con alertas predictivas',
        'Revisiones de puertas cortafuegos programadas por planta y escalera',
      ],
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
    eyebrow: 'Mantenimiento correctivo',
    title: 'Cada reparación, resuelta con rapidez',
    description:
      'Registre las incidencias en cuanto ocurren, envíelas al equipo adecuado y siga cada reparación hasta su cierre según sus SLA.',
    highlights: ['Seguimiento del SLA en vivo', 'Solicitudes con fotos', 'Asignación inteligente'],
    features: {
      title: 'De la solicitud a la solución',
      description:
        'Un camino claro para cada reparación, con las personas adecuadas informadas en cada paso.',
      items: [
        {
          title: 'Registro rápido',
          description:
            'Personal e inquilinos comunican incidencias con fotos, ubicación y prioridad desde cualquier dispositivo.',
        },
        {
          title: 'Asignación inteligente',
          description:
            'Envíe trabajos a equipos internos o proveedores según sede, especialidad y urgencia.',
        },
        {
          title: 'Seguimiento del SLA',
          description:
            'Los tiempos de respuesta y resolución se miden en vivo, con avisos antes de que venza un plazo.',
        },
        {
          title: 'Actualizaciones en tiempo real',
          description:
            'Los técnicos actualizan el estado, añaden notas y suben pruebas desde el terreno.',
        },
        {
          title: 'Aprobación de costes',
          description:
            'Los presupuestos y costes que superan los umbrales llegan automáticamente a quien debe aprobarlos.',
        },
        {
          title: 'Panel central de trabajos',
          description:
            'Siga los trabajos abiertos, vencidos y completados de todas las propiedades en una sola vista.',
        },
      ],
    },
    details: [
      {
        title: 'Cada incidencia, registrada en contexto',
        description:
          'Cada reparación está vinculada a su activo, ubicación e historial, para que los técnicos entiendan el problema antes de llegar.',
        points: [
          'Historial y manuales del activo en cada trabajo',
          'Fotos y vídeos aportados por el solicitante',
          'Trabajos relacionados agrupados automáticamente',
        ],
      },
      {
        title: 'Aprenda de cada reparación',
        description:
          'Los datos del correctivo muestran dónde se repiten las incidencias y ayudan a llevar más trabajo a los planes preventivos.',
        points: [
          'Incidencias recurrentes destacadas por edificio y activo',
          'Costes de reparación por sede, especialidad y proveedor',
          'Conclusiones que dan forma a su plan preventivo',
        ],
      },
    ],
    useCases: {
      title: 'Mantenimiento correctivo en la práctica',
      description: 'Reparaciones del día a día resueltas con rapidez y total visibilidad.',
      items: [
        'Una fuga en la vivienda 3B registrada con fotos y reparada el mismo día',
        'La reparación de una puerta de muelle enviada al proveedor contratado',
        'Una alarma de enfriadora escalada al técnico de guardia',
        'Una reparación costosa enviada a finanzas para su aprobación',
        'El rendimiento del SLA revisado cada mes por edificio',
      ],
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
    eyebrow: 'Análisis e informes',
    title: 'Decisiones operativas mejor fundamentadas',
    description:
      'Fleet convierte el mantenimiento diario en información útil, con paneles en vivo e informes exportables para cada equipo, sede y activo.',
    highlights: ['Paneles en vivo', 'Indicadores a medida', 'Exportación con un clic'],
    features: {
      title: 'Información en cada nivel',
      description:
        'Desde un solo activo hasta toda la cartera, vea qué ocurre y dónde centrarse a continuación.',
      items: [
        {
          title: 'Métricas en vivo',
          description:
            'Siga el volumen de trabajos, los tiempos de respuesta, el cumplimiento y los costes a medida que cambian.',
        },
        {
          title: 'Paneles a medida',
          description:
            'Cree vistas para cada departamento y rol, desde los técnicos hasta la dirección.',
        },
        {
          title: 'Análisis en detalle',
          description:
            'Explore el rendimiento por edificio, activo, proveedor o equipo en pocos clics.',
        },
        {
          title: 'Seguimiento presupuestario',
          description:
            'Vea el gasto por centro de coste y compárelo con el presupuesto de cada sede.',
        },
        {
          title: 'Informes exportables',
          description:
            'Exporte informes para auditorías, consejos o reuniones de equipo cuando lo necesite.',
        },
        {
          title: 'Paneles generados por IA',
          description:
            'Haga una pregunta a RunnerAI y obtenga un panel listo a partir de sus datos en vivo.',
        },
      ],
    },
    details: [
      {
        title: 'Descubra qué impulsa el rendimiento',
        description:
          'Vea qué edificios tienen incidencias recurrentes, qué activos consumen más presupuesto y qué equipos cumplen sus SLA.',
        points: [
          'Análisis de incidencias recurrentes por sede y activo',
          'Rendimiento del SLA por equipo y proveedor',
          'Información sobre paradas y ciclo de vida de los activos',
        ],
      },
      {
        title: 'Informes listos cuando los necesite',
        description:
          'Comparta las cifras adecuadas con las personas adecuadas, a tiempo y en el formato que necesitan.',
        points: [
          'Informes programados enviados por correo',
          'Exportaciones para auditorías y documentación del consejo',
          'Resúmenes ejecutivos de toda la cartera',
        ],
      },
    ],
    useCases: {
      title: 'Informes en la práctica',
      description: 'Preguntas que los equipos inmobiliarios responden cada semana con Fleet.',
      items: [
        'Qué sedes tuvieron más paradas de climatización el último trimestre',
        'Cómo se comparan los tiempos de respuesta de los proveedores entre regiones',
        'Dónde supera el gasto de mantenimiento al presupuesto este año',
        'Qué activos deben entrar en la planificación de sustitución',
        'Cómo ha mejorado el cumplimiento del SLA desde la implantación',
      ],
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
