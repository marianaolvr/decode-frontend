import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import User from '../views/User.vue';
import Edit from '../views/Edit.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/user',
    name: 'User',
    component: User,
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
