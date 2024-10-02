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
    }

  },

  computed: {
    ...mapGetters('cabinet', ['detailCabinet','isLoading']),
    ...mapGetters('auth', ['user'])
  },


  mounted() {
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
        const link = response?.payment_link; // serverdan kelgan link
        window.open(link, '_blank'); // yangi tabda ochish
      }).catch(error =>{
        this.$toast.success(`${error}`,
                    {
                      position: "top-right",
                    }
                );
      })

    },

  }


})
</script>

<template>
  <section>
    <div class="container mt-5">
      <div class="row">
        <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12">
          <div class="video_player">
            <video v-if="detailCabinet?.course?.video" controls autoplay name="media" width="620">
              <source :src="detailCabinet?.course?.video" type="video/mp4">
            </video>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 ">
          <div class="card shadow-sm p-3 rounded">
            <div class="card-body">
              <h5 class="card-title">{{ detailCabinet?.teacher?.first_name }}
                {{ detailCabinet?.teacher?.last_name }}</h5>
              <div class="d-flex justify-content-between text-info">
                <span>Опыт работы:</span>
                <span>{{ detailCabinet?.teacher?.experience }} лет</span>
              </div>
              <div class="d-flex justify-content-between text-info">
                <span>Уровень Английского (IELTS):</span>
                <span><a v-if="detailCabinet?.teacher?.ielts_file"
                         target="_blank" :href="detailCabinet?.teacher?.ielts_file"
                         class="btn btn-outline-primary ielts">{{ detailCabinet?.teacher?.ielts }}</a></span>
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
                <span>{{ detailCabinet?.students.length }}/{{ student_count }}</span>
              </div>


            </div>


          </div>
          <div class="contained-button mt-2">
            <button  :disabled="isLoading" @click="add_student_cabinet(detailCabinet.id)"
                    class="btn btn-primary button_submit">Присоединиться к классу
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>


</template>

<style scoped>
.container{
  height: 120vh;
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




.profile-avatar img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
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
  background-color: #5b35a2;
  transition: all 0.3s;
}
.button_submit:hover{
  background-color: #fff;
  color: black;
  transform: scale(1.05);
}
.ielts{
  background: #5b35a2;
  color: #FFFFFF
}
.ielts:hover{
  background-color: #fff;
  color: black ;
  transform: scale(1.05);
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



  .logo img{
    width: 48px;
    margin-right: 10px;
  }
  h5{
    font-size: 16px;
    font-weight: 400;
    color: #fff;
  }

  h6{
    color: #fff;
    font-size: 10px;
    font-weight: 400;
  }

@media (min-width: 576px) {
  .container{
    height: 82vh !important;
  }
}

@media (max-width: 992px) {
 .container{
   max-width: 900px;
 }

}



</style>