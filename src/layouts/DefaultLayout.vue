<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";
import Map from "@/components/map/Map.vue";

export default defineComponent({
  name: "DefaultLayout",
  components: {Map},
  computed: {
    ...mapGetters('auth', ['isLoggedIn', 'isAnonymous', 'user']),
  },

  methods: {
    logout() {
      return this.$store.dispatch("auth/logout")
    },
    navigateToCondition() {
      this.$router.push('/condition');
    },
    navigateToConfidentiality() {
      this.$router.push('/confidentiality');
    },
    navigateToHome() {
      this.$router.push('/');
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
        <div v-if="user?.type === 'admin'">
          <router-link  to="/admin">Вход</router-link>
        </div>
        <div v-if="user?.type === 'student'">
          <router-link  to="/student_panel">Вход</router-link>
        </div>
        <div v-if="user?.type === 'teacher'">
          <router-link  to="/teacher_panel">Вход</router-link>
        </div>
      </template>
      <template v-if='isAnonymous'>
        <router-link to="/login" active-class="active-link" >Войти</router-link>
        <router-link to="/select_registration" active-class="active-link" >Зарегистрируйтесь</router-link>
      </template>


    </div>
  </nav>
  <div style="position: relative; min-height: 40vh">
    <slot/>
  </div>
  <section class="tree-page">
    <div class="container">
      <div class="row mb-5">
        <div class="col-8">
          <div class="d-flex text-light justify-content-between mt-3">
            <div>
              <div class="fs-4 fw-bold">О нас</div>
              <div class="fs-6 opacity-50 mt-2">Команда О проекте Вакансии Помощь</div>
              <div class="d-flex fs-4 mt-3">
                <a @click="navigateToCondition" href="#" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover me-3">Shartla</a>
                <a @click="navigateToConfidentiality" href="#" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" >Maxfiylik</a>
              </div>

              <div class="mt-2">
                <a href="#" @click="navigateToHome">
                  <img id="logo" src="@/assets/image/home_image/MainNoDescriptionWhite.png" alt="">
                </a>

              </div>
            </div>
            <div>
              <div class="fs-4 fw-bold">Офис</div>
              <div class="fs-6 opacity-50 mt-2">220100 Ургенч, Анна Герман 17 учебный центр</div>
              <div class="fs-6 opacity-50 mt-2">Пользовательское соглашение</div>
              <div class="fs-6 opacity-50 mt-2">ООО "SpeakUP" осуществляет деятельность в сфере образования</div>


            </div>

          </div>

        </div>
        <div class="col-4">
          <div class="mt-5">
            <Map/>
          </div>




        </div>
      </div>
    </div>



  </section>
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

.tree-page {
  background-color: #3C0C5C;
  min-height: 40vh;
  background-size: cover;
  width: 100%;
}


</style>