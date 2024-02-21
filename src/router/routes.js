const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/home.vue'),
  },
]

export default routes
