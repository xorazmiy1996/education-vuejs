<script>


import {defineComponent} from 'vue'

export default defineComponent({
  name: "Section6"
})
</script>

<template>
  <section>
    <div class="course-text">
      <h1 class="text-h1"><span>Our</span> Courses</h1>
    </div>
    <div class="course-row">
      <div class="card">
        <div class="card-image">
          <img src="../../assets/image/home_image/course_image1.png" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">Private Lessons</h5>
          <div class="card-ul">
            <div class="card-ul-li">
              <div class="check"><i class="fa-regular fa-circle-check"></i></div>
              <div class="check-text">Private lessons for 30 minutes or more</div>
            </div>
            <div class="card-ul-li">
              <div class="check"><i class="fa-regular fa-circle-check"></i></div>
              <div class="check-text">Lessons on request and by appointment are available
                around the clock
              </div>
            </div>
            <div class="card-ul-li">
              <div class="check"><i class="fa-regular fa-circle-check"></i></div>
              <div class="check-text">Choose your favorite native speaker tutor</div>
            </div>
            <div class="card-ul-li">
              <div class="check"><i class="fa-regular fa-circle-check"></i></div>
              <div class="check-text"> Choose your favorite native speaker tutor</div>
            </div>

          </div>
        </div>
        <div class="card-footer text-body-secondary begin">
          <div class="btn-button">
            <router-link to="/tests" id="btn" class="btn btn-outline-danger">Begin <i class="fa fa-arrow-right-long"></i>
            </router-link>

          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <img src="../../assets/image/home_image/course_image1.png" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">Private Lessons</h5>
          <div class="card-ul">
            <div class="card-ul-li">
              <div class="check"><i class="fa-regular fa-circle-check"></i></div>
              <div class="check-text">Private lessons for 30 minutes or more</div>
            </div>
            <div class="card-ul-li">
              <div class="check"><i class="fa-regular fa-circle-check"></i></div>
              <div class="check-text">Lessons on request and by appointment are available
                around the clock
              </div>
            </div>
            <div class="card-ul-li">
              <div class="check"><i class="fa-regular fa-circle-check"></i></div>
              <div class="check-text">Choose your favorite native speaker tutor</div>
            </div>
            <div class="card-ul-li">
              <div class="check"><i class="fa-regular fa-circle-check"></i></div>
              <div class="check-text"> Choose your favorite native speaker tutor</div>
            </div>

          </div>


        </div>
        <div class="card-footer text-body-secondary begin">
          <div class="btn-button">
            <router-link to="/tests" id="btn" class="btn btn-outline-danger">Begin <i class="fa fa-arrow-right-long"></i></router-link>

          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>

#btn {
  background-color: #fd5f00;
  min-width: 88px;
  min-height: 50px;
  color: white;
}

section {
  display: flex;
  flex-direction: column;
  background-color: hsla(230, 40%, 50%, 1);
  text-align: center;
}

section .text-h1 {
  font-size: 40px;
  color: white;
  font-weight: 900;
  margin-top: 45px;

}

section .course-row {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
}

section .course-row {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}


section .course-row .card {
  margin: 20px;
  width: 500px;
  border-radius: 25px;
  background: #fff;
  box-shadow: -15px -15px 15px rgba(255, 255, 255, 0.2), 15px -15px 15px rgba(255, 255, 255, 0.1), inset -5px -5px 5px rgba(255, 255, 255, 0.2), inset 5px 5px 5px rgba(0, 0, 0, 0.1);
}

section .course-row .card .btn-button {
  display: flex;
  align-items: center;
  justify-content: center;

}

section .course-row .card .btn-button a {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  height: 48px;
  padding: 0 20px;
  border-radius: 16px;


}


.course-row .card .card-image {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
}

.course-row .card .card-image img {
  max-width: 250px;
}


.course-row .card .card-body {
  position: relative;
  top: -25px;
}

.card-body .card-ul {
  display: flex;
  flex-direction: column;


}

.card-body .card-ul .card-ul-li {
  display: flex;
  align-items: center;
  justify-content: flex-start;


}

.card-body .card-ul .card-ul-li .check {
  font-size: 20px;
  color: #4caf50;
  margin: 10px;
}

.card-body .card-ul .card-ul-li .check-text {
  font-size: 18px;
}

.begin {
  border-radius: 0 0 25px 25px;
}


</style>