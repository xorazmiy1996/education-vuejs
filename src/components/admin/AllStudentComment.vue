<script>
import Loader from "@/ui-componets/Loader.vue";
import {mapGetters} from "vuex";
import {defineComponent} from "vue";

export default defineComponent(
    {
      name: "AllStudentComment",
      components: {Loader},
      computed: {
        ...mapGetters('cabinet', ['allStudentComment',"studentComment"])
      },
      mounted() {
        this.$store.dispatch("cabinet/getAllStudentComment")
      },
      methods:{
        getStudentComment(id){
          this.$store.dispatch("cabinet/getStudentComment", id)
          this.$store.dispatch("cabinet/readyStudentComment", id)
        },
      }

    }
);
</script>

<template>
  <div class="row">
    <div class="col-12 text-center mt-3">
      <h1 class="fw-bold">Жалобы</h1>
    </div>
  </div>


  <div class="container">
    <div class="tabel-cabinet">
      <Loader v-if="isLoading" class="offset-md-6"/>
      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Имя студента</th>
          <th scope="col">Почта</th>
          <th scope="col">Название курса</th>
          <th scope="col">Детали</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="(comment, index) in allStudentComment" :key="comment.id" class="table-success">
          <td>{{ index + 1 }}</td>
          <td>{{ comment?.user?.first_name }} {{ comment?.user?.last_name }}</td>
          <td>{{ comment?.user?.email }}</td>
          <td>{{ comment?.cabinet?.course?.name }}</td>
          <td>
            <!-- Button trigger modal -->
            <button @click="getStudentComment(comment?.id)" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Просмотр
            </button>
            {{comment?.is_read}}
          </td>

        </tr>
        </tbody>
      </table>
    </div>
  </div>


  <!-- Modal -->
  <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Отзыв</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {{studentComment?.comment}}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>