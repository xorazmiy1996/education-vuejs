  <script>
import Loader from "@/ui-componets/Loader.vue";
import {mapGetters} from "vuex";

export default {
  name: "Teachers",
  components: {Loader},
  computed: {
    ...mapGetters('cabinet', ['isLoading']),
    ...mapGetters('teacher', ['teachers'])
  },
  mounted() {
    this.$store.dispatch("teacher/getAllTeachers")
  },
  methods:{
    individualSpeakingCabinets(){
      return this.$router.push(`/individual_speaking`)
    }
  }
}
</script>

<template>
  <div class="container">
    <div  v-if="isLoading" class="loader">
      <Loader />
    </div>
    <div v-else class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-5">
      <div  v-for="teacher in teachers.results">
        <div class="col">
          <div @click="individualSpeakingCabinets()" class="card">
            <div v-if="teacher?.image" class="card-image">
              <img :src="teacher?.image" alt="">
            </div>
            <div v-else class="card-image">
              <img src="../assets/teachers/teacher_individual.jpg" alt="">
            </div>
            <div class="card-body">
              <h5 class="card-title">{{teacher?.first_name}} {{teacher?.last_name}}</h5>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <h5 class="mt-1">IELTS:{{teacher?.ielts}} (ball)</h5>
                  <h5 class="mt-1">skill : {{teacher?.ielts}}</h5>
                </div>
              </div>
            </div>

            <!--            <div class="card-body">-->
            <!--              <h5 class="card-title">{{cabinet.teacher.first_name}} {{cabinet.teacher.last_name}}</h5>-->
            <!--              <p>{{cabinet?.course?.description.slice(0, 50)}}...</p>-->
            <!--              <div class="d-flex justify-content-between align-items-center">-->
            <!--                <div class="btn-group">-->
            <!--                  <h5>{{cabinet?.course?.price}} sum/month</h5>-->
            <!--                </div>-->

            <!--              </div>-->
            <!--            </div>-->
          </div>
        </div>
      </div>
    </div>


    <div  v-for="test in teachers.results">
      <p>{{ test }}</p>
    </div>






  </div>
</template>

<style scoped>
.card{
  border: none;
}
.card .card-image{
  margin-bottom: 4px;
  width: 100%;
  height: 230px;
  box-shadow: 0px 2px 6px 2px rgba(0,0,0,.031372549);
  background-color: rgba(0,0,0,0);
  border-radius: 12px;
  overflow: hidden;

}
.card .card-body{
  padding: 3px;
  box-shadow: none;
}
.card-body .card-title{
  margin: 0;
  font-weight: bold;
}
.card-body p{
  margin: 0;
  color: #717171;
  font-size: 15px;
}
.card-image img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-color: rgba(0,0,0,0);
  cursor: pointer;
}
.loader{
  position: fixed;
  top: 50%;
  left: 50%;
}
.level-text{
  font-size: 20px;
  font-weight: 700;
}


</style>