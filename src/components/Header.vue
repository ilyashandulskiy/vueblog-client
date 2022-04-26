<template>
  <header class="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
    <div class="container-fluid d-flex align-items-center">
      <h1 class="d-flex align-items-center fs-4 text-white mb-0">
        <img class="logo" src="@/assets/images/vue.png" />
        {{lang.GENERAL.TITLE}}
      </h1>
    </div>
  </header>
</template>

<script>
import {lang} from '@/helpers/lang.js'

export default {
  name: 'Header',
  data() {
    return ({
      lang
    })
  }
}
</script>

<style scoped>

  .logo {
    width: 25px;
    margin: 0px 10px;
  }

</style>