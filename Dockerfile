# ---- Build ----
FROM node:22-alpine AS builder

WORKDIR /app

# Dependencias
COPY package.json package-lock.json ./
RUN npm ci

# Código y build
COPY . .
RUN npm run build

# ---- Production ----
FROM nginx:alpine

# Configuración nginx para SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar artefactos de build desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
