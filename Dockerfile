FROM node:11.8.0-alpine

WORKDIR /app
COPY . .

RUN npm i -g yarn
RUN yarn
RUN yarn build

EXPOSE 4000
CMD [ "node", "dist/server.js" ]
