FROM node:20-alpine3.17
WORKDIR app/
ADD package*.json ./
RUN npm install
ADD . .
CMD node index.js
EXPOSE 3000