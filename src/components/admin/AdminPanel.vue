<script>
import {defineComponent} from 'vue'
import CourseCard from "@/components/card/CourseCard.vue";
import AdminNavbar from "@/App.vue";
import {mapGetters} from "vuex";


export default defineComponent({
  name: "AdminPanel",
  computed: {
    ...mapGetters('auth', ['user'])
  }


})
</script>

<template>
  <div class="container">
    <div class="card mb-5">
      <div class="card-body">
        <h5 class="card-title">Admin: {{ user?.first_name }} {{user?.last_name}}</h5>
        <p class="card-text">Tizim administratorining vazifalari, bir kompyuter tarmog'i yoki tizimda muammo yuzaga
          kelmasligi uchun zarur bo'lgan harakatlarini boshqarish va nazorat qilish bilan bog'liq. Ushbu vazifalar
          quyidagilar bo'lishi mumkin:.</p>

      </div>
    </div>
    <h1>Savollar</h1>
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item mb-2 ">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
            <code>.accordion-flush</code> class. This is the first item's accordion body.
          </div>
        </div>
      </div>
      <div class="accordion-item mb-2">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
            <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being
            filled with some actual content.
          </div>
        </div>
      </div>
      <div class="accordion-item mb-2">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
            <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting
            happening here in terms of content, but just filling up the space to make it look, at least at first glance,
            a bit more representative of how this would look in a real-world application.
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
}
</style>