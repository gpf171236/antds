import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/one/HelloWorld'
import In from '@/components/in'
import Npmq from '@/components/two/Npmq'
import Threea from '@/components/three/threea'
import Foura from '@/components/four/foura'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    // },
    {
      path: '/',
      name: 'in',
      component: In,
      children:[
        {
         path: '/HelloWorld',
         component: HelloWorld,
        },
        {
          path: '/npmq',
          component: Npmq,
         },
         {
          path: '/threea',
          component: Threea,
         },
         {
          path: '/foura',
          component: Foura,
         } 
      ]
    }
  ]
})
