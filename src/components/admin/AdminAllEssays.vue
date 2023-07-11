<script>
import {defineComponent} from 'vue'
import Loader from "@/ui-componets/Loader.vue";
import {mapGetters} from "vuex";

export default defineComponent({
  name: "AdminAllEssays",
  components: {Loader},
  computed: {
    ...mapGetters('essay', ['allEssays'])
  },
  mounted() {
    this.$store.dispatch("essay/allGetEssay")
  },
  methods:{
     adminEssayDetail(id) {
      return this.$router.push(`/admin_essay_detail/${id}`)
    }
  }
})
</script>

<template>

  <h1>All Essays</h1>
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
          <th scope="col">Edit</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="essay in allEssays" :key="essay.id">
          <td>{{ essay.student.id }}</td>
          <td>{{ essay.student.first_name }}</td>
          <td>{{ essay.student.email }}</td>
          <template v-if="essay.essays.length === 1">
            <template v-for="essay in essay.essays">
              <td v-if="essay.score === null">
                <button @click="adminEssayDetail(essay.id)" class="btn btn-outline-danger">Tekshirilmagan</button>
              </td>
              <td v-else>
                <button @click="adminEssayDetail(essay.id)" class="btn btn-outline-primary">{{ essay.score }} ball
                </button>
              </td>
              <td></td>
            </template>
          </template>
          <template v-else>
            <template v-for="essay in essay.essays">
              <td v-if="essay.score === null">
                <button @click="adminEssayDetail(essay.id)" class="btn btn-outline-danger">Tekshirilmagan</button>
              </td>
              <td v-else>
                <button @click="adminEssayDetail(essay.id)" class="btn btn-outline-primary">{{ essay.score }} ball
                </button>
              </td>

            </template>
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
</style>