<script setup>

import ValidationError from "@/components/login/ValidationError.vue";
</script>

<template>
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
</template>

<style scoped>

</style>