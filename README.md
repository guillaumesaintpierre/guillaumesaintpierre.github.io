# Portfolio de Guillaume Saint-Pierre — refonte novembre 2026

Portfolio statique en anglais

## Ce que contient la refonte

- **Introduction** : présentation, domaines d'intérêt, boutons CV et contact, portrait.
- **Areas of focus** : énergie/thermique, simulation numérique, IA appliquée, conception mécanique.
- **Featured project** : étude sur la récupération de chaleur des data centers, avec périmètre, contributions, illustration, chiffres *explicitement modélisés* et étapes du modèle.
- **Selected projects** : carrousel avec navigation aux flèches, au clavier et par glissement tactile, plus index de tous les projets.
- **Background** : Education / Experience en deux colonnes, avec EPFL, DTU, EPFL AI Team, Finance Association et engagement associatif.
- **Capabilities** : compétences regroupées par domaines.
- **Currently** et **Contact** : statut, email, LinkedIn, GitHub, CV.
- **8 pages de projets** avec rapports techniques, figures et descriptions détaillées : Energy, REPLAY, FEM, Heat, Squash, Billiard, Corner Analyzer et CYP Inhibition.

Les pages des sept études préexistantes ont été conservées et reformattées depuis le site fourni. Le volet CYP a été ajouté comme projet académique/baseline distinct. Deux entrées conceptuelles du portfolio d'origine (LumiTrack et Self-Balancing Robot) n'ont pas été promues dans la sélection publique, en attendant vérification de leur statut et de leur attribution.

## Tester le site sur ton Mac

1. Dézipper l'archive.
2. Ouvrir **`index.html`** dans le navigateur ; toutes les pages, figures et styles essentiels sont contenus dans le dossier. L'image originale du logo EPFL AI Team nécessite une connexion Internet ; une icône de remplacement est fournie.
3. Parcourir les projets via **Projects**, puis **Read case study**.

Le site est écrit en HTML/CSS/JavaScript standard : **pas de React, pas de serveur, pas d'abonnement et pas de commande de compilation.**

## Remplacer le portrait sans retoucher ton visage

L'image `assets/portrait.jpg` est **un simple visuel d'attente avec les initiales GS**, pas ta photo.

1. Quand tu auras envoyé/choisi la photo définitive, place **le fichier original** dans `assets/portrait.jpg` (même nom et format JPG), en remplaçant l'image d'attente.
2. Aucun filtre de beauté, aucune régénération du visage, aucun montage de la personne n'est requis.
3. Si un recadrage est nécessaire pour retirer quelqu'un à droite, on peut seulement adapter la présentation avec `object-position` ou produire un recadrage à pixels identiques ; pour garder la tête entière, privilégier une photo où le sujet reste dans la zone cadrée.

L'image de remplacement doit être volontairement choisie et validée avant de publier le site.

## Hébergement gratuit sur GitHub Pages (option A)

1. Se connecter à [GitHub](https://github.com) avec ton compte.
2. Créer un **dépôt public** nommé, par exemple, `guillaume-portfolio`.
3. Mettre **tout le contenu du dossier dézippé à la racine** du dépôt : `index.html`, `styles.css`, `script.js`, `case.css`, `projects/`, `assets/`, `.nojekyll`, etc. Ne pas envoyer le ZIP comme seul fichier.
4. Aller dans `Settings` → `Pages` → `Build and deployment` → Source **Deploy from a branch** → branch `main`, folder `/(root)` → `Save`.
5. GitHub affichera l'adresse publique de publication ; sous ce nom de dépôt, elle aura normalement la forme `https://guillaumesaintpierre.github.io/guillaume-portfolio/` (**exemple, pas encore un lien publié**).

Sur le plan GitHub Free, GitHub Pages est gratuit **pour les dépôts publics**. Le site lui-même devient public une fois mis en ligne.

Guide officiel : https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## GitHub + Netlify (option B, recommandée pour une publication automatisée)

1. Créer et remplir le dépôt GitHub public comme ci-dessus.
2. Aller sur [Netlify](https://app.netlify.com/), choisir le plan **Free**.
3. `Add new project` / `Import an existing project`, puis connecter le dépôt GitHub.
4. Comme c'est un site statique sans build : **Build command : vide**, **Publish directory : `.`**.
5. Déployer, puis relever l'URL donnée par Netlify, typiquement en `*.netlify.app`. À chaque mise à jour de `main`, Netlify peut republier automatiquement le site.

Netlify propose bien une formule à **0 €**, mais elle a un quota d'utilisation (en 2026, 300 crédits mensuels pour les nouveaux comptes Free). Il n'y a aucune raison de choisir un plan payant pour ce portfolio classique tant que tu restes dans le quota. GitHub Pages est encore plus simple pour un site personnel statique.

Tarification officielle : https://www.netlify.com/pricing/

**Important :** le ZIP remis est *prêt à être publié*, mais **aucune publication effective n'a été effectuée**, et aucun lien `github.io` / `netlify.app` n'est encore actif du seul fait de télécharger ce dossier.

## Fichiers principaux

```text
index.html                Accueil / 8 projets / parcours / contact
styles.css                Mise en page responsive
script.js                 Carrousel, navigation mobile, lightbox, copie email
case.css                  Mise en page des études de cas
projects/*.html           8 études détaillées
assets/images/*           Figures issues du portfolio initial + schéma CYP
assets/docs/*.pdf         CV extrait du site initial
assets/portrait.jpg       Placeholder à remplacer par ta photo
assets/ai-team-mark.svg   Icône de secours si le logo officiel ne charge pas
netlify.toml              Paramètres Netlify : publication à la racine
.nojekyll                 Publication GitHub Pages sans Jekyll
```

## Points à vérifier avant publication définitive

- **Portrait :** remplacer le visuel temporaire sans modifier la personne.
- **CV :** le PDF provient de l'ancien portfolio : en vérifier le contenu avant de rendre le site public.
- **Attribution :** dates, intitulés d'expériences, projets et chiffres sont fondés sur le portfolio fourni et le travail décrit ; relire les passages avant diffusion à des recruteurs.
- **Logo EPFL AI Team :** le site utilise le logo hébergé sur la plateforme EPFL MAKE, avec une icône vectorielle de secours. Le kit officiel est disponible sur https://epflaiteam.ch/branding-kit si tu souhaites héberger directement le logo officiel dans `assets/`.
- **Liens externes :** les liens GitHub et EPFL AI Team doivent être accessibles publiquement pour les visiteurs du portfolio.

Le code et les figures du portfolio sont éditables. Le site ne contient pas de formulaire collectant des données personnelles, ni d'analyse de fréquentation, ni de traqueur ajouté.
