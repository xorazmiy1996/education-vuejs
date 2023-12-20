<script>
import MyCourseCard from "@/components/card/MyCourseCard.vue";
import {mapGetters} from "vuex";

export default {
  name: "TeachersCourse",
  components: {MyCourseCard},
  computed: {
    ...mapGetters('auth', ['user']),
  },

  methods:{
    createZoomLink(id){
      console.log("id=",id)
      this.$store.dispatch("zoom/createZoomLink", id)
          .then(response =>{
            location.reload();
            console.log(response)

          })
          .catch(error => {
            this.$toast.error(`Course hali to'lmagan, link yatrata olmaysiz!`,
                {
                  position: "top-right",
                }
            );
              }
          )
    }

  }
}
</script>

<template>
  <div class="text-center mt-4">
    <h1 class="head-text">Мои курсы</h1>
  </div>
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-5">
      <div  v-for="cabinet in user?.teach_courses">
        <div class="col">
          <div class="card">
            <div class="card-image">
              <img :src="cabinet?.course?.image" alt="">
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between">
                <div>Цена</div>
                <div>
                  {{cabinet?.course?.price}} сум/месяц
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <div>Время уроков</div>
                <div>
                  {{cabinet?.time}}
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <div>Дни уроков</div>
                <div>
                    <span v-for="day in cabinet?.weekdays" class="badge text-bg-primary week_day">
                        <b v-if="day === '0'">1</b>
                        <b v-if="day === '1'">2</b>
                        <b v-if="day === '2'">3</b>
                        <b v-if="day === '3'">4</b>
                        <b v-if="day === '4'">5</b>
                        <b v-if="day === '5'">6</b>
                        <b v-if="day === '6'">7</b>
                    </span>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <div>Уровень курса</div>
                <div>
                  {{cabinet?.course?.level}}
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <div>Длительность</div>
                <div>
                  {{cabinet?.course?.duration}} (дней)
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <div>Тип класса</div>
                <div>
                  {{cabinet?.course?.type}}
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <div>Начало курса</div>
                <div>
                  {{cabinet?.start_date}}
                </div>
              </li>
<!--              <li class="list-group-item d-flex justify-content-center">-->
<!--                <div>-->
<!--                  <div class="d-flex justify-content">-->
<!--                    Link:-->
<!--                  </div>-->
<!--                  <div>-->
<!--                    <a target="_blank" :href="cabinet?.room">{{cabinet?.room}}</a>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </li>-->
              <li class="list-group-item d-flex justify-content-center">
                <div>
                  <button @click="createZoomLink(cabinet?.id)" class="btn btn-primary">Создавать линк</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

.card{
  border: none;
  border-radius: 12px 12px 0 0;
}
.card .card-image{
  margin-bottom: 4px;
  width: 100%;
  height: 230px;
  box-shadow: 0px 2px 6px 2px rgba(0,0,0,.031372549);
  background-color: rgba(0,0,0,0);
  border-radius: 12px 12px 0 0;
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

.head-text{
  font-weight: 900;
  color: #4D5EB3;
}

</style>