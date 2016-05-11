FROM node:6

ENV DIR_SITE /site
RUN mkdir -p $DIR_SITE
WORKDIR $DIR_SITE

COPY resources/js/package.json ./
RUN npm install
ENV PATH $PATH:$DIR_SITE/node_modules/.bin/

COPY resources/js/ ./
COPY resources/shell ./
RUN chmod +x ./*.sh

ENV DIR_PUBLIC $DIR_SITE/public

ENV DIR_SOURCE $DIR_SITE/src
COPY src $DIR_SOURCE

RUN ./build.sh

CMD node server
