# FROM ubuntu:22.04 AS build

# USER root

# RUN apt-get update

# RUN apt-get install npm -y

FROM node:16-alpine

WORKDIR /app

ADD package.json .
ADD package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

ENV WDS_SOCKET_PORT=0

CMD [ "npm",  "run", "start" ]