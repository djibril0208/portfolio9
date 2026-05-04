/* ==================================================
   PORTFOLIO — Script principal
   ================================================== */


/* ==================================================
   0. BASE DE DONNÉES DES PROJETS (pour la modal)
   --------------------------------------------------
   Pour modifier les détails d'un projet, éditez juste
   l'objet correspondant ci-dessous.
   ================================================== */
const projectsData = {
    'vtc': {
        category: 'Application web',
        title: 'Site Chauffeur VTC',
        subtitle: 'Plateforme de gestion de flotte VTC en architecture MVC',
        image: 'images/projet1.jpg',
        description: "Application web dédiée aux compagnies VTC pour piloter l'ensemble de leur activité. Les chauffeurs et gestionnaires accèdent à une interface intuitive permettant de gérer les courses, les véhicules et les utilisateurs depuis un tableau de bord centralisé.",
        features: [
            "Gestion complète du parc de véhicules (CRUD)",
            "Suivi des chauffeurs et de leurs disponibilités",
            "Inscription et connexion sécurisées",
            "Tableau de bord administrateur",
            "Architecture MVC pour la maintenabilité"
        ],
        tags: ['PHP', 'MySQL', 'MVC', 'HTML', 'CSS'],
        context: "Projet de formation BTS SIO. Réalisé pour mettre en pratique l'architecture MVC et la conception de bases de données relationnelles."
    },
    'biblio': {
        category: 'Application communautaire',
        title: 'BiblioShare',
        subtitle: 'Plateforme communautaire de partage de livres',
        image: 'images/projet2.jpg',
        description: "Plateforme web où les utilisateurs peuvent constituer leur bibliothèque numérique, ajouter de nouveaux ouvrages, les classer par genre et partager leur collection. Chaque livre est référencé avec son auteur, son année de publication et sa catégorie littéraire.",
        features: [
            "Inscription et authentification utilisateur",
            "Ajout, édition et suppression de livres",
            "Classification par genre (Thriller, Fantasy, SF, Horreur...)",
            "Affichage en grille responsive",
            "Page de détails par livre"
        ],
        tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
        context: "Projet de formation. L'occasion de pratiquer le CRUD complet et la gestion de sessions PHP."
    },
    'todolist': {
        category: 'Application utilitaire',
        title: 'To Do List',
        subtitle: 'Application de gestion de tâches au quotidien',
        image: 'images/projet3.jpg',
        description: "Application web simple et efficace pour gérer ses tâches du quotidien. Création, édition, marquage comme effectuée ou suppression : tout est accessible en un clic. Système de couleurs pour distinguer rapidement le niveau d'urgence.",
        features: [
            "Création de tâches avec nom, description et date limite",
            "Marquage \"effectuée\" via case à cocher",
            "Suppression rapide d'une tâche",
            "Code couleur selon l'échéance",
            "Interface épurée et rapide"
        ],
        tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
        context: "Projet personnel pour pratiquer les fondamentaux du CRUD et l'ergonomie d'une application courte."
    },
    'free': {
        category: 'Outil métier',
        title: 'Gestion Interventions Free',
        subtitle: 'Suivi automatisé des interventions techniciens chez les clients Free',
        image: 'images/projet4.jpg',
        description: "Outil interne destiné à automatiser la gestion des interventions des techniciens chez les clients de l'opérateur Free. Permet l'ajout de techniciens, de clients, et le suivi détaillé de chaque intervention avec son statut.",
        features: [
            "Gestion des techniciens (nom, prénom, email, téléphone, âge)",
            "Gestion des clients",
            "Création et suivi des interventions",
            "Historique complet par client et par technicien",
            "Interface d'administration claire"
        ],
        tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
        context: "Projet de formation orienté métier. Bonne pratique pour comprendre la modélisation de relations entre plusieurs entités (clients, techniciens, interventions)."
    },
    'elearning': {
        category: 'Site web pédagogique',
        title: 'Plateforme E-learning',
        subtitle: 'Espace d\'apprentissage du développement web',
        image: 'images/projet5.jpg',
        description: "Site de cours en ligne dédié à l'apprentissage du développement web. Le site présente une documentation technique structurée par sommaire, avec des explications progressives et des extraits de code colorisés pour chaque concept.",
        features: [
            "Sommaire interactif",
            "Sections pédagogiques (Algorithme, Langage C, PHP, HTML/CSS, Merise, MySQL...)",
            "Blocs de code stylés type terminal",
            "Design responsive",
            "Navigation fluide entre les chapitres"
        ],
        tags: ['WordPress', 'HTML', 'CSS'],
        context: "Projet axé sur la mise en page éditoriale et la pratique de WordPress côté gestion de contenu."
    },
    'cafet': {
        category: 'FoodTech',
        title: "E-CAFET' — Click & Collect",
        subtitle: "Solution Click & Collect pour cafétéria d'entreprise",
        image: 'images/projet6.jpg',
        description: "Plateforme de pré-commande pour cafétéria : les utilisateurs consultent la carte du jour, ajoutent des plats au panier et réservent leur déjeuner depuis leur smartphone. Côté gestionnaire, un back-office complet permet d'administrer le menu et les commandes.",
        features: [
            "Carte interactive avec catégories de plats",
            "Panier persistant et système d'authentification",
            "Back-office administrateur (gestion menu / commandes)",
            "Espace membre",
            "Architecture MVC complète"
        ],
        tags: ['PHP', 'MySQL', 'MVC'],
        context: "Projet de formation imposant une vraie réflexion UX et une architecture solide. Le design a été particulièrement travaillé."
    },
    'fitconnect': {
        category: 'Application web',
        title: 'FitConnect',
        subtitle: 'Plateforme de mise en relation sportif / coach',
        image: 'images/projet7.jpg',
        description: "Plateforme connectant les sportifs à des coachs personnels. Les utilisateurs définissent leurs objectifs et leurs disponibilités, et l'application leur attribue automatiquement le coach le mieux adapté à leur profil. Interface inspirée des sites de fitness modernes.",
        features: [
            "Matching automatique sportif / coach",
            "Programmes personnalisés",
            "Espace client et accès Pro",
            "Inscription et connexion sécurisées",
            "Design immersif (image hero, vidéo)"
        ],
        tags: ['PHP', 'MySQL', 'Java', 'HTML', 'CSS'],
        context: "Projet de fin d'année. L'occasion de combiner développement web (PHP) et mobile (Java) autour d'une même application métier."
    },
    'velos': {
        category: 'Back-office',
        title: "Loca'Vélo",
        subtitle: 'Tableau de bord de gestion de location de vélos',
        image: 'images/projet8.jpg',
        description: "Système complet de gestion d'une activité de location de vélos. Tableau de bord avec indicateurs clés (vélos disponibles, en location, en maintenance), gestion des locations en cours, suivi des clients et calcul automatique du chiffre d'affaires.",
        features: [
            "Dashboard avec statistiques en temps réel",
            "Gestion de la flotte (électriques / classiques)",
            "Suivi des locations en cours",
            "Gestion clients et historique",
            "Calcul automatique du revenu total"
        ],
        tags: ['PHP', 'MySQL', 'MVC'],
        context: "Projet axé back-office et data-visualisation. Bonne pratique de la conception de KPI et de tableaux de bord métiers."
    },
    'rdv': {
        category: 'Application médicale',
        title: 'Système de réservation médicale',
        subtitle: 'Plateforme de prise de rendez-vous pour cabinet médical',
        image: 'images/projet9.jpg',
        description: "Plateforme complète de prise de rendez-vous pour un cabinet de kinésithérapie / ostéopathie. Le patient peut consulter le profil du praticien, ses certifications, et réserver son créneau directement en ligne. Côté praticien, un espace d'administration permet de gérer l'agenda et les patients.",
        features: [
            "Présentation du praticien (bio + certifications)",
            "Système de prise de rendez-vous en ligne",
            "Espace patient (Login)",
            "Architecture MVC + POO",
            "Sécurisation via PDO (requêtes préparées)"
        ],
        tags: ['PHP', 'MySQL', 'POO', 'PDO', 'MVC'],
        context: "Mon projet le plus abouti techniquement. C'est sur ce projet que j'ai pleinement appliqué les principes du MVC couplés à la POO, en suivant les bonnes pratiques de ma veille technologique."
    },
    'glpi': {
        category: 'Infrastructure & ITSM',
        title: 'Gestion des incidents GLPI',
        subtitle: "Installation et configuration d'un serveur virtualisé Linux avec GLPI",
        image: 'images/projet10.jpg',
        description: "Mise en place d'une solution complète de gestion du parc informatique et des incidents utilisateurs grâce à GLPI, sur un serveur Linux virtualisé. Le projet a couvert toute la chaîne : installation du serveur, configuration des services, déploiement de GLPI et paramétrage du tableau de bord pour suivre tickets, incidents et matériel.",
        features: [
            "Installation d'un serveur virtualisé Linux",
            "Déploiement et configuration de GLPI",
            "Gestion du parc informatique (ordinateurs, moniteurs, périphériques)",
            "Création et suivi des tickets d'assistance",
            "Tableau de bord ITSM (statistiques, tickets en retard, etc.)",
            "Gestion des entités, profils et utilisateurs"
        ],
        tags: ['GLPI', 'Linux', 'Virtualisation', 'ITSM', 'Administration'],
        context: "Projet de formation BTS SIO réalisé du 03/03/25 au 25/03/25. L'occasion de découvrir les outils ITSM utilisés en entreprise pour piloter efficacement un parc informatique et le support utilisateur."
    },
    'soproreal': {
        category: 'Projet professionnel · Alternance',
        title: 'Suivi des Extracts SOPROREAL',
        subtitle: "Outil d'administration des extractions automatisées SAP / VBS / EXE",
        image: 'images/projet-pro1.png',
        description: "Outil PHP que j'ai conçu et développé en interne pour superviser l'ensemble des extractions de données automatisées du site Soproréal (L'Oréal). Le script lit en temps réel l'état des fichiers générés par les tâches Windows planifiées (SAP, VBS, EXE) et présente un tableau de bord clair indiquant pour chaque extraction : la dernière exécution, l'état des fichiers (à jour ou périmé) et un état global codifié par couleur (OK / Erreur Extraction).",
        features: [
            "Lecture automatique des dossiers d'extraction",
            "Détection des fichiers périmés (seuil paramétrable)",
            "Tableau de bord HTML lisible en un coup d'œil",
            "Codes couleur OK / Erreur d'extraction",
            "Hébergé localement sur le poste de monitoring",
            "Mise à jour temps réel à chaque ouverture"
        ],
        tags: ['PHP', 'SAP', 'VBS', 'Windows Task Scheduler', 'HTML'],
        context: "Réalisé en autonomie chez Soproréal — L'Oréal pour faciliter le suivi quotidien des extractions par l'équipe IT. L'outil permet de détecter immédiatement toute panne d'une tâche planifiée critique pour la production."
    },
    'cloud': {
        category: 'Projet professionnel · Alternance',
        title: 'Migration serveur Workspace → Cloud',
        subtitle: "Migration d'infrastructure d'un environnement on-premise vers le Cloud",
        image: 'images/projet-pro2.jpg',
        description: "Participation à un projet de migration d'un serveur de l'environnement Workspace interne vers une infrastructure Cloud du groupe L'Oréal. Mission qui m'a permis de découvrir concrètement les enjeux de la modernisation des infrastructures IT en milieu industriel.",
        features: [
            "Audit complet de l'existant (services, données, dépendances)",
            "Cartographie des utilisateurs et des accès",
            "Préparation et nettoyage des données avant transfert",
            "Transfert sécurisé vers l'environnement Cloud",
            "Tests de validation post-migration",
            "Communication aux utilisateurs et accompagnement au changement"
        ],
        tags: ['Cloud', 'Workspace', 'Infrastructure', 'Migration', 'IT'],
        context: "Projet réalisé en équipe chez Soproréal — L'Oréal. Une expérience formatrice qui m'a fait toucher à des problématiques d'architecture, de sécurité et de gestion de projet IT à l'échelle d'un grand groupe."
    }
};


/* ==================================================
   1. ARTICLES DE VEILLE TECHNOLOGIQUE — PHP
   --------------------------------------------------
   Pour ajouter un article, ajoutez simplement un objet
   au tableau ci-dessous. Les articles s'afficheront
   automatiquement dans la section "Veille".
   ================================================== */
const articles = [
    {
        title: "PHP 8.4 disponible : property hooks et nouveaux types",
        description: "La nouvelle version stable de PHP introduit les property hooks, un héritage asymétrique et plusieurs améliorations de performance. Une mise à jour très attendue par la communauté.",
        category: "Release",
        date: "21 novembre 2024",
        source: "PHP.net",
        url: "https://www.php.net/"
    },
    {
        title: "Laravel 11 : ce qui change pour les développeurs",
        description: "Laravel poursuit sa simplification avec une nouvelle structure de dossiers minimaliste, le retour des Casts en classe et une intégration améliorée de Pest pour les tests.",
        category: "Framework",
        date: "12 mars 2024",
        source: "Laravel News",
        url: "#"
    },
    {
        title: "Symfony 7 stable : performance et flexibilité",
        description: "La nouvelle version majeure de Symfony mise sur la rapidité, l'autoconfiguration et une compatibilité étendue avec PHP 8.3. Idéale pour les applications d'envergure.",
        category: "Framework",
        date: "30 novembre 2023",
        source: "Symfony Blog",
        url: "#"
    },
    {
        title: "Sécurité PHP : pourquoi PDO reste indispensable en 2025",
        description: "Les requêtes préparées via PDO restent la méthode standard pour se prémunir des injections SQL. Tour d'horizon des bonnes pratiques actuelles.",
        category: "Sécurité",
        date: "15 février 2025",
        source: "PHP The Right Way",
        url: "#"
    },
    {
        title: "POO en PHP : comprendre les traits et les interfaces",
        description: "Au-delà des classes, traits et interfaces permettent de structurer le code de manière flexible. Guide pratique avec exemples concrets pour le BTS SIO.",
        category: "POO",
        date: "08 janvier 2025",
        source: "Grafikart",
        url: "#"
    },
    {
        title: "MVC vs Clean Architecture : quel modèle pour mon projet ?",
        description: "Comparaison des deux approches d'architecture les plus populaires en PHP. Quand préférer le MVC classique, et quand basculer vers une architecture plus stricte ?",
        category: "Architecture",
        date: "22 octobre 2024",
        source: "Stitcher.io",
        url: "#"
    },
    {
        title: "Composer 2.7 : gestion de dépendances modernisée",
        description: "L'outil incontournable de gestion de paquets PHP poursuit son évolution avec un meilleur support des audits de sécurité et une vitesse d'installation accrue.",
        category: "Outils",
        date: "05 février 2024",
        source: "Composer",
        url: "#"
    },
    {
        title: "PHP & Docker : industrialiser ses environnements de dev",
        description: "Pourquoi et comment utiliser Docker pour ses projets PHP : stack reproductible, isolation des versions et déploiement simplifié. Un must pour les projets d'équipe.",
        category: "DevOps",
        date: "18 mars 2024",
        source: "Le Blog du Codeur",
        url: "#"
    }
];

/* Nombre d'articles affichés initialement */
let articlesDisplayed = 5;
const articlesPerLoad = 3;


/* ==================================================
   2. AFFICHAGE DES ARTICLES
   ================================================== */
function renderArticles() {
    const grid = document.getElementById('articlesGrid');
    if (!grid) return;

    // On vide la grille puis on réinjecte les articles visibles
    grid.innerHTML = '';

    const visibleArticles = articles.slice(0, articlesDisplayed);

    visibleArticles.forEach((article, index) => {
        const card = document.createElement('article');
        card.className = 'article-card';
        card.style.animationDelay = `${index * 80}ms`;
        card.innerHTML = `
            <div class="article-meta">
                <span class="article-category">${article.category}</span>
                <span class="article-date">${article.date}</span>
            </div>
            <h4 class="article-title">${article.title}</h4>
            <p class="article-description">${article.description}</p>
            <div class="article-source">
                <span class="article-source-name">${article.source}</span>
                <svg class="article-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                </svg>
            </div>
        `;

        // Au clic, ouvrir l'URL de l'article
        card.addEventListener('click', () => {
            if (article.url && article.url !== '#') {
                window.open(article.url, '_blank', 'noopener');
            }
        });

        grid.appendChild(card);
    });

    // Affiche/cache le bouton "Voir plus"
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        if (articlesDisplayed >= articles.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}

/* Bouton "Voir plus" */
function setupLoadMore() {
    const btn = document.getElementById('loadMoreBtn');
    if (!btn) return;

    btn.addEventListener('click', () => {
        articlesDisplayed = Math.min(articlesDisplayed + articlesPerLoad, articles.length);
        renderArticles();
    });
}


/* ==================================================
   3. THEME : CLAIR / SOMBRE
   ================================================== */
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Récupère le thème sauvegardé OU la préférence système
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'dark'); // dark par défaut

    html.setAttribute('data-theme', initialTheme);

    if (!themeToggle) return;

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}


/* ==================================================
   4. NAVIGATION : MOBILE + SCROLL ACTIVE
   ================================================== */
function setupNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    /* Burger menu mobile */
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Ferme le menu mobile au clic sur un lien
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    /* Effet scroll sur la navbar */
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    /* Lien actif selon la section visible */
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        rootMargin: '-40% 0px -50% 0px'
    });

    sections.forEach(section => observer.observe(section));
}


/* ==================================================
   5. ANIMATIONS AU SCROLL (REVEAL)
   ================================================== */
function setupScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // On unobserve une fois apparu (perf)
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}


/* ==================================================
   6. BOUTON RETOUR EN HAUT
   ================================================== */
function setupBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }, { passive: true });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


/* ==================================================
   7. FORMULAIRE DE CONTACT
   ================================================== */
function setupContactForm() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Récupération des données
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Simulation d'envoi (à remplacer par une vraie API / EmailJS / Formspree)
        status.textContent = '⏳ Envoi en cours...';
        status.style.color = 'var(--text-secondary)';

        setTimeout(() => {
            status.textContent = '✓ Message envoyé ! Je vous répondrai très vite.';
            status.style.color = 'var(--accent)';
            form.reset();

            // Console log pour debug (à retirer en prod)
            console.log('Données du formulaire :', data);

            // Efface le message après 5s
            setTimeout(() => {
                status.textContent = '';
            }, 5000);
        }, 800);
    });
}


/* ==================================================
   8. ANNÉE COURANTE DANS LE FOOTER
   ================================================== */
function setupCurrentYear() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}


/* ==================================================
   9. SMOOTH SCROLL POUR LES ANCRES
   (Fallback si scroll-behavior CSS pas supporté)
   ================================================== */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offset = 80; // hauteur navbar
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
}


/* ==================================================
   10. MODAL DÉTAILS PROJETS
   ================================================== */
function openProjectModal(button) {
    // Récupère l'id du projet depuis la carte parente
    const card = button.closest('.project-card');
    const projectId = card?.getAttribute('data-project');
    if (!projectId) return;

    const data = projectsData[projectId];
    if (!data) {
        console.warn(`Projet "${projectId}" introuvable dans projectsData.`);
        return;
    }

    // Référence aux éléments du DOM
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalImg = document.getElementById('modalImg');
    const modalImgFallback = document.getElementById('modalImgFallback');
    const modalCategory = document.getElementById('modalCategory');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalTags = document.getElementById('modalTags');
    const modalContext = document.getElementById('modalContext');
    const modalContextWrapper = document.getElementById('modalContextWrapper');

    // Image (avec fallback si l'image n'existe pas)
    modalImage.classList.remove('no-image');
    modalImg.src = data.image || '';
    modalImg.alt = data.title;
    modalImg.onerror = () => modalImage.classList.add('no-image');
    modalImgFallback.textContent = data.title;

    // Textes
    modalCategory.textContent = data.category || '';
    modalTitle.textContent = data.title || '';
    modalSubtitle.textContent = data.subtitle || '';
    modalDescription.textContent = data.description || '';

    // Fonctionnalités
    modalFeatures.innerHTML = '';
    if (data.features && data.features.length) {
        data.features.forEach(f => {
            const li = document.createElement('li');
            li.textContent = f;
            modalFeatures.appendChild(li);
        });
    }

    // Tags techniques
    modalTags.innerHTML = '';
    if (data.tags && data.tags.length) {
        data.tags.forEach(t => {
            const span = document.createElement('span');
            span.className = 'tag';
            span.textContent = t;
            modalTags.appendChild(span);
        });
    }

    // Contexte (caché si vide)
    if (data.context) {
        modalContext.textContent = data.context;
        modalContextWrapper.classList.remove('hidden');
    } else {
        modalContextWrapper.classList.add('hidden');
    }

    // Affichage
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // Reset scroll
    modal.scrollTop = 0;
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}

// Permet de fermer la modal avec la touche Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// Expose globalement (utilisé via onclick="openProjectModal(this)")
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;


/* ==================================================
   INITIALISATION AU CHARGEMENT
   ================================================== */
document.addEventListener('DOMContentLoaded', () => {
    setupThemeToggle();
    setupNavigation();
    setupScrollAnimations();
    setupBackToTop();
    setupContactForm();
    setupCurrentYear();
    setupSmoothScroll();
    renderArticles();
    setupLoadMore();

    console.log('%c👋 Portfolio chargé', 'color: #14b8a6; font-size: 14px; font-weight: bold;');
    console.log('%cN\'hésitez pas à me contacter via le formulaire !', 'color: #a8a8b3;');
});
