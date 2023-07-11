<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ResultTestGroupSpeaking",
  data() {
    return {
      result_tes: this.$store.state.result_tes
    }
  },
})
</script>

<template>
 <div>
    <section>
      <br>
      <br>
      <div class="header-text">
        <h1>Siz 10 ta savoldan <b style="color: blue">{{ result_tes }}</b> tasiga to'g'ri javo berdingiz va sizga
          quydagi kurslarni taklif qilamiz:</h1>
      </div>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-4 ">
          <div v-if="result_tes <= 2">
            <div class="col mb-4">
              <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                <img id="youtube_image" src="../../assets/image/home_image/video_image.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Description</h5>

                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Name:</li>
                  <li class="list-group-item">Level: Beginner-A1</li>
                  <li class="list-group-item text-center"><router-link to="/student_registration" class="btn btn-outline-danger">Begin <i
                  class="fa fa-arrow-right-long"></i></router-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div v-else-if="result_tes > 2 && result_tes <= 5">
            <div class="col mb-4">
              <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                <img id="youtube_image" src="../../assets/image/home_image/video_image.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Description</h5>

                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Name:</li>
                  <li class="list-group-item">Level: Elementary-A2</li>
                  <li class="list-group-item text-center"><router-link to="/student_registration" class="btn btn-outline-danger">Begin <i
                  class="fa fa-arrow-right-long"></i></router-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div v-else-if="result_tes > 5 && result_tes <= 7">
            <div class="col mb-4">
              <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                <img id="youtube_image" src="../../assets/image/home_image/video_image.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Description</h5>

                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Name:</li>
                  <li class="list-group-item">Level: Intermediate-B1</li>
                  <li class="list-group-item text-center"><router-link to="/student_registration" class="btn btn-outline-danger">Begin <i
                  class="fa fa-arrow-right-long"></i></router-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div v-else-if="result_tes > 7 && result_tes <= 9">
            <div class="col mb-4">
              <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                <img id="youtube_image" src="../../assets/image/home_image/video_image.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Description</h5>

                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Name:</li>
                  <li class="list-group-item">Level: Upper-Intermediate-B2</li>
                 <li class="list-group-item text-center"><router-link to="/student_registration" class="btn btn-outline-danger">Begin <i
                  class="fa fa-arrow-right-long"></i></router-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div v-else-if="result_tes >= 10">
            <div class="col mb-4">
              <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                <img id="youtube_image" src="../../assets/image/home_image/video_image.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Description</h5>

                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Name:</li>
                  <li class="list-group-item">Level: Advanced-C1</li>
                 <li class="list-group-item text-center"><router-link to="/student_registration" class="btn btn-outline-danger">Begin <i
                  class="fa fa-arrow-right-long"></i></router-link></li>
                </ul>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                <img id="youtube_image" src="../../assets/image/home_image/video_image.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Description</h5>

                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Name:</li>
                  <li class="list-group-item">Level: Proficient-C2</li>
                 <li class="list-group-item text-center"><router-link to="/student_registration" class="btn btn-outline-danger">Begin <i
                  class="fa fa-arrow-right-long"></i></router-link></li>
                </ul>
              </div>
            </div>
          </div>


        </div>
      </div>


    </section>
  </div>
</template>

<style scoped>
section {
  height: 100vh;
}

section .header-text {
  text-align: center;
  color: dodgerblue;
}

section .header-text h1 {
  font-size: 36px;
  font-weight: 700;
  color: dodgerblue;
}

li{
  color: dodgerblue;
}

</style>