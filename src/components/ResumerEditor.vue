<template>
  <div id="editor">
    <nav>
      <ul>
        <li v-for="(item, index) of resume.config" :class="{active: item.field == selected}" :key="index" @click="selected = item.field">
          <svg class="icon" aria-hidden="true">
            <use v-bind:xlink:href="`#icon-${resume.config[index].icon}`"></use>
          </svg>
        </li>
      </ul>
    </nav>
    <ul class="pannels">
      <li v-for="(item, index) in resume.config" v-show="item.field === selected" :key="index">
        <div v-if="isArray(resume[item.field])">
          <div class="subitem" v-for="(subitem, i) in resume[item.field]" :key="i">
            <div v-if="resume[item.field].length > 1" class="icon-wrapper" @click="removeItem(item, i)">
              <svg class="icon" aria-hidden="true">
                <use v-bind:xlink:href="`#icon-close`"></use>
              </svg>
            </div>
            <div class="resumeField" v-for="(value, key, index) in subitem" :key="index">
              <label>{{key}}</label>
              <input type="text" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`, $event.target.value)">
            </div>
            <hr>
          </div>
          <el-button type="success" class="button" @click="addItem(item)" plain>新增</el-button>
        </div>
        <div v-else class="resumeField" v-for="(value, key) in resume[item.field]" :key="key">
          <label>{{key}}</label>
          <input type="text" :value="value" @input="changeResumeField(`${item.field}.${key}`, $event.target.value)">
        </div>
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
  computed: {
    selected: {
      set (value) {
        this.$store.commit('switchTab', value)
      },
      get () {
        return this.$store.state.selected
      }
    },
    resume () {
      return this.$store.state.resume
    }
  },
  methods: {
    isArray (item) {
      if (Array.isArray(item)) {
        return true
      }
      return false
    },
    changeResumeField (path, value) {
      this.$store.commit('updateResume', {
        path,
        value
      })
    },
    addItem (item) {
      const object = {}
      Object.keys(this.resume[item.field][0]).map((key) => {
        object[key] = ''
      })
      this.$store.commit('addItem', {
        item,
        object
      })
    },
    removeItem (item, index) {
      this.$store.commit('removeItem', {
        item,
        index
      })
    }
  }
}
</script>

<style scoped lang="scss">
#editor {
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  nav {
    width: 80px;
    background: black;
    color: white;
    ul {
      li {
        height: 48px;
        display: flex;
        justify-content: center;
        margin-top: 16px;
        margin-bottom: 16px;
        padding: 12px 0;
        &.active {
          background: white;
            svg.icon {
              fill: #000;
            }
        }
      }
    }
  }
  .pannels {
    overflow: auto;
    flex-grow: 1;
    li {
      padding: 24px;
      .icon-wrapper .icon{
        float: right;
        fill: #000;
      }
    }
  }
  svg.icon {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
}
.resumeField {
  label {
    display: block;
  }
  input[type=text] {
    margin: 16px 0;
    border: 1px solid #ddd;
    box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 40px;
    padding: 0 8px;
  }
}
hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 24px 0;
}
</style>
