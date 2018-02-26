<template>
  <header>
    <div class="logo">
      <a href="/index">
        <img src="../assets/icons/monkey.svg" />
      </a>
    </div>
    <ul class="nav-bar">
      <li v-for="menu in navList">
        <router-link :to="menu.path">
          <span> {{ menu.name }} </span>
        </router-link>
      </li>
    </ul>
    <Input class="search-input" v-model="value" placeholder="搜索" icon="ios-search"/>
  </header>
</template>
<script>
import Input from 'iview/src/components/input'

const navList = [
  {name: '首页', path: 'index'},
  {name: '资讯', path: 'news'},
  {name: '工具', path: 'tools'},
  {name: '资源', path: 'resource'},
  {name: '项目', path: 'project'},
  {name: '关于我们', path: 'aboutUs'}
]
export default {
  name: 'Header',
  data () {
    return {
      single: false,
      navList: navList,
      value: ''
    }
  }
}
</script>

<style scoped>
  header {
    height: 60px;
    line-height: 60px;
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
    transform: translate(0, 10px);
  }
  ul li {
    width: 80px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }
  .nav-bar {
    display: flex;
    margin-left: 80px;
  }
  .nav-bar a {
    color: #6c727b
  }
  .nav-bar a.router-link-active {
    color: #0071FF;
  }
  .search-input {
    display: flex;
    align-items: center;
    width: 170px;
    margin-left: 110px;
  }
  .search-input .ivu-input {
    border-radius: 0;
  }
</style>
