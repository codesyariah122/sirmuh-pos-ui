(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{740:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var n=[{id:1,title:"kode"},{id:2,title:"nama"},{id:3,title:"alamat"},{id:5,title:"telp"},{id:7,title:"email"},{id:8,title:"hutang"}]},955:function(t,e,o){"use strict";o.r(e);var n=o(152),l=(o(15),o(53),o(37),o(36),o(740)),c=o(670),r={name:"supplier-trash",layout:"admin",data:function(){return{loading:null,options:"",success:null,message_success:"",headers:Object(n.a)(l.a),api_url:"https://sirmuh.api.dksindo.com/api/v1",items:[],routePath:this.$route.path,stringRoute:null,typeRoute:null,activation_id:null,queryParam:this.$route.query.type,totals:0}},created:function(){this.checkNewData()},mounted:function(){this.getSupplierTrash(),this.generatePath()},methods:{generatePath:function(){var t=this.routePath.split("/"),e=t[2],o=t[3];console.log(o),this.stringRoute=e,this.typeRoute=o},getSupplierTrash:function(){var t=this;this.loading=!0,Object(c.b)({api_url:"".concat(this.api_url,"/data-trash?type=").concat(this.queryParam),api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u",token:this.token.token}).then((function(data){var e;t.totals=null==data||null===(e=data.data)||void 0===e?void 0:e.data.length;var o,n=[];data.success&&((null==data||null===(o=data.data)||void 0===o?void 0:o.data).map((function(t){var e={id:null==t?void 0:t.id,nama:null==t?void 0:t.nama,kode:null==t?void 0:t.kode,kota:null==t?void 0:t.kota,alamat:null==t?void 0:t.alamat,telp:null==t?void 0:t.telp,fax:null==t?void 0:t.fax,email:null==t?void 0:t.email,saldo_piutang:null==t?void 0:t.saldo_piutang};n.push(e)})),t.items=[].concat(n))})).finally((function(){setTimeout((function(){t.loading=!1}),1500)})).catch((function(t){return console.log(t)}))},deletedData:function(t){var e=this;this.loading=!0,this.options="delete-suplier",Object(c.a)({api_url:"".concat(this.api_url,"/data-trash/").concat(t,"?type=").concat(this.queryParam),token:this.token.token,api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}).then((function(data){data.success&&(e.success=!0,1===e.totals?e.$router.go(-1):(e.message_success=data.message,e.scrollToTop()))})).finally((function(){setTimeout((function(){e.loading=!1,e.options=""}),1e3)})).catch((function(t){return console.log(t)}))},restoreData:function(t){var e=this;this.loading=!0,this.options="restore-supplier",Object(c.c)({api_url:"".concat(this.api_url,"/data-trash/").concat(t,"?type=").concat(this.queryParam),token:this.token.token,api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}).then((function(data){data.success&&(e.message_success=data.message,1===e.totals?e.$router.go(-1):(e.success=!0,e.scrollToTop()))})).finally((function(){setTimeout((function(){e.loading=!1,e.options=""}),1500)})).catch((function(t){console.log(t)}))},closeSuccessAlert:function(){this.success=!1,this.message=""}},watch:{notifs:function(){this.$_.size(this.$nuxt.notifs)>0&&"supplier"===this.$nuxt.notifs[0].routes&&this.getSupplierTrash()}}},d=o(8),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-wrap mt-4"},[e("div",{class:"".concat(t.$nuxt.showSidebar?"w-full mb-12 ml-6":"max-w-full")},[e("cards-card-table",{attrs:{color:"light",title:"SUPPLIER TRASHED",headers:t.headers,columns:t.items,loading:t.loading,types:"data-suppplier-trash",queryType:"DATA_SUPPLIER",parentRoute:t.stringRoute,typeRoute:t.typeRoute,success:t.success,messageAlert:t.message_success},on:{"close-alert":t.closeSuccessAlert,"deleted-data":t.deletedData,"restored-data":t.restoreData}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardTable:o(709).default})}}]);