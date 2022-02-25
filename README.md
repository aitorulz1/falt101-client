# Flat 101 APP 
Flat101 es una app en la que podrá subir y visualizar productos. Los campos que puede registrar de producto son el nombre, precio e imagen. El proyecto se ha creado con un server en el que se ha definido el modelo, controlador y rutas para estructurar los datos y registrar así, cada producto en la base de datos.

La parte front se ha realizado con Redux y los métodos para realizar las acciones y poder subir los productos, la estructura se organiza mediante "Actions" y "Reducers", declarando así los types que van a facilitar el buen funcionamiento de la aplicación.

El diseño se ha realizado mediante hojas de estilo CSS. La instalación de SASS no ha sido posible por una incompatibilidad con la versión de React.


# Primeros pasos
- Fork this Repo
- Clone this Repo "git clone + url"

```sh
git clone https://github.com/aitorulz1/flat101-client.git
```

```sh
git clone https://github.com/aitorulz1/flat101-server.git
```


# Cliente
Una vez tengas clonado el repositorio de cliente, instala todas las dependencias | npm install

```sh
npm i
```

Podemos arrancar la aplicación usando 

```sh
npm start
```
La aplicación se abrirá en [http://localhost:3000/]


# Servidor
Una vez tengas clonado el repositorio de cliente, instala todas las dependencias | npm install
Podemos arrancar el servidor de forma paralela, usando `npm run server`

```sh
npm run server
```

El servidor corre en [http://localhost:4000/]
Podremos comprobar el endpoint en:

- [http://localhost:4000/flats] Para los productos subidos.



# Usabilidad
En la página principal, pulse el botón inferior para acceder a la página donde podrá encontrar los ditintos productos subidos. Tiene dos menus. Uno tipo burger menu para móvil y otro superior en el header para desktop. A través de estospodrá accede al formulario en el que podrá subir los productos deseado y se verán reflejados en la página de "flats". Los productos se almacenan en una base de datos de MongoDB.


