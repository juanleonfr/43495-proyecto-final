# Proyecto Final de Desarrollo Backend - Coderhouse comisión 43495  

Link al deploy en Render: https://backend-project-43495.onrender.com/
  
## Descripción

  

Éste es un proyecto Backend de un Ecommerce. Las respuestas del servidor se envían en JSON con status codes. Para almacenar productos, y carritos, se puede usar cualquiera de los métodos de persistencia dentro de las opciones en el .env. Los usuarios y las órdenes de compra se almacenan exclusivamente en Mongo Atlas. 

La autenticación de usuarios se realiza mediante Passport.  

Mediante un correo electrónico y un número de teléfono establecidos en .env es posible notificar de las órdenes de compra y de los registros de usuarios nuevos. 

## Comandos

  
#### · Dev mode:
Ejecuta la aplicación con Nodemon en modo de desarrollo.

    npm run dev
  
#### · Production mode:
Ejecuta la aplicación con node en modo de producción.

    npm start
 

## Instrucciones para levantar el server de manera local
#### · Clonar este repositorio.
#### · Pegar en la carpeta raíz del repositorio el archivo .env que se encuentra en el .rar de Google Drive (link enviado en la entrega).
#### · Elegir en el .env qué persistencia usar cambiando la variable INSTANCIA (OPCIONESINSTANCIA muestra las opciones).
#### · Usar algún comando para ejecutar la aplicación.


## Instrucciones para testear con Postman
#### · Importar a Postman las collections que se encuentran en el .rar de Google Drive (link enviado en la entrega).
#### · Levantar el server de manera local si se desea testear los endpoints en un deploy local.
#### · Happy testing!
Todos los posibles endpoints están cubiertos en el Postman. Se puede modificar el body de las requests.

### Si no se tiene acceso al Drive con los archivos, solicitar por mensaje en la plataforma de Coderhouse