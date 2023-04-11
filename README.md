# INFRAS-MAP - V1.0.0

## Description
Infras-map est un petit projet React TS qui utilise la librairie Mapbox pour proposer un service semblable à un annuaire en ligne de coordonnées d'entreprises.

Réalisé en 3 jours dans le but d'en apprendre plus sur le framework rapidement, j'ai l'ambition de pousser ce projet un peu plus loin en faisant quelques mises à jour à la volée (à suivre dans les branches de dev 1.X.X ou dans l'historique des patchs).


## Explications

### Installation et lancement
Pour utiliser Infras-map, rien de plus simple. Clonez d'abord le repo sur votre machine, et dans le répertoire du projet (là où se trouvent des fichiers comme package.json, etc.), exécutez la commande ```npm run start```.

Une fois sur l'application (qui a du s'ouvrir automatiquement à l'adresse ```localhost:3000```), vous y verrez une carte et une liste à la droite de celle-ci. Deux entreprises y sont par défaut ajoutées.

### Trouver sa position
Sur la carte, dans le coin haut-droit, se trouve un petit bouton ressemblant à ceci :

![image](https://user-images.githubusercontent.com/76454484/231143632-0d16af87-a471-4abd-b42a-6ebcf732c834.png)

Cliquez dessus pour déplacer la vue sur la position gps renvoyée par votre navigateur (ne vous étonnez pas de vous retrouver ailleurs que vous n'êtes réellement si vous utilisez un VPN ;) ).

### Ajouter une entreprise
Pour ajouter une entreprise, vous pouvez cliquer sur la carte afin de pointer directement l'emplacement de cette première. Vous verrez que les champs ```latitude``` et ```longitude``` sont remplis automatiquement, en fonction d'où vous avez cliqué. Ajoutez ensuite un nom dans le formulaire (obligatoire) et même une description si vous le souhaitez. Cliquez sur enregistrer et voilà.

Votre nouvelle entreprise apparaît tantôt dans la liste, tantôt sur la carte, là où vous aviez cliqué.

Vous pouvez également ajouter une entreprise via le bouton ```Ajouter``` situé sous la liste, mais attention, les champs ```latitude``` et ```longitude``` auront comme valeur initiale 0. Il vous faudra donc connaître les coordonnées exactes pour les ajouter au formulaire (elles peuvent être récupérées via Google Maps comme cette documentation l'explique : https://support.google.com/maps/answer/18539?hl=en&co=GENIE.Platform%3DDesktop).

### Voir les informations d'une entreprise
Vous pouvez consulter les informations enregistrées d'une entreprise simplement en cliquant sur son nom dans la liste, ou bien en cliquant sur le pin qui lui correspond sur la carte.


### FAQ
#### Comment je fais pour supprimer/éditer une entreprise ?
Pour l'heure la fonctionnalité n'est pas disponible, mais elle le sera dans une des prochaines mises à jour prévues.

#### Pourquoi quand je change de navigateur/PC, je n'ai plus ma liste d'entreprises ?
Infras-map sauvegarde la liste des entreprises en "LocalStorage", ce qui signifie qu'il enregistre les informations de votre liste sur votre navigateur actuel. Si vous passez de Chrome à Firefox, ce dernier n'aura donc pas les mêmes informations que le premier. Vous pourriez donc avoir deux listes différentes sur deux navigateurs différents, et cela vaut pareil si vous changez de PC.
Peut-être qu'un jour, j'intègrerai un stockage sur serveur avec un système de connexion et de compte utilisateur, mais pour l'heure je ne peux m'en occuper.

#### L'application est-elle utilisable sur mobile ?
Pas vraiment, car l'ensemble de l'application est par défaut responsive (c'est à dire qu'elle réagit assez bien sur des tailles différentes d'écran), mais si vous possédez un mobile avec moins de 680px de large, votre expérience d'utilisation pourrait être plus complexe.
Heureusement, cette note fait partie des prochaines mises à jour de l'application.
