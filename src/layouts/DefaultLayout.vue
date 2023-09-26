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
      <span>
        <router-link to="/">
            <img id="logo" src="@/assets/image/home_image/MainNoDescriptionWhite.png" alt="">
        </router-link>

       </span>
    </div>

    <div class="nav-router">
      <router-link to="/pragramma"  active-class="active-link">Программы</router-link>

      <template v-if='isLoggedIn '>
        <div class="dropdown">
          <router-link class="btn" to="#"  role="button" data-bs-toggle="dropdown"
             aria-expanded="false">Вход
          </router-link>

          <ul class="dropdown-menu">

            <li v-if="user?.type === 'admin'">
              <router-link style="font-size: 18px" class="dropdown-item" to="/admin">Вход</router-link>
            </li>
            <li v-if="user?.type === 'student'">
              <router-link class="dropdown-item" to="/student_panel">Вход</router-link>
            </li>
            <li v-if="user?.type === 'teacher'">
              <router-link class="dropdown-item" to="/teacher_panel">Вход</router-link>
            </li>
            <li>
              <router-link @click="logout" class="dropdown-item" to="#">Выход</router-link>
            </li>
          </ul>
        </div>

      </template>
      <template v-if='isAnonymous'>
        <router-link to="/login" active-class="active-link" >Войти</router-link>
        <router-link to="/user_registration" active-class="active-link" >Зарегистрируйтесь</router-link>
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
  justify-content: center;
  background-color: #3C0C5C;
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
  color: #fff;
  margin: 12px;
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-decoration: none;
}

/*nav .nav-router a:hover {
  background-color: #478ACD;
  color: white;
}*/

/*
.active-link {
  color: white !important;
  background-color: #478ACD;
}
*/

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

.dropdown-menu li a:hover {
  background-color: #478ACD;
  width: auto;
}


#logo {
    width: 246px !important;
    height: 65px !important;

}


</style>