import type { NavLink } from '@/config'
import type { ResourcesContent } from '@/data/en/resources'

const demo: NavLink = { label: 'Demo buchen', href: '/contact' }
const apiAccess: NavLink = { label: 'API-Zugang anfragen', href: '/contact' }

export const resources: ResourcesContent = {
  menu: {
    label: 'Ressourcen',
    groups: { platform: 'RunFleet Plattform' },
    promo: {
      title: 'In unter 7 Tagen live',
      description:
        'Mit RunFleet EasyOnboard bildet ein Onboarding-Team Ihre Abläufe bereits in der ersten Woche in Fleet ab.',
      action: { label: 'EasyOnboard entdecken', href: '/resources/easyonboard' },
    },
  },
  pages: {
    contentLibrary: {
      label: 'Wissensbibliothek',
      summary: 'Leitfäden, Ideen und Einblicke für Immobilien- und Facility-Teams.',
      meta: {
        title: 'Wissensbibliothek | Fleet',
        description:
          'Praxisnahe Artikel zu Instandhaltung, KI und Immobilienbetrieb vom Fleet-Team, frei lesbar.',
      },
    },
    customerStories: {
      label: 'Kundengeschichten',
      summary: 'Wie Teams jeden Standort mit Fleet steuern.',
      meta: {
        title: 'Kundengeschichten | Fleet',
        description:
          'Wie Immobilien-, Logistik- und Handelsteams mit Fleet reaktive Instandhaltung senken und an jedem Standort schneller reagieren.',
      },
    },
    easyOnboard: {
      label: 'RunFleet EasyOnboard',
      summary: 'Onboarding, Schulung und Support für den Start in wenigen Tagen.',
      meta: {
        title: 'RunFleet EasyOnboard: Onboarding, Schulung und Support | Fleet',
        description:
          'Starten Sie mit Fleet in unter 7 Tagen. Unser Onboarding-Team bildet Ihre Abläufe ab, übernimmt Ihre Daten und schult Ihre Teams.',
      },
    },
    developers: {
      label: 'Entwicklerportal',
      summary: 'Verbinden Sie Fleet per REST API mit Ihren Systemen.',
      meta: {
        title: 'Entwicklerportal | Fleet',
        description:
          'Verbinden Sie Fleet über die REST API und mehr als 20 Integrationen mit Finanztools, ERP- und Immobiliensystemen.',
      },
    },
  },
  contentLibrary: {
    title: 'Entdecken Sie unsere Wissens­bibliothek',
    description:
      'Praxisnahe Ideen zu Instandhaltung, KI und Immobilienbetrieb vom Fleet-Team, frei lesbar.',
    search: {
      label: 'Artikel durchsuchen',
      placeholder: 'Nach Stichwort suchen',
      button: 'Suchen',
    },
    featured: { badge: 'Empfohlen', action: 'Artikel lesen' },
    topics: {
      label: 'Themen',
      all: 'Alle Themen',
      items: {
        ai: 'KI & Automatisierung',
        maintenance: 'Instandhaltung',
        operations: 'Digitaler Betrieb',
        retail: 'Handel & Center',
      },
    },
    card: { type: 'Artikel', action: 'Artikel lesen', englishOnly: 'Auf Englisch' },
    empty: 'Versuchen Sie ein anderes Stichwort oder Thema, um weitere Artikel zu sehen.',
    cta: {
      title: 'Bereit, diese Ideen umzusetzen?',
      description:
        'Buchen Sie eine geführte Tour und erleben Sie, wie Fleet Teams, Anlagen und Dienstleister verbindet.',
      primaryAction: demo,
      secondaryAction: { label: 'Plattform entdecken', href: '/platform' },
    },
  },
  customerStories: {
    hero: {
      eyebrow: 'Kundengeschichten',
      title: 'Teams, die jeden Standort souverän steuern',
      description:
        'Wie Immobilien-, Logistik- und Handelsteams mit Fleet reaktive Arbeit senken, ihre Techniker vernetzen und schneller reagieren.',
      action: { label: 'Alle Geschichten ansehen', href: '#stories' },
    },
    spotlight: {
      label: 'Kunde im Fokus',
      previous: 'Vorherige Geschichte',
      next: 'Nächste Geschichte',
      action: 'Geschichte lesen',
    },
    results: [
      { value: 'Bis zu 40 %', label: 'weniger reaktive Instandhaltung' },
      { value: 'Unter 7 Tagen', label: 'bis Ihr Team startklar ist' },
      { value: '99,99 %', label: 'Verfügbarkeit, per SLA zugesichert' },
      { value: '20+', label: 'Integrationen in Ihre Systeme' },
    ],
    filter: {
      label: 'Finden Sie Ihre Branche',
      all: 'Alle Branchen',
      sectors: {
        realEstate: 'Immobilien',
        logistics: 'Logistik & Lager',
        retail: 'Handel & Center',
      },
    },
    stories: [
      {
        sector: 'realEstate',
        organization: 'Gemischt genutztes Quartier',
        metric: 'Fast 40 %',
        metricLabel: 'weniger reaktive Instandhaltung',
        title:
          'Wie ein gemischt genutztes Quartier Techniker, Anlagen und Auftragsdaten an einem Ort bündelt',
        quote:
          'Fleet hat unsere reaktive Instandhaltung um fast 40 % reduziert. Endlich haben wir Techniker, Anlagenprotokolle und Auftragsdaten an einem Ort.',
        author: 'Leitung Immobilienbetrieb',
      },
      {
        sector: 'logistics',
        organization: 'Logistikzentrum',
        metric: 'Maßgeschneidert',
        metricLabel: 'Lösung mit schnellerem Support',
        title: 'Warum ein Logistikzentrum eine Plattform für den eigenen Betrieb gewählt hat',
        quote:
          'Andere Plattformen waren zu komplex oder zu allgemein. Fleet bietet uns eine maßgeschneiderte Lösung mit schnellerem Support.',
        author: 'Leitung Instandhaltung',
      },
      {
        sector: 'retail',
        organization: 'Regionaler Center-Betreiber',
        metric: 'Fast 40 %',
        metricLabel: 'weniger reaktive Instandhaltung',
        title: 'Wie ein regionaler Center-Betreiber alle Standorte im Blick hat',
        quote:
          'Mit Fleet haben wir die reaktive Instandhaltung um fast 40 % gesenkt. Heute sehen wir alle Standorte und reagieren schneller.',
        author: 'Leitung Betrieb',
      },
    ],
    readStory: 'Geschichte lesen',
    serve: {
      title: 'Teams aller Portfolios vertrauen auf Fleet',
      description:
        'Von schlanken Betriebsteams mit drei Personen bis zu Instandhaltungsabteilungen mit Hunderten Mitarbeitenden in mehreren Städten.',
      items: [
        {
          label: 'Immobilien',
          detail: 'Gewerbe, Wohnen und gemischte Nutzung',
          href: '/solutions/offices-mixed-use',
        },
        {
          label: 'Logistik und Lager',
          detail: 'Hubs, Rampen und Fuhrparks',
          href: '/solutions/shipping-logistics',
        },
        {
          label: 'Bildung und Campus',
          detail: 'Schulen, Hochschulen und Campus',
          href: '/solutions/healthcare-education',
        },
        {
          label: 'Handel und Filialnetze',
          detail: 'Center, Geschäfte und Filialen',
          href: '/solutions/shopping-malls-retail',
        },
        {
          label: 'Gemeinnützige und kommunale Gebäude',
          detail: 'Öffentliche und Gemeinschaftsgebäude',
          href: '/solutions/facility-management',
        },
      ],
    },
    share: {
      title: 'Erzählen Sie Ihre Fleet-Geschichte',
      description: 'Erzielen Sie starke Ergebnisse mit Fleet? Wir stellen Ihr Team gern vor.',
      action: { label: 'Kontakt aufnehmen', href: '/contact' },
    },
    cta: {
      title: 'Schreiben Sie Ihre eigene Erfolgsgeschichte',
      description:
        'Buchen Sie eine geführte Tour und erleben Sie, wie Fleet Ihre Teams, Anlagen und Dienstleister unterstützt.',
      primaryAction: demo,
      secondaryAction: { label: 'Plattform entdecken', href: '/platform' },
    },
  },
  easyOnboard: {
    hero: {
      eyebrow: 'RunFleet EasyOnboard',
      title: 'Mit Fleet in unter 7 Tagen live',
      description:
        'Unser Onboarding-Team bildet Ihre Abläufe ab, übernimmt Ihre Daten und schult Ihre Teams, damit jeder Standort ab der ersten Woche startklar ist.',
      highlights: ['Lokales Onboarding', 'Schulung für jede Rolle', 'Live-Chat-Support'],
      primaryAction: demo,
      secondaryAction: { label: 'Zur Wissensdatenbank', href: '#knowledge-base' },
    },
    stats: [
      { value: 'Unter 7 Tagen', label: 'bis zu vollem Dienstleisterzugang und Auftragsabläufen' },
      { value: 'Erste Woche', label: 'Abbildung Ihrer Abläufe mit unserem Onboarding-Team' },
      { value: 'Jede Rolle', label: 'geschult, von Technikern bis zur Leitung' },
      { value: 'Live-Chat', label: 'Support direkt von unserem Team' },
    ],
    steps: {
      title: 'Ihre erste Woche mit Fleet',
      description: 'Ein geführter Weg vom Start bis zum Go-live, abgestimmt auf Ihr Portfolio.',
      label: 'Schritt',
      items: [
        {
          title: 'Start und Einrichtung',
          description:
            'Lokales Onboarding und Kontoeinrichtung für Ihre Regionen, Standorte und Teams.',
        },
        {
          title: 'Abläufe abbilden',
          description:
            'Unser Onboarding-Team bildet Ihre Instandhaltungs-, Prüf- und Dienstleisterabläufe in Fleet ab.',
        },
        {
          title: 'Daten übernehmen',
          description:
            'Übernehmen Sie Anlagen und Dokumente per Datenimport, API-Synchronisierung oder begleitetem Upload.',
        },
        {
          title: 'Teams und Dienstleister einladen',
          description:
            'Geben Sie Technikern, Verantwortlichen und Dienstleistern Zugang, mit einsatzbereiten Auftragsabläufen.',
        },
        {
          title: 'Schulen und starten',
          description:
            'Rollenbasierte Schulungen und Leitfäden zur digitalen Einführung geben jedem Team Sicherheit.',
        },
      ],
    },
    knowledge: {
      title: 'Wissensdatenbank',
      description: 'Leitfäden, damit jedes Team das Beste aus Fleet herausholt.',
      search: { label: 'Wissensdatenbank durchsuchen', placeholder: 'Onboarding-Themen suchen' },
      empty: 'Versuchen Sie ein anderes Stichwort, um weitere Themen zu sehen.',
      groups: {
        start: 'Erste Schritte',
        maintenance: 'Instandhaltung',
        assets: 'Anlagen und Compliance',
        automation: 'Automatisierung und Integrationen',
      },
      faqs: 'Häufige Fragen',
    },
    training: {
      title: 'Schulungen, die Sicherheit geben',
      description:
        'Strukturierte Schulungen geben Verantwortlichen und Teams die Kompetenzen und KPIs für jede Immobilie.',
      items: [
        {
          title: 'Standardisierte Abläufe',
          description: 'Für Instandhaltung, Prüfungen und Dienstleistersteuerung.',
        },
        {
          title: 'KPI-Konfiguration',
          description: 'Für Reaktionszeiten, Auftrags-SLAs, Abschlussquoten und Anlagenzustand.',
        },
        {
          title: 'Teamübergreifende Kommunikation',
          description: 'Für regionale Abstimmung im Immobilienbetrieb.',
        },
        {
          title: 'Leitfäden zur digitalen Einführung',
          description: 'Die Teams beim Wechsel von Papier oder Altsystemen begleiten.',
        },
        {
          title: 'Dashboards für die Leitung',
          description: 'Für Echtzeit-Überblick über Standorte, Zonen und Anlagengruppen.',
        },
      ],
    },
    support: {
      title: 'Support, wann immer Sie ihn brauchen',
      description: 'Echte Menschen, die Ihre Teams auch lange nach dem Go-live unterstützen.',
      items: [
        {
          title: 'Live-Chat-Support',
          description: 'Freundlicher Live-Chat, der Sie direkt mit unserem Team verbindet.',
        },
        {
          title: 'Team in mehreren Zeitzonen',
          description:
            'Ein Support-Team über Zeitzonen hinweg für Portfolios in mehreren Regionen.',
        },
        {
          title: 'Schulungsressourcen',
          description: 'Ein eigenes Support-Team sowie Schulungs- und Onboarding-Ressourcen.',
        },
      ],
    },
    faqTitle: 'Fragen zum Onboarding',
    faq: [
      {
        question: 'Wie lange dauert das Onboarding bei Fleet?',
        answer:
          'Die meisten Teams starten mit Fleet in unter 7 Tagen, mit vollem Dienstleisterzugang und einsatzbereiten Auftragsabläufen.',
      },
      {
        question: 'Können wir unsere bestehenden Daten übernehmen?',
        answer:
          'Ja. Fleet unterstützt individuelle Migrationswege, darunter Anlagenimporte, API-Synchronisierung und begleitete manuelle Uploads.',
      },
      {
        question: 'Wer konfiguriert Fleet für unsere Abläufe?',
        answer:
          'Mit dem visuellen Workflow Builder konfiguriert Ihr eigenes Team Fleet ganz einfach, und unser Onboarding-Team hilft in der ersten Woche, Ihre Abläufe abzubilden.',
      },
      {
        question: 'Wie erhalten Techniker und Dienstleister Zugang?',
        answer:
          'Fleet läuft in jedem mobilen Browser, sodass Techniker und Dienstleister sofort mit ihren zugewiesenen Aufträgen starten.',
      },
    ],
    cta: {
      title: 'Starten Sie Ihre erste Woche mit Fleet',
      description:
        'Buchen Sie eine Tour und wir planen ein Onboarding, das zu Ihrem Portfolio passt.',
      primaryAction: demo,
      secondaryAction: { label: 'Team kontaktieren', href: '/contact' },
    },
  },
  developers: {
    hero: {
      eyebrow: 'Entwicklerportal',
      title: 'Fleet für Entwickler',
      description:
        'Alles, um Fleet mit Ihren Systemen zu verbinden, von Finanztools bis zu Immobiliensystemen.',
      primaryAction: apiAccess,
      secondaryAction: { label: 'Integrationen entdecken', href: '/platform/integrations' },
    },
    cards: [
      {
        title: 'Integration aufbauen',
        description:
          'Verbinden Sie Buchhaltung, Kreditoren/Debitoren und ERP über die REST API mit Fleet, unterstützt von unserem Team.',
        action: apiAccess,
      },
      {
        title: 'Integrationen entdecken',
        description:
          'Wie Fleet sich mit Finanztools, ERP, Mieterportalen und Gebäudesystemen verbindet.',
        action: { label: 'Integrationen ansehen', href: '/platform/integrations' },
      },
      {
        title: 'Auf dem Laufenden bleiben',
        description: 'Produktneuigkeiten und Ideen vom Fleet-Team in der Wissensbibliothek.',
        action: { label: 'Zur Wissensbibliothek', href: '/insights' },
      },
    ],
    capabilities: {
      title: 'Integrations­möglichkeiten',
      description: 'Typische Wege, wie Teams Fleet anbinden und ihren Betrieb vereinfachen.',
      items: [
        {
          title: 'Arbeitsaufträge',
          description:
            'Übernehmen Sie Anfragen aus anderen Systemen in Fleet und halten Sie den Auftragsstatus synchron.',
          points: ['Anfragen erstellen', 'Statusmeldungen'],
        },
        {
          title: 'Anlagendaten',
          description:
            'Importieren und synchronisieren Sie Anlagen, damit alle Systeme dieselbe Datenbasis nutzen.',
          points: ['Anlagenimporte', 'API-Synchronisierung'],
        },
        {
          title: 'Finanzen und Kreditoren/Debitoren',
          description:
            'Verbinden Sie Instandhaltung mit Buchhaltung, Kreditoren/Debitoren und ERP für einheitliche Berichte.',
          points: ['Kosten und Rechnungen', 'Einheitliche Berichte'],
        },
        {
          title: 'Immobiliensysteme',
          description: 'Binden Sie Mieterportale, Zutrittskontrolle und Gebäudeleittechnik an.',
          points: ['Mieterportale', 'Gebäudeleittechnik'],
        },
      ],
    },
    platform: {
      title: 'Auf einer sicheren, zuverlässigen Plattform',
      items: [
        { value: 'REST API', label: 'für Finanztools, ERP und Immobiliensysteme' },
        { value: '20+', label: 'Integrationen in Ihre Systeme' },
        { value: '99,99 %', label: 'Verfügbarkeit, per SLA zugesichert' },
        { value: 'Audit-Logs', label: 'und verschlüsselte Speicherung' },
      ],
    },
    cta: {
      title: 'Bereit, Fleet anzubinden?',
      description:
        'Erzählen Sie uns von Ihren Systemen und unser Team plant die Integration mit Ihnen.',
      primaryAction: apiAccess,
      secondaryAction: demo,
    },
  },
}
