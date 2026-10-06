import type { NavLink } from '@/config'
import type { StatusItem } from '@/data/en/home'
import type {
  AnalyticsPageContent,
  IntegrationCategory,
  IntegrationIcon,
  IntegrationItem,
  OverviewModule,
  OverviewVisual,
  PlatformEntry,
  PlatformPageContent,
  PreventiveIcon,
  ProductPageContent,
  RunnerAiIcon,
} from '@/data/en/platform'
import type { PlatformDetailId, PlatformGroup, TemplatePageId } from '@/platform'

export const menu = {
  label: 'Plateforme',
  groups: {
    platform: 'Plateforme RunFleet',
    features: 'Fonctionnalités clés',
  } satisfies Record<PlatformGroup, string>,
  promo: {
    title: 'Découvrez Fleet en action',
    description: 'Une visite guidée de la plateforme, adaptée à votre portefeuille.',
    action: { label: 'Réserver une démo', href: '/contact' } satisfies NavLink,
  },
}

export const pageActions = {
  primary: { label: 'Réserver une démo', href: '/contact' },
  secondary: { label: 'Explorer la plateforme', href: '/platform' },
} satisfies Record<string, NavLink>

export const sectionLabels = {
  features: 'Fonctionnalités clés',
  useCases: 'Cas d’usage',
  related: 'Pour aller plus loin',
  relatedTitle: 'Découvrez la plateforme Fleet',
  learnMore: 'En savoir plus',
}

export const cta = {
  title: 'Découvrez Fleet en action',
  description:
    'Réservez une présentation et voyez comment Fleet réunit chaque site, chaque équipement et chaque bon de travail au même endroit.',
  primaryAction: { label: 'Réserver une démo', href: '/contact' },
  secondaryAction: { label: 'Parler à notre équipe', href: '/contact' },
}

export const pages: {
  overview: PlatformEntry
  webAndMobile: PlatformEntry
  integrations: PlatformEntry
  runnerAi: PlatformEntry
  fleetMail: PlatformEntry
  workflowBuilder: PlatformEntry
  preventiveMaintenance: PlatformEntry
  reactiveMaintenance: PlatformEntry
  analyticsReporting: PlatformEntry
  assetManagement: PlatformEntry
  documentManagement: PlatformEntry
} & Record<TemplatePageId, PlatformPageContent> = {
  overview: {
    label: 'Vue d’ensemble',
    summary:
      'Une seule plateforme pour la maintenance, les équipements et l’exploitation de chaque site.',
    meta: {
      title: 'Vue d’ensemble de la plateforme | Fleet',
      description:
        'Fleet est la plateforme tout-en-un de maintenance et d’exploitation pour les équipes immobilières, facility et opérations qui gèrent des équipements sur plusieurs sites.',
    },
  },
  webAndMobile: {
    label: 'Web et mobile',
    summary: 'Pilotez l’exploitation depuis le bureau ou directement en local technique.',
    meta: {
      title: 'Web et mobile | Fleet',
      description:
        'Fleet fonctionne sur ordinateur, tablette et smartphone, avec iOS et Android, pour que techniciens et responsables partagent les mêmes données en direct, où qu’ils soient.',
    },
  },
  integrations: {
    label: '20+ intégrations',
    summary: 'Connectez Fleet à vos outils financiers, ERP, contrôle d’accès et GTB.',
    meta: {
      title: 'Intégrations | Fleet',
      description:
        'Fleet se connecte à vos outils de comptabilité et fournisseurs/clients, ERP, contrôle d’accès, portails locataires et GTB grâce à plus de 20 intégrations et une API REST.',
    },
  },
  runnerAi: {
    label: 'RunnerAI',
    summary:
      'Une IA qui récupère les données, crée des tâches, modifie les workflows et construit des tableaux de bord.',
    meta: {
      title: 'RunnerAI | Fleet',
      description:
        'RunnerAI est l’IA sécurisée et fondée sur des règles de Fleet pour l’immobilier et le facility management : workflows créés par texte, tableaux de bord à la demande et exploitation automatisée.',
    },
  },
  fleetMail: {
    label: 'Fleet Mail',
    summary: 'Transformez les e-mails en bons de travail et informez chacun par e-mail.',
    meta: {
      title: 'Fleet Mail | Fleet',
      description:
        'Fleet Mail transforme les e-mails des locataires et prestataires en bons de travail suivis et envoie alertes, validations et rappels par e-mail.',
    },
  },
  workflowBuilder: {
    label: 'Fleet Workflow Builder',
    summary: 'Concevez validations, routage et escalades à l’image de votre organisation.',
    meta: {
      title: 'Fleet Workflow Builder | Fleet',
      description:
        'Adaptez votre maintenance à votre organisation, vos circuits de validation, vos règles prestataires et vos seuils de coûts avec l’éditeur visuel de workflows de Fleet.',
    },
  },
  preventiveMaintenance: {
    label: 'Maintenance préventive et prédictive',
    summary: 'Planifiez les tâches récurrentes et agissez dès les premiers signaux.',
    meta: {
      title: 'Maintenance préventive et prédictive | Fleet',
      description:
        'Planifiez la maintenance préventive de chaque équipement et utilisez des prédictions fondées sur des règles pour agir avant la panne, sur tous les sites de votre portefeuille.',
    },
  },
  reactiveMaintenance: {
    label: 'Maintenance corrective',
    summary: 'Enregistrez, affectez et résolvez rapidement les pannes imprévues.',
    meta: {
      title: 'Maintenance corrective | Fleet',
      description:
        'Suivez les réparations imprévues de la demande à la résolution, avec mises à jour mobiles, routage intelligent et suivi des SLA en temps réel sur chaque site.',
    },
  },
  analyticsReporting: {
    label: 'Analyses et reporting',
    summary: 'Tableaux de bord en direct et rapports exportables à chaque niveau.',
    meta: {
      title: 'Analyses et reporting | Fleet',
      description:
        'Décidez sur la base des données avec des tableaux de bord en direct, des KPI sur mesure et des rapports exportables sur interventions, délais, conformité et coûts.',
    },
  },
  assetManagement: {
    label: 'Gestion des équipements',
    summary: 'Un registre en direct de chaque équipement, avec historique, coûts et documents.',
    meta: {
      title: 'Gestion des équipements | Fleet',
      description:
        'Créez un registre numérique en direct de tous les équipements de vos sites, avec historique de maintenance, coûts, garanties et documents au même endroit.',
    },
  },
  documentManagement: {
    label: 'Gestion documentaire',
    summary: 'Chaque notice, permis et certificat, organisé et prêt pour l’audit.',
    meta: {
      title: 'Gestion documentaire | Fleet',
      description:
        'Stockez, organisez et retrouvez notices, garanties, permis et rapports d’inspection au même endroit, liés aux équipements, interventions et sites concernés.',
    },
  },
  auditTracking: {
    label: 'Suivi d’audit et inspections',
    summary: 'Journaux horodatés et inspections pour des sites toujours prêts pour l’audit.',
    meta: {
      title: 'Suivi d’audit et inspections | Fleet',
      description:
        'Conservez des journaux horodatés de chaque action et réalisez des inspections numériques pour que chaque site soit prêt pour les contrôles santé-sécurité et les audits de conformité.',
    },
    eyebrow: 'Suivi d’audit et inspections',
    title: 'Conforme. Responsable.',
    description:
      'Fleet enregistre ce qui a été fait, quand et par qui, et numérise vos inspections, pour que chaque site soit prêt pour tout audit interne ou externe.',
    highlights: ['Journaux horodatés', 'Inspections numériques', 'Rapports d’audit exportables'],
    features: {
      title: 'Les fonctionnalités clés du suivi d’audit',
      description:
        'La préparation aux audits intégrée à votre exploitation quotidienne, en arrière-plan.',
      items: [
        {
          title: 'Journaux d’activité horodatés',
          description:
            'Chaque action est enregistrée automatiquement, de la création à la clôture en passant par les commentaires.',
        },
        {
          title: 'Responsabilité claire',
          description:
            'Suivez les actions par utilisateur ou rôle, de la clôture par un technicien à la validation d’un coût.',
        },
        {
          title: 'Inspections numériques',
          description:
            'Réalisez les check-lists d’inspection sur mobile avec photos, relevés et signatures.',
        },
        {
          title: 'Journaux par intervention et équipement',
          description:
            'Consultez l’historique complet, les coûts et les documents de chaque équipement ou intervention.',
        },
        {
          title: 'Validations configurables',
          description:
            'Définissez des points de contrôle obligatoires pour une conformité identique sur chaque site.',
        },
        {
          title: 'Rapports d’audit exportables',
          description:
            'Générez des journaux détaillés pour toute période ou type d’équipement en quelques clics.',
        },
      ],
    },
    details: [
      {
        title: 'Prêt pour l’audit chaque jour',
        description:
          'Fleet constitue vos preuves au fil du travail, pour aborder la semaine d’inspection sereinement.',
        points: [
          'Certificats et formulaires de conformité rattachés à chaque dossier',
          'Résultats d’inspection liés aux équipements et aux sites',
          'Traçabilité numérique complète lors des passations d’actifs',
        ],
      },
      {
        title: 'Une maîtrise claire des responsabilités',
        description:
          'Les accès par rôle protègent les champs critiques et offrent une visibilité complète aux équipes de contrôle.',
        points: [
          'Droits de modification réservés au personnel autorisé',
          'Accès en lecture pour la direction et les auditeurs',
          'Journaux de modifications avec notes et historique des versions',
        ],
      },
    ],
    useCases: {
      title: 'Le suivi d’audit en pratique',
      description:
        'D’un site à cent, Fleet démontre que votre équipe réalise le bon travail, avec constance.',
      items: [
        'Prouver que les inspections de routine ont été réalisées à temps sur tous les sites',
        'Présenter l’historique de maintenance incendie aux autorités',
        'Voir qui a validé une réparation coûteuse',
        'Fournir une traçabilité numérique lors d’une passation d’actif',
        'Exporter les journaux pour la revue annuelle de conformité',
      ],
    },
  },
}

export const overview = {
  hero: {
    eyebrow: 'La plateforme Fleet',
    title: 'La plateforme de maintenance tout-en-un pour l’immobilier',
    description:
      'Gérez interventions, équipements, prestataires, documents et conformité sur chaque site, dans une plateforme cloud conçue pour les équipes immobilières, facility et opérations.',
    primaryAction: { label: 'Réserver une démo', href: '/contact' },
    secondaryAction: { label: 'Parler à notre équipe', href: '/contact' },
  },
  quote: {
    text: 'Fleet a réduit notre maintenance corrective de près de 40 %. Nos techniciens, nos registres d’équipements et nos interventions sont enfin réunis au même endroit.',
    author: 'Responsable exploitation, projet à usage mixte',
  },
  learnMore: 'En savoir plus',
  modules: [
    {
      id: 'reactiveMaintenance',
      tag: 'Maintenance corrective',
      title: 'Des réparations plus rapides, des locataires satisfaits',
      description:
        'Enregistrez chaque incident avec photos et emplacement, confiez-le à la bonne équipe et suivez-le jusqu’à la clôture selon vos SLA.',
      points: [
        'Interventions confiées aux équipes internes ou prestataires selon le site et le métier',
        'Suivi des SLA en direct avec alertes avant échéance',
        'Mises à jour et preuves photo depuis le terrain',
      ],
      visual: {
        kind: 'jobs',
        title: 'Bons de travail',
        items: [
          {
            title: 'Fuite d’eau, logement 3B',
            location: 'Bayview Residences',
            status: 'En retard de 2 j',
            tone: 'overdue',
          },
          {
            title: 'Réparation porte de quai',
            location: 'Westport DC · Quai 07',
            status: 'Dans 4 h',
            tone: 'due',
          },
          {
            title: 'Réinitialisation alarme ascenseur',
            location: 'Tower B · Ascenseurs',
            status: 'En cours',
            tone: 'info',
          },
          {
            title: 'Panne d’éclairage, niveau 2',
            location: 'Northgate Mall',
            status: 'Terminé',
            tone: 'done',
          },
        ],
      },
    },
    {
      id: 'assetManagement',
      tag: 'Gestion des équipements',
      title: 'Chaque équipement à portée de main',
      description:
        'Un registre numérique en direct de tous les équipements du portefeuille, avec historique, coûts, garanties et documents en un geste.',
      points: [
        'Fiches avec marque, modèle, numéro de série et garantie',
        'Historique et coûts des réparations pour chaque équipement',
        'Données de cycle de vie pour planifier remplacements et investissements',
      ],
      visual: {
        kind: 'asset',
        title: 'Fiche équipement',
        name: 'Groupe froid CH-02',
        location: 'Harbour Point · Local technique B2',
        status: 'En service',
        facts: [
          { label: 'Dernier entretien', value: '12 sept.' },
          { label: 'Garantie', value: 'Mars 2028' },
          { label: 'Coût annuel', value: '4 210 $' },
          { label: 'Interventions ouvertes', value: '1' },
        ],
      },
    },
    {
      id: 'analyticsReporting',
      tag: 'Analyses et reporting',
      title: 'Des données aux décisions',
      description:
        'Tableaux de bord en direct et rapports exportables montrent où agir, d’un équipement au portefeuille entier.',
      points: [
        'Volume, délais, conformité et coûts en temps réel',
        'Analyse par bâtiment, équipement, prestataire ou équipe',
        'Exports prêts pour les audits et les comités',
      ],
      visual: {
        kind: 'chart',
        title: 'Dépenses de maintenance par site',
        stats: [
          { label: 'SLA respectés', value: '96,4 %' },
          { label: 'Dépenses annuelles', value: '184 k$' },
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
      title: 'Avancez ensemble avec vos équipes et prestataires',
      description:
        'Concevez validations, routage et escalades à l’image de votre organisation, pour que chaque tâche atteigne la bonne personne au bon moment.',
      points: [
        'Routage conditionnel par site, type d’équipement ou priorité',
        'Validations à plusieurs niveaux selon le coût et l’urgence',
        'Accès immédiat des prestataires via un simple lien',
      ],
      visual: {
        kind: 'steps',
        title: 'Workflow',
        steps: [
          { kind: 'Déclencheur', text: 'Devis de réparation supérieur à 5 000 $' },
          { kind: 'Si', text: 'Validé par le responsable régional' },
          { kind: 'Alors', text: 'Créer une intervention + prévenir le prestataire' },
        ],
      },
    },
    {
      id: 'auditTracking',
      tag: 'Suivi d’audit et inspections',
      title: 'Prêt pour chaque audit',
      description:
        'Journaux horodatés et inspections numériques gardent chaque site conforme et chaque action traçable.',
      points: [
        'Chaque action enregistrée automatiquement par utilisateur et rôle',
        'Check-lists d’inspection numériques avec photos et signatures',
        'Journaux exportables pour toute période ou type d’équipement',
      ],
      visual: {
        kind: 'log',
        title: 'Journal d’audit',
        entries: [
          {
            when: '09:42',
            who: 'Aisha K.',
            what: 'a terminé l’inspection de la porte coupe-feu, escalier A',
          },
          { when: '09:15', who: 'Workflow', what: 'a demandé la validation de WO-2291' },
          { when: '08:58', who: 'Marco L.', what: 'a déposé le certificat ascenseur de Tower B' },
        ],
      },
    },
    {
      id: 'preventiveMaintenance',
      tag: 'Maintenance préventive et prédictive',
      title: 'Résolvez dès aujourd’hui les problèmes de demain',
      description:
        'Plans récurrents et prédictions fondées sur des règles maintiennent les installations en service et aident votre équipe à agir tôt.',
      points: [
        'Interventions préventives automatiques pour CVC, plomberie, ascenseurs et incendie',
        'Alertes prédictives liées à la règle qui les a déclenchées',
        'Calendrier de conformité avec rappels avant chaque échéance',
      ],
      visual: {
        kind: 'jobs',
        title: 'Interventions planifiées',
        items: [
          {
            title: 'Remplacement filtres CVC',
            location: 'Tower B · AHU-07',
            status: 'Dans 4 h',
            tone: 'due',
          },
          {
            title: 'Contrôle annuel ascenseurs',
            location: 'Ascenseurs L1–L3',
            status: 'Planifié',
            tone: 'info',
          },
          {
            title: 'Test éclairage de secours',
            location: 'Northgate Mall',
            status: 'Terminé',
            tone: 'done',
          },
        ],
      },
    },
    {
      id: 'documentManagement',
      tag: 'Gestion documentaire',
      title: 'Chaque fichier là où vous en avez besoin',
      description:
        'Notices, permis, certificats et contrats restent organisés, liés au travail qu’ils accompagnent et prêts pour l’inspection.',
      points: [
        'Documents rattachés aux équipements, interventions, sites et prestataires',
        'Gestion des versions avec historique complet',
        'Rappels avant l’expiration des permis et contrats',
      ],
      visual: {
        kind: 'files',
        title: 'Documents',
        items: [
          {
            title: 'Certificat sécurité incendie.pdf',
            location: 'Tower B · Permis',
            status: 'Expire dans 30 j',
            tone: 'due',
          },
          {
            title: 'Notice CH-02.pdf',
            location: 'Groupe froid CH-02 · Notice',
            status: 'Lié',
            tone: 'info',
          },
          {
            title: 'Inspection ascenseurs T3.pdf',
            location: 'Ascenseurs · Rapport',
            status: 'Vérifié',
            tone: 'done',
          },
        ],
      },
    },
  ] satisfies OverviewModule[],
  extend: {
    title: 'Étendez Fleet à votre façon',
    description:
      'Connectez vos outils existants et mettez l’IA et l’e-mail au service de toute votre exploitation.',
    items: [
      {
        id: 'integrations',
        title: '20+ intégrations',
        description:
          'Connectez finance, ERP, contrôle d’accès, portails locataires et systèmes du bâtiment via des intégrations prêtes et une API REST.',
        action: 'Voir les intégrations',
      },
      {
        id: 'runnerAi',
        title: 'RunnerAI',
        description:
          'Créez workflows et tableaux de bord en langage naturel, sur des serveurs sécurisés et cloisonnés.',
        action: 'Découvrir RunnerAI',
      },
      {
        id: 'fleetMail',
        title: 'Fleet Mail',
        description:
          'Transformez les e-mails reçus en bons de travail suivis et informez équipes et prestataires par e-mail.',
        action: 'Explorer Fleet Mail',
      },
    ] satisfies { id: PlatformDetailId; title: string; description: string; action: string }[],
  },
  audiences: {
    eyebrow: 'Web et mobile',
    title: 'Une plateforme pour tous',
    description:
      'Fleet fonctionne sur ordinateur, tablette et smartphone, avec des applications iOS et Android, et donne à chacun la bonne vue sur les mêmes données en direct.',
    action: { label: 'Découvrir le web et mobile', href: '/platform/web-and-mobile' },
    items: [
      {
        title: 'Pour les responsables',
        description:
          'Planifiez, validez les coûts et suivez chaque site sur des tableaux de bord en direct.',
        screen: 'Portefeuille · 14 sites',
        tasks: [
          {
            title: 'Valider un devis',
            location: 'Harbour Point',
            status: 'Aujourd’hui',
            tone: 'due',
          },
          {
            title: 'Rapport SLA, septembre',
            location: 'Toutes régions',
            status: 'Prêt',
            tone: 'done',
          },
        ],
      },
      {
        title: 'Pour les équipes terrain',
        description:
          'Démarrez, mettez à jour et clôturez les interventions avec photos, check-lists et signatures.',
        screen: 'Aujourd’hui · 4 tâches',
        tasks: [
          {
            title: 'Inspection porte coupe-feu',
            location: 'Niveau 3 · Escalier A',
            status: 'Dans 2 h',
            tone: 'due',
          },
          {
            title: 'Entretien annuel chaudière',
            location: 'Local technique B2',
            status: 'Planifié',
            tone: 'info',
          },
        ],
      },
      {
        title: 'Pour les locataires et prestataires',
        description:
          'Envoyez des demandes avec photos, recevez des nouvelles et consultez vos interventions via un simple lien.',
        screen: 'Mes demandes',
        tasks: [
          {
            title: 'Climatisation trop chaude',
            location: 'Logement 1204',
            status: 'Affecté',
            tone: 'info',
          },
          {
            title: 'Fuite robinet cuisine',
            location: 'Logement 1204',
            status: 'Résolu',
            tone: 'done',
          },
        ],
      },
    ] satisfies { title: string; description: string; screen: string; tasks: StatusItem[] }[],
  },
  why: {
    eyebrow: 'Pourquoi Fleet',
    title: 'Conçu pour l’immobilier, porté par une équipe',
    description:
      'Fleet est pensé pour les équipes immobilières multisites, avec un déploiement rapide, une tarification transparente à l’usage et un support qui connaît votre région.',
    stats: [
      { value: 'Jusqu’à 40 %', label: 'de maintenance corrective en moins' },
      { value: 'Moins de 7 jours', label: 'pour embarquer votre équipe' },
      { value: '99,99 %', label: 'de disponibilité garantie par SLA' },
    ],
    points: [
      {
        title: 'Pensé pour le multisite',
        description: 'Règles, rapports et droits définis par site, région ou portefeuille.',
      },
      {
        title: 'Sécurisé dès la conception',
        description: 'Accès par rôle, stockage chiffré et pistes d’audit complètes.',
      },
      {
        title: 'Support réactif et local',
        description:
          'Échangez avec notre équipe par chat, avec une réponse en moins d’une heure pour la plupart des demandes.',
      },
    ],
  },
  industries: {
    eyebrow: 'Secteurs',
    title: 'Une solution pour chaque type d’actif',
    items: [
      'Centres commerciaux et retail',
      'Hôtellerie et restauration',
      'Transport maritime et logistique',
      'Résidences',
      'Bureaux',
      'Projets à usage mixte',
      'Écoles et campus',
      'Flottes de véhicules',
    ],
  },
}

export const webMobile = {
  hero: {
    eyebrow: 'Web et mobile',
    title: 'Votre exploitation sur tous les écrans',
    description:
      'Fleet fonctionne dans le navigateur et sur iOS et Android : les responsables planifient depuis leur bureau, les techniciens mettent à jour les interventions en temps réel sur le terrain.',
    primaryAction: { label: 'Réserver une démo', href: '/contact' },
    highlights: ['iOS et Android', 'Dans tout navigateur', 'Synchronisation en temps réel'],
  },
  devices: {
    url: 'app.runfleet.com',
    greeting: 'Bienvenue, John S.',
    scope: 'Portefeuille · 14 sites',
    stats: [
      { label: 'Interventions ouvertes', value: '128' },
      { label: 'SLA respectés', value: '96,4 %' },
      { label: 'Préventif à venir', value: '37' },
    ],
    listTitle: 'Bons de travail',
    items: [
      {
        title: 'Alarme basse pression groupe froid',
        location: 'Harbour Point · Local technique',
        status: 'En retard de 2 j',
        tone: 'overdue',
      },
      {
        title: 'Remplacement filtres CVC',
        location: 'Tower B · Niveau 14',
        status: 'Dans 4 h',
        tone: 'due',
      },
      {
        title: 'Réparation porte de quai',
        location: 'Westport DC · Quai 07',
        status: 'Terminé',
        tone: 'done',
      },
    ] satisfies StatusItem[],
    phoneTitle: 'Aujourd’hui · 4 tâches',
    phoneItems: [
      {
        title: 'Inspection porte coupe-feu',
        location: 'Niveau 3 · Escalier A',
        status: 'Dans 2 h',
        tone: 'due',
      },
      {
        title: 'Entretien annuel chaudière',
        location: 'Local technique B2',
        status: 'Planifié',
        tone: 'info',
      },
    ] satisfies StatusItem[],
    phoneActions: ['Démarrer', 'Ajouter une photo'],
  },
  audiences: {
    eyebrow: 'Une plateforme pour tous',
    title: 'Simplifiez votre exploitation de maintenance',
    description:
      'Fleet relie chaque acteur de votre exploitation, avec des vues web et mobiles adaptées aux responsables, aux équipes terrain, aux locataires et aux prestataires.',
  },
  rows: [
    {
      tag: 'Pilotage',
      title: 'Une visibilité complète sur tous les écrans',
      description:
        'Suivez chaque site, équipe et prestataire depuis votre bureau ou votre téléphone, avec des chiffres en direct mis à jour à chaque changement.',
      points: [
        'Tableaux de bord en direct sur les volumes, SLA et coûts',
        'Validations et alertes où que vous soyez',
        'Les mêmes données sur ordinateur, tablette et smartphone',
      ],
      visual: {
        kind: 'chart',
        title: 'Le portefeuille en un coup d’œil',
        stats: [
          { label: 'SLA respectés', value: '96,4 %' },
          { label: 'Interventions ouvertes', value: '128' },
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
      tag: 'Équipements sur site',
      title: 'Chaque équipement à un scan près',
      description:
        'Scannez ou recherchez un équipement pour ouvrir notices, historique et interventions en quelques secondes, là où le travail se fait.',
      points: [
        'Fiches, notices et historique disponibles sur place',
        'Inspections enregistrées avec photos et relevés',
        'Historique mis à jour instantanément pour toute l’équipe',
      ],
      visual: {
        kind: 'asset',
        title: 'Équipement scanné',
        name: 'Groupe froid CH-02',
        location: 'Harbour Point · Local technique B2',
        status: 'En service',
        facts: [
          { label: 'Dernier entretien', value: '12 sept.' },
          { label: 'Garantie', value: 'Mars 2028' },
          { label: 'Notice', value: 'Notice CH-02.pdf' },
          { label: 'Interventions ouvertes', value: '1' },
        ],
      },
    },
    {
      tag: 'Communication',
      title: 'Une communication claire avec équipes et locataires',
      description:
        'Les demandes arrivent avec photos et emplacement, et chaque personne concernée suit l’avancement et les réponses sur la même intervention.',
      points: [
        'Demandes des locataires avec photos depuis tout appareil',
        'Mises à jour et réponses conservées dans l’historique',
        'Notifications à chaque affectation et clôture',
      ],
      visual: {
        kind: 'chat',
        title: 'Demande · Logement 1204',
        request: {
          title: 'Climatisation trop chaude',
          location: 'Bayview Residences · Logement 1204',
          status: 'Affecté',
          tone: 'info',
        },
        messages: [
          {
            from: 'Locataire',
            text: 'L’appareil du salon souffle de l’air chaud depuis ce matin.',
            time: '09:12',
            own: false,
          },
          {
            from: 'Aisha K.',
            text: 'Merci pour la photo. Je passe à 11 h pour vérifier l’appareil.',
            time: '09:20',
            own: true,
          },
          { from: 'Locataire', text: 'Parfait, merci.', time: '09:21', own: false },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  field: {
    eyebrow: 'Conçu pour le terrain',
    title: 'Prêt pour les sous-sols, locaux techniques et sites isolés',
    description:
      'Fleet reste rapide et fluide en faible réseau : les techniciens mettent à jour les interventions, ajoutent des photos et clôturent le travail où qu’ils soient.',
  },
  stories: {
    eyebrow: 'Témoignages clients',
    title: 'La parole aux équipes immobilières',
    items: [
      {
        quote:
          'Fleet a réduit notre maintenance corrective de près de 40 %. Nos techniciens, nos registres d’équipements et nos interventions sont enfin réunis au même endroit.',
        author: 'Responsable exploitation',
        company: 'Projet à usage mixte',
      },
      {
        quote:
          'Les autres plateformes nous semblaient trop complexes ou trop génériques. Fleet nous a apporté une solution sur mesure avec un support plus rapide.',
        author: 'Directeur de la maintenance',
        company: 'Plateforme logistique',
      },
    ],
  },
}

export const integrationsPage = {
  hero: {
    eyebrow: 'Intégrations',
    title: 'Connectez Fleet aux outils que vous utilisez déjà',
    description:
      'Fleet s’intègre à votre environnement avec plus de 20 intégrations et une API REST ouverte, pour que vos systèmes financiers, techniques et locataires partagent les mêmes données en direct.',
    primaryAction: { label: 'Réserver une démo', href: '/contact' },
    highlights: ['20+ intégrations', 'API REST ouverte', 'Mise en place accompagnée'],
  },
  featured: {
    eyebrow: 'À la une',
    title: 'Intégrations phares',
    items: [
      {
        icon: 'accounting',
        title: 'Comptabilité, fournisseurs et clients',
        description:
          'Les coûts et factures validés alimentent vos systèmes financiers, pour des budgets exacts du premier devis au paiement.',
      },
      {
        icon: 'bms',
        title: 'Gestion technique du bâtiment',
        description:
          'Les alarmes et mesures de la GTB créent automatiquement des bons de travail, pour que la bonne équipe agisse au bon moment.',
      },
      {
        icon: 'api',
        title: 'API REST',
        description:
          'Connectez tout système grâce à une API REST documentée et sécurisée, conforme à votre gouvernance informatique.',
      },
    ] satisfies { icon: IntegrationIcon; title: string; description: string }[],
    action: { label: 'Parler à notre équipe', href: '/contact' },
  },
  directory: {
    title: 'Toutes les intégrations',
    searchLabel: 'Rechercher une intégration',
    searchPlaceholder: 'Rechercher par système ou usage',
    filterLabel: 'Catégories',
    all: 'Toutes',
    results: '{count} intégrations',
    empty: 'Essayez une autre recherche ou catégorie, ou parlez de votre système à notre équipe.',
    action: { label: 'Parler à notre équipe', href: '/contact' },
    categories: {
      finance: 'Finance',
      operations: 'Exploitation',
      building: 'Systèmes du bâtiment',
      tenants: 'Locataires et communication',
      developers: 'Développeurs',
    } satisfies Record<IntegrationCategory, string>,
    items: [
      {
        icon: 'accounting',
        category: 'finance',
        title: 'Logiciels comptables',
        description:
          'Synchronisez coûts et factures validés avec votre comptabilité pour des budgets exacts.',
      },
      {
        icon: 'apAr',
        category: 'finance',
        title: 'Fournisseurs et clients',
        description:
          'Envoyez les coûts de réparation validés directement dans vos processus fournisseurs et clients.',
      },
      {
        icon: 'finance',
        category: 'finance',
        title: 'Outils financiers',
        description:
          'Suivez les dépenses de maintenance par bâtiment, équipement et prestataire avec votre reporting financier.',
      },
      {
        icon: 'erp',
        category: 'operations',
        title: 'ERP',
        description:
          'Partagez équipements, prestataires et achats avec votre ERP pour un reporting unifié.',
      },
      {
        icon: 'vendors',
        category: 'operations',
        title: 'Portails prestataires',
        description:
          'Gardez fiches, interventions et documents alignés avec les portails de vos prestataires.',
      },
      {
        icon: 'access',
        category: 'building',
        title: 'Contrôle d’accès',
        description: 'Enregistrez automatiquement visites sur site et présence des prestataires.',
      },
      {
        icon: 'bms',
        category: 'building',
        title: 'Gestion technique du bâtiment',
        description: 'Transformez alarmes et mesures de la GTB en bons de travail au bon moment.',
      },
      {
        icon: 'tenants',
        category: 'tenants',
        title: 'Portails locataires',
        description:
          'Enregistrez les demandes des locataires comme interventions suivies et tenez les occupants informés.',
      },
      {
        icon: 'email',
        category: 'tenants',
        title: 'E-mail avec Fleet Mail',
        description:
          'Transformez les e-mails reçus en interventions et envoyez mises à jour et validations par e-mail.',
      },
      {
        icon: 'api',
        category: 'developers',
        title: 'API REST',
        description:
          'Créez vos propres connexions vers tout système grâce à une API REST documentée et sécurisée.',
      },
    ] satisfies IntegrationItem[],
  },
  cta: {
    eyebrow: 'Commencer',
    title: 'Prêt à connecter vos systèmes ?',
    description:
      'Présentez-nous les systèmes que vous utilisez aujourd’hui, et notre équipe planifie leur connexion à Fleet pendant le déploiement.',
    action: { label: 'Réserver une démo', href: '/contact' },
    panelTitle: 'Systèmes connectés',
    panelItems: [
      { title: 'Logiciel comptable', location: 'Finance', status: 'Connecté', tone: 'done' },
      {
        title: 'Gestion technique du bâtiment',
        location: 'Systèmes du bâtiment',
        status: 'Connecté',
        tone: 'done',
      },
      { title: 'Portail locataires', location: 'Locataires', status: 'Connecté', tone: 'done' },
      { title: 'ERP', location: 'Exploitation', status: 'En configuration', tone: 'info' },
    ] satisfies StatusItem[],
  },
}

export const runnerAiPage = {
  hero: {
    eyebrow: 'RunnerAI',
    title: 'L’intelligence qui pilote votre exploitation',
    description:
      'RunnerAI est l’IA sécurisée et fondée sur des règles de Fleet pour les équipes immobilières et facility. Décrivez votre besoin : RunnerAI récupère les données, crée des tâches, modifie les workflows et construit des tableaux de bord pour chaque site.',
    primaryAction: { label: 'Réserver une démo', href: '/contact' },
    secondaryAction: { label: 'Parler à notre spécialiste', href: '/contact' },
    demo: {
      title: 'RunnerAI',
      context: 'Données en direct · 14 sites',
      prompt:
        'Mets en place une routine d’hygiène hebdomadaire pour chaque food court, avec validation du superviseur.',
      reply: 'C’est fait. J’ai créé un workflow pour 9 food courts dans 4 centres commerciaux.',
      steps: [
        { kind: 'Chaque', text: 'Lundi, 06:00' },
        { kind: 'Puis', text: 'Créer une check-list d’hygiène par food court' },
        { kind: 'Puis', text: 'Demander la validation du superviseur avec photos' },
      ],
      action: 'Déployer sur 9 sites',
    },
  },
  challenge: {
    pressure: {
      title: 'L’exploitation multisite va vite',
      description:
        'Magasins, centres commerciaux, plateformes logistiques et projets à usage mixte réunissent des milliers d’éléments, de la maintenance à la conformité, en passant par le reporting et les équipements.',
      points: [
        'Des milliers de tâches dans plusieurs régions',
        'Des règles locales pour chaque site',
        'Des données réparties entre équipes',
      ],
    },
    answer: {
      title: 'RunnerAI suit le rythme',
      description:
        'RunnerAI anticipe les étapes, structure les workflows et fait remonter la bonne information instantanément, pour que vos équipes se consacrent davantage à l’exploitation.',
    },
  },
  capabilities: {
    title: 'Une intelligence pour planifier en amont',
    description: 'Quatre façons dont RunnerAI aide votre équipe, toutes en langage naturel.',
    tabs: [
      {
        icon: 'data',
        label: 'Récupération de données',
        title: 'Des réponses tirées de vos données',
        description:
          'Posez une question en langage naturel et RunnerAI récupère la réponse dans vos données d’exploitation en direct, avec les interventions et équipements concernés.',
        points: [
          'Questions sur les coûts, SLA, équipements et prestataires',
          'Réponses tirées des données en direct de chaque site',
          'Sources indiquées pour chaque réponse',
        ],
        visual: {
          kind: 'chat',
          title: 'Demander à RunnerAI',
          request: {
            title: 'Données en direct · 14 sites',
            location: 'Sources : 86 interventions · 14 équipements',
            status: 'Répondu',
            tone: 'done',
          },
          messages: [
            {
              from: 'Vous',
              text: 'Quels groupes froids doivent être entretenus ce mois-ci ?',
              time: '09:12',
              own: true,
            },
            {
              from: 'RunnerAI',
              text: '6 groupes froids sur 3 sites. Harbour Point en compte 3, dont CH-02, prévu le 14 oct.',
              time: '09:12',
              own: false,
            },
          ],
        },
      },
      {
        icon: 'tasks',
        label: 'Création de tâches',
        title: 'Des tâches créées en une phrase',
        description:
          'Décrivez le travail et RunnerAI crée le bon de travail ou la tâche, avec l’équipement, l’emplacement, la personne affectée et l’échéance.',
        points: [
          'Interventions et tâches créées en langage naturel',
          'Affectées à la bonne équipe ou au bon prestataire',
          'Check-lists, équipements et échéances ajoutés automatiquement',
        ],
        visual: {
          kind: 'jobs',
          title: 'Tâches créées par RunnerAI',
          items: [
            {
              title: 'Contrôler les vibrations AHU-07',
              location: 'Tower B · Niveau 14 · Aisha K.',
              status: 'Pour demain',
              tone: 'due',
            },
            {
              title: 'Remplacer le luminaire du hall',
              location: 'Bayview Residences · Marco L.',
              status: 'Affecté',
              tone: 'info',
            },
            {
              title: 'Contrôle trimestriel portes coupe-feu',
              location: 'Northgate Mall · 12 portes',
              status: 'Planifié',
              tone: 'info',
            },
          ],
        },
      },
      {
        icon: 'workflows',
        label: 'Modification de workflows',
        title: 'Modifiez vos workflows en quelques secondes',
        description:
          'Dites à RunnerAI ce qui doit changer : il met à jour étapes, déclencheurs et conditions, puis déploie la modification sur tous les sites ou certaines régions.',
        points: [
          'Étapes, déclencheurs et conditions modifiés par texte',
          'Mises à jour déployées sur tous les sites ou certaines régions',
          'Chaque modification enregistrée et traçable',
        ],
        visual: {
          kind: 'steps',
          title: 'Workflow mis à jour',
          steps: [
            {
              kind: 'Déclencheur',
              text: 'Devis de réparation reçu',
            },
            {
              kind: 'Si',
              text: 'Coût supérieur à 3 000 $ (auparavant 5 000 $)',
            },
            {
              kind: 'Alors',
              text: 'Demander la validation du responsable régional',
            },
          ],
        },
      },
      {
        icon: 'dashboards',
        label: 'Création de tableaux de bord',
        title: 'Des tableaux de bord à la demande',
        description:
          'Demandez n’importe quelle vue et RunnerAI la construit en quelques secondes à partir de vos données en direct, prête à partager ou épingler.',
        points: [
          'Tendances et backlog des bons de travail',
          'Performance des prestataires et comparaisons régionales',
          'Synthèses du portefeuille pour la direction',
        ],
        visual: {
          kind: 'chart',
          title: 'Backlog des interventions · 30 jours',
          stats: [
            {
              label: 'Ouvertes',
              value: '128',
            },
            {
              label: 'Clôturées',
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
    eyebrow: 'Fonctionnement',
    title: 'De la demande au workflow opérationnel',
    items: [
      {
        title: 'Demander',
        description:
          'Décrivez votre besoin en langage naturel, d’une nouvelle routine à un rapport de portefeuille.',
      },
      {
        title: 'Construire',
        description:
          'RunnerAI structure le workflow ou le tableau de bord à partir de vos données et des standards du secteur.',
      },
      {
        title: 'Déployer',
        description:
          'Déployez-le instantanément sur chaque site ou certaines régions, adapté aux règles locales.',
      },
      {
        title: 'Améliorer',
        description:
          'Analyses en direct et prédictions traçables montrent où ajuster, pour que chaque site suive le même playbook.',
      },
    ],
  },
  rows: [
    {
      tag: 'Productivité',
      title: 'Moins d’administratif, plus d’exploitation',
      description:
        'RunnerAI automatise la création et l’ajustement des workflows de maintenance, de conformité, de reporting et de gestion des équipements.',
      points: [
        'Des commandes simples à la place de la configuration manuelle',
        'Chaque site suit le même playbook',
        'Plus de temps pour le terrain',
      ],
      visual: {
        kind: 'log',
        title: 'Activité RunnerAI',
        entries: [
          {
            when: '09:42',
            who: 'RunnerAI',
            what: 'a mis à jour le workflow d’inspection de 4 sites aux EAU',
          },
          {
            when: '09:15',
            who: 'RunnerAI',
            what: 'a créé le tableau de bord hebdomadaire des prestataires',
          },
          {
            when: '08:58',
            who: 'RunnerAI',
            what: 'a suggéré un plan préventif pour 6 nouveaux groupes froids',
          },
        ],
      },
    },
    {
      tag: 'Décisions',
      title: 'Des décisions plus rapides et plus éclairées',
      description:
        'Posez une question et obtenez une réponse en direct, pour que direction et équipes terrain agissent en confiance sur des données à jour.',
      points: [
        'Réponses tirées de vos données en direct',
        'Analyses d’arrêts et de budget à la demande',
        'Comparaisons régionales en quelques secondes',
      ],
      visual: {
        kind: 'chart',
        title: 'Performance prestataires · EAU',
        stats: [
          { label: 'Interventions à l’heure', value: '94 %' },
          { label: 'Réponse moyenne', value: '2,4 h' },
        ],
        bars: [
          { label: 'Prestataire CVC', value: 96 },
          { label: 'Prestataire ascenseurs', value: 91 },
          { label: 'Prestataire électricité', value: 87 },
          { label: 'Prestataire plomberie', value: 82 },
        ],
      },
    },
    {
      tag: 'Visibilité',
      title: 'Une vue claire de chaque site',
      description:
        'Des synthèses à l’échelle du portefeuille réunissent le passé, le présent et l’avenir de votre exploitation au même endroit.',
      points: [
        'Tendances des interventions et analyse des arrêts',
        'Score de risque de conformité par site',
        'Analyses budgétaires et préventives',
      ],
      visual: {
        kind: 'jobs',
        title: 'Top 10 centres · Risque',
        items: [
          {
            title: 'Northgate Mall',
            location: '3 points de conformité ouverts',
            status: 'À revoir',
            tone: 'due',
          },
          {
            title: 'Harbour Point',
            location: 'Tous les contrôles terminés',
            status: 'Conforme',
            tone: 'done',
          },
          {
            title: 'Marina Walk',
            location: '1 équipement en fin de vie',
            status: 'À planifier',
            tone: 'info',
          },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  rules: {
    eyebrow: 'Fondé sur des règles',
    title: 'Une intelligence guidée par vos règles',
    description:
      'RunnerAI agit dans le cadre des règles que vous définissez, pour que chaque action reste traçable, conforme et alignée avec vos standards.',
    action: { label: 'Parler à notre spécialiste', href: '/contact' },
  },
  security: {
    eyebrow: 'Cadre d’IA sécurisé',
    title: 'Une IA qui reste dans votre périmètre',
    description:
      'RunnerAI fonctionne sur des serveurs dédiés à chaque client, pour que les données sensibles restent au sein de votre organisation.',
    items: [
      { title: 'Calcul isolé', description: 'Un environnement dédié pour chaque organisation.' },
      { title: 'Données chiffrées', description: 'Chiffrement en transit et au repos.' },
      {
        title: 'Pistes d’audit complètes',
        description: 'Chaque action générée par l’IA est enregistrée et traçable.',
      },
      {
        title: 'Déploiement flexible',
        description: 'Cloud, sur site ou hybride, conforme RGPD, PDPL et PDPA.',
      },
    ],
  },
  industries: {
    title: 'Une solution pour chaque type d’actif',
    description:
      'Des portefeuilles retail aux plateformes logistiques, RunnerAI s’adapte à vos équipements et à votre marché.',
  },
  integrate: {
    title: 'Conçu pour s’intégrer',
    description:
      'RunnerAI s’appuie sur les plus de 20 intégrations de Fleet et sur vos données financières, techniques et locataires pour une vision complète.',
    action: { label: 'Voir toutes les intégrations', href: '/platform/integrations' },
  },
}

export const fleetMailPage = {
  hero: {
    eyebrow: 'Fleet Mail',
    title: 'Chaque e-mail devient une intervention suivie',
    description:
      'Fleet Mail transforme les demandes des locataires et prestataires en bons de travail dès leur arrivée et tient chacun informé par e-mails automatiques.',
    primaryAction: { label: 'Réserver une démo', href: '/contact' },
    secondaryAction: { label: 'Parler à notre équipe', href: '/contact' },
    hub: {
      center: 'Fleet Mail',
      nodes: ['Locataires', 'Prestataires', 'Techniciens', 'Responsables'],
    },
  },
  challenge: {
    pressure: {
      title: 'Les demandes arrivent de partout',
      description:
        'Locataires, prestataires et équipes envoient demandes, devis et mises à jour vers des boîtes partagées, et chaque message contient une partie d’une intervention.',
      points: ['Demandes des locataires', 'Devis des prestataires', 'Boîtes partagées'],
    },
    answer: {
      title: 'Fleet Mail les réunit',
      description:
        'Chaque e-mail rejoint un dossier structuré unique, avec la bonne équipe affectée et chacun tenu informé.',
    },
  },
  intro: {
    title: 'Chaque échange avance, au même endroit',
    description:
      'Demandes, réponses et validations passent par un même dossier visible par toute l’équipe, tandis que locataires et prestataires gardent l’e-mail qu’ils connaissent.',
  },
  rows: [
    {
      tag: 'Boîte partagée',
      title: 'Une file organisée',
      description:
        'Une boîte partagée devient une file organisée, où chaque demande est enregistrée, priorisée et affectée.',
      points: [
        'Chaque demande enregistrée avec expéditeur, pièces jointes et emplacement',
        'Demandes en double regroupées en une seule intervention',
        'Délais de réponse suivis selon vos SLA',
      ],
      visual: {
        kind: 'jobs',
        title: 'maintenance@ · Aujourd’hui',
        items: [
          {
            title: 'Lumière éteinte dans le hall',
            location: 'De : locataire logement 1204',
            status: 'Intervention créée',
            tone: 'info',
          },
          {
            title: 'Devis entretien groupe froid',
            location: 'De : prestataire CVC',
            status: 'En attente de validation',
            tone: 'due',
          },
          {
            title: 'RE : fuite robinet cuisine',
            location: 'De : locataire logement 802',
            status: 'Résolu',
            tone: 'done',
          },
        ],
      },
    },
    {
      tag: 'De l’e-mail à l’intervention',
      title: 'Les demandes deviennent des interventions',
      description:
        'Chaque e-mail devient un bon de travail, et chaque réponse rejoint l’historique pour garder tout l’échange en contexte.',
      points: [
        'Photos et documents rattachés au bon de travail',
        'Routage intelligent par site, catégorie et priorité',
        'Réponses ajoutées automatiquement à l’historique',
      ],
      visual: {
        kind: 'chat',
        title: 'WO-2318 · Fil d’e-mails',
        request: {
          title: 'Lumière éteinte dans le hall',
          location: 'Bayview Residences · Hall',
          status: 'Affecté',
          tone: 'info',
        },
        messages: [
          {
            from: 'Locataire',
            text: 'La lumière principale du hall s’est éteinte ce soir.',
            time: '18:04',
            own: false,
          },
          {
            from: 'Fleet Mail',
            text: 'Merci. L’intervention WO-2318 est créée et affectée à Marco L.',
            time: '18:04',
            own: true,
          },
          { from: 'Marco L.', text: 'Luminaire remplacé. Photo jointe.', time: '09:30', own: true },
        ],
      },
    },
    {
      tag: 'Validations',
      title: 'Des validations en un clic',
      description:
        'Les responsables valident ou refusent un coût depuis l’e-mail, et l’intervention avance automatiquement.',
      points: [
        'Demandes de validation envoyées au bon valideur',
        'Validation ou refus en un clic depuis la boîte mail',
        'Chaque décision enregistrée sur l’intervention',
      ],
      visual: {
        kind: 'steps',
        title: 'Validation par e-mail',
        steps: [
          { kind: 'E-mail', text: 'Devis prestataire reçu : 3 800 $' },
          { kind: 'Valider', text: 'La responsable financière valide depuis sa boîte' },
          { kind: 'Puis', text: 'Prestataire prévenu + intervention planifiée' },
        ],
      },
    },
    {
      tag: 'Mises à jour',
      title: 'Chacun reste informé',
      description:
        'Fleet envoie le bon message au bon moment, pour que équipes, prestataires et locataires sachent toujours quelle est la suite.',
      points: [
        'Notifications d’affectation et d’échéance',
        'Escalades à l’approche des délais',
        'Comptes rendus de clôture avec preuve photo',
      ],
      visual: {
        kind: 'log',
        title: 'E-mails envoyés aujourd’hui',
        entries: [
          {
            when: '09:31',
            who: 'Locataire, logement 1204',
            what: 'a reçu un compte rendu de clôture avec photo',
          },
          { when: '08:00', who: 'Marco L.', what: 'a reçu ses 4 interventions du jour' },
          {
            when: '07:45',
            who: 'Responsable régional',
            what: 'a reçu la synthèse hebdomadaire des retards',
          },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  flow: {
    eyebrow: 'Fonctionnement',
    title: 'De la boîte mail à l’intervention résolue',
    items: [
      {
        title: 'Recevoir',
        description:
          'Locataires et prestataires écrivent à votre adresse maintenance comme d’habitude.',
      },
      {
        title: 'Créer',
        description:
          'Fleet Mail transforme chaque e-mail en bon de travail avec photos et emplacement.',
      },
      {
        title: 'Affecter',
        description:
          'L’intervention part vers la bonne équipe ou le bon prestataire selon le site, la catégorie et la priorité.',
      },
      {
        title: 'Informer',
        description:
          'Chacun reçoit automatiquement les e-mails d’avancement, de validation et de clôture.',
      },
    ],
  },
  banner: {
    eyebrow: 'Pensé pour chaque expéditeur',
    title: 'Un e-mail qui fonctionne pour tous',
    description:
      'Locataires et prestataires gardent l’e-mail qu’ils connaissent, tandis que votre équipe travaille sur un dossier structuré et suivi.',
    action: { label: 'Parler à notre équipe', href: '/contact' },
  },
  connect: {
    title: 'Connectez toute votre exploitation',
    description:
      'Fleet Mail fait partie de la plateforme Fleet : chaque e-mail est relié à vos équipements, documents, workflows et rapports.',
    items: [
      {
        title: 'Tous sur le même dossier',
        description:
          'Locataires, prestataires et équipes suivent une même intervention, chaque message en contexte.',
      },
      {
        title: 'Une vue claire de chaque demande',
        description: 'Volumes, délais de réponse et demandes ouvertes sur tous les sites.',
      },
      {
        title: 'Plus de temps pour le terrain',
        description:
          'L’enregistrement et les mises à jour automatiques libèrent du temps pour le travail sur site.',
      },
    ],
  },
  industries: {
    title: 'Une solution pour chaque type d’actif',
    description:
      'Des résidences aux plateformes logistiques, Fleet Mail s’adapte à la façon dont chaque site communique.',
  },
  integrate: {
    title: 'Conçu pour s’intégrer',
    description:
      'Fleet Mail fonctionne avec les plus de 20 intégrations de Fleet, dont les portails locataires, les outils financiers et les systèmes du bâtiment.',
    action: { label: 'Voir toutes les intégrations', href: '/platform/integrations' },
  },
}

export const workflowBuilderPage = {
  hero: {
    eyebrow: 'Fleet Workflow Builder',
    title: 'Des workflows qui s’adaptent à votre organisation',
    description:
      'Adaptez votre maintenance à votre structure, vos circuits de validation, vos règles prestataires et vos seuils de coûts, avec un éditeur visuel accessible à toute l’équipe.',
    primaryAction: { label: 'Réserver une démo', href: '/contact' },
    highlights: [
      'Éditeur visuel',
      'Validations à plusieurs niveaux',
      'Opérationnel dès la première semaine',
    ],
  },
  build: {
    eyebrow: 'Fleet Workflow Builder',
    title: 'Construisez votre propre Fleet',
    description:
      'Vous définissez le processus, Fleet l’applique : chaque tâche atteint la bonne personne au bon moment, à chaque fois.',
    helpTitle: 'Nous modélisons chaque processus avec vous',
    helpDescription:
      'Notre équipe d’onboarding transpose avec vous validations, routage et escalades dans Fleet dès la première semaine.',
    action: { label: 'Parler à notre équipe', href: '/contact' },
    center: 'Workflow',
    nodes: ['Validations', 'Routage', 'Escalades', 'Notifications', 'Rôles', 'Sites'],
  },
  panels: {
    blocks: {
      title: 'Tous les éléments au même endroit',
      description:
        'Combinez déclencheurs, conditions et actions pour suivre les procédures de chaque site.',
      panelTitle: 'Éléments de workflow',
      status: 'Ajouté',
      items: [
        {
          title: 'Déclencheur',
          description: 'Nouvelle demande, coût au-delà d’un seuil ou échéance proche',
        },
        {
          title: 'Condition',
          description: 'Site, type d’équipement, priorité, prestataire ou coût',
        },
        {
          title: 'Validation',
          description: 'Accord du superviseur, de la direction ou de la finance',
        },
        { title: 'Action', description: 'Affecter, notifier, escalader ou créer une intervention' },
      ],
    },
    integrations: {
      title: 'L’intégration au cœur du dispositif',
      description:
        'Les workflows agissent sur documents, équipements, droits et prestataires, et se connectent aux systèmes financiers, techniques et locataires.',
      panelTitle: 'Connecté à vos workflows',
      action: { label: 'Voir les intégrations', href: '/platform/integrations' },
      items: [
        {
          title: 'Logiciel comptable',
          location: 'Coûts validés synchronisés automatiquement',
          status: 'Connecté',
          tone: 'done',
        },
        {
          title: 'Gestion technique du bâtiment',
          location: 'Les alarmes déclenchent des workflows',
          status: 'Connecté',
          tone: 'done',
        },
        {
          title: 'Fleet Mail',
          location: 'Validations par e-mail',
          status: 'Connecté',
          tone: 'done',
        },
      ] satisfies StatusItem[],
    },
  },
  templates: {
    title: 'Tous vos processus sur une seule plateforme',
    description:
      'Partez de workflows prêts à l’emploi pour les processus courants, puis adaptez-les à vos sites, rôles et seuils.',
    tag: 'Modèle',
    items: [
      {
        title: 'Validation au-delà de 5 000 $',
        description: 'Accord du superviseur avant planification',
      },
      {
        title: 'Prestataire par bâtiment',
        description: 'Plomberie au prestataire au bâtiment A, en interne au bâtiment B',
      },
      {
        title: 'Préventif et correctif séparés',
        description: 'Préventif aux équipes dédiées, correctif aux équipes générales',
      },
      {
        title: 'Alertes d’échéance SLA',
        description: 'Responsables régionaux alertés à l’approche des délais',
      },
      {
        title: 'Entrée d’un locataire',
        description: 'État des lieux, contrôle des équipements et documents',
      },
      {
        title: 'Contrôle des documents de conformité',
        description: 'Documents requis joints avant la clôture',
      },
    ],
  },
  benefits: {
    learnMore: 'En savoir plus',
    items: [
      {
        href: '/features/audit-tracking',
        title: 'Cohérence',
        description:
          'Chaque intervention suit les mêmes étapes, pour une exploitation rigoureuse et conforme.',
      },
      {
        href: '/features/reactive-maintenance',
        title: 'Efficacité',
        description:
          'Une logique répétable réduit les transmissions manuelles de la création à la clôture.',
      },
      {
        href: '/features/analytics-and-reporting',
        title: 'Visibilité',
        description:
          'Des workflows structurés produisent des données plus fiables et des rapports plus utiles.',
      },
    ],
  },
}

export const preventivePage = {
  hero: {
    eyebrow: 'Maintenance préventive et prédictive',
    title: 'Toujours une longueur d’avance sur les pannes',
    description:
      'Planifiez la maintenance récurrente de chaque équipement, agissez sur des prédictions fondées sur des règles et gardez vos installations en service sur chaque site, avec jusqu’à 40 % de correctif en moins.',
    primaryAction: { label: 'Réserver une démo', href: '/contact' },
    secondaryAction: { label: 'Explorer la plateforme', href: '/platform' },
    highlights: [
      'Plans récurrents',
      'Prédictions fondées sur des règles',
      'Calendrier de conformité',
    ],
    prediction: {
      title: 'Prédiction Fleet',
      asset: 'AHU-07 · Tower B, N14',
      risk: 'Risque élevé',
      message:
        'Vibrations au-dessus de la normale depuis 9 jours. Planifier une intervention sous 7 jours.',
      action: 'Créer une intervention',
    },
  },
  challenge: {
    pressure: {
      title: 'Chaque équipement a son propre rythme',
      description:
        'CVC, ascenseurs, plomberie, éclairage et sécurité incendie suivent chacun leurs plannings, check-lists et échéances réglementaires sur chaque site.',
      points: ['Plans récurrents', 'Contrôles réglementaires', 'Plusieurs sites'],
    },
    answer: {
      title: 'Fleet tient chaque plan à jour',
      description:
        'Fleet transforme vos plans de maintenance en plannings automatiques et s’appuie sur les données en direct pour indiquer où agir ensuite.',
    },
  },
  capabilities: {
    title: 'La façon intelligente de piloter votre maintenance préventive',
    description:
      'Des plannings récurrents aux prédictions traçables, tout votre programme sur une seule plateforme.',
    tabs: [
      {
        icon: 'schedules',
        label: 'Plannings',
        title: 'Plans de maintenance récurrents',
        description:
          'Planifiez les tâches préventives de CVC, plomberie, éclairage, ascenseurs et sécurité incendie par date ou par usage.',
        points: [
          'Plannings par date ou par usage',
          'Check-lists éprouvées pour chaque type d’équipement',
          'Charge répartie entre techniciens et prestataires',
        ],
        visual: {
          kind: 'jobs',
          title: 'Interventions planifiées · Cette semaine',
          items: [
            {
              title: 'Remplacement filtres CVC',
              location: 'Tower B · AHU-07',
              status: 'Dans 4 h',
              tone: 'due',
            },
            {
              title: 'Contrôle annuel ascenseurs',
              location: 'Ascenseurs L1–L3',
              status: 'Planifié',
              tone: 'info',
            },
            {
              title: 'Test éclairage de secours',
              location: 'Northgate Mall',
              status: 'Terminé',
              tone: 'done',
            },
          ],
        },
      },
      {
        icon: 'workOrders',
        label: 'Interventions',
        title: 'Interventions créées automatiquement',
        description:
          'Fleet génère les bons de travail préventifs à partir du plan de chaque équipement et les affecte à la bonne équipe, check-lists incluses.',
        points: [
          'Bons de travail générés depuis chaque plan',
          'Affectés aux équipes internes ou aux prestataires',
          'Preuves photo et relevés saisis à la clôture',
        ],
        visual: {
          kind: 'steps',
          title: 'Automatisation préventive',
          steps: [
            { kind: 'Plan', text: 'Groupe froid CH-02 · entretien trimestriel' },
            { kind: 'Puis', text: 'Créer l’intervention 14 jours avant' },
            { kind: 'Puis', text: 'Affecter au prestataire CVC + joindre la check-list' },
          ],
        },
      },
      {
        icon: 'predictions',
        label: 'Prédictions',
        title: 'Des alertes prédictives traçables',
        description:
          'L’apprentissage automatique fondé sur des règles évalue le risque à partir des données en direct et historiques, et chaque alerte renvoie à sa règle.',
        points: [
          'Risque évalué à partir des données en direct et historiques',
          'Chaque alerte liée à la règle qui l’a déclenchée',
          'Un clic de la prédiction à l’intervention',
        ],
        visual: {
          kind: 'jobs',
          title: 'Alertes de risque',
          items: [
            {
              title: 'Vibrations AHU-07 en hausse',
              location: 'Tower B · Niveau 14',
              status: 'Risque élevé',
              tone: 'overdue',
            },
            {
              title: 'Dérive de pression pompe P-03',
              location: 'Harbour Point',
              status: 'Risque moyen',
              tone: 'due',
            },
            {
              title: 'Groupe froid CH-02 revenu à la normale',
              location: 'Harbour Point',
              status: 'Résolu',
              tone: 'done',
            },
          ],
        },
      },
      {
        icon: 'compliance',
        label: 'Conformité',
        title: 'Un calendrier de conformité pour chaque site',
        description:
          'Suivez contrôles réglementaires et certificats avec des rappels avant chaque échéance, et conservez les preuves sur chaque dossier.',
        points: [
          'Rappels avant chaque contrôle et certificat',
          'Certificats rattachés à chaque équipement',
          'Historique prêt pour l’audit sur chaque site',
        ],
        visual: {
          kind: 'files',
          title: 'Conformité à venir',
          items: [
            {
              title: 'Certificat sécurité incendie',
              location: 'Tower B · Échéance 30 oct.',
              status: 'Dans 24 j',
              tone: 'due',
            },
            {
              title: 'Rapport d’inspection ascenseurs',
              location: 'Ascenseurs · Échéance 12 nov.',
              status: 'Planifié',
              tone: 'info',
            },
            {
              title: 'Évaluation du risque légionelle',
              location: 'Bayview Residences',
              status: 'À jour',
              tone: 'done',
            },
          ],
        },
      },
    ] satisfies (Omit<OverviewModule, 'id' | 'tag'> & { icon: PreventiveIcon; label: string })[],
  },
  rows: [
    {
      tag: 'IA fondée sur des règles',
      title: 'Des prédictions qui préviennent les arrêts',
      description:
        'Fleet suit l’évolution des équipements et repère les signaux précoces, pour que votre équipe agisse avant que les occupants ne soient concernés.',
      points: [
        'Une mesure au-dessus de la normale déclenche une alerte',
        'Action recommandée avec chaque alerte',
        'Plans suggérés pour les nouveaux équipements avec RunnerAI',
      ],
      visual: {
        kind: 'log',
        title: 'Activité prédictive',
        entries: [
          {
            when: '09:42',
            who: 'Fleet',
            what: 'signale des vibrations AHU-07 au-dessus de la normale depuis 9 jours',
          },
          { when: '09:44', who: 'Aisha K.', what: 'a créé une intervention depuis l’alerte' },
          {
            when: '08:58',
            who: 'RunnerAI',
            what: 'a suggéré un plan préventif pour 6 nouveaux groupes froids',
          },
        ],
      },
    },
    {
      tag: 'Planification',
      title: 'La prévention porte ses fruits',
      description:
        'Faites passer le travail du correctif au préventif et mesurez la différence en disponibilité, en coûts et en confort.',
      points: [
        'Préventif et correctif suivis côte à côte',
        'Dépenses planifiées selon le cycle de vie',
        'Incidents récurrents transformés en tâches préventives',
      ],
      visual: {
        kind: 'chart',
        title: 'Part de maintenance planifiée',
        stats: [
          { label: 'Travail planifié', value: '78 %' },
          { label: 'Travail correctif', value: '22 %' },
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
      tag: 'Équipes et prestataires',
      title: 'Une coordination fluide avec équipes et prestataires',
      description:
        'Confiez chaque intervention préventive aux techniciens internes ou aux prestataires sous contrat, et suivez l’avancement en temps réel.',
      points: [
        'Interventions réparties par site, métier et contrat',
        'Prestataires connectés via un simple lien',
        'Preuves photo et relevés à chaque clôture',
      ],
      visual: {
        kind: 'jobs',
        title: 'Préventif du mois par intervenant',
        items: [
          {
            title: 'Équipe CVC interne',
            location: '24 interventions · 3 sites',
            status: '92 % terminé',
            tone: 'done',
          },
          {
            title: 'Prestataire ascenseurs',
            location: '9 interventions · 5 sites',
            status: 'Dans les temps',
            tone: 'info',
          },
          {
            title: 'Prestataire sécurité incendie',
            location: '12 interventions · 4 sites',
            status: '2 aujourd’hui',
            tone: 'due',
          },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  steps: {
    eyebrow: 'Fonctionnement',
    title: 'Du plan à la preuve',
    items: [
      {
        title: 'Planifier',
        description:
          'Chargez vos équipements et plans de maintenance, ou partez de modèles éprouvés.',
      },
      {
        title: 'Programmer',
        description:
          'Fleet crée et affecte les interventions automatiquement avant chaque échéance.',
      },
      {
        title: 'Réaliser',
        description:
          'Les techniciens suivent les check-lists et saisissent photos et relevés sur site.',
      },
      {
        title: 'Prédire',
        description:
          'Les données en direct et historiques révèlent les risques tôt, et les plans s’améliorent sans cesse.',
      },
    ],
  },
  banner: {
    eyebrow: 'Commencer',
    title: 'Planifiez la maintenance préventive, en toute sérénité',
    description:
      'Notre équipe charge avec vous équipements et plans de maintenance pendant le déploiement, pour que les plannings tournent dès la première semaine.',
    action: { label: 'Réserver une démo', href: '/contact' },
  },
  trust: {
    title: 'Une maintenance préventive sur laquelle compter',
    description:
      'Fleet est conçu pour les équipes immobilières qui gèrent des équipements complexes sur plusieurs sites.',
    items: [
      {
        title: 'Conçu pour l’immobilier',
        description: 'Règles et plans définis par site, région ou portefeuille.',
      },
      {
        title: 'Mobile sur le terrain',
        description:
          'Les techniciens complètent les check-lists sur téléphone ou tablette, iOS et Android.',
      },
      {
        title: 'Dossiers prêts pour l’audit',
        description: 'Chaque contrôle et entretien est horodaté et attribué.',
      },
    ],
  },
  quote: {
    text: 'Fleet a réduit notre maintenance corrective de près de 40 %. Nos techniciens, nos registres d’équipements et nos interventions sont enfin réunis au même endroit.',
    author: 'Responsable exploitation',
    company: 'Projet à usage mixte',
  },
  industries: {
    title: 'La maintenance préventive pour chaque type d’actif',
    description:
      'Des centres commerciaux aux plateformes logistiques, Fleet s’adapte à vos équipements et à votre marché.',
  },
  integrate: {
    title: 'Conçu pour s’intégrer',
    description:
      'Connectez votre GTB pour que alarmes et mesures alimentent vos plans préventifs, avec plus de 20 autres intégrations.',
    action: { label: 'Voir toutes les intégrations', href: '/platform/integrations' },
  },
}

export const reactivePage = {
  hero: {
    eyebrow: 'Maintenance corrective',
    title: 'Chaque réparation traitée rapidement',
    description:
      'Enregistrez les incidents dès qu’ils surviennent, confiez-les à la bonne équipe et suivez chaque réparation jusqu’à la clôture selon vos SLA.',
    primaryAction: { label: 'Réserver une démo', href: '/contact' },
    secondaryAction: { label: 'Explorer la plateforme', href: '/platform' },
    highlights: ['Suivi des SLA en direct', 'Demandes avec photos', 'Routage intelligent'],
    visual: {
      kind: 'jobs',
      title: 'Bons de travail · Aujourd’hui',
      items: [
        {
          title: 'Fuite d’eau, logement 3B',
          location: 'Bayview Residences · Photo jointe',
          status: 'En retard de 2 h',
          tone: 'overdue',
        },
        {
          title: 'Réparation porte de quai',
          location: 'Westport DC · Prestataire sous contrat',
          status: 'Affecté',
          tone: 'info',
        },
        {
          title: 'Alarme groupe froid',
          location: 'Harbour Point · Ingénieur d’astreinte',
          status: 'En cours',
          tone: 'due',
        },
        {
          title: 'Panne d’éclairage, niveau 2',
          location: 'Northgate Mall',
          status: 'Terminé',
          tone: 'done',
        },
      ],
    } satisfies OverviewVisual,
  },
  columns: [
    {
      title: 'Un statut clair pour chaque intervention',
      description:
        'Chaque demande, du signalement à la validation, avec statut en direct, compteurs SLA et preuve photo au même endroit.',
    },
    {
      title: 'Des nouvelles pour chaque intervenant',
      description:
        'Locataires, techniciens, prestataires et responsables reçoivent la bonne information au bon moment, par l’application ou par e-mail.',
    },
    {
      title: 'Des données dans le cloud',
      description:
        'Chaque intervention, photo et validation est stockée en sécurité et accessible depuis n’importe quel appareil, partout.',
    },
  ],
  rows: [
    {
      tag: 'Gestion des interventions',
      title: 'La maintenance corrective de bout en bout',
      description:
        'Du premier signalement à la validation finale, chaque réparation suit un parcours clair, avec les bonnes personnes informées à chaque étape.',
      points: [
        'Demandes confiées aux équipes internes ou prestataires selon le site, le métier et l’urgence',
        'Coûts au-delà des seuils envoyés automatiquement au bon valideur',
        'Interventions ouvertes, en retard et terminées visibles sur tous les sites',
      ],
      visual: {
        kind: 'jobs',
        title: 'Tableau des interventions · Tous les sites',
        items: [
          {
            title: '42 interventions ouvertes',
            location: 'Sur 14 sites',
            status: 'En direct',
            tone: 'info',
          },
          {
            title: '3 interventions proches du délai SLA',
            location: 'Superviseurs alertés',
            status: 'Bientôt',
            tone: 'due',
          },
          {
            title: 'Devis de réparation au-delà de 3 000 $',
            location: 'Envoyé à la finance pour validation',
            status: 'Validation',
            tone: 'due',
          },
          {
            title: '118 interventions clôturées cette semaine',
            location: 'Preuve photo sur chacune',
            status: 'Terminé',
            tone: 'done',
          },
        ],
      },
    },
    {
      tag: 'Communication',
      title: 'Droit au but',
      description:
        'Les demandes arrivent avec photos, emplacement et équipement, pour que les techniciens comprennent le problème avant d’arriver.',
      points: [
        'Photos et vidéos transmises par le demandeur',
        'Historique et notices de l’équipement sur chaque intervention',
        'Réponses et mises à jour conservées dans l’historique',
      ],
      visual: {
        kind: 'chat',
        title: 'WO-2291 · Fuite d’eau',
        request: {
          title: 'Fuite d’eau, logement 3B',
          location: 'Bayview Residences · Vanne de colonne V-12',
          status: 'Affecté',
          tone: 'info',
        },
        messages: [
          {
            from: 'Locataire',
            text: 'De l’eau coule du plafond de la salle de bain. Photo jointe.',
            time: '08:12',
            own: false,
          },
          {
            from: 'Marco L.',
            text: 'J’arrive. La vanne V-12 a été entretenue en juin, je commence par elle.',
            time: '08:20',
            own: true,
          },
          {
            from: 'Marco L.',
            text: 'Joint remplacé, fuite réparée. Photos ajoutées à l’intervention.',
            time: '11:05',
            own: true,
          },
        ],
      },
    },
    {
      tag: 'Emplacement',
      title: 'Chaque intervention à sa place',
      description:
        'Chaque réparation est liée à son bâtiment, étage, pièce et équipement, pour que la bonne personne aille directement au bon endroit.',
      points: [
        'Interventions organisées par bâtiment, étage, pièce ou zone',
        'Interventions au même endroit regroupées automatiquement',
        'Incidents récurrents mis en évidence par bâtiment et équipement',
      ],
      visual: {
        kind: 'asset',
        title: 'Emplacement de l’intervention',
        name: 'Vanne de colonne V-12',
        location: 'Bayview Residences · Niveau 3 · Logement 3B',
        status: 'En réparation',
        facts: [
          { label: 'Bâtiment', value: 'Bayview Residences' },
          { label: 'Étage', value: 'Niveau 3' },
          { label: 'Dernier entretien', value: '14 juin' },
          { label: 'Interventions cette année', value: '2' },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  happy: {
    eyebrow: 'Qualité de service',
    title: 'Tout fonctionne, tout le monde est satisfait',
    description:
      'Des réparations rapides et bien documentées gardent les locataires satisfaits et les équipes responsables. Le suivi des SLA en direct montre où le service est solide et où intervenir.',
    points: [
      'Délais de réponse et de résolution mesurés en direct',
      'Alertes avant chaque échéance',
      'Performance SLA analysée chaque mois par bâtiment',
    ],
    visual: {
      kind: 'chart',
      title: 'SLA respectés par bâtiment · Septembre',
      stats: [
        { label: 'SLA respectés', value: '96,4 %' },
        { label: 'Réponse moyenne', value: '1,8 h' },
      ],
      bars: [
        { label: 'Harbour Point', value: 98 },
        { label: 'Tower B', value: 97 },
        { label: 'Northgate', value: 96 },
        { label: 'Bayview', value: 95 },
        { label: 'Westport', value: 93 },
      ],
    } satisfies OverviewVisual,
  },
}

export const analyticsPage: AnalyticsPageContent = {
  hero: {
    eyebrow: 'Analyses et reporting',
    title: 'Des décisions opérationnelles plus éclairées',
    description:
      'Fleet transforme la maintenance quotidienne en informations exploitables, avec des tableaux de bord en direct et des rapports exportables pour chaque équipe, site et équipement.',
    primaryAction: {
      label: 'Réserver une démo',
      href: '/contact',
    },
    secondaryAction: {
      label: 'Explorer la plateforme',
      href: '/platform',
    },
    highlights: ['Tableaux de bord en direct', 'KPI sur mesure', 'Export en un clic'],
    visual: {
      kind: 'chart',
      title: 'Dépenses de maintenance vs budget · année',
      stats: [
        {
          label: 'Dépenses année',
          value: '184 k$',
        },
        {
          label: 'Budget utilisé',
          value: '71 %',
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
  columns: [
    {
      title: 'KPI en temps réel',
      description:
        'Suivez volume d’interventions, délais, conformité et coûts au fil de l’eau, sur chaque site.',
    },
    {
      title: 'Tableaux de bord sur mesure',
      description:
        'Créez des vues pour chaque service et chaque rôle, du technicien à la direction.',
    },
    {
      title: 'Rapports détaillés',
      description:
        'Analysez la performance par bâtiment, équipement, prestataire ou équipe et exportez vos rapports en quelques clics.',
    },
  ],
  rows: [
    {
      tag: 'Dépenses',
      title: 'Tenez votre budget de maintenance',
      description:
        'Suivez les dépenses par centre de coûts en temps réel et comparez-les au budget de chaque site, pour agir avant tout dérapage.',
      points: [
        'Dépenses suivies par bâtiment, équipement et prestataire',
        'Comparaisons budgétaires pour chaque site',
        'Coûts au-delà des seuils envoyés pour validation',
      ],
      visual: {
        kind: 'jobs',
        title: 'Budget par centre de coûts',
        items: [
          {
            title: 'Maintenance CVC',
            location: '62 k$ sur 80 k$',
            status: '78 % utilisé',
            tone: 'info',
          },
          {
            title: 'Ascenseurs et escaliers mécaniques',
            location: '31 k$ sur 35 k$',
            status: '89 % utilisé',
            tone: 'due',
          },
          {
            title: 'Sécurité incendie',
            location: '18 k$ sur 30 k$',
            status: '60 % utilisé',
            tone: 'done',
          },
        ],
      },
    },
    {
      tag: 'Analyse des coûts',
      title: 'Une analyse des coûts complète',
      description: 'Comprenez où va chaque euro, d’un équipement au portefeuille entier.',
      points: [
        'Historique et coûts des réparations par équipement',
        'Coûts prestataires comparés entre régions',
        'Équipements les plus coûteux mis en évidence',
      ],
      visual: {
        kind: 'jobs',
        title: 'Principaux postes de coût · T3',
        items: [
          {
            title: 'Groupe froid CH-02',
            location: 'Harbour Point · 9 interventions',
            status: '12 400 $',
            tone: 'neutral',
          },
          {
            title: 'Batterie d’ascenseurs L1–L3',
            location: 'Northgate Mall · 6 interventions',
            status: '8 900 $',
            tone: 'neutral',
          },
          {
            title: 'Portes de quai',
            location: 'Westport DC · 4 interventions',
            status: '5 200 $',
            tone: 'neutral',
          },
        ],
      },
    },
    {
      tag: 'Prévisions',
      title: 'Anticipez grâce aux données',
      description:
        'Les analyses de cycle de vie et d’arrêts aident à prévoir les remplacements et à planifier les investissements en confiance.',
      points: [
        'Prévisions de remplacement fondées sur l’usage réel',
        'Analyses des arrêts et du cycle de vie',
        'Tendances préventif et correctif dans le temps',
      ],
      visual: {
        kind: 'chart',
        title: 'Prévision des remplacements',
        stats: [
          {
            label: '12 prochains mois',
            value: '96 k$',
          },
          {
            label: 'Équipements concernés',
            value: '14',
          },
        ],
        bars: [
          {
            label: '2027',
            value: 40,
          },
          {
            label: '2028',
            value: 64,
          },
          {
            label: '2029',
            value: 52,
          },
          {
            label: '2030',
            value: 78,
          },
          {
            label: '2031',
            value: 58,
          },
        ],
      },
    },
  ],
  reports: {
    eyebrow: 'Reporting',
    title: 'Votre exploitation. Vos rapports.',
    description: 'Partagez les bons chiffres avec les bonnes personnes, à temps et au bon format.',
    points: [
      'Rapports programmés envoyés par e-mail',
      'Exports pour les audits et les comités',
      'Synthèses à l’échelle du portefeuille',
      'Rapports pour chaque service et chaque rôle',
    ],
    visual: {
      kind: 'steps',
      title: 'Rapport programmé',
      steps: [
        {
          kind: 'Données',
          text: 'Interventions, SLA et coûts',
        },
        {
          kind: 'Filtre',
          text: 'Région EAU · 30 derniers jours',
        },
        {
          kind: 'Envoi',
          text: 'Chaque lundi aux responsables régionaux',
        },
      ],
    },
  },
  extras: [
    {
      icon: 'ai',
      title: 'Des tableaux de bord à la demande avec RunnerAI',
      description:
        'Posez une question en langage naturel et RunnerAI construit le tableau de bord en quelques secondes à partir de vos données.',
      action: {
        label: 'Découvrir RunnerAI',
        href: '/platform/runner-ai',
      },
    },
    {
      icon: 'plug',
      title: 'Connectez vos données à vos outils',
      description:
        'Partagez les données Fleet avec vos outils financiers et métiers grâce à plus de 20 intégrations et une API REST ouverte.',
      action: {
        label: 'Voir toutes les intégrations',
        href: '/platform/integrations',
      },
    },
  ],
}

export const assetPage: ProductPageContent = {
  hero: {
    eyebrow: 'Gestion des équipements',
    title: 'Une visibilité totale sur chaque équipement',
    description:
      'Des installations CVC de dizaines de bâtiments aux pompes, ascenseurs et éclairages, Fleet vous offre un registre en direct de chaque équipement, accessible partout.',
    primaryAction: {
      label: 'Réserver une démo',
      href: '/contact',
    },
    secondaryAction: {
      label: 'Explorer la plateforme',
      href: '/platform',
    },
    highlights: ['Fiches équipement numériques', 'Historique complet', 'Alertes de garantie'],
    visual: {
      kind: 'asset',
      title: 'Fiche équipement',
      name: 'Groupe froid CH-02',
      location: 'Harbour Point · Local technique B2',
      status: 'En service',
      facts: [
        {
          label: 'Dernier entretien',
          value: '12 sept.',
        },
        {
          label: 'Garantie',
          value: 'Mars 2028',
        },
        {
          label: 'Coût depuis janv.',
          value: '4 210 $',
        },
        {
          label: 'Interventions ouvertes',
          value: '1',
        },
      ],
    },
  },
  challenge: {
    pressure: {
      title: 'Des équipements sur chaque site',
      description:
        'CVC, ascenseurs, pompes et éclairage répartis sur des dizaines de bâtiments, chacun avec ses manuels, ses garanties et son historique.',
      points: ['Nombreux sites', 'Nombreux types d’équipements', 'Nombreux documents'],
    },
    answer: {
      title: 'Un registre en direct pour tout',
      description:
        'Fleet crée un registre numérique en direct de vos équipements, accessible partout, pour que chaque décision s’appuie sur un contexte complet.',
    },
  },
  capabilities: {
    title: 'Gérez les équipements de tout votre patrimoine',
    description:
      'D’un seul groupe froid à des milliers d’équipements sur tous vos sites, réunis dans un registre connecté.',
    tabs: [
      {
        icon: 'register',
        label: 'Registre',
        title: 'Une fiche pour chaque équipement',
        description:
          'Renseignez marque, modèle, numéro de série, emplacement, date d’achat et garantie pour chaque équipement.',
        points: [
          'Fiches numériques pour chaque équipement',
          'Classées par bâtiment, étage, local ou zone',
          'Recherche sur tout votre patrimoine',
        ],
        visual: {
          kind: 'jobs',
          title: 'Registre · Harbour Point',
          items: [
            {
              title: 'Groupe froid CH-02',
              location: 'Local B2 · CVC',
              status: 'En service',
              tone: 'done',
            },
            {
              title: 'Ascenseur L2',
              location: 'Ascenseurs centraux',
              status: 'Entretien à prévoir',
              tone: 'due',
            },
            {
              title: 'Surpresseur P-03',
              location: 'Sous-sol · Plomberie',
              status: 'En service',
              tone: 'done',
            },
          ],
        },
      },
      {
        icon: 'workOrders',
        label: 'Interventions',
        title: 'Relié aux interventions et à la maintenance préventive',
        description:
          'Associez chaque équipement à son plan de maintenance et à son historique, et générez les interventions préventives automatiquement.',
        points: [
          'Plans de maintenance rattachés à chaque équipement',
          'Interventions préventives créées automatiquement',
          'Chaque réparation ajoutée à l’historique',
        ],
        visual: {
          kind: 'steps',
          title: 'Automatisation équipement',
          steps: [
            {
              kind: 'Équipement',
              text: 'Groupe froid CH-02 · plan trimestriel',
            },
            {
              kind: 'Puis',
              text: 'Créer l’intervention préventive',
            },
            {
              kind: 'Puis',
              text: 'Consigner l’entretien dans l’historique',
            },
          ],
        },
      },
      {
        icon: 'lifecycle',
        label: 'Cycle de vie',
        title: 'Cycle de vie et temps d’arrêt',
        description:
          'Repérez les équipements peu performants, anticipez les remplacements et planifiez vos investissements grâce aux données d’usage en direct.',
        points: [
          'Temps d’arrêt suivis par équipement',
          'Coûts de réparation sur toute la durée de vie',
          'Prévisions de remplacement fondées sur l’usage réel',
        ],
        visual: {
          kind: 'chart',
          title: 'Heures d’arrêt par type · T3',
          stats: [
            {
              label: 'Arrêt total',
              value: '112 h',
            },
            {
              label: 'Équipements à risque',
              value: '6',
            },
          ],
          bars: [
            {
              label: 'CVC',
              value: 46,
            },
            {
              label: 'Ascenseurs',
              value: 28,
            },
            {
              label: 'Pompes',
              value: 19,
            },
            {
              label: 'Éclairage',
              value: 12,
            },
            {
              label: 'Portes',
              value: 7,
            },
          ],
        },
      },
      {
        icon: 'mobile',
        label: 'Sur site',
        title: 'Les données équipement sur le terrain',
        description:
          'Les techniciens ouvrent la fiche sur site, consignent les inspections en temps réel et ajoutent photos et notes depuis leur téléphone.',
        points: [
          'Recherche ou scan pour ouvrir un équipement',
          'Inspections avec photos et relevés',
          'Historique mis à jour pour toute l’équipe',
        ],
        visual: {
          kind: 'asset',
          title: 'Équipement scanné',
          name: 'Ascenseur L2',
          location: 'Northgate Mall · Ascenseurs centraux',
          status: 'Entretien à prévoir',
          facts: [
            {
              label: 'Dernière inspection',
              value: '2 août',
            },
            {
              label: 'Certificat',
              value: 'Valide jusqu’en janv. 2027',
            },
            {
              label: 'Manuel',
              value: 'Manuel ascenseur L2.pdf',
            },
            {
              label: 'Interventions ouvertes',
              value: '2',
            },
          ],
        },
      },
    ],
  },
  rows: [
    {
      tag: 'Documentation',
      title: 'Chaque manuel là où vous en avez besoin',
      description:
        'Associez manuels, photos, rapports d’inspection et certificats à chaque équipement pour une consultation rapide sur site.',
      points: [
        'Fichiers rattachés à chaque fiche',
        'Certificats et garanties réunis',
        'Disponibles sur téléphone ou tablette',
      ],
      visual: {
        kind: 'files',
        title: 'Groupe froid CH-02 · Documents',
        items: [
          {
            title: 'Manuel d’exploitation CH-02.pdf',
            location: 'Manuel',
            status: 'Lié',
            tone: 'info',
          },
          {
            title: 'Certificat de garantie.pdf',
            location: 'Valide jusqu’en mars 2028',
            status: 'Actif',
            tone: 'done',
          },
          {
            title: 'Rapport d’entretien T3.pdf',
            location: 'Ajouté le 12 sept.',
            status: 'Vérifié',
            tone: 'done',
          },
        ],
      },
    },
    {
      tag: 'RunnerAI',
      title: 'Automatisez la gestion des équipements avec l’IA',
      description:
        'RunnerAI propose des plans de maintenance pour les nouveaux équipements et crée des tableaux de bord à partir d’une simple demande.',
      points: [
        'Plans préventifs suggérés pour les nouveaux équipements',
        'Tableaux de bord des équipements en fin de vie',
        'Réponses sur tout équipement en quelques secondes',
      ],
      visual: {
        kind: 'log',
        title: 'Activité RunnerAI',
        entries: [
          {
            when: '09:42',
            who: 'RunnerAI',
            what: 'a proposé un plan préventif pour 6 nouveaux groupes froids',
          },
          {
            when: '09:15',
            who: 'RunnerAI',
            what: 'a listé 4 équipements en fin de vie',
          },
          {
            when: '08:58',
            who: 'Aisha K.',
            what: 'a validé le plan proposé',
          },
        ],
      },
    },
    {
      tag: 'Garanties et contrats',
      title: 'Garanties et contrats maîtrisés',
      description:
        'Fleet suit les dates de garantie et de contrat de chaque équipement et prévient votre équipe avant chaque échéance.',
      points: [
        'Alertes avant l’échéance des garanties et contrats',
        'Statut de garantie visible sur chaque intervention',
        'Détails des contrats liés à chaque prestataire',
      ],
      visual: {
        kind: 'jobs',
        title: 'Échéances à venir',
        items: [
          {
            title: 'Contrat de maintenance ascenseur L2',
            location: 'Northgate Mall',
            status: 'Dans 30 jours',
            tone: 'due',
          },
          {
            title: 'Garantie groupe froid CH-04',
            location: 'Tower B',
            status: 'Dans 60 jours',
            tone: 'info',
          },
          {
            title: 'Garantie surpresseur P-03',
            location: 'Harbour Point',
            status: 'Renouvelée',
            tone: 'done',
          },
        ],
      },
    },
  ],
  steps: {
    eyebrow: 'Fonctionnement',
    title: 'Du registre au remplacement',
    items: [
      {
        title: 'Recenser',
        description:
          'Importez vos listes d’équipements ou créez des fiches avec tous les détails utiles.',
      },
      {
        title: 'Entretenir',
        description:
          'Reliez chaque équipement à ses plans et interventions pour un entretien dans les temps.',
      },
      {
        title: 'Suivre',
        description:
          'Réparations, coûts, documents et arrêts forment automatiquement un historique complet.',
      },
      {
        title: 'Planifier',
        description: 'Les données de cycle de vie indiquent quand réparer, remplacer ou investir.',
      },
    ],
  },
  banner: {
    eyebrow: 'Commencer',
    title: 'Réunissez tous vos équipements',
    description:
      'Notre équipe d’intégration importe avec vous listes d’équipements et plans de maintenance, pour un registre prêt dès la première semaine.',
    action: {
      label: 'Réserver une démo',
      href: '/contact',
    },
  },
  trust: {
    title: 'Pourquoi Fleet pour la gestion des équipements',
    description:
      'Fleet est conçu pour les équipes immobilières et de facility management, qu’il s’agisse d’ascenseurs, de chaudières, d’éclairage ou de plomberie.',
    items: [
      {
        title: 'Conçu pour l’immobilier',
        description:
          'Des équipements organisés comme votre patrimoine : par actif, bâtiment et zone.',
      },
      {
        title: 'Mobile sur le terrain',
        description: 'Fiches, historique et documents sur téléphone ou tablette, iOS et Android.',
      },
      {
        title: 'Relié à chaque module',
        description:
          'Les équipements sont liés aux interventions, documents, workflows et rapports.',
      },
    ],
  },
  quote: {
    text: 'Fleet a réduit notre maintenance corrective de près de 40 %. Nos techniciens, nos registres d’équipements et nos interventions sont enfin réunis au même endroit.',
    author: 'Responsable exploitation',
    company: 'Projet à usage mixte',
  },
  industries: {
    title: 'Chaque secteur a ses équipements',
    description:
      'Des centres commerciaux aux plateformes logistiques, Fleet s’adapte aux équipements de votre patrimoine.',
  },
  integrate: {
    title: 'Conçu pour s’intégrer',
    description:
      'Connectez GTB, ERP et outils financiers pour que les données équipement circulent là où vous en avez besoin, grâce à plus de 20 intégrations.',
    action: {
      label: 'Voir toutes les intégrations',
      href: '/platform/integrations',
    },
  },
  faq: {
    title: 'Questions fréquentes',
    items: [
      {
        question: 'Qu’est-ce que la gestion des équipements dans Fleet ?',
        answer:
          'Un registre numérique en direct de tous les équipements de vos sites, avec historique, coûts, garanties et documents au même endroit, relié aux interventions et aux plans préventifs.',
      },
      {
        question: 'Quelles informations puis-je enregistrer pour chaque équipement ?',
        answer:
          'Marque, modèle, numéro de série, emplacement, date d’achat et garantie, ainsi que manuels, photos, rapports d’inspection, certificats et l’historique complet des réparations.',
      },
      {
        question: 'Les techniciens voient-ils les fiches sur site ?',
        answer:
          'Oui. Les techniciens ouvrent n’importe quel équipement sur téléphone ou tablette pour consulter manuels, historique et interventions ouvertes, et consignent leurs inspections avec photos et relevés.',
      },
      {
        question: 'Comment Fleet aide-t-il à planifier les remplacements ?',
        answer:
          'Fleet suit coûts de réparation, temps d’arrêt et usage de chaque équipement pour repérer les appareils peu performants, anticiper les remplacements et planifier les investissements.',
      },
      {
        question: 'Fleet me prévient-il avant l’expiration des garanties ?',
        answer:
          'Oui. Fleet suit les dates de garantie et de contrat et prévient votre équipe avant chaque échéance.',
      },
    ],
  },
}

export const documentPage: ProductPageContent = {
  hero: {
    eyebrow: 'Gestion documentaire',
    title: 'Tous vos documents de maintenance dans un espace central',
    description:
      'Garanties, contrats prestataires, check-lists de conformité et modes opératoires réunis au même endroit, liés au travail qu’ils accompagnent et disponibles à tout moment.',
    primaryAction: {
      label: 'Réserver une démo',
      href: '/contact',
    },
    secondaryAction: {
      label: 'Explorer la plateforme',
      href: '/platform',
    },
    highlights: [
      'Gestion des versions',
      'Liés aux équipements et interventions',
      'Exports prêts pour l’audit',
    ],
    visual: {
      kind: 'files',
      title: 'Documents · Tower B',
      items: [
        {
          title: 'Certificat sécurité incendie.pdf',
          location: 'Autorisation · Tower B',
          status: 'Expire dans 30 j',
          tone: 'due',
        },
        {
          title: 'Manuel d’exploitation CH-02.pdf',
          location: 'Manuel · Groupe froid CH-02',
          status: 'Lié',
          tone: 'info',
        },
        {
          title: 'Inspection ascenseurs T3.pdf',
          location: 'Rapport · Ascenseurs',
          status: 'Vérifié',
          tone: 'done',
        },
        {
          title: 'Contrat entretien CVC.pdf',
          location: 'Contrat · CoolAir',
          status: 'Actif',
          tone: 'done',
        },
      ],
    },
  },
  challenge: {
    pressure: {
      title: 'Chaque intervention dépend du bon document',
      description:
        'Certificats de sécurité, rapports d’inspection, manuels et factures prouvent la conformité et assurent la continuité, et les équipes en ont besoin sur le lieu d’intervention.',
      points: ['Certificats', 'Manuels', 'Contrats'],
    },
    answer: {
      title: 'Chaque fichier à portée de clic',
      description:
        'Fleet garde votre documentation organisée, liée au travail qu’elle accompagne et accessible partout.',
    },
  },
  capabilities: {
    title: 'Gérez les documents de tout votre patrimoine',
    description:
      'Stockez, organisez et retrouvez chaque fichier au même endroit, au cœur de la plateforme que votre équipe utilise déjà.',
    tabs: [
      {
        icon: 'storage',
        label: 'Stockage',
        title: 'Des fichiers rattachés partout',
        description:
          'Ajoutez des documents directement aux équipements, interventions, sites, prestataires ou utilisateurs, et gardez tout dans son contexte.',
        points: [
          'Fichiers liés aux équipements, interventions et sites',
          'Classés par type, site, service ou famille d’équipement',
          'Stockage intégré à Fleet',
        ],
        visual: {
          kind: 'files',
          title: 'Groupe froid CH-02 · Fichiers',
          items: [
            {
              title: 'Manuel d’exploitation.pdf',
              location: 'Manuel',
              status: 'Lié',
              tone: 'info',
            },
            {
              title: 'Certificat de garantie.pdf',
              location: 'Garantie',
              status: 'Actif',
              tone: 'done',
            },
            {
              title: 'Rapport d’entretien T3.pdf',
              location: 'Rapport',
              status: 'Vérifié',
              tone: 'done',
            },
          ],
        },
      },
      {
        icon: 'versions',
        label: 'Versions',
        title: 'Gestion des versions et traçabilité',
        description:
          'Suivez l’évolution des fichiers avec un historique complet. Voyez qui a ajouté quoi et quand, et revenez à une version antérieure si besoin.',
        points: [
          'Historique complet pour chaque fichier',
          'Versions antérieures restaurées en un clic',
          'Chaque ajout horodaté et attribué',
        ],
        visual: {
          kind: 'log',
          title: 'Versions · Plan de sécurité incendie',
          entries: [
            {
              when: '09:42',
              who: 'Marco L.',
              what: 'a ajouté la version 4 avec les issues mises à jour',
            },
            {
              when: 'Lun.',
              who: 'Aisha K.',
              what: 'a validé la version 3',
            },
            {
              when: '12 sept.',
              who: 'Fleet',
              what: 'a archivé la version 2',
            },
          ],
        },
      },
      {
        icon: 'permissions',
        label: 'Accès',
        title: 'Droits d’accès par rôle',
        description:
          'Définissez qui peut consulter, ajouter ou modifier les documents, afin que les informations sensibles restent réservées aux personnes autorisées.',
        points: [
          'Droits de lecture, d’ajout et de modification par rôle',
          'Accès des prestataires limité à leurs interventions',
          'Fichiers sensibles protégés',
        ],
        visual: {
          kind: 'jobs',
          title: 'Accès · Contrats prestataires',
          items: [
            {
              title: 'Équipe finance',
              location: 'Lecture et modification',
              status: 'Modifier',
              tone: 'info',
            },
            {
              title: 'Responsables de site',
              location: 'Lecture',
              status: 'Lecture',
              tone: 'done',
            },
            {
              title: 'Prestataires',
              location: 'Leurs contrats uniquement',
              status: 'Limité',
              tone: 'due',
            },
          ],
        },
      },
      {
        icon: 'search',
        label: 'Recherche',
        title: 'Retrouvez un fichier en quelques secondes',
        description:
          'Chaque fichier est accessible par la recherche globale et relié à vos tableaux de bord et rapports.',
        points: [
          'Recherche globale sur tous les sites',
          'Filtres par type, site et équipement',
          'Résultats liés aux interventions et équipements',
        ],
        visual: {
          kind: 'files',
          title: 'Recherche : « certificat ascenseur »',
          items: [
            {
              title: 'Certificat ascenseur 2026.pdf',
              location: 'Northgate Mall · Ascenseurs',
              status: 'Valide',
              tone: 'done',
            },
            {
              title: 'Certificat ascenseur 2026.pdf',
              location: 'Tower B · Ascenseur L2',
              status: 'Expire dans 45 j',
              tone: 'due',
            },
            {
              title: 'Inspection ascenseur T2.pdf',
              location: 'Harbour Point',
              status: 'Archivé',
              tone: 'info',
            },
          ],
        },
      },
    ],
  },
  rows: [
    {
      tag: 'Sur le terrain',
      title: 'Les modes opératoires dans chaque intervention',
      description:
        'Les techniciens ouvrent modes opératoires, guides d’installation et rapports précédents directement depuis l’intervention, là où le travail se fait.',
      points: [
        'Documents liés à chaque intervention',
        'Disponibles sur téléphone ou tablette',
        'Validations budgétaires jointes pour une traçabilité complète',
      ],
      visual: {
        kind: 'files',
        title: 'WO-2304 · Documents joints',
        items: [
          {
            title: 'Mode opératoire filtres CVC.pdf',
            location: 'Procédure',
            status: 'Obligatoire',
            tone: 'info',
          },
          {
            title: 'Manuel AHU-07.pdf',
            location: 'Manuel',
            status: 'Lié',
            tone: 'info',
          },
          {
            title: 'Validation budgétaire.pdf',
            location: 'Validé par la finance',
            status: 'Validé',
            tone: 'done',
          },
        ],
      },
    },
    {
      tag: 'Conformité',
      title: 'Toujours prêt pour l’inspection',
      description:
        'Certificats, autorisations et rapports restent à jour, avec des rappels avant chaque échéance.',
      points: [
        'Suivi des échéances d’autorisations et de contrats',
        'Journaux horodatés pour la conformité',
        'Accès rapide en cas d’urgence ou d’audit',
      ],
      visual: {
        kind: 'jobs',
        title: 'Échéances proches',
        items: [
          {
            title: 'Certificat sécurité incendie',
            location: 'Tower B',
            status: 'Dans 30 jours',
            tone: 'due',
          },
          {
            title: 'Autorisation ascenseur',
            location: 'Northgate Mall',
            status: 'Dans 45 jours',
            tone: 'due',
          },
          {
            title: 'Contrat prestataire · CoolAir',
            location: 'Tous les sites',
            status: 'Renouvelé',
            tone: 'done',
          },
        ],
      },
    },
    {
      tag: 'Partage',
      title: 'Des dossiers pour les audits et les transferts',
      description:
        'Téléchargez des dossiers documentaires pour les audits, les passations avec les prestataires ou les revues internes en quelques clics.',
      points: [
        'Dossiers par site, équipement ou période',
        'Partage sécurisé avec auditeurs et prestataires',
        'Un dossier complet pour les transferts d’actifs',
      ],
      visual: {
        kind: 'steps',
        title: 'Dossier d’audit',
        steps: [
          {
            kind: 'Choisir',
            text: 'Tower B · sécurité incendie · 2026',
          },
          {
            kind: 'Assembler',
            text: '14 certificats et rapports',
          },
          {
            kind: 'Partager',
            text: 'Lien sécurisé envoyé à l’auditeur',
          },
        ],
      },
    },
  ],
  steps: {
    eyebrow: 'Fonctionnement',
    title: 'De l’ajout à l’audit',
    items: [
      {
        title: 'Ajouter',
        description:
          'Importez des fichiers depuis un ordinateur ou un téléphone, ou transférez vos archives avec notre équipe.',
      },
      {
        title: 'Relier',
        description:
          'Rattachez chaque fichier à son équipement, intervention, site ou prestataire.',
      },
      {
        title: 'Utiliser',
        description:
          'Techniciens et responsables ouvrent le bon document au moment de l’intervention.',
      },
      {
        title: 'Partager',
        description: 'Exportez des dossiers pour les audits, les transferts et les revues.',
      },
    ],
  },
  banner: {
    eyebrow: 'Commencer',
    title: 'Réunissez tous vos fichiers',
    description:
      'Notre équipe d’intégration transfère avec vous manuels, certificats et contrats dans Fleet et les relie à vos équipements dès la première semaine.',
    action: {
      label: 'Réserver une démo',
      href: '/contact',
    },
  },
  trust: {
    title: 'Pourquoi Fleet pour la gestion documentaire',
    description:
      'La gestion documentaire fonctionne dans chaque module de Fleet, conçue pour les équipes qui gèrent de nombreux sites, équipements et prestataires.',
    items: [
      {
        title: 'Intégrée à chaque module',
        description: 'Fichiers liés aux équipements, interventions, workflows et rapports.',
      },
      {
        title: 'Sécurisée par conception',
        description: 'Droits par rôle, stockage chiffré et traçabilité complète.',
      },
      {
        title: 'Rapide à retrouver',
        description: 'Recherche globale et étiquettes intelligentes sur tous les sites.',
      },
    ],
  },
  quote: {
    text: 'Les autres plateformes étaient trop complexes ou trop génériques. Fleet nous a apporté une solution sur mesure avec un support plus réactif.',
    author: 'Directeur de la maintenance',
    company: 'Plateforme logistique',
  },
  industries: {
    title: 'Chaque secteur s’appuie sur ses documents',
    description:
      'Des hôtels aux plateformes logistiques, Fleet garde les documents de chaque site organisés et prêts pour l’audit.',
  },
  integrate: {
    title: 'Conçu pour s’intégrer',
    description:
      'Connectez outils financiers, portails prestataires et Fleet Mail pour que les documents arrivent au bon endroit, grâce à plus de 20 intégrations.',
    action: {
      label: 'Voir toutes les intégrations',
      href: '/platform/integrations',
    },
  },
  faq: {
    title: 'Questions fréquentes',
    items: [
      {
        question: 'Quels documents puis-je stocker dans Fleet ?',
        answer:
          'Manuels, garanties, autorisations, rapports d’inspection, certificats, contrats prestataires, modes opératoires, factures et photos, chacun lié aux équipements, interventions et sites concernés.',
      },
      {
        question: 'Les techniciens peuvent-ils ouvrir les documents sur site ?',
        answer:
          'Oui. Les techniciens ouvrent modes opératoires, manuels et rapports précédents directement depuis l’intervention, sur téléphone ou tablette.',
      },
      {
        question: 'Comment fonctionne la gestion des versions ?',
        answer:
          'Fleet conserve un historique complet de chaque fichier, indique qui a ajouté quoi et quand, et permet de restaurer les versions antérieures.',
      },
      {
        question: 'Qui peut voir les documents sensibles ?',
        answer:
          'C’est vous qui décidez. Les droits par rôle définissent qui peut consulter, ajouter ou modifier chaque document, et les prestataires voient uniquement leurs propres fichiers.',
      },
      {
        question: 'Fleet me rappelle-t-il l’expiration des certificats ?',
        answer:
          'Oui. Fleet suit les dates d’expiration des autorisations, certificats et contrats et prévient votre équipe à l’avance.',
      },
    ],
  },
}
