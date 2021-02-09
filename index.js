// const express = require('express'); // con common JS
// Ahora se usa los modulos nativos de JS
import express from 'express';
import router from './routes/index.js';
import database from './config/database.js';


const app = express();

const host = process.env.HOST || '0.0.0.0'; // ESE 0.0.0.0 lo tomará Heroku cuando se suba a produccion
// Definimos el puerto en el cual correra nuestro servidor express/ el proccess.env.PORT lo va a tomar HEROKU cuando se suba a produccion
const port = process.env.PORT || 4000;

// Conectar a la base de datos MySQL
database.authenticate()
    .then( () => console.log('Base de datos conectada!!!'))
    .catch( error => console.log(error));


//Habilitar PUG (Template Engine)
app.set('view engine', 'pug'); // esto le dice que quiere usar el template engine de pug

// middleware para obtener el año actual
app.use((req, res, next) => {
    const year = new Date().getFullYear();
    res.locals.actualYearcito = year; // guardamos nuestra variable en locals, y ya podemos leerlo en otro archivo

    res.locals.nombreSitio = 'Agencia de Viajes';

    next(); // hace que pase al sgte middleware (return next(); sino funciona solo next();)
});


// Agregar body parser para poder leer los datos del formulario
app.use(express.urlencoded( {extended: true} ));


// Definir la carpeta publica
app.use(express.static('public'));

// Agregar Router
app.use('/', router);

app.listen(port, host, () => {
    console.log(`El servidor está funcionando correctamente en el puerto ${port}`);
});