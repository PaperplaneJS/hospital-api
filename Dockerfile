FROM node:14
ENV NODE_ENV=production

RUN rm -rf /app
RUN mkdir /app
COPY . /app

WORKDIR /app

RUN yarn config set registry https://registry.npmmirror.com
RUN yarn

CMD [ "node", "./src/app.js" ]