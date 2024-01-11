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
    }
  },
  computed: {
    ...mapGetters('auth', ['user'])
  },
  methods: {
    openEditModal() {
      this.isEditModalOpen = true
    },
    closeEditModal() {
      this.isEditModalOpen = false
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
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle"
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
                  <h6 class="mb-0">Full Name</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ user?.last_name }} {{ user?.first_name }}
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Email</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ user?.email }}
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Phone</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  (239) 816-9029 fake
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-12">
                  <button @click="openEditModal" class="btn btn-primary">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <modal :is-open="isEditModalOpen" title="Edit Profil" @close="closeEditModal">
    <template v-slot:modal-body>
      <form>
        <div class="mb-3">
          <label for="exampleInputFirstName" class="form-label">First name</label>
          <input type="text" class="form-control" id="exampleInputFirstName" >
        </div>
        <div class="mb-3">
          <label for="exampleInputFirstName" class="form-label">Last name</label>
          <input type="text" class="form-control" id="exampleInputFirstName" >
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputFirstName" class="form-label">Phone Number</label>
          <input type="number" class="form-control" id="exampleInputFirstName" >
        </div>
        <fieldset class="row mb-3">
          <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
          <div class="col-sm-10 d-flex">
            <div class="form-check me-5">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
              <label class="form-check-label" for="gridRadios1">
                Male
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
              <label class="form-check-label" for="gridRadios2">
                Female
              </label>
            </div>
          </div>
        </fieldset>
        <div class="mb-3">
          <label for="exampleInputDate" class="form-label">Birth date</label>
          <input type="date" class="form-control" id="exampleInputDate" >
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">Dowland image</label>
          <input class="form-control" type="file" id="formFile">
        </div>
        <div class="position-relative">
          <button type="submit" class="btn btn-primary position-absolute top-0 end-0">Edit</button>
        </div>
      </form>
    </template>
    <template v-slot:modal-footer>

    </template>


  </modal>
</template>

<style scoped>

</style>