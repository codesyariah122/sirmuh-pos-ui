(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{675:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var n=[{id:1,title:"kode"},{id:2,title:"nama"},{id:5,title:"stok terkini"},{id:25,title:"stok terakhir"},{id:10,title:"harga beli"},{id:11,title:"harga jual"},{id:13,title:"supplier"},{id:14,title:"barcode"}]},926:function(t,e,o){"use strict";o.r(e);var n=o(150),l=(o(53),o(37),o(36),o(675)),r=o(637),c={name:"barang",layout:"admin",data:function(){return{loading:null,options:"",success:null,message_success:"",headers:Object(n.a)(l.a),api_url:"https://sirmuh.api.dksindo.com/api/v1",items:[],routePath:this.$route.path,stringRoute:null,typeRoute:null,activation_id:null,queryParam:this.$route.query.type,totals:0}},created:function(){this.checkNewData()},mounted:function(){this.getBarangTrash(),this.generatePath()},methods:{generatePath:function(){var t=this.routePath.split("/"),e=t[2],o=t[3];console.log(o),this.stringRoute=e,this.typeRoute=o},getBarangTrash:function(){var t=this;this.loading=!0,Object(r.b)({api_url:"".concat(this.api_url,"/data-trash?type=").concat(this.queryParam),api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u",token:this.token.token}).then((function(data){var e;t.totals=null==data||null===(e=data.data)||void 0===e?void 0:e.data.length;var o,n=[];data.success&&((null==data||null===(o=data.data)||void 0===o?void 0:o.data).map((function(t){var e={id:null==t?void 0:t.id,kode:null==t?void 0:t.kode,nama:null==t?void 0:t.nama,photo:null==t?void 0:t.photo,kategori:null==t?void 0:t.kategori,satuanbeli:null==t?void 0:t.satuanbeli,satuan:null==t?void 0:t.satuan,hargabeli:null==t?void 0:t.hargabeli,isi:null==t?void 0:t.isi,stok:null==t?void 0:t.toko,hpp:null==t?void 0:t.hpp,harga_toko:null==t?void 0:t.harga_toko,diskon:null==t?void 0:t.diskon,supplier:null==t?void 0:t.supplier,barcode:null==t?void 0:t.kode_barcode,tgl_terakhir:null==t?void 0:t.tgl_terakhir,expired:"False"!==(null==t?void 0:t.ada_expired_date)?null==t?void 0:t.expired:null};n.push(e)})),t.items=[].concat(n),setTimeout((function(){t.loading=!1}),1500))})).catch((function(t){return console.log(t)}))},deletedData:function(t){var e=this;this.loading=!0,this.options="delete-barang",Object(r.a)({api_url:"".concat(this.api_url,"/data-trash/").concat(t,"?type=").concat(this.queryParam),token:this.token.token,api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}).then((function(data){data.success&&(e.success=!0,1===e.totals?e.$router.go(-1):(e.message_success=data.message,e.scrollToTop()),setTimeout((function(){e.loading=!1,e.options=""}),1500))})).catch((function(t){return console.log(t)}))},restoreData:function(t){var e=this;this.loading=!0,this.options="restore-barang",Object(r.c)({api_url:"".concat(this.api_url,"/data-trash/").concat(t,"?type=").concat(this.queryParam),token:this.token.token,api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}).then((function(data){data.success&&(e.message_success=data.message,1===e.totals?e.$router.go(-1):(e.success=!0,e.scrollToTop()),setTimeout((function(){e.loading=!1,e.options=""}),1500))})).catch((function(t){console.log(t)}))},closeSuccessAlert:function(){this.success=!1,this.message=""}},watch:{notifs:function(){this.$_.size(this.$nuxt.notifs)>0&&"data-barang"===this.$nuxt.notifs[0].routes&&this.getBarangTrash()}}},d=o(8),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-wrap mt-4"},[e("div",{class:"".concat(t.$nuxt.showSidebar?"w-full mb-12 ml-6":"max-w-full")},[e("cards-card-table",{attrs:{color:"light",title:"Barang Trashed",headers:t.headers,columns:t.items,loading:t.loading,types:"data-barang-trash",queryType:"DATA_BARANG",parentRoute:t.stringRoute,typeRoute:t.typeRoute,success:t.success,messageAlert:t.message_success},on:{"close-alert":t.closeSuccessAlert,"deleted-data":t.deletedData,"restored-data":t.restoreData}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardTable:o(674).default})}}]);