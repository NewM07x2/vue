import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/page/General/Main'
import SystemErorr from '@/components/page/General/SystemErorr'
import Contact from '@/components/page/General/Contact'
import Login from '@/components/page/General/Login'
import Profile from '@/components/page/General/Profile'

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
    {
      path: '/SystemErorr',
      name: 'SystemErorr',
      component: SystemErorr,
      props: true
    },
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
    }
    // {
    //   path: '/sample',
    //   name: 'sample',
    //   component: sample,
    //   props: true
    // }
  ]
})
