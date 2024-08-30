<script>
import {mapGetters} from "vuex";

export default {
  name: "GroupSpeakingTeachers",
  computed: {
    ...mapGetters('teacher', ['teachersHaveCabinet']),
  },
  mounted() {
    this.$store.dispatch("teacher/getAllTeachersHaveCabinet")
  },
}
</script>

<template>
  {{ teachersHaveCabinet }}
  slfgfg
</template>

<style scoped>

</style>