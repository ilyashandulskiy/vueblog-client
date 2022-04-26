<template>
  <div 
    class="modal fade" 
    :class="{show : isModalOpened}" 
    :style="{pointerEvents: isModalOpened ? 'all' : 'none', display: 'block'}" 
    tabindex="-1"  
    aria-modal="true" 
    role="dialog"
  >
    <div class="modal-dialog">
      <div 
        class="modal-content" 
        :style="{pointerEvents: isModalOpened ? 'all' : 'none'}"
      >
        <div class="modal-header">
          <h5 class="modal-title">{{titles[modal]}}</h5>
          <button 
            @click="onClose" 
            type="button" 
            class="btn-close" 
            data-bs-dismiss="modal" 
            aria-label="Close" 
          />
        </div>
        <div 
          class="modal-body" 
          :style="{pointerEvents: isModalOpened ? 'all' : 'none'}"
        >
          <CreatePost v-if="modal === states.CREATE_MODAL" />
          <Comments v-if="modal === states.COMMENT_MODAL" />
          <Filter v-if="modal === states.FILTER_MODAL" />
        </div>
      </div>
    </div>
    <div 
      @click.stop="onClose"
      class="modal-backdrop fade" 
      :class="{show : isModalOpened}" 
      :style="{pointerEvents: isModalOpened ? 'all' : 'none'}"
    />
  </div>
</template>

<script>
import CreatePost from '@/components/forms/CreatePost.vue'
import Comments from '@/components/forms/Comments.vue'
import Filter from '@/components/forms/Filter.vue'
import constants from '@/helpers/constants.js'
import {lang} from '@/helpers/lang.js'
import types from '@/store/types.js'

export default {
  name: 'Modal',
  components: {
    CreatePost,
    Comments,
    Filter
  },
  data() {
    return ({
      lang,
      states: constants.MODAL_STATES,
        titles : {
        CREATE_MODAL: lang.MODAL.CREATE_POST,
        FILTER_MODAL: lang.MODAL.FILTER,
        COMMENT_MODAL: lang.MODAL.COMMENT
      }
    })
  },
  computed: {
    isModalOpened(){
      return this.$store.state.isModalOpened
    },
    modal(){
      return this.$store.state.modal
    },
  },
  methods: {
    onClose() {
      this.$store.dispatch(types.ACTIONS.CLOSE_MODAL)
    }
  }
}
</script>

<style scoped>
 .modal-backdrop {
   z-index: -100;
 }
</style>