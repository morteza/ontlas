#!/bin/bash

# This is just a script for development.
ONTLAS_VERSION=0.0.1

# Run maven for the latest compiled jar file.
mvn clean package
# mvn vertx:hot

# java -jar ./target/ontlas-$ONTLAS_VERSION-fat.jar -conf src/main/resources/config.json

# Automatically read config.json from embedded resources.
java -jar ./target/ontlas-$ONTLAS_VERSION-fat.jar
