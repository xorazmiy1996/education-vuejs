<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "CreditCard"
})
</script>

<template>
  <div class="container">
    <header>
            <span class="logo">
                <img src="@/assets/card-image/logo.png" alt="">
                <h5>Master Card</h5>

            </span>
      <img src="@/assets/card-image/visa-logo-png-5.png" class="chip">
    </header>
    <div class="card-details">
      <div class="name-number">
        <h6>Card Number</h6>
        <h5 class="number">8990 1240 2222 3102</h5>
        <h5 class="name">Code Artistic</h5>
      </div>
      <div class="valid-date">
        <h6>Valid Thur</h6>
        <h5>12/21</h5>
      </div>
    </div>

  </div>


</template>

<style scoped>
.container{
  position: relative;
  background-image: url("@/assets/card-image/bg.png");
  padding: 25px;
  background-size: cover;
  width: 100%;
  border-radius: 28px;
  max-width: 380px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);

}
.logo{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo img{
  width: 48px;
  margin-right: 10px;
}
h5{
  font-size: 16px;
  font-weight: 400;
  color: #fff;
}
header .chip{
  width: 60px;
}
h6{
  color: #fff;
  font-size: 10px;
  font-weight: 400;
}
h5.number{
  margin-top: 4px;
  font-size: 18px;
  letter-spacing: 1px;
}
h5.name{
  margin-top: 20px;
  cursor: pointer;
}
.container .card-details{
  margin-top: 40px;
  display: flex;
  cursor: pointer;

  justify-content: space-between;
  align-items: flex-end;}
</style>