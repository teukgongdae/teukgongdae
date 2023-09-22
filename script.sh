#!/bin/bash

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


# object deployments

cd frontend
docker build -t frontend:tgd .

cd ../golang
docker build -t golang:tgd .

cd ../mysql
docker build -t mysql-member:tgd -f Dockerfile.member .

kind load docker-image frontend:tgd
kind load docker-image golang:tgd
kind load docker-image mysql-member:tgd

cd ../manifests

kubectl apply -f vs-istiosystem.yml
kubectl apply -f vs-default.yml
kubectl apply -f pv.yml
kubectl apply -f pvc.yml
kubectl apply -f frontend.yml
kubectl apply -f mysql-member.yml
kubectl apply -f golang.yml
kubectl apply -f jenkins.yml