<script>
import {defineComponent} from 'vue'
import axios from "axios";
import ItemTest from "@/components/test/ItemTest.vue";

export default defineComponent({
  name: "TestView",
  components: {ItemTest},
  data(){
    return{
      testArr:[],
    }

  },
  methods: {
    async test() {
      try {

        const {data} = await axios.get('http://185.103.254.135:8080/api/quiz/question/')
        const  newArr = data.map(item =>({
          question_text:item.question_text,
          answers:item.answers,
        }))
        console.log(newArr)
        this.testArr = newArr
      } catch (error) {
        alert(error.message)
      }


    }
  },
  mounted() {
    this.test()
  }
})
</script>

<template>
  <section>
    <div class="container">
      <div class="head-h1">
        <h1>Testga xushkelibsiz!</h1>
      </div>

        <ItemTest v-for="item_test in testArr" v-bind:item_test="item_test" />


      <div class="send-btn">
        <a href="#" class="btn btn-primary">Send</a>
      </div>

      <br>
      <br>
      <br>

    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #eee;
}

.container .head-h1 {
  text-align: center;
}

.container .head-h1 h1 {
  font-size: 40px;
  font-weight: 900;
  padding: 30px;
}

.container .card {
  margin: 20px;
  border-radius: 25px 25px 0 0;


}

.container .card .card-header {
  background-color: #fd5f00;
  border-radius: 25px 25px 0 0;
}

.container .card .card-body .test-choose {
  display: flex;
  flex-direction: row;
}

.container .card .card-body .test-choose .test-li {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 15px;
  margin: 20px;
  font-size: 20px;
}

.container .card .card-body .test-choose .test-li input {
  width: 25px;
  height: 25px;
}

.container .card .card-body .test-choose .test-li label {
  margin-left: 20px;
}

.send-btn {
  display: flex;
  justify-content: center;
}

.send-btn a {
  width: 100px;
  height: 40px;
}

@media screen and(max-width: 1060px ) {
  .container .card .card-body .test-choose {
    flex-direction: column;
  }

}

</style>