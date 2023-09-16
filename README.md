Mi nombre es Facundo Ierullo y mi proyecto final de react es la simulación de un ECommerce en el que podemos ver un listado de productos los cuales son filtrados en sus respectivas categorias, cada producto tiene su apartado de detalles donde podemos acceder al clickear en el botón que dice "ver detalles" y allí podremos ver sus descripciones, además de tener un contador que nos permite elegir la cantidad del producto que queremos añadir al carrito. Una vez añadidos los productos al carrito, en la esquina superior derecha veremos el logo del mismo que nos muestra cuantos productos hay dentro. Si clickeamos en el logo del carrito veremos los productos y tendremos la posibilidad de comprar o limpiar el carrito. Si decidimos avanzar con la simulación de la compra iremos a un checkout que nos pide datos básicos para poder así finalizar por completo esta simulación.
Para poder llevar a cabo esto fue necesario la implementación de firebase para poder almacenar los productos, bootstrap y sass para poder darle estilo al código, react-router-dom para poder navegar dentro de la página con Routes y Links, y sonner para poder aplicar toastifies en los momentos donde cargan los productos al cambiar de ruta. 

Para poder implementar este código es necesario instalar Node.js en https://nodejs.org/en/. Luego vamos a la terminal de Node y con el comando "cd" vamos a poder ubicar la carpeta que queramos, una vez allí ejecutamos el comando npm-install -g create-react-app allí podremos ubicar este proyecto. Luego deberemos instalar de la misma manera a firebase, bootstrap, react-router-dom y sonner. Es decir, ubicandonos en la carpeta del proyecto con el comando "cd" en la terminal y luego ejecutando el comando "npm install" seguido del nombre de la tecnología a instalar, por ejemplo "npm install sonner". 