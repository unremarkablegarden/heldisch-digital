import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import NotFound from '@/components/pages/404'
import Home from '@/components/pages/Home'
import Denke from '@/components/pages/Denke'
import Cases from '@/components/pages/Cases'
import Spreequell from '@/components/pages/Spreequell'
import Asd from '@/components/pages/Asd'
import Rueckblende from '@/components/pages/Rueckblende'
import EnergieUpdate from '@/components/pages/EnergieUpdate'
import Hartmannbund from '@/components/pages/Hartmannbund'
import Metagate from '@/components/pages/Metagate'
import FullPageMenu from '@/components/pages/FullPageMenu'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) { return savedPosition }
    else { return { x: 0, y: 0 } }
  },
  routes: [
    { path: '*', component: NotFound },
    { path: '/', component: Home },
    { path: '/denke', component: Denke },
    { path: '/cases', component: Cases },
    { path: '/cases/spreequell', component: Spreequell },
    { path: '/cases/asd', component: Asd },
    { path: '/cases/rueckblende', component: Rueckblende },
    { path: '/cases/hartmannbund', component: Hartmannbund },
    { path: '/cases/energie-update', component: EnergieUpdate },
    // { path: '/cases/:slug', component: CaseSingle },
    { path: '/cases/metagate', component: Metagate },
    { path: '/menu', component: FullPageMenu }
  ]
})
