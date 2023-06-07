<script>

import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation} from "swiper";



export default {

  components: {Swiper, SwiperSlide},
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<template>
   <div class="container text-center">
      <h1>Lorem ipsum dolor sit amet.</h1>
    </div>
  <br>
  <br>
  <section>
    <swiper :slidesPerView="4"
            :spaceBetween="0"
            :centeredSlides="false"
            :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }"
            :pagination="{
      clickable: true,
    }"
            :navigation="true"
            :modules="modules"
            class="mySwiper"

    >
      <swiper-slide>
        <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <div class="row">
            <div class="col-md-4">
              <img src="../../assets/image/home_image/person_1.jpg" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text">This is a wider card with supporting text below as a natu</p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <div class="row">
            <div class="col-md-4">
              <img src="../../assets/image/home_image/person_1.jpg" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text">This is a wider card with supporting text below as a natu</p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <div class="row">
            <div class="col-md-4">
              <img src="../../assets/image/home_image/person_1.jpg" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text">This is a wider card with supporting text below as a natu</p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <div class="row">
            <div class="col-md-4">
              <img src="../../assets/image/home_image/person_1.jpg" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text">This is a wider card with supporting text below as a natu</p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <div class="row">
            <div class="col-md-4">
              <img src="../../assets/image/home_image/person_1.jpg" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text">This is a wider card with supporting text below as a natu</p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <div class="row">
            <div class="col-md-4">
              <img src="../../assets/image/home_image/person_1.jpg" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text">This is a wider card with supporting text below as a natu</p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <div class="row">
            <div class="col-md-4">
              <img src="../../assets/image/home_image/person_1.jpg" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text">This is a wider card with supporting text below as a natu</p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>



    </swiper>
    <br>
    <br>
    <br>
  </section>

</template>
<style scoped>
.card{
  margin: 10px;
}

h1{
  font-weight: 700;
  font-size: 40px ;
  color: dodgerblue;
}
img{
  border-radius: 50px !important; ;

}
p{
  font-size: 18px;
  font-weight: 500;
  color: dodgerblue;
}










</style>







