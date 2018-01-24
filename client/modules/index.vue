<template>
  <div>
    <Header></Header>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './Header'
export default {
  name:'index',
  components: {
    Header
  }
}
</script>

<style scoped>

</style>
