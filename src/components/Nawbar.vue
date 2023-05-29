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
          <router-link to="/course">Course</router-link>
          <router-link to="/tests">Contact</router-link>

    </div>
  </nav>
</template>

<style scoped>
nav{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: #0d1128;
}
nav .nav-icon span{
  color: white;
}
nav .nav-router{
  display: flex;
  align-items: center;
  height: 70px;
}
nav .nav-router a{
  font-size: 20px;
  margin: 12px;
  padding: 10px;
  color: white;
}
nav .nav-router a:hover{
  color: #fd5f00;
}
.activate{
  color: #fd5f00 !important;
}
nav .nav-icon span{
  font-size: 40px;
  margin-left: 10px;
  font-weight: 900;
  color: #fd5f00;
}

</style>