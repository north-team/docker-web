(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20e7ea"],{b039:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("GenericListPage",{attrs:{"table-config":e.tableConfig,"header-actions":e.headerActions}})},r=[],i=(a("8ea5"),a("4d4a")),n=a("cf45"),s={components:{GenericListPage:i["a"]},data:function(){var e=new Date,t=Object(n["h"])(7,e).toISOString(),a=Object(n["f"])(e).toISOString();return{tableConfig:{url:"/api/v1/audits/operate-logs/",columns:["user","action_display","resource_type_display","resource","remote_addr","datetime"],columnsMeta:{user:{showOverflowTooltip:!0},resource_type:{showOverflowTooltip:!0,width:"180px"},resource:{showOverflowTooltip:!0},datetime:{width:"160px"},remote_addr:{width:"140px"},action_display:{width:"90px"}},extraQuery:{date_to:a,date_from:t}},headerActions:{hasLeftActions:!1,hasImport:!1,hasDatePicker:!0,datePicker:{dateStart:t,dateEnd:a}}}}},c=s,d=a("2877"),l=Object(d["a"])(c,o,r,!1,null,null,null);t["default"]=l.exports}}]);