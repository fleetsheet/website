import type { NavLink } from '@/config'
import type { AboutContent } from '@/data/en/about'

const demo: NavLink = { label: 'Demo buchen', href: '/contact' }

export const about: AboutContent = {
  menu: {
    label: 'Über Fleet',
    groups: { company: 'Unternehmen' },
    promo: {
      title: 'Werden Sie Teil des Fleet-Teams',
      description:
        'Helfen Sie Immobilienteams weltweit, ihre Gebäude mit Klarheit, Kontrolle und Ruhe zu betreiben.',
      action: { label: 'Karriere entdecken', href: '/about/careers' },
    },
  },
  pages: {
    story: {
      label: 'Unsere Geschichte',
      summary: 'Unsere Mission, unsere Werte und die Teams, für die wir arbeiten.',
      meta: {
        title: 'Über Fleet: Geschichte, Mission und Werte | Fleet',
        description:
          'Fleet gibt Immobilienteams, Betriebsleitungen und Facility Managern die Klarheit, Kontrolle und Ruhe, die sie verdienen. Entdecken Sie unsere Geschichte, Mission und Werte.',
      },
    },
    careers: {
      label: 'Karriere',
      summary: 'Wachsen Sie mit einem Team, das die Zukunft des Immobilienbetriebs gestaltet.',
      meta: {
        title: 'Karriere bei Fleet | Fleet',
        description:
          'Gestalten Sie mit Fleet die Zukunft des Immobilienbetriebs. Erfahren Sie, wie wir arbeiten, wo wir sind und wie Sie Teil des Teams werden.',
      },
    },
    partners: {
      label: 'Partner',
      summary: 'Empfehlen, implementieren oder integrieren Sie Fleet.',
      meta: {
        title: 'Partnerprogramm | Fleet',
        description:
          'Wachsen Sie mit Fleet als Empfehlungs-, Beratungs- und Implementierungs- oder Technologiepartner und helfen Sie Immobilienteams, jeden Standort souverän zu steuern.',
      },
    },
  },
  offices: [
    { city: 'Bangkok', region: 'Thailand' },
    { city: 'Los Angeles', region: 'Vereinigte Staaten' },
    { city: 'Singapur', region: 'Singapur' },
  ],
  story: {
    hero: {
      eyebrow: 'Über Fleet',
      title: 'Das ist Fleet',
      description:
        'Unsere Mission: Immobilienteams, Betriebsleitungen und Facility Managern die Klarheit, Kontrolle und Ruhe zu geben, die sie verdienen.',
      photos: [
        { id: 'officeTeam', alt: 'Kollegen im Gespräch an einem Tisch in einem hellen Büro' },
        { id: 'teamWorkshop', alt: 'Ein Team plant gemeinsam am Whiteboard' },
        { id: 'officeCollaboration', alt: 'Kollegen arbeiten in einem offenen Büro zusammen' },
      ],
    },
    story: {
      eyebrow: 'Unsere Geschichte',
      title: 'Für die Teams, die Gebäude am Laufen halten',
      chapters: [
        {
          label: 'Der Anstoß',
          title: 'Eine einfache Beobachtung',
          description:
            'Fleet begann, als wir sahen, wie Instandhaltungsteams Gebäude mit Tabellen, E-Mail-Ketten und Gruppenchats am Laufen hielten.',
        },
        {
          label: 'Die Idee',
          title: 'Eine bessere Arbeitsweise',
          description:
            'Wir wollten Software bauen, die so schnell und anpassungsfähig ist wie die Teams, die sie nutzen, bereit für jeden Standort und jede Anlage.',
        },
        {
          label: 'Die Plattform',
          title: 'Fleet nimmt Gestalt an',
          description:
            'Eine cloudbasierte, mobile Plattform für iOS und Android, die die Instandhaltung über viele Standorte und Anlagen vereinfacht.',
        },
        {
          label: 'Heute',
          title: 'Vertraut in vielen Portfolios',
          description:
            'Von fünf Bürogebäuden bis zu fünfzig Schulcampus: Fleet hilft Teams, die richtige Arbeit schneller und klüger zu erledigen.',
        },
      ],
    },
    mission: {
      eyebrow: 'Unsere Mission',
      title: 'Die physische Welt mit digitalen Werkzeugen verbinden',
      description:
        'Wir gestalten eine nachhaltige Zukunft, indem wir Immobiliensoftware neu denken und unsere physische Welt mit digitalen Werkzeugen verbinden.',
      photo: { id: 'propertyManager', alt: 'Immobilienmanagerin mit Tablet vor Hochhäusern' },
      valuesTitle: 'Unsere Werte',
      values: [
        {
          title: 'Klarheit zuerst',
          description: 'Instandhaltungsdaten sollen klar und leicht umsetzbar sein.',
        },
        {
          title: 'Tempo vor Komplexität',
          description: 'Schneller ist besser, gerade für Betriebsteams.',
        },
        {
          title: 'Nutzerzentriert',
          description:
            'Für die Menschen gebaut, die die Arbeit erledigen, und für die, die sie prüfen.',
        },
        {
          title: 'Vertrauen als Standard',
          description: 'Sicher, transparent und verantwortungsvoll in allem, was wir bauen.',
        },
      ],
    },
    offices: {
      eyebrow: 'Unsere Büros',
      title: 'Hier finden Sie uns',
      description:
        'Unsere Teams arbeiten in drei Städten und betreuen Portfolios in vielen Regionen.',
    },
    careers: {
      title: 'Gestalten Sie mit uns, was kommt',
      description:
        'Helfen Sie Immobilienteams, jedes Gebäude mit Klarheit und Sicherheit zu betreiben. Entdecken Sie das Leben bei Fleet.',
      action: { label: 'Karriere entdecken', href: '/about/careers' },
    },
    cta: {
      title: 'Erleben Sie Fleet in Aktion',
      description: 'Buchen Sie eine geführte Tour, abgestimmt auf Ihr Portfolio und Ihre Teams.',
      primaryAction: demo,
      secondaryAction: { label: 'Kontakt', href: '/contact' },
    },
  },
  careers: {
    hero: {
      eyebrow: 'Karriere',
      title: 'Gestalten Sie mit uns die Zukunft des Immobilien­betriebs',
      description:
        'Werden Sie Teil eines Teams, das für Immobilien- und Facility-Teams weltweit aus Instandhaltungschaos Klarheit macht.',
      action: { label: 'Teil des Teams werden', href: '#join' },
      photos: [
        { id: 'welcomeHandshake', alt: 'Ein neues Teammitglied wird per Handschlag begrüßt' },
        { id: 'officeTeam', alt: 'Kollegen im Gespräch an einem Tisch in einem hellen Büro' },
        { id: 'teamWorkshop', alt: 'Ein Team plant gemeinsam am Whiteboard' },
        { id: 'officeCollaboration', alt: 'Kollegen arbeiten in einem offenen Büro zusammen' },
      ],
    },
    growth: {
      title: 'Wir wachsen mit jedem Gebäude, das wir betreuen',
      description:
        'Fleet unterstützt Teams in Immobilien, Logistik, Bildung, Handel und öffentlichen Einrichtungen, und unser Team wächst mit ihnen.',
      stats: [
        { value: '3', label: 'Bürostandorte' },
        { value: '5', label: 'Branchen, die wir betreuen' },
        { value: '20+', label: 'unterstützte Integrationen' },
        { value: '99,99 %', label: 'Verfügbarkeit, die wir liefern' },
      ],
    },
    culture: {
      eyebrow: 'Leben bei Fleet',
      title: 'So arbeiten wir',
      description:
        'Unsere Werte prägen, wie wir Fleet bauen und wie wir jeden Tag zusammenarbeiten.',
      items: [
        {
          title: 'Klarheit zuerst',
          description: 'Wir teilen Wissen offen, damit alle sicher entscheiden können.',
        },
        {
          title: 'Tempo vor Komplexität',
          description: 'Wir bevorzugen einfache Lösungen und liefern Verbesserungen schnell.',
        },
        {
          title: 'Nutzerzentriert',
          description: 'Wir verbringen Zeit mit den Menschen vor Ort und bauen für ihren Alltag.',
        },
        {
          title: 'Vertrauen als Standard',
          description: 'Wir geben einander Verantwortung und stehen für unsere Ergebnisse ein.',
        },
      ],
    },
    spotlight: {
      title: 'Gebaut von Menschen, denen die Arbeit wichtig ist',
      description:
        'Jede Funktion beginnt mit einem echten Team in einem echten Gebäude. Wir hören Technikern, Immobilienverantwortlichen und Dienstleistern zu und bauen Werkzeuge, die ihren Tag leichter machen.',
      points: [
        'Nah an Kunden in jeder Region',
        'Verantwortung von der Idee bis zum Release',
        'Raum zum Lernen und Wachsen',
      ],
      photo: { id: 'colleaguesTablets', alt: 'Zwei Kollegen prüfen Arbeit auf Tablets' },
    },
    offices: {
      eyebrow: 'Unsere Büros',
      title: 'Wo Sie arbeiten könnten',
      description:
        'Arbeiten Sie mit Kolleginnen und Kollegen in Bangkok, Los Angeles und Singapur.',
    },
    join: {
      eyebrow: 'So bewerben Sie sich',
      title: 'Ihr Weg zu Fleet',
      label: 'Schritt',
      steps: [
        {
          title: 'Lebenslauf senden',
          description: 'Erzählen Sie uns von sich und der Arbeit, die Sie begeistert.',
        },
        {
          title: 'Erstes Gespräch',
          description: 'Ein freundliches Gespräch über Ihre Erfahrung und Ihre Ziele.',
        },
        {
          title: 'Das Team kennenlernen',
          description:
            'Sprechen Sie mit Ihren künftigen Kollegen und entdecken Sie die Rolle gemeinsam.',
        },
        {
          title: 'Willkommen an Bord',
          description: 'Sie erhalten alles, was Sie brauchen, um ab dem ersten Tag zu wirken.',
        },
      ],
    },
    invite: {
      title: 'Bereit für Fleet?',
      description:
        'Wir lernen gern talentierte Menschen kennen. Senden Sie uns Ihren Lebenslauf und erzählen Sie, wie Sie beitragen möchten.',
      primaryAction: { label: 'Lebenslauf senden', href: '/contact' },
      secondaryAction: { label: 'Unsere Geschichte lesen', href: '/about' },
    },
  },
  partners: {
    hero: {
      eyebrow: 'Partner',
      title: 'Wachsen Sie mit Fleet',
      description:
        'Werden Sie Partner von Fleet und helfen Sie Immobilienteams überall, jeden Standort souverän zu steuern. Wählen Sie den Weg, der zu Ihrem Geschäft passt, von einfachen Empfehlungen bis zur langfristigen Zusammenarbeit.',
      photos: [
        { id: 'blueprintPlanning', alt: 'Ein Team prüft gemeinsam Gebäudepläne' },
        { id: 'engineersRooftop', alt: 'Zwei Ingenieure prüfen ein Tablet auf einem Dach' },
        { id: 'welcomeHandshake', alt: 'Zwei Partner reichen sich über einen Tisch die Hand' },
      ],
    },
    programs: {
      eyebrow: 'Partnerwege',
      title: 'Partner von Fleet werden',
      description: 'Drei Wege, gemeinsam zu wachsen, jeweils mit Unterstützung unseres Teams.',
      items: [
        {
          title: 'Empfehlungspartner',
          description:
            'Sie kennen Teams, die mit Fleet besser arbeiten könnten? Stellen Sie den Kontakt her, und unser Team übernimmt Demo, Onboarding und Support.',
          points: ['Einfache Empfehlungen', 'Unser Team führt jede Demo', 'Wenig Aufwand für Sie'],
          action: { label: 'Empfehlung senden', href: '/contact' },
        },
        {
          title: 'Beratungs- und Implementierungs­partner',
          description:
            'Helfen Sie Kunden, Fleet zu planen, einzuführen und auszubauen, mit Prozessdesign, Datenmigration und Schulung.',
          points: [
            'Onboarding- und Schulungsressourcen',
            'Leitfäden für Abläufe und KPIs',
            'Gemeinsame Umsetzung mit unserem Team',
          ],
          action: { label: 'Als Beratungspartner bewerben', href: '/contact' },
        },
        {
          title: 'Technologiepartner',
          description:
            'Verbinden Sie Ihr Produkt oder Ihre Plattform über die REST API mit Fleet und erreichen Sie Immobilien- und Facility-Teams.',
          points: [
            'Zugang zur REST API',
            'Unterstützung bei der Integration',
            'Mehrwert für gemeinsame Kunden',
          ],
          action: { label: 'Als Technologiepartner bewerben', href: '/contact' },
        },
      ],
    },
    why: {
      title: 'Warum Partner von Fleet werden',
      description:
        'Eine Plattform, die Ihre Kunden gern nutzen, mit einem Team, das Sie unterstützt.',
      items: [
        {
          title: 'Für Immobilien gemacht',
          description: 'Entwickelt für Immobilien- und Facility-Teams mit vielen Standorten.',
        },
        {
          title: 'Schnell startklar',
          description: 'Die meisten Teams starten in unter 7 Tagen mit fertigen Auftragsabläufen.',
        },
        {
          title: 'Nutzungsbasierte Preise',
          description: 'Kunden zahlen für das, was sie nutzen, mit transparenter Abrechnung.',
        },
        {
          title: 'Offen für Integrationen',
          description:
            'Eine REST API und über 20 Integrationen verbinden Fleet mit bestehenden Systemen.',
        },
        {
          title: 'Regionale Präsenz',
          description: 'Teams in Bangkok, Los Angeles und Singapur mit lokalem Onboarding.',
        },
        {
          title: 'Mobile first',
          description: 'Läuft in jedem Browser auf iOS und Android, bereit für jeden Techniker.',
        },
      ],
    },
    referral: {
      badge: 'Empfehlungspartner',
      title: 'Sie kennen ein Team, das Fleet braucht?',
      description: 'Stellen Sie den Kontakt her, und unser Team übernimmt den Rest.',
      action: { label: 'Empfehlung senden', href: '/contact' },
    },
    cta: {
      title: 'Lassen Sie uns gemeinsam wachsen',
      description: 'Erzählen Sie uns von Ihrem Geschäft und wir finden den passenden Partnerweg.',
      primaryAction: { label: 'Partner werden', href: '/contact' },
      secondaryAction: { label: 'Unsere Geschichte lesen', href: '/about' },
    },
  },
}
