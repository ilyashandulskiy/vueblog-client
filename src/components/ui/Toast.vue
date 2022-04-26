<template>
  <div 
    class="alert alert-danger alert-dismissible fade show" 
    role="alert"
  >
    {{text}}
    <button 
      @click="onClose" 
      type="button" 
      class="btn-close" 
      data-bs-dismiss="alert" 
      aria-label="Close" />
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: ['text'],
  methods: {
    onClose() {
      this.$emit('close')
    }
  }
}
</script>