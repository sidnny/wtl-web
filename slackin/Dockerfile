FROM node:6.11-slim

RUN mkdir -p /home/node/slackin/node_modules && chown -R node:node /home/node/slackin

WORKDIR /home/node/slackin

COPY package*.json ./

USER node

RUN npm install --unsafe-perm

COPY --chown=node:node . .

EXPOSE 3001

CMD ["npm", "start"]
