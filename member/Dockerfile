FROM gradle:7.4-jdk17-jammy AS builder

WORKDIR /build

USER root

COPY build.gradle settings.gradle /build/

RUN gradle build -x test --parallel --continue > /dev/null 2>&1 || true

COPY . /build

RUN gradle build -x test --parallel

FROM openjdk:17-buster

WORKDIR /app

COPY --from=builder /build/build/libs/member-0.0.1-SNAPSHOT.jar .

EXPOSE 8080

ENTRYPOINT [ "java", "-jar", "-Djava.security.egd=file:/dev/./urandom", "-Dsun.net.inetaddr.ttl=0", "member-0.0.1-SNAPSHOT.jar" ]