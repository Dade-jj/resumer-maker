<template>
  <div class="signInForm">
    <form @submit.prevent="signIn">
      <div class="row">
        <svg class="icon" aria-hidden="true">
          <use v-bind:xlink:href="`#icon-xingmingyonghumingnicheng`"></use>
        </svg>
        <input type="text" placeholder="用户名" v-model="formData.username">
      </div>
      <div class="row">
        <svg class="icon" aria-hidden="true">
          <use v-bind:xlink:href="`#icon-mima1`"></use>
        </svg>
        <input type="password" placeholder="密码" v-model="formData.password">
      </div>
      <div class="actions">
        <button type="submit">登陆</button>
        <span>{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>

<script>
import AV from '../lib/leancloud'
import getAVUser from '../lib/getAVUser'
import getErrorMessage from '../lib/getErrorMessage'

export default {
  name: 'SignInForm',
  data () {
    return {
      errorMessage: '',
      formData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      let {username, password} = this.formData
      AV.User.logIn(username, password).then(() => {
        this.$emit('success', getAVUser())
      }, (error) => {
        this.errorMessage = getErrorMessage(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .signInForm {
    div {
      margin-top: 12px;
      line-height: 32px;
    }
    .row {
      position: relative;
      text-align: center;
      .icon {
        position: absolute;
        left: 8px;
        top: 13px;
        font: normal normal normal 14px/1 FontAwesome;
        width: 16px;
        height: 16px;
      }
      input {
        width: 100%;
        padding: 10px 10px 10px 28px;
      }
    }
    .actions {
      margin-top: 8px;
      button {
        padding: 6px 10px;
        border: none;
        background: #fff;
        box-shadow: 0px 0px 2px rgba(0,0,0,0.4);
      }
    }
  }
</style>
