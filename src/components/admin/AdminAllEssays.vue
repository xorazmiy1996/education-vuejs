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
  }
})
</script>

<template>
  <div class="row">
    <div class="col-12 text-center mt-3">
      <h1>All Write</h1>
    </div>
  </div>


  <div class="container">
    <div class="tabel-cabinet">
      <Loader v-if="isLoading" class="offset-md-6"/>
      <table class="table table-striped">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">mail</th>
          <th scope="col">Task1</th>
          <th scope="col">Task2</th>
          <th scope="col">Ball</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="(essay, index) in allEssays" :key="essay.id">
          <td>{{ index + 1 }}</td>
          <td>{{ essay.student.first_name }}</td>
          <td>{{ essay.student.email }}</td>
          <template v-if="essay.essay1">
            <td v-if="essay.essay1?.feedback === null">
              <button @click="adminEssayDetail(essay.essay1?.id)" class="btn btn-outline-danger">Tekshirilmagan</button>
            </td>
            <td v-else>
              <button @click="adminEssayDetail(essay.essay1?.id)" class="btn btn-outline-primary">
                {{
                  (parseInt(essay.essay1?.score['0'].score) + parseInt(essay.essay1?.score['1'].score) + parseInt(essay.essay1?.score['2'].score) + parseInt(essay.essay1?.score['3'].score)) * 9 / 100
                }}
                ball
              </button>
            </td>

          </template>
          <template v-else>
            <td></td>
          </template>
          <template v-if="essay.essay2">
            <td v-if="essay.essay2?.feedback === null">
              <button @click="adminEssayDetail(essay.essay2?.id)" class="btn btn-outline-danger">Tekshirilmagan</button>
            </td>
            <td v-else>
              <button @click="adminEssayDetail(essay.essay2?.id)" class="btn btn-outline-primary">
                {{
                  (parseInt(essay.essay2?.score['0'].score) + parseInt(essay.essay2?.score['1'].score) + parseInt(essay.essay2?.score['2'].score) + parseInt(essay.essay2?.score['3'].score)) * 9 / 100
                }}
                ball
              </button>
            </td>

          </template>
          <template v-else>
            <td></td>
          </template>

          <template v-if="true">
            <td v-if="essay.essay2 && essay.essay1">
              {{ (((parseInt(essay.essay1?.score['0'].score) + parseInt(essay.essay1?.score['1'].score) + parseInt(essay.essay1?.score['2'].score) + parseInt(essay.essay1?.score['3'].score)) * 9 / 100) + 2 * ((parseInt(essay.essay2?.score['0'].score) + parseInt(essay.essay2?.score['1'].score) + parseInt(essay.essay2?.score['2'].score) + parseInt(essay.essay2?.score['3'].score)) * 9 / 100)) / 3 }}
            </td>
             <td v-else></td>
          </template>



          <!--          <template v-if="essay.essays.length === 1">-->
          <!--            <template v-for="essay in essay.essays">-->
          <!--              <td v-if="essay.feedback === null">-->
          <!--                <button @click="adminEssayDetail(essay.id)" class="btn btn-outline-danger">Tekshirilmagan</button>-->
          <!--              </td>-->
          <!--              <td v-else>-->
          <!--                <button @click="adminEssayDetail(essay.id)" class="btn btn-outline-primary">-->
          <!--                  {{-->
          <!--                    (parseInt(essay.score['0'].score) + parseInt(essay.score['1'].score) + parseInt(essay.score['2'].score) + parseInt(essay.score['1'].score)) * 9 / 100-->
          <!--                  }}-->
          <!--                  ball-->
          <!--                </button>-->
          <!--              </td>-->
          <!--              <td></td>-->
          <!--            </template>-->
          <!--          </template>-->
          <!--          <template v-else>-->
          <!--            <template v-for="essay in essay.essays">-->
          <!--              <td v-if="essay.feedback === null">-->
          <!--                <button @click="adminEssayDetail(essay.id)" class="btn btn-outline-danger">Tekshirilmagan</button>-->
          <!--              </td>-->
          <!--              <td v-else>-->
          <!--                <button @click="adminEssayDetail(essay.id)" class="btn btn-outline-primary">-->


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