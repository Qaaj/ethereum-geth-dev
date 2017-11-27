// Remove untagged docker images
docker rmi $(docker images | grep "^<none>" | awk "{print $3}")