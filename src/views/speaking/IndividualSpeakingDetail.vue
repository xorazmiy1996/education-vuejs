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
              this.$toast.success(`You already registered for this course`,
                  {
                    position: "top-right",
                  }
              );
            }
            if(error.detail === "Course is fulled"){
              this.$toast.error(`Course is fulled`,
                  {
                    position: "top-right",
                  }
              );
            }

            if(error.detail === "Authentication credentials were not provided."){
              console.log("xato")
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
            <!--            <button class="tutor_profile_player_button">-->
            <!--              <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">-->
            <!--                <path-->
            <!--                    d="M1.47656 3.32618C1.47656 2.67874 1.47656 2.35502 1.61156 2.17657C1.72916 2.02111 1.90891 1.92491 2.1035 1.91329C2.32686 1.89995 2.5962 2.07952 3.13491 2.43866L10.1453 7.11224C10.5904 7.40897 10.813 7.55737 10.8905 7.74437C10.9584 7.9079 10.9584 8.09164 10.8905 8.25517C10.813 8.44217 10.5904 8.5905 10.1453 8.8873L3.13491 13.5608C2.5962 13.92 2.32686 14.0996 2.1035 14.0862C1.90891 14.0746 1.72916 13.9784 1.61156 13.823C1.47656 13.6445 1.47656 13.3208 1.47656 12.6734V3.32618Z"-->
            <!--                    fill="#383838" stroke="#383838" stroke-width="2" stroke-linecap="round"-->
            <!--                    stroke-linejoin="round"></path>-->
            <!--              </svg>-->
            <!--            </button>-->
          </div>
        </div>
        <div class="col-4">

          <div class="card">
            <div class="profile-avatar">
              <img :src="detailCabinet?.teacher?.photo" class="card-img-top" alt="...">
            </div>

            <div class="card-body">
              <h5 class="card-title">{{ detailCabinet?.teacher?.first_name }}
                {{ detailCabinet?.teacher?.last_name }}</h5>
              <div class="d-flex justify-content-between text-info">
                <span>Ish tajribasi:</span>
                <span>{{ detailCabinet?.teacher?.experience }} yil</span>
              </div>
              <div class="d-flex justify-content-between text-info">
                <span>IELTS darajasi:</span>
                <span><a v-if="detailCabinet?.teacher?.ielts_file"  target="_blank" :href="detailCabinet?.teacher?.ielts_file"
                         class="btn btn-outline-primary">{{ detailCabinet?.teacher?.ielts }}</a></span>
              </div>
              <div class="d-flex justify-content-between text-info">
                <span>Soat:</span>
                <span>{{ detailCabinet?.time }}</span>
              </div>
              <div class="d-flex justify-content-between text-info">
                <div>
                  <span>Dars kunlari:</span>
                </div>
                <div>
                    <span v-for="day in detailCabinet?.weekdays" class="badge text-bg-primary week_day">
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
                <span>Kurs narxi:</span>
                <span>{{ detailCabinet?.course?.price }} so'm</span>
              </div>
              <div class="contained-button">
                <button :disabled="isLoading" @click="add_student_cabinet(detailCabinet.id)" class="btn btn-primary button_submit">Darslarga
                  qo'shilish
                </button>
              </div>


            </div>


          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
  width: 360px;
  margin-top: 20px;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: .2px;
  font-weight: 600;
  height: 62px;
  align-items: center;
  background-color: #0d6efd;;
}

.week_day {
  margin: 2px;
}

.text-info {
  font-weight: 700;
  font-size: 18px;
  color: #717171 !important;
  margin-bottom: 10px;
  padding: 3px;
}
.loader{
  position: fixed;
  top:50%;
  left: 50%;

}

</style>