FROM ubuntu:22.04

RUN apt update && apt install wget -y && apt install systemctl -y

WORKDIR /usr/local

RUN wget https://github.com/etcd-io/etcd/releases/download/v3.4.26/etcd-v3.4.26-linux-amd64.tar.gz

RUN tar xvf etcd-v3.4.26-linux-amd64.tar.gz

RUN mv /usr/local/etcd-v3.4.26-linux-amd64/etcd /usr/local/bin
RUN mv /usr/local/etcd-v3.4.26-linux-amd64/etcdctl /usr/local/bin

RUN mkdir /var/lib/etcd

RUN groupadd --system etcd

RUN useradd -s /sbin/nologin --system -g etcd etcd

RUN chown -R etcd:etcd /var/lib/etcd/

COPY ./etcd.service /etc/systemd/system/etcd.service

RUN systemctl stop etcd.service

USER etcd

ENTRYPOINT [ "systemctl", "start", "etcd.service" ]