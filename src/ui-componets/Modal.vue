<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal-container">
      <div class="modal-header">
        <h3 class="fs-4 ms-3">{{ title }}</h3>
        <button class="me-3 fs-4" @click="close"><span>X</span></button>
      </div>
      <div class="modal-body">
        <slot name="modal-body"></slot>
      </div>
      <div class="modal-footer">
        <slot name="modal-footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    title: String
  },
  methods: {
    close() {
      this.$emit('close')
    }
  },
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-container {
  background-color: #fff;
  max-width: 500px;
  min-width: 300px;
  border-radius: 12px;
}

.modal-header {
  button{
    color: #FFFFFF;
  };
  position: sticky;
  top: 0;
  border-radius: 12px 12px 0 0;
  z-index: 9999;

  background: hsla(230, 40%, 50%, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  color: #FFFFFF;
}
.modal-body{
  max-height: 80vh;
  overflow-y: auto;
  padding: 20px;
}



.modal-header button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0;
}
.modal-footer{
  padding: 5px;

  border-radius: 0 0 12px 12px;

}


</style>