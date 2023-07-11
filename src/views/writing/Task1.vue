<script>
import {defineComponent} from 'vue'
import {Form, Field, ErrorMessage} from "vee-validate";
import SuccessAlertModal from "@/ui-componets/alert-modal/SuccessAlertModal.vue";

export default defineComponent({
  name: "Task1",
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

    }
  },


  methods: {
    submitHandler() {
      const essay = {
        "essays": [{
          "topic": this.topic_title,
          "body": this.topic_text
        }]
      }

      this.$store.dispatch("essay/createEssay", essay)
          .then(response => {
            console.log('11111111111')
            const data ={
              id:response.data.id,
              data:essay
            }

            this.$store.dispatch('essay/updateEssay',data)
                .then(response => {
                 console.log('222222222222')
                  this.openSuccessModal()
                  this.topic_title = ''
                  this.topic_text = ''
                })
                .catch(error => {
                  console.log('33333333')

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
        <Form @submit="submitHandler">
          <div class="mb-3">
            <label for="exampleInputTopicTitle" class="form-label">Topic title:</label>
            <Field v-model="topic_title" name="topic_title" :rules="isRequired" type="text" class="form-control"
                   id="exampleInputTopicTitle"/>
            <ErrorMessage name="topic_title"/>
          </div>
          <div class="mb-3">
            <label for="exampleInputTopicText" class="form-label">Topic text:</label>
            <textarea style="height: 300px" v-model="topic_text" name="topic_text" type="text" class="form-control"
                      id="exampleInputTopicText" required/>

          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </Form>
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

span {
  color: red;
}

.carta {
  display: flex;
  justify-content: space-between;
}
</style>