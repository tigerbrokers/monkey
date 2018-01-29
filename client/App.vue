<template>
  <div class="app">

    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'App'
  }
</script>
<style>
  .app {
    position: relative;
    overflow: hidden;

    & p {
      color: inherit;
    }
  }
</style>
