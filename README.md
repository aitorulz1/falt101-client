# Flat 101 APP 
Rastreator es el mayor buscador de seguros y, en esta aplicación podrás encontrar los seguros de coches y préstamos catalogados por coberturas y ordenados de menor a mayor precio.
Los préstamos están ordenados de menor a mayor a partir de los 10.000€.


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


