import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import router from './router'
import Meta from 'vue-meta'
import Analytics from 'vue-analytics'

import "bootstrap-vue/dist/bootstrap-vue.css"
import "bootstrap/dist/css/bootstrap.min.css"
import '../assets/css/bootstrap.min.css'
import '../assets/css/app.css'

Vue.config.productionTip = true;
Vue.use(BootstrapVue);
Vue.use(Meta);
// Vue.use(Analytics, {
//   id: '',
//   router
// });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});