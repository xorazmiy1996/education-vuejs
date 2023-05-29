import {createRouter, createWebHistory} from 'vue-router'

import HomeVue from "@/views/HomeView.vue";
import TestView from "@/views/TestView.vue";
import ContactVue from "@/views/ContactView.vue";
import CourseView from "@/views/CourseView.vue";
import TeacherSignUp from "@/views/TeacherSignUpView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeVue
        },
        {
            path: '/tests',
            name: 'tests',
            component: TestView
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactVue
        },
        {
            path: '/course',
            name: 'course',
            component: CourseView
        },
         {
            path: '/sign_up',
            name: 'sign_up',
            component: TeacherSignUp
        },
    ]
})

export default router
