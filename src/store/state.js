export default {
  selected: 'profile',
  user: {
    id: '',
    username: ''
  },
  resume: {
    config: [
      { field: 'profile', icon: 'credentials_icon' },
      { field: 'workHistory', icon: 'work' },
      { field: 'studyHistory', icon: 'book' },
      { field: 'projects', icon: 'heart' },
      { field: 'awardtHistory', icon: 'cup' },
      { field: 'contacts', icon: 'phone' }
    ],
    profile: {
      name: 'dade',
      city: '大城市铁岭',
      title: '首席装逼师',
      birthday: '1990-01-01'
    },
    'workHistory':
      [{company: '鸡飞狗跳公司', content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
        我的主要工作如下:
        1. 完成既定产品需求。
        2. 修复 bug。`
      }],
    studyHistory: [
      { school: '黄志诚警官大学', content: '本科' }
    ],
    projects: [
      { name: 'project A', content: '文字' }
    ],
    awardtHistory: [
      { name: '再来十瓶', content: '连续十次获得「再来一瓶」奖励' }
    ],
    contacts: [
      { contact: 'phone', content: '13812345678' }
    ]
  }
}
