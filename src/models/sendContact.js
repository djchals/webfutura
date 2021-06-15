"use strict";
const nodemailer = require("nodemailer");
require('dotenv').config();

class sendContact{
	constructor(name,email,phone,message){
		this.name=name;
		this.email=email;
		this.phone=phone;
		this.message=	"Hola administrador,\nSe ha recibido lo siguiente desde el Formulario de contacto:\n"
						+"\nNombre: "+name
						+"\nCorreo electrónico: "+email
						+"\nTeléfono: "+phone
						+"\nMensaje: "+message;
		this.to=process.env.EMAIL_TO;
		this.subject="Recibido desde el Formulario de contacto";
	}
	async send(){
		let transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: parseInt(process.env.SMTP_PORT),
			secure: false, // true for 465, false for other ports
			auth: {
				user: process.env.SMTP_USER, // generated ethereal user
				pass: process.env.SMTP_PASS, // generated ethereal password
			}
			
		});
		// send mail with defined transport object
		let info = await transporter.sendMail({
			from: '"'+this.name+'" <'+this.email+'>', // sender address
			to: this.to, // list of receivers
			subject: this.subject, // Subject line
			text: this.message, // plain text body
		});
		return info;
	}
}
module.exports=sendContact;
