<template>
 <Layout @keydown.esc="onEscape" />
</template>

<script>
import Layout from '@/components/Layout.vue'
import types from '@/store/types.js'

export default {
  name: 'App',
  components: {
    Layout
  },
  methods: {
    onEscape() {
      this.$store.dispatch(types.ACTIONS.CLOSE_MODAL)
    }
  }
}
</script>

<style>

body, html {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}

#app {
  width: 100%;
  height: 100%;
}

*::-webkit-scrollbar {
  width: 12px;
}
*::-webkit-scrollbar-track {
  background: white;
}
*::-webkit-scrollbar-thumb {
  background-color: lightgray;
  border-radius: 20px;
  border: 3px solid white;
}

</style>
