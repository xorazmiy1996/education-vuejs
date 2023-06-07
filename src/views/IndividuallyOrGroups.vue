<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "IndividuallyOrGroups"
})
</script>

<template>
  <br>
  <br>
 <div class="container  text-center">
         <h1>Individual or Group speaking</h1>
  </div>
  <br>
  <section>
    <div class="container mb-5">
        <div class="d-flex justify-content-center align-items-center flex-wrap">
          <div class="card shadow  bg-body-tertiary rounded" style="max-width: 28rem;">
            <div class="card-image d-flex justify-content-center">
              <img src="@/assets/image/home_image/course_image1.png" class="img-fluid p-2" style="max-width: 200px"
                   alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title text-center">Individual speaking</h5>
              <p>Shaxsiy tayyorlash bu, o'quvchilarga o'zlariga mos o'rganish yo'nalishlarini o'rganishga imkoniyat beradi va ularning ilmiy va amaliy bilimlari oshiriladi.O'quvchilarni individual tayyorlashda, ularning o'ziga mos o'rganish usullariga va o'rganish shakllariga qarab, ularning shaxsiy o'rganish stili va xususiyatlari hisobga olingan holda, ularning o'zlashtirish va rivojlantirishlari uchun bir necha usullar ishlatiladi.</p>
              <br>
            </div>
            <div class="card-footer d-flex justify-content-center ">

              <router-link to="/speaking" id="btn" class="btn btn-primary">Begin <i
                  class="fa fa-arrow-right-long"></i>
              </router-link>


            </div>
          </div>
          <div class="card shadow  bg-body-tertiary rounded" style="width: 28rem;">
            <div class="card-image  d-flex justify-content-center">
              <img src="@/assets/image/home_image/course_image1.png" class="img-fluid p-2" style="max-width: 200px"
                   alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title text-center">Group speaking</h5>
             <p>Guruh tayyorlash esa, o'quvchilarning bir-biriga yordam berish va bir-biriga o'zaro fikrlashishlari uchun yaratilgan o'rganish usuli hisoblanadi. Bu usul, o'quvchilarning bir-biri bilan hamkorlik qilish va ularning o'zlariga mos o'rganish yo'nalishida ko'plab ma'lumotlarni almashishlariga imkoniyat beradi. Guruh tayyorlash jarayoni o'quvchilarning ijtimoiy xarakterlarini ham rivojlantiradi va ularning jamiyatda o'z o'rni va vazifalarini o'rganishiga yordam beradi.</p>


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
p{
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

</style>