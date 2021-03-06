/*
ruby 2.5.1
mysql 5.7
docker 19.03.12

create network
docker network create rails-api-basic

create volume
docker volume create raials-api-basic

create container MYSQL

docker run -d -p 3306:3306 --name rails-ap-mysql --network
rails-api-basic --env-file .env --mount src=rails-api-basic,dst=/var/lib/mysql mysql:5.7

build image
docker build -t basic_api:1.0

create container

docker run -itd --mount type=bind.sources="${pwd}",target=home/app --name rails-api --env-file .env --network rails-api-basic basic_api:1.0



--------------
docker inspect rails-api-mysql

podemos ver lode detalles del conetendor creado

a partir de mysql 8 se tiene problemas entre docker y mysql

si nodamos un network usa la de default

docker connect rails-api-basic rails-api-mysql

pra conectar un contenedor con otro

docker disconnect rails-api-mysql

para desconectar un contanier de otro

--------CONFIG DOCKERFILE PARA RUBY----------
FROM ruby:2.5.1-alpine3.7

para usar eel poduccion usamos imagenes alpine son mas ligeras que las normales

RUN APK UPDATE && apk add bash
RUN mkdir -p /home/app
WORKDIR  /HOME/APP
COPY . .
RUN /bin/sh -c "apk add --no-cache bash"

de esta forma abrimos el bash en imagenes alpine

docker exec -it rails-api ping rails-api-mysql
muestra el ping de llegda y respuesta


---- CONFIGURACIN VARIABLES DE ENTORNO-------




*/
