<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";
import Input from "@/ui-componets/Input.vue";

export default defineComponent({
  name: "AdminLayout",
  components: {Input},
  computed: {
    ...mapGetters('auth', ['isLoggedIn', 'isAnonymous', 'user']),
  },

  methods: {
    logout() {
      return this.$store.dispatch("auth/logout")
    },
    addDark(){
      this.$refs.section.classList.toggle('dark')
    },
    pushBar(){
      this.$refs.sidebar.classList.toggle('close')
    }
  }
})
</script>

<template>
  <section >
    <nav ref="sidebar" class="sidebar close">
      <header>
        <div class="image-text">
           <span class="image">
          <img src="@/assets/coding-lab.png" alt="logo">
        </span>
          <div class="text header-text">
            <span class="name">CodingLab</span>
            <span class="profession">Web developer</span>

          </div>
        </div>
        <i @click="pushBar" class="fa fa-chevron-right toggle"></i>

      </header>
      <div class="menu-bar">
        <div class="menu">
          <li class="search-box">

            <i class="fa fa-search icon"></i>
            <input type="search" placeholder="Search...">

          </li>
          <ul class="menu-link">
            <li class="nav-link">
              <a href="">
                <i class="fa fa-home-alt icon"></i>
                <span class="text nav-text">Dashboard</span>
              </a>
            </li>
            <li class="nav-link">
              <a href="">
                <i class="fa fa-home-alt icon"></i>
                <span class="text nav-text">Revenue</span>
              </a>
            </li>
            <li class="nav-link">
              <a href="">
                <i class="fa fa-bell icon"></i>
                <span class="text nav-text">Notification</span>
              </a>
            </li>
            <li class="nav-link">
              <a href="">
                <i class="fa fa-heart icon"></i>
                <span class="text nav-text">Like</span>
              </a>
            </li>
            <li class="nav-link">
              <a href="">
                <i class="fa fa-wallet icon"></i>
                <span class="text nav-text">Wallet</span>
              </a>
            </li>
            <li class="nav-link">
              <a href="">
                <i class="fa fa-home-alt icon"></i>
                <span class="text nav-text">Dashboard</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="bottom-content">
          <li class="">
            <a href="">
              <i class="fa fa-sign-out-alt icon"></i>
              <span class="text nav-text">Log out</span>
            </a>
          </li>
          <li class="mode">
             <div class="moon-sun">
                <i class="fa fa-moon icon moon"></i>
                <i class="fa fa-sun icon sun"></i>
             </div>
            <div class="mode-text text">Dark Mode</div>
            <div class="toggle-switch">
              <span @click="addDark" class="switch">
              </span>
            </div>
          </li>
        </div>
      </div>
    </nav>

    <div style="position: relative;top: 70px; left: 400px">
      <slot/>
    </div>
  </section>

</template>

<style scoped>
section {
  height: 100vh;
  background-color: var(--body-color);
  transition: var(--tran-04);
}

/*=====Sidebar=====*/
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 14px;
  height: 100%;
  width: 250px;
  background-color: var(--sidebar-color);
  transition: var(--tran-05);
}
.sidebar.close{
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
.sidebar.close .text{
  opacity: 0;
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
  position: absolute;
  top: 50%;
  right: -25px;
  transform: translateY(-50%);
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

.sidebar .search-box {
  background: var(--primary-color-light);
}

.search-box input {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 6px;
  background-color: var(--primary-color-light);
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
.sidebar .menu-bar{

  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.menu-bar .mode{
  position: relative;
  border-radius: 6px;
  background: var(--primary-color-light);
}
.menu-bar .moon-sun{
  height: 50px;
  width: 60px;
  display: flex;
  align-items: center;
}

.menu-bar .mode i{
  position: absolute;

}
.menu-bar .mode i.sun{
  opacity: 0;
}
.menu-bar .mode .toggle-switch{
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 60px;

}
.toggle-switch .switch{
  position: relative;
  height: 22px;
  width: 44px;
  border-radius: 25px;
  background: var(--toggle-color);
}
.switch::before{
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

section.dark .switch::before{
  left: 24px;
}

</style>