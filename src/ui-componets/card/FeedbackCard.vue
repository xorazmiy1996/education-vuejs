<script>
export default {
  name: "FeedbackCard",
  props: {
    name: String,
    score: Number
  },
  computed: {
    dynamicStyle() {
      return {
        width: Math.floor(this.score) / 25 * 100 + "%",
      };
    },
    progressColor() {
      if (Math.floor(this.score) / 25 * 100 <= 100 && Math.floor(this.score) / 25 * 100 >=85 ) {
        return "progress-bar bg-success"
      }
      if (Math.floor(this.score) / 25 * 100 < 85 && Math.floor(this.score) / 25 * 100 >=55) {
        return "progress-bar bg-warning"
      }
      else{
         return "progress-bar bg-danger"
      }

    },
  }
}
</script>

<template>


  <div class="card-body d-flex align-items-center">
    <div style="width: 100%">
      <div>
        <h3 class="card-title text-center"> {{ name.slice(0,10) }}</h3>
        <h3 class="card-title text-center"><b>{{ this.score }}%</b></h3>
      </div>
      <div class="progress">

        <div :class="progressColor" role="progressbar" :style="dynamicStyle" aria-valuenow="25"
             aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>


  </div>


</template>

<style scoped>


</style>