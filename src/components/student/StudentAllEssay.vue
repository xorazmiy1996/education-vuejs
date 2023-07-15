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
    }
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
  <h1>Essays all </h1>
  <div class="container">
    <div class="tabel-cabinet">
      <Loader v-if="isLoading" class="offset-md-6"/>

      <table class="table table-striped">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Write</th>
          <th scope="col">Write</th>
          <th scope="col">Data</th>

        </tr>
        </thead>
        <tbody>
        <template v-for="(essay, index) in allEssays">
          <tr v-if="essay.essays.length === 2" :key="essay.id">
            <td>{{ index + 1 }}</td>
            <td v-for="x in essay.essays">
              <ul>
                <li style="color: red" v-if="x.score == null">
                  <button @click="studentEssayDetail(x.id)" class="btn btn-outline-danger">Tekshirilmagan</button>
                </li>
                <li style="color: deepskyblue" v-else>
                  <button @click="studentEssayDetail(x.id)" class="btn btn-outline-primary">{{ x.score }} ball</button>
                </li>
              </ul>
            </td>
          </tr>
          <tr v-else>
          <td>{{ index + 1 }}</td>
            <td v-for="x in essay.essays">
              <ul>
                <li style="color: red" v-if="x.score == null">
                  <button @click="studentEssayDetail(x.id)" class="btn btn-outline-danger">tekshirilmagan</button>
                </li>
                <li style="color: deepskyblue" v-else>
                  <button @click="studentEssayDetail(x.id)" class="btn btn-outline-primary">{{ x.score }} ball</button>
                </li>
              </ul>
            </td>
            <td></td>
          </tr>
        </template>


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