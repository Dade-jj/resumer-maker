<template>
  <div id="editor">
    <nav>
      <ul>
        <li v-for="(item, index) of resume.config" :class="{active:currentTab == index}" :key="index" @click="currentTab = index">
          <svg class="icon" aria-hidden="true">
            <use v-bind:xlink:href="`#icon-${resume.config[index].icon}`"></use>
          </svg>
        </li>
      </ul>
    </nav>
    <ul class="pannels">
      <li :class="{active:currentTab == 0}">
        <profile-editor :profile="resume.profile"></profile-editor>
      </li>
      <li :class="{active:currentTab == 1}">
        <array-editor :list="resume.workHistory" title="工作经历" :labels="{company: '公司', content: '内容'}"></array-editor>
      </li>
      <li :class="{active:currentTab == 2}">
        <array-editor :list="resume.studyHistory" title="教育经历" :labels="{school: '学校', duration: '时间', degree: '学位'}"></array-editor>
      </li>
      <li :class="{active:currentTab == 3}">
        <array-editor :list="resume.projects" title="项目经历" :labels="{name: '项目名称', content: '项目内容'}"></array-editor>
      </li>
      <li :class="{active:currentTab == 4}">
        <array-editor :list="resume.awardtHistory" title="获奖经历" :labels="{name: '奖励详情'}"></array-editor>
      </li>
      <li :class="{active:currentTab == 5}">
        <array-editor :list="resume.contacts" title="联系方式" :labels="{contact: 'contact', content: ''}"></array-editor>
      </li>
    </ul>
  </div>
</template>

<script>
import ProfileEditor from './ProfileEditor'
import ArrayEditor from './ArrayEditor'

export default {
  name: 'ResumerEditor',
  data () {
    return {
      currentTab: 0
    }
  },
  components: {
    ProfileEditor, ArrayEditor
  },
  props: {
    resume: Object
  }
}
</script>

<style lang="scss" scoped>
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  nav {
    height: 100%;
    width: 16%;
    background: #000;
    ul > li {
      padding: 16px 0;
      text-align: center;
      .icon{
        width: 24px;
        height: 24px;
        fill: #fff;
      }
      &.active {
        background: #fff;
        > .icon {
          fill: #000;
        }
      }
    }
  }

  .pannels {
    overflow: auto;
    flex: 1;
  }
  .pannels li {
    display: none;
    padding: 32px;
    &.active {
      display: block;
    }
  }
</style>
