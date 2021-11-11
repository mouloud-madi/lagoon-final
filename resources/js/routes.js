import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';

Vue.use(VueRouter)
const routes = [
    //Not found
    {
        path: '*',
        name: 'notFound',
        component: () => import('./components/notFound'),
        meta: {
            title: 'Page not found!'
        }
    },
    //home
    {
        path: '/',
        name: 'home',
        component: () => import('./views/home/index'),
        meta: {
            title: 'Home'
        }
    },
    //about us
    {
        path: '/about-us',
        name: 'about-us',
        component: () => import('./views/about/index'),
        meta: {
            title: 'About Us'
        }
    },
    //our services
    {
        path: '/our-services',
        name: 'our-services',
        component: () => import('./views/service/index'),
        meta: {
            title: 'Our Services'
        }
    },
    //home
    {
        path: '/gallery',
        name: 'gallery',
        component: () => import('./views/gallery/index'),
        meta: {
            title: 'Gallery'
        }
    },
    //home
    {
        path: '/contact-us',
        name: 'contact-us',
        component: () => import('./views/contact/index'),
        meta: {
            title: 'Contact Us'
        }
    },

]
const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start()
    }
    next()
})
router.afterEach(() => {
    NProgress.done()
})

router.beforeEach((to, from, next) => {
    document.title = process.env.MIX_APP_NAME + ' | ' + to.meta.title
    next()
})

export default router
