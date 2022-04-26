<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{author}}</h5>
      <p class="card-text">{{text}}</p>
    </div>
    <div class="card-footer text-muted">
      <p>{{createdDate}}</p>
      <div class="buttons">
        <button 
          @click="onComment" 
          class="btn btn-outline-secondary btn-comment"
        >{{comments}} 💬</button>
        <button 
          @click="onLike" 
          class="btn btn-outline-danger btn-like"
        >{{currentLikes}} ❤</button>
      </div>
    </div>
  </div>
</template>

<script>
import * as post from '@/api/post.js'
import constants from '@/helpers/constants.js'
import {formatDate} from '@/helpers/formatDate.js'
import types from '@/store/types.js'

export default ({
  name: 'Post',
  props: ['author', 'text', 'timestamp', 'likes', 'id', 'comments'],
  data(){ 
    return ({
      currentLikes: this.likes
    })
  },
  computed: {
    createdDate: (state) => formatDate(state.timestamp * 1000)
  },
  methods: {
    async onLike() {
      this.currentLikes += 1;
      const newLikes = await post.like(this.id)
      this.currentLikes = newLikes;
    },
    onComment() {
      this.$store.dispatch(types.ACTIONS.SELECT_POST, this.id)
      this.$store.dispatch(types.ACTIONS.OPEN_MODAL, constants.MODAL_STATES.COMMENT_MODAL)
    }
  }
})
</script>

<style scoped>

  .card {
    transition-duration: 0.1s;
    max-width: 30%;
    min-width: 30%;
    margin: 10px;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn {
    font-weight: 600;
    opacity: 0.75;
  }

  .btn-like {
    margin-left: 10px;
  }

</style>