#!/bin/sh

nohup ./gradlew --continuous compileJava &

./gradlew bootRun