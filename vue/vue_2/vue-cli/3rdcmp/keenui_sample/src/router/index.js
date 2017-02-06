import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import UiAlert from 'components/UiAlert'
import KeenUI from 'keen-ui';

Vue.use(KeenUI);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path:'/Uialert',
      name:'/uialert',
      component:UiAlert
    }
  ]
})
