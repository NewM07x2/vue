import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  base: "/app",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
    },
    {
      path: "/top",
      name: "HelloWorld",
      component: HelloWorld,
    },
    {
      path: "/401",
      name: "unAuthorizedPage",
      component: UnAuthorizedPage,
    },
  ],
});
