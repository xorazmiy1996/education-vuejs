<script>
import {defineComponent} from 'vue'
import {Form, Field} from "vee-validate";

export default defineComponent({
  name: "Input",
  components:{Field},
  props: {
    modelValue: [String, Number],
    type:String,
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value)
    }
  },
})
</script>

<template>
    <input :type=type class="form-control" :value="modelValue" @input="updateInput">
</template>

<style scoped>

</style>