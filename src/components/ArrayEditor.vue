<template>
  <div>
    <h2>{{title}}</h2>
    <el-form>
      <div v-for="(item, index) of list" :key="index" class="container">
        <div v-if="list.length > 1" class="icon-wrapper" @click="close(index)">
          <svg class="icon" aria-hidden="true">
            <use v-bind:xlink:href="`#icon-close`"></use>
          </svg>
        </div>
        <el-form-item :label="labels[key] || key" v-for="(key, i) of keys" :key="i">
          <div class="pannel-input">
            <el-input :value="value" @inputr.native="print"/>
          </div>
        </el-form-item>
      </div>
    </el-form>
    <el-button type="success" class="button" @click="addItem" plain>新增</el-button>
  </div>
</template>

<script>
export default {
  name: 'ArrayEditor',
  props: {
    list: Array,
    labels: Object,
    title: String
  },
  computed: {
    keys () {
      return Object.keys(this.list[0])
    }
  },
  methods: {
    addItem () {
      const item = {}
      this.keys.map((key) => {
        item[key] = ''
      })
      this.list.push(item)
    },
    close (index) {
      this.list.splice(index, 1)
    },
    changeResumeField (path, value) {
      this.$store.commit('updateResume', {
        path,
        value
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
      margin-top: 8px;
    }
    .container {
      margin-top: 16px;
      .icon-wrapper {
        overflow: hidden;
        cursor: pointer;
        .icon{
          float: right;
          width: 24px;
          height: 24px;
          fill: #000;
        }
      }
    }
</style>
