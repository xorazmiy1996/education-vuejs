<script>
import {defineComponent} from 'vue'
import Loader from "@/ui-componets/Loader.vue";
import {mapGetters} from "vuex";
import DeleteModal from "@/ui-componets/alert-modal/DeleteModal.vue";

export default defineComponent({
  name: "AdminAllEssay",
  components: {DeleteModal, Loader},
  computed: {
    ...mapGetters('essay', ['isLoading']),
    ...mapGetters('essay', ['allEssays']),
  },
  mounted() {
    this.$store.dispatch("essay/allGetEssay")
  },
  data() {
    return {
      isDeleteModalOpen: false,
      delete_id: ''
    }
  },

  methods: {
    // delete modal
    openDeleteModal(id) {
      this.delete_id = id
      this.isDeleteModalOpen = true
    },
    closeDeleteModal() {
      this.isDeleteModalOpen = false
      this.delete_id = ''
    },
    deleteEssay() {
      this.$store.dispatch('essay/deleteEssay', this.delete_id).then(() => {
        this.closeDeleteModal()
        this.$store.dispatch('essay/allGetEssay')
      })

    },
    studentEssayDetail(id) {
      return this.$router.push(`/student_essay_detail/${id}`)
    },
     calculation_score(score1, score2, score3, score4,score5,score6,score7,score8) {
      const x = (parseInt(score1) + parseInt(score2) + parseInt(score3) + parseInt(score4) +2 * ((parseInt(score5) + parseInt(score6) + parseInt(score7) + parseInt(score8)) ))*3 /100

      return parseFloat(x)

    },
  }
})
</script>

<template>
  <delete-modal :is-open="isDeleteModalOpen" title="Delete" @close="closeDeleteModal">
    <p>Ushbu inshoni o'chirmoqchimisiz?</p>
    <div class="d-flex">
      <button @click="deleteEssay" type="button" class="btn btn-outline-success success-button delete-button">Yes
      </button>
      <button @click="closeDeleteModal" type="button" class="btn btn-outline-danger">No</button>
    </div>

  </delete-modal>
  <h1 style="margin-left: 10px">Все сочинения </h1>
  <div class="container">
    <div class="tabel-cabinet">
      <Loader v-if="isLoading" class="offset-md-6"/>

      <table class="table table-striped">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Writing task 1</th>
          <th scope="col">Writing task 2</th>
          <th scope="col">Band score</th>

        </tr>
        </thead>
        <tbody>
         <tr v-for="(essay, index) in allEssays" :key="essay.id">
          <td>{{ index + 1 }}</td>
          <template v-if="essay.essay1">
            <td v-if="essay.essay1?.feedback === null">
              <button @click="studentEssayDetail(essay.essay1?.id)" class="btn btn-outline-danger">Tekshirilmagan</button>
            </td>
            <td v-else>
              <button @click="studentEssayDetail(essay.essay1?.id)" class="btn btn-outline-primary">
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
              <button @click="studentEssayDetail(essay.essay2?.id)" class="btn btn-outline-danger">Tekshirilmagan</button>
            </td>
            <td v-else>
              <button @click="studentEssayDetail(essay.essay2?.id)" class="btn btn-outline-primary">
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
            <td v-if="essay.essay2?.feedback && essay.essay1?.feedback">
              <button class="btn btn-primary">
                {{ calculation_score(parseInt(essay.essay1?.score['0'].score), parseInt(essay.essay1?.score['1'].score), parseInt(essay.essay1?.score['2'].score), parseInt(essay.essay1?.score['3'].score), parseInt(essay.essay2?.score['0'].score), parseInt(essay.essay2?.score['1'].score), parseInt(essay.essay2?.score['2'].score), parseInt(essay.essay2?.score['3'].score)) }}
              </button>

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
<!--        <template v-for="(essay, index) in allEssays">-->
<!--          <tr v-if="essay.essays.length === 2" :key="essay.id">-->
<!--            <td>{{ index + 1 }}</td>-->
<!--            <td v-for="x in essay.essays">-->
<!--              <ul>-->
<!--                <li style="color: red" v-if="x.score == null">-->
<!--                  <button @click="studentEssayDetail(x.id)" class="btn btn-outline-danger">Tekshirilmagan</button>-->
<!--                </li>-->
<!--                <li style="color: deepskyblue" v-else>-->
<!--                  <button @click="studentEssayDetail(x.id)" class="btn btn-outline-primary">{{ x.score }} ball</button>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </td>-->
<!--          </tr>-->
<!--          <tr v-else>-->
<!--          <td>{{ index + 1 }}</td>-->
<!--            <td v-for="x in essay.essays">-->
<!--              <ul>-->
<!--                <li style="color: red" v-if="x.score == null">-->
<!--                  <button @click="studentEssayDetail(x.id)" class="btn btn-outline-danger">tekshirilmagan</button>-->
<!--                </li>-->
<!--                <li style="color: deepskyblue" v-else>-->
<!--                  <button @click="studentEssayDetail(x.id)" class="btn btn-outline-primary">{{ x.score }} ball</button>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </td>-->
<!--            <td></td>-->
<!--          </tr>-->
<!--        </template>-->


        </tbody>
      </table>
    </div>
  </div>

</template>

<style scoped>
.icon i {
  margin-right: 10px;
  font-size: 20px;
}

.delete-button {
  margin-right: 10px;
}

ul {
  list-style: none;
  margin: 0;
}

ul li {
  list-style: none;
  margin: 0;

}

ul li button {
  list-style: none;

}

ul li a {
  text-decoration: none;
  color: red;
}


</style>