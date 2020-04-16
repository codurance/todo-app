<template>
  <section id="todoapp">
    <header>
      <h1>TODO app</h1>
    </header>
    <section class="main">
      <add @todoAdded="updateList" />
      <list :todos="todos" />
    </section>
      <footer>
        <counter :todos="todos" />
      </footer>
  </section>
</template>

<script>
import Counter from '@/components/Counter.vue'
import List from '@/components/List.vue'
import Add from '@/components/Add.vue'

export default {
  name: 'App',
  components: {
    Counter,
    List,
    Add
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    updateList(todo) {
      this.todos.push(todo)
    }
  }
}
</script>

<style>
body {
	font: 16px Helvetica, Arial, sans-serif;
	line-height: 1.4em;
	background: #f5f5f5;
	color: #4d4d4d;
	min-width: 230px;
	max-width: 550px;
	margin: 0 auto;
	font-weight: 300;
}
h1 {
	width: 100%;
	font-size: 100px;
	font-weight: 100;
	text-align: center;
	color: rgb(175, 47, 47);
}
</style>
