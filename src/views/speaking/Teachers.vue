<script>
import Loader from "@/ui-componets/Loader.vue";
import {mapGetters} from "vuex";

export default  {
  name: "Teachers",
  components: {Loader},
  data(){
    return{
      filter: {
        page: 1,
        page_size: 1
      }
    }
  },
  computed: {
    ...mapGetters('teacher', ['teachers','isLoading']),
    skill() {
        return this.$route.query.skill
    }
  },
  created() {
    console.log(this.skill)
    this.$store.dispatch("teacher/getAllTeachers", {...this.filter, skill:this.skill})
  },
  methods:{
    teacherCabinets(id){
      return this.$router.push({
        name: `cabinets`,
        query: {
          skill: 'reading',
        }
      })
    },
    onChangePage(page){
      const filter = { ...this.filter, page: page};
      this.$store.dispatch("teacher/getAllTeachers", filter)

    }

  }
}
</script>

<template>
  <div class="container">

    <div  v-if="isLoading" class="loader">
      <Loader />
    </div>
    <div  v-else >
      <div class="row mt-5 ">
        <div class="col-4"  v-for="teacher in teachers?.results">
          <div @click="teacherCabinets(teacher?.id)" class="card">
            <div v-if="teacher?.photo_url" class="card-image">
              <img :src="teacher?.photo_url" alt="">
            </div>
            <div v-else class="card-image">
              <img src="../../assets/teachers/teacher_individual.jpg" alt="">
            </div>
            <div class="card-body">
              <h5 class="card-title">{{teacher?.first_name}} {{teacher?.last_name}}</h5>
              <div class="d-flex justify-content-between align-items-center">
                <div class="">
                  <h5 class="mt-1">SKILLS:{{teacher?.skills}}</h5>
                  <!--                  <h5 class="mt-1">IELTS:{{teacher?.ielts}} (ball)</h5>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <template v-if="true" class="pagination">
        <Vue3BsPaginate
            :total="teachers?.total_items"
            :modelValue="teachers?.pageNumber"
            :perPage="teachers?.pageSize"
            :onChange="onChangePage"
            alignment="center"
        />
      </template>
    </div>









  </div>
</template>

<style scoped>
.container{
  height: 100vh;
}
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
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
}
.level-text{
  font-size: 20px;
  font-weight: 700;
}



</style>