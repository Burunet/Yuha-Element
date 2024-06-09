import {createRouter, createWebHistory} from 'vue-router';
import Layout from '@/layout/index.vue';
import Login from '@/views/Login.vue'
import HomeView from '@/views/Home/index.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
            hidden: true
        },
        {
            path: '/',
            component: Layout,
            redirect: '/Dashboard',
            children: [
                {
                    path: '/Dashboard',
                    name: 'Dashboard',
                    component: HomeView,
                    meta: {title: 'Dashboard', icon: 'Odometer'}
                }
            ],
        },
        {
            path: '/table',
            component: Layout,
            redirect: '/table',
            children: [
                {
                    path: '/table',
                    name: 'table',
                    component: () => import('@/views/Table/index.vue'),
                    meta: {title: 'table', icon: 'Document'}
                },
                {
                    path: '/table/table2',
                    name: 'table2',
                    component: () => import('@/views/Table/index.vue'),
                    meta: {title: 'table1', icon: 'Document'}
                }
            ],
            meta: {title: 'Table', icon: 'Menu'}
        },
        {
            path: '/trr',
            component: Layout,
            redirect: '/trr',
            children: [
                {
                    path: '/trr',
                    name: 'trr',
                    component: () => import('@/views/Table/index.vue'),
                    meta: {title: 'trr', icon: 'Document'}
                },
                {
                    path: '/trr/trr2',
                    name: 'trr2',
                    children: [
                        {
                            path: '/trr/trr2/trr2-1',
                            name: 'trr2-1',
                            component: () => import('@/views/Table/index.vue'),
                            meta: {title: 'trr21', icon: 'Document'}
                        },
                        {
                            path: '/trr/trr2/trr2-2',
                            name: 'trr2-2',
                            component: () => import('@/views/Table/index.vue'),
                            meta: {title: 'trr22', icon: 'Document'}
                        }],
                    meta: {title: 'trr2', icon: 'Document'}
                }
            ],
            meta: {title: 'trr', icon: 'Location'}
        }
    ]
});

export default router;
