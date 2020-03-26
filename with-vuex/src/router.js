import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

const List = () => import(/* webpackChunkName: "list" */ '@/views/List.vue');
const Item = () => import(/* webpackChunkName: "item" */ '@/views/Item.vue');
const NotFound = () => import(/* webpackChunkName: "not-found" */ '@/views/NotFound.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/(planets|people|species|films)',
      name: 'list',
      component: List,
    },
    {
      path: '/(planets|people|species|films)/:id',
      name: 'item',
      component: Item,
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound,
    },
  ],
});
