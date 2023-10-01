FROM gradle:7.4-jdk17-jammy AS build

WORKDIR /apps

COPY build.gradle /apps
COPY settings.gradle /apps
COPY gradle gradle

RUN gradle build -x test --continue > /dev/null 2>&1 | true

COPY . /apps

RUN gradle build -x test

FROM openjdk:17-buster

WORKDIR /app

RUN useradd -ms /bin/bash member

RUN chmod +x /app -R

USER member

COPY --from=build /apps/build/libs/member-0.0.1-SNAPSHOT.jar .

EXPOSE 8000

ENTRYPOINT [ "java", "-jar", "-Djava.security.egd=file:/dev/./urandom", "-Dsun.net.inetaddr.ttl=0", "member-0.0.1-SNAPSHOT.jar" ]