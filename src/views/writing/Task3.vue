<script>
import {defineComponent} from 'vue'
import SuccessAlertModal from "@/ui-componets/alert-modal/SuccessAlertModal.vue";
import {ErrorMessage, Field, Form} from "vee-validate";
import {mapGetters} from "vuex";
import ErrorAlertModal from "@/ui-componets/alert-modal/ErrorAlertModal.vue";

export default defineComponent({
  name: "Task3",
  components: {
    ErrorAlertModal,
    SuccessAlertModal,
    Form,
    Field,
    ErrorMessage

  },

  data() {
    return {
      topic_1: '',
      text_1: '',

      topic_2: '',
      text_2: '',
      isSuccessModalOpen: false,

      endTime: 20,
      isDisable: false,
       isErrorModalOpen: false,

    }
  },
  computed: {
     ...mapGetters("topic", ['topic_task1']),
     ...mapGetters("topic", ['topic_task2']),
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
    this.$store.dispatch("topic/getAllTopic")
  },


  methods: {
    submitHandler() {
      const essay = {
        "essays": [
          {
            "topic": this.topic_task1.id,
            "body": this.text_1,
            "type": 'task1'
          },
          {
            "topic": this.topic_task2.id,
            "body": this.text_2,
            "type": 'task2'
          }
        ]
      }
      this.$store.dispatch("essay/createEssay", essay)
          .then(response => {

            const data = {
              id: response.data.id,
              data: essay
            }
            if (this.text_1 === '' || this.text_2 === '') {
              this.openErrorAlertModal()
            } else{

            this.$store.dispatch('essay/updateEssay', data)
                .then(response => {

                  this.openSuccessModal()
                  this.topic_1 = ''
                  this.text_1 = ''
                  this.topic_2 = ''
                  this.text_2 = ''
                })
                .catch(error => {

                })
            }




          })


    },
    // Success modal
    openSuccessModal() {
      this.isSuccessModalOpen = true
    },
    closeSuccessModal() {
      this.isSuccessModalOpen = false
    },
      // Error Alert  modal
    openErrorAlertModal() {
      this.isErrorModalOpen = true
    },
    closeErrorAlertModal() {
      this.isErrorModalOpen = false
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
    <error-alert-modal :is-open="isErrorModalOpen" title="Error" @close="closeErrorAlertModal">
    <p>Matn kiriting</p>
  </error-alert-modal>
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

  <section>
    <div class="container">
      <div class="d-flex flex-row-reverse">
        <div class="mt-3"><h5>Task2 {{ countdownText }}</h5></div>
      </div>
      <div class="row">
        <div class="col-6">
          <br>
          <div class="card mt-2">
            <div class="card-body">
               <p v-if="topic_task1" class="card-text">{{ topic_task1.title }}</p>
              <img v-if="topic_task1" :src="topic_task1.image" class="card-img-bottom" alt="...">
            </div>
          </div>

        </div>
        <div class="col-6">
          <br>
          <div class="card mt-2">
            <div class="card-body">
               <p v-if="topic_task2" class="card-text">{{ topic_task2.title }}</p>
              <img v-if="topic_task2" :src="topic_task2.image" class="card-img-bottom" alt="...">
            </div>
          </div>

        </div>


      </div>
      <div class="row">
        <div class="col-12">
          <form @submit.prevent="submitHandler" class="row g-3">
            <div class="col-md-6">
<!--              <label for="inputTopic1" class="form-label">Topic1</label>-->
<!--              <input :disabled="isDisable" v-model="topic_1" type="text" class="form-control" id="inputTopic1"-->
<!--                     :required="true">-->
              <br>
              <label for="inputTask1" class="form-label">inputTask1</label>
              <textarea :disabled="isDisable" v-model="text_1" type="text" class="form-control" id="inputTopic1"
                        :required="true"></textarea>
            </div>
            <div class="col-md-6">
<!--              <label for="inputTopic2" class="form-label">Topic2</label>-->
<!--              <input :disabled="isDisable" v-model="topic_2" type="text" class="form-control" id="inputTopic2"-->
<!--                     :required="true">-->
              <br>
              <label for="inputTask2" class="form-label">inputTask1</label>
              <textarea :disabled="isDisable" v-model="text_2" type="text" class="form-control" id="inputTopic2"
                        :required="true"></textarea>
            </div>

            <div class="col-12">
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <br>
    <br>


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

textarea {
  height: 300px;
}

.carta {
  display: flex;
  justify-content: space-between;
}
</style>