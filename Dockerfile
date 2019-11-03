FROM node:8.14.1-jessie

COPY . /yurko

WORKDIR /yurko

RUN npm install

EXPOSE 6666
EXPOSE 3333
EXPOSE 4444

CMD [ "node", "./index.js" ]
