import Vue from 'vue'
import Router from 'vue-router'
import Cart from './views/Cart.vue'
import Approved from './views/Approved.vue';
import Refused from './views/Refused.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/approved',
      name: 'approved',
      component: Approved
    },
    {
      path: '/refused',
      name: 'refused',
      component: Refused
    },
  ]
})
