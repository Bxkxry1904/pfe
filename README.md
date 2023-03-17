# Projet PFE

## Démarrer le projet en local

### Pré-recquis
- NodeJS

### Installer les dépendances
 `npm i`

 ### Démarrer le serveur
`npm run start`

### Accéder à l'application 

localhost:3000


## Demarrer le projet dans un conteneur Docker

### Pré-recquis
- Docker

### Create image
`docker build -t pfe_app:latest .`

### Demarrer le conteneur en donnant un nom bien specific a notre conteneur

`docker run -d -p 8080:80 --name pfe_app_container pfe_app:latest`