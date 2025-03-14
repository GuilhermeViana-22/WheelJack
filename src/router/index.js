import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Privacidade from '../views/Privacidade.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/privacidade', component: Privacidade },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
