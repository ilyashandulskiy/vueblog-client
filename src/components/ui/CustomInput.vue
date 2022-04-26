<template>
  <input 
    :value="modelValue" 
    @input="onInput" 
    class="form-control" 
    type="text" 
    :placeholder="placeholder" 
  />
</template>

<script>

export default ({
  name: 'CustomArea',
  props: ['modelValue', 'placeholder'],
  methods: {
    onInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
})
</script>