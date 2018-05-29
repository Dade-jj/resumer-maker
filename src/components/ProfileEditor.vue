<template>
  <div>
    <h2>个人信息</h2>
    <el-form>
      <el-form-item label="姓名">
        <div class="pannel-input">
          <el-input v-model="profile.name"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="城市">
        <el-input v-model="profile.city"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="profile.birthday"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ProfileEditor',
  props: {
    profile: Object
  }
}
</script>
