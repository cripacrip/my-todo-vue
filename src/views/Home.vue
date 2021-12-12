<template>
  <div class="home">
    <router-link :to="{ name: 'NoteBlockCreate' }">
      <button>
        + Create Note
      </button>
    </router-link>
    <div class="home-list">
      <MiniNotes v-for="todo in ALL_TODO" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>

<script>
import MiniNotes from '@/components/MiniNotes.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    MiniNotes,
  },
  computed: {
    ...mapGetters(['ALL_TODO'])
  }
}
</script>
