(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e051791a"],{1:function(e,t){},"3cc2":function(e,t,a){},"82a0":function(e,t,a){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";window.open("/#/ops/celery/task/".concat(e,"/log/?type=").concat(t),"","width=900,height=600")}a.d(t,"a",(function(){return n}))},"9f95":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("GenericCreateUpdatePage",e._b({},"GenericCreateUpdatePage",e.$data,!1))},i=[],c=(a("d92a"),a("cd4a")),r=(a("7f7f"),a("0692")),l=a("2af9"),o=function(e,t,a){if(parseInt(t)<1)return a(new Error(r["a"].t("xpack.ChangeAuthPlan.validatorMessage.EnsureThisValueIsGreaterThanOrEqualTo1")));a()};function s(){var e={label:r["a"].t("xpack.ChangeAuthPlan.Addressee"),helpText:r["a"].t("xpack.ChangeAuthPlan.OnlyMailSend"),el:{value:[],ajax:{url:"/api/v1/users/users/?fields_size=mini",transformOption:function(e){return{label:e.name+"("+e.username+")",value:e.id}}}}},t={type:"switch"},a={type:"cronTab",component:l["e"],label:r["a"].t("xpack.RegularlyPerform"),hidden:function(e){return!1===e.is_periodic},helpText:r["a"].t("xpack.HelpText.CrontabOfCreateUpdatePage")},n={label:r["a"].t("xpack.CyclePerform"),hidden:function(e){return!1===e.is_periodic},helpText:r["a"].t("xpack.HelpText.IntervalOfCreateUpdatePage"),rules:[{validator:o}]};return{is_periodic:t,crontab:a,interval:n,recipients:e}}var u=s,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-tree",e._b({attrs:{data:e.iData,"show-checkbox":"","node-key":"id","default-expand-all":!1,"default-checked-keys":e.value,props:e.defaultProps},on:{check:e.handleCheckChange}},"el-tree",e.$attrs,!1))},d=[],h=(a("6762"),a("2fdb"),a("ac4d"),a("8a81"),a("ac6a"),a("6d67"),{name:"FormTypeField",props:{value:{type:Array,default:function(){return[]}},choices:{type:Array,default:function(){return[]}}},data:function(){return{defaultProps:{children:"children",label:"label"},fullChoicesTreeNodes:[{id:"all",label:this.$t("perms.all"),children:[{id:"asset",label:this.$t("route.AssetAccount")},{id:"application",label:this.$t("route.ApplicationAccount")}]}]}},computed:{choicesIDs:function(){return this.choices.map((function(e){return e.value}))},iData:function(){this.$log.debug("choices: ",this.choicesIDs);var e=_.cloneDeep(this.fullChoicesTreeNodes),t=this.trimChoicesTreeNodes(e);return this.$log.debug("choicesTreeNodes: ",t),t}},methods:{trimChoicesTreeNodes:function(e){var t=[],a=!0,n=!1,i=void 0;try{for(var c,r=e[Symbol.iterator]();!(a=(c=r.next()).done);a=!0){var l=c.value;if(this.choicesIDs.includes(l.id)){var o=l.children||[];0!==o.length&&(o=this.trimChoicesTreeNodes(o),l.children=o),t.push(l)}}}catch(s){n=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(n)throw i}}return t},handleCheckChange:function(e,t){var a=t.checkedKeys;0!==a.length&&a.push("connect"),this.$emit("input",a)}}}),f=h,m=a("2877"),v=Object(m["a"])(f,p,d,!1,null,"567bbd73",null),b=v.exports,k={name:"AccountBackupPlanUpdate",components:{GenericCreateUpdatePage:c["d"]},data:function(){var e=u.bind(this)();return{url:"/api/v1/assets/backup/",fields:[[this.$t("common.Basic"),["name"]],[this.$t("xpack.AccountBackupPlan.Types"),["types"]],[this.$t("xpack.AccountBackupPlan.Backup"),["recipients"]],[this.$t("xpack.Timer"),["is_periodic","crontab","interval"]],[this.$t("common.Other"),["comment"]]],initial:{is_periodic:!0,interval:24,types:["all","asset","application"]},fieldsMeta:{is_periodic:e.is_periodic,crontab:e.crontab,interval:e.interval,recipients:e.recipients,types:{label:this.$t("xpack.AccountBackupPlan.Types"),component:b}},createSuccessNextRoute:{name:"AccountBackupPlanIndex"},updateSuccessNextRoute:{name:"AccountBackupPlanIndex"},cleanFormValue:function(e){return""===e["interval"]&&delete e["interval"],e}}}},x=k,y=Object(m["a"])(x,n,i,!1,null,"685f2af6",null);t["default"]=y.exports},c0eb:function(e,t,a){"use strict";var n=a("1157"),i=a.n(n);window.$=i.a,window.jQuery=i.a,t["a"]=i.a}}]);