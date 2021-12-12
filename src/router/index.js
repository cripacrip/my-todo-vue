import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/notes-block/create',
    name: 'NoteBlockCreate',
    component: () => import('../views/NotesBlock.vue')
  },
  {
    path: '/notes-block/:id',
    name: 'NotesBlock',
    component: () => import('../views/NotesBlock.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
