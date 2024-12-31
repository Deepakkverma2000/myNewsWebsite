FROM node:18

COPY package*.json ./

RUN npm install --production 

COPY . .

EXPOSE 3000

CMD [ "node","app.js" ]