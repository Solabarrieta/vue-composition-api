import { createRouter, createWebHistory } from "vue-router";
import Transitions from '../layouts/Transitions'
import Home from '../layouts/Home'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/transiciones-vue',
            component: Transitions
        }
    ]
})

export default router;