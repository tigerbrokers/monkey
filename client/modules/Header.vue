<template>
  <header>
    <div class="logo">logo</div>
    <ul>
      <li class="cur">首页</li>
      <li>资讯</li>
      <li>工具</li>
      <li>资源</li>
      <li>关于我们</li>
      <li>项目</li>
    </ul>
    <div>
      <a>登录</a>
      <a>注册</a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  header {
    height: 80px;
    background: #fff;
    width: 1200px;
    margin: 0 auto;
    display: flex;
  }
  .logo {
    width: 40px;
    height: 40px;
    background: #ddd;
    text-align: center;
    line-height: 40px;
  }
  ul {
    display: flex;
  }
  ul li {

  }
</style>
