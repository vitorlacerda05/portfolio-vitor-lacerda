import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Project from './views/Project.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/project/:id', name: 'project', component: Project, props: true },
  {
    // Legacy /project/foo.html links → redirect to /project/foo
    path: '/project/:id.html',
    redirect: to => ({ name: 'project', params: { id: to.params.id } })
  },
  {
    // Legacy /index.html → home
    path: '/index.html',
    redirect: '/'
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router
