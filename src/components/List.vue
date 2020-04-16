<template>
  <ul>
    <li v-for="todo in todos" :key="todo.title">
      {{ todo.title }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    todos: Array
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 0;
}
</style>