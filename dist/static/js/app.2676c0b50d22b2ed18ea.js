webpackJsonp([1],{"/Zlj":function(e,t){},"6ps5":function(e,t){},AEbL:function(e,t){},CsFE:function(e,t){},Fqhg:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("uMhA"),s("tvR6"),s("NcP2"),s("AEbL");var n=s("7+uW"),i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"dialogWrapper"},[s("div",{staticClass:"dialog"},[s("header",{staticClass:"title"},[e._v(e._s(e.title)+"\n      "),s("span",{staticClass:"close",on:{click:e.close}},[e._v("X")])]),e._v(" "),s("div",{staticClass:"slotrapper"},[e._t("default")],2)])])},staticRenderFns:[]};var r=s("VU/8")({name:"MyDialog",props:["title","visible"],methods:{close:function(){this.$emit("close")}}},i,!1,function(e){s("6ps5")},"data-v-60d09986",null).exports,a=s("sUHJ"),o=s.n(a);o.a.init({appId:"b1tCUtditCluWdOKqbn1LScF-gzGzoHsz",appKey:"LW58pPUMCDO3iSOa5w63fuqQ"});var c=o.a,u={202:"用户名已被占用",210:"用户名和密码不匹配",211:"找不到该用户",217:"无效的用户名",unknown:"请求失败，请稍后再试"},l=function(e){var t=e.code;return u[t]||u.unknown},m=function(e){var t=e||c.User.current()||{attributes:{}},s=t.id,n=t.attributes.username;return{id:s||"",username:n||""}},v={name:"SignUpForm",data:function(){return{formData:{username:"",password:""},errorMessage:""}},created:function(){},methods:{signUp:function(){var e=this,t=this.formData,s=t.username,n=t.password,i=new c.User;i.setUsername(s),i.setPassword(n),i.signUp().then(function(){e.$emit("success",m())},function(t){e.errorMessage=l(t)})}}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"signUpForm"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.signUp(t)}}},[s("div",{staticClass:"row"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-xingmingyonghumingnicheng"}})]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.username,expression:"formData.username"}],attrs:{type:"text",placeholder:"用户名",required:""},domProps:{value:e.formData.username},on:{input:function(t){t.target.composing||e.$set(e.formData,"username",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"row"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-mima1"}})]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.formData.password},on:{input:function(t){t.target.composing||e.$set(e.formData,"password",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"actions"},[s("button",{attrs:{type:"submit"}},[e._v("注册")]),e._v(" "),s("span",{staticClass:"errorMessage"},[e._v(e._s(e.errorMessage))])])])])},staticRenderFns:[]};var p={name:"SignInForm",data:function(){return{errorMessage:"",formData:{username:"",password:""}}},methods:{signIn:function(){var e=this,t=this.formData,s=t.username,n=t.password;c.User.logIn(s,n).then(function(){e.$emit("success",m())},function(t){e.errorMessage=l(t)})}}},f={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"signInForm"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.signIn(t)}}},[s("div",{staticClass:"row"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-xingmingyonghumingnicheng"}})]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.username,expression:"formData.username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:e.formData.username},on:{input:function(t){t.target.composing||e.$set(e.formData,"username",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"row"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-mima1"}})]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.formData.password},on:{input:function(t){t.target.composing||e.$set(e.formData,"password",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"actions"},[s("button",{attrs:{type:"submit"}},[e._v("登陆")]),e._v(" "),s("span",[e._v(e._s(e.errorMessage))])])])])},staticRenderFns:[]};var h={name:"ResumerHeader",data:function(){return{signUpDialogVisible:!1,signInDialogVisible:!1}},components:{MyDialog:r,SignUpForm:s("VU/8")(v,d,!1,function(e){s("UTy3")},"data-v-4e75b83c",null).exports,SignInForm:s("VU/8")(p,f,!1,function(e){s("iVWb")},"data-v-2398bc2d",null).exports},methods:{handlePreview:function(){this.$emit("preview")},signOut:function(){c.User.logOut(),this.$store.commit("removeUser")},login:function(e){this.signUpDialogVisible=!1,this.signInDialogVisible=!1,this.$store.commit("setUser",e)}},computed:{user:function(){return this.$store.state.user},logined:function(){return this.user.id}}},_={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"header"}},[s("span",{staticClass:"title"},[e._v("VueResumer")]),e._v(" "),s("div",{staticClass:"actions"},[e.logined?s("div",{staticClass:"user-actions"},[s("span",{staticClass:"welcome"},[e._v("你好,"+e._s(e.user.username))]),e._v(" "),s("el-button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.signOut(t)}}},[e._v("登出")])],1):s("div",{staticClass:"user-actions"},[s("el-button",{staticClass:"button primary",attrs:{type:"primary",href:"#"},on:{click:function(t){t.preventDefault(),e.signUpDialogVisible=!0}}},[e._v("注册")]),e._v(" "),s("MyDialog",{directives:[{name:"show",rawName:"v-show",value:e.signUpDialogVisible,expression:"signUpDialogVisible"}],attrs:{title:"注册"},on:{close:function(t){e.signUpDialogVisible=!1}}},[s("SignUpForm",{on:{success:function(t){e.login(t)}}})],1),e._v(" "),s("el-button",{staticClass:"button",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.signInDialogVisible=!0}}},[e._v("登录")]),e._v(" "),s("MyDialog",{directives:[{name:"show",rawName:"v-show",value:e.signInDialogVisible,expression:"signInDialogVisible"}],attrs:{title:"登录"},on:{close:function(t){e.signInDialogVisible=!1}}},[s("SignInForm",{on:{success:function(t){e.login(t)}}})],1)],1),e._v(" "),s("el-button",{staticClass:"preview",attrs:{type:"success"},on:{click:e.handlePreview}},[e._v("预览")])],1)])},staticRenderFns:[]};var g=s("VU/8")(h,_,!1,function(e){s("/Zlj")},"data-v-fe061718",null).exports,w=s("fZjL"),y=s.n(w),b={name:"ProfileEditor",props:{profile:Object}},C={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v("个人信息")]),e._v(" "),s("el-form",[s("el-form-item",{attrs:{label:"姓名"}},[s("div",{staticClass:"pannel-input"},[s("el-input",{model:{value:e.profile.name,callback:function(t){e.$set(e.profile,"name",t)},expression:"profile.name"}})],1)]),e._v(" "),s("el-form-item",{attrs:{label:"城市"}},[s("el-input",{model:{value:e.profile.city,callback:function(t){e.$set(e.profile,"city",t)},expression:"profile.city"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"年龄"}},[s("el-input",{model:{value:e.profile.birthday,callback:function(t){e.$set(e.profile,"birthday",t)},expression:"profile.birthday"}})],1)],1)],1)},staticRenderFns:[]},x=s("VU/8")(b,C,!1,null,null,null).exports,k={name:"ArrayEditor",props:{list:Array,labels:Object,title:String},computed:{keys:function(){return y()(this.list[0])}},methods:{addItem:function(){var e={};this.keys.map(function(t){e[t]=""}),this.list.push(e)},close:function(e){this.list.splice(e,1)},changeResumeField:function(e,t){this.$store.commit("updateResume",{path:e,value:t})}}},D={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v(e._s(e.title))]),e._v(" "),s("el-form",e._l(e.list,function(t,n){return s("div",{key:n,staticClass:"container"},[e.list.length>1?s("div",{staticClass:"icon-wrapper",on:{click:function(t){e.close(n)}}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-close"}})])]):e._e(),e._v(" "),e._l(e.keys,function(t,n){return s("el-form-item",{key:n,attrs:{label:e.labels[t]||t}},[s("div",{staticClass:"pannel-input"},[s("el-input",{attrs:{value:e.value},nativeOn:{inputr:function(t){return e.print(t)}}})],1)])})],2)})),e._v(" "),s("el-button",{staticClass:"button",attrs:{type:"success",plain:""},on:{click:e.addItem}},[e._v("新增")])],1)},staticRenderFns:[]};var U={name:"ResumerEditor",data:function(){return{currentTab:0}},components:{ProfileEditor:x,ArrayEditor:s("VU/8")(k,D,!1,function(e){s("Fqhg")},"data-v-5e2aad3a",null).exports},computed:{selected:{set:function(e){this.$store.commit("switchTab",e)},get:function(){return this.$store.state.selected}},resume:function(){return this.$store.state.resume}},methods:{isArray:function(e){return!!Array.isArray(e)},changeResumeField:function(e,t){this.$store.commit("updateResume",{path:e,value:t})},addItem:function(e){var t={};y()(this.resume[e.field][0]).map(function(e){t[e]=""}),this.$store.commit("addItem",{item:e,object:t})},removeItem:function(e,t){this.$store.commit("removeItem",{item:e,index:t})}}},$={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"editor"}},[s("nav",[s("ul",e._l(e.resume.config,function(t,n){return s("li",{key:n,class:{active:t.field==e.selected},on:{click:function(s){e.selected=t.field}}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-"+e.resume.config[n].icon}})])])}))]),e._v(" "),s("ul",{staticClass:"pannels"},e._l(e.resume.config,function(t,n){return s("li",{directives:[{name:"show",rawName:"v-show",value:t.field===e.selected,expression:"item.field === selected"}],key:n},[e.isArray(e.resume[t.field])?s("div",[e._l(e.resume[t.field],function(n,i){return s("div",{key:i,staticClass:"subitem"},[e.resume[t.field].length>1?s("div",{staticClass:"icon-wrapper",on:{click:function(s){e.removeItem(t,i)}}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-close"}})])]):e._e(),e._v(" "),e._l(n,function(n,r,a){return s("div",{key:a,staticClass:"resumeField"},[s("label",[e._v(e._s(r))]),e._v(" "),s("input",{attrs:{type:"text"},domProps:{value:n},on:{input:function(s){e.changeResumeField(t.field+"."+i+"."+r,s.target.value)}}})])}),e._v(" "),s("hr")],2)}),e._v(" "),s("el-button",{staticClass:"button",attrs:{type:"success",plain:""},on:{click:function(s){e.addItem(t)}}},[e._v("新增")])],2):e._l(e.resume[t.field],function(n,i){return s("div",{key:i,staticClass:"resumeField"},[s("label",[e._v(e._s(i))]),e._v(" "),s("input",{attrs:{type:"text"},domProps:{value:n},on:{input:function(s){e.changeResumeField(t.field+"."+i,s.target.value)}}})])})],2)}))])},staticRenderFns:[]};var F={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"preview"}},[s("div",{staticClass:"line"},[s("h2",[e._v(e._s(e.resume.profile.name||"请填写名称"))]),e._v(" "),s("p",[e._v(e._s(e.resume.profile.city)+" | "+e._s(e.resume.profile.birthday))])]),e._v(" "),s("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.studyHistory,expression:"resume.studyHistory"}],staticClass:"line",attrs:{"data-name":"projects"}},[s("h2",[e._v("项目经历")]),e._v(" "),s("ol",e._l(e.resume.projects,function(t,n){return s("li",{key:n},[s("h3",[e._v(e._s(t.name))]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"item.content"}]},[e._v(e._s(t.content))])])}))]),e._v(" "),s("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.workHistory,expression:"resume.workHistory"}],staticClass:"line",attrs:{"data-name":"workHistory"}},[s("h2",[e._v("工作经历")]),e._v(" "),s("ol",e._l(e.resume.workHistory,function(t,n){return s("li",{key:n},[s("h3",[e._v(e._s(t.company))]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"item.content"}]},[e._v(e._s(t.content))])])}))]),e._v(" "),s("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.studyHistory,expression:"resume.studyHistory"}],staticClass:"line",attrs:{"data-name":"education"}},[s("h2",[e._v("毕业院校")]),e._v(" "),s("ol",e._l(e.resume.studyHistory,function(t,n){return s("li",{key:n},[s("h3",[e._v(e._s(t.school)+"\n          "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"item.content"}]},[e._v(" - "+e._s(t.content))])])])}))]),e._v(" "),s("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.awardtHistory,expression:"resume.awardtHistory"}],staticClass:"line",attrs:{"data-name":"awards"}},[s("h2",[e._v("获奖情况")]),e._v(" "),s("ol",e._l(e.resume.awardtHistory,function(t,n){return s("li",{key:n},[s("h3",[e._v(e._s(t.name))]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"item.content"}]},[e._v(e._s(t.content))])])}))]),e._v(" "),s("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.contacts,expression:"resume.contacts"}],staticClass:"line",attrs:{"data-name":"contacts"}},[s("h2",[e._v("联系方式")]),e._v(" "),s("ol",e._l(e.resume.contacts,function(t,n){return s("li",{key:n},[s("h3",[e._v(e._s(t.contact))]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"item.content"}]},[e._v(e._s(t.content))])])}))])])},staticRenderFns:[]};var I={name:"App",data:function(){return{preivewMode:!1}},components:{ResumerHeader:g,ResumerEditor:s("VU/8")(U,$,!1,function(e){s("gAmS")},"data-v-7959df1f",null).exports,ResumerPreview:s("VU/8")({name:"ResumerPreview",computed:{resume:function(){return this.$store.state.resume}},methods:{filter:function(e){var t=this;return e.filter(function(e){return!t.isEmpty(e)})},isEmpty:function(e){var t=!0;for(var s in e)if(e[s]){t=!1;break}return t}}},F,!1,function(e){s("lv0x")},"data-v-649bab00",null).exports},methods:{preview:function(){this.preivewMode=!0},exitPreview:function(){this.preivewMode=!1}},mounted:function(){var e=localStorage.getItem("state");e&&(e=JSON.parse(e)),this.$store.commit("initState",e),this.$store.commit("setUser",m())}},H={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:{previewMode:this.preivewMode},attrs:{id:"app"}},[t("header",[t("resumer-header",{on:{preview:this.preview}})],1),this._v(" "),t("main",[t("resumer-editor"),this._v(" "),t("resumer-preview")],1),this._v(" "),t("el-button",{attrs:{type:"success",id:"exitPreview"},on:{click:this.exitPreview}},[this._v("退出预览")])],1)},staticRenderFns:[]};var R=s("VU/8")(I,H,!1,function(e){s("CsFE")},null,null).exports,N=s("/ocq");n.default.use(N.a);var V=new N.a({routes:[{path:"/",name:"App",component:R}]}),E=s("zL8q"),M=s.n(E),P=s("NYxO"),S=s("mvHQ"),A=s.n(S),j=s("woOf"),O=s.n(j),X=s("SeUI"),q=s.n(X),L={initState:function(e,t){O()(e,t)},switchTab:function(e,t){e.selected=t,localStorage.setItem("state",A()(e))},updateResume:function(e,t){var s=t.path,n=t.value;q.a.set(e.resume,s,n),localStorage.setItem("state",A()(e))},setUser:function(e,t){O()(e.user,t)},removeUser:function(e){e.user.id=""},addItem:function(e,t){var s=t.item,n=t.object;e.resume[s.field].push(n)},removeItem:function(e,t){var s=t.item,n=t.index;e.resume[s.field].splice(n,1)}};n.default.use(P.a);var T=new P.a.Store({state:{selected:"profile",user:{id:"",username:""},resume:{config:[{field:"profile",icon:"credentials_icon"},{field:"workHistory",icon:"work"},{field:"studyHistory",icon:"book"},{field:"projects",icon:"heart"},{field:"awardtHistory",icon:"cup"},{field:"contacts",icon:"phone"}],profile:{name:"dade",city:"大城市铁岭",title:"首席装逼师",birthday:"1990-01-01"},workHistory:[{company:"鸡飞狗跳公司",content:"公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。\n        我的主要工作如下:\n        1. 完成既定产品需求。\n        2. 修复 bug。"}],studyHistory:[{school:"黄志诚警官大学",content:"本科"}],projects:[{name:"project A",content:"文字"}],awardtHistory:[{name:"再来十瓶",content:"连续十次获得「再来一瓶」奖励"}],contacts:[{contact:"phone",content:"13812345678"}]}},mutations:L});n.default.config.productionTip=!1,n.default.use(M.a),new n.default({el:"#app",router:V,store:T,components:{App:R},template:"<App/>"})},NcP2:function(e,t){},UTy3:function(e,t){},gAmS:function(e,t){},iVWb:function(e,t){},lv0x:function(e,t){},tvR6:function(e,t){},uMhA:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.2676c0b50d22b2ed18ea.js.map