import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Frames from '../views/Frames.vue'
import Frame from '../views/Frame.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/frames/:frame', name: 'Frame', component: Frame, props: true, meta: {
        breadcrumb: [
            { name: 'Home', link: "/"},
            { name: 'Frame' }
        ]
    } },
    { path: '/frames', name: 'Frames', component: Frames}
]

const router = new VueRouter({
    routes
})

export default router