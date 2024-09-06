FROM node:20.15.1 as yessir-img
WORKDIR /app
COPY ["package.json", "/app"]
RUN ["npm", "install", "--silent"]
COPY [".", "."]
RUN ["npm", "run", "build"]

FROM nginx:alpine
VOLUME [ "/var/cache/nginx" ]
COPY --from=yessir-img /app/dist/buscante /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t yessir-front-img .
# docker run -p 4200:80 yessir-front-img
