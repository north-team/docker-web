(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21ab1d"],{bd38:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("GenericDetailPage",t._g(t._b({attrs:{object:t.ticket,"active-menu":t.config.activeMenu},on:{"update:object":function(e){t.ticket=e},"update:activeMenu":function(e){return t.$set(t.config,"activeMenu",e)},"update:active-menu":function(e){return t.$set(t.config,"activeMenu",e)},getObjectDone:t.afterGetTicket}},"GenericDetailPage",t.config,!1),t.$listeners),[i(t.config.activeMenu,{tag:"component",attrs:{object:t.ticket}})],1)},c=[],s=i("cd4a"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("GenericTicketDetail",{attrs:{object:t.object,"detail-card-items":t.detailCardItems}})},o=[],r=i("0218"),u=i("ed08"),l=i("cf45"),p=i("9cdc"),m={name:"TicketDetail",components:{GenericTicketDetail:p["a"]},props:{object:{type:Object,default:function(){return{}}}},data:function(){return{statusMap:"open"===this.object.status?r["e"]["notified"]:r["e"][this.object.state],imageUrl:i("059c"),form:{comments:""},comments:""}},computed:{detailCardItems:function(){var t=this,e=this.$createElement;return[{key:this.$t("tickets.Applicant"),value:this.object.applicant_display},{key:this.$t("tickets.type"),value:this.object.type_display},{key:this.$t("tickets.status"),value:this.object.status,formatter:function(i,a){return e("el-tag",{attrs:{type:t.statusMap.type,size:"mini"}},[" ",t.statusMap.title])}},{key:this.$t("tickets.Assignees"),value:this.object.process_map[this.object.approval_step-1].assignees_display.join(",")},{key:this.$t("tickets.Assignee"),value:this.object.process_map[this.object.approval_step-1].processor_display},{key:this.$t("common.dateCreated"),value:Object(l["q"])(this.object.date_created)}]}},methods:{formatTime:function(t){return Object(u["a"])(Object(u["b"])(t))},toSafeLocalDateStr:function(t){return Object(l["q"])(t)}}},d=m,f=i("2877"),b=Object(f["a"])(d,n,o,!1,null,"355cb4a6",null),k=b.exports,h={components:{GenericDetailPage:s["e"],TicketDetail:k,TabPage:s["m"]},data:function(){return{ticket:{title:"",user_display:"",type_display:"",status:"",assignees_display:"",date_created:""},config:{activeMenu:"TicketDetail",submenu:[{title:this.$t("route.TicketDetail"),name:"TicketDetail"}],getObjectName:this.getObjectName,hasRightSide:!1}}},methods:{getObjectName:function(){return this.ticket.title},afterGetTicket:function(t){var e=this,i={apply_asset:"AssetsTicketDetail",apply_application:"AppsTicketDetail",login_confirm:"LoginAssetTicketDetail",login_asset_confirm:"LoginAssetTicketDetail",command_confirm:"CommandConfirmDetail"},a=i[t.type];setTimeout((function(){e.$router.push({name:a,params:{id:e.$route.params["id"]}})}))}}},j=h,g=Object(f["a"])(j,a,c,!1,null,"12a81178",null);e["default"]=g.exports}}]);