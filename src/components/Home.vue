<template>
	<div class="services-section" id="services">
    <div class="container">
			<div class="services-header">
				<h3>{{compTitle}}</h3>
					<p v-html="compDesc"></p>
			</div>
			<div class="services-sectiongrids">
				<div class="col-md-4 services-grid" v-for="actS in services">
					<img v-bind:src="actS.urlImg" v-bind:alt="actS.title"/>
					<h4>{{actS.title}}</h4>
					<p>{{actS.desc}}</p>
				</div>
				<div class="clearfix"></div>
      </div>
		</div>
  </div>
  <!-- services-section-ends -->
</template>
<script>
export default{
  data:()=>({
    compTitle: "¿Qué te podemos aportar?",
    compDesc: "Llevamos más de 15 años trabajando en el sector tecnológico y creando más y más porque nos apasiona lo que hacemos.<br>No entendemos la vida sin estar actualizados.",

    services: [
      {
        title: "Creación de Páginas Web",
        desc: "Podemos crear tu página web desde 0, o si quieres con Wordpress. Para ello podemos emplear PHP, o con los frameworks React.js o Vue.js de Javascript",
        urlImg: "./img/create_webs.png"
      },
      {
        title: "Creación de Aplicaciones de Escritorio",
        desc: "También podemos realizar tu aplicación de escritorio en C/C++.",
        urlImg: "./img/create_apps.png"
      },
      {
        title: "Soporte Técnico",
        desc: "Si necesitas soporte técnico sobre tareas de administración de tu servidor Linux, o si ya eres cliente nuestro también te lo podemos proporcionar.",
        urlImg: "./img/technical_support.png"
      }
    ]
  })
}
</script>
<style>
</style>
