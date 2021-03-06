/* apuntes Docker
    Enterprise para empresas para deploy
    Comunity Edicion no esta enfocada a windows y entornos de produccion en linux para pruebas

    podemos instlarlo en cloud azure y otros.

    Enterprise edition esta en linux y especificamente para windows server

    En windows server no debemos pagar por el soporte en comunity

    para instlar vamos a usar la virtualizacion
    windows 10 pro o enterprise usaremos hyper v o podemos usar virtual box en caso tengamos windows home, linux o mac.
    requisitos hardware
        - Debe soportar la virtualizacion
        - equipos de 2009
        - verificar en la bios intel vt
    requisitos software
        - virtual box descargar de la pagina
            https://www.virtualbox.org/wiki/Downloads
            usaremos la version 6.1
        - iSO windows server 2016 o 2019
    
    //para crear una maquina virtual
    https://www.youtube.com/watch?v=T7OwUB4RqLo&list=PLn5IkU1ZhgiZP8EewgFdxgnsIwN1q3Juo&index=4

    usaremos virtual box, en el menu agregamos un nueva maquina
    - seleccionanmos windows 16 x64
    - damos 4 gb de ram
    . almacenamiento dinamico y datos 100 gb de almacenamiento
    - creamos
    - ingresamos al menu de maquinas seleccionamos la creada vamos a configuracion->almacenamiento y selecconamos la imagen de windows que descargamos.

    Virtual box usa toda la ram asignada a diferencian de hyper v.
    ¡¡¡¡¡¡¡¡ intel core i7 9 generacion hp pavilion pc, debes asegurarte que sea windows server 2019 x64 y en vb debe estar con windows 2016 x64 en otro caso el virtualizador pasara a modo guru

    server 2019
    existen la server core sin interfaz consume menos recursos podemos usar este en entornos productivos.
    y server con interfaz grafica.
    
    en windows 2019 ya tiene soporte para docker, es bueno instalar en un servidor sin interfaz grafica debemos autorizar nanoserver como host

    No sera muy necesario saber de powersheell

    podemos tener otra herramienta llamada sconfig
    inicia un entorno de opciones, podemos cambiar nombre, configuracion de red, telemetria
    cambiamos el nombre con 2
    cambiamos el nombre a dockerCore

    POdemos usar powershell o cmd
    dependiendo que manejamos mas
    vamos a manejar powersheel para instalar docker

    virtual box asigna la entrda de internet por defecto a la maquina
    para cambiar a powershell ejecutamos
    powershell

    Primero instalamos el modulo de microsoft docker provider

    install-Module -Name DockerMSFTProvider _Repository PSGallery -Force

    Para instalar un paquete, instala la ultima version de docker si queremos agregamoos -RequieredVersion 18.03.1-ee-4

    install-image -Name docker _providerName DockerMSFTProvider

    version hasta el momento 20.10.5
 ademas corre en cmd y powershell

    con el comando
 docker version
 podemos ver cracteristicas mas extennsa del docker instalado

 docker info
 podemos ver la informacion de containers creados


 ----------COMANDOS-------------------
 La administracion es sencilla con pocos comandos podemos ya crear lo necesario

 docker run --help 
 para acceder a la ayuda de  los comandos 
 

 ---------Imagenes-------------

Son plnatillas de sistemas operativos que nos sirven para crear nuestros containers
en win tenemos con servercore o nanoserver
atraves de estos podemos crear nuestras implementaciones ademas de poder implementarlas y publicarlas con previa aprobacon de docker.

con docker search 
podemos buscar que imagen usaremos u otra opcion podemos buscar imagenes `publicadas en docker hub.
algunas imagens ya vienen con implementaciones como servers, frameworks .. etc.

Tuve Problemas con el search el servicio de daocker no estaba funcionando encontrar la solucion aqui
https://forums.docker.com/t/installing-docker-on-windows-server-2019/98393/2

Install-Package -Name Docker -ProviderName DockerMsftProvider -Update -Force
Start-Service Docker
se debe iniciar el servicio cada vez que se entra a la maquina
podemos encontrar nanoserver con diferentes 

docker search severcore

igualmente encontraremos iamgens de server core con diferentes complementos

docker search ubuntu 
podemos encontrar mas imagenes de linux con nginex, mysql y demas 

podemos buscar esta imgens en docker hub

https://hub.docker.com/

muestra mas imagenes que el comando por que en consola se muestran las mas rankeadas

al ingresar a las imagenes podemos ver el ownner y el comando para instalarla. 

para Mocrosoft podemos encontrar imagenes con nanoserver o servercore
podemos buscar por diferentes terminos iss para pruebas, mysqlm wamp, xamp 
tenemos a los propietario/nombre de la imagen
tambien los usuarios pueden publicar sus imagenes

listra imagenes
docker image ls
docker images

docker images -a 
docker images -q los id de las imagenes

docker image es un completo administrador podemos guardar borrar crear

docker image ls
lista todas la imagenes
para descargar una imagen 
docker pull <<nombre de la imagen>>

----container con sql server---
docker run -d -p 14333:1433 --name MysqlServer -e $a_password=P@ssword -e ACCEPT_EULA=Y microsoft/mssql-server-windows-developer
realiza la publicacion del puerto
puertos provado y externo
con -d se ejecuta el contenedor

docker ps vemos los contenedores activos

separacion de dependencias podemos levantar una bd de mysql otro container en sqlserver
para actualizar 
find-package -Name Docker -ProviderName DOckerMSFTProvider

para encontar una actualizacion

Install-package -Name Docker -ProviderName DOckerMSFTProvider -update -Force

debemos reestablecer el servicio con 
restart-service docker


------ubuntu-------------
creamos la maquina virtual, 
2 Gb de ram
50 en disco duro
debemos cambiar el controlador de pantalla Vboxvga
LTS long term support^
ubuntu 20.04

---docker en ubuntu-----
    sudo apt update //vrifica que debemos actulizar
    sudo apt install apt-transport-https ca-certificates curl software-properties-common
    //instala transport verifica el https
    
    agregamos la clava a la lista de repositorios
    
    sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
sudo apt install update //para agregar a la liberrias
sudo apt install docker-ce
sudo systemctl status docker    //verificamos que esta el servicio

Si ejecutan docker sin sudo les va a decir que no se esta ejecutando docker, por eso agregamos nuestro usuario al grupo de docker.
sudo usermod -aG docker ${USER} //agregamos docker a sudo o administrador

id -nG  //
docker run hello-world
    
------en caso no se añadio docker y solo funciona con sudo---
sudo groupadd docker
creamos el grupo docker si ya esta creado no pasa nada
sudo gpasswd -a $USER docker
añadiemos docker al grupo

reiniciamos la termianl o ejecutamos
newgrp docker

y ya podemos usar docker sin sudo
docker run hello-world

podemos crear envirements personalizados que no afenctan a la maquina anfitriona, las imagenes debemos usar las oficiales las imagnes de docker hub son bases donde nosotros podemos personalizar una vez tengamos la imagen

--descargar una imagen
docker pull ubuntu 
descarga la mas reciente

--correr un container interactivo con it se crea y al salir no deja rastro
docker run -it ubuntu
exit para salir

screenfetch 
muestra las caracteristicas del equipo y el consumo de ram

docker pull ubuntu:16.04
descarga una version en especifico

si ya tenemos la imagene en la maquina no la descarga

docker run -it --help 
vemos la ayuda

docker run ubuntu:16.04
instalamos screenfetch
el usuario viene por defecto, las imagenes oficiales estan optimizadas con configuraciones para poder trabajar, ademas podemos limitar la cantidad de ram que consume cada contener ademas no consume el disco

al ejecutar exit de manera iterativa se borra toda la informacion y paquetes instalados de esas imagenes asi maximizamos los recursos de la pc y trabajamos de manera limpia con docker

----docker file--------
creando imagen la iamgen base sera en ubuntu:16.04

la imagen es el envirement que se personaliza para usar en el contenedor.
FROM ubuntu:16.04         //debemos colocar siempre la version

docker nos da un ambiente para poder trabajar en cualquier maquina pero debemos ser especificos

RUN mkdir /home/example/  
//run o RUN es igual pero es mejor en mayusculas con run ejecutamos una instruccion en la imagen, en home creamos example

COPY ./app /home/example/
copia los de la carpeta app a example

RUN ls /home/example
//muestra lo de example

RUN cat /home/example/message.txt
cat imprimi el contenido de message.txt

docker build -t first_iamge:v1 .

al final indicamos donde se encuentra el docker file
cada paso se guarda en cache
se crea una copia de las intruccoines no importa si lo borramos


--------ejemeplo con front----

existen imagens en base a un lenguaje, con las configuraciones

alpine 
son ligeras y tienen lo esencial para trabajar pero si necesitamos mas depedencias tenemos que instarlarlas
    

docker build -t prueba2:v2 .
para crear
debemos exponer un puerto 
docker run -it <<nombre>>

---------paea exponer puertos----
el puerto es nginx por defecto maneja el pueto 80,
docker run  -p 80:8080 prueba2:v2

con -p inidicamos que el puerto 80 de mi mauina apunte al puerto 8080 del contenedor

y ya tenemos proyecto en produccion 

docker run -d -p 80:8080 prueba2:v2
 -d para pasarlo a ejecutarse a fondo


 cuando trabajamos varios docker files y necesitamos que se comuniquen entre si usamos docker compose
 con docker compose podemos levantar todos los proyectos de manera mas rapida

 docker ps -a 
 muestra todos los contenedores ejecutandose y ejecutados

 si no hay actividad no mantiene el servidor en el contenedor 

 ------------git submodules-------------------
 git te permite hacer un repositorio que sea de referencia a otros
 tenemos un main
    este proyecto
podemos agregar otros proyectos omo submodules
como una clonacion recursiva

git clone <<link>>

recursivo
git clone <<link>> --recursive-submodules

clona el proyecto de manera recursiva

si una persona tiene mas proyectos solo usan su proyecto.

---- Copiar archivos a un container y de un container a un proyecto anfitrion---

docker run -itd first_image:1.0

para que vaya a segundo plano el container

para entrar a un contenedor ejecutandose
docker exec -it <<id contenedor>> bash

touch crea archivos vacios

pwd podemos ver la ruta del archivo

docker cp <<nombrecontenedor:ruta/archivo >> <<referencia de donde copiar>>

del container al principal
docker cp jovial_matsumoto:/home/example/copy_this_file.txt .

copair del principal al container
docker cp update_file.txt jovial_matsumoto:/home/example

tambien podemos tener una sincronizacion


-----BIND----------
espejear datos del anfitrion al container

docker run -itd --mount type=bind,source="$(pwd)",target=/home/example first_image:1.0 bash
mount avisamos el espejo de datos

trabajamos en el directorio y podemos que sis e reflejan los cambios afuera
RUN mkdir /home/example/
COPY ./app /home/example/
RUN ls /home/example
RUN cat /home/example/message.txt
editamos el docker file

docker container stop 38604ff4e576

para parar el container

debemos tener cuidado cuando reflejamos dos container s al mismo principal
si afectamos a un container el principal y el otro container saldran afectados

---proyecto rails--------
mysql se usa de manera local es mas facil
cambiar nombre a un contenedor


dcoker exec --name ruby_custom_example -itd ruby_custom:1.0 bash

docker exec -it ruby_custom_example bash
s
 en el contenedor tenemosruby mysql y rails instalados pero en la 
 principal no ademas ejecutamos
 rails new basic_api --api --database=mysql
 en el contenedor para crear una api simple

 docker cp ruby_custom_example:/home/app/basic_api .

 para copiar el proyecto al principal.
 docker file de creacion y de trabajo


 -----MYSQL instalcion manual-------------
el container si no tiene algo en proceso se cierra

rails bd:create
crea la base de datos
pero no existe mysql

service --status-all
para ver si mysql esta funcionando

para iniciar el servicio
service mysql start

para configurar el mysql
mysql_secure_installation

rails db:create

rails db:migrate

rails db:seed

rails c
consola 
User.all User.count para mostrar las truplas o contarlas

rails s -b 0.0.0.0 
para ejecutar el proyecto en servidor 
-b 0.0.0.0
se sincroniza con la ip del ordenador

--------mysql image------
http://localhost:8080/

instancia de mysql y configurandola
se conectan a traves del nombre de la instancia
https://github.com/vurokrazia/curso_youtube_docker/tree/main/container_mysql

docker exec -it mysql-curse mysql -p
ejecutamos mysql en el container
mysql createdatabase example;
use example;
show tables;

si detenemos el container la informacion va a desaparecer
pero esto podemos arreglarlo con volumenes.

----volumenes-------
podmos guardar en un volumen la informacion
  docker volume create mysql-curse-data

  para crear un volumen

  luego indicamos donde se debe guadar la informacion donde mysql guarda la data
dst=/var/lib/mysql
montamos el gestor
todo lo que eesta aqui guarda la informacion
variable password

docker run -d -p 3306:3306 --name mysql-curse -e MYSQL_ROOT_PASSWORD=123456 --mount src=mysql-curse-data,dst=/var/lib/mysql mysql:5.7 

con docker compose podemos hacerlo mas rapido
docker run -d -p 3305:3306 --name mysql-curse-without-v -e MYSQL_ROOT_PASSWORD=123456 --mount src=mysql-curse-data,dst=/var/lib/mysql mysql:5.7 

docker stop $(docker ps -a -q)
para todos los contenedores

------Workbentch-------------
Hostname localhost
port 3306
password el que queramos

Podemos usar workbentch para conectar una bd remota a nuestro contenedor
 - conectamos workbentch con una bd remota
 - levantamos una imagen de doker con mysql y persistencia
 - conectamos workbencth con el puerto del contenedor que especificamos
 y ya estan conectadas las dos bd

 ---envirement data-------
 las variables de entorno y como usarlas

 docker volume rm <<nombre>>
 para eliminar un volumen

 docker run -d -p 3306:3306 --name mysql-curse --env-file .env --mount src=mysql-curse-data,dst=/var/lib/mysql mysql:5.7 

 leemos el .env

 mysql -p para entrar como user
 con printenv podemos ver las varaibles de entorno
 del container

 printenv | grep NAME
 para ver las variables


 --------NETWORK------
 podemos usa redesa para comunicar los contenedores ademas 
 si los conteendores estan separados se puden comunicar
 normalmente se usa por separado.

 docker network ls
 
 listamos las network disponibles

docker network ls -q

lista las id de los docker

docker network rm <<nombre>>

docker network create <<nombre>>
para crear un nuevoo network

es una red creada, ademas tenemos que especificar donde se va a conectar

-------NETWORK ENTRE CONTAINERS------------
conectando rals y mysql

rails s -b 0.0.0.0
levanta el servidor

CMD ["rails","s", "-b","0.0.0.0"]
ejecuta el servidor

------Docker extencion VS------
podemos visualizar los containers con VS
podemos agregar tags ejecutar comandos
podemos abrir un editor dentro del container
y trabajar desde adentro del conntainer
*/