FROM node:12-alpine

RUN npm install --global json-server
WORKDIR /stubs
COPY . .

ENTRYPOINT ["json-server"]
