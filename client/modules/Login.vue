<template>
  <transition name="modal">
    <div class="login-container" v-if="showLoginPabel">
      <div class="modal-mask">
        <div class="tiger-logo">
          <span>Monkeys</span>
          <span @click="showLoginPabel = false" class="close-button">x</span>
        </div>
        <form @submit.prevent="login()" class="form-container">
          <div>
            <Input class="data-input" v-model="userName" placeholder="请输入用户名"/>
          </div>
          <div v-if="isSubmit">
            <Input class="data-input" v-model="userMail" placeholder="请输入邮箱"/>
          </div>
          <div>
            <Input class="data-input" v-model="password" placeholder="请输入密码" type="password"/>
          </div>
          <div class="action-button">
            <Button type="success" class="btn" @click="submitAction">{{action}}</Button>
          </div>
          <div class="mode-change">
            <span @click="isSubmit = false" v-if="isSubmit">已有账户登录</span>
            <div v-if="!isSubmit" >
              <span @click="isSubmit = true">注册账户</span>
              <span>忘记密码</span>
            </div>
          </div>
          <div class="three-login" v-if="!isSubmit">
            <img src="../assets/icons/github.svg" />
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import Input from 'iview/src/components/input'
import Button from 'iview/src/components/button'
import * as axios from 'axios'
  export default {
    name: 'Login',
    data () {
      return {
        showLoginPabel: false,
        isSubmit: false,
        userName: '',
        userMail: '',
        password: ''
      }
    },
    computed: {
      userNameHolder () {
        return this.isSubmit ? '请输入用户名' : ''
      },
      action () {
        return this.isSubmit ? '注册' : '登录'
      }
    },
    mounted () {
      this.$root.$on('show-login-dialog', () => {
        this.showLoginPabel = true
        this.isSubmit = false
      })
      this.$root.$on('show-summit-dislog', () => {
        this.showLoginPabel = true
        this.isSubmit = true
      })
    },
    methods: {
      login () {
        let param = {
          username: this.userName,
          password: this.password
        }
        this.$store.dispatch('userLogin', param)
          .then(data => {
            console.log(data)
          })
      },
      submit () {
        let param = {
          username: this.userName,
          password: this.password,
          email: this.userMail
        }

        this.$store.dispatch('userRegister', param)
          .then(data => {
            console.log(data)
          })
      },
      submitAction () {
        if (this.isSubmit) {
          this.submit()
        } else (
          this.login()
        )
      }
    }
  }
</script>

<style scoped>
  .login-container {
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0px;
    top: 0px;
    z-index: 20;
    background: rgba(0, 0, 0, 0.4);
    transition: all .5s ease;
     & span {
       cursor: pointer;
     }
  }
  .modal-mask {
      width: 300px;
      background-color: #fff;
      border-radius: 3px;
    }

  .tiger-logo {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 10px auto;
  }
  .tiger-logo span {
    font-size: 24px;
    line-height: 2;
  }

  .close-button {
    position: absolute;
    top: -5px;
    right: 10px;
  }

  .data-input {
    width: 200px;
    height: 30px;
    margin-bottom: 20px;
  }

  .form-container {
    width: 200px;
    margin: 10px auto 0px;
    padding-bottom: 40px;
    & div {
      text-align: center;
    }
  }
  .action-button {
    margin-bottom: 20px;
  }

  .btn {
    width: 200px;
    background-color: var(--active-color);
    border-color: transparent;
    &:hover {
      background-color: var(--active-color);
      border-color: transparent;
    }
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .mode-change {
    color: var(--active-color);
    & div {
      /* width: 200px; */
      display: flex;
      justify-content: space-between;
    }
    & span {
      font-size: 14px;
    }
  }

  .three-login {
    margin: 20px auto 0px;
    padding-top: 10px;
    border-top: 1px solid var(--active-color);
    & img {
      cursor: pointer;
      width: 20px;
      height: 20px;
    }
  }
</style>
