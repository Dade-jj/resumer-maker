<template>
  <div id="preview">
    <h2>{{resume.profile.name || '请填写名称'}}</h2>
    <p>{{resume.profile.city}} | {{resume.profile.age}}</p>
    <hr/>
    <section v-if="filter(resume.workHistory).length > 0">
      <h2>工作经历</h2>
      <ul>
        <li v-for="(work, index) of filter(resume.workHistory)" :key="index">
          {{work.company}}
          {{work.content}}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ResumerPreview',
  props: {
    resume: Object
  },
  methods: {
    filter (items) {
      return items.filter((item) => !this.isEmpty(item))
    },
    isEmpty (object) {
      let flag = true
      for (let key in object) {
        if (object[key]) {
          flag = false
          break
        }
      }
      return flag
    }
  }
}
</script>

<style lang="scss" scoped>
  #preview {
    padding: 16px;
  }
</style>
