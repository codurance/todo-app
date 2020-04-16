<template>
  <form
    @submit.prevent="addNewTodo"
    class="new-todo"
  >
    <label for="new-todo">Add a todo</label>
    <input
      id="new-todo"
      v-model="newTodoText"
      placeholder="E.g. Walk the dog"
    >
    <button>Add</button>
  </form>
</template>

<script>
export default {
  name: 'Add',
  data() {
    return {
      newTodoText: ''
    }
  },
  methods: {
    addNewTodo() {
      this.$emit('todoAdded', { title: this.newTodoText })
    }
  }
}
</script>

<style scoped>
.new-todo input,
.new-todo button {
  margin: 0;
  font-size: 24px;
  line-height: 1.4em;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
}
.new-todo label {
  margin: 0;
  line-height: 1.4em;
  display:block;
}
</style>