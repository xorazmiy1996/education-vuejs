<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ItemAnswer",
  props:{
    answer:{
      type:Object,
      types:true,
    }
  }
})
</script>

<template>
 <div class="test-li">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                  {{ answer.text }}
                </label>
              </div>
            </div>
</template>

<style scoped>

</style>