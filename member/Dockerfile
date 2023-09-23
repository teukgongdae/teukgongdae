FROM gradle:7.4-jdk17-jammy AS build

WORKDIR /apps

USER root

COPY build.gradle .
COPY settings.gradle .
COPY gradlew .

# RUN gradle build -x test > /dev/null 2>&1

RUN ./gradlew clean build --exclude-task test

COPY . .

FROM openjdk:17-buster

WORKDIR /apps

COPY --from=build /apps/build/libs/member-0.0.1-SNAPSHOT.jar .

EXPOSE 8000

ENTRYPOINT [ "java", "-jar", "-Djava.security.egd=file:/dev/./urandom", "-Dsun.net.inetaddr.ttl=0", "member-0.0.1-SNAPSHOT.jar" ]