<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";

export default defineComponent({
  name: "TeacherRegistration",
  methods: {},
  computed: {
    ...mapGetters('auth', ['user']),
    isLoading() {
      return this.$store.state.auth.isLoading
    },
  },
})


</script>

<template>
  <div class="container">
    <div class="card mb-5">
      <div class="card-body">
        <h5 class="card-title">Учитель: {{ user?.first_name }} {{ user?.last_name }}</h5>
        <p class="card-text">Изучение языка требует максимальную аккуратность в отношении к языку, материалам, отношения
          к заданиям. Учителя будут стораться на все 100 процентов чтобы внести вклад к вашим практичным знаниям,
          соответсвенно к этому понятию студенты должны уважать предоставленный им возможность.</p>

      </div>
    </div>

    <h1>Правила использования платформы.</h1>
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item mb-2 ">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Нельзя общаться по тематике религии!
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Религия одна из самых и узких тем которая принята по разному со стороны разных
            личностей, уважайте веру людей и соблюдайте правило!
          </div>
        </div>
      </div>
      <div class="accordion-item mb-2">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Тематика порнографии не должно быть затронутой!
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Порнография элемент разрушении и отвлечении от образования, не обуждайте эту тему
            тут!.
          </div>
        </div>
      </div>
      <div class="accordion-item mb-2">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Все ученики должны оказаться на уроках в соглашенную время!
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Пунктуальность залог прогресса в образовании, уважайте свое время и время других,
            учавствуйте в уроках во время и делайте задании во время!
          </div>
        </div>
      </div>
      <div class="accordion-item mb-2">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse_4" aria-expanded="false" aria-controls="flush-collapseThree">
            Нельзя оскорблять учителя и все откровенные вопросы задавать запрещается!
          </button>
        </h2>
        <div id="flush-collapse_4" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Субординация знак самоуважении, цените время, знания и внимания учителей и
            следуйте за ними.
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>

h5 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0;
}

.accordion-button {
  margin-top: 10px;
//background-color: #EDF2F7;
}

</style>