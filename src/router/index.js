import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/test/Test'
import Index from '@/components/index/Index'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
