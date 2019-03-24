FROM node:10-alpine

RUN mkdir -p /home/node/www/node_modules && chown -R node:node /home/node/www

WORKDIR /home/node/www

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

# CMD [ "npm", "start" ]
