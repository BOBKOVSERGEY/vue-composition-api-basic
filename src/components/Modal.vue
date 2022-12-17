<template>
  <teleport to="body">
    <div
        class="modal">
      <h2>{{ title }}</h2>
      <slot/>
     <button
         @click="emit('hideModal')"
          class="close"
          >&times;</button>
    </div>
  </teleport>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'No title specified'
  }
})

const emit = defineEmits(['hideModal']);
</script>

<style scoped>
.modal {
  color: black;
  background-color: beige;
  padding: 15px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.modal .close {
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>
