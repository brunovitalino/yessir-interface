FROM node:20.15.1 as yessir-build
WORKDIR /app
COPY ["package.json", "/app"]
RUN ["npm", "install", "--silent"]
COPY [".", "."]
RUN ["npm", "run", "build"]

FROM nginx:alpine
VOLUME [ "/var/cache/nginx" ]
# Copia os arquivos do Angular para o Nginx
COPY --from=yessir-build /app/dist/yessir-interface /usr/share/nginx/html
COPY ["./config/nginx.conf", "/etc/nginx/conf.d/default.conf"]
# Copia o script de entrypoint para injetar variaveis em tempo de execucao
COPY ./apply-environment-variables.sh /apply-environment-variables.sh
RUN chmod +x /apply-environment-variables.sh
# Define o entrypoint
ENTRYPOINT ["/apply-environment-variables.sh"]
# Expoe a porta padrao do Nginx
EXPOSE 80
# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]

# docker build -t yessir-img .
# docker run -p 4200:80 yessir-img
