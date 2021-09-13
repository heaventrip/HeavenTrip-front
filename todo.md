# home
> ouvrir connexion menu au hover + rotate icon
> animatique externe des cards @mousevents
>>> animatique des reviews
> animatique interne des cards

> ajouter fading sur les apparitions
> revoir les liens
> gérer les transis ENTRE items et enlever le trou entre les items + voir bottom bar 66deg (aspect continu sans saut)

# product
> GEOFF textarea qui sort du cadre sur petit écran

> textarea ajouter bouton envoyer
> lightbox
> (- formulaire créer session module booking (sur mois sans session ou ac sessions complètes))

### IMPERATIF V1 ###
> gérer les transitions et chargements de pages/composants etc.
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


> bouton réserver + grand
> picto dynamique sur le search
> Liserets plus léger et revoir les typo du prix + ponctuations
- voir version pad sur le- bouton créer session en dark/pink, pareil pour privatise scroll
- boolean cours actif / pas actif
- "veuillez consulter sur portable ou ordi :)"
- friendly Id
- ordre des items dans le dashboard
- liens des cards vers /checkout sur page request
- fading sur card dans recherche
- virer city et region
- Dans activités incluses séparer le prix à droite (cf XD)
- Compteur à mettre à gauche sur slider hébergement + autoplay
- Revoir si les cards sont corrects (devis/normal/dernière place)
- Mettre les label
- et reprendre un bouton blanc/bg-dark en full largeur en dessous pour accéder au blog
- scroll des filtres pareil que connection
- fixer fade du splash
- dyanmiser icons niveaux dans mentions
- fade sur les filtres search home + décalage hover/liseret
- fading sur les modals de connexion
- virer calendy
- autoplay sur les photos
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

5/09
> scroll top sur insurance
> continuer avec la résa de "X" bug
> opacité avatar
> taille des avatars

6/09
> mentions inverser le gras
> pas la version grise
- style du bouton dans la modal
> copier les bons styles d'input dans modal contact
> rajouter bouton toutes les thématiques dans la recherche

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

8/09
> si payer par virement "confirmer ma réservation"
> si payer par carte "je veux procéder au paiement"
> passer le filtre thématique en haut
- card dernière place bandeau à passer en noir
- pictos des filtres

BUG
> wishlist refaire le composant
> version grise du dropdown sur produit
> lancer l'anim fullscreen en cas de rechargement des infos
> voir les valeurs de sorties de l'anim car bug en resize

TODO
> cards (voir sms)
> bouton se connecter
> WISHLIST!!!
> le spinner recherche qui décale
> dynamiser le delete d'un wishlist
> enlever les hover sur les wishlists

GEOFF?
- bug logo heaventrip signup
- bouton témoignage
- page paiement + hover avatars

TODO
- cards
- voir ce qui est autorisé en logué ou pas
- bloquer login après header product (router le header et le contenu)
- FAIRE LE LIEN AVEC LA SESSION DS LE BOOKING
- lister les résas
- recheck module booking
- bloquer flèches des cards quand on arrive au bout
> tags pas fixés
- au dessus du liseret : 1rem + 20px / en dessous du lisert : 20px
- hover du svg infos sanitaire
> déclenchement du hover de la nav plus proche du texte du bouton

BACK
- unicité des wishlist
- sauvegarde db
- validations
- dependent destroy
- mails
- newsletter

FIXME
> 26px sur icone product
> icone tab product en bg blanc
> majuscule
> 0.2 partout
> div en dessous de mot du pro

PRODUCT
> border top sur activités en options
> hover photo recherche
> grille des niveaux + bouton pointer
> pouvoir faire entrer ds recherche

CARDS
> padding top 3 rem entre card et barre au dessus
> décaler les tabs vers la droite légèrement (le double)
> card un peu plus resserrées
> width a 70 height a 65 coeur margin a 19
> coeur pas rouge mais filled si intéressé
> tous nos stages vers la droite un peu plus

CHECKOUT
> 46px avatar bloc gris checkout
> virer modifier quand il est cliqué sur checkout booker
> passer le nb de participants au checkout a partir du prebooking
> revoir le bouton modifier dans assurance
> "facultatif..." dans info a savoir dans checkout
> scroll de infos à savoir scroller jusqu'en bas de la page pr voir les boutons


> voir les inputs du checkout name
> voir "je ne souhaite pas d'autres activités"
> select des pays
> homme femme obligatoire
> erreurs champs
> bug mauvais avatar dans inline avatar
> restyliser les wishlists

NOTE
- dropdown up rajouter fading
- text dynamique sélectionne une vignette quand pas logué

GLOBAL
- input largeur max
- liens
- pluriels
