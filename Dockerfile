FROM node:9-alpine

LABEL author="daniel.ribeiro@stepgroup.co"

ADD . /app

WORKDIR /app

RUN rm -rf node_modules && npm install

VOLUME ["/app"]

CMD ["npm", "run", "prod"]

EXPOSE 3000
