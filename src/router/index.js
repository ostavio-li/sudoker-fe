import {createRouter, createWebHistory} from 'vue-router'
import User from '../components/User.vue'
import Sudoku from "../components/Sudoku.vue";
import Demo from "../components/Demo.vue"
import Home from "../components/home.vue"
import Admin from "../components/admin.vue"
import SudokuAdmin from "@/components/SudokuAdmin";
import Login from "@/components/Login";
import First from "@/components/First";
import Course from "@/components/Course";

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
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router