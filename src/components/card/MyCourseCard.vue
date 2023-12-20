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
      <img class="course-image" :src="courses?.course?.image" alt="">
      <div class="card-body py-2 d-flex justify-content-between">
        <div class="teacher">
          Учитель:
        </div>
        <div class="teacher-name">
          {{ courses.teacher.first_name }} {{ courses.teacher.last_name }}
        </div>
      </div>
      <ul class="list-group list-group-flush  d-flex justify-content-space-evenly">
         <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <b>Курс:</b>
          </div>
          <small class="text-body-secondary">
            <table>
              <tbody>
              <tr>
                <th>Название</th>
                <td class="badge text-bg-primary ms-3">{{ courses.course.name }}</td>
              </tr>
              <tr>
                <th>Уровень</th>
                <td class="badge text-bg-primary ms-3">{{courses.course.level}}</td>
              </tr>
              <tr>
                <th>Цена курса</th>
                <td class="badge text-bg-primary ms-3">{{courses.course.price}}</td>
              </tr>
              </tbody>
            </table>
          </small>

        </li>


        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <b>Время:</b>
          </div>
          <small class="badge text-bg-primary time-text">
            {{ courses.time }}
          </small>

        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center week-day">
          <div class="me-3">
            <b>Дни уроков:</b>
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
            <b>Начало курса:</b>
          </div>
          <small class="text-body-secondary">
            {{ courses.start_date }}
          </small>

        </li>

      </ul>
      <div class="card-body">
        <div class="d-flex justify-content-center align-items-center">
          <div class="btn-group">
            <a target="_blank" :href="courses?.room">Вход в класс</a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card{
  border-radius: 15px 15px 15px 15px;
}
.course-image{
  border-radius: 15px 15px 0 0;
  max-width: 360px;
  max-height: 227px;
}



ul{
  list-style: none;
}
ul li {
  padding-top: 3px;
  padding-bottom: 3px;
  list-style: none;
}
.teacher-name{
  font-size: 20px;
  font-weight: 600;
}
.teacher{
  font-size: 20px;
  font-weight: 600;
}
.time-text{
  font-size: 11px;
}
.week-day{
  height: 60px;
}

</style>