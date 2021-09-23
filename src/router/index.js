import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

export default createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    // 异步加载Home component: () => import('@/pages/home/Home')
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
});
