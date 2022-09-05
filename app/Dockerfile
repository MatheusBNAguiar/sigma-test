FROM node:14-alpine as builder

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /react-ui && mv ./node_modules ./react-ui
RUN ls
WORKDIR /react-ui

COPY . .

RUN npm run build

FROM nginx:alpine

COPY ./default.conf /etc/nginx/conf.d/default.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /react-ui/dist /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
