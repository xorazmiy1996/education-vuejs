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
          <h6 style="margin-top:20px;font-size: 1.5rem;font-weight: 700;text-transform: uppercase;font-family: Poppins;">
            Ознакомьтесь с нашими
            программами
          </h6>
        </div>
        <div class="col-lg-4">
          <div class="card card-height card-hover" style="position: relative;">
            <router-link :to="{name:'teachers', query:{skills:'reading'}}">
              <div class="image-cat-1">
                <img src="@/assets/image/views/home/39.png" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title text-center">IELTS READING</h5>
                <p class="card-text"> * Индивидульные курсы рассчитан <span class="ms-3">45 минут</span></p>
                <p class="card-text"> * Групповые курсы 50 минут</p>
                <p class="card-text">* 12 занятий в месяц</p>
                <p class="card-text"> * Курс рассчитан на 1 месяца </p>
              </div>
            </router-link>

          </div>

        </div>
        <div class="col-lg-4">
          <div class="card card-height card-hover">
            <router-link :to="{name:'teachers', query:{skills:'speaking'}}">
              <div class="image-cat-2">
                <img src="@/assets/image/views/home/1.png" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title text-center">IELTS speaking</h5>
                <p class="card-text"> * Индивидульные курсы рассчитан <span class="ms-3">45 минут</span></p>
                <p class="card-text"> * Групповые курсы 50 минут</p>
                <p class="card-text">* 12 занятий в месяц</p>
                <p class="card-text"> * Курс рассчитан на 1 месяца </p>
              </div>
            </router-link>

          </div>
        </div>
      </div>
      <div class="row second-row d-flex">
        <div class="col-lg-4">
          <div class="card card-height card-hover">
            <router-link :to="{name:'teachers', query:{skills:'listening'}}">
              <div class="image-cat-2">
                <img src="@/assets/image/views/home/1.png" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title text-center">IELTS LISTENING</h5>
                <p class="card-text"> * Индивидульные курсы рассчитан <span class="ms-3">45 минут</span></p>
                <p class="card-text"> * Групповые курсы 50 минут</p>
                <p class="card-text">* 12 занятий в месяц</p>
                <p class="card-text"> * Курс рассчитан на 1 месяца </p>
              </div>
            </router-link>

          </div>
        </div>
        <div class="col-lg-4">
          <div class="card card-link card-height card-hover">
            <router-link :to="{name:'teachers', query:{skills:'writing'}}">
              <div class="image-cat-2">
                <img src="@/assets/image/views/home/23.png" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title text-center">IELTS writing</h5>
                <p class="card-text"> * Индивидульные курсы рассчитан <span class="ms-3">45 минут</span></p>
                <p class="card-text"> * Групповые курсы 50 минут</p>
                <p class="card-text">* 12 занятий в месяц</p>
                <p class="card-text"> * Курс рассчитан на 1 месяца </p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card card-link card-height card-hover">
            <router-link :to="{name:'teachers', query:{skills:'general'}}">
              <div class="card-body">
                <h5 class="card-title text-center">General Engilsh</h5>
                <p class="card-text"> * Индивидульные курсы рассчитан <span class="ms-3">45 минут</span></p>
                <p class="card-text"> * Групповые курсы 50 минут</p>
                <p class="card-text">* 12 занятий в месяц</p>
                <p class="card-text"> * Курс рассчитан на 4 месяца </p>
              </div>
            </router-link>
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

.two-page .container .row .card-hover:hover{
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