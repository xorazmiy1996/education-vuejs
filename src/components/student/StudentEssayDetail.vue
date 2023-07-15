<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";

export default defineComponent({
  name: "StudentEssayDetail",
  mounted() {
    this.$store.dispatch('essay/getEssayDetail', this.$route.params.id)
  },
  computed: {
    ...mapGetters('essay', ['essaysDetail'])
  }

})
</script>

<template>

  <div class="container" v-if="essaysDetail">

    <div class="text-center mt-3">
      <h1>{{ essaysDetail.topic }}</h1>

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