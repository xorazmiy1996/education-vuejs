<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";
import SuccessAlertModal from "@/ui-componets/alert-modal/SuccessAlertModal.vue";
import Modal from "@/ui-componets/Modal.vue";
import ErrorAlertModal from "@/ui-componets/alert-modal/ErrorAlertModal.vue";


import 'vue3-toastify/dist/index.css';
import Loader from "@/ui-componets/Loader.vue";



export default defineComponent({
  name: "IndividualSpeakingDetail",
  components: {Loader, ErrorAlertModal, Modal, SuccessAlertModal},

  computed: {
    ...mapGetters('cabinet', ['detailCabinet']),
    ...mapGetters('cabinet', ['isLoading']),
    ...mapGetters('auth', ['user'])
  },

  mounted() {
    this.$store.dispatch("cabinet/detailCabinet", this.$route.params.id)
  },


  methods: {
    add_student_cabinet(id) {
      this.$store.dispatch("cabinet/addStudentCabinet", id)
          .then(response => {
            this.$toast.success(`Add Course`,
                {
                  position: "top-right",
                }
            );
          })
          .catch(error =>{
            if(error.detail === "You already registered for this course"){
              this.$toast.success(`Вы уже зарегистрировались на этот курс`,
                  {
                    position: "top-right",
                  }
              );
            }
            if(error.detail === "Course is fulled"){
              this.$toast.error(`Курс заполнен`,
                  {
                    position: "top-right",
                  }
              );
            }
            if(error.detail === "Please verify your email!"){
              this.$toast.error(`Пожалуйста, подтвердите свой адрес электронной почты!`,
                  {
                    position: "top-right",
                  }
              );
            }
            if(error.detail === "Authentication credentials were not provided."){
              this.$toast.error(`Учетные данные для аутентификации не были предоставлены.`,
                  {
                    position: "top-right",
                  }
              );
            }
            if(error.detail === "You can't join this course. Because you are teacher"){
              this.$toast.error(`Вы не сможете присоединиться к курсу так как вы сам создатель курса.`,
                  {
                    position: "top-right",
                  }
              );
            }

          })

    },



  }


})
</script>

<template>
  <section>
    <div class="container mt-5">
      <div class="row">
        <div class="col-8">
          <div class="video_player">
            <video v-if="detailCabinet?.course?.video" controls autoplay name="media" width="620">
              <source :src="detailCabinet?.course?.video" type="video/mp4">
            </video>
          </div>
        </div>
        <div class="col-4">
            <div class="card">
              <!--            <div class="profile-avatar">-->
              <!--              <img :src="detailCabinet?.teacher?.photo" class="card-img-top" alt="...">-->
              <!--            </div>-->

              <div class="card-body">

                <h5 class="card-title">{{ detailCabinet?.teacher?.first_name }}
                  {{ detailCabinet?.teacher?.last_name }}</h5>
                <div class="d-flex justify-content-between text-info">
                  <span>Опыт работы:</span>
                  <span>{{ detailCabinet?.teacher?.experience }} лет</span>
                </div>
                <div class="d-flex justify-content-between text-info">
                  <span>Уровень Английского (IELTS):</span>
                  <span><a style="background: #5b35a2; color: #FFFFFF" v-if="detailCabinet?.teacher?.ielts_file"  target="_blank" :href="detailCabinet?.teacher?.ielts_file"
                           class="btn btn-outline-primary">{{ detailCabinet?.teacher?.ielts }}</a></span>
                </div>
                <div class="d-flex justify-content-between text-info">
                  <span>Время уроков:</span>
                  <span>{{ detailCabinet?.time }}</span>
                </div>
                <div class="d-flex justify-content-between text-info">
                  <div>
                    <span>Дни уроков:</span>
                  </div>
                  <div>
                    <span style="background: #5b35a2" v-for="day in detailCabinet?.weekdays" class="badge  week_day">
                        <b v-if="day === '0'">1</b>
                        <b v-if="day === '1'">2</b>
                        <b v-if="day === '2'">3</b>
                        <b v-if="day === '3'">4</b>
                        <b v-if="day === '4'">5</b>
                        <b v-if="day === '5'">6</b>
                        <b v-if="day === '6'">7</b>
                    </span>
                  </div>


                </div>
                <div class="d-flex justify-content-between text-info">
                  <span>Цена урока:</span>
                  <span>{{ detailCabinet?.course?.price }} сум</span>
                </div>
                <div class="d-flex justify-content-between text-info">
                  <span>Участники:</span>
                  <span>{{ detailCabinet?.students.length }}/4</span>
                </div>



              </div>



            </div>
            <div class="contained-button">
              <button style="background: #5b35a2" :disabled="isLoading" @click="add_student_cabinet(detailCabinet.id)" class="btn btn-primary button_submit">Присоединиться к классу
              </button>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.course-detail{
  position: relative;
  width: 100%;
  align-content: space-between;
}
.video_player {
  position: relative;
  width: 100%;
  height: 440px;
  margin-bottom: 20px;
  border-radius: 16px;
  overflow: hidden;
  background-color: #f2f4f7;
  object-fit: contain;
}

video {
  position: relative;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 1;

}

.tutor_profile_player_button {
  position: absolute;
  top: calc(50% - 36px);
  right: calc(50% - 36px);
  width: 78px;
  height: 78px;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, .43);
  background-color: #fff;
  background-clip: padding-box;
}

.col-4 .card {
  border: none;
  padding: 0;
}

.col-4 .profile-avatar {
  width: 139px;
  height: 139px;
}

.profile-avatar img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
}

.col-8 {
  padding: 0 40px 0 40px;
}

.col-4 {
  padding-left: 40px;
}

.col-4 .card-title {
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: -0.25px;
  margin: 0;
  padding: 0;
}

.info span {
  font-size: 15px;
  color: #717171;
}

.button_submit {
  width: 100%;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: .2px;
  font-weight: 600;
  height: 62px;
  align-items: center;
  background-color: #5856d6;
}

.week_day {
  margin: 2px;
  background-color: #5856d6;
}

.text-info {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  color: #717171 !important;
  margin-bottom: 0px;
  padding: 3px;
}
.loader{
  position: fixed;
  top:50%;
  left: 50%;

}

</style>