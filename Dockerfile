FROM node:lts-alpine3.14

ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .

EXPOSE 3000

CMD [ "npm" "run" "start:prod" ]
