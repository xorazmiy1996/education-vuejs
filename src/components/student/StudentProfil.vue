<script>
import {defineComponent} from "vue";
import {mapGetters} from "vuex";
import Modal from "@/ui-componets/Modal.vue";
import {maskitoNumberOptionsGenerator} from "@maskito/kit";


export default defineComponent({
  name: "StudentProfil",
  components: {Modal},
  data() {
    return {

      isEditModalOpen: false,
      userDetail: null,
      userPhoto: null,
    }
  },
  computed: {
    ...mapGetters('auth', ['user'])
  },
  methods: {

    openEditModal() {
      this.isEditModalOpen = true;
      this.userDetail = this.user

    },
    closeEditModal() {
      this.isEditModalOpen = false
    },
    patchUser() {

      const user_data = {
        "first_name":this.userDetail?.first_name ,
        "last_name": this.userDetail?.last_name,
        "phone_number": this.userDetail?.phone_number,
      }
      this.$store.dispatch("auth/patchUser", user_data).then((resp)=>{
        // console.log("salom")
      })

    },

    openFileInput() {
      this.$refs.fileInput.click()
    },
    handleFileChange(event) {
      const file1 =  event.target.files[0];
      const data = {
        "id": this.user?.photo?.id,
        "send_file":{
          "file": file1,
          "upload_for": "user",
        }

      }

      this.$store.dispatch("auth/patchUserPhoto", data).then((response) => {
        // console.log(data)
      })


    },


  }
})
</script>

<template>

  <div class="container">
    <div class="main-body">
      <div class="row gutters-sm">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <form  method="POST" enctype="multipart/form-data">
                  <input @change="handleFileChange" ref="fileInput" type="file" class="d-none">
                </form>





                <img @click="openFileInput()" :src="user?.photo?.file" alt="Admin" class="outline rounded-circle"
                     width="150">
                <div class="mt-3">
                  <h4>{{ user?.type }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card mb-3">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">И.Ф.О</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ user?.last_name }} {{ user?.first_name }}
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0 ">Почта</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ user?.email }}
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Телефон</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ user?.phone_number }}
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-12">
                  <button @click="openEditModal" class="btn btn-primary">Изменить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <modal :is-open="isEditModalOpen" title="Менять данные" @close="closeEditModal">
    <template v-slot:modal-body>
      <form v-if="!!user" @submit="patchUser" >
        <div class="mb-3">
          <label for="exampleInputFirstName" class="form-label">Имя</label>
          <input type="text" v-model="userDetail.first_name" class="form-control" id="exampleInputFirstName">
        </div>
        <div class="mb-3">
          <label for="exampleInputFirstName" class="form-label">Фамилия</label>
          <input type="text" v-model="userDetail.last_name" class="form-control" id="exampleInputFirstName">
        </div>
        <div class="mb-3">
          <label for="exampleInputFirstName" class="form-label">Телефон</label>
          <input type="number" v-model="userDetail.phone_number" class="form-control" id="exampleInputFirstName">
        </div>
<!--        <fieldset class="row mb-3">-->
<!--          <legend class="col-form-label col-sm-2 pt-0">Пол</legend>-->
<!--          <div class="col-sm-10 d-flex">-->
<!--            <div class="form-check me-5">-->
<!--              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>-->
<!--              <label class="form-check-label" for="gridRadios1">-->
<!--                Мужчина-->
<!--              </label>-->
<!--            </div>-->
<!--            <div class="form-check">-->
<!--              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">-->
<!--              <label class="form-check-label" for="gridRadios2">-->
<!--                Женщина-->
<!--              </label>-->
<!--            </div>-->
<!--          </div>-->
<!--        </fieldset>-->
<!--        <div class="mb-3">-->
<!--          <label for="exampleInputDate" class="form-label">Дата рождения</label>-->
<!--          <input type="date" class="form-control" id="exampleInputDate">-->
<!--        </div>-->
        <div class="position-relative">
          <button type="submit"  class="btn btn-primary position-absolute top-0 end-0">Изменить</button>
        </div>
      </form>
    </template>
    <template v-slot:modal-footer>

    </template>


  </modal>
</template>

<style scoped>
.outline:hover {
  border: 5px solid blue;
  cursor: pointer;
}
</style>