//const express = require('express');

import express from 'express'; //version nativa de importar el framework
import routing from './Routes/index.js';
import db from './config/db.js'
//import bodyParser from 'body-parser';
import dotenv from 'dotenv'
dotenv.config({path:'variables.env'})

const app = express();

//conectar a la bd
db.authenticate()
.then(()=>console.log("estas conectado a la bd"))
.catch((error)=>console.log(error))

app.use(express.urlencoded({extended:true})); 

//agregar rutas 
app.use('/',routing);//agrega desde la raiz principal las diferentes rutas path get delelet
//Habilitando pug
app.set('view engine','pug');
//definir carpeta public 

//obtener el año actual 
app.use((req,res,next)=>{
   const year = new Date();
   app.locals.actual = year.getFullYear();
   app.locals.nombreSitio = 'Agencia de viajes';
     return next(); //forzas a salir e ir a la siguiente instruccion 

})
//app.use(bodyParser.urlencoded({extended:true})); 
//app.use(express.urlencoded({extended:true})); 
//app.use(express.urlencoded());

app.use(express.static('public'));


app.get('/',(req,res)=>{ //req es lo que uno envia como un formulario y res en lo que te reponde en la direcion de raiz
   res.send("inicio");


})
//agregar el body parser para leer los datos del formulario ,en versiones anteriores lo tenias d¡que intalar 




//definiendo el puerto
const host = process.env.HOST || '0.0.0.0';// ejecuta en el puerto 4000 y la variable de entorno procces.env.PORT EN PRODUCCION LO CAMBIA 
//puerto y host para la app
const port = process.env.PORT || 3000;


app.listen(port,host ,()=>{ //escucha por el puerto 4000 y correlo
console.log(`El servidor esta funcionando en el puerto ${port}`)


})
