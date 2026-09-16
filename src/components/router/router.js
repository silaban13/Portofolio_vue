import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../../views/homeView.vue'
import AboutExplanationView from '../../views/AboutExplanationView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about-explanation',
        name: 'about-explanation',
        component: AboutExplanationView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,

    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }

        return {
            top: 0,
            behavior: 'smooth'
        }
    }
})

export default router