import Vue from 'vue'
import App from './App.vue'
// import "@registerServiceWorker/registerServiceWorker";
// import {store} from './store/index.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false


new Vue({
  render: (h) => h(App),
}).$mount("#app");
