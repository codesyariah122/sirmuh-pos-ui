(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{615:function(t,e,n){"use strict";n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return d})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return f}));var l=[{id:1,title:"fullname"},{id:2,title:"Photo"},{id:3,title:"username"},{id:4,title:"role"},{id:5,title:"email"},{id:6,title:"phone number"},{id:7,title:"status"},{id:8,title:"last login"},{id:9,title:"expires in"},{id:10,title:"is login"}],o=[{id:1,title:"role name"},{id:2,title:"users"}],d=[{id:1,title:"fullname"},{id:2,title:"email"},{id:3,title:"phone number"},{id:4,title:"status"}],r=[{id:1,title:"kode"},{id:2,title:"nama"},{id:3,title:"photo"},{id:4,title:"tanggal beli"},{id:5,title:"kategori"},{id:6,title:"satuan beli"},{id:7,title:"satuan"},{id:8,title:"isi"},{id:9,title:"stok"},{id:10,title:"harga beli"},{id:11,title:"harga jual"},{id:12,title:"diskon"},{id:13,title:"supplier"},{id:14,title:"barcode"},{id:15,title:"expired"}],c=[{id:1,title:"kode"},{id:2,title:"description"}],h=[{id:1,title:"image"},{id:2,title:"name"},{id:3,title:"no.rek"},{id:4,title:"owner"},{id:5,title:"status"},{id:6,title:"type"}],f=[{id:1,title:"image"},{id:2,title:"name"},{id:3,title:"no.rek"},{id:4,title:"owner"},{id:5,title:"status"},{id:6,title:"type"}]},662:function(t,e,n){"use strict";n.r(e);var l=n(130),o=(n(59),n(36),n(11),n(35),n(615)),d=n(610),r={name:"barang",layout:"admin",data:function(){return{loading:null,options:"",success:null,message_success:"",headers:Object(l.a)(o.c),api_url:"https://sirmuh.api.dksindo.com/api/v1",items:[],notifs:[],activation_id:null,queryParam:this.$route.query.type,totals:0}},created:function(){this.checkNewData()},mounted:function(){this.getBarangTrash()},methods:{checkNewData:function(){var t=this;window.Echo.channel("sirmuh-pos").listen("EventNotification",(function(e){t.notifs.push(e),t.messageNotifs=e[0].notif}))},getBarangTrash:function(){var t=this;Object(d.c)({api_url:"".concat(this.api_url,"/data-trash?type=").concat(this.queryParam),api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l",token:this.token.token}).then((function(e){var n,data=e.data;t.totals=t.$_.size(data.data);var l=[];null==data||null===(n=data.data)||void 0===n||n.map((function(t){var e={id:null==t?void 0:t.id,kode:null==t?void 0:t.kode,nama:null==t?void 0:t.nama,photo:null==t?void 0:t.photo,kategori:null==t?void 0:t.kategori,satuanbeli:null==t?void 0:t.satuanbeli,satuan:null==t?void 0:t.satuan,hargabeli:null==t?void 0:t.hargabeli,isi:null==t?void 0:t.isi,stok:null==t?void 0:t.toko,hpp:null==t?void 0:t.hpp,harga_toko:null==t?void 0:t.harga_toko,diskon:null==t?void 0:t.diskon,supplier:null==t?void 0:t.supplier,barcode:null==t?void 0:t.kode_barcode,tgl_terakhir:null==t?void 0:t.tgl_terakhir,expired:"False"!==(null==t?void 0:t.ada_expired_date)?null==t?void 0:t.expired:null};l.push(e)})),t.items=[].concat(l)})).catch((function(t){return console.log(t)}))},deletedData:function(t){var e=this;this.loading=!0,this.options="delete-barang",Object(d.b)({api_url:"".concat(this.api_url,"/data-trash/").concat(t,"?type=").concat(this.queryParam),token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){data.success&&(e.success=!0,e.totals>1?(e.message_success=data.message,e.scrollToTop()):e.$router.go(-1))})).finally((function(){setTimeout((function(){e.loading=!1,e.options=""}),1e3)})).catch((function(t){return console.log(t)}))},restoreData:function(t){var e=this;this.loading=!0,this.options="restore-barang",Object(d.d)({api_url:"".concat(this.api_url,"/data-trash/").concat(t,"?type=").concat(this.queryParam),token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){null===data.deleted_at&&(e.totals>1?(e.success=!0,e.scrollToTop()):e.$router.go(-1))})).finally((function(){setTimeout((function(){e.loading=!1,e.options=""}),1e3)})).catch((function(t){console.log(t)}))},closeSuccessAlert:function(){this.success=!1,this.message=""}},watch:{notifs:function(){this.$_.size(this.notifs)>0&&this.getBarangTrash()}}},c=n(5),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-wrap mt-4"},[e("div",{staticClass:"w-full mb-12 px-4"},[e("cards-card-table",{attrs:{color:"dark",title:"Barang Trashed",headers:t.headers,columns:t.items,loading:t.loading,types:"data-barang-trash",queryType:"DATA_BARANG",success:t.success,messageAlert:t.message_success},on:{"close-alert":t.closeSuccessAlert,"deleted-data":t.deletedData,"restored-data":t.restoreData}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardTable:n(620).default})}}]);