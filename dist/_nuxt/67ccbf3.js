(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{729:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=[{id:1,title:"tanggal"},{id:2,title:"no faktur"},{id:3,title:"lunas"},{id:16,title:"status"},{id:22,title:"return"},{id:13,title:"pelanggan"},{id:7,title:"jumlah"},{id:14,title:"diskon"},{id:12,title:"operator"}]},986:function(t,e,n){"use strict";n.r(e);var o=n(152),l=(n(53),n(30),n(37),n(729)),c=n(670),r={name:"pembelian-langsung-trash",layout:"admin",data:function(){return{loading:null,options:"",success:null,message_success:"",headers:Object(o.a)(l.a),api_url:"https://sirmuh.api.dksindo.com/api/v1",items:[],routePath:this.$route.path,stringRoute:null,typeRoute:null,notifs:[],activation_id:null,queryParam:this.$route.query.type,totals:0}},created:function(){this.checkNewData()},mounted:function(){this.getBarangTrash(!0),this.generatePath()},methods:{generatePath:function(){var t=this.routePath.split("/"),e=t[2],n=t[3];this.stringRoute=e,this.typeRoute=n},checkNewData:function(){var t=this;window.Echo.channel("sirmuh-pos").listen("EventNotification",(function(e){t.notifs.push(e),t.messageNotifs=e[0].notif}))},getBarangTrash:function(t){var e=this;this.loading=t,Object(c.b)({api_url:"".concat(this.api_url,"/data-trash?type=").concat(this.queryParam),api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u",token:this.token.token}).then((function(data){var t;e.totals=null==data||null===(t=data.data)||void 0===t?void 0:t.data.length;var n=[];if(data.success){var o,l=null==data||null===(o=data.data)||void 0===o?void 0:o.data;console.log(l),l.map((function(t){var e={id:null==t?void 0:t.id,tanggal:null==t?void 0:t.tanggal,kode:null==t?void 0:t.kode,kode_kas:null==t?void 0:t.kode_kas,jumlah:null==t?void 0:t.jumlah,lunas:null==t?void 0:t.lunas,operator:null==t?void 0:t.operator};n.push(e)})),e.items=[].concat(n),setTimeout((function(){e.loading=!1}),1500)}})).catch((function(t){e.loading=!1}))},deletedData:function(t){var e=this;this.loading=!0,this.options="penjualan-toko",Object(c.a)({api_url:"".concat(this.api_url,"/data-trash/").concat(t,"?type=").concat(this.queryParam),token:this.token.token,api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}).then((function(data){data.success&&(e.success=!0,1===e.totals?e.$router.go(-1):(e.message_success=data.message,e.scrollToTop()),setTimeout((function(){e.loading=!1,e.options=""}),1500))})).catch((function(t){return console.log(t)}))},restoreData:function(t){var e=this;this.$_.size(this.$nuxt.notifs)>0?this.$nuxt.notifs[0].user.email===this.$nuxt.userData.email&&(this.loading=!0):this.loading=!0,this.options="penjualan-toko",Object(c.c)({api_url:"".concat(this.api_url,"/data-trash/").concat(t,"?type=").concat(this.queryParam),token:this.token.token,api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}).then((function(data){data.success&&(e.message_success=data.message,1===e.totals?e.$router.go(-1):(e.success=!0,e.scrollToTop()),setTimeout((function(){e.loading=!1,e.options=""}),1500))})).catch((function(t){console.log(t)}))},closeSuccessAlert:function(){this.success=!1,this.message=""}},watch:{notifs:function(){this.$_.size(this.$nuxt.notifs)>0&&"data-barang"===this.$nuxt.notifs[0].routes&&this.getBarangTrash(!1)}}},d=n(8),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-wrap mt-4"},[e("div",{staticClass:"w-full mb-12 px-4"},[e("cards-card-table",{attrs:{color:"light",title:"Penjualan Toko Trashed",headers:t.headers,columns:t.items,loading:t.loading,types:"penjualan-toko-trash",queryType:"PENJUALAN_TOKO",parentRoute:t.stringRoute,typeRoute:t.typeRoute,success:t.success,messageAlert:t.message_success},on:{"close-alert":t.closeSuccessAlert,"deleted-data":t.deletedData,"restored-data":t.restoreData}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardTable:n(709).default})}}]);