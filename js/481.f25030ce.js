"use strict";(self.webpackChunkblogfront=self.webpackChunkblogfront||[]).push([[481],{1967:function(e,t){t.Z={timeFormat:function(e){return e=new Date(e),e.getFullYear()+`-${(e.getMonth()+1+"").padStart(2,"0")}-${(e.getDate()+"").padStart(2,"0")} ${(e.getHours()+"").padStart(2,"0")}:${(e.getMinutes()+"").padStart(2,"0")}:`+(e.getSeconds()+"").padStart(2,"0")}}},6819:function(e,t,a){a.r(t),a.d(t,{alert:function(){return r},fun:function(){return l}});var n=a(2181);const r=(e,t=0)=>{(0,n.xf)(e)},l={splice(e,t=30){return e?e.length>t?e.substring(0,t)+"...":e:null},alert:r}},5387:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(3396),r=a(7139);const l={class:"markdownTags"};t={name:"markdownTags",props:{tag:"",click:{type:Boolean,default:!0},size:{type:String,default:"normal"}},data(){return{href:""}},created(){this.href="#/read/readTag?tag1="+this.tag}};var i=(0,a(89).Z)(t,[["render",function(e,t,a,i,u,d){const o=(0,n.up)("ice-tag");var s=(0,n.up)("ice-link");return(0,n.wg)(),(0,n.iD)("div",l,[a.click?((0,n.wg)(),(0,n.j4)(s,{key:0,href:u.href,target:"_blank",underline:!1},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{size:a.size},{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(a.tag),1)])),_:1},8,["size"])])),_:1},8,["href"])):(0,n.kq)("",!0),a.click?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(o,{key:1},{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(a.tag),1)])),_:1}))])}]])},6284:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(3396),r=a(7139),l=a(4870),i=a(1967),u=a(2483);const d={class:"ice-column"},o={key:0,class:"ice-column"};t={__name:"IndexCard",props:{item:{},selectOperate:{type:String},showOperate:{type:Boolean,default:!1}},setup(e){const t=e,a=(0,l.iH)(""),s=1e3*Math.random(),m=(0,u.tv)();{var g=t.item.updatedAt;let e=new Date(g),n=new Date;e=new Date(e.getFullYear(),e.getMonth(),e.getDate()),n=new Date(n.getFullYear(),n.getMonth(),n.getDate()),g=(e.getTime()-n.getTime())/864e5,a.value=g}return t.item.updatedAt=i.Z.timeFormat(t.item.updatedAt)||"",(t,l)=>{const i=(0,n.up)("ice-title"),u=(0,n.up)("ice-button"),g=(0,n.up)("ice-tag"),c=(0,n.up)("ice-text"),w=(0,n.up)("ice-link");var f=(0,n.up)("ice-card");return(0,n.wg)(),(0,n.iD)("div",{class:"indexCard",ref:s},[(0,n.Wm)(f,{border:!1},{header:(0,n.w5)((()=>[(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(e.item.title),1)])),_:1}),(0,n.Wm)(u,{onClick:l[0]||(l[0]=t=>{var a=e.item.id;a=m.resolve({path:"/read",query:{id:a}}),window.open(a.href,"_blank")})},{default:(0,n.w5)((()=>[(0,n.Uk)("read")])),_:1})])),body:(0,n.w5)((()=>[(0,n._)("div",d,[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[e.item.description?((0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Uk)("描述")])),_:1}),(0,n._)("code",null,(0,r.zw)(e.item.description),1)])):(0,n.kq)("",!0)])),_:1}),e.item.view?((0,n.wg)(),(0,n.j4)(c,{key:0},{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Uk)("浏览量")])),_:1}),(0,n.Uk)(" "+(0,r.zw)(e.item.view),1)])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Uk)("更新时间")])),_:1}),(0,n.Uk)(" "+(0,r.zw)(e.item.updatedAt)+" - 最后修改于"+(0,r.zw)(a.value)+"天 ",1)])),_:1}),(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[e.item.tag1?((0,n.wg)(),(0,n.j4)(w,{key:0,tag:e.item.tag1,href:"#/read/readTag?tag1="+e.item.tag1},{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(e.item.tag1),1)])),_:1},8,["tag","href"])):(0,n.kq)("",!0),e.item.tag2?((0,n.wg)(),(0,n.j4)(w,{key:1,tag:e.item.tag2,href:"#/read/readTag?tag1="+e.item.tag2},{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(e.item.tag2),1)])),_:1},8,["tag","href"])):(0,n.kq)("",!0),e.item.tag3?((0,n.wg)(),(0,n.j4)(w,{key:2,tag:e.item.tag3,href:"#/read/readTag?tag1="+e.item.tag3},{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(e.item.tag3),1)])),_:1},8,["tag","href"])):(0,n.kq)("",!0)])),_:1})])])),_:1})])}}};var s=(0,a(89).Z)(t,[["__scopeId","data-v-1b67250e"]])},2481:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(3396),r=a(4870),l=a(1967),i=a(6819),u=a(2483),d=a(5434),o=a(1827),s=a(6284);const m=(0,n._)("div",{class:"indexCard"},null,-1),g=(0,n._)("div",{class:"indexCard"},null,-1),c=(0,n._)("div",{class:"indexCard"},null,-1);var w=a(9324),f=(t=a(5387),t={name:"Recommend",components:{IndexCard:s.Z,MarkdownTags:t.Z},data(){return{markdownList:""}},methods:{DateDiffer(e){let t=new Date(e),a=new Date;return t=new Date(t.getFullYear(),t.getMonth(),t.getDate()),a=new Date(a.getFullYear(),a.getMonth(),a.getDate()),(t.getTime()-a.getTime())/864e5},timeFormat(e){return l.Z.timeFormat(e)},dateData(e,t){return function(a,n){return a=a[e],n=n[e],t?Date.parse(a)-Date.parse(n):Date.parse(n)-Date.parse(a)}},getRecommendData(){w.ZP.$axios({url:"/markdownFile/getRecommend",method:"GET"}).then((e=>{this.markdownList=e.result,this.markdownList.sort(this.dateData("updatedAt",!1))})).catch((e=>{}))},goToRead(e){e=this.$router.resolve({path:"/read",query:{id:e}}),window.open(e.href,"_blank")}},created(){this.getRecommendData()}},a=a(89),(0,a.Z)(t,[["render",function(e,t,a,r,l,i){const u=(0,n.up)("ice-tag"),d=(0,n.up)("IndexCard"),o=(0,n.up)("ice-column"),s=(0,n.up)("ice-card");return(0,n.wg)(),(0,n.j4)(o,null,{default:(0,n.w5)((()=>[l.markdownList?((0,n.wg)(),(0,n.j4)(s,{key:0,border:!1},{header:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Uk)("文章推荐↓点击下面展开")])),_:1})])),bottom:(0,n.w5)((()=>[(0,n.Wm)(o,{width:"98%"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.markdownList,((e,t)=>((0,n.wg)(),(0,n.j4)(d,{key:t,item:e},null,8,["item"])))),128)),m,g,c])),_:1})])),_:1})):(0,n.kq)("",!0)])),_:1})}]]));t=e=>((0,n.dD)("data-v-25357aef"),e=e(),(0,n.Cn)(),e);const p={class:"index container"},k={class:"right"},h={class:"left m-r ice-row"},v={key:0,class:"btns m-b"},_=t((()=>(0,n._)("br",null,null,-1))),D=t((()=>(0,n._)("br",null,null,-1))),y=t((()=>(0,n._)("br",null,null,-1)));var b=(0,a.Z)({__name:"Index",setup(e){let t=(0,r.iH)([]),a=(0,r.iH)(0),l=(0,r.iH)(0);(0,u.tv)();const m=async(e=1)=>{e=l.value*e,await o.Z.postHomeData({id:e,limit:20}).then((e=>{0<e.result.length?(t.value=e.result,i.fun.alert(e.message)):i.fun.alert("前方是未知领域")})).catch((e=>{i.fun.alert(e)}))};return m(),(async()=>{var e=await d.Z.initCount();a.value=parseInt(e.result/20)+1})(),(0,n.YP)(t,((e,t)=>{e||m()})),(0,n.YP)(l,(e=>{e&&m(20)})),(e,i)=>{var u=(0,n.up)("ice-pagination");return(0,n.wg)(),(0,n.iD)("div",p,[(0,n._)("div",k,[(0,n.Wm)(f)]),(0,n._)("div",h,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,r.SU)(t),((e,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"card",key:t},[(0,n.Wm)(s.Z,{item:e},null,8,["item"])])))),128)),(0,r.SU)(t)?((0,n.wg)(),(0,n.iD)("div",v,[(0,n.Wm)(u,{modelValue:(0,r.SU)(l),"onUpdate:modelValue":i[0]||(i[0]=e=>(0,r.dq)(l)?l.value=e:l=e),total:(0,r.SU)(a),step:20},null,8,["modelValue","total"]),_,D,y])):(0,n.kq)("",!0)])])}}},[["__scopeId","data-v-25357aef"]])}}]);