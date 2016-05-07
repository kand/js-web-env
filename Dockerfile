FROM node:6

ENV DIR_BUILD /build
RUN mkdir -p $DIR_BUILD

COPY package.json $DIR_BUILD/
RUN npm install --prefix $DIR_BUILD
ENV NODE_PATH $DIR_BUILD/node_modules

ENV DIR_SITE /site
ENV DIR_PUBLIC $DIR_SITE/public

COPY server.js $DIR_SITE/

ENV DIR_SOURCE /src
RUN mkdir -p $DIR_SOURCE
COPY app $DIR_SOURCE/app

CMD node $DIR_SITE/server
