<template>
  <div>
    <CustomInput 
      class="input" 
      :placeholder="lang.POST.AUTHOR_NAME" 
      v-model="author" 
    />
    <CustomArea 
      class="input" 
      :placeholder="lang.POST.POST_TEXT" 
      v-model="text" 
    />

    <Toast @close="onCloseError" v-if="error" :text="error"  />

    <button 
      @click="onPublish" 
      type="button" 
      class="btn btn-primary"
    >{{lang.POST.PUBLISH}}</button>

  </div>
</template>

<script>
import Toast from '@/components/ui/Toast.vue'
import * as post from '@/api/post.js'
import {lang} from '@/helpers/lang.js'
import types from '@/store/types.js'

export default {
  name: 'CreateForm',
  data() {
    return({
      author: '',
      text: '',
      error: false,
      lang
    })
  },

  components: {
    Toast
  },

  methods: {
    onCloseError() {
      this.error = false
    },
    async onPublish() {
      const data = await post.publish(
        this.author, 
        this.text
      )

      if(!data.fail) {
        this.$store.dispatch(types.ACTIONS.GET_DATA)
        this.$store.dispatch(types.ACTIONS.CLOSE_MODAL)

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