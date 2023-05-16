import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import ProductDetail from '../views/ProductDetail.vue';
import About from '../views/About-us.vue';
import ShopPage from '../views/ShopPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  
  {
    path: '/shoppage',
    name: 'ShopPage',
    component: ShopPage,
  },
//   {
//     path: '/cart',
//     name: 'Cart',
//     component: Cart,
//   },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About-us.vue'),
  // },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
}
})

export default router;