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

import InputText from 'primevue/inputtext';
import InlineMessage from 'primevue/inlinemessage';
import FloatLabel from 'primevue/floatlabel';
import FileUpload from 'primevue/fileupload';
import RadioButton from 'primevue/radiobutton';
import Calendar from 'primevue/calendar';
import InputMask from 'primevue/inputmask';
import Password from 'primevue/password';
import Button from 'primevue/button';


export default defineComponent({
  name: "StudentRegistration",
  components: {
    Input,
    Loader,
    ValidationError,
    Form,
    Field,
    InputText,
    InlineMessage,
    FloatLabel,
    FileUpload,
    RadioButton,
    Calendar,
    InputMask,
    Password,
    Button
  },
  directives: {maskito},


  data() {
    return {
      customRules: [
        value => {
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
    submitHandler(value) {
      value.preventDefault();

      const data = {
        "email": this.email,
        "password": this.password,
        "password2": this.password2,
        "first_name": this.first_name,
        "last_name": this.last_name,
        "sex": this.sex,
        "birth_date": this.birth_date,
        "phone_number": this.phone_number,
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

     async customBase64Uploader(event){
      const file = event.files[0];
       console.log(file)
      this.userImage = file
    },
    uploadUserImage() {
      const file1 = this.$refs.fileUserImage.files[0]
      this.userImage = file1
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


  <div class="container mt-5">
    <form @submit="submitHandler">
      <div class="d-flex justify-content-center">
        <div class="card p-5 bg-light mb-5">
          <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 ">
              <div class="d-flex justify-content-center mb-5">
                <FloatLabel>
                  <InputText class="form-control-xl" id="first_name" v-model="first_name" invalid/>
                  <label for="first_name">Как вам обращаться:</label>
                </FloatLabel>
              </div>
              <div class="d-flex justify-content-center mb-5">
                <FloatLabel>
                  <InputText class="input-css" id="last_name" v-model="last_name" invalid/>
                  <label for="last_name">Какая у вас фамилия:</label>
                </FloatLabel>
              </div>

              <div class="d-flex justify-content-center gap-3 mb-5 pt-2">
                <div class="flex align-items-center">
                  <RadioButton v-model="sex" inputId="ingredient1" name="pizza" value="female"/>
                  <label for="ingredient1" class="ml-2 ms-2">Женский</label>
                </div>
                <div class="flex align-items-center">
                  <RadioButton v-model="sex" inputId="ingredient2" name="pizza" value="male"/>
                  <label for="ingredient2" class="ml-2 ms-2">Мужской</label>
                </div>
              </div>
              <div class="d-flex justify-content-center mb-5">
                <FloatLabel class="mt-2">
                  <Calendar v-model="birth_date" inputId="birth_date"/>
                  <label for="birth_date">Год когда вы обняли мир:</label>
                </FloatLabel>
              </div>
<!--              <div class="d-flex justify-content-center mb-5">-->
<!--                <FloatLabel>-->
<!--                  <InputText class="input-css" id="last_name" v-model="last_name" invalid/>-->
<!--                  <label for="last_name">Какая у вас фамилия:</label>-->
<!--                </FloatLabel>-->
<!--              </div>-->

<!--              <div class="d-flex justify-content-center gap-3 mb-5 pt-2">-->
<!--                <div class="flex align-items-center">-->
<!--                  <RadioButton v-model="sex" inputId="ingredient1" name="pizza" value="female"/>-->
<!--                  <label for="ingredient1" class="ml-2 ms-2">Женский</label>-->
<!--                </div>-->
<!--                <div class="flex align-items-center">-->
<!--                  <RadioButton v-model="sex" inputId="ingredient2" name="pizza" value="male"/>-->
<!--                  <label for="ingredient2" class="ml-2 ms-2">Мужской</label>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="d-flex justify-content-center mb-5">-->
<!--                <FloatLabel class="mt-2">-->
<!--                  <Calendar v-model="birth_date" inputId="birth_date"/>-->
<!--                  <label for="birth_date">Год когда вы обняли мир:</label>-->
<!--                </FloatLabel>-->
<!--              </div>-->


            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">

              <div class="d-flex justify-content-center mb-5">
                <InputMask id="phone" v-model="phone_number" mask="+(99) 999-99-99" placeholder="+(99) 999-99-99" invalid/>
              </div>

              <div class="d-flex justify-content-center mb-5">
                <FloatLabel>
                  <InputText class="input-css" id="email" v-model="email" invalid/>
                  <label for="email">Email</label>
                </FloatLabel>
              </div>
              <div class="d-flex justify-content-center mb-5">
                <Password v-model="password" toggleMask/>
              </div>
              <div class="d-flex justify-content-center mb-5">
                <Password v-model="password2" toggleMask/>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center mb-5">
            <FileUpload id="username" mode="basic" name="demo[]"
                        url="/api/upload" accept="image/*" customUpload
                        @uploader="customBase64Uploader"/>
          </div>
            <Button type="submit" label="Отправит"/>
        </div>
      </div>


    </form>
  </div>


</template>

<style scoped>

</style>