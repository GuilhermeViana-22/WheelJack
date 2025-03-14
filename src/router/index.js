import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Privacidade from '../views/Privacidade.vue';
import Produtos from '../views/Produtos.vue';

const routes = [
  { path: '/', name: 'home', component: Home }, // Nome da rota para facilitar a navegação programática
  { path: '/privacidade', component: Privacidade },
  { path: '/produtos', component: Produtos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
