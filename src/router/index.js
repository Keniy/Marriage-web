import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve)
    },
    {
    	path: '/index',
    	component: resolve => require(['../components/Index.vue'], resolve),
    	children: [
    		{
    			path: '/basetable',
    			component: resolve => require(['../components/page/Basetable.vue'], resolve)
    		},
    		{
    			path: '/vuetable',
    			component: resolve => require(['../components/page/Vuetable.vue'], resolve)
    		},
        {
          path: '/users',
          component: resolve => require(['../components/page/user/User.vue'], resolve)
        }
    	]
    }
  ]
})
