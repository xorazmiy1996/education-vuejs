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

      endTime: 3600,
      isDisable: false,
      isErrorModalOpen: false,

      wordCount1: 0,
      wordCount2: 0,

    }
  },
  computed: {
    ...mapGetters("topic", ['topic_task1']),
    ...mapGetters("topic", ['topic_task2']),
      countdownText() {
      this.minute = Math.floor(this.endTime / 60); // daqiqa hisobi
      this.second = this.endTime % 60; // qoldiq soniya hisobi
      if (this.endTime < 0) {
        clearInterval(this.countdownInterval);
        this.isDisable = true
        this.minute = 0
        this.second = 0
        // return 'Vaqt tugadi';

      }


      // return `Vaqt tugashiga ${daqiqa}:${soniyalar} soniya qoldi`;
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
      if (this.text_1 === '' || this.text_2 === '') {
        // this.openErrorAlertModal()
        this.$toast.error(`Matn kiriting!`,
            {
              position: "top-right",
            }
        );
      } else {
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


              this.$store.dispatch('essay/updateEssay', data)
                  .then(response => {

                    // this.openSuccessModal()
                    this.$toast.success(`Успешно отправлено!`,
                        {
                          position: "top-right",
                        }
                    );
                    this.topic_1 = ''
                    this.text_1 = ''
                    this.topic_2 = ''
                    this.text_2 = ''
                  })
                  .catch(error => {

                  })


            })
      }


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
    countWords1() {
      const x = this.text_1.split(' ')
      let set_words = new Set(x)
      this.wordCount1 = set_words.size - 1
    },
    countWords2() {
      const x = this.text_2.split(' ')
      let set_words = new Set(x)
      this.wordCount2 = set_words.size - 1
    }
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


  <div class="container">
    <div class="row mt-3">
      <div class="col-12 d-flex justify-content-between">
        <div class="header-text">
          <h3>Academic Writing MOCK</h3>
          <h5 class="mt-3">You should spend about 60 minutes on this task. Write at least 400 words.</h5>
        </div>
        <div class="d-flex flex-column">
          <div class="d-flex flex-direction-row">
            {{ countdownText }}
            <div class="d-flex flex-column justify-content-center align-items-center">
              <div><small class="time">{{ minute }}</small></div>
              <div><small class="minute-second">MINUTES</small></div>
            </div>
            <div class="d-flex flex-column">
              <smal class="two-point">:</smal>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center">
              <div><small class="time">{{ second }}</small></div>
              <div><small class="minute-second">SECONDS</small></div>
            </div>

          </div>
          <div  class="words-count">
            <small>Кол. Слов: {{ wordCount1 }} {{wordCount2}}  </small>
          </div>
        </div>


      </div>
    </div>
    <form @submit.prevent="submitHandler">
      <div class="row mt-5">
        <div class="col-sm-6">
          <div class="card shadow bg-body-tertiary rounded" style="width: 100%; height: 60vh">
            <div class="topic-1-text">
              <p v-if="topic_task1">{{ topic_task1.title }}</p>
            </div>
            <div>
              <img  v-if="topic_task1" :src="topic_task1.image" class="card-img" alt="...">
            </div>
          </div>
        </div>
        <div class="col-sm-6 ">
           <textarea :disabled="isDisable" v-model="text_1" type="text" :required="true" name="topic_text"
                     @input="countWords1" class="form-control shadow bg-body-tertiary rounded"></textarea>
        </div>

      </div>
      <div class="row mt-5">
        <div class="col-sm-6">
          <div class="card shadow bg-body-tertiary rounded" style="width: 100%; height: 60vh">
            <div class="topic-1-text">
              <p v-if="topic_task2">{{ topic_task2?.title }}</p>
            </div>
            <div>
              <!--              <img  v-if="topic_task2" :src="topic_task2?.image" class="card-img" alt="...">-->
            </div>
          </div>
        </div>
        <div class="col-sm-6 ">
           <textarea :disabled="isDisable" v-model="text_2" type="text" :required="true" name="topic_text"
                     @input="countWords2" class="form-control shadow bg-body-tertiary rounded"></textarea>
        </div>
        <div class="col-12 mt-3">
          <div class="d-flex justify-content-end mb-5">
            <button style="background: #5b35a2"
                class="btn btn-primary">
              Отправить
            </button>
          </div>

        </div>

      </div>
    </form>
  </div>

</template>

<style scoped>

.header-text{
  padding: 8px;
}
.header-text  h3{
  font-weight: 700;
  font-size: 30px;
}
.header-text  h5{
  font-weight: 700;
  font-size: 24px;
}

.time {
  font-size: 36px;
  color: #404040;
  font-weight: 700;
}

.minute-second {
  font-size: 12px;
  color: #404040;
  font-weight: 400;
}

.two-point {
  font-size: 36px;
  color: #404040;
  font-weight: 700;
  margin-right: 8px;
  margin-left: 8px;
}
.topic-1-text{
  margin: 10px;
}
textarea{
  height: 60vh;
}
.words-count{
  padding: 3px 2px;
  background-color: red;
  color: white;
  border-radius: 7px;
  height: 30px;
  font-size: 20px;
  font-weight: 500;
}
</style>