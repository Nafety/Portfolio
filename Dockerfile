# Étape 1 : build de l'application
FROM node:20-alpine AS builder

WORKDIR /app

# Copie des fichiers package.json et package-lock.json
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Étape 2 : serveur Nginx
FROM nginx:alpine

# Copie du build
COPY --from=builder /app/dist /usr/share/nginx/html

# Copie de la config Nginx pour SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposition du port 80 (on mappe ensuite sur 5002 côté hôte)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
