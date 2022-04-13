import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NotPage from '@/components/NotPage'

import sample from '@/components/sample/sample'

Vue.use(Router)

export default new Router({
  base: '/app',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      props: true
    },
    {
      path: '/top',
      name: 'HelloWorld',
      component: HelloWorld,
      props: true
    },
    {
      path: '/401',
      name: 'NotPage',
      component: NotPage,
      props: true
    },
    {
      path: '/sample',
      name: 'sample',
      component: sample,
      props: true
    }
  ]
})
