# Portfolio — BTS SIO SLAM

Portfolio personnel moderne et responsive, prêt à l'emploi.

## 📁 Structure des fichiers

```
portfolio/
├── index.html          # Structure HTML complète
├── style.css           # Styles (thème sombre + clair)
├── script.js           # Animations, toggle thème, articles
├── README.md           # Ce fichier
└── images/             # Images des projets (projet1.jpg → projet9.jpg)
```

## 🚀 Utilisation

1. **Téléchargez** le dossier complet `portfolio/`.
2. **Ouvrez** `index.html` dans votre navigateur — c'est tout !
3. Aucune dépendance, aucun build, aucune installation nécessaire.

## 📋 Contenu intégré

### 9 projets (à mettre à jour avec vos liens et captures)
1. **Site Chauffeur VTC** — Gestion de flotte (PHP/MVC)
2. **BiblioShare** — Plateforme de partage de livres
3. **To Do List** — Gestion de tâches
4. **Gestion Interventions Free** — Suivi clients/techniciens
5. **Plateforme E-learning** — Cours de dev web (WordPress)
6. **E-CAFET' (FoodTech)** — Click & Collect MVC
7. **Fitconnect** — Mise en relation sportif/coach
8. **Loca'Vélo** — Back-office location de vélos
9. **Système de réservation** — Cabinet médical (POO + PDO)

### Veille technologique : évolution de PHP
Timeline d'évolution (1994 → PHP 8+), concepts clés (MVC, Sécurité/Typage),
impact sur le projet de réservation, et 8 articles PHP éditables dans `script.js`.

## ✏️ Personnalisation

### Modifier les textes
Tous les textes sont directement modifiables dans `index.html`. Sections clairement
repérables avec les commentaires (`<!-- 1. ACCUEIL -->`, etc.).

### Remplacer les images des projets
Placez vos captures dans `images/` avec les noms `projet1.jpg` à `projet9.jpg`
(formats `.jpg`, `.png`, `.webp` acceptés).

> 💡 Si une image n'existe pas, un fallback élégant s'affiche automatiquement
> avec le nom du projet sur fond dégradé.

### Modifier les liens (LinkedIn, GitHub, Email, projets)
Dans `index.html`, remplacez :
- `votre.email@exemple.com` par votre email
- les `href="#"` des liens LinkedIn/GitHub par vos vrais liens
- les `href="#"` des boutons « Voir le projet » par vos vrais liens

### Ajouter / modifier des articles de veille
Dans `script.js`, modifiez le tableau `articles` (au début du fichier).
Structure d'un article :

```js
{
    title: "Titre de l'article",
    description: "Description courte...",
    category: "Catégorie",
    date: "21 novembre 2024",
    source: "Nom de la source",
    url: "https://lien-vers-article.com"
}
```

### Changer la couleur d'accent
Dans `style.css` ligne ~16, modifiez la variable `--accent`. Suggestions :
- `#14b8a6` (teal — par défaut)
- `#6366f1` (indigo)
- `#f59e0b` (orange/amber)
- `#ec4899` (rose)
- `#22c55e` (vert)

## ✨ Fonctionnalités incluses

- ✅ Design responsive (mobile / tablette / desktop)
- ✅ Thème sombre par défaut + switch clair/sombre persistant
- ✅ Menu burger fluide sur mobile
- ✅ Animations au scroll (apparition progressive)
- ✅ Smooth scroll entre les sections
- ✅ Bouton retour en haut
- ✅ Formulaire de contact stylé (à connecter à un backend)
- ✅ Articles de veille avec bouton « Voir plus »
- ✅ Footer avec copyright dynamique
- ✅ Optimisé accessibilité (`prefers-reduced-motion`)

## 🔌 Connecter le formulaire de contact

Le formulaire est en mode démo (simulé). Pour qu'il envoie réellement des emails :

- **[Formspree](https://formspree.io/)** — solution la plus simple
- **[EmailJS](https://www.emailjs.com/)** — envoi côté client
- Un backend perso (PHP, Node.js, etc.)

Modifiez la fonction `setupContactForm()` dans `script.js`.

## 📜 Licence

Libre d'utilisation pour votre portfolio personnel.

---

Bon courage pour votre BTS SIO ! 🎓
