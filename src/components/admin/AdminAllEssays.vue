<script>
import {defineComponent} from 'vue'
import Loader from "@/ui-componets/Loader.vue";
import {mapGetters} from "vuex";

export default defineComponent({
  name: "AdminAllEssays",
  components: {Loader},
  // data(){
  //   return{
  //     students:[]
  //   }
  // },
  computed: {
    ...mapGetters('essay', ['allEssays'])
  },
  mounted() {
    this.$store.dispatch("essay/allGetEssay")
  },
  methods: {
    adminEssayDetail(id) {
      return this.$router.push(`/admin_essay_detail/${id}`)
    },
    calculation_score(score1, score2, score3, score4,score5,score6,score7,score8) {
      const x = (parseInt(score1) + parseInt(score2) + parseInt(score3) + parseInt(score4) +2 * ((parseInt(score5) + parseInt(score6) + parseInt(score7) + parseInt(score8)) ))*3 /100

      return parseFloat(x)

    },
  }
})
</script>

<template>
  <div class="row">
    <div class="col-12 text-center mt-3">
      <h1>Все писменные работы</h1>
    </div>
  </div>


  <div class="container">
    <div class="tabel-cabinet">
      <Loader v-if="isLoading" class="offset-md-6"/>
      <table class="table table-striped">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Имя студента</th>
          <th scope="col">Почта</th>
          <th scope="col">Task1</th>
          <th scope="col">Task2</th>
          <th scope="col">Общая оценка</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="(essay, index) in allEssays" :key="essay.id">
          <td>{{ index + 1 }}</td>
          <td>{{ essay.student.first_name }}</td>
          <td>{{ essay.student.email }}</td>
          <template v-if="essay.essay1">
            <td v-if="essay.essay1?.feedback === null">
              <button @click="adminEssayDetail(essay.essay1?.id)" class="btn btn-outline-danger">Непроверенный</button>
            </td>
            <td v-else>
              <button @click="adminEssayDetail(essay.essay1?.id)" class="btn btn-outline-primary">
                {{
                  (essay.essay1?.score['0'].score + essay.essay1?.score['1'].score + essay.essay1?.score['2'].score + essay.essay1?.score['3'].score) * 9 / 100
                }}
              </button>
            </td>

          </template>
          <template v-else>
            <td></td>
          </template>
          <template v-if="essay.essay2">
            <td v-if="essay.essay2?.feedback === null">
              <button @click="adminEssayDetail(essay.essay2?.id)" class="btn btn-outline-danger">Непроверенный</button>
            </td>
            <td v-else>
              <button @click="adminEssayDetail(essay.essay2?.id)" class="btn btn-outline-primary">
                {{
                  (essay.essay2?.score['0'].score + essay.essay2?.score['1'].score + essay.essay2?.score['2'].score + essay.essay2?.score['3'].score) * 9 / 100
                }}
              </button>
            </td>

          </template>
          <template v-else>
            <td></td>
          </template>

          <template v-if="true">
            <td v-if="essay.essay2?.feedback && essay.essay1?.feedback">
              <button class="btn btn-primary">
                {{ calculation_score(essay.essay1?.score['0'].score, essay.essay1?.score['1'].score, essay.essay1?.score['2'].score, essay.essay1?.score['3'].score, essay.essay2?.score['0'].score, essay.essay2?.score['1'].score, essay.essay2?.score['2'].score, essay.essay2?.score['3'].score) }}
              </button>

               </td>
            <td v-else></td>
          </template>
        </tr>
        </tbody>
      </table>
    </div>
  </div>


</template>

<style scoped>
.icon i {
  margin-right: 10px;
  cursor: pointer;
  font-size: 20px;
}

h1 {
  font-weight: 900;
  color: deepskyblue;
}
</style>