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
  <nav>
    <div class="nav-icon">
      <span v-if="!user">Navbar</span>
      <div v-if="user">
        <span v-if="user?.type === 'admin' ">Admin</span>
        <span v-if="user?.type === 'student'">Student</span>
        <span v-if="user?.type === 'teacher'">Teacher</span>
      </div>
    </div>

    <div class="nav-router me-5">
        <router-link to="/" class="a ctivate">Home</router-link>
        <router-link to="/individual_or_group_speaking">Speaking</router-link>
        <router-link to="/writing_task1_task2">Writing</router-link>




      <template v-if='isLoggedIn '>
        <div class="dropdown">
          <a class="btn" href="#" role="button" data-bs-toggle="dropdown"
             aria-expanded="false">
            <i class="fa fa-user-circle fa-3x" style="color: white"></i>
          </a>

          <ul class="dropdown-menu">

            <li v-if="user?.type === 'admin'">
              <router-link  class="dropdown-item" to="/admin">Kirish</router-link>
            </li>
            <li v-if="user?.type === 'student'">
              <router-link  class="dropdown-item" to="/student_panel">Kirish</router-link>
            </li>
            <li>
              <router-link @click="logout" class="dropdown-item" to="#">Chiqish</router-link>
            </li>
          </ul>
        </div>

      </template>
      <template v-if='isAnonymous'>
        <router-link to="/login">Login</router-link>
        <router-link to="/user_registration">Sign up</router-link>
      </template>


    </div>
  </nav>
  <div style="position: relative; top: 70px">
    <slot/>
  </div>
</template>

<style scoped>

nav {
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: hsla(230, 40%, 50%, 1);
  z-index: 10;
  width: 100%;


}


nav .nav-router {
  display: flex;
  align-items: center;
  height: 70px;
}

nav .nav-router a {
  font-size: 18px;
  font-weight: 700;
  margin: 12px;
  padding: 10px;
  color: white;
  text-decoration: none;
}

nav .nav-router a:hover {
  color: #fd5f00;
}

.activate {
  color: #fd5f00;
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
  color: deepskyblue;
}

</style>