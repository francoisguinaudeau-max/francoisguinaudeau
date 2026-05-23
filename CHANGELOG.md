# Guide — Portfolio V2

## Quoi de neuf depuis la V1

- **Esthétique** : noir bleuté plus profond (`#08080f`), typographie Fraunces (un sérif contemporain, plus tranchant que Cormorant Garamond), grain subtil sur tout le site pour évoquer la pellicule
- **Page d'accueil** : texte poétique resserré et discret comme demandé — "message perdu en mer". Plus petit, mais plus présent par son contraste avec le vide
- **Page Œuvres** : grille remplacée par des **bandes horizontales** pleine largeur, une par projet, avec numérotation italique (01, 02, 03...) à la manière d'un catalogue d'œuvres. Au survol : la miniature s'agrandit légèrement et passe du grisé à la couleur, le titre glisse vers la droite
- **Page Projet** : nouvelle structure inspirée de Studio Drift — **image plein écran d'entrée**, puis on scrolle vers le contenu éditorial. La navigation devient transparente sur le hero, opaque au scroll
- **Transitions** : ralenties à 800ms (vs 300-400ms) pour un rythme plus contemplatif
- **Détails** : navigation "mix-blend-mode difference" sur la home (s'adapte automatiquement à la luminosité de la vidéo), navigation entre projets avec titre du suivant/précédent

## Tester

Décompresse, double-clique sur `index.html`. Tout fonctionne hors-ligne.

## Le reste

Pour la mise en ligne (Cloudflare Pages + WHC), le remplacement de la vidéo Vimeo, la gestion des projets : la procédure du guide V1 reste identique, juste les fichiers ont changé. Réfère-toi au précédent guide pour ces étapes.

## Prochaines évolutions possibles

Selon ton retour, on peut encore :
- Ajouter la lecture vidéo silencieuse au survol des projets (comme Salomon Ligthelm)
- Tester une variante typographique (par ex. Editorial New ou GT Sectra à la place de Fraunces)
- Ajuster la densité du grain ou l'enlever
- Affiner la palette (plus chaud, plus froid, plus de contraste...)
- Ajouter une vraie section "publications/presse/festivals" si pertinent
- Passer en projet Astro + Decap CMS pour l'interface d'admin
