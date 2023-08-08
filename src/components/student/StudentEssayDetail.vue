<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";
import DetailModal from "@/ui-componets/alert-modal/DetailModal.vue";
import FeedbackCard from "@/ui-componets/card/FeedbackCard.vue";

export default defineComponent({
  name: "StudentEssayDetail",
  components: {FeedbackCard, DetailModal},
  data() {
    return {
      isDetailModalOpen: false,
    }

  },
  mounted() {
    this.$store.dispatch('essay/getEssayDetail', this.$route.params.id)
  },
  computed: {
    ...mapGetters('essay', ['essaysDetail']),
    ...mapGetters('topic', ['topic_detail'])
  },
  methods: {
    // detail modal
    openDetailModal(id) {
      this.isDetailModalOpen = true
      this.getTopicDetail(id)
    },
    closeDetailModal() {
      this.isDetailModalOpen = false
    },
    getTopicDetail(id) {
      this.$store.dispatch("topic/getTopicDetail", id)
    },
  }

})
</script>

<template>
  <detail-modal :is-open="isDetailModalOpen" title="Detail quetion" @close="closeDetailModal">
    <p>{{ topic_detail?.title }}</p>
    <img :src="topic_detail?.image">
  </detail-modal>

  <div class="container" v-if="essaysDetail">

    <div class="text-center mt-3 mb-3">
      <button class="btn btn-primary" @click="openDetailModal(essaysDetail.topic)">{{ essaysDetail.topic }} savol
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
#feedback_card {
  margin: 10px !important;
  height: 350px;
  width: 18rem;

}

</style>