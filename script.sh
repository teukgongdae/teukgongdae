#!/bin/bash

echo "script start time..."
date

# create external HA etcd cluster
cd etcd
docker-compose up --build -d
cd ..

# create KIND cluster
kind create cluster --config ./manifests/kindconfig.yml

sleep 20

# deploy istio service mesh
kubectl create namespace istio-system
kubectl apply -f ./manifests/istioconfig.yml
kubectl label namespace default istio-injection=enabled

# deploy monitoring, tracing tools
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.18/samples/addons/kiali.yaml 
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.18/samples/addons/grafana.yaml
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.18/samples/addons/prometheus.yaml
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.18/samples/addons/jaeger.yaml
# kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.13.0/cert-manager.yaml

# build application container images
cd frontend
docker build -t frontend:tgd .
cd ../golang
docker build -t golang:tgd .
cd ../golang2
docker build -t golang2:tgd .
cd ../mysql
docker build -t mysql-member:tgd -f Dockerfile.member .
docker build -t mysql-golang:tgd -f Dockerfile.golang .
cd ../member
docker build -t member:tgd .

# load container images to KIND cluster
kind load docker-image mysql-member:tgd
kind load docker-image mysql-golang:tgd
kind load docker-image frontend:tgd
kind load docker-image golang:tgd
kind load docker-image golang2:tgd
kind load docker-image member:tgd


cd ../manifests

# deploy kubernetes resources
kubectl apply -f pv.yml
kubectl apply -f pvc.yml
kubectl apply -f security/sa.yml
kubectl apply -f security/ap.yml

# deploy applications 
kubectl apply -f https://github.com/rabbitmq/cluster-operator/releases/latest/download/cluster-operator.yml
kubectl apply -f rabbitmq.yml
kubectl apply -f mysql-member.yml
kubectl apply -f mysql-golang.yml
kubectl create namespace devops-system
kubectl apply -n devops-system -f argocd.yml
sleep 30
kubectl apply -f security/vs-istiosystem.yml
kubectl apply -f security/vs-default.yml
kubectl apply -f frontend.yml
kubectl apply -f golang.yml
kubectl apply -f golang2.yml
kubectl apply -f member.yml
sleep 30

# FOR ARGOCD INITIAL PASSWORD
# kubectl -n devops-system get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d 

echo "script end time..."
date