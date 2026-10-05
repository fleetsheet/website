import type { NavLink } from '@/config'
import type { StatusItem } from '@/data/en/home'
import type { OverviewModule, PlatformEntry, PlatformPageContent } from '@/data/en/platform'
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

export const pages: { overview: PlatformEntry; webAndMobile: PlatformEntry } & Record<
  TemplatePageId,
  PlatformPageContent
> = {
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
    eyebrow: 'Integrationen',
    title: 'Fleet mit Ihren bestehenden Tools verbinden',
    description:
      'Fleet fügt sich mit mehr als 20 Integrationen und einer offenen REST-API in Ihre Systemlandschaft ein und schafft ein durchgängig vernetztes Betriebs-Ökosystem.',
    highlights: ['20+ Integrationen', 'Offene REST-API', 'Begleitete Einrichtung'],
    features: {
      title: 'Integrationen für Ihren gesamten Betrieb',
      description:
        'Finanz-, Immobilien- und Gebäudedaten zusammenführen, damit jedes Team mit denselben Daten arbeitet.',
      items: [
        {
          title: 'Buchhaltung und Kreditoren/Debitoren',
          description:
            'Kosten, Rechnungen und Freigaben mit Ihren Finanztools synchronisieren und Budgets genau halten.',
        },
        {
          title: 'ERP-Systeme',
          description:
            'Anlagen-, Dienstleister- und Einkaufsdaten mit Ihrem ERP teilen und einheitlich berichten.',
        },
        {
          title: 'Zutrittskontrolle',
          description:
            'Zutrittssysteme anbinden, damit Einsätze und Anwesenheit von Dienstleistern automatisch erfasst werden.',
        },
        {
          title: 'Mieterportale',
          description:
            'Mieteranfragen in verfolgte Arbeitsaufträge umwandeln und Nutzer über den Fortschritt informieren.',
        },
        {
          title: 'Gebäudeleittechnik',
          description:
            'Alarme und Messwerte der GLT in Fleet übernehmen und Aufträge zum richtigen Zeitpunkt auslösen.',
        },
        {
          title: 'REST-API',
          description:
            'Eigene Verbindungen zu jedem System über eine dokumentierte, sichere REST-API aufbauen.',
        },
      ],
    },
    details: [
      {
        title: 'Finanzen und Betrieb im Gleichklang',
        description:
          'Instandhaltung und Finanzen bleiben abgestimmt, vom ersten Angebot bis zur letzten Rechnung.',
        points: [
          'Kostenfreigaben fließen direkt in Ihren Kreditorenprozess',
          'Budgetverfolgung nach Gebäude, Anlage und Dienstleister',
          'Exportierbare Berichte für Finanzen und Gremien',
        ],
      },
      {
        title: 'Sicher von Anfang an',
        description:
          'Jede Integration folgt Ihrer IT-Governance, mit klaren Berechtigungen und voller Nachvollziehbarkeit.',
        points: [
          'Verschlüsselung bei Übertragung und Speicherung',
          'Freigegebene Endpunkte gemäß Ihren IT-Richtlinien',
          'Prüfpfade für jeden synchronisierten Datensatz',
        ],
      },
    ],
    useCases: {
      title: 'Integrationen in der Praxis',
      description:
        'Teams verbinden Fleet, um Doppelerfassungen zu vermeiden und jedes System aktuell zu halten.',
      items: [
        'Freigegebene Reparaturkosten an Ihr Buchhaltungssystem übertragen',
        'Arbeitsaufträge automatisch aus GLT-Alarmen erstellen',
        'Dienstleisterdaten zwischen Fleet und Ihrem ERP synchronisieren',
        'Mieteranfragen aus Ihrem Mieterportal als Aufträge erfassen',
        'Fleet-Daten in unternehmensweite BI-Dashboards einspeisen',
      ],
    },
  },
  runnerAi: {
    label: 'RunnerAI',
    summary: 'KI-Agenten, die Workflows und Dashboards aus einfacher Sprache erstellen.',
    meta: {
      title: 'RunnerAI | Fleet',
      description:
        'RunnerAI ist die sichere, regelbasierte KI von Fleet für Immobilien- und Facility-Teams: Workflows per Text erstellen, Dashboards auf Anfrage erzeugen und den Betrieb automatisieren.',
    },
    eyebrow: 'RunnerAI',
    title: 'KI-Agenten für Immobilien und Facility Management',
    description:
      'RunnerAI erstellt Workflows, liefert Erkenntnisse und baut Dashboards aus einfachen Textbefehlen, damit Ihre Teams mehr Zeit für die Arbeit vor Ort haben.',
    highlights: [
      'Befehle in natürlicher Sprache',
      'Regelbasiert und nachvollziehbar',
      'Abgeschottete Daten je Organisation',
    ],
    features: {
      title: 'Was RunnerAI leistet',
      description:
        'Eingebaute operative Intelligenz, die nächste Schritte vorausdenkt, Workflows strukturiert und sofort die passende Erkenntnis liefert.',
      items: [
        {
          title: 'Workflows per Textbefehl',
          description:
            'Beschreiben Sie, was erledigt werden soll, und RunnerAI macht daraus einen einheitlichen Workflow für jeden Standort.',
        },
        {
          title: 'Anpassungen in Echtzeit',
          description:
            'Schritte, Auslöser und Bedingungen in Sekunden ändern und für alle oder ausgewählte Regionen ausrollen.',
        },
        {
          title: 'Vorlagen nach Branchenstandard',
          description:
            'Mit bewährten Workflows für Ihren Objekttyp, Ihren Anlagenmix und Ihren Markt starten.',
        },
        {
          title: 'Dashboards auf Anfrage',
          description:
            'Jede Ansicht anfordern, etwa Anlagen am Ende ihrer Lebensdauer, und in Sekunden ein Live-Dashboard erhalten.',
        },
        {
          title: 'Regelbasiertes maschinelles Lernen',
          description:
            'Vorhersagen folgen festgelegten Regeln, sodass jede Aktion nachvollziehbar, konform und konsistent bleibt.',
        },
        {
          title: 'In Ihrer Sprache',
          description:
            'Workflows auf Englisch oder in Ihrer Muttersprache erstellen und an lokale Vorschriften anpassen.',
        },
      ],
    },
    details: [
      {
        title: 'Dashboards auf Befehl',
        description:
          'Stellen Sie eine Frage, und RunnerAI baut das Dashboard aus Ihren Live-Betriebsdaten, bereit zum Teilen oder Anheften.',
        points: [
          'Trends und Rückstände bei Arbeitsaufträgen',
          'Anlagenausfälle und Compliance-Risikobewertung',
          'Dienstleisterleistung und regionale Vergleiche',
          'Portfolioweite Zusammenfassungen für die Geschäftsleitung',
        ],
      },
      {
        title: 'KI innerhalb Ihres Sicherheitsbereichs',
        description:
          'RunnerAI läuft auf dedizierten, kundenspezifischen Servern und hält sensible Daten innerhalb Ihrer Organisation.',
        points: [
          'Isolierte Rechenumgebungen für jede Organisation',
          'Verschlüsselung bei Übertragung und Speicherung',
          'Prüfpfade für jede KI-generierte Aktion',
          'Unterstützung für DSGVO, PDPL, PDPA sowie On-Premise- oder Hybridbetrieb',
        ],
      },
    ],
    useCases: {
      title: 'Fragen Sie RunnerAI',
      description: 'Einige der Anfragen, die Immobilienteams RunnerAI täglich stellen.',
      items: [
        'Zeige mir Anlagen am Ende ihrer Lebensdauer an allen Standorten',
        'Fasse den Auftragsrückstand der letzten 30 Tage zusammen',
        'Zeige mir die Dienstleisterleistung für die Region VAE',
        'Erstelle ein Risiko-Dashboard für unsere zehn größten Einkaufszentren',
        'Richte eine wöchentliche Hygieneroutine für jeden Food Court ein',
      ],
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
    eyebrow: 'Fleet Mail',
    title: 'Jede E-Mail ein verfolgter Auftrag',
    description:
      'Fleet Mail verwandelt Anfragen von Mietern und Dienstleistern sofort in Arbeitsaufträge und hält Mitarbeitende und Dienstleister mit automatischen E-Mails auf dem Laufenden.',
    highlights: ['E-Mail zu Auftrag', 'Antworten am Auftrag', 'Automatische Updates'],
    features: {
      title: 'Ihr Postfach, verbunden mit dem Betrieb',
      description:
        'Anfragen, Antworten und Freigaben laufen über einen strukturierten Datensatz, den das ganze Team sieht.',
      items: [
        {
          title: 'E-Mail zu Auftrag',
          description:
            'Jede eingehende Anfrage wird zum Arbeitsauftrag mit Absender, Anhängen und Standort.',
        },
        {
          title: 'Verlauf im Auftrag',
          description:
            'Antworten landen automatisch in der Auftragshistorie, sodass jede Unterhaltung im Kontext bleibt.',
        },
        {
          title: 'Intelligente Zuweisung',
          description:
            'Anfragen gehen je nach Standort, Kategorie und Priorität an das richtige Team oder den richtigen Dienstleister.',
        },
        {
          title: 'E-Mail-Benachrichtigungen',
          description:
            'Mitarbeitende und Dienstleister erhalten Zuweisungen, Fälligkeiten und Erinnerungen direkt ins Postfach.',
        },
        {
          title: 'Freigaben per E-Mail',
          description:
            'Manager geben Kosten mit einem Klick direkt aus der E-Mail frei oder lehnen sie ab.',
        },
        {
          title: 'Statusmeldungen für Anfragende',
          description:
            'Mieter erhalten eine Bestätigung und Fortschrittsmeldungen, bis ihre Anfrage erledigt ist.',
        },
      ],
    },
    details: [
      {
        title: 'Eingehende Anfragen, sofort geordnet',
        description:
          'Ein gemeinsames Postfach wird zur geordneten Warteschlange, in der jede Anfrage erfasst, priorisiert und zugewiesen ist.',
        points: [
          'Fotos und Dokumente am Arbeitsauftrag',
          'Doppelte Anfragen zu einem Auftrag zusammengeführt',
          'Reaktionszeiten gemessen an Ihren SLAs',
        ],
      },
      {
        title: 'Updates, die die Richtigen erreichen',
        description:
          'Fleet sendet zur richtigen Zeit die richtige Nachricht, damit Teams und Dienstleister immer den nächsten Schritt kennen.',
        points: [
          'Benachrichtigungen zu Zuweisung und Fälligkeit',
          'Eskalationen, wenn Fristen näher rücken',
          'Abschlussberichte mit Fotonachweis',
        ],
      },
    ],
    useCases: {
      title: 'Fleet Mail in der Praxis',
      description: 'E-Mail funktioniert wie gewohnt, jetzt mit vollständiger Nachverfolgung.',
      items: [
        'Ein Mieter meldet per E-Mail eine defekte Leuchte, und ein Auftrag entsteht automatisch',
        'Ein Dienstleister antwortet mit einem Angebot, das in der Auftragshistorie landet',
        'Eine Finanzverantwortliche gibt Reparaturkosten direkt aus dem Postfach frei',
        'Ein Techniker erhält jeden Abend seine Aufträge für den nächsten Tag per E-Mail',
        'Eine Regionalleitung erhält wöchentlich eine Übersicht überfälliger Aufträge',
      ],
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
    eyebrow: 'Fleet Workflow Builder',
    title: 'Workflows, die sich Ihrer Arbeitsweise anpassen',
    description:
      'Gestalten Sie Ihre Instandhaltung passend zu Struktur, Freigabeketten, Dienstleisterrichtlinien und Kostengrenzen, mit einem visuellen Builder, den jeder im Team nutzen kann.',
    highlights: ['Visueller Builder', 'Mehrstufige Freigaben', 'Startklar in der ersten Woche'],
    features: {
      title: 'Einmal aufbauen, überall nutzen',
      description:
        'Sie legen den Prozess fest, und Fleet setzt ihn um, damit Aufgaben zur richtigen Zeit die richtigen Personen erreichen.',
      items: [
        {
          title: 'Bedingte Aufgabenzuweisung',
          description:
            'Aufträge nach Standort, Art, Priorität oder Anlagenkategorie zuweisen, etwa Aufzüge an einen festen Dienstleister.',
        },
        {
          title: 'Mehrstufige Freigaben',
          description:
            'Freigaben durch Management oder Finanzen abhängig von Kosten, Dringlichkeit oder Umfang verlangen.',
        },
        {
          title: 'Rollenbasierte Zuständigkeiten',
          description:
            'Festlegen, wer Aufgaben sehen, freigeben, zuweisen oder schließen darf, für Techniker, Vorgesetzte und Dienstleister.',
        },
        {
          title: 'Benachrichtigungen und Eskalationen',
          description:
            'Teams automatisch informieren, wenn Fristen näher rücken oder ein Auftrag auf Zuweisung wartet.',
        },
        {
          title: 'Standortspezifische Workflows',
          description:
            'Jedes Gebäude und jede Region an die eigenen Standardarbeitsanweisungen anpassen.',
        },
        {
          title: 'Mit allen Modulen verbunden',
          description:
            'Workflows wirken auf Dokumente, Anlagen, Berechtigungen und Dienstleister in einem System.',
        },
      ],
    },
    details: [
      {
        title: 'Einfach eingerichtet, stark im Einsatz',
        description:
          'Ziehen, ablegen, veröffentlichen. Unser Onboarding-Team bildet Ihre Workflows in der ersten Woche gemeinsam mit Ihnen in Fleet ab.',
        points: [
          'Visueller Builder für Betriebsteams',
          'Fertige Vorlagen für gängige Prozesse',
          'Änderungen vor dem Ausrollen testen',
        ],
      },
      {
        title: 'Konsistenz, Effizienz und Erkenntnis',
        description:
          'Jeder Auftrag folgt denselben Schritten. Das hält den Betrieb präzise und macht Berichte aussagekräftiger.',
        points: [
          'Compliance-Schritte wie Dokumentenprüfungen automatisch durchgesetzt',
          'Weniger manuelle Übergaben von der Erstellung bis zum Abschluss',
          'Strukturierte Daten für aussagekräftigere Berichte',
        ],
      },
    ],
    useCases: {
      title: 'Workflows, die Teams aufbauen',
      description: 'Typische Workflows, die Immobilienteams im ersten Monat einrichten.',
      items: [
        'Sanitäraufträge in Gebäude A an einen Dienstleister, in Gebäude B an das eigene Team',
        'Freigabe durch Vorgesetzte für jeden Auftrag über 5.000 $',
        'Vorbeugende Aufträge an spezialisierte Teams, reaktive an allgemeine Teams',
        'Regionalleitungen informieren, wenn SLA-Fristen näher rücken',
        'Einzugsprozess für Mieter mit Begehung, Anlagenprüfung und Dokumenten',
      ],
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
    eyebrow: 'Vorbeugende & vorausschauende Instandhaltung',
    title: 'Jedem Ausfall einen Schritt voraus',
    description:
      'Planen Sie wiederkehrende Wartung für jede Anlage und erkennen Sie Risiken früh mit regelbasierten Vorhersagen, damit Technik läuft und Mieter zufrieden sind.',
    highlights: [
      'Wiederkehrende Pläne',
      'Regelbasierte Vorhersagen',
      'Bis zu 40 % weniger reaktive Arbeit',
    ],
    features: {
      title: 'Instandhaltung mit Sicherheit planen',
      description:
        'Wartungspläne werden zu automatischen Terminen, und Live-Daten zeigen, wo Sie als Nächstes handeln sollten.',
      items: [
        {
          title: 'Wiederkehrende Wartungspläne',
          description:
            'Vorbeugende Aufgaben für Klima, Sanitär, Beleuchtung, Aufzüge und Brandschutz nach Zeit oder Nutzung planen.',
        },
        {
          title: 'Automatische Auftragserstellung',
          description:
            'Fleet erzeugt Wartungsaufträge aus dem Plan jeder Anlage und weist sie dem richtigen Team zu.',
        },
        {
          title: 'Vorausschauende Warnungen',
          description:
            'Messwerte über dem Normalwert lösen eine nachvollziehbare Warnung mit empfohlenem nächsten Schritt aus.',
        },
        {
          title: 'Vorlagen nach Branchenstandard',
          description:
            'Mit bewährten Checklisten für jeden Anlagentyp starten und an Ihre Standorte anpassen.',
        },
        {
          title: 'Kapazitätsplanung',
          description:
            'Termine auf Techniker und Dienstleister verteilen und anstehende Arbeit auf einen Blick sehen.',
        },
        {
          title: 'Compliance-Kalender',
          description:
            'Gesetzliche Prüfungen und Zertifikate mit Erinnerungen vor jedem Fälligkeitsdatum verfolgen.',
        },
      ],
    },
    details: [
      {
        title: 'Vom Plan zum abgenommenen Auftrag',
        description:
          'Jede vorbeugende Aufgabe enthält Checkliste, Anlagenhistorie und Dokumente, damit Techniker gut vorbereitet ankommen.',
        points: [
          'Checklisten und Arbeitsanweisungen an jeder Aufgabe',
          'Fotonachweise und Messwerte beim Abschluss erfasst',
          'Überfällige Aufgaben automatisch eskaliert',
        ],
      },
      {
        title: 'Nachvollziehbare Vorhersagen',
        description:
          'Das regelbasierte maschinelle Lernen von Fleet erklärt jede Empfehlung, damit Teams sicher handeln.',
        points: [
          'Anlagenrisiko aus Live- und Verlaufsdaten bewertet',
          'Jede Warnung mit der auslösenden Regel verknüpft',
          'Mit einem Klick von der Vorhersage zum Arbeitsauftrag',
        ],
      },
    ],
    useCases: {
      title: 'Vorbeugende Instandhaltung in der Praxis',
      description: 'So halten Immobilienteams kritische Systeme in Bestform.',
      items: [
        'Quartalsweiser Filterwechsel der Klimaanlagen in jedem Gebäude',
        'Jährliche Aufzugsprüfung mit Erinnerung 30 Tage vorher',
        'Monatliche Tests der Notbeleuchtung mit Fotos dokumentiert',
        'Vibration der Kältemaschine mit vorausschauenden Warnungen überwacht',
        'Brandschutztür-Prüfungen nach Etage und Treppenhaus geplant',
      ],
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
