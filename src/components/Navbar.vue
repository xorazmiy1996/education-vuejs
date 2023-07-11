<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";
import {getterTypes} from "@/modules/types";
import userNavbar from "@/router/index"

export default defineComponent({
  name: "Navbar",
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

</template>

<style scoped>
nav-head {
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: hsla(230, 40%, 50%, 1);
  z-index: 10;
  width: 100%;


}


nav-head .nav-router {
  display: flex;
  align-items: center;
  height: 70px;
}

nav-head .nav-router a {
  font-size: 18px;
  font-weight: 700;
  margin: 12px;
  padding: 10px;
  color: white;
  text-decoration: none;
}

nav-head .nav-router a:hover {
  color: #fd5f00;
}

.activate {
  color: #fd5f00;
}

nav-head .nav-icon span {
  font-size: 40px;
  margin-left: 10px;
  font-weight: 900;
  color: white;
}

i:hover {
  cursor: pointer;
}

.dropdown-menu li a {
  color: deepskyblue;
}


</style>