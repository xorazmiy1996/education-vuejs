<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from "@/components/NavBar.vue";
</script>

<template>
<NavBar/>

  <content>
         <RouterView />
  </content>


</template>

<style scoped>

content{

}

</style>
