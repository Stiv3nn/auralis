# STAGE 1: Build dell'applicazione React
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# STAGE 2: Servire i file statici con Nginx
FROM nginx:alpine

# Copia la configurazione personalizzata di Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia i file compilati dallo Stage 1 dentro la cartella pubblica di Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Esponi la porta 80 per il traffico Web
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]