(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46ad5784"],{"3cc2":function(e,t,r){},"66ce":function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("TreeTable",{attrs:{"table-config":e.tableConfig,"header-actions":e.headerActions,"tree-setting":e.treeSetting}})},n=[],a=(r("57e7"),r("d92a"),r("a481"),r("e975")),o=r("8ad4"),i={name:"GrantedAssets",components:{TreeTable:o["a"]},props:{treeUrl:{type:String,required:!0},tableUrl:{type:String,required:!0},onSelected:{type:Function,default:function(e,t){t.tableConfig.initialUrl||(t.tableConfig.initialUrl=t.tableConfig.url);var r=t.tableConfig.initialUrl,s=e.meta.data.id,n=r.replace("/assets/","/nodes/".concat(s,"/assets/"));t.tableConfig.url=n}},getShowUrl:{type:Function,default:function(e){var t=e.row;e.col;return this.tableUrl.replace("/assets/","/assets/".concat(t.id,"/system-users/?cache_policy=1"))}}},data:function(){var e=this;return{treeSetting:{showMenu:!1,showRefresh:!0,showAssets:!1,url:this.tableUrl,treeUrl:this.treeUrl,callback:{onSelected:function(t,r){return e.onSelected(r,e)},refresh:e.refreshObjectAssetPermission}},tableConfig:{url:this.tableUrl,hasTree:!0,columns:[{prop:"hostname",label:this.$t("assets.Hostname"),formatter:a["g"],sortable:!0,formatterArgs:{route:"AssetDetail"},showOverflowTooltip:!0},{prop:"ip",label:this.$t("assets.IP"),width:"140px",sortable:"custom"},{prop:"systemUsers",label:this.$t("assets.SystemUsers"),align:"center",formatter:a["n"],formatterArgs:{getUrl:this.getShowUrl.bind(this)},showOverflowTooltip:!0}]},headerActions:{hasLeftActions:!1,hasExport:!1,hasImport:!1}}},methods:{refreshObjectAssetPermission:function(){var e=this.tableUrl.replace("/assets/","/asset-permissions/cache/");return!e.indexOf("user-groups")&&this.$axios.delete(e)}}},c=i,l=r("2877"),u=Object(l["a"])(c,s,n,!1,null,"47c190d1",null);t["a"]=u.exports},c0eb:function(e,t,r){"use strict";var s=r("1157"),n=r.n(s);window.$=n.a,window.jQuery=n.a,t["a"]=n.a},d3b8:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("GenericDetailPage",e._g(e._b({attrs:{object:e.group,"active-menu":e.config.activeMenu},on:{"update:object":function(t){e.group=t},"update:activeMenu":function(t){return e.$set(e.config,"activeMenu",t)},"update:active-menu":function(t){return e.$set(e.config,"activeMenu",t)}}},"GenericDetailPage",e.config,!1),e.$listeners),[r("keep-alive",[r(e.config.activeMenu,{tag:"component",attrs:{object:e.group}})],1)],1)},n=[],a=r("cd4a"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("GrantedAssets",{attrs:{"tree-url":e.treeUrl,"table-url":e.tableUrl}})},i=[],c=r("66ce"),l={name:"GroupGrantedAssets",components:{GrantedAssets:c["a"]},props:{object:{type:Object,required:!0}},data:function(){return{treeUrl:"/api/v1/perms/user-groups/".concat(this.object.id,"/nodes/children/tree/?cache_policy=1"),tableUrl:"/api/v1/perms/user-groups/".concat(this.object.id,"/assets/?cache_policy=1&all=1")}}},u=l,d=r("2877"),p=Object(d["a"])(u,o,i,!1,null,"03a59b50",null),f=p.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{md:14,sm:24}},[r("DetailCard",{attrs:{items:e.detailItems}})],1),e._v(" "),r("el-col",{attrs:{md:10,sm:24}},[r("RelationCard",e._b({},"RelationCard",e.relationConfig,!1))],1)],1)},h=[],b=(r("6d67"),r("7f7f"),r("b97b")),g=r("58fd"),v=r("cf45"),j={name:"GroupInfo",components:{DetailCard:b["a"],RelationCard:g["a"]},props:{object:{type:Object,default:function(){return{}}}},data:function(){var e=this;return{relationConfig:{icon:"fa-user",title:this.$t("common.Members"),objectsAjax:{url:"/api/v1/users/users/?fields_size=mini&order=name",transformOption:function(e){return{label:e.name+"("+e.username+")",value:e.id}}},hasObjectsId:this.object.users,performDelete:function(t){var r=t.value,s=e.object.id,n="/api/v1/users/users-groups-relations/?usergroup=".concat(s,"&user=").concat(r);return e.$axios.delete(n)},performAdd:function(t){var r="/api/v1/users/users-groups-relations/",s=e.object.id,n=t.map((function(e){return{user:e.value,usergroup:s}}));return e.$axios.post(r,n)}}}},computed:{detailItems:function(){return[{key:this.$t("common.Name"),value:this.object.name},{key:this.$t("common.createdBy"),value:this.object.created_by},{key:this.$t("common.dateCreated"),value:Object(v["q"])(this.object.date_created)},{key:this.$t("common.Comment"),value:this.object.comment}]}},watch:{group:function(e,t){this.$log.debug("Group has changed"),this.relationConfig.hasObjectsId=e.users}},methods:{}},w=j,$=Object(d["a"])(w,m,h,!1,null,"17e09ede",null),U=$.exports,y={components:{GenericDetailPage:a["e"],GroupGrantedAssets:f,GroupInfo:U},data:function(){return{group:{name:"",comment:"",users:[]},config:{activeMenu:"GroupInfo",submenu:[{title:this.$t("common.BasicInfo"),name:"GroupInfo"},{title:this.$t("users.tabs.grantedAssets"),name:"GroupGrantedAssets"}]}}},methods:{handleTabClick:function(e){this.$log.debug("Current nav is: ",this.config.activeMenu)}}},C=y,A=Object(d["a"])(C,s,n,!1,null,"e1701658",null);t["default"]=A.exports}}]);