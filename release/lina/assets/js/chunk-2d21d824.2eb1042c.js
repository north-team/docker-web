(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d824"],{d233:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("GenericListPage",{attrs:{"table-config":e.tableConfig,"header-actions":e.headerActions}})},n=[],r=(a("8ea5"),a("4d4a")),i=a("cf45"),s={components:{GenericListPage:r["a"]},data:function(){var e=new Date,t=Object(i["h"])(7,e).toISOString(),a=Object(i["f"])(e).toISOString();return{tableConfig:{url:"/api/v1/audits/password-change-logs/",columns:["user","change_by","remote_addr","datetime"],columnsMeta:{user:{showOverflowTooltip:!0},change_by:{showOverflowTooltip:!0},remote_addr:{showOverflowTooltip:!0,width:"140px"},datetime:{width:"180px"}},extraQuery:{date_to:a,date_from:t}},headerActions:{hasLeftActions:!1,hasImport:!1,hasDatePicker:!0,datePicker:{dateStart:t,dateEnd:a}}}}},c=s,d=a("2877"),l=Object(d["a"])(c,o,n,!1,null,null,null);t["default"]=l.exports}}]);