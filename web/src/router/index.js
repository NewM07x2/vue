import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/page/General/Main'
// import SystemErorr from '@/components/page/General/SystemErorr'
import Contact from '@/components/page/General/Contact'
import Login from '@/components/page/General/Login'
import Profile from '@/components/page/General/Profile'
import Error404 from '@/components/page/General/Error404'
import Error500 from '@/components/page/General/Error500'
// import temple from '@/components/page/General/temple'
import store from '@/components/sample/store/store'

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
      path: '/#',
      name: 'Main',
      component: Main,
      props: true
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      props: true
    },
    // {
    //   path: '/systemErorr',
    //   name: 'SystemErorr',
    //   component: SystemErorr,
    //   props: true
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      props: true
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      props: true
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      props: true
    },
    {
      path: '/*',
      name: 'Error404',
      component: Error404,
      props: true
    },
    {
      path: '/error500',
      name: 'Error500',
      component: Error500,
      props: true
    },
    {
      path: '/sample/store',
      name: 'store',
      component: store,
      props: true
    }
  ]
})
