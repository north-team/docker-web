(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b61e700"],{1:function(e,a){},"3cc2":function(e,a,t){},"82a0":function(e,a,t){"use strict";function s(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";window.open("/#/ops/celery/task/".concat(e,"/log/?type=").concat(a),"","width=900,height=600")}t.d(a,"a",(function(){return s}))},9057:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("GenericCreateUpdatePage",e._b({attrs:{"clean-form-value":e.cleanFormValue,"create-success-next-route":e.createSuccessNextRoute}},"GenericCreateUpdatePage",e.$data,!1))},r=[],n=(t("d92a"),t("cd4a")),i=t("e65b"),o={name:"CustomizeChangeAuthPlanCreateUpdate",components:{GenericCreateUpdatePage:n["d"]},data:function(){var e=i["a"].bind(this)();return{url:"/api/v1/xpack/change-auth-plan/plan/",fields:[[this.$t("common.Basic"),["name"]],[this.$t("xpack.Asset"),["username","assets"]],[this.$t("xpack.ChangeAuthPlan.PasswordStrategy"),["is_password","password_strategy","password","password_rules"]],[this.$t("xpack.ChangeAuthPlan.SecretKeyStrategy"),["is_ssh_key","ssh_key_strategy","private_key","passphrase"]],[this.$t("xpack.Timer"),["is_periodic","crontab","interval"]],[this.$t("common.Other"),["recipients","comment"]]],initial:{password_strategy:"custom",ssh_key_strategy:"add",is_periodic:!0,is_password:!0,is_ssh_key:!1,password_rules:{letters_length:10,number_length:10,punctuation_length:10},interval:24},fieldsMeta:{username:e.customizeUsername,assets:e.customizeAssets,password:e.password,passphrase:e.passphrase,password_rules:e.asset_password_rules,private_key:e.private_key,is_periodic:e.is_periodic,is_password:e.is_password,is_ssh_key:e.is_ssh_key,password_strategy:e.password_strategy,ssh_key_strategy:e.ssh_key_strategy,crontab:e.crontab,interval:e.interval,recipients:e.recipients,plan_type:e.plan_type},createSuccessNextRoute:{name:"ChangeAuthPlanIndex"},updateSuccessNextRoute:{name:"ChangeAuthPlanIndex"},cleanFormValue:function(e){return"custom"===e["password_strategy"]?delete e["password_rules"]:delete e["password"],""===e["interval"]&&delete e["interval"],e["plan_type"]="1",e}}},mounted:function(){},methods:{}},l=o,u=t("2877"),p=Object(u["a"])(l,s,r,!1,null,"92c643a8",null);a["default"]=p.exports},c0eb:function(e,a,t){"use strict";var s=t("1157"),r=t.n(s);window.$=r.a,window.jQuery=r.a,a["a"]=r.a},e65b:function(e,a,t){"use strict";var s=t("768b"),r=(t("7f7f"),t("ac6a"),t("f3e2"),t("57e7"),t("0692")),n=t("2af9"),i=t("8521"),o=t("7541"),l=function(e,a,t){if(parseInt(a)<1)return t(new Error(r["a"].t("xpack.ChangeAuthPlan.validatorMessage.EnsureThisValueIsGreaterThanOrEqualTo1")));t()};function u(){return[{id:"length",prop:"length",label:r["a"].t("xpack.ChangeAuthPlan.PasswordLength"),rules:[o["b"]],hidden:function(e){return-1===["random_one","random_all"].indexOf(e.password_strategy)||!e.is_password}}]}function p(){return[{id:"length",prop:"length",label:r["a"].t("xpack.ChangeAuthPlan.PasswordLength"),rules:[o["b"]],hidden:function(e){return-1===["random_one","random_all"].indexOf(e.password_strategy)}},{id:"symbol_set",prop:"symbol_set",label:r["a"].t("xpack.ChangeAuthPlan.SymbolSet"),helpText:r["a"].t("xpack.ChangeAuthPlan.SymbolSetHelpText"),hidden:function(e){return-1===["random_one","random_all"].indexOf(e.password_strategy)}}]}function c(e){var a,t=[];return"asset"===e?a=u():"database"===e&&(a=p()),a.forEach((function(e,a,s){t.push({id:e.id,prop:e.prop,el:{},attrs:{},type:"input",label:e.label,rules:e.rules,helpText:e.helpText,hidden:e.hidden})})),t}function d(){var e=this,a={helpText:r["a"].t("xpack.ChangeAuthPlan.HelpText.UsernameOfCreateUpdatePage")},t={component:n["k"],el:{multiple:!1,value:[],ajax:{url:"/api/v1/users/users/?fields_size=mini",transformOption:function(e){return{label:"".concat(e.name,"(").concat(e.username,")"),value:e.id}}}},on:{changeOptions:function(a,t){var r=Object(s["a"])(a,1),n=r[0];t({assets:[]}),e.fieldsMeta.assets.el.ajax.url="/api/v1/perms/users/".concat(n[0].value,"/assets/")}}},o={component:n["k"],el:{value:[],ajax:{url:"",transformOption:function(e){return{label:"".concat(e.hostname,"(").concat(e.ip,")"),value:e.id}}}},label:r["a"].t("xpack.Asset")},u={type:"assetSelect",component:n["d"],rules:[{required:!1}],label:r["a"].t("xpack.Asset")},p={component:n["k"],rules:[{required:!0}],label:r["a"].t("xpack.Database"),el:{multiple:!1,value:[],ajax:{url:"/api/v1/applications/applications/?category=db",transformOption:function(e){return{label:e.name+"("+e.type_display+")",value:e.id,protocol:e.type}}}},on:{changeOptions:function(a,t){var r=Object(s["a"])(a,1),n=r[0];t({systemuser:[]}),e.fieldsMeta.systemuser.el.ajax.url="/api/v1/assets/system-users/?protocol=".concat(n[0].protocol)}}},d={hidden:function(e){return"custom"!==e.password_strategy||!1===e.is_password},rules:[{required:"create"===this.$route.meta.action,message:r["a"].t("common.fieldRequiredError"),trigger:"blur"}]},h={label:r["a"].t("assets.Passphrase"),component:i["c"],hidden:function(e){return!1===e.is_ssh_key}},m={type:"group",items:c("asset")},_={type:"group",items:c("database")},y={component:n["m"],hidden:function(e){return!1===e.is_ssh_key},rules:[{required:"create"===this.$route.meta.action,message:this.$t("common.fieldRequiredError"),trigger:"blur"}]},g={label:r["a"].t("xpack.ChangeAuthPlan.Addressee"),helpText:r["a"].t("xpack.ChangeAuthPlan.OnlyMailSend"),el:{value:[],ajax:{url:"/api/v1/users/users/?fields_size=mini",transformOption:function(e){return{label:e.name+"("+e.username+")",value:e.id}}}}},f={label:r["a"].t("xpack.Node"),el:{value:[],ajax:{url:"/api/v1/assets/nodes/",transformOption:function(e){return{label:e.full_value,value:e.id}}}}},b={label:r["a"].t("xpack.ChangeAuthPlan.ChangePassword"),type:"switch"},x={label:r["a"].t("xpack.ChangeAuthPlan.ModifySSHKey"),type:"switch"},w={label:r["a"].t("xpack.ChangeAuthPlan.PasswordStrategy"),hidden:function(e){return!1===e.is_password}},k={label:r["a"].t("xpack.ChangeAuthPlan.SecretKeyStrategy"),hidden:function(e){return!1===e.is_ssh_key}},v={component:n["k"],label:r["a"].t("xpack.ChangeAuthPlan.SystemUser"),rules:[{required:!0}],el:{value:[],ajax:{url:"/api/v1/assets/system-users/",transformOption:function(e){return{label:e.name+"("+e.username+")",value:e.id}}}}},P={type:"switch"},C={type:"cronTab",component:n["e"],label:r["a"].t("xpack.RegularlyPerform"),hidden:function(e){return!1===e.is_periodic},helpText:r["a"].t("xpack.HelpText.CrontabOfCreateUpdatePage")},A={label:r["a"].t("xpack.CyclePerform"),hidden:function(e){return!1===e.is_periodic},helpText:r["a"].t("xpack.HelpText.IntervalOfCreateUpdatePage"),rules:[{validator:l}]};return{username:a,customizeUsername:t,customizeAssets:o,assets:u,database:p,systemuser:v,password:d,password_strategy:w,ssh_key_strategy:k,private_key:y,passphrase:h,asset_password_rules:m,database_password_rules:_,nodes:f,is_password:b,is_periodic:P,is_ssh_key:x,crontab:C,interval:A,recipients:g}}a["a"]=d}}]);