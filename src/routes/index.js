import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Frames from '../views/Frames.vue'
import Frame from '../views/Frame.vue'
import Everything from '../views/Everything.vue'
import Parts from '../views/Parts.vue'
import Part from '../views/Part.vue'
import Sequence from '../views/Sequence.vue'
import Sequences from '../views/Sequences.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/frames/:frame', name: 'Frame', component: Frame, props: true, meta: {
        breadcrumb: [
            { name: 'Home', link: "/"},
            { name: 'Frames', link: '/frames' },
            { name: 'Frame' },
        ]
    } },
    { path: '/frames', name: 'Frames', component: Frames, meta: {
        breadcrumb: [
            { name: 'Home', link: '/' },
            { name: 'Frames' }
        ]
    }},
    { path: '/everything', name: 'Everything', component: Everything, meta: {
        breadcrumb: [
            { name: 'Home', link: '/' },
            { name: 'Everything' }
        ]
    }},
    { path: '/parts', name: 'Parts', component: Parts, meta: {
        breadcrumb: [
            { name: 'Home', link: '/' },
            { name: 'Parts' }
        ]
    }},
    { path: '/parts/:part', name: 'Part', component: Part, props: true, meta: {
        breadcrumb: [
            { name: 'Home', link: '/' },
            { name: 'Parts', link: '/parts' },
            { name: 'Part', bcGetter: 'getPart' }
        ]
    }},
    { path: '/sequences', name: 'Sequences', component: Sequences, meta: {
        breadcrumb: [
            { name: 'Home', link: '/' },
            { name: 'Sequences' }
        ]
    }},
    { path: '/sequences/:sequence', name: 'Sequence', component: Sequence, props: true, meta: {
        breadcrumb: [
            { name: 'Home', link: '/' },
            { name: 'Sequences', link: '/sequences' },
            { name: 'Sequence', bcGetter: 'getSequence' }
        ]
    }}
]

const router = new VueRouter({
    routes
})

export default router