<script>
import {defineComponent} from 'vue'
import CardSwiper from "@/components/swiper/CardSwiper.vue";

export default defineComponent({
  name: "Section3",
  components: {CardSwiper}
})
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="image-content">
            <img src="@/assets/image/home_image/course_image1.png">
          </div>
        </div>
        <div class="col-6">
          <div class="image-text">
            <h3>Ishga marhamat</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate dolore error inventore iure
              laboriosam, minima numquam officia provident sint totam voluptate.</p>
            <router-link to="/sign_up" class="btn btn-outline-danger">Mure Read <i class="fa fa-arrow-right-long"></i></router-link>

          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<style scoped>

section {
  background-color: hsla(230, 40%, 50%, 1);
  height: 72vh;
  box-sizing: border-box;
}

.container {
  background-color: #fff;
  display: flex;
  justify-content: center;
  width: 800px;
  padding: 50px 80px;
  height: auto;
  border-radius: 25px;
  border: 2px #eee solid;
  box-shadow: -15px -15px 15px rgba(255, 255, 255, 0.2), 15px -15px 15px rgba(255, 255, 255, 0.1), inset -5px -5px 5px rgba(255, 255, 255, 0.2), inset 5px 5px 5px rgba(0, 0, 0, 0.1);


}

.container .image-content img {
  max-width: 400px;
  height: 300px;
}

.container .image-text {
  padding: 10px;
  border-radius: 15px;
}
.container .image-text a{
  padding: 10px 20px;
}
section a{
  background-color: #fd5f00;
  min-width: 88px;
  min-height: 50px;
  color: white;
}

</style>