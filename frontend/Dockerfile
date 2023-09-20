FROM ubuntu:22.04 AS build

USER root

RUN apt-get update

RUN apt-get install npm -y

WORKDIR /app

ADD package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html