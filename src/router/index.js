import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

const HAS_LOGINED = true

router.beforeEach((to, from, next) => {
  // if (to.meta.title)
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGINED) next({ name: 'home' })
    else next()
  }
})

// router.beforeResolve()

router.afterEach((to, from) => {
  // logining = false
})

export default router

/**
 * 失活的组件：即将离开的页面组件
 * 激活的组件：即将进入的页面组件
 */
