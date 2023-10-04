FROM openjdk:17-buster

WORKDIR /app

COPY . /app

EXPOSE 8000

ENTRYPOINT [ "sh", "./hotreload.sh" ]

# --- PROD
# FROM gradle:7.4-jdk17-jammy AS build

# RUN apt update && apt install openjdk-17-jdk -y

# WORKDIR /app

# RUN chmod +x /app -R

# COPY build.gradle /apps
# COPY settings.gradle /apps
# COPY gradle gradle

# RUN gradle build -x test --continue > /dev/null 2>&1 | true

# COPY . /app

# RUN gradle build -x test

# RUN useradd -ms /bin/bash member

# USER member

# WORKDIR /app/build/libs

# EXPOSE 8000

# ENTRYPOINT [ "java", "-jar", "-Djava.security.egd=file:/dev/./urandom", "-Dsun.net.inetaddr.ttl=0", "member-0.0.1-SNAPSHOT.jar" ]