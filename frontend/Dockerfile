FROM ubuntu:22.04
# FROM ubuntu:22.04 AS build

RUN apt-get update && apt-get install npm -y

RUN useradd -ms /bin/bash react

WORKDIR /app

ADD package.json .
ADD package-lock.json .

RUN npm install

COPY . .

RUN chown react:react /app -R

EXPOSE 3000

ENV WDS_SOCKET_PORT=0

USER react

CMD [ "npm",  "run", "start" ]