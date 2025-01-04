import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AskSamyView from '../views/AskSamyView.vue'
import BooksView from '../views/BooksView.vue'
import ComingSoonView from '../views/ComingSoonView.vue'
import ForParentsView from '../views/ForParentsView.vue'
import ReachOutView from '../views/ReachOutView.vue'
import ReadAloudView from '../views/ReadAloudView.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/ask-samy',
      name: 'askSamy',
      component: AskSamyView,
    },
    {
      path: '/books',
      name: 'books',
      component: BooksView,
    },
    {
      path: '/coming-soon',
      name: 'comingSoon',
      component: ComingSoonView,
    },
    {
      path: '/for-parents',
      name: 'forParents',
      component: ForParentsView,
    },
    {
      path: '/reach-out',
      name: 'reachOut',
      component: ReachOutView,
    },
    {
      path: '/read-alouds',
      name: 'readAlouds',
      component: ReadAloudView,
    },

  ],
})

export default router
