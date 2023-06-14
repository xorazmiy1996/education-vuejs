<script setup>
import {RouterLink, RouterView} from 'vue-router'



import Footer from "@/components/footer/Footer.vue";
import Nawbar from "@/components/Nawbar.vue";
</script>

<template>
  <Nawbar/>
  <section >

     <RouterView/>
  </section>


<!--  <Footer/>-->






</template>

<style scoped>
section{
  position: relative;
  top: 70px;
  background-color: #f8f9fa;
}

</style>
