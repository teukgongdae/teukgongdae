FROM gradle:7.4-jdk17-jammy AS build

RUN apt update && apt install openjdk-17-jdk -y

WORKDIR /apps

RUN chmod +x /apps -R

COPY build.gradle /apps
COPY settings.gradle /apps
COPY gradle gradle

RUN gradle build -x test --continue > /dev/null 2>&1 | true

COPY . /apps

RUN gradle build -x test

# RUN useradd -ms /bin/bash member

# USER member

WORKDIR /apps/build/libs

EXPOSE 8000

ENTRYPOINT [ "java", "-jar", "-Djava.security.egd=file:/dev/./urandom", "-Dsun.net.inetaddr.ttl=0", "member-0.0.1-SNAPSHOT.jar" ]