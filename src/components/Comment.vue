<template>
  <div>
    <h6>{{author}}</h6>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: ['author', 'text']
}
</script>