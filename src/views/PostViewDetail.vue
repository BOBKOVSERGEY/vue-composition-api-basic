<template>
  <h1>Post detail {{ $route.params.id }} </h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, corporis dicta dolor, eius fuga, id magnam nam obcaecati pariatur quia similique temporibus. Amet dolore ducimus eius ex numquam porro praesentium.</p>
  <p>
    <RouterLink to="/posts">Back</RouterLink>
  </p>
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router';
const router = useRouter();
const route = useRoute();


defineProps({
  id: String
})
</script>
