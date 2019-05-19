import Vue from 'vue';
import App from './App.vue';
import router from './router';
import materialize from "../node_modules/materialize-css/dist/js/materialize.js";
import Repository from './repository.js';

Vue.config.productionTip = false
Vue.prototype.$repository = new Repository();

new Vue({
  router,
  materialize,
  render: h => h(App)
}).$mount('#app')
