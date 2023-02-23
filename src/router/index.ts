import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import('../feature_auth/presentation/login/LoginView.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () =>
        import('../feature_auth/presentation/signup/SignUpView.vue'),
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: () =>
        import('../feature_rooms/presentation/views/RoomsListView.vue'),
    },
    {
      path: '/room/:id',
      name: 'roomDetails',
      component: () =>
        import('../feature_rooms/presentation/views/RoomDetailsView.vue'),
    },
  ],
})

export default router
