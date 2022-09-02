FROM node:14-alpine

RUN npm install --global json-server
WORKDIR /stubs
COPY . .

ENTRYPOINT ["json-server"]
