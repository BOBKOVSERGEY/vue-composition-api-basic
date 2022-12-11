import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ModalsView from '../views/ModalsView.vue'
import PostView from '../views/PostView.vue'
import PostViewDetail from '../views/PostViewDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/modals',
      name: 'modals',
      component: ModalsView
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostView
    },
    {
      path: '/posts/:id',
      name: 'postsDetail',
      component: PostViewDetail
    }
  ]
})

export default router
