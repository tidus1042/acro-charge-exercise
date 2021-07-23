FROM node:14.16.1

RUN npm install

RUN mkdir -p /home/app
WORKDIR /home/app
COPY . /home/app

RUN npm install --production --quiet

EXPOSE 5000

CMD ["npm", "start"]
