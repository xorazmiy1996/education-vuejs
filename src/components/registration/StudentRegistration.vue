<script setup>

import {Form, useForm, useValidateField} from 'vee-validate';
import * as yup from 'yup';
import {ref} from "vue";



const {errors, handleSubmit, defineField} = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    password2: yup.string().min(6).required().oneOf([yup.ref('password')]),
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    sex: yup.string().required(),
    birth_date: yup.string().required(),
    phone_number: yup.string().required(),
    // ... qolgan maydonlarni shu yerga qo'shing
    userImage: yup.string().required("Fayl tanlash majburiy"),

  }),
});


const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const [password2, password2Attrs] = defineField('password2');
const [first_name, first_nameAttrs] = defineField('first_name');
const [last_name, last_nameAttrs] = defineField('last_name');
const [sex, sexAttrs] = defineField('sex');
const [birth_date, birth_dateAttrs] = defineField('birth_date');
const [phone_number, phone_numberAttrs] = defineField('phone_number');
const [userImage, userImageAttrs] = defineField('userImage');



const onSubmit = handleSubmit(values => {
  console.log(userImage.value)
  alert(JSON.stringify(values, null, 2));
});

const customBase64Uploader = async (event) => {
  const file = event.target.files;
  userImage.value = file.length > 0 ? file : null;
  // `Field` komponenti uchun yangi qiymatni o'rnatish
  onchange(file.value);
  useValidateField("userImage")

  console.log(userImage.value)
  // const reader = new FileReader();
  // let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url
  //
  // reader.readAsDataURL(blob);
  //
  // reader.onloadend = function () {
  //   const base64data = reader.result;
  // };
};




// methods: {
//   submitHandler(value) {
//     value.preventDefault();
//
//     const data = {
//       "email": this.email,
//       "password": this.password,
//       "password2": this.password2,
//       "first_name": this.first_name,
//       "last_name": this.last_name,
//       "sex": this.sex,
//       "birth_date": this.birth_date,
//       "phone_number": this.phone_number,
//       'photo': this.userImage,
//       "type": "student"
//
//     }
//     console.log(data)
//     this.$store
//         .dispatch("auth/register", data)
//         .then(student => {
//           localStorage.setItem("email", this.email)
//           this.sendCodeEmailAuto()
//           this.$router.push({name: "verify_code"})
//
//         })
//         .catch(err => console.log("Jasuro", err))
//   },
//
//   customBase64Uploader(event) {
//     const file = event.files[0];
//     console.log(file)
//     this.userImage = file
//   },
//   uploadUserImage() {
//     const file1 = this.$refs.fileUserImage.files[0]
//     this.userImage = file1
//     // this.$validator.validate('file', file1);
//   },
//   uploadUserIelts() {
//     const file2 = this.$refs.fileIelts.files[0]
//     this.userIelts = file2
//
//   },
//
//
//   sendCodeEmailAuto() {
//     const data = {
//       "email": localStorage.getItem('email')
//     }
//     this.$store.dispatch("auth/sendCodeEmail", data)
//         .then(email => {
//
//         })
//         .catch(err => console.log("EmailError", err))
//
//   },
//
//   isRequired(value) {
//     if (!value) {
//       return 'this field is required';
//     }
//
//     return true;
//   },
//
//
// },
// computed: {
//   isLoading() {
//     return this.$store.state.auth.isLoading
//   },
//   validationError() {
//     const errors = this.$store.state.auth.errors
//     return errors
//   },
//   ...mapGetters('auth', ['errorsRegister'])
// },


</script>

<template>


  <div class="container mt-5">
    <Form @submit="onSubmit">
      <div class="d-flex justify-content-center">
        <div class="card p-5 bg-light mb-5">
          <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 ">
              <div class="d-flex justify-content-center  mb-5">
                <FloatLabel>
                  <InputText
                      :class="{'form-control':true, 'is-invalid':!!errors.first_name, 'is-valid':!errors.first_name}"
                      id="first_name" v-model="first_name"/>
                  <label for="first_name">Как вам обращаться:</label>
                </FloatLabel>

              </div>
              <div class="d-flex justify-content-center mb-5">
                <FloatLabel>
                  <InputText
                      :class="{'form-control':true, 'is-invalid':!!errors.last_name, 'is-valid':!errors.last_name}"
                      id="last_name" v-model="last_name"/>
                  <label for="last_name">Какая у вас фамилия:</label>
                </FloatLabel>
              </div>

              <div class="d-flex flex-column">
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
              </div>
              <div class="d-flex justify-content-center mb-5">
                <FloatLabel class="mt-2">
                  <Calendar :class="{ 'is-invalid':!!errors.birth_date, 'is-valid':!errors.birth_date}"
                            v-model="birth_date" inputId="birth_date"/>
                  <label for="birth_date">Год когда вы обняли мир:</label>
                </FloatLabel>
              </div>


            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">

              <div class="d-flex justify-content-center mb-5">
                <InputMask
                    :class="{'form-control':true, 'is-invalid':!!errors.phone_number, 'is-valid':!errors.phone_number}"
                    id="phone" v-model="phone_number" mask="+(99) 999-99-99" placeholder="+(99) 999-99-99"/>

              </div>

              <div class="d-flex justify-content-center mb-5">
                <FloatLabel>
                  <InputText :class="{'form-control':true, 'is-invalid':!!errors.email, 'is-valid':!errors.email}"
                             id="email" v-model="email"/>
                  <label for="email">Email</label>
                </FloatLabel>
              </div>
              <div class="d-flex justify-content-center mb-5">
                <Password v-model="password" toggleMask>
                  <template #header>
                    <h6>Pick a password</h6>
                  </template>
                  <template #footer>
                    <Divider/>
                    <p class="mt-2">Suggestions</p>
                    <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                      <li>At least one lowercase</li>
                      <li>At least one uppercase</li>
                      <li>At least one numeric</li>
                      <li>Minimum 6 characters</li>
                    </ul>
                  </template>
                </Password>
              </div>
              <div class="d-flex justify-content-center mb-5">
                <Password v-model="password2" toggleMask>
                  <template #header>
                    <h6>Pick a password</h6>
                  </template>
                  <template #footer>
                    <Divider/>
                    <p class="mt-2">Suggestions</p>
                    <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                      <li>At least one lowercase</li>
                      <li>At least one uppercase</li>
                      <li>At least one numeric</li>
                      <li>Minimum 6 characters</li>
                    </ul>
                  </template>
                </Password>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center mb-5">
            <FileUpload v-model="userImage" mode="basic" name="demo[]" url="/api/upload" accept="image/*" customUpload @change="customBase64Uploader" />
          </div>
          {{errors}}

          <Button type="submit" label="Отправит"/>
        </div>
      </div>


    </Form>
  </div>


</template>

<style scoped>


</style>