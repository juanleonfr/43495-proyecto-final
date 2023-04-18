# Server de E-commerce. Por [Matías Bianchi](www.linkedin.com/in/matiasbianchi)

# [![CSS](https://img.shields.io/badge/-link%20al%20server-red)](https://proyecto-final-server-production.up.railway.app/admin)

# [![CSS](https://img.shields.io/badge/-link%20al%20cliente-red)](https://matibian.github.io/proyecto-final-client/)

# [VORTEX - App fullstack MERN](https://matibian.github.io/proyecto-final-client)

## COMANDOS

Develop mode
`Abre el servidor con persistencia de los productos en memoria`

    npm run dev.

Production mode
`npm run prod`

    Toda la persistencia en MongoDB con mongoose.

Test mode
`npm run test`

    Test mocha de lectura, creación, y eliminación de un producto. Solo funciona en modo dev, porque en ese modo esta desactivada la autenticación.

## Descripción

VORTEX es un proyecto ecommerce realizado en React.js y Express de venta de ropa. Los productos y la orden de compra con los pedidos se almacenan en mongoDB.

En el front, desde el avatar se puede acceder a la cuenta principal del usuario, donde están todos los pedidos y un chat para comunicarse con personal de Vortex.

El server almacena y administra productos, chats, envíos y muestra la configuración del servidor.
La vista del servidor está realizada en Handlebars con Bootstrap.
La autenticación se realizo con el método de JWT.

El servidor envía un mail con el detalle de compra al mail registrado por el usuario.

Para administrar el servidor es necesario un usuario administrador:

usuario: admin@admin.com

password: admin1234