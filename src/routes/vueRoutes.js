import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)

import Home from "../components/Home.vue";
import Portfolio from "../components/Portfolio.vue";
import Mission from "../components/Mission.vue";

//debajo de esto podemos ver un ejemplo más complejo con children
const router = new Router({
  mode: "history",
//   base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
	  name: "home",
      component: Home,
      meta: {
        title: "Home"
      }
    },
    {
      path: "/portfolio",
	  name: "portfolio",
      component: Portfolio,
      meta: {
        title: "Portfolio"
      }
    },
    {
      path: "/mission",
	  name: "mission",
      component: Mission,
      meta: {
        title: "Mission"
      }
    }

  ]
});

export default router
