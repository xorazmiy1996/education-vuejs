<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";
import DeleteModal from "@/ui-componets/alert-modal/DeleteModal.vue";
import DetailModal from "@/ui-componets/alert-modal/DetailModal.vue";
import FeedbackCard from "@/ui-componets/card/FeedbackCard.vue";

export default defineComponent({
  name: "AdminEssayDetail",
  components: {FeedbackCard, DetailModal},
  data() {
    return {

      feedback: null,

      score: [],
      taskResponseScore: 0,
      coherenceScore: 0,
      vocabularyScore: 0,
      grammarScore: 0,


      // is

      isUpdateModalOpen: false,
      isDetailModalOpen: false,
      update_id: ''
    }

  },
  // components: {DeleteModal},
  mounted() {
    this.$store.dispatch('essay/getEssayDetail', this.$route.params.id)
  },
  computed: {
    ...mapGetters('essay', ['essaysDetail', 'isLoading']),
    ...mapGetters('topic', ['topic_detail']),


  },
  methods: {
    // update modal
    openUpdateModal(id) {
      this.update_id = id
      this.isUpdateModalOpen = true
    },
    closeUpdateModal() {
      this.isUpdateModalOpen = false
      this.update_id = null
    },
    // detail modal
    openDetailModal(id) {
      // this.update_id = id
      this.isDetailModalOpen = true
      this.getTopicDetail(id)
    },
    closeDetailModal() {
      this.isDetailModalOpen = false
      // this.update_id = null
    },
    submitHandler() {
      const data = {
        data: {
          "score": [
            {
              "name": "Task response",
              "score": parseInt(this.taskResponseScore) ? parseInt(this.taskResponseScore) : 0
            },
            {
              "name": "Coherence & Cohesion",
              "score": parseInt(this.coherenceScore) ? parseInt(this.coherenceScore) : 0
            },
            {
              "name": "Vocabulary",
              "score": parseInt(this.vocabularyScore) ? parseInt(this.vocabularyScore) : 0
            },
            {
              "name": "Grammar",
              "score": parseInt(this.grammarScore) ? parseInt(this.grammarScore) : 0
            }
          ],
          "feedback": this.feedback
        },
        id: this.update_id

      }
      return this.$store.dispatch('essay/updateDetailEssay', data)
          .then(response => {
            this.score = null
            this.feedback = null
            this.closeUpdateModal()
            this.$store.dispatch('essay/getEssayDetail', this.$route.params.id)
          })
          .catch(error => {
            console.log(error)
          })

    },
    getTopicDetail(id) {
      this.$store.dispatch("topic/getTopicDetail", id)
    },

  }
})
</script>

<template>
  <delete-modal :is-open="isUpdateModalOpen" title="Add Feedback" @close="closeUpdateModal">
    <form @submit.prevent="submitHandler">
      <div class="row">
        <div class="col-md-6">
          <label for="specificSizeSelect">Task Response </label>
          <select v-model="taskResponseScore" class="form-select" id="specificSizeSelect">
            <option selected :value="0">None</option>
            <option :value="1">1%</option>
            <option :value="2">2%</option>
            <option :value="3">3%</option>
            <option :value="4">4%</option>
            <option :value="5">5%</option>
            <option :value="6">6%</option>
            <option :value="7">7%</option>
            <option :value="8">8%</option>
            <option :value="9">9%</option>
            <option :value="10">10%</option>
            <option :value="11">11%</option>
            <option :value="12">12%</option>
            <option :value="13">13%</option>
            <option :value="14">14%</option>
            <option :value="15">15%</option>
            <option :value="16">16%</option>
            <option :value="17">17%</option>
            <option :value="18">18%</option>
            <option :value="19">19%</option>
            <option :value="20">20%</option>
            <option :value="21">21%</option>
            <option :value="22">22%</option>
            <option :value="23">23%</option>
            <option :value="24">24%</option>
            <option :value="25">25%</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="specificSizeSelect">Coherence Cohesion</label>
          <select v-model="coherenceScore" class="form-select" id="specificSizeSelect">
            <option selected :value="0">None</option>
            <option :value="1">1%</option>
            <option :value="2">2%</option>
            <option :value="3">3%</option>
            <option :value="4">4%</option>
            <option :value="5">5%</option>
            <option :value="6">6%</option>
            <option :value="7">7%</option>
            <option :value="8">8%</option>
            <option :value="9">9%</option>
            <option :value="10">10%</option>
            <option :value="11">11%</option>
            <option :value="12">12%</option>
            <option :value="13">13%</option>
            <option :value="14">14%</option>
            <option :value="15">15%</option>
            <option :value="16">16%</option>
            <option :value="17">17%</option>
            <option :value="18">18%</option>
            <option :value="19">19%</option>
            <option :value="20">20%</option>
            <option :value="21">21%</option>
            <option :value="22">22%</option>
            <option :value="23">23%</option>
            <option :value="24">24%</option>
            <option :value="25">25%</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <label for="specificSizeSelect">Vocabulary</label>
          <select v-model="vocabularyScore" class="form-select" id="specificSizeSelect">
            <option selected :value="0">None</option>
            <option :value="1">1%</option>
            <option :value="2">2%</option>
            <option :value="3">3%</option>
            <option :value="4">4%</option>
            <option :value="5">5%</option>
            <option :value="6">6%</option>
            <option :value="7">7%</option>
            <option :value="8">8%</option>
            <option :value="9">9%</option>
            <option :value="10">10%</option>
            <option :value="11">11%</option>
            <option :value="12">12%</option>
            <option :value="13">13%</option>
            <option :value="14">14%</option>
            <option :value="15">15%</option>
            <option :value="16">16%</option>
            <option :value="17">17%</option>
            <option :value="18">18%</option>
            <option :value="19">19%</option>
            <option :value="20">20%</option>
            <option :value="21">21%</option>
            <option :value="22">22%</option>
            <option :value="23">23%</option>
            <option :value="24">24%</option>
            <option :value="25">25%</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="specificSizeSelect">Grammar</label>
          <select v-model="grammarScore" class="form-select" id="specificSizeSelect">
            <option selected value="0">None</option>
            <option selected :value="0">None</option>
            <option :value="1">1%</option>
            <option :value="2">2%</option>
            <option :value="3">3%</option>
            <option :value="4">4%</option>
            <option :value="5">5%</option>
            <option :value="6">6%</option>
            <option :value="7">7%</option>
            <option :value="8">8%</option>
            <option :value="9">9%</option>
            <option :value="10">10%</option>
            <option :value="11">11%</option>
            <option :value="12">12%</option>
            <option :value="13">13%</option>
            <option :value="14">14%</option>
            <option :value="15">15%</option>
            <option :value="16">16%</option>
            <option :value="17">17%</option>
            <option :value="18">18%</option>
            <option :value="19">19%</option>
            <option :value="20">20%</option>
            <option :value="21">21%</option>
            <option :value="22">22%</option>
            <option :value="23">23%</option>
            <option :value="24">24%</option>
            <option :value="25">25%</option>
          </select>
        </div>
      </div>
      <div class="mb-3">
        <div class="text-center mt-3">
          <h1>
            Score:{{
              ((this.taskResponseScore + this.coherenceScore + this.vocabularyScore + this.grammarScore) * 9) / 100
            }} </h1>
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Feedback</label>
        <textarea v-model="feedback" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>

  </delete-modal>
  <detail-modal :is-open="isDetailModalOpen" title="Detail quetion" @close="closeDetailModal">
    <p>{{ topic_detail?.title }}</p>
    <img :src="topic_detail?.image">
  </detail-modal>


  <div class="container" v-if="essaysDetail">
    <div class="text-center mt-3">
      <button class="btn btn-primary" @click="openDetailModal(essaysDetail.topic)">{{ essaysDetail.topic }} savol
      </button>

    </div>
    <div class="d-flex flex-row-reverse">
      <button @click="openUpdateModal(essaysDetail.id)" :disabled="isLoading" class="btn btn-primary mb-3">Feedback
        add
      </button>

    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <h5 class="card-header" v-if="essaysDetail.type === 'task1'">20 minutdda yozilgan insho </h5>
          <h5 class="card-header" v-else>40 minutdda yozilgan insho</h5>
          <div class="card-body">
            <p class="card-text">
              {{ essaysDetail.body }}
            </p>
          </div>

        </div>
      </div>
    </div>


    <template v-if="essaysDetail.feedback">
      <div class="text-center mt-3">
        <h1>Feedback</h1>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row  row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                <div id="feedback_card" v-for="score in essaysDetail.score"
                     class="card shadow p-3 mb-5 bg-body-tertiary rounded">

                  <feedback-card :name="score.name" :score="score.score"></feedback-card>
                </div>

              </div>

              <div class="card">
                <div class="card-body">
                 {{ essaysDetail.feedback }}
                </div>
              </div>


            </div>

          </div>
        </div>
      </div>

    </template>
  </div>


</template>

<style scoped>
h1 {
  font-weight: 900;
  color: deepskyblue;
}


label {
  padding-right: 0;
}

#feedback_card {
  margin: 10px !important;
  height: 350px;
  width: 18rem;

}

</style>