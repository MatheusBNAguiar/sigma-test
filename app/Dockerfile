FROM node:16.17-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install 

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf /usr/share/nginx/html/*

COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
