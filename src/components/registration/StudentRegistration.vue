<script setup>

import {Form, useForm, useValidateField} from 'vee-validate';
import * as yup from 'yup';
import {ref} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {createToaster} from "@meforma/vue-toaster";


const store = useStore();

const maxDate = ref(new Date());

const loading = ref(false)

const router = useRouter();
const toaster = createToaster();

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
  }),
});

const userImage = ref(null)

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const [password2, password2Attrs] = defineField('password2');
const [first_name, first_nameAttrs] = defineField('first_name');
const [last_name, last_nameAttrs] = defineField('last_name');
const [sex, sexAttrs] = defineField('sex');
const [birth_date, birth_dateAttrs] = defineField('birth_date');
const [phone_number, phone_numberAttrs] = defineField('phone_number');



const onSubmit = handleSubmit(values => {
  let birthDateNew = ""
  if (!!values.birth_date) {
    birthDateNew = `${String(birth_date.value.getFullYear())}-${String(birth_date.value.getMonth() + 1).padStart(2, '0')}-${String(birth_date.value.getDate()).padStart(2, '0')}`
  }

  const data = {
    email: values.email,
    password: values.password,
    password2: values.password2,
    phone_number: values.phone_number,
    first_name: values.first_name,
    last_name: values.last_name,
    sex: values.sex,
    birth_date: birthDateNew,
    photo:userImage.value,

    "type": "student"
  }
  registrationUser(data)

});


const registrationUser = async (values) => {
  loading.value = true
  await store.dispatch('auth/register', values).then(user => {
    loading.value = false
    localStorage.setItem("email", email.value);
    sendCodeEmailAuto();
  }).catch(err => {
    loading.value = false
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
        router.push({name: "verify_code"})
      })
      .catch(err => console.log("EmailError 7", err))
}

const userPhoto = async (event) => {
  const file = event.files[0];
  userImage.value = file



}
</script>

<template>
  <div class="container mt-5">
    <Form @submit="onSubmit">
      <div class="d-flex justify-content-center">
        <div class="card p-5 bg-light mb-5">
          <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 ">
              <FloatLabel>
                <InputText
                    :class="{'form-control':true, 'is-invalid':!!errors.first_name, 'is-valid':!errors.first_name}"
                    id="first_name" v-model="first_name"/>
                <label for="first_name">Как вам обращаться:</label>
              </FloatLabel>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 ">
              <FloatLabel>
                <InputText
                    :class="{'form-control':true, 'is-invalid':!!errors.last_name, 'is-valid':!errors.last_name}"
                    id="last_name" v-model="last_name"/>
                <label for="last_name">Какая у вас фамилия:</label>
              </FloatLabel>

            </div>
          </div>
          <div class="row mt-5">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 ">
              <FloatLabel>
                <InputText :class="{'form-control':true, 'is-invalid':!!errors.email, 'is-valid':!errors.email}"
                           id="email" v-model="email"/>
                <label for="email">Email</label>
              </FloatLabel>

            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 ">
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
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 ">
              <Calendar v-model="birth_date" :maxDate="maxDate" showIcon iconDisplay="input" dateFormat="yy/mm/dd"
                        :manualInput="false" placeholder="yy/mm/dd" inputId="templatedisplay">
                <template #inputicon="{ clickCallback }">
                  <InputIcon v-if="errors.birth_date"
                             class="pi pi-exclamation-circle cursor-pointer fw-bold text-danger fs-6"
                             @click="clickCallback"/>
                  <InputIcon v-else class="pi pi-calendar-plus cursor-pointer fw-bold text-success fs-6"
                             @click="clickCallback"/>
                </template>
              </Calendar>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 ">
              <InputMask
                  :class="{'form-control':true, 'is-invalid':!!errors.phone_number, 'is-valid':!errors.phone_number}"
                  id="phone" v-model="phone_number" mask="+(99) 999-99-99" placeholder="+(99) 999-99-99"/>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 ">
              <InputGroup>
                <Password v-model="password"/>
                <InputGroupAddon>
                  <i v-if="!errors.password" class="pi  pi-check cursor-pointer fw-bold text-success fs-6"></i>
                  <i v-else class="pi  pi-exclamation-circle cursor-pointer fw-bold text-danger fs-6"></i>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 ">
              <InputGroup>
                <Password v-model="password2"/>
                <InputGroupAddon>
                  <i v-if="!errors.password2" class="pi  pi-check cursor-pointer fw-bold text-success fs-6"></i>
                  <i v-else class="pi  pi-exclamation-circle cursor-pointer fw-bold text-danger fs-6"></i>
                </InputGroupAddon>
              </InputGroup>


            </div>
          </div>
          <div class="row mt-5">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 ">
               <p class="fs-3 fw-bold">User Photo</p>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 ">
              <FileUpload invalidFileTypeMessage="hato yuklash" :maxFileSize="1024000" mode="basic" name="demo[]"
                          url="/api/upload" accept="image/*" customUpload
                          @select="userPhoto"/>
            </div>
          </div>

          <Button type="submit" class="d-flex justify-content-center mt-1" :disabled="loading">
            <ProgressSpinner v-if="loading" style="width: 25px; height: 25px" strokeWidth="8"
                             animationDuration="2s" aria-label="Custom ProgressSpinner"/>
            <span v-else>Отправит</span>

          </Button>
        </div>
      </div>


    </Form>
  </div>


</template>

<style scoped>
* {
  box-sizing: inherit;
}


</style>