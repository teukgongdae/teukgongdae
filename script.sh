#!/bin/bash

echo "script start time..."
date

kind create cluster --config ./manifests/kindconfig.yml

sleep 20

kubectl create namespace istio-system
kubectl create namespace devops-system

kubectl apply -f ./manifests/istioconfig.yml

kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.18/samples/addons/kiali.yaml 
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.18/samples/addons/grafana.yaml
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.18/samples/addons/prometheus.yaml
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.18/samples/addons/jaeger.yaml


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

kind load docker-image mysql-member:tgd
kind load docker-image mysql-golang:tgd
kind load docker-image frontend:tgd
kind load docker-image golang:tgd
kind load docker-image golang2:tgd
kind load docker-image member:tgd

kubectl label namespace default istio-injection=enabled

cd ../manifests

kubectl apply -f pv.yml
kubectl apply -f pvc.yml

kubectl apply -f https://github.com/rabbitmq/cluster-operator/releases/latest/download/cluster-operator.yml
kubectl apply -f rabbitmq.yml

kubectl apply -f mysql-member.yml
kubectl apply -f mysql-golang.yml

kubectl apply -n devops-system -f argocd.yml
kubectl apply -f jenkins.yml
sleep 30

kubectl apply -f vs-istiosystem.yml
kubectl apply -f vs-default.yml
kubectl apply -f frontend.yml
kubectl apply -f golang.yml
kubectl apply -f golang2.yml
kubectl apply -f member.yml
sleep 30

# FOR ARGOCD INITIAL PASSWORD
# kubectl -n devops-system get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d 

echo "script end time..."
date