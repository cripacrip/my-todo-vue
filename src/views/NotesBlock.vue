<template>
<div v-if="!id">
  <div class="notes-block">
    <h2>Create Note</h2>
    <hr>
    <div class="note-title">
      <div class="title">
        Note Title: 
      </div>
      <div class="title-item">
        <input 
          type="text"
          v-model="note.title"
          placeholder="Enter title"
        >
      <Button type="Approve" />
    </div>
  </div> 
    <div class="add-task">
      <input 
        v-model="taskText"
        @change="textChange"
        @keyup.enter="addTodo"
        type="text"
      >
      <button @click="addTodo">Add Todo</button>
    </div>
    <div 
      class="tasks"
      v-for="todo in note.todos"
      :key="todo.id"
    >
      <NotesItem :todo="todo" @delete="deleteItem" />
    </div>
    <button @click="save">Save</button>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Button from '@/components/Button.vue'
import { v4 as uuidv4 } from 'uuid'
import NotesItem from '@/components/NotesItem.vue'
export default {
  name: 'NotesBlock',
  components: {
    NotesItem,
    Button
  },
  props: {
    id: {
      type: String,
      default: '',
    },
    todo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      taskText: '',
      note: {
        title: '',
        todos: [],
      },
    }
  },
  created() {
    this.GET_TODOS()
  },
  methods: {
    ...mapActions([
      'CREATE_TODO',
      'GET_TODOS'
    ]),
    ...mapMutations([
      'DELETE_TODO',
    ]),
    textChange(e) {
      this.taskText = e.target.value;
    },
    addTodo() {
      let obj = {
        id: uuidv4(),
        text: this.taskText,
      }
      console.log(obj)
      this.note.todos.push(obj)
      this.taskText = '' 
    },
    deleteItem(id) {
      this.DELETE_TODO(id)
    },
    save() {
      this.note.id = uuidv4();
      this.CREATE_TODO(this.note)
      this.$router.push({name: 'Home'})
    }
  },
  computed: {
    ...mapGetters([
      'ALL_TODO',
    ]),
  }
}
</script>

<style scoped lang="scss">
.notes-block {
  margin: 0 auto;
}
.name-task {
  display: flex;
  justify-content: center;
  max-width: 250px;
  
  margin: 0 auto;
}
.tasks {
  max-width: 400px;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
  border: 1px solid #000;
  .text {
    padding: 5px;
  }
}
</style>
