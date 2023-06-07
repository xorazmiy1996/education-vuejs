<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Section1"
})
</script>

<template>
  <section>

    <div class="container-fluid">
       <div class="row">
        <div class="col-sm-6 d-flex flex-start justify-content-center p-4">
          <div >
            <h1>Web saytimizga xush kelibsiz!</h1>
            <div class="address ">
              <div class="address-li d-flex flex-row p-1">
                <div class="icon p-2">
                    <i class="fa fa-phone-volume"></i>
                </div>
                <div class="text-address d-flex align-items-center"><h3> +998(99) 966-10-84</h3></div>
              </div>

              <div class="address-li d-flex flex-row p-1">
                <div class="icon p-2">
                 <i class="fa fa-map-marker-alt" ></i>
              </div>
                <div class="text-address-anna d-flex align-items-center justify-content-center"><h3> Urganch shahar Anna German mehmonxonasi </h3></div>
              </div>
            </div>
          </div>


        </div>
        <div class="col-sm-6 d-flex align-items-center justify-content-center">
          <div class="img-box">
            <img class="img-fluid" src="../../assets/image/home_image/videeo_image.png">
          </div>
        </div>
      </div>
    </div>






  </section>

</template>

<style scoped>

section {
  height: auto;
  box-sizing: border-box;
      background-color: hsla(230, 40%, 50%, 1);

}

h1{
  font-weight: 700;
  font-size: 36px;
  color: white;
}
.address{
  color: white;
}
.address h3{
  font-weight: 700;
  font-size: 36px;


}

.img-box {
  animation: animate 3s linear infinite;
  padding: 20px;
}
.icon{
  font-size: 36px;
  color: darkorange;

}

@keyframes animate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }

}


</style>