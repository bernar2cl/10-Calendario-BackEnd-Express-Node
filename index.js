/** @type {import('express')} */
const express = require('express');
require('dotenv').config();

/** @type {import('cors')} */
const cors = require('cors');
const { dbConnection } = require('./database/config');

//console.log(process.env);
// sólo con paquete de terceros
// import express from "express";

//Crear el servidor de express
const app = express();

// base de datos
dbConnection();

//CORS
app.use(cors());

//Directorio público
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));
// TODO CRUD: Eventos

//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puesto ${process.env.PORT}`);
});
