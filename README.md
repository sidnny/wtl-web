# Women Tech Leaders website

## Installation
`npm i`

## Start the server
`npm start`

## Using Docker

### Build and tag the docker image
`docker build -t wtl-nyc .`

### Build the docker container
`docker run --name wtl-nyc -p 3000:3000 -d wtl-nyc`

### List all containers
`docker ps`

### Stop container
`docker stop {CONTAINER_ID}`

### Remove the stopped container and all of the images, including unused and dangling images
`docker system prune -a`
