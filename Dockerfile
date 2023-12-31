FROM node:14-slim

RUN rm -rf /app
RUN mkdir /app
COPY . /app

WORKDIR /app

RUN yarn config set registry https://registry.npmmirror.com
RUN yarn

EXPOSE 5505

CMD [ "node", "./src/app.js" ]