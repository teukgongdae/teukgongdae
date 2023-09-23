# FOR MACOS

FROM ubuntu:22.04

USER root

RUN apt-get update

RUN apt-get install npm -y

WORKDIR /app

ADD package.json .
ADD package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

ENV WDS_SOCKET_PORT=0

CMD [ "npm",  "run", "start" ]


# FOR WINDOW

# FROM node:16-alpine AS build

# WORKDIR /app

# COPY package.json .
# COPY package-lock.json .

# RUN npm install

# COPY . .

# RUN npm run build

# FROM nginx

# EXPOSE 3000

# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# COPY --from=build /app/build /usr/share/nginx/html