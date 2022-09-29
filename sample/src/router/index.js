import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import NotFound from '@/components/pages/NotFound'
import Times from '@/components/pages/Times'
import Store from '@/components/pages/Store'
import GoJS from '@/components/pages/GoJS'
import jexcel from '@/components/pages/jexcel'
import GoogleMap from '@/components/pages/GoogleMap'
import Modal from '@/components/pages/Modal'
import ModalWindow from '@/components/pages/ModalWindow'
import Bootstrap from '@/components/pages/Bootstrap'
import Api from '@/components/pages/Api'

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
      path: '/times',
      name: 'times',
      component: Times,
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
      path: '/modalWindow',
      name: 'modalWindow',
      component: ModalWindow,
      props: true
    },
    {
      path: '/bootstrap',
      name: 'bootstrap',
      component: Bootstrap,
      props: true
    },
    {
      path: '/api',
      name: 'api',
      component: Api,
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
