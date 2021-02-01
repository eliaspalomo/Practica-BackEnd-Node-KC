# Practica de Elias Palomo Vela de Node.js, Express y MongoBD

## Instalación
Ejecutando el fichero installColections.js

## API de tag
### Listado
 * Ruta: http://localhost:3000/api/tag/
 * Método: GET
 * Parámatros, en la llamada:
    * tag: para filtrar por un tag
    * _id: para filtrar por un _id de Mongo
 * Resultado:
    * 200: Ok
    * 500: Error

### Insertado
 * Ruta: http://localhost:3000/api/tag/
 * Método: POST
 * Parámatros, en el body:
    * tag: para el nombre del tag
 * Resultado:
    * 201: Creado en la colección
    * 500: Error

### Actualizado
 * Ruta: http://localhost:3000/api/tag/
 * Método: PUT
 * Parámatros, en la llamada:
    * _id: para filtrar por un _id de Mongo
 * Parámatros, en el body:
    * tag: para el nombre del tag
 * Resultado:
    * 200: modificado en la colección
    * 500: Error

### Borrado
 * Ruta: http://localhost:3000/api/tag/
 * Método: POST
 * Parámatros, en la llamada:
    * _id: para filtrar por un _id de Mongo
 * Resultado:
    * 200: Borrado en la colección
    * 500: Error

## API de nodePOP
### Listado
 * Ruta: http://localhost:3000/api/nodePOP/
 * Método: GET
 * Parámatros, en la llamada:
    * filtro:
        * artículo: para filtrar por un artículo
        * venta: para filtrar por un venta
        * precio: para filtrar por un precio
        * tags: para filtrar por un tags
    * limit: para el límite de artículos por pagina
    * skip: para el numero de ariculos a saltar
    * fields: campos a mostrar en la respuesta
    * sort: ordenación, que campos y en que orden
    tags
    * _id: para filtrar por un _id de Mongo
 * Resultado:
    * 200: Ok
    * 500: Error

### Insertado
 * Ruta: http://localhost:3000/api/nodePOP/
 * Método: POST
 * Parámatros, en el body:
    * artículo: para el nombre del artículo
    * venta: para saber si esta en venta o compra
    * precio: para el precio en venta o compra
    * foto: cadena de la ruta del Articulo
    * tags: para los tags del artículo
 * Resultado:
    * 201: Creado en la colección
    * 500: Error

### Actualizado
 * Ruta: http://localhost:3000/api/nodePOP/
 * Método: PUT
 * Parámatros, en la llamada:
    * _id: para filtrar por un _id de Mongo
 * Parámatros, en el body:
    * artículo: para el nombre del artículo
    * venta: para saber si esta en venta o compra
    * precio: para el precio en venta o compra
    * foto: cadena de la ruta del Articulo
    * tags: para los tags del artículo
 * Resultado:
    * 200: modificado en la colección
    * 500: Error

### Borrado
 * Ruta: http://localhost:3000/api/nodePOP/
 * Método: POST
 * Parámatros, en la llamada:
    * _id: para filtrar por un _id de Mongo
 * Resultado:
    * 200: Borrado en la colección
    * 500: Error

