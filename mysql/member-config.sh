#!/bin/bash

cd /docker-entrypoint-initdb.d

systemctl start mysql

mysql < member.sql

mysql -u root

ALTER USER 'root'@'localhost' IDENTIFIED BY '${MEMBER_DB_ROOT_PASSWORD}';