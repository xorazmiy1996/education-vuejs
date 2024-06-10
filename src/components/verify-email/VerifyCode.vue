<script setup>
import Input from "@/ui-componets/Input.vue";
import {defineComponent, ref} from 'vue'

const router = useRouter();
const store = useStore();
const toaster = createToaster();

const value = ref(null);
const email_code = ref(null);
const loading = ref(false);


const emailVerify = async () => {
  const data = {
    "email": localStorage.getItem('email'),
    "verification_code": email_code.value
  }
  loading.value = true
  await store.dispatch("auth/verificationCode", data)
      .then(response => {
        loading.value = false
        toaster.success(`Muvoffaqiyatli`,
            {
              position: "top-right",
              duration:5000
            }
        );
        router.push({name: 'login'})

      })
      .catch(err => {
        loading.value = false
        toaster.error(err,
            {
              position: "top-right",
            }
        );
      })


}

function resendCode(){
  email_code.value = null
}


import {useStore} from "vuex";

import {createToaster} from "@meforma/vue-toaster";
import {useRouter} from "vue-router";


</script>

<template>
  <section class="d-flex align-items-center justify-content-center" style="height:90vh">
    <div class="card d-flex justify-content-center  p-5">
      <div class="d-flex flex-column align-items-center">
        <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
        <p class="text-color-secondary block mb-5">Please enter the code sent to your phone.</p>
        <InputOtp v-model="email_code"  :length="4" style="gap: 0">
          <template #default="{ attrs, events, index }">
            <input type="text" v-bind="attrs"  v-on="events" class="custom-otp-input"/>

          </template>
        </InputOtp>
        <div class="d-flex justify-content-between mt-5 align-self-stretch">
          <Button @click="resendCode()"   label="Resend Code" link class="p-0"/>
          <Button :disabled="!email_code" @click="emailVerify()" class="d-flex justify-content-center">
            <ProgressSpinner v-if="loading" style="width: 25px; height: 25px" strokeWidth="8"
                             animationDuration="2s"  aria-label="Custom ProgressSpinner" />
            <span v-else >Submit Code</span>
          </Button>
        </div>
      </div>
    </div>
  </section>
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

.custom-otp-input:nth-child(4) {
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border-right-width: 1px;
  border-right-style: solid;
  border-color: var(--surface-400);
}
</style>