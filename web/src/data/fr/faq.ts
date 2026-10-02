export type FaqItem = {
  question: string
  answer: string
  points?: string[]
}

export const faqPage = {
  meta: {
    title: 'FAQ | Fleet',
    description:
      'Réponses aux questions fréquentes sur Fleet : fonctionnalités, publics, déploiement, sécurité, intégrations et tarifs.',
  },
  eyebrow: 'FAQ Fleet',
  title: 'Vos questions, nos réponses',
  description:
    'Tout ce que les équipes demandent généralement avant de passer à Fleet. Vous ne trouvez pas votre réponse ? Contactez-nous.',
  items: [
    {
      question: 'Qu’est-ce que Fleet ?',
      answer:
        'Fleet est une plateforme immobilière dans le cloud conçue pour simplifier la gestion technique, la maintenance et l’exploitation sur plusieurs sites. En plus d’un CMMS/CAFM complet, elle permet aux équipes de gérer ordres de travail, équipements, prestataires, locataires, facturation et recouvrement depuis un tableau de bord centralisé de gestion des installations.',
    },
    {
      question: 'Fleet est-il une GMAO ou un CAFM ?',
      answer:
        'Fleet est né comme une GMAO (gestion de maintenance assistée par ordinateur) dans le cloud et intègre désormais les principales fonctionnalités d’un CAFM (gestion des installations assistée par ordinateur). Nous sommes devenus la plateforme de référence pour l’exploitation immobilière, réunissant maintenance, gestion des équipements, documentation, coordination des prestataires grâce aux workflows personnalisés et suivi de conformité avec les journaux d’audit.',
    },
    {
      question: 'À qui s’adresse Fleet ?',
      answer:
        'Fleet est conçu pour les exploitants multisites de l’immobilier, du commerce, de la logistique, de l’hôtellerie, de l’enseignement et de la santé, y compris pour des cas d’usage sectoriels comme les centres commerciaux et le commerce de détail, l’hôtellerie et la restauration, le transport maritime et la logistique, et les résidences.',
    },
    {
      question: 'Comment Fleet aide-t-il à réduire les temps d’arrêt ?',
      answer:
        'Fleet permet de planifier la maintenance préventive, de suivre les interventions en temps réel et d’envoyer des alertes instantanées, le tout depuis la gestion des installations. Résultat : moins de réparations en urgence et une disponibilité élevée.',
    },
    {
      question: 'Fleet fonctionne-t-il sur plusieurs biens ou sites ?',
      answer:
        'Oui. La gestion multisite de Fleet vous permet de piloter et de suivre la maintenance par bâtiment, par zone ou par région entière, avec des autorisations par site.',
    },
    {
      question: 'Fleet est-il adapté au mobile ?',
      answer:
        'Absolument. Fleet est une plateforme pensée pour le mobile, compatible iOS et Android. Créez, attribuez et suivez les interventions depuis n’importe quel appareil, en temps réel.',
    },
    {
      question: 'Fleet peut-il s’intégrer à nos systèmes existants ?',
      answer:
        'Oui. Fleet propose des intégrations flexibles avec les principaux systèmes de comptabilité fournisseurs et clients, outils financiers, ERP et portails prestataires.',
    },
    {
      question: 'Quels types de maintenance puis-je gérer avec Fleet ?',
      answer:
        'Vous pouvez gérer la maintenance corrective, planifiée et prédictive, ainsi que les inspections, les audits, les prestations externes et les validations de coûts.',
    },
    {
      question: 'Comment Fleet facilite-t-il la gestion des équipements ?',
      answer:
        'Fleet crée une fiche numérique pour chaque équipement et suit son cycle de vie, l’historique des coûts, les garanties et l’utilisation par site dans la gestion des équipements.',
    },
    {
      question: 'Pouvons-nous attribuer différents niveaux d’accès aux utilisateurs ?',
      answer:
        'Oui. Fleet propose des autorisations par rôle pour les techniciens, les responsables, les prestataires et les administrateurs.',
    },
    {
      question: 'Fleet permet-il de stocker des documents ?',
      answer:
        'Oui. Téléversez manuels, garanties, rapports d’intervention et checklists de sécurité, et associez-les directement aux équipements ou aux tickets, accessibles depuis la gestion documentaire.',
    },
    {
      question: 'Comment Fleet facilite-t-il la conformité et les audits ?',
      answer:
        'Fleet enregistre et conserve l’historique des interventions, les modifications de documents et les clôtures avec une traçabilité complète dans les journaux d’audit, ce qui simplifie la conformité.',
    },
    {
      question: 'Qu’est-ce qui distingue Fleet des autres GMAO ?',
      answer:
        'Fleet est conçu spécifiquement pour les équipes immobilières multisites et offre un accès mobile sans application, un déploiement rapide, une tarification à l’usage et des rapports complets pensés pour les équipes immobilières, pas pour les usines.',
    },
    {
      question: 'Existe-t-il un essai gratuit ou une démo ?',
      answer:
        'Oui. Réservez une démo personnalisée gratuite pour voir comment Fleet s’adapte aux processus et au secteur de votre équipe.',
    },
    {
      question: 'Combien de temps faut-il pour déployer Fleet ?',
      answer:
        'La plupart des équipes sont opérationnelles en moins de 7 jours, avec un accès complet pour les prestataires et des workflows d’intervention prêts.',
    },
    {
      question: 'Fleet est-il sécurisé ?',
      answer:
        'Oui. Fleet repose sur une infrastructure cloud sécurisée et un traitement chiffré des données, avec journaux d’accès et traçabilité des actions des utilisateurs.',
    },
    {
      question: 'Fleet prend-il en charge la maintenance préventive planifiée (PPM) ?',
      answer:
        'Oui. Créez des plannings récurrents, associez-les à des équipements ou à des sites et suivez leur respect grâce aux alertes du tableau de bord.',
    },
    {
      question: 'Que comprend le reporting de Fleet ?',
      answer:
        'Fleet propose des tableaux de bord en temps réel, des rapports exportables, un suivi budgétaire et des KPI personnalisés pour analyser la performance.',
    },
    {
      question: 'Fleet peut-il nous aider à réduire nos coûts d’exploitation ?',
      answer: 'Oui. Fleet réduit les coûts d’exploitation en :',
      points: [
        'limitant les retards des techniciens',
        'réduisant les frais de gestionnaires immobiliers externes (souvent 6 à 8 % du chiffre d’affaires)',
        'prolongeant la durée de vie des équipements et en suivant leur performance',
      ],
    },
    {
      question: 'Puis-je gérer plusieurs prestataires avec Fleet ?',
      answer:
        'Oui. Invitez, étiquetez, attribuez et suivez les interventions des prestataires avec des notifications automatiques et des rapports d’intervention.',
    },
    {
      question: 'Fleet prend-il en charge plusieurs langues et régions ?',
      answer:
        'Oui. Fleet est utilisé par des équipes en Asie, en Europe et en Amérique du Nord, avec une prise en charge multilingue et des fuseaux horaires locaux.',
    },
    {
      question: 'Pouvons-nous migrer depuis une autre GMAO ou un autre CAFM ?',
      answer:
        'Oui. Fleet propose des migrations sur mesure, notamment l’import des données d’équipements, la synchronisation par API et des chargements manuels accompagnés.',
    },
    {
      question: 'Fleet gère-t-il les stocks ou les pièces détachées ?',
      answer:
        'Bientôt. Fleet prépare des fonctionnalités de gestion des pièces détachées, de journaux de stock et d’alertes de réapprovisionnement selon la consommation.',
    },
    {
      question: 'Quels secteurs tirent le plus parti de Fleet ?',
      answer: 'Fleet est idéal pour :',
      points: [
        'les centres commerciaux et les chaînes de magasins',
        'l’hôtellerie et la restauration',
        'le transport maritime, la logistique et les plateformes de transport',
        'les résidences et les quartiers à usage mixte',
      ],
    },
    {
      question: 'Comment contacter Fleet pour en savoir plus ?',
      answer:
        'Réservez une démo, consultez notre page de contact ou écrivez directement à notre équipe par e-mail.',
    },
  ] satisfies FaqItem[],
  cta: {
    title: 'Encore des questions ?',
    description: 'Parlez à l’équipe Fleet de vos sites, de vos équipements et de vos processus.',
    primaryAction: { label: 'Demander une démo', href: '/contact' },
    secondaryAction: { label: 'Découvrir la plateforme', href: '/#platform' },
  },
}
