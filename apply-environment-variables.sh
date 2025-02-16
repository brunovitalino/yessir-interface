#!/bin/sh

# Substituir API_URL no environment-variables.json com a variável de ambiente do ECS
sed -i "s|API_URL|$API_URL|g" /usr/share/nginx/html/assets/environment-variables.json

# Iniciar o Nginx normalmente
exec "$@"
