<script>
import {defineComponent} from 'vue'
import {mapGetters, mapState} from "vuex";
import Loader from "@/ui-componets/Loader.vue";
import ValidationError from "@/components/login/ValidationError.vue";
import Modal from "@/ui-componets/Modal.vue";
import Input from "@/ui-componets/Input.vue";
import ErrorAlertModal from "@/ui-componets/alert-modal/ErrorAlertModal.vue";
import SuccessAlertModal from "@/ui-componets/alert-modal/SuccessAlertModal.vue";

export default defineComponent({
  name: "DetailCabinet",
  data() {
    return {
      isModalOpen: false,
      isSuccessModalOpen: false,


    }
  },
  components: {SuccessAlertModal, ErrorAlertModal, Input, Modal, ValidationError, Loader},
  computed: {
    ...mapGetters('cabinet', ['detailCabinet', 'isLoading', 'addStudentCabinetError'])
  },
  created() {
    this.$store.dispatch('cabinet/detailCabinet', this.$route.params.id)

  },
  methods: {
    addStudentCabinet() {
      this.$store.dispatch('cabinet/addStudentCabinet', this.$route.params.id)
          .then(response => {
            this.openSuccessModal()
          })
          .catch(error => {
            this.openModal()
          })

    },
    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    },
    // Success modal
     openSuccessModal() {
      this.isSuccessModalOpen = true
    },
    closeSuccessModal() {
      this.isSuccessModalOpen = false
    }
  }

})
</script>

<template>

    <error-alert-modal :is-open="isModalOpen" title="Failure" @close="closeModal">
      <p>{{ addStudentCabinetError.detail }}</p>
    </error-alert-modal>
   <success-alert-modal :is-open="isSuccessModalOpen" title="Success" @close="closeSuccessModal">
      <p>Success add course</p>
    </success-alert-modal>




  <div class="container">


    <br>
    <Loader v-if="isLoading" class="offset-md-6"/>
    <div v-else>
      <div class="row">
        <div class="col-12">
          <div class="d-flex align-items-center justify-content-center mb-3 shadow p-3  bg-body-tertiary rounded"
               style="height: 10vh">
            <h1>{{ detailCabinet.course.name }}-{{ detailCabinet.course.level }}</h1>
          </div>
        </div>
        <div class="col-12">
          <div class="card mb-3 shadow p-3  bg-body-tertiary rounded" style="max-width: 100%;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="@/assets/image/home_image/course.png" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">

                  <p class="card-text"><b>Description:</b> {{ detailCabinet.course.description }}</p>
                  <p class="card-text"><b>Level:</b> {{ detailCabinet.course.level }}</p>
                  <p class="card-text"><b>Skill:</b>
                    <span v-for="skill in  detailCabinet.course.skills" class="badge text-bg-primary">
                      {{ skill }}
                    </span>
                  </p>
                  <p class="card-text"><b>Teacher:</b>
                    {{ detailCabinet.teacher.first_name }}.{{ detailCabinet.teacher.last_name }}</p>
                  <p class="card-text"><b>Week days:</b>
                    <span v-for="day in detailCabinet.weekdays" class="badge text-bg-primary">
                        <b v-if="day === '0'">Monday</b>
                        <b v-if="day === '1'">Tuesday</b>
                        <b v-if="day === '2'">Wednesday</b>
                        <b v-if="day === '3'">Thursday</b>
                        <b v-if="day === '4'">Friday</b>
                        <b v-if="day === '5'">Saturday</b>
                        <b v-if="day === '6'">Sunday</b>
                    </span>


                  </p>
                  <p class="card-text"><b>Time:</b> {{ detailCabinet.time }}</p>
                  <p class="card-text"><b>Duration:</b> {{ detailCabinet.course.duration }} days</p>
                  <p class="card-text"><b>Price:</b> {{ detailCabinet.course.price }} so'm</p>
                  <p class="card-text"><small class="text-body-secondary">Start date
                    {{ detailCabinet.start_date }}</small>
                  </p>
                  <div>
                    <button @click="addStudentCabinet" type="button" class="btn btn-primary">Add course</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>

  </div>
  <!--  <h1>{{ detailCabinet }}</h1>-->


</template>

<style scoped>
span {
  margin-left: 10px;
}
</style>