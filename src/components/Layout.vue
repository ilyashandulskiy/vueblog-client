<template>
  <div class="layout">
    <Header class="header"/>
    <div class="body">
      <List />
    </div>
    <div class="footer">
      <PageCounter />
    </div>
    <Modal />
  </div>
</template>

<script>
import List from '@/components/List.vue'
import PageCounter from '@/components/PageCounter.vue'
import Modal from '@/components/Modal.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Layout',
  components: {
    List,
    PageCounter,
    Modal,
    Header
  }
}
</script>

<style scoped>

  .layout {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
  }

  .header {
    display: flex;
    min-height: 50px;
    max-height: 50px;
    background-color: lightgray;
  }
  .body {
    display: flex;
    justify-self: stretch;
    overflow-y: auto;
  }
  .footer {
    display: flex;
    min-height: 75px;
    max-height: 75px;
    background-color: white;
    justify-content: center;
  }

</style>