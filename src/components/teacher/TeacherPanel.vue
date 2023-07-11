<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TeacherRegistration",
   methods: {

  },
   computed:{
    isLoading(){
      return this.$store.state.auth.isLoading
    },
  },
})



</script>

<template>
<h1>Teacher</h1>
</template>

<style scoped>

</style>