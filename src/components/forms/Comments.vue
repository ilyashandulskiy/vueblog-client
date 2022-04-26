<template>
  <div>
    <Comment 
      :key="comment._id" 
      v-for="comment in comments" 
      :text="comment.text" 
      :author="comment.author" 
    />
    <p v-if="!comments.length">{{lang.COMMENTS.EMPTY}}</p>

    <hr>
    
    <CustomInput 
      class="input" 
      :placeholder="lang.COMMENTS.AUTHOR_NAME"
      v-model="author" 
    />
    <CustomArea 
      class="input" 
      :placeholder="lang.COMMENTS.COMMENT_TEXT"
      v-model="text" 
    />

    <Toast @close="onCloseError" v-if="error" :text="error"  />

    <button 
      @click="onPublishComment" 
      type="button" 
      class="btn btn-primary"
    >{{lang.COMMENTS.PUBLISH}}</button>
    
  </div>
</template>

<script>
import Comment from '@/components/Comment.vue'
import Toast from '@/components/ui/Toast.vue'
import * as post from '@/api/post.js'
import {lang} from '@/helpers/lang.js'

export default {
  name: 'Comments',
  data() { 
    return ({
      comments: [],
      text: '',
      author: '',
      error: '',
      lang
    })
  },

  components: {
    Comment,
    Toast
  },

  async mounted() {
    const comments = await post.getComments(this.$store.state.selectedPost)
    this.comments = comments
  },
  
  methods: {
    onCloseError() {
      this.error = false
    },
    async onPublishComment() {
      const data = await post.comment(
        this.author, 
        this.text, 
        this.$store.state.selectedPost
      )

      if(!data.fail) {
        this.comments = data
        this.text = ''
        this.author = ''
      } else {
        this.error = data.message
      }
    }
  }
}
</script>

<style scoped>

  .input {
    margin-bottom: 10px;
  }

</style>