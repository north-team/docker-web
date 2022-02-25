(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc165656"],{"3cc2":function(e,t,r){},"90eb":function(e,t,r){"use strict";var n=r("fe11"),a=r.n(n);a.a},c0eb:function(e,t,r){"use strict";var n=r("1157"),a=r.n(n);window.$=a.a,window.jQuery=a.a,t["a"]=a.a},d58a:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",{staticStyle:{border:"none",background:"none","white-space":"pre-wrap",padding:"10px 20px"}},[e._v(e._s("$ "+e.row.input)+"\n"),r("br"),e._v("\n"+e._s(e.row.output)+"\n  ")])},a=[],s=r("bb1a"),i={name:"OutputExpandFormatter",extends:s["a"]},o=i,c=r("2877"),l=Object(c["a"])(o,n,a,!1,null,"af1dcad0",null),d=l.exports;r.d(t,"a",(function(){return d}))},d87e:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("GenericTreeListPage",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"GenericTreeListPage",staticClass:"command-list-table",attrs:{"table-config":e.tableConfig,"header-actions":e.headerActions,"tree-setting":e.treeSetting},on:{TreeInitFinish:e.checkFirstNode,TagSearch:e.handleTagChange,TagFilter:e.handleFilterChange,TagDateChange:e.handleDateChange}})},a=[],s=(r("6b54"),r("87b3"),r("4f37"),r("ac6a"),r("456d"),r("d25f"),r("0cd8"),r("57e7"),r("96cf"),r("3b8d")),i=(r("8ea5"),r("fbde")),o=r("cf45"),c=r("d58a"),l=r("e975"),d=r("fdfa"),u=r("3c4e"),f=r.n(u),h=r("5f9c"),p=r("2934"),b={components:{GenericTreeListPage:i["a"]},data:function(){var e=this,t=this.$createElement,r=this,n=new Date,a=Object(o["h"])(2,n).toISOString(),i=Object(o["f"])(n).toISOString();return{query:{date_from:Object(o["h"])(2,n).toISOString(),date_to:Object(o["f"])(n).toISOString()},loading:!0,tableConfig:{url:"",tableAttrs:{rowClassName:function(e){var t=e.row;return 5===t.risk_level?"risk-command":"command"}},columns:["expandCol","input","risk_level","user","remote_addr","asset","system_user","session","timestamp"],extraQuery:{date_to:i,date_from:a},columnsMeta:{expandCol:{type:"expand",prop:"output",label:"",formatter:c["a"]},risk_level:{label:this.$t("sessions.riskLevel"),width:"105px",formatter:function(e,r,n){var a=e["risk_level_display"];return 0===n?a:t("span",{class:"text-danger"},[" ",a," "])}},user:{showOverflowTooltip:!0},asset:{width:"140px",showOverflowTooltip:!0},system_user:{width:"140px",showOverflowTooltip:!0},session:{label:this.$t("sessions.session"),formatter:l["g"],width:"80px",formatterArgs:{getTitle:function(){return r.$t("sessions.goto")},getRoute:function(e){var t=e.cellValue;return{name:"SessionDetail",params:{id:t}}}}},timestamp:{label:this.$t("sessions.date"),width:"150px",sortable:"custom",formatter:function(e){return Object(o["q"])(1e3*e.timestamp)}}}},headerActions:{hasLeftActions:!1,hasImport:!1,hasDatePicker:!0,canExportSelected:!0,exportOptions:{performExport:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r,n,a,s){var i,o,c,l,d,u,f,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=e.tableConfig.url,i="".concat(i),o=Object.assign({},a),"selected"!==n){t.next=11;break}for(c=[],l=r,d=0;d<l.length;d++)c.push(l[d].id);return t.next=9,Object(p["a"])(c);case 9:u=t.sent,o["spm"]=u.spm;case 11:o["format"]=s,f=(i.indexOf("?")>-1?"&":"?")+h["d"](o,"=","&"),i+=f,e.$log.debug("Export url: ",e.url,"=>",i),b=document.createElement("a"),b.href=i,b.click(),window.URL.revokeObjectURL(i+f);case 19:case"end":return t.stop()}}),t)})));function r(e,r,n,a){return t.apply(this,arguments)}return r}()},datePicker:{dateStart:a,dateEnd:i}},treeSetting:{showMenu:!1,showRefresh:!0,showAssets:!1,treeUrl:"/api/v1/terminal/command-storages/tree/?real=1&date_from=".concat(a,"&date_to=").concat(i),view:{fontCss:function(e,t){return t.chkDisabled?{opacity:"0.4"}:{}}},callback:{onSelected:function(t,r){"root"!==r.id&&(r.valid?e.tableConfig.url="/api/v1/terminal/commands/?command_storage_id=".concat(r.id,"&order=-timestamp"):e.$message.error(e.$t("sessions.EsDisabled")))}}}}},computed:{treeTable:function(){return this.$refs.GenericTreeListPage.$refs.TreeTable}},watch:{},methods:{checkFirstNode:function(e){var t=e,r=t.getNodes();r[0].children.length>0&&t.selectNode(r[0].children[0]),this.loading=!1},handleTagChange:function(e){var t=this.cleanUrl(e),r="/api/v1/terminal/command-storages/tree/?real=1",n=(r.indexOf("?")>-1?"&":"?")+h["d"](t,"=","&"),a=r+n;this.$set(this.treeSetting,"treeUrl",a)},handleFilterChange:function(e){var t=this.cleanUrl(e),r="/api/v1/terminal/command-storages/tree/?real=1",n=(r.indexOf("?")>-1?"&":"?")+h["d"](t,"=","&"),a=r+n;this.$set(this.treeSetting,"treeUrl",a)},handleDateChange:function(e){this.query={date_from:e[0].toISOString(),date_to:e[1].toISOString()};var t="/api/v1/terminal/command-storages/tree/?real=1",r=(t.indexOf("?")>-1?"&":"?")+h["d"](this.query,"=","&"),n=t+r;this.$set(this.treeSetting,"treeUrl",n),this.treeTable.forceRerenderTree()},cleanUrl:function(e){return e=Object.keys(e).filter((function(t){return!Object(d["a"])(e[t])})).reduce((function(t,r){return t[r]=e[r].toString().trim(),t}),{}),e=f()(this.query,e),e}}},g=b,m=(r("90eb"),r("2877")),O=Object(m["a"])(g,n,a,!1,null,"47294810",null);t["default"]=O.exports},fbde:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Page",e._b({},"Page",e.$attrs,!1),[r("TreeTable",e._g(e._b({ref:"TreeTable",scopedSlots:e._u([{key:"table",fn:function(){return[e._t("table")]},proxy:!0},{key:"rMenu",fn:function(t){var n=t.data;return r("div",{},[e._t("rMenu",null,{data:n})],2)}}],null,!0)},"TreeTable",e.$attrs,!1),e.$listeners))],1)},a=[],s=(r("1c01"),r("58b2"),r("8e6e"),r("f3e2"),r("d25f"),r("ac6a"),r("456d"),r("bd86")),i=r("83b2"),o=r("8ad4"),c=r("2f62");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={name:"GenericTreeListPage",components:{Page:i["a"],TreeTable:o["a"]},computed:d({},Object(c["b"])(["currentOrgIsRoot"])),created:function(){var e=this.$attrs["header-actions"]||{};void 0===e.canCreate&&this.currentOrgIsRoot&&_.set(this.$attrs,"header-actions.canCreate",!1),void 0===e.hasImport&&this.currentOrgIsRoot&&_.set(this.$attrs,"header-actions.hasImport",!1)},methods:{hideRMenu:function(){this.$refs.TreeTable.hideRMenu()},getSelectedNodes:function(){return this.$refs.TreeTable.getSelectedNodes()},getNodes:function(){return this.$refs.TreeTable.getNodes()},selectNode:function(e){return this.$refs.TreeTable.selectNode(e)}}},f=u,h=r("2877"),p=Object(h["a"])(f,n,a,!1,null,"e5ee6c70",null);t["a"]=p.exports},fe11:function(e,t,r){}}]);