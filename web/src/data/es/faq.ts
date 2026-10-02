export type FaqItem = {
  question: string
  answer: string
  points?: string[]
}

export const faqPage = {
  meta: {
    title: 'Preguntas frecuentes | Fleet',
    description:
      'Respuestas a las preguntas más habituales sobre Fleet: qué hace, para quién es, implantación, seguridad, integraciones y precios.',
  },
  eyebrow: 'Preguntas frecuentes',
  title: 'Respondemos a sus preguntas',
  description:
    'Todo lo que los equipos suelen preguntar antes de pasarse a Fleet. ¿No encuentra lo que busca? Escríbanos.',
  items: [
    {
      question: '¿Qué es Fleet?',
      answer:
        'Fleet es una plataforma inmobiliaria en la nube creada para simplificar la gestión de instalaciones, el mantenimiento y las operaciones en múltiples ubicaciones. Además de un CMMS/CAFM completo, ayuda a los equipos a gestionar órdenes de trabajo, activos, proveedores, inquilinos, facturación y cobros desde un panel centralizado de gestión de instalaciones.',
    },
    {
      question: '¿Fleet es un GMAO o un CAFM?',
      answer:
        'Fleet nació como un GMAO (gestión de mantenimiento asistido por ordenador) en la nube y hoy incluye las principales funciones de un CAFM (gestión de instalaciones asistida por ordenador). Hemos crecido hasta convertirnos en la plataforma líder de operaciones inmobiliarias, que une mantenimiento, gestión de activos, documentación, coordinación de proveedores mediante flujos de trabajo personalizados y seguimiento del cumplimiento con registros de auditoría.',
    },
    {
      question: '¿Para quién está pensado Fleet?',
      answer:
        'Fleet está diseñado para operadores con múltiples ubicaciones en los sectores inmobiliario, comercio, logística, hostelería, educación y salud, incluidos casos de uso específicos como centros comerciales y comercio minorista, hostelería y restauración, transporte marítimo y logística, y comunidades residenciales.',
    },
    {
      question: '¿Cómo ayuda Fleet a reducir el tiempo de inactividad?',
      answer:
        'Fleet permite programar el mantenimiento preventivo, seguir los trabajos en tiempo real y enviar alertas al instante, todo desde la gestión de instalaciones. Así se reducen las reparaciones reactivas y la disponibilidad se mantiene alta.',
    },
    {
      question: '¿Fleet funciona en varias propiedades o ubicaciones?',
      answer:
        'Sí. La gestión multiubicación de Fleet le permite gestionar y seguir el mantenimiento por edificios, zonas o regiones enteras, con permisos por ubicación.',
    },
    {
      question: '¿Fleet funciona bien en dispositivos móviles?',
      answer:
        'Por supuesto. Fleet es una plataforma pensada primero para el móvil, compatible con iOS y Android. Registre, asigne y siga trabajos desde cualquier dispositivo en tiempo real.',
    },
    {
      question: '¿Fleet se integra con nuestros sistemas actuales?',
      answer:
        'Sí. Fleet ofrece integraciones flexibles con los principales sistemas de cuentas por pagar y por cobrar, herramientas financieras, software ERP y portales de proveedores.',
    },
    {
      question: '¿Qué tipos de mantenimiento puedo gestionar con Fleet?',
      answer:
        'Puede gestionar mantenimiento correctivo, programado y predictivo, además de inspecciones, auditorías, servicios de proveedores y aprobaciones de costes.',
    },
    {
      question: '¿Cómo ayuda Fleet en la gestión de activos?',
      answer:
        'Fleet crea un perfil digital para cada activo y registra su ciclo de vida, historial de costes, garantías y uso por ubicación en la gestión de activos.',
    },
    {
      question: '¿Podemos asignar distintos niveles de acceso a los usuarios?',
      answer:
        'Sí. Fleet incluye permisos por rol para técnicos, responsables, proveedores y administradores.',
    },
    {
      question: '¿Fleet permite almacenar documentos?',
      answer:
        'Sí. Suba manuales, garantías, registros de servicio y listas de comprobación de seguridad y vincúlelos directamente a activos o tickets de trabajo, accesibles desde la gestión documental.',
    },
    {
      question: '¿Cómo ayuda Fleet con el cumplimiento normativo y las auditorías?',
      answer:
        'Fleet registra y almacena el historial de trabajos, los cambios en documentos y los cierres con trazabilidad completa en los registros de auditoría, lo que facilita el cumplimiento.',
    },
    {
      question: '¿Qué diferencia a Fleet de otros GMAO?',
      answer:
        'Fleet está diseñado específicamente para equipos inmobiliarios con múltiples ubicaciones y ofrece acceso móvil sin aplicación, una implantación rápida, precios según el uso e informes completos creados para equipos inmobiliarios, no para fábricas.',
    },
    {
      question: '¿Hay una prueba gratuita o una demo?',
      answer:
        'Sí. Reserve una demo personalizada gratuita para ver cómo Fleet se adapta a los procesos y al sector de su equipo.',
    },
    {
      question: '¿Cuánto se tarda en implantar Fleet?',
      answer:
        'La mayoría de los equipos implantan Fleet en menos de 7 días, con acceso completo para proveedores y flujos de trabajo listos.',
    },
    {
      question: '¿Es seguro Fleet?',
      answer:
        'Sí. Fleet utiliza una infraestructura en la nube segura y un tratamiento cifrado de los datos, con registros de acceso y trazabilidad de los usuarios.',
    },
    {
      question: '¿Fleet admite el mantenimiento preventivo planificado (PPM)?',
      answer:
        'Sí. Cree calendarios recurrentes, vincúlelos a activos o ubicaciones y supervise su cumplimiento con alertas en el panel.',
    },
    {
      question: '¿Qué incluyen los informes de Fleet?',
      answer:
        'Fleet incluye paneles en tiempo real, informes exportables, seguimiento presupuestario y KPI personalizados para analizar el rendimiento.',
    },
    {
      question: '¿Puede Fleet ayudarnos a reducir los costes operativos?',
      answer: 'Sí. Fleet reduce los costes operativos al:',
      points: [
        'Recortar los retrasos de los técnicos',
        'Reducir los costes de administradores de fincas externos (a menudo entre el 6 y el 8 % de los ingresos)',
        'Prolongar la vida útil de los activos y seguir su rendimiento',
      ],
    },
    {
      question: '¿Puedo gestionar varios proveedores con Fleet?',
      answer:
        'Sí. Invite, etiquete, asigne y supervise los trabajos de proveedores con notificaciones automáticas y registros de servicio.',
    },
    {
      question: '¿Fleet admite distintos idiomas y regiones?',
      answer:
        'Sí. Fleet lo utilizan equipos de Asia, Europa y Norteamérica, con soporte multilingüe y zonas horarias locales.',
    },
    {
      question: '¿Podemos migrar desde otro GMAO o CAFM?',
      answer:
        'Sí. Fleet ofrece migraciones a medida, como la importación de datos de activos, la sincronización por API y cargas manuales con acompañamiento.',
    },
    {
      question: '¿Fleet gestiona inventario o repuestos?',
      answer:
        'Próximamente. Fleet está desarrollando funciones para repuestos, registros de inventario y alertas de existencias según el consumo.',
    },
    {
      question: '¿Qué sectores sacan más partido a Fleet?',
      answer: 'Fleet es ideal para:',
      points: [
        'Centros comerciales y cadenas minoristas',
        'Hostelería y restauración',
        'Transporte marítimo, logística y nodos de transporte',
        'Comunidades residenciales y de uso mixto',
      ],
    },
    {
      question: '¿Cómo puedo contactar con Fleet para obtener más información?',
      answer:
        'Puede reservar una demo, visitar nuestra página de contacto o escribir directamente a nuestro equipo por correo electrónico.',
    },
  ] satisfies FaqItem[],
  cta: {
    title: '¿Aún tiene preguntas?',
    description: 'Hable con el equipo de Fleet sobre sus ubicaciones, activos y procesos.',
    primaryAction: { label: 'Solicitar demo', href: '/contact' },
    secondaryAction: { label: 'Explorar la plataforma', href: '/#platform' },
  },
}
