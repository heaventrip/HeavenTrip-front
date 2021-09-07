# front
- rgpd => vue cookies
> nullify unselected sess
> add trippers inscrits session
> espace profil
> dynamisme des cards

# back
> (- join table course_id | sport_id | | level_id | description1:text |  description2:text |  description3:text)

__________

> entre clique sur agence et clique bouton recherche (photo agrandie et module disparait)
> checkout booker prochain encart déjà sélectionné?
> changements d'URLs avec suivant/précédent => voir router history pb? (par ex précédent à partir du checkout ramène sur product)

# general
> erreurs
- tooltips

# home
> ouvrir connexion menu au hover + rotate icon
- animatique externe des cards @mousevents
>>> animatique des reviews
> animatique interne des cards

- ajouter fading sur les apparitions
- revoir les liens
> gérer les transis ENTRE items et enlever le trou entre les items + voir bottom bar 66deg (aspect continu sans saut)

# product
> GEOFF textarea qui sort du cadre sur petit écran

> textarea ajouter bouton envoyer
> lightbox
> (- formulaire créer session module booking (sur mois sans session ou ac sessions complètes))

### IMPERATIF V1 ###
 gérer les transitions et chargements de pages/composants etc.
> mécanique intégration des photos selon tags
> résolution des URLs
 gestion des origines pour mailerlite (newsletter, signup, wishlist, etc)
> spinner sur recherche et autres endroits le nécessitant

____________________________________________

### PLANNING

JEUDI
> optimisation routing
  - gestion modals
  - affichage spinner
  - gestions requêtes async

VENDREDI
> finalisation et vérification des erreurs + tooltips
+ animatiques
  - terminer le carousel (bug inexplicable question à poser sur le forum)
  - terminer les reviews
  - rajouter titre dynamique après stage dans review

SAMEDI
> finalisation du front /search
+ links (ceux qui manquent)
> curseurs swiper à customiser (pas réussi l'autre fois)
> revoir l'ajout à la wishlist

DIMANCHE

___________________________


# Réglages de front

> POSER QUESTION SUR LE FORUM GSAP
> Border carré sur les avatars sur chrome
> Rendre dynamique le message "je fais partie des 14 intéressés
> Régle général d'affichage du prix
> Bug pictos barre de recherche
> Croix des filtres à gauche + lien sur tout le bouton
> Faire en sorte de monter la recherche avec filtres

> Filtres carousel : Nos inspirations / Multiactivités
> Mettre compteur carousel (+ si poss nprogress)
> Anim survol boutons carousel
> Icone dynamique sur la card + voir XD pour les changements card

> Lien home dans la navbar
> Version dark du dropdown connection
> Tag nb de médias
> Lightbox du product header => pouvoir voir tout l'album
> Bug overscroll chat
> Remplacer les boutons par le composant button donc ac fading etc ("détails et recherche")
> Prendre comme référence de flexbox les mentions "les + du spot" à appliquer à "tu vas adorer"
> Séparer les services en options des inclus/exclus
> Voir new design activité principale sur XD
> Mot du cuisinier rajouter les mentions + enlever tabs pr le moment
> Modal product zone blanche + large

> Revoir le header recherche de façon générale avec mention dernière place
> Centrer la shadow sur le filtre pour renforcer le contour
> Hover du actualités : afficher les 3 articles dedans (avec fond blanc)
> Rajouter "+ 15€ de frais de gestions" après checkbox card dans checkout
> autoriser les GET de message
> régler le firstname au dessus des cards

> hover sur les 3 filtres recherche
> rajouter des marges sur le footer quand grand ecran
> quand 0 sessions ne pas rendre les sessions cliquables
> créer modal de contact accessible via créer une session/je privatise/bouton sur le mois
> rajouter titre sur programme "jour 1" "jour 2" etc


- voir version pad sur le- bouton créer session en dark/pink, pareil pour privatise scroll
- boolean cours actif / pas actif
- "veuillez consulter sur portable ou ordi :)"
- friendly Id
- ordre des items dans le dashboard
- liens des cards vers /checkout sur page request
- picto dynamique sur le search
- fading sur card dans recherche
- virer city et region
- Dans activités incluses séparer le prix à droite (cf XD)
- Compteur à mettre à gauche sur slider hébergement + autoplay
- Revoir si les cards sont corrects (devis/normal/dernière place)
- Mettre les label
- Liserets plus léger et revoir les typo du prix + ponctuations
- et reprendre un bouton blanc/bg-dark en full largeur en dessous pour accéder au blog
- scroll des filtres pareil que connection
- fixer fade du splash
- dyanmiser icons niveaux dans mentions
- fade sur les filtres search home + décalage hover/liseret
- fading sur les modals de connexion
- virer calendy
- autoplay sur les photos
- bouton réserver + grand
- pas de scale sur le header en venant d'une modale

> IMPORTANT : valider le signup à la fin de tout le formulaire pour qu'il n'y ait pas d'update tant que l'user n'est pas validé par mail
> IMPORTANT : revoir les navIsActive ActivitiesIsActive etc.
> routes login/signup/password/infos

> back sur paiement
> revoir le système de backing (perte de données)
> prix dynamique du checkout
> dropdown
> programme descriptif produit
> desactiver la sticky sur search / update l'url
> elargir contenaire des filtres et opacité sur 1 (pas de diffusion mais liseret)
> voir sms filtre dark
> filtres dernières places/confirmés
> ajouter equipment rental price

7/09
> "e-mail" sans "adresse"
> course.duration => session.duration
> total de la réservation: breaker après "de"
> largeur min du prix total pr pas qu'il bouge
> rajouter flèche sur "retour" checkout
> hauteur du bouton retirer
> bouton réserver max-width: 280
> mettre prix sur la session et l'enlever de course
> conditionner || avatar-empty

BUG
- version grise du dropdown sur produit
- lancer l'anim fullscreen en cas de rechargement des infos
- voir les valeurs de sorties de l'anim car bug en resize

TODO
- cards (voir sms)
- WISHLIST!!!
- FAIRE LE LIEN AVEC LA SESSION DS LE BOOKING

NOTE
- dropdown up rajouter fading
- text dynamique sélectionne une vignette quand pas logué


6/09
> mentions inverser le gras
> pas la version grise
- style du bouton dans la modal
> copier les bons styles d'input dans modal contact
- rajouter bouton toutes les thématiques dans la recherche

5/09
> scroll top sur insurance
> continuer avec la résa de "X" bug
> opacité avatar
> taille des avatars

GLOBAL
- input largeur max
- liens
- pluriels