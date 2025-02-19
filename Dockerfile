FROM node:22.13.0

WORKDIR /usr/src/app

COPY package*.json ./

CMD ["npm", "run", "start:dev"]
