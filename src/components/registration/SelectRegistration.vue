<script>
export default {
  name: "SelectRegistration",
  methods:{
    registrationStudent(){
      return this.$router.push({name: "student_registration"})
    },

    registrationTeacher(){
      return this.$router.push({name: "teacher_registration"})
    }
  },

}
</script>

<template>
<div class="container">
  <section>
    <div class="row">
      <div class="col-sm-6 d-flex justify-content-center">
        <div class="card w-75"  @click="registrationStudent()" >
          <div class="card-body">
            <h5 class="card-title">Student</h5>
            <p class="text-center">Регистрируйтесь здесь чтобы практиковаться и развивать ваши разговорные навыки!</p>
         </div>
        </div>
      </div>
      <div class="col-sm-6 d-flex justify-content-center">
        <div class="card w-75" @click="registrationTeacher()">
          <div class="card-body">
            <h5 class="card-title">Teacher</h5>
            <p class="text-center">Регистрирутесь здесь чтобы улучшить ваши преподовательские навыки и зарабатывать хорошо!</p>
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
}
.card:hover{
  background: #FFFFFF;
  color: black;
  cursor: pointer;
  border-radius: 25px !important;
}
.card h5{
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 40px;
}
</style>