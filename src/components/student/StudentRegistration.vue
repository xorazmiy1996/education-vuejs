<script>
import {defineComponent} from 'vue'
import Input from "@/ui-componets/Input.vue";
import ValidationError from "@/components/student/ValidationError.vue";
import {Form, Field} from "vee-validate";


export default defineComponent({
  name: "StudentRegistration",
  components: {ValidationError, Input, Form, Field},
  data() {
    return {
      email: "",
      username: "",
      password: "",
      password2: "",
      first_name: "",
      last_name: "",
      sex: "female",
      birth_date: "",
      phone_number: "",
      type: ""
    }

  },
  methods: {
    submitHandler(e) {
      e.preventDefault()
      const data = {
        "email": this.email,
        "password": this.password,
        "password2": this.password2,
        "first_name": this.first_name,
        "last_name": this.last_name,
        "phone_number": this.phone_number,
        "sex": this.sex,
        "birth_date": this.birth_date,
        "place_of_education": "string",
        "type": "student"
      }
       console.log('Submitted');
      console.log(data)
      this.$store
          .dispatch("auth/register", data)
          .then(student => {
            console.log("Student", student)
            this.sendCodeEmailAuto()
            localStorage.setItem("email", this.email)
            localStorage.setItem("password", this.password)
            this.$router.push({name: "verify_code"})
          })
          .catch(err => console.log("Error", err))
    },

    sendCodeEmailAuto() {
      const data = {
        "email": localStorage.getItem('email')
      }
      this.$store.dispatch("auth/sendCodeEmail", data)
          .then(email => {
            console.log("Email", email)
          })
          .catch(err => console.log("EmailError", err))

    }


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


    <div class="container">
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
          <div class="card shadow-lg p-3 mb-5  bg-body-tertiary  rounded ">
            <div class="text-center">
              <h5 class="card-header">Student Registration</h5>
            </div>

            <div class="card-body">
              <Form>
                <div class="mb-3">
                  <label for="exampleInputName" class="form-label">Ism:</label>
                  <input v-model="first_name" class="form-control" type="text" id="exampleInputName" aria-describedby="nameHelp" />
<!--                  <Input v-model="first_name" :type="'text'" id="exampleInputName" aria-describedby="nameHelp" />-->
                </div>
                <div class="mb-3">
                  <label for="exampleInputLastName" class="form-label">Familya:</label>
                  <input v-model="last_name" class="form-control" type="text" id="exampleInputLastName" aria-describedby="lastNameHelp" />
<!--                  <Input v-model="last_name" :type="'text'" id="exampleInputLastName" aria-describedby="lastNameHelp" />-->
                </div>
                <div class="mb-3 d-flex justify-content-space-between">
                  <div class="m-2">
                    <input type="radio" id="one" value="female" v-model="sex"/>
                    <label class="ms-3" for="female">Female</label>
                  </div>
                  <div class="m-2">
                    <input type="radio" id="male" value="male" v-model="sex"/>
                    <label  class="ms-3" for="male">Male</label>
                  </div>


                </div>
                <div class="mb-3">
                  <label for="exampleInputBirthday" class="form-label">Tug'ilgan yil:</label>
                  <input v-model="birth_date" type="date" class="form-control" id="exampleInputBirthday"
                         aria-describedby="birthdayHelp"/>
<!--                  <Input v-model="birth_date" :type="'date'" class="form-control" id="exampleInputBirthday"-->
<!--                         aria-describedby="birthdayHelp"/>-->
                </div>
                <div class="mb-3">
                  <label for="exampleInputPhone" class="form-label">Telephone</label>
                  <input v-model="phone_number" type="text" class="form-control" id="exampleInputPhone"
                         placeholder="+998(99)"/>
<!--                  <Input v-model="phone_number" :type="'text'" class="form-control" id="exampleInputPhone"-->
<!--                         placeholder="+998(99)"/>-->
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input v-model="email"  type="email" class="form-control" id="exampleInputEmail1"
                         aria-describedby="emailHelp"/>
<!--                  <Input v-model="email" :type="'email'" class="form-control" id="exampleInputEmail1"-->
<!--                         aria-describedby="emailHelp"/>-->
                  <ValidationError v-if="validationError" :validationError="validationError.email"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input v-model="password" type="password" class="form-control" id="exampleInputPassword1"/>
<!--                  <Input v-model="password" :type="'password'" class="form-control" id="exampleInputPassword1"/>-->
                  <ValidationError v-if="validationError" :validationError="validationError.password"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword2" class="form-label">Password</label>
                  <input v-model="password2" :type="password" class="form-control" id="exampleInputPassword2"/>
<!--                   <Input v-model="password2" :type="'password'" class="form-control" id="exampleInputPassword2"/>-->
                  <ValidationError v-if="validationError" :validationError="validationError.password2"/>
                </div>
                <div class="save-submit">
                  <button @click="submitHandler" :disabled="isLoading" type="submit" class="btn btn-primary">Submit
                  </button>
                </div>


              </Form>

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
  color: deepskyblue;
  font-size: 28px;
  font-weight: 700;
}

form label {
  color: deepskyblue;
  font-size: 18px;
  font-weight: 700;
}

.card {
  background-color: #f8f9fa;
}

.card-header {
  background-color: #f8f9fa;
}
input[type=radio]{
  height: 18px;
  width: 18px;
}
</style>