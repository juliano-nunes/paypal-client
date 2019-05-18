import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import materialize from "../node_modules/materialize-css/dist/js/materialize.js";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  materialize,
  render: h => h(App)
}).$mount('#app')
