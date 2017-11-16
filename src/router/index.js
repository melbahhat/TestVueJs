import Vue from 'vue'
import Router from 'vue-router'

import VueRessource from 'vue-resource'

import Repository from '@/components/Repository'
import P from '@/components/PaginateR'
import Page from '@/components/Page'
import FilterR from '@/components/FilterR'



import TreeView from "vue-json-tree-view"
import pagination from 'vue-bootstrap-pagination'

Vue.use(TreeView)

Vue.use(Router)
Vue.use(VueRessource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Repository',
      component: Repository
    },
     {
      path: '/P',
      name: 'Prepository',
      component: P
    },
    {
      path: '/page',
      name: 'test',
      component: Page
    },
     {
      path: '/filter',
      name: 'FilterR',
      component: FilterR
    },
     
  ]
})
