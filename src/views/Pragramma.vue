<script>
export default {
  name: "Pragramma"
}
</script>

<template>
  <body>
  <section class="two-page">
    <div class="container">
      <div class="row first-row">
        <div class="col-lg-4">
          <h4 class="my-program">
            Наши программы
          </h4>
          <h6 style="font-size: 1.5rem;font-weight: 700;text-transform: uppercase;font-family: Poppins;">
            Ознакомьтесь с нашими
            программами
          </h6>
        </div>
        <div class="col-lg-4">
          <div class="card card-height" style="position: relative;">
            <router-link to="/individual_speaking">
              <div class="image-cat-1">
                <img src="@/assets/image/views/home/39.png" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title text-center">IELTS speaking</h5>
                <p class="card-text"> * Индивидуальные занятия</p>
                <p class="card-text"> * 3 раза в неделю по 30 минут</p>
                <p class="card-text">* 12 занятий в месяц</p>
                <p class="card-text"> * Курс рассчитан на 3 месяца </p>
                <!--                <h5 class="card-title text-center">400.000 / месяц</h5>-->
              </div>
            </router-link>

          </div>

        </div>
        <div class="col-lg-4">
          <div class="card card-height">
            <router-link to="/group_speaking">
              <div class="image-cat-2">
                <img src="@/assets/image/views/home/1.png" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title text-center">IELTS speaking</h5>
                <p class="card-text"> * Групповые занятия (3-4)</p>
                <p class="card-text">* 3 раза в неделю по 60 минут</p>
                <p class="card-text">* 12 занятий в месяц</p>
                <p class="card-text">* Курс рассчитан на 3 месяца </p>
                <!--                <h5 class="card-title text-center">200.000 / месяц</h5>-->

              </div>
            </router-link>

          </div>
        </div>
      </div>
      <div class="row second-row d-flex">
        <div class="col-lg-4">
          <div class="card card-height" style="position: relative">
            <router-link to="/general_speaking">
              <div class="image-cat-1">
                <img src="@/assets/image/views/home/53.png" alt="">
              </div>

              <div class="card-body">
                <h5 class="card-title text-center">General speaking</h5>
                <p class="card-text">* Групповые занятия</p>
                <p class="card-text">* 3 раза в неделю по 60 минут</p>
                <p class="card-text">* 12 занятий в месяц</p>
                <p class="card-text">* Курс рассчитан на 3 месяца </p>
                <!--                <h5 class="card-title text-center">200.000 / месяц</h5>-->
              </div>
            </router-link>
          </div>

        </div>
        <div class="col-lg-4">
          <div class="card card-height">
            <div class="card-body">
              <h5 class="card-title text-center">IELTS</h5>
              <p class="card-text"> - Позволяет определить уровень и навыки владения английским у людей, для которых он не является родным, учит систематизировать процессы памяти.</p>
            </div>
          </div>

        </div>
        <div class="col-lg-4">
          <div class="card card-link card-height">
            <div class="image-cat-2">
              <img src="@/assets/image/views/home/23.png" alt="">
            </div>
            <div class="card-body">
              <h5 class="card-title text-center">IELTS writing</h5>
              <p class="card-text"> <router-link to="/task_1">IELTS task 1</router-link> </p>
              <p class="card-text"> <router-link to="/task_2">IELTS task 2</router-link> </p>
              <p class="card-text"><router-link to="/task_3">MOCK academic writing</router-link> </p>
              <p class="card-text">* feedbacks</p>
              <!--              <h5 class="card-title text-center">30.000 / штук</h5>-->

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<!--        <section style="height: 100vh" class="u-clearfix u-image u-section-2" data-image-width="1920" data-image-height="1058">-->
<!--    <div class="u-clearfix u-sheet u-sheet-1">-->
<!--      <h4 class="u-text u-text-grey-80 u-text-1">Наши программы</h4>-->
<!--      <h6 class="u-text u-text-default u-text-grey-80 u-text-2"> Ознакомьтесь с нашими<br>программами-->
<!--      </h6>-->

<!--      <div style="left: 25px" class="u-container-style u-custom-color-5 u-group u-radius-30 u-shape-round u-group-1">-->
<!--        <router-link style="color: #fff" to="/individual_speaking">-->
<!--          <div class="u-container-layout u-valign-top u-container-layout-1">-->
<!--            <h6 class="u-custom-font u-font-ubuntu u-text u-text-default u-text-3">IELTS speaking</h6>-->
<!--            <h6 class="u-custom-font u-font-ubuntu u-text u-text-4"> * Индивидуальные занятия<br>* 3 раза в неделю-->
<!--              по 45 минут<br>* 12 занятий в месяц<br>* Курс рассчитан на 3 месяца-->
<!--            </h6>-->
<!--            <h6 class="u-custom-font u-font-ubuntu u-text u-text-default u-text-5">400.000 / месяц</h6>-->
<!--          </div>-->
<!--        </router-link>-->

<!--      </div>-->


<!--      <div style="left: 25px" class="u-container-style u-custom-color-5 u-group u-radius-30 u-shape-round u-group-2">-->
<!--        <router-link  style="color: #fff" to="/group_speaking">-->
<!--          <div class="u-container-layout u-container-layout-2">-->
<!--            <h6 class="u-custom-font u-font-ubuntu u-text u-text-default u-text-6">IELTS speaking</h6>-->
<!--            <h6 class="u-custom-font u-font-ubuntu u-text u-text-7"> * Групповые занятия (3-4)<br>* 3 раза в неделю-->
<!--              по 45 минут<br>* 12 занятий в месяц<br>* Курс рассчитан на 3 месяца-->
<!--            </h6>-->
<!--            <h6 class="u-custom-font u-font-ubuntu u-text u-text-default u-text-8">200.000 / месяц</h6>-->
<!--          </div>-->
<!--        </router-link>-->
<!--      </div>-->



<!--      <img class="u-image u-image-contain u-image-default u-preserve-proportions u-image-1" src="@/assets/image/home_image/1.png" alt=""-->
<!--           data-image-width="256" data-image-height="256">-->
<!--      <img class="u-image u-image-contain u-image-default u-preserve-proportions u-image-2" src="@/assets/image/home_image/39.png" alt=""-->
<!--           data-image-width="256" data-image-height="256">-->
<!--      <div class="u-container-style u-custom-color-5 u-group u-radius-30 u-shape-round u-group-3">-->
<!--        <router-link style="color: #fff" to="/general_speaking">-->
<!--          <div class="u-container-layout u-container-layout-3">-->
<!--            <h6 class="u-custom-font u-font-ubuntu u-text u-text-default u-text-9">General speaking</h6>-->
<!--            <h6 class="u-custom-font u-font-ubuntu u-text u-text-10"> * Групповые занятия<br>* 3 раза в неделю по 45-->
<!--              минут<br>* 12 занятий в месяц<br>* Курс рассчитан на 3 месяца-->
<!--            </h6>-->
<!--            <h6 class="u-custom-font u-font-ubuntu u-text u-text-default u-text-11">200.000 / месяц</h6>-->
<!--          </div>-->
<!--        </router-link>-->
<!--      </div>-->
<!--      <div class="u-container-style u-custom-color-5 u-group u-radius-30 u-shape-round u-group-4">-->
<!--        <div class="u-container-layout u-container-layout-4">-->
<!--          <h5 class="u-custom-font u-font-ubuntu u-text u-text-default u-text-12">IELTS<span-->
<!--              style="font-size: 1.5rem;">-->
<!--                <span style="font-size: 1.875rem;">-->
<!--                  <span style="font-size: 2.25rem;">-->
<!--                    <span style="font-weight: 700;"></span>-->
<!--                  </span>-->
<!--                </span>-->
<!--              </span>-->
<!--          </h5>-->
<!--          <h6 class="u-align-left u-custom-font u-font-ubuntu u-text u-text-13"> - Позволяет определить уровень и-->
<!--            навыки владения английским у людей, для которых он не является родным, учит систематизировать-->
<!--            процессы памяти.</h6>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="u-container-style u-custom-color-5 u-group u-radius-30 u-shape-round u-group-5">-->
<!--        <div class="u-container-layout u-container-layout-5">-->
<!--          <h6 class="u-custom-font u-font-ubuntu u-text u-text-14">IELTS writing</h6>-->
<!--          <h6 class="u-custom-font u-font-ubuntu u-text u-text-15"> * <router-link to="/task_1"> IELTS task 1</router-link><br>*-->
<!--            <router-link to="/task_2">IELTS task 2</router-link> <br>*-->
<!--            <router-link to="/task_3"> MOCK academic writing</router-link><br>* feedbacks-->
<!--          </h6>-->
<!--          <h6 class="u-custom-font u-font-ubuntu u-text u-text-default u-text-16">30.000 / штук</h6>-->
<!--        </div>-->
<!--      </div>-->
<!--      <img class="u-image u-image-contain u-image-default u-preserve-proportions u-image-3" src="@/assets/image/home_image/53.png" alt=""-->
<!--           data-image-width="256" data-image-height="256">-->
<!--      <img class="u-image u-image-contain u-image-default u-preserve-proportions u-image-4" src="@/assets/image/home_image/23.png" alt=""-->
<!--           data-image-width="256" data-image-height="256">-->
<!--    </div>-->
<!--  </section>-->
  </body>
</template>
<style scoped>
.card{
  min-width: 255px;
}
.card-height{
  height: 300px;
}
.card-height .card-text{
  font-size: 20px;
}


.two-page {
  background-image: url("@/assets/image/home_image/pages_02.jpg");
  min-height: 100vh;
  background-size: cover;
  width: 100%;
}
.two-page .container{
  padding-top: 40px;
}
.two-page .container .row{
  padding: 40px 60px;
}
.two-page .container .row h4{
  font-size: 3rem;
  font-weight: 700;
}
.my-program{
  line-height: 42px;
}


.two-page .container .row.second-row{
  padding-top: 0!important;
}


.two-page .container .row .card{
  border-radius: 35px;
  background-color: #46056d;
  color: #fff;
}

.two-page .container .row .card .card-text{
  margin: 5px 0;

}




.two-page .container .row .card .card-title{
  font-size: 24px;
}
.two-page .container .row .image-cat-1{
  position: absolute;
  top: -70px;
  left: 100px;
}
.two-page .container .row .image-cat-2{
  position: absolute;
  top: -70px;
  left: 130px;
}
.two-page .container .row.second-row .image-cat-2{
  position: absolute;
  top: -60px;
  left: 120px;
}
.two-page .container .row .image-cat-1 img{
  width: 92px;
  height: 92px;
}
.two-page .container .row .image-cat-2 img{
  width: 92px;
  height: 92px;
}

.two-page .container .row .card:hover{
  background-color: #fff;
  color: black;
  cursor: pointer ;
}
.two-page .container .row .card a{
  color: #fff;
  text-decoration: none;
}
.two-page .container .row .card:hover a{
  color: black;
}
.two-page .container .row .card.card-link .card-text:hover{
  background-color: #dbdfe9;
  padding: 2px 3px;
  border-radius: 8px;
}
</style>
<!--<style src="@/assets/homeViewOld.css" scoped></style>-->
<!--<style src="@/assets/nicepage_old.css" scoped></style>-->