<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Section1"
})
</script>

<template>
  <section>
    <div class="container">
      <div class="row content">
        <div class="col-6 content-text">
          <h1 style="line-height: 80px; margin-bottom: 30px">Web saytimizga xush kelibsiz!</h1>
          <div class="address">
            <div class="address-li first">
              <div class="awesom-icon"><i class="fa fa-phone-volume icon1" style="color: #fab702"></i></div>
              <div class="text-address"><h3><span>+998(99) 966-10-84</span></h3></div>
            </div>
            <div class="address-li second">
              <div class="awesom-icon"><i class="fa fa-map-marker-alt icon1" style="color: #fab702"></i></div>
              <div class="text-address-anna"><h3> Urganch shahar Anna German mehmonxonasi </h3></div>
            </div>
          </div>


        </div>
        <div class="col-6  image">
          <div class="img-box">
            <img src="../../assets/image/home_image/heade_image.png">
          </div>
        </div>
      </div>


    </div>

  </section>

</template>

<style scoped>

section {
  background-color: hsla(230, 40%, 50%, 1);
  height: 100vh;
  box-sizing: border-box;

}

.container .content {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.content-text {
  padding: 40px;
}


.content-text h1 {
  color: white;
  font-family: 'Righteous', serif;
  font-size: 70px;
  font-weight: 900;

}

.content-text h3 {
  color: white;
  font-family: 'Righteous', serif;
  font-size: 40px;
  font-weight: 900;

}

.img-box {
  animation: animate 3s linear infinite;
}

@keyframes animate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }

}

.img-box img {
  width: 100%;
  height: 100%;
  padding: 20px;
}

span {
  font-weight: 700;
//color: #fab702;
}

.address {
  display: flex;
  flex-direction: column;
}

.address .address-li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-bottom: 40px;
}

.address .address-li .awesom-icon {
  padding-right: 15px;
  font-size: 70px;
}


.address .address-li .text-address-anna h3 {
  line-height: 40px;
  font-weight: 900;
}

.inform-text {
  color: white;
  font-size: 20px;
  line-height: 25px;
}

@media screen and (max-width: 1200px) {

  .content-text h1 {
    color: white;
    font-family: 'Righteous', serif;
    font-size: 50px;
    font-weight: 700;
  }

  .address .address-li .text-address-anna h3 {
    font-size: 40px;
    line-height: 40px;
  }

  .address .address-li .text-address h3 {
    font-size: 40px;

  }

  .address .address-li .awesom-icon i {
    padding-right: 10px;
    font-size: 40px;
  }

}

@media screen and (max-width: 1145px) {

  .container .content {
    flex-direction: column;
  }
  .container .content .content-text{
    padding: 25px 0 0 0 !important;

  }
  .container .content .content-text h1 {
    text-align: center;
    line-height: 62px!important;
    margin: 0 !important;
  }
  .container .content .address-li.first {
    position: relative;
    top: -25px;
    margin: 0;
  }
   .container .content .address-li.second {
    position: relative;
     line-height: 30px;
    top: -50px;
    margin: 0;
  }
}

@media screen and (max-width: 1000px) {

  .container .content {
   justify-content: normal;
  }




}



</style>