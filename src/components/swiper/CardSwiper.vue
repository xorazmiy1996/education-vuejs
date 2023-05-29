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
        <div class="card">
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
        <div class="card">
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
        <div class="card">
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
        <div class="card">
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
        <div class="card">
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
        <div class="card">
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
        <div class="card">
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
        <div class="card">
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
  </section>

</template>
<style scoped>
section{
  margin-bottom: 20px;
}
.card {
  margin: 10px;
  height: auto;
  width: auto;
  border-radius: 10px;
  box-shadow: -15px -15px 15px rgba(255, 255, 255, 0.2), 15px -15px 15px rgba(255, 255, 255, 0.1), inset -5px -5px 5px rgba(255, 255, 255, 0.2), inset 5px 5px 5px rgba(0, 0, 0, 0.1);
  border: #eee 2px solid;

}

.card .row {
  display: flex;
  align-items: center;

}

.card .row .col-md-4 {
  margin: 0;
}

.card .row .col-md-8 {
  margin: 0;
  padding: 0;
}

.card .row .col-md-8 .card-text {
  position: relative;
  left: -20px;
  font-size: 12px;

}

.card .row img {
  border-radius: 50px;
}

.card .row .card-body {
  line-height: 20px;

}

</style>







