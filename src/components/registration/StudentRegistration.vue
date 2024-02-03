<script>
import {defineComponent} from 'vue'


import ValidationError from "@/components/login/ValidationError.vue";
import {Form, Field, ErrorMessage} from "vee-validate";
import Loader from "@/ui-componets/Loader.vue";
import {mapGetters} from "vuex";
import Input from "@/ui-componets/Input.vue";

import {maskitoPhoneOptionsGenerator} from '@maskito/phone';

import {maskito} from '@maskito/vue';
import metadata from 'libphonenumber-js/min/metadata';
import {maskitoNumberOptionsGenerator} from "@maskito/kit";

export default defineComponent({
  name: "StudentRegistration",
  components: {Input, Loader, ValidationError, Form, Field, ErrorMessage},
  directives: {maskito},



  data() {
    return {
      customRules: [
        value => {
          console.log(value)
          if (!value) {
            return 'Fayl tanlanmagan';
          }
          return true;
        },
      ],
      requiredCustom: [
        value => {
          if (!value) {
            return 'Fayl tanlanmagan';
          }
          return true;
        },
      ],
      email: "",
      password: "",
      password2: "",
      first_name: "",
      last_name: "",
      sex: "female",
      birth_date: null,
      phone_number: "",

      userImage: null,



      type: "student",

      phoneNumberOptions: maskitoPhoneOptionsGenerator({
        countryIsoCode: 'UZ',
        metadata
      }),

      priceOptions: maskitoNumberOptionsGenerator(),
    }

  },
  methods: {
    experienceMask(event) {
      const input = event.target;
      let value = input.value;
      value = value.replace(/\D/g, "");

      // Telefon raqamini maskaga moslash


      input.value = value;
    },
    submitHandler(value) {

      const data = {
        "email": this.email,
        "password": this.password,
        "password2": this.password2,
        "first_name": this.first_name,
        "last_name": this.last_name,
        "sex": this.sex,
        "birth_date": this.birth_date,
        "phone_number": this.phone_number.replace(/\D/g,""),
        'photo': this.userImage,
        "type": "student"

      }
      console.log(data)
      this.$store
          .dispatch("auth/register", data)
          .then(student => {
            localStorage.setItem("email", this.email)
            this.sendCodeEmailAuto()
            this.$router.push({name: "verify_code"})

          })
          .catch(err => console.log("Jasuro", err))


    },
    uploadUserImage() {
      const file1 = this.$refs.fileUserImage.files[0]
      this.userImage = file1
      console.log(this.userImage)
      // this.$validator.validate('file', file1);
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
          <div class="">
            <div class="text-center">
            </div>
            <br>
            <br>
            <br>
            <div class="card-body">
              <Form @submit="submitHandler">
                <div class="input-div">
                  <label for="exampleInputName" class="form-label">Как вам обращаться:</label>
                  <Field v-model="first_name" :rules="isRequired" name="first_name" class="form-control" type="text"
                         id="exampleInputName"
                         aria-describedby="nameHelp"/>

                  <ErrorMessage name="first_name"/>


                </div>
                <div class="input-div">
                  <label for="exampleInputLastName" class="form-label">Какая у вас фамилия:</label>
                  <Field v-model="last_name" :rules="isRequired" name="last_name" class="form-control" type="text"
                         id="exampleInputLastName"
                         aria-describedby="lastNameHelp"/>
                  <ErrorMessage name="last_name"/>

                </div>
                <div class="input-div">
                  <label for="formUserImage" class="form-label">Загрузите фото где вас все любят:</label>
                  <div class="image_upload d-flex flex-column align-items-center justify-content-center">
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21"
                            stroke="#222222" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </div>
                    <div>
                      <Field v-model="userImage" type="file" name="fileUserImage"  :rules="customRules"  v-slot="{ errors }">
                        <input  type="file" id="formUserImage" name="fileUserImage" ref="fileUserImage"
                               @change="uploadUserImage()">
                        <span class="d-block ms-3">{{ errors[0] }}</span>
                        <div>
                          <p class="fs-6">формат PNG, JPEG, размером макс 3мб.</p>
                        </div>



                      </Field>




                    </div>



                  </div>


                </div>
                <label class="form-label">Сильная половина (M) или очень сильная(W):</label>
                <div class="input-div">
                  <div class=" d-flex justify-content-start">
                    <div class="radio-button-1">
                      <input type="radio" id="female" value="female" v-model="sex"/>
                      <label for="female">Женский</label>
                    </div>
                    <div class="radio-button-2">
                      <input type="radio" id="male" value="male" v-model="sex"/>
                      <label for="male">Мужской</label>
                    </div>
                  </div>
                </div>


                <div class="input-div">
                  <label for="exampleInputBirthday" class="form-label">Год когда вы обняли мир:</label>
                  <Field v-model="birth_date" :rules="isRequired" name="birth_date" type="date" class="form-control"
                         id="exampleInputBirthday"
                         aria-describedby="birthdayHelp"/>
                  <ErrorMessage name="birth_date"/>
                  <ValidationError v-if="errorsRegister" :validationError="errorsRegister.birth_date"/>

                </div>
                <div class="input-div">
                  <label for="exampleInputPhone" class="form-label">Номер для связи:</label>
                  <input v-maskito="phoneNumberOptions" v-model="phone_number" :rules="isRequired" name="phone_number" type="text" class="form-control"
                         id="exampleInputPhone"
                         placeholder="+998" />
                  <ErrorMessage name="phone_number"/>


                </div>
                <div class="input-div">
                  <label for="exampleInputEmail1" class="form-label">Почта для связи:</label>
                  <Field v-model="email" :rules="isRequired" name="email" type="email" class="form-control"
                         id="exampleInputEmail1"
                         aria-describedby="emailHelp"/>
                  <ErrorMessage name="email"/>


                  <ValidationError v-if="errorsRegister" :validationError="errorsRegister.email"/>
                </div>


                <ValidationError v-if="errorsRegister" :validationError="errorsRegister.detail"/>


                <div class="input-div">
                  <label for="exampleInputPassword1" class="form-label">Код секрет:</label>
                  <Field v-model="password" :rules="isRequired" name="password" type="password" class="form-control"
                         id="exampleInputPassword1"/>
                  <ErrorMessage name="password"/>
                  <ValidationError v-if="errorsRegister" :validationError="errorsRegister.password"/>

                </div>
                <div class="input-div">
                  <label for="exampleInputPassword2" class="form-label">Код секрет:</label>
                  <Field v-model="password2" :rules="isRequired" name="password2" type="password" class="form-control"
                         id="exampleInputPassword2"/>
                  <ErrorMessage name="password2"/>
                  <ValidationError v-if="errorsRegister" :validationError="errorsRegister.password2"/>
                </div>

                <div class="save-submit">
                  <button style="background: #5b35a2" :disabled="isLoading" class="btn btn-primary">Отправить
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

  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #222;

}

.card {
  background-color: #f8f9fa;
}

.card-header {
  background-color: #f8f9fa;
}

/*input[type=radio] {*/
/*  height: 18px;*/
/*  width: 18px;*/
/*}*/


span {
  color: red;
}

.form-control {
  height: 70px;
  background: #eee;
  font-size: 20px;
  border-radius: 12px;
}

.btn {
  width: 100%;
  height: 70px;
  font-size: 20px !important;
  background-color: #695CFE;
  border-radius: 12px;
}


.input-div {
  margin-bottom: 46px;
}

.image_upload {
  width: 100%;
  height: 150px;
  border: 1px dashed #1A1A1A;
  border-radius: 12px;
}


.image_upload p {
  margin: 0;
}


.image_upload input::file-selector-button {
  font-weight: bold;
  padding: 0.5em;
  border: none;
  background: none;
  margin: 10px;
}

.image_upload input:hover,
.image_upload input::file-selector-button:hover {
  color: blue;
  cursor: pointer;
  border-radius: 12px;
  background: #eee;
}

.ielts_upload {
  width: 100%;
  height: 150px;
  border: 1px dashed #1A1A1A;
  border-radius: 12px;
}
.ielts_upload p {
  margin: 0;
}
.ielts_upload input::file-selector-button {
  font-weight: bold;
  padding: 0.5em;
  border: none;
  background: none;
  margin: 10px;
}

.ielts_upload input:hover,
.ielts_upload input::file-selector-button:hover {
  color: blue;
  cursor: pointer;
  border-radius: 12px;
  background: #eee;
}

.input-div .radio-button-1 {
  display: flex;
  align-content: center;
  border: 1px solid #dee2e6;
  background: #eee;
  border-radius: 20px 0 0 20px;
  padding: 21px 47px;

}

.input-div .radio-button-2 {
  display: flex;
  align-content: center;
  border: 1px solid #dee2e6;
  background: #eee;
  border-radius: 0 20px 20px 0;
  padding: 21px 47px;
}

.input-div .radio-button-1 label,
.input-div .radio-button-2 label {
  margin-left: 15px;
  margin-bottom: 0;
}

.input-div .radio-button-1 input,
.input-div .radio-button-2 input {
  width: 30px;
  height: 30px;
}

.input-div textarea{
  height: 185px;
}


</style>