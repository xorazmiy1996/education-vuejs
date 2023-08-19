<script>
import {mapGetters} from "vuex";
import Loader from "@/ui-componets/Loader.vue";

export default {
  name: "EssayChecker",
  components: {Loader},
  data() {
    return {
      text_essay: null
    }
  },
  computed: {
    ...mapGetters('essay', ['isLoading', 'essayChecker'])

  },
  methods: {
    submitHandler() {
      console.log('1')

      const text = {
        "text": this.text_essay
      }
      return this.$store.dispatch('essay/essayChecker', text)
          .then(
              console.log
          )
          .catch(error => {
            console.log(error)
          })

    },
  }
}
</script>

<template>
  <Loader v-if="isLoading" class="offset-md-6" />


  <div v-if="!isLoading" class="card">
    <div class="card-body">
      <form @submit.prevent="submitHandler">
        <div class="mb-3">
          <label for="exampleInputEssayChecker" class="form-label">Essay text</label>
          <textarea v-model="text_essay" style="height: 300px" type="text" class="form-control"
                    id="exampleInputEssayChecker"></textarea>
        </div>

        <button :disabled="isLoading" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
  <div v-for="essay_feedback in essayChecker">
    <div v-if="essay_feedback?.wordCount?.value" class="card mt-5 p-3 text-center">
      Words count: <span style="color: red">{{ essay_feedback?.wordCount?.value }}</span>
    </div>

    <div v-for="result in essay_feedback?.errorCount?.errorData?.result" class="card mt-3 p-3">
      {{ result.feedback }}: <span :innerHTML="result.marked_text"></span>

    </div>


  </div>
</template>

<style scoped>

</style>