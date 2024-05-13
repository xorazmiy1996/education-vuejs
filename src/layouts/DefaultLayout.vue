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
    },
    jobOpportunity(){
      this.$router.push('/job_opportunity');
    }
  }
})
</script>

<template>
  <nav>
    <div class="nav-icon">
      <span>
        <router-link to="/">
            <img id="logo" src="@/assets/image/home_image/MainNoDescriptionWhite.png" alt="">
        </router-link>

       </span>
    </div>

    <div class="nav-router">
      <router-link to="/pragramma" active-class="active-link">Программы</router-link>
      <template v-if='isLoggedIn '>
        <div v-if="user?.type === 'admin'">
          <router-link to="/admin">Вход</router-link>
        </div>
        <div v-if="user?.type === 'student'">
          <router-link to="/student_panel">Вход</router-link>
        </div>
        <div v-if="user?.type === 'teacher'">
          <router-link to="/teacher_panel">Вход</router-link>
        </div>
      </template>
      <template v-if='isAnonymous'>
        <router-link to="/login" active-class="active-link">Войти</router-link>
        <router-link to="/select_registration" active-class="active-link">Зарегистрируйтесь</router-link>
      </template>
      <router-link to="/job_opportunity" active-class="active-link">Вакансия</router-link>


    </div>
  </nav>
  <div style="position: relative; min-height: auto">
    <slot/>
  </div>
  <section class="tree-page">
    <div class="container">
      <div class="row mb-5">
        <div class="col-xxl-8 col-xl-8 col-lg-12">
          <div class="d-flex text-light justify-content-between mt-3">
            <div class="row o-nas-office">
              <div class="col-md-6 o-nas">
                <div class="fs-4 fw-bold opacity-50">О нас</div>
                <div class="font-monospace">
                  <router-link to="#"
                               class="opacity-50 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover me-3">
                    Команда
                  </router-link>
                  <router-link to="#"
                               class="opacity-50 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover me-3">
                    О проекте
                  </router-link>
                </div>
                <div class="mt-3">
                  <a @click="jobOpportunity()" href="#"
                               class="opacity-50 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover me-3">
                    Вакансии
                  </a>
                  <router-link to="#"
                               class="opacity-50 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover me-3">
                    Помощь
                  </router-link>
                </div>
                <div class="d-flex fs-4 mt-3">
                  <a @click="navigateToCondition" href="#"
                     class="opacity-50 fs-6 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover me-3">Условия</a>
                  <a @click="navigateToConfidentiality" href="#"
                     class="opacity-50 fs-6 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Maxfiylik</a>
                </div>
                <div class="mt-3">
                  <a href="#" @click="navigateToHome">
                    <img id="logo" src="@/assets/image/home_image/MainNoDescriptionWhite.png" alt="">
                  </a>

                </div>
              </div>
              <div class="col-md-6 office">
                <div class="fs-4 fw-bold opacity-50">Офис</div>
                <div class="fs-6 opacity-50 mt-2">220100 Ургенч, Анна Герман 17 учебный центр</div>
                <div class="fs-6 opacity-50 mt-2">Пользовательское соглашение</div>
                <div class="fs-6 opacity-50 mt-2">ООО "SpeakUP" осуществляет деятельность в сфере образования</div>
                <div class="d-flex mt-3">
                  <div class="me-3">
                    <span class="opacity-50 text-underlined"><i class="fa-solid fa-phone-volume fa-2xl " style="color: #FFF;"></i></span>
                  </div>
                  <div class="me-3">
                  <span class="text-underlined">
                     <i class="opacity-50 fa-brands fa-telegram fa-2xl" style="color: #FFF;"></i>
                  </span>
                  </div>
                  <div class="me-3">
                  <span class="text-underlined">
                    <i class="opacity-50 fa-brands fa-square-instagram fa-2xl" style="color: #FFF;"></i>
                  </span>

                  </div>
                  <div class="me-3">
                  <span class="text-underlined">
                     <i class="opacity-50 fa-regular fa-envelope fa-2xl" style="color: #FFF;"></i>
                  </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div class="col-xxl-4 col-xl-4 ">
          <div class="mt-4">
            <Map class="map-style"/>
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
  background-size: cover;
  width: 100%;
  padding-bottom: 2px;
}

.text-underlined {
  text-decoration: underline;
}

.text-underlined::after {
  content: "";
  display: block;
  margin-top: 12px;
  opacity: 50%;
  border-radius: 20%;
  border-bottom: 3px solid;
}

.text-underlined:hover::after {
  opacity: 100%; /* hover holatida opaklikni o'zgartiramiz */
  margin-top: 10px; /* hover holatida marginni o'zgartiramiz */
}
.tree-page .opacity-50:hover{
  opacity: 100% !important;
}


@media (max-width: 576px) {
  .map-style {
    height: 150px;
    width: 320px;
  }
}


@media (max-width: 768px) {
  .map-style {
    height: 150px;
    width: 320px;
  }
}


@media (max-width: 992px) {
  .map-style {
    height: 200px;
    width: 100%;
  }

  .o-nas-office .fs-6 {
    font-size: 20px !important;
  }

  .o-nas-office .fs-4 {
    font-size: 24px !important;
  }

  .o-nas-office .o-nas {
    margin-bottom: 25px;
  }

  .o-nas {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}


@media (max-width: 1200px) {
  .map-style {
    height: 280px;
    width: 100%;
  }

}


@media (min-width: 1200px) {
  .map-style {
    height: 210px;
    width: 450px;
  }
}


</style>