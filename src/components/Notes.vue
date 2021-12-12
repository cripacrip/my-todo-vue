<template>
  <div class="notes">
    <div class="title">
      <!-- {{ ALL_TODO.title }} -->
    </div>
    <div class="todos" v-for="todo in ALL_TODO" :key="todo.id">
      {{ todo.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Notes',
  props: {
    note: Object
  },
  created() {
    console.log(this.note);
  },
  computed: {
    ...mapGetters(['ALL_TODO']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
