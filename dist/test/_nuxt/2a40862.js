(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{701:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=[{id:1,title:"kode"},{id:2,title:"nama"},{id:3,title:"alamat"},{id:4,title:"no. telp"},{id:12,title:"email"},{id:7,title:"saldo piutang"},{id:11,title:"max piutang"}]},896:function(t,e,n){"use strict";n.r(e);var o=n(149),l=(n(62),n(37),n(36),n(701)),c=n(637),r={name:"pelanggan-trash",layout:"admin",data:function(){return{loading:null,options:"",success:null,message_success:"",headers:Object(o.a)(l.a),api_url:"https://sirmuh.api.dksindo.com/api/v1",items:[],routePath:this.$route.path,stringRoute:null,typeRoute:null,activation_id:null,queryParam:this.$route.query.type,totals:0}},created:function(){this.checkNewData()},mounted:function(){this.getPelangganTrash(),this.generatePath()},methods:{generatePath:function(){var t=this.routePath.split("/"),e=t[2],n=t[3];this.stringRoute=e,this.typeRoute=n},getPelangganTrash:function(){var t=this;this.loading=!0,Object(c.b)({api_url:"".concat(this.api_url,"/data-trash?type=").concat(this.queryParam),api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l",token:this.token.token}).then((function(data){var e;t.totals=null==data||null===(e=data.data)||void 0===e?void 0:e.data.length;var n,o=[];data.success&&((null==data||null===(n=data.data)||void 0===n?void 0:n.data).map((function(t){var e={id:null==t?void 0:t.id,nama:null==t?void 0:t.nama,kode:null==t?void 0:t.kode,alamat:null==t?void 0:t.alamat,telp:null==t?void 0:t.telp,pekerjaan:null==t?void 0:t.pekerjaan,tgl_lahir:null==t?void 0:t.tgl_lahir,saldo_piutang:null==t?void 0:t.saldo_piutang,point:null==t?void 0:t.point,sales:null==t?void 0:t.sales,area:null==t?void 0:t.area,max_piutang:null==t?void 0:t.max_piutang,kota:null==t?void 0:t.kota,rayon:null==t?void 0:t.rayon,saldo_tabungan:null==t?void 0:t.saldo_tabungan};o.push(e)})),t.items=[].concat(o),setTimeout((function(){t.loading=!1}),1500))})).catch((function(t){return console.log(t)}))},deletedData:function(t){var e=this;this.loading=!0,this.options="delete-barang",Object(c.a)({api_url:"".concat(this.api_url,"/data-trash/").concat(t,"?type=").concat(this.queryParam),token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){data.success&&(e.success=!0,1===e.totals?e.$router.go(-1):(e.message_success=data.message,e.scrollToTop()),setTimeout((function(){e.loading=!1,e.options=""}),1500))})).catch((function(t){return console.log(t)}))},restoreData:function(t){var e=this;this.loading=!0,this.options="restore-pelanggan",Object(c.c)({api_url:"".concat(this.api_url,"/data-trash/").concat(t,"?type=").concat(this.queryParam),token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){data.success&&(e.message_success=data.message,1===e.totals?e.$router.go(-1):(e.success=!0,e.scrollToTop()),setTimeout((function(){e.loading=!1,e.options=""}),1500))})).catch((function(t){console.log(t)}))},closeSuccessAlert:function(){this.success=!1,this.message=""}},watch:{notifs:function(){this.$_.size(this.$nuxt.notifs)>0&&"data-barang"===this.$nuxt.notifs[0].routes&&this.getPelangganTrash()}}},d=n(8),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-wrap mt-4"},[e("div",{class:"".concat(t.$nuxt.showSidebar?"w-full mb-12 ml-6":"max-w-full")},[e("cards-card-table",{attrs:{color:"light",title:"PELANGGAN TRASHED",headers:t.headers,columns:t.items,loading:t.loading,types:"data-pelanggan-trash",queryType:"DATA_PELANGGAN",parentRoute:t.stringRoute,typeRoute:t.typeRoute,success:t.success,messageAlert:t.message_success},on:{"close-alert":t.closeSuccessAlert,"deleted-data":t.deletedData,"restored-data":t.restoreData}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardTable:n(642).default})}}]);