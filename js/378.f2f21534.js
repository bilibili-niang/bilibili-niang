"use strict";(self.webpackChunkblogfront=self.webpackChunkblogfront||[]).push([[378],{7378:function(e,l,a){a.r(l),a.d(l,{default:function(){return u}});var s=a(3396);const n={class:"register container"},t={class:"form"},o={class:"btns"};a(560);var r=a(9324),i=a(1120),u=(l={name:"Register",data(){return{login:{email:"demo@demo.com",username:"username",password:"password"}}},methods:{async submit(){this.login.username.length<1||this.login.password.length,await r.ZP.$axios({url:"/user/register/",method:"POST",data:this.login}).then((e=>{e.success&&(e=e.result||"",localStorage.setItem("userInfo",JSON.stringify(e)))})).catch((e=>{}))},getToken(){var e=JSON.parse(localStorage.getItem("userInfo"));JSON.stringify(e)},verifyLogin(){var e=this.$store.state.userInfo||"";JSON.stringify(e).length<10||i.Z.push({path:"/user"})}},created(){this.verifyLogin()}},(0,a(89).Z)(l,[["render",function(e,l,a,r,i,u){var d=(0,s.up)("el-input"),m=(0,s.up)("el-button");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",t,[(0,s.Wm)(d,{class:"m-b",modelValue:i.login.email,"onUpdate:modelValue":l[0]||(l[0]=e=>i.login.email=e),placeholder:"Please input email",clearable:""},null,8,["modelValue"]),(0,s.Wm)(d,{class:"m-b",modelValue:i.login.username,"onUpdate:modelValue":l[1]||(l[1]=e=>i.login.username=e),placeholder:"Please input username",clearable:""},null,8,["modelValue"]),(0,s.Wm)(d,{class:"m-b",modelValue:i.login.password,"onUpdate:modelValue":l[2]||(l[2]=e=>i.login.password=e),placeholder:"Please input pwd",clearable:""},null,8,["modelValue"]),(0,s._)("div",o,[(0,s.Wm)(m,{onClick:u.submit},{default:(0,s.w5)((()=>[(0,s.Uk)("submit")])),_:1},8,["onClick"]),(0,s.Wm)(m,{onClick:u.getToken},{default:(0,s.w5)((()=>[(0,s.Uk)("get")])),_:1},8,["onClick"])])])])}],["__scopeId","data-v-0bd7d076"]]))}}]);