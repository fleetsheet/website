import type { NavLink } from '@/config'
import type { PlatformEntry } from '@/data/en/platform'
import type { CategoryPageContent, SolutionsShared } from '@/data/en/solutions'
import type { CategoryPageId, SolutionGroup, SolutionPageId } from '@/solutions'

export const menu = {
  label: 'Lösungen',
  groups: {
    category: 'Nach Kategorie',
  } satisfies Record<SolutionGroup, string>,
  promo: {
    title: 'Die passende Lösung finden',
    description: 'Sehen Sie, wie sich Fleet an Ihren Betrieb, Ihr Portfolio und Ihr Team anpasst.',
    action: {
      label: 'Demo buchen',
      href: '/contact',
    } satisfies NavLink,
  },
}

export const pages: Record<SolutionPageId, PlatformEntry> = {
  cafm: {
    label: 'CAFM/CMMS',
    summary: 'Ein vernetztes System für Instandhaltung, Anlagen und Gebäude.',
    meta: {
      title: 'CAFM- und CMMS-Software für Teams mit vielen Standorten | Fleet',
      description:
        'Fleet ist die cloudbasierte CAFM- und CMMS-Plattform, die Arbeitsaufträge, vorbeugende Wartung, Anlagen und Compliance für jeden Standort zusammenführt.',
    },
  },
  pms: {
    label: 'PMS/REMS',
    summary: 'Immobilienbetrieb und Portfolio in einer Live-Ansicht.',
    meta: {
      title: 'Software für Property- und Immobilienmanagement | Fleet',
      description:
        'Steuern Sie den Immobilienbetrieb im gesamten Portfolio mit Fleet: Budgets, Dokumente, Instandhaltung und Reporting in einer Plattform.',
    },
  },
  workOrders: {
    label: 'Arbeitsaufträge',
    summary: 'Jeden Auftrag erstellen, zuweisen und abschließen, mit voller Transparenz.',
    meta: {
      title: 'Software für Auftragsmanagement | Fleet',
      description:
        'Erstellen, zuweisen, verfolgen und schließen Sie Arbeitsaufträge an allen Standorten, mit mobilen Updates, SLA-Tracking und Fotonachweis.',
    },
  },
  fieldService: {
    label: 'Außendienstoptimierung',
    summary: 'Der richtige Techniker am richtigen Ort, einsatzbereit.',
    meta: {
      title: 'Software zur Außendienstoptimierung | Fleet',
      description:
        'Planen, zuweisen und verfolgen Sie Außendienstteams und Dienstleister an allen Standorten, mit mobilen Checklisten, Live-Status und Leistungsberichten.',
    },
  },
  tenants: {
    label: 'Mieter- und Bewohnermanagement',
    summary: 'Anfragen, Updates und Service, die Bewohner verfolgen können.',
    meta: {
      title: 'Software für Mieter- und Bewohnermanagement | Fleet',
      description:
        'Erfassen Sie Anfragen von Mietern und Bewohnern, halten Sie alle auf dem Laufenden und lösen Sie Anliegen schnell, in jedem Gebäude und jeder Einheit.',
    },
  },
  vendors: {
    label: 'Dienstleister- und Lieferantenmanagement',
    summary: 'Dienstleister, Angebote, Verträge und Leistung an einem Ort.',
    meta: {
      title: 'Software für Dienstleister- und Lieferantenmanagement | Fleet',
      description:
        'Koordinieren Sie Dienstleister und Lieferanten in einer Plattform, mit Angeboten, Freigaben, Verträgen, Zertifikaten und Leistungsbewertungen.',
    },
  },
}

export const shared: SolutionsShared = {
  actions: {
    primary: {
      label: 'Demo buchen',
      href: '/contact',
    },
    secondary: {
      label: 'Plattform entdecken',
      href: '/platform',
    },
  },
  results: {
    eyebrow: 'Ergebnisse',
    title: 'Messbare Ergebnisse an jedem Standort',
    description:
      'Immobilien- und Facility-Teams nutzen Fleet, um reaktive Arbeit zu senken, schnell zu starten und den Betrieb am Laufen zu halten.',
    items: [
      {
        value: 'Bis zu 40 %',
        label: 'weniger reaktive Instandhaltung',
      },
      {
        value: 'Unter 7 Tagen',
        label: 'bis Ihr Team startklar ist',
      },
      {
        value: '99,99 %',
        label: 'Verfügbarkeit, per SLA zugesichert',
      },
      {
        value: '20+',
        label: 'Integrationen in Ihre Systeme',
      },
    ],
  },
  why: {
    title: 'Warum Teams sich für Fleet entscheiden',
    description:
      'Fleet ist für Immobilien- und Facility-Teams mit vielen Standorten gemacht, mit Konfigurierbarkeit als Kern.',
    items: [
      {
        title: 'Flexibel',
        description:
          'Workflows, Regeln und Dashboards nach Objekt, Region oder Portfolio konfiguriert.',
      },
      {
        title: 'Intelligent',
        description:
          'RunnerAI und regelbasierte Prognosen zeigen jedem Team, was als Nächstes Aufmerksamkeit braucht.',
      },
      {
        title: 'Gemeinsam',
        description:
          'Eigene Teams, Dienstleister und Verantwortliche arbeiten auf jedem Gerät mit denselben Live-Daten.',
      },
    ],
  },
  industries: {
    title: 'Eine Plattform für jede Branche',
    description: 'Fleet passt sich an die Anlagen, Teams und Standards Ihrer Branche an.',
    items: [
      {
        label: 'Facility Management',
        photo: {
          id: 'inspectionClipboard',
          alt: 'Prüfer füllt eine Checkliste auf dem Klemmbrett aus',
        },
      },
      {
        label: 'Einkaufszentren und Handel',
        photo: {
          id: 'mallAtrium',
          alt: 'Besucher im Atrium eines Einkaufszentrums',
        },
      },
      {
        label: 'Hotellerie und Gastronomie',
        photo: {
          id: 'hotelHousekeeping',
          alt: 'Hauswirtschaftskraft bereitet ein Zimmer vor',
        },
      },
      {
        label: 'Schifffahrt und Logistik',
        photo: {
          id: 'warehouseTeam',
          alt: 'Lagerteam prüft Bestände zwischen Regalen',
        },
      },
      {
        label: 'Rechenzentren',
        photo: {
          id: 'dataCenter',
          alt: 'Serverreihen in einem Rechenzentrum',
        },
      },
      {
        label: 'Klima, Lifte und Aufzüge',
        photo: {
          id: 'hvacTechnicians',
          alt: 'Klimatechniker warten Dachgeräte',
        },
      },
    ],
  },
  integrate: {
    title: 'Fleet fügt sich in Ihre Systeme ein',
    description:
      'Verbinden Sie Buchhaltung, ERP, Gebäudeleittechnik, Mieterportale und Zutrittskontrolle über mehr als 20 Integrationen und eine offene REST API.',
    action: {
      label: 'Alle Integrationen ansehen',
      href: '/platform/integrations',
    },
  },
  faqTitle: 'Häufig gestellte Fragen',
  cta: {
    title: 'Jeden Standort souverän führen',
    description:
      'Erleben Sie in einer geführten Tour, wie Fleet Ihre Teams, Anlagen und Dienstleister zusammenbringt, zugeschnitten auf Ihr Portfolio.',
    primaryAction: {
      label: 'Demo buchen',
      href: '/contact',
    },
    secondaryAction: {
      label: 'Plattform entdecken',
      href: '/platform',
    },
    photo: {
      id: 'techniciansPanel',
      alt: 'Zwei Techniker prüfen eine Anlagensteuerung',
    },
  },
}

export const categories: Record<CategoryPageId, CategoryPageContent> = {
  cafm: {
    hero: {
      eyebrow: 'CAFM/CMMS',
      title: 'CAFM- und CMMS-Software für vernetzten Betrieb',
      description:
        'Fleet bringt Gebäude, Anlagen, Menschen und Compliance-Nachweise in einer Cloud-Plattform zusammen, damit jeder Standort mit Live-Daten arbeitet.',
      highlights: ['Aufträge und Wartung', 'Anlagenhistorie', 'Prüfbereite Nachweise'],
      photo: {
        id: 'technicianPlantRoom',
        alt: 'Techniker wartet Anlagen in einem Technikraum',
      },
      visual: {
        kind: 'jobs',
        title: 'Arbeitsaufträge · Harbour Point',
        items: [
          {
            title: 'Alarm Niederdruck Kältemaschine',
            location: 'Technikraum B2',
            status: 'In Arbeit',
            tone: 'info',
          },
          {
            title: 'Quartalsprüfung Feuerlöschpumpe',
            location: 'Pumpenraum',
            status: 'Heute fällig',
            tone: 'due',
          },
          {
            title: 'Reparatur Lobbybeleuchtung',
            location: 'Ebene 1',
            status: 'Erledigt',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Facility Management wird jedes Jahr komplexer',
        description:
          'Mehr Gebäude, Anlagen, Dienstleister und Prüftermine, jeweils mit eigenen Unterlagen, Plänen und Standards.',
        points: ['Viele Standorte', 'Viele Systeme', 'Viele Standards'],
      },
      answer: {
        title: 'Alles vernetzt in einem CAFM',
        description:
          'Fleet führt Anlagen, Teams, Dienstleister und Workflows in einer flexiblen Plattform für Immobilienportfolios zusammen.',
      },
    },
    capabilities: {
      title: 'Für alle Anforderungen im Facility Management',
      description:
        'Von der ersten Meldung bis zum Abschlussbericht: die gesamte Instandhaltung an einem Ort.',
      tabs: [
        {
          icon: 'workOrders',
          label: 'Aufträge',
          title: 'Reaktive Reparaturen schneller lösen',
          description:
            'Erstellen, zuweisen und verfolgen Sie Ad-hoc-Reparaturen mit Fotos, Prioritäten und Live-Updates aus dem Einsatz.',
          points: [
            'Meldungen mit Fotos und Standort',
            'Aufträge an eigene Teams oder Dienstleister',
            'SLA-Timer für jeden Auftrag',
          ],
          visual: {
            kind: 'jobs',
            title: 'Reaktive Aufträge · Tower B',
            items: [
              {
                title: 'Wasserschaden',
                location: 'Ebene 12 · Einheit 3B',
                status: '2 h überfällig',
                tone: 'overdue',
              },
              {
                title: 'Klimaanlage kühlt nicht',
                location: 'Ebene 8 · Büro',
                status: 'Zugewiesen',
                tone: 'info',
              },
              {
                title: 'Türschließer defekt',
                location: 'Lobby',
                status: 'Gelöst',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Vorbeugend',
          title: 'Vorausplanen und Lebensdauer verlängern',
          description:
            'Planen Sie wiederkehrende Wartung für Klima, Sanitär, Beleuchtung und Brandschutz nach Zeit oder Nutzung.',
          points: [
            'Wiederkehrende Pläne je Anlagentyp',
            'Checklisten für jeden Einsatz',
            'Aufträge vor dem Fälligkeitstermin erstellt',
          ],
          visual: {
            kind: 'steps',
            title: 'Wartungsplan',
            steps: [
              {
                kind: 'Plan',
                text: 'AHU-07 · monatliche Wartung',
              },
              {
                kind: 'Dann',
                text: 'Auftrag 7 Tage vorher erstellen',
              },
              {
                kind: 'Dann',
                text: 'Klimateam mit Checkliste zuweisen',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Anlagen',
          title: 'Jede Anlage vollständig dokumentiert',
          description:
            'Führen Sie ein Live-Verzeichnis aller Anlagen mit Wartungshistorie, Kosten, Garantien und Handbüchern.',
          points: [
            'Digitale Profile für jede Anlage',
            'Reparaturhistorie und Kosten im Zeitverlauf',
            'Erinnerungen zu Garantien und Verträgen',
          ],
          visual: {
            kind: 'asset',
            title: 'Anlagenprofil',
            name: 'Kältemaschine CH-02',
            location: 'Harbour Point · Technikraum B2',
            status: 'In Betrieb',
            facts: [
              {
                label: 'Letzte Wartung',
                value: '12. Sep.',
              },
              {
                label: 'Garantie',
                value: 'März 2028',
              },
              {
                label: 'Kosten lfd. Jahr',
                value: '4.210 $',
              },
              {
                label: 'Offene Aufträge',
                value: '1',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Berichte',
          title: 'Entscheidungen auf Basis von Live-Daten',
          description:
            'Sehen Sie, welche Gebäude die meisten wiederkehrenden Störungen haben, welche Anlagen das meiste Budget binden und welche Teams ihre SLAs erfüllen.',
          points: [
            'Live-Dashboards nach Standort und Team',
            'Eigene KPIs für jede Rolle',
            'Exporte für Audits und Gremien',
          ],
          visual: {
            kind: 'chart',
            title: 'SLA-Erfüllung nach Standort · Q3',
            stats: [
              {
                label: 'SLA erfüllt',
                value: '96,4 %',
              },
              {
                label: 'Offene Aufträge',
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
        tag: 'Automatisierung',
        title: 'Ein Betrieb, der mitwächst',
        description:
          'Automatisieren Sie Routineaufgaben mit dem Workflow Builder und lassen Sie RunnerAI zeigen, was als Nächstes ansteht.',
        points: [
          'Vorlagen und smarte Benachrichtigungen',
          'Freigaben nach Kosten, Standort oder Anlage',
          'Vorschläge von RunnerAI auf Basis von Live-Daten',
        ],
        visual: {
          kind: 'log',
          title: 'RunnerAI-Aktivität',
          entries: [
            {
              when: '09:42',
              who: 'RunnerAI',
              what: 'hat einen Wartungsplan für 6 neue Kältemaschinen vorgeschlagen',
            },
            {
              when: '09:15',
              who: 'RunnerAI',
              what: 'hat 3 Standorte mit wiederkehrenden Klimastörungen markiert',
            },
          ],
        },
        photo: {
          id: 'hvacTechnicians',
          alt: 'Klimatechniker warten Dachgeräte',
        },
      },
      {
        tag: 'Compliance',
        title: 'Prüfbereite Nachweise an jedem Standort',
        description:
          'Integrierte Prüfpfade, Dokumentenablage und Versionierung halten jeden Wartungsnachweis, jede Genehmigung und jede Prüfung in Ordnung.',
        points: [
          'Protokolle mit Zeitstempel für jede Aktion',
          'Zertifikate an jeder Anlage',
          'Exporte für jedes Audit mit wenigen Klicks',
        ],
        visual: {
          kind: 'files',
          title: 'Compliance · Tower B',
          items: [
            {
              title: 'Brandschutzzertifikat.pdf',
              location: 'Gültig bis Juni 2027',
              status: 'Gültig',
              tone: 'done',
            },
            {
              title: 'Aufzugsprüfung Q3.pdf',
              location: 'Kernaufzüge',
              status: 'Geprüft',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'inspectionClipboard',
          alt: 'Prüfer füllt eine Checkliste auf dem Klemmbrett aus',
        },
      },
      {
        tag: 'Zusammenarbeit',
        title: 'Ein gemeinsamer Datenstand für alle Teams',
        description:
          'Eigene Techniker, Dienstleister und Verantwortliche arbeiten mit denselben Live-Daten, auf Smartphone, Tablet oder Desktop.',
        points: [
          'Updates in Echtzeit geteilt',
          'Fotonachweis für jeden erledigten Auftrag',
          'Schneller Zugang für Dienstleister',
        ],
        visual: {
          kind: 'jobs',
          title: 'Teamaktivität',
          items: [
            {
              title: 'Marco L. · Intern',
              location: 'WO-2291 abgeschlossen',
              status: 'Erledigt',
              tone: 'done',
            },
            {
              title: 'CoolAir · Dienstleister',
              location: 'WO-2304 angenommen',
              status: 'Angenommen',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'colleaguesTablets',
          alt: 'Zwei Kollegen prüfen Aufträge auf Tablets',
        },
      },
    ],
    quote: {
      text: 'Fleet hat unsere reaktive Instandhaltung um fast 40 % reduziert. Endlich haben wir Techniker, Anlagenprotokolle und Auftragsdaten an einem Ort.',
      author: 'Leitung Objektbetrieb',
      company: 'Gemischt genutztes Quartier',
      photo: {
        id: 'factoryTechnician',
        alt: 'Techniker prüft eine Anlage mit dem Tablet',
      },
    },
    faq: [
      {
        question: 'Was ist CAFM-Software?',
        answer:
          'CAFM-Software (Computer-Aided Facility Management) bündelt Gebäude, Anlagen, Instandhaltung, Dokumente und Menschen in einem System, damit Facility-Teams jeden Standort planen, steuern und auswerten können.',
      },
      {
        question: 'Was ist der Unterschied zwischen CAFM und CMMS?',
        answer:
          'Ein CMMS konzentriert sich auf Instandhaltung und Anlagen, CAFM umfasst den gesamten Gebäudebetrieb. Fleet vereint beides: Arbeitsaufträge, vorbeugende Wartung, Anlagen, Dokumente und Reporting in einer Plattform.',
      },
      {
        question: 'Kann Fleet mehrere Standorte verwalten?',
        answer:
          'Ja. Fleet unterstützt mehrere Standorte von Haus aus. Legen Sie Regeln und Workflows je Objekt fest, setzen Sie regionale Verantwortliche ein und bündeln Sie Berichte für das gesamte Portfolio.',
      },
      {
        question: 'Lässt sich Fleet in bestehende Systeme integrieren?',
        answer:
          'Ja. Fleet verbindet sich mit Buchhaltung, ERP, Gebäudeleittechnik, Mieterportalen und Zutrittskontrolle über mehr als 20 Integrationen und eine offene REST API.',
      },
      {
        question: 'Wie lange dauert die Einführung von Fleet?',
        answer:
          'Die meisten Teams sind in unter 7 Tagen startklar. Unser Onboarding-Team hilft beim Import von Anlagen, Wartungsplänen und Nutzern.',
      },
    ],
  },
  pms: {
    hero: {
      eyebrow: 'PMS/REMS',
      title: 'Property- und Immobilien\u00admanagement in einer Plattform',
      description:
        'Fleet gibt Immobilienteams eine Live-Ansicht jedes Objekts, von Budgets und Dokumenten bis zu Instandhaltung, Dienstleistern und Compliance.',
      highlights: ['Portfolioansicht', 'Budgetkontrolle', 'Berichte für Gremien'],
      photo: {
        id: 'propertyManagerTablet',
        alt: 'Property Managerin mit Tablet vor Bürotürmen',
      },
      visual: {
        kind: 'asset',
        title: 'Objektprofil',
        name: 'Harbour Point',
        location: 'Gemischt genutzt · 14 Etagen',
        status: 'Aktiv',
        facts: [
          {
            label: 'Offene Aufträge',
            value: '12',
          },
          {
            label: 'SLA erfüllt',
            value: '96,4 %',
          },
          {
            label: 'Ausgaben lfd. Jahr',
            value: '184.000 $',
          },
          {
            label: 'Budget genutzt',
            value: '71 %',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Jedes Objekt hat seinen eigenen Rhythmus',
        description:
          'Mietverträge, Budgets, Instandhaltung, Dienstleister und Prüftermine laufen in jedem Gebäude in eigenem Tempo.',
        points: ['Portfoliodaten', 'Objektbudgets', 'Eigentümerberichte'],
      },
      answer: {
        title: 'Eine zentrale Datenbasis für Ihr Portfolio',
        description:
          'Fleet vereint die Betriebsdaten aller Objekte, damit Asset Manager, Property Manager und Eigentümer mit denselben Live-Zahlen arbeiten.',
      },
    },
    capabilities: {
      title: 'Ihr Portfolio mit Klarheit steuern',
      description: 'Immobilienbetrieb, Finanzen und Instandhaltung in einer Plattform verbunden.',
      tabs: [
        {
          icon: 'portfolio',
          label: 'Portfolio',
          title: 'Jedes Objekt auf einen Blick',
          description:
            'Sehen Sie offene Arbeiten, Ausgaben und Compliance-Status aller Objekte auf einer Karte und einem Dashboard.',
          points: [
            'Karten- und Listenansicht aller Objekte',
            'Status nach Gebäude, Region oder Eigentümer',
            'Vom Portfolio bis zur einzelnen Anlage',
          ],
          visual: {
            kind: 'chart',
            title: 'Ausgaben nach Objekt · lfd. Jahr',
            stats: [
              {
                label: 'Ausgaben',
                value: '184.000 $',
              },
              {
                label: 'Objekte',
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
          label: 'Budgets',
          title: 'Budgets und Kosten im Griff',
          description:
            'Verfolgen Sie Instandhaltungskosten nach Objekt, Kostenstelle und Dienstleister im Vergleich zum Budget, mit Freigaben ab festgelegten Schwellen.',
          points: [
            'Soll-Ist-Vergleich für jedes Objekt',
            'Ausgaben nach Kostenstelle und Dienstleister',
            'Freigaben ab festgelegten Schwellen',
          ],
          visual: {
            kind: 'jobs',
            title: 'Budget nach Objekt',
            items: [
              {
                title: 'Harbour Point',
                location: '62.000 $ von 80.000 $',
                status: '78 % genutzt',
                tone: 'info',
              },
              {
                title: 'Tower B',
                location: '31.000 $ von 35.000 $',
                status: '89 % genutzt',
                tone: 'due',
              },
              {
                title: 'Bayview',
                location: '18.000 $ von 30.000 $',
                status: '60 % genutzt',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'documents',
          label: 'Dokumente',
          title: 'Vom Mietvertrag bis zum Wartungsbericht',
          description:
            'Legen Sie Mietverträge, Verträge, Genehmigungen und Wartungsberichte ab, verknüpft mit Objekt, Einheit und Anlage.',
          points: [
            'Dateien mit Objekten und Einheiten verknüpft',
            'Versionshistorie für jedes Dokument',
            'Erinnerungen vor Ablauf von Genehmigungen und Verträgen',
          ],
          visual: {
            kind: 'files',
            title: 'Dokumente · Harbour Point',
            items: [
              {
                title: 'Mietübersicht 2026.pdf',
                location: 'Vermietung',
                status: 'Aktuell',
                tone: 'done',
              },
              {
                title: 'Brandschutzgenehmigung.pdf',
                location: 'Läuft in 30 Tagen ab',
                status: 'Verlängern',
                tone: 'due',
              },
              {
                title: 'Klima-Wartungsbericht.pdf',
                location: 'Technikraum B2',
                status: 'Geprüft',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Berichte',
          title: 'Berichte für Eigentümer und Gremien',
          description:
            'Teilen Sie Dashboards mit Leserechten mit Eigentümern und Gremien und planen Sie Berichte für alle Beteiligten.',
          points: [
            'Dashboards mit Leserechten für Eigentümer',
            'Geplante Berichte per E-Mail',
            'Management-Zusammenfassungen für das Portfolio',
          ],
          visual: {
            kind: 'steps',
            title: 'Eigentümerbericht',
            steps: [
              {
                kind: 'Daten',
                text: 'Ausgaben, SLAs und offene Arbeiten',
              },
              {
                kind: 'Filter',
                text: 'Harbour Point · letztes Quartal',
              },
              {
                kind: 'Senden',
                text: 'Am ersten Montag jedes Monats',
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Instandhaltung',
        title: 'Instandhaltung für jedes Objekt vernetzt',
        description:
          'Arbeitsaufträge, Wartungspläne und Anlagenhistorie fließen in jedes Objekt ein, damit Sie den Zustand des gesamten Portfolios sehen.',
        points: [
          'Offene und überfällige Arbeiten je Objekt',
          'Wartungserfüllung je Gebäude',
          'Anlagenkosten bis auf Portfolioebene',
        ],
        visual: {
          kind: 'jobs',
          title: 'Zustand des Portfolios',
          items: [
            {
              title: 'Harbour Point',
              location: '12 offene Aufträge',
              status: 'Im Plan',
              tone: 'done',
            },
            {
              title: 'Tower B',
              location: '3 überfällige Aufträge',
              status: 'Prüfen',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'apartmentBuilding',
          alt: 'Moderne Wohngebäude mit begrünten Außenanlagen',
        },
      },
      {
        tag: 'Mehrere Standorte',
        title: 'Vom einzelnen Gebäude zum Portfolio',
        description:
          'Legen Sie Regeln und Workflows je Objekt fest, setzen Sie regionale Teams ein und bündeln Sie Berichte über alle Standorte.',
        points: [
          'Regeln und Workflows je Objekt',
          'Regionale Teams und Berechtigungen',
          'Gebündelte Berichte für das Portfolio',
        ],
        visual: {
          kind: 'steps',
          title: 'Regionaler Rollout',
          steps: [
            {
              kind: 'Region',
              text: 'VAE · 6 Objekte',
            },
            {
              kind: 'Dann',
              text: 'Freigaberegeln anwenden',
            },
            {
              kind: 'Dann',
              text: 'Wochenbericht bündeln',
            },
          ],
        },
        photo: {
          id: 'engineersRooftop',
          alt: 'Zwei Ingenieure prüfen ein Tablet auf dem Dach',
        },
      },
      {
        tag: 'RunnerAI',
        title: 'Antworten zum Portfolio in Sekunden',
        description:
          'Fragen Sie RunnerAI nach der Dienstleisterleistung je Region oder einem Risiko-Dashboard für Ihre wichtigsten Objekte, und RunnerAI erstellt die Antwort aus Live-Daten.',
        points: [
          'Fragen in Alltagssprache',
          'Dashboards in Sekunden',
          'Antworten aus Live-Portfoliodaten',
        ],
        visual: {
          kind: 'log',
          title: 'RunnerAI-Aktivität',
          entries: [
            {
              when: '10:05',
              who: 'Sie',
              what: 'haben nach der Dienstleisterleistung in den VAE gefragt',
            },
            {
              when: '10:05',
              who: 'RunnerAI',
              what: 'hat ein Dashboard für 6 Objekte erstellt',
            },
          ],
        },
        photo: {
          id: 'warehouseAnalytics',
          alt: 'Teamleiter prüft Kennzahlen am Bildschirm',
        },
      },
    ],
    quote: {
      text: 'Fleet hat uns geholfen, die reaktive Instandhaltung um fast 40 % zu senken. Heute haben wir alle Standorte im Blick und reagieren schneller.',
      author: 'Betriebsleitung',
      company: 'Regionaler Einkaufszentrenbetreiber',
      photo: {
        id: 'mallAtrium',
        alt: 'Besucher im Atrium eines Einkaufszentrums',
      },
    },
    faq: [
      {
        question: 'Was ist ein PMS oder REMS?',
        answer:
          'Ein Property-Management-System (PMS) oder Real-Estate-Management-System (REMS) bündelt die Informationen zu Ihren Objekten, von Budgets und Dokumenten bis zu Instandhaltung und Dienstleistern, damit Teams das Portfolio steuern und auswerten können.',
      },
      {
        question: 'Wie unterstützt Fleet Property-Management-Teams?',
        answer:
          'Fleet verbindet Instandhaltung, Anlagen, Dokumente, Dienstleister und Budgets für jedes Objekt, mit Dashboards von der einzelnen Anlage bis zum gesamten Portfolio.',
      },
      {
        question: 'Können Eigentümer und Gremien die Leistung sehen?',
        answer:
          'Ja. Teilen Sie Dashboards mit Leserechten mit Eigentümern, Ausschüssen und Gremien und lassen Sie Berichte per E-Mail zustellen.',
      },
      {
        question: 'Verbindet sich Fleet mit meinem Property-Management- oder Buchhaltungssystem?',
        answer:
          'Ja. Fleet integriert sich mit Buchhaltung, ERP und Property-Management-Tools über mehr als 20 Integrationen und eine offene REST API.',
      },
      {
        question: 'Wächst Fleet mit unserem Portfolio?',
        answer:
          'Ja. Fleet unterstützt ein Gebäude oder Hunderte, mit Regeln je Objekt, regionalen Teams und Berichten für das gesamte Portfolio.',
      },
    ],
  },
  workOrders: {
    hero: {
      eyebrow: 'Arbeitsaufträge',
      title: 'Auftrags\u00admanagement, das jeden Auftrag voranbringt',
      description:
        'Erstellen, zuweisen, verfolgen und schließen Sie jeden Arbeitsauftrag an allen Standorten, mit Live-Updates aus dem Einsatz und voller Transparenz für Verantwortliche.',
      highlights: ['Mobile Updates', 'SLA-Tracking', 'Fotonachweis'],
      photo: {
        id: 'plumberRepair',
        alt: 'Installateur repariert eine Küchenspüle',
      },
      visual: {
        kind: 'jobs',
        title: 'Arbeitsaufträge · Heute',
        items: [
          {
            title: 'Jahreswartung Heizkessel',
            location: 'Northgate · Technikraum',
            status: 'Fällig in 4 h',
            tone: 'due',
          },
          {
            title: 'Wasserschaden, Einheit 3B',
            location: 'Tower B · Ebene 12',
            status: 'In Arbeit',
            tone: 'info',
          },
          {
            title: 'Test Notbeleuchtung',
            location: 'Bayview · Alle Etagen',
            status: 'Erledigt',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Jede Meldung braucht einen klaren Weg',
        description:
          'Meldungen kommen per Telefon, E-Mail und Chat, und jede braucht eine verantwortliche Person, eine Priorität und einen Termin.',
        points: ['Viele Kanäle', 'Viele Teams', 'Viele Prioritäten'],
      },
      answer: {
        title: 'Ein Ablauf von der Meldung bis zur Lösung',
        description:
          'Fleet macht aus jeder Meldung einen verfolgten Arbeitsauftrag, der mit SLAs und Statusupdates an das richtige Team geht.',
      },
    },
    capabilities: {
      title: 'Jeder Auftrag, vom Anfang bis zum Abschluss',
      description:
        'Aufträge erfassen, zuweisen, erledigen und auswerten, in einem durchgängigen Ablauf.',
      tabs: [
        {
          icon: 'requests',
          label: 'Meldungen',
          title: 'Meldungen aus allen Kanälen erfassen',
          description:
            'Meldungen von Mitarbeitenden, Mietern und per E-Mail werden automatisch zu Arbeitsaufträgen, mit Fotos und Standort.',
          points: [
            'E-Mail zu Auftrag mit Fleet Mail',
            'Fotos und Standort bei jeder Meldung',
            'Meldungen aus jedem Kanal erfasst',
          ],
          visual: {
            kind: 'steps',
            title: 'Neue Meldung',
            steps: [
              {
                kind: 'E-Mail',
                text: 'Klimaanlage kühlt nicht, Ebene 8',
              },
              {
                kind: 'Dann',
                text: 'Auftrag WO-2310 erstellt',
              },
              {
                kind: 'Dann',
                text: 'Dem Klimateam zugewiesen',
              },
            ],
          },
        },
        {
          icon: 'routing',
          label: 'Zuweisung',
          title: 'Jeden Auftrag an das richtige Team',
          description:
            'Weisen Sie nach Standort, Gewerk oder Dienstleister zu, mit Prioritäten und automatischen Benachrichtigungen.',
          points: [
            'Routing-Regeln nach Standort und Gewerk',
            'Prioritäten mit SLA-Zielen',
            'Sofortige Benachrichtigung bei Zuweisung',
          ],
          visual: {
            kind: 'jobs',
            title: 'Zuweisungen',
            items: [
              {
                title: 'Klimaanlage kühlt nicht',
                location: 'Ebene 8 · Klima',
                status: 'Klimateam',
                tone: 'info',
              },
              {
                title: 'Aufzugstür defekt',
                location: 'Kernaufzüge · Aufzüge',
                status: 'LiftCo',
                tone: 'info',
              },
              {
                title: 'Tropfender Wasserhahn',
                location: 'Einheit 1204 · Sanitär',
                status: 'Intern',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'mobile',
          label: 'Mobil',
          title: 'Updates direkt aus dem Einsatz',
          description:
            'Techniker nehmen Aufträge an, fügen Fotos hinzu und schließen Aufträge auf jedem Smartphone oder Tablet, iOS und Android.',
          points: [
            'Aufträge auf dem Smartphone annehmen',
            'Fotos und Notizen beim Abschluss',
            'Status sofort im Team geteilt',
          ],
          visual: {
            kind: 'log',
            title: 'Aktivität WO-2310',
            entries: [
              {
                when: '09:12',
                who: 'Fleet',
                what: 'hat den Auftrag aus der E-Mail erstellt',
              },
              {
                when: '09:20',
                who: 'Marco L.',
                what: 'hat angenommen und ist auf dem Weg zu Ebene 8',
              },
              {
                when: '10:05',
                who: 'Marco L.',
                what: 'hat den Auftrag mit 3 Fotos abgeschlossen',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'SLAs',
          title: 'SLA-Tracking für jeden Auftrag',
          description:
            'Behalten Sie offene Aufträge, Reaktionszeiten und überfällige Arbeiten in einem Dashboard im Blick.',
          points: [
            'Reaktions- und Lösungszeiten',
            'Überfällige Arbeiten hervorgehoben',
            'SLA-Ergebnisse nach Standort und Team',
          ],
          visual: {
            kind: 'chart',
            title: 'Durchschnittliche Reaktionszeit · Stunden',
            stats: [
              {
                label: 'SLA erfüllt',
                value: '96,4 %',
              },
              {
                label: 'Offene Aufträge',
                value: '128',
              },
            ],
            bars: [
              {
                label: 'Mo',
                value: 3,
              },
              {
                label: 'Di',
                value: 2,
              },
              {
                label: 'Mi',
                value: 4,
              },
              {
                label: 'Do',
                value: 2,
              },
              {
                label: 'Fr',
                value: 3,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Vorlagen',
        title: 'Wiederkehrende Aufträge laufen automatisch',
        description:
          'Vorlagen erstellen Routineaufträge planmäßig, mit Checklisten und Zuständigen.',
        points: [
          'Vorlagen für Routineaufträge',
          'Checklisten automatisch angehängt',
          'Zuständige nach Standort und Gewerk',
        ],
        visual: {
          kind: 'steps',
          title: 'Wiederkehrender Auftrag',
          steps: [
            {
              kind: 'Jeden',
              text: 'Montag, 06:00',
            },
            {
              kind: 'Dann',
              text: 'Reinigungscheckliste je Etage erstellen',
            },
          ],
        },
        photo: {
          id: 'engineersRooftop',
          alt: 'Zwei Ingenieure prüfen ein Tablet auf dem Dach',
        },
      },
      {
        tag: 'Freigaben',
        title: 'Kostenfreigaben integriert',
        description:
          'Angebote über festgelegten Schwellen gehen an die richtige Person, und jede Entscheidung wird am Auftrag protokolliert.',
        points: [
          'Schwellen nach Standort oder Kategorie',
          'Freigaben per Smartphone oder E-Mail',
          'Jede Entscheidung dokumentiert',
        ],
        visual: {
          kind: 'jobs',
          title: 'Offene Freigaben',
          items: [
            {
              title: 'Angebot Reparatur Kältemaschine',
              location: '6.800 $ · Harbour Point',
              status: 'Freigeben',
              tone: 'due',
            },
            {
              title: 'Austausch Aufzugstür',
              location: '2.100 $ · Tower B',
              status: 'Freigegeben',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'acFilterService',
          alt: 'Techniker wechselt einen Klimafilter',
        },
      },
      {
        tag: 'Berichte',
        title: 'Aus jedem Auftrag lernen',
        description:
          'Erkennen Sie wiederkehrende Störungen nach Gebäude, Anlage oder Dienstleister und verbessern Sie damit Ihre Wartungsstrategie.',
        points: [
          'Wiederkehrende Störungen je Anlage',
          'Kosten je Auftrag und Standort',
          'Trends im Zeitverlauf',
        ],
        visual: {
          kind: 'chart',
          title: 'Wiederkehrende Störungen · Q3',
          stats: [
            {
              label: 'Wiederholungen',
              value: '14',
            },
            {
              label: 'Standorte',
              value: '5',
            },
          ],
          bars: [
            {
              label: 'Klima',
              value: 46,
            },
            {
              label: 'Aufzüge',
              value: 28,
            },
            {
              label: 'Sanitär',
              value: 19,
            },
            {
              label: 'Licht',
              value: 12,
            },
            {
              label: 'Türen',
              value: 7,
            },
          ],
        },
        photo: {
          id: 'warehouseAnalytics',
          alt: 'Teamleiter prüft Kennzahlen am Bildschirm',
        },
      },
    ],
    quote: {
      text: 'Andere Plattformen waren zu komplex oder zu allgemein. Fleet bot uns eine maßgeschneiderte Lösung mit schnellerem Support.',
      author: 'Leitung Instandhaltung',
      company: 'Logistikzentrum',
      photo: {
        id: 'hvacTechnicians',
        alt: 'Klimatechniker warten Dachgeräte',
      },
    },
    faq: [
      {
        question: 'Was ist Software für Auftragsmanagement?',
        answer:
          'Software für Auftragsmanagement verfolgt jeden Instandhaltungsauftrag von der Meldung bis zum Abschluss, mit Zuständigkeit, Priorität, Termin, Kosten und Arbeitsnachweis.',
      },
      {
        question: 'Wie werden Meldungen zu Arbeitsaufträgen?',
        answer:
          'Meldungen von Mitarbeitenden, Mietern und per E-Mail werden automatisch zu Aufträgen. Mit Fleet Mail erzeugt eine E-Mail an Ihr Instandhaltungspostfach einen Auftrag mit allen Details.',
      },
      {
        question: 'Können Dienstleister Aufträge empfangen und bearbeiten?',
        answer:
          'Ja. Dienstleister erhalten Aufträge mit schnellem Zugang, nehmen sie an, aktualisieren sie und schließen sie mit Fotos und Notizen ab.',
      },
      {
        question: 'Brauchen Techniker spezielle Geräte?',
        answer:
          'Fleet läuft auf jedem Smartphone, Tablet oder Desktop, iOS und Android, sodass Techniker sofort loslegen können.',
      },
      {
        question: 'Wie verfolgt Fleet SLAs?',
        answer:
          'Jeder Auftrag hat SLA-Ziele für Reaktion und Lösung, und Dashboards zeigen die Ergebnisse nach Standort, Team und Dienstleister.',
      },
    ],
  },
  fieldService: {
    hero: {
      eyebrow: 'Außendienstoptimierung',
      title: 'Außendienst\u00adoptimierung für mobile Teams',
      description:
        'Schicken Sie den richtigen Techniker mit den richtigen Informationen zum richtigen Standort und verfolgen Sie den Fortschritt live, vom ersten Besuch bis zum Abschluss.',
      highlights: ['Smarte Zuweisung', 'Mobile Checklisten', 'Live-Status'],
      photo: {
        id: 'engineersRooftop',
        alt: 'Zwei Ingenieure prüfen ein Tablet auf dem Dach',
      },
      visual: {
        kind: 'log',
        title: 'Außendienst · Heute',
        entries: [
          {
            when: '08:10',
            who: 'Aisha K.',
            what: 'hat sich in Northgate · Technikraum angemeldet',
          },
          {
            when: '09:35',
            who: 'CoolAir',
            what: 'hat die Wartung AHU-07 mit Messwerten abgeschlossen',
          },
          {
            when: '10:20',
            who: 'Marco L.',
            what: 'hat die Aufzugsprüfung in Tower B begonnen',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Außendienstteams decken mehr Fläche ab',
        description:
          'Techniker wechseln täglich zwischen Standorten, Gewerken und Dienstleistern, und jeder Einsatz braucht die richtigen Details.',
        points: ['Mehrere Standorte', 'Verschiedene Gewerke', 'Enge SLAs'],
      },
      answer: {
        title: 'Jeder Einsatz startklar',
        description:
          'Fleet gibt Technikern Auftragsdetails, Anlagenhistorie und Checklisten auf das Smartphone und Verantwortlichen eine Live-Ansicht aller Teams.',
      },
    },
    capabilities: {
      title: 'Jeden Außeneinsatz optimieren',
      description:
        'Außendienstarbeit im gesamten Portfolio planen, zuweisen, erledigen und messen.',
      tabs: [
        {
          icon: 'scheduling',
          label: 'Planung',
          title: 'Den Tag souverän planen',
          description:
            'Planen Sie vorbeugende und reaktive Arbeiten nach Standort, Gewerk und Verfügbarkeit, mit ausgeglichener Auslastung über Teams und Dienstleister.',
          points: [
            'Pläne nach Standort, Gewerk und Verfügbarkeit',
            'Ausgeglichene Auslastung der Teams',
            'Vorbeugende und reaktive Arbeit gemeinsam',
          ],
          visual: {
            kind: 'jobs',
            title: 'Heute · Northgate',
            items: [
              {
                title: 'Monatswartung AHU-07',
                location: '08:00 · Aisha K.',
                status: 'Geplant',
                tone: 'info',
              },
              {
                title: 'Prüfung Brandschutztüren',
                location: '11:00 · Marco L.',
                status: 'Geplant',
                tone: 'info',
              },
              {
                title: 'Kontrolle Pumpenraum',
                location: '14:00 · CoolAir',
                status: 'Bestätigt',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'routing',
          label: 'Zuweisung',
          title: 'Nach Standort und Gewerk zuweisen',
          description:
            'Leiten Sie Aufträge an den nächstgelegenen qualifizierten Techniker oder Dienstleister, nach Gebäude, Zone oder Aufgabe.',
          points: [
            'Routing nach Gebäude und Zone',
            'Qualifikationen passend zum Auftrag',
            'Dienstleister im selben Ablauf',
          ],
          visual: {
            kind: 'steps',
            title: 'Zuweisungsregel',
            steps: [
              {
                kind: 'Auslöser',
                text: 'Klimaauftrag in Northgate',
              },
              {
                kind: 'Wenn',
                text: 'Priorität ist hoch',
              },
              {
                kind: 'Dann',
                text: 'Nächstgelegenen Klimatechniker zuweisen',
              },
            ],
          },
        },
        {
          icon: 'mobile',
          label: 'Vor Ort',
          title: 'Alles, was Techniker vor Ort brauchen',
          description:
            'Anlagenhistorie, Handbücher und Checklisten öffnen sich direkt im Auftrag, mit Fotos, Messwerten und Unterschriften vor Ort.',
          points: [
            'Anlagen per Suche oder Scan öffnen',
            'Checklisten mit Fotos und Messwerten',
            'Unterschrift beim Abschluss',
          ],
          visual: {
            kind: 'asset',
            title: 'Anlage vor Ort',
            name: 'Aufzug L2',
            location: 'Northgate Mall · Kernaufzüge',
            status: 'Wartung fällig',
            facts: [
              {
                label: 'Letzte Prüfung',
                value: '02. Aug.',
              },
              {
                label: 'Zertifikat',
                value: 'Gültig bis Jan. 2027',
              },
              {
                label: 'Handbuch',
                value: 'Aufzug L2 Handbuch.pdf',
              },
              {
                label: 'Offene Aufträge',
                value: '2',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Leistung',
          title: 'Leistung im Außendienst messen',
          description:
            'Sehen Sie Reaktionszeiten, Erledigung beim ersten Besuch und SLA-Ergebnisse nach Techniker, Team und Dienstleister.',
          points: [
            'Reaktionszeiten nach Team',
            'Erledigungsquote beim ersten Besuch',
            'SLA-Ergebnisse nach Dienstleister',
          ],
          visual: {
            kind: 'chart',
            title: 'Erledigung beim ersten Besuch · Q3',
            stats: [
              {
                label: 'Erster Besuch',
                value: '87 %',
              },
              {
                label: 'SLA erfüllt',
                value: '96,4 %',
              },
            ],
            bars: [
              {
                label: 'Klima',
                value: 88,
              },
              {
                label: 'Aufzüge',
                value: 84,
              },
              {
                label: 'Elektro',
                value: 91,
              },
              {
                label: 'Sanitär',
                value: 86,
              },
              {
                label: 'Brandschutz',
                value: 93,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Mobil',
        title: 'Für jede Umgebung gemacht',
        description:
          'Fleet funktioniert auch bei schwacher Verbindung, etwa in Technikräumen, Kellern und Parkhäusern, damit Updates das Team überall erreichen.',
        points: [
          'Leistung bei schwacher Verbindung',
          'Jedes Smartphone oder Tablet, iOS und Android',
          'Fotos und Messwerte am Auftrag gespeichert',
        ],
        visual: {
          kind: 'jobs',
          title: 'Updates aus dem Einsatz',
          items: [
            {
              title: 'Pumpenkontrolle Keller',
              location: 'Parkhaus B2',
              status: 'Synchronisiert',
              tone: 'done',
            },
            {
              title: 'Wartung Dach-AHU',
              location: 'Dachebene',
              status: 'Synchronisiert',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'factoryTechnician',
          alt: 'Techniker prüft eine Anlage mit dem Tablet',
        },
      },
      {
        tag: 'Kommunikation',
        title: 'Benachrichtigungen und Freigaben in Echtzeit',
        description:
          'Techniker erhalten neue Aufträge, Freigaben und Updates sofort, und Verantwortliche sehen jede Statusänderung im Moment, in dem sie passiert.',
        points: [
          'Sofortige Auftragsbenachrichtigungen',
          'Freigaben aus dem Einsatz',
          'Live-Status für Verantwortliche',
        ],
        visual: {
          kind: 'log',
          title: 'Benachrichtigungen',
          entries: [
            {
              when: '09:02',
              who: 'Fleet',
              what: 'hat den dringenden Auftrag WO-2318 an Aisha K. gesendet',
            },
            {
              when: '09:06',
              who: 'Aisha K.',
              what: 'hat angenommen und ist unterwegs',
            },
          ],
        },
        photo: {
          id: 'technicianPlantRoom',
          alt: 'Techniker wartet Anlagen in einem Technikraum',
        },
      },
      {
        tag: 'Dienstleister',
        title: 'Dienstleister im selben Ablauf',
        description:
          'Externe Techniker nehmen Aufträge über einen schnellen Zugang an, aktualisieren und schließen sie, zusammen mit Ihrem eigenen Team.',
        points: [
          'Schneller Zugang für Dienstleister',
          'Gleiche Checklisten und Standards',
          'Dienstleisteraufträge im selben Dashboard',
        ],
        visual: {
          kind: 'jobs',
          title: 'Dienstleisteraufträge',
          items: [
            {
              title: 'CoolAir · Klima',
              location: '4 Aufträge heute',
              status: 'Im Plan',
              tone: 'done',
            },
            {
              title: 'LiftCo · Aufzüge',
              location: '2 Aufträge heute',
              status: '1 fällig',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'hvacTechnicians',
          alt: 'Klimatechniker warten Dachgeräte',
        },
      },
    ],
    quote: {
      text: 'Fleet hat unsere reaktive Instandhaltung um fast 40 % reduziert. Endlich haben wir Techniker, Anlagenprotokolle und Auftragsdaten an einem Ort.',
      author: 'Leitung Objektbetrieb',
      company: 'Gemischt genutztes Quartier',
      photo: {
        id: 'warehouseTeam',
        alt: 'Lagerteam prüft Bestände zwischen Regalen',
      },
    },
    faq: [
      {
        question: 'Was ist Außendienstoptimierung?',
        answer:
          'Außendienstoptimierung bedeutet, Einsätze vor Ort effizient zu planen, zuzuweisen und abzuschließen, damit Techniker mit den richtigen Informationen zum richtigen Auftrag kommen und Verantwortliche die Ergebnisse verfolgen.',
      },
      {
        question: 'Wie weist Fleet Aufträge zu?',
        answer:
          'Routing-Regeln weisen Aufträge nach Gebäude, Zone, Gewerk oder Dienstleister zu, mit Prioritäten und SLA-Zielen für jeden Auftrag.',
      },
      {
        question: 'Funktioniert Fleet bei schwacher Verbindung?',
        answer:
          'Fleet ist für Bereiche mit geringer Bandbreite ausgelegt, etwa Technikräume, Keller und Parkhäuser.',
      },
      {
        question: 'Können externe Dienstleister Fleet nutzen?',
        answer:
          'Ja. Dienstleister erhalten schnellen Zugang zu ihren Aufträgen und arbeiten mit denselben Checklisten und Standards wie Ihr eigenes Team.',
      },
      {
        question: 'Was sehen Verantwortliche in Echtzeit?',
        answer:
          'Verantwortliche sehen Auftragsstatus, Technikeraktivität, überfällige Arbeiten und SLA-Ergebnisse an allen Standorten, sobald sie entstehen.',
      },
    ],
  },
  tenants: {
    hero: {
      eyebrow: 'Mieter- und Bewohnermanagement',
      title: 'Mieter- und Bewohner\u00admanagement, das Vertrauen schafft',
      description:
        'Geben Sie Mietern und Bewohnern einen einfachen Weg für Anliegen, halten Sie sie bei jedem Schritt auf dem Laufenden und lösen Sie Anliegen schnell, in jedem Gebäude.',
      highlights: ['Einfache Meldungen', 'Klare Updates', 'Schnellere Lösung'],
      photo: {
        id: 'residentsNewHome',
        alt: 'Bewohner blicken zu ihrem Wohngebäude hinauf',
      },
      visual: {
        kind: 'jobs',
        title: 'Bewohneranliegen · Bayview',
        items: [
          {
            title: 'Tropfender Küchenhahn',
            location: 'Einheit 1204',
            status: 'Gelöst',
            tone: 'done',
          },
          {
            title: 'Klimaanlage kühlt nicht',
            location: 'Einheit 806',
            status: 'Techniker unterwegs',
            tone: 'info',
          },
          {
            title: 'Lobbylicht defekt',
            location: 'Tower A · Lobby',
            status: 'Geplant',
            tone: 'due',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Bewohner erwarten schnellen, sichtbaren Service',
        description:
          'Anliegen zu Sanitär, Klima und Beleuchtung kommen täglich, und Bewohner möchten wissen, wer sich wann darum kümmert.',
        points: ['Tägliche Anliegen', 'Viele Einheiten', 'Gemeinschaftsflächen'],
      },
      answer: {
        title: 'Jedes Anliegen bis zur Lösung verfolgt',
        description:
          'Fleet macht aus jedem Anliegen einen Auftrag mit klarem Status, damit Bewohner, Verantwortliche und Techniker dieselbe Ansicht teilen.',
      },
    },
    capabilities: {
      title: 'Ein besseres Wohn- und Arbeitserlebnis',
      description:
        'Von der ersten Meldung bis zum Abschluss: Service, den Bewohner und Mieter verfolgen können.',
      tabs: [
        {
          icon: 'requests',
          label: 'Anliegen',
          title: 'Anliegen einfach melden',
          description:
            'Anliegen kommen per E-Mail, über Ihr Mieterportal oder vom Empfang und werden automatisch zu Aufträgen.',
          points: [
            'E-Mail zu Auftrag mit Fleet Mail',
            'Integration von Mieterportalen',
            'Erfassung am Empfang in Sekunden',
          ],
          visual: {
            kind: 'steps',
            title: 'Bewohneranliegen',
            steps: [
              {
                kind: 'E-Mail',
                text: 'Küchenhahn tropft, Einheit 1204',
              },
              {
                kind: 'Dann',
                text: 'Auftrag mit Fotos erstellt',
              },
              {
                kind: 'Dann',
                text: 'Installateur für heute zugewiesen',
              },
            ],
          },
        },
        {
          icon: 'communication',
          label: 'Updates',
          title: 'Klarer Status bei jedem Schritt',
          description:
            'Fleet informiert alle von der ersten Meldung bis zum Abschluss, mit Updates im Verlauf der Arbeit.',
          points: [
            'Updates in jeder Phase',
            'Fotonachweis beim Abschluss',
            'Status auch für den Empfang sichtbar',
          ],
          visual: {
            kind: 'log',
            title: 'Updates zum Anliegen',
            entries: [
              {
                when: '09:10',
                who: 'Fleet',
                what: 'hat das Anliegen aus Einheit 1204 erhalten',
              },
              {
                when: '09:25',
                who: 'Fleet',
                what: 'hat den hauseigenen Installateur zugewiesen',
              },
              {
                when: '11:40',
                who: 'Marco L.',
                what: 'hat das Leck behoben und Fotos hinzugefügt',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Einheiten',
          title: 'Historie für jede Einheit',
          description:
            'Führen Sie die Wartungshistorie jeder Einheit und jeder gemeinsamen Anlage, von Aufzügen und Pumpen bis zu Lobbys und Parkhäusern.',
          points: [
            'Wartungshistorie je Einheit',
            'Gemeinschaftsanlagen planmäßig gewartet',
            'Kosten nach Einheit und Zone',
          ],
          visual: {
            kind: 'asset',
            title: 'Einheitenprofil',
            name: 'Einheit 1204',
            location: 'Bayview · Tower A',
            status: 'Bewohnt',
            facts: [
              {
                label: 'Anliegen lfd. Jahr',
                value: '4',
              },
              {
                label: 'Letzter Besuch',
                value: '18. Sep.',
              },
              {
                label: 'Offene Aufträge',
                value: '0',
              },
              {
                label: 'Kosten lfd. Jahr',
                value: '640 $',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Berichte',
          title: 'Lösungszeiten für Gremien sichtbar',
          description:
            'Verfolgen Sie Lösungszeiten und Ausgaben nach Gebäude, Zone oder Einheit und teilen Sie Dashboards mit Leserechten mit Beiräten und Gremien.',
          points: [
            'Lösungszeiten nach Gebäude',
            'Ausgaben nach Zone und Einheit',
            'Dashboards mit Leserechten für Gremien',
          ],
          visual: {
            kind: 'chart',
            title: 'Durchschnittliche Lösungszeit · Tage',
            stats: [
              {
                label: 'Gelöst',
                value: '312',
              },
              {
                label: 'Offen',
                value: '8',
              },
            ],
            bars: [
              {
                label: 'Tower A',
                value: 2,
              },
              {
                label: 'Tower B',
                value: 3,
              },
              {
                label: 'Villen',
                value: 2,
              },
              {
                label: 'Sockel',
                value: 1,
              },
              {
                label: 'Parkhaus',
                value: 2,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Empfang',
        title: 'Empfang, Sicherheit und Technik im Gleichklang',
        description:
          'Rollenbasierte Ansichten geben Concierge, Sicherheitsdienst und Haustechnik genau das, was sie für schnelles Handeln brauchen.',
        points: [
          'Ansichten für jede Rolle',
          'Anliegen am Empfang erfasst',
          'Übergabenotizen über Schichten hinweg',
        ],
        visual: {
          kind: 'jobs',
          title: 'Empfang',
          items: [
            {
              title: 'Licht im Paketraum',
              location: 'Vom Concierge erfasst',
              status: 'Zugewiesen',
              tone: 'info',
            },
            {
              title: 'Störung Torzugang',
              location: 'Vom Sicherheitsdienst erfasst',
              status: 'Gelöst',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'supportAgent',
          alt: 'Servicemitarbeiterin mit Headset',
        },
      },
      {
        tag: 'Gemeinschaftsflächen',
        title: 'Gemeinsame Anlagen in Bestform',
        description:
          'Geplante Aufgaben, Echtzeit-Benachrichtigungen und Prüfpfade halten Aufzüge, Pumpen, Brandschutz und Annehmlichkeiten in Betrieb.',
        points: [
          'Wartungspläne für gemeinsame Anlagen',
          'Echtzeit-Benachrichtigung bei Störungen',
          'Prüfpfade für jeden Einsatz',
        ],
        visual: {
          kind: 'jobs',
          title: 'Gemeinsame Anlagen · Bayview',
          items: [
            {
              title: 'Monatsprüfung Aufzug L1',
              location: 'Tower A',
              status: 'Erledigt',
              tone: 'done',
            },
            {
              title: 'Wartung Poolpumpe',
              location: 'Freizeitbereich',
              status: 'Heute fällig',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'apartmentBuilding',
          alt: 'Moderne Wohngebäude mit begrünten Außenanlagen',
        },
      },
      {
        tag: 'Service',
        title: 'Service auf Hotelniveau',
        description:
          'Hauswirtschaft, Reinigung und Instandhaltung laufen planmäßig, damit jeder Raum für Bewohner und Gäste bereit ist.',
        points: [
          'Reinigungs- und Hauswirtschaftspläne',
          'Checklisten mit Fotonachweis',
          'Einheitliche Standards in allen Gebäuden',
        ],
        visual: {
          kind: 'steps',
          title: 'Checkliste Wohnungswechsel',
          steps: [
            {
              kind: 'Einheit',
              text: 'Einheit 806 · Einzug Freitag',
            },
            {
              kind: 'Dann',
              text: 'Grundreinigung und Abnahme',
            },
            {
              kind: 'Dann',
              text: 'Schlüssel am Empfang bereit',
            },
          ],
        },
        photo: {
          id: 'hotelHousekeeping',
          alt: 'Hauswirtschaftskraft bereitet ein Zimmer vor',
        },
      },
    ],
    quote: {
      text: 'Fleet hat unsere reaktive Instandhaltung um fast 40 % reduziert. Endlich haben wir Techniker, Anlagenprotokolle und Auftragsdaten an einem Ort.',
      author: 'Leitung Objektbetrieb',
      company: 'Gemischt genutztes Quartier',
      photo: {
        id: 'technicianDrill',
        alt: 'Techniker montiert eine Halterung mit dem Akkuschrauber',
      },
    },
    faq: [
      {
        question: 'Wie melden Mieter und Bewohner Anliegen?',
        answer:
          'Anliegen kommen per E-Mail mit Fleet Mail, über Ihr Mieterportal per Integration oder über Empfang und Sicherheitsdienst, und jedes wird zu einem Arbeitsauftrag.',
      },
      {
        question: 'Wie bleiben Bewohner informiert?',
        answer:
          'Fleet hält alle von der ersten Meldung bis zum Abschluss auf dem Laufenden, mit Updates im Verlauf und Fotonachweis nach Erledigung.',
      },
      {
        question: 'Können wir die Instandhaltung je Einheit verfolgen?',
        answer:
          'Ja. Fleet führt Wartungshistorie und Kosten für jede Einheit und jede gemeinsame Anlage, über alle Gebäude und Zonen hinweg.',
      },
      {
        question: 'Können Beiräte und Gremien die Leistung sehen?',
        answer:
          'Ja. Teilen Sie Dashboards mit Leserechten mit Beiräten und Gremien, mit Lösungszeiten und Ausgaben je Gebäude.',
      },
      {
        question: 'Eignet sich Fleet auch für gewerbliche Mieter?',
        answer:
          'Ja. Fleet unterstützt Wohnanlagen, Büros, Handel und gemischt genutzte Quartiere in einer Plattform.',
      },
    ],
  },
  vendors: {
    hero: {
      eyebrow: 'Dienstleister- und Lieferantenmanagement',
      title: 'Dienstleister- und Lieferanten\u00admanagement für jeden Standort',
      description:
        'Koordinieren Sie Dienstleister, Angebote, Verträge und Leistung in einer Plattform, mit jedem Auftrag, jeder Freigabe und jedem Dokument im Nachweis.',
      highlights: ['Dienstleisterbewertungen', 'Angebotsfreigaben', 'Vertragsverfolgung'],
      photo: {
        id: 'vendorHandshake',
        alt: 'Facility Manager begrüßt einen Dienstleister per Handschlag',
      },
      visual: {
        kind: 'jobs',
        title: 'Dienstleister · Dieser Monat',
        items: [
          {
            title: 'CoolAir · Klima',
            location: '42 Aufträge · 98 % pünktlich',
            status: 'Bevorzugt',
            tone: 'done',
          },
          {
            title: 'LiftCo · Aufzüge',
            location: '18 Aufträge · 91 % pünktlich',
            status: 'Prüfung fällig',
            tone: 'due',
          },
          {
            title: 'BrightSpark · Elektro',
            location: '27 Aufträge · 95 % pünktlich',
            status: 'Verlängerung',
            tone: 'info',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Partner treiben Ihren Betrieb an',
        description:
          'Partner für Klima, Aufzüge, Reinigung und Sicherheit bringen jeweils eigene Verträge, Angebote, Zertifikate und Service-Levels mit.',
        points: ['Viele Dienstleister', 'Viele Verträge', 'Viele Angebote'],
      },
      answer: {
        title: 'Ein gemeinsamer Prozess für alle Partner',
        description:
          'Fleet gibt Dienstleistern schnellen Zugang zu ihren Aufträgen und Ihnen volle Transparenz über Kosten, Qualität und Compliance.',
      },
    },
    capabilities: {
      title: 'Jede Dienstleisterbeziehung steuern',
      description: 'Vom Onboarding bis zur Bewertung: Dienstleisterkoordination an einem Ort.',
      tabs: [
        {
          icon: 'vendors',
          label: 'Verzeichnis',
          title: 'Ein vollständiges Dienstleisterverzeichnis',
          description:
            'Führen Sie Kontakte, Gewerke, Einsatzgebiete, Zertifikate und Preise aller Dienstleister an einem Ort.',
          points: [
            'Gewerke und Einsatzgebiete',
            'Preise und Vertragsbedingungen',
            'Zertifikate und Versicherungen hinterlegt',
          ],
          visual: {
            kind: 'jobs',
            title: 'Dienstleisterverzeichnis',
            items: [
              {
                title: 'CoolAir',
                location: 'Klima · Alle Standorte',
                status: 'Aktiv',
                tone: 'done',
              },
              {
                title: 'LiftCo',
                location: 'Aufzüge · Region VAE',
                status: 'Aktiv',
                tone: 'done',
              },
              {
                title: 'SafeGuard',
                location: 'Brandschutz · Tower B',
                status: 'Onboarding',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'approvals',
          label: 'Angebote',
          title: 'Angebote und Freigaben im Fluss',
          description:
            'Dienstleister reichen Angebote direkt am Auftrag ein, und Freigaben laufen nach Kosten, Standort oder Kategorie.',
          points: [
            'Angebote am Auftrag',
            'Freigaben nach Schwellenwert',
            'Jede Entscheidung dokumentiert',
          ],
          visual: {
            kind: 'steps',
            title: 'Angebotsfreigabe',
            steps: [
              {
                kind: 'Angebot',
                text: 'CoolAir · 3.800 $ Reparatur Kältemaschine',
              },
              {
                kind: 'Freigabe',
                text: 'Finanzleitung gibt per E-Mail frei',
              },
              {
                kind: 'Dann',
                text: 'Dienstleister informiert, Termin geplant',
              },
            ],
          },
        },
        {
          icon: 'documents',
          label: 'Verträge',
          title: 'Verträge und Zertifikate im Blick',
          description:
            'Verfolgen Sie Vertragsbedingungen, Versicherungen und Zertifikate, mit Erinnerungen vor jedem Ablauf.',
          points: [
            'Vertragsbedingungen je Dienstleister',
            'Versicherungen und Zertifikate verfolgt',
            'Erinnerungen vor dem Ablauf',
          ],
          visual: {
            kind: 'files',
            title: 'Dienstleisterdokumente',
            items: [
              {
                title: 'Wartungsvertrag LiftCo.pdf',
                location: 'Verlängerung in 30 Tagen',
                status: 'Verlängern',
                tone: 'due',
              },
              {
                title: 'Versicherung CoolAir.pdf',
                location: 'Gültig bis März 2027',
                status: 'Gültig',
                tone: 'done',
              },
              {
                title: 'Zertifikat SafeGuard.pdf',
                location: 'Heute hochgeladen',
                status: 'Prüfen',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Leistung',
          title: 'Bewertungen für jeden Dienstleister',
          description:
            'Vergleichen Sie Reaktionszeiten, SLA-Ergebnisse und Kosten über Dienstleister und Regionen.',
          points: [
            'Reaktionszeiten je Dienstleister',
            'SLA-Ergebnisse nach Region',
            'Kosten je Auftrag im Vergleich',
          ],
          visual: {
            kind: 'chart',
            title: 'Pünktliche Erledigung · Q3',
            stats: [
              {
                label: 'Dienstleister',
                value: '24',
              },
              {
                label: 'Pünktlich',
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
        tag: 'Zugang',
        title: 'Dienstleister in Minuten startklar',
        description:
          'Dienstleister erhalten schnellen Zugang zu ihren eigenen Aufträgen und Dokumenten, damit neue Partner ab dem ersten Tag arbeiten.',
        points: [
          'Schneller Zugang mit wenig Aufwand',
          'Dienstleister sehen nur ihre Aufträge',
          'Gleiche Standards wie interne Teams',
        ],
        visual: {
          kind: 'jobs',
          title: 'Dienstleister-Onboarding',
          items: [
            {
              title: 'SafeGuard',
              location: 'Zugang erteilt',
              status: 'Aktiv',
              tone: 'done',
            },
            {
              title: 'CleanPro',
              location: 'Einladung gesendet',
              status: 'Ausstehend',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'partnerMeeting',
          alt: 'Teambesprechung mit Partnern am Tisch',
        },
      },
      {
        tag: 'Lieferanten',
        title: 'Lieferanten mit Anlagen verknüpft',
        description:
          'Verknüpfen Sie Lieferanten mit den Anlagen und Verträgen, die sie betreuen, mit Garantie- und Servicedetails in jedem Auftrag.',
        points: [
          'Lieferanten mit Anlagen verknüpft',
          'Garantiedetails in jedem Auftrag',
          'Servicehistorie je Lieferant',
        ],
        visual: {
          kind: 'asset',
          title: 'Lieferantenzuordnung',
          name: 'Kältemaschine CH-02',
          location: 'Lieferant · CoolAir',
          status: 'In Garantie',
          facts: [
            {
              label: 'Garantie',
              value: 'März 2028',
            },
            {
              label: 'Aufträge lfd. Jahr',
              value: '6',
            },
            {
              label: 'Kosten lfd. Jahr',
              value: '4.210 $',
            },
            {
              label: 'Vertrag',
              value: 'Jährlich',
            },
          ],
        },
        photo: {
          id: 'stockCheck',
          alt: 'Mitarbeiter prüft Bestände im Regal',
        },
      },
      {
        tag: 'Kommunikation',
        title: 'Klare Kommunikation mit jedem Partner',
        description:
          'Updates, Fotos und Freigaben fließen in Echtzeit zwischen Ihrem Team und Dienstleistern, in Fleet oder per E-Mail mit Fleet Mail.',
        points: [
          'Updates und Fotos in Echtzeit',
          'Freigaben per E-Mail oder in Fleet',
          'Vollständige Historie an jedem Auftrag',
        ],
        visual: {
          kind: 'log',
          title: 'Dienstleisterverlauf · WO-2304',
          entries: [
            {
              when: '09:14',
              who: 'CoolAir',
              what: 'hat ein Angebot über 3.800 $ geteilt',
            },
            {
              when: '09:40',
              who: 'Finanzen',
              what: 'hat das Angebot per E-Mail freigegeben',
            },
          ],
        },
        photo: {
          id: 'colleaguesTablets',
          alt: 'Zwei Kollegen prüfen Aufträge auf Tablets',
        },
      },
    ],
    quote: {
      text: 'Andere Plattformen waren zu komplex oder zu allgemein. Fleet bot uns eine maßgeschneiderte Lösung mit schnellerem Support.',
      author: 'Leitung Instandhaltung',
      company: 'Logistikzentrum',
      photo: {
        id: 'warehouseTeam',
        alt: 'Lagerteam prüft Bestände zwischen Regalen',
      },
    },
    faq: [
      {
        question: 'Wie greifen Dienstleister auf Fleet zu?',
        answer:
          'Dienstleister erhalten mit wenig Aufwand schnellen Zugang zu ihren eigenen Aufträgen und Dokumenten, auf jedem Smartphone, Tablet oder Desktop.',
      },
      {
        question: 'Können Dienstleister Angebote in Fleet einreichen?',
        answer:
          'Ja. Dienstleister hängen Angebote an den Auftrag, und Freigaben gehen nach Kosten, Standort oder Kategorie an die richtige Person.',
      },
      {
        question: 'Wie misst Fleet die Leistung von Dienstleistern?',
        answer:
          'Fleet erfasst Reaktionszeiten, SLA-Ergebnisse und Kosten für jeden Auftrag, und Bewertungen vergleichen Dienstleister nach Region und Gewerk.',
      },
      {
        question: 'Kann Fleet Verträge und Zertifikate verfolgen?',
        answer:
          'Ja. Hinterlegen Sie Verträge, Versicherungen und Zertifikate je Dienstleister, mit Erinnerungen vor jedem Ablauf.',
      },
      {
        question: 'Funktioniert Fleet mit Dienstleistern in mehreren Regionen?',
        answer:
          'Ja. Legen Sie Einsatzgebiete und Regeln je Region fest und vergleichen Sie die Leistung von Dienstleistern im gesamten Portfolio.',
      },
    ],
  },
}
