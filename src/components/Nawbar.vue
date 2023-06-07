<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Nawbar"
})
</script>

<template>
  <nav>
    <div class="nav-icon">
      <span>Navbar</span>
    </div>
    <div class="nav-router">
      <router-link to="/" class="activate">Home</router-link>
      <router-link to="/individual_or_group">Speaking</router-link>
      <router-link to="#">Writing</router-link>

    </div>
  </nav>
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

</style>