(window.webpackJsonp=window.webpackJsonp||[]).push([[330,42,161,174],{637:function(t,e,n){"use strict";n.d(e,"b",(function(){return r.a})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"c",(function(){return h}));var r=n(639),o=n(18),c=(n(69),n(14),function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return c=t.sent,t.abrupt("return",c);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()),l=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return c=t.sent,t.abrupt("return",c);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return c=t.sent,t.abrupt("return",c);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},639:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(18),o=(n(69),n(14),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return c=t.sent,t.abrupt("return",c);case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}())},706:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=[{id:1,title:"tanggal"},{id:2,title:"no faktur"},{id:6,title:"kode kas"},{id:15,title:"pelanggan"},{id:7,title:"jumlah"},{id:13,title:"bayar"},{id:17,title:"dikirim"},{id:21,title:"receive status"},{id:22,title:"biaya kirim"},{id:8,title:"kembali"},{id:9,title:"lunas"},{id:16,title:"piutang"},{id:10,title:"tempo"},{id:14,title:"jatuh tempo"},{id:11,title:"keterangan"},{id:12,title:"operator"}]},950:function(t,e,n){"use strict";n.r(e);var r=n(149),o=(n(62),n(706)),c=n(637),l={name:"penjualan-toko-detail",layout:"admin",data:function(){return{loading:!1,options:"penjualan-toko-detail",headers:Object(r.a)(o.a),query:this.$route.query.query,id:this.$route.params.id,item:{},itemspenjualan:[],nama:"",routePath:this.$route.path,stringRoute:null,typeRoute:null}},beforeMount:function(){this.$nuxt.authTokenStorage()},created:function(){this.$nuxt.checkNewData(),this.getDetailPenjualanToko(),this.generatePath()},methods:{generatePath:function(){var t=this.routePath.split("/"),e=t[2],n=t[3];this.stringRoute=e,this.typeRoute=n},getDetailPenjualanToko:function(){var t=this;Object(c.b)({api_url:"".concat(this.api_url,"/data-penjualan-toko/").concat(this.id),token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){t.item=data.data,t.itemspenjualan=data.items,t.nama="Penjulan Toko"})).catch((function(t){return console.log(t)}))}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}},watch:{notifs:function(){this.$_.size(this.notifs)>0&&this.notifs[0].routes&&this.getDetailPenjualanToko()}}},h=n(8),component=Object(h.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex flex-wrap mt-12 px-6"},[e("div",{staticClass:"w-full"},[e("cards-card-detail-data",{attrs:{color:"light",item:t.item,timelines:t.itemspenjualan,headers:t.headers,title:t.nama,timelineTitle:"Detail Item Penjualan Toko",timeTitle:"",types:"transaksi",cellType:"penjualan-toko",parentRoute:"transaksi/jual",stringRoute:t.stringRoute,typeRoute:t.typeRoute}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardDetailData:n(687).default})}}]);