<script>
import {defineComponent} from 'vue'
import Input from "@/ui-componets/Input.vue";
import {mapGetters} from "vuex";
import ValidationError from "@/components/login/ValidationError.vue";
import Modal from "@/ui-componets/Modal.vue";
import Loader from "@/ui-componets/Loader.vue";
import DeleteModal from "@/ui-componets/alert-modal/DeleteModal.vue";


export default defineComponent({
  name: "AdminCabinet",
  components: {DeleteModal, Loader, ValidationError, Input, Modal},
  data() {
    return {
      weekDays: [],
      time: '',
      course_id: null,
      teacher_id: null,
      start_date: null,
      isModalOpen: false,
      isDeleteModalOpen: false,

      delete_id: ''


    }
  },
  created() {

    this.$store.dispatch("course/getAllCourse")
    this.$store.dispatch("teacher/getAllTeachers")
  },
  mounted() {
    this.$store.dispatch("cabinet/getAllCabinets")
  },


  computed: {
    ...mapGetters("course", ['courses']),
    ...mapGetters("teacher", ['teachers']),
    ...mapGetters("cabinet", ['cabinets']),
    ...mapGetters("cabinet", ['cabinetError']),
    ...mapGetters("cabinet", ['isLoading']),
  },

  methods: {
    submitHandler() {
      const data = {
        "teacher_id": this.teacher_id,
        "time": this.time,
        "course_id": this.course_id,
        "start_date": this.start_date,
        "weekdays": this.weekDays,
      }
      this.$store
          .dispatch("cabinet/createCabinet", data)
          .then(response => {
            this.closeModal()
            this.$store.dispatch("cabinet/getAllCabinets")
          })
          .catch(error => console.log("cabinet create error", error))
    },

    deleteCabinet() {
      return this.$store.dispatch('cabinet/deleteCabinet', this.delete_id)
          .then(() => {
            this.$store.dispatch("cabinet/getAllCabinets")
            this.closeDeleteModal()
          })


    },
    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    },
    // delete modal
    openDeleteModal(id) {
      this.delete_id = id
      this.isDeleteModalOpen = true
    },
    closeDeleteModal() {
      this.isDeleteModalOpen = false
    },


  }
})


</script>

<template>
  <delete-modal :is-open="isDeleteModalOpen" title="Delete" @close="closeDeleteModal">
    <p>Ushbu cabinetni o'chirmoqchimisiz?</p>
    <div class="d-flex">
      <button @click="deleteCabinet" type="button" class="btn btn-outline-success success-button">Yes</button>
      <button @click="closeDeleteModal" type="button" class="btn btn-outline-danger">No</button>
    </div>
  </delete-modal>
  <div class="container">
    <div class="modal-cabinet">

      <button @click="openModal" class="btn btn-primary">Create Cabinet</button>
      <br>
      <br>

      <div class="modal-body">
        <modal :is-open="isModalOpen" title="My Modal" @close="closeModal">
          <form @submit.prevent="submitHandler">
            <div class="mb-3">
              <label for="exampleInputTeacher" class="form-label">Teacher</label>
              <select class="form-select" id="exampleInputTeacher" v-model="teacher_id">
                <option value="">Teacher select</option>
                <option v-for="teacher in teachers" :value="teacher.id">{{ teacher.first_name }}</option>
              </select>
              <ValidationError v-if="cabinetError" :validationError="cabinetError.teacher_id"/>


            </div>
            <div class="mb-3">
              <label for="exampleInputTime" class="form-label">Time</label>
              <input v-model="time" type="time" class="form-control" id="exampleInputTime">
              <ValidationError v-if="cabinetError" :validationError="cabinetError.time"/>
            </div>


            <div class="mb-3">
              <label for="exampleInputCourse" class="form-label">Course</label>


              <select class="form-select" id="exampleInputCourse" v-model="course_id">
                <option disabled value="">Course select</option>
                <option v-for="course in courses" :value="course.id">{{ course.name }}</option>
              </select>
              <ValidationError v-if="cabinetError" :validationError="cabinetError.course_id"/>


            </div>


            <div class="mb-3">
              <label for="exampleInputStartDate" class="form-label">Start date</label>
              <input v-model="start_date" type="date" class="form-control" id="exampleInputStartDate">
              <ValidationError v-if="cabinetError" :validationError="cabinetError.start_date"/>
            </div>
            <div class="mb-3">
              <label for="exampleInputWeekDay" class="form-label">Week days</label>
              <ValidationError v-if="cabinetError" :validationError="cabinetError.weekdays"/>
              <br>
              <input type="checkbox" class="form-check-input" id="Monday" value="0" v-model="weekDays">
              <label class="form-label" for="Monday">Monday</label>
              <br>
              <input type="checkbox" class="form-check-input" id="Tuesday" value="1" v-model="weekDays">
              <label class="form-label" for="Tuesday">Tuesday</label>
              <br>

              <input type="checkbox" class="form-check-input" id="Wednesday" value="2" v-model="weekDays">
              <label class="form-label" for="Wednesday">Wednesday</label>
              <br>

              <input type="checkbox" class="form-check-input" id="Thursday" value="3" v-model="weekDays">
              <label class="form-label" for="Thursday">Thursday</label>
              <br>

              <input type="checkbox" class="form-check-input" id="Friday" value="4" v-model="weekDays">
              <label class="form-label" for="Friday">Friday</label>
              <br>

              <input type="checkbox" class="form-check-input" id="Saturday" value="5" v-model="weekDays">
              <label class="form-label" for="Saturday">Saturday</label>
              <br>

              <input type="checkbox" class="form-check-input" id="Sunday" value="6" v-model="weekDays">
              <label class="form-label" for="Sunday">Sunday</label>

            </div>

            <button type="submit" :disabled="isLoading" class="btn btn-primary">Submit</button>
          </form>
        </modal>
      </div>
    </div>


    <div class="tabel-cabinet">
      <Loader v-if="isLoading" class="offset-md-6"/>
      <table class="table table-striped">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Course</th>
          <th scope="col">Level</th>
          <th scope="col">Course type</th>
          <th scope="col">skill</th>
          <th scope="col">Duration</th>
          <th scope="col">Teacher</th>
          <th scope="col">Start date</th>
          <th scope="col">Week days</th>
          <th scope="col">Time</th>
          <th scope="col">Price</th>
          <th scope="col">Edit</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="cabinet in cabinets">
          <th scope="row">{{ cabinet.id }}</th>
          <td>{{ cabinet.course.name }}</td>
          <td>{{ cabinet.course.level }}</td>
          <td>{{ cabinet.course.type }}</td>
          <td>{{ cabinet.course.skills['0'] }}</td>
          <td>{{ cabinet.course.duration }} day</td>
          <td>{{ cabinet.teacher.first_name }}</td>
          <td>{{ cabinet.start_date }}</td>
          <td>
            <span v-for="day in cabinet.weekdays" class="badge text-bg-primary">
                        <b v-if="day === '0'">1</b>
                        <b v-if="day === '1'">2</b>
                        <b v-if="day === '2'">3</b>
                        <b v-if="day === '3'">4</b>
                        <b v-if="day === '4'">5</b>
                        <b v-if="day === '5'">6</b>
                        <b v-if="day === '6'">7</b>
                    </span>

          </td>
          <td>{{ cabinet.time }}</td>
          <td>{{ cabinet.course.price }} so'm</td>
          <td>
            <div class="icon">
              <i class="fa fa-pen-square"></i>
              <i @click="openDeleteModal(cabinet.id)" class="fa fa-trash"></i>
            </div>


          </td>
        </tr>

        </tbody>
      </table>
    </div>

  </div>


</template>

<style scoped>
#modal-bottom {
  margin: 10px;
}

input[type='checkbox'] {
  margin: 5px;
}

.tabel-cabinet {
  overflow: auto;
}

.icon .fa-trash {
  font-size: 20px;
  margin: 5px;
  cursor: pointer;

}

.icon .fa-pen-square {
  font-size: 20px;
  margin: 5px;
  cursor: pointer;
}

tr span {
  margin-left: 3px;
}

.success-button {
  margin-right: 20px;
}


</style>