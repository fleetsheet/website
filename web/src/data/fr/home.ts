import type { BadgeTone } from '@/components/ui/Badge.astro'

export type StatusItem = {
  title: string
  location?: string
  status: string
  tone: BadgeTone
}

export const meta = {
  title: 'Fleet | Données et intelligence unifiées pour l’immobilier',
  description:
    'Fleet est la plateforme de gestion immobilière d’entreprise conçue pour la stratégie, l’exploitation et la maintenance.',
}

export const hero = {
  announcement: {
    label: 'Nouveau',
    text: 'Des agents IA à base de règles pour les patrimoines multisites',
    href: '/#ai',
  },
  title: 'Données et intelligence unifiées pour l’immobilier',
  description:
    'Fleet est la plateforme de gestion immobilière d’entreprise conçue pour la stratégie, l’exploitation et la maintenance : chaque site, chaque actif et chaque bon de travail au même endroit.',
  primaryAction: { label: 'Demander une démo', href: '/contact' },
  secondaryAction: { label: 'Découvrir la plateforme', href: '/#platform' },
  highlights: [
    'iOS et Android',
    'Journaux d’audit intégrés',
    'Données cloisonnées par organisation',
  ],
}

export const showcase = {
  greeting: 'Bienvenue, Napon S.',
  scope: 'Patrimoine · 14 sites',
  filters: ['Toutes les régions', '30 derniers jours'],
  stats: [
    { label: 'Bons de travail ouverts', value: '128' },
    { label: 'SLA respectés', value: '96,4 %' },
    { label: 'Préventif à faire', value: '37' },
  ],
  workOrders: [
    {
      id: 'WO-2291',
      title: 'Alarme basse pression du groupe froid',
      location: 'Harbour Point · Local technique',
      status: 'En retard de 2 j',
      tone: 'overdue',
    },
    {
      id: 'WO-2304',
      title: 'Remplacement des filtres CVC',
      location: 'Tower B · Niveau 14',
      status: 'Échéance dans 4 h',
      tone: 'due',
    },
    {
      id: 'WO-2310',
      title: 'Inspection trimestrielle des portes coupe-feu',
      location: 'Northgate Mall · Escalier A',
      status: 'Planifié',
      tone: 'info',
    },
    {
      id: 'WO-2288',
      title: 'Réparation de la porte de quai',
      location: 'Westport DC · Quai 07',
      status: 'Terminé',
      tone: 'done',
    },
  ] satisfies (StatusItem & { id: string })[],
  prediction: {
    title: 'Prédiction Fleet',
    asset: 'AHU-07 · Tower B, N14',
    risk: 'Risque élevé',
    message:
      'Vibrations au-dessus de la référence depuis 9 jours. Planifiez une maintenance préventive sous 7 jours.',
    trend: [30, 34, 32, 38, 36, 42, 40, 48, 55, 60, 66, 72, 80, 92],
    alertFrom: 9,
    rule: 'Règle R-114 · traçable',
    action: 'Créer un bon de travail',
  },
  audit: [
    { who: 'Aisha K.', what: 'a clôturé WO-2288', when: '2 min' },
    { who: 'Automatisation', what: 'a transmis WO-2291 au prestataire', when: '1 h' },
    { who: 'Marco L.', what: 'a importé le permis feu', when: '3 h' },
  ],
}

export const unifiedModel = {
  eyebrow: 'Une source de vérité unique',
  title: 'Des outils dispersés à un modèle opérationnel unifié',
  description:
    'Tableurs, boîtes mail, disques partagés et portails prestataires détiennent chacun une partie de l’information. Fleet les réunit en un référentiel structuré, pour que chaque décision parte d’un contexte complet.',
  sources: [
    'Tableurs',
    'Échanges d’e-mails',
    'Disques partagés',
    'Portails prestataires',
    'Check-lists papier',
  ],
  outputs: ['Tableaux de bord en direct', 'Historique des actifs', 'Piste d’audit', 'Prédictions'],
}

export const platform = {
  eyebrow: 'La plateforme',
  title: 'Bien plus qu’une GMAO. Conçue pour l’immobilier multisite.',
  description:
    'Activez uniquement les modules dont votre équipe a besoin. Tous partagent le même modèle de données : sites, actifs, personnes et historique restent liés.',
  workOrders: {
    title: 'Bons de travail et SLA',
    description:
      'Planifiez les tâches préventives, suivez les réparations ponctuelles et confiez les interventions à vos équipes internes ou à vos prestataires.',
    items: [
      {
        initials: 'AK',
        title: 'Entretien annuel de la chaudière',
        status: 'Échéance dans 4 h',
        tone: 'due',
      },
      { initials: 'ML', title: 'Fuite d’eau, lot 3B', status: 'En retard de 2 j', tone: 'overdue' },
      { initials: 'JT', title: 'Test de l’éclairage de secours', status: 'Terminé', tone: 'done' },
    ] satisfies (StatusItem & { initials: string })[],
  },
  assets: {
    title: 'Gestion des actifs',
    description:
      'Des fiches numériques avec historique de maintenance, coûts, garanties et notices, rattachées aux bâtiments et aux pièces.',
    asset: {
      name: 'Groupe froid CH-02',
      location: 'Harbour Point · Local technique B2',
      status: 'En service',
      facts: [
        { label: 'Dernier entretien', value: '12 sept.' },
        { label: 'Garantie', value: 'mars 2028' },
        { label: 'Coût depuis janv.', value: '$4,210' },
      ],
    },
  },
  documents: {
    title: 'Gestion documentaire',
    description:
      'Notices, garanties, rapports d’inspection et permis : prêts pour l’audit et accessibles sur tous les sites.',
    items: [
      {
        title: 'Certificat sécurité incendie.pdf',
        location: 'Tower B · Permis',
        status: 'Expire dans 30 j',
        tone: 'due',
      },
      {
        title: 'Manuel E&M CH-02.pdf',
        location: 'Groupe froid CH-02 · Manuel',
        status: 'Associé',
        tone: 'info',
      },
      {
        title: 'Inspection ascenseurs T3.pdf',
        location: 'Ascenseurs centraux · Rapport',
        status: 'Vérifié',
        tone: 'done',
      },
    ] satisfies StatusItem[],
  },
  workflows: {
    title: 'Processus personnalisés',
    description:
      'Transformez automatiquement les demandes en actions. Les validations déclenchent bons de travail et notifications prestataires, sans relais manuel.',
    steps: [
      { kind: 'Déclencheur', text: 'Demande de remplacement d’équipement envoyée' },
      { kind: 'Si', text: 'Validée par le responsable de site' },
      { kind: 'Alors', text: 'Créer un bon de travail + prévenir le prestataire' },
    ],
  },
  auditLogs: {
    title: 'Journaux d’audit',
    description:
      'Chaque modification est horodatée et attribuée. Restez conforme sans courir après les justificatifs.',
    entries: [
      { when: '09:42', who: 'Aisha K.', what: 'a passé WO-2304 au statut En cours' },
      {
        when: '09:15',
        who: 'Automatisation',
        what: 'a attribué WO-2310 à l’équipe FM de Northgate',
      },
      { when: '08:58', who: 'Marco L.', what: 'a joint le rapport d’inspection à CH-02' },
    ],
  },
  mobile: {
    title: 'Le mobile pour le terrain',
    description:
      'Techniciens et occupants sur iOS et Android. Signalez des incidents avec photos, notes et actifs associés.',
    heading: 'Aujourd’hui · 4 tâches',
    task: {
      title: 'Inspection des portes coupe-feu',
      location: 'Niveau 3 · Escalier A',
      status: 'Échéance dans 2 h',
      tone: 'due',
    } satisfies StatusItem,
    actions: ['Démarrer', 'Ajouter une photo'],
  },
}

export const aiAgents = {
  eyebrow: 'Agents IA Fleet',
  title: 'Interrogez votre patrimoine',
  description:
    'L’agent IA de Fleet répond à vos questions en langage naturel à partir des données en direct de votre patrimoine, et construit le tableau de bord qui accompagne chaque réponse. Plus besoin de tableaux croisés ni de demandes de rapport.',
  points: [
    {
      title: 'Des réponses en langage naturel',
      description:
        'Interrogez-le sur les coûts, les SLA, les actifs ou les prestataires et obtenez des réponses tirées de vos données en direct, pas de l’export du mois dernier.',
    },
    {
      title: 'Des tableaux de bord à la volée',
      description:
        'Chaque réponse s’accompagne d’un graphique que vous pouvez affiner, partager ou épingler à un tableau de bord d’équipe.',
    },
    {
      title: 'Des réponses toujours traçables',
      description:
        'Les réponses citent les bons de travail et les actifs sur lesquels elles s’appuient, et s’exécutent dans un environnement isolé propre à chaque organisation.',
    },
  ],
  chat: {
    assistant: 'Assistant Fleet',
    context: 'Données en direct · 14 sites',
    question:
      'Quels sites ont connu le plus d’arrêts CVC le trimestre dernier, et combien cela nous a-t-il coûté ?',
    answer: {
      lead: 'Harbour Point',
      body: 'arrive en tête avec 46 heures d’arrêt CVC, principalement dues au groupe froid CH-02. Sur l’ensemble des sites, les arrêts CVC ont coûté',
      cost: '$38,400',
      tail: 'au T3, soit 18 % de plus qu’au T2.',
    },
    chartTitle: 'Arrêts CVC par site · T3',
    chartBadge: 'Tableau de bord généré',
    stats: [
      { label: 'Total heures', value: '112' },
      { label: 'Coût', value: '$38.4k' },
      { label: 'vs T2', value: '+18 %', trend: 'up' },
    ],
    rows: [
      { site: 'Harbour Point', hours: 46 },
      { site: 'Tower B', hours: 28 },
      { site: 'Northgate Mall', hours: 19 },
      { site: 'Bayview Hotel', hours: 12 },
      { site: 'Westport DC', hours: 7 },
    ],
    sources: 'Sources : 86 bons de travail · 14 actifs',
    action: 'Épingler au tableau de bord',
    followUps: [
      'Détail par actif',
      'Comparer à l’an dernier',
      'Quels prestataires sont intervenus ?',
    ],
    placeholder: 'Posez une question sur un site, un actif ou un prestataire…',
  },
}

export const solutions = {
  eyebrow: 'Solutions',
  title: 'Une plateforme, adaptée à votre secteur',
  sectors: [
    {
      label: 'Bureaux',
      title: 'Immobilier de bureaux',
      site: 'Harbour Point · 22 étages',
      description:
        'Assurez le bon fonctionnement de vos tours multilocataires grâce aux plans préventifs, à la coordination des prestataires et aux tableaux de bord SLA à chaque étage.',
      points: [
        'Demandes des occupants orientées par étage et par corps de métier',
        'Performance des prestataires suivie par contrat',
        'Suivi budgétaire par bâtiment',
      ],
      tasks: [
        {
          title: 'Remplacement des filtres CVC',
          location: 'Niveau 14 · AHU-07',
          status: 'Échéance dans 4 h',
          tone: 'due',
        },
        {
          title: 'Certification annuelle des ascenseurs',
          location: 'Ascenseurs centraux L1–L3',
          status: 'Planifié',
          tone: 'info',
        },
        {
          title: 'Panne d’éclairage du hall',
          location: 'Rez-de-chaussée',
          status: 'Terminé',
          tone: 'done',
        },
      ],
    },
    {
      label: 'Commerce',
      title: 'Commerce',
      site: 'Northgate Mall · 180 lots',
      description:
        'Gardez vitrines et parties communes impeccables grâce aux tâches planifiées, au suivi des SLA et aux tableaux de bord en temps réel, avec des processus sur mesure.',
      points: [
        'Contrôles des parties communes planifiés',
        'Travaux hors horaires coordonnés avec les enseignes',
        'Suivi des SLA par prestataire',
      ],
      tasks: [
        {
          title: 'Nettoyage complet de l’escalator',
          location: 'Atrium · E2',
          status: 'Échéance dans 2 h',
          tone: 'due',
        },
        {
          title: 'Bac à graisse de l’espace restauration',
          location: 'Niveau 2',
          status: 'En retard de 1 j',
          tone: 'overdue',
        },
        {
          title: 'Audit de l’éclairage du parking',
          location: 'P1–P3',
          status: 'Terminé',
          tone: 'done',
        },
      ],
    },
    {
      label: 'Hôtellerie',
      title: 'Hôtellerie',
      site: 'Bayview Hotel · 312 chambres',
      description:
        'Gérez contrôles préventifs, registres prestataires et obligations de conformité, avec une piste d’audit pour la sécurité des clients et la sérénité réglementaire.',
      points: [
        'Disponibilité des chambres liée à la maintenance',
        'Contrôles incendie enregistrés automatiquement',
        'Incidents affectant les clients traités en priorité',
      ],
      tasks: [
        {
          title: 'Chambre 1204 : la clim ne refroidit pas',
          location: 'Étage 12',
          status: 'Échéance dans 1 h',
          tone: 'due',
        },
        {
          title: 'Registre des produits piscine',
          location: 'Terrasse niveau 5',
          status: 'Terminé',
          tone: 'done',
        },
        {
          title: 'Inspection de la hotte de cuisine',
          location: 'Cuisine principale',
          status: 'Planifié',
          tone: 'info',
        },
      ],
    },
    {
      label: 'Logistique',
      title: 'Logistique',
      site: 'Westport DC · 14 quais',
      description:
        'Supprimez les arrêts sur les quais et les équipements grâce à l’état des actifs en temps réel, directement relié à la planification des réparations.',
      points: [
        'Disponibilité des quais et portes par quai',
        'Historique d’entretien des chariots et engins de manutention',
        'Coût des arrêts par actif',
      ],
      tasks: [
        {
          title: 'Fuite hydraulique du niveleur de quai',
          location: 'Quai 07',
          status: 'En retard de 3 h',
          tone: 'overdue',
        },
        {
          title: 'Entretien des portes rapides',
          location: 'Quais 1–6',
          status: 'Échéance dans 6 h',
          tone: 'due',
        },
        {
          title: 'Test de débit des sprinklers',
          location: 'Entrepôt A',
          status: 'Terminé',
          tone: 'done',
        },
      ],
    },
    {
      label: 'Résidentiel',
      title: 'Résidentiel',
      site: 'Parkside Residences · 4 bâtiments',
      description:
        'Conciliez entretien des parties communes, rotation des logements et demandes des résidents, pour des communautés sûres, satisfaites et conformes.',
      points: [
        'Demandes des résidents depuis le mobile',
        'Check-lists de remise en location',
        'Registres de conformité par bâtiment',
      ],
      tasks: [
        {
          title: 'Lot 3B : robinet qui fuit',
          location: 'Bâtiment C',
          status: 'Échéance dans 5 h',
          tone: 'due',
        },
        {
          title: 'Contrôle de la salle de sport',
          location: 'Club-house',
          status: 'Terminé',
          tone: 'done',
        },
        {
          title: 'Remise en location lot 7A',
          location: 'Bâtiment A',
          status: 'Planifié',
          tone: 'info',
        },
      ],
    },
    {
      label: 'Flottes de véhicules',
      title: 'Gestion de flotte',
      site: 'Dépôt Metro · 64 véhicules',
      description:
        'Maintenance, réparations, utilisation et sinistres dans un seul tableau de bord, avec des données financières et opérationnelles synchronisées.',
      points: [
        'Kilométrage, utilisation et heures d’immobilisation',
        'Sinistres déclarés sur le terrain avec photos',
        'Entretien préventif au kilométrage',
      ],
      tasks: [
        {
          title: 'Freins du fourgon V-218',
          location: 'Dépôt, baie 2',
          status: 'Échéance dans 3 h',
          tone: 'due',
        },
        {
          title: 'Sinistre n° 4471',
          location: 'Associé : V-102',
          status: 'En examen',
          tone: 'info',
        },
        {
          title: 'Permutation des pneus · 6 véhicules',
          location: 'Dépôt',
          status: 'Terminé',
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
  eyebrow: 'Conseil Fleet',
  title: 'Laissez-nous faire le gros du travail',
  description:
    'Chaque phase est liée à un impact opérationnel, pour que les dirigeants voient le déploiement produire des résultats mesurables.',
  action: { label: 'Parler à un consultant →', href: '/contact' },
  phases: [
    {
      title: 'Évaluer',
      description:
        'Définir vos besoins et planifier le passage d’outils dispersés à une plateforme unique.',
    },
    {
      title: 'Modéliser l’impact',
      description:
        'Chiffrer la productivité, les arrêts, la maintenance préventive et la performance des prestataires.',
    },
    {
      title: 'Piloter',
      description:
        'Valider processus et indicateurs avec les responsables et les équipes terrain avant le déploiement complet.',
    },
    {
      title: 'Déployer',
      description:
        'Des processus standardisés et une gouvernance des actifs dans chaque bâtiment et chaque région.',
    },
  ],
}

export const demoCta = {
  title: 'Tout votre patrimoine au même endroit',
  description:
    'Cinq immeubles de bureaux ou cinquante campus : profitez d’une présentation construite autour de vos sites et de vos actifs.',
  primaryAction: { label: 'Demander une démo', href: '/contact' },
}
