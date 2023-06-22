<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";

export default defineComponent({
  name: "StudentPanel",
  computed:{
    ...mapGetters('auth', ['user'])
  },
})
</script>


<template>
<h1>Student</h1>
</template>

<style scoped>




</style>