<script>
import {defineComponent} from 'vue'
import Input from "@/ui-componets/Input.vue";
import ValidationError from "@/components/student/ValidationError.vue";
import validationError from "../student/ValidationError.vue";

export default defineComponent({
  name: "LoginStudent",
  components: {ValidationError, Input},
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods:{
     submitHandler(e) {
      e.preventDefault()
      const student_data = {
        "password": this.password,
         "username_or_email": this.username,

      }
      this.$store
          .dispatch("auth/login", student_data)
          .then(student => {
            console.log("Student", student)
            this.$router.push({name:"home"})
          })
          .catch(err => console.log("Error5", err))
    },

  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading
    },
    validationError() {
      const errors = this.$store.state.auth.errors
      return errors
    }
  },
})
</script>

<template>
  <section>
    <br>
    <br>
    <div class="container text-center">
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
          <div class="card shadow-lg p-3 mb-5  bg-body-tertiary  rounded ">
            <div class="text-center">
              <h5 class="card-header">Student Login</h5>
            </div>

            <div class="card-body">
              <form>
                  <ValidationError v-if="validationError" :validationError="validationError"/>
                 <div class="mb-3">
                  <label for="exampleInputUserName" class="form-label">User Name</label>
                  <Input v-model="username" :type="'text'" class="form-control" id="exampleInputUserName"/>
                  <ValidationError v-if="validationError" :validationError="validationError.username"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <Input v-model="password" :type="'password'" class="form-control" id="exampleInputPassword1"/>
                  <ValidationError v-if="validationError" :validationError="validationError.password" />
                </div>
                <button @click="submitHandler" :disabled="isLoading" type="submit" class="btn btn-primary">Submit</button>
              </form>

            </div>
          </div>
        </div>
        <div class="col-sm-2"></div>
      </div>


    </div>
    <br>
    <br>
  </section>
</template>

<style scoped>
section {
  background-color: #f8f9fa;
}

h5 {
  font-size: 25px;
  font-weight: 700;
  color: deepskyblue;
}

.card {
  background-color: #f8f9fa;
}

.card-header {
  background-color: #f8f9fa;
}
</style>