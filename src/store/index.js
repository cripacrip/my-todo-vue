import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskText: '',
    // note: {
    //   title: '',
    //   todos: [],
    // },
    tasks: []
  },
  mutations: {
    ADD_TODO(state, taskText) {
      state.tasks.push(taskText)
      localStorage.setItem('todos', JSON.stringify(state.tasks))
    },
    EDIT_TODO(state) {
      const tasks = state.tasks.slice()
      const index = tasks.findIndex(item => item.id === tasks.id)
      tasks[index] = tasks
      state.tasks = tasks
      localStorage.setItem('todos', JSON.stringify(state.tasks))
    },
    DELETE_TODO(state, id) {
      state.note.todos = state.note.todos.filter((item)=> item.id !== id)
      localStorage.setItem('todos', JSON.stringify(state.note))
    },
    SET_ALL_TODO(state, payload) {
      state.tasks = payload
    }
  },
  actions: {
    CREATE_TODO({commit}, todos) {
      commit("ADD_TODO", todos)
    },
    GET_TODOS({commit}) {
      const arr = JSON.parse(localStorage.getItem("todos"))
      commit("SET_ALL_TODO", arr)
    },
    EDIT_TASK({commit}, tasks) {
      commit("EDIT_TODO", tasks)
    }
  },
  getters: {
    ALL_TODO(state) {
      if(!state.tasks.length) {
        return JSON.parse(localStorage.getItem("todos"))
      }
      return state.tasks
    },
  }
})
