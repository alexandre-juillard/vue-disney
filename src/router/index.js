import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesList from '../views/MoviesList.vue'
import MoviesDetails from '../views/MoviesDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movies',
      name: 'moviesList',
      component: MoviesList
    },
    {
      path: '/movies/:filmId',
      name: 'moviesDetails',
      component: MoviesDetails
    }
   
  ]
})

export default router
