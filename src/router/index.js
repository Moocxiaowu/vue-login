import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Person from '../components/Person.vue'
import auth from '../auth/auth'

Vue.use(Router);
Vue.use(VueResource);

auth.checkAuth();

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Person',
      name: 'Person',
      component: Person
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
