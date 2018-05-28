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

export default {
  name: 'App',
  data () {
    return {
      preivewMode: false,
      resume: {
        icons: ['credentials_icon', 'work', 'book', 'heart', 'cup', 'phone'],
        profile: {
          name: '',
          city: '',
          age: ''
        },
        workHistory: [{
          company: '',
          content: ''
        }],
        studyHistory: [{
          school: '',
          duration: '',
          degree: ''
        }],
        projects: [{
          name: '',
          content: ''
        }],
        awardtHistory: [{
          name: ''
        }],
        contact: {
          qq: '',
          weixin: '',
          email: '',
          phone: ''
        }
      }
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
  }
}
</script>

<style lang="scss">
  body, html {
    height: 100%;
  }

  #app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  header {
    min-width: 1024px;
  }

  #app main {
    display: flex;
    flex: 1;
    height: 100%;
    min-width: 1024px;
    padding: 16px;
    background: #ddd;
  }

  #header {
    position: relative;
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
