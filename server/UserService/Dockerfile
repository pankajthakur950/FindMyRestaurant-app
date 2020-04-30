FROM node:alpine

WORKDIR ./UserService

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]