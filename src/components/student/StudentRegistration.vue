<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "StudentRegistration"
})
</script>

<template>
  <section>
    <br>
    <br>
    <div class="container text-center">
      <h1>Student Registration</h1>
    </div>
    <div class="container mt-5">
      <div class="row">
         <div class="col-sm-2"></div>
         <div class="col-sm-8">
             <div class="card shadow-lg p-3 mb-5  bg-body-tertiary  rounded ">
        <h5 class="card-header">Student Registration</h5>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Ism:</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Familya:</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                Erkak
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
                Ayol
              </label>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Tug'ilgan yil:</label>
              <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Telephone</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="+998(99)">
            </div>
            <div class="save-submit">
              <button type="submit" class="btn btn-primary">Submit</button>
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
section{
      background-color: #f8f9fa;
}
h1{
  font-size: 40px;
  font-weight: 700;
}
.card{
  background-color: #f8f9fa;
}
.card-header{
  background-color: #f8f9fa;
}
</style>