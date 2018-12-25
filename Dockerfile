FROM node:8.14.1-jessie

COPY . /yurko

WORKDIR /yurko

EXPOSE 3000

CMD [ "node", "./index.js" ]
