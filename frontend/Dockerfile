FROM ubuntu:22.04
# FROM ubuntu:22.04 AS build

RUN apt-get update && apt-get install npm -y

WORKDIR /app

ADD package.json .
ADD package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

ENV WDS_SOCKET_PORT=0

USER nobody

CMD [ "npm",  "run", "start" ]
# CMD [ "npm",  "run", "build" ]

# FROM nginx

# EXPOSE 3000

# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# COPY --from=build /app/build /usr/share/nginx/html