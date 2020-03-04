import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/one/HelloWorld'
import In from '@/components/in'
import Npmq from '@/components/two/Npmq'
import Threea from '@/components/three/threea'
import Foura from '@/components/four/foura'
import A from '@/components/three/y/an/anli/foura/a'
import B from '@/components/three/y/an/anli/foura/b'
import C from '@/components/three/y/an/anli/foura/c'
import D from '@/components/three/y/an/anli/foura/d'


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
          children:[
        {
          path: '/a',
          component: A,
         },
         {
          path: '/b',
          component: B,
         },
         {
          path: '/c',
          component: C,
         },
         {
          path: '/d',
          component: D,
         },
          ]
         },
         {
          path: '/foura',
          component: Foura,
         },

         
      ]
    },

  ]
})
