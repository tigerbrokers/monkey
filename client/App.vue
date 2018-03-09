<template>
  <div class="app">
    <Header></Header>
    <div class="content">
      <router-view></router-view>
    </div>
    <login></login>
  </div>
</template>

<script>
  import Header from './modules/Header'
  import Login from './modules/Login'
  export default {
    name: 'App',
    components: {
      Header,
      Login
    }
  }
</script>

<style>
  @import './assets/style/index.css';

  .app {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    & p {
      color: inherit;
    }
    & .content {
      width: 1000px;
      margin: 20px auto;
      background-color: #fff;
    }
  }
</style>
