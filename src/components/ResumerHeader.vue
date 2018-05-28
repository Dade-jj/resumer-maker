<template>
  <div id="header">
    <i class="el-icon-document header-icon"></i>
    <div class="actions">
      <div class="user-actions">
        <span class="welcome">你好</span>
        <el-button class="button">登出</el-button>
      </div>
      <el-button type="success" class="save">保存</el-button>
      <el-button type="success" @click="handlePreview" class="preview">预览</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumerHeader',
  data () {
    return {
    }
  },
  methods: {
    handlePreview () {
      this.$emit('preview')
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
  .header-icon {
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
