<script>
import {defineComponent} from 'vue'

import ValidationError from "@/components/login/ValidationError.vue";
import {Form, Field, ErrorMessage} from "vee-validate";
import Loader from "@/ui-componets/Loader.vue";
import {mapGetters} from "vuex";


export default defineComponent({
  name: "StudentRegistration",
  components: {Loader, ValidationError, Form, Field, ErrorMessage},
  data() {
    return {
      email: "",
      password: "",
      password2: "",
      first_name: "",
      last_name: "",
      sex: "female",
      birth_date: null,
      phone_number: "",


      place_of_education: "",
      start_date_education: null,
      end_date_education: null,
      experience: 0,
      ielst: 1,
      about_me: "",
      userImage: null,
      userIelts: null,


      type: "student",

    }

  },
  methods: {
    submitHandler() {
      const data = {
        "email": this.email,
        "password": this.password,
        "password2": this.password2,
        "first_name": this.first_name,
        "last_name": this.last_name,
        "sex": this.sex,
        "birth_date": this.birth_date,
        "place_of_education": this.place_of_education,
        "start_date_education": this.start_date_education,
        "end_date_education": this.end_date_education,
        "experience": this.experience,
        "ielts": this.ielts,
        "about_me": this.about_me,
        "phone_number": this.phone_number,

        'photo': this.userImage,
        'ielts_file': this.userIelts,


        "type": this.type
      }
      console.log(data)

      this.$store
          .dispatch("auth/register", data)
          .then(student => {
            localStorage.setItem("email", this.email)
            this.sendCodeEmailAuto()
            this.$router.push({name: "verify_code"})
          })
          .catch(err => console.log("Error", err))


    },
    uploadUserImage() {
      const file1 = this.$refs.fileUserImage.files[0]
      this.userImage = file1
    },
    uploadUserIelts() {
      const file2 = this.$refs.fileIelts.files[0]
      this.userIelts = file2

    },


    sendCodeEmailAuto() {
      const data = {
        "email": localStorage.getItem('email')
      }
      this.$store.dispatch("auth/sendCodeEmail", data)
          .then(email => {

          })
          .catch(err => console.log("EmailError", err))

    },

    isRequired(value) {
      if (!value) {
        return 'this field is required';
      }

      return true;
    },


  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading
    },
    validationError() {
      const errors = this.$store.state.auth.errors
      return errors
    },
    ...mapGetters('auth', ['errorsRegister'])
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
              <h5 class="card-header">Registration</h5>
            </div>

            <div class="card-body">
              <Form @submit="submitHandler">
                <div class="mb-3">
                  <label for="type" class="form-label">User:</label>
                  <select id="type" class="form-control" v-model="type">
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </select>

                </div>


                <div class="mb-3">
                  <label for="exampleInputName" class="form-label">Ism:</label>
                  <Field v-model="first_name" :rules="isRequired" name="first_name" class="form-control" type="text"
                         id="exampleInputName"
                         aria-describedby="nameHelp"/>

                  <ErrorMessage name="first_name"/>


                </div>
                <div class="mb-3">
                  <label for="exampleInputLastName" class="form-label">Familya:</label>
                  <Field v-model="last_name" :rules="isRequired" name="last_name" class="form-control" type="text"
                         id="exampleInputLastName"
                         aria-describedby="lastNameHelp"/>
                  <ErrorMessage name="last_name"/>

                </div>
                <div class="mb-3">
                  <label for="formUserImage" class="form-label">Shaxsiy rasm yuklash</label>
                  <input class="form-control" type="file" id="formUserImage" ref="fileUserImage"
                         @change="uploadUserImage()">
                </div>
                <div class="mb-3 d-flex justify-content-space-between">
                  <div class="m-2">
                    <input type="radio" id="one" value="female" v-model="sex"/>
                    <label class="ms-3" for="female">Female</label>
                  </div>
                  <div class="m-2">
                    <input type="radio" id="male" value="male" v-model="sex"/>
                    <label class="ms-3" for="male">Male</label>
                  </div>


                </div>
                <div class="mb-3">
                  <label for="exampleInputBirthday" class="form-label">Tug'ilgan yil:</label>
                  <Field v-model="birth_date" :rules="isRequired" name="birth_date" type="date" class="form-control"
                         id="exampleInputBirthday"
                         aria-describedby="birthdayHelp"/>
                  <ErrorMessage name="birth_date"/>
                  <ValidationError v-if="errorsRegister" :validationError="errorsRegister.birth_date"/>

                </div>
                <div class="mb-3">
                  <label for="exampleInputPhone" class="form-label">Telephone</label>
                  <Field v-model="phone_number" :rules="isRequired" name="phone_number" type="text" class="form-control"
                         id="exampleInputPhone"
                         placeholder="+998(99)"/>
                  <ErrorMessage name="phone_number"/>


                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <Field v-model="email" :rules="isRequired" name="email" type="email" class="form-control"
                         id="exampleInputEmail1"
                         aria-describedby="emailHelp"/>
                  <ErrorMessage name="email"/>


                  <ValidationError v-if="errorsRegister" :validationError="errorsRegister.email"/>
                </div>
                <div v-if="type==='teacher'">
                  <div class="mb-3">
                    <label for="exampleInputPlace_of_education" class="form-label">Place of education:</label>
                    <Field v-model="place_of_education" :rules="isRequired" name="place_of_education"
                           class="form-control"
                           type="text"
                           id="exampleInputPlace_of_education"
                           aria-describedby="lastNameHelp"/>
                    <ErrorMessage name="place_of_education"/>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputStart_date_education" class="form-label">Start date education::</label>
                    <Field v-model="start_date_education" :rules="isRequired" name="start_date_education"
                           class="form-control"
                           type="date"
                           id="exampleInputStart_date_education"
                           aria-describedby="lastNameHelp"/>
                    <ErrorMessage name="start_date_education"/>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEnd_date_education" class="form-label">End date education:</label>
                    <Field v-model="end_date_education" :rules="isRequired" name="end_date_education"
                           class="form-control"
                           type="date"
                           id="exampleInputEnd_date_education"
                           aria-describedby="lastNameHelp"/>
                    <ErrorMessage name="end_date_education"/>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputExperience" class="form-label">Experience:</label>
                    <Field v-model="experience" :rules="isRequired" name="experience" class="form-control"
                           type="nubmer"
                           id="exampleInputExperience"
                           aria-describedby="lastNameHelp"/>
                    <ErrorMessage name="experience"/>
                  </div>

                  <div class="mb-3">
                    <label for="ielts" class="form-label">IELST:</label>
                    <select id="ielts" class="form-control" v-model="ielts">
                      <option value="0">No</option>
                      <option value="5.0">5.0</option>
                      <option value="5.5">5.5</option>
                      <option value="6.0">6.0</option>
                      <option value="6.5">6.5</option>
                      <option value="7.0">7.0</option>
                      <option value="7.5">7.5</option>
                      <option value="8.0">8.0</option>
                      <option value="8.5">8.5</option>
                      <option value="9.5">9.0</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="formIelts" class="form-label">IElSt sertifikatini yuklash</label>
                    <input class="form-control" type="file" id="formIelts" ref="fileIelts" @change="uploadUserIelts()">
                  </div>
                  <ValidationError v-if="errorsRegister" :validationError="errorsRegister.detail"/>


                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">About me:</label>
                    <textarea v-model="about_me" name="about_me" class="form-control" id="exampleFormControlTextarea1"
                              rows="3"></textarea>
                    <ErrorMessage name="about_me"/>

                  </div>

                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <Field v-model="password" :rules="isRequired" name="password" type="password" class="form-control"
                         id="exampleInputPassword1"/>
                  <ErrorMessage name="password"/>
                  <ValidationError v-if="errorsRegister" :validationError="errorsRegister.password"/>

                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword2" class="form-label">Password</label>
                  <Field v-model="password2" :rules="isRequired" name="password2" type="password" class="form-control"
                         id="exampleInputPassword2"/>
                  <ErrorMessage name="password2"/>


                  <ValidationError v-if="errorsRegister" :validationError="errorsRegister.password2"/>
<!--                  <ValidationError v-if="errorsRegister" :validationError="errorsRegister.detail"/>-->
                </div>

                <div class="save-submit">
                  <button :disabled="isLoading" class="btn btn-primary">Submit
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

input[type=radio] {
  height: 18px;
  width: 18px;
}


span {
  color: red;
}

</style>