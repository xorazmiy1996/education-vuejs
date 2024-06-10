<script setup>

import {Form, useForm, useValidateField} from 'vee-validate';
import * as yup from 'yup';
import {ref} from "vue";
import {useStore} from "vuex";
import {createToaster} from "@meforma/vue-toaster";

import {useRouter} from "vue-router";

const store = useStore();
const router = useRouter();
const toaster = createToaster();

const userImage = ref(null)
const ieltsDocument = ref(null)
const birthDate = ref(null)
const loading = ref(false)
const maxDate = ref(new Date());


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
    place_of_education: yup.string().required(),
    experience: yup.number().required(),
    ielst_ball: yup.number().required(),
    about_me: yup.string(),

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


const [place_of_education, place_of_educationAttrs] = defineField('place_of_education');
const [experience, experienceAttrs] = defineField('experience');
const [ielst_ball, ielst_ballAttrs] = defineField('ielst_ball');
const [about_me, about_meAttrs] = defineField('about_me');



const onSubmit = handleSubmit(values => {
  const data = {
    "email":values.email,
    "password":values.password,
    "password2":values.password2,
    "first_name":values.first_name,
    "last_name":values.last_name,
    "birth_date":birthDate.value ,
    "sex":values.sex,
    "phone_number":values.phone_number,
    "place_of_education":values.place_of_education,
    "experience":values.experience,
    "ielts":values.ielst_ball,
    "about_me":values.about_me,

    "photo":userImage.value,
    "ielts_file":ieltsDocument.value,
    "type": "teacher",
  }

  registrationUser(data)

});

const registrationUser = async (values) => {
  loading.value = true
  await store.dispatch('auth/register', values).then(user => {
    loading.value = false;
    localStorage.setItem("email", email.value);
    router.push({name: "verify_code"})
    sendCodeEmailAuto();
  }).catch(err => {

    loading.value = false;
    toaster.error(err.email,
        {
          position: "top-right",
        }
    );
  });
};

const sendCodeEmailAuto = async () => {
  const data = {"email": localStorage.getItem('email')}
  await store.dispatch("auth/sendCodeEmail", data)
      .then(email => {
        // router.push({name: "verify_code"})
      })
      .catch(err => console.log("EmailError", err))
}

const userPhoto = async (event) => {
  const file = event.files[0];
  userImage.value = file
}

const ieltsFile = async (event) => {
  const file = event.files[0];
  ieltsDocument.value = file
}

const handleDateSelect = (date) => {
  birthDate.value = formatDateToString(date)



}
function formatDateToString(dateObj) {
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}



</script>

<template>
  <div class="container mt-5">
    <Form @submit="onSubmit">
      <div class="d-flex justify-content-center">
        <div class="card p-5 bg-light mb-5">
          <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <FloatLabel>
                <InputText
                    :class="{'form-control':true, 'is-invalid':!!errors.first_name, 'is-valid':!errors.first_name}"
                    id="first_name" v-model="first_name"/>
                <label for="first_name">Как вам обращаться:</label>
              </FloatLabel>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <FloatLabel>
                <InputText
                    :class="{'form-control':true, 'is-invalid':!!errors.last_name, 'is-valid':!errors.last_name}"
                    id="last_name" v-model="last_name"/>
                <label for="last_name">Какая у вас фамилия:</label>
              </FloatLabel>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <FloatLabel>
                <InputText :class="{'form-control':true, 'is-invalid':!!errors.email, 'is-valid':!errors.email}"
                           id="email" v-model="email"/>
                <label for="email">Email</label>
              </FloatLabel>

            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div class="d-flex flex-column">
                <div class="d-flex  justify-content-center gap-3 mb-5 pt-2">
                  <div class="flex align-items-center">
                    <RadioButton v-model="sex" inputId="ingredient1" name="pizza" value="female"/>
                    <label for="ingredient1" class="ml-2 ms-2">Женский</label>
                  </div>
                  <div class="flex align-items-center">
                    <RadioButton v-model="sex" inputId="ingredient2" name="pizza" value="male"/>
                    <label for="ingredient2" class="ml-2 ms-2">Мужской</label>
                  </div>
                  <i v-if="!errors.sex" class="pi pi-check fw-bold text-success" style="font-size: 1.1rem;"></i>
                  <i v-else class="pi pi-exclamation-circle text-danger fw-bold" style="font-size: 1.1rem"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <Calendar @date-select="handleDateSelect" v-model="birth_date" :maxDate="maxDate" showIcon iconDisplay="input" dateFormat="dd/mm/yy"
                        :manualInput="false" placeholder="dd/mm/yy" inputId="templatedisplay">
                <template #inputicon="{ clickCallback }">
                  <InputIcon v-if="errors.birth_date"
                             class="pi pi-exclamation-circle cursor-pointer fw-bold text-danger fs-6"
                             @click="clickCallback"/>
                  <InputIcon v-else class="pi pi-calendar-plus cursor-pointer fw-bold text-success fs-6"
                             @click="clickCallback"/>
                </template>
              </Calendar>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <InputMask
                  :class="{'form-control':true, 'is-invalid':!!errors.phone_number, 'is-valid':!errors.phone_number}"
                  id="phone" v-model="phone_number" mask="+(99) 999-99-99" placeholder="+(99) 999-99-99"/>

            </div>
          </div>
          <div class="row mt-5">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <FloatLabel>
                <InputText
                    :class="{'form-control':true, 'is-invalid':!!errors.place_of_education, 'is-valid':!errors.place_of_education}"
                    id="first_name" v-model="place_of_education"/>
                <label for="first_name">Place of education:</label>
              </FloatLabel>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <InputGroup>
                <FloatLabel>
                  <InputNumber
                      v-model="experience"
                      inputId="minmax" :min="0" :max="50"
                      locale="en-IN" :minFractionDigits="1"
                      suffix=" years of experience"
                 />


                <InputGroupAddon>
                  <i v-if="!errors.experience" class="pi  pi-check cursor-pointer fw-bold text-success fs-6"></i>
                  <i v-else class="pi  pi-exclamation-circle cursor-pointer fw-bold text-danger fs-6"></i>
                </InputGroupAddon>
                  <label for="username">Experience</label>
                  </FloatLabel>
              </InputGroup>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <label for="username">User photo</label>
              <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" customUpload
                          @select="userPhoto"/>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <label for="username">IELTS file</label>
              <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" customUpload
                          @select="ieltsFile"/>

            </div>
          </div>
          <div class="row mt-5">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <InputGroup>
                <Password v-model="password" placeholder="Password"/>
                <InputGroupAddon>
                  <i v-if="!errors.password" class="pi  pi-check cursor-pointer fw-bold text-success fs-6"></i>
                  <i v-else class="pi  pi-exclamation-circle cursor-pointer fw-bold text-danger fs-6"></i>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <InputGroup>
                <Password v-model="password2" placeholder="Password"/>
                <InputGroupAddon>
                  <i v-if="!errors.password2" class="pi  pi-check cursor-pointer fw-bold text-success fs-6"></i>
                  <i v-else class="pi  pi-exclamation-circle cursor-pointer fw-bold text-danger fs-6"></i>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">

              <InputGroup>
                <FloatLabel>
                <InputNumber v-model="ielst_ball"  :min="0" :max="9"  locale="en-IN" :minFractionDigits="1" />
                <InputGroupAddon>
                  <i v-if="!errors.ielst_ball" class="pi  pi-check cursor-pointer fw-bold text-success fs-6"></i>
                  <i v-else class="pi  pi-exclamation-circle cursor-pointer fw-bold text-danger fs-6"></i>
                </InputGroupAddon>
                  <label for="username">IELTS ball</label>
                </FloatLabel>
              </InputGroup>

            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <FloatLabel>
                <Textarea style="width: 100%"  v-model="about_me" variant="filled" rows="5" cols="30" />
                <label>About me</label>
              </FloatLabel>

              </div>
          </div>





          <Button  type="submit" class="d-flex justify-content-center" :disabled="loading">
            <ProgressSpinner v-if="loading" style="width: 25px; height: 25px" strokeWidth="8"
                             animationDuration="2s"  aria-label="Custom ProgressSpinner" />
            <span v-else >Отправит</span>
          </Button>
        </div>
      </div>


    </Form>

  </div>

</template>

<style scoped>

</style>