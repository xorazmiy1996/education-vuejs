<script setup>

</script>

<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container d-flex align-items-center px-4">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
              aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="oi oi-menu"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
         <i style="color: white">Your Logotiv</i>
      </div>
       <div class="account">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item active"><router-link to="/" class="nav-link pl-0">Home</router-link></li>
          <li class="nav-item"><router-link to="/course" class="nav-link">Courses</router-link></li>
            <li class="nav-item"><router-link to="/contact" class="nav-link">Contact</router-link></li>
        </ul>

       </div>
    </div>
    <div>
    </div>
  </nav>
</template>

<style scoped>
.account {
  cursor: pointer;

}

</style>