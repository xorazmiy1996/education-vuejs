<script>
import {defineComponent} from 'vue'
import Input from "@/ui-componets/Input.vue";
import ValidationError from "@/components/login/ValidationError.vue";
import {Form, Field, ErrorMessage} from "vee-validate";
import {mapGetters} from "vuex";
import Loader from "@/ui-componets/Loader.vue";

export default defineComponent({
  name: "LoginUser",
  components: {Loader, ValidationError, Input, Form, Field, ErrorMessage},
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading
    },
    validationError() {
      const errors = this.$store.state.auth.errorsLogin
      return errors
    },
    userData() {
      const user = this.$store.state.auth.user
      return user
    },
    ...mapGetters('auth', ['user', 'isLoading', 'errorsLogin']),

  },
  methods: {
    submitHandler() {
      // e.preventDefault()
      const student_data = {
        "password": this.password,
        "email": this.email,

      }
      this.$store
          .dispatch("auth/login", student_data)
          .then(student => {
            this.$store.dispatch("auth/getUser").then(() => {


              if (localStorage.getItem('userType') === 'admin') {
                this.$router.push({name: "admin"})
              } else if (localStorage.getItem('userType') === 'student') {
                this.$router.push({name: "student_panel"})
              } else if (localStorage.getItem('userType') === 'teacher') {
                this.$router.push({name: "teacher_panel"})
              } else {
                this.$router.push({name: "unauthorized"})
              }


            })


          })
          .catch(err => console.log("Error5", err))
    },
    isRequired(value) {
      if (!value) {
        return 'this field is required';
      }

      return true;
    },

  },
})
</script>

<template>
  <section>
    <br>
    <br>
    <Loader v-if="isLoading" class="offset-md-6"/>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
          <div class="card shadow-lg p-3 mb-5  bg-body-tertiary  rounded ">
            <div class="text-center">
              <h5 class="card-header">Авторизаться</h5>
            </div>

            <div class="card-body">
              <Form @submit="submitHandler">
                <ValidationError v-if="validationError" :validationError="validationError"/>
                <div class="mb-3">
                  <label for="exampleInputEmail" class="form-label">Почта</label>
                  <Field v-model="email" :rules="isRequired" name="email" type="text" class="form-control"
                         id="exampleInputEmail"/>
                  <ErrorMessage name="email"/>
                  <ValidationError v-if="validationError" :validationError="validationError.email"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Код секрет</label>
                  <Field v-model="password" :rules="isRequired" name="password" type="password" class="form-control"
                         id="exampleInputPassword1"/>
                  <ErrorMessage name="password"/>
                  <ValidationError v-if="validationError" :validationError="validationError.password"/>
                </div>
                <div class="mb-3 email_registration">
                  <div>
                    <router-link to="/verify_code">Подтверждать</router-link>
                  </div>
                  <div>
                    <router-link to="/select_registration">Регистрация</router-link>
                  </div>

                </div>
                <button style="background: #5b35a2" :disabled="isLoading" type="submit" class="btn btn-primary">Отправить</button>
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
  min-height: 90vh;
}

h5 {
  font-size: 25px;
  font-weight: 700;
  color: #2a2587;
}

.card {
  background-color: #f8f9fa;
}

.card-header {
  background-color: #f8f9fa;
}

span {
  color: red;
}
form .mb-3 a{
  color: #1A1A1A;
}
form .mb-3 a:hover{
  color: #478ACD;
  text-decoration: underline;
}
.email_registration{
  display: flex;
  justify-content: space-between;
}
</style>