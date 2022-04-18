import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/page/General/Main'
import SystemErorr from '@/components/page/General/SystemErorr'

Vue.use(Router)

export default new Router({
  base: '/app',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      props: true
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      props: true
    },
    {
      path: '/SystemErorr',
      name: 'SystemErorr',
      component: SystemErorr,
      props: true
    }
    // {
    //   path: '/sample',
    //   name: 'sample',
    //   component: sample,
    //   props: true
    // }
  ]
})
