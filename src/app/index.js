import Vue from 'vue';
import router from '../routes/vueRoutes.js'
import App from '../components/App.vue';

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";


new Vue({
	router,
	render: h => h(Header)
}).$mount('header')

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')


new Vue({
	router,
	render: h => h(Footer)
}).$mount('footer')
