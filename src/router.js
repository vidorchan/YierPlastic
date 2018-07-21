import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Company from './views/Company'
import Device from './views/Device'
import Certificates from './views/Certificates'
import Team from './views/Team'
import Culture from './views/Culture'
import Products from './views/Products'
import ProductDetails from './views/ProductDetails'
import QualityManagement from './views/QualityManagement'
import News from './views/News'
import Contact from './views/Contact'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/company',
            name: 'company',
            component: Company
        },
        {
            path: '/device',
            name: 'device',
            component: Device
        },
        {
            path: '/certificates',
            name: 'certificates',
            component: Certificates
        },
        {
            path: '/team',
            name: 'team',
            component: Team
        },
        {
            path: '/culture',
            name: 'culture',
            component: Culture
        },
        {
            path: '/products',
            name: 'products',
            component: Products
        },
        {
            path: '/proDetails',
            name: 'proDetails',
            component: ProductDetails
        },
        {
            path: '/qm',
            name: 'qm',
            component: QualityManagement
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ],
    mode: 'history'
})