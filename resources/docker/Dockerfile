FROM node:6

ENV DIR_SITE /site
RUN mkdir -p $DIR_SITE
WORKDIR $DIR_SITE

COPY resources/js/package.json ./
RUN npm install

COPY resources/js/ ./

ENV DIR_PUBLIC ./public

ENV DIR_SOURCE ./src
COPY src $DIR_SOURCE

RUN npm run build

CMD node server
