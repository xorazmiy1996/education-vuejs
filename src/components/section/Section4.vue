<script>


export default {
  name: "Section4"
}
</script>

<template>
  <section>
    <div class="new-text">
      <h1>Latest News</h1>
    </div>
    <div class="container">
      <div class="card">
          <div class="card-img">
              <img src="../../assets/image/home_image/course_image2.png" class="card-img-top">
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      <div class="card">
          <div class="card-img">
              <img src="../../assets/image/home_image/course_image2.png" class="card-img-top">
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      <div class="card">
          <div class="card-img">
              <img src="../../assets/image/home_image/course_image2.png" class="card-img-top">
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    </div>
    <button class="btn btn-outline-danger">Mure Read <i class="fa fa-arrow-right-long"></i></button>
    <br>
    <br>
    <br>

  </section>

</template>

<style scoped>
section {

  background-color: hsla(230, 40%, 50%, 1);
  text-align: center;
   min-height: 100vh;
}
section .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px;
}
section .container .card {
  width: 350px;
  margin: 15px;
  border-radius: 25px;
  box-shadow: -15px -15px 15px rgba(255, 255, 255, 0.2), 15px -15px 15px rgba(255, 255, 255, 0.1), inset -5px -5px 5px rgba(255, 255, 255, 0.2), inset 5px 5px 5px rgba(0, 0, 0, 0.1);

}
section .container .card img{
  border-radius: 25px 25px 0 0;
}

section .new-text h1 {

  color: white;
  font-weight: 900;

}
section button{
  background-color: #fd5f00;
  min-width: 88px;
  min-height: 50px;
  color: white;
}
</style>