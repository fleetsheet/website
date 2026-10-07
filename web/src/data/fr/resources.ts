import type { NavLink } from '@/config'
import type { ResourcesContent } from '@/data/en/resources'

const demo: NavLink = { label: 'Réserver une démo', href: '/contact' }
const apiAccess: NavLink = { label: 'Demander un accès API', href: '/contact' }

export const resources: ResourcesContent = {
  menu: {
    label: 'Ressources',
    groups: { platform: 'Plateforme RunFleet' },
    promo: {
      title: 'Opérationnel en moins de 7 jours',
      description:
        'Avec RunFleet EasyOnboard, une équipe d’onboarding modélise vos processus dans Fleet dès la première semaine.',
      action: { label: 'Découvrir EasyOnboard', href: '/resources/easyonboard' },
    },
  },
  pages: {
    contentLibrary: {
      label: 'Bibliothèque de contenus',
      summary: 'Guides, idées et analyses pour les équipes immobilières et techniques.',
      meta: {
        title: 'Bibliothèque de contenus | Fleet',
        description:
          'Des articles pratiques sur la maintenance, l’IA et l’exploitation immobilière par l’équipe Fleet, en libre accès.',
      },
    },
    customerStories: {
      label: 'Témoignages clients',
      summary: 'Comment les équipes pilotent chaque site avec Fleet.',
      meta: {
        title: 'Témoignages clients | Fleet',
        description:
          'Découvrez comment des équipes immobilières, logistiques et retail réduisent la maintenance corrective et réagissent plus vite avec Fleet.',
      },
    },
    easyOnboard: {
      label: 'RunFleet EasyOnboard',
      summary: 'Onboarding, formation et support pour démarrer en quelques jours.',
      meta: {
        title: 'RunFleet EasyOnboard : onboarding, formation et support | Fleet',
        description:
          'Démarrez avec Fleet en moins de 7 jours. Notre équipe modélise vos processus, importe vos données et forme vos équipes.',
      },
    },
    developers: {
      label: 'Portail développeurs',
      summary: 'Connectez Fleet à vos outils grâce à l’API REST.',
      meta: {
        title: 'Portail développeurs | Fleet',
        description:
          'Connectez Fleet à vos outils financiers, ERP et systèmes immobiliers grâce à l’API REST et à plus de 20 intégrations.',
      },
    },
  },
  contentLibrary: {
    title: 'Explorez notre bibliothèque de contenus',
    description:
      'Des idées concrètes sur la maintenance, l’IA et l’exploitation immobilière par l’équipe Fleet, en libre accès.',
    search: {
      label: 'Rechercher des articles',
      placeholder: 'Rechercher par mot-clé',
      button: 'Rechercher',
    },
    featured: { badge: 'À la une', action: 'Lire l’article' },
    topics: {
      label: 'Thèmes',
      all: 'Tous les thèmes',
      items: {
        ai: 'IA & automatisation',
        maintenance: 'Maintenance',
        operations: 'Exploitation numérique',
        retail: 'Retail & centres',
      },
    },
    card: { type: 'Article', action: 'Lire l’article', englishOnly: 'En anglais' },
    empty: 'Essayez un autre mot-clé ou thème pour voir plus d’articles.',
    cta: {
      title: 'Prêt à mettre ces idées en pratique ?',
      description:
        'Réservez une visite guidée et découvrez comment Fleet réunit vos équipes, vos équipements et vos prestataires.',
      primaryAction: demo,
      secondaryAction: { label: 'Découvrir la plateforme', href: '/platform' },
    },
  },
  customerStories: {
    hero: {
      eyebrow: 'Témoignages clients',
      title: 'Des équipes qui pilotent chaque site en toute confiance',
      description:
        'Découvrez comment des équipes immobilières, logistiques et retail utilisent Fleet pour réduire le correctif, connecter leurs techniciens et réagir plus vite.',
      action: { label: 'Voir tous les témoignages', href: '#stories' },
    },
    spotlight: {
      label: 'Client à la une',
      previous: 'Témoignage précédent',
      next: 'Témoignage suivant',
      action: 'Lire le témoignage',
    },
    results: [
      { value: 'Jusqu’à 40 %', label: 'de maintenance corrective en moins' },
      { value: 'Moins de 7 jours', label: 'pour embarquer votre équipe' },
      { value: '99,99 %', label: 'de disponibilité, garantie par SLA' },
      { value: '20+', label: 'intégrations avec vos outils' },
    ],
    filter: {
      label: 'Trouvez votre secteur',
      all: 'Tous les secteurs',
      sectors: {
        realEstate: 'Immobilier',
        logistics: 'Logistique & entrepôts',
        retail: 'Retail & centres',
      },
    },
    stories: [
      {
        sector: 'realEstate',
        organization: 'Programme mixte',
        metric: 'Près de 40 %',
        metricLabel: 'de maintenance corrective en moins',
        title:
          'Comment un programme mixte a réuni techniciens, registres d’équipements et interventions au même endroit',
        quote:
          'Fleet a réduit notre maintenance corrective de près de 40 %. Nos techniciens, registres d’équipements et interventions sont enfin réunis au même endroit.',
        author: 'Responsable exploitation immobilière',
      },
      {
        sector: 'logistics',
        organization: 'Plateforme logistique',
        metric: 'Sur mesure',
        metricLabel: 'une solution avec un support plus rapide',
        title: 'Pourquoi une plateforme logistique a choisi un outil pensé pour son activité',
        quote:
          'Les autres plateformes étaient trop complexes ou trop génériques. Fleet nous a apporté une solution sur mesure avec un support plus rapide.',
        author: 'Directeur de la maintenance',
      },
      {
        sector: 'retail',
        organization: 'Exploitant régional de centres commerciaux',
        metric: 'Près de 40 %',
        metricLabel: 'de maintenance corrective en moins',
        title: 'Comment un exploitant régional de centres a gagné en visibilité sur tous ses sites',
        quote:
          'Fleet nous a aidés à réduire la maintenance corrective de près de 40 %. Nous voyons désormais tous nos sites et réagissons plus vite.',
        author: 'Directeur des opérations',
      },
    ],
    readStory: 'Lire le témoignage',
    serve: {
      title: 'Des équipes de tous types de patrimoines nous font confiance',
      description:
        'Des équipes d’exploitation de trois personnes aux services de maintenance de plusieurs centaines de collaborateurs répartis dans plusieurs villes.',
      items: [
        {
          label: 'Immobilier',
          detail: 'Tertiaire, résidentiel et mixte',
          href: '/solutions/offices-mixed-use',
        },
        {
          label: 'Logistique et entreposage',
          detail: 'Plateformes, quais et flottes',
          href: '/solutions/shipping-logistics',
        },
        {
          label: 'Éducation et campus',
          detail: 'Écoles, universités et campus',
          href: '/solutions/healthcare-education',
        },
        {
          label: 'Retail et réseaux multisites',
          detail: 'Centres, magasins et agences',
          href: '/solutions/shopping-malls-retail',
        },
        {
          label: 'Associations et collectivités',
          detail: 'Bâtiments publics et associatifs',
          href: '/solutions/facility-management',
        },
      ],
    },
    share: {
      title: 'Partagez votre histoire avec Fleet',
      description:
        'Vous obtenez de beaux résultats avec Fleet ? Nous serions ravis de présenter votre équipe.',
      action: { label: 'Nous contacter', href: '/contact' },
    },
    cta: {
      title: 'Écrivez votre propre réussite',
      description:
        'Réservez une visite guidée et découvrez comment Fleet accompagne vos équipes, équipements et prestataires.',
      primaryAction: demo,
      secondaryAction: { label: 'Découvrir la plateforme', href: '/platform' },
    },
  },
  easyOnboard: {
    hero: {
      eyebrow: 'RunFleet EasyOnboard',
      title: 'Opérationnel avec Fleet en moins de 7 jours',
      description:
        'Notre équipe d’onboarding modélise vos processus, importe vos données et forme vos équipes, pour que chaque site soit prêt dès la première semaine.',
      highlights: [
        'Onboarding localisé',
        'Formation pour chaque rôle',
        'Support par chat en direct',
      ],
      primaryAction: demo,
      secondaryAction: { label: 'Parcourir la base de connaissances', href: '#knowledge-base' },
    },
    stats: [
      { value: 'Moins de 7 jours', label: 'pour l’accès prestataires et les flux d’interventions' },
      { value: 'Semaine 1', label: 'modélisation des processus avec notre équipe' },
      { value: 'Chaque rôle', label: 'formé, des techniciens à la direction' },
      { value: 'Chat en direct', label: 'un support assuré par notre équipe' },
    ],
    steps: {
      title: 'Votre première semaine avec Fleet',
      description:
        'Un parcours guidé du lancement à la mise en service, adapté à votre patrimoine.',
      label: 'Étape',
      items: [
        {
          title: 'Lancement et configuration',
          description:
            'Onboarding localisé et configuration du compte pour vos régions, sites et équipes.',
        },
        {
          title: 'Modéliser vos processus',
          description:
            'Notre équipe modélise dans Fleet vos processus de maintenance, d’inspection et de gestion des prestataires.',
        },
        {
          title: 'Importer vos données',
          description:
            'Importez équipements et documents par import de données, synchronisation API ou dépôt accompagné.',
        },
        {
          title: 'Inviter équipes et prestataires',
          description:
            'Donnez accès aux techniciens, responsables et prestataires, avec des flux d’interventions prêts à l’emploi.',
        },
        {
          title: 'Former et démarrer',
          description:
            'Formations par rôle et guides d’adoption numérique pour que chaque équipe travaille en confiance.',
        },
      ],
    },
    knowledge: {
      title: 'Base de connaissances',
      description: 'Des guides pour que chaque équipe tire le meilleur de Fleet.',
      search: {
        label: 'Rechercher dans la base de connaissances',
        placeholder: 'Rechercher un thème d’onboarding',
      },
      empty: 'Essayez un autre mot-clé pour voir plus de thèmes.',
      groups: {
        start: 'Pour commencer',
        maintenance: 'Maintenance',
        assets: 'Équipements et conformité',
        automation: 'Automatisation et intégrations',
      },
      faqs: 'Questions fréquentes',
    },
    training: {
      title: 'Des formations qui donnent confiance',
      description:
        'Une formation structurée donne aux responsables et aux équipes les compétences et KPI pour piloter chaque bâtiment.',
      items: [
        {
          title: 'Standardisation des processus',
          description: 'Pour la maintenance, les inspections et la gestion des prestataires.',
        },
        {
          title: 'Configuration des KPI',
          description:
            'Pour les délais de réponse, les SLA, les taux de clôture et l’état des équipements.',
        },
        {
          title: 'Communication entre équipes',
          description: 'Pour aligner les régions dans l’exploitation immobilière.',
        },
        {
          title: 'Guides d’adoption numérique',
          description: 'Qui accompagnent les équipes passant du papier ou d’anciens systèmes.',
        },
        {
          title: 'Tableaux de bord de direction',
          description: 'Pour une vue en temps réel des sites, zones et groupes d’équipements.',
        },
      ],
    },
    support: {
      title: 'Un support à chaque instant',
      description:
        'Des personnes réelles, prêtes à aider vos équipes bien après la mise en service.',
      items: [
        {
          title: 'Support par chat en direct',
          description: 'Un chat chaleureux qui vous met directement en relation avec notre équipe.',
        },
        {
          title: 'Équipe multi-fuseaux',
          description:
            'Une équipe support sur plusieurs fuseaux horaires pour les patrimoines multirégions.',
        },
        {
          title: 'Ressources de formation',
          description: 'Une équipe support dédiée et des ressources de formation et d’onboarding.',
        },
      ],
    },
    faqTitle: 'Questions sur l’onboarding',
    faq: [
      {
        question: 'Combien de temps faut-il pour démarrer avec Fleet ?',
        answer:
          'La plupart des équipes démarrent avec Fleet en moins de 7 jours, avec un accès prestataires complet et des flux d’interventions prêts.',
      },
      {
        question: 'Pouvons-nous migrer nos données existantes ?',
        answer:
          'Oui. Fleet propose des parcours de migration sur mesure : import d’équipements, synchronisation API et dépôts manuels accompagnés.',
      },
      {
        question: 'Qui configure Fleet pour nos processus ?',
        answer:
          'Le constructeur visuel de workflows permet à votre équipe de configurer Fleet facilement, et notre équipe d’onboarding vous aide à modéliser vos processus dès la première semaine.',
      },
      {
        question: 'Comment les techniciens et prestataires accèdent-ils à Fleet ?',
        answer:
          'Fleet fonctionne dans tout navigateur mobile : techniciens et prestataires démarrent immédiatement avec les interventions qui leur sont confiées.',
      },
    ],
    cta: {
      title: 'Lancez votre première semaine avec Fleet',
      description:
        'Réservez une visite et nous planifierons un onboarding adapté à votre patrimoine.',
      primaryAction: demo,
      secondaryAction: { label: 'Contacter notre équipe', href: '/contact' },
    },
  },
  developers: {
    hero: {
      eyebrow: 'Portail développeurs',
      title: 'Fleet pour les développeurs',
      description:
        'Tout pour connecter Fleet à vos outils, des logiciels financiers aux systèmes immobiliers.',
      primaryAction: apiAccess,
      secondaryAction: { label: 'Découvrir les intégrations', href: '/platform/integrations' },
    },
    cards: [
      {
        title: 'Construire votre intégration',
        description:
          'Connectez comptabilité, fournisseurs/clients et ERP à Fleet via l’API REST, avec notre équipe à vos côtés.',
        action: apiAccess,
      },
      {
        title: 'Découvrir les intégrations',
        description:
          'Voyez comment Fleet se connecte aux outils financiers, ERP, portails locataires et systèmes du bâtiment.',
        action: { label: 'Voir les intégrations', href: '/platform/integrations' },
      },
      {
        title: 'Rester informé',
        description:
          'Suivez les nouveautés produit et les idées de l’équipe Fleet dans la bibliothèque de contenus.',
        action: { label: 'Voir la bibliothèque', href: '/insights' },
      },
    ],
    capabilities: {
      title: 'Capacités d’intégration',
      description:
        'Les façons les plus courantes de connecter Fleet pour fluidifier l’exploitation.',
      items: [
        {
          title: 'Interventions',
          description:
            'Intégrez dans Fleet les demandes d’autres systèmes et synchronisez le statut des interventions.',
          points: ['Création de demandes', 'Mises à jour de statut'],
        },
        {
          title: 'Données d’équipements',
          description:
            'Importez et synchronisez vos équipements pour une source unique partagée par tous vos systèmes.',
          points: ['Import d’équipements', 'Synchronisation API'],
        },
        {
          title: 'Finance et fournisseurs/clients',
          description:
            'Reliez la maintenance à la comptabilité, aux fournisseurs/clients et à l’ERP pour un reporting unifié.',
          points: ['Coûts et factures', 'Reporting unifié'],
        },
        {
          title: 'Systèmes immobiliers',
          description: 'Connectez portails locataires, contrôle d’accès et GTB.',
          points: ['Portails locataires', 'Gestion technique du bâtiment'],
        },
      ],
    },
    platform: {
      title: 'Une plateforme sûre et fiable',
      items: [
        { value: 'API REST', label: 'pour les outils financiers, ERP et systèmes immobiliers' },
        { value: '20+', label: 'intégrations avec vos outils' },
        { value: '99,99 %', label: 'de disponibilité, garantie par SLA' },
        { value: 'Journaux d’audit', label: 'et stockage chiffré' },
      ],
    },
    cta: {
      title: 'Prêt à connecter Fleet ?',
      description:
        'Parlez-nous de vos systèmes et notre équipe vous aidera à planifier l’intégration.',
      primaryAction: apiAccess,
      secondaryAction: demo,
    },
  },
}
