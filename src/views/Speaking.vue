<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Speaking"
})
</script>

<template>
  <section>
    <br>
    <br>

    <div class="container text-center">
      <h1>Speaking individual cours</h1>
    </div>
    <br>
    <div class="d-flex justify-content-center mt-5">
      <div class="card  shadow p-3 mb-5 bg-body-tertiary rounded  mb-3" style="max-width: 800px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="@/assets/image/home_image/course_image1.png" class="img-fluid p-2 rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Test</h5>
              <p class="card-text">Test topshirish orqali o'zingizga mos kurslarni tanlang. Bu testda sizga 10 ta savol berliladi. Siz to'g'ri togan savollarga qarab veb saytimiz sizga individual kurslarni aftomatik ravishda taklif etadi.</p>
              <router-link to="/tests" class="btn btn-primary">Begin <i
                  class="fa fa-arrow-right-long"></i></router-link>
            </div>
          </div>
        </div>
      </div>


    </div>

    <div class="container">
      <div class="row row-cols-1 row-cols-md-4 ">
        <div class="col mb-4">
          <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <img id="youtube_image" src="@/assets/image/home_image/video_image.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Description</h5>

            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name:</li>
              <li class="list-group-item">Level: Beginner-A1</li>
              <li class="list-group-item text-center"><router-link to="/student_registration" class="btn btn-primary">Begin <i
                  class="fa fa-arrow-right-long"></i></router-link></li>
            </ul>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <img id="youtube_image" src="@/assets/image/home_image/video_image.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Description</h5>

            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name:</li>
              <li class="list-group-item">Level: Elementary-A2</li>
            <li class="list-group-item text-center"><router-link to="/student_registration" class="btn btn-primary">Begin <i
                  class="fa fa-arrow-right-long"></i></router-link></li>
            </ul>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <img id="youtube_image" src="@/assets/image/home_image/video_image.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Description</h5>

            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name:</li>
              <li class="list-group-item">Level: Intermediate-B1</li>
             <li class="list-group-item text-center"><router-link to="/student_registration" class="btn btn-primary">Begin <i
                  class="fa fa-arrow-right-long"></i></router-link></li>
            </ul>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <img id="youtube_image" src="@/assets/image/home_image/video_image.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Description</h5>

            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name:</li>
              <li class="list-group-item">Level: Upper-Intermediate-B2</li>
              <li class="list-group-item text-center"><router-link to="/student_registration" class="btn btn-primary">Begin <i
                  class="fa fa-arrow-right-long"></i></router-link></li>
            </ul>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <img id="youtube_image" src="@/assets/image/home_image/video_image.jpg" class="card-img-top" alt="...">
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
            <img id="youtube_image" src="@/assets/image/home_image/video_image.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Description</h5>

            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name:</li>
              <li class="list-group-item">Level: Proficient-C2</li>
              <li class="list-group-item text-center"><router-link to="/student_registration" class="btn btn-primary">Begin <i
                  class="fa fa-arrow-right-long"></i></router-link></li>
            </ul>
          </div>
        </div>



      </div>
    </div>
  </section>
</template>

<style scoped>
.container h1 {
  font-weight: 700;
  font-size: 40px;
  color: dodgerblue;

}
h5{
  color: dodgerblue;
}
p{
  color: dodgerblue;
}
li{
  color: dodgerblue;
  background-color: #f8f9fa;
}




</style>