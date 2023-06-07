  <script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Section2",
  data(){
    return{

    }
  },
  methods:{
    startPlay(){
      this.$refs.startVideo.style.display = "block"
    },
    endPlay(){
      this.$refs.startVideo.style.display = "none"
       this.$refs.video.pause();
    }

  }
})
</script>

<template>

  <section>
    <br>
    <br>
      <div class="container text-center">
         <h1>Web sayt haqida ko'proq ma'lumot olish uchun videoni ko'ring</h1>
  </div>
    <br>
    <br>
    <div class="container">

        <div class="d-flex align-items-center justify-content-center">
          <div class="video-content  position-relative">
           <video class="img-fluid" ref="video"  src="@/assets/image/video2.mp4"></video>
            <span class="position-absolute top-50 start-50 translate-middle">
              <i @click="startPlay" class="fa fa-play-circle" style="color: white; font-size: 40px"></i>
            </span>
          </div>
        </div>
      </div>

    <div class="popup-video" ref="startVideo">
      <i @click="endPlay" class="fa fa-xmark-circle"></i>
        <video ref="video"  src="@/assets/image/video2.mp4" controls></video>
      </div>
    <br>
    <br>
    <br>
    <br>
  </section>

</template>

<style scoped>
section {
   background-color: hsla(230, 40%, 50%, 1);
  height: auto;

}
h1{
  font-weight: 700;
  font-size: 40px ;
  color: white;
}


.container .video-image {
  animation: animate 3s linear infinite;
}
.popup-video{
  position: fixed;
  top: 0;left: 0;
  z-index: 3;
  background-color: rgba(0,0,0,0.8);
  height: 100%;
  width: 100%;
  display: none;
}
.popup-video video{
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  width: 750px;
  border-radius: 5px;
  border: 3px solid #fff;
  object-fit: cover;
}
.popup-video i{
  position: absolute;
  top: 5px;
  right: 20px;
  font-size: 50px;
  color: #fff;
  font-weight: bolder;
  z-index: 3;
}
video{
  width: 700px;
}

@keyframes animate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }

}
.container .video-image img {
  width: 650px;

}
i:hover{
  cursor: pointer;
}

@media screen and (max-width: 768px){
  .popup-video video{
    max-width: 95%;
  }

}


</style>