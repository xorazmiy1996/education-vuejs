<script>
import Input from "@/ui-componets/Input.vue";
import {mapGetters} from "vuex";

export default {
  name: "TeacherLayout",
  components: {Input},
  computed: {
    ...mapGetters('auth', ['isLoggedIn', 'isAnonymous', 'user']),
  },
  methods: {
    logout() {
      return this.$store.dispatch("auth/logout")
    },
    addDark() {
      this.$refs.section.classList.toggle('dark')
    },
    pushBar() {
      this.$refs.sidebar.classList.toggle('close')
    }
  }
}
</script>

<template>
  <section ref="section">
    <nav-head>
      <div class="nav-icon">
        <span v-if="!user">Navbar</span>
        <div v-if="user">
          <span v-if="user?.type === 'admin' ">Admin</span>
          <span v-if="user?.type === 'student'">Student</span>
          <span v-if="user?.type === 'teacher'">
             <img id="logo" src="@/assets/image/home_image/MainNoDescriptionWhite.png" alt="">
          </span>
        </div>
      </div>

      <div class="nav-router me-5">
        <router-link to="/" class="a ctivate">Главная страница</router-link>
        <template v-if='isLoggedIn '>
          <div>
            <router-link @click="logout" class="dropdown-item" to="#">Выход</router-link>
          </div>

        </template>
        <template v-if='isAnonymous'>
          <router-link to="/login">Войти</router-link>
          <router-link to="/user_registration">Зарегистрируйтесь</router-link>
        </template>


      </div>
    </nav-head>


    <nav ref="sidebar" class="sidebar close">
      <header>

        <i @click="pushBar" class="fa fa-chevron-right toggle"></i>

      </header>
      <div class="menu-bar">
        <div class="menu">

          <ul class="menu-link">
            <li class="nav-link">
              <router-link to="/teacher_panel">
                <i class="fa fa-home-alt icon"></i>
                <span class="text nav-text">Главная страница</span>
              </router-link>
            </li>
            <li class="nav-link">
              <router-link to="/teachers_course">
                <i class="fa-solid fa-person-chalkboard icon"></i>
                <span class="text nav-text">Мои курсы</span>
              </router-link>
            </li>
<!--            <li class="nav-link">-->
<!--              <router-link to="#">-->
<!--                <i class="fa fa-wallet icon"></i>-->
<!--                <span class="text nav-text">My Essay</span>-->
<!--              </router-link>-->
<!--            </li>-->


          </ul>
        </div>
        <div class="bottom-content">
          <li class="">
            <router-link to="#">
              <i class="fa fa-sign-out-alt icon"></i>
              <span class="text nav-text">Выход</span>
            </router-link>
          </li>
          <li class="mode">
            <div class="moon-sun">
              <i class="fa fa-moon icon moon"></i>
              <i class="fa fa-sun icon sun"></i>
            </div>
            <div class="mode-text text">Ночной режим</div>
            <div class="toggle-switch">
              <span @click="addDark" class="switch">
              </span>
            </div>
          </li>
        </div>
      </div>
    </nav>

    <main class="home">
      <slot/>
    </main>
  </section>
</template>

<style scoped>
#logo {
  padding: 7px;
  width: 190px !important;
  height: 65px !important;

}
section {
  height: 100vh;
  background-color: var(--body-color);
  transition: var(--tran-05);
}


/*=====Sidebar=====*/
.sidebar {
  position: fixed;
  top: 70px;
  left: 0;
  padding: 10px 14px;
  height: 90%;
  width: 250px;
  background-color: var(--sidebar-color);
  transition: var(--tran-05);
  z-index: 100;
}

.sidebar.close {
  width: 88px;
}

/*=====Resuable CSS=====*/
.sidebar .text {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-color);
  transition: var(--tran-04);
  white-space: nowrap;
  opacity: 1;
}

.sidebar.close .text {
  //opacity: 0;
  display: none;
}


.sidebar .image {
  min-width: 60px;
  display: flex;
  align-items: center;
}

.sidebar ul {
  padding: 0;
}

.sidebar li {
  height: 50px;
  margin-top: 10px;
  list-style: none;
  display: flex;
  align-items: center;


}

.sidebar li .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  font-size: 20px;

}

.sidebar li .icon,
.sidebar li .text {
  color: var(--text-color);
  transition: var(--tran-02);
}

.sidebar header {
  position: relative;
}


.sidebar .image-text img {
  width: 40px;
  border-radius: 6px;

}

.sidebar header .image-text {
  display: flex;
  align-items: center;

}

header .image-text .header-text {
  display: flex;
  flex-direction: column;
}

.header-text .name {
  font-weight: 600;
}

.header-text .profession {
  margin-top: -4px;
}

.sidebar header .toggle {
  margin-top: 10px;
  position: absolute;
  top: 50%;
  right: -25px;
  transform: translateY(-50%) rotate(180deg);

  height: 25px;
  width: 25px;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--sidebar-color);
  font-size: 22px;
}

.sidebar.close header .toggle {
  transform: translateY(-50%);
  transition: var(--tran-02);

}

section.dark .sidebar header .toggle {
  color: var(--text-color);
}

.sidebar .search-box {
  background: var(--primary-color-light);
  border-radius: 6px;
  transition: var(--tran-05);
}

.search-box input {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 6px;
  background-color: var(--primary-color-light);
  transition: var(--tran-05);
}

.sidebar li a {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 6px;

  transition: var(--tran-04);
}

.sidebar li a:hover {
  background: var(--primary-color);
}

.sidebar li a:hover .icon,
.sidebar li a:hover .text {
  color: var(--sidebar-color);
}

section.dark .sidebar li a:hover .icon,
section.dark .sidebar li a:hover .text {
  color: var(--text-color);
}

.sidebar .menu-bar {

  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu-bar .mode {
  position: relative;
  border-radius: 6px;
  background: var(--primary-color-light);
  transition: var(--tran-05);
}

.menu-bar .moon-sun {
  height: 50px;
  width: 60px;
  display: flex;
  align-items: center;
}

.menu-bar .mode i {
  position: absolute;

}

.menu-bar .mode i.sun {
  opacity: 0;
}

.menu-bar .mode .toggle-switch {
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 60px;
  cursor: pointer;
  border-radius: 6px;
  background: var(--primary-color-light);
  transition: var(--tran-05);

}

.toggle-switch .switch {
  position: relative;
  height: 22px;
  width: 44px;
  border-radius: 25px;
  background: var(--toggle-color);
  transition: var(--tran-05);
}

.switch::before {
  content: '';
  position: absolute;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  background: var(--sidebar-color);
  cursor: pointer;
}

section.dark .switch::before {
  left: 24px;
}

.home {
  position: relative;
  top: 70px;
  padding: 10px 14px;
  min-height: 100vh;
  left: 250px;
  width: calc(100% - 250px);
  background: var(--body-color);
  transition: var(--tran-05);
}

.sidebar.close ~ .home {
  left: 88px;
  width: calc(100% - 88px);
}


/*nav head*/

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