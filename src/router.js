import Vue from 'vue'
import Router from 'vue-router'
import signup from './views/signup'
import login from './views/login'
import authorization from './views/authorization'
import infiniteScroll from './views/infiniteScroll'
import pagination from './views/pagination'
import debounce from './views/debounce'
import crud from './views/crud/index'
import crudList from './views/crud/list'
import crudForm from './views/crud/form'
import crudDetail from './views/crud/detail'
import Index from './views/index'
import postIndex from './views/post/index'
import postAdd from './views/post/add'
import postDetail from './views/post/detail'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/authorization',
      name: 'authorization',
      component: authorization,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/infiniteScroll',
      name: 'infiniteScroll',
      component: infiniteScroll
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: pagination
    },
    {
      path: '/debounce',
      name: 'debounce',
      component: debounce
    },
    {
      path: '/crud',
      name: 'crud',
      component: crud,
      children: [
        {
          path: '',
          name: 'crudList',
          component: crudList
        },
        {
          path: 'create',
          name: 'crudCreate',
          component: crudForm
        },
        {
          path: ':id/update',
          name: 'crudUpdate',
          component: crudForm
        },
        {
          path: ':id/detail',
          name: 'crudDetail',
          component: crudDetail
        }
      ]
    },
    {
      path: '/posts',
      name: 'postIndex',
      component: postIndex
    },
    {
      path: '/posts/add',
      name: 'postAdd',
      component: postAdd
    },
    {
      path: '/posts/:postId',
      name: 'postDetail',
      component: postDetail
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!localStorage.getItem('token')) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
