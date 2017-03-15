import Vue from 'vue';
import Router from 'vue-router';
import Page1 from '@/views/page1/index';
import Page2 from '@/views/page2/index';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page1',
      component: Page1
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    }
  ]
})
