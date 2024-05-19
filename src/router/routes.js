const routes = [
  {
    path: '/:key',
    name: 'home',
    component: () => import('../views/home/home.vue'),
  },
  {
    path: '/messageBoard',
    name: 'messageBoard',
    component: () => import('../views/messageBoard/messageBoard.vue')
  }
]

export default routes
