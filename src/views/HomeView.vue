<script>
import {defineComponent} from 'vue'
import Section6 from "@/components/section/Section6.vue";
import Section1 from "@/components/section/Section1.vue";
import Section2 from "@/components/section/Section2.vue";
import Section3 from "@/components/section/Section3.vue";
import CardSwiper from "@/components/swiper/CardSwiper.vue";
import Section4 from "@/components/section/Section4.vue";


export default defineComponent({
  name: "HomeVue",
  components: {Section4, CardSwiper, Section3, Section2, Section1, Section6}
})
</script>

<template>
  <Section1/>
  <Section2/>
  <br>
  <br>
  <br>
  <Section6/>
  <br>
  <br>
  <br>
  <br>
  <Section3/>
  <br>
  <br>
  <br>
  <Section4/>
  <br>
  <br>
  <br>

  <CardSwiper/>


</template>

<style scoped>

</style>