#!/bin/bash
docker pull ghcr.io/simplyedit/simplycode-docker:main
docker run --interactive --rm --tty --volume "${PWD}:/var/www/www/api/data" --env "USER_ID=$(id -u)" --env "USER_GID=$(id -g)" ghcr.io/simplyedit/simplycode-docker:main
