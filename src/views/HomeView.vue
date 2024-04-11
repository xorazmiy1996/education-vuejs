<script>
import VueScrollactive from 'vue-scrollactive';

import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import Map from "@/components/map/Map.vue";

export default {
  components: {
    Map,
    VueScrollactive,
    LMap,
    LTileLayer,
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
            <h4 class="one-page-h4">Платформа развития разговорного интеллекта</h4>
          </div>
          <div class="first-step-space">
            <h5 class="first-step one-page-h5">Сделайте первый шаг к знаниям разговорного языка месте с нами!</h5>
          </div>
          <div class="all-ages"><h5 class="one-page-h5">Для всех возрастов!</h5></div>
          <div class="mt-4">
            <a href="#pragramma">
              <button class="btn btn-primary one-page-button">Записаться на пробный урок</button>
            </a>
          </div>
        </div>

      </div>
    </div>


    <div class="contact">

      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary one-page-button" data-bs-toggle="modal"
              data-bs-target="#exampleModal">
        Связаться с нами
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Связь</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="d-flex flex-row my-3 tel">
                <div class="tel-icon me-3">
                  <i class="fa-solid fa-phone-volume fa-2xl" style="color: #ff2424;"></i>
                </div>
                <div class="tel-number">+998(91) 434-11-77</div>
              </div>
              <div class="d-flex flex-row telegram my-3">
                <div class="telegram-icon me-3">
                  <i class="fa-brands fa-telegram fa-2xl" style="color: #ff1f1f;"></i>
                </div>
                <div class="telegram-name">
                  <a href="https://t.me/speakup_learning_centre">telegram</a>
                </div>
              </div>
              <div class="d-flex flex-row my-3 instagram">
                <div class="instagram-icon me-3">
                  <i class="fa-brands fa-square-instagram fa-2xl" style="color: #ff2424;"></i>
                </div>
                <div class="instagram-name">
                  <a href="https://instagram.com/speakup_lc?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr">instagram</a>
                </div>
              </div>
              <div class="d-flex flex-row email my-3">
                <div class="email-icon me-3">
                  <i class="fa-regular fa-envelope fa-2xl" style="color: #ff2424;"></i>
                </div>
                <div class="email-name">speakuplearningcenter@gmail.com</div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>


  </section>
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
          <div class="card card-height card-hover">
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
          <div class="card card-height card-hover" style="position: relative">
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
          <div class="card card-link card-height card-hover">
            <div class="card-body">
              <h5 class="card-title text-center">General Engilsh</h5>
              <p class="card-text"> * </p>
              <p class="card-text"> *</p>
              <p class="card-text">* </p>
              <p class="card-text"> *  </p>
              <!--                <h5 class="card-title text-center">400.000 / месяц</h5>-->
            </div>
          </div>

        </div>
        <div class="col-lg-4">
          <div class="card card-link card-height card-hover">
            <div class="image-cat-2">
              <img src="@/assets/image/views/home/23.png" alt="">
            </div>
            <div class="card-body">
              <h5 class="card-title text-center">IELTS writing</h5>
              <p class="card-text">
                <router-link to="/task_1">IELTS task 1</router-link>
              </p>
              <p class="card-text">
                <router-link to="/task_2">IELTS task 2</router-link>
              </p>
              <p class="card-text">
                <router-link to="/task_3">MOCK academic writing</router-link>
              </p>
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
.card {
  min-width: 255px;
}


.one-page {
  background-image: url("@/assets/image/home_image/pages_01.jpg");
  min-height: 100vh;
  background-size: cover;
  width: 100%;
}

.one-page .modal-title {
  font-size: 35px;
  font-weight: 700;
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
  margin-top: 10px;
  font-size: 1.2rem;
  width: 500px;
  color: #fff;
}

.one-page .header-school .all-ages {
  margin-top: 10px;
  font-size: 1.2rem;
  width: 500px;
  color: #fff;
}

.one-page .header-school .all-ages .one-page-h5 {
  margin-top: 0;
}

.one-page .cat-image {
  width: 354px;
  height: 382px;
  margin: 106px 80px 0 0;
}

.one-page .one-page-h4 {
  font-weight: 400;
  font-size: 3rem;
  width: 600px;
  color: #fff;
}

.one-page .one-page-button {
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

.one-page .one-page-button:hover {
  background-color: #fff;
}

.one-page .contact {
  display: flex;
  margin-top: 150px;
  justify-content: flex-end;
  margin-right: 300px;
  padding-bottom: 100px;
}

.one-page .contact h6 {
  margin: 0;
}

.tel-number {
  font-size: 20px;
}

.instagram {
  font-size: 20px;
}

.email {
  font-size: 20px;
}

.telegram {
  font-size: 20px;
}

/* two page */


.two-page {
  background-image: url("@/assets/image/home_image/pages_02.jpg");
  min-height: 100vh;
  background-size: cover;
  width: 100%;
}

.two-page .container {
  padding-top: 40px;
}

.two-page .container .row {
  padding: 40px 60px;
}

.two-page .container .row h4 {
  font-size: 3rem;
  font-weight: 700;
}

.my-program {
  line-height: 42px;
}


.two-page .container .row.second-row {
  padding-top: 0 !important;
}


.two-page .container .row .card {
  border-radius: 35px;
  background-color: #46056d;
  color: #fff;
}

.two-page .container .row .card .card-text {
  margin: 5px 0;

}


.two-page .container .row .card .card-title {
  font-size: 24px;
}

.two-page .container .row .image-cat-1 {
  position: absolute;
  top: -70px;
  left: 100px;
}

.two-page .container .row .image-cat-2 {
  position: absolute;
  top: -70px;
  left: 130px;
}

.two-page .container .row.second-row .image-cat-2 {
  position: absolute;
  top: -60px;
  left: 120px;
}

.two-page .container .row .image-cat-1 img {
  width: 92px;
  height: 92px;
}

.two-page .container .row .image-cat-2 img {
  width: 92px;
  height: 92px;
}

.two-page .container .row .card-hover:hover {
  background-color: #fff;
  color: black;
  cursor: pointer;
}

.two-page .container .row .card a {
  color: #fff;
  text-decoration: none;
}

.two-page .container .row .card:hover a {
  color: black;
}

.two-page .container .row .card.card-link .card-text:hover {
  background-color: #dbdfe9;
  padding: 2px 3px;
  border-radius: 8px;
}





#logo {
  width: 246px !important;
  height: 65px !important;
}

@media (max-width: 1800px) {
  .card-height {
    height: 275px;
  }

  .card-height .card-text {
    font-size: 20px;
  }

  .card-body {
    margin-top: 30px;
  }
}

@media (max-width: 1400px) {
  .card-height {
    height: 275px;
  }

  .card-height .card-text {
    font-size: 18px;
  }

  .card-body {
    margin-top: 30px;
  }
}

@media (max-width: 1200px) {
  .card-height {
    height: 240px;
  }

  .card-height .card-text {
    font-size: 16px;
  }

  .card-body {
    margin-top: 30px;
  }

}


@media (max-width: 993px) {

  .two-page .card {
    margin: 40px;
    height: 340px;
  }

  .two-page .card-body .card {
    display: flex;
    align-items: center;
  }

  .two-page .card p {
    font-size: 25px;
    padding: 6px;

  }

  .two-page .card .card-title {
    font-size: 32px;
  }

}

@media (max-width: 768px) {
  .two-page .card {
    margin: 40px;
    height: 280px;
  }

  .two-page .card-body .card {
    display: flex;
    align-items: center;
  }

  .two-page .card p {
    font-size: 18px;
    padding: 3px;

  }

  .two-page .card .card-title {
    font-size: 25px;
  }

}

@media (max-width: 576px) {
  .card {
    margin-top: 80px;
  }

  .one-page .header-cat {
    display: flex;
    justify-content: center;
  }

  .one-page .header-cat img {
    width: 40%;
  }

  .one-page .header-school h4 {
    font-size: 2rem;
    justify-content: center;
    font-weight: 400;
    width: 400px;
    margin: 15px;

  }

  .one-page .header-school .first-step {
    font-size: 1.3rem;
    justify-content: center;
    font-weight: 400;
    width: 400px;
    margin: 15px;
  }

  .one-page .header-school .all-ages {
    font-size: 1.3rem;
    justify-content: center;
    font-weight: 400;
    width: 400px;
    margin: 15px;
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
