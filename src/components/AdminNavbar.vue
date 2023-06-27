<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";

export default defineComponent({
  name: "VerticalNavbar",
  computed: {
    ...mapGetters('auth', ['isLoggedIn', 'isAnonymous', 'user']),
  },

  methods: {
    logout() {
      return this.$store.dispatch("auth/logout")
    }
  }
})
</script>

<template>
  <ul>

    <li>
      <router-link class="active" to="/admin">Admin</router-link>
    </li>
    <li>
      <router-link to="/admin_cabinet">Cabinet</router-link>
    </li>
    <li>
      <router-link to="/admin_course">Course</router-link>
    </li>
    <li>
      <router-link to="#">Contact</router-link>
    </li>
    <li>
      <router-link to="#">About</router-link>
    </li>
  </ul>
  <div>
    <slot/>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 25%;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

li a.active {
  background-color: #04AA6D;
  color: white;
}

li a:hover:not(.active) {
  background-color: #555;
  color: white;
}
</style>