(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c8ccb1c","chunk-0997b68a","chunk-46d06b08"],{"3a8a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("TabPage",{attrs:{"active-menu":t.config.activeMenu,submenu:t.config.submenu},on:{"update:activeMenu":function(e){return t.$set(t.config,"activeMenu",e)},"update:active-menu":function(e){return t.$set(t.config,"activeMenu",e)}}},[a("keep-alive",[a(t.config.activeMenu,{tag:"component"})],1)],1)},c=[],i=a("cd4a"),s=a("d458"),r=a("d90e"),o={name:"Index",components:{TabPage:i["m"],AccountList:s["default"],SyncInstanceTaskList:r["default"]},data:function(){return{config:{activeMenu:"SyncInstanceTaskList",submenu:[{title:this.$t("xpack.Cloud.SyncInstanceTaskList"),name:"SyncInstanceTaskList"},{title:this.$t("xpack.Cloud.AccountList"),name:"AccountList"}]}}}},u=o,l=a("2877"),d=Object(l["a"])(u,n,c,!1,null,"a8ce8c0c",null);e["default"]=d.exports},"82a0":function(t,e,a){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";window.open("/#/ops/celery/task/".concat(t,"/log/?type=").concat(e),"","width=900,height=600")}a.d(e,"a",(function(){return n}))},d458:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("GenericListTable",{attrs:{"table-config":t.tableConfig,"header-actions":t.headerActions}})},c=[],i=(a("7f7f"),a("3758")),s=a("e82d"),r={components:{GenericListTable:i["a"]},data:function(){var t=this;return{tableConfig:{url:"/api/v1/xpack/cloud/accounts/",columns:["name","provider","validity","date_created","comment","actions"],columnsMeta:{name:{sortable:!0,showOverflowTooltip:!0,formatterArgs:{route:"AccountDetail"}},provider:{width:"120px"},actions:{formatterArgs:{updateRoute:"AccountUpdate",hasClone:!1,onUpdate:function(e){var a=e.row;e.col;t.$router.push({name:"AccountUpdate",params:{id:a.id},query:{provider:a.provider}})},extraActions:[{name:"TestConnection",title:this.$t("assets.TestConnection"),callback:function(t){var e=this;this.$axios.get("/api/v1/xpack/cloud/accounts/".concat(t.row.id,"/test-connective/")).then((function(t){e.$message.success(e.$t("common.TestSuccessMsg"))}))}}]}}}},headerActions:{hasBulkDelete:!1,hasImport:!1,hasMoreActions:!1,searchConfig:{getUrlQuery:!1},moreCreates:{callback:function(e){t.$router.push({name:"AccountCreate",query:{provider:e.name}})},dropdown:[{name:s["b"],title:s["a"][s["b"]].title,type:"primary",group:this.$t("common.PublicCloud"),can:!0},{name:s["l"],title:s["a"][s["l"]].title,type:"primary",can:!0},{name:s["h"],title:s["a"][s["h"]].title},{name:s["c"],title:s["a"][s["c"]].title},{name:s["d"],title:s["a"][s["d"]].title},{name:s["e"],title:s["a"][s["e"]].title},{name:s["f"],title:s["a"][s["f"]].title},{name:s["g"],title:s["a"][s["g"]].title},{name:s["n"],group:this.$t("common.PrivateCloud"),title:s["a"][s["n"]].title},{name:s["m"],title:s["a"][s["m"]].title},{name:s["i"],title:s["a"][s["i"]].title},{name:s["k"],title:s["a"][s["k"]].title},{name:s["j"],title:s["a"][s["j"]].title}]}}}},methods:{createAccount:function(t){var e=this;return function(){e.$router.push({name:"AccountCreate",query:{provider:t}})}}}},o=r,u=a("2877"),l=Object(u["a"])(o,n,c,!1,null,null,null);e["default"]=l.exports},d90e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("GenericListTable",{attrs:{"table-config":t.tableConfig,"header-actions":t.headerActions}})},c=[],i=a("3758"),s=a("e975"),r=a("82a0"),o={components:{GenericListTable:i["a"]},data:function(){var t=this,e=this;return{tableConfig:{url:"/api/v1/xpack/cloud/sync-instance-tasks/",columns:["name","account_display","history_count","instance_count","periodic_display","date_last_sync","comment","actions"],columnsMeta:{account_display:{label:this.$t("xpack.Cloud.Account")},periodic_display:{showOverflowTooltip:!0,width:"150px"},actions:{formatterArgs:{hasClone:!1,onUpdate:function(e){var a=e.row;t.$router.push({name:"SyncInstanceTaskUpdate",params:{id:a.id}})},extraActions:[{title:e.$t("xpack.Execute"),name:"execute",type:"info",callback:function(t){this.$axios.get("/api/v1/xpack/cloud/sync-instance-tasks/".concat(t.row.id,"/run/")).then((function(t){Object(r["a"])(t["task"])}))}}]}},name:{formatter:s["g"],formatterArgs:{route:"SyncInstanceTaskDetail",routeQuery:{activeTab:"detail"}}},history_count:{width:"110px",formatter:s["g"],formatterArgs:{route:"SyncInstanceTaskDetail",routeQuery:{activeTab:"HistoryList"}}},instance_count:{formatter:s["g"],formatterArgs:{route:"SyncInstanceTaskDetail",routeQuery:{activeTab:"AssetList"}}}},date_last_sync:{width:"130px"}},headerActions:{hasMoreActions:!1,hasImport:!1,hasExport:!1,createRoute:"SyncInstanceTaskCreate"}}}},u=o,l=a("2877"),d=Object(l["a"])(u,n,c,!1,null,null,null);e["default"]=d.exports},e82d:function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"d",(function(){return r})),a.d(e,"c",(function(){return o})),a.d(e,"h",(function(){return u})),a.d(e,"l",(function(){return l})),a.d(e,"e",(function(){return d})),a.d(e,"f",(function(){return p})),a.d(e,"n",(function(){return m})),a.d(e,"j",(function(){return f})),a.d(e,"m",(function(){return _})),a.d(e,"i",(function(){return h})),a.d(e,"k",(function(){return k})),a.d(e,"g",(function(){return y})),a.d(e,"a",(function(){return b}));var n,c=a("bd86"),i=a("0692"),s="aliyun",r="aws_international",o="aws_china",u="huaweicloud",l="qcloud",d="azure",p="azure_international",m="vmware",f="nutanix",_="qingcloud_private",h="huaweicloud_private",k="openstack",y="gcp",b=(n={},Object(c["a"])(n,s,{name:s,title:i["a"].t("xpack.Cloud.Aliyun"),attrs:["access_key_id","access_key_secret"]}),Object(c["a"])(n,r,{name:r,title:i["a"].t("xpack.Cloud.AWS_Int"),attrs:["access_key_id","access_key_secret"]}),Object(c["a"])(n,o,{name:o,title:i["a"].t("xpack.Cloud.AWS_China"),attrs:["access_key_id","access_key_secret"]}),Object(c["a"])(n,u,{name:u,title:i["a"].t("xpack.Cloud.HuaweiCloud"),attrs:["access_key_id","access_key_secret"]}),Object(c["a"])(n,l,{name:l,title:i["a"].t("xpack.Cloud.Qcloud"),attrs:["access_key_id","access_key_secret"]}),Object(c["a"])(n,d,{name:d,title:i["a"].t("xpack.Cloud.Azure"),attrs:["client_id","client_secret","tenant_id","subscription_id"]}),Object(c["a"])(n,p,{name:p,title:i["a"].t("xpack.Cloud.Azure_Int"),attrs:["client_id","client_secret","tenant_id","subscription_id"]}),Object(c["a"])(n,m,{name:m,title:"VMware",attrs:["host","port","username","password"]}),Object(c["a"])(n,f,{name:f,title:"Nutanix",attrs:["access_key_id","access_key_secret","api_endpoint"]}),Object(c["a"])(n,_,{name:_,title:i["a"].t("xpack.Cloud.QingyunPrivatecloud"),attrs:["access_key_id","access_key_secret","api_endpoint"]}),Object(c["a"])(n,h,{name:h,title:i["a"].t("xpack.Cloud.HuaweiPrivatecloud"),attrs:["sc_username","sc_password","domain_name","oc_username","oc_password","api_endpoint"]}),Object(c["a"])(n,k,{name:k,title:i["a"].t("xpack.Cloud.OpenStack"),attrs:["auth_url","user_domain_name","username","password"]}),Object(c["a"])(n,y,{name:y,title:i["a"].t("xpack.Cloud.GCP"),attrs:["service_account_key"]}),n)}}]);