#!/bin/bash

ONTLAS_VERSION=0.0.1

# Run maven for the latest compiled jar file.
mvn clean package

# java -jar ./target/ontlas-$ONTLAS_VERSION-fat.jar -conf src/main/resources/config.json

# Automatically read config.json from embedded resources.
java -jar ./target/ontlas-$ONTLAS_VERSION-fat.jar
