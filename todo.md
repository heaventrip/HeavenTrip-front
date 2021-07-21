# front
- rgpd => vue cookies
- nullify unselected sess
- add trippers inscrits session
- espace profil
- dynamisme des cards

# back
- join table course_id | sport_id | | level_id | description1:text |  description2:text |  description3:text

__________

BUG
- entre clique sur agence et clique bouton recherche (photo agrandie et module disparait)
- checkout booker prochain encart déjà sélectionné?
- changements d'URLs avec suivant/précédent => voir router history pb? (par ex précédent à partir du checkout ramène sur product)

# general
- tooltips
- erreurs "tomato"

# home
- animatique interne des cards
- animatique des reviews
- ouvrir connexion menu au hover + rotate icon
- search module, si etiquettes faire slider tout le module vers le haut pour tout afficher au dessus ligne flottaison
  + rajouter titre mes filtres + hover sur les etiquettes pour les detete
  + Import method de filtres qui se grisent en fonction de la recherche 
  + resultats rendre dynamique
- Module inline avatar si deja interessé txt : Je fais parti des 20 intéressés
- Mettre à jour filtre card (home) : Nouveautés - Prochains départs - Multi-activités
  + gerer hover des filtres + des cards (transition...) au changement des filtres
  + gerer hover des BTN prev / next  idée : slider l'arrow + opacity sur le circle exterieur
- Coup de coeur : rajouter bordures blanches   


# nav
- nav à équilibrer
- nav bars à réaligner
- ajouter fading sur les apparitions
- revoir les liens
- gérer les transis ENTRE items et enlever le trou entre les items + voir bottom bar 66deg (aspect continu sans saut)

# product
- textarea qui sort du cadre sur petit écran
- textarea ajouter bouton envoyer
- remplacer les curseurs swiper par les notres
- formulaire créer session module booking (sur mois sans session ou ac sessions complètes)

### IMPERATIF V1 ###
- mécanique intégration des photos selon tags
- résolution des URLs
- google analytics + adwords
- page profile minimale
- spinner sur recherche et autres endroits le nécessitant
- gérer les transitions et chargements de pages/composants etc.
- gestion des origines pour mailerlite (newsletter, signup, wishlist, etc)
- mail transacs : bienvenue / confirmation de mail / confirmation de résa / confirmation de départ OU infirmation de départ