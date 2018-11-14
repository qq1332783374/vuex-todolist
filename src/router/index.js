import Vue from 'vue'
import Router from 'vue-router'
//todoList
import todoList from '@/components/todoList/todoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todoList',
      name: 'todoList',
      component: todoList
    }
  ]
})
