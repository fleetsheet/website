export type FaqItem = {
  question: string
  answer: string
  points?: string[]
}

export const faqPage = {
  meta: {
    title: 'FAQ | Fleet',
    description:
      'Antworten auf häufige Fragen zu Fleet: Funktionen, Zielgruppen, Einführung, Sicherheit, Integrationen und Preise.',
  },
  eyebrow: 'Fleet FAQ',
  title: 'Ihre Fragen, unsere Antworten',
  description:
    'Alles, was Teams vor dem Wechsel zu Fleet üblicherweise fragen. Nicht gefunden, was Sie suchen? Sprechen Sie uns an.',
  items: [
    {
      question: 'Was ist Fleet?',
      answer:
        'Fleet ist eine cloudbasierte Immobilienplattform, die Facility Management, Instandhaltung und Betrieb über mehrere Standorte hinweg vereinfacht. Neben einem leistungsstarken CMMS/CAFM unterstützt sie Teams dabei, Arbeitsaufträge, Anlagen, Dienstleister, Mieter sowie Abrechnung und Inkasso über ein zentrales Facility-Management-Dashboard zu verwalten.',
    },
    {
      question: 'Ist Fleet ein CMMS oder ein CAFM?',
      answer:
        'Fleet entstand als cloudbasiertes CMMS (Computerized Maintenance Management System) und umfasst heute zentrale Funktionen eines CAFM (Computer-Aided Facilities Management). Inzwischen sind wir die führende übergreifende Plattform für den Immobilienbetrieb, die Instandhaltung, Anlagenmanagement, Dokumentation, die Koordination von Dienstleistern über individuelle Workflows und Compliance-Nachverfolgung mit Audit-Protokollen vereint.',
    },
    {
      question: 'Für wen ist Fleet gemacht?',
      answer:
        'Fleet ist für Betreiber mit mehreren Standorten in Immobilien, Einzelhandel, Logistik, Hotellerie, Bildung und Gesundheitswesen konzipiert – einschließlich branchenspezifischer Anwendungsfälle wie Einkaufszentren und Einzelhandel, Hotellerie und Gastronomie, Schifffahrt und Logistik sowie Wohnanlagen.',
    },
    {
      question: 'Wie hilft Fleet, Ausfallzeiten zu reduzieren?',
      answer:
        'Fleet ermöglicht die Planung vorbeugender Wartung, die Nachverfolgung von Aufträgen in Echtzeit und sofortige Benachrichtigungen – alles im Facility Management. So sinkt der Anteil reaktiver Reparaturen und die Verfügbarkeit bleibt hoch.',
    },
    {
      question: 'Funktioniert Fleet über mehrere Immobilien oder Standorte hinweg?',
      answer:
        'Ja. Mit der Mehrstandortverwaltung von Fleet planen und verfolgen Sie die Instandhaltung über Gebäude, Zonen oder ganze Regionen hinweg – mit standortbezogenen Berechtigungen.',
    },
    {
      question: 'Ist Fleet für Mobilgeräte geeignet?',
      answer:
        'Auf jeden Fall. Fleet ist eine Mobile-First-Plattform für iOS und Android. Erfassen, vergeben und verfolgen Sie Aufträge in Echtzeit von jedem Gerät aus.',
    },
    {
      question: 'Lässt sich Fleet in unsere bestehenden Systeme integrieren?',
      answer:
        'Ja. Fleet bietet flexible Integrationen mit gängigen Kreditoren- und Debitorensystemen, Finanztools, ERP-Software und Dienstleisterportalen.',
    },
    {
      question: 'Welche Arten von Instandhaltung kann ich mit Fleet verwalten?',
      answer:
        'Sie können reaktive, geplante und vorausschauende Instandhaltung verwalten, ebenso Inspektionen, Audits, Dienstleistungen externer Anbieter und Kostenfreigaben.',
    },
    {
      question: 'Wie unterstützt Fleet das Anlagenmanagement?',
      answer:
        'Fleet legt für jede Anlage ein digitales Profil an und erfasst im Anlagenmanagement Lebenszyklus, Kostenhistorie, Garantien und standortbezogene Nutzung.',
    },
    {
      question: 'Können wir Nutzern unterschiedliche Zugriffsrechte zuweisen?',
      answer:
        'Ja. Fleet bietet rollenbasierte Berechtigungen für Techniker, Manager, Dienstleister und Administratoren.',
    },
    {
      question: 'Unterstützt Fleet die Ablage von Dokumenten?',
      answer:
        'Ja. Laden Sie Handbücher, Garantien, Serviceprotokolle und Sicherheitschecklisten hoch und verknüpfen Sie sie direkt mit Anlagen oder Aufträgen – abrufbar im Dokumentenmanagement.',
    },
    {
      question: 'Wie unterstützt Fleet Compliance und Audits?',
      answer:
        'Fleet protokolliert und speichert Auftragsverläufe, Dokumentänderungen und Abschlüsse mit lückenloser Nachverfolgbarkeit in den Audit-Protokollen und macht Compliance so mühelos.',
    },
    {
      question: 'Was unterscheidet Fleet von anderer CMMS-Software?',
      answer:
        'Fleet ist speziell für Immobilienteams mit mehreren Standorten entwickelt und bietet mobilen Zugriff ohne App, eine schnelle Einführung, nutzungsbasierte Preise und aussagekräftige Berichte für Immobilienteams – nicht für Fabriken.',
    },
    {
      question: 'Gibt es eine kostenlose Testversion oder Demo?',
      answer:
        'Ja. Buchen Sie eine kostenlose persönliche Demo und sehen Sie, wie sich Fleet an die Abläufe und die Branche Ihres Teams anpasst.',
    },
    {
      question: 'Wie lange dauert die Einführung von Fleet?',
      answer:
        'Die meisten Teams sind in weniger als 7 Tagen startklar, inklusive vollem Zugang für Dienstleister und eingerichteten Auftrags-Workflows.',
    },
    {
      question: 'Ist Fleet sicher?',
      answer:
        'Ja. Fleet nutzt eine sichere Cloud-Infrastruktur und verschlüsselte Datenverarbeitung und unterstützt Zugriffsprotokolle sowie die Nachverfolgbarkeit von Nutzeraktionen.',
    },
    {
      question: 'Unterstützt Fleet geplante vorbeugende Instandhaltung (PPM)?',
      answer:
        'Ja. Erstellen Sie wiederkehrende Zeitpläne, verknüpfen Sie sie mit Anlagen oder Standorten und überwachen Sie die Einhaltung über Dashboard-Benachrichtigungen.',
    },
    {
      question: 'Was umfasst das Berichtswesen von Fleet?',
      answer:
        'Fleet bietet Live-Dashboards, exportierbare Berichte, Budgetverfolgung und individuelle KPIs für die Leistungsanalyse.',
    },
    {
      question: 'Kann Fleet uns helfen, Betriebskosten zu senken?',
      answer: 'Ja. Fleet senkt die Betriebskosten, indem es:',
      points: [
        'Verzögerungen bei Technikern reduziert',
        'Kosten für externe Hausverwaltungen senkt (oft 6–8 % des Umsatzes)',
        'die Lebensdauer von Anlagen verlängert und ihre Leistung nachvollziehbar macht',
      ],
    },
    {
      question: 'Kann ich mehrere Dienstleister über Fleet verwalten?',
      answer:
        'Ja. Laden Sie Dienstleister ein, markieren Sie sie, vergeben Sie Aufträge und verfolgen Sie diese mit automatischen Benachrichtigungen und Serviceprotokollen.',
    },
    {
      question: 'Unterstützt Fleet verschiedene Sprachen und Regionen?',
      answer:
        'Ja. Fleet wird von Teams in Asien, Europa und Nordamerika genutzt, mit Unterstützung für mehrere Sprachen und lokale Zeitzonen.',
    },
    {
      question: 'Können wir von einem anderen CMMS- oder CAFM-Tool migrieren?',
      answer:
        'Ja. Fleet unterstützt individuelle Migrationswege, darunter den Import von Anlagendaten, API-Synchronisierung und begleitete manuelle Uploads.',
    },
    {
      question: 'Unterstützt Fleet Lager- oder Ersatzteilverwaltung?',
      answer:
        'Demnächst. Fleet arbeitet an Funktionen für Ersatzteile, Lagerprotokolle und verbrauchsbasierte Bestandswarnungen.',
    },
    {
      question: 'Welche Branchen profitieren am meisten von Fleet?',
      answer: 'Fleet eignet sich ideal für:',
      points: [
        'Einkaufszentren und Einzelhandelsketten',
        'Hotellerie und Gastronomie',
        'Schifffahrt, Logistik und Verkehrsknotenpunkte',
        'Wohn- und gemischt genutzte Quartiere',
      ],
    },
    {
      question: 'Wie kann ich Fleet für weitere Informationen kontaktieren?',
      answer:
        'Buchen Sie eine Demo, besuchen Sie unsere Kontaktseite oder schreiben Sie unserem Team direkt eine E-Mail.',
    },
  ] satisfies FaqItem[],
  cta: {
    title: 'Noch Fragen?',
    description: 'Sprechen Sie mit dem Fleet-Team über Ihre Standorte, Anlagen und Abläufe.',
    primaryAction: { label: 'Demo buchen', href: '/contact' },
    secondaryAction: { label: 'Plattform entdecken', href: '/#platform' },
  },
}
