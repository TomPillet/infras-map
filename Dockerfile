FROM node:latest

WORKDIR /infras-map

COPY . /infras-map

RUN npm install

CMD ["npm", "run", "start"]