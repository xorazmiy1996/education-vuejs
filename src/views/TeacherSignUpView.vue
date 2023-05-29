<script>


export default{
  name: "TeacherSignUp"
}
</script>

<template>
  <section>
    <div class="container">
      <div class="head-h1">
        <h1>Registration</h1>
      </div>
      <div class="registration">
        <div class="card">
          <h5 class="card-header">Featured</h5>
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
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 30px 80px
}

.container .head-h1 {
  text-align: center;
}

.container .head-h1 h1 {
  font-size: 40px;
  font-weight: 900;
}

.registration{
  border-radius: 25px;
}
.card .card-header{
  background-color: #fd5f00;
}
.save-submit{
  text-align: center;
}
</style>