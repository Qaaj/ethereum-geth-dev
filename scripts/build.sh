#!/usr/bin/env bash
docker build --build-arg NETWORK_ID=144 -t mordhau/ethereum-geth-dev .
