<template>
  <div class="mini-note">
    <div class="mini-note-title">
      {{ todo.title }}
    </div>
    <div class="notes">
      <ul>
        <li v-for="item in todo.todos" :key="item.id">
          {{ item.text }}
        </li>
      </ul>
      <button @click="editNote(todo.id, todo)">Edit</button>
      <button>Delete</button>
    </div>
  </div>    
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'MiniNotes',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['EDIT_TASK']),
    editNote(id, todo) {
      this.$router.push({path: `/notes-block/${id}`, params: {todoID: todo.id, todoName: todo.todos}})
      console.log(todo);
    },
  }
}
</script>

<style lang="scss" scoped>
.mini-note {
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px;
}
</style>