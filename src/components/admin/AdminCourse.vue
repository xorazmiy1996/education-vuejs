<script>
import {defineComponent} from 'vue'
import Modal from "@/ui-componets/Modal.vue";
import ValidationError from "@/components/login/ValidationError.vue";
import Input from "@/ui-componets/Input.vue";
import {mapGetters} from "vuex";
import DeleteModal from "@/ui-componets/alert-modal/DeleteModal.vue";
import Loader from "@/ui-componets/Loader.vue";


import {maskito} from '@maskito/vue';

import {maskitoNumberOptionsGenerator} from "@maskito/kit";

export default defineComponent({
  name: "AdminCourse",
  components: {Loader, DeleteModal, Input, ValidationError, Modal},
  directives: {maskito},
  data() {
    return {
      name: '',
      description: '',
      level: '',
      duration: null,
      price: null,
      skills: '',
      type: '',
      isModalOpen: false,
      curseImage: null,
      curseVideo: null,
      isDeleteModalOpen: false,
      isEditModalOpen: false,
      isAddCabinetFormModalOpen: false,
      delete_id: '',
      edit_id: '',

      add_course_id: '',
      weekDays: [],
      time: '',
      teacher_id: null,
      start_date: null,
      card_number: null,


      priceOptions: maskitoNumberOptionsGenerator(),

      detail_user_data: null,
    }
  },
  created() {
    this.$store.dispatch("course/getAllCourse")
    this.$store.dispatch("teacher/getAllTeachers")
  },
  computed: {
    ...mapGetters("course", ['courses', 'isLoading', 'courseDetail', 'createCourseErrors']),
    ...mapGetters("teacher", ['teachers']),
  },
  methods: {
    submitHandler() {
      const data = new FormData();
      data.append('name', this.name);
      data.append('description', this.description);
      data.append('level', this.level);
      data.append('duration', this.duration);
      data.append('price', this.price);
      data.append('skills', this.skills);
      data.append('type', this.type);
      data.append('image', this.curseImage);
      data.append('video', this.curseVideo);


      this.$store
          .dispatch("course/createCourse", data)
          .then(response => {
            this.closeModal()
            this.$toast.success(`Course create`,
                {
                  position: "top-right",
                }
            );
            this.$store.dispatch("course/getAllCourse")


          })
          .catch(error => {
            this.$toast.error(`${error}`,
                {
                  position: "top-right",
                }
            );
          })


    },
    submitHandlerCabinet() {
      const data = {
        "teacher_id": this.teacher_id,
        "time": this.time,
        "course_id": this.add_course_id,
        "start_date": this.start_date,
        "weekdays": this.weekDays,
      }

      this.$store
          .dispatch("cabinet/createCabinet", data)
          .then(response => {
            this.closeAddCabinetFormModal()
            this.$toast.success(`Create cabinet`,
                {
                  position: "top-right",
                }
            );
            this.$store.dispatch("course/getAllCourse");
            this.add_course_id = '';
            this.weekDays = [];
            this.time = '';
            this.teacher_id = null;
            this.start_date = null;
            this.card_number = null;
          })
          .catch(error => {
            this.$toast.error(`${error}`,
                {
                  position: "top-right",
                }
            );
          })
    },
    uploadCurseImage() {
      const file1 = this.$refs.fileCurseImage.files[0]
      this.curseImage = file1
    },

    uploadCurseVideo() {
      const file2 = this.$refs.fileCurseVideo.files[0]
      this.curseVideo = file2

    },


    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    },
    // Edit Modal
    openEditModal(id) {
      this.isEditModalOpen = true
      this.courseDetailData(id)
    },
    closeEditModal() {
      this.isEditModalOpen = false
    },
    // delete modal
    openDeleteModal(id) {
      this.delete_id = id
      this.isDeleteModalOpen = true
    },
    closeDeleteModal() {
      this.isDeleteModalOpen = false
    },
    // add Cabinet Form modal
    openAddCabinetFormModal(id) {
      this.add_course_id = id
      this.isAddCabinetFormModalOpen = true
    },
    closeAddCabinetFormModal() {
      this.isAddCabinetFormModalOpen = false
    },
    deleteCourse() {

      this.$store.dispatch('course/deleteCurse', this.delete_id)
          .then(() => {
            this.closeDeleteModal()
            this.$toast.error(`Delete course`,
                {
                  position: "top-right",
                }
            );
            this.$store.dispatch("course/getAllCourse")
          })
    },
    courseDetailData(id) {
      this.$store.dispatch("course/courseDetail", id).then(response => {
        this.detail_user_data = response
      }).catch(error => {
        console.log(error)
      })

    },
    catchCourse() {
      const course_data = {
        "name": this.detail_user_data.name,
        "description": this.detail_user_data.description,
        "level": this.detail_user_data.level,
        "duration": this.detail_user_data.duration,
        "price": this.detail_user_data.price,
        "type": this.detail_user_data.type
      }
      const data = {
        "data": course_data,
        "id": this.detail_user_data.id
      }
      this.$store.dispatch("course/patchCourse", data)
          .then(() => {
            this.$store.dispatch("course/getAllCourse")
            this.closeEditModal()

          }).catch(error => {
        console.log(error)

      })
    }

  },
})
</script>

<template>


  <delete-modal :is-open="isDeleteModalOpen" title="Удалить" @close="closeDeleteModal">
    <div v-if="isLoading" class="d-flex justify-content-center ">
      <Loader/>
    </div>
    <div v-else>
      <p>Вы действительно хотите удалить этот курс?</p>
      <div class="d-flex">
        <button @click="deleteCourse" type="button" class="btn btn-outline-success success-button delete-button">Да
        </button>
        <button @click="closeDeleteModal" type="button" class="btn btn-outline-danger">Нет</button>
      </div>
    </div>
  </delete-modal>

  <modal :is-open="isEditModalOpen" title="Edit" @close="closeEditModal">
    <template v-slot:modal-body>
      <form v-if="!!detail_user_data">
        <div class="mb-3">
          <label for="exampleInputName" class="form-label">Название</label>
          <input v-model="detail_user_data.name" type="text" class="form-control" id="exampleInputName">
        </div>
        <div class="mb-3">
          <label for="exampleInputDescription" class="form-label">Описание</label>
          <input v-model="detail_user_data.description" type="text" class="form-control" id="exampleInputDescription">
        </div>
        <div class="mb-3">
          <label for="exampleInputLevel" class="form-label">Уровень</label>
          <select class="form-select" id="exampleInputLevel" v-model="detail_user_data.level">
            <option disabled value="">Course select</option>
            <option>A1</option>
            <option>A2</option>
            <option>B1</option>
            <option>B2</option>
            <option>C1</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="exampleInputDuration" class="form-label">Продолжительность</label>
          <input v-model="detail_user_data.duration" type="number" min="0" class="form-control"
                 id="exampleInputDuration">
        </div>
        <div class="mb-3">
          <label for="formUserImage" class="form-label">Загрузить фото для курса</label>
          <div class="image_course_upload d-flex flex-column align-items-center justify-content-center">
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21"
                    stroke="#222222" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
            <div>
              <input accept="image/png" type="file" id="formUserImage" ref="fileCurseImage"
                     @change="uploadCurseImage()">
            </div>
            <div>
              <p style="margin-right: 25px">формат pdf, размером макс 3мб.</p>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="formCourseVideo" class="form-label">Загрузить видео для курса</label>
          <div class="video_course_upload d-flex flex-column align-items-center justify-content-center">
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21"
                    stroke="#222222" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
            <div>
              <input accept="video/*" type="file" id="formCourseVideo" ref="fileCurseVideo"
                     @change="uploadCurseVideo()">
            </div>
            <div>
              <p style="margin-right: 25px">формат pdf, размером макс 20мб.</p>
            </div>

          </div>


        </div>
        <div class="mb-3">
          <label for="exampleInputType" class="form-label">Тип курса</label>
          <select class="form-select" id="exampleInputType" v-model="detail_user_data.type">
            <option disabled value="">Course type</option>
            <option value="individual">individual</option>
            <option value="group">Group</option>
            <option value="general_english">General English</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="exampleInputPrice" class="form-label">Цена</label>
          <input v-model="detail_user_data.price" type="text" class="form-control"
                 id="exampleInputPrice">
        </div>
        <button @click="catchCourse()" :disabled="isLoading" class="btn btn-primary">Edit</button>
      </form>
    </template>
    <template v-slot:modal-footer>

    </template>

  </modal>

  <modal :is-open="isModalOpen" title="Добавить курса" @close="closeModal">
    <template v-slot:modal-body>
      <div v-if="isLoading" class="d-flex justify-content-center">
        <Loader/>
      </div>
      <div v-else>
        <form @submit.prevent="submitHandler">

          <div class="mb-3">
            <label for="exampleInputName" class="form-label">Название</label>
            <input v-model="name" type="text" class="form-control" id="exampleInputName">
            <ValidationError :validationError="createCourseErrors?.name"/>
          </div>
          <div class="mb-3">
            <label for="exampleInputDescription" class="form-label">Описание</label>
            <input v-model="description" type="text" class="form-control" id="exampleInputDescription">
            <ValidationError v-if="createCourseErrors" :validationError="createCourseErrors.description"/>
          </div>
          <div class="mb-3">
            <label for="exampleInputLevel" class="form-label">Уровень</label>
            <select class="form-select" id="exampleInputLevel" v-model="level">
              <option value="A1">Beginner</option>
              <option value="B1">Intermediate</option>
              <option value="C1">Advanced</option>
            </select>
            <ValidationError v-if="createCourseErrors" :validationError="createCourseErrors.level"/>
          </div>
          <div class="mb-3">
            <label for="exampleInputLevel" class="form-label">Skill</label>
            <select class="form-select" id="exampleInputLevel" v-model="skills">
              <option value="reading">Reading</option>
              <option value="speaking">Speaking</option>
              <option value="listening">Listening</option>
              <option value="writing">Writing</option>
              <option value="general">General</option>
            </select>
            <ValidationError v-if="createCourseErrors" :validationError="createCourseErrors.skills"/>
          </div>
          <div class="mb-3">
            <label for="exampleInputLevel" class="form-label">Продолжительность</label>
            <select class="form-select" id="exampleInputLevel" v-model="duration">
              <option :value="30">1 oy</option>
              <option :value="60">2 oy</option>
              <option :value="90">3 oy</option>
              <option :value="120">4 oy</option>
              <option :value="150">5 oy</option>
              <option :value="180">6 oy</option>
            </select>
            <ValidationError :validationError="createCourseErrors?.duration"/>
          </div>
          <div class="mb-3">
            <label for="formUserImage" class="form-label">Загрузить фото для курса</label>
            <div class="image_course_upload d-flex flex-column align-items-center justify-content-center">
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21"
                      stroke="#222222" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <div>
                <input accept="image/png" type="file" id="formUserImage" ref="fileCurseImage"
                       @change="uploadCurseImage()">
              </div>
              <div>
                <p style="margin-right: 25px">формат pdf, размером макс 3мб.</p>
              </div>
            </div>
            <ValidationError :validationError="createCourseErrors?.image"/>
          </div>
          <div class="mb-3">
            <label for="formCourseVideo" class="form-label">Загрузить видео для курса</label>
            <div class="video_course_upload d-flex flex-column align-items-center justify-content-center">
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21"
                      stroke="#222222" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <div>
                <input accept="video/*" type="file" id="formCourseVideo" ref="fileCurseVideo"
                       @change="uploadCurseVideo()">
              </div>
              <div>
                <p style="margin-right: 25px">формат pdf, размером макс 20мб.</p>
              </div>
            </div>
            <ValidationError :validationError="createCourseErrors?.video"/>


          </div>
          <div class="mb-3">
            <label for="exampleInputType" class="form-label">Тип курса</label>
            <select class="form-select" id="exampleInputType" v-model="type">
              <option value="individual">individual</option>
              <option value="group">Group</option>
            </select>
            <ValidationError :validationError="createCourseErrors?.type"/>
          </div>
          <div class="mb-3">
            <label for="exampleInputPrice" class="form-label">Цена</label>
            <input v-model="price" type="text" class="form-control" id="exampleInputPrice">
            <ValidationError v-if="createCourseErrors" :validationError="createCourseErrors.price"/>
          </div>
          <div class="position-relative">
            <button type="submit" :disabled="isLoading" class="btn btn-primary position-absalyute">Отправить
            </button>
          </div>
        </form>
      </div>
    </template>
  </modal>

  <modal :is-open="isAddCabinetFormModalOpen" title="Add Cabinet" @close="closeAddCabinetFormModal">
    <template v-slot:modal-body>
      <form @submit.prevent="submitHandlerCabinet">
        <div class="mb-3">
          <label for="exampleInputTeacher" class="form-label">Учитель</label>
          <select class="form-select" id="exampleInputTeacher" v-model="teacher_id">
            <option v-for="teacher in teachers?.results" :value="teacher?.id">{{ teacher?.first_name }}
              {{ teacher?.last_name }}
            </option>
          </select>
          <ValidationError v-if="cabinetError" :validationError="cabinetError.teacher_id"/>


        </div>
        <div class="mb-3">
          <label for="exampleInputTime" class="form-label">Время уроков</label>
          <input v-model="time" type="time" class="form-control" id="exampleInputTime">
          <ValidationError v-if="cabinetError" :validationError="cabinetError.time"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputStartDate" class="form-label">Дата старта</label>
          <input v-model="start_date" type="date" class="form-control" id="exampleInputStartDate">
          <ValidationError v-if="cabinetError" :validationError="cabinetError?.start_date"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputWeekDay" class="form-label">Дни недели</label>
          <ValidationError v-if="cabinetError" :validationError="cabinetError?.weekdays"/>
          <br>
          <input type="checkbox" class="form-check-input" id="Monday" value="0" v-model="weekDays">
          <label class="form-label" for="Monday">Понидельник</label>
          <br>
          <input type="checkbox" class="form-check-input" id="Tuesday" value="1" v-model="weekDays">
          <label class="form-label" for="Tuesday">Вторник</label>
          <br>

          <input type="checkbox" class="form-check-input" id="Wednesday" value="2" v-model="weekDays">
          <label class="form-label" for="Wednesday">Среда</label>
          <br>

          <input type="checkbox" class="form-check-input" id="Thursday" value="3" v-model="weekDays">
          <label class="form-label" for="Thursday">Четверг</label>
          <br>

          <input type="checkbox" class="form-check-input" id="Friday" value="4" v-model="weekDays">
          <label class="form-label" for="Friday">Пятница</label>
          <br>

          <input type="checkbox" class="form-check-input" id="Saturday" value="5" v-model="weekDays">
          <label class="form-label" for="Saturday">Суббота</label>
          <br>

          <input type="checkbox" class="form-check-input" id="Sunday" value="6" v-model="weekDays">
          <label class="form-label" for="Sunday">Воскресенье</label>

        </div>

        <button type="submit" :disabled="isLoading" class="btn btn-primary">Отправить</button>
      </form>
    </template>
    <template v-slot:modal-footer>

    </template>

  </modal>


  <div class="container">


        <button @click="openModal()" class="btn btn-primary mt-5 mb-3">Добавить курса</button>


    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Навык</th>
        <th scope="col">Название</th>
        <th scope="col">Описание</th>
        <th scope="col">Уровень</th>
        <th scope="col">Тип курса</th>
        <th scope="col">Цена</th>
        <th scope="col">Изменить</th>

      </tr>
      </thead>
      <tbody>
      <tr v-for="course in courses" :key="course.id">
        <th scope="row">{{ course.id }}</th>
        <td>{{ course?.skills[0] }}</td>
        <td>{{ course?.name }}</td>
        <td>{{ course?.description }}...</td>
        <td>{{ course?.level }}</td>
        <td>{{ course?.type }}</td>
        <td>{{ course?.price }}</td>
        <td>
          <div class="icon">
            <i @click="openEditModal(course?.id)" class="fa fa-pen-square"></i>
            <i @click="openDeleteModal(course?.id)" class="fa fa-trash"></i>
            <i v-if="!course?.has_cabinet" @click="openAddCabinetFormModal(course?.id)" class="fa fa-plus"></i>
          </div>
        </td>


      </tr>

      </tbody>

    </table>
  </div>

</template>


<style scoped>
.modal-cabinet .modal-button {
  position: relative;
  top: 10px;
  margin-bottom: 15px;

}

.icon i {
  margin-left: 10px;
  cursor: pointer;
}

.delete-button {
  margin-right: 10px;
}

.image_course_upload {
  width: 100%;
  height: 150px;
  border: 1px dashed #1A1A1A;
  border-radius: 12px;
}

.image_course_upload p {
  margin: 0;
}

.image_course_upload input::file-selector-button {
  font-weight: bold;
  padding: 0.5em;
  border: none;
  background: none;
  margin: 10px;
}

.image_course_upload input:hover,
.image_course_upload input::file-selector-button:hover {
  color: blue;
  cursor: pointer;
  border-radius: 12px;
  background: #eee;
}


.video_course_upload {
  width: 100%;
  height: 150px;
  border: 1px dashed #1A1A1A;
  border-radius: 12px;
}

.video_course_upload p {
  margin: 0;
}

.video_course_upload input::file-selector-button {
  font-weight: bold;
  padding: 0.5em;
  border: none;
  background: none;
  margin: 10px;
}

.video_course_upload input:hover,
.video_course_upload input::file-selector-button:hover {
  color: blue;
  cursor: pointer;
  border-radius: 12px;
  background: #eee;
}


</style>