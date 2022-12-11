<template>
  <h1>Posts</h1>
  <ul>
    <li
        v-for="post in posts"
        :key="post.id">
      <RouterLink
          :to="{name: 'postsDetail', params: { id: post.id }}">
        {{ post.title }}
      </RouterLink>
      <p>{{ post.anons }}</p>
    </li>
  </ul>

</template>

<script setup>
import {ref} from 'vue';

const posts = ref([
    {
      id: 1,
      title: 'Post 1',
      anons: 'Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, corporis dicta dolor, eius fuga, id magnam nam obcaecati pariatur quia similique temporibus. Amet dolore ducimus eius ex numquam porro praesentium.'
    },
    {
      id: 2,
      title: 'Post 2',
      anons: 'Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, corporis dicta dolor, eius fuga, id magnam nam obcaecati pariatur quia similique temporibus. Amet dolore ducimus eius ex numquam porro praesentium.'
    },
    {
      id: 3,
      title: 'Post 3',
      anons: 'Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, corporis dicta dolor, eius fuga, id magnam nam obcaecati pariatur quia similique temporibus. Amet dolore ducimus eius ex numquam porro praesentium.'
    }
    ]
);

</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
ul li {
  margin-bottom: 15px;
}
</style>
