<template>
  <h1>Modals</h1>
  <button @keydown.esc="showModal = false" @click="showModal = true">Show model</button>
  <Modal
     title="My new Title (via prop)"
     @hideModal="showModal = false"
      v-if="showModal">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet culpa distinctio ducimus ea earum in itaque laborum nisi porro quae qui reiciendis repellat sequi, ullam ut voluptate voluptatum. Ipsam, similique?</p>
  </Modal>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue'

const showModal = ref(false);

</script>


