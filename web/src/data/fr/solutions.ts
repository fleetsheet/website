import type { NavLink } from '@/config'
import type { PlatformEntry } from '@/data/en/platform'
import type { CategoryPageContent, SolutionsShared } from '@/data/en/solutions'
import type { CategoryPageId, IndustryPageId, SolutionGroup, SolutionPageId } from '@/solutions'

export const menu = {
  label: 'Solutions',
  groups: {
    category: 'Par catégorie',
    industry: 'Par secteur',
  } satisfies Record<SolutionGroup, string>,
  contact: 'Votre secteur n’est pas listé ? Contactez-nous',
  promo: {
    title: 'Trouvez la solution adaptée',
    description:
      'Découvrez comment Fleet s’adapte à votre activité, votre patrimoine et votre équipe.',
    action: {
      label: 'Réserver une démo',
      href: '/contact',
    } satisfies NavLink,
  },
}

export const pages: Record<SolutionPageId, PlatformEntry> = {
  cafm: {
    label: 'GMAO/CAFM',
    summary: 'Un système connecté pour la maintenance, les équipements et les bâtiments.',
    meta: {
      title: 'Logiciel GMAO et CAFM pour les équipes multisites | Fleet',
      description:
        'Fleet est la plateforme GMAO et CAFM dans le cloud qui réunit interventions, maintenance préventive, équipements et conformité pour chaque site.',
    },
  },
  pms: {
    label: 'PMS/REMS',
    summary: 'L’exploitation immobilière et le patrimoine en une vue en direct.',
    meta: {
      title: 'Logiciel de gestion immobilière et de property management | Fleet',
      description:
        'Pilotez l’exploitation de tout votre patrimoine avec Fleet : budgets, documents, maintenance et reporting dans une seule plateforme.',
    },
  },
  workOrders: {
    label: 'Bons d’intervention',
    summary: 'Créez, assignez et clôturez chaque intervention en toute transparence.',
    meta: {
      title: 'Logiciel de gestion des interventions | Fleet',
      description:
        'Créez, assignez, suivez et clôturez les interventions sur tous vos sites, avec mises à jour mobiles, suivi des SLA et preuves photo.',
    },
  },
  fieldService: {
    label: 'Optimisation des interventions terrain',
    summary: 'Le bon technicien sur le bon site, prêt à intervenir.',
    meta: {
      title: 'Logiciel d’optimisation des interventions terrain | Fleet',
      description:
        'Planifiez, assignez et suivez équipes terrain et prestataires sur tous vos sites, avec check-lists mobiles, statut en direct et rapports de performance.',
    },
  },
  tenants: {
    label: 'Gestion des locataires et résidents',
    summary: 'Demandes, suivi et service que les résidents peuvent suivre.',
    meta: {
      title: 'Logiciel de gestion des locataires et résidents | Fleet',
      description:
        'Recueillez les demandes des locataires et résidents, informez chacun et résolvez rapidement les problèmes dans chaque bâtiment et logement.',
    },
  },
  vendors: {
    label: 'Gestion des prestataires et fournisseurs',
    summary: 'Prestataires, devis, contrats et performance réunis.',
    meta: {
      title: 'Logiciel de gestion des prestataires et fournisseurs | Fleet',
      description:
        'Coordonnez prestataires et fournisseurs dans une seule plateforme, avec devis, validations, contrats, certificats et évaluations de performance.',
    },
  },
  facilityManagement: {
    label: 'Facility management',
    summary: 'Chaque bâtiment, équipement et équipe dans un seul tableau de bord.',
    meta: {
      title: 'Logiciel de facility management | Fleet',
      description:
        'Pilotez l’exploitation de chaque site avec Fleet : interventions, maintenance préventive, équipements, prestataires et conformité dans une plateforme.',
    },
  },
  retail: {
    label: 'Centres commerciaux et retail',
    summary: 'Boutiques et parties communes prêtes chaque jour.',
    meta: {
      title: 'Logiciel de maintenance pour centres commerciaux et retail | Fleet',
      description:
        'Gardez vos centres prêts à accueillir le public avec des interventions rapides, des plans pour ascenseurs et CVC, la coordination des locataires et le suivi des coûts.',
    },
  },
  hospitality: {
    label: 'Hôtellerie et restauration',
    summary: 'Salle et coulisses prêtes pour chaque client.',
    meta: {
      title: 'Logiciel de maintenance pour hôtels et restaurants | Fleet',
      description:
        'Protégez l’expérience client avec des interventions mobiles, le contrôle des équipements de cuisine, la conformité sécurité et la maintenance préventive.',
    },
  },
  healthcareEducation: {
    label: 'Santé et éducation',
    summary: 'Des bâtiments sûrs et conformes pour patients et élèves.',
    meta: {
      title: 'Logiciel de maintenance pour la santé et l’éducation | Fleet',
      description:
        'Gardez hôpitaux, cliniques, écoles et campus sûrs et conformes grâce à la maintenance préventive, des preuves prêtes pour l’audit et des réparations rapides.',
    },
  },
  logistics: {
    label: 'Transport et logistique',
    summary: 'Quais, équipements et véhicules toujours en mouvement.',
    meta: {
      title: 'Logiciel de maintenance pour la logistique et les entrepôts | Fleet',
      description:
        'Gardez quais, convoyeurs, chariots et véhicules en service avec des interventions mobiles, des plans préventifs et le suivi des arrêts sur chaque site.',
    },
  },
  hvacLifts: {
    label: 'CVC, ascenseurs et élévateurs',
    summary: 'Des installations critiques entretenues et certifiées.',
    meta: {
      title: 'Logiciel de maintenance CVC et ascenseurs | Fleet',
      description:
        'Planifiez et prouvez la maintenance CVC, ascenseurs et escaliers mécaniques avec des plans récurrents, des certificats, des prestataires et l’analyse des arrêts.',
    },
  },
  dataCenters: {
    label: 'Centres de données',
    summary: 'Refroidissement, énergie et disponibilité maîtrisés.',
    meta: {
      title: 'Logiciel de maintenance pour centres de données | Fleet',
      description:
        'Protégez la disponibilité avec des plans pour le refroidissement et l’énergie, des alertes reliées à la GTB, des traces de changement complètes et des prestataires.',
    },
  },
  fitness: {
    label: 'Centres de fitness et de bien-être',
    summary: 'Des espaces propres, sûrs et opérationnels pour les membres.',
    meta: {
      title: 'Logiciel de maintenance pour salles de sport et centres de bien-être | Fleet',
      description:
        'Gardez salles, studios, piscines et spas propres, sûrs et opérationnels avec le contrôle des équipements, des plannings de nettoyage et des réparations rapides.',
    },
  },
  mep: {
    label: 'Maintenance CVC, électricité et plomberie',
    summary: 'Génie climatique, électricité et plomberie dans un seul flux.',
    meta: {
      title: 'Logiciel de maintenance multitechnique | Fleet',
      description:
        'Gérez la maintenance CVC, électrique et plomberie de tout votre patrimoine avec des plans préventifs, une affectation par métier et des preuves de conformité.',
    },
  },
  offices: {
    label: 'Bureaux et usage mixte',
    summary: 'Des espaces de travail productifs et des parties communes fluides.',
    meta: {
      title: 'Logiciel de maintenance pour bureaux et immeubles mixtes | Fleet',
      description:
        'Exploitez bureaux et projets mixtes avec les demandes locataires, la maintenance préventive, la coordination des prestataires et un reporting consolidé.',
    },
  },
  industrial: {
    label: 'Usines et sites industriels',
    summary: 'Des équipements de production entretenus pour une disponibilité maximale.',
    meta: {
      title: 'Logiciel de maintenance pour usines et sites industriels | Fleet',
      description:
        'Maximisez la disponibilité avec un registre des équipements, une maintenance préventive et à l’usage, des inspections sécurité et l’analyse des arrêts.',
    },
  },
  vehicles: {
    label: 'Gestion de flotte',
    summary: 'Chaque véhicule, de l’achat à la mise hors service.',
    meta: {
      title: 'Logiciel de gestion de flotte de véhicules | Fleet',
      description:
        'Gérez chaque véhicule au même endroit : achat, maintenance, immatriculations, sinistres, amendes et utilisation, avec des dossiers prêts pour l’audit.',
    },
  },
}

export const shared: SolutionsShared = {
  actions: {
    primary: {
      label: 'Réserver une démo',
      href: '/contact',
    },
    secondary: {
      label: 'Explorer la plateforme',
      href: '/platform',
    },
  },
  results: {
    eyebrow: 'Résultats',
    title: 'Des résultats mesurables sur chaque site',
    description:
      'Les équipes immobilières et de facility management utilisent Fleet pour réduire le correctif, démarrer vite et assurer la continuité des opérations.',
    items: [
      {
        value: 'Jusqu’à 40 %',
        label: 'de maintenance corrective en moins',
      },
      {
        value: 'Moins de 7 jours',
        label: 'pour lancer votre équipe',
      },
      {
        value: '99,99 %',
        label: 'de disponibilité, garantie par SLA',
      },
      {
        value: '20+',
        label: 'intégrations avec vos outils',
      },
    ],
  },
  why: {
    title: 'Pourquoi les équipes choisissent Fleet',
    description:
      'Fleet est conçu pour les équipes immobilières et de facility management multisites, avec la configurabilité au cœur.',
    items: [
      {
        title: 'Flexible',
        description:
          'Workflows, règles et tableaux de bord configurés par actif, région ou patrimoine.',
      },
      {
        title: 'Intelligent',
        description:
          'RunnerAI et des prévisions fondées sur des règles orientent chaque équipe vers la prochaine priorité.',
      },
      {
        title: 'Collaboratif',
        description:
          'Équipes internes, prestataires et responsables partagent les mêmes données en direct, sur tout appareil.',
      },
    ],
  },
  industries: {
    title: 'Une plateforme pour chaque secteur',
    description: 'Fleet s’adapte aux équipements, aux équipes et aux normes de votre secteur.',
    items: [
      {
        id: 'facilityManagement',
        photo: {
          id: 'inspectionClipboard',
          alt: 'Inspecteur remplissant une check-list',
        },
      },
      {
        id: 'retail',
        photo: {
          id: 'mallAtrium',
          alt: 'Visiteurs dans l’atrium d’un centre commercial',
        },
      },
      {
        id: 'hospitality',
        photo: {
          id: 'hotelHousekeeping',
          alt: 'Femme de chambre préparant une chambre',
        },
      },
      {
        id: 'healthcareEducation',
        photo: {
          id: 'cleanerCorridor',
          alt: 'Agent d’entretien désinfectant une poignée de porte',
        },
      },
      {
        id: 'logistics',
        photo: {
          id: 'warehouseTeam',
          alt: 'Équipe d’entrepôt contrôlant le stock entre les rayonnages',
        },
      },
      {
        id: 'hvacLifts',
        photo: {
          id: 'hvacTechnicians',
          alt: 'Techniciens CVC sur des unités en toiture',
        },
      },
      {
        id: 'dataCenters',
        photo: {
          id: 'dataCenter',
          alt: 'Rangées de baies de serveurs dans un centre de données',
        },
      },
      {
        id: 'fitness',
        photo: {
          id: 'acFilterService',
          alt: 'Technicien remplaçant un filtre de climatisation',
        },
      },
      {
        id: 'mep',
        photo: {
          id: 'electricianPanel',
          alt: 'Électricien intervenant sur une armoire électrique',
        },
      },
      {
        id: 'offices',
        photo: {
          id: 'officeFloor',
          alt: 'Plateau de bureaux ouvert avec des personnes au travail',
        },
      },
      {
        id: 'industrial',
        photo: {
          id: 'plantManagers',
          alt: 'Directeur d’usine échangeant avec des ingénieurs casqués',
        },
      },
      {
        id: 'vehicles',
        photo: {
          id: 'fleetVans',
          alt: 'Fourgons de livraison devant un entrepôt',
        },
      },
    ],
  },
  integrate: {
    title: 'Fleet s’intègre à vos outils',
    description:
      'Connectez comptabilité, ERP, GTB, portails locataires et contrôle d’accès grâce à plus de 20 intégrations et une API REST ouverte.',
    action: {
      label: 'Voir toutes les intégrations',
      href: '/platform/integrations',
    },
  },
  faqTitle: 'Questions fréquentes',
  cta: {
    title: 'Pilotez chaque site en toute confiance',
    description:
      'Découvrez lors d’une visite guidée comment Fleet réunit vos équipes, vos équipements et vos prestataires, selon votre patrimoine.',
    primaryAction: {
      label: 'Réserver une démo',
      href: '/contact',
    },
    secondaryAction: {
      label: 'Explorer la plateforme',
      href: '/platform',
    },
    photo: {
      id: 'techniciansPanel',
      alt: 'Deux techniciens contrôlant un tableau d’équipement',
    },
  },
}

export const categories: Record<CategoryPageId, CategoryPageContent> = {
  cafm: {
    hero: {
      eyebrow: 'GMAO/CAFM',
      title: 'Logiciel GMAO et CAFM pour des opérations connectées',
      description:
        'Fleet réunit bâtiments, équipements, équipes et preuves de conformité dans une plateforme cloud, pour que chaque site fonctionne avec des données en direct.',
      highlights: [
        'Interventions et préventif',
        'Historique des équipements',
        'Preuves prêtes pour l’audit',
      ],
      visual: {
        kind: 'jobs',
        title: 'Interventions · Harbour Point',
        items: [
          {
            title: 'Alarme basse pression groupe froid',
            location: 'Local technique B2',
            status: 'En cours',
            tone: 'info',
          },
          {
            title: 'Test trimestriel pompe incendie',
            location: 'Local pompes',
            status: 'Prévu aujourd’hui',
            tone: 'due',
          },
          {
            title: 'Réparation éclairage du hall',
            location: 'Niveau 1',
            status: 'Terminée',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Les bâtiments gagnent en complexité',
        description:
          'Plus de bâtiments, d’équipements, de prestataires et d’échéances réglementaires, chacun avec ses documents, ses plannings et ses normes.',
        points: ['Nombreux sites', 'Nombreux systèmes', 'Nombreuses normes'],
      },
      answer: {
        title: 'Tout est connecté dans un seul CAFM',
        description:
          'Fleet réunit équipements, équipes, prestataires et workflows dans une plateforme flexible conçue pour l’immobilier multisite.',
      },
    },
    capabilities: {
      title: 'Conçu pour tous vos besoins de facility management',
      description: 'De la première demande au rapport final, toute la maintenance au même endroit.',
      tabs: [
        {
          icon: 'workOrders',
          label: 'Interventions',
          title: 'Résolvez plus vite les dépannages',
          description:
            'Créez, assignez et suivez les réparations ponctuelles avec photos, priorités et mises à jour en direct depuis le terrain.',
          points: [
            'Demandes avec photos et localisation',
            'Interventions confiées aux équipes ou prestataires',
            'Délais SLA sur chaque intervention',
          ],
          visual: {
            kind: 'jobs',
            title: 'Dépannages · Tower B',
            items: [
              {
                title: 'Fuite d’eau',
                location: 'Niveau 12 · Logement 3B',
                status: 'En retard de 2 h',
                tone: 'overdue',
              },
              {
                title: 'Climatisation inefficace',
                location: 'Niveau 8 · Bureau',
                status: 'Assignée',
                tone: 'info',
              },
              {
                title: 'Ferme-porte défectueux',
                location: 'Hall',
                status: 'Résolue',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Préventif',
          title: 'Anticipez et prolongez la durée de vie',
          description:
            'Planifiez la maintenance récurrente du CVC, de la plomberie, de l’éclairage et de la sécurité incendie selon le temps ou l’usage.',
          points: [
            'Plans récurrents par type d’équipement',
            'Check-lists pour chaque visite',
            'Interventions créées avant l’échéance',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan préventif',
            steps: [
              {
                kind: 'Plan',
                text: 'AHU-07 · entretien mensuel',
              },
              {
                kind: 'Puis',
                text: 'Créer l’intervention 7 jours avant',
              },
              {
                kind: 'Puis',
                text: 'Assigner l’équipe CVC avec check-list',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Équipements',
          title: 'Chaque équipement entièrement documenté',
          description:
            'Tenez un registre en direct de chaque équipement avec historique, coûts, garanties et manuels.',
          points: [
            'Fiches numériques pour chaque équipement',
            'Historique et coûts des réparations',
            'Rappels de garanties et de contrats',
          ],
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
        {
          icon: 'analytics',
          label: 'Reporting',
          title: 'Des décisions fondées sur des données en direct',
          description:
            'Identifiez les bâtiments aux pannes récurrentes, les équipements les plus coûteux et les équipes qui respectent leurs SLA.',
          points: [
            'Tableaux de bord par site et équipe',
            'Indicateurs personnalisés pour chaque rôle',
            'Exports pour les audits et les comités',
          ],
          visual: {
            kind: 'chart',
            title: 'SLA respectés par site · T3',
            stats: [
              {
                label: 'SLA respectés',
                value: '96,4 %',
              },
              {
                label: 'Interventions ouvertes',
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
        tag: 'Automatisation',
        title: 'Des opérations qui passent à l’échelle',
        description:
          'Automatisez les tâches administratives avec le Workflow Builder et laissez RunnerAI signaler les prochaines priorités.',
        points: [
          'Modèles récurrents et notifications intelligentes',
          'Validations selon le coût, le site ou l’équipement',
          'Suggestions de RunnerAI à partir des données en direct',
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
              what: 'a signalé 3 sites avec des pannes CVC récurrentes',
            },
          ],
        },
        photo: {
          id: 'hvacTechnicians',
          alt: 'Techniciens CVC sur des unités en toiture',
        },
      },
      {
        tag: 'Conformité',
        title: 'Des preuves prêtes pour l’audit sur chaque site',
        description:
          'Pistes d’audit, stockage documentaire et gestion des versions intégrés gardent en ordre chaque rapport, autorisation et inspection.',
        points: [
          'Journaux horodatés pour chaque action',
          'Certificats rattachés à chaque équipement',
          'Exports pour tout audit en quelques clics',
        ],
        visual: {
          kind: 'files',
          title: 'Conformité · Tower B',
          items: [
            {
              title: 'Certificat sécurité incendie.pdf',
              location: 'Valide jusqu’en juin 2027',
              status: 'Valide',
              tone: 'done',
            },
            {
              title: 'Inspection ascenseurs T3.pdf',
              location: 'Ascenseurs centraux',
              status: 'Vérifié',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'inspectionClipboard',
          alt: 'Inspecteur remplissant une check-list',
        },
      },
      {
        tag: 'Collaboration',
        title: 'Un dossier partagé par toutes les équipes',
        description:
          'Techniciens internes, prestataires et responsables travaillent sur les mêmes données en direct, sur téléphone, tablette ou ordinateur.',
        points: [
          'Mises à jour partagées en temps réel',
          'Preuve photo à chaque clôture',
          'Accès rapide pour les prestataires',
        ],
        visual: {
          kind: 'jobs',
          title: 'Activité de l’équipe',
          items: [
            {
              title: 'Marco L. · Interne',
              location: 'WO-2291 clôturée',
              status: 'Terminée',
              tone: 'done',
            },
            {
              title: 'CoolAir · Prestataire',
              location: 'WO-2304 acceptée',
              status: 'Acceptée',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'colleaguesTablets',
          alt: 'Deux collègues consultent des interventions sur tablette',
        },
      },
    ],
    quote: {
      text: 'Fleet a réduit notre maintenance corrective de près de 40 %. Nos techniciens, nos registres d’équipements et nos interventions sont enfin réunis au même endroit.',
      author: 'Responsable exploitation',
      company: 'Projet à usage mixte',
      photo: {
        id: 'factoryTechnician',
        alt: 'Technicien contrôlant un équipement avec une tablette',
      },
    },
    faq: [
      {
        question: 'Qu’est-ce qu’un logiciel CAFM ?',
        answer:
          'Un logiciel CAFM (gestion des installations assistée par ordinateur) réunit bâtiments, équipements, maintenance, documents et équipes dans un même système pour planifier, piloter et suivre chaque site.',
      },
      {
        question: 'Quelle différence entre CAFM et GMAO ?',
        answer:
          'La GMAO se concentre sur la maintenance et les équipements, le CAFM couvre l’ensemble de l’exploitation des bâtiments. Fleet réunit les deux : interventions, préventif, équipements, documents et reporting.',
      },
      {
        question: 'Fleet gère-t-il plusieurs sites ?',
        answer:
          'Oui. Fleet est conçu pour le multisite : règles et workflows par actif, responsables régionaux et rapports consolidés sur tout le patrimoine.',
      },
      {
        question: 'Fleet s’intègre-t-il à nos outils existants ?',
        answer:
          'Oui. Fleet se connecte à la comptabilité, aux ERP, aux GTB, aux portails locataires et au contrôle d’accès grâce à plus de 20 intégrations et une API REST ouverte.',
      },
      {
        question: 'Combien de temps prend la mise en place ?',
        answer:
          'La plupart des équipes sont opérationnelles en moins de 7 jours. Notre équipe d’intégration importe avec vous équipements, plans de maintenance et utilisateurs.',
      },
    ],
  },
  pms: {
    hero: {
      eyebrow: 'PMS/REMS',
      title: 'Gestion immobilière et property management en une plateforme',
      description:
        'Fleet offre aux équipes immobilières une vue en direct de chaque actif, des budgets et documents à la maintenance, aux prestataires et à la conformité.',
      highlights: ['Vue patrimoine', 'Suivi budgétaire', 'Rapports pour les comités'],
      visual: {
        kind: 'asset',
        title: 'Fiche actif',
        name: 'Harbour Point',
        location: 'Usage mixte · 14 étages',
        status: 'Actif',
        facts: [
          {
            label: 'Interventions ouvertes',
            value: '12',
          },
          {
            label: 'SLA respectés',
            value: '96,4 %',
          },
          {
            label: 'Dépenses depuis janv.',
            value: '184 k$',
          },
          {
            label: 'Budget consommé',
            value: '71 %',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Chaque actif a son propre rythme',
        description:
          'Baux, budgets, maintenance, prestataires et échéances avancent à un rythme différent dans chaque bâtiment.',
        points: ['Données patrimoine', 'Budgets par actif', 'Reporting propriétaires'],
      },
      answer: {
        title: 'Une source unique pour tout votre patrimoine',
        description:
          'Fleet unifie les données d’exploitation de chaque actif, pour que asset managers, property managers et propriétaires partagent les mêmes chiffres en direct.',
      },
    },
    capabilities: {
      title: 'Pilotez votre patrimoine en toute clarté',
      description: 'Exploitation, finances et maintenance réunies dans une plateforme.',
      tabs: [
        {
          icon: 'portfolio',
          label: 'Patrimoine',
          title: 'Chaque actif en un coup d’œil',
          description:
            'Visualisez travaux en cours, dépenses et conformité de chaque actif sur une carte et un tableau de bord.',
          points: [
            'Vues carte et liste de chaque actif',
            'Statut par bâtiment, région ou propriétaire',
            'Du patrimoine jusqu’à l’équipement',
          ],
          visual: {
            kind: 'chart',
            title: 'Dépenses par actif · depuis janv.',
            stats: [
              {
                label: 'Dépenses',
                value: '184 k$',
              },
              {
                label: 'Actifs',
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
          title: 'Budgets et coûts maîtrisés',
          description:
            'Suivez les dépenses de maintenance par actif, centre de coûts et prestataire face au budget, avec validation au-delà de seuils définis.',
          points: [
            'Budget et réalisé pour chaque actif',
            'Dépenses par centre de coûts et prestataire',
            'Validations au-delà des seuils',
          ],
          visual: {
            kind: 'jobs',
            title: 'Budget par actif',
            items: [
              {
                title: 'Harbour Point',
                location: '62 k$ sur 80 k$',
                status: '78 % consommé',
                tone: 'info',
              },
              {
                title: 'Tower B',
                location: '31 k$ sur 35 k$',
                status: '89 % consommé',
                tone: 'due',
              },
              {
                title: 'Bayview',
                location: '18 k$ sur 30 k$',
                status: '60 % consommé',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'documents',
          label: 'Documents',
          title: 'Des baux aux rapports d’entretien',
          description:
            'Stockez baux, contrats, autorisations et rapports, rattachés à l’actif, au lot et à l’équipement concernés.',
          points: [
            'Fichiers liés aux actifs et aux lots',
            'Historique des versions de chaque document',
            'Rappels avant l’échéance des autorisations et contrats',
          ],
          visual: {
            kind: 'files',
            title: 'Documents · Harbour Point',
            items: [
              {
                title: 'État locatif 2026.pdf',
                location: 'Location',
                status: 'À jour',
                tone: 'done',
              },
              {
                title: 'Autorisation incendie.pdf',
                location: 'Expire dans 30 jours',
                status: 'Renouveler',
                tone: 'due',
              },
              {
                title: 'Rapport entretien CVC.pdf',
                location: 'Local technique B2',
                status: 'Vérifié',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Reporting',
          title: 'Un reporting prêt pour les comités',
          description:
            'Partagez des tableaux de bord en lecture seule avec propriétaires et comités, et planifiez des rapports pour chaque partie prenante.',
          points: [
            'Tableaux de bord en lecture seule',
            'Rapports planifiés par e-mail',
            'Synthèses pour tout le patrimoine',
          ],
          visual: {
            kind: 'steps',
            title: 'Rapport propriétaire',
            steps: [
              {
                kind: 'Données',
                text: 'Dépenses, SLA et travaux en cours',
              },
              {
                kind: 'Filtre',
                text: 'Harbour Point · dernier trimestre',
              },
              {
                kind: 'Envoi',
                text: 'Premier lundi de chaque mois',
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Maintenance',
        title: 'La maintenance reliée à chaque actif',
        description:
          'Interventions, plans préventifs et historique des équipements remontent à chaque actif, pour suivre la santé opérationnelle de tout le patrimoine.',
        points: [
          'Travaux ouverts et en retard par actif',
          'Respect du préventif par bâtiment',
          'Coûts des équipements consolidés',
        ],
        visual: {
          kind: 'jobs',
          title: 'Santé du patrimoine',
          items: [
            {
              title: 'Harbour Point',
              location: '12 interventions ouvertes',
              status: 'Conforme',
              tone: 'done',
            },
            {
              title: 'Tower B',
              location: '3 interventions en retard',
              status: 'À revoir',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'apartmentBuilding',
          alt: 'Résidences modernes entourées de jardins',
        },
      },
      {
        tag: 'Multisite',
        title: 'D’un bâtiment à tout un patrimoine',
        description:
          'Définissez règles et workflows par actif, organisez des équipes régionales et consolidez les rapports de tous les sites.',
        points: [
          'Règles et workflows par actif',
          'Équipes et droits régionaux',
          'Reporting consolidé du patrimoine',
        ],
        visual: {
          kind: 'steps',
          title: 'Déploiement régional',
          steps: [
            {
              kind: 'Région',
              text: 'EAU · 6 actifs',
            },
            {
              kind: 'Puis',
              text: 'Appliquer les règles de validation',
            },
            {
              kind: 'Puis',
              text: 'Consolider le rapport hebdomadaire',
            },
          ],
        },
        photo: {
          id: 'engineersRooftop',
          alt: 'Deux ingénieurs consultent une tablette en toiture',
        },
      },
      {
        tag: 'RunnerAI',
        title: 'Des réponses sur le patrimoine en quelques secondes',
        description:
          'Demandez à RunnerAI la performance des prestataires par région ou un tableau de bord des risques pour vos principaux actifs, construit à partir des données en direct.',
        points: [
          'Questions en langage courant',
          'Tableaux de bord en quelques secondes',
          'Réponses issues des données en direct',
        ],
        visual: {
          kind: 'log',
          title: 'Activité RunnerAI',
          entries: [
            {
              when: '10:05',
              who: 'Vous',
              what: 'avez demandé la performance des prestataires aux EAU',
            },
            {
              when: '10:05',
              who: 'RunnerAI',
              what: 'a créé un tableau de bord pour 6 actifs',
            },
          ],
        },
        photo: {
          id: 'warehouseAnalytics',
          alt: 'Superviseur analysant des indicateurs à l’écran',
        },
      },
    ],
    quote: {
      text: 'Fleet nous a aidés à réduire la maintenance corrective de près de 40 %. Nous avons désormais une vue sur tous nos sites et des délais d’intervention plus courts.',
      author: 'Directeur des opérations',
      company: 'Opérateur régional de centres commerciaux',
      photo: {
        id: 'mallAtrium',
        alt: 'Visiteurs dans l’atrium d’un centre commercial',
      },
    },
    faq: [
      {
        question: 'Qu’est-ce qu’un PMS ou un REMS ?',
        answer:
          'Un système de gestion immobilière (PMS ou REMS) réunit les informations sur vos actifs, des budgets et documents à la maintenance et aux prestataires, pour piloter et suivre le patrimoine.',
      },
      {
        question: 'Comment Fleet aide-t-il les équipes de property management ?',
        answer:
          'Fleet relie maintenance, équipements, documents, prestataires et budgets pour chaque actif, avec des tableaux de bord de l’équipement jusqu’au patrimoine entier.',
      },
      {
        question: 'Les propriétaires et comités peuvent-ils suivre la performance ?',
        answer:
          'Oui. Partagez des tableaux de bord en lecture seule avec propriétaires, conseils et comités, et programmez l’envoi de rapports par e-mail.',
      },
      {
        question: 'Fleet se connecte-t-il à notre outil de gestion ou de comptabilité ?',
        answer:
          'Oui. Fleet s’intègre aux outils de comptabilité, d’ERP et de gestion immobilière grâce à plus de 20 intégrations et une API REST ouverte.',
      },
      {
        question: 'Fleet accompagne-t-il la croissance du patrimoine ?',
        answer:
          'Oui. Fleet gère un bâtiment comme des centaines, avec des règles par actif, des équipes régionales et un reporting consolidé.',
      },
    ],
  },
  workOrders: {
    hero: {
      eyebrow: 'Bons d’intervention',
      title: 'La gestion des interventions qui fait avancer chaque demande',
      description:
        'Créez, assignez, suivez et clôturez chaque intervention sur tous vos sites, avec des mises à jour en direct du terrain et une visibilité complète pour les responsables.',
      highlights: ['Mises à jour mobiles', 'Suivi des SLA', 'Preuves photo'],
      visual: {
        kind: 'jobs',
        title: 'Interventions · Aujourd’hui',
        items: [
          {
            title: 'Entretien annuel chaudière',
            location: 'Northgate · Local technique',
            status: 'Dans 4 h',
            tone: 'due',
          },
          {
            title: 'Fuite d’eau, logement 3B',
            location: 'Tower B · Niveau 12',
            status: 'En cours',
            tone: 'info',
          },
          {
            title: 'Test éclairage de secours',
            location: 'Bayview · Tous les étages',
            status: 'Terminée',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Chaque demande mérite un parcours clair',
        description:
          'Les demandes arrivent par téléphone, e-mail et messagerie, et chacune a besoin d’un responsable, d’une priorité et d’une échéance.',
        points: ['Nombreux canaux', 'Nombreuses équipes', 'Nombreuses priorités'],
      },
      answer: {
        title: 'Un parcours de la demande à la résolution',
        description:
          'Fleet transforme chaque demande en intervention suivie, confiée à la bonne équipe avec SLA et suivi de statut intégrés.',
      },
    },
    capabilities: {
      title: 'Chaque intervention, du début à la fin',
      description:
        'Recevez, assignez, réalisez et analysez les interventions dans un parcours continu.',
      tabs: [
        {
          icon: 'requests',
          label: 'Demandes',
          title: 'Recevez les demandes de partout',
          description:
            'Les demandes du personnel, des locataires et par e-mail deviennent automatiquement des interventions, avec photos et localisation.',
          points: [
            'E-mail vers intervention avec Fleet Mail',
            'Photos et localisation sur chaque demande',
            'Demandes reçues de tous les canaux',
          ],
          visual: {
            kind: 'steps',
            title: 'Nouvelle demande',
            steps: [
              {
                kind: 'E-mail',
                text: 'Climatisation inefficace, niveau 8',
              },
              {
                kind: 'Puis',
                text: 'Intervention WO-2310 créée',
              },
              {
                kind: 'Puis',
                text: 'Assignée à l’équipe CVC',
              },
            ],
          },
        },
        {
          icon: 'routing',
          label: 'Affectation',
          title: 'Chaque intervention à la bonne équipe',
          description:
            'Assignez par site, corps de métier ou prestataire, avec niveaux de priorité et notifications automatiques.',
          points: [
            'Règles d’affectation par site et métier',
            'Priorités avec objectifs SLA',
            'Notification immédiate à l’affectation',
          ],
          visual: {
            kind: 'jobs',
            title: 'File d’affectation',
            items: [
              {
                title: 'Climatisation inefficace',
                location: 'Niveau 8 · CVC',
                status: 'Équipe CVC',
                tone: 'info',
              },
              {
                title: 'Porte d’ascenseur bloquée',
                location: 'Ascenseurs · Ascenseurs',
                status: 'LiftCo',
                tone: 'info',
              },
              {
                title: 'Robinet qui fuit',
                location: 'Logement 1204 · Plomberie',
                status: 'Interne',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'mobile',
          label: 'Mobile',
          title: 'Des mises à jour directement du terrain',
          description:
            'Les techniciens acceptent, ajoutent des photos et clôturent les interventions depuis tout téléphone ou tablette, iOS et Android.',
          points: [
            'Interventions acceptées depuis le téléphone',
            'Photos et notes à la clôture',
            'Statut partagé instantanément',
          ],
          visual: {
            kind: 'log',
            title: 'Activité WO-2310',
            entries: [
              {
                when: '09:12',
                who: 'Fleet',
                what: 'a créé l’intervention depuis l’e-mail',
              },
              {
                when: '09:20',
                who: 'Marco L.',
                what: 'a accepté et part au niveau 8',
              },
              {
                when: '10:05',
                who: 'Marco L.',
                what: 'a clôturé l’intervention avec 3 photos',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'SLA',
          title: 'Suivi des SLA sur chaque intervention',
          description:
            'Suivez interventions ouvertes, délais de réponse et travaux en retard depuis un seul tableau de bord.',
          points: [
            'Délais de réponse et de résolution',
            'Travaux en retard mis en évidence',
            'Résultats SLA par site et équipe',
          ],
          visual: {
            kind: 'chart',
            title: 'Délai de réponse moyen · heures',
            stats: [
              {
                label: 'SLA respectés',
                value: '96,4 %',
              },
              {
                label: 'Interventions ouvertes',
                value: '128',
              },
            ],
            bars: [
              {
                label: 'Lun',
                value: 3,
              },
              {
                label: 'Mar',
                value: 2,
              },
              {
                label: 'Mer',
                value: 4,
              },
              {
                label: 'Jeu',
                value: 2,
              },
              {
                label: 'Ven',
                value: 3,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Modèles',
        title: 'Les interventions récurrentes en pilote automatique',
        description:
          'Des modèles créent les interventions de routine selon le planning, avec check-lists et intervenants.',
        points: [
          'Modèles pour les tâches de routine',
          'Check-lists jointes automatiquement',
          'Intervenants définis par site et métier',
        ],
        visual: {
          kind: 'steps',
          title: 'Intervention récurrente',
          steps: [
            {
              kind: 'Chaque',
              text: 'Lundi, 06:00',
            },
            {
              kind: 'Puis',
              text: 'Créer une check-list de nettoyage par étage',
            },
          ],
        },
        photo: {
          id: 'engineersRooftop',
          alt: 'Deux ingénieurs consultent une tablette en toiture',
        },
      },
      {
        tag: 'Validations',
        title: 'Des validations de coûts intégrées',
        description:
          'Les devis au-delà de seuils définis vont au bon valideur, et chaque décision est enregistrée sur l’intervention.',
        points: [
          'Seuils par site ou catégorie',
          'Validation depuis le téléphone ou la messagerie',
          'Chaque décision tracée',
        ],
        visual: {
          kind: 'jobs',
          title: 'Validations en attente',
          items: [
            {
              title: 'Devis réparation groupe froid',
              location: '6 800 $ · Harbour Point',
              status: 'Valider',
              tone: 'due',
            },
            {
              title: 'Remplacement porte d’ascenseur',
              location: '2 100 $ · Tower B',
              status: 'Validé',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'acFilterService',
          alt: 'Technicien remplaçant un filtre de climatisation',
        },
      },
      {
        tag: 'Reporting',
        title: 'Apprenez de chaque intervention',
        description:
          'Repérez les pannes récurrentes par bâtiment, équipement ou prestataire et améliorez votre stratégie préventive.',
        points: [
          'Pannes récurrentes par équipement',
          'Coût par intervention et par site',
          'Tendances dans le temps',
        ],
        visual: {
          kind: 'chart',
          title: 'Pannes récurrentes · T3',
          stats: [
            {
              label: 'Pannes répétées',
              value: '14',
            },
            {
              label: 'Sites',
              value: '5',
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
              label: 'Plomberie',
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
        photo: {
          id: 'warehouseAnalytics',
          alt: 'Superviseur analysant des indicateurs à l’écran',
        },
      },
    ],
    quote: {
      text: 'Les autres plateformes étaient trop complexes ou trop génériques. Fleet nous a apporté une solution sur mesure avec un support plus réactif.',
      author: 'Directeur de la maintenance',
      company: 'Plateforme logistique',
      photo: {
        id: 'hvacTechnicians',
        alt: 'Techniciens CVC sur des unités en toiture',
      },
    },
    faq: [
      {
        question: 'Qu’est-ce qu’un logiciel de gestion des interventions ?',
        answer:
          'Il suit chaque intervention de maintenance de la demande à la clôture : intervenant, priorité, échéance, coût et preuve de réalisation.',
      },
      {
        question: 'Comment les demandes deviennent-elles des interventions ?',
        answer:
          'Les demandes du personnel, des locataires et par e-mail deviennent automatiquement des interventions. Avec Fleet Mail, un e-mail à votre boîte maintenance crée une intervention avec tous les détails.',
      },
      {
        question: 'Les prestataires peuvent-ils recevoir et mettre à jour les interventions ?',
        answer:
          'Oui. Les prestataires reçoivent les interventions avec un accès rapide, puis les acceptent, les mettent à jour et les clôturent avec photos et notes.',
      },
      {
        question: 'Les techniciens ont-ils besoin d’un appareil particulier ?',
        answer:
          'Fleet fonctionne sur tout téléphone, tablette ou ordinateur, iOS et Android, pour que les techniciens commencent immédiatement.',
      },
      {
        question: 'Comment Fleet suit-il les SLA ?',
        answer:
          'Chaque intervention porte des objectifs SLA de réponse et de résolution, et les tableaux de bord affichent les résultats par site, équipe et prestataire.',
      },
    ],
  },
  fieldService: {
    hero: {
      eyebrow: 'Optimisation des interventions terrain',
      title: 'L’optimisation des interventions terrain pour les équipes mobiles',
      description:
        'Envoyez le bon technicien sur le bon site avec les bonnes informations, et suivez l’avancement en direct de la première visite à la clôture.',
      highlights: ['Affectation intelligente', 'Check-lists mobiles', 'Statut en direct'],
      visual: {
        kind: 'log',
        title: 'Activité terrain · Aujourd’hui',
        entries: [
          {
            when: '08:10',
            who: 'Aisha K.',
            what: 'est arrivée à Northgate · Local technique',
          },
          {
            when: '09:35',
            who: 'CoolAir',
            what: 'a terminé l’entretien AHU-07 avec relevés',
          },
          {
            when: '10:20',
            who: 'Marco L.',
            what: 'a commencé l’inspection des ascenseurs à Tower B',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Les équipes terrain couvrent plus de terrain',
        description:
          'Les techniciens passent chaque jour d’un site, d’un métier et d’un prestataire à l’autre, et chaque visite exige les bonnes informations.',
        points: ['Plusieurs sites', 'Métiers variés', 'SLA exigeants'],
      },
      answer: {
        title: 'Chaque visite prête à démarrer',
        description:
          'Fleet donne aux techniciens détails d’intervention, historique et check-lists sur leur téléphone, et aux responsables une vue en direct de chaque équipe.',
      },
    },
    capabilities: {
      title: 'Optimisez chaque visite terrain',
      description:
        'Planifiez, assignez, réalisez et mesurez le travail terrain sur tout le patrimoine.',
      tabs: [
        {
          icon: 'scheduling',
          label: 'Planification',
          title: 'Planifiez la journée en confiance',
          description:
            'Planifiez préventif et correctif selon le site, le métier et la disponibilité, avec une charge équilibrée entre équipes et prestataires.',
          points: [
            'Plannings par site, métier et disponibilité',
            'Charge équilibrée entre les équipes',
            'Préventif et correctif réunis',
          ],
          visual: {
            kind: 'jobs',
            title: 'Aujourd’hui · Northgate',
            items: [
              {
                title: 'Entretien mensuel AHU-07',
                location: '08:00 · Aisha K.',
                status: 'Planifiée',
                tone: 'info',
              },
              {
                title: 'Inspection portes coupe-feu',
                location: '11:00 · Marco L.',
                status: 'Planifiée',
                tone: 'info',
              },
              {
                title: 'Contrôle local pompes',
                location: '14:00 · CoolAir',
                status: 'Confirmée',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'routing',
          label: 'Affectation',
          title: 'Assignez par site et par métier',
          description:
            'Confiez chaque intervention au technicien ou prestataire qualifié le plus proche, par bâtiment, zone ou type de tâche.',
          points: [
            'Affectation par bâtiment et zone',
            'Compétences adaptées à chaque intervention',
            'Prestataires dans le même flux',
          ],
          visual: {
            kind: 'steps',
            title: 'Règle d’affectation',
            steps: [
              {
                kind: 'Déclencheur',
                text: 'Intervention CVC à Northgate',
              },
              {
                kind: 'Si',
                text: 'Priorité élevée',
              },
              {
                kind: 'Puis',
                text: 'Assigner le technicien CVC le plus proche',
              },
            ],
          },
        },
        {
          icon: 'mobile',
          label: 'Sur site',
          title: 'Tout ce dont les techniciens ont besoin sur site',
          description:
            'Historique, manuels et check-lists s’ouvrent depuis l’intervention, avec photos, relevés et signatures recueillis sur place.',
          points: [
            'Équipement ouvert par recherche ou scan',
            'Check-lists avec photos et relevés',
            'Signature à la clôture',
          ],
          visual: {
            kind: 'asset',
            title: 'Équipement sur site',
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
        {
          icon: 'analytics',
          label: 'Performance',
          title: 'Mesurez la performance terrain',
          description:
            'Suivez délais de réponse, résolution dès la première visite et résultats SLA par technicien, équipe et prestataire.',
          points: [
            'Délais de réponse par équipe',
            'Taux de résolution à la première visite',
            'Résultats SLA par prestataire',
          ],
          visual: {
            kind: 'chart',
            title: 'Résolution à la première visite · T3',
            stats: [
              {
                label: 'Première visite',
                value: '87 %',
              },
              {
                label: 'SLA respectés',
                value: '96,4 %',
              },
            ],
            bars: [
              {
                label: 'CVC',
                value: 88,
              },
              {
                label: 'Ascenseurs',
                value: 84,
              },
              {
                label: 'Électricité',
                value: 91,
              },
              {
                label: 'Plomberie',
                value: 86,
              },
              {
                label: 'Incendie',
                value: 93,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Mobile',
        title: 'Conçu pour toutes les conditions de site',
        description:
          'Fleet fonctionne dans les zones à faible débit comme les locaux techniques, sous-sols et parkings, pour que les mises à jour arrivent partout.',
        points: [
          'Performance en faible débit',
          'Tout téléphone ou tablette, iOS et Android',
          'Photos et relevés rattachés à l’intervention',
        ],
        visual: {
          kind: 'jobs',
          title: 'Mises à jour terrain',
          items: [
            {
              title: 'Contrôle pompe sous-sol',
              location: 'Parking B2',
              status: 'Synchronisé',
              tone: 'done',
            },
            {
              title: 'Entretien AHU en toiture',
              location: 'Toiture',
              status: 'Synchronisé',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'factoryTechnician',
          alt: 'Technicien contrôlant un équipement avec une tablette',
        },
      },
      {
        tag: 'Communication',
        title: 'Alertes et validations en temps réel',
        description:
          'Les techniciens reçoivent instantanément nouvelles interventions, validations et mises à jour, et les responsables voient chaque changement de statut.',
        points: [
          'Notifications instantanées',
          'Validations depuis le terrain',
          'Statut en direct pour les responsables',
        ],
        visual: {
          kind: 'log',
          title: 'Alertes',
          entries: [
            {
              when: '09:02',
              who: 'Fleet',
              what: 'a envoyé l’intervention urgente WO-2318 à Aisha K.',
            },
            {
              when: '09:06',
              who: 'Aisha K.',
              what: 'a accepté et est en route',
            },
          ],
        },
        photo: {
          id: 'technicianPlantRoom',
          alt: 'Technicien intervenant sur un équipement en local technique',
        },
      },
      {
        tag: 'Prestataires',
        title: 'Les prestataires dans le même flux',
        description:
          'Les techniciens externes acceptent, mettent à jour et clôturent leurs interventions grâce à un accès rapide, aux côtés de votre équipe.',
        points: [
          'Accès rapide pour les prestataires',
          'Mêmes check-lists et standards',
          'Interventions prestataires sur le même tableau de bord',
        ],
        visual: {
          kind: 'jobs',
          title: 'Interventions prestataires',
          items: [
            {
              title: 'CoolAir · CVC',
              location: '4 interventions aujourd’hui',
              status: 'Conforme',
              tone: 'done',
            },
            {
              title: 'LiftCo · Ascenseurs',
              location: '2 interventions aujourd’hui',
              status: '1 à prévoir',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'hvacTechnicians',
          alt: 'Techniciens CVC sur des unités en toiture',
        },
      },
    ],
    quote: {
      text: 'Fleet a réduit notre maintenance corrective de près de 40 %. Nos techniciens, nos registres d’équipements et nos interventions sont enfin réunis au même endroit.',
      author: 'Responsable exploitation',
      company: 'Projet à usage mixte',
      photo: {
        id: 'warehouseTeam',
        alt: 'Équipe d’entrepôt contrôlant le stock entre les rayonnages',
      },
    },
    faq: [
      {
        question: 'Qu’est-ce que l’optimisation des interventions terrain ?',
        answer:
          'C’est planifier, assigner et réaliser efficacement le travail sur site, pour que les techniciens arrivent sur la bonne intervention avec les bonnes informations et que les responsables suivent les résultats.',
      },
      {
        question: 'Comment Fleet assigne-t-il les interventions ?',
        answer:
          'Des règles d’affectation répartissent les interventions par bâtiment, zone, métier ou prestataire, avec priorités et objectifs SLA.',
      },
      {
        question: 'Fleet fonctionne-t-il avec un faible réseau ?',
        answer:
          'Fleet est conçu pour fonctionner dans les zones à faible débit, comme les locaux techniques, sous-sols et parkings.',
      },
      {
        question: 'Les prestataires externes peuvent-ils utiliser Fleet ?',
        answer:
          'Oui. Les prestataires accèdent rapidement à leurs interventions et suivent les mêmes check-lists et standards que votre équipe.',
      },
      {
        question: 'Que voient les responsables en temps réel ?',
        answer:
          'Ils voient le statut des interventions, l’activité des techniciens, les retards et les résultats SLA sur chaque site, au fil de l’eau.',
      },
    ],
  },
  tenants: {
    hero: {
      eyebrow: 'Gestion des locataires et résidents',
      title: 'Une gestion des locataires et résidents qui crée la confiance',
      description:
        'Offrez aux locataires et résidents un moyen simple de faire une demande, informez-les à chaque étape et résolvez vite les problèmes dans chaque bâtiment.',
      highlights: ['Demandes simples', 'Suivi clair', 'Résolution rapide'],
      visual: {
        kind: 'jobs',
        title: 'Demandes des résidents · Bayview',
        items: [
          {
            title: 'Fuite robinet cuisine',
            location: 'Logement 1204',
            status: 'Résolue',
            tone: 'done',
          },
          {
            title: 'Climatisation inefficace',
            location: 'Logement 806',
            status: 'Technicien en route',
            tone: 'info',
          },
          {
            title: 'Éclairage du hall',
            location: 'Tour A · Hall',
            status: 'Planifiée',
            tone: 'due',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Les résidents attendent un service rapide et visible',
        description:
          'Plomberie, climatisation, éclairage : les demandes arrivent chaque jour, et les résidents veulent savoir qui s’en charge et quand.',
        points: ['Demandes quotidiennes', 'Nombreux logements', 'Espaces communs'],
      },
      answer: {
        title: 'Chaque demande suivie jusqu’à sa résolution',
        description:
          'Fleet transforme chaque demande en intervention au statut clair, partagé par résidents, responsables et techniciens.',
      },
    },
    capabilities: {
      title: 'Une meilleure expérience de vie et de travail',
      description:
        'De la première demande à la clôture, un service que résidents et locataires peuvent suivre.',
      tabs: [
        {
          icon: 'requests',
          label: 'Demandes',
          title: 'Des demandes simples à faire',
          description:
            'Les demandes arrivent par e-mail, via votre portail locataires ou depuis l’accueil, et deviennent automatiquement des interventions.',
          points: [
            'E-mail vers intervention avec Fleet Mail',
            'Intégration des portails locataires',
            'Saisie à l’accueil en quelques secondes',
          ],
          visual: {
            kind: 'steps',
            title: 'Demande résident',
            steps: [
              {
                kind: 'E-mail',
                text: 'Robinet de cuisine qui fuit, logement 1204',
              },
              {
                kind: 'Puis',
                text: 'Intervention créée avec photos',
              },
              {
                kind: 'Puis',
                text: 'Plombier assigné pour aujourd’hui',
              },
            ],
          },
        },
        {
          icon: 'communication',
          label: 'Suivi',
          title: 'Un statut clair à chaque étape',
          description:
            'Fleet informe chacun de la première demande à la clôture, avec des mises à jour au fil des travaux.',
          points: [
            'Mises à jour à chaque étape',
            'Preuve photo à la clôture',
            'Statut visible par l’accueil',
          ],
          visual: {
            kind: 'log',
            title: 'Suivi de la demande',
            entries: [
              {
                when: '09:10',
                who: 'Fleet',
                what: 'a reçu la demande du logement 1204',
              },
              {
                when: '09:25',
                who: 'Fleet',
                what: 'a assigné le plombier interne',
              },
              {
                when: '11:40',
                who: 'Marco L.',
                what: 'a réparé la fuite avec photos',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Logements',
          title: 'Un historique pour chaque logement',
          description:
            'Conservez l’historique de maintenance de chaque logement et équipement commun, des ascenseurs et pompes aux halls et parkings.',
          points: [
            'Historique par logement',
            'Équipements communs entretenus selon le planning',
            'Coûts par logement et par zone',
          ],
          visual: {
            kind: 'asset',
            title: 'Fiche logement',
            name: 'Logement 1204',
            location: 'Bayview · Tour A',
            status: 'Occupé',
            facts: [
              {
                label: 'Demandes depuis janv.',
                value: '4',
              },
              {
                label: 'Dernière visite',
                value: '18 sept.',
              },
              {
                label: 'Interventions ouvertes',
                value: '0',
              },
              {
                label: 'Coût depuis janv.',
                value: '640 $',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Reporting',
          title: 'Des délais visibles par les conseils',
          description:
            'Suivez délais de résolution et dépenses par bâtiment, zone ou logement, et partagez des tableaux de bord en lecture seule avec conseils syndicaux et comités.',
          points: [
            'Délais de résolution par bâtiment',
            'Dépenses par zone et logement',
            'Tableaux de bord en lecture seule',
          ],
          visual: {
            kind: 'chart',
            title: 'Délai moyen de résolution · jours',
            stats: [
              {
                label: 'Résolues',
                value: '312',
              },
              {
                label: 'Ouvertes',
                value: '8',
              },
            ],
            bars: [
              {
                label: 'Tour A',
                value: 2,
              },
              {
                label: 'Tour B',
                value: 3,
              },
              {
                label: 'Villas',
                value: 2,
              },
              {
                label: 'Podium',
                value: 1,
              },
              {
                label: 'Parking',
                value: 2,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Accueil',
        title: 'Accueil, sécurité et maintenance synchronisés',
        description:
          'Des vues par rôle donnent à la conciergerie, à la sécurité et à la maintenance exactement ce qu’il faut pour agir vite.',
        points: [
          'Vues adaptées à chaque rôle',
          'Demandes saisies à l’accueil',
          'Consignes partagées entre les équipes',
        ],
        visual: {
          kind: 'jobs',
          title: 'Accueil',
          items: [
            {
              title: 'Éclairage local colis',
              location: 'Saisie par la conciergerie',
              status: 'Assignée',
              tone: 'info',
            },
            {
              title: 'Panne accès portail',
              location: 'Saisie par la sécurité',
              status: 'Résolue',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'supportAgent',
          alt: 'Conseillère clientèle avec un casque',
        },
      },
      {
        tag: 'Espaces communs',
        title: 'Des équipements communs en parfait état',
        description:
          'Tâches planifiées, alertes en temps réel et pistes d’audit maintiennent ascenseurs, pompes, sécurité incendie et équipements de loisirs en service.',
        points: [
          'Préventif pour les équipements communs',
          'Alertes en temps réel en cas de panne',
          'Piste d’audit pour chaque visite',
        ],
        visual: {
          kind: 'jobs',
          title: 'Équipements communs · Bayview',
          items: [
            {
              title: 'Contrôle mensuel ascenseur L1',
              location: 'Tour A',
              status: 'Terminée',
              tone: 'done',
            },
            {
              title: 'Entretien pompe piscine',
              location: 'Espaces loisirs',
              status: 'Prévu aujourd’hui',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'apartmentBuilding',
          alt: 'Résidences modernes entourées de jardins',
        },
      },
      {
        tag: 'Service',
        title: 'Un service de niveau hôtelier',
        description:
          'Ménage, nettoyage et maintenance suivent le planning, pour que chaque espace soit prêt pour les résidents et leurs invités.',
        points: [
          'Plannings de ménage et de nettoyage',
          'Check-lists avec preuve photo',
          'Standards communs à tous les bâtiments',
        ],
        visual: {
          kind: 'steps',
          title: 'Check-list d’emménagement',
          steps: [
            {
              kind: 'Logement',
              text: 'Logement 806 · arrivée vendredi',
            },
            {
              kind: 'Puis',
              text: 'Nettoyage complet et inspection',
            },
            {
              kind: 'Puis',
              text: 'Clés prêtes à l’accueil',
            },
          ],
        },
        photo: {
          id: 'hotelHousekeeping',
          alt: 'Femme de chambre préparant une chambre',
        },
      },
    ],
    quote: {
      text: 'Fleet a réduit notre maintenance corrective de près de 40 %. Nos techniciens, nos registres d’équipements et nos interventions sont enfin réunis au même endroit.',
      author: 'Responsable exploitation',
      company: 'Projet à usage mixte',
      photo: {
        id: 'technicianDrill',
        alt: 'Technicien fixant un équipement à la perceuse',
      },
    },
    faq: [
      {
        question: 'Comment les locataires et résidents font-ils une demande ?',
        answer:
          'Les demandes arrivent par e-mail avec Fleet Mail, via votre portail locataires grâce aux intégrations, ou par l’accueil et la sécurité, et chacune devient une intervention.',
      },
      {
        question: 'Comment les résidents restent-ils informés ?',
        answer:
          'Fleet tient chacun informé de la première demande à la clôture, avec des mises à jour au fil des travaux et une preuve photo à la fin.',
      },
      {
        question: 'Peut-on suivre la maintenance par logement ?',
        answer:
          'Oui. Fleet conserve l’historique et les coûts de chaque logement et équipement commun, dans tous les bâtiments et zones.',
      },
      {
        question: 'Les conseils et comités peuvent-ils suivre la performance ?',
        answer:
          'Oui. Partagez des tableaux de bord en lecture seule avec conseils syndicaux et comités, avec délais de résolution et dépenses par bâtiment.',
      },
      {
        question: 'Fleet convient-il aussi aux locataires commerciaux ?',
        answer:
          'Oui. Fleet couvre résidences, bureaux, commerces et projets à usage mixte dans une seule plateforme.',
      },
    ],
  },
  vendors: {
    hero: {
      eyebrow: 'Gestion des prestataires et fournisseurs',
      title: 'La gestion des prestataires et fournisseurs sur tous vos sites',
      description:
        'Coordonnez prestataires, devis, contrats et performance dans une plateforme, avec chaque intervention, validation et document tracés.',
      highlights: ['Évaluations prestataires', 'Validation des devis', 'Suivi des contrats'],
      visual: {
        kind: 'jobs',
        title: 'Prestataires · Ce mois-ci',
        items: [
          {
            title: 'CoolAir · CVC',
            location: '42 interventions · 98 % à l’heure',
            status: 'Privilégié',
            tone: 'done',
          },
          {
            title: 'LiftCo · Ascenseurs',
            location: '18 interventions · 91 % à l’heure',
            status: 'Revue à prévoir',
            tone: 'due',
          },
          {
            title: 'BrightSpark · Électricité',
            location: '27 interventions · 95 % à l’heure',
            status: 'Renouvellement',
            tone: 'info',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Vos partenaires font tourner l’exploitation',
        description:
          'Les partenaires CVC, ascenseurs, nettoyage et sécurité apportent chacun leurs contrats, devis, certificats et niveaux de service.',
        points: ['Nombreux prestataires', 'Nombreux contrats', 'Nombreux devis'],
      },
      answer: {
        title: 'Un processus commun pour tous les partenaires',
        description:
          'Fleet donne aux prestataires un accès rapide à leurs interventions et à vous une visibilité complète sur les coûts, la qualité et la conformité.',
      },
    },
    capabilities: {
      title: 'Pilotez chaque relation prestataire',
      description:
        'De l’intégration à l’évaluation, la coordination des prestataires au même endroit.',
      tabs: [
        {
          icon: 'vendors',
          label: 'Annuaire',
          title: 'Un annuaire complet des prestataires',
          description:
            'Centralisez contacts, métiers, zones d’intervention, certificats et tarifs de chaque prestataire.',
          points: [
            'Métiers et zones d’intervention',
            'Tarifs et conditions contractuelles',
            'Certificats et assurances enregistrés',
          ],
          visual: {
            kind: 'jobs',
            title: 'Annuaire des prestataires',
            items: [
              {
                title: 'CoolAir',
                location: 'CVC · Tous les sites',
                status: 'Actif',
                tone: 'done',
              },
              {
                title: 'LiftCo',
                location: 'Ascenseurs · Région EAU',
                status: 'Actif',
                tone: 'done',
              },
              {
                title: 'SafeGuard',
                location: 'Sécurité incendie · Tower B',
                status: 'Intégration',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'approvals',
          label: 'Devis',
          title: 'Devis et validations fluides',
          description:
            'Les prestataires déposent leurs devis sur l’intervention, et les validations suivent le coût, le site ou la catégorie.',
          points: [
            'Devis rattachés à l’intervention',
            'Validations selon les seuils',
            'Chaque décision tracée',
          ],
          visual: {
            kind: 'steps',
            title: 'Validation de devis',
            steps: [
              {
                kind: 'Devis',
                text: 'CoolAir · 3 800 $ réparation groupe froid',
              },
              {
                kind: 'Valider',
                text: 'Le responsable financier valide depuis sa messagerie',
              },
              {
                kind: 'Puis',
                text: 'Prestataire notifié et intervention planifiée',
              },
            ],
          },
        },
        {
          icon: 'documents',
          label: 'Contrats',
          title: 'Contrats et certificats sous contrôle',
          description:
            'Suivez conditions contractuelles, assurances et certificats, avec des rappels avant chaque échéance.',
          points: [
            'Conditions contractuelles par prestataire',
            'Suivi des assurances et certificats',
            'Rappels avant échéance',
          ],
          visual: {
            kind: 'files',
            title: 'Documents prestataires',
            items: [
              {
                title: 'Contrat maintenance LiftCo.pdf',
                location: 'Renouvellement dans 30 jours',
                status: 'Renouveler',
                tone: 'due',
              },
              {
                title: 'Assurance CoolAir.pdf',
                location: 'Valide jusqu’en mars 2027',
                status: 'Valide',
                tone: 'done',
              },
              {
                title: 'Certificat SafeGuard.pdf',
                location: 'Ajouté aujourd’hui',
                status: 'À vérifier',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Performance',
          title: 'Une évaluation pour chaque prestataire',
          description:
            'Comparez délais de réponse, résultats SLA et coûts entre prestataires et régions.',
          points: [
            'Délais de réponse par prestataire',
            'Résultats SLA par région',
            'Coût par intervention comparé',
          ],
          visual: {
            kind: 'chart',
            title: 'Interventions à l’heure · T3',
            stats: [
              {
                label: 'Prestataires',
                value: '24',
              },
              {
                label: 'À l’heure',
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
        tag: 'Accès',
        title: 'Des prestataires opérationnels en quelques minutes',
        description:
          'Les prestataires accèdent rapidement à leurs propres interventions et documents, pour que les nouveaux partenaires démarrent dès le premier jour.',
        points: [
          'Accès rapide et configuration minimale',
          'Chaque prestataire voit ses interventions',
          'Mêmes standards que les équipes internes',
        ],
        visual: {
          kind: 'jobs',
          title: 'Intégration des prestataires',
          items: [
            {
              title: 'SafeGuard',
              location: 'Accès accordé',
              status: 'Actif',
              tone: 'done',
            },
            {
              title: 'CleanPro',
              location: 'Invitation envoyée',
              status: 'En attente',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'partnerMeeting',
          alt: 'Réunion d’équipe avec des partenaires',
        },
      },
      {
        tag: 'Fournisseurs',
        title: 'Des fournisseurs liés aux équipements',
        description:
          'Reliez les fournisseurs aux équipements et contrats qu’ils couvrent, avec garanties et détails de service visibles sur chaque intervention.',
        points: [
          'Fournisseurs liés aux équipements',
          'Garantie visible sur chaque intervention',
          'Historique de service par fournisseur',
        ],
        visual: {
          kind: 'asset',
          title: 'Lien fournisseur',
          name: 'Groupe froid CH-02',
          location: 'Fournisseur · CoolAir',
          status: 'Sous garantie',
          facts: [
            {
              label: 'Garantie',
              value: 'Mars 2028',
            },
            {
              label: 'Interventions depuis janv.',
              value: '6',
            },
            {
              label: 'Coût depuis janv.',
              value: '4 210 $',
            },
            {
              label: 'Contrat',
              value: 'Annuel',
            },
          ],
        },
        photo: {
          id: 'stockCheck',
          alt: 'Coordinateur contrôlant le stock en rayon',
        },
      },
      {
        tag: 'Communication',
        title: 'Une communication claire avec chaque partenaire',
        description:
          'Mises à jour, photos et validations circulent en temps réel entre votre équipe et les prestataires, dans Fleet ou par e-mail avec Fleet Mail.',
        points: [
          'Mises à jour et photos en temps réel',
          'Validations par e-mail ou dans Fleet',
          'Historique complet sur chaque intervention',
        ],
        visual: {
          kind: 'log',
          title: 'Échanges prestataire · WO-2304',
          entries: [
            {
              when: '09:14',
              who: 'CoolAir',
              what: 'a partagé un devis de 3 800 $',
            },
            {
              when: '09:40',
              who: 'Finance',
              what: 'a validé le devis par e-mail',
            },
          ],
        },
        photo: {
          id: 'colleaguesTablets',
          alt: 'Deux collègues consultent des interventions sur tablette',
        },
      },
    ],
    quote: {
      text: 'Les autres plateformes étaient trop complexes ou trop génériques. Fleet nous a apporté une solution sur mesure avec un support plus réactif.',
      author: 'Directeur de la maintenance',
      company: 'Plateforme logistique',
      photo: {
        id: 'warehouseTeam',
        alt: 'Équipe d’entrepôt contrôlant le stock entre les rayonnages',
      },
    },
    faq: [
      {
        question: 'Comment les prestataires accèdent-ils à Fleet ?',
        answer:
          'Les prestataires accèdent rapidement à leurs propres interventions et documents, avec une configuration minimale, sur tout téléphone, tablette ou ordinateur.',
      },
      {
        question: 'Les prestataires peuvent-ils déposer des devis dans Fleet ?',
        answer:
          'Oui. Les prestataires joignent leurs devis à l’intervention, et la validation va à la bonne personne selon le coût, le site ou la catégorie.',
      },
      {
        question: 'Comment Fleet suit-il la performance des prestataires ?',
        answer:
          'Fleet enregistre délais de réponse, résultats SLA et coûts de chaque intervention, et des évaluations comparent les prestataires par région et métier.',
      },
      {
        question: 'Fleet suit-il les contrats et certificats des prestataires ?',
        answer:
          'Oui. Enregistrez contrats, assurances et certificats pour chaque prestataire, avec des rappels avant chaque échéance.',
      },
      {
        question: 'Fleet fonctionne-t-il avec des prestataires dans plusieurs régions ?',
        answer:
          'Oui. Définissez zones d’intervention et règles par région, et comparez la performance des prestataires sur tout votre patrimoine.',
      },
    ],
  },
}

export const industries: Record<IndustryPageId, CategoryPageContent> = {
  facilityManagement: {
    hero: {
      eyebrow: 'Facility management',
      title: 'Logiciel de facility management pour chaque site',
      description:
        'Fleet est votre tableau de bord numérique pour l’exploitation des bâtiments, de la maintenance courante aux dépannages, pour que chaque site reste en parfait état.',
      highlights: ['Pilotage centralisé', 'Interventions automatisées', 'Suivi des équipements'],
      visual: {
        kind: 'jobs',
        title: 'Bâtiments · Aujourd’hui',
        items: [
          {
            title: 'Remplacement filtre CVC',
            location: 'Tower B · Niveau 4',
            status: 'En cours',
            tone: 'info',
          },
          {
            title: 'Contrôle des extincteurs',
            location: 'Harbour Point · Tous les étages',
            status: 'Prévu aujourd’hui',
            tone: 'due',
          },
          {
            title: 'Réparation porte du hall',
            location: 'Northgate · Entrée',
            status: 'Terminée',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Les équipes en gèrent plus chaque année',
        description:
          'Bâtiments, équipements, prestataires et personnel sur un ou plusieurs sites, chacun avec ses plannings, budgets et exigences.',
        points: ['Nombreux bâtiments', 'Nombreux prestataires', 'Nombreuses normes'],
      },
      answer: {
        title: 'Une plateforme pour chaque bâtiment',
        description:
          'Fleet réunit maintenance, équipements, prestataires et conformité dans une plateforme cloud, pour piloter chaque site sereinement.',
      },
    },
    capabilities: {
      title: 'Conçu pour les équipes de facility management',
      description:
        'Créez, suivez et clôturez les interventions en cohérence avec les budgets, la conformité et la réalité du terrain.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Préventif',
          title: 'Des plans pour chaque installation',
          description:
            'Planifiez et automatisez la maintenance CVC, plomberie, éclairage et sécurité incendie selon le temps ou l’usage.',
          points: [
            'Plans récurrents par type d’équipement',
            'Check-lists pour chaque visite',
            'Interventions créées avant l’échéance',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan préventif',
            steps: [
              {
                kind: 'Plan',
                text: 'Sécurité incendie · contrôles mensuels',
              },
              {
                kind: 'Puis',
                text: 'Créer les interventions 7 jours avant',
              },
              {
                kind: 'Puis',
                text: 'Assigner l’équipe sécurité avec check-list',
              },
            ],
          },
        },
        {
          icon: 'workOrders',
          label: 'Dépannages',
          title: 'Des dépannages suivis',
          description:
            'Enregistrez et assignez les réparations avec photos, mises à jour mobiles et délais SLA pour chaque intervention.',
          points: [
            'Demandes avec photos et localisation',
            'Interventions aux équipes ou prestataires',
            'Respect des SLA sur un tableau de bord',
          ],
          visual: {
            kind: 'jobs',
            title: 'Dépannages ouverts',
            items: [
              {
                title: 'Fuite de canalisation',
                location: 'Tower B · Sous-sol',
                status: 'Assignée',
                tone: 'info',
              },
              {
                title: 'Poignée de fenêtre cassée',
                location: 'Harbour Point · N7',
                status: 'Prévu aujourd’hui',
                tone: 'due',
              },
              {
                title: 'Capteur d’éclairage défectueux',
                location: 'Northgate · N2',
                status: 'Résolue',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Équipements',
          title: 'Un historique pour chaque équipement',
          description:
            'Consignez l’historique par bâtiment, étage ou équipement, avec coûts et documents.',
          points: [
            'Historique par bâtiment, étage et équipement',
            'Coûts et arrêts par équipement',
            'Manuels et certificats joints',
          ],
          visual: {
            kind: 'asset',
            title: 'Fiche équipement',
            name: 'Chaudière B-01',
            location: 'Northgate · Local technique',
            status: 'En service',
            facts: [
              {
                label: 'Dernier entretien',
                value: '3 sept.',
              },
              {
                label: 'Prochain entretien',
                value: '3 déc.',
              },
              {
                label: 'Coût depuis janv.',
                value: '2 940 $',
              },
              {
                label: 'Interventions ouvertes',
                value: '0',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Reporting',
          title: 'Des décisions opérationnelles éclairées',
          description:
            'Identifiez les bâtiments aux pannes récurrentes, les équipements les plus coûteux et les équipes qui respectent leurs SLA.',
          points: [
            'Pannes récurrentes par bâtiment',
            'Dépenses par équipement et centre de coûts',
            'Résultats SLA par équipe',
          ],
          visual: {
            kind: 'chart',
            title: 'Interventions ouvertes par site',
            stats: [
              {
                label: 'Interventions ouvertes',
                value: '128',
              },
              {
                label: 'SLA respectés',
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
        tag: 'Conformité',
        title: 'Conforme et traçable',
        description:
          'Pistes d’audit, stockage documentaire et gestion des versions intégrés gardent chaque rapport, autorisation et inspection disponibles.',
        points: [
          'Pistes d’audit pour chaque action',
          'Autorisations et certificats enregistrés',
          'Résultats d’inspection liés aux équipements',
        ],
        visual: {
          kind: 'files',
          title: 'Conformité · Harbour Point',
          items: [
            {
              title: 'Certificat sécurité incendie.pdf',
              location: 'Valide jusqu’en juin 2027',
              status: 'Valide',
              tone: 'done',
            },
            {
              title: 'Autorisation ascenseur.pdf',
              location: 'Renouvellement dans 30 jours',
              status: 'Renouveler',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'inspectionClipboard',
          alt: 'Inspecteur remplissant une check-list',
        },
      },
      {
        tag: 'Mobile',
        title: 'La maintenance en temps réel, partout',
        description:
          'Fleet fonctionne sur téléphone, tablette et ordinateur. Créez des interventions en déplacement, recevez des alertes de retard et des preuves photo à la clôture.',
        points: [
          'Interventions depuis tout appareil',
          'Alertes en cas de retard',
          'Preuve photo à la clôture',
        ],
        visual: {
          kind: 'log',
          title: 'Mises à jour terrain',
          entries: [
            {
              when: '09:20',
              who: 'Marco L.',
              what: 'a clôturé le contrôle chaudière avec 4 photos',
            },
            {
              when: '09:05',
              who: 'Fleet',
              what: 'a signalé 2 interventions en retard à Tower B',
            },
          ],
        },
        photo: {
          id: 'technicianPlantRoom',
          alt: 'Technicien intervenant sur un équipement en local technique',
        },
      },
      {
        tag: 'Multisite',
        title: 'Passer à l’échelle sur tous les sites',
        description:
          'Définissez règles et workflows par actif, nommez des responsables régionaux et consolidez les rapports de tout le patrimoine.',
        points: ['Règles et workflows par actif', 'Responsables régionaux', 'Reporting consolidé'],
        visual: {
          kind: 'jobs',
          title: 'Patrimoine · Cette semaine',
          items: [
            {
              title: 'Harbour Point',
              location: '34 interventions · 97 % à l’heure',
              status: 'Conforme',
              tone: 'done',
            },
            {
              title: 'Tower B',
              location: '29 interventions · 89 % à l’heure',
              status: 'À revoir',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'officeCorridor',
          alt: 'Personnes dans un couloir de bureaux lumineux',
        },
      },
    ],
    quote: {
      text: 'Fleet a réduit notre maintenance corrective de près de 40 %. Nos techniciens, nos registres d’équipements et nos interventions sont enfin réunis au même endroit.',
      author: 'Responsable exploitation',
      company: 'Projet à usage mixte',
      photo: {
        id: 'hvacTechnicians',
        alt: 'Techniciens CVC sur des unités en toiture',
      },
    },
    faq: [
      {
        question: 'Qu’est-ce qu’un logiciel de facility management ?',
        answer:
          'Il réunit bâtiments, équipements, maintenance, prestataires et preuves de conformité dans un système, pour planifier, piloter et suivre chaque site.',
      },
      {
        question: 'Fleet convient-il aux campus, bureaux et projets mixtes ?',
        answer:
          'Oui. Fleet couvre tout type de bâtiment, d’un immeuble unique aux campus et patrimoines multisites, dans une plateforme cloud.',
      },
      {
        question: 'Comment Fleet aide-t-il à la conformité ?',
        answer:
          'Pistes d’audit, stockage documentaire et gestion des versions sont intégrés, pour que chaque rapport, autorisation et inspection soit prêt à être présenté.',
      },
      {
        question: 'Fleet se connecte-t-il à nos autres outils ?',
        answer:
          'Oui. Fleet se connecte à la comptabilité, au contrôle d’accès, aux portails locataires et à la GTB grâce à plus de 20 intégrations et une API REST ouverte.',
      },
    ],
  },
  retail: {
    hero: {
      eyebrow: 'Centres commerciaux et retail',
      title: 'Une maintenance qui garde chaque boutique prête à accueillir',
      description:
        'Fleet aide les équipes de centres commerciaux à anticiper en boutique, dans les parties communes et en coulisses, pour que chaque visite reflète vos standards.',
      highlights: [
        'Interventions rapides',
        'Coordination des locataires',
        'Coûts par niveau et locataire',
      ],
      visual: {
        kind: 'jobs',
        title: 'Northgate Mall · Aujourd’hui',
        items: [
          {
            title: 'Bruit escalator E3',
            location: 'Niveau 1 · Atrium',
            status: 'En cours',
            tone: 'info',
          },
          {
            title: 'Contrôle clim food court',
            location: 'Niveau 3',
            status: 'Prévu aujourd’hui',
            tone: 'due',
          },
          {
            title: 'Éclairage boutique 214',
            location: 'Niveau 2 · Mode',
            status: 'Terminée',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Chaque retard se voit',
        description:
          'La fréquentation sollicite ascenseurs, escalators, climatisation et éclairage toute la journée, et les locataires attendent un service rapide et fiable.',
        points: ['Forte fréquentation', 'Nombreux locataires', 'Nombreux prestataires'],
      },
      answer: {
        title: 'Une exploitation proactive pour chaque centre',
        description:
          'Fleet associe interventions rapides, plans préventifs et historique par locataire, pour garder une longueur d’avance.',
      },
    },
    capabilities: {
      title: 'Conçu pour les espaces à forte fréquentation',
      description:
        'Du dépannage à la maintenance préventive et à la coordination des locataires, dans une plateforme.',
      tabs: [
        {
          icon: 'workOrders',
          label: 'Interventions',
          title: 'Affectation rapide des interventions',
          description:
            'Les équipes créent des interventions depuis tout appareil, avec notifications, validations et escalade.',
          points: [
            'Interventions depuis tout appareil',
            'Escalade des urgences',
            'Validations pour les travaux externes',
          ],
          visual: {
            kind: 'jobs',
            title: 'Assignées aujourd’hui',
            items: [
              {
                title: 'Fuite au plafond',
                location: 'Niveau 2 · Couloir B',
                status: 'Équipe plomberie',
                tone: 'info',
              },
              {
                title: 'Rideau métallique bloqué',
                location: 'Boutique 118',
                status: 'CoolAir',
                tone: 'info',
              },
              {
                title: 'Nettoyage déversement',
                location: 'Niveau 1 · Atrium',
                status: 'Terminée',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Préventif',
          title: 'Escalators, ascenseurs et CVC planifiés',
          description:
            'Automatisez la maintenance des escalators, ascenseurs et climatisations, avec les modes opératoires sur site.',
          points: [
            'Préventif escalators, ascenseurs et CVC',
            'Modes opératoires sur site',
            'Prestataires par type d’équipement',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan escalators',
            steps: [
              {
                kind: 'Plan',
                text: 'Escalators E1–E6 · entretien mensuel',
              },
              {
                kind: 'Puis',
                text: 'Assigner LiftCo avec check-list',
              },
              {
                kind: 'Puis',
                text: 'Enregistrer le certificat sur chaque équipement',
              },
            ],
          },
        },
        {
          icon: 'tenants',
          label: 'Locataires',
          title: 'Un historique par boutique et par lot',
          description:
            'Classez l’historique par boutique, enseigne ou lot, et coordonnez sécurité et nettoyage via des tableaux de bord partagés.',
          points: [
            'Historique par boutique, enseigne et lot',
            'Tableaux de bord partagés',
            'Demandes locataires suivies jusqu’à la clôture',
          ],
          visual: {
            kind: 'asset',
            title: 'Fiche lot',
            name: 'Boutique 214',
            location: 'Northgate Mall · Niveau 2',
            status: 'Ouverte',
            facts: [
              {
                label: 'Demandes depuis janv.',
                value: '7',
              },
              {
                label: 'Dernière visite',
                value: '14 sept.',
              },
              {
                label: 'Interventions ouvertes',
                value: '1',
              },
              {
                label: 'Coût depuis janv.',
                value: '1 860 $',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Budgets',
          title: 'Plus de visibilité, des budgets mieux pilotés',
          description:
            'Comparez la performance par site, famille d’équipements ou prestataire pour prioriser CAPEX et OPEX.',
          points: [
            'Dépenses par niveau, locataire et équipement',
            'Pannes récurrentes par zone',
            'Comparaison des prestataires',
          ],
          visual: {
            kind: 'chart',
            title: 'Dépenses de maintenance par niveau · T3',
            stats: [
              {
                label: 'Dépenses T3',
                value: '62 k$',
              },
              {
                label: 'Pannes récurrentes',
                value: '11',
              },
            ],
            bars: [
              {
                label: 'Niveau 1',
                value: 82,
              },
              {
                label: 'Niveau 2',
                value: 64,
              },
              {
                label: 'Niveau 3',
                value: 58,
              },
              {
                label: 'Parking',
                value: 31,
              },
              {
                label: 'Toiture',
                value: 24,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Parties communes',
        title: 'Des parties communes prêtes pour chaque visiteur',
        description:
          'Atriums, couloirs, sanitaires et food courts restent propres et opérationnels grâce aux tâches planifiées et aux dépannages rapides.',
        points: [
          'Plannings de nettoyage et de contrôle',
          'Réparations rapides des défauts visibles',
          'Preuve photo à la clôture',
        ],
        visual: {
          kind: 'jobs',
          title: 'Parties communes · Aujourd’hui',
          items: [
            {
              title: 'Contrôle sanitaires N2',
              location: 'Toutes les 2 heures',
              status: 'Conforme',
              tone: 'done',
            },
            {
              title: 'Éclairage atrium',
              location: 'Niveau 1',
              status: 'Planifiée',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'mallAtrium',
          alt: 'Visiteurs dans l’atrium d’un centre commercial',
        },
      },
      {
        tag: 'Transport vertical',
        title: 'Des ascenseurs et escalators fiables',
        description:
          'Plans préventifs, modes opératoires et certificats assurent un transport vertical sûr pour les visiteurs.',
        points: [
          'Plans d’entretien mensuels',
          'Certificats liés aux équipements',
          'Arrêts suivis par appareil',
        ],
        visual: {
          kind: 'asset',
          title: 'Fiche équipement',
          name: 'Escalator E3',
          location: 'Northgate Mall · Atrium',
          status: 'Entretien à prévoir',
          facts: [
            {
              label: 'Dernier entretien',
              value: '2 sept.',
            },
            {
              label: 'Certificat',
              value: 'Valide jusqu’en févr. 2027',
            },
            {
              label: 'Arrêt T3',
              value: '3 h',
            },
            {
              label: 'Prestataire',
              value: 'LiftCo',
            },
          ],
        },
        photo: {
          id: 'liftTechnician',
          alt: 'Technicien travaillant dans une cabine d’ascenseur',
        },
      },
      {
        tag: 'Équipes',
        title: 'Sécurité, nettoyage et maintenance synchronisés',
        description:
          'Des tableaux de bord partagés alignent sécurité, nettoyage et maintenance sur chaque point ouvert.',
        points: [
          'Tableaux de bord partagés',
          'Signalements de toutes les équipes',
          'Un responsable pour chaque intervention',
        ],
        visual: {
          kind: 'log',
          title: 'Activité partagée',
          entries: [
            {
              when: '10:12',
              who: 'Sécurité',
              what: 'a signalé une porte bloquée à l’entrée C',
            },
            {
              when: '10:20',
              who: 'Maintenance',
              what: 'a confié la réparation à CoolAir',
            },
          ],
        },
        photo: {
          id: 'cleanerCorridor',
          alt: 'Agent d’entretien désinfectant une poignée de porte',
        },
      },
    ],
    quote: {
      text: 'Fleet nous a aidés à réduire la maintenance corrective de près de 40 %. Nous avons désormais une vue sur tous nos sites et des délais d’intervention plus courts.',
      author: 'Directeur des opérations',
      company: 'Opérateur régional de centres commerciaux',
      photo: {
        id: 'acFilterService',
        alt: 'Technicien remplaçant un filtre de climatisation',
      },
    },
    faq: [
      {
        question: 'Comment Fleet aide-t-il l’exploitation des centres commerciaux ?',
        answer:
          'Fleet réunit interventions, maintenance des ascenseurs, escalators et CVC, coordination des locataires et suivi des coûts dans une plateforme pour chaque centre.',
      },
      {
        question: 'Peut-on suivre la maintenance par locataire ou par lot ?',
        answer:
          'Oui. Classez l’historique par boutique, enseigne ou lot et suivez les dépenses par niveau, locataire ou équipement.',
      },
      {
        question: 'Les techniciens externes peuvent-ils utiliser Fleet ?',
        answer:
          'Oui. Les prestataires accèdent rapidement à leurs interventions, avec des droits et des validations définis par votre équipe.',
      },
      {
        question: 'Fleet s’adapte-t-il à plusieurs centres ?',
        answer:
          'Oui. Fleet gère un centre comme 30 actifs commerciaux, avec règles et reporting par actif et par région.',
      },
    ],
  },
  hospitality: {
    hero: {
      eyebrow: 'Hôtellerie et restauration',
      title: 'Une maintenance hôtelière qui protège chaque expérience client',
      description:
        'Fleet aide hôtels, resorts et restaurants à anticiper dans les chambres, les cuisines et les espaces publics, avec des interventions mobiles et la conformité intégrée.',
      highlights: [
        'Suivi par chambre',
        'Contrôle des équipements de cuisine',
        'Conformité sécurité',
      ],
      visual: {
        kind: 'jobs',
        title: 'Demandes hôtel · Aujourd’hui',
        items: [
          {
            title: 'Climatisation inefficace',
            location: 'Chambre 1204',
            status: 'Technicien en route',
            tone: 'info',
          },
          {
            title: 'Robinet qui fuit',
            location: 'Chambre 806',
            status: 'Résolue',
            tone: 'done',
          },
          {
            title: 'Alarme chambre froide',
            location: 'Cuisine principale',
            status: 'Urgent',
            tone: 'overdue',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Les clients remarquent chaque détail',
        description:
          'Une clim bruyante, un robinet qui fuit ou un ascenseur en panne marquent un séjour, et les cuisines dépendent de chaque frigo et friteuse.',
        points: ['Chambres', 'Cuisines', 'Espaces publics'],
      },
      answer: {
        title: 'L’excellence opérationnelle en coulisses',
        description:
          'Fleet coordonne gouvernantes, technique, F&B et prestataires, pour résoudre vite et laisser les clients profiter de chaque instant.',
      },
    },
    capabilities: {
      title: 'Conçu pour l’exploitation hôtelière',
      description: 'Maintenance de la salle et des coulisses, dans une plateforme.',
      tabs: [
        {
          icon: 'requests',
          label: 'Signalements',
          title: 'Signalements rapides depuis partout',
          description:
            'Le personnel signale robinets qui fuient ou pannes de clim depuis tablette ou téléphone, par chambre, suite ou zone.',
          points: [
            'Interventions par chambre et zone',
            'Signalées par tout le personnel',
            'Planification hors des heures de pointe',
          ],
          visual: {
            kind: 'steps',
            title: 'Demande client',
            steps: [
              {
                kind: 'Signalement',
                text: 'Clim inefficace, chambre 1204',
              },
              {
                kind: 'Puis',
                text: 'Intervention créée et localisée',
              },
              {
                kind: 'Puis',
                text: 'Technicien assigné, client informé',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Préventif',
          title: 'Cuisines et installations planifiées',
          description:
            'Automatisez l’entretien des systèmes CVC, réfrigérateurs, fours et ascenseurs, avec une check-list à chaque visite.',
          points: [
            'Contrôle des équipements de cuisine',
            'Plans CVC et ascenseurs',
            'Check-lists avec preuve photo',
          ],
          visual: {
            kind: 'jobs',
            title: 'Contrôles cuisine · Cette semaine',
            items: [
              {
                title: 'Entretien chambre froide',
                location: 'Cuisine principale',
                status: 'Terminée',
                tone: 'done',
              },
              {
                title: 'Nettoyage bac à graisse',
                location: 'Coulisses',
                status: 'Planifiée',
                tone: 'info',
              },
              {
                title: 'Inspection four mixte',
                location: 'Cuisine banquets',
                status: 'Prévu aujourd’hui',
                tone: 'due',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: 'Conformité',
          title: 'Santé, sécurité et normes alimentaires',
          description:
            'Suivez les inspections incendie et les audits de stockage alimentaire, avec des preuves pour chaque contrôle.',
          points: [
            'Inspections sécurité incendie',
            'Audits du stockage alimentaire',
            'Pistes d’audit pour chaque contrôle',
          ],
          visual: {
            kind: 'files',
            title: 'Conformité · Harbour Hotel',
            items: [
              {
                title: 'Inspection sécurité incendie.pdf',
                location: 'Réalisée le 12 sept.',
                status: 'Valide',
                tone: 'done',
              },
              {
                title: 'Audit stockage alimentaire.pdf',
                location: 'Dans 7 jours',
                status: 'À prévoir',
                tone: 'due',
              },
              {
                title: 'Certificat ascenseur.pdf',
                location: 'Valide jusqu’en janv. 2027',
                status: 'Valide',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Coûts',
          title: 'Moins d’arrêts et de coûts d’exploitation',
          description:
            'Suivez l’historique des réparations et les équipements gourmands en maintenance pour planifier les remplacements et les budgets.',
          points: [
            'Historique par équipement',
            'Dépenses par chambres, cuisines et espaces',
            'Prévisions de remplacement',
          ],
          visual: {
            kind: 'chart',
            title: 'Dépenses de maintenance par zone · T3',
            stats: [
              {
                label: 'Dépenses T3',
                value: '48 k$',
              },
              {
                label: 'Chambres traitées',
                value: '312',
              },
            ],
            bars: [
              {
                label: 'Chambres',
                value: 74,
              },
              {
                label: 'Cuisines',
                value: 61,
              },
              {
                label: 'Espaces publics',
                value: 38,
              },
              {
                label: 'Spa et piscine',
                value: 27,
              },
              {
                label: 'Coulisses',
                value: 22,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Salle',
        title: 'Chaque chambre prête pour l’arrivée',
        description:
          'Gouvernantes et technique partagent une vue de chaque chambre, pour corriger avant le prochain client.',
        points: [
          'Statut des chambres partagé',
          'Réparations selon l’occupation',
          'Preuve photo à la clôture',
        ],
        visual: {
          kind: 'jobs',
          title: 'Chambres · Étage 12',
          items: [
            {
              title: 'Chambre 1204',
              location: 'Réparation clim',
              status: 'En cours',
              tone: 'info',
            },
            {
              title: 'Chambre 1210',
              location: 'Prête pour l’arrivée',
              status: 'Prête',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'hotelReception',
          alt: 'Clients à la réception d’un hôtel',
        },
      },
      {
        tag: 'Coulisses',
        title: 'Des cuisines prêtes à chaque service',
        description:
          'Contrôles planifiés et réparations rapides gardent frigos, friteuses et extraction en marche à chaque service.',
        points: [
          'Contrôle avant chaque service',
          'Prestataires pour les systèmes spécialisés',
          'Arrêts suivis par appareil',
        ],
        visual: {
          kind: 'log',
          title: 'Activité cuisine',
          entries: [
            {
              when: '06:10',
              who: 'Cheffe Ana',
              what: 'a signalé l’alarme de la chambre froide',
            },
            {
              when: '06:18',
              who: 'Fleet',
              what: 'a assigné CoolAir en urgence',
            },
          ],
        },
        photo: {
          id: 'chefManager',
          alt: 'Chef et responsable consultant une tablette en cuisine',
        },
      },
      {
        tag: 'Hébergement',
        title: 'Gouvernantes et maintenance synchronisées',
        description:
          'Des vues dédiées pour gouvernantes, maintenance, F&B et réception gardent chaque équipe sur les bonnes tâches.',
        points: [
          'Vues par équipe',
          'Défauts signalés pendant le ménage',
          'Consignes partagées entre équipes',
        ],
        visual: {
          kind: 'steps',
          title: 'Recouche',
          steps: [
            {
              kind: 'Ménage',
              text: 'Chambre 806 · départ 11:00',
            },
            {
              kind: 'Puis',
              text: 'La gouvernante signale un robinet qui goutte',
            },
            {
              kind: 'Puis',
              text: 'Réparé avant l’arrivée de 15:00',
            },
          ],
        },
        photo: {
          id: 'hotelHousekeeping',
          alt: 'Femme de chambre préparant une chambre',
        },
      },
    ],
    quote: {
      text: 'Fleet a réduit notre maintenance corrective de près de 40 %. Nos techniciens, nos registres d’équipements et nos interventions sont enfin réunis au même endroit.',
      author: 'Responsable exploitation',
      company: 'Projet à usage mixte',
      photo: {
        id: 'busyKitchen',
        alt: 'Cuisiniers dans une cuisine professionnelle animée',
      },
    },
    faq: [
      {
        question: 'Comment Fleet accompagne-t-il hôtels et restaurants ?',
        answer:
          'Fleet offre des interventions mobiles, des plans préventifs pour les cuisines et les installations, le suivi de la conformité et du reporting dans une plateforme.',
      },
      {
        question: 'Le personnel peut-il signaler des problèmes depuis les chambres ?',
        answer:
          'Oui. Chaque membre de l’équipe signale un problème depuis un téléphone ou une tablette, par chambre, suite ou zone, avec photos.',
      },
      {
        question: 'Fleet suit-il la sécurité alimentaire et incendie ?',
        answer:
          'Oui. Fleet suit inspections incendie, audits de stockage alimentaire et autres tâches de conformité avec pistes d’audit.',
      },
      {
        question: 'Peut-on planifier la maintenance autour des clients ?',
        answer:
          'Oui. Planifiez les travaux hors des heures de pointe et coordonnez gouvernantes et technique pour ne pas déranger les clients.',
      },
    ],
  },
  healthcareEducation: {
    hero: {
      eyebrow: 'Santé et éducation',
      title: 'Une maintenance fiable pour la santé et l’éducation',
      description:
        'Gardez hôpitaux, cliniques, écoles et campus sûrs, conformes et confortables, avec des plans préventifs, des réparations rapides et des preuves prêtes pour l’audit.',
      highlights: ['Plans préventifs', 'Preuves prêtes pour l’audit', 'Réparations rapides'],
      visual: {
        kind: 'jobs',
        title: 'Demandes campus · Aujourd’hui',
        items: [
          {
            title: 'Contrôle clim service 3',
            location: 'Aile est · Niveau 3',
            status: 'En cours',
            tone: 'info',
          },
          {
            title: 'Inspection porte coupe-feu',
            location: 'Bâtiment sciences',
            status: 'Prévu aujourd’hui',
            tone: 'due',
          },
          {
            title: 'Vidéoprojecteur de classe',
            location: 'Salle B12',
            status: 'Terminée',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Des espaces critiques exigent des installations fiables',
        description:
          'Climatisation, ascenseurs, sécurité incendie et hygiène protègent patients, personnel et élèves, et chaque contrôle doit être tracé.',
        points: ['Zones de soins', 'Salles de classe', 'Normes strictes'],
      },
      answer: {
        title: 'Des bâtiments sûrs et conformes chaque jour',
        description:
          'Fleet planifie la maintenance, suit chaque réparation et conserve les preuves, pour que vos équipes se consacrent aux soins et à l’enseignement.',
      },
    },
    capabilities: {
      title: 'Conçu pour des établissements sûrs et conformes',
      description:
        'De la qualité de l’air à la sécurité incendie, chaque installation planifiée et prouvée.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Préventif',
          title: 'Des plans pour les installations critiques',
          description:
            'Planifiez la maintenance CVC, ascenseurs, groupes électrogènes et sécurité incendie, avec une check-list à chaque visite.',
          points: [
            'Plans pour les installations critiques',
            'Check-lists avec relevés',
            'Interventions avant l’échéance',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan préventif',
            steps: [
              {
                kind: 'Plan',
                text: 'CVC des services · filtres mensuels',
              },
              {
                kind: 'Puis',
                text: 'Créer l’intervention 7 jours avant',
              },
              {
                kind: 'Puis',
                text: 'Assigner l’équipe CVC avec check-list',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: 'Conformité',
          title: 'Inspections et certificats tracés',
          description:
            'Suivez inspections, certificats et autorisations, avec des rappels avant chaque échéance.',
          points: [
            'Inspections par bâtiment',
            'Certificats liés aux équipements',
            'Rappels avant échéance',
          ],
          visual: {
            kind: 'files',
            title: 'Conformité · Aile est',
            items: [
              {
                title: 'Inspection portes coupe-feu.pdf',
                location: 'Réalisée le 3 sept.',
                status: 'Valide',
                tone: 'done',
              },
              {
                title: 'Certificat ascenseur.pdf',
                location: 'Renouvellement dans 30 jours',
                status: 'Renouveler',
                tone: 'due',
              },
              {
                title: 'Essais groupe électrogène.pdf',
                location: 'Mensuel',
                status: 'Vérifié',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'workOrders',
          label: 'Dépannages',
          title: 'Une réponse rapide à chaque demande',
          description:
            'Personnel et enseignants signalent depuis tout appareil, et les interventions arrivent à la bonne équipe avec priorités et SLA.',
          points: [
            'Demandes depuis tout appareil',
            'Priorités pour les zones critiques',
            'Délais SLA pour chaque intervention',
          ],
          visual: {
            kind: 'jobs',
            title: 'Demandes ouvertes',
            items: [
              {
                title: 'Hotte de laboratoire',
                location: 'Bâtiment sciences',
                status: 'Urgent',
                tone: 'overdue',
              },
              {
                title: 'Lavabo qui fuit',
                location: 'Service 2',
                status: 'Assignée',
                tone: 'info',
              },
              {
                title: 'Chaise cassée',
                location: 'Salle A04',
                status: 'Résolue',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Reporting',
          title: 'Un reporting clair pour la direction',
          description:
            'Présentez délais de réponse, conformité et dépenses par bâtiment à la direction et aux autorités.',
          points: [
            'Délais par bâtiment',
            'Conformité en un coup d’œil',
            'Exports pour les contrôles',
          ],
          visual: {
            kind: 'chart',
            title: 'Travaux planifiés réalisés · T3',
            stats: [
              {
                label: 'À l’heure',
                value: '97 %',
              },
              {
                label: 'Inspections',
                value: '186',
              },
            ],
            bars: [
              {
                label: 'Aile est',
                value: 98,
              },
              {
                label: 'Aile ouest',
                value: 96,
              },
              {
                label: 'Sciences',
                value: 95,
              },
              {
                label: 'Bibliothèque',
                value: 99,
              },
              {
                label: 'Gymnase',
                value: 94,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Hygiène',
        title: 'Des espaces propres à chaque service',
        description:
          'Des plannings de nettoyage avec check-lists et preuves photo maintiennent services, salles et sanitaires au bon niveau.',
        points: [
          'Plannings de nettoyage par zone',
          'Check-lists avec preuve photo',
          'Défauts signalés pendant les rondes',
        ],
        visual: {
          kind: 'jobs',
          title: 'Rondes de nettoyage',
          items: [
            {
              title: 'Sanitaires service 3',
              location: 'Toutes les 2 heures',
              status: 'Conforme',
              tone: 'done',
            },
            {
              title: 'Nettoyage approfondi cantine',
              location: 'Quotidien · 15:00',
              status: 'Planifiée',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'cleanerCorridor',
          alt: 'Agent d’entretien désinfectant une poignée de porte',
        },
      },
      {
        tag: 'Qualité de l’air',
        title: 'Un air sain et confortable',
        description:
          'Les plans CVC gardent filtres, centrales de traitement d’air et refroidissement en parfait état pour patients et élèves.',
        points: [
          'Changement de filtres planifié',
          'Relevés à chaque visite',
          'Pannes détectées tôt',
        ],
        visual: {
          kind: 'steps',
          title: 'Plan qualité de l’air',
          steps: [
            {
              kind: 'Chaque',
              text: 'Mois · toutes les CTA',
            },
            {
              kind: 'Puis',
              text: 'Remplacer les filtres et noter les relevés',
            },
          ],
        },
        photo: {
          id: 'acFilterService',
          alt: 'Technicien remplaçant un filtre de climatisation',
        },
      },
      {
        tag: 'Énergie et sécurité',
        title: 'Énergie et sécurité toujours prêtes',
        description:
          'Groupes électrogènes, tableaux électriques et systèmes incendie sont testés selon le planning, avec chaque résultat enregistré.',
        points: [
          'Essais groupes et tableaux',
          'Inspections des systèmes incendie',
          'Résultats liés à chaque équipement',
        ],
        visual: {
          kind: 'asset',
          title: 'Fiche équipement',
          name: 'Groupe électrogène G-01',
          location: 'Aile est · Local technique',
          status: 'Testé',
          facts: [
            {
              label: 'Dernier essai',
              value: '1er oct.',
            },
            {
              label: 'Prochain essai',
              value: '1er nov.',
            },
            {
              label: 'Heures de marche',
              value: '412',
            },
            {
              label: 'Interventions ouvertes',
              value: '0',
            },
          ],
        },
        photo: {
          id: 'electricianPanel',
          alt: 'Électricien intervenant sur une armoire électrique',
        },
      },
    ],
    quote: {
      text: 'Fleet a réduit notre maintenance corrective de près de 40 %. Nos techniciens, nos registres d’équipements et nos interventions sont enfin réunis au même endroit.',
      author: 'Responsable exploitation',
      company: 'Projet à usage mixte',
      photo: {
        id: 'officeCorridor',
        alt: 'Personnes dans un couloir de bureaux lumineux',
      },
    },
    faq: [
      {
        question: 'Fleet convient-il aux hôpitaux, cliniques et écoles ?',
        answer:
          'Oui. Fleet accompagne les établissements de santé et d’enseignement de toute taille, d’une clinique ou école à des campus multisites.',
      },
      {
        question: 'Comment Fleet aide-t-il pour les inspections et audits ?',
        answer:
          'Fleet conserve inspections, certificats et autorisations avec pistes d’audit et rappels avant chaque échéance.',
      },
      {
        question: 'Le personnel et les enseignants peuvent-ils signaler des problèmes ?',
        answer:
          'Oui. Toute personne invitée signale depuis un téléphone ou une tablette, et les demandes deviennent des interventions avec priorités et SLA.',
      },
      {
        question: 'Peut-on rendre compte à la direction ?',
        answer:
          'Oui. Tableaux de bord et exports présentent délais de réponse, conformité et dépenses par bâtiment.',
      },
    ],
  },
  logistics: {
    hero: {
      eyebrow: 'Transport et logistique',
      title: 'Une maintenance logistique qui fait avancer chaque expédition',
      description:
        'Fleet aide les équipes logistiques à garder entrepôts, quais, équipements et véhicules en service, avec des signalements rapides et des plans préventifs sur chaque site.',
      highlights: ['Signalements rapides', 'Préventif pour toute la flotte', 'Suivi des arrêts'],
      visual: {
        kind: 'jobs',
        title: 'Westport DC · Aujourd’hui',
        items: [
          {
            title: 'Porte de quai 4 en panne',
            location: 'Quai de chargement',
            status: 'Urgent',
            tone: 'overdue',
          },
          {
            title: 'Entretien convoyeur C2',
            location: 'Tri',
            status: 'En cours',
            tone: 'info',
          },
          {
            title: 'Contrôle chariot FL-07',
            location: 'Cour',
            status: 'Terminée',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Chaque heure d’arrêt a des répercussions',
        description:
          'Quand une porte de quai cède ou qu’un convoyeur s’arrête, les plannings des clients, transporteurs et équipes bougent.',
        points: ['Quais de chargement', 'Convoyeurs', 'Véhicules'],
      },
      answer: {
        title: 'Un débit protégé par la maintenance préventive',
        description:
          'Fleet enregistre les défauts depuis l’entrepôt, planifie le préventif et suit chaque équipement, pour des expéditions à l’heure.',
      },
    },
    capabilities: {
      title: 'Conçu pour la logistique à flux tendu',
      description: 'Entrepôts, équipements et véhicules sur un seul tableau de bord.',
      tabs: [
        {
          icon: 'workOrders',
          label: 'Signalements',
          title: 'Des signalements rapides depuis l’entrepôt',
          description:
            'Techniciens et chefs d’équipe signalent depuis leur mobile, et les interventions vont aux équipes internes ou prestataires par région ou rôle.',
          points: [
            'Signalements mobiles',
            'Interventions par région ou rôle',
            'Prestataires dans le même flux',
          ],
          visual: {
            kind: 'jobs',
            title: 'Interventions ouvertes',
            items: [
              {
                title: 'Niveleur de quai bloqué',
                location: 'Quai 6',
                status: 'Assignée',
                tone: 'info',
              },
              {
                title: 'Rayonnage endommagé',
                location: 'Allée 14',
                status: 'À inspecter',
                tone: 'due',
              },
              {
                title: 'Chargeur défectueux',
                location: 'Zone chariots',
                status: 'Résolue',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Préventif',
          title: 'Aucun contrôle critique oublié',
          description:
            'Automatisez l’entretien des véhicules, convoyeurs et monte-charges, déclenché par kilométrage, heures de marche ou temps.',
          points: [
            'Déclencheurs par heures, km ou temps',
            'Rappels automatiques d’inspection',
            'Moins de réparations urgentes',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan à l’usage',
            steps: [
              {
                kind: 'Déclencheur',
                text: 'Chariot FL-07 atteint 500 heures',
              },
              {
                kind: 'Puis',
                text: 'Créer l’intervention d’entretien',
              },
              {
                kind: 'Puis',
                text: 'Assigner l’atelier flotte',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Équipements',
          title: 'Coûts et historique par équipement',
          description:
            'Consultez l’historique et le coût par chariot, véhicule ou système, et repérez les goulots d’étranglement.',
          points: [
            'Historique par équipement',
            'Coût par chariot et système',
            'Goulots d’étranglement mis en évidence',
          ],
          visual: {
            kind: 'asset',
            title: 'Fiche équipement',
            name: 'Convoyeur C2',
            location: 'Westport DC · Tri',
            status: 'En service',
            facts: [
              {
                label: 'Heures de marche',
                value: '6 420',
              },
              {
                label: 'Dernier entretien',
                value: '18 sept.',
              },
              {
                label: 'Arrêt T3',
                value: '5 h',
              },
              {
                label: 'Coût depuis janv.',
                value: '7 850 $',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Analyses',
          title: 'Arrêts et délais de réponse',
          description:
            'Suivez arrêts et délais de réponse sur tous les sites et repérez les signaux faibles.',
          points: [
            'Arrêts par site et équipement',
            'Délais par équipe',
            'Tendances qui alertent tôt',
          ],
          visual: {
            kind: 'chart',
            title: 'Heures d’arrêt par site · T3',
            stats: [
              {
                label: 'Arrêt T3',
                value: '38 h',
              },
              {
                label: 'SLA respectés',
                value: '95,1 %',
              },
            ],
            bars: [
              {
                label: 'Westport DC',
                value: 14,
              },
              {
                label: 'Harbour hub',
                value: 9,
              },
              {
                label: 'Northgate DC',
                value: 7,
              },
              {
                label: 'Aéroport',
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
        tag: 'Entrepôts',
        title: 'Entrepôts et quais prêts pour chaque équipe',
        description:
          'Quais, portes, rayonnages et éclairage sont inspectés selon le planning, et les défauts traités rapidement.',
        points: [
          'Inspection des quais et portes',
          'Contrôle des rayonnages planifié',
          'Réparations rapides en entrepôt',
        ],
        visual: {
          kind: 'jobs',
          title: 'Contrôle des quais · Aujourd’hui',
          items: [
            {
              title: 'Portes de quai 1–8',
              location: 'Inspection quotidienne',
              status: 'Terminée',
              tone: 'done',
            },
            {
              title: 'Niveleur de quai 6',
              location: 'Panne signalée',
              status: 'Assignée',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'warehouseTeam',
          alt: 'Équipe d’entrepôt contrôlant le stock entre les rayonnages',
        },
      },
      {
        tag: 'Véhicules',
        title: 'Des véhicules prêts à rouler et conformes',
        description:
          'Camions, fourgons et véhicules de service partagent le même tableau de bord, des carnets d’entretien aux immatriculations et contrôles.',
        points: [
          'Entretien au kilométrage et aux heures',
          'Alertes contrôles et immatriculations',
          'Dossiers prêts pour l’audit',
        ],
        visual: {
          kind: 'log',
          title: 'Alertes véhicules',
          entries: [
            {
              when: '08:00',
              who: 'Fleet',
              what: 'a planifié l’entretien du fourgon V-12 à 30 000 km',
            },
            {
              when: '08:05',
              who: 'Fleet',
              what: 'a signalé le renouvellement d’immatriculation du camion T-03',
            },
          ],
        },
        photo: {
          id: 'fleetManager',
          alt: 'Gestionnaire de flotte avec une tablette devant des camions',
        },
      },
      {
        tag: 'Analyses',
        title: 'Moins de perturbations, plus de débit',
        description:
          'Les tendances montrent quels équipements ralentissent l’activité, pour planifier les remplacements à temps.',
        points: [
          'Équipements bloquants mis en évidence',
          'Planification des remplacements',
          'Visibilité multisite',
        ],
        visual: {
          kind: 'chart',
          title: 'Principales causes d’arrêt · T3',
          stats: [],
          bars: [
            {
              label: 'Portes de quai',
              value: 12,
            },
            {
              label: 'Convoyeurs',
              value: 9,
            },
            {
              label: 'Chariots',
              value: 7,
            },
            {
              label: 'Rayonnages',
              value: 4,
            },
            {
              label: 'Éclairage',
              value: 2,
            },
          ],
        },
        photo: {
          id: 'warehouseAnalytics',
          alt: 'Superviseur analysant des indicateurs à l’écran',
        },
      },
    ],
    quote: {
      text: 'Les autres plateformes étaient trop complexes ou trop génériques. Fleet nous a apporté une solution sur mesure avec un support plus réactif.',
      author: 'Directeur de la maintenance',
      company: 'Plateforme logistique',
      photo: {
        id: 'stockCheck',
        alt: 'Coordinateur contrôlant le stock en rayon',
      },
    },
    faq: [
      {
        question: 'Comment Fleet accompagne-t-il la logistique et les entrepôts ?',
        answer:
          'Fleet permet de signaler depuis l’entrepôt, de planifier le préventif des quais, convoyeurs, monte-charges et véhicules, et de suivre les arrêts sur chaque site.',
      },
      {
        question: 'La maintenance peut-elle être déclenchée à l’usage ?',
        answer:
          'Oui. Définissez des déclencheurs par kilométrage, heures de marche ou temps, avec des rappels automatiques d’inspection et d’entretien.',
      },
      {
        question: 'Fleet peut-il gérer aussi nos véhicules ?',
        answer:
          'Oui. La gestion de flotte de Fleet offre la même visibilité, des carnets d’entretien et immatriculations aux dossiers conducteurs.',
      },
      {
        question: 'Les prestataires peuvent-ils travailler dans Fleet ?',
        answer:
          'Oui. Confiez les interventions aux équipes internes ou prestataires par région ou rôle, avec accès, validations et SLA sous votre contrôle.',
      },
    ],
  },
  hvacLifts: {
    hero: {
      eyebrow: 'CVC, ascenseurs et élévateurs',
      title: 'La maintenance CVC et ascenseurs dans les temps',
      description:
        'Planifiez, réalisez et prouvez la maintenance de la climatisation, des ascenseurs et des escaliers mécaniques sur chaque bâtiment, avec certificats et prestataires coordonnés.',
      highlights: ['Plans récurrents', 'Certificats enregistrés', 'Prestataires coordonnés'],
      visual: {
        kind: 'jobs',
        title: 'Installations critiques · Aujourd’hui',
        items: [
          {
            title: 'Entretien groupe froid CH-02',
            location: 'Harbour Point · Local technique',
            status: 'En cours',
            tone: 'info',
          },
          {
            title: 'Contrôle mensuel ascenseur L2',
            location: 'Tower B · Noyau',
            status: 'Prévu aujourd’hui',
            tone: 'due',
          },
          {
            title: 'Inspection escalator E3',
            location: 'Northgate Mall',
            status: 'Terminée',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Les installations critiques ne s’arrêtent jamais',
        description:
          'Refroidissement, ascenseurs et escalators fonctionnent chaque jour, et chacun exige entretien régulier, certificats et réactivité en cas de panne.',
        points: ['Groupes froids et CTA', 'Ascenseurs et escalators', 'Prestataires spécialisés'],
      },
      answer: {
        title: 'Chaque installation planifiée et prouvée',
        description:
          'Fleet planifie chaque entretien, l’adresse au bon spécialiste et rattache le certificat à l’équipement.',
      },
    },
    capabilities: {
      title: 'Des installations toujours en service',
      description: 'Plans préventifs, prestataires spécialisés et certificats au même endroit.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Plannings',
          title: 'Un entretien récurrent pour chaque appareil',
          description:
            'Planifiez groupes froids, CTA, ascenseurs et escalators selon le temps ou l’usage, avec des check-lists éprouvées.',
          points: [
            'Plannings au temps ou à l’usage',
            'Check-lists par type d’installation',
            'Interventions avant l’échéance',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan ascenseurs',
            steps: [
              {
                kind: 'Plan',
                text: 'Ascenseurs L1–L4 · entretien mensuel',
              },
              {
                kind: 'Puis',
                text: 'Assigner LiftCo avec check-list',
              },
              {
                kind: 'Puis',
                text: 'Joindre le certificat d’entretien',
              },
            ],
          },
        },
        {
          icon: 'vendors',
          label: 'Prestataires',
          title: 'Des spécialistes assignés automatiquement',
          description:
            'Confiez les travaux CVC et ascenseurs au bon spécialiste par site et installation, avec SLA pour chaque intervention.',
          points: [
            'Prestataires par installation et site',
            'SLA pour chaque intervention',
            'Devis et validations intégrés',
          ],
          visual: {
            kind: 'jobs',
            title: 'Interventions spécialisées',
            items: [
              {
                title: 'CoolAir · CVC',
                location: '6 interventions aujourd’hui',
                status: 'Conforme',
                tone: 'done',
              },
              {
                title: 'LiftCo · Ascenseurs',
                location: '3 interventions aujourd’hui',
                status: '1 à prévoir',
                tone: 'due',
              },
              {
                title: 'Escalift · Escalators',
                location: '2 interventions aujourd’hui',
                status: 'Planifiée',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Équipements',
          title: 'Certificats et historique par appareil',
          description:
            'Chaque appareil conserve historique, certificats, manuels et arrêts dans une même fiche.',
          points: [
            'Certificats liés à chaque appareil',
            'Historique et coûts',
            'Manuels disponibles sur site',
          ],
          visual: {
            kind: 'asset',
            title: 'Fiche équipement',
            name: 'Ascenseur L2',
            location: 'Tower B · Ascenseurs centraux',
            status: 'Entretien à prévoir',
            facts: [
              {
                label: 'Dernier entretien',
                value: '2 sept.',
              },
              {
                label: 'Certificat',
                value: 'Valide jusqu’en janv. 2027',
              },
              {
                label: 'Arrêt T3',
                value: '4 h',
              },
              {
                label: 'Prestataire',
                value: 'LiftCo',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Arrêts',
          title: 'Analyse des arrêts par installation',
          description:
            'Repérez les appareils aux pannes récurrentes et planifiez les remplacements grâce aux données de cycle de vie.',
          points: [
            'Arrêts par installation et site',
            'Pannes récurrentes mises en évidence',
            'Prévisions de remplacement',
          ],
          visual: {
            kind: 'chart',
            title: 'Heures d’arrêt par installation · T3',
            stats: [
              {
                label: 'Arrêt total',
                value: '61 h',
              },
              {
                label: 'Appareils à risque',
                value: '5',
              },
            ],
            bars: [
              {
                label: 'Groupes froids',
                value: 22,
              },
              {
                label: 'CTA',
                value: 15,
              },
              {
                label: 'Ascenseurs',
                value: 12,
              },
              {
                label: 'Escalators',
                value: 8,
              },
              {
                label: 'Splits',
                value: 4,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'CVC',
        title: 'Un refroidissement à la hauteur de la demande',
        description:
          'Groupes froids, CTA et unités en toiture sont entretenus selon le planning, avec relevés à chaque visite.',
        points: ['Relevés sur site', 'Plans filtres et batteries', 'Pannes détectées tôt'],
        visual: {
          kind: 'jobs',
          title: 'Plan CVC · Octobre',
          items: [
            {
              title: 'Unités toiture RTU 1–12',
              location: 'Harbour Point',
              status: 'Planifiée',
              tone: 'info',
            },
            {
              title: 'Filtres CTA AHU-07',
              location: 'Tower B',
              status: 'Terminée',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'rooftopUnits',
          alt: 'Unités de climatisation sur le toit d’un immeuble',
        },
      },
      {
        tag: 'Ascenseurs',
        title: 'Ascenseurs et escalators certifiés et sûrs',
        description:
          'Contrôles mensuels, inspections réglementaires et certificats restent à jour pour chaque appareil.',
        points: [
          'Contrôles mensuels par prestataire',
          'Inspections réglementaires suivies',
          'Certificats renouvelés à temps',
        ],
        visual: {
          kind: 'files',
          title: 'Certificats ascenseurs',
          items: [
            {
              title: 'Certificat ascenseur L1.pdf',
              location: 'Valide jusqu’en mars 2027',
              status: 'Valide',
              tone: 'done',
            },
            {
              title: 'Certificat ascenseur L2.pdf',
              location: 'Renouvellement dans 30 jours',
              status: 'Renouveler',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'liftShaft',
          alt: 'Techniciens travaillant dans une gaine d’ascenseur',
        },
      },
      {
        tag: 'Réactivité',
        title: 'Une réponse rapide en cas de panne',
        description:
          'Les pannes issues de la GTB ou des signalements deviennent des interventions priorisées pour le bon spécialiste.',
        points: [
          'Alarmes GTB en interventions',
          'Priorité par installation et site',
          'Prestataires notifiés instantanément',
        ],
        visual: {
          kind: 'log',
          title: 'Réponse aux pannes',
          entries: [
            {
              when: '14:02',
              who: 'GTB',
              what: 'a signalé une température élevée sur AHU-07',
            },
            {
              when: '14:03',
              who: 'Fleet',
              what: 'a créé une intervention urgente pour CoolAir',
            },
          ],
        },
        photo: {
          id: 'hvacTechnicians',
          alt: 'Techniciens CVC sur des unités en toiture',
        },
      },
    ],
    quote: {
      text: 'Fleet a réduit notre maintenance corrective de près de 40 %. Nos techniciens, nos registres d’équipements et nos interventions sont enfin réunis au même endroit.',
      author: 'Responsable exploitation',
      company: 'Projet à usage mixte',
      photo: {
        id: 'liftTechnician',
        alt: 'Technicien travaillant dans une cabine d’ascenseur',
      },
    },
    faq: [
      {
        question: 'Fleet gère-t-il ensemble la maintenance CVC et ascenseurs ?',
        answer:
          'Oui. Fleet planifie et suit la maintenance CVC, ascenseurs et escalators dans une plateforme, avec plannings, prestataires et certificats pour chaque appareil.',
      },
      {
        question: 'Fleet conserve-t-il les certificats d’ascenseur ?',
        answer:
          'Oui. Les certificats sont rattachés à chaque ascenseur ou escalator, avec des rappels avant leur expiration.',
      },
      {
        question: 'Les alarmes de la GTB peuvent-elles créer des interventions ?',
        answer:
          'Oui. Grâce aux intégrations GTB, alarmes et relevés alimentent vos plans de maintenance et créent des interventions.',
      },
      {
        question: 'Comment travaillent les prestataires spécialisés dans Fleet ?',
        answer:
          'Ils reçoivent les interventions de leurs installations et sites, déposent leurs devis et clôturent avec photos et certificats.',
      },
    ],
  },
  dataCenters: {
    hero: {
      eyebrow: 'Centres de données',
      title: 'Une maintenance de centre de données qui protège la disponibilité',
      description:
        'Gardez refroidissement, énergie et sécurité en parfait état avec des plans préventifs, des alertes reliées à la GTB et une traçabilité complète des changements.',
      highlights: [
        'Plans refroidissement et énergie',
        'Alertes reliées à la GTB',
        'Traçabilité complète',
      ],
      visual: {
        kind: 'jobs',
        title: 'Salle informatique · Aujourd’hui',
        items: [
          {
            title: 'Filtres CRAH 4',
            location: 'Salle A',
            status: 'En cours',
            tone: 'info',
          },
          {
            title: 'Inspection batteries onduleur',
            location: 'Local énergie 2',
            status: 'Prévu aujourd’hui',
            tone: 'due',
          },
          {
            title: 'Essai en charge groupe',
            location: 'Cour',
            status: 'Terminée',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'La disponibilité commence par le bâtiment',
        description:
          'Refroidissement, distribution électrique et extinction fonctionnent en continu, et chaque intervention doit être planifiée et tracée.',
        points: ['Refroidissement', 'Énergie', 'Extinction'],
      },
      answer: {
        title: 'Chaque installation entretenue avec précision',
        description:
          'Fleet planifie chaque tâche, l’adresse à des équipes qualifiées et trace chaque changement pour les audits et les SLA.',
      },
    },
    capabilities: {
      title: 'Conçu pour les sites critiques',
      description: 'Maintenance planifiée, changements maîtrisés et traçabilité totale.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Préventif',
          title: 'Des plans pour le refroidissement et l’énergie',
          description:
            'Planifiez CRAH, groupes froids, onduleurs et groupes électrogènes selon le temps ou les heures de marche, avec des check-lists détaillées.',
          points: [
            'Plans au temps ou aux heures',
            'Check-lists et relevés détaillés',
            'Travaux préparés avant les fenêtres',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan groupe électrogène',
            steps: [
              {
                kind: 'Chaque',
                text: 'Mois · premier mardi',
              },
              {
                kind: 'Puis',
                text: 'Essai en charge de 60 minutes',
              },
              {
                kind: 'Puis',
                text: 'Relevés ajoutés à l’historique G-01',
              },
            ],
          },
        },
        {
          icon: 'approvals',
          label: 'Changements',
          title: 'Des changements maîtrisés',
          description:
            'Des points de validation garantissent que chaque intervention est planifiée, validée et tracée avant de commencer.',
          points: [
            'Validation avant intervention',
            'Fenêtres de maintenance respectées',
            'Chaque changement tracé',
          ],
          visual: {
            kind: 'jobs',
            title: 'Demandes de changement',
            items: [
              {
                title: 'Remplacement module onduleur',
                location: 'Local énergie 2',
                status: 'Valider',
                tone: 'due',
              },
              {
                title: 'Mise à jour firmware CRAH',
                location: 'Salle A',
                status: 'Validé',
                tone: 'done',
              },
              {
                title: 'Inspection PDU',
                location: 'Salle B',
                status: 'Planifiée',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Équipements',
          title: 'Un historique complet des équipements',
          description:
            'Chaque groupe froid, onduleur, PDU et groupe électrogène conserve historique, relevés et documents.',
          points: [
            'Relevés et historique par équipement',
            'Garanties et contrats',
            'Manuels disponibles sur site',
          ],
          visual: {
            kind: 'asset',
            title: 'Fiche équipement',
            name: 'Onduleur 2B',
            location: 'Local énergie 2',
            status: 'En service',
            facts: [
              {
                label: 'Dernier entretien',
                value: '15 août',
              },
              {
                label: 'Âge des batteries',
                value: '3 ans',
              },
              {
                label: 'Charge',
                value: '62 %',
              },
              {
                label: 'Interventions ouvertes',
                value: '1',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Reporting',
          title: 'Un reporting prêt pour les SLA',
          description:
            'Présentez taux de réalisation, délais de réponse et historique des changements aux clients et auditeurs.',
          points: ['Travaux planifiés réalisés', 'Délais par priorité', 'Exports pour les audits'],
          visual: {
            kind: 'chart',
            title: 'Travaux planifiés réalisés · T3',
            stats: [
              {
                label: 'À l’heure',
                value: '99,2 %',
              },
              {
                label: 'Changements',
                value: '84',
              },
            ],
            bars: [
              {
                label: 'Refroid.',
                value: 99,
              },
              {
                label: 'Énergie',
                value: 100,
              },
              {
                label: 'Incendie',
                value: 98,
              },
              {
                label: 'Sûreté',
                value: 99,
              },
              {
                label: 'Bâtiment',
                value: 97,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Refroidissement',
        title: 'Un refroidissement sous surveillance constante',
        description:
          'Alarmes et relevés de la GTB alimentent les plans préventifs, pour entretenir avant toute baisse de performance.',
        points: [
          'Relevés GTB dans les plans',
          'Plannings filtres et batteries',
          'Alarmes transformées en interventions',
        ],
        visual: {
          kind: 'log',
          title: 'Alertes refroidissement',
          entries: [
            {
              when: '02:14',
              who: 'GTB',
              what: 'a signalé une hausse de température de soufflage sur CRAH 4',
            },
            {
              when: '02:15',
              who: 'Fleet',
              what: 'a créé une intervention prioritaire pour l’astreinte',
            },
          ],
        },
        photo: {
          id: 'dataCenter',
          alt: 'Rangées de baies de serveurs dans un centre de données',
        },
      },
      {
        tag: 'Énergie',
        title: 'Une alimentation testée et prête',
        description:
          'Onduleurs, batteries, PDU et groupes électrogènes sont testés selon le planning, avec chaque résultat enregistré.',
        points: [
          'Inspections onduleurs et batteries',
          'Essais en charge des groupes',
          'Résultats liés à chaque équipement',
        ],
        visual: {
          kind: 'jobs',
          title: 'Contrôles énergie · Octobre',
          items: [
            {
              title: 'Essai en charge G-01',
              location: 'Mensuel',
              status: 'Terminée',
              tone: 'done',
            },
            {
              title: 'Batteries onduleur 2B',
              location: 'Trimestriel',
              status: 'Prévu aujourd’hui',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'electricianPanel',
          alt: 'Électricien intervenant sur une armoire électrique',
        },
      },
      {
        tag: 'Équipes',
        title: 'Ingénieurs et prestataires dans un même flux',
        description:
          'Ingénieurs internes et prestataires spécialisés suivent les mêmes procédures, validations et traces.',
        points: [
          'Mêmes procédures pour tous',
          'Accès prestataires à leurs interventions',
          'Historique complet de chaque intervention',
        ],
        visual: {
          kind: 'jobs',
          title: 'Équipes du jour',
          items: [
            {
              title: 'Ingénieurs sur site',
              location: '6 interventions',
              status: 'Conforme',
              tone: 'done',
            },
            {
              title: 'CoolAir · Refroidissement',
              location: '2 interventions',
              status: 'Planifiée',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'techniciansPanel',
          alt: 'Deux techniciens contrôlant un tableau d’équipement',
        },
      },
    ],
    quote: {
      text: 'Les autres plateformes étaient trop complexes ou trop génériques. Fleet nous a apporté une solution sur mesure avec un support plus réactif.',
      author: 'Directeur de la maintenance',
      company: 'Plateforme logistique',
      photo: {
        id: 'factoryTechnician',
        alt: 'Technicien contrôlant un équipement avec une tablette',
      },
    },
    faq: [
      {
        question: 'Fleet accompagne-t-il les équipes de centres de données ?',
        answer:
          'Oui. Fleet planifie et suit la maintenance du refroidissement, de l’énergie et de la sécurité incendie, avec validations, relevés et traçabilité complète.',
      },
      {
        question: 'La maintenance peut-elle suivre les heures de marche ?',
        answer:
          'Oui. Planifiez au temps ou à l’usage, par exemple aux heures de marche des groupes et onduleurs.',
      },
      {
        question: 'Les alarmes GTB peuvent-elles créer des interventions ?',
        answer:
          'Oui. Les intégrations GTB alimentent les plans préventifs avec alarmes et relevés et créent des interventions.',
      },
      {
        question: 'Peut-on montrer la performance SLA aux clients ?',
        answer:
          'Oui. Tableaux de bord et exports présentent taux de réalisation, délais de réponse et historique des changements.',
      },
    ],
  },
  fitness: {
    hero: {
      eyebrow: 'Centres de fitness et de bien-être',
      title: 'Une maintenance de salle de sport que les membres remarquent',
      description:
        'Gardez salles, studios, piscines et spas propres, sûrs et opérationnels avec le contrôle des équipements, des plannings de nettoyage et des réparations rapides.',
      highlights: ['Contrôle des équipements', 'Plannings de nettoyage', 'Réparations rapides'],
      visual: {
        kind: 'jobs',
        title: 'Demandes club · Aujourd’hui',
        items: [
          {
            title: 'Tapis T-08 courroie',
            location: 'Plateau cardio',
            status: 'En cours',
            tone: 'info',
          },
          {
            title: 'Contrôle pH piscine',
            location: 'Bassin',
            status: 'Prévu aujourd’hui',
            tone: 'due',
          },
          {
            title: 'Poêle du sauna',
            location: 'Spa',
            status: 'Terminée',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Les membres attendent que tout fonctionne',
        description:
          'Machines, douches, piscines et climatisation sont utilisées en continu, et chaque panneau « hors service » se remarque.',
        points: ['Équipements', 'Piscines et spas', 'Plannings chargés'],
      },
      answer: {
        title: 'Chaque espace prêt pour chaque membre',
        description:
          'Fleet planifie les contrôles, recueille les signalements du personnel et des membres et oriente vite les réparations, dans chaque club.',
      },
    },
    capabilities: {
      title: 'Conçu pour des clubs et studios animés',
      description: 'Équipements, nettoyage et installations au même endroit.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Équipements',
          title: 'Des contrôles planifiés',
          description:
            'Planifiez inspections et entretien des tapis, vélos, racks et machines de musculation, avec check-lists.',
          points: [
            'Plans par type de machine',
            'Contrôles de sécurité quotidiens',
            'Historique de chaque machine',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan cardio',
            steps: [
              {
                kind: 'Chaque',
                text: 'Semaine · lundi 06:00',
              },
              {
                kind: 'Puis',
                text: 'Inspecter toutes les machines cardio',
              },
              {
                kind: 'Puis',
                text: 'Créer une intervention par défaut',
              },
            ],
          },
        },
        {
          icon: 'requests',
          label: 'Signalements',
          title: 'Les machines hors service réparées vite',
          description:
            'Le personnel signale un équipement défectueux en quelques secondes, et la réparation part vers le bon technicien ou prestataire.',
          points: [
            'Signalements en quelques secondes',
            'Photo de chaque défaut',
            'Prestataires pour équipements spécialisés',
          ],
          visual: {
            kind: 'jobs',
            title: 'Signalements ouverts',
            items: [
              {
                title: 'Rameur R-02',
                location: 'Plateau cardio',
                status: 'Assignée',
                tone: 'info',
              },
              {
                title: 'Évacuation douche',
                location: 'Vestiaire hommes',
                status: 'Urgent',
                tone: 'overdue',
              },
              {
                title: 'Enceinte studio',
                location: 'Studio 2',
                status: 'Résolue',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: 'Piscines et spas',
          title: 'Contrôles de l’eau et de sécurité enregistrés',
          description:
            'Consignez les contrôles de la piscine, du sauna et du hammam avec relevés, pour respecter les normes chaque jour.',
          points: [
            'Relevés quotidiens de l’eau',
            'Contrôles sauna et hammam',
            'Registres prêts pour l’inspection',
          ],
          visual: {
            kind: 'files',
            title: 'Registres · Bassin',
            items: [
              {
                title: 'Relevés eau piscine.pdf',
                location: '3 fois aujourd’hui',
                status: 'Complet',
                tone: 'done',
              },
              {
                title: 'Contrôle matériel de sauvetage.pdf',
                location: 'Quotidien',
                status: 'Complet',
                tone: 'done',
              },
              {
                title: 'Inspection sécurité spa.pdf',
                location: 'Dans 5 jours',
                status: 'À prévoir',
                tone: 'due',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Reporting',
          title: 'La disponibilité dans chaque club',
          description:
            'Suivez disponibilité des équipements, coûts de réparation et pannes récurrentes par club pour planifier les investissements.',
          points: [
            'Disponibilité par club',
            'Coûts par machine',
            'Planification des renouvellements',
          ],
          visual: {
            kind: 'chart',
            title: 'Disponibilité des équipements par club · T3',
            stats: [
              {
                label: 'Disponibilité',
                value: '97,8 %',
              },
              {
                label: 'Réparations',
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
        tag: 'Air et confort',
        title: 'Un air frais et une température agréable',
        description: 'Les plans CVC gardent studios et plateaux confortables à chaque cours.',
        points: [
          'Changement de filtres planifié',
          'Relevés à chaque visite',
          'Pannes détectées tôt',
        ],
        visual: {
          kind: 'jobs',
          title: 'CVC · Ce mois-ci',
          items: [
            {
              title: 'Entretien clim studio 1',
              location: 'Club Harbour',
              status: 'Terminée',
              tone: 'done',
            },
            {
              title: 'Filtres CTA plateau',
              location: 'Club Northgate',
              status: 'Planifiée',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'acFilterService',
          alt: 'Technicien remplaçant un filtre de climatisation',
        },
      },
      {
        tag: 'Nettoyage',
        title: 'Des vestiaires propres à chaque heure',
        description:
          'Des rondes de nettoyage avec check-lists et preuves photo gardent vestiaires, douches et studios impeccables.',
        points: [
          'Rondes horaires',
          'Check-lists avec preuve photo',
          'Défauts signalés pendant les rondes',
        ],
        visual: {
          kind: 'steps',
          title: 'Ronde de nettoyage',
          steps: [
            {
              kind: 'Chaque',
              text: 'Heure · de 06:00 à 22:00',
            },
            {
              kind: 'Puis',
              text: 'Nettoyer les vestiaires et prendre des photos',
            },
          ],
        },
        photo: {
          id: 'cleanerCorridor',
          alt: 'Agent d’entretien désinfectant une poignée de porte',
        },
      },
      {
        tag: 'Installations',
        title: 'Douches, piscines et locaux techniques en service',
        description:
          'Plomberie, pompes et chauffe-eau sont entretenus selon le planning, avec une réponse rapide aux fuites.',
        points: [
          'Entretien pompes et chauffe-eau',
          'Réponse rapide aux fuites',
          'Historique de chaque équipement',
        ],
        visual: {
          kind: 'asset',
          title: 'Fiche équipement',
          name: 'Pompe piscine PP-1',
          location: 'Club Harbour · Local technique',
          status: 'En service',
          facts: [
            {
              label: 'Dernier entretien',
              value: '20 sept.',
            },
            {
              label: 'Prochain entretien',
              value: '20 déc.',
            },
            {
              label: 'Heures de marche',
              value: '2 140',
            },
            {
              label: 'Interventions ouvertes',
              value: '0',
            },
          ],
        },
        photo: {
          id: 'plumberRepair',
          alt: 'Plombier réparant un évier de cuisine',
        },
      },
    ],
    quote: {
      text: 'Fleet a réduit notre maintenance corrective de près de 40 %. Nos techniciens, nos registres d’équipements et nos interventions sont enfin réunis au même endroit.',
      author: 'Responsable exploitation',
      company: 'Projet à usage mixte',
      photo: {
        id: 'technicianDrill',
        alt: 'Technicien fixant un équipement à la perceuse',
      },
    },
    faq: [
      {
        question: 'Fleet convient-il aux salles de sport et centres de bien-être ?',
        answer:
          'Oui. Fleet aide salles, studios, piscines et spas à entretenir équipements et installations, avec réparations rapides et plannings de nettoyage.',
      },
      {
        question: 'Le personnel peut-il signaler un équipement défectueux ?',
        answer:
          'Oui. Le personnel signale depuis un téléphone avec photos, et la réparation part vers le bon technicien ou prestataire.',
      },
      {
        question: 'Peut-on consigner les contrôles piscine et spa ?',
        answer:
          'Oui. Enregistrez relevés quotidiens et contrôles de sécurité pour piscines, saunas et hammams, prêts pour l’inspection.',
      },
      {
        question: 'Peut-on gérer plusieurs clubs ?',
        answer:
          'Oui. Fleet accompagne les réseaux multisites, avec règles, tableaux de bord et reporting par club et par région.',
      },
    ],
  },
  mep: {
    hero: {
      eyebrow: 'Maintenance CVC, électricité et plomberie',
      title: 'La maintenance multitechnique sur tout votre patrimoine',
      description:
        'Gérez génie climatique, électricité et plomberie dans un seul flux, avec plans préventifs, affectation par métier et preuves de conformité pour chaque bâtiment.',
      highlights: ['Affectation par métier', 'Plans préventifs', 'Preuves de conformité'],
      visual: {
        kind: 'jobs',
        title: 'Interventions techniques · Aujourd’hui',
        items: [
          {
            title: 'Tableau divisionnaire TD-3',
            location: 'Tower B · Niveau 6',
            status: 'En cours',
            tone: 'info',
          },
          {
            title: 'Entretien surpresseur',
            location: 'Harbour Point · Sous-sol',
            status: 'Prévu aujourd’hui',
            tone: 'due',
          },
          {
            title: 'Courroie AHU-07',
            location: 'Northgate · Toiture',
            status: 'Terminée',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Trois métiers, un bâtiment',
        description:
          'Génie climatique, électricité et plomberie dépendent les uns des autres, et chaque métier a ses plans, spécialistes et normes.',
        points: ['Génie climatique', 'Électricité', 'Plomberie'],
      },
      answer: {
        title: 'Les travaux techniques dans un flux coordonné',
        description:
          'Fleet planifie chaque métier, adresse les interventions au bon spécialiste et conserve un registre unique pour chaque installation.',
      },
    },
    capabilities: {
      title: 'Chaque métier coordonné',
      description:
        'Plans, affectation et preuves pour le génie climatique, l’électricité et la plomberie.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Préventif',
          title: 'Des plans pour chaque installation technique',
          description:
            'Planifiez CVC, tableaux électriques, pompes et réseaux d’eau selon le temps ou l’usage, avec des check-lists par métier.',
          points: [
            'Check-lists par métier',
            'Plans au temps ou à l’usage',
            'Interventions avant l’échéance',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan électrique',
            steps: [
              {
                kind: 'Plan',
                text: 'Tableaux divisionnaires · trimestriel',
              },
              {
                kind: 'Puis',
                text: 'Thermographie et resserrage',
              },
              {
                kind: 'Puis',
                text: 'Résultats consignés par tableau',
              },
            ],
          },
        },
        {
          icon: 'routing',
          label: 'Affectation',
          title: 'Des interventions orientées par métier',
          description:
            'Les demandes arrivent au bon technicien interne ou prestataire spécialisé selon le métier, le site et la priorité.',
          points: [
            'Affectation par métier et site',
            'Priorités avec objectifs SLA',
            'Prestataires dans le même flux',
          ],
          visual: {
            kind: 'jobs',
            title: 'Affectation · Aujourd’hui',
            items: [
              {
                title: 'Pas d’eau chaude',
                location: 'Harbour Point · N9',
                status: 'Plomberie',
                tone: 'info',
              },
              {
                title: 'Disjoncteur déclenché',
                location: 'Tower B · N6',
                status: 'Électricité',
                tone: 'info',
              },
              {
                title: 'CTA bruyante',
                location: 'Northgate · Toiture',
                status: 'Génie climatique',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Équipements',
          title: 'Un registre pour toutes les installations',
          description:
            'Pompes, tableaux, chaudières et CTA partagent un registre avec historique, coûts et documents.',
          points: [
            'Historique et coûts par équipement',
            'Schémas et manuels',
            'Garanties visibles sur chaque intervention',
          ],
          visual: {
            kind: 'asset',
            title: 'Fiche équipement',
            name: 'Surpresseur P-03',
            location: 'Harbour Point · Sous-sol',
            status: 'Entretien à prévoir',
            facts: [
              {
                label: 'Dernier entretien',
                value: '10 juil.',
              },
              {
                label: 'Heures de marche',
                value: '8 310',
              },
              {
                label: 'Coût depuis janv.',
                value: '1 420 $',
              },
              {
                label: 'Interventions ouvertes',
                value: '1',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Reporting',
          title: 'La charge par métier',
          description:
            'Équilibrez charge et dépenses entre équipes génie climatique, électricité et plomberie.',
          points: [
            'Interventions par métier et site',
            'Dépenses par métier',
            'Pannes récurrentes par installation',
          ],
          visual: {
            kind: 'chart',
            title: 'Interventions par métier · T3',
            stats: [
              {
                label: 'Interventions T3',
                value: '642',
              },
              {
                label: 'SLA respectés',
                value: '95,8 %',
              },
            ],
            bars: [
              {
                label: 'Génie clim.',
                value: 248,
              },
              {
                label: 'Électricité',
                value: 196,
              },
              {
                label: 'Plomberie',
                value: 158,
              },
              {
                label: 'Incendie',
                value: 40,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Électricité',
        title: 'Des installations électriques testées et sûres',
        description:
          'Tableaux, éclairage et systèmes de secours sont testés selon le planning, avec chaque résultat enregistré.',
        points: [
          'Essais tableaux et éclairage',
          'Contrôle éclairage de secours',
          'Résultats liés à chaque équipement',
        ],
        visual: {
          kind: 'jobs',
          title: 'Contrôles électriques',
          items: [
            {
              title: 'Essai éclairage de secours',
              location: 'Tous les étages',
              status: 'Terminée',
              tone: 'done',
            },
            {
              title: 'Thermographie TD-3',
              location: 'Tower B · N6',
              status: 'Planifiée',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'electricianPanel',
          alt: 'Électricien intervenant sur une armoire électrique',
        },
      },
      {
        tag: 'Plomberie',
        title: 'Une plomberie qui coule de source',
        description:
          'Pompes, chauffe-eau et évacuations sont entretenus selon le planning, et les fuites traitées rapidement.',
        points: [
          'Entretien pompes et chauffe-eau',
          'Réponse rapide aux fuites',
          'Registres des réseaux d’eau',
        ],
        visual: {
          kind: 'log',
          title: 'Activité plomberie',
          entries: [
            {
              when: '07:40',
              who: 'Accueil',
              what: 'a signalé l’absence d’eau chaude au niveau 9',
            },
            {
              when: '07:45',
              who: 'Fleet',
              what: 'a assigné le plombier interne en urgence',
            },
          ],
        },
        photo: {
          id: 'plumberRepair',
          alt: 'Plombier réparant un évier de cuisine',
        },
      },
      {
        tag: 'Génie climatique',
        title: 'Des installations au meilleur niveau',
        description:
          'CTA, ventilateurs et groupes froids sont entretenus avec relevés, pour une performance constante.',
        points: ['Relevés sur site', 'Courroies et filtres changés', 'Pannes détectées tôt'],
        visual: {
          kind: 'steps',
          title: 'Entretien CTA',
          steps: [
            {
              kind: 'Chaque',
              text: 'Trimestre · toutes les CTA',
            },
            {
              kind: 'Puis',
              text: 'Changer courroies et filtres, noter les relevés',
            },
          ],
        },
        photo: {
          id: 'acFilterService',
          alt: 'Technicien remplaçant un filtre de climatisation',
        },
      },
    ],
    quote: {
      text: 'Fleet a réduit notre maintenance corrective de près de 40 %. Nos techniciens, nos registres d’équipements et nos interventions sont enfin réunis au même endroit.',
      author: 'Responsable exploitation',
      company: 'Projet à usage mixte',
      photo: {
        id: 'hvacTechnicians',
        alt: 'Techniciens CVC sur des unités en toiture',
      },
    },
    faq: [
      {
        question: 'Qu’est-ce que la maintenance multitechnique ?',
        answer:
          'Elle couvre le génie climatique, l’électricité et la plomberie d’un bâtiment : CVC, distribution électrique, éclairage, pompes et réseaux d’eau.',
      },
      {
        question: 'Fleet peut-il orienter les interventions par métier ?',
        answer:
          'Oui. Des règles envoient chaque intervention au bon technicien interne ou prestataire selon le métier, le site et la priorité.',
      },
      {
        question: 'Peut-on conserver les documents techniques dans Fleet ?',
        answer:
          'Oui. Rattachez manuels, schémas, certificats et résultats d’essai à chaque équipement, disponibles sur site.',
      },
      {
        question: 'Fleet convient-il aux entreprises de maintenance multitechnique ?',
        answer:
          'Oui. Elles gèrent la maintenance de plusieurs sites clients, avec règles, reporting et accès par client.',
      },
    ],
  },
  offices: {
    hero: {
      eyebrow: 'Bureaux et usage mixte',
      title: 'Une maintenance de bureaux au service d’espaces de travail productifs',
      description:
        'Gardez bureaux, parties communes et projets mixtes en parfait fonctionnement, avec demandes locataires, plans préventifs et reporting sur tout le patrimoine.',
      highlights: ['Demandes locataires', 'Plans préventifs', 'Reporting patrimoine'],
      visual: {
        kind: 'jobs',
        title: 'Tower B · Aujourd’hui',
        items: [
          {
            title: 'Clim salle de réunion',
            location: 'Niveau 14',
            status: 'En cours',
            tone: 'info',
          },
          {
            title: 'Contrôle mensuel ascenseur L3',
            location: 'Ascenseurs centraux',
            status: 'Prévu aujourd’hui',
            tone: 'due',
          },
          {
            title: 'Robinet qui fuit',
            location: 'Niveau 9 · Kitchenette',
            status: 'Terminée',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Le confort et la disponibilité font le lieu de travail',
        description:
          'Climatisation, ascenseurs, éclairage et services partagés façonnent le quotidien des locataires et des collaborateurs.',
        points: ['Locataires', 'Parties communes', 'Installations techniques'],
      },
      answer: {
        title: 'Une exploitation fluide à chaque étage',
        description:
          'Fleet relie demandes locataires, maintenance préventive et prestataires, pour que chaque étage reste confortable et productif.',
      },
    },
    capabilities: {
      title: 'Conçu pour les bureaux et l’usage mixte',
      description: 'Des demandes locataires aux installations, chaque étage au même endroit.',
      tabs: [
        {
          icon: 'requests',
          label: 'Demandes',
          title: 'Des demandes suivies jusqu’à la clôture',
          description:
            'Les demandes arrivent par e-mail, via votre portail locataires ou par l’accueil, et deviennent automatiquement des interventions.',
          points: [
            'E-mail vers intervention avec Fleet Mail',
            'Intégration des portails locataires',
            'Suivi à chaque étape',
          ],
          visual: {
            kind: 'steps',
            title: 'Demande locataire',
            steps: [
              {
                kind: 'E-mail',
                text: 'Salle de réunion trop chaude, niveau 14',
              },
              {
                kind: 'Puis',
                text: 'Intervention créée et assignée',
              },
              {
                kind: 'Puis',
                text: 'Locataire informé à la clôture',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Préventif',
          title: 'Des installations entretenues dans les temps',
          description:
            'Planifiez CVC, ascenseurs, éclairage et sécurité incendie selon le temps ou l’usage, dans chaque bâtiment.',
          points: [
            'Plans pour chaque installation',
            'Check-lists à chaque visite',
            'Travaux hors heures de bureau',
          ],
          visual: {
            kind: 'jobs',
            title: 'Prévu cette semaine',
            items: [
              {
                title: 'Entretien ascenseurs L1–L4',
                location: 'Ascenseurs centraux',
                status: 'Planifiée',
                tone: 'info',
              },
              {
                title: 'Essai alarme incendie',
                location: 'Tous les étages',
                status: 'Terminée',
                tone: 'done',
              },
              {
                title: 'Filtres CTA',
                location: 'Toiture',
                status: 'Prévu aujourd’hui',
                tone: 'due',
              },
            ],
          },
        },
        {
          icon: 'tenants',
          label: 'Locataires',
          title: 'Un historique par étage et par locataire',
          description:
            'Suivez travaux et coûts par étage, locataire et partie commune pour les refacturations et la planification.',
          points: [
            'Historique par étage et locataire',
            'Coûts pour les refacturations',
            'Entretien des parties communes',
          ],
          visual: {
            kind: 'asset',
            title: 'Fiche locataire',
            name: 'Niveau 14 · Northwind Ltd',
            location: 'Tower B',
            status: 'Occupé',
            facts: [
              {
                label: 'Demandes depuis janv.',
                value: '9',
              },
              {
                label: 'Dernière visite',
                value: '28 sept.',
              },
              {
                label: 'Interventions ouvertes',
                value: '1',
              },
              {
                label: 'Coût depuis janv.',
                value: '2 310 $',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Reporting',
          title: 'Un reporting sur tout le patrimoine',
          description:
            'Comparez délais, dépenses et demandes locataires par immeuble et partagez des tableaux de bord avec les propriétaires.',
          points: [
            'Délais par immeuble',
            'Dépenses par immeuble et étage',
            'Tableaux de bord en lecture seule',
          ],
          visual: {
            kind: 'chart',
            title: 'Demandes locataires par immeuble · T3',
            stats: [
              {
                label: 'Demandes',
                value: '486',
              },
              {
                label: 'Résolues à temps',
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
        tag: 'Espaces de travail',
        title: 'Des étages confortables et productifs',
        description:
          'Climatisation, éclairage et salles de réunion sont entretenus selon le planning, et les problèmes corrigés vite.',
        points: [
          'Confort rétabli rapidement',
          'Salles de réunion contrôlées chaque jour',
          'Travaux hors heures de bureau',
        ],
        visual: {
          kind: 'jobs',
          title: 'Niveau 14 · Aujourd’hui',
          items: [
            {
              title: 'Clim salle de réunion',
              location: 'Confiée à CoolAir',
              status: 'En cours',
              tone: 'info',
            },
            {
              title: 'Robinet kitchenette',
              location: 'Plombier interne',
              status: 'Terminée',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'officeFloor',
          alt: 'Plateau de bureaux ouvert avec des personnes au travail',
        },
      },
      {
        tag: 'Parties communes',
        title: 'Halls et services toujours prêts',
        description:
          'Halls, ascenseurs, parkings et services restent propres, sûrs et opérationnels pour chaque visiteur.',
        points: [
          'Contrôle des halls et ascenseurs',
          'Éclairage et barrières de parking',
          'Nettoyage avec preuve photo',
        ],
        visual: {
          kind: 'steps',
          title: 'Routine du hall',
          steps: [
            {
              kind: 'Chaque',
              text: 'Jour · 07:00',
            },
            {
              kind: 'Puis',
              text: 'Contrôler hall, ascenseurs et portiques',
            },
          ],
        },
        photo: {
          id: 'officeCorridor',
          alt: 'Personnes dans un couloir de bureaux lumineux',
        },
      },
      {
        tag: 'Accueil',
        title: 'Accueil et maintenance synchronisés',
        description:
          'Accueil et sécurité enregistrent les demandes des locataires et visiteurs, et chaque intervention est suivie jusqu’à la clôture.',
        points: [
          'Demandes saisies à l’accueil',
          'Locataires tenus informés',
          'Consignes partagées entre équipes',
        ],
        visual: {
          kind: 'log',
          title: 'Registre d’accueil',
          entries: [
            {
              when: '09:05',
              who: 'Accueil',
              what: 'a signalé un portique d’accès en panne à l’entrée B',
            },
            {
              when: '09:12',
              who: 'Fleet',
              what: 'a confié la réparation au prestataire sûreté',
            },
          ],
        },
        photo: {
          id: 'supportAgent',
          alt: 'Conseillère clientèle avec un casque',
        },
      },
    ],
    quote: {
      text: 'Fleet a réduit notre maintenance corrective de près de 40 %. Nos techniciens, nos registres d’équipements et nos interventions sont enfin réunis au même endroit.',
      author: 'Responsable exploitation',
      company: 'Projet à usage mixte',
      photo: {
        id: 'acFilterService',
        alt: 'Technicien remplaçant un filtre de climatisation',
      },
    },
    faq: [
      {
        question: 'Comment Fleet aide-t-il les bureaux et immeubles mixtes ?',
        answer:
          'Fleet relie demandes locataires, maintenance préventive, prestataires et reporting, pour que chaque étage et partie commune reste confortable et opérationnel.',
      },
      {
        question: 'Comment les locataires font-ils leurs demandes ?',
        answer:
          'Par e-mail avec Fleet Mail, via votre portail locataires grâce aux intégrations, ou par l’accueil et la sécurité.',
      },
      {
        question: 'Peut-on suivre les coûts par locataire ?',
        answer:
          'Oui. Suivez travaux et coûts par étage et locataire pour les refacturations et la planification budgétaire.',
      },
      {
        question: 'Les propriétaires peuvent-ils suivre la performance ?',
        answer:
          'Oui. Partagez des tableaux de bord en lecture seule avec propriétaires et comités, avec délais et dépenses par immeuble.',
      },
    ],
  },
  industrial: {
    hero: {
      eyebrow: 'Usines et sites industriels',
      title: 'Une maintenance industrielle conçue pour une disponibilité maximale',
      description:
        'Gardez équipements de production, utilités et systèmes de sécurité en marche avec un registre des équipements, des plans préventifs et à l’usage, et l’analyse des arrêts.',
      highlights: ['Plans à l’usage', 'Inspections sécurité', 'Analyse des arrêts'],
      visual: {
        kind: 'jobs',
        title: 'Usine 1 · Aujourd’hui',
        items: [
          {
            title: 'Entretien compresseur C-2',
            location: 'Utilités',
            status: 'En cours',
            tone: 'info',
          },
          {
            title: 'Contrôle carters ligne 3',
            location: 'Production',
            status: 'Prévu aujourd’hui',
            tone: 'due',
          },
          {
            title: 'Traitement eau chaudière',
            location: 'Chaufferie',
            status: 'Terminée',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'La production dépend de chaque équipement',
        description:
          'Lignes, compresseurs, chaudières et sécurités fonctionnent ensemble, et chaque arrêt pèse sur la production et les délais.',
        points: ['Lignes de production', 'Utilités', 'Systèmes de sécurité'],
      },
      answer: {
        title: 'Une disponibilité planifiée',
        description:
          'Fleet transforme les données des équipements en plans préventifs et à l’usage, pour agir avant que les pannes n’arrêtent la production.',
      },
    },
    capabilities: {
      title: 'Conçu pour l’industrie',
      description: 'Équipements, plans, sécurité et analyses pour chaque site.',
      tabs: [
        {
          icon: 'assets',
          label: 'Équipements',
          title: 'Un registre pour chaque machine',
          description:
            'Créez des fiches pour machines, utilités et sécurités, par usine, ligne et zone.',
          points: [
            'Fiches par usine, ligne et zone',
            'Historique, coûts et manuels',
            'Pièces de rechange notées',
          ],
          visual: {
            kind: 'asset',
            title: 'Fiche équipement',
            name: 'Compresseur C-2',
            location: 'Usine 1 · Utilités',
            status: 'En service',
            facts: [
              {
                label: 'Heures de marche',
                value: '12 840',
              },
              {
                label: 'Dernier entretien',
                value: '9 sept.',
              },
              {
                label: 'Arrêt T3',
                value: '2 h',
              },
              {
                label: 'Coût depuis janv.',
                value: '5 620 $',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'À l’usage',
          title: 'La maintenance aux heures ou aux cycles',
          description:
            'Déclenchez la maintenance par heures de marche, cycles ou temps, au plus près de l’usage réel.',
          points: [
            'Déclencheurs par heures ou cycles',
            'Check-lists par type de machine',
            'Moins de réparations urgentes',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan à l’usage',
            steps: [
              {
                kind: 'Déclencheur',
                text: 'Compresseur C-2 atteint 13 000 heures',
              },
              {
                kind: 'Puis',
                text: 'Créer l’intervention d’entretien',
              },
              {
                kind: 'Puis',
                text: 'Assigner l’équipe utilités',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: 'Sécurité',
          title: 'Des inspections sécurité tracées',
          description:
            'Planifiez contrôles des protections, inspections des équipements sous pression et essais incendie, avec chaque résultat enregistré.',
          points: [
            'Contrôles des protections',
            'Équipements sous pression',
            'Registres prêts pour l’audit',
          ],
          visual: {
            kind: 'files',
            title: 'Registres sécurité · Usine 1',
            items: [
              {
                title: 'Inspection équipement sous pression.pdf',
                location: 'Réalisée le 12 sept.',
                status: 'Valide',
                tone: 'done',
              },
              {
                title: 'Contrôle carters ligne 3.pdf',
                location: 'Prévu aujourd’hui',
                status: 'À faire',
                tone: 'due',
              },
              {
                title: 'Essai extinction.pdf',
                location: 'Valide jusqu’en mars 2027',
                status: 'Valide',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Arrêts',
          title: 'L’analyse des arrêts par ligne',
          description:
            'Identifiez les lignes et équipements qui causent le plus d’arrêts et où investir.',
          points: [
            'Arrêts par ligne et équipement',
            'Coûts de réparation dans le temps',
            'Planification des remplacements',
          ],
          visual: {
            kind: 'chart',
            title: 'Heures d’arrêt par ligne · T3',
            stats: [
              {
                label: 'Arrêt T3',
                value: '27 h',
              },
              {
                label: 'Travaux planifiés',
                value: '94 %',
              },
            ],
            bars: [
              {
                label: 'Ligne 1',
                value: 4,
              },
              {
                label: 'Ligne 2',
                value: 6,
              },
              {
                label: 'Ligne 3',
                value: 9,
              },
              {
                label: 'Utilités',
                value: 5,
              },
              {
                label: 'Conditionnement',
                value: 3,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Production',
        title: 'Des lignes qui tournent, poste après poste',
        description:
          'Les opérateurs signalent les défauts depuis la ligne, et la maintenance répond avec la bonne priorité et les bonnes pièces.',
        points: [
          'Défauts signalés depuis la ligne',
          'Priorités selon l’impact',
          'Réparations suivies jusqu’à la clôture',
        ],
        visual: {
          kind: 'log',
          title: 'Activité ligne 3',
          entries: [
            {
              when: '13:20',
              who: 'Opérateur',
              what: 'a signalé un bourrage sur la remplisseuse ligne 3',
            },
            {
              when: '13:22',
              who: 'Fleet',
              what: 'a assigné le technicien de poste en urgence',
            },
          ],
        },
        photo: {
          id: 'factoryTechnician',
          alt: 'Technicien contrôlant un équipement avec une tablette',
        },
      },
      {
        tag: 'Utilités',
        title: 'Des utilités au service de la production',
        description:
          'Compresseurs, chaudières et groupes froids sont entretenus à l’usage, avec relevés à chaque visite.',
        points: ['Entretien aux heures de marche', 'Relevés sur site', 'Pannes détectées tôt'],
        visual: {
          kind: 'jobs',
          title: 'Utilités · Cette semaine',
          items: [
            {
              title: 'Inspection chaudière B-1',
              location: 'Chaufferie',
              status: 'Terminée',
              tone: 'done',
            },
            {
              title: 'Entretien groupe froid CH-5',
              location: 'Utilités',
              status: 'Planifiée',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'techniciansPanel',
          alt: 'Deux techniciens contrôlant un tableau d’équipement',
        },
      },
      {
        tag: 'Direction',
        title: 'La performance des usines en un coup d’œil',
        description:
          'Les directeurs de site suivent arrêts, travaux planifiés réalisés et dépenses de maintenance sur tous les sites.',
        points: [
          'Arrêts par usine et ligne',
          'Travaux planifiés réalisés',
          'Dépenses par centre de coûts',
        ],
        visual: {
          kind: 'jobs',
          title: 'Usines · T3',
          items: [
            {
              title: 'Usine 1',
              location: '94 % des travaux planifiés',
              status: 'Conforme',
              tone: 'done',
            },
            {
              title: 'Usine 2',
              location: '88 % des travaux planifiés',
              status: 'À revoir',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'plantManagers',
          alt: 'Directeur d’usine échangeant avec des ingénieurs casqués',
        },
      },
    ],
    quote: {
      text: 'Les autres plateformes étaient trop complexes ou trop génériques. Fleet nous a apporté une solution sur mesure avec un support plus réactif.',
      author: 'Directeur de la maintenance',
      company: 'Plateforme logistique',
      photo: {
        id: 'warehouseTeam',
        alt: 'Équipe d’entrepôt contrôlant le stock entre les rayonnages',
      },
    },
    faq: [
      {
        question: 'Fleet convient-il aux usines et sites industriels ?',
        answer:
          'Oui. Fleet gère équipements de production, utilités et systèmes de sécurité, avec plans préventifs et à l’usage et analyse des arrêts.',
      },
      {
        question: 'La maintenance peut-elle suivre les heures ou les cycles ?',
        answer:
          'Oui. Déclenchez la maintenance par heures de marche, cycles ou temps, au plus près de l’usage réel.',
      },
      {
        question: 'Fleet suit-il les inspections sécurité ?',
        answer:
          'Oui. Planifiez et enregistrez contrôles des protections, inspections des équipements sous pression et essais incendie, prêts pour l’audit.',
      },
      {
        question: 'Peut-on comparer les usines entre elles ?',
        answer:
          'Oui. Les tableaux de bord présentent arrêts, travaux planifiés réalisés et dépenses par usine et par ligne.',
      },
    ],
  },
  vehicles: {
    hero: {
      eyebrow: 'Gestion de flotte',
      title: 'La gestion de flotte, de l’achat à la mise hors service',
      description:
        'Gérez chaque véhicule au même endroit, de la commande et l’immatriculation à l’entretien, aux sinistres et à la revente, avec des dossiers prêts pour l’audit.',
      highlights: ['Cycle de vie complet', 'Entretien au kilométrage', 'Sinistres et amendes'],
      visual: {
        kind: 'jobs',
        title: 'Véhicules · Aujourd’hui',
        items: [
          {
            title: 'Entretien fourgon V-12',
            location: '30 000 km atteints',
            status: 'Planifiée',
            tone: 'info',
          },
          {
            title: 'Immatriculation camion T-03',
            location: 'Renouvellement dans 14 jours',
            status: 'À prévoir',
            tone: 'due',
          },
          {
            title: 'Pneus fourgon V-07',
            location: 'Atelier',
            status: 'Terminée',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Chaque véhicule a sa longue liste de tâches',
        description:
          'Achat, immatriculations, entretien, amendes et sinistres impliquent des équipes, documents et échéances différents.',
        points: ['Achats', 'Entretien', 'Conformité'],
      },
      answer: {
        title: 'Chaque véhicule, chaque étape, un seul endroit',
        description:
          'Fleet donne aux achats, à l’exploitation et à la finance une vue partagée de chaque véhicule, avec des dossiers prêts pour l’audit.',
      },
    },
    capabilities: {
      title: 'Une gestion complète du cycle de vie',
      description:
        'De l’acquisition à la mise hors service, chaque étape tracée et prête pour le reporting.',
      tabs: [
        {
          icon: 'assets',
          label: 'Cycle de vie',
          title: 'Chaque véhicule, à chaque étape',
          description:
            'Suivez commande, livraison, mise en service, utilisation et mise hors service de chaque véhicule.',
          points: [
            'Achat et mise en service',
            'Statut actif, immobilisé ou retiré',
            'Dossiers de cession',
          ],
          visual: {
            kind: 'asset',
            title: 'Fiche véhicule',
            name: 'Fourgon V-12',
            location: 'Westport DC · Livraison',
            status: 'Actif',
            facts: [
              {
                label: 'Kilométrage',
                value: '29 640 km',
              },
              {
                label: 'Prochain entretien',
                value: '30 000 km',
              },
              {
                label: 'Immatriculation',
                value: 'Valide jusqu’en mars 2027',
              },
              {
                label: 'Coût depuis janv.',
                value: '3 180 $',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Entretien',
          title: 'L’entretien au kilométrage et au temps',
          description:
            'Planifiez l’entretien préventif au kilométrage, aux heures moteur ou au temps, et suivez les réparations automatiquement.',
          points: [
            'Déclencheurs au km ou au temps',
            'Techniciens assignés automatiquement',
            'Réparations suivies jusqu’à la clôture',
          ],
          visual: {
            kind: 'steps',
            title: 'Plan d’entretien',
            steps: [
              {
                kind: 'Déclencheur',
                text: 'Fourgon V-12 atteint 30 000 km',
              },
              {
                kind: 'Puis',
                text: 'Réserver l’atelier',
              },
              {
                kind: 'Puis',
                text: 'Ajouter la facture à l’historique',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: 'Conformité',
          title: 'Immatriculations, amendes et sinistres',
          description:
            'Gérez renouvellements, contraventions et sinistres avec rappels, photos et récapitulatifs de coûts.',
          points: [
            'Rappels de renouvellement',
            'Amendes avec échéances et paiements',
            'Sinistres déclarés depuis le terrain',
          ],
          visual: {
            kind: 'files',
            title: 'Conformité · Ce mois-ci',
            items: [
              {
                title: 'Immatriculation camion T-03',
                location: 'Renouvellement dans 14 jours',
                status: 'Renouveler',
                tone: 'due',
              },
              {
                title: 'Contravention n° 4471',
                location: 'Payée le 2 oct.',
                status: 'Clôturée',
                tone: 'done',
              },
              {
                title: 'Sinistre fourgon V-05',
                location: 'Expertise en cours',
                status: 'Ouvert',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Utilisation',
          title: 'Utilisation et maîtrise des coûts',
          description:
            'Suivez usage, kilométrage et immobilisations pour repérer les véhicules sous-utilisés et améliorer le ROI.',
          points: [
            'Usage et immobilisations',
            'Coût par véhicule',
            'Véhicules sous-utilisés repérés',
          ],
          visual: {
            kind: 'chart',
            title: 'Utilisation par type de véhicule · T3',
            stats: [
              {
                label: 'Véhicules',
                value: '86',
              },
              {
                label: 'Utilisation',
                value: '78 %',
              },
            ],
            bars: [
              {
                label: 'Fourgons',
                value: 84,
              },
              {
                label: 'Camions',
                value: 79,
              },
              {
                label: 'Voitures',
                value: 64,
              },
              {
                label: 'Chariots',
                value: 88,
              },
              {
                label: 'Utilitaires',
                value: 71,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Terrain',
        title: 'Les incidents déclarés depuis le terrain',
        description:
          'Les conducteurs déclarent les incidents avec photos et notes, liés au véhicule, et les responsables sont avertis immédiatement.',
        points: ['Déclarations mobiles', 'Photos et notes jointes', 'Notification immédiate'],
        visual: {
          kind: 'log',
          title: 'Registre des incidents',
          entries: [
            {
              when: '16:40',
              who: 'Conducteur',
              what: 'a signalé une portière rayée sur le fourgon V-05',
            },
            {
              when: '16:41',
              who: 'Fleet',
              what: 'a ouvert un sinistre et averti le gestionnaire de flotte',
            },
          ],
        },
        photo: {
          id: 'vanDriver',
          alt: 'Chauffeur souriant au volant d’un fourgon',
        },
      },
      {
        tag: 'Contrôles',
        title: 'Chaque véhicule prêt à rouler',
        description:
          'Contrôles planifiés et check-lists gardent chaque véhicule sûr, conforme et prêt pour la prochaine tournée.',
        points: [
          'Check-lists avant départ',
          'Défauts transformés en interventions',
          'Historique des contrôles par véhicule',
        ],
        visual: {
          kind: 'jobs',
          title: 'Contrôles · Aujourd’hui',
          items: [
            {
              title: 'Fourgons V-01 à V-12',
              location: 'Contrôle avant départ',
              status: 'Terminée',
              tone: 'done',
            },
            {
              title: 'Camion T-03',
              location: 'Contrôle des freins',
              status: 'Planifiée',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'fleetInspection',
          alt: 'Inspecteur contrôlant des fourgons avec une tablette',
        },
      },
      {
        tag: 'Finance',
        title: 'Finance et exploitation alignées',
        description:
          'Entretien, carburant et utilisation alimentent un même tableau de bord pour les budgets et les décisions contractuelles.',
        points: [
          'Coûts par véhicule et type',
          'Comparaison prestataires et contrats',
          'Suivi budgétaire',
        ],
        visual: {
          kind: 'chart',
          title: 'Coût par type de véhicule · depuis janv.',
          stats: [],
          bars: [
            {
              label: 'Camions',
              value: 48,
            },
            {
              label: 'Fourgons',
              value: 36,
            },
            {
              label: 'Voitures',
              value: 18,
            },
            {
              label: 'Chariots',
              value: 14,
            },
            {
              label: 'Utilitaires',
              value: 22,
            },
          ],
        },
        photo: {
          id: 'fleetVans',
          alt: 'Fourgons de livraison devant un entrepôt',
        },
      },
    ],
    quote: {
      text: 'Les autres plateformes étaient trop complexes ou trop génériques. Fleet nous a apporté une solution sur mesure avec un support plus réactif.',
      author: 'Directeur de la maintenance',
      company: 'Plateforme logistique',
      photo: {
        id: 'fleetManager',
        alt: 'Gestionnaire de flotte avec une tablette devant des camions',
      },
    },
    faq: [
      {
        question: 'Que couvre la gestion de flotte de Fleet ?',
        answer:
          'Tout le cycle de vie : achat, mise en service, entretien, immatriculations, amendes, sinistres, utilisation et mise hors service.',
      },
      {
        question: 'L’entretien peut-il être planifié au kilométrage ?',
        answer:
          'Oui. Planifiez l’entretien au kilométrage, aux heures moteur ou au temps, avec des techniciens assignés automatiquement.',
      },
      {
        question: 'Les conducteurs peuvent-ils déclarer des incidents ?',
        answer:
          'Oui. Ils déclarent les incidents depuis le terrain avec photos et notes, et les responsables sont avertis immédiatement.',
      },
      {
        question: 'La gestion de flotte se connecte-t-elle à nos outils financiers ?',
        answer:
          'Oui. Fleet s’intègre aux outils financiers et ERP, pour que les coûts d’entretien et d’utilisation alimentent un reporting unifié.',
      },
    ],
  },
}
