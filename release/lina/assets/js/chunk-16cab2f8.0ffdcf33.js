(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16cab2f8"],{1:function(t,e){},"3cc2":function(t,e,a){},"4e09":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("GenericDetailPage",t._b({attrs:{object:t.plan,"active-menu":t.config.activeMenu},on:{"update:object":function(e){t.plan=e},"update:activeMenu":function(e){return t.$set(t.config,"activeMenu",e)},"update:active-menu":function(e){return t.$set(t.config,"activeMenu",e)}}},"GenericDetailPage",t.config,!1),[a("keep-alive",[a(t.config.activeMenu,{tag:"component",attrs:{object:t.plan}})],1)],1)},c=[],i=a("cd4a"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{md:14,sm:24}},[a("DetailCard",{attrs:{items:t.detailItems}})],1),t._v(" "),a("el-col",{attrs:{md:10,sm:24}},[a("QuickActions",{attrs:{actions:t.quickActions,type:"primary"}})],1)],1)},s=[],u=(a("7f7f"),a("d92a"),a("2af9")),r=a("cf45"),l={name:"AccountBackupPlanInfo",components:{DetailCard:u["f"],QuickActions:u["j"]},props:{object:{type:Object,required:!0,default:function(){return{}}}},data:function(){return{quickActions:[{title:this.$t("xpack.ChangeAuthPlan.ManualExecutePlan"),attrs:{type:"primary",label:this.$t("xpack.ChangeAuthPlan.Execute")},callbacks:{click:function(){this.$axios.post("/api/v1/assets/backup-execution/",{plan:this.object.id}).then((function(t){window.open("/#/ops/celery/task/".concat(t.task,"/log/"),"_blank","toolbar=yes, width=900, height=600")}))}.bind(this)}}]}},computed:{detailItems:function(){var t=this,e=this.$createElement;return[{key:this.$t("xpack.ChangeAuthPlan.Name"),value:this.object.name},{key:this.$t("xpack.ChangeAuthPlan.RegularlyPerform"),value:this.object.crontab,formatter:function(a,n){return e("span",[t.object.is_periodic?n:""])}},{key:this.$t("xpack.ChangeAuthPlan.CyclePerform"),value:this.object.interval,formatter:function(a,n){return e("span",[t.object.is_periodic?n:""])}},{key:this.$t("xpack.ChangeAuthPlan.DateJoined"),value:Object(r["q"])(this.object.date_created)},{key:this.$t("xpack.ChangeAuthPlan.DateUpdated"),value:Object(r["q"])(this.object.date_updated)},{key:this.$t("common.Comment"),value:this.object.comment}]}}},p=l,h=a("2877"),d=Object(h["a"])(p,o,s,!1,null,"7adadf4a",null),f=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("GenericListTable",{attrs:{"table-config":t.tableConfig,"header-actions":t.headerActions}})},k=[],b=a("3758"),g={name:"AccountBackupPlanExecution",components:{GenericListTable:b["a"]},props:{object:{type:Object,required:!0,default:function(){return{}}}},data:function(){return{tableConfig:{url:"/api/v1/assets/backup-execution/?plan_id=".concat(this.object.id),columns:["timedelta","trigger_display","date_start","is_success","reason","actions"],columnsMeta:{timedelta:{label:this.$t("xpack.ChangeAuthPlan.TimeDelta"),width:"90px",formatter:function(t){return t.timedelta.toFixed(2)+"s"}},date_start:{showOverflowTooltip:!0},actions:{formatterArgs:{hasDelete:!1,hasUpdate:!1,hasClone:!1,extraActions:[{name:"log",type:"primary",title:this.$t("xpack.ChangeAuthPlan.Log"),callback:function(t){var e=t.row;window.open("/#/ops/celery/task/".concat(e.id,"/log/"),"_blank","toolbar=yes, width=900, height=600")}},{name:"detail",title:this.$t("xpack.ChangeAuthPlan.Detail"),type:"info",callback:function(t){var e=t.row;return this.$router.push({name:"AccountBackupPlanExecutionDetail",params:{id:e.id}})}}]}}}},headerActions:{hasSearch:!0,hasRefresh:!0,hasRightActions:!0,hasLeftActions:!0,hasMoreActions:!1,hasExport:!1,hasImport:!1,hasCreate:!1,hasBulkDelete:!1,hasBulkUpdate:!1}}}},v=g,A=Object(h["a"])(v,m,k,!1,null,"28cae33e",null),x=A.exports,w={components:{GenericDetailPage:i["e"],AccountBackupPlanInfo:f,AccountBackupPlanExecutionList:x},data:function(){return{plan:{name:"",comment:""},config:{activeMenu:"AccountBackupPlanInfo",submenu:[{title:this.$t("common.BasicInfo"),name:"AccountBackupPlanInfo"},{title:this.$t("xpack.ChangeAuthPlan.ExecutionList"),name:"AccountBackupPlanExecutionList"}],actions:{detailApiUrl:"/api/v1/assets/backup/".concat(this.$route.params.id,"/"),deleteApiUrl:"/api/v1/assets/backup/".concat(this.$route.params.id,"/")}}}}},y=w,P=Object(h["a"])(y,n,c,!1,null,"392a7172",null);e["default"]=P.exports},"82a0":function(t,e,a){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";window.open("/#/ops/celery/task/".concat(t,"/log/?type=").concat(e),"","width=900,height=600")}a.d(e,"a",(function(){return n}))},c0eb:function(t,e,a){"use strict";var n=a("1157"),c=a.n(n);window.$=c.a,window.jQuery=c.a,e["a"]=c.a}}]);