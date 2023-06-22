<script>
import {defineComponent} from 'vue'
import Input from "@/ui-componets/Input.vue";
import {mapGetters} from "vuex";
import ValidationError from "@/components/login/ValidationError.vue";
import Modal from "@/ui-componets/Modal.vue";


export default defineComponent({
  name: "AdminCabinet",
  components: {ValidationError, Input, Modal},
  data() {
    return {
      weekDays: [],
      time: '',
      course_id: null,
      teacher_id: null,
      start_date: null,
      showModal: false,

    }
  },
  created() {
    this.$store.dispatch("course/getAllCourse")
    this.$store.dispatch("teacher/getAllTeachers")
    this.$store.dispatch("cabinet/getAllCabinets")
  },
  mounted() {

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

      console.log(data)
      this.$store
          .dispatch("cabinet/createCabinet", data)
          .then(response => {
            console.log("cabinet", response)
            this.$refs.modalClose.addEventListener("click", function () {
              const event = new Event("click");
              this.$refs.modalClose.dispatchEvent(event);

            })


          })
          .catch(error => console.log("cabinet create error", error))


    },


  }
})


</script>

<template>
  <div class="container">
    <div>
      <!-- Button trigger modal -->
      <button v-show="true" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>

      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
           aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="tabel-cabinet">
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
          <td>{{ cabinet.course.skills }}</td>
          <td>{{ cabinet.course.duration }} day</td>
          <td>{{ cabinet.teacher.first_name }}</td>
          <td>{{ cabinet.start_date }}</td>
          <td>{{ cabinet.weekdays }}</td>
          <td>{{ cabinet.time }}</td>
          <td>{{ cabinet.course.price }} so'm</td>
          <td>
            <div class="icon">
              <i class="fa fa-pen-square"></i>
              <i class="fa fa-trash"></i>
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

</style>