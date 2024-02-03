<script>
import {defineComponent} from "vue";
import Loader from "@/ui-componets/Loader.vue";
import {mapGetters} from "vuex";
import Modal from "@/ui-componets/Modal.vue";

export default defineComponent( {
  name: "AllUserList",
  components: {Modal, Loader},
  data(){
    return{
      dropdown_type:"student",
      modalData:null,
      isOpenModal:false,
      isOpenViewCourseModal:false,
      viewsCourseData:null,
    }
  },
  computed:{
    ...mapGetters('auth', ['allUsers',]),
  },
  created() {
    this.getAllUsers(this.dropdown_type)
  },
  methods:{
    getAllUsers(user_type){
      this.$store.dispatch("auth/getAllUsers", user_type)
          .then(response =>{
            if(user_type === "student"){
              this.dropdown_type = "student"
            }
            if(user_type === "teacher"){
              this.dropdown_type = "teacher"
            }
            if(user_type === "admin"){
              this.dropdown_type = "admin"
            }

          }).catch(error =>{
        console.log("2")
      })
    },
    openModal(data){
      this.modalData = data
      this.isOpenModal = true
    },
    openViewsCourseModal(data){
      this.isOpenViewCourseModal = true
    },
    closeModal(data){
      this.modalData = null
      this.isOpenModal = false
    },
    closeViewsCourseModal(data){
      this.isOpenViewCourseModal = false
    },
    viewCourse(data){
      this.viewsCourseData = data
      this.closeModal()
      this.openViewsCourseModal()


    }
  }
})
</script>

<template>
  <div class="row">
    <div class="col-12 text-center mt-3">
      <h1 class="fw-bold">Все пользователи</h1>
    </div>
  </div>






  <div class="container">
    <div class="d-flex justify-content-end">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {{dropdown_type}}
        </button>
        <ul class="dropdown-menu">
          <li @click="getAllUsers('student')"><a class="dropdown-item">Student</a></li>
          <li @click="getAllUsers('teacher')"><a class="dropdown-item">Teacher</a></li>
          <li @click="getAllUsers('admin')"><a class="dropdown-item">Admin</a></li>

        </ul>
      </div>
  </div>
    <div class="tabel-cabinet mt-3">
      <Loader v-if="isLoading" class="offset-md-6"/>
      <table class="table table-striped">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Имя студента</th>
          <th scope="col">Почта</th>
          <th scope="col">Телефон номер</th>
          <th v-if="dropdown_type !== 'admin'" scope="col">Курс</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="(user, index) in allUsers" >
          <td>{{ index + 1 }}</td>
          <td>{{ user.last_name }} {{ user.first_name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone_number }}</td>
          <td v-if="user.type === 'student'"><button v-if="user?.attend_courses?.length"  @click="openModal(user?.attend_courses)" class="btn btn-primary">course</button></td>
          <td v-if="user.type === 'teacher'"><button v-if="user?.teach_courses?.length" @click="openModal(user?.teach_courses)" class="btn btn-primary">course</button></td>

        </tr>
        </tbody>
      </table>
    </div>
  </div>

  <modal :isOpen="isOpenModal" title="Class data" @close="closeModal">
    <template v-slot:modal-body>
      <div  v-for="cabinet in modalData" class="d-flex justify-content-between align-items-center mt-3 p-3 text-primary-emphasis bg-light-subtle border border-primary-subtle rounded-3">
        <div>
          {{cabinet?.course?.name}}
        </div>
        <div>
          <button class="btn btn-primary btn-sm" @click="viewCourse(cabinet)">Views</button>
        </div>
      </div>

    </template>
  </modal>

  <modal :is-open="isOpenViewCourseModal" title="Views Course"  @close="closeViewsCourseModal">
    <template v-slot:modal-body>
      <table class="table">
        <tbody>
        <tr>
          <td>Time</td>
          <td>{{viewsCourseData?.time}}</td>
        </tr>
        <tr>
          <td>Teacher Name</td>
          <td>{{viewsCourseData?.teacher?.first_name}} {{viewsCourseData?.teacher?.last_name}}</td>
        </tr>
        <tr>
          <td>Week day</td>
          <td>
            <span v-for="day in viewsCourseData?.weekdays" class="badge text-bg-primary">
                        <b v-if="day === '0'">1</b>
                        <b v-if="day === '1'">2</b>
                        <b v-if="day === '2'">3</b>
                        <b v-if="day === '3'">4</b>
                        <b v-if="day === '4'">5</b>
                        <b v-if="day === '5'">6</b>
                        <b v-if="day === '6'">7</b>
            </span>
          </td>
        </tr>
        <tr>
          <td>Course type</td>
          <td>{{viewsCourseData?.course?.type}}</td>
        </tr>
        <tr>
          <td>Price</td>
          <td>{{viewsCourseData?.course?.price}}</td>
        </tr>
        </tbody>
      </table>
    </template>

  </modal>
</template>

<style scoped>

</style>