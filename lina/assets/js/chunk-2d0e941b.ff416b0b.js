(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e941b"],{"8d81":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("GenericDetailPage",t._g(t._b({attrs:{object:t.ticket,"active-menu":t.config.activeMenu},on:{"update:object":function(e){t.ticket=e},"update:activeMenu":function(e){return t.$set(t.config,"activeMenu",e)},"update:active-menu":function(e){return t.$set(t.config,"activeMenu",e)}}},"GenericDetailPage",t.config,!1),t.$listeners),[i(t.config.activeMenu,{tag:"component",attrs:{object:t.ticket}})],1)},c=[],n=i("cd4a"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("GenericTicketDetail",{attrs:{object:t.object,"detail-card-items":t.detailCardItems,"special-card-items":t.specialCardItems}})},o=[],u=i("0218"),r=i("ed08"),l=i("cf45"),p=i("9cdc"),m={name:"AssetTicketDetail",components:{GenericTicketDetail:p["a"]},props:{object:{type:Object,default:function(){return{}}}},data:function(){return{statusMap:"open"===this.object.status?u["e"]["notified"]:u["e"][this.object.state],imageUrl:i("059c"),form:{comments:""},comments:""}},computed:{detailCardItems:function(){var t=this,e=this.$createElement;return[{key:this.$t("tickets.Applicant"),value:this.object["applicant_display"]},{key:this.$t("tickets.type"),value:this.object.type_display},{key:this.$t("tickets.status"),value:this.object.status,formatter:function(i,a){return e("el-tag",{attrs:{type:t.statusMap.type,size:"mini"}},[" ",t.statusMap.title])}},{key:this.$t("common.dateCreated"),value:Object(l["q"])(this.object.date_created)}]},specialCardItems:function(){return"login_confirm"===this.object.type?[]:[{key:this.$t("acl.apply_login_asset"),value:this.object.meta["apply_login_asset"]},{key:this.$t("acl.apply_login_system_user"),value:this.object.meta["apply_login_system_user"]},{key:this.$t("acl.apply_login_user"),value:this.object.meta["apply_login_user"]}]}},methods:{formatTime:function(t){return Object(r["a"])(Object(r["b"])(t))},toSafeLocalDateStr:function(t){return Object(l["q"])(t)}}},d=m,b=i("2877"),f=Object(b["a"])(d,s,o,!1,null,"2e53f8ba",null),h=f.exports,_={components:{GenericDetailPage:n["e"],TicketDetail:h,TabPage:n["m"]},data:function(){return{ticket:{title:"",user_display:"",type_display:"",status:"",assignees_display:"",date_created:""},config:{activeMenu:"TicketDetail",url:"",submenu:[{title:this.$t("route.TicketDetail"),name:"TicketDetail"}],actions:{detailApiUrl:"/api/v1/tickets/tickets/".concat(this.$route.params.id,"/")},getObjectName:this.getObjectName,hasRightSide:!1}}},mounted:function(){},methods:{getObjectName:function(){return this.ticket.title}}},k=_,y=Object(b["a"])(k,a,c,!1,null,"11ec2d72",null);e["default"]=y.exports}}]);