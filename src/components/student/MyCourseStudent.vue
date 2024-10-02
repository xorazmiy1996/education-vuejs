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
  data(){
    return{
      student_comment:"",
      cabinet_id:null,

    }
  },
  methods:{
    createStudentComment(){
      const data = {
        "user_id":this.user.id,
        "cabinet_id":this.cabinet_id,
        "comment":this.student_comment,
      }
      this.$store.dispatch("cabinet/createStudentComment", data).then(()=>{
        $('#feedbackModal').modal('hide');
        this.$toast.success(`Отзыв принято`,
            {
              position: "top-right",
            }
        );

      })
    },
    cabinetId(id){
      this.cabinet_id = id;
    }
  }
})
</script>

<template>

  <div class="text-center mt-4 mb-5">
    <h1 class="head-text">Мои курсы</h1>
  </div>
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <!--         <my-course-card v-for="courses in user?.attend_courses" :courses="courses" :key="courses.id"/>-->
      <div v-for="courses in user?.attend_courses">
        <div class="col">
          <div class="card">
            <div class="card-image">
              <img :src="courses?.course?.image" alt="">
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between">
                <div>Цена</div>
                <div>
                  {{ courses?.course?.price }} сум/месяц
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <div>Время уроков</div>
                <div>
                  {{ courses?.time }}
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <div>Дни уроков</div>
                <div>
                    <span v-for="day in courses?.weekdays" class="badge text-bg-primary week_day">
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
                  {{ courses?.course?.level }}
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <div>Длительность</div>
                <div>
                  {{ courses?.course?.duration }} (дней)
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <div>Тип класса</div>
                <div>
                  {{ courses?.course?.type }}
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <div>Начало курса</div>
                <div>
                  {{ courses?.start_date }}
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <div>Обратная связь</div>
                <!-- Button trigger modal -->
                <button @click="cabinetId(courses?.id )" type="button" class="btn btn-primary one-page-button" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>

              </li>
              <li class="list-group-item d-flex justify-content-center">
                <div>
                  <a v-if="!is_paid" :href="courses?.room" class="btn btn-primary">Вход в класс</a>
                  <a v-else  class="btn btn-primary">Pul to'lanmagan</a>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>

    </div>

  </div>

  <!-- Modal -->
  <div class="modal fade" id="feedbackModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Связь</h5>
          <button id="closeModalButton" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="form-floating">
            <textarea v-model="student_comment" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>

          </div>
        </div>
        <div class="modal-footer">
          <button @click="createStudentComment()" type="button" class="btn btn-primary">Отправить</button>
        </div>
      </div>
    </div>
  </div>



  <!--    </div>-->
</template>

<style scoped>

.card {
  border: none;
  border-radius: 12px 12px 0 0;
}

.card .card-image {
  margin-bottom: 4px;
  width: 100%;
  height: 230px;
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, .031372549);
  background-color: rgba(0, 0, 0, 0);
  border-radius: 12px 12px 0 0;
  overflow: hidden;

}

.card .card-body {
  padding: 3px;
  box-shadow: none;
}

.card-body .card-title {
  margin: 0;
  font-weight: bold;
}

.card-body p {
  margin: 0;
  color: #717171;
  font-size: 15px;
}

.card-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
}

.loader {
  position: fixed;
  top: 50%;
  left: 50%;
}

.head-text {
  font-weight: 900;
  color: #4D5EB3;
}
</style>