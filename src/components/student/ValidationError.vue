<script>
import {defineComponent} from 'vue'


export default defineComponent({
  name: "ValidationError",
  props:{
    validationError:{
      type:Array,
       validator: function(value) {
        return value.length > 0
      },
    }
  },

})
</script>

<template>
<p v-for="valid in validationError" class="bg-danger-subtle">{{valid}}</p>
</template>

<style scoped>
p{
  padding: 5px;
  margin: 3px;
  border-radius: 5px;

}
</style>