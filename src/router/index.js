import {createRouter, createWebHistory} from 'vue-router'

import HomeVue from "@/views/HomeView.vue";

import store from "@/store/main";


import TeacherPanel from "@/components/teacher/TeacherPanel.vue";


import TeacherRegistration from "@/components/registration/TeacherRegistration.vue";
import IndividualSpeaking from "@/views/speaking/IndividualSpeaking.vue";


import GroupSpeaking from "@/views/speaking/GroupSpeaking.vue";
import TestIndividualSpeaking from "@/views/test/TestIndividualSpeaking.vue";
import ResultTestIndividualSpeaking from "@/views/test/ResultTestIndividualSpeaking.vue";
import TestGroupSpeaking from "@/views/test/TestGroupSpeaking.vue";
import ResultTestGroupSpeaking from "@/views/test/ResultTestGroupSpeaking.vue";
import Task1 from "@/views/writing/Task1.vue";
import PaymeTask1Task2 from "@/views/payme/PaymeTask1Task2.vue";
import VerifyCode from "@/components/verify-email/VerifyCode.vue";
import LoginStudent from "@/components/login/LoginUser.vue";

import Unauthorized from "@/components/401/Unauthorized.vue";

import StudentPanel from "@/components/student/StudentPanel.vue";
import AdminPanel from "@/components/admin/AdminPanel.vue";
import AdminCabinet from "@/components/admin/AdminCabinet.vue";
import DetailCabinet from "@/components/admin/DetailCabinet.vue";
import AdminCourse from "@/components/admin/AdminCourse.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import StudentLayout from "@/layouts/StudentLayout.vue";
import MyCourseStudent from "@/components/student/MyCourseStudent.vue";
import StudentAllEssay from "@/components/student/StudentAllEssay.vue";
import AdminAllEssays from "@/components/admin/AdminAllEssays.vue";
import StudentEssayDetail from "@/components/student/StudentEssayDetail.vue";
import AdminEssayDetail from "@/components/admin/AdminEssayDetail.vue";
import Task2 from "@/views/writing/Task2.vue";
import Task3 from "@/views/writing/Task3.vue";
import EssayChecker from "@/components/admin/EssayChecker.vue";
import TeacherLayout from "@/layouts/TeacherLayout.vue";
import IndividualSpeakingDetail from "@/views/speaking/IndividualSpeakingDetail.vue";
import Pragramma from "@/views/Pragramma.vue";
import GeneralSpeaking from "@/views/speaking/GeneralSpeaking.vue";
import TeachersCourse from "@/components/teacher/TeachersCourse.vue";
import StudentRegistration from "@/components/registration/StudentRegistration.vue";
import StudentProfil from "@/components/student/StudentProfil.vue";
import AllUserList from "@/components/admin/AllUserList.vue";
import AllStudentComment from "@/components/admin/AllStudentComment.vue";
import CridetCard from "@/components/CridetCard.vue";
import ConditionPage from "@/components/conditions/ConditionPage.vue";
import Confidentiality from "@/components/confidentiality/Confidentiality.vue";
import SelectRegistrationStudent from "@/components/registration/SelectRegistrationStudent.vue";
import JobOpportunityRegistration from "@/components/registration/JobOpportunityRegistration.vue";
import MyFreeTimes from "@/components/teacher/MyFreeTimes.vue";


const router = createRouter({
    // linkActiveClass: "active",
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeVue,
            meta: {
                Layout: DefaultLayout,
                skip: true
            }
        },
        {
            path: '/test_individual_speaking',
            name: 'test_individual_speaking',
            component: TestIndividualSpeaking,
            meta: {
                Layout: DefaultLayout
            }
        },
        {
            path: '/test_group_speaking',
            name: 'test_group_speaking',
            component: TestGroupSpeaking,
            meta: {
                Layout: DefaultLayout
            }
        },
        {
            path: '/general_speaking',
            name: 'general_speaking',
            component: GeneralSpeaking,
            meta: {
                Layout: DefaultLayout
            }
        },
        {
            path: '/login',
            name: 'login',
            component: LoginStudent,
            meta: {
                Layout: DefaultLayout
            }
        },
        {
            path: '/verify_code',
            name: 'verify_code',
            component: VerifyCode,
            meta: {
                Layout: DefaultLayout
            }
        },
        {
            path: '/individual_speaking',
            name: 'individual_speaking',
            component: IndividualSpeaking,
            meta: {
                // requiresAdmin: true,
                Layout: DefaultLayout
            }
        },
        {
            path: '/individual_speaking_detail/:id',
            name: 'individual_speaking_detail',
            component: IndividualSpeakingDetail,
            meta: {
                // requiresAdmin: true,
                Layout: DefaultLayout
            }
        },
        {
            path: '/group_speaking',
            name: 'group_speaking',
            component: GroupSpeaking,
            meta: {
                Layout: DefaultLayout
            }
        },

        {
            path: '/result_test_individual_speaking',
            name: 'result_test_individual_speaking',
            component: ResultTestIndividualSpeaking,
            meta: {
                Layout: DefaultLayout
            }
        },
        {
            path: '/result_test_group_speaking',
            name: 'result_test_group_speaking',
            component: ResultTestGroupSpeaking,
            meta: {
                Layout: DefaultLayout
            }
        },
        {
            path: '/condition',
            name: 'condition',
            component: ConditionPage,
            meta: {
                Layout: DefaultLayout
            }
        },
        {
            path: '/confidentiality',
            name: 'confidentiality',
            component: Confidentiality,
            meta: {
                Layout: DefaultLayout
            }
        },
        // student
        {
            path: '/select_registration',
            name: 'select_registration',
            component: SelectRegistrationStudent,
            meta: {
                Layout: DefaultLayout
            }
        },
        {
            path: '/teacher_registration',
            name: 'teacher_registration',
            component: TeacherRegistration,
            meta: {
                requiresAdmin: false,
                Layout: DefaultLayout
            }
        },
        {
            path: '/student_registration',
            name: 'student_registration',
            component: StudentRegistration,
            meta: {
                requiresAdmin: false,
                Layout: DefaultLayout
            }
        },

        {
            path: '/task_1',
            name: 'task_1',
            component: Task1,
            meta: {
                requiresAdmin: true,
                Layout: DefaultLayout,
                accessTokenCheck: true,
            }
        },
        {
            path: '/task_2',
            name: 'task_2',
            component: Task2,
            meta: {
                requiresAdmin: true,
                Layout: DefaultLayout
            }
        },
        {
            path: '/task_3',
            name: 'task_3',
            component: Task3,
            meta: {
                requiresAdmin: true,
                Layout: DefaultLayout
            }
        },
        {
            path: '/payme_task1_task2',
            name: 'payme_task1_task2',
            component: PaymeTask1Task2,
            meta: {
                Layout: DefaultLayout
            }
        },
        // 401 unauthorized
        {
            path: '/unauthorized',
            name: 'unauthorized',
            component: Unauthorized,
            meta: {
                Layout: DefaultLayout
            }
        },
        // admin
        {
            path: '/admin',
            name: 'admin',
            component: AdminPanel,
            meta: {
                requiresAdmin: true,
                Layout: AdminLayout

            }
        },
        {
            path: '/all-users',
            name: 'all-users',
            component: AllUserList,
            meta: {
                requiresAdmin: true,
                Layout: AdminLayout

            }
        },
        {
            path: '/admin_all_essays',
            name: 'admin_all_essays',
            component: AdminAllEssays,
            meta: {
                requiresAdmin: true,
                Layout: AdminLayout

            }
        },
        {
            path: '/admin_essay_detail/:id',
            name: 'admin_essay_detail',
            component: AdminEssayDetail,
            meta: {
                requiresAdmin: true,
                Layout: AdminLayout
            }
        },
        {
            path: '/admin_cabinet',
            name: 'admin_cabinet',
            component: AdminCabinet,
            meta: {
                requiresAdmin: true,
                Layout: AdminLayout
            }

        },
        {
            path: '/admin_course',
            name: 'admin_course',
            component: AdminCourse,
            meta: {
                requiresAdmin: true,
                Layout: AdminLayout
            }

        },
        {
            path: '/essay_checker',
            name: 'essay_checker',
            component: EssayChecker,
            meta: {
                requiresAdmin: true,
                Layout: AdminLayout
            }

        },
        {
            path: '/all_student_comment',
            name: 'all_student_comment',
            component: AllStudentComment,
            meta: {
                requiresAdmin: true,
                Layout: AdminLayout
            }

        },

        // student
        {
            path: '/student_profil',
            name: 'student_profil',
            component: StudentProfil,
            meta: {
                requiresAdmin: true,
                Layout: StudentLayout
            }
        },
        {
            path: '/student_panel',
            name: 'student_panel',
            component: StudentPanel,
            meta: {
                requiresAdmin: true,
                Layout: StudentLayout
            }
        },
        {
            path: '/my_course_student',
            name: 'my_course_student',
            component: MyCourseStudent,
            meta: {
                requiresAdmin: true,
                Layout: StudentLayout
            }
        },
        {
            path: '/student_essay_detail/:id',
            name: 'student_essay_detail',
            component: StudentEssayDetail,
            meta: {
                requiresAdmin: true,
                Layout: StudentLayout
            }
        },


        {
            path: '/educations/cabinet/:id',
            name: 'cabinet',
            component: DetailCabinet,
            meta: {
                requiresAdmin: true,
                Layout: DefaultLayout
            }

        },
        {
            path: '/student_all_essay',
            name: 'student_all_essay',
            component: StudentAllEssay,
            meta: {
                requiresAdmin: true,
                Layout: StudentLayout
            }

        },

        // teacher
        {
            path: '/teacher_panel',
            name: 'teacher_panel',
            component: TeacherPanel,
            meta: {
                requiresAdmin: true,
                Layout: TeacherLayout

            }
        },
        {
            path: '/my_free_times',
            name: 'my_free_times',
            component: MyFreeTimes,
            meta: {
                requiresAdmin: true,
                Layout: TeacherLayout

            }
        },
        {
            path: '/job_opportunity',
            name: 'job_opportunity',
            component: JobOpportunityRegistration,
            meta: {
                Layout: DefaultLayout

            }
        },
        {
            path: '/teachers_course',
            name: 'teachers_course',
            component: TeachersCourse,
            meta: {
                requiresAdmin: true,
                Layout: TeacherLayout

            }
        },

        {
            path: '/pragramma',
            name: 'pragramma',
            component: Pragramma,
            meta: {

                Layout: DefaultLayout
            }
        },

        {
            path: '/cridet-card',
            name: 'cridet_card',
            component: CridetCard,
            meta: {
                Layout: DefaultLayout

            }

        },



    ]
});


router.beforeEach((to, from, next) => {
    const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);
    let skip = false;
    to.matched.some(record => {
        skip = record.meta.skip;
    });
    const isAuthenticated = localStorage.getItem('token'); // ro'yxatdan o'tganmi yo'qmi?
    if(skip == true){
        next();
        return;
    }
    if (requiresAdmin && isAuthenticated == null) {
        next({name: 'login'});
    } else {
        next();
    }
});

export default router




