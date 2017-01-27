// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import Home from './Home'
import Users from './Users'



Vue.use(VueRouter);

const routes = [
  {name:'Users' ,path:'/users',component:Users},
  {name:'Homeß',path:'/',component:Home}
];

const router = new VueRouter({
  routes,
  mode:'history'
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  render: h => h(App)
})
