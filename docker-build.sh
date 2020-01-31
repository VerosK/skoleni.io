#!/bin/sh

export DOCKER_BUILDKIT=1
for SITE in $(cat sites.txt)
do
docker build -t registry.sikahq.com/www/www/$SITE --build-arg SITE=$SITE .
done
