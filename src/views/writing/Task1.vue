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

      minute: 0,
      second: 0,

    }
  },
  computed: {
    ...mapGetters("topic", ['topic_task1']),
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


      // return `${daqiqa}:${soniyalar}`;
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
      console.log("salom")
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


  <section class="u-align-center u-clearfix u-palette-2-base u-section-10" id="sec-69be">
    <div class="u-clearfix u-sheet u-sheet-1">
      <div class="u-countdown u-countdown-1" data-timer-id="4a0d" data-type="to-date"
           data-target-date="Tue, 22 Aug 2023 05:21:09 GMT" data-for="everyone" data-direction="down">
        <div class="u-countdown-wrapper u-spacing-20">

          <div class="u-countdown-item u-countdown-minutes u-spacing-10">
            <div class="u-countdown-counter u-countdown-counter-4">
              <div class="u-countdown-number">{{ countdownText }} {{ minute }}</div>

            </div>
            <div class="u-countdown-label u-countdown-label-4">Minutes</div>
          </div>
          <div class="u-countdown-separator u-countdown-separator-4">:</div>
          <div class="u-countdown-item u-countdown-seconds u-spacing-10">
            <div class="u-countdown-counter u-countdown-counter-5">
              <div class="u-countdown-number">{{ second }}</div>
            </div>
            <div class="u-countdown-label u-countdown-label-5">Seconds</div>
          </div>
          <div class="u-countdown-separator u-hidden u-countdown-separator-5">:</div>
          <div class="u-countdown-item u-countdown-numbers u-hidden u-spacing-10">
            <div class="u-countdown-counter u-countdown-counter-6">
              <div class="u-countdown-number">0</div>
              <div class="u-countdown-number">0</div>
            </div>
            <div class="u-countdown-label u-countdown-label-6">Items</div>
          </div>
        </div>
        <div class="u-countdown-message u-hidden"><p>Sorry, the time is up.</p></div>
      </div>
      <h2 class="u-align-left u-custom-font u-font-ubuntu u-text u-text-1"><span style="font-size:1.875rem;">Academic Writing Part&nbsp;1</span><br><span
          style="font-size:1.5rem;">You should spend about 20 minutes on this task. Write at least 150 words.</span>
      </h2><a href="https://nicepage.best"
              class="u-border-none u-btn u-button-style u-hover-white u-palette-2-base u-btn-1">SO'ZLAR SONI:
      {{ wordCount }}</a>
    </div>
  </section>
  <section class="u-clearfix u-palette-1-light-3 u-section-11" id="sec-2423">
    <div class="u-clearfix u-sheet u-sheet-1">
      <form @submit.prevent="submitHandler">
                 <div class="u-clearfix u-expanded-width u-gutter-28 u-layout-wrap u-white u-layout-wrap-1">

        <div class="u-layout">
          <div class="u-layout-row">
                 <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
              <div class="u-container-layout u-container-layout-1">
                <p v-if="topic_task1" class="u-custom-font u-font-ubuntu u-text u-text-1">{{ topic_task1.title }}</p>
                <img v-if="topic_task1" :src="topic_task1.image" class="u-image u-image-default u-image-1"
                     alt="">
              </div>
            </div>
                 <div class="u-container-style u-layout-cell u-shape-rectangle u-size-30 u-white u-layout-cell-2">
              <textarea :disabled="isDisable" v-model="topic_text" type="text" :required="true" name="topic_text"
                        @input="countWords" class="u-container-layout u-container-layout-2"></textarea>


            </div>

          </div>
        </div>
      </div>
      <button  class="u-border-none u-btn u-btn-round u-button-style u-hover-palette-2-base u-palette-2-base u-radius-50 u-btn-1">YUBORISH</button>

      </form>
    </div>
  </section>


</template>
<style scoped>
section {
  padding: 0 40px;
}

</style>

