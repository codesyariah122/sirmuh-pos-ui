(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{742:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var n=[{id:1,title:"nama"},{id:2,title:"kode"},{id:3,title:"saldo awal"},{id:4,title:"saldo terkini"}]},964:function(t,e,o){"use strict";o.r(e);var n=o(152),c=(o(15),o(53),o(30),o(37),o(742)),l=o(670),r={name:"kas-trash",layout:"admin",data:function(){return{loading:null,options:"",success:null,message_success:"",headers:Object(n.a)(c.a),api_url:"https://sirmuh.api.dksindo.com/api/v1",items:[],routePath:this.$route.path,stringRoute:null,typeRoute:null,activation_id:null,queryParam:this.$route.query.type,totals:0}},created:function(){this.checkNewData()},mounted:function(){this.getDataKas(!0),this.generatePath()},methods:{generatePath:function(){var t=this.routePath.split("/"),e=t[2],o=t[3];this.stringRoute=e,this.typeRoute=o},getDataKas:function(t){var e=this;this.loading=t,Object(l.b)({api_url:"".concat(this.api_url,"/data-trash?type=").concat(this.queryParam),api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u",token:this.token.token}).then((function(data){var t;console.log(null==data?void 0:data.data),e.totals=null==data||null===(t=data.data)||void 0===t?void 0:t.data.length;var o,n=[];data.success&&((null==data||null===(o=data.data)||void 0===o?void 0:o.data).map((function(t){var e={id:null==t?void 0:t.id,kode:null==t?void 0:t.kode,nama:null==t?void 0:t.nama,saldo:null==t?void 0:t.saldo};n.push(e)})),e.items=[].concat(n))})).finally((function(){setTimeout((function(){e.loading=!1}),1500)})).catch((function(t){return console.log(t)}))},deletedData:function(t){var e=this;this.loading=!0,this.options="delete-kas",Object(l.a)({api_url:"".concat(this.api_url,"/data-trash/").concat(t,"?type=").concat(this.queryParam),token:this.token.token,api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}).then((function(data){data.success&&(e.success=!0,1===e.totals?e.$router.go(-1):(e.message_success=data.message,e.scrollToTop()),setTimeout((function(){e.loading=!1,e.options=""}),1500))})).catch((function(t){return console.log(t)}))},restoreData:function(t){var e=this;this.loading=!0,this.options="restore-kas",Object(l.c)({api_url:"".concat(this.api_url,"/data-trash/").concat(t,"?type=").concat(this.queryParam),token:this.token.token,api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}).then((function(data){data.success&&(e.message_success=data.message,1===e.totals?e.$router.go(-1):(e.success=!0,e.scrollToTop()),setTimeout((function(){e.loading=!1,e.options=""}),1500))})).catch((function(t){console.log(t)}))},closeSuccessAlert:function(){this.success=!1,this.message=""}},watch:{notifs:function(){this.$_.size(this.$nuxt.notifs)>0&&"kas"===this.$nuxt.notifs[0].routes&&this.getDataKas(!1)}}},d=o(8),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-wrap mt-4"},[e("div",{class:"".concat(t.$nuxt.showSidebar?"w-full mb-12 px-6":"max-w-full")},[e("cards-card-table",{attrs:{color:"light",title:"KAS TRASHED",headers:t.headers,columns:t.items,loading:t.loading,types:"data-kas-trash",queryType:"DATA_KAS",parentRoute:t.stringRoute,typeRoute:t.typeRoute,success:t.success,messageAlert:t.message_success},on:{"close-alert":t.closeSuccessAlert,"deleted-data":t.deletedData,"restored-data":t.restoreData}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardTable:o(709).default})}}]);