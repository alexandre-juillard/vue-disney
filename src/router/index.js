import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
<<<<<<< HEAD
import MoviesList from '../views/MoviesList.vue'
=======
import AnimeList from '../views/AnimeList.vue'
>>>>>>> ea13c14d09ca189587f693ed2ac2d9afa5788390

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
<<<<<<< HEAD
      path: '/movies',
      name: 'moviesList',
      component: MoviesList
    }   
=======
      path: '/anime',
      name: 'animeList',
      component: AnimeList
    }
   
>>>>>>> ea13c14d09ca189587f693ed2ac2d9afa5788390
  ]
})

export default router
