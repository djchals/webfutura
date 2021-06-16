<template>
<footer>
  <div class="container">
    <div class="contact-header">
      <h3>{{title}}</h3>
      <p v-html="description"></p>
    </div>
    <div class="contact" id="contact">
      <form @submit.prevent="sendContact" name="contactForm">
        <div class="col-md-4 contactgrid">
          <input type="text" class="text" v-bind:placeholder="name" v-model="contactForm.name" name="name" maxlength="255">
        </div>
        <div class="col-md-4 contactgrid">
            <input type="text" class="text" v-bind:placeholder="email" v-model="contactForm.email" name="email" maxlength="255">
        </div>
        <div class="col-md-4 contactgrid">
            <input type="text" class="text" v-bind:placeholder="phone" v-model="contactForm.phone" name="phone" maxlength="20">
        </div>
        <div class="col-md-8 contactgrid1">
            <textarea v-bind:placeholder="message" v-model="contactForm.message" name="message" maxlength="5000"></textarea>
        </div>
        <div class="col-md-4 contactgrid2">
            <input type="submit" v-bind:value="sendMessage"/>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
    <div class="footer-bottom">
      <p v-html="footerPhrase"></p>
    </div>
      <a href="#" id="toTop" style="display: block;"> <span id="toTopHover" style="opacity: 1;"> </span></a>
    </div>
  </div>
</footer>
</template>
<script>

class Contact{
	constructor(name,email,phone,message){
		this.name=name;
		this.email=email;
		this.phone=phone;
		this.message=message;
	}
}
export default {
	data: () => ({
		title: "Contacto",
		description: "WebFutura nace para crear, aportar y ayudar a dar forma a tus ideas. <br/>Así que anímate y cuéntanos que proyecto tienes en mente!",
		name: "Nombre",
		email: "Correo electrónico",
		phone: "Teléfono",
		message: "Tu mensaje",
		sendMessage: "[Enviar mensaje]",
		footerPhrase: "&copy; 2021 WebFutura.online | Web desarrollada con<a href=\"https://vuejs.org/\" target=\"_blank\">Vue.js</a>",
		contactForm: new Contact(),
		formError: 'ok',
		arrayErrors:{
			'ok':				"Se ha enviado tu mensaje correctamente. En breve nos pondremos en contacto.",
			'errorSending':		"Se ha producido un error durante el envío. Por favor verifica que hayas introducido correctamente los datos, y de ser correctos espera unos minutos para volver a intentarlo.",
			'tooEarly':			"Has enviado un mensaje a través del Formulario de contacto hace poco. Por favor, espera unos minutos antes de enviar el siguiente mensaje.",
			'mandatoryFields':	"Debes rellenar todos los campos del formulario para poder enviar tu mensaje.",
			'invalidEmail':		"La dirección de correo electrónico introducida no es válida."
		}
	}),
	methods: {
		sendContact(){
			let arrayFormError=this.chkForm();
			if(arrayFormError.error){
				this.showError(arrayFormError.formError);
				return;
			}
			let sendError='ok';
			if(this.chkCookie()){
				fetch('/enviar-contacto',{
					method: 'post',
					body: JSON.stringify(this.contactForm),
					headers:{
						'Accept': 'application/json',
						'Content-Type':'application/json'
					}
				})
				.then(res=>res.json())
				.then(data=>{
						if(data.enviado){
							this.setCookie();
							sendError='ok';//OK
						}else{
							sendError='errorSending';//KO, error during sending
						}
					}
				);
			}else{
				sendError='tooEarly';//KO, too early
			}
			this.showError(sendError);
		},
		setCookie() {
			var d = new Date();
			d.setTime(d.getTime() + 600000);
			var expires = "expires="+ d.toUTCString();
			document.cookie = "lastSend=" + d.getTime() + ";" + expires + ";path=/";
		},
		getCookie() {
			var name ="lastSend=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');
			for(var i = 0; i <ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
				c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
				}
			}
			return "";
		},
		chkCookie(){
			return (Date.now()>this.getCookie()+60000);
		},
		chkForm(){
			let error=false;
			let formError='ok';
			
			if(document.contactForm.name.value=="" || document.contactForm.email.value=="" || document.contactForm.phone.value==""  || document.contactForm.message.value=="" ){
				formError='mandatoryFields';
				error=true;
			}
			if(!error && (!this.validEmail(document.contactForm.email.value))){
				formError='invalidEmail';
				error=true;
			}
			return {
				error,
				formError
			}
		},validEmail(email) {
			let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		},showError(error){
			alert(this.arrayErrors[error]);
		}
	}
};
</script>
<style></style>
