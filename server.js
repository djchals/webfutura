const express=require('express');//asi solo lo requerimos
const morgan=require('morgan');//módulo que nos muestra las peticiones que recibimos del navegador
// const mongoose=require('mongoose');
var bodyParser = require('body-parser');
require('dotenv').config();//para obtener las variables de entorno

const app=express();//lo inicializamos

///////////////////////////////////////////////////// CONFIGURACIÓN ///////////////////////////////////////////////////// 
// const uri="mongodb+srv://"+process.env.USERDB+":"+process.env.PASSDB+"@cluster0.mnpm2.mongodb.net/"+process.env.NOMBREDB+"?retryWrites=true&w=majority";
// 
// mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
// .then(()=>console.log("Base de datos conectada"))
// .catch((e)=>console.log("Error de conexión de la DB: "+e));
// 

app.set('port',process.env.PORT || 3000);//guardarmos el puerto en una variable porque cuando subamos la app a la nube nos darán otro puerto

///////////////////////////////////////////////////// MIDDLEWARES ///////////////////////////////////////////////////// 
//Los middlewares son simplemente funciones que nos ayudan a procesar antes de llegar a las urls
app.use(morgan('dev'));//con este middleware nos muestra las peticiones que recibimos del navegador

app.use(bodyParser.json());


///////////////////////////////////////////////////// ROUTES ///////////////////////////////////////////////////// 
//app.use(require('./routes/rutas.js'));//en este archivo estaríatoda la configuración de las rutas
//si todas las rutas que vamos a cargar estuvieran en wp-admin, hariamos:
// app.use('/wp-admin',require('./routes/wp.js'));// y dentro de wp.js se entendería que la raiz es /wp-admin todo el rato y no haría falta referenciarlo en él todo el rato.

app.use('/',require('./src/routes/expressRoutes.js'));



///////////////////////////////////////////////////// STATIC FILES ///////////////////////////////////////////////////// 
//-> serán los archivos que enviaremos al frontend: Ej: las fuentes, los javascripts, htmls, css, imgs... 
//node.js nos proporciona una constante en la que tenemos la ruta completa: __dirname
// console.log(__dirname+'/public');

//Aquí le pasamosla ruta completa que será publica al usuario, no basta con la ruta relativa
app.use(express.static(__dirname+'/src/public'));

///////////////////////////////////////////////////// ACTIVAMOS SERVIDOR ///////////////////////////////////////////////
//servidor escuchando en el puerto 3000, en producción será el 80
app.listen(app.get('port'),()=>{
	console.log(app.get('port'));
});
