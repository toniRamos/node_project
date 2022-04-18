FROM node:latest

WORKDIR /app

COPY . /app

CMD npm install

CMD chmod 777 /app/start.sh

CMD echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
CMD echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories
CMD apk update
CMD apk add mongodb
CMD apk add mongodb-tools

CMD /app/start.sh