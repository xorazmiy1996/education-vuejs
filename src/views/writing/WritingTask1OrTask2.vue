<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "WritingTask1OrTask2"
})
</script>

<template>
  <br>
  <br>
  <div class="container  text-center">
    <h1>Task-1 and Task-2 writing</h1>
  </div>
  <br>
  <section>
    <div class="container mb-5">
      <div class="d-flex justify-content-center align-items-center flex-wrap">
        <div class="card shadow  bg-body-tertiary rounded" style="width: 20rem;">
          <div class="card-image d-flex justify-content-center">
            <img src="../../assets/image/home_image/course_image1.png" class="img-fluid p-2" style="max-width: 200px;"
                 alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title text-center">Task-1</h5>
            <p id="card_text">Sizga 20 daqiqa beriladi. Task 1-da, umumiy ravishda 150 so'zdan ko'p bo'lmagan yozuv
              tayyorlash kerak bo'ladi.555</p>

          </div>
          <div class="card-footer d-flex justify-content-center ">

            <router-link to="/task_1" id="btn" class="btn btn-primary">Begin <i
                class="fa fa-arrow-right-long"></i>
            </router-link>


          </div>
        </div>
        <div class="card shadow  bg-body-tertiary rounded" style="width: 20rem;">
          <div class="card-image  d-flex justify-content-center">
            <img src="../../assets/image/home_image/course_image1.png" class="img-fluid p-2" style="max-width: 200px"
                 alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title text-center">Task-2</h5>
            <p  id="card_text">Sizga 40 daqiqa beriladi. Task 2-da, umumiy ravishda 250 so'zdan ko'p bo'lmagan yozuv tayyorlash kerak
              bo'ladi.</p>


          </div>
          <div class="card-footer d-flex justify-content-center">

            <router-link to="/task_2" class="btn btn-primary">Begin <i class="fa fa-arrow-right-long"></i>
            </router-link>


          </div>
        </div>
        <div class="card shadow  bg-body-tertiary rounded" style="width: 20rem;">
          <div class="card-image  d-flex justify-content-center">
            <img src="../../assets/image/home_image/course_image1.png" class="img-fluid p-2" style="max-width: 200px"
                 alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title text-center">Task-3</h5>
            <p  id="card_text">Sizga 1 soat berildi beriladi.Task 3-da sizga task1 va task2 bo'yicha vazifa beriladi. </p>


          </div>
          <div class="card-footer d-flex justify-content-center">

            <router-link to="/task_3" class="btn btn-primary">Begin <i class="fa fa-arrow-right-long"></i>
            </router-link>


          </div>
        </div>
      </div>
    </div>


  </section>

</template>

<style scoped>

section {
  height: auto;
}

h1 {
  font-size: 40px;
  font-weight: 900;
  color: dodgerblue;
}

h5 {
  font-size: 40px;
  font-weight: 700;
  color: dodgerblue;
}

p {
  font-size: 18px;
  font-weight: 500;
  color: dodgerblue;

}

.card {
  border-radius: 30px !important;
  margin: 10px;
}

.card-footer {

  color: #6c757d;
  font-size: 14px;

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

#card_text {
  height: 82px;
  overflow-y: hidden;
}
</style>