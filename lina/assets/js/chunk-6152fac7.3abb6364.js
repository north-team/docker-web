(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6152fac7"],{"0aff":function(e,t,s){"use strict";var i=s("c866"),a=s.n(i);a.a},1:function(e,t){},"3cc2":function(e,t,s){},4740:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("GenericDetailPage",e._g(e._b({attrs:{object:e.user,"active-menu":e.config.activeMenu},on:{"update:object":function(t){e.user=t},"update:activeMenu":function(t){return e.$set(e.config,"activeMenu",t)},"update:active-menu":function(t){return e.$set(e.config,"activeMenu",t)}}},"GenericDetailPage",e.config,!1),e.$listeners),[s("keep-alive",[s(e.config.activeMenu,{tag:"component",attrs:{object:e.user},on:{"update:activeMenu":e.handleUpdate}})],1)],1)},a=[],r=s("cd4a"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:14}},[s("DetailCard",{attrs:{items:e.detailCardItems}})],1),e._v(" "),s("el-col",{attrs:{span:10}},[s("QuickActions",{attrs:{type:"primary",title:this.$t("users.AuthSettings"),actions:e.authQuickActions}}),e._v(" "),s("QuickActions",{staticStyle:{"margin-top":"15px"},attrs:{type:"info",title:this.$t("users.MessageSubscription"),fa:"fa-info-circle",actions:e.messageSubscriptionQuickActions}})],1)],1),e._v(" "),s("Dialog",{attrs:{width:"50",top:"20vh",title:this.$t("common.PasswordConfirm"),visible:e.showPasswordDialog,"show-confirm":!1,"show-cancel":!1,"destroy-on-close":!0},on:{"update:visible":function(t){e.showPasswordDialog=t}}},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:4}},[s("div",{staticStyle:{"line-height":"34px","text-align":"center"}},[e._v(e._s(e.$t("assets.Password")))])]),e._v(" "),s("el-col",{attrs:{span:14}},[s("el-input",{attrs:{type:"password"},model:{value:e.passwordInput,callback:function(t){e.passwordInput=t},expression:"passwordInput"}}),e._v(" "),s("span",{staticClass:"help-tips help-block"},[e._v(e._s(e.$t("common.PasswordRequireForSecurity")))])],1),e._v(" "),s("el-col",{attrs:{span:4}},[s("el-button",{staticStyle:{"line-height":"20px"},attrs:{size:"mini",type:"primary"},on:{click:e.passConfirm}},[e._v(e._s(this.$t("common.Confirm")))])],1)],1)],1)],1)},n=[],c=(s("ac4d"),s("8a81"),s("ac6a"),s("7f7f"),s("57e7"),s("d92a"),s("b97b")),l=s("8c34"),u=s("9039"),d=s("cf45"),p={name:"ProfileInfo",components:{DetailCard:c["a"],QuickActions:l["a"],Dialog:u["a"]},props:{object:{type:Object,default:function(){}}},data:function(){return{url:"/api/v1/users/profile/",showPasswordDialog:!1,passwordInput:"",currentEdit:"",authQuickActions:[{title:this.$t("users.setWeCom"),attrs:{type:"primary",label:this.$store.state.users.profile.is_wecom_bound?this.$t("common.unbind"):this.$t("common.bind")},has:this.$store.getters.publicSettings.AUTH_WECOM,callbacks:{click:function(){this.currentEdit="wecom",this.showPasswordDialog=!0}.bind(this)}},{title:this.$t("users.setDingTalk"),attrs:{type:"primary",label:this.$store.state.users.profile.is_dingtalk_bound?this.$t("common.unbind"):this.$t("common.bind")},has:this.$store.getters.publicSettings.AUTH_DINGTALK,callbacks:{click:function(){this.currentEdit="dingtalk",this.showPasswordDialog=!0}.bind(this)}},{title:this.$t("users.setFeiShu"),attrs:{type:"primary",label:this.$store.state.users.profile.is_feishu_bound?this.$t("common.unbind"):this.$t("common.bind")},has:this.$store.getters.publicSettings.AUTH_FEISHU,callbacks:{click:function(){this.currentEdit="feishu",this.showPasswordDialog=!0}.bind(this)}},{title:this.$t("users.SetMFA"),attrs:{type:"primary",label:this.$t("common.Setting")},callbacks:{click:function(){window.location.href="/core/auth/profile/mfa/"}}},{title:this.$t("users.UpdatePassword"),attrs:{type:"primary",label:this.$t("common.Update"),disabled:"local"!==this.$store.state.users.profile.source},callbacks:{click:function(){this.$emit("update:activeMenu","PasswordUpdate")}.bind(this)}},{title:this.$t("users.UpdateSSHKey"),attrs:{type:"primary",label:this.$t("common.Update"),disabled:!this.$store.state.users.profile.can_public_key_auth},callbacks:{click:function(){this.$emit("update:activeMenu","SSHUpdate")}.bind(this)}},{title:this.$t("users.ResetPublicKeyAndDownload"),attrs:{type:"primary",label:this.$t("common.Reset"),disabled:!this.$store.state.users.profile.can_public_key_auth},callbacks:{click:function(){window.open("/core/auth/profile/pubkey/generate/","_blank")}}}],messageSubscriptionQuickActions:[{title:this.$t("notifications.SiteMessage"),type:"switcher",attrs:{disabled:!0,name:"site_msg",model:-1!==this.object.receive_backends.indexOf("site_msg")},callbacks:{change:this.updateUserReceiveBackends}},{title:this.$t("setting.Email"),type:"switcher",attrs:{name:"email",model:-1!==this.object.receive_backends.indexOf("email")},callbacks:{change:this.updateUserReceiveBackends}},{title:this.$t("setting.WeCom"),type:"switcher",attrs:{name:"wecom",model:-1!==this.object.receive_backends.indexOf("wecom")},has:this.$store.getters.publicSettings.AUTH_WECOM,callbacks:{change:this.updateUserReceiveBackends}},{title:this.$t("setting.DingTalk"),type:"switcher",attrs:{name:"dingtalk",model:-1!==this.object.receive_backends.indexOf("dingtalk")},has:this.$store.getters.publicSettings.AUTH_DINGTALK,callbacks:{change:this.updateUserReceiveBackends}},{title:this.$t("setting.FeiShu"),type:"switcher",attrs:{name:"feishu",model:-1!==this.object.receive_backends.indexOf("feishu")},has:this.$store.getters.publicSettings.AUTH_FEISHU,callbacks:{change:this.updateUserReceiveBackends}}]}},computed:{detailCardItems:function(){var e=this.$createElement;return[{value:this.object.username,key:this.$t("users.Username")},{value:this.object.name,key:this.$t("users.Name")},{value:this.object.role_display,key:this.$t("users.Role")},{value:this.object.email,key:this.$t("users.Email")},{value:"".concat(this.object.is_active),key:this.$t("users.IsActive")},{value:this.object,key:"SSHKey",formatter:function(t,s){var i=s.public_key_comment,a=s.public_key_hash_md5;return e("span",[i," ",e("br")," ",a])}},{value:this.object.mfa_level_display,key:this.$t("users.MfaLevel")},{value:this.object.source_display,key:this.$t("users.Source")},{value:Object(d["q"])(this.object.date_joined),key:this.$t("users.DateJoined")},{value:Object(d["q"])(this.object.last_login),key:this.$t("users.DateLastLogin")},{value:Object(d["q"])(this.object.date_password_last_updated),key:this.$t("users.DatePasswordLastUpdated")},{value:Object(d["q"])(this.object.date_expired),key:this.$t("users.DateExpired")},{value:this.object.groups_display,key:this.$t("users.UserGroups")},{value:this.object.comment,key:this.$t("users.Comment")}]}},methods:{updateUserReceiveBackends:function(e){var t=this;this.$axios.patch("/api/v1/notifications/user-msg-subscription/".concat(this.object.id,"/"),{receive_backends:this.getReceiveBackendList()}).then((function(e){t.$message.success(t.$t("common.updateSuccessMsg"))})).catch((function(e){t.$message.error(t.$t("common.updateErrorMsg "+e))}))},getReceiveBackendList:function(){var e=[],t=!0,s=!1,i=void 0;try{for(var a,r=this.messageSubscriptionQuickActions[Symbol.iterator]();!(t=(a=r.next()).done);t=!0){var o=a.value,n=o.attrs.name,c=o.attrs.model;c&&e.push(n)}}catch(l){s=!0,i=l}finally{try{t||null==r.return||r.return()}finally{if(s)throw i}}return e},passConfirm:function(){var e=this;this.$axios.post("/api/v1/authentication/password/verify/",{password:this.passwordInput}).then((function(t){e.object["is_".concat(e.currentEdit,"_bound")]?e.$axios.post("/api/v1/authentication/".concat(e.currentEdit,"/qr/unbind/")).then((function(t){e.$message.success(e.$t("common.updateSuccessMsg")),e.$store.dispatch("users/getProfile")})):window.location.href="/core/auth/".concat(e.currentEdit,"/qr/bind/?redirect_url=").concat(e.$route.fullPath)})),this.passwordInput="",this.showPasswordDialog=!1}}},h=p,m=s("2877"),f=Object(m["a"])(h,o,n,!1,null,"492ba670",null),b=f.exports,_=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("IBox",[s("GenericCreateUpdateForm",{attrs:{fields:e.fields,"fields-meta":e.fieldsMeta,initial:e.object,url:e.url,"submit-method":e.submitMethod}})],1)},$=[],g=s("768b"),w=s("d0aa"),y=s("2af9"),v={name:"ProfileUpdate",components:{GenericCreateUpdateForm:w["a"],IBox:y["h"]},props:{object:{type:Object,default:null}},data:function(){var e=this;return{url:"/api/v1/users/profile/",fields:[[this.$t("users.Account"),["username","name","email","org_ids"]],[this.$t("common.Other"),["phone"]]],fieldsMeta:{username:{disabled:!0},name:{disabled:!0},email:{disabled:!0},org_ids:{label:this.$t("users.Organization"),disabled:!0,component:y["k"],el:{multiple:!0,options:this.$store.state.users.profile.all_orgs},on:{changeOptions:function(t,s){var i=Object(g["a"])(t,1),a=i[0];console.log(a[0].value),e.fieldsMeta.assignees.el.ajax.url="/api/v1/tickets/tickets/request-asset-perm/assignees/?org_id=".concat(a[0].value)}}}}}},methods:{submitMethod:function(){return"patch"}}},k=v,S=Object(m["a"])(k,_,$,!1,null,"07774374",null),j=S.exports,U=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("IBox",[s("GenericCreateUpdateForm",{staticClass:"password-update",attrs:{fields:e.fields,"fields-meta":e.fieldsMeta,initial:e.object,url:e.url,"submit-method":e.submitMethod,"update-success-next-route":e.updateSuccessNextRoute}})],1)},P=[],M=s("2c41"),x=s("7541"),C={name:"PasswordUpdate",components:{GenericCreateUpdateForm:w["a"],IBox:y["h"]},props:{object:{type:Object,default:null}},data:function(){return{url:"/api/v1/users/profile/password/",fields:["old_password","new_password","new_password_again"],fieldsMeta:{old_password:{label:this.$t("users.OldPassword"),el:{type:"password"}},new_password:{label:this.$t("users.NewPassword"),rules:[x["c"].RequiredChange],component:M["a"]},new_password_again:{label:this.$t("users.ConfirmPassword"),el:{type:"password"}}},updateSuccessNextRoute:{path:"/"}}},methods:{submitMethod:function(){return"put"}}},O=C,A=(s("0aff"),Object(m["a"])(O,U,P,!1,null,"6b08ee84",null)),I=A.exports,D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("IBox",[s("GenericCreateUpdateForm",{ref:"GenericCreateUpdateForm",attrs:{fields:e.fields,"fields-meta":e.fieldsMeta,initial:e.object,url:e.url,"submit-method":e.submitMethod,"on-perform-success":e.onPerformSuccess}})],1)},F=[],E={name:"SecretKeyUpdate",components:{GenericCreateUpdateForm:w["a"],IBox:y["h"]},props:{object:{type:Object,default:null}},data:function(){return{url:"/api/v1/users/profile/secret-key/",fields:["new_secret_key","new_secret_key_again"],fieldsMeta:{new_secret_key:{label:this.$t("users.NewPassword"),el:{type:"password"}},new_secret_key_again:{label:this.$t("users.ConfirmPassword"),el:{type:"password"}}}}},methods:{submitMethod:function(){return"put"},onPerformSuccess:function(){this.$refs.GenericCreateUpdateForm.$refs.form.$refs.dataForm.resetForm("form"),this.$message.success(this.$t("common.updateSuccessMsg"))}}},H=E,B=(s("b55f"),Object(m["a"])(H,D,F,!1,null,"0648d444",null)),G=B.exports,R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("IBox",[s("GenericCreateUpdateForm",{ref:"GenericCreateUpdateForm",attrs:{fields:e.fields,"fields-meta":e.fieldsMeta,initial:e.object,url:e.url,"submit-method":e.submitMethod,"more-buttons":e.moreButtons,"on-perform-success":e.onPerformSuccess}})],1)},K=[],T={name:"SSHUpdate",components:{GenericCreateUpdateForm:w["a"],IBox:y["h"]},props:{object:{type:Object,default:null}},data:function(){return{url:"/api/v1/users/profile/public-key/",fields:[[this.$t("users.OldSSHKey"),["public_key_comment","public_key_hash_md5"]],[this.$t("users.UpdateSSHKey"),["public_key"]]],fieldsMeta:{public_key_comment:{label:this.$t("common.Name"),disabled:!0},public_key_hash_md5:{label:this.$t("users.FingerPrint"),disabled:!0},public_key:{el:{type:"textarea",placeholder:"ssh-rsa AAAA...",autosize:{minRows:3}},helpText:this.$t("users.HelpText.SSHKeyOfProfileSSHUpdatePage")}},moreButtons:[{title:this.$t("users.ResetAndDownloadSSHKey"),callback:function(){window.open("/core/auth/profile/pubkey/generate/","_blank")}}]}},methods:{submitMethod:function(){return"put"},onPerformSuccess:function(){this.$refs.GenericCreateUpdateForm.$refs.form.$refs.dataForm.resetForm("form"),this.$message.success(this.$t("common.updateSuccessMsg"))}}},q=T,L=Object(m["a"])(q,R,K,!1,null,"725365f4",null),Q=L.exports,N={components:{GenericDetailPage:r["e"],ProfileInfo:b,ProfileUpdate:j,PasswordUpdate:I,SecretKeyUpdate:G,SSHUpdate:Q},data:function(){return{user:{},config:{title:this.$t("users.Profile"),activeMenu:"ProfileInfo",submenu:this.getSubmenu(),hasRightSide:!1,actions:{detailApiUrl:"/api/v1/users/profile/"}}}},methods:{getSubmenu:function(){return[{title:this.$t("common.BasicInfo"),name:"ProfileInfo"},{title:this.$t("users.ProfileSetting"),name:"ProfileUpdate"},{title:this.$t("users.LoginPasswordSetting"),name:"PasswordUpdate",disabled:"local"!==this.$store.state.users.profile.source},{title:this.$t("users.SSHKeySetting"),name:"SSHUpdate",disabled:!this.$store.state.users.profile.can_public_key_auth},{title:this.$t("users.FileEncryptionPassword"),name:"SecretKeyUpdate"}]},handleUpdate:function(e){this.config.activeMenu=e}}},W=N,z=Object(m["a"])(W,i,a,!1,null,"304168b6",null);t["default"]=z.exports},"700e":function(e,t,s){},"82a0":function(e,t,s){"use strict";function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";window.open("/#/ops/celery/task/".concat(e,"/log/?type=").concat(t),"","width=900,height=600")}s.d(t,"a",(function(){return i}))},b55f:function(e,t,s){"use strict";var i=s("700e"),a=s.n(i);a.a},c0eb:function(e,t,s){"use strict";var i=s("1157"),a=s.n(i);window.$=a.a,window.jQuery=a.a,t["a"]=a.a},c866:function(e,t,s){}}]);