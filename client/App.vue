<template>
  <div class="app">
    <!-- <PRList></PRList> -->
    <router-view></router-view>
  </div>
</template>
<script>
  // import PRList from './prlist'
  export default {
    name: 'App'
  }
</script>
<style scoped>
  .app {
    position: relative;
    overflow: hidden;

    & p {
      color: inherit;
    }
  }
</style>
