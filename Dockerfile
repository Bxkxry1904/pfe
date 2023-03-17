#etape 1: compilation et construction de l'application

# On part d'une image node
FROM node:latest as node
# On defitinit le repertoire de travail
WORKDIR /app
# On copie le code dans le container
COPY . .
# Installation des dependances
RUN npm install
# Generation du bundle de l'application
RUN npm run build

#etape 2: Deploiement de l'application

# On part d'une image nginx
FROM nginx:alpine

# Deploiement du bundle dans le serveur nginx
COPY --from=node /app/build /usr/share/nginx/html

# On expose le port 80
EXPOSE 80
