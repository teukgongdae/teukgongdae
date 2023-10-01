FROM ubuntu:22.04

ENV ETCD_VER=v3.4.27

ENV GITHUB_URL=https://github.com/etcd-io/etcd/releases/download
ENV DOWNLOAD_URL=${GITHUB_URL}

RUN rm -f /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz
RUN rm -rf /tmp/etcd-download-test && mkdir -p /tmp/etcd-download-test

RUN apt update
RUN apt install curl -y

RUN curl -L ${DOWNLOAD_URL}/${ETCD_VER}/etcd-${ETCD_VER}-linux-amd64.tar.gz -o /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz
RUN tar xzvf /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz -C /tmp/etcd-download-test --strip-components=1
RUN rm -f /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz

RUN mv /tmp/etcd-download-test/* /usr/local/bin/

# /tmp/etcd-download-test/etcd --version
# /tmp/etcd-download-test/etcdctl version

# ENTRYPOINT [ "/tmp/etcd-download-test/etcd" ]
ENTRYPOINT [ "etcd" ]