<template>
  <div>
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
  @import './assets/style/index.css';
  .app {
    position: relative;
    overflow: hidden;

    & p {
      color: inherit;
    }
  }
</style>
