<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Section2"
})
</script>

<template>
  <section>
    <div class="huge-container">
      <h1 style="">Video</h1>
      <div class="container">
        <div class="video-image">
          <img src="@/assets/image/home_image/videeo_image.png" alt="">
        </div>
        <div class="video-content">
          <video src="@/assets/image/video2.mp4" controls></video>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: hsla(230, 40%, 50%, 1);
  height: 100vh;
  display: flex;
  align-items: center;

}
.huge-container h1{
  text-align: center;
  font-size: 40px;
  color: #f4f4f4;
  font-weight: 900;

}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 180px;

}

.container .video-content {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
}

.container .video-content video {
  width: 750px;
}

.container .video-image {
  display: flex;
  align-items: center;
  justify-content: center;
   animation: animate 3s linear infinite;
}
@keyframes animate {
  0%{
    filter: hue-rotate(0deg);
  }
    100%{
    filter: hue-rotate(360deg);
  }

}


.container .video-image img {
  width: 650px;

}


</style>