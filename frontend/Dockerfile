FROM ubuntu:22.04 AS build

USER root

RUN apt-get update

RUN apt-get install npm -y

WORKDIR /app

ADD package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm",  "run", "start" ]