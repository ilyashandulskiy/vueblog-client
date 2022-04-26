<template>
  <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<script>
export default {
  name: "Spinner"
}
</script>

<style scoped>

 template, div {
   position: absolute;
   width: 100px;
   height: 100px;
   display: flex;
   justify-self: center;
   align-self: center;
   text-align: center;
 }

</style>