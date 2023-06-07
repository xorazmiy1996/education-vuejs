import {createRouter, createWebHistory} from 'vue-router'

import HomeVue from "@/views/HomeView.vue";
import TestView from "@/views/TestView.vue";
import ContactVue from "@/views/ContactView.vue";
import CourseView from "@/views/CourseView.vue";

import ResulTest from "@/views/ResulTest.vue";
import TeacherRegistration from "@/components/teacher/TeacherRegistration.vue";
import Speaking from "@/views/Speaking.vue";
import IndividuallyOrGroups from "@/views/IndividuallyOrGroups.vue";
import StudentRegistration from "@/components/student/StudentRegistration.vue";



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
            path: '/speaking',
            name: 'speaking',
            component: Speaking
        },

        {
            path: '/resul_test',
            name: 'resul_test',
            component: ResulTest
        },
         {
            path: '/teacher_registration',
            name: 'teacher_registration',
            component: TeacherRegistration
        },
         {
            path: '/student_registration',
            name: 'student_registration',
            component: StudentRegistration
        },
         {
            path: '/individual_or_group',
            name: 'individual_or_group',
            component: IndividuallyOrGroups
        },


    ]
})

export default router
