FROM node:latest

WORKDIR /app

COPY . /app

CMD npm install

CMD chmod 777 /app/start.sh

CMD /app/start.sh