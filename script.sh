#!/bin/bash

echo "script start time..."
date

kind create cluster --config ./manifests/kindconfig.yml

kubectl create namespace istio-system
kubectl create namespace devops-system

kubectl apply -f ./manifests/istioconfig.yml

kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.18/samples/addons/kiali.yaml 

kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.18/samples/addons/grafana.yaml

kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.18/samples/addons/prometheus.yaml

kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.18/samples/addons/jaeger.yaml

kubectl apply -f ./manifests/istiosystem.yml

kubectl label namespace default istio-injection=enabled

sleep 10

# object deployments

cd frontend
docker build -t frontend:tgd .

cd ../golang
docker build -t golang:tgd .

cd ../mysql
docker build -t mysql-member:tgd -f Dockerfile.member .

kind load docker-image mysql-member:tgd
sleep 10

kind load docker-image frontend:tgd
sleep 10

kind load docker-image golang:tgd
sleep 10

cd ../manifests

kubectl apply -f vs-istiosystem.yml
sleep 10

kubectl apply -f vs-default.yml
sleep 10

kubectl apply -f pv.yml
sleep 10

kubectl apply -f pvc.yml
sleep 10

kubectl apply -f frontend.yml
sleep 20

kubectl apply -f mysql-member.yml
sleep 20

kubectl apply -f jenkins.yml
sleep 20

kubectl apply -f golang.yml
sleep 20

# ArgoCD for PROD
# kubectl apply -n devops-system -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

echo "script end time..."
date