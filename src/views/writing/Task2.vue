<script>
import {defineComponent} from 'vue'
import SuccessAlertModal from "@/ui-componets/alert-modal/SuccessAlertModal.vue";
import {ErrorMessage, Field, Form} from "vee-validate";

export default defineComponent({
  name: "Task2",
  components: {
    SuccessAlertModal,
    Form,
    Field,
    ErrorMessage

  },

  data() {
    return {
      topic_title: '',
      topic_text: '',
      isSuccessModalOpen: false,

      endTime: 20,
      isDisable: false,

    }
  },
  computed: {
    countdownText() {
      if (this.endTime < 0) {
        clearInterval(this.countdownInterval);
        this.isDisable = true
        return 'Vaqt tugadi';

      }
      let daqiqa = Math.floor(this.endTime / 60); // daqiqa hisobi
      let soniyalar = this.endTime % 60; // qoldiq soniya hisobi


      return `Vaqt tugashiga ${daqiqa}:${soniyalar} soniya qoldi`;
    },
  },
  mounted() {
    this.countdownInterval = setInterval(() => {
      this.endTime = this.endTime - 1
    }, 1000);
  },


  methods: {
    submitHandler() {
      const essay = {
        "essays": [{
          "topic": this.topic_title,
          "body": this.topic_text,
          "type": 'task2'
        }]
      }

      this.$store.dispatch("essay/createEssay", essay)
          .then(response => {

            const data = {
              id: response.data.id,
              data: essay
            }

            this.$store.dispatch('essay/updateEssay', data)
                .then(response => {

                  this.openSuccessModal()
                  this.topic_title = ''
                  this.topic_text = ''
                })
                .catch(error => {

                })


          })


    },
    // Success modal
    openSuccessModal() {
      this.isSuccessModalOpen = true
    },
    closeSuccessModal() {
      this.isSuccessModalOpen = false
    },
    isRequired(value) {
      if (!value) {
        return 'this field is required';
      }

      return true;
    },
  },
})
</script>

<template>
  <success-alert-modal :is-open="isSuccessModalOpen" title="Success" @close="closeSuccessModal">
    <p>Sizning inshoyingiz qabul qilndi. to'lovni amalga oshirganigizdan keyin sizga javob yuborilaadi.</p>
    <p>To'lovni quydagi hisobga yuboring:</p>
    <p class="badge text-bg-primary">telegram: @Jasur</p>
    <div class="row mb-3">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Nazarov Jasurbek </h5>
            <div class="d-flex justify-content-between">

              <p class="card-text ">86 00 45 78 92 92 45 25</p>

              <p class="badge text-bg-primary">uzcard</p>

            </div>


          </div>
        </div>
      </div>
    </div>
    <p>To'lovni amalga oshirganigizdan so'ng shaaxsiy telefo'n raqamingiz va to'lov chekini bizning telegramimizga
      yuboring</p>


  </success-alert-modal>
  <br>
  <div class="container text-center">
    <h1>Writing uchun mavzu nomini kiriting!</h1>
  </div>
  <br>
  <section>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <div class="d-flex flex-row-reverse">

          <div><h5>{{ countdownText }}</h5></div>
        </div>
        <form @submit.prevent="submitHandler">
          <div class="mb-3">
            <label for="exampleInputTopicTitle" class="form-label">Topic title:</label>
            <input :disabled="isDisable" v-model="topic_title" name="topic_title" type="text" class="form-control"
                   :required="true" id="exampleInputTopicTitle"/>
            <!--            <ErrorMessage name="topic_title"/>-->
          </div>
          <div class="mb-3">
            <label for="exampleInputTopicText" class="form-label">Topic text:</label>
            <textarea :disabled="isDisable" style="height: 300px" v-model="topic_text" name="topic_text" type="text"
                      class="form-control"
                      id="exampleInputTopicText" :required="true"/>

          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>


  </section>
</template>

<style scoped>
h1 {
  font-weight: 700;
  font-size: 40px;
  color: deepskyblue;
}

h3 {
  color: deepskyblue;
}

h5 {
  color: deepskyblue;
}

span {
  color: red;
}

.carta {
  display: flex;
  justify-content: space-between;
}
</style>