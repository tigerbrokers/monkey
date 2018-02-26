<template>
  <div class="app">
    <Header></Header>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './modules/Header'
  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style>
  @import './assets/style/index.css'
  .app {
    width: 100%;
    position: relative;
    overflow: hidden;
    & p {
      color: inherit;
    }
    .content {
      width: 1200px;
      margin: auto;
    }
  }
</style>
