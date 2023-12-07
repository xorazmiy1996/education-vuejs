<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";
import Loader from "@/ui-componets/Loader.vue";

export default defineComponent({
  name: "GroupSpeaking",
  components: {Loader},
  computed: {
    ...mapGetters('cabinet', ['cabinets']),
    ...mapGetters('cabinet', ['isLoading'])
  },
  mounted() {
    this.$store.dispatch("cabinet/getAllCabinets","group")

  },
  methods:{
    individualSpeakingDetail(id){
      return this.$router.push(`/individual_speaking_detail/${id}`)
    }
  }



})
</script>

<template>
  <div class="container">
    <div  v-if="isLoading" class="loader">
      <Loader />
    </div>
    <div v-else class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-5">
      <div  v-for="cabinet in cabinets">
        <div class="col">
          <div @click="individualSpeakingDetail(cabinet?.id)" class="card">
            <div class="card-image">
              <img :src="cabinet?.course?.image" alt="">
            </div>
            <div class="card-body">
              <h5 class="card-title">{{cabinet?.teacher?.first_name}} {{cabinet?.teacher?.last_name}}</h5>
<!--              <p>{{cabinet?.course?.description.slice(0,20)}}...</p>-->
              <div class="d-flex justify-content-between align-items-center">
                <div v-if="cabinet?.course?.level === 'A1'"> Уровень выживания (Beginner)</div>
                <div v-if="cabinet?.course?.level === 'A2'"> Предпороговый уровень (Elementary)</div>
                <div v-if="cabinet?.course?.level === 'B1'"> Пороговый уровень (Intermediate)</div>
                <div v-if="cabinet?.course?.level === 'B2'"> Пороговый продвинутый уровень (Upper-Intermediate)</div>
                <div v-if="cabinet?.course?.level === 'C1'"> Уровень профессионального владения (Advanced)</div>
                <div v-if="cabinet?.course?.level === 'C2'"> Уровень владения в совершенстве (Proficiency)</div>


              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <h5>{{cabinet?.course?.price}} sum/month</h5>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
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

</style>