<script>
import {defineComponent} from 'vue'
import CourseCard from "@/components/card/CourseCard.vue";
import {mapState} from "vuex";
import Loader from "@/ui-componets/Loader.vue";

export default defineComponent({
  name: "Speaking",
  components: {Loader, CourseCard},
  mounted() {
      this.$store.dispatch('cabinet/getAllCabinets')
  },
  computed:{
     ...mapState('cabinet',['isLoading','cabinets','error','isLoading'])

  },


})
</script>

<template>
  <section>
    <br>
    <br>
    <div class="container text-center">
      <h1>Speaking individual course</h1>
    </div>
    <br>
    <div class="d-flex justify-content-center mt-5">
      <div class="card  shadow p-3 mb-5 bg-body-tertiary rounded  mb-3" style="max-width: 800px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="../../assets/image/home_image/course_image1.png" class="img-fluid p-2 rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Test</h5>
              <p class="card-text">Test topshirish orqali o'zingizga mos kurslarni tanlang. Bu testda sizga 10 ta savol
                berliladi. Siz to'g'ri togan savollarga qarab veb saytimiz sizga individual kurslarni aftomatik ravishda
                taklif etadi.</p>
              <router-link to="/test_individual_speaking" class="btn btn-primary">Begin <i
                  class="fa fa-arrow-right-long"></i></router-link>
            </div>
          </div>
        </div>
      </div>


    </div>



    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <Loader  v-if="isLoading" class="offset-md-6" />
         <CourseCard v-for="cabinet in cabinets" :cabinet="cabinet" :key="cabinet.id"/>
      </div>


    </div>
  </section>
</template>

<style scoped>
.container h1 {
  font-weight: 700;
  font-size: 40px;
  color: dodgerblue;

}

h5 {
  color: dodgerblue;
}

p {
  color: dodgerblue;
}

li {
  color: dodgerblue;
  background-color: #f8f9fa;
}


</style>