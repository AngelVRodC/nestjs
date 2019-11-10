FROM mhart/alpine-node:12.13.0

RUN mkdir /app
COPY ./ /app
WORKDIR /app
RUN npm install -g ts-node typescript
RUN yarn install

EXPOSE 3000
CMD [ "yarn", "start" ]
