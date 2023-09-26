<script>
import {mapGetters} from "vuex";
export default {
  components: {},
  data() {
    return {}
  },
  updated() {
    this.$store.dispatch("auth/getUser")
  },

  created() {
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
