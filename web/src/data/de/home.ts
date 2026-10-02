import type { BadgeTone } from '@/components/ui/Badge.astro'

export type StatusItem = {
  title: string
  location?: string
  status: string
  tone: BadgeTone
}

export const meta = {
  title: 'Fleet | Vereinte Daten und Intelligenz für Immobilien',
  description:
    'Fleet ist die Plattform für das Management von Gewerbeimmobilien, entwickelt für Strategie, Betrieb und Instandhaltung.',
}

export const hero = {
  announcement: {
    label: 'Neu',
    text: 'Regelbasierte KI-Agenten für Portfolios mit vielen Standorten',
    href: '/#ai',
  },
  title: 'Vereinte Daten und Intelligenz für Immobilien',
  description:
    'Fleet ist die Plattform für das Management von Gewerbeimmobilien, entwickelt für Strategie, Betrieb und Instandhaltung – jeder Standort, jede Anlage und jeder Arbeitsauftrag an einem Ort.',
  primaryAction: { label: 'Demo buchen', href: '/contact' },
  secondaryAction: { label: 'Plattform entdecken', href: '/#platform' },
  highlights: ['iOS & Android', 'Integrierte Audit-Logs', 'Getrennte Daten pro Organisation'],
}

export const showcase = {
  greeting: 'Willkommen, John S.',
  scope: 'Portfolio · 14 Standorte',
  filters: ['Alle Regionen', 'Letzte 30 Tage'],
  stats: [
    { label: 'Offene Arbeitsaufträge', value: '128' },
    { label: 'SLA erfüllt', value: '96,4 %' },
    { label: 'Wartung fällig', value: '37' },
  ],
  workOrders: [
    {
      id: 'WO-2291',
      title: 'Kältemaschine: Niederdruckalarm',
      location: 'Harbour Point · Technikraum',
      status: '2 T überfällig',
      tone: 'overdue',
    },
    {
      id: 'WO-2304',
      title: 'HLK-Filterwechsel',
      location: 'Tower B · Etage 14',
      status: 'Fällig in 4 Std.',
      tone: 'due',
    },
    {
      id: 'WO-2310',
      title: 'Quartalsprüfung Brandschutztür',
      location: 'Northgate Mall · Treppe A',
      status: 'Geplant',
      tone: 'info',
    },
    {
      id: 'WO-2288',
      title: 'Reparatur Ladetor',
      location: 'Westport DC · Rampe 07',
      status: 'Erledigt',
      tone: 'done',
    },
  ] satisfies (StatusItem & { id: string })[],
  prediction: {
    title: 'Fleet-Prognose',
    asset: 'AHU-07 · Tower B, E14',
    risk: 'Hohes Risiko',
    message:
      'Vibration liegt seit 9 Tagen über dem Normalwert. Planen Sie innerhalb von 7 Tagen eine vorbeugende Wartung ein.',
    trend: [30, 34, 32, 38, 36, 42, 40, 48, 55, 60, 66, 72, 80, 92],
    alertFrom: 9,
    rule: 'Regel R-114 · nachvollziehbar',
    action: 'Arbeitsauftrag anlegen',
  },
  audit: [
    { who: 'Aisha K.', what: 'hat WO-2288 abgeschlossen', when: '2 Min.' },
    { who: 'Workflow', what: 'hat WO-2291 an Dienstleister eskaliert', when: '1 Std.' },
    { who: 'Marco L.', what: 'hat Brandschutzgenehmigung hochgeladen', when: '3 Std.' },
  ],
}

export const unifiedModel = {
  eyebrow: 'Eine zentrale Datenbasis',
  title: 'Von verstreuten Tools zu einem einheitlichen Betriebsmodell',
  description:
    'Tabellen, Postfächer, Netzlaufwerke und Dienstleisterportale enthalten jeweils nur einen Teil des Bildes. Fleet führt sie in einem strukturierten Datensatz zusammen – damit jede Entscheidung mit dem vollständigen Kontext beginnt.',
  sources: [
    'Tabellen',
    'E-Mail-Verläufe',
    'Netzlaufwerke',
    'Dienstleisterportale',
    'Papierchecklisten',
  ],
  outputs: ['Live-Dashboards', 'Anlagenhistorie', 'Prüfpfad', 'Prognosen'],
}

export const platform = {
  eyebrow: 'Die Plattform',
  title: 'Nicht einfach ein weiteres CMMS. Gebaut für Immobilien mit vielen Standorten.',
  description:
    'Aktivieren Sie nur die Module, die Ihr Team braucht. Alle nutzen dasselbe Datenmodell – Standorte, Anlagen, Personen und Historie bleiben verknüpft.',
  workOrders: {
    title: 'Arbeitsaufträge & SLAs',
    description:
      'Planen Sie Wartungsaufgaben, verfolgen Sie spontane Reparaturen und leiten Sie Aufträge an eigene Teams oder Dienstleister weiter.',
    items: [
      { initials: 'AK', title: 'Jährliche Kesselwartung', status: 'Fällig in 4 Std.', tone: 'due' },
      {
        initials: 'ML',
        title: 'Wasserschaden, Einheit 3B',
        status: '2 T überfällig',
        tone: 'overdue',
      },
      { initials: 'JT', title: 'Test Notbeleuchtung', status: 'Erledigt', tone: 'done' },
    ] satisfies (StatusItem & { initials: string })[],
  },
  assets: {
    title: 'Anlagenmanagement',
    description:
      'Digitale Profile mit Wartungshistorie, Kosten, Garantien und Handbüchern – Gebäuden und Räumen zugeordnet.',
    asset: {
      name: 'Kältemaschine CH-02',
      location: 'Harbour Point · Technikraum B2',
      status: 'In Betrieb',
      facts: [
        { label: 'Letzte Wartung', value: '12. Sep.' },
        { label: 'Garantie', value: 'März 2028' },
        { label: 'Kosten lfd. Jahr', value: '$4,210' },
      ],
    },
  },
  documents: {
    title: 'Dokumentenmanagement',
    description:
      'Handbücher, Garantien, Prüfberichte und Genehmigungen – prüfungsbereit und standortübergreifend verfügbar.',
    items: [
      {
        title: 'Brandschutzzertifikat.pdf',
        location: 'Tower B · Genehmigung',
        status: 'Läuft in 30 T ab',
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
        location: 'Hauptaufzüge · Bericht',
        status: 'Geprüft',
        tone: 'done',
      },
    ] satisfies StatusItem[],
  },
  workflows: {
    title: 'Individuelle Workflows',
    description:
      'Machen Sie Anfragen automatisch zu Aufgaben. Freigaben lösen Arbeitsaufträge und Benachrichtigungen an Dienstleister aus, ganz ohne manuelle Übergaben.',
    steps: [
      { kind: 'Auslöser', text: 'Antrag auf Geräte-Upgrade eingereicht' },
      { kind: 'Wenn', text: 'Vom Standortleiter freigegeben' },
      { kind: 'Dann', text: 'Arbeitsauftrag anlegen + Dienstleister benachrichtigen' },
    ],
  },
  auditLogs: {
    title: 'Audit-Logs',
    description:
      'Jede Änderung wird mit Zeitstempel und Urheber erfasst. Bleiben Sie compliant, ohne Papierspuren hinterherzulaufen.',
    entries: [
      { when: '09:42', who: 'Aisha K.', what: 'hat Status von WO-2304 auf In Bearbeitung gesetzt' },
      { when: '09:15', who: 'Workflow', what: 'hat WO-2310 dem FM-Team Northgate zugewiesen' },
      { when: '08:58', who: 'Marco L.', what: 'hat Prüfbericht an CH-02 angehängt' },
    ],
  },
  mobile: {
    title: 'Mobil im Außendienst',
    description:
      'Für Techniker und Mieter auf iOS und Android. Melden Sie Schäden mit Fotos, Notizen und verknüpften Anlagen.',
    heading: 'Heute · 4 Aufgaben',
    task: {
      title: 'Prüfung Brandschutztür',
      location: 'Etage 3 · Treppenhaus A',
      status: 'Fällig in 2 Std.',
      tone: 'due',
    } satisfies StatusItem,
    actions: ['Starten', 'Foto hinzufügen'],
  },
}

export const aiAgents = {
  eyebrow: 'Fleet KI-Agenten',
  title: 'Fragen Sie Ihr Portfolio, was Sie wollen',
  description:
    'Der KI-Agent von Fleet beantwortet Fragen in natürlicher Sprache auf Basis Ihrer aktuellen Portfoliodaten und erstellt zu jeder Antwort das passende Dashboard. Ganz ohne Pivot-Tabellen oder Berichtsanfragen.',
  points: [
    {
      title: 'Antworten in natürlicher Sprache',
      description:
        'Fragen Sie nach Kosten, SLAs, Anlagen oder Dienstleistern und erhalten Sie Antworten aus Ihren Live-Daten, nicht aus dem Export vom letzten Monat.',
    },
    {
      title: 'Dashboards im Handumdrehen',
      description:
        'Zu jeder Antwort gibt es ein Diagramm, das Sie verfeinern, teilen oder an ein Team-Dashboard anheften können.',
    },
    {
      title: 'Jede Antwort nachvollziehbar',
      description:
        'Antworten nennen die zugrunde liegenden Arbeitsaufträge und Anlagen und laufen für jede Organisation in einer isolierten Umgebung.',
    },
  ],
  chat: {
    assistant: 'Fleet Assistant',
    context: 'Live-Daten · 14 Standorte',
    question:
      'Welche Standorte hatten im letzten Quartal die meisten HLK-Ausfallzeiten, und was hat uns das gekostet?',
    answer: {
      lead: 'Harbour Point',
      body: 'lag mit 46 Stunden HLK-Ausfall vorn, überwiegend durch die Kältemaschine CH-02. Über alle Standorte hinweg kostete der HLK-Ausfall',
      cost: '$38,400',
      tail: 'im Q3, 18 % mehr als im Q2.',
    },
    chartTitle: 'HLK-Ausfallzeit nach Standort · Q3',
    chartBadge: 'Generiertes Dashboard',
    stats: [
      { label: 'Stunden gesamt', value: '112' },
      { label: 'Kosten', value: '$38.4k' },
      { label: 'ggü. Q2', value: '+18 %', trend: 'up' },
    ],
    rows: [
      { site: 'Harbour Point', hours: 46 },
      { site: 'Tower B', hours: 28 },
      { site: 'Northgate Mall', hours: 19 },
      { site: 'Bayview Hotel', hours: 12 },
      { site: 'Westport DC', hours: 7 },
    ],
    sources: 'Quellen: 86 Arbeitsaufträge · 14 Anlagen',
    action: 'An Dashboard anheften',
    followUps: [
      'Nach Anlage aufschlüsseln',
      'Mit dem Vorjahr vergleichen',
      'Welche Dienstleister waren beteiligt?',
    ],
    placeholder: 'Fragen Sie nach einem Standort, einer Anlage oder einem Dienstleister…',
  },
}

export const solutions = {
  eyebrow: 'Lösungen',
  title: 'Eine Plattform, zugeschnitten auf Ihre Branche',
  sectors: [
    {
      label: 'Gewerbe',
      title: 'Büroimmobilien',
      site: 'Harbour Point · 22 Etagen',
      description:
        'Halten Sie Bürotürme mit vielen Mietern am Laufen – mit Wartungsplänen, Dienstleisterkoordination und SLA-Dashboards für jede Etage.',
      points: [
        'Mieteranfragen nach Etage und Gewerk verteilt',
        'Dienstleisterleistung pro Vertrag erfasst',
        'Budgetberichte pro Gebäude',
      ],
      tasks: [
        {
          title: 'HLK-Filterwechsel',
          location: 'Etage 14 · AHU-07',
          status: 'Fällig in 4 Std.',
          tone: 'due',
        },
        {
          title: 'Jährliche Aufzugsprüfung',
          location: 'Hauptaufzüge E1–E3',
          status: 'Geplant',
          tone: 'info',
        },
        {
          title: 'Störung Lobbybeleuchtung',
          location: 'Erdgeschoss',
          status: 'Erledigt',
          tone: 'done',
        },
      ],
    },
    {
      label: 'Einzelhandel',
      title: 'Einzelhandel',
      site: 'Northgate Mall · 180 Einheiten',
      description:
        'Halten Sie Ladenflächen und Allgemeinbereiche kundenbereit – mit geplanten Aufgaben, SLA-Tracking und Echtzeit-Dashboards, gestützt von individuellen Workflows.',
      points: [
        'Regelmäßige Kontrollen der Allgemeinflächen',
        'Arbeiten nach Ladenschluss mit Mietern abgestimmt',
        'SLA-Tracking pro Auftragnehmer',
      ],
      tasks: [
        {
          title: 'Grundreinigung Rolltreppe',
          location: 'Atrium · E2',
          status: 'Fällig in 2 Std.',
          tone: 'due',
        },
        {
          title: 'Fettabscheider Food Court',
          location: 'Etage 2',
          status: '1 T überfällig',
          tone: 'overdue',
        },
        {
          title: 'Prüfung Parkhausbeleuchtung',
          location: 'P1–P3',
          status: 'Erledigt',
          tone: 'done',
        },
      ],
    },
    {
      label: 'Hotellerie',
      title: 'Hotellerie',
      site: 'Bayview Hotel · 312 Zimmer',
      description:
        'Verwalten Sie vorbeugende Kontrollen, Dienstleisterprotokolle und Compliance-Vorgaben – mit Prüfpfad für Gästesicherheit und regulatorische Sicherheit.',
      points: [
        'Zimmerbereitschaft an Instandhaltung gekoppelt',
        'Brandschutzkontrollen automatisch protokolliert',
        'Gästerelevante Probleme priorisiert',
      ],
      tasks: [
        {
          title: 'Zimmer 1204: Klima kühlt nicht',
          location: 'Etage 12',
          status: 'Fällig in 1 Std.',
          tone: 'due',
        },
        {
          title: 'Poolchemie-Protokoll',
          location: 'Deck Etage 5',
          status: 'Erledigt',
          tone: 'done',
        },
        {
          title: 'Prüfung Küchenabzugshaube',
          location: 'Hauptküche',
          status: 'Geplant',
          tone: 'info',
        },
      ],
    },
    {
      label: 'Logistik',
      title: 'Logistik',
      site: 'Westport DC · 14 Rampen',
      description:
        'Vermeiden Sie Ausfälle an Laderampen und Geräten mit Echtzeitdaten zum Anlagenzustand, direkt verknüpft mit der Reparaturplanung.',
      points: [
        'Verfügbarkeit von Rampen und Toren je Rampe',
        'Servicehistorie von Staplern und Fördertechnik',
        'Ausfallkosten pro Anlage',
      ],
      tasks: [
        {
          title: 'Hydraulikleck Überladebrücke',
          location: 'Rampe 07',
          status: '3 Std. überfällig',
          tone: 'overdue',
        },
        {
          title: 'Wartung Schnelllauftor',
          location: 'Rampen 1–6',
          status: 'Fällig in 6 Std.',
          tone: 'due',
        },
        {
          title: 'Sprinkler-Durchflusstest',
          location: 'Lager A',
          status: 'Erledigt',
          tone: 'done',
        },
      ],
    },
    {
      label: 'Wohnen',
      title: 'Wohnimmobilien',
      site: 'Parkside Residences · 4 Häuser',
      description:
        'Bringen Sie Pflege der Allgemeinflächen, Mieterwechsel und Bewohneranfragen in Einklang – für sichere, zufriedene und regelkonforme Wohnanlagen.',
      points: [
        'Bewohneranfragen per App',
        'Checklisten für Mieterwechsel',
        'Compliance-Protokolle pro Haus',
      ],
      tasks: [
        {
          title: 'Wohnung 3B: Wasserhahn tropft',
          location: 'Haus C',
          status: 'Fällig in 5 Std.',
          tone: 'due',
        },
        { title: 'Check Fitnessgeräte', location: 'Clubhaus', status: 'Erledigt', tone: 'done' },
        { title: 'Mieterwechsel Wohnung 7A', location: 'Haus A', status: 'Geplant', tone: 'info' },
      ],
    },
    {
      label: 'Fuhrparks',
      title: 'Fuhrparkmanagement',
      site: 'Metro-Depot · 64 Fahrzeuge',
      description:
        'Wartung, Reparaturen, Nutzung und Schadensfälle in einem Dashboard – mit synchronisierten Finanz- und Betriebsdaten.',
      points: [
        'Laufleistung, Nutzung und Standzeiten',
        'Schadensmeldungen mit Fotos direkt vor Ort',
        'Vorbeugende Wartung nach Kilometerstand',
      ],
      tasks: [
        {
          title: 'Transporter V-218: Bremsenservice',
          location: 'Depot Stellplatz 2',
          status: 'Fällig in 3 Std.',
          tone: 'due',
        },
        {
          title: 'Versicherungsfall #4471',
          location: 'Verknüpft: V-102',
          status: 'In Prüfung',
          tone: 'info',
        },
        {
          title: 'Reifenwechsel · 6 Fahrzeuge',
          location: 'Depot',
          status: 'Erledigt',
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
  eyebrow: 'Fleet Beratung',
  title: 'Wir übernehmen die schwere Arbeit',
  description:
    'Jede Phase ist an messbare operative Wirkung gekoppelt, damit Führungskräfte sehen, wie die Einführung konkrete Ergebnisse liefert.',
  action: { label: 'Mit einem Berater sprechen →', href: '/contact' },
  phases: [
    {
      title: 'Analysieren',
      description:
        'Legen Sie Ihren Bedarf fest und planen Sie den Weg von verstreuten Tools zu einer Plattform.',
    },
    {
      title: 'Wirkung modellieren',
      description:
        'Beziffern Sie Personaleffizienz, Ausfallzeiten, vorbeugende Wartung und Dienstleisterleistung.',
    },
    {
      title: 'Pilotieren',
      description:
        'Prüfen Sie Workflows und KPIs mit Managern und Außendienstteams vor dem vollständigen Rollout.',
    },
    {
      title: 'Ausrollen',
      description:
        'Standardisierte Workflows und Anlagensteuerung in jedem Gebäude und jeder Region.',
    },
  ],
}

export const demoCta = {
  title: 'Ihr gesamtes Portfolio an einem Ort',
  description:
    'Fünf Bürogebäude oder fünfzig Campus – erhalten Sie eine Vorführung, abgestimmt auf Ihre Standorte und Anlagen.',
  primaryAction: { label: 'Demo buchen', href: '/contact' },
}
