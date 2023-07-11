<script>


import {defineComponent} from 'vue'

export default defineComponent({
  name: "Section6"
})
</script>

<template>
   <div class="container  text-center">
         <h1>Lorem ipsum dolor sit amet.</h1>
  </div>
  <section>
    <div class="container mb-5">
        <div class="d-flex justify-content-center align-items-center flex-wrap">
          <div class="card shadow  bg-body-tertiary rounded" style="width: 25rem;">
            <div class="card-image d-flex justify-content-center">
              <img src="../../assets/image/home_image/course_image1.png" class="img-fluid p-2" style="max-width: 200px"
                   alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title text-center">Spiking</h5>
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
            <div class="card-footer d-flex justify-content-center ">

              <router-link to="/individual_or_group_speaking" id="btn" class="btn btn-primary">Begin <i
                  class="fa fa-arrow-right-long"></i>
              </router-link>


            </div>
          </div>
          <div class="card shadow  bg-body-tertiary rounded" style="width: 25rem;">
            <div class="card-image  d-flex justify-content-center">
              <img src="../../assets/image/home_image/course_image1.png" class="img-fluid p-2" style="max-width: 200px"
                   alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title text-center">Write</h5>
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
            <div class="card-footer d-flex justify-content-center">

              <router-link to="#" class="btn btn-primary">Begin <i class="fa fa-arrow-right-long"></i>
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
  color: dodgerblue;
}



</style>