<template>
  <p>
      Number of TODOs: {{ numberOfTodos }}
  </p>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    todos: Array
  },
  computed: {
    numberOfTodos: function() {
      return this.todos.length
    }
  }
}
</script>