<script>
import {defineComponent} from 'vue'
import Modal from "@/ui-componets/Modal.vue";
import ValidationError from "@/components/login/ValidationError.vue";
import Input from "@/ui-componets/Input.vue";
import {mapGetters} from "vuex";

export default defineComponent({
  name: "AdminCourse",
  components: {Input, ValidationError, Modal},
  data() {
    return {
      name: '',
      description: '',
      level: '',
      duration: null,
      price: null,
      skills: [],
      type: '',
      isModalOpen: false,
    }
  },
  created() {
    this.$store.dispatch("course/getAllCourse")
  },
  computed: {
    ...mapGetters("course", ['courses']),
    ...mapGetters("course", ['isLoading']),
    ...mapGetters("course", ['createCourseErrors']),
  },
  methods: {
    submitHandler() {
      const data = {
        "name": this.name,
        "description": this.description,
        "level": this.level,
        "duration": this.duration,
        "price": this.price,
        "skills": this.skills,
        "type": this.type,

      }
      console.log(data)
      this.$store
          .dispatch("course/createCourse", data)
          .then(response => {
            this.closeModal()
            this.$store.dispatch("course/getAllCourse")


          })
          .catch(error => console.log("course create error", error))


    },


    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    }

  },
})
</script>

<template>


  <div class="container">
    <div class="modal-cabinet">
      <div class="modal-button">
        <button @click="openModal" class="btn btn-primary">Create Course</button>
      </div>
      <div class="modal-body">
        <modal :is-open="isModalOpen" title="My Modal" @close="closeModal">
          <form @submit.prevent="submitHandler">

            <div class="mb-3">
              <label for="exampleInputName" class="form-label">Name</label>
              <input v-model="name" type="text" class="form-control" id="exampleInputName">
                            <ValidationError v-if="createCourseErrors" :validationError="createCourseErrors.name"/>
            </div>
            <div class="mb-3">
              <label for="exampleInputDescription" class="form-label">Description</label>
              <input v-model="description" type="text" class="form-control" id="exampleInputDescription">
                            <ValidationError v-if="createCourseErrors" :validationError="createCourseErrors.description"/>
            </div>


            <div class="mb-3">
              <label for="exampleInputLevel" class="form-label">Level</label>
              <select class="form-select" id="exampleInputLevel" v-model="level">
                <option disabled value="">Course select</option>
                <option>A1</option>
                <option>A2</option>
                <option>B1</option>
                <option>B2</option>
                <option>C1</option>
              </select>
                            <ValidationError v-if="createCourseErrors" :validationError="createCourseErrors.level"/>
            </div>


            <div class="mb-3">
              <label for="exampleInputDuration" class="form-label">Duration</label>
              <input v-model="duration" type="number" class="form-control" id="exampleInputDuration">
                            <ValidationError v-if="createCourseErrors" :validationError="createCourseErrors.duration"/>
            </div>


            <div class="mb-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <label for="exampleInputSkills" class="form-label">Skills</label>
              <br>
                              <ValidationError v-if="createCourseErrors" :validationError="createCourseErrors.skills"/>
              <br>
              <input type="checkbox" class="form-check-input" id="skill_group" value="listening" v-model="skills">
              <label class="form-label" for="skill_group">Listening</label>
              <br>

              <input type="checkbox" class="form-check-input" id="skill_individual" value="speaking" v-model="skills">
              <label class="form-label" for="skill_individual">Speaking</label>

                <br>
              <input type="checkbox" class="form-check-input" id="skill_reading" value="reading" v-model="skills">
              <label class="form-label" for="skill_reading">Reading</label>
              <br>

              <input type="checkbox" class="form-check-input" id="skill_writing" value="writing" v-model="skills">
              <label class="form-label" for="skill_writing">Writing</label>



            </div>


            <div class="mb-3">
              <label for="exampleInputType" class="form-label">Type</label>
              <select class="form-select" id="exampleInputType" v-model="type">
                <option disabled value="">Course type</option>
                <option>individual</option>
                <option>group</option>
              </select>
              <!--              <ValidationError v-if="cabinetError" :validationError="cabinetError.time"/>-->
            </div>
            <div class="mb-3">
              <label for="exampleInputPrice" class="form-label">Price</label>
              <input v-model="price" type="number" class="form-control" id="exampleInputPrice">
                            <ValidationError v-if="createCourseErrors" :validationError="createCourseErrors.price"/>
            </div>


            <button type="submit" :disabled="isLoading" class="btn btn-primary">Submit</button>
          </form>
        </modal>
      </div>
    </div>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Skill</th>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Level</th>
        <th scope="col">Course type</th>
        <th scope="col">Price</th>

      </tr>
      </thead>
      <tbody>
      <tr v-for="course in courses" :key="course.id">
        <th scope="row">{{ course.id }}</th>
        <td>{{ course.skills['0'] }}</td>
        <td>{{ course.name }}</td>
        <td>{{ course.description }}</td>
        <td>{{ course.level }}</td>
        <td>{{ course.type }}</td>
        <td>{{ course.price }}</td>
      </tr>

      </tbody>

    </table>
  </div>

</template>


<style scoped>
.modal-cabinet .modal-button {
  position: relative;
  top: 10px;
  margin-bottom: 15px;

}

</style>