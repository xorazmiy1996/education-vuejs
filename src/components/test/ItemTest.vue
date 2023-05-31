<script>
import {defineComponent} from 'vue'
import ItemAnswer from "@/components/test/ItemAnswer.vue";

export default defineComponent({
  name: "ItemTest",
  components: {ItemAnswer},
  props:{
    item_test:{
      type:Object,
      required:true,
    }
  }

})
</script>

<template>

<div class="card">
        <h5 class="card-header">{{ item_test.id }}-savol</h5>
        <div class="card-body">
          <h5 class="card-title">{{ item_test.question_text }}</h5>
          <div class="test-choose">
            <ItemAnswer v-for="answer in item_test.answers" v-bind:answer="answer" />

          </div>

        </div>
      </div>

</template>

<style scoped>

</style>