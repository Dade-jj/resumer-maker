<template>
  <div id="preview">
    <div class="line">
      <h2>{{resume.profile.name || '请填写名称'}}</h2>
      <p>{{resume.profile.city}} | {{resume.profile.birthday}}</p>
    </div>
    <section data-name="projects" class="line" v-show="resume.studyHistory">
      <h2>项目经历</h2>
      <ol>
        <li v-for="(item, index) in resume.projects" :key="index">
          <h3>{{item.name}}</h3>
          <p v-show="item.content">{{item.content}}</p>
        </li>
      </ol>
    </section>
    <section data-name="workHistory" class="line" v-show="resume.workHistory">
      <h2>工作经历</h2>
      <ol>
        <li v-for="(item, index) in resume.workHistory" :key="index">
          <h3>{{item.company}}</h3>
          <p v-show="item.content">{{item.content}}</p>
        </li>
      </ol>
    </section>

    <section data-name="education" class="line" v-show="resume.studyHistory">
      <h2>毕业院校</h2>
      <ol>
        <li v-for="(item, index) in resume.studyHistory" :key="index">
          <h3>{{item.school}}
            <span v-show="item.content"> - {{item.content}}</span>
          </h3>
        </li>
      </ol>
    </section>

    <section data-name="awards" class="line" v-show="resume.awardtHistory">
      <h2>获奖情况</h2>
      <ol>
        <li v-for="(item, index) in resume.awardtHistory" :key="index">
          <h3>{{item.name}}</h3>
          <p v-show="item.content">{{item.content}}</p>
        </li>
      </ol>
    </section>

    <section data-name="contacts" class="line" v-show="resume.contacts">
      <h2>联系方式</h2>
      <ol>
        <li v-for="(item, index) in resume.contacts" :key="index">
          <h3>{{item.contact}}</h3>
          <p v-show="item.content">{{item.content}}</p>
        </li>
      </ol>
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
    line-height: 32px;
    padding: 16px;
    .line {
      margin: 16px 0;
      border-bottom: 1px solid #ccc;
    }
  }
</style>
