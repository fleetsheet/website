import type { NavLink } from '@/config'
import type { StatusItem } from '@/data/en/home'
import type { OverviewModule, PlatformEntry, PlatformPageContent } from '@/data/en/platform'
import type { PlatformDetailId, PlatformGroup } from '@/platform'

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

export const pages: { overview: PlatformEntry } & Record<PlatformDetailId, PlatformPageContent> = {
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
    eyebrow: 'Web et mobile',
    title: 'Votre exploitation sur tous les écrans',
    description:
      'Fleet fonctionne dans le navigateur et sur iOS et Android : les responsables planifient depuis leur bureau, les techniciens mettent à jour les interventions en temps réel sur le terrain.',
    highlights: ['iOS et Android', 'Dans tout navigateur', 'Synchronisation en temps réel'],
    features: {
      title: 'Conçu pour les équipes en mouvement',
      description:
        'La même plateforme, adaptée à chaque rôle et à chaque écran, avec des mises à jour synchronisées instantanément.',
      items: [
        {
          title: 'Mises à jour sur le terrain',
          description:
            'Les techniciens démarrent, mettent à jour et clôturent les interventions avec photos, notes et signatures.',
        },
        {
          title: 'Alertes instantanées',
          description:
            'Des notifications push et intégrées signalent nouvelles affectations, validations et tâches en retard.',
        },
        {
          title: 'Fiches équipement sur place',
          description:
            'Scannez ou recherchez un équipement pour voir notices, historique et interventions ouvertes en quelques secondes.',
        },
        {
          title: 'Poste de pilotage web',
          description:
            'Les responsables planifient, consultent les tableaux de bord et valident les coûts depuis un espace web complet.',
        },
        {
          title: 'Performance en faible réseau',
          description:
            'Fleet reste fluide en sous-sol, en local technique et sur les sites isolés.',
        },
        {
          title: 'Accès rapide pour les prestataires',
          description:
            'Les prestataires externes se connectent via un simple lien et voient uniquement leurs interventions.',
        },
      ],
    },
    details: [
      {
        title: 'Une maintenance en temps réel, partout',
        description:
          'Sur site ou à distance, votre équipe travaille sur une même base en direct. Créez des demandes en déplacement, recevez des alertes à échéance et des preuves photo à la clôture.',
        points: [
          'Fonctionne sur smartphone, tablette et ordinateur',
          'Preuves photo et vidéo associées à chaque intervention',
          'Changements de statut visibles instantanément par toute l’équipe',
        ],
      },
      {
        title: 'Une expérience pour chaque rôle',
        description:
          'Chacun dispose des outils dont il a besoin, des check-lists des techniciens aux tableaux de bord de la direction.',
        points: [
          'Vues par rôle pour techniciens, superviseurs et prestataires',
          'Tableaux de bord et validations pour les responsables',
          'Demandes des locataires et occupants enregistrées avec photos',
        ],
      },
    ],
    useCases: {
      title: 'Fleet sur le terrain',
      description: 'Chaque visite, inspection et réparation est enregistrée là où elle a lieu.',
      items: [
        'Signaler une fuite d’eau avec photos depuis le logement',
        'Compléter la check-list d’une porte coupe-feu sur tablette',
        'Valider une réparation urgente sur smartphone entre deux réunions',
        'Ouvrir la notice d’un groupe froid directement en local technique',
        'Partager une intervention avec un prestataire externe en quelques secondes',
      ],
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
    eyebrow: 'Intégrations',
    title: 'Connectez Fleet aux outils que vous utilisez déjà',
    description:
      'Fleet s’intègre à votre environnement avec plus de 20 intégrations et une API REST ouverte, pour un écosystème d’exploitation connecté de bout en bout.',
    highlights: ['20+ intégrations', 'API REST ouverte', 'Mise en place accompagnée'],
    features: {
      title: 'Des intégrations pour toute votre exploitation',
      description:
        'Réunissez données financières, immobilières et techniques pour que chaque équipe travaille sur la même base.',
      items: [
        {
          title: 'Comptabilité, fournisseurs et clients',
          description:
            'Synchronisez coûts, factures et validations avec vos outils financiers pour des budgets exacts.',
        },
        {
          title: 'ERP',
          description:
            'Partagez équipements, prestataires et achats avec votre ERP pour un reporting unifié.',
        },
        {
          title: 'Contrôle d’accès',
          description:
            'Connectez vos systèmes d’accès pour enregistrer automatiquement visites et présence des prestataires.',
        },
        {
          title: 'Portails locataires',
          description:
            'Transformez les demandes des locataires en bons de travail suivis et tenez les occupants informés.',
        },
        {
          title: 'Gestion technique du bâtiment',
          description:
            'Intégrez alarmes et mesures de la GTB dans Fleet pour déclencher les interventions au bon moment.',
        },
        {
          title: 'API REST',
          description:
            'Créez vos propres connexions vers tout système grâce à une API REST documentée et sécurisée.',
        },
      ],
    },
    details: [
      {
        title: 'Finance et exploitation alignées',
        description:
          'Maintenance et finance avancent ensemble, du premier devis à la dernière facture.',
        points: [
          'Validations de coûts transmises directement à votre processus fournisseurs',
          'Suivi budgétaire par bâtiment, équipement et prestataire',
          'Rapports exportables pour la finance et la gouvernance',
        ],
      },
      {
        title: 'Sécurisé dès la conception',
        description:
          'Chaque intégration respecte votre gouvernance informatique, avec des droits clairs et une traçabilité complète.',
        points: [
          'Données chiffrées en transit et au repos',
          'Points d’accès autorisés selon vos politiques informatiques',
          'Pistes d’audit pour chaque enregistrement synchronisé',
        ],
      },
    ],
    useCases: {
      title: 'Les intégrations en pratique',
      description:
        'Les équipes connectent Fleet pour supprimer la double saisie et garder chaque système à jour.',
      items: [
        'Envoyer les coûts de réparation validés vers votre logiciel comptable',
        'Créer automatiquement des bons de travail à partir des alarmes GTB',
        'Synchroniser les fiches prestataires entre Fleet et votre ERP',
        'Enregistrer les demandes du portail locataires comme interventions',
        'Alimenter vos tableaux de bord BI avec les données Fleet',
      ],
    },
  },
  runnerAi: {
    label: 'RunnerAI',
    summary: 'Des agents IA qui créent workflows et tableaux de bord en langage naturel.',
    meta: {
      title: 'RunnerAI | Fleet',
      description:
        'RunnerAI est l’IA sécurisée et fondée sur des règles de Fleet pour l’immobilier et le facility management : workflows créés par texte, tableaux de bord à la demande et exploitation automatisée.',
    },
    eyebrow: 'RunnerAI',
    title: 'Des agents IA pour l’immobilier et le facility management',
    description:
      'RunnerAI crée des workflows, fait émerger des analyses et construit des tableaux de bord à partir de simples commandes texte, pour libérer du temps pour le travail sur le terrain.',
    highlights: [
      'Commandes en langage naturel',
      'Fondé sur des règles et traçable',
      'Données cloisonnées par organisation',
    ],
    features: {
      title: 'Ce que fait RunnerAI',
      description:
        'Une intelligence opérationnelle intégrée qui anticipe les étapes, structure les workflows et fait remonter la bonne information instantanément.',
      items: [
        {
          title: 'Workflows par commande texte',
          description:
            'Décrivez ce que vous voulez et RunnerAI le transforme en workflow standardisé pour chaque site.',
        },
        {
          title: 'Ajustements en temps réel',
          description:
            'Modifiez étapes, déclencheurs et conditions en quelques secondes et déployez-les sur toutes les régions ou une sélection.',
        },
        {
          title: 'Modèles conformes aux standards',
          description:
            'Démarrez avec des workflows éprouvés adaptés à votre type d’actif, vos équipements et votre marché.',
        },
        {
          title: 'Tableaux de bord à la demande',
          description:
            'Demandez n’importe quelle vue, comme les équipements en fin de vie, et obtenez un tableau de bord en direct.',
        },
        {
          title: 'Apprentissage automatique fondé sur des règles',
          description:
            'Les prédictions suivent des règles définies : chaque action reste traçable, conforme et cohérente.',
        },
        {
          title: 'Dans votre langue',
          description:
            'Créez et ajustez vos workflows en anglais ou dans votre langue, en tenant compte des réglementations locales.',
        },
      ],
    },
    details: [
      {
        title: 'Des tableaux de bord sur commande',
        description:
          'Posez une question et RunnerAI construit le tableau de bord à partir de vos données en direct, prêt à être partagé ou épinglé.',
        points: [
          'Tendances et backlog des bons de travail',
          'Analyse des arrêts d’équipements et score de risque de conformité',
          'Performance des prestataires et comparaisons régionales',
          'Synthèses du portefeuille pour la direction',
        ],
      },
      {
        title: 'Une IA qui reste dans votre périmètre',
        description:
          'RunnerAI fonctionne sur des serveurs dédiés à chaque client, pour que les données sensibles restent au sein de votre organisation.',
        points: [
          'Environnements de calcul isolés pour chaque organisation',
          'Chiffrement en transit et au repos',
          'Pistes d’audit pour chaque action générée par l’IA',
          'Conformité RGPD, PDPL, PDPA et déploiement sur site ou hybride',
        ],
      },
    ],
    useCases: {
      title: 'Demandez à RunnerAI',
      description:
        'Quelques-unes des demandes que les équipes immobilières confient chaque jour à RunnerAI.',
      items: [
        'Montre-moi les équipements en fin de vie sur tous les sites',
        'Résume le backlog des bons de travail des 30 derniers jours',
        'Donne-moi la performance des prestataires pour la région EAU',
        'Crée un tableau de bord des risques pour nos 10 principaux centres commerciaux',
        'Mets en place une routine hebdomadaire d’hygiène pour chaque food court',
      ],
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
    eyebrow: 'Fleet Mail',
    title: 'Chaque e-mail devient une intervention suivie',
    description:
      'Fleet Mail transforme les demandes des locataires et prestataires en bons de travail dès leur arrivée et tient équipes et prestataires informés par e-mails automatiques.',
    highlights: [
      'De l’e-mail au bon de travail',
      'Réponses rattachées',
      'Mises à jour automatiques',
    ],
    features: {
      title: 'Votre boîte mail, connectée à l’exploitation',
      description:
        'Demandes, réponses et validations passent par un même dossier structuré, visible par toute l’équipe.',
      items: [
        {
          title: 'De l’e-mail au bon de travail',
          description:
            'Chaque demande reçue devient un bon de travail avec son expéditeur, ses pièces jointes et son site.',
        },
        {
          title: 'Historique des échanges',
          description:
            'Les réponses sont ajoutées automatiquement à l’historique de l’intervention, dans leur contexte.',
        },
        {
          title: 'Routage intelligent',
          description:
            'Les demandes sont confiées à la bonne équipe ou au bon prestataire selon le site, la catégorie et la priorité.',
        },
        {
          title: 'Alertes par e-mail',
          description:
            'Équipes et prestataires reçoivent affectations, échéances et rappels directement dans leur boîte mail.',
        },
        {
          title: 'Validations par e-mail',
          description: 'Les responsables valident ou refusent un coût en un clic depuis l’e-mail.',
        },
        {
          title: 'Suivi pour les demandeurs',
          description:
            'Les locataires reçoivent une confirmation et des nouvelles jusqu’à la résolution de leur demande.',
        },
      ],
    },
    details: [
      {
        title: 'Des demandes organisées dès leur arrivée',
        description:
          'Une boîte partagée devient une file organisée, où chaque demande est enregistrée, priorisée et affectée.',
        points: [
          'Photos et documents rattachés au bon de travail',
          'Demandes en double regroupées en une seule intervention',
          'Délais de réponse suivis selon vos SLA',
        ],
      },
      {
        title: 'Des messages qui atteignent les bonnes personnes',
        description:
          'Fleet envoie le bon message au bon moment, pour que chacun sache quelle est la prochaine étape.',
        points: [
          'Notifications d’affectation et d’échéance',
          'Escalades à l’approche des délais',
          'Comptes rendus de clôture avec preuve photo',
        ],
      },
    ],
    useCases: {
      title: 'Fleet Mail en pratique',
      description: 'L’e-mail fonctionne comme chacun l’attend, avec un suivi complet en coulisses.',
      items: [
        'Un locataire signale une lampe en panne par e-mail et une intervention est créée',
        'Un prestataire répond avec un devis ajouté à l’historique',
        'Une responsable financière valide un coût de réparation depuis sa boîte mail',
        'Un technicien reçoit chaque soir ses interventions du lendemain par e-mail',
        'Un responsable régional reçoit chaque semaine la synthèse des retards',
      ],
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
    eyebrow: 'Fleet Workflow Builder',
    title: 'Des workflows qui s’adaptent à votre organisation',
    description:
      'Adaptez votre maintenance à votre structure, vos circuits de validation, vos règles prestataires et vos seuils de coûts, avec un éditeur visuel accessible à toute l’équipe.',
    highlights: [
      'Éditeur visuel',
      'Validations à plusieurs niveaux',
      'Opérationnel dès la première semaine',
    ],
    features: {
      title: 'Configurez une fois, appliquez partout',
      description:
        'Vous définissez le processus, Fleet l’applique : chaque tâche atteint la bonne personne au bon moment.',
      items: [
        {
          title: 'Routage conditionnel',
          description:
            'Affectez les interventions par site, type, priorité ou catégorie d’équipement, par exemple les ascenseurs à un prestataire dédié.',
        },
        {
          title: 'Validations à plusieurs niveaux',
          description:
            'Exigez l’accord de la direction ou de la finance selon le coût, l’urgence ou le périmètre.',
        },
        {
          title: 'Responsabilités par rôle',
          description:
            'Définissez qui peut voir, valider, affecter ou clôturer les tâches : techniciens, superviseurs, prestataires.',
        },
        {
          title: 'Notifications et escalades',
          description:
            'Alertez automatiquement les équipes à l’approche d’une échéance ou quand une intervention attend son affectation.',
        },
        {
          title: 'Workflows par site',
          description:
            'Adaptez chaque bâtiment ou région à ses propres procédures opérationnelles.',
        },
        {
          title: 'Connecté à tous les modules',
          description:
            'Les workflows agissent sur documents, équipements, droits et prestataires dans un seul système.',
        },
      ],
    },
    details: [
      {
        title: 'Simple à configurer, puissant à l’usage',
        description:
          'Glissez, déposez, publiez. Notre équipe d’onboarding vous aide à modéliser vos workflows dans Fleet dès la première semaine.',
        points: [
          'Éditeur visuel pensé pour les équipes d’exploitation',
          'Modèles prêts à l’emploi pour les processus courants',
          'Tests des modifications avant déploiement',
        ],
      },
      {
        title: 'Cohérence, efficacité et visibilité',
        description:
          'Chaque intervention suit les mêmes étapes, pour une exploitation rigoureuse et un reporting plus clair.',
        points: [
          'Étapes de conformité, comme les vérifications de documents, appliquées automatiquement',
          'Moins de transmissions manuelles de la création à la clôture',
          'Données structurées pour des rapports plus utiles',
        ],
      },
    ],
    useCases: {
      title: 'Les workflows que créent les équipes',
      description:
        'Des workflows courants mis en place par les équipes immobilières dès le premier mois.',
      items: [
        'Plomberie confiée à un prestataire au bâtiment A et à l’équipe interne au bâtiment B',
        'Validation du superviseur pour toute intervention supérieure à 5 000 $',
        'Préventif confié à une équipe dédiée, correctif aux équipes générales',
        'Alerte des responsables régionaux à l’approche des délais SLA',
        'Parcours d’entrée des locataires avec état des lieux, contrôle des équipements et documents',
      ],
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
    eyebrow: 'Maintenance préventive et prédictive',
    title: 'Toujours une longueur d’avance sur les pannes',
    description:
      'Planifiez la maintenance récurrente de chaque équipement et repérez les risques tôt grâce à des prédictions fondées sur des règles, pour des installations fiables et des occupants satisfaits.',
    highlights: [
      'Plans récurrents',
      'Prédictions fondées sur des règles',
      'Jusqu’à 40 % de correctif en moins',
    ],
    features: {
      title: 'Planifiez la maintenance en toute confiance',
      description:
        'Vos plans de maintenance deviennent des échéances automatiques, et les données en direct indiquent où agir ensuite.',
      items: [
        {
          title: 'Plans de maintenance récurrents',
          description:
            'Planifiez les tâches préventives de CVC, plomberie, éclairage, ascenseurs et sécurité incendie par date ou par usage.',
        },
        {
          title: 'Création automatique des interventions',
          description:
            'Fleet génère les bons de travail préventifs à partir du plan de chaque équipement et les affecte à la bonne équipe.',
        },
        {
          title: 'Alertes prédictives',
          description:
            'Une mesure au-dessus de la normale déclenche une alerte traçable avec l’action recommandée.',
        },
        {
          title: 'Modèles conformes aux standards',
          description:
            'Démarrez avec des check-lists éprouvées pour chaque type d’équipement et adaptez-les à vos sites.',
        },
        {
          title: 'Planification de la charge',
          description:
            'Répartissez les interventions entre techniciens et prestataires et visualisez le travail à venir.',
        },
        {
          title: 'Calendrier de conformité',
          description:
            'Suivez contrôles réglementaires et certificats avec des rappels avant chaque échéance.',
        },
      ],
    },
    details: [
      {
        title: 'Du planning à l’intervention validée',
        description:
          'Chaque tâche préventive contient sa check-list, l’historique de l’équipement et les documents utiles : les techniciens arrivent préparés.',
        points: [
          'Check-lists et modes opératoires rattachés à chaque tâche',
          'Preuves photo et relevés saisis à la clôture',
          'Escalade automatique des tâches en retard',
        ],
      },
      {
        title: 'Des prédictions traçables',
        description:
          'L’apprentissage automatique fondé sur des règles de Fleet explique chaque recommandation, pour des décisions en confiance.',
        points: [
          'Risque des équipements évalué à partir des données en direct et historiques',
          'Chaque alerte liée à la règle qui l’a déclenchée',
          'Un clic pour passer de la prédiction au bon de travail',
        ],
      },
    ],
    useCases: {
      title: 'La maintenance préventive en pratique',
      description:
        'Comment les équipes immobilières maintiennent leurs installations critiques en parfait état.',
      items: [
        'Changement trimestriel des filtres CVC dans chaque bâtiment',
        'Contrôle annuel des ascenseurs avec rappel 30 jours avant',
        'Tests mensuels de l’éclairage de secours documentés avec photos',
        'Vibrations d’un groupe froid suivies par des alertes prédictives',
        'Contrôles des portes coupe-feu planifiés par étage et par escalier',
      ],
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
    eyebrow: 'Maintenance corrective',
    title: 'Chaque réparation traitée rapidement',
    description:
      'Enregistrez les incidents dès qu’ils surviennent, confiez-les à la bonne équipe et suivez chaque réparation jusqu’à la clôture selon vos SLA.',
    highlights: ['Suivi des SLA en direct', 'Demandes avec photos', 'Routage intelligent'],
    features: {
      title: 'De la demande à la résolution',
      description:
        'Un parcours clair pour chaque réparation, avec les bonnes personnes informées à chaque étape.',
      items: [
        {
          title: 'Saisie rapide des demandes',
          description:
            'Équipes et locataires signalent un incident avec photos, emplacement et priorité depuis n’importe quel appareil.',
        },
        {
          title: 'Affectation intelligente',
          description:
            'Confiez les interventions aux équipes internes ou aux prestataires selon le site, le corps de métier et l’urgence.',
        },
        {
          title: 'Suivi des SLA',
          description:
            'Délais de réponse et de résolution mesurés en direct, avec alertes avant chaque échéance.',
        },
        {
          title: 'Mises à jour en temps réel',
          description:
            'Les techniciens mettent à jour le statut, ajoutent des notes et des preuves depuis le terrain.',
        },
        {
          title: 'Validation des coûts',
          description:
            'Devis et coûts au-delà des seuils définis partent automatiquement vers le bon valideur.',
        },
        {
          title: 'Tableau de bord centralisé',
          description:
            'Suivez interventions ouvertes, en retard et terminées sur tous les sites dans une seule vue.',
        },
      ],
    },
    details: [
      {
        title: 'Chaque incident enregistré dans son contexte',
        description:
          'Chaque réparation est liée à son équipement, son site et son historique : les techniciens comprennent le problème avant d’arriver.',
        points: [
          'Historique et notices de l’équipement sur chaque intervention',
          'Photos et vidéos transmises par le demandeur',
          'Interventions liées regroupées automatiquement',
        ],
      },
      {
        title: 'Progresser à chaque réparation',
        description:
          'Les données correctives révèlent les incidents récurrents et aident à basculer davantage vers le préventif.',
        points: [
          'Incidents récurrents mis en évidence par bâtiment et équipement',
          'Coûts de réparation suivis par site, corps de métier et prestataire',
          'Des enseignements qui orientent votre plan préventif',
        ],
      },
    ],
    useCases: {
      title: 'La maintenance corrective en pratique',
      description: 'Les réparations du quotidien, traitées vite et en toute transparence.',
      items: [
        'Une fuite au logement 3B signalée avec photos et réparée le jour même',
        'La réparation d’une porte de quai confiée au prestataire sous contrat',
        'Une alarme de groupe froid transmise à l’ingénieur d’astreinte',
        'Une réparation coûteuse envoyée à la finance pour validation',
        'La performance SLA analysée chaque mois par bâtiment',
      ],
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
    eyebrow: 'Analyses et reporting',
    title: 'Des décisions opérationnelles plus éclairées',
    description:
      'Fleet transforme la maintenance quotidienne en informations exploitables, avec des tableaux de bord en direct et des rapports exportables pour chaque équipe, site et équipement.',
    highlights: ['Tableaux de bord en direct', 'KPI sur mesure', 'Export en un clic'],
    features: {
      title: 'Des analyses à chaque niveau',
      description:
        'D’un équipement au portefeuille entier, voyez ce qui se passe et où concentrer vos efforts.',
      items: [
        {
          title: 'Indicateurs en direct',
          description:
            'Suivez volume d’interventions, délais de réponse, conformité et coûts au fil de l’eau.',
        },
        {
          title: 'Tableaux de bord sur mesure',
          description:
            'Créez des vues pour chaque service et chaque rôle, du technicien à la direction.',
        },
        {
          title: 'Analyse détaillée',
          description:
            'Explorez la performance par bâtiment, équipement, prestataire ou équipe en quelques clics.',
        },
        {
          title: 'Suivi budgétaire',
          description:
            'Visualisez les dépenses par centre de coûts et comparez-les au budget de chaque site.',
        },
        {
          title: 'Rapports exportables',
          description:
            'Exportez des rapports pour les audits, les comités ou les points d’équipe à tout moment.',
        },
        {
          title: 'Tableaux de bord générés par IA',
          description:
            'Posez une question à RunnerAI et obtenez un tableau de bord prêt à l’emploi à partir de vos données.',
        },
      ],
    },
    details: [
      {
        title: 'Comprenez ce qui fait la performance',
        description:
          'Identifiez les bâtiments aux incidents récurrents, les équipements les plus coûteux et les équipes qui tiennent leurs SLA.',
        points: [
          'Analyse des incidents récurrents par site et équipement',
          'Performance SLA par équipe et prestataire',
          'Analyse des arrêts et du cycle de vie des équipements',
        ],
      },
      {
        title: 'Des rapports prêts quand vous l’êtes',
        description:
          'Partagez les bons chiffres avec les bonnes personnes, à temps et au format adapté.',
        points: [
          'Rapports programmés envoyés par e-mail',
          'Exports pour les audits et les dossiers de comité',
          'Synthèses du portefeuille pour la direction',
        ],
      },
    ],
    useCases: {
      title: 'Le reporting en pratique',
      description:
        'Les questions auxquelles les équipes immobilières répondent chaque semaine avec Fleet.',
      items: [
        'Quels sites ont connu le plus d’arrêts CVC au dernier trimestre',
        'Comment les délais des prestataires se comparent d’une région à l’autre',
        'Où les dépenses de maintenance dépassent le budget cette année',
        'Quels équipements entrent dans le plan de renouvellement',
        'Comment le respect des SLA a progressé depuis le déploiement',
      ],
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
    eyebrow: 'Gestion des équipements',
    title: 'Une visibilité totale sur chaque équipement',
    description:
      'Des installations CVC de dizaines de bâtiments aux pompes, ascenseurs et éclairages, Fleet vous offre un registre en direct de chaque équipement, accessible partout.',
    highlights: ['Fiches équipement numériques', 'Historique complet', 'Alertes de garantie'],
    features: {
      title: 'Les fonctionnalités clés de la gestion des équipements',
      description:
        'Vos données d’équipements deviennent un moteur d’efficacité, de budgétisation et de planification.',
      items: [
        {
          title: 'Fiches équipement numériques',
          description:
            'Enregistrez marque, modèle, numéro de série, emplacement, date d’achat et garantie.',
        },
        {
          title: 'Fichiers et documentation',
          description:
            'Associez notices, photos, rapports d’inspection et certificats à chaque équipement.',
        },
        {
          title: 'Historique et coûts des réparations',
          description:
            'Voyez ce qui a été fait, à quelle fréquence et à quel coût, pour chaque équipement du portefeuille.',
        },
        {
          title: 'Sites et zones',
          description:
            'Organisez les équipements par bâtiment, étage, pièce ou zone, idéal en multisite.',
        },
        {
          title: 'Interventions et plans préventifs liés',
          description:
            'Reliez chaque équipement à son plan de maintenance et générez automatiquement les interventions préventives.',
        },
        {
          title: 'Cycle de vie et arrêts',
          description:
            'Repérez les équipements peu performants, anticipez les remplacements et planifiez les investissements.',
        },
      ],
    },
    details: [
      {
        title: 'Vos équipements accessibles partout',
        description:
          'Les techniciens consultent les fiches sur site, saisissent les inspections en temps réel et ajoutent photos et notes depuis leur téléphone.',
        points: [
          'Recherche ou scan pour ouvrir n’importe quel équipement',
          'Résultats d’inspection saisis sur place',
          'Historique mis à jour instantanément pour toute l’équipe',
        ],
      },
      {
        title: 'De meilleures données pour une meilleure maintenance',
        description:
          'Des informations précises et bien organisées prolongent la durée de vie des équipements et sécurisent vos budgets.',
        points: [
          'Alertes avant l’expiration des garanties et contrats',
          'Rapports de performance pour le budget annuel',
          'Prévisions de remplacement fondées sur l’usage réel',
        ],
      },
    ],
    useCases: {
      title: 'La gestion des équipements en pratique',
      description:
        'Des portefeuilles immobiliers aux chaînes hôtelières, les équipes s’appuient sur Fleet pour maîtriser leurs infrastructures critiques.',
      items: [
        'Centraliser les données CVC de plusieurs immeubles de bureaux',
        'Confier des équipements précis aux techniciens du site pour des contrôles réguliers',
        'Suivre l’historique de maintenance des ascenseurs avec photos et certificats',
        'Exporter des rapports de performance pour le budget annuel',
        'Être alerté à l’approche des échéances de garantie ou de contrat',
      ],
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
    eyebrow: 'Gestion documentaire',
    title: 'Tous vos documents de maintenance dans un espace central',
    description:
      'Garanties, contrats prestataires, check-lists de conformité et modes opératoires réunis au même endroit, liés au travail qu’ils accompagnent et disponibles à tout moment.',
    highlights: [
      'Gestion des versions',
      'Liés aux équipements et interventions',
      'Exports prêts pour l’audit',
    ],
    features: {
      title: 'Les fonctionnalités clés de la gestion documentaire',
      description: 'Toute la documentation utile, disponible là où elle sert.',
      items: [
        {
          title: 'Versions et piste d’audit',
          description:
            'Voyez qui a déposé quoi et quand, avec un historique complet et une restauration simple.',
        },
        {
          title: 'Fichiers joints partout',
          description:
            'Associez des documents aux équipements, interventions, sites, prestataires ou utilisateurs.',
        },
        {
          title: 'Étiquettes et catégories',
          description:
            'Classez les fichiers par type, site, service ou famille d’équipement pour les retrouver vite.',
        },
        {
          title: 'Droits par rôle',
          description:
            'Définissez qui peut consulter, déposer ou modifier chaque document et protégez les fichiers sensibles.',
        },
        {
          title: 'Documents dans les interventions',
          description:
            'Les techniciens ouvrent modes opératoires, guides d’installation et rapports précédents depuis l’intervention.',
        },
        {
          title: 'Export et partage',
          description:
            'Téléchargez des dossiers documentaires pour les audits, les passations ou les revues internes.',
        },
      ],
    },
    details: [
      {
        title: 'Intégré à votre écosystème de maintenance',
        description:
          'Chaque fichier se retrouve via la recherche globale et reste lié à vos tableaux de bord et rapports.',
        points: [
          'Recherche globale sur tous les sites',
          'Documents liés aux équipements, interventions et prestataires',
          'Stockage intégré à Fleet',
        ],
      },
      {
        title: 'Toujours prêt pour l’inspection',
        description:
          'Certificats, permis et rapports restent à jour, avec des rappels avant chaque expiration.',
        points: [
          'Suivi des échéances des permis et contrats',
          'Journaux horodatés pour la conformité',
          'Accès rapide en cas d’urgence ou d’audit',
        ],
      },
    ],
    useCases: {
      title: 'La gestion documentaire en pratique',
      description:
        'Pensée pour les équipes qui gèrent plusieurs sites, types d’équipements et prestataires.',
      items: [
        'Déposer les modes opératoires ascenseurs pour les techniciens sur site',
        'Relier les certificats incendie aux workflows de conformité',
        'Stocker les contrats prestataires et suivre leurs échéances',
        'Joindre les validations budgétaires aux interventions pour une traçabilité complète',
        'Tenir à jour les notices numériques CVC, plomberie et éclairage',
      ],
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
