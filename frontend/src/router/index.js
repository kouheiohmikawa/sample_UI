import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';
import StyleGuide from '../pages/StyleGuide.vue';
import Dashboard from '../pages/Dashboard.vue';
import Table from '../pages/Table.vue';
import Details from '../pages/Details.vue';
import Modal from '../pages/Modal.vue';
// …他ページ

const routes = [
  { path: '/', component: StyleGuide },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/table', component: Table },
  { path: '/details', component: Details },
  { path: '/modal', component: Modal },
];
export default createRouter({ history: createWebHistory(), routes });
