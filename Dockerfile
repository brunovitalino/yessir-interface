FROM node:20.15.1 as yessir-img
WORKDIR /app
COPY ["package.json", "/app"]
RUN ["npm", "install", "--silent"]
COPY [".", "."]
RUN ["npm", "run", "build"]

FROM nginx:alpine
VOLUME [ "/var/cache/nginx" ]
COPY --from=yessir-img /app/dist/yessir-interface /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t yessir-img .
# docker run -p 8081:80 yessir-img
