<script>
import {defineComponent} from 'vue'
import {Form, Field, ErrorMessage} from "vee-validate";
import SuccessAlertModal from "@/ui-componets/alert-modal/SuccessAlertModal.vue";
import {mapGetters} from "vuex";
import ErrorAlertModal from "@/ui-componets/alert-modal/ErrorAlertModal.vue";

export default defineComponent({
  name: "Task1",
  components: {
    ErrorAlertModal,
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
      isRandomTopic: null,

      wordCount: 0,
      isErrorModalOpen: false,

    }
  },
  computed: {
    ...mapGetters("topic", ['topic_task1']),
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
    // this.topic_title = this.topics[Math.floor(Math.random() * this.topics.length)].title;
  },


  methods: {
    submitHandler() {
      const essay = {
        "essays": [{
          "topic": this.topic_task1.id,
          "body": this.topic_text,
          "type": 'task1'
        }]
      }
      if (this.topic_text === '') {
        this.openErrorAlertModal()
      } else {
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
    countWords() {
      // this.wordCount = this.topic_text.split(' ').filter(word => word !=="").length
      const x = this.topic_text.split(' ')
      let set_words = new Set(x)
      this.wordCount = set_words.size - 1


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
    <section>
      <div class="d-flex flex-row-reverse">
        <div class="mt-3"><h5>Task1 {{ countdownText }}</h5></div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="card  shadow p-3 mb-5 bg-white rounded">
            <div class="card-body">
              <p v-if="topic_task1" class="card-text">{{ topic_task1.title }}</p>
              <img v-if="topic_task1" :src="topic_task1.image" class="card-img-bottom" alt="...">
            </div>
          </div>


        </div>
        <div class="col-6">
          <form @submit.prevent="submitHandler">
            <div>
            </div>
            <div>
<!--              <label for="exampleInputTopicText" class="form-label">Topic text:</label>-->
              <textarea :disabled="isDisable" style="height: 563px" v-model="topic_text" name="topic_text" type="text"
                        class="form-control"
                        :required="true"
                        @input="countWords"
                        id="exampleInputTopicText"/>
              <p>Number of words: {{ wordCount }}</p>

            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>

      </div>


    </section>
  </div>


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