<template>
  <div class="item-text">
    <!-- <p class="text">{{ todo.text }}</p> -->
    <input type="text" class="text-input" v-model="todo.text">
      <div class="buttons">
      <button>Approve</button>
      <button>Edit</button>
      <button @click="deleteItem(todo.id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotesItem',
  props: {
    todo: {}
  },
  methods: {
    deleteItem(id) {
      this.$emit('delete', id)
    },
  }
}
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  padding: 0;
}
input {outline: 0 !important;}
.item-text {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .text-input {
    border: none;
    &:focus {
      border: none;
    }
  }
}
.text {
  padding: 5px;
}
</style>