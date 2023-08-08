<script>
import {mapGetters} from "vuex";

export default {
  name: "EssayChecker",
  data(){
    return{
      text_essay:null
    }
  },
  computed:{
    ...mapGetters('essay', ['isLoading','essayChecker'])

  },
  methods:{
     submitHandler() {
      const text = {
         "text":this.text_essay
      }
      return this.$store.dispatch('essay/essayChecker', text)
          .then(response => {

          })
          .catch(error => {
            console.log(error)
          })

    },
  }
}
</script>

<template>
  <div class="card">
    <div class="card-body">
      <form @submit.prevent="submitHandler">
        <div class="mb-3">
          <label for="exampleInputEssayChecker" class="form-label">Essay text</label>
          <textarea v-model="text_essay" style="height: 300px" type="text" class="form-control" id="exampleInputEssayChecker"></textarea>
        </div>

        <button type="submit" :disabled="isLoading" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
  <p>{{essayChecker}}</p>
</template>

<style scoped>

</style>