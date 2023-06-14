<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Task1",
  data() {
    return {
      topic: false,
      topic_text: '',
      time: new Date(20 * 60 * 1000)
    }
  },
  // mounted() {
  // setInterval(() => {
  //   this.time = new Date(this.time.getTime() - 1000) // 1 soniya kamaytirish
  // }, 1000)
  // },
  computed: {
    formattedTime() {
      return `${this.time.getMinutes()}:${this.time.getSeconds()}`// vaqtni o'zgartirish va formatlash
    }
  },


  methods: {
    // setInterval(() => {
    //   this.time = new Date(this.time.getTime() - 1000) // 1 soniya kamaytirish
    // }, 1000)

    checkTopic() {
      setInterval(() => {
        this.time = new Date(this.time.getTime() - 1000) // 1 soniya kamaytirish
      }, 1000)
      if (this.topic_text.length > 0) {
        this.topic = true
      } else {
        this.topic = false
      }
      this.$refs.topic_button.style.display="none"

    },

  },

})
</script>

<template>
  <br>
  <div class="container text-center">
    <h1>Writing uchun mavzu nomini kiriting!</h1>
  </div>
  <br>
  <section>
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <form action="">
          <div class="input-group input-group-lg">
            <input type="text" class="form-control bg-body-tertiary" v-model="topic_text"
                   placeholder="Enter topic" aria-label="Recipient's username"
                   aria-describedby="button-addon2">
            <button @click="checkTopic" ref="topic_button" class="btn btn-outline-primary" type="button" id="button-addon2">Submit</button>
          </div>
          <br>
          <br>
          <br>
          <div v-if="topic">
            <div class="d-flex justify-content-end">
              <h3>{{ formattedTime }}</h3>
            </div>

            <div class="form-floating">
            <textarea class="form-control bg-body-tertiary" placeholder="Leave a comment here" id="floatingTextarea2"
                      style="height: 300px"></textarea>
              <label for="floatingTextarea2">Text</label>
            </div>
            <div class="d-flex justify-content-end">
              <router-link to="/payme_task1_task2" type="submit" class="btn btn-primary mt-4">Submit</router-link>
            </div>
          </div>

        </form>
      </div>
      <div class="col-sm-3"></div>
    </div>

  </section>

</template>

<style scoped>
h1 {
  font-weight: 700;
  font-size: 40px;
  color: deepskyblue;
}

h3 {
  color: deepskyblue;
}
</style>