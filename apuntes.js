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
    */