# Women Tech Leaders website

## Installation
`npm i`

## Start the server
`npm start`

## Using Docker

### Build and tag the docker image
`docker build -t wtl .`

### Build the docker container
`docker run --name wtl -p 80:8080 -d sidnny/wtl`

### List all containers
`docker ps`

### Stop container
`docker stop {CONTAINER_ID}`

### Remove the stopped container and all of the images, including unused and dangling images
`docker system prune -a`

### To rebuild an image
`docker-compose build` or `docker-compose up --build`
