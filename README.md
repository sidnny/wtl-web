# Women Tech Leaders website

## Running in production
For a clean start run `./init-letsencrypt.sh` otherwise all you need is `docker-compose up`.

## Installation
`npm i`

## Start the server
`npm start`

## Using Docker

### Build and tag the docker image
`docker-compose build -d` or `docker-compose -f docker-compose-dev.yml build`

### Build the docker container
`docker-compose up -d` or `docker-compose -f docker-compose-dev.yml up`

### Build a running container
`docker-compose up --build -d` or `docker-compose -f docker-compose-dev.yml up --build`

### List all containers
`docker ps`

### Stop container
`docker stop {CONTAINER_ID}`

### Remove the stopped container and all of the images, including unused and dangling images
`docker system prune -a`

### To rebuild an image
`docker-compose build` or `docker-compose up --build`

### To restart a running container
`docker-compose restart nodejs`
