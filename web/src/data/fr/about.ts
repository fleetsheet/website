import type { NavLink } from '@/config'
import type { AboutContent } from '@/data/en/about'

const demo: NavLink = { label: 'Réserver une démo', href: '/contact' }

export const about: AboutContent = {
  menu: {
    label: 'À propos',
    groups: { company: 'Entreprise' },
    promo: {
      title: 'Rejoignez l’équipe Fleet',
      description:
        'Aidez les équipes immobilières du monde entier à gérer leurs bâtiments avec clarté, maîtrise et sérénité.',
      action: { label: 'Voir les carrières', href: '/about/careers' },
    },
  },
  pages: {
    story: {
      label: 'Notre histoire',
      summary: 'Notre mission, nos valeurs et les équipes que nous accompagnons.',
      meta: {
        title: 'À propos de Fleet : histoire, mission et valeurs | Fleet',
        description:
          'Fleet apporte aux équipes immobilières, aux responsables d’exploitation et aux facility managers la clarté, la maîtrise et la sérénité qu’ils méritent. Découvrez notre histoire, notre mission et nos valeurs.',
      },
    },
    careers: {
      label: 'Carrières',
      summary: 'Grandissez avec une équipe qui construit l’avenir de l’exploitation immobilière.',
      meta: {
        title: 'Carrières chez Fleet | Fleet',
        description:
          'Construisez l’avenir de l’exploitation immobilière avec Fleet. Découvrez notre façon de travailler, nos bureaux et comment nous rejoindre.',
      },
    },
    partners: {
      label: 'Partenaires',
      summary: 'Recommandez, déployez ou intégrez Fleet.',
      meta: {
        title: 'Programme partenaires | Fleet',
        description:
          'Grandissez avec Fleet en tant que partenaire apporteur d’affaires, conseil et intégration, ou technologique, et aidez les équipes immobilières à piloter chaque site en confiance.',
      },
    },
  },
  offices: [
    { city: 'Bangkok', region: 'Thaïlande' },
    { city: 'Los Angeles', region: 'États-Unis' },
    { city: 'Singapour', region: 'Singapour' },
  ],
  story: {
    hero: {
      eyebrow: 'À propos de Fleet',
      title: 'Découvrez Fleet',
      description:
        'Notre mission : apporter aux équipes immobilières, aux responsables d’exploitation et aux facility managers la clarté, la maîtrise et la sérénité qu’ils méritent.',
      photos: [
        {
          id: 'officeTeam',
          alt: 'Des collègues échangent autour d’une table dans un bureau lumineux',
        },
        { id: 'teamWorkshop', alt: 'Une équipe planifie ensemble devant un tableau blanc' },
        { id: 'officeCollaboration', alt: 'Des collègues collaborent dans un open space' },
      ],
    },
    story: {
      eyebrow: 'Notre histoire',
      title: 'Pensé pour les équipes qui font tourner les bâtiments',
      chapters: [
        {
          label: 'L’étincelle',
          title: 'Un constat simple',
          description:
            'Fleet est né en voyant des équipes de maintenance faire tourner des bâtiments avec des tableurs, des fils d’e-mails et des groupes de discussion.',
        },
        {
          label: 'L’idée',
          title: 'Une meilleure façon de travailler',
          description:
            'Nous avons voulu créer un logiciel aussi rapide et agile que les équipes qui l’utilisent, prêt pour chaque site et chaque équipement.',
        },
        {
          label: 'La plateforme',
          title: 'Fleet prend forme',
          description:
            'Une plateforme cloud et mobile, pour iOS et Android, qui simplifie la maintenance sur de nombreux sites et équipements.',
        },
        {
          label: 'Aujourd’hui',
          title: 'Adopté par de nombreux patrimoines',
          description:
            'De cinq immeubles de bureaux à cinquante campus scolaires, Fleet aide les équipes à accomplir le bon travail, plus vite et plus intelligemment.',
        },
      ],
    },
    mission: {
      eyebrow: 'Notre mission',
      title: 'Relier le monde physique aux outils numériques',
      description:
        'Nous construisons un avenir durable en réinventant le logiciel immobilier et en reliant notre monde physique aux outils numériques.',
      photo: {
        id: 'propertyManager',
        alt: 'Une gestionnaire immobilière avec une tablette devant des tours',
      },
      valuesTitle: 'Nos valeurs',
      values: [
        {
          title: 'La clarté d’abord',
          description: 'Les données de maintenance doivent être claires et faciles à exploiter.',
        },
        {
          title: 'La vitesse avant la complexité',
          description: 'Plus rapide, c’est mieux, surtout pour les équipes d’exploitation.',
        },
        {
          title: 'Centré utilisateur',
          description: 'Conçu pour ceux qui font le travail, comme pour ceux qui le suivent.',
        },
        {
          title: 'La confiance par défaut',
          description: 'Sûr, transparent et responsable dans tout ce que nous construisons.',
        },
      ],
    },
    offices: {
      eyebrow: 'Nos bureaux',
      title: 'Où nous trouver',
      description:
        'Nos équipes travaillent dans trois villes pour accompagner des patrimoines dans de nombreuses régions.',
    },
    careers: {
      title: 'Construisez la suite avec nous',
      description:
        'Aidez les équipes immobilières à gérer chaque bâtiment avec clarté et confiance. Découvrez la vie chez Fleet.',
      action: { label: 'Voir les carrières', href: '/about/careers' },
    },
    cta: {
      title: 'Découvrez Fleet en action',
      description: 'Réservez une visite guidée adaptée à votre patrimoine et à vos équipes.',
      primaryAction: demo,
      secondaryAction: { label: 'Nous contacter', href: '/contact' },
    },
  },
  careers: {
    hero: {
      eyebrow: 'Carrières',
      title: 'Construisez avec nous l’avenir de l’exploitation immobilière',
      description:
        'Rejoignez une équipe qui transforme le chaos de la maintenance en clarté pour les équipes immobilières et techniques du monde entier.',
      action: { label: 'Rejoindre l’équipe', href: '#join' },
      photos: [
        { id: 'welcomeHandshake', alt: 'Un nouveau collègue accueilli par une poignée de main' },
        {
          id: 'officeTeam',
          alt: 'Des collègues échangent autour d’une table dans un bureau lumineux',
        },
        { id: 'teamWorkshop', alt: 'Une équipe planifie ensemble devant un tableau blanc' },
        { id: 'officeCollaboration', alt: 'Des collègues collaborent dans un open space' },
      ],
    },
    growth: {
      title: 'Nous grandissons avec chaque bâtiment accompagné',
      description:
        'Fleet accompagne des équipes de l’immobilier, de la logistique, de l’éducation, du retail et des services publics, et notre équipe grandit avec elles.',
      stats: [
        { value: '3', label: 'villes de bureaux' },
        { value: '5', label: 'secteurs accompagnés' },
        { value: '20+', label: 'intégrations prises en charge' },
        { value: '99,99 %', label: 'de disponibilité assurée' },
      ],
    },
    culture: {
      eyebrow: 'La vie chez Fleet',
      title: 'Notre façon de travailler',
      description:
        'Nos valeurs guident la façon dont nous construisons Fleet et travaillons ensemble au quotidien.',
      items: [
        {
          title: 'La clarté d’abord',
          description:
            'Nous partageons le contexte ouvertement pour que chacun décide en confiance.',
        },
        {
          title: 'La vitesse avant la complexité',
          description: 'Nous privilégions les solutions simples et livrons vite les améliorations.',
        },
        {
          title: 'Centré utilisateur',
          description:
            'Nous passons du temps avec ceux qui font le travail et construisons pour leur quotidien.',
        },
        {
          title: 'La confiance par défaut',
          description: 'Nous nous confions des responsabilités et assumons nos résultats.',
        },
      ],
    },
    spotlight: {
      title: 'Construit par des gens qui aiment leur métier',
      description:
        'Chaque fonctionnalité naît d’une vraie équipe dans un vrai bâtiment. Nous écoutons techniciens, gestionnaires et prestataires, puis créons des outils qui simplifient leur journée.',
      points: [
        'Proches des clients dans chaque région',
        'Responsabilité de l’idée à la mise en ligne',
        'De la place pour apprendre et évoluer',
      ],
      photo: {
        id: 'colleaguesTablets',
        alt: 'Deux collègues examinent leur travail sur des tablettes',
      },
    },
    offices: {
      eyebrow: 'Nos bureaux',
      title: 'Où vous pourriez travailler',
      description: 'Rejoignez des collègues à Bangkok, Los Angeles et Singapour.',
    },
    join: {
      eyebrow: 'Nous rejoindre',
      title: 'Votre parcours vers Fleet',
      label: 'Étape',
      steps: [
        {
          title: 'Envoyez votre CV',
          description: 'Parlez-nous de vous et du travail qui vous passionne.',
        },
        {
          title: 'Premier échange',
          description: 'Une conversation conviviale sur votre expérience et vos envies.',
        },
        {
          title: 'Rencontrez l’équipe',
          description: 'Échangez avec vos futurs collègues et explorez le poste ensemble.',
        },
        {
          title: 'Bienvenue à bord',
          description: 'Tout ce qu’il faut pour avoir de l’impact dès le premier jour.',
        },
      ],
    },
    invite: {
      title: 'Prêt à rejoindre Fleet ?',
      description:
        'Nous aimons rencontrer des talents. Envoyez-nous votre CV et dites-nous comment vous aimeriez contribuer.',
      primaryAction: { label: 'Envoyer votre CV', href: '/contact' },
      secondaryAction: { label: 'Lire notre histoire', href: '/about' },
    },
  },
  partners: {
    hero: {
      eyebrow: 'Partenaires',
      title: 'Grandissez avec Fleet',
      description:
        'Devenez partenaire de Fleet et aidez les équipes immobilières à piloter chaque site en confiance. Choisissez le parcours adapté à votre activité, de la simple recommandation à la collaboration durable.',
      photos: [
        { id: 'blueprintPlanning', alt: 'Une équipe étudie des plans de bâtiment' },
        { id: 'engineersRooftop', alt: 'Deux ingénieurs consultent une tablette sur un toit' },
        { id: 'welcomeHandshake', alt: 'Deux partenaires se serrent la main' },
      ],
    },
    programs: {
      eyebrow: 'Parcours partenaires',
      title: 'Devenez partenaire de Fleet',
      description: 'Trois façons de grandir ensemble, chacune avec le soutien de notre équipe.',
      items: [
        {
          title: 'Partenaire apporteur d’affaires',
          description:
            'Vous connaissez des équipes qui gagneraient à utiliser Fleet ? Mettez-nous en relation, notre équipe s’occupe de la démo, de l’onboarding et du support.',
          points: [
            'Mises en relation simples',
            'Notre équipe mène chaque démo',
            'Peu d’efforts de votre part',
          ],
          action: { label: 'Recommander une équipe', href: '/contact' },
        },
        {
          title: 'Partenaire conseil et intégration',
          description:
            'Aidez vos clients à planifier, déployer et étendre Fleet grâce à la conception des processus, la migration des données et la formation.',
          points: [
            'Ressources d’onboarding et de formation',
            'Guides de processus et de KPI',
            'Déploiement conjoint avec notre équipe',
          ],
          action: { label: 'Devenir partenaire conseil', href: '/contact' },
        },
        {
          title: 'Partenaire technologique',
          description:
            'Connectez votre produit ou votre plateforme à Fleet via l’API REST et touchez les équipes immobilières et techniques.',
          points: [
            'Accès à l’API REST',
            'Accompagnement à l’intégration',
            'Valeur partagée pour vos clients communs',
          ],
          action: { label: 'Devenir partenaire technologique', href: '/contact' },
        },
      ],
    },
    why: {
      title: 'Pourquoi devenir partenaire de Fleet',
      description: 'Une plateforme que vos clients apprécient, avec une équipe qui vous soutient.',
      items: [
        {
          title: 'Pensé pour l’immobilier',
          description: 'Conçu pour les équipes immobilières et techniques multisites.',
        },
        {
          title: 'Rapide à déployer',
          description: 'La plupart des équipes démarrent en moins de 7 jours avec des flux prêts.',
        },
        {
          title: 'Tarification à l’usage',
          description: 'Les clients paient ce qu’ils utilisent, avec une facturation transparente.',
        },
        {
          title: 'Ouvert à l’intégration',
          description:
            'Une API REST et plus de 20 intégrations relient Fleet aux systèmes existants.',
        },
        {
          title: 'Présence régionale',
          description:
            'Des équipes à Bangkok, Los Angeles et Singapour, avec un onboarding localisé.',
        },
        {
          title: 'Pensé mobile',
          description:
            'Fonctionne dans tout navigateur sur iOS et Android, prêt pour chaque technicien.',
        },
      ],
    },
    referral: {
      badge: 'Partenaire apporteur d’affaires',
      title: 'Vous connaissez une équipe qui a besoin de Fleet ?',
      description: 'Mettez-nous en relation et notre équipe s’occupe du reste.',
      action: { label: 'Recommander une équipe', href: '/contact' },
    },
    cta: {
      title: 'Grandissons ensemble',
      description:
        'Parlez-nous de votre activité et nous trouverons le parcours partenaire adapté.',
      primaryAction: { label: 'Devenir partenaire', href: '/contact' },
      secondaryAction: { label: 'Lire notre histoire', href: '/about' },
    },
  },
}
