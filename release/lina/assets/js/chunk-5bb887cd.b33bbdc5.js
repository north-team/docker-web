(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bb887cd"],{"3cae":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.loading?e._e():a("GenericCreateUpdatePage",e._b({attrs:{"perform-submit":e.performSubmit,"create-success-next-route":e.createSuccessNextRoute}},"GenericCreateUpdatePage",e.$data,!1))},i=[],l=(a("6762"),a("2fdb"),a("456d"),a("ac6a"),a("f3e2"),a("6d67"),a("7f7f"),a("8ea5"),a("cd4a")),n=a("56f5"),r=a("cf45"),o=a("ce4b"),c={components:{GenericCreateUpdatePage:l["d"]},data:function(){var e=this,t=new Date,a=Object(r["i"])(7,t).toISOString(),s=t.toISOString();return{hasDetailInMsg:!1,loading:!0,initial:{ips_or_not:!0,meta:{apply_date_expired:a,apply_date_start:s,apply_actions:["all","connect","updownload","upload_file","download_file"],apply_assets:[]},org_id:"",type:"apply_asset"},fields:[[this.$t("common.Basic"),["title","type","org_id","comment"]],[this.$t("tickets.RequestPerm"),["meta"]]],fieldsMeta:{type:{hidden:function(){return!0},el:{disabled:!0}},meta:{fields:["apply_nodes","apply_assets","apply_system_users","apply_actions","apply_date_start","apply_date_expired"],fieldsMeta:{apply_actions:{label:this.$t("perms.Actions"),component:o["a"],helpText:this.$t("common.actionsTips")},apply_nodes:{component:n["a"],el:{value:[],ajax:{url:"",transformOption:function(e){return{label:"".concat(e.full_value),value:e.id}}},clearable:!0}},apply_assets:{type:"assetSelect",label:this.$t("perms.Asset"),component:n["a"],el:{value:[],ajax:{url:"",transformOption:function(e){return{label:e.hostname+"("+e.protocols+")",value:e.id}}}}},apply_system_users:{type:"systemUserSelect",component:n["a"],label:this.$t("assets.SystemUser"),el:{value:[],ajax:{url:"",transformOption:function(e){var t=e.username||"*";return{label:e.name+"("+t+")",value:e.id}}}}}}},org_id:{component:n["a"],el:{multiple:!1,options:this.$store.state.users.profile["user_all_orgs"].map((function(e){return{label:e.name,value:e.id}}))},hidden:function(t){var a=e.fieldsMeta.meta.fieldsMeta;a.apply_system_users.el.ajax.url="/api/v1/assets/system-users/suggestions/?oid=".concat(t["org_id"],"&protocol__in=rdp,ssh,vnc,telnet"),a.apply_assets.el.ajax.url="/api/v1/assets/assets/suggestions/?oid=".concat(t["org_id"]),a.apply_nodes.el.ajax.url="/api/v1/assets/nodes/suggestions/?oid=".concat(t["org_id"])}}},cleanFormValue:function(e){return Object.keys(e.meta).forEach((function(t,a,s){["apply_system_users"].includes(t)&&e.meta[t].length<1&&delete e.meta[t]})),e},url:"/api/v1/tickets/tickets/?type=apply_asset&action=open",createSuccessNextRoute:{name:"TicketList"}}},mounted:function(){var e=this.$store.state.users.profile["user_all_orgs"],t=this.$store.getters.currentOrg?this.$store.getters.currentOrg.id:null;e=e?e.map((function(e){return e.id})):[],e.length>0&&(e.includes(t)?this.initial.org_id=t:this.initial.org_id=e[0]),this.loading=!1},methods:{performSubmit:function(e){return this.$axios["post"]("/api/v1/tickets/tickets/open/?type=apply_asset",e)}}},p=c,d=a("2877"),u=Object(d["a"])(p,s,i,!1,null,"76116358",null);t["default"]=u.exports},ce4b:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-tree",e._b({attrs:{data:e.iData,"show-checkbox":"","node-key":"id","default-expand-all":!1,"default-checked-keys":e.value,props:e.defaultProps},on:{check:e.handleCheckChange}},"el-tree",e.$attrs,!1))},i=[],l=(a("6762"),a("2fdb"),a("ac4d"),a("8a81"),a("ac6a"),a("6d67"),{name:"PermissionFormActionField",props:{value:{type:Array,default:function(){return[]}},choices:{type:Array,default:function(){return[]}}},data:function(){return{defaultProps:{children:"children",label:"label"},fullChoicesTreeNodes:[{id:"all",label:this.$t("perms.all"),children:[{id:"connect",label:this.$t("perms.connect")},{id:"updownload",label:this.$t("perms.upDownload"),children:[{id:"upload_file",label:this.$t("perms.uploadFile")},{id:"download_file",label:this.$t("perms.downloadFile")}]},{id:"clipboard_copy_paste",label:this.$t("perms.clipboardCopyPaste"),children:[{id:"clipboard_copy",label:this.$t("perms.clipboardCopy")},{id:"clipboard_paste",label:this.$t("perms.clipboardPaste")}]}]}]}},computed:{choicesIDs:function(){return this.choices.map((function(e){return e.value}))},iData:function(){this.$log.debug("choices: ",this.choicesIDs);var e=_.cloneDeep(this.fullChoicesTreeNodes),t=this.trimChoicesTreeNodes(e);return this.$log.debug("choicesTreeNodes: ",t),t}},methods:{trimChoicesTreeNodes:function(e){var t=[],a=!0,s=!1,i=void 0;try{for(var l,n=e[Symbol.iterator]();!(a=(l=n.next()).done);a=!0){var r=l.value;if(this.choicesIDs.includes(r.id)){var o=r.children||[];0!==o.length&&(o=this.trimChoicesTreeNodes(o),r.children=o),t.push(r)}}}catch(c){s=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return t},handleCheckChange:function(e,t){var a=t.checkedKeys;0!==a.length&&a.push("connect"),this.$emit("input",a)}}}),n=l,r=a("2877"),o=Object(r["a"])(n,s,i,!1,null,"8efe94e0",null);t["a"]=o.exports}}]);