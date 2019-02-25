# Women Tech Leaders website

## Installation
`npm i`

## Start the server
`npm start`

## Using Docker

### Build and tag the docker image
`docker-compose build` or `docker-compose -f docker-compose-dev.yml build`

### Build the docker container
`docker-compose up` or `docker-compose -f docker-compose-dev.yml up`

### List all containers
`docker ps`

### Stop container
`docker stop {CONTAINER_ID}`

### Remove the stopped container and all of the images, including unused and dangling images
`docker system prune -a`

### To rebuild an image
`docker-compose build` or `docker-compose up --build`
