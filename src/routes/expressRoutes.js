const express=require('express');//asi solo lo requerimos
const router=express.Router();//lo que hace es crear un objeto para poder definir rutas

let arrTmpDir=__dirname.split("/");
arrTmpDir.pop();//eliminamos el último elemento porque estamos en un nivel superior:

var routeIndex=arrTmpDir.join('/');//lo volvemos a unir
routeIndex+="/public/index.html";//pegamos el index


router.get('/portfolio', (req, res) => {
	res.sendFile(routeIndex);//servimos el putísimo index
});

router.get("/mission",async(req,res)=>{
	res.sendFile(routeIndex);//servimos el putísimo index
});

router.get("/",async(req,res)=>{
	res.sendFile(routeIndex);//servimos el putísimo index
});

router.get("/urls_cv.txt",async(req,res)=>{
	res.sendFile(arrTmpDir.join('/')+'/public/urls_cv.txt');//servimos el putísimo index
});


router.post("/enviar-contacto",  async(req,res)=>{
	const sendContact=require('../models/sendContact.js');
	const email=new sendContact(req.body.name,req.body.email,req.body.phone,req.body.message);
	let flagSent=await email.send().catch(console.error);
	res.json({enviado:flagSent});
});
module.exports=router;//lo exportamos para poder utilizarlo en otras partes de nuestra aplicación
