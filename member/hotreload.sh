#!/bin/sh

echo "dsfaef"

nohup ./gradlew --continuous compileJava &

./gradlew bootRun