<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";

export default defineComponent({
  name: "DefaultLayout",
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
  <nav >
    <div class="nav-icon">
      <span><img id="logo" src="@/assets/log/SVG/MainNoDescriptionRed.svg" alt=""></span>
    </div>

    <div class="nav-router me-5">
      <router-link to="/">Bosh sahifa</router-link>
      <router-link to="/individual_or_group_speaking" >Gapirish mahorati</router-link>
      <router-link to="/writing_task1_task2" >Yozish mahorati</router-link>


      <template v-if='isLoggedIn '>
        <div class="dropdown">
          <a class="btn" href="#" role="button" data-bs-toggle="dropdown"
             aria-expanded="false">
            <i class="fa fa-user-circle fa-3x" style="color: #1A1A1A"></i>
          </a>

          <ul class="dropdown-menu">

            <li v-if="user?.type === 'admin'">
              <router-link class="dropdown-item" to="/admin">Kirish</router-link>
            </li>
            <li v-if="user?.type === 'student'">
              <router-link class="dropdown-item" to="/student_panel">Kirish</router-link>
            </li>
            <li>
              <router-link @click="logout" class="dropdown-item" to="#">Chiqish</router-link>
            </li>
          </ul>
        </div>

      </template>
      <template v-if='isAnonymous'>
        <router-link to="/login" >Login</router-link>
        <router-link to="/user_registration" >Sign up</router-link>
      </template>


    </div>
  </nav>
  <div style="position: relative">
    <slot/>
  </div>
</template>

<style scoped>

nav {
  //position: fixed;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  z-index: 10;
  height: 84px;
  width: 100%;




}


nav .nav-router {
  display: flex;
  align-items: center;
  height: 84px;
}

nav .nav-router a {
  font-size: 18px;
  color: #1A1A1A;
  margin: 12px;
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;

  text-decoration: none;
}

nav .nav-router a:hover {
  background-color: #478ACD;
  color: white;
}

.active {
  background-color: #478ACD;
  color: white !important;
}

nav .nav-icon span {
  font-size: 40px;
  margin-left: 10px;
  font-weight: 900;
  color: white;
}

i:hover {
  cursor: pointer;
}

.dropdown-menu li a {
  color: black;
}


#logo {
    width: 200px !important;
    height: 70px !important;

}


</style>