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
  <main>
    <div class="main__container">
      <div class="register-tutor">
        <div class="register-tutor__container">

          <form class="register-tutor-form">
            <div class="register-tutor-form__form-group">
              <span class="register-tutor-form__label">ваша фотография*</span>
              <div class="avatar-input">
                <div class="avatar-input__container-photo">
                  <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.001 24.4543C25.6051 24.4543 30.1486 18.9801 30.1486 12.2272C30.1486 5.47418 28.6568 0 20.001 0C11.3453 0 9.85352 5.47418 9.85352 12.2272C9.85352 18.9801 14.3969 24.4543 20.001 24.4543Z"
                        fill="#C0C1C1"></path>
                    <path
                        d="M39.1456 42.6278C38.9575 30.864 37.4091 27.5121 25.558 25.3906C25.558 25.3906 23.8897 27.4993 20.0014 27.4993C16.1132 27.4993 14.4445 25.3906 14.4445 25.3906C2.72274 27.4893 1.08009 30.7915 0.863167 42.2456C0.845587 43.1811 0.837149 43.2302 0.833984 43.1214C0.834688 43.3247 0.835742 43.7011 0.835742 44.3571C0.835742 44.3571 3.65732 49.9997 20.0012 49.9997C36.3449 49.9997 39.1666 44.3571 39.1666 44.3571C39.1666 43.9355 39.167 43.6425 39.1673 43.443C39.1642 43.5107 39.1578 43.3806 39.1459 42.6279L39.1456 42.6278Z"
                        fill="#C0C1C1"></path>
                  </svg>
                </div>
                <label class="avatar-input__label" tabindex="0"><input accept=".gif,.jpg,.jpeg,.tiff,.png" type="file">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18.3327 9.58073V12.1641C18.3327 14.0309 18.3327 14.9643 17.9694 15.6774C17.6498 16.3046 17.1399 16.8145 16.5127 17.1341C15.7996 17.4974 14.8662 17.4974 12.9993 17.4974H6.99935C5.13251 17.4974 4.19909 17.4974 3.48605 17.1341C2.85884 16.8145 2.34891 16.3046 2.02933 15.6774C1.66602 14.9643 1.66602 14.0309 1.66602 12.1641V7.83073C1.66602 5.96389 1.66602 5.03047 2.02933 4.31743C2.34891 3.69022 2.85884 3.18029 3.48605 2.86071C4.19909 2.4974 5.13251 2.4974 6.99935 2.4974H10.416M15.8327 6.66406V1.66406M13.3327 4.16406H18.3327M13.3327 9.9974C13.3327 11.8383 11.8403 13.3307 9.99935 13.3307C8.1584 13.3307 6.66602 11.8383 6.66602 9.9974C6.66602 8.15645 8.1584 6.66406 9.99935 6.66406C11.8403 6.66406 13.3327 8.15645 13.3327 9.9974Z"
                        stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <span>загрузить фото</span>
                </label></div>
              <span class="register-tutor-form__input-info">формат PNG, JPEG, размером макс 3мб.</span>
            </div>
            <div class="register-tutor-form__form-group row">
              <div class="register-tutor-form__group-half">
                <span class="register-tutor-form__label">ваше имя*</span>
                <div class="label-focus-input">
                  <div
                      class="label-focus-input__group label-focus-input__group--medium label-focus-input__group--has-label">
                    <label class="label-focus-input__group__label">имя</label>
                    <input type="text" tabindex="0" class="label-focus-input__group__input" value=""
                           data-gtm-form-interact-field-id="0">
                  </div>
                </div>
              </div>
              <div class="register-tutor-form__group-half">
                <div class="label-focus-input">
                  <div
                      class="label-focus-input__group label-focus-input__group--medium label-focus-input__group--has-label label-focus-input__group--has-value">
                    <label class="label-focus-input__group__label">фамилия</label><input type="text" tabindex="0"
                                                                                         class="label-focus-input__group__input"
                                                                                         value="Xorazmiy"></div>
                </div>
              </div>
              <div class="register-tutor-form__error-names-group">
                <div class="register-tutor-form__group-half"></div>
                <div class="register-tutor-form__group-half"></div>
              </div>
            </div>
            <div class="register-tutor-form__form-group">
              <span class="register-tutor-form__label">ваш пол*</span>
              <div class="sex-input">
                <div class="sex-input__group">
                  <input id="male" type="radio" name="male" value="male" checked=""><label for="male">
                  <div class="sex-input__checkmark"></div>
                  <span>муж</span>
                </label>
                </div>
                <div class="sex-input__group">
                  <input type="radio" name="female" id="female" value="female">
                  <label for="female">
                    <div class="sex-input__checkmark">

                    </div>
                    <span>жен</span>
                  </label></div>
              </div>
            </div>


            <div class="register-tutor-form__form-group">
              <span class="register-tutor-form__label">Дата рождения*</span>
              <div class="label-focus-input">
                <div
                    class="label-focus-input__group label-focus-input__group--medium label-focus-input__group--has-label">
                  <label class="label-focus-input__group__label">Email</label>
                  <input type="email" tabindex="0" class="label-focus-input__group__input" value="">
                </div>
              </div>
            </div>

            <div class="register-tutor-form__form-group">
              <span class="register-tutor-form__label">электронная почта*</span>
              <div class="label-focus-input">
                <div
                    class="label-focus-input__group label-focus-input__group--medium label-focus-input__group--has-label">
                  <label class="label-focus-input__group__label">Email</label>
                  <input type="email" tabindex="0" class="label-focus-input__group__input" value="">
                </div>
              </div>
            </div>

            <div class="register-tutor-form__form-group">
              <span class="register-tutor-form__label">Номер телефона*</span>
              <div class="label-focus-input">
                <div
                    class="label-focus-input__group ">

                  <input type="email" tabindex="0" class="label-focus-input__group__input" value="">
                </div>
              </div>
            </div>

            <div class="register-tutor-form__form-group">
              <span class="register-tutor-form__label">паспорт*</span>
              <div class="drag-file">
                <div tabindex="0" class="drag-file__area">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21"
                        stroke="#222222" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <div class="drag-file__title">перетяните файл или <label for="passport">нажмите сюда<input
                      id="passport" type="file" name="passport" accept=".gif,.jpg,.jpeg,.tiff,.png,.pdf"></label></div>
                  <div class="desc">формат PNG, JPEG, размером макс 3мб.</div>
                </div>
              </div>
              <div class="register-tutor-form__upload-info-block">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1062_10024)">
                    <path
                        d="M8.00065 10.6693V8.0026M8.00065 5.33594H8.00732M14.6673 8.0026C14.6673 11.6845 11.6826 14.6693 8.00065 14.6693C4.31875 14.6693 1.33398 11.6845 1.33398 8.0026C1.33398 4.32071 4.31875 1.33594 8.00065 1.33594C11.6826 1.33594 14.6673 4.32071 14.6673 8.0026Z"
                        stroke="#858585" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1062_10024">
                      <rect width="16" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <span>отсканируйте паспорт, или сфотографируйте главную страницу без бликов, что бы вся информация была читабельна</span><img
                  src="/images/3f4a0b3abf9c895950c0.png"></div>
            </div>

            <div class="register-tutor__form-group">
              <span class="register-tutor-form__label">предмет преподавания*</span>
              <div class="register-tutor-form__subjects-item">
                <div class="select">
                  <div id="select-subject-0" class="label-focus-input">
                    <div
                        class="label-focus-input__group label-focus-input__group--medium label-focus-input__group--has-label">
                      <label class="label-focus-input__group__label">предмет</label>
                      <input type="text" tabindex="0" class="label-focus-input__group__input" name="subject.0" value="">
                      <div class="label-focus-input__group__end">
                        <div class="select__adornment">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 6L8 11L3 6" stroke="#A3A3A3" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round">

                            </path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <button type="button" class="contained-button mt-5 account-settings__button"><span>сохранить изменения</span></button>

        </div>
      </div>
    </div>
  </main>

</template>

<style scoped>
main {
  height: 100%;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  outline: none;

}

.main__container {
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow-y: auto;
}

.register-tutor {
  background: #fff;
}

.register-tutor__container {
  padding: 60px 15px 60px;
  margin: 0 auto;
  width: 100%;
  max-width: 658px;
  display: flex;
  flex-direction: column;
  position: relative;
}



.register-tutor-form__form-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 46px;
  flex-direction: column;
  align-items: end;
  position: relative;
}

.register-tutor-form__label {
  color: #222;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 25px;
  display: block;
  font-weight: 600;
  width: 100%;
  flex-direction: column;
}

.avatar-input {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}

.avatar-input__container-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #f7f7f7;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-right: 30px;
}

.avatar-input__label {
  margin-right: 20px;
  padding: 15px 14px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  transition: .2s ease;
  background: #535353;
  color: #fff;
  border: none;
  cursor: pointer;
  width: auto;
  max-width: unset;
}

.avatar-input__label input {
  display: none;
}

.avatar-input__label svg {
  margin-right: 7px;
  min-width: 20px;
}

.register-tutor-form__input-info {
  font-weight: 400;
  font-size: 13px;
  line-height: 134%;
  margin-top: 14px;
  color: #999;
  width: 100%;
}

.register-tutor-form__form-group.row {
  flex-direction: row;
  flex-wrap: wrap;
}

.register-tutor-form__group-half {
  width: 100%;
  max-width: 302px;
}

.register-tutor-form__label {
  color: #222;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 25px;
  display: block;
  font-weight: 600;
  width: 100%;
  flex-direction: column;
}

.label-focus-input {
  width: 100%;
  height: 100%;
  position: relative;
}

.label-focus-input__group {
  display: flex;
  align-items: center;
  position: relative;
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 0 14px;
  height: 62px;
}

.label-focus-input__group__label {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  padding-left: 14px;
  white-space: nowrap;
  overflow: hidden;
  line-height: 62px;
  transition: .3s;
}

.label-focus-input__group__input {
  width: 100%;
  height: 100%;
  font-size: 15px;
  background: rgba(0, 0, 0, 0);
  border: none;
  padding: 0;
  text-overflow: ellipsis !important;
  white-space: nowrap;
  overflow: hidden;
  -webkit-box-shadow: 0 0 0 30px #fafafa inset !important;
}

.label-focus-input__group--big.label-focus-input__group--has-label:focus-within label,
.label-focus-input__group--big.label-focus-input__group--has-value label {
  font-size: 14px
}

.label-focus-input__group--big.label-focus-input__group--has-label:focus-within label + input,
.label-focus-input__group--big.label-focus-input__group--has-value label + input {
  padding-top: 20px
}

.label-focus-input__group--has-label:focus-within label,
.label-focus-input__group--has-value label {
  top: -10px;
  font-size: 12px
}

.label-focus-input__group--has-label:focus-within label + input,
.label-focus-input__group--has-value label + input {
  padding-top: 20px
}


.register-tutor-form__form-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 46px;
  flex-direction: column;
  align-items: end;
  position: relative;
}

.register-tutor-form__label {
  color: #222;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 25px;
  display: block;
  font-weight: 600;
  width: 100%;
  flex-direction: column;
}

.sex-input {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.sex-input__group {
  padding: 21px 47px;
  border: 1px solid #ddd;
  border-radius: 14px 0 0 14px;
  display: flex;
  align-items: center;
}

.sex-input__group input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.sex-input__group label {
  position: relative;
  display: flex;
  align-items: center;
}

.sex-input__checkmark {
  display: inline-flex;
  width: 18px;
  height: 18px;
  border-radius: 49px;
  background: #f3f4f4;
  border: 1px solid #d3d3d3;
  margin-right: 6px;
  position: relative;
}

.sex-input__group:last-child {
  border-radius: 0 14px 14px 0;
}

.drag-file {
  width: 100%;
  position: relative;
}

.drag-file__area {
  background: #fff;
  border: 1px dashed #bcbcbc;
  border-radius: 14px;
  height: 157px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.drag-file__area svg {
  margin-bottom: 10px;
}

.drag-file__area label {
  text-decoration: none;
  color: #6828f1;
  cursor: pointer;
  display: inline-flex;
}

.drag-file__area label input {
  display: none;
}

.drag-file__area .desc {
  font-weight: 400;
  font-size: 13px;
  line-height: 135%;
  letter-spacing: .01em;
  color: #717171;
}

.register-tutor-form__upload-info-block {
  width: 100%;
  padding: 5px 5px 5px 15px;
  background: #f3f4f4;
  border-radius: 14px;
  display: flex;
  align-items: center;
  min-height: 60px;
  border: 1px solid #f3f4f4;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: .015em;
  transition: .2s ease;
  margin-top: 16px;
}

.register-tutor-form__upload-info-block svg {
  margin-right: 7px;
  min-width: 16px;
}

.register-tutor-form__subjects-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
}

.select {
  position: relative;
  width: 100%;
}

.label-focus-input {
  width: 100%;
  height: 100%;
  position: relative;
}

.label-focus-input__group {
  display: flex;
  align-items: center;
  position: relative;
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 0 14px;
  height: 62px;
}

.label-focus-input__group__label {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  padding-left: 14px;
  white-space: nowrap;
  overflow: hidden;
  line-height: 62px;
  transition: .3s;
}

.label-focus-input__group__input {
  width: 100%;
  height: 100%;
  font-size: 15px;
  background: rgba(0, 0, 0, 0);
  border: none;
  padding: 0;
  text-overflow: ellipsis !important;
  white-space: nowrap;
  overflow: hidden;
  -webkit-box-shadow: 0 0 0 30px #fafafa inset !important;
}
.contained-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #6828f1;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  line-height: 21px;
  letter-spacing: .2px;
  padding: 21px 20px;
  border: none;
  border-radius: 12px;
  transition: .2s ease;
}


</style>