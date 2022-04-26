<template>
  <div class="buttons">

    <button 
      v-for="filter in constants.FILTER_OPTIONS"
      :key="filter.sort"
      @click="() => onFilter(filter.sort)" 
      type="button" 
      class="btn"
      :class="{'btn-primary' : filter.sort === selectedSort}"
    >{{filter.title}}</button>

  </div>
</template>

<script>
import {lang} from '@/helpers/lang.js'
import constants from '@/helpers/constants.js'
import types from '@/store/types.js'

export default {
  name: 'Filter',
  data() {
    return({
      author: '',
      text: '',
      error: false,
      lang,
      constants
    })
  },
  computed: {
    selectedSort() {
      return this.$store.state.sort
    }
  },
  methods: {
    async onFilter(by) {
      this.$store.dispatch(types.ACTIONS.CLOSE_MODAL)
      this.$store.dispatch(types.ACTIONS.SORT, by)
    }
  }
}
</script>

<style scoped>

  .buttons {
    display: flex;
    flex-direction: row;
  }

  button {
    display: flex;
    flex: 1;
    margin: 0px 5px;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

</style>