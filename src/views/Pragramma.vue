<script>
export default {
  name: "Pragramma"
}
</script>

<template>
  <body>
  <section class="two-page" id="pragramma">
    <div class="container">
      <div class="row first-row mb-5">
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
  </body>
</template>
<style scoped>
.card{
  min-width: 255px;
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

@media (max-width: 1800px) {
  .card-height{
    height: 275px;
  }
  .card-height .card-text{
    font-size: 20px;
  }
  .card-body{
    margin-top: 30px;
  }
}

@media (max-width: 1400px) {
  .card-height{
    height: 275px;
  }
  .card-height .card-text{
    font-size: 18px;
  }
  .card-body{
    margin-top: 30px;
  }
}
@media (max-width: 1200px) {
  .card-height{
    height: 240px;
  }
  .card-height .card-text{
    font-size: 16px;
  }
  .card-body{
    margin-top: 30px;
  }

}


@media (max-width: 993px) {

  .two-page .card{
    margin: 40px;
    height: 340px;
  }
  .two-page .card-body .card{
    display: flex;
    align-items: center;
  }
  .two-page  .card p{
    font-size: 25px;
    padding: 6px;

  }

  .two-page  .card .card-title{
    font-size: 32px;
  }

}

@media (max-width: 768px) {
  .two-page .card{
    margin: 40px;
    height: 280px;
  }
  .two-page .card-body .card{
    display: flex;
    align-items: center;
  }
  .two-page  .card p{
    font-size: 18px;
    padding: 3px;

  }

  .two-page  .card .card-title{
    font-size: 25px;
  }

}

@media (max-width: 576px) {
  .card{
    margin-top: 80px;
  }
  .one-page .header-cat {
    display: flex;
    justify-content: center;
  }
  .one-page .header-cat img{
    width: 40%;
  }
  .one-page .header-school h4{
    font-size: 2rem;
    justify-content: center;
    font-weight: 400;
    width: 400px;
    margin:15px;

  }
  .one-page .header-school .first-step{
    font-size: 1.3rem;
    justify-content: center;
    font-weight: 400;
    width: 400px;
    margin:15px;
  }
  .one-page .header-school .all-ages{
    font-size: 1.3rem;
    justify-content: center;
    font-weight: 400;
    width: 400px;
    margin:15px;
  }
  .one-page .contact {
    display: flex;
    width: 200px;
    margin-top: 150px;
    justify-content: flex-end;
    color: #fff;
    padding-bottom: 100px;
  }






}


</style>
<!--<style src="@/assets/homeViewOld.css" scoped></style>-->
<!--<style src="@/assets/nicepage_old.css" scoped></style>-->