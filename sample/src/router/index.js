import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import NotFound from '@/components/pages/NotFound'
import Store from '@/components/pages/Store'
import GoJS from '@/components/pages/GoJS'
import jexcel from '@/components/pages/jexcel'
import GoogleMap from '@/components/pages/GoogleMap'
import Modal from '@/components/pages/Modal'

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
      path: '/store',
      name: 'store',
      component: Store,
      props: true
    },
    {
      path: '/gojs',
      name: 'gojs',
      component: GoJS,
      props: true
    },
    {
      path: '/jexcel',
      name: 'jexcel',
      component: jexcel,
      props: true
    },
    {
      path: '/google-map',
      name: 'googleMap',
      component: GoogleMap,
      props: true
    },
    {
      path: '/modal',
      name: 'modal',
      component: Modal,
      props: true
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound,
      props: true
    }
  ]
})
