<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";
import CourseCard from "@/components/card/CourseCard.vue";
import Loader from "@/ui-componets/Loader.vue";
import MyCourseCard from "@/components/card/MyCourseCard.vue";

export default defineComponent({
  name: "MyCourseStudent",
  components: {MyCourseCard, Loader, CourseCard},
  computed: {
    ...mapGetters('auth', ['user']),
  },
})
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


<!--    </div>-->
</template>

<style scoped>
.head-text{
  font-weight: 900;
  color: dodgerblue;
}
</style>