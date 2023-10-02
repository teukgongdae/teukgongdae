FROM ubuntu:22.04

RUN apt update && apt install haproxy -y

RUN apt install systemctl -y

COPY ./haproxy.cfg /etc/haproxy/haproxy.cfg

RUN systemctl stop haproxy.service

ENTRYPOINT [ "systemctl", "start", "haproxy.service" ]
# ENTRYPOINT [ "systemctl", "reload", "haproxy.service" ]