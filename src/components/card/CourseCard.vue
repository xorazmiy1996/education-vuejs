<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CourseCard",
  props: {
    cabinet: {
      type: Object,
      required: true,
    }
  },
  methods:{
    navigateHandler(){
      return this.$router.push(`/educations/cabinet/${this.cabinet.id}`)
    }
  }
})
</script>

<template>
  <div class="col">
    <div class="card shadow-sm">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
           role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
      </svg>
      <div class="card-body">
        <p class="card-text">
          {{ cabinet.course.description }}
        </p>
      </div>
      <ul class="list-group list-group-flush  d-flex justify-content-space-evenly">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <b>Teacher:</b>
          </div>
          <small class="text-body-secondary">{{ cabinet.teacher.first_name }} {{cabinet.teacher.last_name}}</small>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <b>Course name:</b>
          </div>
          <small class="text-body-secondary"> {{ cabinet.course.name}}</small>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
             <b>Course type:</b>
          </div>
          <small class="text-body-secondary">
              {{ cabinet.course.type}}
          </small>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <b>Price:</b>
          </div>
          <small class="text-body-secondary">
             {{ cabinet.course.price}} <b>so'm</b>
          </small>

        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
             <b>Week day:</b>
          </div>
          <small class="text-body-secondary">
             {{ cabinet.weekdays}}
          </small>

        </li>

      </ul>
      <div class="card-body">
        <div class="d-flex justify-content-center align-items-center">
          <div class="btn-group">
            <button @click="navigateHandler" type="button" class="btn btn-sm btn-outline-secondary">View</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>