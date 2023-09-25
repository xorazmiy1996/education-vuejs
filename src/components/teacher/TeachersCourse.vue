<script>
import MyCourseCard from "@/components/card/MyCourseCard.vue";
import {mapGetters} from "vuex";

export default {
  name: "TeachersCourse",
  components: {MyCourseCard},
  computed: {
    ...mapGetters('auth', ['user']),
  },
}
</script>

<template>

  <div class="text-center mt-4">
    <h1 class="head-text">My courses</h1>
  </div>
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <my-course-card v-for="courses in user.attend_courses" :courses="courses" :key="courses.id"/>
    </div>
  </div>

</template>

<style scoped>

</style>