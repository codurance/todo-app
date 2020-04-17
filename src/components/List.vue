<template>
  <ul>
    <li
      is="Item"
      v-for="todo in todos"
      :key="todo.title"
      :todo="todo"
    >
    </li>
  </ul>
</template>

<script>
import Item from '@/components/Item.vue'

export default {
  name: 'List',
  components: {
    Item
  },
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