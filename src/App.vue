<script>
import {mapGetters} from "vuex";
export default {
  components: {},
  updated() {
    this.$store.dispatch("auth/getUser")
  },
  computed: {
    ...mapGetters('auth', ['user']),

  }
}


</script>

<template>
  <component :is="this.$route.meta.Layout">
    <router-view/>
  </component>
</template>

<style scoped>

</style>
