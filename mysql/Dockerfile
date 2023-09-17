FROM mysql:8.1

COPY ./scripts/my.cnf ./etc/mysql/conf.d/my.cnf

COPY ./scripts/initialize.sql /docker-entrypoint-initdb.d/