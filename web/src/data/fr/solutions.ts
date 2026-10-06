import type { NavLink } from '@/config'
import type { PlatformEntry } from '@/data/en/platform'
import type { CategoryPageContent, SolutionsShared } from '@/data/en/solutions'
import type { CategoryPageId, SolutionGroup, SolutionPageId } from '@/solutions'

export const menu = {
  label: 'Solutions',
  groups: {
    category: 'Par catégorie',
  } satisfies Record<SolutionGroup, string>,
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
        label: 'Facility management',
        photo: {
          id: 'inspectionClipboard',
          alt: 'Inspecteur remplissant une check-list',
        },
      },
      {
        label: 'Centres commerciaux et retail',
        photo: {
          id: 'mallAtrium',
          alt: 'Visiteurs dans l’atrium d’un centre commercial',
        },
      },
      {
        label: 'Hôtellerie et restauration',
        photo: {
          id: 'hotelHousekeeping',
          alt: 'Femme de chambre préparant une chambre',
        },
      },
      {
        label: 'Transport et logistique',
        photo: {
          id: 'warehouseTeam',
          alt: 'Équipe d’entrepôt contrôlant le stock entre les rayonnages',
        },
      },
      {
        label: 'Centres de données',
        photo: {
          id: 'dataCenter',
          alt: 'Rangées de baies de serveurs dans un centre de données',
        },
      },
      {
        label: 'CVC, ascenseurs et élévateurs',
        photo: {
          id: 'hvacTechnicians',
          alt: 'Techniciens CVC sur des unités en toiture',
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
      photo: {
        id: 'technicianPlantRoom',
        alt: 'Technicien intervenant sur un équipement en local technique',
      },
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
      photo: {
        id: 'propertyManagerTablet',
        alt: 'Property manager avec une tablette devant des tours de bureaux',
      },
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
      photo: {
        id: 'plumberRepair',
        alt: 'Plombier réparant un évier de cuisine',
      },
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
      photo: {
        id: 'engineersRooftop',
        alt: 'Deux ingénieurs consultent une tablette en toiture',
      },
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
      photo: {
        id: 'residentsNewHome',
        alt: 'Résidents regardant leur immeuble',
      },
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
      photo: {
        id: 'vendorHandshake',
        alt: 'Responsable technique serrant la main d’un prestataire',
      },
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
