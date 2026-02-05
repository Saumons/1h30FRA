# 🐾 Animaux & Élections Municipales

## Description du projet

Site web informatif sur l'émergence de la cause animale comme enjeu électoral dans les élections municipales françaises. Ce projet explore comment les associations, les candidats et l'opinion publique s'emparent progressivement de cette question.

## 📋 Structure du projet

```
projet/
│
├── index.html          # Page principale HTML
├── styles.css          # Styles CSS avec animations
├── script.js           # Interactions JavaScript
└── README.md           # Documentation (ce fichier)
```

## 🎨 Sections du site

### 1. **Hero Section**
- Titre impactant avec animation
- Image principale (placeholder pour photo d'animal urbain)
- Bouton call-to-action

### 2. **Section Associations** (01)
Présente les principales organisations qui poussent les candidats à s'engager :
- L214 Éthique & Animaux
- Fondation 30 Millions d'Amis
- Parti Animaliste
- LPO (Ligue pour la Protection des Oiseaux)

**Éléments inclus :**
- Cartes interactives avec images
- Listes d'engagements par association
- Statistiques animées (78% des Français favorables, 250+ villes sollicitées)

### 3. **Section Tendances** (02)
Analyse les raisons de cette tendance :
- Évolution sociétale
- Lien avec l'écologie
- Compétences municipales élargies
- Pression électorale

**Éléments inclus :**
- Grille de cartes avec icônes
- Images illustratives
- Citation d'expert

### 4. **Section Candidats** (03)
Présente les positions des candidats :

**Candidats Pro-Protection :**
- Marie Dupont (EELV - Lyon)
- Thomas Bernard (PS - Strasbourg)
- Sophie Rousseau (Parti Animaliste - Bordeaux)
- Pierre Lefebvre (LFI - Lille)

**Candidats Indifférents/Réticents :**
- Jean Moreau (LR - Marseille)
- Christine Dubois (DVD - Toulouse)
- Marc Fontaine (RN - Nice)

**Éléments inclus :**
- Fiches candidats avec discours
- Badges d'engagement
- Analyse comparative du clivage politique

### 5. **Section Histoire** (04)
Timeline historique de la question animale :
- 1850 : Loi Grammont
- 1963 : Loi sur la protection animale
- 1976 : Déclaration universelle des droits de l'animal
- 2015 : Animaux reconnus comme "êtres sensibles"
- 2020 : Première campagne municipale "animal-centrée"
- 2024 : Enjeu électoral structurel

**Éléments inclus :**
- Timeline verticale avec alternance gauche/droite
- Dates en cercles animés
- Images d'archive (placeholders)
- Encadré de réflexion finale

## 🎭 Design et Esthétique

### Palette de couleurs
- **Couleur primaire** : `#2d5016` (Vert forêt)
- **Couleur secondaire** : `#8b6f47` (Brun terreux)
- **Couleur accent** : `#d4a574` (Ocre doux)
- **Couleur highlight** : `#4a7c59` (Vert sauge)
- **Arrière-plan** : `#fdfcfa` (Blanc cassé chaud)

### Typographie
- **Titres** : 'Playfair Display' (Serif élégant)
- **Corps de texte** : 'Source Sans 3' (Sans-serif lisible)

### Animations
- Fade-in au scroll (Intersection Observer)
- Animations des cartes au survol
- Compteurs animés pour les statistiques
- Navigation active dynamique
- Effet parallaxe léger sur le hero

## 🖼️ Images

Le site utilise des placeholders d'images via Unsplash. Voici où placer vos propres images :

### Images recommandées :

1. **Hero** (`.hero-image`) : Chien ou chat en milieu urbain
2. **Associations** :
   - L214 : Logo ou manifestation végétarienne
   - 30 Millions d'Amis : Refuge pour animaux
   - Parti Animaliste : Manifestation ou logo
   - LPO : Oiseaux ou biodiversité urbaine

3. **Tendances** :
   - Famille avec animaux
   - Nature en ville
   - Mairie/bâtiment municipal
   - Vote ou élection

4. **Candidats** :
   - Photos de profil des candidats (150x150px)
   - Utilisez la classe `.photo-placeholder` pour vos photos

5. **Histoire** :
   - Illustrations historiques (loi Grammont)
   - Archives années 1960
   - Photo UNESCO 1976
   - Animaux en milieu sensible
   - Élections municipales
   - Ville moderne et nature

### Comment remplacer les images :

```html
<!-- Remplacer l'attribut src -->
<img src="VOTRE_IMAGE.jpg" alt="Description" loading="lazy">
```

## 💻 Fonctionnalités JavaScript

### Navigation
- Scroll fluide vers les sections
- Mise à jour automatique du lien actif
- Effet d'ombre sur la navbar au scroll

### Animations
- `Intersection Observer` pour les animations au scroll
- Animation des compteurs de statistiques
- Effet parallaxe sur l'image hero
- Debouncing des événements scroll pour optimisation

### Compatibilité
- Polyfill pour smooth scroll (navigateurs anciens)
- Lazy loading des images (avec fallback)
- Responsive design complet

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints à :
- Desktop : > 768px
- Mobile : ≤ 768px

**Adaptations mobiles :**
- Navigation verticale
- Hero en une colonne
- Timeline simplifiée
- Cartes empilées
- Grilles en une colonne

## 🚀 Installation et utilisation

### 1. Télécharger les fichiers
```bash
# Téléchargez les 3 fichiers :
# - index.html
# - styles.css
# - script.js
```

### 2. Organiser les fichiers
```
votre-dossier/
├── index.html
├── styles.css
└── script.js
```

### 3. Ouvrir le site
Double-cliquez sur `index.html` ou ouvrez-le dans votre navigateur.

### 4. Personnalisation

#### Modifier les couleurs :
Éditez les variables CSS dans `styles.css` :
```css
:root {
    --color-primary: #2d5016;
    --color-secondary: #8b6f47;
    /* etc. */
}
```

#### Ajouter du contenu :
Éditez le HTML dans `index.html` en suivant la structure existante.

#### Modifier les animations :
Ajustez les paramètres dans `script.js` :
```javascript
const observerOptions = {
    threshold: 0.1  // Sensibilité de détection
};
```

## 🔧 Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : 
  - Grid Layout
  - Flexbox
  - Animations & Transitions
  - Custom Properties (variables CSS)
  - Media Queries
- **JavaScript (Vanilla)** :
  - Intersection Observer API
  - Event Listeners
  - Animations dynamiques
  - Debouncing

## ✨ Points techniques notables

### Performance
- Lazy loading des images
- Debouncing des événements scroll
- Animations CSS hardware-accelerated
- Utilisation de `requestAnimationFrame`

### Accessibilité
- Structure sémantique HTML5
- Attributs `alt` sur toutes les images
- Navigation au clavier supportée
- Contraste de couleurs respecté

### SEO
- Balises meta appropriées
- Structure de titres hiérarchique (h1-h6)
- Attributs `loading="lazy"` pour les images

## 📝 Commentaires dans le code

Tous les fichiers sont abondamment commentés :
- **HTML** : Sections et placeholders clairement identifiés
- **CSS** : Organisation par sections avec séparateurs
- **JavaScript** : JSDoc pour les fonctions, explications détaillées

## 🎯 Améliorations possibles

1. **Formulaire de contact** pour recueillir l'avis des visiteurs
2. **Carte interactive** montrant les villes engagées
3. **Quiz** pour tester ses connaissances
4. **Graphiques** pour visualiser les données
5. **Partage sur réseaux sociaux**
6. **Mode sombre** (dark mode)
7. **Recherche** dans le contenu
8. **Traductions** multilingues

## 📄 Licence

Projet libre d'utilisation à des fins éducatives et informatives.

## 🤝 Contribution

Pour toute suggestion ou amélioration, n'hésitez pas à modifier le code !

---

**Développé avec 🐾 pour sensibiliser à la cause animale en politique**
