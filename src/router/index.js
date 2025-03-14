import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Privacidade from '../views/Privacidade.vue';
import Produtos from '../views/Produtos.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/privacidade', component: Privacidade },
  { path: '/produtos', component: Produtos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
