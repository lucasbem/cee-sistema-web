### STAGE 1: Build ###
FROM node:12.20.0-alpine AS builder

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install --silent

COPY . .
RUN npm run build --prod

### STAGE 2: Run ###
FROM nginx:1.15.8-alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
