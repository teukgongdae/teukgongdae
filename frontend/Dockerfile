FROM ubuntu:22.04

USER root

RUN apt-get update

RUN apt-get install npm -y

WORKDIR /app

ADD package.json .

RUN npm install

EXPOSE 3000

COPY . .

CMD ["npm", "run", "start"]