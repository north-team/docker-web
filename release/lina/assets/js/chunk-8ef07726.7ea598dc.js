(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ef07726"],{"0218":function(t,e,s){"use strict";s.d(e,"a",(function(){return l})),s.d(e,"c",(function(){return r})),s.d(e,"b",(function(){return d})),s.d(e,"e",(function(){return p})),s.d(e,"d",(function(){return m}));var i,a,n=s("bd86"),o=s("0692"),c="notified",l="approved",r="rejected",d="closed",u="init",p=(i={},Object(n["a"])(i,c,{type:"success",title:o["a"].t("tickets.Pending")}),Object(n["a"])(i,l,{type:"primary",title:o["a"].t("tickets.Approved")}),Object(n["a"])(i,u,{type:"primary",title:o["a"].t("tickets.Initd")}),Object(n["a"])(i,r,{type:"danger",title:o["a"].t("tickets.Rejected")}),Object(n["a"])(i,d,{type:"info",title:o["a"].t("tickets.Closed")}),i),m=(a={},Object(n["a"])(a,c,{type:"success",title:o["a"].t("tickets.Pending")}),Object(n["a"])(a,l,{type:"primary",title:o["a"].t("tickets.Approved")}),Object(n["a"])(a,r,{type:"danger",title:o["a"].t("tickets.Rejected")}),Object(n["a"])(a,d,{type:"warning",title:o["a"].t("tickets.StateClosed")}),a)},"0797":function(t,e,s){},"15db":function(t,e,s){"use strict";var i=s("0797"),a=s.n(i);a.a},"46bc":function(t,e,s){},"8af7":function(t,e,s){"use strict";var i=s("9722"),a=s.n(i);a.a},9024:function(t,e,s){"use strict";var i=s("46bc"),a=s.n(i);a.a},9722:function(t,e,s){},"9cdc":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",[s("el-col",{attrs:{span:17}},[s("Details",{attrs:{"detail-card-items":t.detailCardItems,title:t.$t("common.BasicInfo")}}),t._v(" "),t.specialCardItems.length>0?s("Details",{attrs:{"detail-card-items":t.specialCardItems,title:t.$t("common.ApplyInfo")}}):t._e(),t._v(" "),"approved"===t.object.state&&t.assignedCardItems.length>0?s("Details",{attrs:{"detail-card-items":t.assignedCardItems,title:t.$t("tickets.AssignedInfo")}}):t._e(),t._v(" "),t._t("default",null,{id:"MoreDetails"}),t._v(" "),s("Comments",t._b({attrs:{object:t.object}},"Comments",t.$attrs,!1))],2),t._v(" "),s("el-col",{attrs:{span:6,offset:1}},[s("Steps",{attrs:{object:t.object}}),t._v(" "),s("Session",{attrs:{object:t.object}})],1)],1)},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("IBox",{staticClass:"box"},[s("div",{staticClass:"clearfix ibox-title",attrs:{slot:"header"},slot:"header"},[s("i",{staticClass:"fa fa-info-circle"}),t._v(" "+t._s(t.title)+"\n  ")]),t._v(" "),s("div",{staticClass:"content"},[s("el-row",{attrs:{gutter:10}},t._l(t.detailCardItems,(function(e){return s("el-col",{key:"card-"+e.key,attrs:{span:12}},[s("el-row",{staticClass:"item"},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"item-label",style:{"text-align":"align"}},[s("label",[t._v(t._s(e.key)+": ")])])]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"item-text"},[s("ItemValue",t._b({},"ItemValue",e,!1))],1)])],1)],1)})),1),t._v(" "),t.specialCardItems.length>0?s("el-divider"):t._e(),t._v(" "),s("el-row",{attrs:{gutter:10}},t._l(t.specialCardItems,(function(e){return s("el-col",{key:"card-"+e.key,attrs:{span:12}},[s("el-row",{staticClass:"item"},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"item-label",style:{"text-align":"align"}},[s("label",[t._v(t._s(e.key)+": ")])])]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"item-text"},[s("ItemValue",t._b({},"ItemValue",e,!1))],1)])],1)],1)})),1)],1)])},o=[],c=s("a735"),l=s("e67a"),r={name:"Details",components:{ItemValue:c["a"],IBox:l["a"]},props:{specialCardItems:{type:Array,default:function(){return[]}},detailCardItems:{type:Array,default:function(){return[]}},title:{type:String,default:""}},data:function(){return{}}},d=r,u=(s("8af7"),s("2877")),p=Object(u["a"])(d,n,o,!1,null,"52bb7e9c",null),m=p.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("IBox",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"box"},[s("div",{staticClass:"clearfix ibox-title",attrs:{slot:"header"},slot:"header"},[s("i",{staticClass:"fa fa-comments"}),t._v(" "+t._s(t.$t("common.Message"))+"\n    ")]),t._v(" "),t.comments?t._l(t.comments,(function(e){return s("div",{key:e.id,staticClass:"feed-activity-list"},[s("div",{staticClass:"feed-element"},[s("a",{staticClass:"pull-left",attrs:{href:"#"}},[s("el-avatar",{staticClass:"header-avatar",attrs:{src:t.imageUrl}})],1),t._v(" "),s("div",{staticClass:"media-body "},[s("strong",[t._v(t._s(e.user_display))]),t._v(" "),s("small",{staticClass:"text-muted"},[t._v(t._s(t.formatTime(e.date_created)))]),t._v(" "),s("br"),t._v(" "),s("small",{staticClass:"text-muted"},[t._v(t._s(t.toSafeLocalDateStr(e.date_created)))]),t._v(" "),s("pre",{staticStyle:{"padding-top":"10px",overflow:"auto"}},[t._v(t._s(e.body)+"\n            ")])])])])})):t._e(),t._v(" "),t._t("default"),t._v(" "),s("el-form",{ref:"comments",staticStyle:{"padding-top":"20px"},attrs:{model:t.form,"label-width":"45px"}},[s("el-form-item",{attrs:{label:t.$t("tickets.reply")}},[s("el-input",{attrs:{autosize:{minRows:4},type:"textarea"},model:{value:t.form.comments,callback:function(e){t.$set(t.form,"comments",e)},expression:"form.comments"}})],1),t._v(" "),s("el-form-item",{staticStyle:{float:"right"}},[t.hasActionPerm?[s("el-button",{attrs:{disabled:"closed"===t.object.status,type:"primary",size:"small"},on:{click:t.handleApprove}},[s("i",{staticClass:"fa fa-check"}),t._v(" "+t._s(t.$t("tickets.Accept"))+"\n          ")]),t._v(" "),s("el-button",{attrs:{disabled:"closed"===t.object.status,type:"warning",size:"small"},on:{click:t.handleReject}},[s("i",{staticClass:"fa fa-ban"}),t._v(" "+t._s(t.$t("tickets.Reject"))+"\n          ")])]:t._e(),t._v(" "),t.isSelfTicket?s("el-button",{attrs:{disabled:"closed"===t.object.status,type:"danger",size:"small"},on:{click:t.handleClose}},[s("i",{staticClass:"fa fa-times"}),t._v(" "+t._s(t.$t("tickets.Close"))+"\n        ")]):t._e(),t._v(" "),s("el-button",{attrs:{disabled:"closed"===t.object.status,type:"info",size:"small"},on:{click:t.handleComment}},[s("i",{staticClass:"fa fa-pencil"}),t._v(" "+t._s(t.$t("tickets.reply"))+"\n        ")])],2)],1)],2)},v=[],_=(s("57e7"),s("ed08")),h=s("cf45"),b={name:"Comments",components:{IBox:l["a"]},props:{object:{type:Object,default:function(){return{}}},approve:{type:Function,default:null},reject:{type:Function,default:null},close:{type:Function,default:null}},data:function(){return{comments:"",imageUrl:s("059c"),form:{comments:""},loading:!1}},computed:{hasActionPerm:function(){return-1!==this.object.process_map[this.object.approval_step-1].assignees.indexOf(this.$store.state.users.profile.id)},isSelfTicket:function(){return this.object.applicant===this.$store.state.users.profile.id}},mounted:function(){this.getComment()},methods:{formatTime:function(t){return Object(_["a"])(Object(_["b"])(t))},toSafeLocalDateStr:function(t){return Object(h["q"])(t)},getComment:function(){var t=this;this.loading=!0;var e="/api/v1/tickets/comments/?ticket_id=".concat(this.object.id);this.$axios.get(e).then((function(e){t.comments=e})).catch((function(e){t.$message.error(e)})).finally((function(){t.loading=!1,t.form.comments=""}))},defaultApprove:function(){var t=this;this.createComment((function(){}));var e="/api/v1/tickets/tickets/".concat(this.object.id,"/approve/");this.$axios.put(e).then((function(e){return t.reloadPage()})).catch((function(e){return t.$message.error(e)}))},defaultReject:function(){var t=this;this.createComment((function(){}));var e="/api/v1/tickets/tickets/".concat(this.object.id,"/reject/");this.$axios.put(e).then((function(e){return t.reloadPage()})).catch((function(e){return t.$message.error(e)}))},defaultClose:function(){var t=this,e="/api/v1/tickets/tickets/".concat(this.object.id,"/close/");this.$axios.put(e).then((function(e){return t.reloadPage()})).catch((function(e){return t.$message.error(e)}))},createComment:function(t){var e=this,s=this.form.comments,i=this.object.id,a="/api/v1/tickets/comments/?ticket_id=".concat(this.object.id);if(s){var n={body:s,ticket:i};this.$axios.post(a,n).then((function(s){t?t():e.reloadPage()}))}},handleApprove:function(){var t=this.approve||this.defaultApprove;t()},handleReject:function(){var t=this.reject||this.defaultReject;t()},handleClose:function(){var t=this.close||this.defaultClose;t()},handleComment:function(){this.createComment(this.getComment)},reloadPage:function(){window.location.reload()}}},C=b,y=(s("15db"),Object(u["a"])(C,f,v,!1,null,"6769e58e",null)),g=y.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("IBox",[s("div",{staticStyle:{height:"540px"}},[s("el-steps",{attrs:{direction:"vertical",active:t.ticketSteps}},[s("el-step",{attrs:{title:this.$t("tickets.OpenTicket")+"："+t.object.type_display,description:this.$t("tickets.Applicant")+"："+t.object.user_display}},[s("div",{attrs:{slot:"description"},slot:"description"},[s("div",[t._v(t._s(this.$t("tickets.Applicant")+"："+t.object.applicant_display))]),t._v(" "),s("div",[t._v(t._s(this.$t("common.dateCreated")+":  "+t.toSafeLocalDateStr(t.object.date_created)))])])]),t._v(" "),t._l(t.process,(function(e,i){return s("el-step",{key:i,attrs:{title:""+t.thisCopy.$t("tickets.HandleTicket")}},[s("div",{attrs:{slot:"description"},slot:"description"},[s("el-tag",{attrs:{size:"medium",type:""+t.thisCopy.statusMap[e.state].type}},[t._v(" "+t._s(""+t.thisCopy.statusMap[e.state].title)+" ")])],1),t._v(" "),s("div",{attrs:{slot:"description"},slot:"description"},[s("el-button",{staticStyle:{color:"blue"},attrs:{type:"text"},on:{click:function(s){return t.lookOver(e.assignees_display)}}},[t._v("点击查看 受理人")])],1),t._v(" "),"closed"===e.state?s("div",{attrs:{slot:"description"},slot:"description"},[s("div",[t._v(t._s(t.thisCopy.$t("tickets.Assignee")+"："+t.object.applicant_display))]),t._v(" "),s("div",[t._v(t._s(t.thisCopy.$t("common.dateFinished")+":  "+t.toSafeLocalDateStr(e.approval_date)))])]):t._e(),t._v(" "),"notified"!==e.state&&"closed"!==e.state?s("div",{attrs:{slot:"description"},slot:"description"},[s("div",[t._v(t._s(t.thisCopy.$t("tickets.Assignee")+"："+e.processor_display))]),t._v(" "),s("div",[t._v(t._s(t.thisCopy.$t("common.dateFinished")+":  "+t.toSafeLocalDateStr(e.approval_date)))])]):t._e()])})),t._v(" "),s("el-step",{attrs:{title:""+this.$t("tickets.FinishedTicket")}},[t.thisCopy.isFinish?s("div",{attrs:{slot:"description"},slot:"description"},[s("div",[t._v(t._s(this.$t("common.dateFinished")+":  "+t.toSafeLocalDateStr(t.object.date_updated)))])]):t._e()])],2)],1)])},j=[],$=s("c564"),x=$["a"],S=(s("f1fa"),Object(u["a"])(x,k,j,!1,null,"436b9518",null)),I=S.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.session.id?s("IBox",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"box"},[s("div",{staticClass:"clearfix ibox-title",attrs:{slot:"header"},slot:"header"},[s("i",{staticClass:"fa fa-rocket"}),t._v("\n    "+t._s(t.$t("sessions.session"))+"\n  ")]),t._v(" "),s("div",{staticClass:"content"},[s("el-row",{staticClass:"item"},[s("el-col",[s("span",{staticClass:"item-label"},[t._v(t._s(t.$t("sessions.SessionID"))+"：")]),t._v(" "),s("span",{staticClass:"item-value"},[t._v(t._s(t.session.id))])]),t._v(" "),s("el-col",[s("span",{staticClass:"item-label"},[t._v(t._s(t.$t("sessions.TargetResources"))+"：")]),t._v(" "),s("span",{staticClass:"item-value"},[t._v(t._s(t.session.asset))])]),t._v(" "),s("el-col",[s("span",{staticClass:"item-label"},[t._v(t._s(t.$t("tickets.SystemUser"))+"：")]),t._v(" "),s("span",{staticClass:"item-value"},[t._v(t._s(t.session.system_user))])]),t._v(" "),s("el-col",[s("span",{staticClass:"item-label"},[t._v(t._s(t.$t("sessions.UseProtocol"))+"：")]),t._v(" "),s("span",{staticClass:"item-value"},[t._v(t._s(t.session.protocol))])]),t._v(" "),s("el-col",[s("span",{staticClass:"item-label"},[t._v(t._s(t.$t("sessions.remoteAddr"))+"：")]),t._v(" "),s("span",{staticClass:"item-value"},[t._v(t._s(t.session.remote_addr))])]),t._v(" "),s("el-col",[s("span",{staticClass:"item-label"},[t._v(t._s(t.$t("sessions.SessionState"))+"：")]),t._v(" "),s("span",{staticClass:"item-value cur-color",style:{background:t.session.is_finished?"#ed5565":"#1ab394"}})])],1)],1),t._v(" "),s("el-divider"),t._v(" "),s("div",{staticClass:"bottom-btn"},[s("el-button",{attrs:{type:"danger",size:"small",disabled:!t.session.can_terminate},on:{click:t.onConnect}},[t._v("\n      "+t._s(t.$t("sessions.terminate"))+"\n    ")]),t._v(" "),s("el-button",{attrs:{type:"primary",size:"small",disabled:!t.session.can_join},on:{click:t.onMonitor}},[t._v("\n      "+t._s(t.$t("sessions.Monitor"))+"\n    ")])],1)],1):t._e()},w=[],A={components:{IBox:l["a"]},props:{object:{type:Object,default:function(){}}},data:function(){return{session:{},curTimer:null,loading:!1}},created:function(){"open"!==this.object.state&&this.init()},beforeDestroy:function(){clearTimeout(this.curTimer)},methods:{init:function(){var t=this;this.loading=!0;var e="/api/v1/tickets/tickets/".concat(this.object.id,"/session/");this.$axios({url:e,method:"get",disableFlashErrorMsg:!0}).then((function(e){t.session=e||{}})).catch((function(e){t.curTimer=setTimeout((function(){t.init()}),1400),t.$log.debug("error",e)})).finally((function(){t.loading=!1}))},onConnect:function(){var t=this,e="/api/v1/terminal/tasks/kill-session-for-ticket/",s=[this.session.id]||!1;this.$axios.post(e,s).then((function(e){t.$message.success(t.$t("sessions.TerminateTaskSendSuccessMsg")),t.curTimer=setTimeout((function(){t.init()}),5e4)})).catch((function(e){t.$message.error(e)}))},onMonitor:function(){var t="/luna/monitor/".concat(this.session.id);window.open(t,"height=600, width=800, top=400, left=400, toolbar=no, menubar=no, scrollbars=no, location=no, status=no")}}},T=A,D=(s("9024"),Object(u["a"])(T,O,w,!1,null,"572f3397",null)),B=D.exports,F={name:"GenericTicketDetail",components:{Steps:I,Comments:g,Details:m,Session:B},props:{object:{type:Object,default:function(){return{}}},specialCardItems:{type:Array,default:function(){return[]}},detailCardItems:{type:Array,default:function(){return[]}},assignedCardItems:{type:Array,default:function(){return[]}}},data:function(){return{}}},M=F,P=Object(u["a"])(M,i,a,!1,null,"d33ba8a4",null);e["a"]=P.exports},a3c9:function(t,e,s){},c564:function(t,e,s){"use strict";(function(t){s("ac6a"),s("f3e2");var i=s("ed08"),a=s("cf45"),n=s("e67a"),o=s("0218");e["a"]={name:"Steps",components:{IBox:n["a"]},props:{object:{type:Object,default:function(){return{}}}},data:function(){return{STATUS:{open:2,init:2,close:3},process:this.object.process_map,thisCopy:this,statusMap:o["d"],isFinish:!1}},computed:{ticketSteps:function(){var e=0;return this.process.forEach((function(t){"approved"===t.state&&(e+=1)})),e===t.length?(this.isFinish=!0,t.length+2):this.STATUS.open+e}},methods:{formatTime:function(t){return Object(i["a"])(Object(i["b"])(t))},toSafeLocalDateStr:function(t){return Object(a["q"])(t)},lookOver:function(t){var e=this.$createElement,s=[];t.forEach((function(t){s.push(e("p",null,t))})),this.$msgbox({title:"相关受理人",message:e("p",null,s),showCancelButton:!1,showConfirmButton:!1})}}}}).call(this,s("4362"))},f1fa:function(t,e,s){"use strict";var i=s("a3c9"),a=s.n(i);a.a}}]);