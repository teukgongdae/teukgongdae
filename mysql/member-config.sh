#!/bin/bash

cd /docker-entrypoint-initdb.d

systemctl start mysql

mysql < member.sql



# mysql -u root

## + DB root password configuration
## + if create other user, need to block root user not to access