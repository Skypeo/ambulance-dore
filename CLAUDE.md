# Ambulances Doré — Site vitrine (2 pôles)

> **Marque** : on écrit **« Ambulances Doré »** partout (texte + logo), aligné sur le logo officiel
> fourni par le client (`src/assets/logo-5553d641-1920w.png`). La graphie « Dorée » a été abandonnée.

## Description
Site vitrine multi-pages pour **Ambulances Doré** réunissant deux activités :
- **Pôle Ambulances** (santé) : ambulances, VSL, taxis conventionnés, transport PMR, taxi privé, missions SAMU. Près de Blois (La Chaussée-Saint-Victor + Oucques) depuis 2007.
- **Pôle Pompes Funèbres** (funéraire) : organisation d'obsèques, contrat obsèques, funérarium, articles funéraires.

Transformation de la maquette one-page validée par le client en site complet.
- Ancien site (SEO à conserver) : https://www.ambulances-dore.fr/
- Domaine cible : https://www.ambulances-dore.com
- Inspiration 2 pôles : https://www.arnould-bourbon.fr/

## Stack
- **Astro 5** (statique) — routing par fichier = URLs propres identiques à l'ancien site
- `@astrojs/sitemap` (sitemap-index.xml auto)
- HTML/CSS vanilla (pas de framework UI), Google Fonts **Comfortaa** + **Montserrat**
- SVG inline (mesh moléculaire/hexagonal, ECG, icônes)

## Identité visuelle (reprise de la maquette validée)
- **Pôle ambulances** : bleu (`--blue #0c76f4`, `--blue-deep #00398c`, `--blue-night #001f4d`), fond clair froid
- **Pôle pompes funèbres** : même système, accent **or/bronze** (`--gold #b8893d`) via la classe `theme-pf` sur `<html>` (remappe `--accent`)
- Motifs hexagonaux, texture moléculaire `feTurbulence`, ligne ECG animée, reveals au scroll, compteurs animés

## Architecture
```
src/
├── data/site.js            # Coordonnées + arborescence nav (source unique)
├── styles/global.css       # Design system complet (tokens, header, footer, sections, theme-pf)
├── layouts/Base.astro      # <head> SEO/OG/JSON-LD + Header + Footer + JS (scroll/reveal/burger)
├── components/
│   ├── Header.astro        # Nav 2 pôles avec dropdowns
│   ├── Footer.astro
│   ├── HeroMesh.astro      # Fond moléculaire réutilisable
│   ├── PageHero.astro      # Hero pages internes (fil d'Ariane, eyebrow, titre, lead)
│   │                       #   props PF : heroImage/heroImageAlt (photo en arche, remplace HeroMesh) + tree (filigrane arbre de vie via mask)
│   ├── CtaBand.astro       # Bande CTA (props title/text/phone)
│   ├── ReserveForm.astro   # Formulaire de réservation
│   └── Figure.astro        # Placeholder visuel "à venir" (avant photos client)
└── pages/                  # 1 fichier = 1 URL (voir SEO ci-dessous)
public/                     # favicon.svg, robots.txt
index.html                  # ANCIENNE maquette one-page (référence, NON buildée par Astro)
```

## URLs (SEO — conservées de l'ancien site)
**Portail** : `/` = écran de choix 2 pôles (NE contient plus la home ambulances — déplacée).
Ambulances : `/ambulances` (home, ex-`/`), `/a-propos`, `/transport-ambulance`, `/transport-malade-assis`,
`/transport-malade-allonge`, `/taxi-conventionne`, `/taxi-vsl`, `/transport-pmr`,
`/taxi-prive`, `/mission-samu`, `/nos-agences`, `/chaussee-saint-victor`, `/oucques`,
`/contact`, `/mentions-legales`, `/vie-privee`
Pompes funèbres (NOUVELLES URLs) : `/pompes-funebres`, `/organisation-obseques`,
`/contrat-obseques`, `/marbrerie`, `/retour-a-domicile`, `/articles-funeraires`,
`/contact-pompes-funebres` (formulaire funéraire dédié)
(⚠️ `/funerarium` SUPPRIMÉ le 2026-06-16 — la cliente n'en propose pas)

## Commandes
```bash
npm install
npm run dev       # serveur de dev
npm run build     # build statique -> dist/
npm run preview   # prévisualise dist/
```

## Décisions importantes
- **Navbar indépendante par pôle + bouton de bascule (2026-06-19)** : chaque pôle est un mini-site
  autonome. `site.js` exporte **`navAmb`** et **`navPf`** (au lieu de l'ancien `nav` unique) ; `Header`
  choisit selon `isPf`. Plus de sous-menu croisé (pas de PF dans la nav ambulances ni l'inverse). L'onglet
  **« Accueil » pointe vers la home DU PÔLE** (`/ambulances` ou `/pompes-funebres`), plus vers le portail.
  Bascule entre pôles via un **bouton flottant `.pole-switch`** (bas-gauche, dans `Base.astro`) portant le
  **logo + le nom de l'autre pôle** (« Basculer vers le pôle … ») et sa couleur (or/aubergine ↔ bleu) ; il
  mène directement à l'autre pôle. Le **portail `/`** reste joignable via le footer (« Choisir un pôle »).
  `isActive` (Header) : les dropdowns s'allument sur leurs sous-liens seulement (évite le double-actif
  Accueil+dropdown sur la home). Bulle de contact en bas-DROITE (inchangée) → pas de conflit.
- **Portail d'accueil (2026-06-18)** : `/` est devenu un **écran de choix à 2 portes** (page autonome
  `src/pages/index.astro`, sans Header/Footer de pôle) → bleu/ECG `/ambulances` ↔ violet-or/arbre de vie
  `/pompes-funebres`. La home ambulances a été **déplacée vers `/ambulances`** (même contenu).
  Nav recâblée : **logo** → home du pôle courant (`homeHref`), onglet **« Accueil » → `/`** (portail),
  onglet **« Ambulances » → `/ambulances`**. Compromis SEO assumé (le `/` ne porte plus « ambulance Blois »).
- **Contact dédié par pôle (2026-06-18)** : 2 formulaires distincts. `/contact` (ambulances, `ReserveForm`
  transport) et **`/contact-pompes-funebres`** (funéraire, **`ContactFormPF.astro`** : objet de demande,
  contact anonyme, ton sobre, envoi → e-mail Jenna). L'onglet **Contact** + le **CTA navbar** (« Réserver »
  ↔ « Nous contacter ») + la **bulle flottante** suivent le pôle (`contactHref` dans `Header`/`Base`).
  Tous les `ctaHref` des heros + `CtaBand` PF re-pointés vers `/contact-pompes-funebres` (plus de fuite).
- Textes **ambulances** = repris fidèlement de l'ancien site (rien inventé)
- Textes **pompes funèbres** = **contenu réel intégré le 2026-06-16** d'après les flyers fournis par la
  cliente (dossier `retour_Lea/`). Plus de lorem. Charte **Jenna : violet aubergine + or sur ivoire**,
  thème **arbre de vie**, slogan **« L'art du funéraire, c'est l'art du détail »**, titres en serif
  **Cormorant Garamond**. Logo Jenna co-marqué dans les heros PF (`/images/pf/logo-jenna.webp`).
- **Décision SEO (2026-06-16)** : un **seul site** pour les 2 pôles (validé par la cliente), bien que
  ce soient **2 sociétés distinctes** du même groupe (Holding B.I.A / Tarik Zemali → Ambulances Doré +
  Pompes Funèbres Jenna). Cloisonner les pages PF (titles/meta 100% funéraire), fiche Google Business
  distincte pour Jenna.
- **CMS « la cliente édite texte + photos »** : prévu en DERNIER (CMS git-based type Sveltia/Decap,
  léger, pas de base de données). Nécessite repo GitHub + déploiement auto Vercel (à valider Timothée).
- **Photos** : remplacées par un placeholder thématisé `Figure.astro` (« Visuel à venir ») pour éviter tout visuel hors sujet. Les IDs Unsplash devinés tombaient sur des images inappropriées (ex. ballons sur une page funéraire) → écartés.
- Coordonnées **pompes funèbres** = **Pompes Funèbres Jenna (Philae Services Funéraires)**, 76 Av. de Vendôme 41000 Blois, tél **02 79 40 02 72** (fournies par le client le 2026-06-12, dans `site.pf`). Nom + coordonnées affichés accueil/footer/nos-agences/pompes-funebres/contact. E-mail PF encore inconnu (placeholder).
- Cartes agences : iframes Google Maps (sans clé API)
- Formulaire : `action="mailto:"` en fallback — à brancher sur un backend/Formspree au déploiement

## TODO_CLIENT (à compléter quand le client fournit les infos)
1. ~~Contenu réel pompes funèbres~~ ✅ FAIT (2026-06-16, d'après flyers `retour_Lea/`).
2. ~~Coordonnées PF~~ ✅ FAIT. ~~E-mail PF~~ ✅ **pfjenna@philaeservicesfuneraires.fr** (flyers).
3. ~~Photos PF~~ ✅ FAIT : 6 visuels recadrés depuis les flyers → `public/images/pf/` + logo Jenna.
   **MAJ 2026-06-22** : 3 vraies photos fournies par Léa (`retour_Lea/new1-3.jpeg`) converties en webp et intégrées en remplacement des visuels flyer → `accueil.webp` (salon, `/pompes-funebres`), `agence.webp` (façade, `/contact-pompes-funebres`), `showroom.webp` (articles, `/articles-funeraires`).
4. ~~Noms + parcours des intervenants~~ ✅ FAIT (2026-06-22) : portrait de **Léa** (responsable, Conseillère funéraire & Maître de cérémonie) — texte + photo `Trombi_Lea.jpeg` fournis par la cliente → carte `.pf-portrait` sur `/pompes-funebres`, photo `public/images/pf/lea.webp`.
5. Articles funéraires : détailler la sélection réelle si la cliente fournit un catalogue.
6. Brancher le formulaire sur un service d'envoi d'e-mails + **CMS** (cf. décisions).
7. Valider raison sociale exacte + gérant (Tarik Zemali) dans les mentions légales.
