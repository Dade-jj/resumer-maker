<template>
  <div class="dialogWrapper" v-show="visible">
    <div class="dialog">
      <header class="title">{{title}}
        <span class="close" @click="close">X</span>
      </header>
      <div class="slotrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyDialog',
  props: ['title', 'visible'],
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
    .dialogWrapper {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: hsla(0, 0%, 0%, 0.25);
    }
    .dialog {
      position: relative;
      width: 400px;
      padding: 16px;
      box-shadow: 0 3px 4px 5px rgba(0,0,0,0.2);
      background: white;
      .title {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .close:hover {
          cursor: pointer;
        }
      }
      .slotrapper {
        padding: 20px 40px;
      }
    }
</style>
