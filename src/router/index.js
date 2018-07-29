import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Member from '@/views/Member'
import Search from '@/views/Search'
import Shopcart from '@/views/Shopcart'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
      path: '/',
      name: 'Default',
      redirect: {name: 'Home'}
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/shopcart',
      name: 'Shopcart',
      component: Shopcart
    }
  ],
  linkActiveClass: 'activeClass'
})
