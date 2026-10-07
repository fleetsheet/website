import type { NavLink } from '@/config'
import type { PlatformEntry } from '@/data/en/platform'
import type { CategoryPageContent, SolutionsShared } from '@/data/en/solutions'
import type { CategoryPageId, IndustryPageId, SolutionGroup, SolutionPageId } from '@/solutions'

export const menu = {
  label: 'Lösungen',
  groups: {
    category: 'Nach Kategorie',
    industry: 'Nach Branche',
  } satisfies Record<SolutionGroup, string>,
  contact: 'Ihre Branche ist nicht dabei? Sprechen Sie uns an',
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
  facilityManagement: {
    label: 'Facility Management',
    summary: 'Jedes Gebäude, jede Anlage und jedes Team in einer Zentrale.',
    meta: {
      title: 'Facility-Management-Software | Fleet',
      description:
        'Steuern Sie den Gebäudebetrieb an jedem Standort mit Fleet: Arbeitsaufträge, vorbeugende Wartung, Anlagen, Dienstleister und Compliance in einer Plattform.',
    },
  },
  retail: {
    label: 'Einkaufs\u00adzentren und Handel',
    summary: 'Geschäfte und Allgemeinflächen, jeden Tag bereit für Besucher.',
    meta: {
      title: 'Software für Einkaufszentren und Handel | Fleet',
      description:
        'Halten Sie Einkaufszentren bereit für Besucher, mit schnellen Aufträgen, Wartungsplänen für Aufzüge und Klima, Mieterkoordination und Kostenkontrolle.',
    },
  },
  hospitality: {
    label: 'Hotellerie und Gastronomie',
    summary: 'Front und Back of House, bereit für jeden Gast.',
    meta: {
      title: 'Instandhaltungssoftware für Hotels und Gastronomie | Fleet',
      description:
        'Schützen Sie das Gästeerlebnis mit mobilen Aufträgen, Küchengeräteprüfungen, Sicherheits-Compliance und vorbeugender Wartung.',
    },
  },
  healthcareEducation: {
    label: 'Gesundheit und Bildung',
    summary: 'Sichere, konforme Gebäude für Patienten und Lernende.',
    meta: {
      title: 'Instandhaltungssoftware für Gesundheit und Bildung | Fleet',
      description:
        'Halten Sie Kliniken, Praxen, Schulen und Campus sicher und konform, mit vorbeugender Wartung, prüfbereiten Nachweisen und schnellen Reparaturen.',
    },
  },
  logistics: {
    label: 'Schifffahrt und Logistik',
    summary: 'Rampen, Anlagen und Fahrzeuge in Bewegung.',
    meta: {
      title: 'Instandhaltungssoftware für Logistik und Lager | Fleet',
      description:
        'Halten Sie Rampen, Förderbänder, Stapler und Fahrzeuge in Betrieb, mit mobilen Aufträgen, Wartungsplänen und Ausfallanalysen an jedem Standort.',
    },
  },
  hvacLifts: {
    label: 'Klima, Lifte und Aufzüge',
    summary: 'Kritische Gebäudetechnik planmäßig und zertifiziert.',
    meta: {
      title: 'Wartungssoftware für Klima, Lifte und Aufzüge | Fleet',
      description:
        'Planen und belegen Sie die Wartung von Klima, Aufzügen und Rolltreppen mit Wartungsplänen, Zertifikaten, Dienstleistern und Ausfallanalysen.',
    },
  },
  dataCenters: {
    label: 'Rechenzentren',
    summary: 'Kühlung, Stromversorgung und Verfügbarkeit im Griff.',
    meta: {
      title: 'Instandhaltungssoftware für Rechenzentren | Fleet',
      description:
        'Sichern Sie die Verfügbarkeit mit Wartungsplänen für Kühlung und Stromversorgung, GLT-Alarmen, lückenlosen Änderungsnachweisen und Dienstleistern.',
    },
  },
  fitness: {
    label: 'Fitness- und Wellness\u00adzentren',
    summary: 'Saubere, sichere und funktionierende Räume für Mitglieder.',
    meta: {
      title: 'Instandhaltungssoftware für Fitness- und Wellnesszentren | Fleet',
      description:
        'Halten Sie Studios, Spas und Wellnessanlagen sauber, sicher und funktionsfähig, mit Geräteprüfungen, Reinigungsplänen und schnellen Reparaturen.',
    },
  },
  mep: {
    label: 'TGA-Instand\u00adhaltung',
    summary: 'Heizung, Lüftung, Elektro und Sanitär in einem Ablauf.',
    meta: {
      title: 'TGA-Instandhaltungssoftware | Fleet',
      description:
        'Steuern Sie die Instandhaltung von Lüftung, Elektro und Sanitär im gesamten Portfolio, mit Wartungsplänen, Routing nach Gewerk und Nachweisen.',
    },
  },
  offices: {
    label: 'Büros und gemischte Nutzung',
    summary: 'Produktive Arbeitsplätze und reibungslose Gemeinschaftsflächen.',
    meta: {
      title: 'Instandhaltungssoftware für Büro- und Mischgebäude | Fleet',
      description:
        'Betreiben Sie Büros und gemischt genutzte Quartiere mit Mieteranliegen, vorbeugender Wartung, Dienstleisterkoordination und Portfolio-Berichten.',
    },
  },
  industrial: {
    label: 'Industrie- und Werks\u00admanagement',
    summary: 'Produktionsanlagen gewartet für maximale Verfügbarkeit.',
    meta: {
      title: 'Instandhaltungssoftware für Fabriken und Werke | Fleet',
      description:
        'Maximieren Sie die Verfügbarkeit mit Anlagenverzeichnis, zeit- und nutzungsbasierter Wartung, Sicherheitsprüfungen und Ausfallanalysen.',
    },
  },
  vehicles: {
    label: 'Fahrzeug\u00admanagement',
    summary: 'Jedes Fahrzeug von der Beschaffung bis zur Aussonderung.',
    meta: {
      title: 'Software für Fahrzeug- und Fuhrparkmanagement | Fleet',
      description:
        'Verwalten Sie jedes Fahrzeug an einem Ort: Beschaffung, Wartung, Zulassungen, Schäden, Bußgelder und Auslastung, mit prüfbereiten Nachweisen.',
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
        id: 'facilityManagement',
        photo: {
          id: 'inspectionClipboard',
          alt: 'Prüfer füllt eine Checkliste auf dem Klemmbrett aus',
        },
      },
      {
        id: 'retail',
        photo: {
          id: 'mallAtrium',
          alt: 'Besucher im Atrium eines Einkaufszentrums',
        },
      },
      {
        id: 'hospitality',
        photo: {
          id: 'hotelHousekeeping',
          alt: 'Hauswirtschaftskraft bereitet ein Hotelzimmer vor',
        },
      },
      {
        id: 'healthcareEducation',
        photo: {
          id: 'cleanerCorridor',
          alt: 'Reinigungskraft desinfiziert einen Türgriff',
        },
      },
      {
        id: 'logistics',
        photo: {
          id: 'warehouseTeam',
          alt: 'Lagerteam prüft Bestände zwischen Regalen',
        },
      },
      {
        id: 'hvacLifts',
        photo: {
          id: 'hvacTechnicians',
          alt: 'Klimatechniker warten Dachgeräte',
        },
      },
      {
        id: 'dataCenters',
        photo: {
          id: 'dataCenter',
          alt: 'Serverreihen in einem Rechenzentrum',
        },
      },
      {
        id: 'fitness',
        photo: {
          id: 'acFilterService',
          alt: 'Techniker wechselt einen Klimafilter',
        },
      },
      {
        id: 'mep',
        photo: {
          id: 'electricianPanel',
          alt: 'Elektriker arbeitet an einem Schaltschrank',
        },
      },
      {
        id: 'offices',
        photo: {
          id: 'officeFloor',
          alt: 'Großraumbüro mit arbeitenden Menschen',
        },
      },
      {
        id: 'industrial',
        photo: {
          id: 'plantManagers',
          alt: 'Werksleiter bespricht sich mit Ingenieuren in Schutzhelmen',
        },
      },
      {
        id: 'vehicles',
        photo: {
          id: 'fleetVans',
          alt: 'Transporter vor einem Lager',
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
      id: 'cityTowers',
      alt: 'Gläserne Bürohochhäuser vor blauem Himmel',
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

export const industries: Record<IndustryPageId, CategoryPageContent> = {
  facilityManagement: {
    hero: {
      eyebrow: 'Facility Management',
      title: 'Facility-Management-Software für jeden Standort',
      description:
        'Fleet ist Ihre digitale Zentrale für den Gebäudebetrieb, von Routinewartung bis zu ungeplanten Reparaturen, damit jedes Gebäude in Bestform bleibt.',
      highlights: ['Zentrale Steuerung', 'Automatisierte Aufträge', 'Anlagenverfolgung'],
      visual: {
        kind: 'jobs',
        title: 'Gebäude · Heute',
        items: [
          {
            title: 'Klimafilter wechseln',
            location: 'Tower B · Ebene 4',
            status: 'In Arbeit',
            tone: 'info',
          },
          {
            title: 'Feuerlöscherprüfung',
            location: 'Harbour Point · Alle Etagen',
            status: 'Heute fällig',
            tone: 'due',
          },
          {
            title: 'Reparatur Lobbytür',
            location: 'Northgate · Eingang',
            status: 'Erledigt',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Facility-Teams stemmen jedes Jahr mehr',
        description:
          'Gebäude, Anlagen, Dienstleister und Personal an einem oder vielen Standorten, jeweils mit eigenen Plänen, Budgets und Vorgaben.',
        points: ['Viele Gebäude', 'Viele Dienstleister', 'Viele Standards'],
      },
      answer: {
        title: 'Eine Plattform für jedes Gebäude',
        description:
          'Fleet bündelt Instandhaltung, Anlagen, Dienstleister und Compliance in einer Cloud-Plattform, damit Teams jeden Standort im Griff haben.',
      },
    },
    capabilities: {
      title: 'Für moderne Facility-Teams gemacht',
      description:
        'Aufträge erstellen, verfolgen und abschließen, im Einklang mit Budgets, Compliance und realen Bedingungen.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Vorbeugend',
          title: 'Wartungspläne für jedes System',
          description:
            'Planen und automatisieren Sie die Wartung von Klima, Sanitär, Beleuchtung und Brandschutz nach Zeit oder Nutzung.',
          points: [
            'Wiederkehrende Pläne je Anlagentyp',
            'Checklisten für jeden Einsatz',
            'Aufträge vor dem Fälligkeitstermin',
          ],
          visual: {
            kind: 'steps',
            title: 'Wartungsplan',
            steps: [
              {
                kind: 'Plan',
                text: 'Brandschutz · monatliche Prüfung',
              },
              {
                kind: 'Dann',
                text: 'Aufträge 7 Tage vorher erstellen',
              },
              {
                kind: 'Dann',
                text: 'Sicherheitsteam mit Checkliste zuweisen',
              },
            ],
          },
        },
        {
          icon: 'workOrders',
          label: 'Reparaturen',
          title: 'Ad-hoc-Reparaturen im Blick',
          description:
            'Erfassen und vergeben Sie Reparaturen mit Fotos, mobilen Updates und SLA-Timern für jeden Auftrag.',
          points: [
            'Meldungen mit Fotos und Standort',
            'Aufträge an Teams oder Dienstleister',
            'SLA-Erfüllung in einem Dashboard',
          ],
          visual: {
            kind: 'jobs',
            title: 'Offene Reparaturen',
            items: [
              {
                title: 'Undichte Leitung',
                location: 'Tower B · Untergeschoss',
                status: 'Zugewiesen',
                tone: 'info',
              },
              {
                title: 'Defekter Fenstergriff',
                location: 'Harbour Point · E7',
                status: 'Heute fällig',
                tone: 'due',
              },
              {
                title: 'Lichtsensor defekt',
                location: 'Northgate · E2',
                status: 'Gelöst',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Anlagen',
          title: 'Wartungshistorie für jede Anlage',
          description:
            'Erfassen Sie die Historie je Gebäude, Etage oder Anlage, mit Kosten und Dokumenten.',
          points: [
            'Historie nach Gebäude, Etage und Anlage',
            'Kosten und Ausfallzeiten je Anlage',
            'Handbücher und Zertifikate angehängt',
          ],
          visual: {
            kind: 'asset',
            title: 'Anlagenprofil',
            name: 'Heizkessel B-01',
            location: 'Northgate · Technikraum',
            status: 'In Betrieb',
            facts: [
              {
                label: 'Letzte Wartung',
                value: '03. Sep.',
              },
              {
                label: 'Nächste Wartung',
                value: '03. Dez.',
              },
              {
                label: 'Kosten lfd. Jahr',
                value: '2.940 $',
              },
              {
                label: 'Offene Aufträge',
                value: '0',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Berichte',
          title: 'Fundierte Betriebsentscheidungen',
          description:
            'Sehen Sie, welche Gebäude wiederkehrende Störungen haben, welche Anlagen das meiste Budget binden und welche Teams ihre SLAs erfüllen.',
          points: [
            'Wiederkehrende Störungen je Gebäude',
            'Ausgaben nach Anlage und Kostenstelle',
            'SLA-Ergebnisse nach Team',
          ],
          visual: {
            kind: 'chart',
            title: 'Offene Aufträge nach Standort',
            stats: [
              {
                label: 'Offene Aufträge',
                value: '128',
              },
              {
                label: 'SLA erfüllt',
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
        tag: 'Compliance',
        title: 'Konform und nachvollziehbar',
        description:
          'Integrierte Prüfpfade, Dokumentenablage und Versionierung halten jeden Wartungsnachweis, jede Genehmigung und jede Prüfung bereit.',
        points: [
          'Prüfpfade für jede Aktion',
          'Genehmigungen und Zertifikate hinterlegt',
          'Prüfergebnisse mit Anlagen verknüpft',
        ],
        visual: {
          kind: 'files',
          title: 'Compliance · Harbour Point',
          items: [
            {
              title: 'Brandschutzzertifikat.pdf',
              location: 'Gültig bis Juni 2027',
              status: 'Gültig',
              tone: 'done',
            },
            {
              title: 'Aufzugsgenehmigung.pdf',
              location: 'Verlängerung in 30 Tagen',
              status: 'Verlängern',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'inspectionClipboard',
          alt: 'Prüfer füllt eine Checkliste auf dem Klemmbrett aus',
        },
      },
      {
        tag: 'Mobil',
        title: 'Instandhaltung in Echtzeit, von überall',
        description:
          'Fleet läuft auf Smartphone, Tablet und Desktop. Aufträge unterwegs erfassen, Hinweise bei Überfälligkeit erhalten und Fotonachweise nach Erledigung sehen.',
        points: [
          'Aufträge von jedem Gerät',
          'Hinweise bei überfälligen Arbeiten',
          'Fotonachweis bei Erledigung',
        ],
        visual: {
          kind: 'log',
          title: 'Updates aus dem Einsatz',
          entries: [
            {
              when: '09:20',
              who: 'Marco L.',
              what: 'hat die Kesselprüfung mit 4 Fotos abgeschlossen',
            },
            {
              when: '09:05',
              who: 'Fleet',
              what: 'hat 2 überfällige Aufträge in Tower B markiert',
            },
          ],
        },
        photo: {
          id: 'technicianPlantRoom',
          alt: 'Techniker wartet Anlagen in einem Technikraum',
        },
      },
      {
        tag: 'Mehrere Standorte',
        title: 'Über alle Standorte skalieren',
        description:
          'Legen Sie Regeln und Workflows je Objekt fest, setzen Sie regionale Verantwortliche ein und bündeln Sie Berichte für das gesamte Portfolio.',
        points: [
          'Regeln und Workflows je Objekt',
          'Regionale Verantwortliche',
          'Berichte für das gesamte Portfolio',
        ],
        visual: {
          kind: 'jobs',
          title: 'Portfolio · Diese Woche',
          items: [
            {
              title: 'Harbour Point',
              location: '34 Aufträge · 97 % pünktlich',
              status: 'Im Plan',
              tone: 'done',
            },
            {
              title: 'Tower B',
              location: '29 Aufträge · 89 % pünktlich',
              status: 'Prüfen',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'officeCorridor',
          alt: 'Menschen in einem hellen Büroflur',
        },
      },
    ],
    quote: {
      text: 'Fleet hat unsere reaktive Instandhaltung um fast 40 % reduziert. Endlich haben wir Techniker, Anlagenprotokolle und Auftragsdaten an einem Ort.',
      author: 'Leitung Objektbetrieb',
      company: 'Gemischt genutztes Quartier',
      photo: {
        id: 'hvacTechnicians',
        alt: 'Klimatechniker warten Dachgeräte',
      },
    },
    faq: [
      {
        question: 'Was ist Facility-Management-Software?',
        answer:
          'Facility-Management-Software bündelt Gebäude, Anlagen, Instandhaltung, Dienstleister und Compliance-Nachweise in einem System, damit Teams jeden Standort planen, steuern und auswerten können.',
      },
      {
        question: 'Eignet sich Fleet für Campus, Büros und gemischt genutzte Quartiere?',
        answer:
          'Ja. Fleet unterstützt jede Art von Gebäude, vom einzelnen Objekt bis zu Campus und Portfolios mit vielen Standorten, in einer Cloud-Plattform.',
      },
      {
        question: 'Wie unterstützt Fleet die Compliance?',
        answer:
          'Prüfpfade, Dokumentenablage und Versionierung sind integriert, sodass jeder Wartungsnachweis, jede Genehmigung und jede Prüfung bereitliegt.',
      },
      {
        question: 'Verbindet sich Fleet mit unseren anderen Systemen?',
        answer:
          'Ja. Fleet verbindet sich mit Buchhaltung, Zutrittskontrolle, Mieterportalen und Gebäudeleittechnik über mehr als 20 Integrationen und eine offene REST API.',
      },
    ],
  },
  retail: {
    hero: {
      eyebrow: 'Einkaufszentren und Handel',
      title: 'Instandhaltung, die jedes Geschäft bereit für Besucher hält',
      description:
        'Fleet hilft Center- und Handelsteams, in Geschäften, Allgemeinflächen und im Backoffice vorausschauend zu arbeiten, damit jeder Besuch Ihren Standards entspricht.',
      highlights: ['Schnelle Aufträge', 'Mieterkoordination', 'Kosten nach Etage und Mieter'],
      visual: {
        kind: 'jobs',
        title: 'Northgate Mall · Heute',
        items: [
          {
            title: 'Geräusch Rolltreppe E3',
            location: 'Ebene 1 · Atrium',
            status: 'In Arbeit',
            tone: 'info',
          },
          {
            title: 'Klimaprüfung Food Court',
            location: 'Ebene 3',
            status: 'Heute fällig',
            tone: 'due',
          },
          {
            title: 'Beleuchtung Geschäft 214',
            location: 'Ebene 2 · Mode',
            status: 'Erledigt',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Jede Verzögerung sehen die Besucher',
        description:
          'Hohe Besucherzahlen fordern Aufzüge, Rolltreppen, Klima und Beleuchtung den ganzen Tag, und Mieter erwarten schnellen, verlässlichen Service.',
        points: ['Hohe Frequenz', 'Viele Mieter', 'Viele Dienstleister'],
      },
      answer: {
        title: 'Vorausschauender Betrieb für jedes Center',
        description:
          'Fleet verbindet schnelle Aufträge, Wartungspläne und mieterbezogene Historie, damit Ihr Team jedem Thema voraus ist.',
      },
    },
    capabilities: {
      title: 'Für hochfrequentierte Handelsflächen gemacht',
      description:
        'Von reaktiven Aufträgen über vorbeugende Wartung bis zur Mieterkoordination, alles in einer Plattform.',
      tabs: [
        {
          icon: 'workOrders',
          label: 'Aufträge',
          title: 'Schnelle Auftragsvergabe',
          description:
            'Mitarbeitende erfassen Aufträge sofort von jedem Gerät, mit Benachrichtigungen, Freigaben und Eskalation.',
          points: [
            'Aufträge von jedem Gerät',
            'Eskalation für dringende Themen',
            'Freigaben für externe Arbeiten',
          ],
          visual: {
            kind: 'jobs',
            title: 'Heute zugewiesen',
            items: [
              {
                title: 'Undichte Decke',
                location: 'Ebene 2 · Gang B',
                status: 'Sanitärteam',
                tone: 'info',
              },
              {
                title: 'Rollgitter defekt',
                location: 'Geschäft 118',
                status: 'CoolAir',
                tone: 'info',
              },
              {
                title: 'Reinigung nach Verschüttung',
                location: 'Ebene 1 · Atrium',
                status: 'Erledigt',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Vorbeugend',
          title: 'Rolltreppen, Aufzüge und Klima planmäßig',
          description:
            'Automatisieren Sie die Wartung von Rolltreppen, Aufzügen und Klimaanlagen, mit Arbeitsanweisungen vor Ort.',
          points: [
            'Wartung für Rolltreppen, Aufzüge und Klima',
            'Arbeitsanweisungen vor Ort',
            'Dienstleister nach Anlagentyp',
          ],
          visual: {
            kind: 'steps',
            title: 'Rolltreppenplan',
            steps: [
              {
                kind: 'Plan',
                text: 'Rolltreppen E1–E6 · monatliche Wartung',
              },
              {
                kind: 'Dann',
                text: 'LiftCo mit Checkliste zuweisen',
              },
              {
                kind: 'Dann',
                text: 'Zertifikat an jeder Anlage erfassen',
              },
            ],
          },
        },
        {
          icon: 'tenants',
          label: 'Mieter',
          title: 'Historie nach Geschäft und Einheit',
          description:
            'Erfassen Sie die Historie nach Geschäft, Marke oder Einheit und koordinieren Sie Sicherheits- und Reinigungsteams über gemeinsame Dashboards.',
          points: [
            'Historie nach Geschäft, Marke und Einheit',
            'Gemeinsame Dashboards',
            'Mieteranliegen bis zum Abschluss',
          ],
          visual: {
            kind: 'asset',
            title: 'Einheitenprofil',
            name: 'Geschäft 214',
            location: 'Northgate Mall · Ebene 2',
            status: 'Geöffnet',
            facts: [
              {
                label: 'Anliegen lfd. Jahr',
                value: '7',
              },
              {
                label: 'Letzter Besuch',
                value: '14. Sep.',
              },
              {
                label: 'Offene Aufträge',
                value: '1',
              },
              {
                label: 'Kosten lfd. Jahr',
                value: '1.860 $',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Budgets',
          title: 'Mehr Transparenz, klügere Budgets',
          description:
            'Vergleichen Sie Leistung nach Standort, Anlagenklasse oder Dienstleister, um CAPEX und OPEX zu priorisieren.',
          points: [
            'Ausgaben nach Etage, Mieter und Anlage',
            'Wiederkehrende Störungen nach Zone',
            'Dienstleister im Vergleich',
          ],
          visual: {
            kind: 'chart',
            title: 'Instandhaltungskosten nach Etage · Q3',
            stats: [
              {
                label: 'Kosten Q3',
                value: '62.000 $',
              },
              {
                label: 'Wiederkehrende Störungen',
                value: '11',
              },
            ],
            bars: [
              {
                label: 'Ebene 1',
                value: 82,
              },
              {
                label: 'Ebene 2',
                value: 64,
              },
              {
                label: 'Ebene 3',
                value: 58,
              },
              {
                label: 'Parkhaus',
                value: 31,
              },
              {
                label: 'Dach',
                value: 24,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Allgemeinflächen',
        title: 'Allgemeinflächen bereit für jeden Besucher',
        description:
          'Atrien, Gänge, Sanitärräume und Food Courts bleiben sauber und funktionsfähig, mit geplanten Aufgaben und schnellen Reparaturen.',
        points: [
          'Reinigungs- und Prüfpläne',
          'Schnelle Lösungen für sichtbare Mängel',
          'Fotonachweis bei Erledigung',
        ],
        visual: {
          kind: 'jobs',
          title: 'Allgemeinflächen · Heute',
          items: [
            {
              title: 'Sanitärkontrolle E2',
              location: 'Alle 2 Stunden',
              status: 'Im Plan',
              tone: 'done',
            },
            {
              title: 'Beleuchtung Atrium',
              location: 'Ebene 1',
              status: 'Geplant',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'mallAtrium',
          alt: 'Besucher im Atrium eines Einkaufszentrums',
        },
      },
      {
        tag: 'Fördertechnik',
        title: 'Aufzüge und Rolltreppen, auf die Verlass ist',
        description:
          'Wartungspläne, Arbeitsanweisungen und Zertifikate halten die Fördertechnik sicher in Betrieb.',
        points: [
          'Monatliche Wartungspläne',
          'Zertifikate an den Anlagen',
          'Ausfallzeiten je Einheit',
        ],
        visual: {
          kind: 'asset',
          title: 'Anlagenprofil',
          name: 'Rolltreppe E3',
          location: 'Northgate Mall · Atrium',
          status: 'Wartung fällig',
          facts: [
            {
              label: 'Letzte Wartung',
              value: '02. Sep.',
            },
            {
              label: 'Zertifikat',
              value: 'Gültig bis Feb. 2027',
            },
            {
              label: 'Ausfall Q3',
              value: '3 h',
            },
            {
              label: 'Dienstleister',
              value: 'LiftCo',
            },
          ],
        },
        photo: {
          id: 'liftTechnician',
          alt: 'Techniker arbeitet in einer Aufzugskabine',
        },
      },
      {
        tag: 'Teams',
        title: 'Sicherheit, Reinigung und Technik im Gleichklang',
        description:
          'Gemeinsame Dashboards halten Sicherheits-, Reinigungs- und Technikteams bei jedem offenen Thema auf einer Linie.',
        points: [
          'Gemeinsame Dashboards',
          'Meldungen von jedem Team',
          'Klare Zuständigkeit für jeden Auftrag',
        ],
        visual: {
          kind: 'log',
          title: 'Gemeinsame Aktivität',
          entries: [
            {
              when: '10:12',
              who: 'Sicherheit',
              what: 'hat ein defektes Tor an Eingang C gemeldet',
            },
            {
              when: '10:20',
              who: 'Technik',
              what: 'hat die Torreparatur an CoolAir vergeben',
            },
          ],
        },
        photo: {
          id: 'cleanerCorridor',
          alt: 'Reinigungskraft desinfiziert einen Türgriff',
        },
      },
    ],
    quote: {
      text: 'Fleet hat uns geholfen, die reaktive Instandhaltung um fast 40 % zu senken. Heute haben wir alle Standorte im Blick und reagieren schneller.',
      author: 'Betriebsleitung',
      company: 'Regionaler Einkaufszentrenbetreiber',
      photo: {
        id: 'acFilterService',
        alt: 'Techniker wechselt einen Klimafilter',
      },
    },
    faq: [
      {
        question: 'Wie unterstützt Fleet den Betrieb von Einkaufszentren?',
        answer:
          'Fleet vereint Aufträge, Wartung für Aufzüge, Rolltreppen und Klima, Mieterkoordination und Kostenkontrolle in einer Plattform für jedes Center.',
      },
      {
        question: 'Können wir die Instandhaltung nach Mieter oder Einheit verfolgen?',
        answer:
          'Ja. Erfassen Sie die Historie nach Geschäft, Marke oder Einheit und verfolgen Sie die Kosten je Etage, Mieter oder Anlage.',
      },
      {
        question: 'Können externe Techniker Fleet nutzen?',
        answer:
          'Ja. Dienstleister erhalten schnellen Zugang zu ihren Aufträgen, mit Berechtigungen und Freigaben, die Ihr Team festlegt.',
      },
      {
        question: 'Wächst Fleet auf mehrere Center mit?',
        answer:
          'Ja. Fleet unterstützt ein Center oder 30 Handelsimmobilien, mit Regeln und Berichten je Objekt und Region.',
      },
    ],
  },
  hospitality: {
    hero: {
      eyebrow: 'Hotellerie und Gastronomie',
      title: 'Instandhaltung, die jedes Gästeerlebnis schützt',
      description:
        'Fleet hilft Hotels, Resorts und Restaurants, in Gästezimmern, Küchen und öffentlichen Bereichen vorausschauend zu arbeiten, mit mobilen Aufträgen und integrierter Compliance.',
      highlights: ['Tracking je Zimmer', 'Küchengeräteprüfungen', 'Sicherheits-Compliance'],
      visual: {
        kind: 'jobs',
        title: 'Hotelanliegen · Heute',
        items: [
          {
            title: 'Klimaanlage kühlt nicht',
            location: 'Zimmer 1204',
            status: 'Techniker unterwegs',
            tone: 'info',
          },
          {
            title: 'Tropfender Wasserhahn',
            location: 'Zimmer 806',
            status: 'Gelöst',
            tone: 'done',
          },
          {
            title: 'Alarm Kühlraum',
            location: 'Hauptküche',
            status: 'Dringend',
            tone: 'overdue',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Gäste spüren jedes Detail',
        description:
          'Eine laute Klimaanlage, ein tropfender Hahn oder ein defekter Aufzug prägen den Aufenthalt, und Küchen hängen an jedem Kühlschrank und jeder Fritteuse.',
        points: ['Gästezimmer', 'Küchen', 'Öffentliche Bereiche'],
      },
      answer: {
        title: 'Exzellenter Betrieb hinter den Kulissen',
        description:
          'Fleet koordiniert Housekeeping, Technik, F&B und Dienstleister, damit Anliegen schnell gelöst werden und Gäste jeden Moment genießen.',
      },
    },
    capabilities: {
      title: 'Für den Hotelbetrieb gemacht',
      description: 'Instandhaltung für Front und Back of House in einer Plattform.',
      tabs: [
        {
          icon: 'requests',
          label: 'Meldungen',
          title: 'Schnelle Meldungen von überall',
          description:
            'Mitarbeitende melden tropfende Hähne oder Klimaausfälle per Tablet oder Smartphone, nach Zimmer, Suite oder Bereich.',
          points: [
            'Aufträge nach Zimmer und Bereich',
            'Meldung durch jedes Teammitglied',
            'Planung außerhalb der Stoßzeiten',
          ],
          visual: {
            kind: 'steps',
            title: 'Gästeanliegen',
            steps: [
              {
                kind: 'Meldung',
                text: 'Klimaanlage kühlt nicht, Zimmer 1204',
              },
              {
                kind: 'Dann',
                text: 'Auftrag erstellt und zugeordnet',
              },
              {
                kind: 'Dann',
                text: 'Techniker zugewiesen, Gast informiert',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Vorbeugend',
          title: 'Küchen und Systeme planmäßig',
          description:
            'Automatisieren Sie die Wartung von Klima, Kühlgeräten, Öfen und Aufzügen, mit Checklisten für jeden Einsatz.',
          points: [
            'Prüfungen der Küchengeräte',
            'Pläne für Klima und Aufzüge',
            'Checklisten mit Fotonachweis',
          ],
          visual: {
            kind: 'jobs',
            title: 'Küchenprüfungen · Diese Woche',
            items: [
              {
                title: 'Wartung Kühlzelle',
                location: 'Hauptküche',
                status: 'Erledigt',
                tone: 'done',
              },
              {
                title: 'Reinigung Fettabscheider',
                location: 'Back of House',
                status: 'Geplant',
                tone: 'info',
              },
              {
                title: 'Prüfung Kombidämpfer',
                location: 'Bankettküche',
                status: 'Heute fällig',
                tone: 'due',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: 'Compliance',
          title: 'Gesundheits-, Sicherheits- und Lebensmittelstandards',
          description:
            'Verfolgen Sie Brandschutzprüfungen und Lebensmittellager-Audits, mit Nachweisen für jede Prüfung.',
          points: [
            'Brandschutzprüfungen',
            'Audits der Lebensmittellagerung',
            'Prüfpfade für jede Kontrolle',
          ],
          visual: {
            kind: 'files',
            title: 'Compliance · Harbour Hotel',
            items: [
              {
                title: 'Brandschutzprüfung.pdf',
                location: 'Erledigt 12. Sep.',
                status: 'Gültig',
                tone: 'done',
              },
              {
                title: 'Audit Lebensmittellager.pdf',
                location: 'Fällig in 7 Tagen',
                status: 'Fällig',
                tone: 'due',
              },
              {
                title: 'Aufzugszertifikat.pdf',
                location: 'Gültig bis Jan. 2027',
                status: 'Gültig',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Kosten',
          title: 'Weniger Ausfälle und Betriebskosten',
          description:
            'Verfolgen Sie Reparaturhistorie und wartungsintensive Geräte, um Ersatz zu planen und Budgets zu prognostizieren.',
          points: [
            'Reparaturhistorie je Anlage',
            'Kosten nach Zimmern, Küchen und Bereichen',
            'Ersatzprognosen',
          ],
          visual: {
            kind: 'chart',
            title: 'Instandhaltungskosten nach Bereich · Q3',
            stats: [
              {
                label: 'Kosten Q3',
                value: '48.000 $',
              },
              {
                label: 'Zimmer betreut',
                value: '312',
              },
            ],
            bars: [
              {
                label: 'Gästezimmer',
                value: 74,
              },
              {
                label: 'Küchen',
                value: 61,
              },
              {
                label: 'Lobbys',
                value: 38,
              },
              {
                label: 'Spa und Pool',
                value: 27,
              },
              {
                label: 'Back of House',
                value: 22,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Front of House',
        title: 'Jedes Zimmer bereit zur Ankunft',
        description:
          'Housekeeping und Technik teilen eine Ansicht jedes Zimmers, damit Mängel vor dem nächsten Check-in behoben sind.',
        points: [
          'Zimmerstatus für alle Teams',
          'Reparaturen nach Belegung geplant',
          'Fotonachweis bei Erledigung',
        ],
        visual: {
          kind: 'jobs',
          title: 'Zimmer · Etage 12',
          items: [
            {
              title: 'Zimmer 1204',
              location: 'Klimareparatur',
              status: 'In Arbeit',
              tone: 'info',
            },
            {
              title: 'Zimmer 1210',
              location: 'Bereit zur Ankunft',
              status: 'Bereit',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'hotelReception',
          alt: 'Gäste checken an der Hotelrezeption ein',
        },
      },
      {
        tag: 'Back of House',
        title: 'Küchen, die keinen Service verpassen',
        description:
          'Geplante Prüfungen und schnelle Reparaturen halten Kühlgeräte, Fritteusen und Abluft in jedem Service in Betrieb.',
        points: [
          'Geräteprüfung vor jedem Service',
          'Dienstleister für Spezialsysteme',
          'Ausfallzeiten je Gerät',
        ],
        visual: {
          kind: 'log',
          title: 'Küchenaktivität',
          entries: [
            {
              when: '06:10',
              who: 'Köchin Ana',
              what: 'hat den Kühlraumalarm gemeldet',
            },
            {
              when: '06:18',
              who: 'Fleet',
              what: 'hat CoolAir als dringenden Auftrag zugewiesen',
            },
          ],
        },
        photo: {
          id: 'chefManager',
          alt: 'Koch und Manager prüfen ein Tablet in der Küche',
        },
      },
      {
        tag: 'Housekeeping',
        title: 'Housekeeping und Technik im Gleichklang',
        description:
          'Eigene Ansichten für Housekeeping, Technik, F&B und Rezeption halten jedes Team bei der richtigen Arbeit.',
        points: [
          'Ansichten für jedes Team',
          'Mängel bei der Reinigung erfasst',
          'Übergabenotizen über Schichten',
        ],
        visual: {
          kind: 'steps',
          title: 'Zimmerwechsel',
          steps: [
            {
              kind: 'Reinigung',
              text: 'Zimmer 806 · Abreise 11:00',
            },
            {
              kind: 'Dann',
              text: 'Housekeeping meldet tropfenden Hahn',
            },
            {
              kind: 'Dann',
              text: 'Behoben vor Ankunft um 15:00',
            },
          ],
        },
        photo: {
          id: 'hotelHousekeeping',
          alt: 'Hauswirtschaftskraft bereitet ein Hotelzimmer vor',
        },
      },
    ],
    quote: {
      text: 'Fleet hat unsere reaktive Instandhaltung um fast 40 % reduziert. Endlich haben wir Techniker, Anlagenprotokolle und Auftragsdaten an einem Ort.',
      author: 'Leitung Objektbetrieb',
      company: 'Gemischt genutztes Quartier',
      photo: {
        id: 'busyKitchen',
        alt: 'Köche in einer belebten Großküche',
      },
    },
    faq: [
      {
        question: 'Wie unterstützt Fleet Hotels und Restaurants?',
        answer:
          'Fleet bietet mobile Aufträge, Wartungspläne für Küchen und Gebäudetechnik, Compliance-Tracking und Berichte in einer Plattform.',
      },
      {
        question: 'Können Mitarbeitende Mängel aus Gästezimmern melden?',
        answer:
          'Ja. Jedes Teammitglied meldet Mängel per Smartphone oder Tablet, nach Zimmer, Suite oder Bereich, mit Fotos.',
      },
      {
        question: 'Kann Fleet Lebensmittel- und Brandschutzprüfungen verfolgen?',
        answer:
          'Ja. Fleet verfolgt Brandschutzprüfungen, Audits der Lebensmittellagerung und weitere Compliance-Aufgaben mit Prüfpfaden.',
      },
      {
        question: 'Können wir Wartung rund um die Gäste planen?',
        answer:
          'Ja. Planen Sie Arbeiten außerhalb der Stoßzeiten und koordinieren Sie Housekeeping und Technik, damit Gäste ungestört bleiben.',
      },
    ],
  },
  healthcareEducation: {
    hero: {
      eyebrow: 'Gesundheit und Bildung',
      title:
        'Instand\u00adhaltung für Gesundheits- und Bildungs\u00adeinrichtungen, auf die Verlass ist',
      description:
        'Halten Sie Kliniken, Praxen, Schulen und Campus sicher, konform und angenehm, mit Wartungsplänen, schnellen Reparaturen und prüfbereiten Nachweisen.',
      highlights: ['Wartungspläne', 'Prüfbereite Nachweise', 'Schnelle Reparaturen'],
      visual: {
        kind: 'jobs',
        title: 'Campus-Anliegen · Heute',
        items: [
          {
            title: 'Klimaprüfung Station 3',
            location: 'Ostflügel · Ebene 3',
            status: 'In Arbeit',
            tone: 'info',
          },
          {
            title: 'Prüfung Brandschutztür',
            location: 'Naturwissenschaften',
            status: 'Heute fällig',
            tone: 'due',
          },
          {
            title: 'Beamer Klassenraum',
            location: 'Raum B12',
            status: 'Erledigt',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Kritische Räume brauchen verlässliche Technik',
        description:
          'Klima, Aufzüge, Brandschutz und Hygiene schützen Patienten, Personal und Lernende, und jede Prüfung braucht einen Nachweis.',
        points: ['Patientenbereiche', 'Klassenräume', 'Strenge Standards'],
      },
      answer: {
        title: 'Sichere, konforme Gebäude an jedem Tag',
        description:
          'Fleet plant die Wartung, verfolgt jede Reparatur und führt die Nachweise, damit sich Ihre Teams auf Versorgung und Lernen konzentrieren.',
      },
    },
    capabilities: {
      title: 'Für sichere, konforme Einrichtungen gemacht',
      description: 'Von der Luftqualität bis zum Brandschutz: jedes System geplant und belegt.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Vorbeugend',
          title: 'Wartungspläne für kritische Systeme',
          description:
            'Planen Sie die Wartung von Klima, Aufzügen, Notstromaggregaten und Brandschutz, mit Checklisten für jeden Einsatz.',
          points: [
            'Pläne für kritische Systeme',
            'Checklisten mit Messwerten',
            'Aufträge vor dem Fälligkeitstermin',
          ],
          visual: {
            kind: 'steps',
            title: 'Wartungsplan',
            steps: [
              {
                kind: 'Plan',
                text: 'Stationsklima · monatlicher Filterwechsel',
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
          icon: 'compliance',
          label: 'Compliance',
          title: 'Prüfungen und Zertifikate nachgewiesen',
          description:
            'Verfolgen Sie Prüfungen, Zertifikate und Genehmigungen, mit Erinnerungen vor jedem Ablauf.',
          points: [
            'Prüfnachweise je Gebäude',
            'Zertifikate an den Anlagen',
            'Erinnerungen vor dem Ablauf',
          ],
          visual: {
            kind: 'files',
            title: 'Compliance · Ostflügel',
            items: [
              {
                title: 'Prüfung Brandschutztüren.pdf',
                location: 'Erledigt 03. Sep.',
                status: 'Gültig',
                tone: 'done',
              },
              {
                title: 'Aufzugszertifikat.pdf',
                location: 'Verlängerung in 30 Tagen',
                status: 'Verlängern',
                tone: 'due',
              },
              {
                title: 'Protokoll Notstromtest.pdf',
                location: 'Monatlich',
                status: 'Geprüft',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'workOrders',
          label: 'Reparaturen',
          title: 'Schnelle Reaktion auf jedes Anliegen',
          description:
            'Personal und Lehrkräfte melden Mängel von jedem Gerät, und Aufträge erreichen das richtige Team mit Prioritäten und SLAs.',
          points: [
            'Meldungen von jedem Gerät',
            'Prioritäten für kritische Bereiche',
            'SLA-Timer für jeden Auftrag',
          ],
          visual: {
            kind: 'jobs',
            title: 'Offene Anliegen',
            items: [
              {
                title: 'Abzug im Labor',
                location: 'Naturwissenschaften',
                status: 'Dringend',
                tone: 'overdue',
              },
              {
                title: 'Undichtes Waschbecken',
                location: 'Station 2',
                status: 'Zugewiesen',
                tone: 'info',
              },
              {
                title: 'Defekter Stuhl',
                location: 'Raum A04',
                status: 'Gelöst',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Berichte',
          title: 'Klare Berichte für die Leitung',
          description:
            'Zeigen Sie Reaktionszeiten, Compliance-Status und Kosten je Gebäude für Leitung und Aufsicht.',
          points: [
            'Reaktionszeiten je Gebäude',
            'Compliance-Status auf einen Blick',
            'Exporte für Prüfungen',
          ],
          visual: {
            kind: 'chart',
            title: 'Geplante Arbeiten erledigt · Q3',
            stats: [
              {
                label: 'Pünktlich',
                value: '97 %',
              },
              {
                label: 'Prüfungen',
                value: '186',
              },
            ],
            bars: [
              {
                label: 'Ostflügel',
                value: 98,
              },
              {
                label: 'Westflügel',
                value: 96,
              },
              {
                label: 'Naturwiss.',
                value: 95,
              },
              {
                label: 'Bibliothek',
                value: 99,
              },
              {
                label: 'Sporthalle',
                value: 94,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Hygiene',
        title: 'Saubere Räume in jeder Schicht',
        description:
          'Reinigungspläne mit Checklisten und Fotonachweis halten Stationen, Klassenräume und Sanitärbereiche auf dem richtigen Standard.',
        points: [
          'Reinigungspläne je Bereich',
          'Checklisten mit Fotonachweis',
          'Mängel bei Rundgängen erfasst',
        ],
        visual: {
          kind: 'jobs',
          title: 'Reinigungsrunden',
          items: [
            {
              title: 'Sanitär Station 3',
              location: 'Alle 2 Stunden',
              status: 'Im Plan',
              tone: 'done',
            },
            {
              title: 'Grundreinigung Mensa',
              location: 'Täglich · 15:00',
              status: 'Geplant',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'cleanerCorridor',
          alt: 'Reinigungskraft desinfiziert einen Türgriff',
        },
      },
      {
        tag: 'Luftqualität',
        title: 'Angenehme, gesunde Luft',
        description:
          'Klimawartungspläne halten Filter, Lüftungsgeräte und Kühlung für Patienten und Lernende in Bestform.',
        points: [
          'Filterwechsel nach Plan',
          'Messwerte bei jedem Einsatz',
          'Störungen früh erkannt',
        ],
        visual: {
          kind: 'steps',
          title: 'Plan Luftqualität',
          steps: [
            {
              kind: 'Jeden',
              text: 'Monat · alle Lüftungsgeräte',
            },
            {
              kind: 'Dann',
              text: 'Filter wechseln und Messwerte erfassen',
            },
          ],
        },
        photo: {
          id: 'acFilterService',
          alt: 'Techniker wechselt einen Klimafilter',
        },
      },
      {
        tag: 'Strom und Sicherheit',
        title: 'Strom- und Sicherheitssysteme einsatzbereit',
        description:
          'Notstromaggregate, Verteilungen und Brandschutzanlagen werden planmäßig geprüft, mit jedem Ergebnis im Nachweis.',
        points: [
          'Tests für Aggregate und Verteilungen',
          'Prüfungen der Brandschutzanlagen',
          'Ergebnisse an jeder Anlage',
        ],
        visual: {
          kind: 'asset',
          title: 'Anlagenprofil',
          name: 'Notstromaggregat G-01',
          location: 'Ostflügel · Technikraum',
          status: 'Geprüft',
          facts: [
            {
              label: 'Letzter Test',
              value: '01. Okt.',
            },
            {
              label: 'Nächster Test',
              value: '01. Nov.',
            },
            {
              label: 'Betriebsstunden',
              value: '412',
            },
            {
              label: 'Offene Aufträge',
              value: '0',
            },
          ],
        },
        photo: {
          id: 'electricianPanel',
          alt: 'Elektriker arbeitet an einem Schaltschrank',
        },
      },
    ],
    quote: {
      text: 'Fleet hat unsere reaktive Instandhaltung um fast 40 % reduziert. Endlich haben wir Techniker, Anlagenprotokolle und Auftragsdaten an einem Ort.',
      author: 'Leitung Objektbetrieb',
      company: 'Gemischt genutztes Quartier',
      photo: {
        id: 'officeCorridor',
        alt: 'Menschen in einem hellen Büroflur',
      },
    },
    faq: [
      {
        question: 'Eignet sich Fleet für Kliniken, Praxen und Schulen?',
        answer:
          'Ja. Fleet unterstützt Gesundheits- und Bildungseinrichtungen jeder Größe, von einer Praxis oder Schule bis zum Campus mit vielen Standorten.',
      },
      {
        question: 'Wie hilft Fleet bei Prüfungen und Audits?',
        answer:
          'Fleet führt Prüfungen, Zertifikate und Genehmigungen mit Prüfpfaden und Erinnerungen vor jedem Ablauf.',
      },
      {
        question: 'Können Personal und Lehrkräfte Mängel melden?',
        answer:
          'Ja. Jede eingeladene Person meldet Mängel per Smartphone oder Tablet, und Meldungen werden zu Aufträgen mit Prioritäten und SLAs.',
      },
      {
        question: 'Können wir der Leitung berichten?',
        answer:
          'Ja. Dashboards und Exporte zeigen Reaktionszeiten, Compliance-Status und Kosten je Gebäude.',
      },
    ],
  },
  logistics: {
    hero: {
      eyebrow: 'Schifffahrt und Logistik',
      title: 'Instandhaltung, die jede Sendung in Bewegung hält',
      description:
        'Fleet hilft Logistikteams, Lager, Rampen, Anlagen und Fahrzeuge in Betrieb zu halten, mit schneller Auftragserfassung und Wartungsplänen an jedem Standort.',
      highlights: ['Schnelle Auftragserfassung', 'Wartungspläne für die Flotte', 'Ausfallanalysen'],
      visual: {
        kind: 'jobs',
        title: 'Westport DC · Heute',
        items: [
          {
            title: 'Rampentor 4 defekt',
            location: 'Laderampe',
            status: 'Dringend',
            tone: 'overdue',
          },
          {
            title: 'Wartung Förderband C2',
            location: 'Sortierung',
            status: 'In Arbeit',
            tone: 'info',
          },
          {
            title: 'Prüfung Stapler FL-07',
            location: 'Hof',
            status: 'Erledigt',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Jede Stunde Ausfall zieht Kreise',
        description:
          'Fällt ein Rampentor aus oder steht ein Förderband, verschieben sich die Pläne für Kunden, Spediteure und Teams.',
        points: ['Laderampen', 'Förderbänder', 'Fahrzeuge'],
      },
      answer: {
        title: 'Durchsatz geschützt durch vorausschauende Instandhaltung',
        description:
          'Fleet erfasst Mängel direkt in der Halle, plant vorbeugende Arbeiten und verfolgt jede Anlage, damit Sendungen pünktlich bleiben.',
      },
    },
    capabilities: {
      title: 'Für schnelle Logistik gemacht',
      description: 'Lager, Anlagen und Fahrzeuge in einem Dashboard.',
      tabs: [
        {
          icon: 'workOrders',
          label: 'Meldungen',
          title: 'Schnelle Auftragserfassung in der Halle',
          description:
            'Techniker und Vorgesetzte melden Mängel sofort mobil, und Aufträge gehen nach Region oder Rolle an interne Teams oder Dienstleister.',
          points: [
            'Mobile Mängelmeldungen',
            'Aufträge nach Region oder Rolle',
            'Dienstleister im selben Ablauf',
          ],
          visual: {
            kind: 'jobs',
            title: 'Offene Aufträge',
            items: [
              {
                title: 'Überladebrücke klemmt',
                location: 'Rampe 6',
                status: 'Zugewiesen',
                tone: 'info',
              },
              {
                title: 'Regalschaden',
                location: 'Gang 14',
                status: 'Prüfen',
                tone: 'due',
              },
              {
                title: 'Ladegerät defekt',
                location: 'Staplerbereich',
                status: 'Gelöst',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Vorbeugend',
          title: 'Keine kritische Prüfung verpassen',
          description:
            'Automatisieren Sie die Wartung von Fahrzeugen, Förderbändern und Aufzügen, ausgelöst nach Kilometern, Betriebsstunden oder Zeit.',
          points: [
            'Auslöser nach Stunden, Kilometern oder Zeit',
            'Automatische Prüferinnerungen',
            'Weniger Notreparaturen',
          ],
          visual: {
            kind: 'steps',
            title: 'Nutzungsbasierter Plan',
            steps: [
              {
                kind: 'Auslöser',
                text: 'Stapler FL-07 erreicht 500 Stunden',
              },
              {
                kind: 'Dann',
                text: 'Wartungsauftrag erstellen',
              },
              {
                kind: 'Dann',
                text: 'Der Fahrzeugwerkstatt zuweisen',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Anlagen',
          title: 'Kosten und Historie je Anlage',
          description:
            'Sehen Sie Reparaturhistorie und Kosten je Stapler, Fahrzeug oder System und erkennen Sie Engpässe.',
          points: [
            'Reparaturhistorie je Anlage',
            'Kosten je Stapler und System',
            'Engpässe hervorgehoben',
          ],
          visual: {
            kind: 'asset',
            title: 'Anlagenprofil',
            name: 'Förderband C2',
            location: 'Westport DC · Sortierung',
            status: 'In Betrieb',
            facts: [
              {
                label: 'Betriebsstunden',
                value: '6.420',
              },
              {
                label: 'Letzte Wartung',
                value: '18. Sep.',
              },
              {
                label: 'Ausfall Q3',
                value: '5 h',
              },
              {
                label: 'Kosten lfd. Jahr',
                value: '7.850 $',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Analysen',
          title: 'Ausfälle und Reaktionszeiten',
          description:
            'Verfolgen Sie Ausfälle und Reaktionszeiten an allen Standorten und erkennen Sie Warnsignale früh.',
          points: [
            'Ausfälle nach Standort und Anlage',
            'Reaktionszeiten nach Team',
            'Trends mit frühen Warnsignalen',
          ],
          visual: {
            kind: 'chart',
            title: 'Ausfallstunden nach Standort · Q3',
            stats: [
              {
                label: 'Ausfall Q3',
                value: '38 h',
              },
              {
                label: 'SLA erfüllt',
                value: '95,1 %',
              },
            ],
            bars: [
              {
                label: 'Westport DC',
                value: 14,
              },
              {
                label: 'Harbour Hub',
                value: 9,
              },
              {
                label: 'Northgate DC',
                value: 7,
              },
              {
                label: 'Flughafen',
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
        tag: 'Lager',
        title: 'Lager und Rampen bereit für jede Schicht',
        description:
          'Rampen, Tore, Regale und Beleuchtung werden planmäßig geprüft, und Mängel werden schnell erfasst und behoben.',
        points: [
          'Prüfung von Rampen und Toren',
          'Regalprüfungen nach Plan',
          'Schnelle Lösungen in der Halle',
        ],
        visual: {
          kind: 'jobs',
          title: 'Rampenprüfungen · Heute',
          items: [
            {
              title: 'Rampentore 1–8',
              location: 'Tägliche Prüfung',
              status: 'Erledigt',
              tone: 'done',
            },
            {
              title: 'Überladebrücke 6',
              location: 'Störung gemeldet',
              status: 'Zugewiesen',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'warehouseTeam',
          alt: 'Lagerteam prüft Bestände zwischen Regalen',
        },
      },
      {
        tag: 'Fahrzeuge',
        title: 'Fahrzeuge straßentauglich und konform',
        description:
          'Lkw, Transporter und Servicefahrzeuge teilen dasselbe Dashboard, von Wartungsprotokollen bis zu Zulassungen und Prüfungen.',
        points: [
          'Wartung nach Kilometern und Stunden',
          'Hinweise zu Prüfungen und Zulassungen',
          'Nachweise bereit für Audits',
        ],
        visual: {
          kind: 'log',
          title: 'Fahrzeughinweise',
          entries: [
            {
              when: '08:00',
              who: 'Fleet',
              what: 'hat die Wartung von Transporter V-12 bei 30.000 km geplant',
            },
            {
              when: '08:05',
              who: 'Fleet',
              what: 'hat die Zulassungsverlängerung für Lkw T-03 markiert',
            },
          ],
        },
        photo: {
          id: 'fleetManager',
          alt: 'Fuhrparkleiter mit Tablet vor Lkw',
        },
      },
      {
        tag: 'Analysen',
        title: 'Weniger Störungen, mehr Durchsatz',
        description:
          'Leistungstrends zeigen, welche Anlagen den Betrieb bremsen, damit Sie Ersatz planen, bevor es teuer wird.',
        points: [
          'Engpassanlagen hervorgehoben',
          'Ersatzplanung',
          'Transparenz über alle Standorte',
        ],
        visual: {
          kind: 'chart',
          title: 'Größte Ausfallverursacher · Q3',
          stats: [],
          bars: [
            {
              label: 'Rampentore',
              value: 12,
            },
            {
              label: 'Förderbänder',
              value: 9,
            },
            {
              label: 'Stapler',
              value: 7,
            },
            {
              label: 'Regale',
              value: 4,
            },
            {
              label: 'Beleuchtung',
              value: 2,
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
        id: 'stockCheck',
        alt: 'Mitarbeiter prüft Bestände im Regal',
      },
    },
    faq: [
      {
        question: 'Wie unterstützt Fleet Logistik- und Lagerbetriebe?',
        answer:
          'Fleet hilft Teams, Mängel in der Halle zu melden, Wartung für Rampen, Förderbänder, Aufzüge und Fahrzeuge zu planen und Ausfälle an jedem Standort zu verfolgen.',
      },
      {
        question: 'Kann die Wartung nutzungsbasiert ausgelöst werden?',
        answer:
          'Ja. Legen Sie Auslöser nach Kilometern, Betriebsstunden oder Zeit fest, mit automatischen Erinnerungen für Prüfungen und Wartung.',
      },
      {
        question: 'Kann Fleet auch unsere Fahrzeuge verwalten?',
        answer:
          'Ja. Das Fahrzeugmanagement von Fleet bietet dieselbe Transparenz, von Wartungsprotokollen und Zulassungen bis zu Fahrerdaten.',
      },
      {
        question: 'Können Dienstleister in Fleet arbeiten?',
        answer:
          'Ja. Vergeben Sie Aufträge nach Region oder Rolle an interne Teams oder Dienstleister, mit Zugang, Freigaben und SLAs unter Ihrer Kontrolle.',
      },
    ],
  },
  hvacLifts: {
    hero: {
      eyebrow: 'Klima, Lifte und Aufzüge',
      title: 'Wartung von Klima, Liften und Aufzügen nach Plan',
      description:
        'Planen, durchführen und belegen Sie die Wartung von Klimaanlagen, Aufzügen und Rolltreppen in jedem Gebäude, mit Zertifikaten und Dienstleisterkoordination.',
      highlights: ['Wiederkehrende Pläne', 'Zertifikate hinterlegt', 'Dienstleisterkoordination'],
      visual: {
        kind: 'jobs',
        title: 'Kritische Systeme · Heute',
        items: [
          {
            title: 'Wartung Kältemaschine CH-02',
            location: 'Harbour Point · Technikraum',
            status: 'In Arbeit',
            tone: 'info',
          },
          {
            title: 'Monatsprüfung Aufzug L2',
            location: 'Tower B · Kern',
            status: 'Heute fällig',
            tone: 'due',
          },
          {
            title: 'Prüfung Rolltreppe E3',
            location: 'Northgate Mall',
            status: 'Erledigt',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Kritische Systeme kennen keinen Ruhetag',
        description:
          'Kühlung, Aufzüge und Rolltreppen laufen täglich, und jedes System braucht regelmäßige Wartung, Zertifikate und schnelle Reaktion bei Störungen.',
        points: [
          'Kältemaschinen und RLT',
          'Aufzüge und Rolltreppen',
          'Spezialisierte Dienstleister',
        ],
      },
      answer: {
        title: 'Jedes System geplant und belegt',
        description:
          'Fleet plant jede Wartung, leitet sie an den richtigen Spezialisten und hinterlegt das Zertifikat an der Anlage.',
      },
    },
    capabilities: {
      title: 'Gebäudetechnik in Betrieb halten',
      description: 'Wartungspläne, Spezialdienstleister und Zertifikate an einem Ort.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Pläne',
          title: 'Wiederkehrende Wartung für jede Einheit',
          description:
            'Planen Sie Kältemaschinen, RLT-Geräte, Aufzüge und Rolltreppen nach Zeit oder Nutzung, mit bewährten Checklisten.',
          points: [
            'Pläne nach Zeit oder Nutzung',
            'Checklisten je Systemtyp',
            'Aufträge vor dem Fälligkeitstermin',
          ],
          visual: {
            kind: 'steps',
            title: 'Aufzugswartung',
            steps: [
              {
                kind: 'Plan',
                text: 'Aufzüge L1–L4 · monatliche Wartung',
              },
              {
                kind: 'Dann',
                text: 'LiftCo mit Checkliste zuweisen',
              },
              {
                kind: 'Dann',
                text: 'Wartungszertifikat anhängen',
              },
            ],
          },
        },
        {
          icon: 'vendors',
          label: 'Dienstleister',
          title: 'Spezialisten automatisch zugewiesen',
          description:
            'Leiten Sie Klima- und Aufzugsarbeiten nach Standort und System an den richtigen Spezialisten, mit SLAs für jeden Auftrag.',
          points: [
            'Dienstleister nach System und Standort',
            'SLAs für jeden Auftrag',
            'Angebote und Freigaben im Ablauf',
          ],
          visual: {
            kind: 'jobs',
            title: 'Spezialaufträge',
            items: [
              {
                title: 'CoolAir · Klima',
                location: '6 Aufträge heute',
                status: 'Im Plan',
                tone: 'done',
              },
              {
                title: 'LiftCo · Aufzüge',
                location: '3 Aufträge heute',
                status: '1 fällig',
                tone: 'due',
              },
              {
                title: 'Escalift · Rolltreppen',
                location: '2 Aufträge heute',
                status: 'Geplant',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Anlagen',
          title: 'Zertifikate und Historie je Einheit',
          description:
            'Jede Einheit führt Wartungshistorie, Zertifikate, Handbücher und Ausfallzeiten in einem Profil.',
          points: [
            'Zertifikate an jeder Einheit',
            'Wartungshistorie und Kosten',
            'Handbücher vor Ort verfügbar',
          ],
          visual: {
            kind: 'asset',
            title: 'Anlagenprofil',
            name: 'Aufzug L2',
            location: 'Tower B · Kernaufzüge',
            status: 'Wartung fällig',
            facts: [
              {
                label: 'Letzte Wartung',
                value: '02. Sep.',
              },
              {
                label: 'Zertifikat',
                value: 'Gültig bis Jan. 2027',
              },
              {
                label: 'Ausfall Q3',
                value: '4 h',
              },
              {
                label: 'Dienstleister',
                value: 'LiftCo',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Ausfälle',
          title: 'Ausfallanalyse je System',
          description:
            'Erkennen Sie Einheiten mit wiederkehrenden Störungen und planen Sie Ersatz mit Lebenszyklusdaten.',
          points: [
            'Ausfälle nach System und Standort',
            'Wiederkehrende Störungen hervorgehoben',
            'Ersatzprognosen',
          ],
          visual: {
            kind: 'chart',
            title: 'Ausfallstunden nach System · Q3',
            stats: [
              {
                label: 'Ausfall gesamt',
                value: '61 h',
              },
              {
                label: 'Gefährdete Einheiten',
                value: '5',
              },
            ],
            bars: [
              {
                label: 'Kältemaschinen',
                value: 22,
              },
              {
                label: 'RLT-Geräte',
                value: 15,
              },
              {
                label: 'Aufzüge',
                value: 12,
              },
              {
                label: 'Rolltreppen',
                value: 8,
              },
              {
                label: 'Split-Geräte',
                value: 4,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Klima',
        title: 'Kühlung, die mit dem Bedarf Schritt hält',
        description:
          'Kältemaschinen, RLT- und Dachgeräte werden planmäßig gewartet, mit Messwerten bei jedem Einsatz.',
        points: [
          'Messwerte vor Ort erfasst',
          'Filter- und Registerpläne',
          'Störungen früh erkannt',
        ],
        visual: {
          kind: 'jobs',
          title: 'Klimaplan · Oktober',
          items: [
            {
              title: 'Dachgeräte RTU 1–12',
              location: 'Harbour Point',
              status: 'Geplant',
              tone: 'info',
            },
            {
              title: 'Filterwechsel AHU-07',
              location: 'Tower B',
              status: 'Erledigt',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'rooftopUnits',
          alt: 'Klimageräte auf dem Dach eines Geschäftsgebäudes',
        },
      },
      {
        tag: 'Aufzüge',
        title: 'Aufzüge und Rolltreppen zertifiziert und sicher',
        description:
          'Monatliche Prüfungen, gesetzliche Inspektionen und Zertifikate bleiben für jede Einheit im Plan.',
        points: [
          'Monatsprüfungen durch Dienstleister',
          'Gesetzliche Prüfungen verfolgt',
          'Zertifikate rechtzeitig erneuert',
        ],
        visual: {
          kind: 'files',
          title: 'Aufzugszertifikate',
          items: [
            {
              title: 'Zertifikat Aufzug L1.pdf',
              location: 'Gültig bis März 2027',
              status: 'Gültig',
              tone: 'done',
            },
            {
              title: 'Zertifikat Aufzug L2.pdf',
              location: 'Verlängerung in 30 Tagen',
              status: 'Verlängern',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'liftShaft',
          alt: 'Techniker arbeiten in einem Aufzugsschacht',
        },
      },
      {
        tag: 'Reaktion',
        title: 'Schnelle Reaktion bei Störungen',
        description:
          'Störungen aus GLT-Alarmen oder Meldungen des Personals werden zu priorisierten Aufträgen für den richtigen Spezialisten.',
        points: [
          'GLT-Alarme werden Aufträge',
          'Priorität nach System und Standort',
          'Dienstleister sofort informiert',
        ],
        visual: {
          kind: 'log',
          title: 'Störungsreaktion',
          entries: [
            {
              when: '14:02',
              who: 'GLT',
              what: 'hat hohe Temperatur an AHU-07 gemeldet',
            },
            {
              when: '14:03',
              who: 'Fleet',
              what: 'hat einen dringenden Auftrag für CoolAir erstellt',
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
        id: 'liftTechnician',
        alt: 'Techniker arbeitet in einer Aufzugskabine',
      },
    },
    faq: [
      {
        question: 'Kann Fleet Klima- und Aufzugswartung gemeinsam verwalten?',
        answer:
          'Ja. Fleet plant und verfolgt die Wartung von Klima, Aufzügen und Rolltreppen in einer Plattform, mit Plänen, Dienstleistern und Zertifikaten für jede Einheit.',
      },
      {
        question: 'Kann Fleet Aufzugszertifikate hinterlegen?',
        answer:
          'Ja. Zertifikate hängen an jedem Aufzug und jeder Rolltreppe, mit Erinnerungen vor dem Ablauf.',
      },
      {
        question: 'Können GLT-Alarme Aufträge erzeugen?',
        answer:
          'Ja. Über Integrationen mit der Gebäudeleittechnik fließen Alarme und Messwerte in Ihre Wartungspläne und erzeugen Aufträge.',
      },
      {
        question: 'Wie arbeiten Spezialdienstleister in Fleet?',
        answer:
          'Dienstleister erhalten Aufträge für ihre Systeme und Standorte, reichen Angebote ein und schließen die Arbeit mit Fotos und Zertifikaten ab.',
      },
    ],
  },
  dataCenters: {
    hero: {
      eyebrow: 'Rechenzentren',
      title: 'Instandhaltung für Rechenzentren, die die Verfügbarkeit sichert',
      description:
        'Halten Sie Kühlung, Stromversorgung und Sicherheitssysteme in Bestform, mit Wartungsplänen, GLT-Alarmen und lückenlosen Änderungsnachweisen.',
      highlights: ['Pläne für Kühlung und Strom', 'GLT-Alarme', 'Lückenlose Änderungsnachweise'],
      visual: {
        kind: 'jobs',
        title: 'Datenhalle · Heute',
        items: [
          {
            title: 'Filterwechsel CRAH 4',
            location: 'Halle A',
            status: 'In Arbeit',
            tone: 'info',
          },
          {
            title: 'Prüfung USV-Batterien',
            location: 'Stromraum 2',
            status: 'Heute fällig',
            tone: 'due',
          },
          {
            title: 'Lasttest Notstrom',
            location: 'Hof',
            status: 'Erledigt',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Verfügbarkeit beginnt beim Gebäude',
        description:
          'Kühlung, Stromverteilung und Löschanlagen arbeiten rund um die Uhr, und jeder Eingriff braucht Planung und Nachweis.',
        points: ['Kühlung', 'Strom', 'Löschanlagen'],
      },
      answer: {
        title: 'Jedes System präzise gewartet',
        description:
          'Fleet plant jede Aufgabe, leitet sie an qualifizierte Teams und dokumentiert jede Änderung für Audits und SLAs.',
      },
    },
    capabilities: {
      title: 'Für geschäftskritische Gebäude gemacht',
      description: 'Geplante Wartung, kontrollierte Änderungen und volle Nachvollziehbarkeit.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Vorbeugend',
          title: 'Pläne für Kühlung und Strom',
          description:
            'Planen Sie CRAH-Geräte, Kältemaschinen, USV und Notstrom nach Zeit oder Betriebsstunden, mit detaillierten Checklisten.',
          points: [
            'Pläne nach Zeit oder Betriebsstunden',
            'Detaillierte Checklisten und Messwerte',
            'Arbeiten vor Wartungsfenstern geplant',
          ],
          visual: {
            kind: 'steps',
            title: 'Notstromplan',
            steps: [
              {
                kind: 'Jeden',
                text: 'Monat · erster Dienstag',
              },
              {
                kind: 'Dann',
                text: 'Lasttest über 60 Minuten',
              },
              {
                kind: 'Dann',
                text: 'Messwerte in Historie G-01 erfassen',
              },
            ],
          },
        },
        {
          icon: 'approvals',
          label: 'Änderungen',
          title: 'Kontrollierte Änderungen',
          description:
            'Freigabepunkte sorgen dafür, dass jeder Eingriff geplant, freigegeben und dokumentiert ist, bevor die Arbeit beginnt.',
          points: [
            'Freigaben vor Arbeitsbeginn',
            'Wartungsfenster eingehalten',
            'Jede Änderung dokumentiert',
          ],
          visual: {
            kind: 'jobs',
            title: 'Änderungsanträge',
            items: [
              {
                title: 'Tausch USV-Modul',
                location: 'Stromraum 2',
                status: 'Freigeben',
                tone: 'due',
              },
              {
                title: 'Firmware-Update CRAH',
                location: 'Halle A',
                status: 'Freigegeben',
                tone: 'done',
              },
              {
                title: 'PDU-Prüfung',
                location: 'Halle B',
                status: 'Geplant',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Anlagen',
          title: 'Lückenlose Anlagenhistorie',
          description:
            'Jede Kältemaschine, USV, PDU und jedes Aggregat führt Wartungshistorie, Messwerte und Dokumente.',
          points: [
            'Messwerte und Historie je Anlage',
            'Garantie- und Vertragsdaten',
            'Handbücher vor Ort verfügbar',
          ],
          visual: {
            kind: 'asset',
            title: 'Anlagenprofil',
            name: 'USV-2B',
            location: 'Stromraum 2',
            status: 'In Betrieb',
            facts: [
              {
                label: 'Letzte Wartung',
                value: '15. Aug.',
              },
              {
                label: 'Batteriealter',
                value: '3 Jahre',
              },
              {
                label: 'Last',
                value: '62 %',
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
          title: 'Berichte bereit für SLAs',
          description:
            'Zeigen Sie Kunden und Prüfern erledigte Wartung, Reaktionszeiten und Änderungshistorie.',
          points: [
            'Erledigte geplante Arbeiten',
            'Reaktionszeiten nach Priorität',
            'Exporte für Audits',
          ],
          visual: {
            kind: 'chart',
            title: 'Geplante Arbeiten erledigt · Q3',
            stats: [
              {
                label: 'Pünktlich',
                value: '99,2 %',
              },
              {
                label: 'Änderungen',
                value: '84',
              },
            ],
            bars: [
              {
                label: 'Kühlung',
                value: 99,
              },
              {
                label: 'Strom',
                value: 100,
              },
              {
                label: 'Brandschutz',
                value: 98,
              },
              {
                label: 'Sicherheit',
                value: 99,
              },
              {
                label: 'Gebäude',
                value: 97,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Kühlung',
        title: 'Kühlung unter ständiger Beobachtung',
        description:
          'GLT-Alarme und Messwerte fließen in die Wartungspläne, damit Kühlgeräte gewartet werden, bevor die Leistung sinkt.',
        points: [
          'GLT-Messwerte in den Plänen',
          'Filter- und Registerpläne',
          'Alarme werden Aufträge',
        ],
        visual: {
          kind: 'log',
          title: 'Kühlungsalarme',
          entries: [
            {
              when: '02:14',
              who: 'GLT',
              what: 'hat steigende Zulufttemperatur an CRAH 4 gemeldet',
            },
            {
              when: '02:15',
              who: 'Fleet',
              what: 'hat einen priorisierten Auftrag für die Rufbereitschaft erstellt',
            },
          ],
        },
        photo: {
          id: 'dataCenter',
          alt: 'Serverreihen in einem Rechenzentrum',
        },
      },
      {
        tag: 'Strom',
        title: 'Stromversorgung getestet und bereit',
        description:
          'USV, Batterien, PDUs und Notstromaggregate werden planmäßig getestet, mit jedem Ergebnis im Nachweis.',
        points: [
          'USV- und Batterieprüfungen',
          'Lasttests der Aggregate',
          'Ergebnisse an jeder Anlage',
        ],
        visual: {
          kind: 'jobs',
          title: 'Stromprüfungen · Oktober',
          items: [
            {
              title: 'Lasttest Aggregat G-01',
              location: 'Monatlich',
              status: 'Erledigt',
              tone: 'done',
            },
            {
              title: 'Batterieprüfung USV-2B',
              location: 'Vierteljährlich',
              status: 'Heute fällig',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'electricianPanel',
          alt: 'Elektriker arbeitet an einem Schaltschrank',
        },
      },
      {
        tag: 'Teams',
        title: 'Techniker und Dienstleister in einem Ablauf',
        description:
          'Eigene Techniker und Spezialdienstleister folgen denselben Verfahren, Freigaben und Nachweisen.',
        points: [
          'Gleiche Verfahren für alle Teams',
          'Dienstleisterzugang zu ihren Aufträgen',
          'Vollständige Historie an jedem Auftrag',
        ],
        visual: {
          kind: 'jobs',
          title: 'Teams heute',
          items: [
            {
              title: 'Techniker vor Ort',
              location: '6 Aufträge',
              status: 'Im Plan',
              tone: 'done',
            },
            {
              title: 'CoolAir · Kühlung',
              location: '2 Aufträge',
              status: 'Geplant',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'techniciansPanel',
          alt: 'Zwei Techniker prüfen eine Anlagensteuerung',
        },
      },
    ],
    quote: {
      text: 'Andere Plattformen waren zu komplex oder zu allgemein. Fleet bot uns eine maßgeschneiderte Lösung mit schnellerem Support.',
      author: 'Leitung Instandhaltung',
      company: 'Logistikzentrum',
      photo: {
        id: 'factoryTechnician',
        alt: 'Techniker prüft eine Anlage mit dem Tablet',
      },
    },
    faq: [
      {
        question: 'Unterstützt Fleet Facility-Teams in Rechenzentren?',
        answer:
          'Ja. Fleet plant und verfolgt die Wartung von Kühlung, Strom und Brandschutz, mit Freigaben, Messwerten und lückenlosen Änderungsnachweisen.',
      },
      {
        question: 'Kann die Wartung nach Betriebsstunden erfolgen?',
        answer:
          'Ja. Planen Sie Arbeiten nach Zeit oder Nutzung, etwa nach Betriebsstunden von Aggregaten und USV-Anlagen.',
      },
      {
        question: 'Können GLT-Alarme Aufträge erzeugen?',
        answer:
          'Ja. Integrationen mit der Gebäudeleittechnik lassen Alarme und Messwerte in Wartungspläne einfließen und Aufträge erzeugen.',
      },
      {
        question: 'Können wir Kunden die SLA-Leistung zeigen?',
        answer:
          'Ja. Dashboards und Exporte zeigen erledigte Wartung, Reaktionszeiten und Änderungshistorie.',
      },
    ],
  },
  fitness: {
    hero: {
      eyebrow: 'Fitness- und Wellnesszentren',
      title: 'Instandhaltung für Fitness- und Wellnesszentren, die Mitglieder spüren',
      description:
        'Halten Sie Studios, Kursräume, Pools und Spas sauber, sicher und funktionsfähig, mit Geräteprüfungen, Reinigungsplänen und schnellen Reparaturen.',
      highlights: ['Geräteprüfungen', 'Reinigungspläne', 'Schnelle Reparaturen'],
      visual: {
        kind: 'jobs',
        title: 'Club-Anliegen · Heute',
        items: [
          {
            title: 'Laufband T-08 Gurt',
            location: 'Cardiobereich',
            status: 'In Arbeit',
            tone: 'info',
          },
          {
            title: 'pH-Prüfung Pool',
            location: 'Schwimmhalle',
            status: 'Heute fällig',
            tone: 'due',
          },
          {
            title: 'Saunaofen',
            location: 'Spa',
            status: 'Erledigt',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Mitglieder erwarten, dass alles funktioniert',
        description:
          'Geräte, Duschen, Pools und Klima sind ständig im Einsatz, und Mitglieder bemerken jedes Außer-Betrieb-Schild.',
        points: ['Geräte', 'Pools und Spas', 'Volle Kurspläne'],
      },
      answer: {
        title: 'Jeder Raum bereit für jedes Mitglied',
        description:
          'Fleet plant Prüfungen, erfasst Meldungen von Personal und Mitgliedern und leitet Reparaturen schnell weiter, in jedem Club.',
      },
    },
    capabilities: {
      title: 'Für volle Clubs und Studios gemacht',
      description: 'Geräte, Reinigung und Gebäudetechnik an einem Ort.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Geräte',
          title: 'Geräteprüfungen nach Plan',
          description:
            'Planen Sie Prüfung und Wartung von Laufbändern, Bikes, Racks und Kraftgeräten, mit Checklisten.',
          points: [
            'Wartungspläne je Gerätetyp',
            'Tägliche Sicherheitsprüfungen',
            'Historie für jedes Gerät',
          ],
          visual: {
            kind: 'steps',
            title: 'Cardioplan',
            steps: [
              {
                kind: 'Jede',
                text: 'Woche · Montag 06:00',
              },
              {
                kind: 'Dann',
                text: 'Alle Cardiogeräte prüfen',
              },
              {
                kind: 'Dann',
                text: 'Mängel als Aufträge erfassen',
              },
            ],
          },
        },
        {
          icon: 'requests',
          label: 'Meldungen',
          title: 'Defekte Geräte schnell repariert',
          description:
            'Das Personal meldet defekte Geräte in Sekunden per Smartphone, und Reparaturen erreichen den richtigen Techniker oder Dienstleister.',
          points: [
            'Meldungen in Sekunden',
            'Fotos jedes Mangels',
            'Dienstleister für Spezialgeräte',
          ],
          visual: {
            kind: 'jobs',
            title: 'Offene Meldungen',
            items: [
              {
                title: 'Rudergerät R-02',
                location: 'Cardiobereich',
                status: 'Zugewiesen',
                tone: 'info',
              },
              {
                title: 'Duschablauf',
                location: 'Herrenumkleide',
                status: 'Dringend',
                tone: 'overdue',
              },
              {
                title: 'Lautsprecher Kursraum',
                location: 'Kursraum 2',
                status: 'Gelöst',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: 'Pools und Spas',
          title: 'Wasser- und Sicherheitsprüfungen erfasst',
          description:
            'Erfassen Sie Prüfungen für Pool, Sauna und Dampfbad mit Messwerten, damit Standards jeden Tag eingehalten werden.',
          points: [
            'Tägliche Wassermesswerte',
            'Prüfungen von Sauna und Dampfbad',
            'Nachweise bereit für Kontrollen',
          ],
          visual: {
            kind: 'files',
            title: 'Tagesprotokolle · Schwimmhalle',
            items: [
              {
                title: 'Wassermesswerte Pool.pdf',
                location: 'Heute 3-mal erfasst',
                status: 'Vollständig',
                tone: 'done',
              },
              {
                title: 'Prüfung Rettungsausrüstung.pdf',
                location: 'Täglich',
                status: 'Vollständig',
                tone: 'done',
              },
              {
                title: 'Sicherheitsprüfung Spa.pdf',
                location: 'Fällig in 5 Tagen',
                status: 'Fällig',
                tone: 'due',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Berichte',
          title: 'Verfügbarkeit in jedem Club',
          description:
            'Sehen Sie Geräteverfügbarkeit, Reparaturkosten und wiederkehrende Störungen je Club, um Investitionen zu planen.',
          points: [
            'Geräteverfügbarkeit je Club',
            'Reparaturkosten je Gerät',
            'Planung von Neuanschaffungen',
          ],
          visual: {
            kind: 'chart',
            title: 'Geräteverfügbarkeit je Club · Q3',
            stats: [
              {
                label: 'Verfügbarkeit',
                value: '97,8 %',
              },
              {
                label: 'Reparaturen',
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
                label: 'Tower B',
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
        tag: 'Luft und Komfort',
        title: 'Frische Luft und angenehme Temperaturen',
        description:
          'Klimawartungspläne halten Kursräume und Trainingsflächen in jeder Stunde angenehm.',
        points: [
          'Filterwechsel nach Plan',
          'Messwerte bei jedem Einsatz',
          'Störungen früh erkannt',
        ],
        visual: {
          kind: 'jobs',
          title: 'Klima · Dieser Monat',
          items: [
            {
              title: 'Wartung Klima Kursraum 1',
              location: 'Club Harbour',
              status: 'Erledigt',
              tone: 'done',
            },
            {
              title: 'Filter RLT Trainingsfläche',
              location: 'Club Northgate',
              status: 'Geplant',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'acFilterService',
          alt: 'Techniker wechselt einen Klimafilter',
        },
      },
      {
        tag: 'Reinigung',
        title: 'Saubere Umkleiden zu jeder Stunde',
        description:
          'Reinigungsrunden mit Checklisten und Fotonachweis halten Umkleiden, Duschen und Kursräume frisch.',
        points: [
          'Stündliche Reinigungsrunden',
          'Checklisten mit Fotonachweis',
          'Mängel bei Rundgängen erfasst',
        ],
        visual: {
          kind: 'steps',
          title: 'Reinigungsrunde',
          steps: [
            {
              kind: 'Jede',
              text: 'Stunde · 06:00 bis 22:00',
            },
            {
              kind: 'Dann',
              text: 'Umkleiden reinigen und Fotos erfassen',
            },
          ],
        },
        photo: {
          id: 'cleanerCorridor',
          alt: 'Reinigungskraft desinfiziert einen Türgriff',
        },
      },
      {
        tag: 'Haustechnik',
        title: 'Duschen, Pools und Technikräume in Betrieb',
        description:
          'Sanitär, Pumpen und Warmwasserbereiter werden planmäßig gewartet, mit schneller Reaktion auf Lecks.',
        points: [
          'Wartung von Pumpen und Boilern',
          'Schnelle Reaktion auf Lecks',
          'Historie für jede Anlage',
        ],
        visual: {
          kind: 'asset',
          title: 'Anlagenprofil',
          name: 'Poolpumpe PP-1',
          location: 'Club Harbour · Technikraum',
          status: 'In Betrieb',
          facts: [
            {
              label: 'Letzte Wartung',
              value: '20. Sep.',
            },
            {
              label: 'Nächste Wartung',
              value: '20. Dez.',
            },
            {
              label: 'Betriebsstunden',
              value: '2.140',
            },
            {
              label: 'Offene Aufträge',
              value: '0',
            },
          ],
        },
        photo: {
          id: 'plumberRepair',
          alt: 'Installateur repariert eine Küchenspüle',
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
        question: 'Eignet sich Fleet für Fitnessstudios und Wellnesszentren?',
        answer:
          'Ja. Fleet hilft Studios, Kursräumen, Pools und Spas, Geräte und Gebäudetechnik zu warten, mit schnellen Reparaturen und Reinigungsplänen.',
      },
      {
        question: 'Kann das Personal defekte Geräte melden?',
        answer:
          'Ja. Das Personal meldet defekte Geräte per Smartphone mit Fotos, und die Reparatur erreicht den richtigen Techniker oder Dienstleister.',
      },
      {
        question: 'Können wir Pool- und Spa-Prüfungen erfassen?',
        answer:
          'Ja. Erfassen Sie tägliche Messwerte und Sicherheitsprüfungen für Pools, Saunen und Dampfbäder, bereit für Kontrollen.',
      },
      {
        question: 'Können wir mehrere Clubs verwalten?',
        answer:
          'Ja. Fleet unterstützt Betreiber mit vielen Standorten, mit Regeln, Dashboards und Berichten je Club und Region.',
      },
    ],
  },
  mep: {
    hero: {
      eyebrow: 'TGA-Instandhaltung',
      title: 'TGA-Instandhaltung für Ihr gesamtes Portfolio',
      description:
        'Steuern Sie Lüftung, Elektro und Sanitär in einem Ablauf, mit Wartungsplänen, Routing nach Gewerk und Nachweisen für jedes Gebäude.',
      highlights: ['Routing nach Gewerk', 'Wartungspläne', 'Compliance-Nachweise'],
      visual: {
        kind: 'jobs',
        title: 'TGA-Aufträge · Heute',
        items: [
          {
            title: 'Unterverteilung UV-3',
            location: 'Tower B · Ebene 6',
            status: 'In Arbeit',
            tone: 'info',
          },
          {
            title: 'Wartung Druckerhöhung',
            location: 'Harbour Point · Untergeschoss',
            status: 'Heute fällig',
            tone: 'due',
          },
          {
            title: 'Riemenwechsel AHU-07',
            location: 'Northgate · Dach',
            status: 'Erledigt',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Drei Gewerke, ein Gebäude',
        description:
          'Lüftung, Elektro und Sanitär hängen voneinander ab, und jedes Gewerk hat eigene Pläne, Spezialisten und Standards.',
        points: ['Lüftung und Klima', 'Elektro', 'Sanitär'],
      },
      answer: {
        title: 'TGA-Arbeit in einem koordinierten Ablauf',
        description:
          'Fleet plant jedes Gewerk, leitet Aufträge an den richtigen Spezialisten und führt einen gemeinsamen Nachweis für jedes System.',
      },
    },
    capabilities: {
      title: 'Jedes Gewerk koordiniert',
      description: 'Pläne, Routing und Nachweise für Lüftung, Elektro und Sanitär.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Vorbeugend',
          title: 'Pläne für jedes TGA-System',
          description:
            'Planen Sie Klima, Verteilungen, Pumpen und Wassersysteme nach Zeit oder Nutzung, mit Checklisten je Gewerk.',
          points: [
            'Checklisten je Gewerk',
            'Pläne nach Zeit oder Nutzung',
            'Aufträge vor dem Fälligkeitstermin',
          ],
          visual: {
            kind: 'steps',
            title: 'Elektroplan',
            steps: [
              {
                kind: 'Plan',
                text: 'Unterverteilungen · vierteljährlich',
              },
              {
                kind: 'Dann',
                text: 'Thermografie und Klemmen nachziehen',
              },
              {
                kind: 'Dann',
                text: 'Ergebnisse je Verteilung erfassen',
              },
            ],
          },
        },
        {
          icon: 'routing',
          label: 'Routing',
          title: 'Aufträge nach Gewerk geleitet',
          description:
            'Meldungen erreichen den richtigen internen Techniker oder Spezialdienstleister nach Gewerk, Standort und Priorität.',
          points: [
            'Routing nach Gewerk und Standort',
            'Prioritäten mit SLA-Zielen',
            'Dienstleister im selben Ablauf',
          ],
          visual: {
            kind: 'jobs',
            title: 'Routing · Heute',
            items: [
              {
                title: 'Kein Warmwasser',
                location: 'Harbour Point · E9',
                status: 'Sanitär',
                tone: 'info',
              },
              {
                title: 'Sicherung ausgelöst',
                location: 'Tower B · E6',
                status: 'Elektro',
                tone: 'info',
              },
              {
                title: 'Lautes RLT-Gerät',
                location: 'Northgate · Dach',
                status: 'Lüftung',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Anlagen',
          title: 'Ein Verzeichnis für alle Systeme',
          description:
            'Pumpen, Verteilungen, Kessel und RLT-Geräte teilen ein Verzeichnis mit Historie, Kosten und Dokumenten.',
          points: [
            'Historie und Kosten je Anlage',
            'Schaltpläne und Handbücher',
            'Garantiedaten in jedem Auftrag',
          ],
          visual: {
            kind: 'asset',
            title: 'Anlagenprofil',
            name: 'Druckerhöhungspumpe P-03',
            location: 'Harbour Point · Untergeschoss',
            status: 'Wartung fällig',
            facts: [
              {
                label: 'Letzte Wartung',
                value: '10. Juli',
              },
              {
                label: 'Betriebsstunden',
                value: '8.310',
              },
              {
                label: 'Kosten lfd. Jahr',
                value: '1.420 $',
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
          title: 'Auslastung nach Gewerk',
          description:
            'Verteilen Sie Arbeit und Budget ausgewogen auf Lüftungs-, Elektro- und Sanitärteams.',
          points: [
            'Aufträge nach Gewerk und Standort',
            'Kosten nach Gewerk',
            'Wiederkehrende Störungen je System',
          ],
          visual: {
            kind: 'chart',
            title: 'Aufträge nach Gewerk · Q3',
            stats: [
              {
                label: 'Aufträge Q3',
                value: '642',
              },
              {
                label: 'SLA erfüllt',
                value: '95,8 %',
              },
            ],
            bars: [
              {
                label: 'Lüftung',
                value: 248,
              },
              {
                label: 'Elektro',
                value: 196,
              },
              {
                label: 'Sanitär',
                value: 158,
              },
              {
                label: 'Brandschutz',
                value: 40,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Elektro',
        title: 'Elektrische Anlagen geprüft und sicher',
        description:
          'Verteilungen, Beleuchtung und Notsysteme werden planmäßig geprüft, mit jedem Ergebnis im Nachweis.',
        points: [
          'Prüfung von Verteilungen und Beleuchtung',
          'Prüfung der Notbeleuchtung',
          'Ergebnisse an jeder Anlage',
        ],
        visual: {
          kind: 'jobs',
          title: 'Elektroprüfungen',
          items: [
            {
              title: 'Test Notbeleuchtung',
              location: 'Alle Etagen',
              status: 'Erledigt',
              tone: 'done',
            },
            {
              title: 'Thermografie UV-3',
              location: 'Tower B · E6',
              status: 'Geplant',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'electricianPanel',
          alt: 'Elektriker arbeitet an einem Schaltschrank',
        },
      },
      {
        tag: 'Sanitär',
        title: 'Sanitär, das läuft',
        description:
          'Pumpen, Warmwasserbereiter und Entwässerung werden planmäßig gewartet, und Lecks erhalten eine schnelle Reaktion.',
        points: [
          'Wartung von Pumpen und Boilern',
          'Schnelle Reaktion auf Lecks',
          'Nachweise für Wassersysteme',
        ],
        visual: {
          kind: 'log',
          title: 'Sanitäraktivität',
          entries: [
            {
              when: '07:40',
              who: 'Empfang',
              what: 'hat kein Warmwasser auf Ebene 9 gemeldet',
            },
            {
              when: '07:45',
              who: 'Fleet',
              what: 'hat den hauseigenen Installateur dringend zugewiesen',
            },
          ],
        },
        photo: {
          id: 'plumberRepair',
          alt: 'Installateur repariert eine Küchenspüle',
        },
      },
      {
        tag: 'Lüftung',
        title: 'Lüftungstechnik in Bestform',
        description:
          'RLT-Geräte, Ventilatoren und Kältemaschinen werden mit erfassten Messwerten gewartet, damit die Leistung konstant bleibt.',
        points: [
          'Messwerte vor Ort erfasst',
          'Riemen- und Filterwechsel',
          'Störungen früh erkannt',
        ],
        visual: {
          kind: 'steps',
          title: 'RLT-Wartung',
          steps: [
            {
              kind: 'Jedes',
              text: 'Quartal · alle RLT-Geräte',
            },
            {
              kind: 'Dann',
              text: 'Riemen und Filter wechseln, Messwerte erfassen',
            },
          ],
        },
        photo: {
          id: 'acFilterService',
          alt: 'Techniker wechselt einen Klimafilter',
        },
      },
    ],
    quote: {
      text: 'Fleet hat unsere reaktive Instandhaltung um fast 40 % reduziert. Endlich haben wir Techniker, Anlagenprotokolle und Auftragsdaten an einem Ort.',
      author: 'Leitung Objektbetrieb',
      company: 'Gemischt genutztes Quartier',
      photo: {
        id: 'hvacTechnicians',
        alt: 'Klimatechniker warten Dachgeräte',
      },
    },
    faq: [
      {
        question: 'Was ist TGA-Instandhaltung?',
        answer:
          'TGA-Instandhaltung umfasst die technische Gebäudeausrüstung: Lüftung und Klima, Stromverteilung, Beleuchtung, Pumpen und Wassersysteme.',
      },
      {
        question: 'Kann Fleet Aufträge nach Gewerk leiten?',
        answer:
          'Ja. Routing-Regeln senden Aufträge nach Gewerk, Standort und Priorität an den richtigen internen Techniker oder Spezialdienstleister.',
      },
      {
        question: 'Können wir TGA-Dokumente in Fleet ablegen?',
        answer:
          'Ja. Legen Sie Handbücher, Schaltpläne, Zertifikate und Prüfergebnisse an jeder Anlage ab, griffbereit vor Ort.',
      },
      {
        question: 'Eignet sich Fleet für TGA-Dienstleister?',
        answer:
          'Ja. Dienstleister verwalten die Instandhaltung für mehrere Kundenstandorte, mit Regeln, Berichten und Zugang je Kunde.',
      },
    ],
  },
  offices: {
    hero: {
      eyebrow: 'Büros und gemischte Nutzung',
      title: 'Instandhaltung für Büro- und Mischgebäude, die produktives Arbeiten ermöglicht',
      description:
        'Halten Sie Büros, Gemeinschaftsflächen und gemischt genutzte Quartiere reibungslos in Betrieb, mit Mieteranliegen, Wartungsplänen und Portfolio-Berichten.',
      highlights: ['Mieteranliegen', 'Wartungspläne', 'Portfolio-Berichte'],
      visual: {
        kind: 'jobs',
        title: 'Tower B · Heute',
        items: [
          {
            title: 'Klima Besprechungsraum',
            location: 'Ebene 14',
            status: 'In Arbeit',
            tone: 'info',
          },
          {
            title: 'Monatsprüfung Aufzug L3',
            location: 'Kernaufzüge',
            status: 'Heute fällig',
            tone: 'due',
          },
          {
            title: 'Tropfender Küchenhahn',
            location: 'Ebene 9 · Teeküche',
            status: 'Erledigt',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Arbeitsplätze leben von Komfort und Verfügbarkeit',
        description:
          'Klima, Aufzüge, Beleuchtung und gemeinsame Ausstattung prägen, wie Mieter und Mitarbeitende jeden Tag erleben.',
        points: ['Mieter', 'Gemeinschaftsflächen', 'Gebäudetechnik'],
      },
      answer: {
        title: 'Reibungsloser Betrieb auf jeder Etage',
        description:
          'Fleet verbindet Mieteranliegen, vorbeugende Wartung und Dienstleister, damit jede Etage angenehm und produktiv bleibt.',
      },
    },
    capabilities: {
      title: 'Für Büros und gemischte Nutzung gemacht',
      description: 'Von Mieteranliegen bis zur Gebäudetechnik: jede Etage an einem Ort.',
      tabs: [
        {
          icon: 'requests',
          label: 'Anliegen',
          title: 'Mieteranliegen bis zum Abschluss',
          description:
            'Anliegen kommen per E-Mail, über Ihr Mieterportal oder vom Empfang und werden automatisch zu Aufträgen.',
          points: [
            'E-Mail zu Auftrag mit Fleet Mail',
            'Integration von Mieterportalen',
            'Status-Updates bei jedem Schritt',
          ],
          visual: {
            kind: 'steps',
            title: 'Mieteranliegen',
            steps: [
              {
                kind: 'E-Mail',
                text: 'Besprechungsraum zu warm, Ebene 14',
              },
              {
                kind: 'Dann',
                text: 'Auftrag erstellt und zugewiesen',
              },
              {
                kind: 'Dann',
                text: 'Mieter bei Erledigung informiert',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Vorbeugend',
          title: 'Gebäudetechnik nach Plan',
          description:
            'Planen Sie die Wartung von Klima, Aufzügen, Beleuchtung und Brandschutz nach Zeit oder Nutzung in jedem Gebäude.',
          points: [
            'Pläne für jedes System',
            'Checklisten für jeden Einsatz',
            'Arbeiten außerhalb der Bürozeiten',
          ],
          visual: {
            kind: 'jobs',
            title: 'Diese Woche geplant',
            items: [
              {
                title: 'Wartung Aufzüge L1–L4',
                location: 'Kernaufzüge',
                status: 'Geplant',
                tone: 'info',
              },
              {
                title: 'Test Brandmeldeanlage',
                location: 'Alle Etagen',
                status: 'Erledigt',
                tone: 'done',
              },
              {
                title: 'Filterwechsel RLT',
                location: 'Dach',
                status: 'Heute fällig',
                tone: 'due',
              },
            ],
          },
        },
        {
          icon: 'tenants',
          label: 'Mieter',
          title: 'Historie nach Etage und Mieter',
          description:
            'Verfolgen Sie Arbeit und Kosten nach Etage, Mieter und Gemeinschaftsfläche für Umlagen und Planung.',
          points: [
            'Historie nach Etage und Mieter',
            'Kosten für Umlagen',
            'Pflege der Gemeinschaftsflächen',
          ],
          visual: {
            kind: 'asset',
            title: 'Mieterprofil',
            name: 'Ebene 14 · Northwind Ltd',
            location: 'Tower B',
            status: 'Vermietet',
            facts: [
              {
                label: 'Anliegen lfd. Jahr',
                value: '9',
              },
              {
                label: 'Letzter Besuch',
                value: '28. Sep.',
              },
              {
                label: 'Offene Aufträge',
                value: '1',
              },
              {
                label: 'Kosten lfd. Jahr',
                value: '2.310 $',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Berichte',
          title: 'Berichte für das gesamte Portfolio',
          description:
            'Vergleichen Sie Reaktionszeiten, Kosten und Mieteranliegen über Gebäude und teilen Sie Dashboards mit Eigentümern.',
          points: [
            'Reaktionszeiten je Gebäude',
            'Kosten nach Gebäude und Etage',
            'Dashboards mit Leserechten für Eigentümer',
          ],
          visual: {
            kind: 'chart',
            title: 'Mieteranliegen je Gebäude · Q3',
            stats: [
              {
                label: 'Anliegen',
                value: '486',
              },
              {
                label: 'Pünktlich gelöst',
                value: '96 %',
              },
            ],
            bars: [
              {
                label: 'Tower B',
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
        tag: 'Arbeitsplätze',
        title: 'Angenehme, produktive Etagen',
        description:
          'Klima, Beleuchtung und Besprechungsräume werden planmäßig gewartet, und Mängel schnell behoben.',
        points: [
          'Komfortmängel schnell behoben',
          'Besprechungsräume täglich geprüft',
          'Arbeiten außerhalb der Bürozeiten',
        ],
        visual: {
          kind: 'jobs',
          title: 'Ebene 14 · Heute',
          items: [
            {
              title: 'Klima Besprechungsraum',
              location: 'An CoolAir vergeben',
              status: 'In Arbeit',
              tone: 'info',
            },
            {
              title: 'Hahn Teeküche',
              location: 'Hauseigener Installateur',
              status: 'Erledigt',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'officeFloor',
          alt: 'Großraumbüro mit arbeitenden Menschen',
        },
      },
      {
        tag: 'Gemeinschaftsflächen',
        title: 'Lobbys und Ausstattung immer bereit',
        description:
          'Lobbys, Aufzüge, Parkhäuser und Ausstattung bleiben sauber, sicher und funktionsfähig für jeden Besucher.',
        points: [
          'Prüfung von Lobby und Aufzügen',
          'Licht und Schranken im Parkhaus',
          'Reinigungspläne mit Fotonachweis',
        ],
        visual: {
          kind: 'steps',
          title: 'Lobby-Routine',
          steps: [
            {
              kind: 'Jeden',
              text: 'Tag · 07:00',
            },
            {
              kind: 'Dann',
              text: 'Lobby, Aufzüge und Eingangsschleusen prüfen',
            },
          ],
        },
        photo: {
          id: 'officeCorridor',
          alt: 'Menschen in einem hellen Büroflur',
        },
      },
      {
        tag: 'Empfang',
        title: 'Empfang und Technik im Gleichklang',
        description:
          'Empfang und Sicherheitsdienst erfassen Anliegen von Mietern und Besuchern, und jeder Auftrag wird bis zum Abschluss verfolgt.',
        points: [
          'Anliegen am Empfang erfasst',
          'Updates für Mieter',
          'Übergabenotizen über Schichten',
        ],
        visual: {
          kind: 'log',
          title: 'Empfangsprotokoll',
          entries: [
            {
              when: '09:05',
              who: 'Empfang',
              what: 'hat eine defekte Zugangsschleuse an Eingang B erfasst',
            },
            {
              when: '09:12',
              who: 'Fleet',
              what: 'hat die Reparatur an den Sicherheitstechnik-Dienstleister vergeben',
            },
          ],
        },
        photo: {
          id: 'supportAgent',
          alt: 'Servicemitarbeiterin mit Headset',
        },
      },
    ],
    quote: {
      text: 'Fleet hat unsere reaktive Instandhaltung um fast 40 % reduziert. Endlich haben wir Techniker, Anlagenprotokolle und Auftragsdaten an einem Ort.',
      author: 'Leitung Objektbetrieb',
      company: 'Gemischt genutztes Quartier',
      photo: {
        id: 'acFilterService',
        alt: 'Techniker wechselt einen Klimafilter',
      },
    },
    faq: [
      {
        question: 'Wie unterstützt Fleet Büro- und Mischgebäude?',
        answer:
          'Fleet verbindet Mieteranliegen, vorbeugende Wartung, Dienstleister und Berichte, damit jede Etage und jede Gemeinschaftsfläche angenehm und funktionsfähig bleibt.',
      },
      {
        question: 'Wie melden Mieter ihre Anliegen?',
        answer:
          'Per E-Mail mit Fleet Mail, über Ihr Mieterportal per Integration oder über Empfang und Sicherheitsdienst.',
      },
      {
        question: 'Können wir Kosten je Mieter verfolgen?',
        answer:
          'Ja. Verfolgen Sie Arbeit und Kosten nach Etage und Mieter für Umlagen und Budgetplanung.',
      },
      {
        question: 'Können Eigentümer die Gebäudeleistung sehen?',
        answer:
          'Ja. Teilen Sie Dashboards mit Leserechten mit Eigentümern und Gremien, mit Reaktionszeiten und Kosten je Gebäude.',
      },
    ],
  },
  industrial: {
    hero: {
      eyebrow: 'Industrie- und Werksmanagement',
      title: 'Instandhaltung für Fabriken und Werke mit maximaler Verfügbarkeit',
      description:
        'Halten Sie Produktionsanlagen, Versorgungstechnik und Sicherheitssysteme in Betrieb, mit Anlagenverzeichnis, zeit- und nutzungsbasierten Plänen und Ausfallanalysen.',
      highlights: ['Nutzungsbasierte Pläne', 'Sicherheitsprüfungen', 'Ausfallanalysen'],
      visual: {
        kind: 'jobs',
        title: 'Werk 1 · Heute',
        items: [
          {
            title: 'Wartung Kompressor C-2',
            location: 'Versorgung',
            status: 'In Arbeit',
            tone: 'info',
          },
          {
            title: 'Schutzprüfung Linie 3',
            location: 'Produktion',
            status: 'Heute fällig',
            tone: 'due',
          },
          {
            title: 'Kesselwasseraufbereitung',
            location: 'Kesselhaus',
            status: 'Erledigt',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Produktion hängt an jeder Anlage',
        description:
          'Linien, Kompressoren, Kessel und Sicherheitssysteme arbeiten Hand in Hand, und jeder Stillstand wirkt sich auf Ausstoß und Liefertermine aus.',
        points: ['Produktionslinien', 'Versorgungstechnik', 'Sicherheitssysteme'],
      },
      answer: {
        title: 'Verfügbarkeit geplant statt erhofft',
        description:
          'Fleet macht aus Anlagendaten zeit- und nutzungsbasierte Pläne, damit Teams handeln, bevor Ausfälle die Produktion stoppen.',
      },
    },
    capabilities: {
      title: 'Für den Industriebetrieb gemacht',
      description: 'Anlagen, Pläne, Sicherheit und Analysen für jedes Werk.',
      tabs: [
        {
          icon: 'assets',
          label: 'Anlagen',
          title: 'Ein Verzeichnis für jede Maschine',
          description:
            'Erstellen Sie digitale Profile für Maschinen, Versorgung und Sicherheitssysteme, nach Werk, Linie und Bereich.',
          points: [
            'Profile nach Werk, Linie und Bereich',
            'Historie, Kosten und Handbücher',
            'Ersatzteile an jeder Anlage vermerkt',
          ],
          visual: {
            kind: 'asset',
            title: 'Anlagenprofil',
            name: 'Kompressor C-2',
            location: 'Werk 1 · Versorgung',
            status: 'In Betrieb',
            facts: [
              {
                label: 'Betriebsstunden',
                value: '12.840',
              },
              {
                label: 'Letzte Wartung',
                value: '09. Sep.',
              },
              {
                label: 'Ausfall Q3',
                value: '2 h',
              },
              {
                label: 'Kosten lfd. Jahr',
                value: '5.620 $',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Nutzungsbasiert',
          title: 'Wartung nach Stunden oder Zyklen',
          description:
            'Lösen Sie Wartung nach Betriebsstunden, Zyklen oder Zeit aus, damit sie zur tatsächlichen Nutzung passt.',
          points: [
            'Auslöser nach Stunden oder Zyklen',
            'Checklisten je Maschinentyp',
            'Weniger Notreparaturen',
          ],
          visual: {
            kind: 'steps',
            title: 'Nutzungsbasierter Plan',
            steps: [
              {
                kind: 'Auslöser',
                text: 'Kompressor C-2 erreicht 13.000 Stunden',
              },
              {
                kind: 'Dann',
                text: 'Wartungsauftrag erstellen',
              },
              {
                kind: 'Dann',
                text: 'Dem Versorgungsteam zuweisen',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: 'Sicherheit',
          title: 'Sicherheitsprüfungen im Nachweis',
          description:
            'Planen Sie Schutzprüfungen, Druckbehälterprüfungen und Brandschutztests, mit jedem Ergebnis im Nachweis.',
          points: [
            'Prüfung von Schutzeinrichtungen',
            'Prüfungen von Druckanlagen',
            'Nachweise bereit für Audits',
          ],
          visual: {
            kind: 'files',
            title: 'Sicherheitsnachweise · Werk 1',
            items: [
              {
                title: 'Prüfung Druckanlage.pdf',
                location: 'Erledigt 12. Sep.',
                status: 'Gültig',
                tone: 'done',
              },
              {
                title: 'Schutzprüfung Linie 3.pdf',
                location: 'Heute fällig',
                status: 'Fällig',
                tone: 'due',
              },
              {
                title: 'Test Löschanlage.pdf',
                location: 'Gültig bis März 2027',
                status: 'Gültig',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Ausfälle',
          title: 'Ausfallanalysen je Linie',
          description:
            'Sehen Sie, welche Linien und Anlagen die meisten Ausfälle verursachen und wo sich Investitionen lohnen.',
          points: [
            'Ausfälle nach Linie und Anlage',
            'Reparaturkosten im Zeitverlauf',
            'Ersatzplanung',
          ],
          visual: {
            kind: 'chart',
            title: 'Ausfallstunden je Linie · Q3',
            stats: [
              {
                label: 'Ausfall Q3',
                value: '27 h',
              },
              {
                label: 'Geplante Arbeit',
                value: '94 %',
              },
            ],
            bars: [
              {
                label: 'Linie 1',
                value: 4,
              },
              {
                label: 'Linie 2',
                value: 6,
              },
              {
                label: 'Linie 3',
                value: 9,
              },
              {
                label: 'Versorgung',
                value: 5,
              },
              {
                label: 'Verpackung',
                value: 3,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Produktion',
        title: 'Linien laufen Schicht für Schicht',
        description:
          'Bediener melden Störungen direkt an der Linie, und die Instandhaltung reagiert mit der richtigen Priorität und den passenden Teilen.',
        points: [
          'Störungen direkt an der Linie gemeldet',
          'Prioritäten nach Linienauswirkung',
          'Reparaturen bis zum Abschluss verfolgt',
        ],
        visual: {
          kind: 'log',
          title: 'Aktivität Linie 3',
          entries: [
            {
              when: '13:20',
              who: 'Bediener',
              what: 'hat einen Stau am Füller von Linie 3 gemeldet',
            },
            {
              when: '13:22',
              who: 'Fleet',
              what: 'hat den Schichttechniker dringend zugewiesen',
            },
          ],
        },
        photo: {
          id: 'factoryTechnician',
          alt: 'Techniker prüft eine Anlage mit dem Tablet',
        },
      },
      {
        tag: 'Versorgung',
        title: 'Versorgung, die die Produktion nie bremst',
        description:
          'Kompressoren, Kessel und Kältemaschinen werden nach Nutzung gewartet, mit Messwerten bei jedem Einsatz.',
        points: [
          'Wartung nach Betriebsstunden',
          'Messwerte vor Ort erfasst',
          'Störungen früh erkannt',
        ],
        visual: {
          kind: 'jobs',
          title: 'Versorgung · Diese Woche',
          items: [
            {
              title: 'Prüfung Kessel B-1',
              location: 'Kesselhaus',
              status: 'Erledigt',
              tone: 'done',
            },
            {
              title: 'Wartung Kältemaschine CH-5',
              location: 'Versorgung',
              status: 'Geplant',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'techniciansPanel',
          alt: 'Zwei Techniker prüfen eine Anlagensteuerung',
        },
      },
      {
        tag: 'Leitung',
        title: 'Werksleistung auf einen Blick',
        description:
          'Werksleiter sehen Ausfälle, erledigte geplante Arbeiten und Instandhaltungskosten über alle Standorte.',
        points: [
          'Ausfälle nach Werk und Linie',
          'Erledigte geplante Arbeiten',
          'Kosten nach Kostenstelle',
        ],
        visual: {
          kind: 'jobs',
          title: 'Werke · Q3',
          items: [
            {
              title: 'Werk 1',
              location: '94 % geplante Arbeit erledigt',
              status: 'Im Plan',
              tone: 'done',
            },
            {
              title: 'Werk 2',
              location: '88 % geplante Arbeit erledigt',
              status: 'Prüfen',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'plantManagers',
          alt: 'Werksleiter bespricht sich mit Ingenieuren in Schutzhelmen',
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
        question: 'Eignet sich Fleet für Fabriken und Werke?',
        answer:
          'Ja. Fleet verwaltet Produktionsanlagen, Versorgungstechnik und Sicherheitssysteme, mit zeit- und nutzungsbasierten Plänen und Ausfallanalysen.',
      },
      {
        question: 'Kann die Wartung nach Betriebsstunden oder Zyklen erfolgen?',
        answer:
          'Ja. Lösen Sie Wartung nach Betriebsstunden, Zyklen oder Zeit aus, passend zur tatsächlichen Nutzung.',
      },
      {
        question: 'Kann Fleet Sicherheitsprüfungen verfolgen?',
        answer:
          'Ja. Planen und dokumentieren Sie Schutzprüfungen, Druckanlagenprüfungen und Brandschutztests, bereit für Audits.',
      },
      {
        question: 'Können wir die Leistung verschiedener Werke vergleichen?',
        answer:
          'Ja. Dashboards zeigen Ausfälle, erledigte geplante Arbeiten und Kosten über Werke und Linien.',
      },
    ],
  },
  vehicles: {
    hero: {
      eyebrow: 'Fahrzeugmanagement',
      title: 'Fahrzeugmanagement von der Beschaffung bis zur Aussonderung',
      description:
        'Verwalten Sie jedes Fahrzeug an einem Ort, von Bestellung und Zulassung bis zu Wartung, Schäden und Verwertung, mit prüfbereiten Nachweisen.',
      highlights: ['Gesamter Lebenszyklus', 'Wartung nach Kilometern', 'Schäden und Bußgelder'],
      visual: {
        kind: 'jobs',
        title: 'Fahrzeuge · Heute',
        items: [
          {
            title: 'Wartung Transporter V-12',
            location: '30.000 km fällig',
            status: 'Geplant',
            tone: 'info',
          },
          {
            title: 'Zulassung Lkw T-03',
            location: 'Verlängerung in 14 Tagen',
            status: 'Fällig',
            tone: 'due',
          },
          {
            title: 'Reifenwechsel Transporter V-07',
            location: 'Werkstatt',
            status: 'Erledigt',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Jedes Fahrzeug hat eine lange To-do-Liste',
        description:
          'Beschaffung, Zulassungen, Wartung, Bußgelder und Schäden betreffen verschiedene Teams, Dokumente und Fristen.',
        points: ['Beschaffung', 'Wartung', 'Compliance'],
      },
      answer: {
        title: 'Jedes Fahrzeug, jede Phase, ein Ort',
        description:
          'Fleet gibt Beschaffung, Betrieb und Finanzen eine gemeinsame Sicht auf jedes Fahrzeug, mit prüfbereiten Nachweisen.',
      },
    },
    capabilities: {
      title: 'Vollständiges Fahrzeug-Lebens\u00adzyklus\u00admanagement',
      description:
        'Von der Anschaffung bis zur Aussonderung: jeder Schritt dokumentiert und berichtsbereit.',
      tabs: [
        {
          icon: 'assets',
          label: 'Lebenszyklus',
          title: 'Jedes Fahrzeug, jede Phase',
          description:
            'Verfolgen Sie Bestellung, Lieferung, Einführung, aktiven Einsatz und Aussonderung für jedes Fahrzeug.',
          points: [
            'Beschaffung und Einführung',
            'Status aktiv, stillstehend oder ausgesondert',
            'Verwertungsnachweise',
          ],
          visual: {
            kind: 'asset',
            title: 'Fahrzeugprofil',
            name: 'Transporter V-12',
            location: 'Westport DC · Zustellung',
            status: 'Aktiv',
            facts: [
              {
                label: 'Kilometerstand',
                value: '29.640 km',
              },
              {
                label: 'Nächste Wartung',
                value: '30.000 km',
              },
              {
                label: 'Zulassung',
                value: 'Gültig bis März 2027',
              },
              {
                label: 'Kosten lfd. Jahr',
                value: '3.180 $',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Wartung',
          title: 'Wartung nach Kilometern und Zeit',
          description:
            'Planen Sie Wartung nach Kilometern, Motorstunden oder Zeit und verfolgen Sie Reparaturen automatisch.',
          points: [
            'Auslöser nach Kilometern oder Zeit',
            'Techniker automatisch zugewiesen',
            'Reparaturen bis zum Abschluss verfolgt',
          ],
          visual: {
            kind: 'steps',
            title: 'Wartungsplan',
            steps: [
              {
                kind: 'Auslöser',
                text: 'Transporter V-12 erreicht 30.000 km',
              },
              {
                kind: 'Dann',
                text: 'Werkstatttermin buchen',
              },
              {
                kind: 'Dann',
                text: 'Rechnung in der Fahrzeughistorie erfassen',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: 'Compliance',
          title: 'Zulassungen, Bußgelder und Schäden',
          description:
            'Verwalten Sie Verlängerungen, Strafzettel und Versicherungsschäden mit Erinnerungen, Fotos und Kostenübersichten.',
          points: [
            'Erinnerungen an Verlängerungen',
            'Bußgelder mit Fristen und Zahlungen',
            'Schäden direkt aus dem Einsatz erfasst',
          ],
          visual: {
            kind: 'files',
            title: 'Compliance · Dieser Monat',
            items: [
              {
                title: 'Zulassung Lkw T-03',
                location: 'Verlängerung in 14 Tagen',
                status: 'Verlängern',
                tone: 'due',
              },
              {
                title: 'Parkverstoß #4471',
                location: 'Bezahlt 02. Okt.',
                status: 'Geschlossen',
                tone: 'done',
              },
              {
                title: 'Schaden Transporter V-05',
                location: 'Begutachtung läuft',
                status: 'Offen',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Auslastung',
          title: 'Auslastung und Kostenkontrolle',
          description:
            'Verfolgen Sie Nutzung, Kilometer und Standzeiten, um wenig genutzte Fahrzeuge zu erkennen und den ROI zu steigern.',
          points: [
            'Nutzung und Standzeiten',
            'Kosten je Fahrzeug',
            'Wenig genutzte Fahrzeuge hervorgehoben',
          ],
          visual: {
            kind: 'chart',
            title: 'Auslastung nach Fahrzeugtyp · Q3',
            stats: [
              {
                label: 'Fahrzeuge',
                value: '86',
              },
              {
                label: 'Auslastung',
                value: '78 %',
              },
            ],
            bars: [
              {
                label: 'Transporter',
                value: 84,
              },
              {
                label: 'Lkw',
                value: 79,
              },
              {
                label: 'Pkw',
                value: 64,
              },
              {
                label: 'Stapler',
                value: 88,
              },
              {
                label: 'Servicefahrzeuge',
                value: 71,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Einsatz',
        title: 'Vorfälle direkt aus dem Einsatz',
        description:
          'Fahrer erfassen Vorfälle mit Fotos und Notizen, verknüpft mit dem Fahrzeug, und Verantwortliche werden sofort informiert.',
        points: [
          'Mobile Vorfallmeldungen',
          'Fotos und Notizen angehängt',
          'Sofortige Benachrichtigung',
        ],
        visual: {
          kind: 'log',
          title: 'Vorfallprotokoll',
          entries: [
            {
              when: '16:40',
              who: 'Fahrer',
              what: 'hat eine zerkratzte Tür an Transporter V-05 gemeldet',
            },
            {
              when: '16:41',
              who: 'Fleet',
              what: 'hat einen Schadenfall eröffnet und die Fuhrparkleitung informiert',
            },
          ],
        },
        photo: {
          id: 'vanDriver',
          alt: 'Lächelnder Fahrer am Steuer eines Transporters',
        },
      },
      {
        tag: 'Prüfungen',
        title: 'Jedes Fahrzeug straßentauglich',
        description:
          'Geplante Prüfungen und Checklisten halten jedes Fahrzeug sicher, konform und bereit für die nächste Tour.',
        points: [
          'Checklisten vor Fahrtantritt',
          'Mängel werden Aufträge',
          'Prüfhistorie je Fahrzeug',
        ],
        visual: {
          kind: 'jobs',
          title: 'Prüfungen · Heute',
          items: [
            {
              title: 'Transporter V-01 bis V-12',
              location: 'Abfahrtskontrolle',
              status: 'Erledigt',
              tone: 'done',
            },
            {
              title: 'Lkw T-03',
              location: 'Bremsenprüfung',
              status: 'Geplant',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'fleetInspection',
          alt: 'Prüfer kontrolliert Transporter mit dem Tablet',
        },
      },
      {
        tag: 'Finanzen',
        title: 'Finanzen und Betrieb im Gleichklang',
        description:
          'Wartungs-, Kraftstoff- und Nutzungsdaten fließen in ein Dashboard für Budgets und Vertragsentscheidungen.',
        points: [
          'Kosten je Fahrzeug und Typ',
          'Vergleich von Dienstleistern und Verträgen',
          'Budgetverfolgung',
        ],
        visual: {
          kind: 'chart',
          title: 'Kosten nach Fahrzeugtyp · lfd. Jahr',
          stats: [],
          bars: [
            {
              label: 'Lkw',
              value: 48,
            },
            {
              label: 'Transporter',
              value: 36,
            },
            {
              label: 'Pkw',
              value: 18,
            },
            {
              label: 'Stapler',
              value: 14,
            },
            {
              label: 'Servicefahrzeuge',
              value: 22,
            },
          ],
        },
        photo: {
          id: 'fleetVans',
          alt: 'Transporter vor einem Lager',
        },
      },
    ],
    quote: {
      text: 'Andere Plattformen waren zu komplex oder zu allgemein. Fleet bot uns eine maßgeschneiderte Lösung mit schnellerem Support.',
      author: 'Leitung Instandhaltung',
      company: 'Logistikzentrum',
      photo: {
        id: 'fleetManager',
        alt: 'Fuhrparkleiter mit Tablet vor Lkw',
      },
    },
    faq: [
      {
        question: 'Was umfasst das Fahrzeugmanagement von Fleet?',
        answer:
          'Den gesamten Lebenszyklus: Beschaffung, Einführung, Wartung, Zulassungen, Bußgelder, Schäden, Auslastung und Aussonderung.',
      },
      {
        question: 'Kann die Wartung nach Kilometern geplant werden?',
        answer:
          'Ja. Planen Sie Wartung nach Kilometern, Motorstunden oder Zeit, mit automatisch zugewiesenen Technikern.',
      },
      {
        question: 'Können Fahrer Vorfälle melden?',
        answer:
          'Ja. Fahrer erfassen Vorfälle mit Fotos und Notizen direkt aus dem Einsatz, und Verantwortliche werden sofort informiert.',
      },
      {
        question: 'Verbindet sich das Fahrzeugmanagement mit unseren Finanzsystemen?',
        answer:
          'Ja. Fleet integriert sich mit Finanzsystemen und ERP, sodass Wartungs- und Nutzungskosten in gemeinsame Berichte fließen.',
      },
    ],
  },
}
