<script>
import {RouterLink, RouterView} from 'vue-router'


import Footer from "@/components/footer/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import {mapGetters} from "vuex";
import AdminNavbar from "@/components/AdminNavbar.vue";
import StudentNavbar from "@/components/StudentNavbar.vue";
import TeacherNavbar from "@/components/TeacherNavbar.vue";

export default {
  components: {TeacherNavbar, StudentNavbar, AdminNavbar, Navbar},
  created() {
    this.$store.dispatch("auth/getUser")
  },

  computed: {
    ...mapGetters('auth', ['user']),

  }
}


</script>

<template>

  <Navbar/>

  <div v-if="user">
      <AdminNavbar v-if="user.type === 'admin'" class="vertical_navbar" />
      <StudentNavbar v-if="user.type === 'student'" class="vertical_navbar" />
      <TeacherNavbar v-if="user.type === 'teacher'" class="vertical_navbar" />
  </div>

  <section v-if="!user">
    <RouterView/>
  </section>

  <section v-if="user">
    <div class="router-view">
      <RouterView/>
    </div>

  </section>


  <!--  <Footer/>-->


</template>

<style scoped>
section {
  position: relative;
  top: 70px;
  background-color: #f8f9fa;
}

.vertical_navbar {
  position: fixed;
  top: 70px;
  z-index: 700;
}

.router-view {
  position: relative;
  margin-left: 25%;

}

</style>
