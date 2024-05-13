<script setup>
import Input from "@/ui-componets/Input.vue";
import {defineComponent, ref} from 'vue'


const value = ref(null);



import {mapGetters, mapState} from "vuex";
import ValidationError from "@/components/login/ValidationError.vue";

// export default defineComponent({
//   name: "VerifyCode",
//   components: {ValidationError, Input},
//   data() {
//     return {
//       email_code: "",
//       server_data: {}
//     }
//
//   },
//   methods: {
//     emailVerify() {
//       const data = {
//         "email": localStorage.getItem('email'),
//         "verification_code": parseInt(this.email_code)
//       }
//       this.$store.dispatch("auth/verificationCode", data)
//           .then(response => {
//             this.$router.push({name: 'login'})
//           })
//           .catch(err => console.log("Error2", err))
//
//
//     }
//
//   },
//   computed: {
//     isLoading() {
//       return this.$store.state.auth.isLoading
//     },
//     validationError() {
//       const errors = this.$store.state.auth.errors
//       return errors
//     }
//   },
// })
</script>

<template>
  <section class="d-flex align-items-center justify-content-center" style="height:90vh">
        <div class="card d-flex justify-content-center  p-5">
          <div class="d-flex flex-column align-items-center">
            <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
            <p class="text-color-secondary block mb-5">Please enter the code sent to your phone.</p>
            <InputOtp v-model="value" :length="4" style="gap: 0">
              <template #default="{ attrs, events, index }">
                <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />

              </template>
            </InputOtp>
            <div class="d-flex justify-content-between mt-5 align-self-stretch">
              <Button label="Resend Code" link class="p-0"></Button>
              <Button label="Submit Code"></Button>
            </div>
          </div>
        </div>
  </section>





<!--  <section class="d-flex justify-content-center align-items-center">-->
<!--    <div class="container">-->
<!--      <div class="row">-->
<!--        <div class="col-sm-2"></div>-->
<!--        <div class="col-sm-8">-->
<!--          <div class="card shadow-lg p-3 mb-5  bg-body-tertiary  rounded ">-->
<!--            <div class="text-center">-->
<!--              <h5 class="card-header">Подтвердите почту</h5>-->
<!--              <p>Мы отправили код на вашу почту, проверьте почту и подтвердите ваш профиль.</p>-->
<!--              <h5></h5>-->
<!--            </div>-->

<!--            <div class="card-body">-->
<!--              <form @submit.prevent>-->
<!--                <div class="mb-3 d-flex justify-content-center flex-direction-column">-->
<!--                  <Input v-model="email_code" :type="'text'" maxlength="4" aria-describedby="inputGroup-sizing-lg"/>-->
<!--                </div>-->
<!--                <div class="mb-3 d-flex justify-content-center flex-direction-column">-->
<!--                  <ValidationError v-if="validationError" :validationError="validationError"/>-->
<!--                </div>-->
<!--                <div class="save-submit d-flex justify-content-center ">-->
<!--                  <button style="background: #5b35a2" @click="emailVerify" :disabled="isLoading" type="submit" class="btn btn-primary">Отправить-->
<!--                  </button>-->
<!--                </div>-->

<!--              </form>-->

<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-sm-2"></div>-->
<!--      </div>-->


<!--    </div>-->
<!--  </section>-->
</template>

<style scoped>
.custom-otp-input {
  width: 48px;
  height: 48px;
  font-size: 24px;
  appearance: none;
  text-align: center;
  //transition: all 0.2s;
  border-radius: 0;
  border: 1px solid var(--surface-400);
  background: transparent;
  outline-offset: -2px;
  outline-color: transparent;
  border-right: 0 none;
  transition: outline-color 0.3s;
  color: var(--text-color);
}

.custom-otp-input:focus {
  outline: 2px solid var(--primary-color);
}

.custom-otp-input:first-child {
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.custom-otp-input:nth-child(4){
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border-right-width: 1px;
  border-right-style: solid;
  border-color: var(--surface-400);
}
</style>