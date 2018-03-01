<template>
  <div class="user-account">
    <div v-if="isGuest">
      <a @click="login">登录 | </a>
      <a @click="submit">注册</a>
    </div>
    <div v-else>
      <a>{{userName}}</a>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'Account',
    computed: {
      ...mapGetters(['isGuest']),
      userName () {
        let identity = this.$store.state.account.identity
        return identity && identity.username
      }
    },
    methods: {
      login () {
        this.$root.$emit('show-login-dialog')
      },
      submit () {
        this.$root.$emit('show-summit-dislog')
      }
    }
  }
</script>

<style>
  .user-account {
    margin: 0px 0px 0px 20px;
    & a {
      font-size: 18px;
    }
  }
</style>
