<script>
import VueScrollactive from 'vue-scrollactive';

export default {
  components: {
    VueScrollactive,
  },
};

</script>

<template>



  <body class="u-body u-xl-mode" data-lang="ru">

  <section class="u-clearfix u-image u-section-1" id="sec-17e5" data-image-width="1920" data-image-height="1058">
    <div class="u-clearfix u-sheet u-sheet-1">

      <img class="u-image u-image-contain u-image-default u-image-2"
           src="@/assets/image/home_image/vecteezy_happy-cat-sticker-cartoon-style-design_22128800_91.png" alt="" data-image-width="3404"
           data-image-height="4027">
      <h4  class="u-text u-text-body-alt-color u-text-default u-text-4"> Школа развития<br>разговорного интеллекта
      </h4>
      <h5 style="margin-left: 460px" class="u-text u-text-body-alt-color u-text-default u-text-5"> Сделайте первый шаг к знаниям разговорного
        языка <br>месте с нами!<br>
        <br>Для всех возрастов!
      </h5>
      <scrollactive>
        <a href="#pragramma"
           class="u-border-none u-btn u-btn-round u-button-style u-hover-palette-3-light-1 u-palette-3-light-1 u-radius-50 u-btn-1">Записаться
          на пробный урок</a>
      </scrollactive>

      <h6 class="u-text u-text-body-alt-color u-text-default u-text-6">+998 99 968 11 77<br>speakuplearningcenter@gmail.com
      </h6>
    </div>
  </section>
    <section id="pragramma" class="u-clearfix u-image u-section-2" data-image-width="1920" data-image-height="1058">
      <div class="u-clearfix u-sheet u-sheet-1">
        <h4 class="u-text u-text-grey-80 u-text-1">Наши программы</h4>
        <h6 class="u-text u-text-default u-text-grey-80 u-text-2"> Ознакомьтесь с нашими<br>программами
        </h6>

        <div style="left: 30px" class="u-container-style u-custom-color-5 u-group u-radius-30 u-shape-round u-group-1">
          <router-link style="color: #fff" to="/individual_speaking">
            <div class="u-container-layout u-valign-top u-container-layout-1">
              <h6 class="u-custom-font u-font-ubuntu u-text u-text-default u-text-3">IELTS speaking</h6>
              <h6 class="u-custom-font u-font-ubuntu u-text u-text-4"> * Индивидуальные занятия<br>* 3 раза в неделю
                по 45 минут<br>* 12 занятий в месяц<br>* Курс рассчитан на 3 месяца
              </h6>
              <h6 class="u-custom-font u-font-ubuntu u-text u-text-default u-text-5">400.000 / месяц</h6>
            </div>
          </router-link>

        </div>


          <div style="left: 30px" class="u-container-style u-custom-color-5 u-group u-radius-30 u-shape-round u-group-2">
            <router-link  style="color: #fff" to="/group_speaking">
                 <div class="u-container-layout u-container-layout-2">
              <h6 class="u-custom-font u-font-ubuntu u-text u-text-default u-text-6">IELTS speaking</h6>
              <h6 class="u-custom-font u-font-ubuntu u-text u-text-7"> * Групповые занятия (3-4)<br>* 3 раза в неделю
                по 45 минут<br>* 12 занятий в месяц<br>* Курс рассчитан на 3 месяца
              </h6>
              <h6 class="u-custom-font u-font-ubuntu u-text u-text-default u-text-8">200.000 / месяц</h6>
            </div>
            </router-link>
          </div>



        <img class="u-image u-image-contain u-image-default u-preserve-proportions u-image-1" src="@/assets/image/home_image/1.png" alt=""
             data-image-width="256" data-image-height="256">
        <img class="u-image u-image-contain u-image-default u-preserve-proportions u-image-2" src="@/assets/image/home_image/39.png" alt=""
             data-image-width="256" data-image-height="256">
        <div class="u-container-style u-custom-color-5 u-group u-radius-30 u-shape-round u-group-3">
          <div class="u-container-layout u-container-layout-3">
            <h6 class="u-custom-font u-font-ubuntu u-text u-text-default u-text-9">General speaking</h6>
            <h6 class="u-custom-font u-font-ubuntu u-text u-text-10"> * Групповые занятия<br>* 3 раза в неделю по 45
              минут<br>* 12 занятий в месяц<br>* Курс рассчитан на 3 месяца
            </h6>
            <h6 class="u-custom-font u-font-ubuntu u-text u-text-default u-text-11">200.000 / месяц</h6>
          </div>
        </div>
        <div class="u-container-style u-custom-color-5 u-group u-radius-30 u-shape-round u-group-4">
          <div class="u-container-layout u-container-layout-4">
            <h5 class="u-custom-font u-font-ubuntu u-text u-text-default u-text-12">IELTS<span
                style="font-size: 1.5rem;">
                  <span style="font-size: 1.875rem;">
                    <span style="font-size: 2.25rem;">
                      <span style="font-weight: 700;"></span>
                    </span>
                  </span>
                </span>
            </h5>
            <h6 class="u-align-left u-custom-font u-font-ubuntu u-text u-text-13"> - Позволяет определить уровень и
              навыки владения английским у людей, для которых он не является родным, учит систематизировать
              процессы памяти.</h6>
          </div>
        </div>
        <div class="u-container-style u-custom-color-5 u-group u-radius-30 u-shape-round u-group-5">
          <div class="u-container-layout u-container-layout-5">
            <h6 class="u-custom-font u-font-ubuntu u-text u-text-14">IELTS writing</h6>
            <h6 class="u-custom-font u-font-ubuntu u-text u-text-15"> * <router-link to="/task_1"> IELTS task 1</router-link><br>*
              <router-link to="/task_2">IELTS task 2</router-link> <br>*
              <router-link to="/task_3"> MOCK academic writing</router-link><br>* feedbacks
            </h6>
            <h6 class="u-custom-font u-font-ubuntu u-text u-text-default u-text-16">30.000 / штук</h6>
          </div>
        </div>
        <img class="u-image u-image-contain u-image-default u-preserve-proportions u-image-3" src="@/assets/image/home_image/53.png" alt=""
             data-image-width="256" data-image-height="256">
        <img class="u-image u-image-contain u-image-default u-preserve-proportions u-image-4" src="@/assets/image/home_image/23.png" alt=""
             data-image-width="256" data-image-height="256">
      </div>
    </section>


  </body>

</template>
<style src="@/assets/homeViewOld.css" scoped></style>
<style src="@/assets/nicepage_old.css" scoped></style>
