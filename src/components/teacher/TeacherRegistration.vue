<script setup>

</script>

<template>
  <section>
    <br>
    <br>
    <div class="container text-center">
      <h1>Teacher Registration</h1>
    </div>
    <div class="container mt-5">
      <div class="row">
         <div class="col-sm-2"></div>
         <div class="col-sm-8">
             <div class="card shadow-lg p-3 mb-5  bg-body-tertiary  rounded ">
        <h5 class="card-header">Teacher Registration</h5>
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
              <label for="exampleInputEmail1" class="form-label">Oxirgi ish joyi::</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="inputState" class="form-label">Ish tajribasi</label>
              <select id="inputState" class="form-control">
                <option selected>1 years</option>
                <option>2 years</option>
                <option>3 years</option>
                <option>4 years</option>
                <option>5 years</option>
                <option>6 years</option>
                <option>7 years</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="inputState" class="form-label">IELTS</label>
              <select id="inputState" class="form-control">
                <option selected>NO IELTS</option>
                <option selected>5.0</option>
                <option selected>5.5</option>
                <option selected>6.0</option>
                <option selected>6.5</option>
                <option selected>7.0</option>
                <option selected>7.5</option>
                <option selected>8.0</option>
                <option selected>8.5</option>
                <option selected>9.0</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">O'zingiz haqingizda</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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