#!/bin/bash

kind create cluster --config ./manifests/kindconfig.yml

kubectl create namespace istio-system

kubectl apply -f ./manifests/istioconfig.yml

kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.18/samples/addons/kiali.yaml 

kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.18/samples/addons/grafana.yaml

kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.18/samples/addons/prometheus.yaml

kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.18/samples/addons/jaeger.yaml

kubectl apply -f ./manifests/istiosystem.yml

kubectl label namespace default istio-injection=enabled

