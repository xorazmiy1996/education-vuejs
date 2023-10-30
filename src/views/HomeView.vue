<script>
import VueScrollactive from 'vue-scrollactive';

export default {
  components: {
    VueScrollactive,
  },
};

</script>

<template>
  <body>
  <section class="one-page">
    <div class="container d-flex justify-content-center align-items-center">
      <div class="row">
        <div class="col-lg-4 header-cat">
          <img class="cat-image" src="@/assets/image/views/home/cat.png" alt="">
        </div>
        <div class="col-lg-8  header-school d-flex flex-container flex-column">
          <div>
            <h4>Школа развития разговорного интеллекта</h4>
          </div>
          <div>
            <h5 class="first-step">Сделайте первый шаг к знаниям разговорного языка месте с нами!</h5>
          </div>
          <div class="all-ages"><h5>Для всех возрастов!</h5></div>
          <div>
            <a href="#pragramma"><button class="btn btn-primary">Записаться на пробный урок</button></a>
          </div>
        </div>

      </div>
    </div>
    <div class="contact">
      <div>
        <h6>+998 99 968 11 77</h6>
        <h6>speakuplearningcenter@gmail.com </h6>
      </div>
    </div>


  </section>


  <section class="two-page" id="pragramma">
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
          <div class="card" style="position: relative;">
            <router-link to="/individual_speaking">
              <div class="image-cat-1">
                <img src="@/assets/image/views/home/39.png" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title text-center">IELTS speaking</h5>
                <p class="card-text"> * Индивидуальные занятия</p>
                <p class="card-text"> * 3 раза в неделю по 45 минут</p>
                <p class="card-text">* 12 занятий в месяц</p>
                <p class="card-text"> * Курс рассчитан на 3 месяца </p>
                <h5 class="card-title text-center">400.000 / месяц</h5>
              </div>
            </router-link>

          </div>

        </div>
        <div class="col-lg-4">
          <div class="card">
            <router-link to="/group_speaking">
              <div class="image-cat-2">
                <img src="@/assets/image/views/home/1.png" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title text-center">IELTS speaking</h5>
                <p class="card-text"> * Групповые занятия (3-4)</p>
                <p class="card-text">* 3 раза в неделю по 45 минут</p>
                <p class="card-text">* 12 занятий в месяц</p>
                <p class="card-text">* Курс рассчитан на 3 месяца </p>
                <h5 class="card-title text-center">200.000 / месяц</h5>

              </div>
            </router-link>

          </div>
        </div>
      </div>
      <div class="row second-row d-flex">
        <div class="col-lg-4">
          <div class="card" style="position: relative">
            <router-link to="/general_speaking">
              <div class="image-cat-1">
                <img src="@/assets/image/views/home/53.png" alt="">
              </div>

              <div class="card-body">
                <h5 class="card-title text-center">General speaking</h5>
                <p class="card-text">* Групповые занятия</p>
                <p class="card-text">* 3 раза в неделю по 45 минут</p>
                <p class="card-text">* 12 занятий в месяц</p>
                <p class="card-text">* Курс рассчитан на 3 месяца </p>
                <h5 class="card-title text-center">200.000 / месяц</h5>
              </div>
            </router-link>
          </div>

        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center">IELTS</h5>
              <p class="card-text"> - Позволяет определить уровень и навыки владения английским у людей, для которых он не является родным, учит систематизировать процессы памяти.</p>
            </div>
          </div>

        </div>
        <div class="col-lg-4">
          <div class="card card-link">
            <div class="image-cat-2">
              <img src="@/assets/image/views/home/23.png" alt="">
            </div>
            <div class="card-body">
              <h5 class="card-title text-center">IELTS writing</h5>
              <p class="card-text"> <router-link to="/task_1">IELTS task 1</router-link> </p>
              <p class="card-text"> <router-link to="/task_2">IELTS task 2</router-link> </p>
              <p class="card-text"><router-link to="/task_3">MOCK academic writing</router-link> </p>
              <p class="card-text">* feedbacks</p>
              <h5 class="card-title text-center">30.000 / штук</h5>

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
.one-page {
  background-image: url("@/assets/image/home_image/pages_01.jpg");
  min-height: 100vh;
  background-size: cover;
  width: 100%;
}

.one-page .header-cat {
  padding-right: 20px;
}

.one-page .header-school {
  margin-top: 50px;
  padding-left: 70px;
}

.one-page .header-school h4 {
  margin-top: 40px;

}

.one-page .header-school .first-step {
  margin-top: 55px;
  font-size: 1.2rem;
  width: 500px;
  color: #fff;
}

.one-page .header-school .all-ages {
  margin-top: 0;
  font-size: 1.2rem;
  width: 500px;
  color: #fff;
}

.one-page .header-school .all-ages h5 {
  margin-top: 0;
}

.one-page .cat-image {
  width: 354px;
  height: 382px;
  margin: 106px 80px 0 0;
}

.one-page h4 {
  font-weight: 400;
  font-size: 3rem;
  width: 600px;
  color: #fff;
}

.one-page button {
  margin-top: 40px;
  background-color: #f5d654;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  border-radius: 20px;
  padding: 10px 17px 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: black;
}
.one-page button:hover{
  background-color: #fff;
}

.one-page .contact{
  display: flex;
  margin-top: 150px;
  justify-content: flex-end;
  margin-right: 300px;
  color: #fff;
  padding-bottom: 100px;
}
.one-page .contact h6{
  margin: 0;
}

/* two page */


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





</style>
<!--<style src="@/assets/homeViewOld.css" scoped></style>-->
<!--<style src="@/assets/nicepage_old.css" scoped></style>-->
