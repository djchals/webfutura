<template>
<div class="works-section" id="work">
  <div class="works-header">
    <h3>{{title}}</h3>
    <p>{{description}}</p>
  </div>
  <div class="portfolio-section-bottom-row" id="portfolio">
    <div class="container">
      <div class="sap_tabs">
        <div id="horizontalTab" style="display: block; width: 100%; margin: 0px;">
          <div id="portfoliolist">
            <div class="resp-tabs-container">
              <div class="tab_img">
                  <div class="col-md-3 img-top grid_box" v-for="project in projects">
                    <a v-bind:href='project.urlProject' v-bind:title="project.name" target="_blank">
                      <img v-bind:src='project.urlImg' v-bind:alt="project.name">
                      <span class="zoom-icon"></span>
                    </a>
                  </div>
                  <div class="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- works-section-ends -->
</template>
<script>
  export default {
    data: () => ({
      title: "Portfolio",
      description: "Aquí puedes ver algunos de los proyectos que hemos llevado a cabo con nuestros clientes. En ellos hemos empleado las últimas tecnologias aplicables y realizado diferentes tareas de programación, diseño web, marketing digital y SEO.",
      projects: [
        {name: "Micobaya.online", urlImg: "./img/micobaya.jpg", urlProject: "https://www.micobaya.online/"},
        {name: "FitnessCasero.com", urlImg: "./img/fitnesscasero.jpg", urlProject: "https://www.fitnesscasero.com/"},
        {name: "CuradermBCC.eu", urlImg: "./img/cremasantiarrugas.jpg", urlProject: "https://www.cremasantiarrugas.online/"},
        {name: "Cremasantiarrugas.online", urlImg: "./img/curaderm.jpg", urlProject: "https://www.curadermbcc.eu/"},
      ]
    })
  }
</script>
<style>
</style>
