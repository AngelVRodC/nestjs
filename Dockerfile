FROM mhart/alpine-node:12.13.0

RUN mkdir /app
COPY ./ /app
WORKDIR /app
RUN npm install -g ts-node typescript nodemon
RUN yarn install
RUN tsc
EXPOSE 3000
CMD [ "node", "dist/main.js" ]
