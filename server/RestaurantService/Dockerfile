FROM node:alpine

WORKDIR ./RestaurantService

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]