<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";
import SuccessAlertModal from "@/ui-componets/alert-modal/SuccessAlertModal.vue";
import Modal from "@/ui-componets/Modal.vue";
import ErrorAlertModal from "@/ui-componets/alert-modal/ErrorAlertModal.vue";


import 'vue3-toastify/dist/index.css';
import Loader from "@/ui-componets/Loader.vue";


export default defineComponent({
  name: "IndividualCabinetDetail",
  components: {Loader, ErrorAlertModal, Modal, SuccessAlertModal},
  data() {
    return {
      student_count: 0,
      telegram_silka:'',
    }

  },

  computed: {
    ...mapGetters('cabinet', ['detailCabinet','isLoading']),
    ...mapGetters('auth', ['user'])
  },


  mounted() {
    this.telegram_silka = 'https://t.me/' + this.detailCabinet?.teacher?.telegram_nickname
    this.$store.dispatch("cabinet/detailCabinet", this.$route.params.id).then((res) => {
      if (this.detailCabinet?.course?.type === "individual") {
        this.student_count = 1
      }
      if (this.detailCabinet?.course?.type === "group") {
        this.student_count = 4
      }

      if (this.detailCabinet?.course?.type === "general_english") {
        this.student_count = 4
      }


    })
  },


  methods: {
    add_student_cabinet(id) {
      const data = {
        course_id:id
      }
      this.$store.dispatch("course/subscriptionCourse", data).then(response =>{
        console.log(response)
        const link = response?.payment_link; // serverdan kelgan link
        window.open(link, '_blank'); // yangi tabda ochish
      }).catch(error =>{
        this.$toast.success(`${error}`,
                    {
                      position: "top-right",
                    }
                );
      })


      // console.log(id)
      //
      // this.$store.dispatch("cabinet/addStudentCabinet", id)
      //     .then(response => {
      //       this.$toast.success(`Add Course`,
      //           {
      //             position: "top-right",
      //           }
      //       );
      //     })
      //     .catch(error => {
      //       if (error.detail === "You already registered for this course") {
      //         this.$toast.success(`Вы уже зарегистрировались на этот курс`,
      //             {
      //               position: "top-right",
      //             }
      //         );
      //       }
      //       if (error.detail === "Course is fulled") {
      //         this.$toast.error(`Курс заполнен`,
      //             {
      //               position: "top-right",
      //             }
      //         );
      //       }
      //       if (error.detail === "Please verify your email!") {
      //         this.$toast.error(`Пожалуйста, подтвердите свой адрес электронной почты!`,
      //             {
      //               position: "top-right",
      //             }
      //         );
      //       }
      //       if (error.detail === "Authentication credentials were not provided.") {
      //         this.$toast.error(`Учетные данные для аутентификации не были предоставлены.`,
      //             {
      //               position: "top-right",
      //             }
      //         );
      //       }
      //       if (error.detail === "You can't join this course. Because you are teacher") {
      //         this.$toast.error(`Вы не сможете присоединиться к курсу так как вы сам создатель курса.`,
      //             {
      //               position: "top-right",
      //             }
      //         );
      //       }
      //       // Before join this course, you should make the payment
      //       if (error.detail === "Before join this course, you should make the payment") {
      //         $('#creditModal').modal('show');
      //
      //
      //       }
      //
      //     })

    },
    goToTelegram(){
      window.location.href = "https://t.me/" + this.detailCabinet?.teacher?.telegram_nickname;
    }
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
                <span><a style="background: #5b35a2; color: #FFFFFF" v-if="detailCabinet?.teacher?.ielts_file"
                         target="_blank" :href="detailCabinet?.teacher?.ielts_file"
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
<!--              <div class="d-flex justify-content-between text-info">-->
<!--                <span>Номер карты:</span>-->
<!--                <span>{{ detailCabinet?.card_number }} </span>-->
<!--              </div>-->
              <div class="d-flex justify-content-between text-info">
                <span>Участники:</span>
                <span>{{ detailCabinet?.students.length }}/{{ student_count }}</span>
              </div>


            </div>


          </div>
          <div class="contained-button">
            <button style="background: #5b35a2" :disabled="isLoading" @click="add_student_cabinet(detailCabinet.id)"
                    class="btn btn-primary button_submit">Присоединиться к классу
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- Modal -->
  <div class="modal fade" id="creditModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Payme</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="d-flex justify-content-center modal-body credit">
          <div class="credit-card">
            <header>
            <span class="logo">
                <img src="@/assets/card-image/logo.png" alt="">
                <h5>KAPITALBANK</h5>
            </span>
              <img src="@/assets/card-image/visa-logo-png-5.png" class="chip">
            </header>
            <div class="card-details">
              <div class="name-number">
                <h6>Card Number</h6>
                <h5 class="number">{{detailCabinet?.card_number}}</h5>
                <h5 class="name">{{detailCabinet?.teacher?.first_name}} {{detailCabinet?.teacher?.last_name}}</h5>
              </div>
              <div class="valid-date">
                <h6>Valid Thur</h6>
                <h5>12/21</h5>
              </div>
            </div>

          </div>
         </div>
        <div v-if="!!detailCabinet?.teacher?.telegram_nickname" class="modal-footer">
          <p>Ushbu cartaga curs to'lovini to'lang va bizning  <span @click="goToTelegram()" class="telegram-silka">@{{detailCabinet?.teacher?.telegram_nickname}} </span> telegramimizga checkni yuboring!</p>
        </div>
        <div v-else class="modal-footer">
          <p>Ushbu cartaga curs to'lovini to'lang va bizning  <a  href="https://t.me/speakup_learning_centre"> @speakup_learning_centre </a> telegramimizga checkni yuboring!</p>
        </div>


      </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  height: 57vh;
}
.course-detail {
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

.loader {
  position: fixed;
  top: 50%;
  left: 50%;

}
.modal-body.credit {
  .credit-card{
    position: relative;
    background-image: url("@/assets/card-image/bg.png");
    padding: 25px;
    background-size: cover;
    width: 100%;
    border-radius: 28px;
    max-width: 380px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);

  }
  .logo{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo img{
    width: 48px;
    margin-right: 10px;
  }
  h5{
    font-size: 16px;
    font-weight: 400;
    color: #fff;
  }
  header .chip{
    width: 60px;
  }
  h6{
    color: #fff;
    font-size: 10px;
    font-weight: 400;
  }
  h5.number{
    margin-top: 4px;
    font-size: 18px;
    letter-spacing: 1px;
  }
  h5.name{
    margin-top: 20px;
    cursor: pointer;
  }
  .credit-card .card-details{
    margin-top: 40px;
    display: flex;
    cursor: pointer;

    justify-content: space-between;
    align-items: flex-end;}

}
.telegram-silka{
  color: #0d6efd;
}
.telegram-silka:hover{
  cursor: pointer;
  text-decoration: underline;
}



</style>