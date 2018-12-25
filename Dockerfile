FROM node:8.14.1-jessie

COPY . /yurko

WORKDIR /yurko

EXPOSE 3000

RUN mkdir -p /yurko/static

VOLUME /yurko/static

CMD [ "node", "./index.js" ]
