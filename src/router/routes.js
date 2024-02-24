const routes = [
  {
    path: '/:key',
    name: 'home',
    component: () => import('../views/home/home.vue'),
  },
]

export default routes
