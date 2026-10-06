import type { NavLink } from '@/config'
import type { StatusItem } from '@/data/en/home'
import type {
  IntegrationCategory,
  IntegrationIcon,
  IntegrationItem,
  OverviewModule,
  PlatformEntry,
  PlatformPageContent,
  PreventiveIcon,
  RunnerAiIcon,
} from '@/data/en/platform'
import type { PlatformDetailId, PlatformGroup, TemplatePageId } from '@/platform'

export const menu = {
  label: 'Plattform',
  groups: {
    platform: 'RunFleet-Plattform',
    features: 'Kernfunktionen',
  } satisfies Record<PlatformGroup, string>,
  promo: {
    title: 'Fleet in Aktion erleben',
    description: 'Eine geführte Tour durch die Plattform, abgestimmt auf Ihr Portfolio.',
    action: { label: 'Demo buchen', href: '/contact' } satisfies NavLink,
  },
}

export const pageActions = {
  primary: { label: 'Demo buchen', href: '/contact' },
  secondary: { label: 'Plattform entdecken', href: '/platform' },
} satisfies Record<string, NavLink>

export const sectionLabels = {
  features: 'Kernfunktionen',
  useCases: 'Anwendungsfälle',
  related: 'Mehr entdecken',
  relatedTitle: 'Mehr von der Fleet-Plattform',
  learnMore: 'Mehr erfahren',
}

export const cta = {
  title: 'Fleet in Aktion erleben',
  description:
    'Buchen Sie eine Tour und sehen Sie, wie Fleet jeden Standort, jede Anlage und jeden Arbeitsauftrag an einem Ort vereint.',
  primaryAction: { label: 'Demo buchen', href: '/contact' },
  secondaryAction: { label: 'Mit unserem Team sprechen', href: '/contact' },
}

export const pages: {
  overview: PlatformEntry
  webAndMobile: PlatformEntry
  integrations: PlatformEntry
  runnerAi: PlatformEntry
  fleetMail: PlatformEntry
  workflowBuilder: PlatformEntry
  preventiveMaintenance: PlatformEntry
} & Record<TemplatePageId, PlatformPageContent> = {
  overview: {
    label: 'Überblick',
    summary: 'Eine Plattform für Instandhaltung, Anlagen und Betrieb an jedem Standort.',
    meta: {
      title: 'Plattformüberblick | Fleet',
      description:
        'Fleet ist die All-in-one-Plattform für Instandhaltung und Betrieb für Immobilien-, Facility- und Betriebsteams, die Anlagen über mehrere Objekte hinweg verwalten.',
    },
  },
  webAndMobile: {
    label: 'Web & Mobil',
    summary: 'Den Betrieb vom Büro aus steuern oder direkt im Technikraum.',
    meta: {
      title: 'Web & Mobil | Fleet',
      description:
        'Fleet läuft auf Desktop, Tablet und Smartphone mit iOS- und Android-Unterstützung, sodass Techniker und Manager überall dieselben Live-Daten nutzen.',
    },
  },
  integrations: {
    label: '20+ Integrationen',
    summary: 'Fleet mit Finanz-, ERP-, Zutritts- und Gebäudesystemen verbinden.',
    meta: {
      title: 'Integrationen | Fleet',
      description:
        'Fleet verbindet sich über mehr als 20 Integrationen und eine REST-API mit Buchhaltungs- und Kreditorensystemen, ERP, Zutrittskontrolle, Mieterportalen und Gebäudeleittechnik.',
    },
  },
  runnerAi: {
    label: 'RunnerAI',
    summary: 'KI, die Daten abruft, Aufgaben erstellt, Workflows bearbeitet und Dashboards baut.',
    meta: {
      title: 'RunnerAI | Fleet',
      description:
        'RunnerAI ist die sichere, regelbasierte KI von Fleet für Immobilien- und Facility-Teams: Workflows per Text erstellen, Dashboards auf Anfrage erzeugen und den Betrieb automatisieren.',
    },
  },
  fleetMail: {
    label: 'Fleet Mail',
    summary: 'E-Mails in Arbeitsaufträge verwandeln und alle per E-Mail informieren.',
    meta: {
      title: 'Fleet Mail | Fleet',
      description:
        'Fleet Mail verwandelt eingehende E-Mails von Mietern und Dienstleistern in verfolgte Arbeitsaufträge und verschickt Benachrichtigungen, Freigaben und Erinnerungen per E-Mail.',
    },
  },
  workflowBuilder: {
    label: 'Fleet Workflow Builder',
    summary: 'Freigaben, Zuweisungen und Eskalationen passend zu Ihren Abläufen gestalten.',
    meta: {
      title: 'Fleet Workflow Builder | Fleet',
      description:
        'Gestalten Sie Ihre Instandhaltung mit dem visuellen Workflow Builder von Fleet passend zu Struktur, Freigabeketten, Dienstleisterrichtlinien und Kostengrenzen.',
    },
  },
  preventiveMaintenance: {
    label: 'Vorbeugende & vorausschauende Instandhaltung',
    summary: 'Wiederkehrende Arbeiten planen und auf frühe Warnsignale reagieren.',
    meta: {
      title: 'Vorbeugende & vorausschauende Instandhaltung | Fleet',
      description:
        'Planen Sie vorbeugende Instandhaltung für jede Anlage und nutzen Sie regelbasierte Vorhersagen, um vor Ausfällen zu handeln, an jedem Standort Ihres Portfolios.',
    },
  },
  reactiveMaintenance: {
    label: 'Reaktive Instandhaltung',
    summary: 'Ungeplante Reparaturen schnell erfassen, zuweisen und erledigen.',
    meta: {
      title: 'Reaktive Instandhaltung | Fleet',
      description:
        'Verfolgen Sie Ad-hoc-Reparaturen von der Meldung bis zur Erledigung mit mobilen Updates, intelligenter Zuweisung und SLA-Verfolgung in Echtzeit an jedem Objekt.',
    },
    eyebrow: 'Reaktive Instandhaltung',
    title: 'Jede Reparatur schnell erledigt',
    description:
      'Erfassen Sie ungeplante Störungen sofort, leiten Sie sie an das richtige Team weiter und verfolgen Sie jede Reparatur bis zum Abschluss anhand Ihrer SLAs.',
    highlights: ['SLA-Verfolgung in Echtzeit', 'Meldungen mit Fotos', 'Intelligente Zuweisung'],
    features: {
      title: 'Von der Meldung zur Lösung',
      description:
        'Ein klarer Weg für jede Reparatur, mit den richtigen Personen bei jedem Schritt informiert.',
      items: [
        {
          title: 'Schnelle Erfassung',
          description:
            'Mitarbeitende und Mieter melden Störungen mit Fotos, Standort und Priorität von jedem Gerät.',
        },
        {
          title: 'Intelligente Zuweisung',
          description:
            'Aufträge je nach Standort, Gewerk und Dringlichkeit an interne Teams oder Dienstleister leiten.',
        },
        {
          title: 'SLA-Verfolgung',
          description:
            'Reaktions- und Lösungszeiten werden live gemessen, mit Warnungen vor Ablauf einer Frist.',
        },
        {
          title: 'Updates in Echtzeit',
          description:
            'Techniker aktualisieren den Status, ergänzen Notizen und laden Nachweise direkt vor Ort hoch.',
        },
        {
          title: 'Kostenfreigaben',
          description:
            'Angebote und Kosten über festgelegten Grenzen gehen automatisch an die richtige Freigabestelle.',
        },
        {
          title: 'Zentrales Auftrags-Dashboard',
          description:
            'Offene, überfällige und erledigte Aufträge aller Objekte in einer Ansicht verfolgen.',
        },
      ],
    },
    details: [
      {
        title: 'Jede Störung im Kontext erfasst',
        description:
          'Jede Reparatur ist mit Anlage, Standort und Historie verknüpft, sodass Techniker das Problem schon vor der Ankunft verstehen.',
        points: [
          'Anlagenhistorie und Handbücher an jedem Auftrag',
          'Foto- und Videonachweise der meldenden Person',
          'Zusammenhängende Aufträge automatisch gruppiert',
        ],
      },
      {
        title: 'Aus jeder Reparatur lernen',
        description:
          'Reaktive Daten zeigen, wo Störungen wiederkehren, und helfen, mehr Arbeit in vorbeugende Pläne zu verlagern.',
        points: [
          'Wiederkehrende Störungen nach Gebäude und Anlage hervorgehoben',
          'Reparaturkosten nach Standort, Gewerk und Dienstleister verfolgt',
          'Erkenntnisse, die Ihren Wartungsplan prägen',
        ],
      },
    ],
    useCases: {
      title: 'Reaktive Instandhaltung in der Praxis',
      description: 'Alltägliche Reparaturen mit Tempo und voller Transparenz erledigt.',
      items: [
        'Ein Wasserschaden in Einheit 3B mit Fotos gemeldet und am selben Tag behoben',
        'Die Reparatur eines Ladetors an den Vertragsdienstleister geleitet',
        'Ein Alarm der Kältemaschine an den Bereitschaftstechniker eskaliert',
        'Eine teure Reparatur zur Freigabe an die Finanzabteilung gesendet',
        'Die SLA-Leistung monatlich pro Gebäude ausgewertet',
      ],
    },
  },
  analyticsReporting: {
    label: 'Analysen und Berichte',
    summary: 'Live-Dashboards und exportierbare Berichte für jede Unternehmensebene.',
    meta: {
      title: 'Analysen und Berichte | Fleet',
      description:
        'Treffen Sie datenbasierte Entscheidungen mit Live-Dashboards, eigenen KPIs und exportierbaren Berichten zu Auftragsvolumen, Reaktionszeiten, Compliance und Kosten.',
    },
    eyebrow: 'Analysen und Berichte',
    title: 'Fundierte Entscheidungen im Betrieb',
    description:
      'Fleet macht aus der täglichen Instandhaltung umsetzbare Erkenntnisse, mit Live-Dashboards und exportierbaren Berichten für jedes Team, jeden Standort und jede Anlage.',
    highlights: ['Live-Dashboards', 'Eigene KPIs', 'Export mit einem Klick'],
    features: {
      title: 'Erkenntnisse auf jeder Ebene',
      description:
        'Von der einzelnen Anlage bis zum gesamten Portfolio sehen, was passiert und worauf es als Nächstes ankommt.',
      items: [
        {
          title: 'Live-Kennzahlen',
          description:
            'Auftragsvolumen, Reaktionszeiten, Compliance und Kosten verfolgen, während sie sich ändern.',
        },
        {
          title: 'Eigene Dashboards',
          description:
            'Ansichten für jede Abteilung und Rolle bauen, vom Techniker bis zur Geschäftsleitung.',
        },
        {
          title: 'Drill-down-Analysen',
          description:
            'Leistung nach Gebäude, Anlage, Dienstleister oder Team mit wenigen Klicks untersuchen.',
        },
        {
          title: 'Budgetverfolgung',
          description:
            'Ausgaben nach Kostenstelle sehen und mit dem Budget aller Standorte vergleichen.',
        },
        {
          title: 'Exportierbare Berichte',
          description:
            'Berichte für Audits, Gremien oder Team-Besprechungen jederzeit exportieren.',
        },
        {
          title: 'KI-generierte Dashboards',
          description:
            'RunnerAI eine Frage stellen und ein fertiges Dashboard aus Ihren Live-Daten erhalten.',
        },
      ],
    },
    details: [
      {
        title: 'Sehen, was die Leistung bestimmt',
        description:
          'Erkennen Sie, welche Gebäude wiederkehrende Störungen haben, welche Anlagen das meiste Budget binden und welche Teams ihre SLAs erfüllen.',
        points: [
          'Analyse wiederkehrender Störungen nach Standort und Anlage',
          'SLA-Leistung nach Team und Dienstleister',
          'Erkenntnisse zu Ausfällen und Lebenszyklus von Anlagen',
        ],
      },
      {
        title: 'Berichte, wann Sie sie brauchen',
        description:
          'Die richtigen Zahlen pünktlich und im passenden Format mit den richtigen Personen teilen.',
        points: [
          'Geplante Berichte per E-Mail',
          'Exporte für Audits und Gremienunterlagen',
          'Portfolioweite Zusammenfassungen für die Geschäftsleitung',
        ],
      },
    ],
    useCases: {
      title: 'Berichte in der Praxis',
      description: 'Fragen, die Immobilienteams jede Woche mit Fleet beantworten.',
      items: [
        'Welche Standorte im letzten Quartal die meisten Klimaausfälle hatten',
        'Wie sich die Reaktionszeiten der Dienstleister zwischen Regionen unterscheiden',
        'Wo die Instandhaltungskosten in diesem Jahr über dem Budget liegen',
        'Welche Anlagen für die Ersatzplanung anstehen',
        'Wie sich die SLA-Erfüllung seit der Einführung verbessert hat',
      ],
    },
  },
  assetManagement: {
    label: 'Anlagenmanagement',
    summary: 'Ein Live-Verzeichnis aller Anlagen mit Historie, Kosten und Dokumenten.',
    meta: {
      title: 'Anlagenmanagement | Fleet',
      description:
        'Erstellen Sie ein digitales Live-Verzeichnis aller Anlagen Ihrer Objekte, mit Wartungshistorie, Kosten, Garantien und Dokumenten an einem Ort.',
    },
    eyebrow: 'Anlagenmanagement',
    title: 'Volle Transparenz über jede Anlage',
    description:
      'Von Klimaanlagen in Dutzenden Gebäuden bis zu Pumpen, Aufzügen und Beleuchtung: Fleet bietet Ihnen ein Live-Verzeichnis jeder Anlage, überall abrufbar.',
    highlights: [
      'Digitale Anlagenprofile',
      'Vollständige Reparaturhistorie',
      'Garantie-Erinnerungen',
    ],
    features: {
      title: 'Kernfunktionen des Fleet-Anlagenmanagements',
      description:
        'Ihre Anlagendaten werden zum Motor für Effizienz, Budgetierung und vorausschauende Planung.',
      items: [
        {
          title: 'Digitale Anlagenprofile',
          description:
            'Hersteller, Modell, Seriennummer, Standort, Kaufdatum und Garantiedaten erfassen.',
        },
        {
          title: 'Dateien und Dokumentation',
          description:
            'Handbücher, Fotos, Prüfberichte und Zertifikate mit jeder Anlage verknüpfen.',
        },
        {
          title: 'Reparaturhistorie und Kosten',
          description:
            'Sehen, was wie oft und zu welchen Kosten erledigt wurde, für jede Anlage im Portfolio.',
        },
        {
          title: 'Standorte und Zonen',
          description:
            'Anlagen nach Gebäude, Etage, Raum oder Zone ordnen, ideal für mehrere Standorte.',
        },
        {
          title: 'Verknüpfte Aufträge und Wartungspläne',
          description:
            'Jede Anlage mit ihrem Wartungsplan verbinden und Wartungsaufträge automatisch erzeugen.',
        },
        {
          title: 'Lebenszyklus und Ausfallzeiten',
          description:
            'Leistungsschwache Technik erkennen, Ersatz prognostizieren und Investitionen planen.',
        },
      ],
    },
    details: [
      {
        title: 'Ihre Anlagen überall im Zugriff',
        description:
          'Techniker rufen Anlagendaten vor Ort auf, erfassen Prüfungen in Echtzeit und fügen Fotos und Notizen per Smartphone hinzu.',
        points: [
          'Jede Anlage per Suche oder Scan öffnen',
          'Prüfergebnisse direkt vor Ort erfasst',
          'Historie sofort für das ganze Team aktualisiert',
        ],
      },
      {
        title: 'Bessere Daten für bessere Instandhaltung',
        description:
          'Genaue, gut strukturierte Anlagendaten verlängern die Lebensdauer von Technik und sorgen für sichere Budgets.',
        points: [
          'Erinnerungen vor Ablauf von Garantien und Verträgen',
          'Leistungsberichte für die Jahresbudgetierung',
          'Ersatzprognosen auf Basis realer Nutzung',
        ],
      },
    ],
    useCases: {
      title: 'Anlagenmanagement in der Praxis',
      description:
        'Von Immobilienportfolios bis zu Hotelketten nutzen Teams Fleet, um ihre kritischste Infrastruktur zu verstehen.',
      items: [
        'Klimaanlagendaten mehrerer Bürogebäude zentral bündeln',
        'Bestimmte Anlagen für regelmäßige Prüfungen an Techniker vor Ort vergeben',
        'Aufzugswartung mit Fotoprotokollen und Zertifikaten nachverfolgen',
        'Leistungsberichte für die Jahresbudgetierung exportieren',
        'Rechtzeitig vor Ablauf von Garantien oder Verträgen informiert werden',
      ],
    },
  },
  documentManagement: {
    label: 'Dokumentenmanagement',
    summary: 'Jedes Handbuch, jede Genehmigung und jedes Zertifikat geordnet und prüfbereit.',
    meta: {
      title: 'Dokumentenmanagement | Fleet',
      description:
        'Speichern, ordnen und finden Sie Handbücher, Garantien, Genehmigungen und Prüfberichte an einem Ort, verknüpft mit den zugehörigen Anlagen, Aufträgen und Standorten.',
    },
    eyebrow: 'Dokumentenmanagement',
    title: 'Alle Instandhaltungsdateien an einem zentralen Ort',
    description:
      'Garantien, Dienstleisterverträge, Compliance-Checklisten und Arbeitsanweisungen liegen an einem Ort, verknüpft mit der Arbeit, die sie unterstützen, und sofort griffbereit.',
    highlights: ['Versionierung', 'Mit Anlagen und Aufträgen verknüpft', 'Prüfbereite Exporte'],
    features: {
      title: 'Kernfunktionen des Fleet-Dokumentenmanagements',
      description: 'Alle relevanten Unterlagen direkt dort, wo sie gebraucht werden.',
      items: [
        {
          title: 'Versionierung und Prüfpfad',
          description:
            'Sehen, wer was wann hochgeladen hat, mit vollständiger Änderungshistorie und einfacher Wiederherstellung.',
        },
        {
          title: 'Dateien überall anhängen',
          description:
            'Dokumente mit Anlagen, Aufträgen, Standorten, Dienstleistern oder Personen verknüpfen.',
        },
        {
          title: 'Schlagworte und Kategorien',
          description:
            'Dateien nach Typ, Standort, Abteilung oder Anlagenklasse kennzeichnen und schnell finden.',
        },
        {
          title: 'Rollenbasierte Berechtigungen',
          description:
            'Festlegen, wer Dokumente sehen, hochladen oder bearbeiten darf, und sensible Dateien schützen.',
        },
        {
          title: 'Dokumente im Arbeitsauftrag',
          description:
            'Techniker öffnen Arbeitsanweisungen, Installationsanleitungen und frühere Berichte direkt im Auftrag.',
        },
        {
          title: 'Exportieren und teilen',
          description:
            'Dokumentenpakete für Audits, Dienstleisterwechsel oder interne Prüfungen herunterladen.',
        },
      ],
    },
    details: [
      {
        title: 'Eingebettet in Ihre Instandhaltung',
        description:
          'Jede Datei ist über die globale Suche auffindbar und mit Ihren Dashboards und Berichten verknüpft.',
        points: [
          'Globale Suche über alle Standorte',
          'Dokumente mit Anlagen, Aufträgen und Dienstleistern verknüpft',
          'Speicher direkt in Fleet integriert',
        ],
      },
      {
        title: 'Jederzeit bereit für die Prüfung',
        description:
          'Zertifikate, Genehmigungen und Berichte bleiben aktuell, mit Erinnerungen vor jedem Ablaufdatum.',
        points: [
          'Ablaufverfolgung für Genehmigungen und Verträge',
          'Protokolle mit Zeitstempel für die Compliance',
          'Schneller Zugriff in Notfällen und bei Audits',
        ],
      },
    ],
    useCases: {
      title: 'Dokumentenmanagement in der Praxis',
      description: 'Für Teams, die mehrere Standorte, Anlagentypen und Dienstleister betreuen.',
      items: [
        'Arbeitsanweisungen zur Aufzugswartung für Techniker vor Ort hochladen',
        'Brandschutzzertifikate mit Compliance-Workflows verknüpfen',
        'Dienstleisterverträge speichern und Laufzeiten verfolgen',
        'Budgetfreigaben für volle Nachvollziehbarkeit an Aufträge anhängen',
        'Digitale Handbücher für Klima, Sanitär und Beleuchtung pflegen',
      ],
    },
  },
  auditTracking: {
    label: 'Audit-Tracking & Inspektionen',
    summary: 'Protokolle mit Zeitstempel und Inspektionen, die jeden Standort prüfbereit halten.',
    meta: {
      title: 'Audit-Tracking & Inspektionen | Fleet',
      description:
        'Führen Sie detaillierte Protokolle mit Zeitstempel zu jeder Aktion und digitale Inspektionen, damit jeder Standort für Arbeitsschutzprüfungen und Compliance-Audits bereit ist.',
    },
    eyebrow: 'Audit-Tracking & Inspektionen',
    title: 'Konform bleiben. Verantwortung zeigen.',
    description:
      'Fleet dokumentiert, was wann von wem erledigt wurde, und führt Ihre Inspektionen digital durch, damit jeder Standort für jedes interne oder externe Audit bereit ist.',
    highlights: [
      'Protokolle mit Zeitstempel',
      'Digitale Inspektionen',
      'Exportierbare Auditberichte',
    ],
    features: {
      title: 'Kernfunktionen des Audit-Trackings',
      description: 'Audit-Bereitschaft als fester Teil des Betriebsalltags, im Hintergrund.',
      items: [
        {
          title: 'Aktivitätsprotokolle mit Zeitstempel',
          description:
            'Jede Aktion wird automatisch erfasst, von der Auftragserstellung bis zum Abschluss und zu Kommentaren.',
        },
        {
          title: 'Klare Verantwortlichkeit',
          description:
            'Aktionen nach Person oder Rolle verfolgen, vom Abschluss durch Techniker bis zur Kostenfreigabe.',
        },
        {
          title: 'Digitale Inspektionen',
          description:
            'Prüfchecklisten mobil mit Fotos, Messwerten und Unterschriften durchführen.',
        },
        {
          title: 'Protokolle je Auftrag und Anlage',
          description:
            'Für jede Anlage und jeden Auftrag die vollständige Historie, Kosten und Dokumente einsehen.',
        },
        {
          title: 'Konfigurierbare Freigaben',
          description:
            'Pflicht-Prüfpunkte festlegen, damit Compliance-Schritte an jedem Standort gleich ablaufen.',
        },
        {
          title: 'Exportierbare Auditberichte',
          description:
            'Detaillierte Protokolle für jeden Zeitraum oder Anlagentyp mit wenigen Klicks erzeugen.',
        },
      ],
    },
    details: [
      {
        title: 'Jeden Tag prüfbereit',
        description:
          'Fleet stellt Ihre Nachweise zusammen, während gearbeitet wird, sodass die Prüfungswoche ruhig und gut vorbereitet verläuft.',
        points: [
          'Zertifikate und Compliance-Formulare an jedem Datensatz',
          'Prüfergebnisse mit Anlagen und Standorten verknüpft',
          'Lückenlose digitale Dokumentation für Objektübergaben',
        ],
      },
      {
        title: 'Klare Kontrolle über Zuständigkeiten',
        description:
          'Rollenbasierte Zugriffe schützen kritische Felder und geben Aufsichtsteams volle Transparenz.',
        points: [
          'Bearbeitungsrechte für autorisierte Personen',
          'Leserechte für Leitung und Prüfer',
          'Änderungsprotokolle mit Notizen und Versionshistorie',
        ],
      },
    ],
    useCases: {
      title: 'Audit-Tracking in der Praxis',
      description:
        'Von einem Standort bis zu hundert: Fleet zeigt, dass Ihr Team die richtige Arbeit beständig leistet.',
      items: [
        'Nachweisen, dass Routineprüfungen an allen Standorten pünktlich erfolgt sind',
        'Behörden die Wartungshistorie des Brandschutzes zeigen',
        'Sehen, wer eine teure Reparatur freigegeben hat',
        'Eine digitale Dokumentation bei Objektübergaben bereitstellen',
        'Protokolle für die jährliche Compliance-Prüfung exportieren',
      ],
    },
  },
}

export const overview = {
  hero: {
    eyebrow: 'Die Fleet-Plattform',
    title: 'Die All-in-one-Plattform für die Instandhaltung von Immobilien',
    description:
      'Arbeitsaufträge, Anlagen, Dienstleister, Dokumente und Compliance für jedes Objekt in einer Cloud-Plattform, entwickelt für Immobilien-, Facility- und Betriebsteams.',
    primaryAction: { label: 'Demo buchen', href: '/contact' },
    secondaryAction: { label: 'Mit unserem Team sprechen', href: '/contact' },
  },
  quote: {
    text: 'Fleet hat unsere reaktive Instandhaltung um fast 40 % reduziert. Endlich haben wir Techniker, Anlagenprotokolle und Auftragsdaten an einem Ort.',
    author: 'Leitung Objektbetrieb, gemischt genutztes Quartier',
  },
  learnMore: 'Mehr erfahren',
  modules: [
    {
      id: 'reactiveMaintenance',
      tag: 'Reaktive Instandhaltung',
      title: 'Schnellere Reparaturen, zufriedenere Mieter',
      description:
        'Jede Störung mit Fotos und Standort erfassen, an das richtige Team leiten und anhand Ihrer SLAs bis zum Abschluss verfolgen.',
      points: [
        'Aufträge nach Standort und Gewerk an interne Teams oder Dienstleister',
        'SLA-Verfolgung in Echtzeit mit Warnungen vor Fristablauf',
        'Updates und Fotonachweise direkt aus dem Einsatz',
      ],
      visual: {
        kind: 'jobs',
        title: 'Arbeitsaufträge',
        items: [
          {
            title: 'Wasserschaden, Einheit 3B',
            location: 'Bayview Residences',
            status: '2 Tage überfällig',
            tone: 'overdue',
          },
          {
            title: 'Reparatur Ladetor',
            location: 'Westport DC · Tor 07',
            status: 'Fällig in 4 Std.',
            tone: 'due',
          },
          {
            title: 'Aufzugsalarm zurücksetzen',
            location: 'Tower B · Aufzüge',
            status: 'In Bearbeitung',
            tone: 'info',
          },
          {
            title: 'Lichtstörung, Ebene 2',
            location: 'Northgate Mall',
            status: 'Erledigt',
            tone: 'done',
          },
        ],
      },
    },
    {
      id: 'assetManagement',
      tag: 'Anlagenmanagement',
      title: 'Jede Anlage griffbereit',
      description:
        'Ein digitales Live-Verzeichnis aller Anlagen Ihres Portfolios, mit Historie, Kosten, Garantien und Dokumenten nur einen Tipp entfernt.',
      points: [
        'Digitale Profile mit Hersteller, Modell, Seriennummer und Garantie',
        'Reparaturhistorie und Kosten für jede Anlage',
        'Lebenszyklusdaten für Ersatz- und Investitionsplanung',
      ],
      visual: {
        kind: 'asset',
        title: 'Anlagenprofil',
        name: 'Kältemaschine CH-02',
        location: 'Harbour Point · Technikraum B2',
        status: 'In Betrieb',
        facts: [
          { label: 'Letzte Wartung', value: '12. Sep.' },
          { label: 'Garantie', value: 'März 2028' },
          { label: 'Kosten lfd. Jahr', value: '4.210 $' },
          { label: 'Offene Aufträge', value: '1' },
        ],
      },
    },
    {
      id: 'analyticsReporting',
      tag: 'Analysen und Berichte',
      title: 'Aus Daten werden Entscheidungen',
      description:
        'Live-Dashboards und exportierbare Berichte zeigen, worauf es ankommt, von der einzelnen Anlage bis zum ganzen Portfolio.',
      points: [
        'Auftragsvolumen, Reaktionszeiten, Compliance und Kosten in Echtzeit',
        'Drill-down nach Gebäude, Anlage, Dienstleister oder Team',
        'Exporte für Audits und Gremien',
      ],
      visual: {
        kind: 'chart',
        title: 'Instandhaltungskosten nach Standort',
        stats: [
          { label: 'SLA erfüllt', value: '96,4 %' },
          { label: 'Kosten lfd. Jahr', value: '184k $' },
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
      title: 'Gemeinsam mit Teams und Dienstleistern',
      description:
        'Freigaben, Zuweisungen und Eskalationen passend zu Ihren Abläufen gestalten, damit jede Aufgabe zur richtigen Zeit die richtige Person erreicht.',
      points: [
        'Bedingte Zuweisung nach Standort, Anlagentyp oder Priorität',
        'Mehrstufige Freigaben nach Kosten und Dringlichkeit',
        'Sofortiger Zugang für Dienstleister über einen einfachen Link',
      ],
      visual: {
        kind: 'steps',
        title: 'Workflow',
        steps: [
          { kind: 'Auslöser', text: 'Reparaturangebot über 5.000 $' },
          { kind: 'Wenn', text: 'Von der Regionalleitung freigegeben' },
          { kind: 'Dann', text: 'Auftrag erstellen + Dienstleister informieren' },
        ],
      },
    },
    {
      id: 'auditTracking',
      tag: 'Audit-Tracking & Inspektionen',
      title: 'Bereit für jedes Audit',
      description:
        'Protokolle mit Zeitstempel und digitale Inspektionen halten jeden Standort konform und jede Aktion nachvollziehbar.',
      points: [
        'Jede Aktion automatisch nach Person und Rolle protokolliert',
        'Digitale Prüfchecklisten mit Fotos und Unterschriften',
        'Exportierbare Protokolle für jeden Zeitraum und Anlagentyp',
      ],
      visual: {
        kind: 'log',
        title: 'Audit-Protokoll',
        entries: [
          {
            when: '09:42',
            who: 'Aisha K.',
            what: 'hat die Brandschutztürprüfung in Treppenhaus A abgeschlossen',
          },
          { when: '09:15', who: 'Workflow', what: 'hat die Freigabe für WO-2291 angefordert' },
          {
            when: '08:58',
            who: 'Marco L.',
            what: 'hat das Aufzugszertifikat für Tower B hochgeladen',
          },
        ],
      },
    },
    {
      id: 'preventiveMaintenance',
      tag: 'Vorbeugende & vorausschauende Instandhaltung',
      title: 'Die Probleme von morgen heute lösen',
      description:
        'Wiederkehrende Pläne und regelbasierte Vorhersagen halten die Technik am Laufen und helfen Ihrem Team, früh zu handeln.',
      points: [
        'Automatische Wartungsaufträge für Klima, Sanitär, Aufzüge und Brandschutz',
        'Vorausschauende Warnungen mit Verweis auf die auslösende Regel',
        'Compliance-Kalender mit Erinnerungen vor jeder Fälligkeit',
      ],
      visual: {
        kind: 'jobs',
        title: 'Geplante Aufträge',
        items: [
          {
            title: 'Filterwechsel Klimaanlage',
            location: 'Tower B · AHU-07',
            status: 'Fällig in 4 Std.',
            tone: 'due',
          },
          {
            title: 'Jährliche Aufzugsprüfung',
            location: 'Aufzüge L1–L3',
            status: 'Geplant',
            tone: 'info',
          },
          {
            title: 'Test Notbeleuchtung',
            location: 'Northgate Mall',
            status: 'Erledigt',
            tone: 'done',
          },
        ],
      },
    },
    {
      id: 'documentManagement',
      tag: 'Dokumentenmanagement',
      title: 'Jede Datei dort, wo Sie sie brauchen',
      description:
        'Handbücher, Genehmigungen, Zertifikate und Verträge bleiben geordnet, mit der zugehörigen Arbeit verknüpft und prüfbereit.',
      points: [
        'Dokumente an Anlagen, Aufträgen, Standorten und Dienstleistern',
        'Versionierung mit vollständiger Änderungshistorie',
        'Erinnerungen vor Ablauf von Genehmigungen und Verträgen',
      ],
      visual: {
        kind: 'files',
        title: 'Dokumente',
        items: [
          {
            title: 'Brandschutzzertifikat.pdf',
            location: 'Tower B · Genehmigung',
            status: 'Läuft in 30 T. ab',
            tone: 'due',
          },
          {
            title: 'CH-02 Betriebshandbuch.pdf',
            location: 'Kältemaschine CH-02 · Handbuch',
            status: 'Verknüpft',
            tone: 'info',
          },
          {
            title: 'Aufzugsprüfung Q3.pdf',
            location: 'Aufzüge · Bericht',
            status: 'Geprüft',
            tone: 'done',
          },
        ],
      },
    },
  ] satisfies OverviewModule[],
  extend: {
    title: 'Fleet nach Ihren Bedürfnissen erweitern',
    description:
      'Verbinden Sie Ihre bestehenden Tools und setzen Sie KI und E-Mail im gesamten Betrieb ein.',
    items: [
      {
        id: 'integrations',
        title: '20+ Integrationen',
        description:
          'Finanz-, ERP-, Zutritts-, Mieterportal- und Gebäudesysteme über fertige Integrationen und eine REST-API verbinden.',
        action: 'Integrationen ansehen',
      },
      {
        id: 'runnerAi',
        title: 'RunnerAI',
        description:
          'Workflows und Dashboards aus Befehlen in natürlicher Sprache erstellen, auf sicheren, abgeschotteten Servern.',
        action: 'RunnerAI kennenlernen',
      },
      {
        id: 'fleetMail',
        title: 'Fleet Mail',
        description:
          'Eingehende E-Mails in verfolgte Arbeitsaufträge verwandeln und Teams und Dienstleister per E-Mail informieren.',
        action: 'Fleet Mail entdecken',
      },
    ] satisfies { id: PlatformDetailId; title: string; description: string; action: string }[],
  },
  audiences: {
    eyebrow: 'Web & Mobil',
    title: 'Eine Plattform für alle',
    description:
      'Fleet läuft auf Desktop, Tablet und Smartphone mit Apps für iOS und Android und gibt jeder Person die passende Sicht auf dieselben Live-Daten.',
    action: { label: 'Web & Mobil entdecken', href: '/platform/web-and-mobile' },
    items: [
      {
        title: 'Für Manager',
        description:
          'Termine planen, Kosten freigeben und jeden Standort in Live-Dashboards verfolgen.',
        screen: 'Portfolio · 14 Standorte',
        tasks: [
          {
            title: 'Reparaturangebot freigeben',
            location: 'Harbour Point',
            status: 'Heute fällig',
            tone: 'due',
          },
          {
            title: 'SLA-Bericht September',
            location: 'Alle Regionen',
            status: 'Bereit',
            tone: 'done',
          },
        ],
      },
      {
        title: 'Für Teams vor Ort',
        description:
          'Aufträge vor Ort mit Fotos, Checklisten und Unterschriften starten, aktualisieren und abschließen.',
        screen: 'Heute · 4 Aufgaben',
        tasks: [
          {
            title: 'Brandschutztürprüfung',
            location: 'Ebene 3 · Treppe A',
            status: 'Fällig in 2 Std.',
            tone: 'due',
          },
          {
            title: 'Jährliche Kesselwartung',
            location: 'Technikraum B2',
            status: 'Geplant',
            tone: 'info',
          },
        ],
      },
      {
        title: 'Für Mieter und Dienstleister',
        description:
          'Anfragen mit Fotos stellen, Updates erhalten und zugewiesene Aufträge über einen einfachen Link sehen.',
        screen: 'Meine Anfragen',
        tasks: [
          {
            title: 'Klimaanlage zu warm',
            location: 'Einheit 1204',
            status: 'Zugewiesen',
            tone: 'info',
          },
          {
            title: 'Wasserhahn tropft',
            location: 'Einheit 1204',
            status: 'Erledigt',
            tone: 'done',
          },
        ],
      },
    ] satisfies { title: string; description: string; screen: string; tasks: StatusItem[] }[],
  },
  why: {
    eyebrow: 'Warum Fleet',
    title: 'Für Immobilien entwickelt, von Menschen unterstützt',
    description:
      'Fleet ist auf Immobilienteams mit mehreren Standorten ausgelegt, mit schnellem Onboarding, transparenter nutzungsbasierter Preisgestaltung und Support, der Ihre Region kennt.',
    stats: [
      { value: 'Bis zu 40 %', label: 'weniger reaktive Instandhaltung' },
      { value: 'Unter 7 Tagen', label: 'bis Ihr Team startklar ist' },
      { value: '99,99 %', label: 'Verfügbarkeit mit SLA-Garantie' },
    ],
    points: [
      {
        title: 'Für Teams mit mehreren Standorten',
        description: 'Regeln, Berichte und Berechtigungen je Objekt, Region oder Portfolio.',
      },
      {
        title: 'Sicher durch Design',
        description:
          'Rollenbasierte Zugriffe, verschlüsselte Speicherung und vollständige Prüfpfade.',
      },
      {
        title: 'Persönlicher, lokaler Support',
        description:
          'Chatten Sie mit unserem Team, die meisten Anfragen beantworten wir innerhalb einer Stunde.',
      },
    ],
  },
  industries: {
    eyebrow: 'Branchen',
    title: 'Eine Lösung für jede Objektart',
    items: [
      'Einkaufszentren und Einzelhandel',
      'Hotellerie und Gastronomie',
      'Schifffahrt und Logistik',
      'Wohnanlagen',
      'Büroimmobilien',
      'Gemischt genutzte Quartiere',
      'Schulen und Campus',
      'Fahrzeugflotten',
    ],
  },
}

export const webMobile = {
  hero: {
    eyebrow: 'Web & Mobil',
    title: 'Ihr Betrieb auf jedem Bildschirm',
    description:
      'Fleet läuft im Browser sowie auf iOS und Android: Manager planen am Desktop, Techniker aktualisieren Aufträge in Echtzeit vor Ort.',
    primaryAction: { label: 'Demo buchen', href: '/contact' },
    highlights: ['iOS & Android', 'In jedem Browser', 'Echtzeit-Synchronisierung'],
  },
  devices: {
    url: 'app.runfleet.com',
    greeting: 'Willkommen, John S.',
    scope: 'Portfolio · 14 Standorte',
    stats: [
      { label: 'Offene Aufträge', value: '128' },
      { label: 'SLA erfüllt', value: '96,4 %' },
      { label: 'Wartung fällig', value: '37' },
    ],
    listTitle: 'Arbeitsaufträge',
    items: [
      {
        title: 'Niederdruckalarm Kältemaschine',
        location: 'Harbour Point · Technikraum',
        status: '2 Tage überfällig',
        tone: 'overdue',
      },
      {
        title: 'Filterwechsel Klimaanlage',
        location: 'Tower B · Ebene 14',
        status: 'Fällig in 4 Std.',
        tone: 'due',
      },
      {
        title: 'Reparatur Ladetor',
        location: 'Westport DC · Tor 07',
        status: 'Erledigt',
        tone: 'done',
      },
    ] satisfies StatusItem[],
    phoneTitle: 'Heute · 4 Aufgaben',
    phoneItems: [
      {
        title: 'Brandschutztürprüfung',
        location: 'Ebene 3 · Treppe A',
        status: 'Fällig in 2 Std.',
        tone: 'due',
      },
      {
        title: 'Jährliche Kesselwartung',
        location: 'Technikraum B2',
        status: 'Geplant',
        tone: 'info',
      },
    ] satisfies StatusItem[],
    phoneActions: ['Starten', 'Foto hinzufügen'],
  },
  audiences: {
    eyebrow: 'Eine Plattform für alle',
    title: 'Instandhaltung einfacher organisieren',
    description:
      'Fleet verbindet alle Beteiligten Ihres Betriebs, mit Web- und Mobilansichten für Manager, Teams vor Ort, Mieter und Dienstleister.',
  },
  rows: [
    {
      tag: 'Kontrolle',
      title: 'Volle Transparenz auf jedem Bildschirm',
      description:
        'Verfolgen Sie jeden Standort, jedes Team und jeden Dienstleister am Desktop oder auf dem Smartphone, mit Live-Zahlen, die sich sofort aktualisieren.',
      points: [
        'Live-Dashboards zu Auftragsvolumen, SLAs und Kosten',
        'Freigaben und Benachrichtigungen, wo immer Sie sind',
        'Dieselben Daten auf Desktop, Tablet und Smartphone',
      ],
      visual: {
        kind: 'chart',
        title: 'Portfolio auf einen Blick',
        stats: [
          { label: 'SLA erfüllt', value: '96,4 %' },
          { label: 'Offene Aufträge', value: '128' },
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
      tag: 'Anlagen vor Ort',
      title: 'Jede Anlage nur einen Scan entfernt',
      description:
        'Scannen oder suchen Sie eine Anlage und öffnen Sie in Sekunden Handbücher, Historie und offene Aufträge, direkt am Einsatzort.',
      points: [
        'Anlagendaten, Handbücher und Historie vor Ort',
        'Prüfungen mit Fotos und Messwerten dokumentiert',
        'Historie sofort für das ganze Team aktualisiert',
      ],
      visual: {
        kind: 'asset',
        title: 'Gescannte Anlage',
        name: 'Kältemaschine CH-02',
        location: 'Harbour Point · Technikraum B2',
        status: 'In Betrieb',
        facts: [
          { label: 'Letzte Wartung', value: '12. Sep.' },
          { label: 'Garantie', value: 'März 2028' },
          { label: 'Handbuch', value: 'Betriebshandbuch.pdf' },
          { label: 'Offene Aufträge', value: '1' },
        ],
      },
    },
    {
      tag: 'Kommunikation',
      title: 'Klare Kommunikation mit Teams und Mietern',
      description:
        'Anfragen kommen mit Fotos und Standort an, und alle Beteiligten sehen Fortschritt und Antworten am selben Auftrag.',
      points: [
        'Mieter senden Anfragen mit Fotos von jedem Gerät',
        'Updates und Antworten in der Auftragshistorie',
        'Benachrichtigungen bei jeder Zuweisung und jedem Abschluss',
      ],
      visual: {
        kind: 'chat',
        title: 'Anfrage · Einheit 1204',
        request: {
          title: 'Klimaanlage zu warm',
          location: 'Bayview Residences · Einheit 1204',
          status: 'Zugewiesen',
          tone: 'info',
        },
        messages: [
          {
            from: 'Mieter',
            text: 'Das Gerät im Wohnzimmer bläst seit heute Morgen warme Luft.',
            time: '09:12',
            own: false,
          },
          {
            from: 'Aisha K.',
            text: 'Danke für das Foto. Ich bin um 11:00 Uhr da und prüfe das Gerät.',
            time: '09:20',
            own: true,
          },
          { from: 'Mieter', text: 'Perfekt, vielen Dank.', time: '09:21', own: false },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  field: {
    eyebrow: 'Für den Einsatz gemacht',
    title: 'Bereit für Keller, Technikräume und abgelegene Standorte',
    description:
      'Fleet bleibt bei schwacher Verbindung schnell und reaktionsfähig, sodass Techniker überall Aufträge aktualisieren, Fotos hinzufügen und Arbeiten abschließen.',
  },
  stories: {
    eyebrow: 'Kundenstimmen',
    title: 'Das sagen Immobilienteams',
    items: [
      {
        quote:
          'Fleet hat unsere reaktive Instandhaltung um fast 40 % reduziert. Endlich haben wir Techniker, Anlagenprotokolle und Auftragsdaten an einem Ort.',
        author: 'Leitung Objektbetrieb',
        company: 'Gemischt genutztes Quartier',
      },
      {
        quote:
          'Andere Plattformen waren uns zu komplex oder zu allgemein. Fleet bietet uns eine passgenaue Lösung mit schnellerem Support.',
        author: 'Leitung Instandhaltung',
        company: 'Logistikzentrum',
      },
    ],
  },
}

export const integrationsPage = {
  hero: {
    eyebrow: 'Integrationen',
    title: 'Fleet mit Ihren bestehenden Tools verbinden',
    description:
      'Fleet fügt sich mit mehr als 20 Integrationen und einer offenen REST-API in Ihre Systemlandschaft ein, sodass Finanz-, Gebäude- und Mietersysteme mit denselben Live-Daten arbeiten.',
    primaryAction: { label: 'Demo buchen', href: '/contact' },
    highlights: ['20+ Integrationen', 'Offene REST-API', 'Begleitete Einrichtung'],
  },
  featured: {
    eyebrow: 'Highlights',
    title: 'Ausgewählte Integrationen',
    items: [
      {
        icon: 'accounting',
        title: 'Buchhaltung und Kreditoren/Debitoren',
        description:
          'Freigegebene Kosten und Rechnungen fließen in Ihre Finanzsysteme und halten Budgets vom ersten Angebot bis zur Zahlung genau.',
      },
      {
        icon: 'bms',
        title: 'Gebäudeleittechnik',
        description:
          'Alarme und Messwerte der GLT erzeugen automatisch Arbeitsaufträge, damit das richtige Team im richtigen Moment handelt.',
      },
      {
        icon: 'api',
        title: 'REST-API',
        description:
          'Verbinden Sie jedes System über eine dokumentierte, sichere REST-API, die Ihrer IT-Governance folgt.',
      },
    ] satisfies { icon: IntegrationIcon; title: string; description: string }[],
    action: { label: 'Mit unserem Team sprechen', href: '/contact' },
  },
  directory: {
    title: 'Alle Integrationen',
    searchLabel: 'Integrationen durchsuchen',
    searchPlaceholder: 'Nach System oder Einsatz suchen',
    filterLabel: 'Kategorien',
    all: 'Alle',
    results: '{count} Integrationen',
    empty:
      'Versuchen Sie eine andere Suche oder Kategorie, oder sprechen Sie mit unserem Team über Ihr System.',
    action: { label: 'Mit unserem Team sprechen', href: '/contact' },
    categories: {
      finance: 'Finanzen',
      operations: 'Betrieb',
      building: 'Gebäudesysteme',
      tenants: 'Mieter und Kommunikation',
      developers: 'Entwickler',
    } satisfies Record<IntegrationCategory, string>,
    items: [
      {
        icon: 'accounting',
        category: 'finance',
        title: 'Buchhaltungssoftware',
        description:
          'Freigegebene Kosten und Rechnungen mit Ihrer Buchhaltung synchronisieren und Budgets genau halten.',
      },
      {
        icon: 'apAr',
        category: 'finance',
        title: 'Kreditoren- und Debitorensysteme',
        description:
          'Freigegebene Reparaturkosten direkt in Ihren Kreditoren- und Debitorenprozess übertragen.',
      },
      {
        icon: 'finance',
        category: 'finance',
        title: 'Finanztools',
        description:
          'Instandhaltungskosten nach Gebäude, Anlage und Dienstleister neben Ihrem Finanzreporting verfolgen.',
      },
      {
        icon: 'erp',
        category: 'operations',
        title: 'ERP-Software',
        description:
          'Anlagen-, Dienstleister- und Einkaufsdaten mit Ihrem ERP teilen und einheitlich berichten.',
      },
      {
        icon: 'vendors',
        category: 'operations',
        title: 'Dienstleisterportale',
        description:
          'Dienstleisterdaten, Aufträge und Dokumente mit den Portalen Ihrer Auftragnehmer abgleichen.',
      },
      {
        icon: 'access',
        category: 'building',
        title: 'Zutrittskontrolle',
        description: 'Einsätze vor Ort und Anwesenheit von Dienstleistern automatisch erfassen.',
      },
      {
        icon: 'bms',
        category: 'building',
        title: 'Gebäudeleittechnik',
        description: 'GLT-Alarme und Messwerte im richtigen Moment in Arbeitsaufträge verwandeln.',
      },
      {
        icon: 'tenants',
        category: 'tenants',
        title: 'Mieterportale',
        description:
          'Mieteranfragen als verfolgte Arbeitsaufträge erfassen und Nutzer informieren.',
      },
      {
        icon: 'email',
        category: 'tenants',
        title: 'E-Mail mit Fleet Mail',
        description:
          'Eingehende E-Mails in Aufträge verwandeln und Updates und Freigaben per E-Mail senden.',
      },
      {
        icon: 'api',
        category: 'developers',
        title: 'REST-API',
        description:
          'Eigene Verbindungen zu jedem System über eine dokumentierte, sichere REST-API aufbauen.',
      },
    ] satisfies IntegrationItem[],
  },
  cta: {
    eyebrow: 'Jetzt starten',
    title: 'Bereit, Ihre Systeme zu verbinden?',
    description:
      'Erzählen Sie uns, welche Systeme Sie heute nutzen, und unser Team plant beim Onboarding, wie Fleet sich mit ihnen verbindet.',
    action: { label: 'Demo buchen', href: '/contact' },
    panelTitle: 'Verbundene Systeme',
    panelItems: [
      { title: 'Buchhaltungssoftware', location: 'Finanzen', status: 'Verbunden', tone: 'done' },
      {
        title: 'Gebäudeleittechnik',
        location: 'Gebäudesysteme',
        status: 'Verbunden',
        tone: 'done',
      },
      { title: 'Mieterportal', location: 'Mieter', status: 'Verbunden', tone: 'done' },
      { title: 'ERP-Software', location: 'Betrieb', status: 'In Einrichtung', tone: 'info' },
    ] satisfies StatusItem[],
  },
}

export const runnerAiPage = {
  hero: {
    eyebrow: 'RunnerAI',
    title: 'Intelligenz, die Ihren Betrieb steuert',
    description:
      'RunnerAI ist die sichere, regelbasierte KI von Fleet für Immobilien- und Facility-Teams. Beschreiben Sie, was Sie brauchen, und RunnerAI ruft Daten ab, erstellt Aufgaben, bearbeitet Workflows und baut Dashboards für jeden Standort.',
    primaryAction: { label: 'Demo buchen', href: '/contact' },
    secondaryAction: { label: 'Mit unserem Experten sprechen', href: '/contact' },
    demo: {
      title: 'RunnerAI',
      context: 'Live-Daten · 14 Standorte',
      prompt:
        'Richte eine wöchentliche Hygieneroutine für jeden Food Court ein, mit Freigabe durch die Aufsicht.',
      reply: 'Erledigt. Ich habe einen Workflow für 9 Food Courts in 4 Einkaufszentren erstellt.',
      steps: [
        { kind: 'Jeden', text: 'Montag, 06:00 Uhr' },
        { kind: 'Dann', text: 'Hygiene-Checkliste je Food Court erstellen' },
        { kind: 'Dann', text: 'Freigabe der Aufsicht mit Fotos anfordern' },
      ],
      action: 'An 9 Standorte verteilen',
    },
  },
  challenge: {
    pressure: {
      title: 'Betrieb an vielen Standorten ist schnell',
      description:
        'Filialen, Einkaufszentren, Logistikzentren und gemischt genutzte Quartiere bringen Tausende bewegliche Teile mit sich, von Instandhaltung und Compliance bis zu Berichten und Anlagen.',
      points: [
        'Tausende Aufgaben in vielen Regionen',
        'Lokale Regeln für jeden Standort',
        'Daten in vielen Teams',
      ],
    },
    answer: {
      title: 'RunnerAI hält Schritt',
      description:
        'RunnerAI denkt nächste Schritte voraus, strukturiert Workflows und liefert sofort die passende Erkenntnis, damit Ihre Teams mehr Zeit für den Betrieb haben.',
    },
  },
  capabilities: {
    title: 'Intelligenz, die vorausschauende Planung ermöglicht',
    description:
      'Vier Wege, wie RunnerAI Ihr Team unterstützt, alle über Befehle in natürlicher Sprache.',
    tabs: [
      {
        icon: 'data',
        label: 'Datenabruf',
        title: 'Antworten aus Ihren Live-Daten',
        description:
          'Stellen Sie eine Frage in einfacher Sprache, und RunnerAI holt die Antwort aus Ihren Live-Betriebsdaten, mit den zugrunde liegenden Aufträgen und Anlagen.',
        points: [
          'Fragen zu Kosten, SLAs, Anlagen und Dienstleistern',
          'Antworten aus Live-Daten aller Standorte',
          'Quellen zu jeder Antwort',
        ],
        visual: {
          kind: 'chat',
          title: 'RunnerAI fragen',
          request: {
            title: 'Live-Daten · 14 Standorte',
            location: 'Quellen: 86 Aufträge · 14 Anlagen',
            status: 'Beantwortet',
            tone: 'done',
          },
          messages: [
            {
              from: 'Sie',
              text: 'Welche Kältemaschinen sind diesen Monat zur Wartung fällig?',
              time: '09:12',
              own: true,
            },
            {
              from: 'RunnerAI',
              text: '6 Kältemaschinen an 3 Standorten sind fällig. Harbour Point hat 3, darunter CH-02, fällig am 14. Okt.',
              time: '09:12',
              own: false,
            },
          ],
        },
      },
      {
        icon: 'tasks',
        label: 'Aufgaben erstellen',
        title: 'Aufgaben aus einem Satz',
        description:
          'Beschreiben Sie die Arbeit, und RunnerAI erstellt Arbeitsauftrag oder Aufgabe mit der richtigen Anlage, dem Standort, der zuständigen Person und dem Fälligkeitsdatum.',
        points: [
          'Aufträge und Aufgaben aus natürlicher Sprache',
          'Dem richtigen Team oder Dienstleister zugewiesen',
          'Checklisten, Anlagen und Fristen automatisch ergänzt',
        ],
        visual: {
          kind: 'jobs',
          title: 'Von RunnerAI erstellte Aufgaben',
          items: [
            {
              title: 'Vibration AHU-07 prüfen',
              location: 'Tower B · Ebene 14 · Aisha K.',
              status: 'Morgen fällig',
              tone: 'due',
            },
            {
              title: 'Lobbyleuchte ersetzen',
              location: 'Bayview Residences · Marco L.',
              status: 'Zugewiesen',
              tone: 'info',
            },
            {
              title: 'Quartalsprüfung Brandschutztüren',
              location: 'Northgate Mall · 12 Türen',
              status: 'Geplant',
              tone: 'info',
            },
          ],
        },
      },
      {
        icon: 'workflows',
        label: 'Workflows bearbeiten',
        title: 'Workflows in Sekunden bearbeiten',
        description:
          'Sagen Sie RunnerAI, was sich ändern soll, und es passt Schritte, Auslöser und Bedingungen an und verteilt die Änderung an alle oder ausgewählte Regionen.',
        points: [
          'Schritte, Auslöser und Bedingungen per Text ändern',
          'Updates an alle oder ausgewählte Regionen verteilen',
          'Jede Änderung protokolliert und nachvollziehbar',
        ],
        visual: {
          kind: 'steps',
          title: 'Workflow aktualisiert',
          steps: [
            {
              kind: 'Auslöser',
              text: 'Reparaturangebot eingegangen',
            },
            {
              kind: 'Wenn',
              text: 'Kosten über 3.000 $ (bisher 5.000 $)',
            },
            {
              kind: 'Dann',
              text: 'Freigabe der Regionalleitung anfordern',
            },
          ],
        },
      },
      {
        icon: 'dashboards',
        label: 'Dashboards erstellen',
        title: 'Dashboards auf Anfrage',
        description:
          'Fordern Sie jede Ansicht an, und RunnerAI baut sie in Sekunden aus Ihren Live-Betriebsdaten, bereit zum Teilen oder Anheften.',
        points: [
          'Trends und Rückstände bei Arbeitsaufträgen',
          'Dienstleisterleistung und regionale Vergleiche',
          'Portfolioweite Zusammenfassungen für die Geschäftsleitung',
        ],
        visual: {
          kind: 'chart',
          title: 'Auftragsrückstand · 30 Tage',
          stats: [
            {
              label: 'Offen',
              value: '128',
            },
            {
              label: 'Erledigt',
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
    eyebrow: 'So funktioniert es',
    title: 'Von der Anfrage zum laufenden Workflow',
    items: [
      {
        title: 'Fragen',
        description:
          'Beschreiben Sie in einfacher Sprache, was Sie brauchen, von einer neuen Routine bis zum Portfoliobericht.',
      },
      {
        title: 'Erstellen',
        description:
          'RunnerAI strukturiert Workflow oder Dashboard auf Basis Ihrer Daten und Branchenstandards.',
      },
      {
        title: 'Ausrollen',
        description:
          'Sofort an jeden Standort oder ausgewählte Regionen verteilen, angepasst an lokale Regeln.',
      },
      {
        title: 'Verbessern',
        description:
          'Live-Erkenntnisse und nachvollziehbare Vorhersagen zeigen, wo Sie nachjustieren, damit jeder Standort nach demselben Playbook arbeitet.',
      },
    ],
  },
  rows: [
    {
      tag: 'Produktivität',
      title: 'Weniger Verwaltung, mehr Betrieb',
      description:
        'RunnerAI automatisiert das Erstellen und Anpassen der Workflows für Instandhaltung, Compliance, Berichte und Anlagenmanagement.',
      points: [
        'Einfache Befehle statt manueller Konfiguration',
        'Jedes Objekt arbeitet nach demselben Playbook',
        'Mehr Zeit für die Arbeit vor Ort',
      ],
      visual: {
        kind: 'log',
        title: 'RunnerAI-Aktivität',
        entries: [
          {
            when: '09:42',
            who: 'RunnerAI',
            what: 'hat den Prüf-Workflow für 4 Standorte in den VAE aktualisiert',
          },
          {
            when: '09:15',
            who: 'RunnerAI',
            what: 'hat das wöchentliche Dashboard zur Dienstleisterleistung erstellt',
          },
          {
            when: '08:58',
            who: 'RunnerAI',
            what: 'hat einen Wartungsplan für 6 neue Kältemaschinen vorgeschlagen',
          },
        ],
      },
    },
    {
      tag: 'Entscheidungen',
      title: 'Bessere Entscheidungen, schneller',
      description:
        'Stellen Sie eine Frage und erhalten Sie eine Live-Antwort, damit Leitung und Teams vor Ort sicher auf Basis aktueller Daten handeln.',
      points: [
        'Antworten aus Ihren Live-Betriebsdaten',
        'Erkenntnisse zu Ausfällen und Budgets auf Anfrage',
        'Regionale Vergleiche in Sekunden',
      ],
      visual: {
        kind: 'chart',
        title: 'Dienstleisterleistung · VAE',
        stats: [
          { label: 'Pünktliche Aufträge', value: '94 %' },
          { label: 'Ø Reaktion', value: '2,4 Std.' },
        ],
        bars: [
          { label: 'Klimadienstleister', value: 96 },
          { label: 'Aufzugsdienstleister', value: 91 },
          { label: 'Elektrodienstleister', value: 87 },
          { label: 'Sanitärdienstleister', value: 82 },
        ],
      },
    },
    {
      tag: 'Transparenz',
      title: 'Klare Sicht auf jeden Standort',
      description:
        'Portfolioweite Zusammenfassungen bringen Vergangenheit, Gegenwart und Zukunft Ihres Betriebs an einem Ort zusammen.',
      points: [
        'Auftragstrends und Analyse von Anlagenausfällen',
        'Compliance-Risikobewertung je Standort',
        'Erkenntnisse zu Budget und vorbeugender Wartung',
      ],
      visual: {
        kind: 'jobs',
        title: 'Top 10 Einkaufszentren · Risiko',
        items: [
          {
            title: 'Northgate Mall',
            location: '3 offene Compliance-Punkte',
            status: 'Prüfen',
            tone: 'due',
          },
          {
            title: 'Harbour Point',
            location: 'Alle Prüfungen erledigt',
            status: 'Im Plan',
            tone: 'done',
          },
          {
            title: 'Marina Walk',
            location: '1 Anlage am Ende der Lebensdauer',
            status: 'Planen',
            tone: 'info',
          },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  rules: {
    eyebrow: 'Regelbasiert by Design',
    title: 'Intelligenz nach Ihren Regeln',
    description:
      'RunnerAI arbeitet innerhalb der Regeln, die Sie festlegen, sodass jede Aktion nachvollziehbar, konform und auf Ihre Unternehmensstandards abgestimmt bleibt.',
    action: { label: 'Mit unserem Experten sprechen', href: '/contact' },
  },
  security: {
    eyebrow: 'Sicheres KI-Framework',
    title: 'KI innerhalb Ihres Sicherheitsbereichs',
    description:
      'RunnerAI läuft auf dedizierten, kundenspezifischen Servern, sodass sensible Daten innerhalb Ihrer Organisation bleiben.',
    items: [
      {
        title: 'Isolierte Rechenumgebung',
        description: 'Eine eigene Umgebung für jede Organisation.',
      },
      {
        title: 'Verschlüsselte Daten',
        description: 'Verschlüsselung bei Übertragung und Speicherung.',
      },
      {
        title: 'Vollständige Prüfpfade',
        description: 'Jede KI-generierte Aktion wird protokolliert und ist nachvollziehbar.',
      },
      {
        title: 'Flexibler Betrieb',
        description: 'Cloud, On-Premise oder hybrid, mit Unterstützung für DSGVO, PDPL und PDPA.',
      },
    ],
  },
  industries: {
    title: 'Eine Lösung für jede Objektart',
    description:
      'Vom Einzelhandelsportfolio bis zum Logistikzentrum passt sich RunnerAI Ihren Anlagen und Ihrem Markt an.',
  },
  integrate: {
    title: 'Für Integration gemacht',
    description:
      'RunnerAI arbeitet mit den mehr als 20 Integrationen von Fleet und nutzt Finanz-, Gebäude- und Mieterdaten für ein vollständiges Bild.',
    action: { label: 'Alle Integrationen ansehen', href: '/platform/integrations' },
  },
}

export const fleetMailPage = {
  hero: {
    eyebrow: 'Fleet Mail',
    title: 'Jede E-Mail ein verfolgter Auftrag',
    description:
      'Fleet Mail verwandelt Anfragen von Mietern und Dienstleistern sofort in Arbeitsaufträge und hält alle mit automatischen E-Mails auf dem Laufenden.',
    primaryAction: { label: 'Demo buchen', href: '/contact' },
    secondaryAction: { label: 'Mit unserem Team sprechen', href: '/contact' },
    hub: { center: 'Fleet Mail', nodes: ['Mieter', 'Dienstleister', 'Techniker', 'Manager'] },
  },
  challenge: {
    pressure: {
      title: 'Anfragen kommen von überall',
      description:
        'Mieter, Dienstleister und Mitarbeitende senden Anfragen, Angebote und Updates an gemeinsame Postfächer, und jede Nachricht enthält einen Teil eines Auftrags.',
      points: ['Mieteranfragen', 'Angebote von Dienstleistern', 'Gemeinsame Postfächer'],
    },
    answer: {
      title: 'Fleet Mail führt alles zusammen',
      description:
        'Jede E-Mail wird Teil eines strukturierten Datensatzes, mit dem richtigen Team zugewiesen und allen Beteiligten auf dem neuesten Stand.',
    },
  },
  intro: {
    title: 'Jede Unterhaltung im Fluss, an einem Ort',
    description:
      'Anfragen, Antworten und Freigaben laufen über einen Datensatz, den Ihr ganzes Team sieht, während Mieter und Dienstleister ihre gewohnte E-Mail nutzen.',
  },
  rows: [
    {
      tag: 'Gemeinsames Postfach',
      title: 'Eine geordnete Warteschlange',
      description:
        'Ein gemeinsames Postfach wird zur geordneten Warteschlange, in der jede Anfrage erfasst, priorisiert und zugewiesen ist.',
      points: [
        'Jede Anfrage mit Absender, Anhängen und Standort erfasst',
        'Doppelte Anfragen zu einem Auftrag zusammengeführt',
        'Reaktionszeiten gemessen an Ihren SLAs',
      ],
      visual: {
        kind: 'jobs',
        title: 'maintenance@ · Heute',
        items: [
          {
            title: 'Licht in der Lobby ausgefallen',
            location: 'Von: Mieter Einheit 1204',
            status: 'Auftrag erstellt',
            tone: 'info',
          },
          {
            title: 'Angebot Kältemaschinenwartung',
            location: 'Von: Klimadienstleister',
            status: 'Wartet auf Freigabe',
            tone: 'due',
          },
          {
            title: 'AW: Wasserhahn tropft',
            location: 'Von: Mieter Einheit 802',
            status: 'Erledigt',
            tone: 'done',
          },
        ],
      },
    },
    {
      tag: 'E-Mail zu Auftrag',
      title: 'Anfragen werden sofort zu Aufträgen',
      description:
        'Jede E-Mail wird zum Arbeitsauftrag, und jede Antwort landet in der Auftragshistorie, sodass die ganze Unterhaltung im Kontext bleibt.',
      points: [
        'Fotos und Dokumente am Arbeitsauftrag',
        'Intelligente Zuweisung nach Standort, Kategorie und Priorität',
        'Antworten automatisch in der Auftragshistorie',
      ],
      visual: {
        kind: 'chat',
        title: 'WO-2318 · E-Mail-Verlauf',
        request: {
          title: 'Licht in der Lobby ausgefallen',
          location: 'Bayview Residences · Lobby',
          status: 'Zugewiesen',
          tone: 'info',
        },
        messages: [
          {
            from: 'Mieter',
            text: 'Das Hauptlicht in der Lobby ist heute Abend ausgefallen.',
            time: '18:04',
            own: false,
          },
          {
            from: 'Fleet Mail',
            text: 'Danke. Auftrag WO-2318 ist erstellt und Marco L. zugewiesen.',
            time: '18:04',
            own: true,
          },
          { from: 'Marco L.', text: 'Leuchte ersetzt. Foto anbei.', time: '09:30', own: true },
        ],
      },
    },
    {
      tag: 'Freigaben',
      title: 'Freigaben mit einem Klick',
      description:
        'Manager geben Kosten direkt aus der E-Mail frei oder lehnen sie ab, und der Auftrag läuft automatisch weiter.',
      points: [
        'Freigabeanfragen an die richtige Person',
        'Mit einem Klick freigeben oder ablehnen',
        'Jede Entscheidung am Auftrag dokumentiert',
      ],
      visual: {
        kind: 'steps',
        title: 'Freigabe per E-Mail',
        steps: [
          { kind: 'E-Mail', text: 'Angebot eingegangen: 3.800 $' },
          { kind: 'Freigabe', text: 'Finanzleitung gibt im Postfach frei' },
          { kind: 'Dann', text: 'Dienstleister informiert + Termin geplant' },
        ],
      },
    },
    {
      tag: 'Updates',
      title: 'Alle bleiben informiert',
      description:
        'Fleet sendet zur richtigen Zeit die richtige Nachricht, damit Teams, Dienstleister und Mieter immer den nächsten Schritt kennen.',
      points: [
        'Benachrichtigungen zu Zuweisung und Fälligkeit',
        'Eskalationen, wenn Fristen näher rücken',
        'Abschlussberichte mit Fotonachweis',
      ],
      visual: {
        kind: 'log',
        title: 'Heute gesendete E-Mails',
        entries: [
          {
            when: '09:31',
            who: 'Mieter, Einheit 1204',
            what: 'hat einen Abschlussbericht mit Foto erhalten',
          },
          { when: '08:00', who: 'Marco L.', what: 'hat die 4 Aufgaben für heute erhalten' },
          {
            when: '07:45',
            who: 'Regionalleitung',
            what: 'hat die wöchentliche Übersicht überfälliger Aufträge erhalten',
          },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  flow: {
    eyebrow: 'So funktioniert es',
    title: 'Vom Postfach zum erledigten Auftrag',
    items: [
      {
        title: 'Empfangen',
        description:
          'Mieter und Dienstleister schreiben wie gewohnt an Ihre Instandhaltungsadresse.',
      },
      {
        title: 'Erstellen',
        description: 'Fleet Mail macht aus jeder E-Mail einen Auftrag mit Fotos und Standort.',
      },
      {
        title: 'Zuweisen',
        description:
          'Der Auftrag geht nach Standort, Kategorie und Priorität an das richtige Team oder den richtigen Dienstleister.',
      },
      {
        title: 'Informieren',
        description: 'Alle erhalten automatisch Fortschritts-, Freigabe- und Abschluss-E-Mails.',
      },
    ],
  },
  banner: {
    eyebrow: 'Für jeden Absender gemacht',
    title: 'E-Mail, die für alle funktioniert',
    description:
      'Mieter und Dienstleister nutzen weiter ihre gewohnte E-Mail, während Ihr Team mit einem strukturierten, nachverfolgbaren Datensatz arbeitet.',
    action: { label: 'Mit unserem Team sprechen', href: '/contact' },
  },
  connect: {
    title: 'Ihren gesamten Betrieb verbinden',
    description:
      'Fleet Mail ist Teil der Fleet-Plattform, sodass jede E-Mail mit Ihren Anlagen, Dokumenten, Workflows und Berichten verknüpft ist.',
    items: [
      {
        title: 'Alle am selben Datensatz',
        description:
          'Mieter, Dienstleister und Mitarbeitende verfolgen einen Auftrag, jede Nachricht im Kontext.',
      },
      {
        title: 'Klare Sicht auf jede Anfrage',
        description:
          'Anfragevolumen, Reaktionszeiten und offene Anfragen aller Standorte im Blick.',
      },
      {
        title: 'Mehr Zeit für echte Arbeit',
        description:
          'Automatische Erfassung und Updates geben Ihrem Team Zeit für die Arbeit vor Ort.',
      },
    ],
  },
  industries: {
    title: 'Eine Lösung für jede Objektart',
    description:
      'Von Wohnanlagen bis zu Logistikzentren passt sich Fleet Mail der Kommunikation jedes Objekts an.',
  },
  integrate: {
    title: 'Für Integration gemacht',
    description:
      'Fleet Mail arbeitet mit den mehr als 20 Integrationen von Fleet zusammen, darunter Mieterportale, Finanztools und Gebäudesysteme.',
    action: { label: 'Alle Integrationen ansehen', href: '/platform/integrations' },
  },
}

export const workflowBuilderPage = {
  hero: {
    eyebrow: 'Fleet Workflow Builder',
    title: 'Workflows, die sich Ihrer Arbeitsweise anpassen',
    description:
      'Gestalten Sie Ihre Instandhaltung passend zu Struktur, Freigabeketten, Dienstleisterrichtlinien und Kostengrenzen, mit einem visuellen Builder, den jeder im Team nutzen kann.',
    primaryAction: { label: 'Demo buchen', href: '/contact' },
    highlights: ['Visueller Builder', 'Mehrstufige Freigaben', 'Startklar in der ersten Woche'],
  },
  build: {
    eyebrow: 'Fleet Workflow Builder',
    title: 'Gestalten Sie Ihr eigenes Fleet',
    description:
      'Sie legen den Prozess fest, und Fleet setzt ihn um, damit Aufgaben jedes Mal zur richtigen Zeit die richtigen Personen erreichen.',
    helpTitle: 'Wir bilden jeden Prozess mit Ihnen ab',
    helpDescription:
      'Unser Onboarding-Team überträgt in Ihrer ersten Woche gemeinsam mit Ihnen Freigaben, Zuweisungen und Eskalationen in Fleet.',
    action: { label: 'Mit unserem Team sprechen', href: '/contact' },
    center: 'Workflow',
    nodes: ['Freigaben', 'Zuweisung', 'Eskalationen', 'Hinweise', 'Rollen', 'Standorte'],
  },
  panels: {
    blocks: {
      title: 'Alle Bausteine an einem Ort',
      description:
        'Kombinieren Sie Auslöser, Bedingungen und Aktionen passend zu den Arbeitsanweisungen jedes Standorts.',
      panelTitle: 'Workflow-Bausteine',
      status: 'Hinzugefügt',
      items: [
        {
          title: 'Auslöser',
          description: 'Neue Anfrage, Kosten über Grenzwert oder nahende Frist',
        },
        {
          title: 'Bedingung',
          description: 'Standort, Anlagentyp, Priorität, Dienstleister oder Kosten',
        },
        { title: 'Freigabe', description: 'Freigabe durch Aufsicht, Management oder Finanzen' },
        {
          title: 'Aktion',
          description: 'Zuweisen, benachrichtigen, eskalieren oder Auftrag erstellen',
        },
      ],
    },
    integrations: {
      title: 'Integration ist entscheidend',
      description:
        'Workflows wirken auf Dokumente, Anlagen, Berechtigungen und Dienstleister und verbinden sich mit Finanz-, Gebäude- und Mietersystemen.',
      panelTitle: 'Mit Ihren Workflows verbunden',
      action: { label: 'Integrationen ansehen', href: '/platform/integrations' },
      items: [
        {
          title: 'Buchhaltungssoftware',
          location: 'Freigegebene Kosten automatisch synchronisiert',
          status: 'Verbunden',
          tone: 'done',
        },
        {
          title: 'Gebäudeleittechnik',
          location: 'Alarme lösen Workflows aus',
          status: 'Verbunden',
          tone: 'done',
        },
        {
          title: 'Fleet Mail',
          location: 'Freigaben per E-Mail',
          status: 'Verbunden',
          tone: 'done',
        },
      ] satisfies StatusItem[],
    },
  },
  templates: {
    title: 'Alle Prozesse auf einer Plattform',
    description:
      'Starten Sie mit fertigen Workflows für gängige Prozesse und passen Sie jeden an Ihre Standorte, Rollen und Grenzwerte an.',
    tag: 'Vorlage',
    items: [
      {
        title: 'Kostenfreigabe über 5.000 $',
        description: 'Freigabe der Aufsicht vor der Terminierung',
      },
      {
        title: 'Dienstleister je Gebäude',
        description: 'Sanitär in Gebäude A an Dienstleister, in Gebäude B intern',
      },
      {
        title: 'Vorbeugend und reaktiv getrennt',
        description: 'Wartung an Spezialteams, Reparaturen an allgemeine Teams',
      },
      {
        title: 'SLA-Fristwarnungen',
        description: 'Regionalleitungen werden vor Fristablauf informiert',
      },
      { title: 'Mietereinzug', description: 'Begehung, Anlagenprüfung und Dokumente' },
      {
        title: 'Compliance-Dokumentenprüfung',
        description: 'Pflichtdokumente vor dem Abschluss angehängt',
      },
    ],
  },
  benefits: {
    learnMore: 'Mehr erfahren',
    items: [
      {
        href: '/features/audit-tracking',
        title: 'Konsistenz',
        description: 'Jeder Auftrag folgt denselben Schritten, präzise und konform.',
      },
      {
        href: '/features/reactive-maintenance',
        title: 'Effizienz',
        description:
          'Wiederholbare Logik reduziert manuelle Übergaben von der Erstellung bis zum Abschluss.',
      },
      {
        href: '/features/analytics-and-reporting',
        title: 'Erkenntnisse',
        description:
          'Strukturierte Workflows liefern sauberere Daten und aussagekräftigere Berichte.',
      },
    ],
  },
}

export const preventivePage = {
  hero: {
    eyebrow: 'Vorbeugende & vorausschauende Instandhaltung',
    title: 'Jedem Ausfall einen Schritt voraus',
    description:
      'Planen Sie wiederkehrende Wartung für jede Anlage, handeln Sie auf Basis regelbasierter Vorhersagen und halten Sie die Technik an jedem Standort am Laufen, mit bis zu 40 % weniger reaktiver Arbeit.',
    primaryAction: { label: 'Demo buchen', href: '/contact' },
    secondaryAction: { label: 'Plattform entdecken', href: '/platform' },
    highlights: ['Wiederkehrende Pläne', 'Regelbasierte Vorhersagen', 'Compliance-Kalender'],
    prediction: {
      title: 'Fleet-Vorhersage',
      asset: 'AHU-07 · Tower B, E14',
      risk: 'Hohes Risiko',
      message: 'Vibration seit 9 Tagen über dem Normalwert. Wartung innerhalb von 7 Tagen planen.',
      action: 'Auftrag erstellen',
    },
  },
  challenge: {
    pressure: {
      title: 'Jede Anlage hat ihren eigenen Rhythmus',
      description:
        'Klima, Aufzüge, Sanitär, Beleuchtung und Brandschutz folgen an jedem Standort eigenen Plänen, Checklisten und Prüfterminen.',
      points: ['Wiederkehrende Pläne', 'Gesetzliche Prüfungen', 'Mehrere Standorte'],
    },
    answer: {
      title: 'Fleet hält jeden Plan im Takt',
      description:
        'Fleet macht aus Wartungsplänen automatische Termine und zeigt mit Live-Daten, wo Sie als Nächstes handeln sollten.',
    },
  },
  capabilities: {
    title: 'So steuern Sie Ihre vorbeugende Instandhaltung intelligent',
    description:
      'Von wiederkehrenden Plänen bis zu nachvollziehbaren Vorhersagen: Ihr ganzes Programm auf einer Plattform.',
    tabs: [
      {
        icon: 'schedules',
        label: 'Pläne',
        title: 'Wiederkehrende Wartungspläne',
        description:
          'Planen Sie vorbeugende Aufgaben für Klima, Sanitär, Beleuchtung, Aufzüge und Brandschutz nach Zeit oder Nutzung.',
        points: [
          'Zeit- und nutzungsbasierte Pläne',
          'Bewährte Checklisten je Anlagentyp',
          'Arbeit ausgewogen auf Techniker und Dienstleister verteilt',
        ],
        visual: {
          kind: 'jobs',
          title: 'Geplante Aufträge · Diese Woche',
          items: [
            {
              title: 'Filterwechsel Klimaanlage',
              location: 'Tower B · AHU-07',
              status: 'Fällig in 4 Std.',
              tone: 'due',
            },
            {
              title: 'Jährliche Aufzugsprüfung',
              location: 'Aufzüge L1–L3',
              status: 'Geplant',
              tone: 'info',
            },
            {
              title: 'Test Notbeleuchtung',
              location: 'Northgate Mall',
              status: 'Erledigt',
              tone: 'done',
            },
          ],
        },
      },
      {
        icon: 'workOrders',
        label: 'Aufträge',
        title: 'Aufträge automatisch erstellt',
        description:
          'Fleet erzeugt Wartungsaufträge aus dem Plan jeder Anlage und weist sie mit Checklisten dem richtigen Team zu.',
        points: [
          'Aufträge aus jedem Wartungsplan',
          'Zuweisung an interne Teams oder Dienstleister',
          'Fotonachweise und Messwerte beim Abschluss',
        ],
        visual: {
          kind: 'steps',
          title: 'Wartungsautomatisierung',
          steps: [
            { kind: 'Plan', text: 'Kältemaschine CH-02 · Quartalswartung' },
            { kind: 'Dann', text: 'Auftrag 14 Tage vorher erstellen' },
            { kind: 'Dann', text: 'Klimadienstleister zuweisen + Checkliste anhängen' },
          ],
        },
      },
      {
        icon: 'predictions',
        label: 'Vorhersagen',
        title: 'Nachvollziehbare Warnungen',
        description:
          'Regelbasiertes maschinelles Lernen bewertet Anlagenrisiken aus Live- und Verlaufsdaten, und jede Warnung verweist auf ihre Regel.',
        points: [
          'Anlagenrisiko aus Live- und Verlaufsdaten',
          'Jede Warnung mit der auslösenden Regel verknüpft',
          'Mit einem Klick von der Vorhersage zum Auftrag',
        ],
        visual: {
          kind: 'jobs',
          title: 'Risikowarnungen',
          items: [
            {
              title: 'AHU-07 Vibration steigt',
              location: 'Tower B · Ebene 14',
              status: 'Hohes Risiko',
              tone: 'overdue',
            },
            {
              title: 'Pumpe P-03 Druckabweichung',
              location: 'Harbour Point',
              status: 'Mittleres Risiko',
              tone: 'due',
            },
            {
              title: 'Kältemaschine CH-02 wieder im Normbereich',
              location: 'Harbour Point',
              status: 'Behoben',
              tone: 'done',
            },
          ],
        },
      },
      {
        icon: 'compliance',
        label: 'Compliance',
        title: 'Ein Compliance-Kalender für jeden Standort',
        description:
          'Verfolgen Sie gesetzliche Prüfungen und Zertifikate mit Erinnerungen vor jeder Fälligkeit und speichern Sie die Nachweise am Datensatz.',
        points: [
          'Erinnerungen vor jeder Prüfung und jedem Zertifikat',
          'Zertifikate an jeder Anlage gespeichert',
          'Prüfbereite Historie für jeden Standort',
        ],
        visual: {
          kind: 'files',
          title: 'Anstehende Compliance',
          items: [
            {
              title: 'Brandschutzzertifikat',
              location: 'Tower B · Fällig 30. Okt.',
              status: 'In 24 Tagen',
              tone: 'due',
            },
            {
              title: 'Aufzugsprüfbericht',
              location: 'Aufzüge · Fällig 12. Nov.',
              status: 'Geplant',
              tone: 'info',
            },
            {
              title: 'Legionellen-Gefährdungsbeurteilung',
              location: 'Bayview Residences',
              status: 'Aktuell',
              tone: 'done',
            },
          ],
        },
      },
    ] satisfies (Omit<OverviewModule, 'id' | 'tag'> & { icon: PreventiveIcon; label: string })[],
  },
  rows: [
    {
      tag: 'Regelbasierte KI',
      title: 'Vorhersagen, die Ausfälle verhindern',
      description:
        'Fleet beobachtet Anlagentrends und erkennt frühe Warnsignale, damit Ihr Team handelt, bevor Mieter etwas merken.',
      points: [
        'Messwerte über dem Normalwert lösen eine Warnung aus',
        'Empfohlener nächster Schritt bei jeder Warnung',
        'Vorgeschlagene Pläne für neue Anlagen mit RunnerAI',
      ],
      visual: {
        kind: 'log',
        title: 'Vorhersage-Aktivität',
        entries: [
          {
            when: '09:42',
            who: 'Fleet',
            what: 'meldet AHU-07-Vibration seit 9 Tagen über Normalwert',
          },
          { when: '09:44', who: 'Aisha K.', what: 'hat aus der Warnung einen Auftrag erstellt' },
          {
            when: '08:58',
            who: 'RunnerAI',
            what: 'hat einen Wartungsplan für 6 neue Kältemaschinen vorgeschlagen',
          },
        ],
      },
    },
    {
      tag: 'Planung',
      title: 'Vorbeugen zahlt sich aus',
      description:
        'Verlagern Sie Arbeit von reaktiven Reparaturen zu geplanter Wartung und sehen Sie den Unterschied bei Verfügbarkeit, Kosten und Komfort.',
      points: [
        'Vorbeugende und reaktive Arbeit nebeneinander verfolgt',
        'Instandhaltungskosten nach Lebenszyklus geplant',
        'Wiederkehrende Störungen werden zu vorbeugenden Aufgaben',
      ],
      visual: {
        kind: 'chart',
        title: 'Anteil geplanter Instandhaltung',
        stats: [
          { label: 'Geplante Arbeit', value: '78 %' },
          { label: 'Reaktive Arbeit', value: '22 %' },
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
      tag: 'Teams und Dienstleister',
      title: 'Reibungslose Abstimmung mit Teams und Dienstleistern',
      description:
        'Leiten Sie jeden vorbeugenden Auftrag an interne Techniker oder Vertragsdienstleister und verfolgen Sie den Fortschritt in Echtzeit.',
      points: [
        'Wartungsaufträge nach Standort, Gewerk und Vertrag',
        'Dienstleister steigen über einen einfachen Link ein',
        'Fotonachweise und Messwerte bei jedem Abschluss',
      ],
      visual: {
        kind: 'jobs',
        title: 'Wartung dieses Monats nach Zuständigkeit',
        items: [
          {
            title: 'Internes Klimateam',
            location: '24 Aufträge · 3 Standorte',
            status: '92 % erledigt',
            tone: 'done',
          },
          {
            title: 'Aufzugsdienstleister',
            location: '9 Aufträge · 5 Standorte',
            status: 'Im Plan',
            tone: 'info',
          },
          {
            title: 'Brandschutzdienstleister',
            location: '12 Aufträge · 4 Standorte',
            status: '2 heute fällig',
            tone: 'due',
          },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  steps: {
    eyebrow: 'So funktioniert es',
    title: 'Vom Plan zum Nachweis',
    items: [
      {
        title: 'Planen',
        description: 'Anlagen und Wartungspläne laden oder mit bewährten Vorlagen starten.',
      },
      {
        title: 'Terminieren',
        description: 'Fleet erstellt und vergibt Aufträge automatisch vor jeder Fälligkeit.',
      },
      {
        title: 'Erledigen',
        description: 'Techniker folgen Checklisten und erfassen Fotos und Messwerte vor Ort.',
      },
      {
        title: 'Vorhersagen',
        description:
          'Live- und Verlaufsdaten zeigen Risiken früh, sodass Pläne immer besser werden.',
      },
    ],
  },
  banner: {
    eyebrow: 'Jetzt starten',
    title: 'Vorbeugende Instandhaltung richtig planen',
    description:
      'Unser Team lädt beim Onboarding gemeinsam mit Ihnen Anlagen und Wartungspläne, damit Termine ab Ihrer ersten Woche laufen.',
    action: { label: 'Demo buchen', href: '/contact' },
  },
  trust: {
    title: 'Vorbeugende Instandhaltung, auf die Sie sich verlassen können',
    description:
      'Fleet ist für Immobilienteams entwickelt, die komplexe Anlagen über mehrere Objekte hinweg betreuen.',
    items: [
      {
        title: 'Für Immobilien entwickelt',
        description: 'Regeln und Pläne je Objekt, Region oder Portfolio.',
      },
      {
        title: 'Mobil im Einsatz',
        description:
          'Techniker erledigen Checklisten auf jedem Smartphone oder Tablet, iOS und Android.',
      },
      {
        title: 'Prüfbereite Nachweise',
        description: 'Jede Prüfung und Wartung mit Zeitstempel und Verantwortlichem.',
      },
    ],
  },
  quote: {
    text: 'Fleet hat unsere reaktive Instandhaltung um fast 40 % reduziert. Endlich haben wir Techniker, Anlagenprotokolle und Auftragsdaten an einem Ort.',
    author: 'Leitung Objektbetrieb',
    company: 'Gemischt genutztes Quartier',
  },
  industries: {
    title: 'Vorbeugende Instandhaltung für jede Objektart',
    description:
      'Vom Einkaufszentrum bis zum Logistikzentrum passt sich Fleet Ihren Anlagen und Ihrem Markt an.',
  },
  integrate: {
    title: 'Für Integration gemacht',
    description:
      'Binden Sie Gebäudeleittechnik an, damit Alarme und Messwerte in Ihre Wartungspläne einfließen, neben mehr als 20 weiteren Integrationen.',
    action: { label: 'Alle Integrationen ansehen', href: '/platform/integrations' },
  },
}
