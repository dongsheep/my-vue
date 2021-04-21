import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import Test from './components/Test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL, 
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './components/HelloWorld.vue')
	  component: Test
    }
  ]
})
