<template>
  <div>
    <div class="title">
      Note Title: 
    </div>
    <div class="title-item">
      <input 
        type="text"
        v-model="notesTitle"
        placeholder="Enter title"
      >
      <Button type="Approve" />
    </div>
  </div>  
</template>

<script>
  import Button from "@/components/Button.vue"
  // import { mapGetters, mapActions } from 'vuex'
  export default {
    name: "NoteTitle",
    components: {
      Button,
    },
    props: {
      notesTitle: String
    },
    data() {
      return {
        editable: true
      }
    },
    // methods: {
    //   ...mapActions(['SET_TITLE']),
    //   setEditFalse() {
    //     this.editable = false
    //   }
    // },
    // computed: {
    //   ...mapGetters(['ALL_TODO'])
    // }
  }
</script>