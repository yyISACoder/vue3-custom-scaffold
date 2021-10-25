import routes from './routes'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
