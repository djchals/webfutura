<template>
  <header>
  <div class="container">
    <div class="logo-box">
      <a href="/">
        <img src="img/logo.png"/>
      </a>
    </div>
    <nav>
    <ul>
  <li>
    <router-link to="/" id="link-services" v-bind:class="(actPath=='/')?'active':false" >
      <span v-bind:data-hover="etHome">{{etHome}}</span>
    </router-link>
  </li>
  <li>
    <router-link to="/portfolio" id="link-portfolio" v-bind:class="(actPath=='/portfolio')?'active':false">
      <span v-bind:data-hover="etPortfolio">{{etPortfolio}}</span>
    </router-link>
  </li>
  <li>
    <router-link to="/mission" id="link-mission" v-bind:class="(actPath=='/mission')?'active':false">
      <span v-bind:data-hover="etMission">{{etMission}}</span>
    </router-link>
  </li>
  <li>
    <a href="#contact">
      <span v-bind:data-hover="etContact">{{etContact}}</span>
    </a>
  </li>
   </ul>
  </nav>
  </div>
</header>
  </template>
<script>
export default {
  name: 'topmenu',
  data: () => ({
    etHome: "Servicios",
    etPortfolio: "Portfolio",
    etMission: "Misión",
    etContact: "Contacto",
    actPath: ''
  }),
  created(){
	this.actPath=this.$route.path;
	}

}
</script>
<style>

header {
  padding: 20px 0;
  box-shadow: 0 4px 6px rgba(0,0,0,.2);
}
.logo-box {
  float: left;
  margin-right: 20px;
}
.logo-box a {
  outline: none;
  display: block;
}
.logo-box img {display: block;}
nav {
  overflow: hidden;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  float: right;
}
nav li {
  display: inline-block;
  margin-left: 25px;
  height: 70px;
  line-height: 70px;
  transition: .5s linear;
}
nav a {
  text-decoration: none !important;
  display: block;
  position: relative;
  text-transform: uppercase;
}
nav a:after {
  content: "";
  width: 0;
  height: 2px;
  position: absolute;
  left: 0;
  bottom: 15px;
  background: #868686;
  transition: width .5s linear;
}

@media screen and (max-width: 660px) {
  header {text-align: center;}
  .logo-box {
    float: none;
    display: inline-block;
    margin: 0 0 16px 0;
  }
  ul {float: none;}
  nav li:first-of-type {margin-left: 0;}
}
@media screen and (max-width: 550px) {
nav {overflow: visible;}
nav li {
  display: block;
  margin: 0;
  height: 40px;
  line-height: 40px;
}
nav li:hover {background: rgba(0,0,0,.1);}
nav a:after {content: none;}
}

nav a.active{
	color: #e74c3c !important;
	font-weight:normal;
	text-decoration:none;
}
</style>
