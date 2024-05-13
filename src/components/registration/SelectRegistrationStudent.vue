<script>
export default {
  name: "SelectRegistrationStudent",
  methods:{
    registrationStudent(){
      return this.$router.push({name: "student_registration"})
    },
  },

}
</script>

<template>
<div class="container">
  <section>
    <div class="row">
      <div class="col-sm-12 d-flex justify-content-center">
        <div class="card w-75"  @click="registrationStudent()" >
          <div class="card-body">
            <h5 class="card-title">Student</h5>
            <p class="text-center">Регистрируйтесь здесь чтобы практиковаться и развивать ваши разговорные навыки!</p>
         </div>
        </div>
      </div>
    </div>

  </section>
</div>
</template>

<style scoped>
section{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.card{
  min-width: 380px;
  background-color: #46056d;
  color: #fff;
  border-radius: 25px !important;
  transition: all 0.3s;

}
.card:hover{
  background: #FFFFFF;
  color: black;
  cursor: pointer;
  border-radius: 25px !important;
  transition: all 0.3s;


}
.card h5{
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 40px;
}
@media (max-width: 993px) {

}
</style>