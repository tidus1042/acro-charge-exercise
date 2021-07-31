FROM node:14.16.1 as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/


RUN npm install
RUN npm config set ignore-scripts false
RUN npm install --unsafe-perm node-sass@4.14.1
RUN npm run build

FROM nginx:latest

COPY --from=build /usr/local/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
