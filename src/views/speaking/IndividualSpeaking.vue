<script>
import {defineComponent} from 'vue'


export default defineComponent({
  name: "Speaking",
  mounted() {

  },
  methods:{
     individualSpeakingDetail(id){
       console.log("Salom")
       return this.$router.push(`/individual_speaking_detail/${id}`)
     }
  }



})
</script>

<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-5">
      <div class="col">
        <div @click="individualSpeakingDetail()" class="card">
          <div class="card-image">
            <img src="@/assets/image/home_image/rasm.png" alt="">
          </div>

          <div class="card-body">
            <h5 class="card-title">Jasur Nazarov</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                 <h5>500 000 sum/month</h5>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-image">
            <img src="@/assets/image/home_image/rasm.png" alt="">
          </div>

          <div class="card-body">
            <h5 class="card-title">Jasur Nazarov</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <h5>500 000 sum/month</h5>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-image">
            <img src="@/assets/image/home_image/rasm2.png" alt="">
          </div>

          <div class="card-body">
            <h5 class="card-title">Jasur Nazarov</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <h5>500 000 sum/month</h5>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-image">
            <img src="@/assets/image/home_image/rasm.png" alt="">
          </div>

          <div class="card-body">
            <h5 class="card-title">Jasur Nazarov</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <h5>500 000 sum/month</h5>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-image">
            <img src="@/assets/image/home_image/rasm.png" alt="">
          </div>

          <div class="card-body">
            <h5 class="card-title">Jasur Nazarov</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <h5>500 000 sum/month</h5>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-image">
            <img src="@/assets/image/home_image/rasm.png" alt="">
          </div>

          <div class="card-body">
            <h5 class="card-title">Jasur Nazarov</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <h5>500 000 sum/month</h5>
              </div>

            </div>
          </div>
        </div>
      </div>





    </div>
  </div>

</template>

<style scoped>
.card{
  border: none;
}
.card .card-image{
  margin-bottom: 4px;
  width: 100%;
  height: 230px;
  box-shadow: 0px 2px 6px 2px rgba(0,0,0,.031372549);
  background-color: rgba(0,0,0,0);
  border-radius: 12px;
  overflow: hidden;

}
.card .card-body{
  padding: 3px;
  box-shadow: none;
}
.card-body .card-title{
  margin: 0;
  font-weight: bold;
}
.card-body p{
  margin: 0;
  color: #717171;
  font-size: 15px;
}
.card-image img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-color: rgba(0,0,0,0);
  cursor: pointer;
}

</style>