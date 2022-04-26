<template>
  <div 
    class="list" 
    :style="{opacity: (isLoading ? 0.2 : 1)}"
  >
    <Post 
      :key="post._id"
      v-for="post in posts" 
      :text="post.text"  
      :author="post.author"
      :id="post._id"
      :timestamp="post.timestamp"
      :likes="post.likes"
      :comments="post.comments"
    />

    <Spinner v-if="isLoading" />

    <button 
      @click="onAddPost" 
      class="btn btn-lg btn-primary add-post-btn"
    >{{lang.POST.CREATE_POST}}</button>

    <button 
      @click="onFilter" 
      class="btn btn-lg btn-secondary filter-btn"
    >{{lang.POST.SORT}}</button>
    
  </div>
</template>

<script>
import Post from '@/components/Post.vue'
import Spinner from '@/components/Spinner.vue'
import constants from '@/helpers/constants.js'
import {lang} from '@/helpers/lang.js'
import types from '@/store/types.js'

export default ({
  name: 'List',
  components: {
    Post,
    Spinner
  },
  data() {
    return ({
      lang
    })
  },
  computed: {
    posts(){
      return this.$store.state.posts
    },
    isLoading() {
      return this.$store.state.isLoading
    }
  },
  methods: {
    onAddPost() {
      this.$store.dispatch(types.ACTIONS.OPEN_MODAL, constants.MODAL_STATES.CREATE_MODAL)
    },
    onFilter() {
      this.$store.dispatch(types.ACTIONS.OPEN_MODAL, constants.MODAL_STATES.FILTER_MODAL)
    }
  },
  mounted() {
    this.$store.dispatch(types.ACTIONS.FIRST_PAGE)
  },
})

</script>

<style scoped>

  .list {
    display: flex;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
    transition-duration: 0.3s;

  }

  .add-post-btn {
    position: fixed;
    left: 20px;
    bottom: 95px;
  }

  .filter-btn {
    position: fixed;
    left: 220px;
    bottom: 95px;
  }

</style>