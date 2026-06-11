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
    street: '4 Rue René Descartes',
    zip: '41260',
    city: 'La Chaussée-Saint-Victor',
  },
  addressOucques: {
    label: 'Oucques',
    street: '1 rue Buisson',
    zip: '41290',
    city: 'Oucques',
  },
  // Pôle pompes funèbres — EN ATTENTE des infos client (fiche Google)
  pf: {
    // TODO_CLIENT : remplacer par les coordonnées réelles de la fiche Google PF
    phone: '02 54 00 00 00',
    phoneHref: 'tel:0254000000',
    email: 'contact@pompes-funebres-dore.fr',
    hours: 'Permanence téléphonique 24h/24, 7j/7',
    address: {
      street: 'Adresse à confirmer',
      zip: '41260',
      city: 'La Chaussée-Saint-Victor',
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

// Arborescence du menu — URLs ambulances CONSERVÉES (SEO), pôle PF nouveau.
export const nav = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Ambulances',
    href: '/transport-ambulance',
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
  {
    label: 'Pompes Funèbres',
    href: '/pompes-funebres',
    hasSub: true,
    pf: true,
    groups: [
      {
        title: 'Nos accompagnements',
        links: [
          { label: 'Pôle pompes funèbres', href: '/pompes-funebres' },
          { label: 'Organisation des obsèques', href: '/organisation-obseques' },
          { label: 'Contrat obsèques', href: '/contrat-obseques' },
          { label: 'Funérarium', href: '/funerarium' },
          { label: 'Articles funéraires', href: '/articles-funeraires' },
        ],
      },
    ],
  },
  {
    label: 'À propos',
    href: '/a-propos',
  },
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
