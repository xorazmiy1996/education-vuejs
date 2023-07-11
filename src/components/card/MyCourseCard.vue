<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MyCourseCard",
  props: {
    courses: {
      type: Object,
      required: true,
    }
  },
})
</script>

<template>
<div class="col">
    <div class="card shadow-sm">
      <img src="@/assets/image/home_image/course.png" alt="">
      <div class="card-body">
        <p class="card-text">
          <b>Teacher:</b> {{ courses.teacher.first_name }} {{ courses.teacher.last_name }}
        </p>
      </div>
      <ul class="list-group list-group-flush  d-flex justify-content-space-evenly">
         <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <b>course:</b>
          </div>
          <small class="text-body-secondary">
            <ul>
              <li><b>name:</b> <span class="badge text-bg-primary">{{ courses.course.name }}</span></li>
              <li><b>level</b> <span class="badge text-bg-primary">{{courses.course.level}}</span> </li>
              <li><b>price</b> <span class="badge text-bg-primary">{{courses.course.price}}</span> </li>
            </ul>


          </small>

        </li>


        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <b>time:</b>
          </div>
          <small class="text-body-secondary">
            {{ courses.time }}
          </small>

        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <b>Week day:</b>
          </div>
          <small class="text-body-secondary">
            <span v-for="day in courses.weekdays" class="badge text-bg-primary">
                 <b v-if="day === '0'">Monday</b>
                        <b v-if="day === '1'">Tuesday</b>
                        <b v-if="day === '2'">Wednesday</b>
                        <b v-if="day === '3'">Thursday</b>
                        <b v-if="day === '4'">Friday</b>
                        <b v-if="day === '5'">Saturday</b>
                        <b v-if="day === '6'">Sunday</b>
            </span>
          </small>

        </li>
         <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <b>Start date:</b>
          </div>
          <small class="text-body-secondary">
            {{ courses.start_date }}
          </small>

        </li>

      </ul>
      <div class="card-body">
        <div class="d-flex justify-content-center align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul{
  list-style: none;
}
ul li {
  list-style: none;
}
</style>