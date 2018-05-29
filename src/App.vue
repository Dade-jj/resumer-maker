<template>
  <div id="app" :class="{previewMode: preivewMode}">
    <header>
      <resumer-header @preview="preview"></resumer-header>
    </header>
    <main>
      <resumer-editor :resume="resume"></resumer-editor>
      <resumer-preview :resume="resume"></resumer-preview>
    </main>
    <el-button type="success" @click="exitPreview" id="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
import ResumerHeader from './components/ResumerHeader'
import ResumerEditor from './components/ResumerEditor'
import ResumerPreview from './components/ResumerPreview'
import { mapState } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      preivewMode: false
    }
  },
  components: {
    ResumerHeader, ResumerEditor, ResumerPreview
  },
  methods: {
    preview () {
      this.preivewMode = true
    },
    exitPreview () {
      this.preivewMode = false
    }
  },
  computed: {
    ...mapState({
      resume: 'resume'
    })
  }
}
</script>

<style lang="scss" scope>
  body, html {
    height: 100%;
  }

  #app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  #app main {
    display: flex;
    flex: 1;
    height: 100%;
    min-width: 1024px;
    padding: 16px;
    background: #ddd;
    transition: all 3s;
  }

  #header {
    position: relative;
    min-width: 1024px;
    z-index: 1;
  }

  #editor {
    display: flex;
    height: 100%;
    width: 35%;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
  }

  #preview {
    flex: 1;
    overflow: auto;
    height: 100%;
    background: #fff;
    margin-left: 16px;
  }

  .previewMode header {
    display: none;
  }
  .previewMode #editor {
    display: none;
  }
  .previewMode #preview {
    max-width: 880px;
    margin: 0 auto;
  }

  #exitPreview {
    display: none;
  }

  .previewMode #exitPreview {
    display: inline-block;
    position: fixed;
    right: 16px;
    bottom: 16px;
  }
</style>
