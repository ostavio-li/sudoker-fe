import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import User from '../components/User.vue'
import Sudoku from "../components/Sudoku.vue";
import Demo from "../components/Demo.vue"
import Home from "../components/home.vue"
import Admin from "../components/admin.vue"
import SudokuAdmin from "@/components/SudokuAdmin";
import Login from "@/components/Login";
import First from "@/components/First";
import Course from "@/components/Course";
import NotFound from "@/view/404";

// 静态路由配置

const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: '/',
                component: First
            },
            {
                path: 'login',
                component: Login
            },
            {
                path: 'demo',
                component: Demo
            },
            {
                path: 'course',
                component: Course
            },
            {
                path: '404',
                component: () => import('@/view/404')
            }
        ]
    },
    {
        path: '/adm',
        component: Admin,
        children: [
            {
                path: '/',
                component: User
            },
            {
                path: 'sudoku',
                component: SudokuAdmin
            },
            {
                path: 'user',
                component: User
            },
            {
                path: 'demo',
                component: Demo
            },
            {
                path: 'login',
                component: Login
            }
        ]
    },
    {
        path: '/index.html',
        component: Home,
        children: [
            {
                path: '',
                component: First
            }
        ]
    },

    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
        // component: NotFound
    }

    // {
    //     path: '/404',
    //     name: '404',
    //     component: () => import('@/view/404')
    // }

]

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes: routes
})

export default router