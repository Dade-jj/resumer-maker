<template>
  <div id="header">
    <span class="title">VueResumer</span>
    <div class="actions">
      <div v-if="logined" class="user-actions">
        <span class="welcome">你好,{{user.username}}</span>
        <el-button class="button" @click.prevent="signOut">登出</el-button>
      </div>
      <div v-else class="user-actions">
        <el-button type="primary" href="#" class="button primary" @click.prevent="signUpDialogVisible = true">注册</el-button>
        <MyDialog title="注册" v-show="signUpDialogVisible" @close="signUpDialogVisible = false">
          <SignUpForm @success="login($event)"/>
        </MyDialog>
        <el-button class="button" @click.prevent="signInDialogVisible = true" href="#" >登录</el-button>
        <MyDialog title="登录" v-show="signInDialogVisible" @close="signInDialogVisible = false">
          <SignInForm @success="login($event)" />
        </MyDialog>
      </div>
      <el-button type="success" @click="handlePreview" class="preview">预览</el-button>
    </div>
  </div>
</template>

<script>
import MyDialog from './MyDialog'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import AV from '../lib/leancloud'

export default {
  name: 'ResumerHeader',
  data () {
    return {
      signUpDialogVisible: false,
      signInDialogVisible: false
    }
  },
  components: {
    MyDialog, SignUpForm, SignInForm
  },
  methods: {
    handlePreview () {
      this.$emit('preview')
    },
    signOut () {
      AV.User.logOut()
      this.$store.commit('removeUser')
    },
    login (user) {
      this.signUpDialogVisible = false
      this.signInDialogVisible = false
      this.$store.commit('setUser', user)
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    logined () {
      return this.user.id
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 16px;
  box-shadow: 0 1px 4px #9093996b;
  .title {
    font-size: 24px;
    color: #000;
  }
  .actions {
    display: flex;
    .user-actions {
      margin-right: 2em;
      .welcome {
        margin-right: 3em;
      }
    }
  }

}
</style>
