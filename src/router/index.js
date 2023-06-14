import {createRouter, createWebHistory} from 'vue-router'

import HomeVue from "@/views/HomeView.vue";

import ContactVue from "@/views/ContactView.vue";
import CourseView from "@/views/CourseView.vue";


import TeacherRegistration from "@/components/teacher/TeacherRegistration.vue";

import IndividuallyOrGroups from "@/views/speaking/IndividualOrGroupsSpeaking.vue";
import StudentRegistration from "@/components/student/StudentRegistration.vue";
import IndividualSpeaking from "@/views/speaking/IndividualSpeaking.vue";

import ResulTestSpeaking from "@/views/test/ResultTestIndividualSpeaking.vue";
import GroupSpeaking from "@/views/speaking/GroupSpeaking.vue";
import TestIndividualSpeaking from "@/views/test/TestIndividualSpeaking.vue";
import ResultTestIndividualSpeaking from "@/views/test/ResultTestIndividualSpeaking.vue";
import TestGroupSpeaking from "@/views/test/TestGroupSpeaking.vue";
import ResultTestGroupSpeaking from "@/views/test/ResultTestGroupSpeaking.vue";
import IndividualOrGroupsSpeaking from "@/views/speaking/IndividualOrGroupsSpeaking.vue";
import WritingTask1OrTask2 from "@/views/writing/WritingTask1OrTask2.vue";
import Task1 from "@/views/writing/Task1.vue";
import PaymeTask1Task2 from "@/views/payme/PaymeTask1Task2.vue";
import VerifyCode from "@/components/verify-email/VerifyCode.vue";
import LoginStudent from "@/components/login/LoginStudent.vue";



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
                name: 'home',
            component: HomeVue
        },
        {
            path: '/test_individual_speaking',
            name: 'test_individual_speaking',
            component: TestIndividualSpeaking
        },
         {
            path: '/test_group_speaking',
            name: 'test_group_speaking',
            component: TestGroupSpeaking
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
            path: '/login',
            name: 'login',
            component: LoginStudent
        },
        {
            path: '/verify_code',
            name: 'verify_code',
            component: VerifyCode
        },
        {
            path: '/individual_speaking',
            name: 'individual_speaking',
            component: IndividualSpeaking
        },
        {
            path: '/group_speaking',
            name: 'group_speaking',
            component: GroupSpeaking
        },

        {
            path: '/result_test_individual_speaking',
            name: 'result_test_individual_speaking',
            component: ResultTestIndividualSpeaking
        },
        {
            path: '/result_test_group_speaking',
            name: 'result_test_group_speaking',
            component: ResultTestGroupSpeaking
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
            path: '/individual_or_group_speaking',
            name: 'individual_or_group_speaking',
            component: IndividualOrGroupsSpeaking
        },
        {
            path: '/writing_task1_task2',
            name: 'writing_task1_task2',
            component: WritingTask1OrTask2
        },
        {
            path: '/task_1',
            name: 'task_1',
            component: Task1
        },
        {
            path: '/payme_task1_task2',
            name: 'payme_task1_task2',
            component: PaymeTask1Task2
        },


    ]
})

export default router
