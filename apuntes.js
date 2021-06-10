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

    */