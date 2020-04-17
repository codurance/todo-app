<template>
  <li :class="todo.done ? 'done' : 'pending'">
    <input
      type="checkbox"
      v-model="todo.done"
    />
    {{ todo.title }}
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: {
    todo: Object
  }
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
  color: gray;
}
li {
  list-style: none;
  margin: 0;
  line-height: 1.4em;
  border: 1px solid #999;
  padding: 16px;
}
</style>
