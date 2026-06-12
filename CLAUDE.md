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
│   ├── CtaBand.astro       # Bande CTA (props title/text/phone)
│   ├── ReserveForm.astro   # Formulaire de réservation
│   └── Figure.astro        # Placeholder visuel "à venir" (avant photos client)
└── pages/                  # 1 fichier = 1 URL (voir SEO ci-dessous)
public/                     # favicon.svg, robots.txt
index.html                  # ANCIENNE maquette one-page (référence, NON buildée par Astro)
```

## URLs (SEO — conservées de l'ancien site)
Ambulances : `/`, `/a-propos`, `/transport-ambulance`, `/transport-malade-assis`,
`/transport-malade-allonge`, `/taxi-conventionne`, `/taxi-vsl`, `/transport-pmr`,
`/taxi-prive`, `/mission-samu`, `/nos-agences`, `/chaussee-saint-victor`, `/oucques`,
`/contact`, `/mentions-legales`, `/vie-privee`
Pompes funèbres (NOUVELLES URLs) : `/pompes-funebres`, `/organisation-obseques`,
`/contrat-obseques`, `/funerarium`, `/articles-funeraires`

## Commandes
```bash
npm install
npm run dev       # serveur de dev
npm run build     # build statique -> dist/
npm run preview   # prévisualise dist/
```

## Décisions importantes
- Textes **ambulances** = repris fidèlement de l'ancien site (rien inventé)
- Textes **pompes funèbres** = **lorem provisoire** (le client n'a pas encore fourni le contenu) — balisé `TODO_CLIENT`
- **Photos** : remplacées par un placeholder thématisé `Figure.astro` (« Visuel à venir ») pour éviter tout visuel hors sujet. Les IDs Unsplash devinés tombaient sur des images inappropriées (ex. ballons sur une page funéraire) → écartés.
- Coordonnées **pompes funèbres** = **Pompes Funèbres Jenna (Philae Services Funéraires)**, 76 Av. de Vendôme 41000 Blois, tél **02 79 40 02 72** (fournies par le client le 2026-06-12, dans `site.pf`). Nom + coordonnées affichés accueil/footer/nos-agences/pompes-funebres/contact. E-mail PF encore inconnu (placeholder).
- Cartes agences : iframes Google Maps (sans clé API)
- Formulaire : `action="mailto:"` en fallback — à brancher sur un backend/Formspree au déploiement

## TODO_CLIENT (à compléter quand le client fournit les infos)
1. Contenu réel du pôle pompes funèbres (remplacer le lorem)
2. ~~Coordonnées PF~~ ✅ FAIT (Pompes Funèbres Jenna, cf. ci-dessus). Reste : **e-mail PF** (placeholder dans `site.pf.email`).
3. Photos réelles (remplacer les `<Figure />` par des `<img>`) — notamment **photos du pôle pompes funèbres** (aucune dispo : pas de visuel funéraire intégré, contrairement aux ambulances)
4. Brancher le formulaire sur un service d'envoi d'e-mails
5. Valider raison sociale exacte + gérant (Tarik Zemali) dans les mentions légales
