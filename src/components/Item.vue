<template>
  <li>
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