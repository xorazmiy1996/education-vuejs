<script>
import {defineComponent} from 'vue'
import axios from "axios";

export default defineComponent({
  name: "TestGroupSpeaking",

  data() {
    return {
      testArr: [],
      userAnswers: [],
    }

  },
  methods: {
    async test() {
      try {
        const {data} = await axios.get('http://185.103.254.135:8080/api/quiz/question/')
        const newArr = data.map(item => ({
          id: item.id,
          question_text: item.question_text,
          answers: item.answers,
        }))
        this.testArr = newArr
      } catch (error) {
        alert(error.message)
      }


    },
    async submitData() {

       const resultArr = []

      const newAnswer =this.testArr.map((question, index) => ({
          question_id: question.id,
          answer_id: this.userAnswers[index]
        }))

      for (let i = 0; i < newAnswer.length ; i++) {
          if(newAnswer[i].answer_id !== undefined){
            resultArr.push(newAnswer[i])
          }
      }

       const submission = {
        answers: resultArr
      }
      // Test  javoblarini  backendga   yuborish
      try {
        const response = await axios.post('http://185.103.254.135:8080/api/quiz/answer/?type=Speaking', submission);
        if(response.status === 200){

          this.$store.commit('setResulTest', response.data.result );
            this.$router.push({name:'result_test_group_speaking'});
        }

      } catch (error) {
        console.log(error.message);
      }


    },
  },
  mounted() {
    this.test()
  }
})
</script>

<template>
 <section>
    <br>
    <br>

    <div class="container text-center">
        <h1>Testga xushkelibsiz!</h1>
  </div>
    <br>
    <br>
    <div class="container">
      <form action="" @submit.prevent="submitData">
        <div v-for="(question, index) in testArr" :key="index">
          <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <h5 class="card-header"> {{ index + 1 }}-savol</h5>
            <div class="card-body">
              <h5 class="card-title">{{ question.question_text }}</h5>
              <div class="test-choose">
                <div class="test-li" v-for="(answer, optionIndex) in question.answers" :key="optionIndex">
                  <div class="form-check">
                    <label>
                      <input
                          type="radio"
                          :name="'question-' + index"
                          :value="answer.id"
                          v-model="userAnswers[index]"
                      />
                      {{ answer.text }}
                    </label>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container text-center">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>


      </form>


      <br>
      <br>
      <br>

    </div>
  </section>
</template>

<style scoped>

.card{
  margin: 10px;
}
.card-header{
  background-color: #f8f9fa;
}

h1{
  font-weight: 700;
  font-size: 40px ;
  color: dodgerblue;
}

.container .card .card-body .test-choose .test-li {
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 20px;
}

.container .card .card-body .test-choose .test-li input {
  width: 18px;
  height: 18px;
}




.send-btn a {
  width: 100px;
  height: 40px;
}
</style>