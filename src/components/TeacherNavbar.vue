<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TeacherNavbar"
})
</script>

<template>
<ul>
  <li><router-link class="active" to="#">Home</router-link></li>
  <li><router-link to="#">News</router-link></li>
  <li><router-link to="#">Contact</router-link></li>
  <li><router-link to="#">About</router-link></li>
</ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 25%;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

li a.active {
  background-color: #04AA6D;
  color: white;
}

li a:hover:not(.active) {
  background-color: #555;
  color: white;
}
</style>