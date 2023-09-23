#!/bin/bash

echo "script start time..."
date

kind create cluster --config ./manifests/kindconfig.yml

sleep 20

kubectl create namespace istio-system
kubectl create namespace devops-system

kubectl apply -f ./manifests/istioconfig.yml # not use istioctl but manifest to configure ingress gateway service as NodePort

kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.18/samples/addons/kiali.yaml 
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.18/samples/addons/grafana.yaml
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.18/samples/addons/prometheus.yaml
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.18/samples/addons/jaeger.yaml


cd frontend
docker build -t frontend:tgd .
cd ../golang
docker build -t golang:tgd .
cd ../mysql
docker build -t mysql-member:tgd -f Dockerfile.member .

kind load docker-image mysql-member:tgd
kind load docker-image frontend:tgd
kind load docker-image golang:tgd

kubectl label namespace default istio-injection=enabled

cd ../manifests

kubectl apply -f vs-istiosystem.yml
kubectl apply -f vs-default.yml
kubectl apply -f pv.yml
kubectl apply -f pvc.yml
kubectl apply -f frontend.yml
kubectl apply -f mysql-member.yml
kubectl apply -f jenkins.yml
kubectl apply -f golang.yml
kubectl apply -n devops-system -f argocd.yml # use manifest to configure NodePort for argoCD Web Dashboard

# FOR ARGOCD INITIAL PASSWORD
# kubectl -n devops-system get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d 

echo "script end time..."
date