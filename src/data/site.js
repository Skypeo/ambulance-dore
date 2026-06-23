// ============================================================
// Données partagées du site — Ambulances Doré
// Coordonnées AMBULANCES = issues de l'ancien site (à conserver).
// Coordonnées POMPES FUNÈBRES = TODO (en attente fiche Google client).
// ============================================================

export const site = {
  name: 'Ambulances Doré',
  domain: 'https://www.ambulances-dore.com',
  // Pôle ambulances (réel, ancien site)
  phoneMain: '02 54 78 15 55',
  phoneMainHref: 'tel:0254781555',
  phoneOucques: '02 54 23 21 10',
  phoneOucquesHref: 'tel:0254232110',
  email: 'tzemali@taxiambulancesdore.fr',
  emailLegal: 'contact@taxiambulancesdore.fr',
  hours: 'Ouvert 24h/24, 7j/7',
  addressMain: {
    label: 'La Chaussée-Saint-Victor / Les Montils',
    street: 'ZA, 4 rue René Descartes, Les Gailletrous II',
    zip: '41260',
    city: 'La Chaussée-Saint-Victor',
  },
  addressOucques: {
    label: 'Oucques',
    street: '1 rue Buisson',
    zip: '41290',
    city: 'Oucques',
  },
  // Pôle pompes funèbres — Pompes Funèbres Jenna (Philae Services Funéraires)
  pf: {
    name: 'Pompes Funèbres Jenna',
    legalName: 'Pompes Funèbres Jenna — Philae Services Funéraires',
    tagline: 'Agence funéraire de proximité à Blois',
    slogan: "L'art du funéraire, c'est l'art du détail",
    phone: '02 79 40 02 72',
    phoneHref: 'tel:0279400272',
    // E-mail PF fourni par la cliente le 2026-06-16 (flyers Jenna)
    email: 'pfjenna@philaeservicesfuneraires.fr',
    emailHref: 'mailto:pfjenna@philaeservicesfuneraires.fr',
    instagram: 'https://www.instagram.com/jenna_philae_pompes_funebres',
    // LinkedIn fourni par la cliente le 2026-06-23 (icône affichée en PF : navbar/drawer/footer)
    linkedin: 'https://www.linkedin.com/in/pompes-funèbres-jenna-philae/',
    onCall: 'Astreinte décès 24h/24 — 7j/7',
    hours: [
      { d: 'Lundi – Vendredi', h: '9h00 – 12h30  /  13h30 – 17h00' },
      { d: 'Samedi – Dimanche', h: 'Sur rendez-vous' },
    ],
    values: ['Écoute', 'Respect', 'Proximité', 'Professionnalisme'],
    address: {
      street: '76 Av. de Vendôme',
      zip: '41000',
      city: 'Blois',
    },
  },
  legal: {
    raisonSociale: 'Ambulances Doré',
    siret: '49781914400013',
    tva: 'FR48497819144',
    capital: '58 000 €',
    gerant: 'Tarik Zemali',
    hebergeur: 'Amazon Web Services (centre de données de Francfort, Allemagne)',
  },
};

// ============================================================
// Navigation — UNE navbar indépendante par pôle (depuis 2026-06-19).
// Chaque pôle est un "mini-site" autonome : sa nav ne montre QUE ses pages.
// La bascule entre pôles se fait via le bouton flottant `.pole-switch`
// (bas-gauche, voir Base.astro) et via le portail `/` (footer).
// L'onglet "Accueil" pointe vers la home DU PÔLE courant (pas le portail).
// URLs ambulances CONSERVÉES (SEO).
// ============================================================

// — Pôle AMBULANCES (bleu) —
export const navAmb = [
  { label: 'Accueil', href: '/ambulances' },
  {
    label: 'Nos prestations',
    href: '/ambulances',
    hasSub: true,
    groups: [
      {
        title: 'Transport en ambulance',
        links: [
          { label: 'Transport en ambulance', href: '/transport-ambulance' },
          { label: 'Malades assis', href: '/transport-malade-assis' },
          { label: 'Malades allongés', href: '/transport-malade-allonge' },
        ],
      },
      {
        title: 'Transport sanitaire',
        links: [
          { label: 'Taxi conventionné', href: '/taxi-conventionne' },
          { label: 'VSL', href: '/taxi-vsl' },
          { label: 'Transport PMR', href: '/transport-pmr' },
        ],
      },
      {
        title: 'Autres services',
        links: [
          { label: 'Taxi privé', href: '/taxi-prive' },
          { label: 'Mission SAMU & garde préfectorale', href: '/mission-samu' },
        ],
      },
    ],
  },
  { label: 'À propos', href: '/a-propos' },
  {
    label: 'Nos agences',
    href: '/nos-agences',
    hasSub: true,
    groups: [
      {
        title: 'Nos implantations',
        links: [
          { label: 'Toutes nos agences', href: '/nos-agences' },
          { label: 'Chaussée-Saint-Victor / Les Montils', href: '/chaussee-saint-victor' },
          { label: 'Oucques', href: '/oucques' },
        ],
      },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

// — Pôle POMPES FUNÈBRES (aubergine/or) —
export const navPf = [
  { label: 'Accueil', href: '/pompes-funebres' },
  {
    label: 'Nos accompagnements',
    href: '/nos-accompagnements',
    hasSub: true,
    pf: true,
    groups: [
      {
        title: 'Nos accompagnements',
        links: [
          { label: 'Organisation des obsèques', href: '/organisation-obseques' },
          { label: 'Contrat obsèques', href: '/contrat-obseques' },
          { label: 'Retour à domicile', href: '/retour-a-domicile' },
        ],
      },
    ],
  },
  {
    label: 'Nos savoir-faire',
    href: '/nos-savoir-faire',
    hasSub: true,
    pf: true,
    groups: [
      {
        title: 'Nos savoir-faire',
        links: [
          { label: 'Marbrerie', href: '/marbrerie' },
          { label: 'Articles funéraires', href: '/articles-funeraires' },
        ],
      },
    ],
  },
  { label: 'Contact', href: '/contact-pompes-funebres' },
];
