(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{704:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var n=[{id:1,title:"tanggal"},{id:2,title:"no faktur"},{id:6,title:"supplier"},{id:13,title:"kas"},{id:7,title:"jumlah DP"},{id:14,title:"sisa DP"},{id:15,title:"Hutang"},{id:8,title:"lunas"},{id:12,title:"operator"}]},921:function(t,e,o){"use strict";o.r(e);var n=o(149),l=(o(62),o(37),o(36),o(704)),c=o(637),r={name:"purchase-order-trash",layout:"admin",data:function(){return{loading:null,options:"",success:null,message_success:"",headers:Object(n.a)(l.a),api_url:"https://sirmuh.api.dksindo.com/api/v1",items:[],routePath:this.$route.path,stringRoute:null,typeRoute:null,notifs:[],activation_id:null,queryParam:this.$route.query.type,totals:0}},created:function(){this.checkNewData()},mounted:function(){this.getBarangTrash(),this.generatePath()},methods:{generatePath:function(){var t=this.routePath.split("/"),e=t[2],o=t[3];this.stringRoute=e,this.typeRoute=o},checkNewData:function(){var t=this;window.Echo.channel("sirmuh-pos").listen("EventNotification",(function(e){t.notifs.push(e),t.messageNotifs=e[0].notif}))},getBarangTrash:function(){var t=this;this.loading=!0,Object(c.b)({api_url:"".concat(this.api_url,"/data-trash?type=").concat(this.queryParam),api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l",token:this.token.token}).then((function(data){var e;t.totals=null==data||null===(e=data.data)||void 0===e?void 0:e.data.length;var o,n=[];data.success&&((null==data||null===(o=data.data)||void 0===o?void 0:o.data).map((function(t){var e={id:null==t?void 0:t.id,tanggal:null==t?void 0:t.tanggal,kode:null==t?void 0:t.kode,kode_kas:null==t?void 0:t.kode_kas,kas_nama:null==t?void 0:t.kas_nama,jumlah:null==t?void 0:t.jumlah,hutang:null==t?void 0:t.hutang,lunas:null==t?void 0:t.lunas,operator:null==t?void 0:t.operator,supplier:null==t?void 0:t.supplier,nama_supplier:null==t?void 0:t.nama_supplier};n.push(e)})),t.items=[].concat(n),setTimeout((function(){t.loading=!1}),500))})).catch((function(t){return console.log(t)}))},deletedData:function(t){var e=this;this.loading=!0,this.options="delete-purchase-order",Object(c.a)({api_url:"".concat(this.api_url,"/data-trash/").concat(t,"?type=").concat(this.queryParam),token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){data.success&&(e.success=!0,1===e.totals?e.$router.go(-1):(e.message_success=data.message,e.scrollToTop()),setTimeout((function(){e.loading=!1,e.options=""}),500))})).catch((function(t){return console.log(t)}))},restoreData:function(t){var e=this;this.loading=!0,this.options="restore-purchase-order",Object(c.c)({api_url:"".concat(this.api_url,"/data-trash/").concat(t,"?type=").concat(this.queryParam),token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){data.success&&(e.message_success=data.message,1===e.totals?e.$router.go(-1):(e.success=!0,e.scrollToTop()),setTimeout((function(){e.loading=!1,e.options=""}),500))})).catch((function(t){console.log(t)}))},closeSuccessAlert:function(){this.success=!1,this.message=""}},watch:{notifs:function(){this.$_.size(this.$nuxt.notifs)>0&&(console.log(),"purchase-order"===this.$nuxt.notifs[0].routes&&this.getBarangTrash())}}},d=o(8),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-wrap mt-4"},[e("div",{staticClass:"w-full mb-12 px-4"},[e("cards-card-table",{attrs:{color:"dark",title:"Pembelian P.O Trash",headers:t.headers,columns:t.items,loading:t.loading,types:"purchase-order-trash",queryType:"PURCHASE_ORDER",parentRoute:t.stringRoute,typeRoute:t.typeRoute,success:t.success,messageAlert:t.message_success},on:{"close-alert":t.closeSuccessAlert,"deleted-data":t.deletedData,"restored-data":t.restoreData}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardTable:o(642).default})}}]);