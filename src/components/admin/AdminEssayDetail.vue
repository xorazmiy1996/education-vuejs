<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";
import DeleteModal from "@/ui-componets/alert-modal/DeleteModal.vue";

export default defineComponent({
  name: "AdminEssayDetail",
  data() {
    return {
      score: null,
      feedback: null,

      isUpdateModalOpen: false,
      update_id: ''
    }

  },
  // components: {DeleteModal},
  mounted() {
    this.$store.dispatch('essay/getEssayDetail', this.$route.params.id)
  },
  computed: {
    ...mapGetters('essay', ['essaysDetail'])
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
    submitHandler() {
      const data = {
        data: {
          "score": this.score,
          "feedback": this.feedback
        },
        id:this.update_id

      }
      console.log(data)
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

    }

  }
})
</script>

<template>
  <delete-modal :is-open="isUpdateModalOpen" title="Add Feedback" @close="closeUpdateModal">
    <form @submit.prevent="submitHandler">
      <div class="mb-3">
        <label for="exampleFormControlScore" class="form-label">Score</label>
        <input v-model="score" type="number" class="form-control" id="exampleFormControlScore" placeholder="0-9 ball">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Feedback</label>
        <textarea v-model="feedback" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>

  </delete-modal>


  <div class="container" v-if="essaysDetail">
    <div class="text-center mt-3">
      <h1>{{ essaysDetail.topic }}</h1>

    </div>
    <div class="d-flex flex-row-reverse">
      <button @click="openUpdateModal(essaysDetail.id)" class="btn btn-primary mb-3">Feedback add</button>

    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <h5 class="card-header" v-if="essaysDetail.type === '1'">20 minutdda yozilgan insho </h5>
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
              <p class="card-text">
                {{ essaysDetail.feedback }}
              </p>
            </div>

          </div>
        </div>
      </div>

    </template>


  </div>
</template>

<style scoped>

</style>