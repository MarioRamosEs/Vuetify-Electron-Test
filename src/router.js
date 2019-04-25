import Vue from 'vue'
import Router from 'vue-router'
import Recepcion from './views/Recepcion.vue'
import Produccion from './views/Produccion.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recepcion',
      component: Recepcion
    },
    {
      path: '/produccion',
      name: 'produccion',
      component: Produccion
    }
  ]
})
