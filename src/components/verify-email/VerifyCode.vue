<script>
import {defineComponent} from 'vue'
import Input from "@/ui-componets/Input.vue";
import {mapGetters, mapState} from "vuex";
import ValidationError from "@/components/login/ValidationError.vue";

export default defineComponent({
  name: "VerifyCode",
  components: {ValidationError, Input},
  data() {
    return {
      email_code: "",
      server_data: {}
    }

  },
  methods: {
    emailVerify() {
      const data = {
        "email": localStorage.getItem('email'),
        "verification_code": parseInt(this.email_code)
      }
      console.log(data)
      this.$store.dispatch("auth/verificationCode", data)
          .then(response => {
            this.$router.push({name: 'login'})
          })
          .catch(err => console.log("Error2", err))


    }

  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading
    },
    validationError() {
      const errors = this.$store.state.auth.errors
      return errors
    }
  },
})
</script>

<template>
  <section>
    <br>
    <br>
    <div class="container text-center">

    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
          <div class="card shadow-lg p-3 mb-5  bg-body-tertiary  rounded ">
            <div class="text-center">
              <h5 class="card-header">Email tasdiqlang</h5>
              <p>Elektron pochtaga tasdiqlash kodini yubordik, elektron pochtangizni tekshiring va profilingizni
                tasdiqlang.</p>
              <h5></h5>
            </div>

            <div class="card-body">
              <form @submit.prevent>
                <div class="mb-3 d-flex justify-content-center flex-direction-column">
                  <Input v-model="email_code" :type="'text'" maxlength="4" aria-describedby="inputGroup-sizing-lg"/>
                </div>
                <div class="mb-3 d-flex justify-content-center flex-direction-column">
                  <ValidationError v-if="validationError" :validationError="validationError"/>
                </div>
                <div class="save-submit d-flex justify-content-center ">
                  <button @click="emailVerify" :disabled="isLoading" type="submit" class="btn btn-primary">Submit
                  </button>
                </div>

              </form>

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

h1 {
  font-size: 40px;
  font-weight: 700;
}

.card {
  background-color: #f8f9fa;
}

.card-header {
  background-color: #f8f9fa;
}

input {
  max-width: 12rem;
  margin: 5px;

}
</style>