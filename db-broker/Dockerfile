FROM node:14.16.1

RUN mkdir -p /home/app
WORKDIR /home/app
COPY . /home/app

RUN npm install --production --quiet

EXPOSE 8080

CMD ["npm", "start"]
