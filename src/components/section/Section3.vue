<script>
import {defineComponent} from 'vue'
import CardSwiper from "@/components/swiper/CardSwiper.vue";

export default defineComponent({
  name: "Section3",
  components: {CardSwiper}
})
</script>

<template>
  <div class="container text-center">
         <h1>Lorem ipsum dolor sit amet.</h1>
  </div>
  <section  class="d-flex justify-content-center mt-5">
    <div class="card  shadow p-3 mb-5 bg-body-tertiary rounded  mb-3" style="max-width: 800px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="@/assets/image/home_image/course_image1.png" class="img-fluid p-2 rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aspernatur at atque aut cumque dolores doloribus ea, exercitationem, hic illo magni neque omnis possimus provident quae, quas quos reiciendis rem sit suscipit tempore voluptates voluptatum? Aliquam atque consectetur cumque debitis dolor ducimus, error, exercitationem nemo numquam perspiciatis quos rerum?</p>
            <router-link to="/teacher_registration" class="btn btn-outline-danger">Begin <i class="fa fa-arrow-right-long"></i> </router-link>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<style scoped>

h1{
  font-weight: 700;
  font-size: 40px ;
  color: dodgerblue;
}
h5{
  font-size: 40px;
  font-weight: 500;
  color: dodgerblue;
}
p{
  font-size: 18px;
  font-weight: 500;
  color: dodgerblue;
}

</style>