<template>
  <ul class="pagination pagination-lg flex-wrap">
    <li class="page-item" :class="{disabled : isFirstPage}">
      <a  
        @click="first" 
        class="page-link" 
        href="#" 
        tabindex="-1"
      >{{lang.PAGINATION.START}}</a>
    </li>
    <li 
      @click="prev" 
      v-if="!isFirstPage" 
      class="page-item"
    >
      <a class="page-link" href="#">{{page-1}}</a>
    </li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">{{page}}</a>
    </li>
    <li 
      @click="next" 
      v-if="!isLastPage" 
      class="page-item"
    >
      <a class="page-link" href="#">{{page+1}}</a>
    </li>
    <li class="page-item" :class="{disabled : isLastPage}">
      <a 
        @click="last" 
        class="page-link" 
        href="#"
      >{{lang.PAGINATION.END}}</a>
    </li>
  </ul>
</template>

<script>
import {lang} from '@/helpers/lang.js'
import types from '@/store/types.js'

export default ({
  name: 'PageCounter',
  data() {
    return ({
      lang
    })
  },
  computed: {
    page() {
      return this.$store.state.page
    },
    pages() {
      return this.$store.state.pages
    },
    isFirstPage(state){
      return state.page === 1
    },
    isLastPage(state){
      return state.page === state.pages
    },
  },
  methods: {
    next() {
      this.$store.dispatch(types.ACTIONS.NEXT_PAGE)
    },
    prev() {
      this.$store.dispatch(types.ACTIONS.PREV_PAGE)
    },
    first() {
      this.$store.dispatch(types.ACTIONS.FIRST_PAGE)
    },
    last() {
      this.$store.dispatch(types.ACTIONS.LAST_PAGE)
    }
  }
})
</script>

<style scoped>

  .pagination {
    margin-top:10px;
  }

</style>