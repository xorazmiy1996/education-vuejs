<script>
import {defineComponent} from 'vue'


export default defineComponent({
  name: "IndividualSpeakingDetail",


})
</script>

<template>
  <section>
    <div class="container mt-5">
      <div class="row">
        <div class="col-8">
          <div class="video_player">
            <video preload="auto">
              <source src="@/assets/image/Video.mp4" type="video/mp4">
            </video>
            <button class="tutor_profile_player_button">
              <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.47656 3.32618C1.47656 2.67874 1.47656 2.35502 1.61156 2.17657C1.72916 2.02111 1.90891 1.92491 2.1035 1.91329C2.32686 1.89995 2.5962 2.07952 3.13491 2.43866L10.1453 7.11224C10.5904 7.40897 10.813 7.55737 10.8905 7.74437C10.9584 7.9079 10.9584 8.09164 10.8905 8.25517C10.813 8.44217 10.5904 8.5905 10.1453 8.8873L3.13491 13.5608C2.5962 13.92 2.32686 14.0996 2.1035 14.0862C1.90891 14.0746 1.72916 13.9784 1.61156 13.823C1.47656 13.6445 1.47656 13.3208 1.47656 12.6734V3.32618Z"
                    fill="#383838" stroke="#383838" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="col-4">

          <div class="card">
            <div class="profile-avatar">
              <img src="@/assets/image/home_image/rasm2.png" class="card-img-top" alt="...">
            </div>

            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <div class="info"><span>Ish tajribasi </span></div>
              <div class="info"><span>Muloqat tili </span></div>
              <div class="info"><span>IELTS darajasi </span></div>
              <div class="contained-button">
                <button class="btn btn-primary">Darslarga qo'shilish</button>
              </div>


            </div>


          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.video_player {
  position: relative;
  width: 100%;
  height: 440px;
  margin-bottom: 20px;
  border-radius: 16px;
  overflow: hidden;
  background-color: #f2f4f7;
  object-fit: contain;
}

video {
  position: relative;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 1;

}

.tutor_profile_player_button {
  position: absolute;
  top: calc(50% - 36px);
  right: calc(50% - 36px);
  width: 78px;
  height: 78px;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, .43);
  background-color: #fff;
  background-clip: padding-box;
}

.col-4 .card {
  border: none;
}

.col-4 .profile-avatar {
  width: 139px;
  height: 139px;
}

.profile-avatar img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
}

.col-8 {
  padding: 0 40px 0 40px;
}

.col-4 {
  padding-left: 40px;
}

.col-4 .card-title {
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: -0.25px;
  margin: 0;
  padding: 0;
}

.info span {
  font-size: 15px;
  color: #717171;
}
.info{
  margin: 10px;
}
button{
  width: 360px;
  margin-top: 20px;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: .2px;
  font-weight: 600;
  height: 62px;
  align-items: center;
  background-color: #6828f1;;
}
</style>