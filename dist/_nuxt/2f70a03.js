(window.webpackJsonp=window.webpackJsonp||[]).push([[301,42,161,174],{637:function(t,e,n){"use strict";n.d(e,"b",(function(){return r.a})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"c",(function(){return h}));var r=n(639),o=n(18),c=(n(69),n(15),function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return c=t.sent,t.abrupt("return",c);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()),l=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return c=t.sent,t.abrupt("return",c);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return c=t.sent,t.abrupt("return",c);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},639:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(18),o=(n(69),n(15),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return c=t.sent,t.abrupt("return",c);case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}())},847:function(t,e,n){"use strict";n.r(e);var r=n(149),o=(n(15),n(62),[{id:1,title:"tanggal"},{id:2,title:"kode hutang"},{id:26,title:"kode faktur"},{id:3,title:"supplier"},{id:4,title:"alamat supplier"},{id:5,title:"operator"},{id:6,title:"barang"},{id:7,title:"harga beli"},{id:8,title:"qty"},{id:9,title:"total belanja"},{id:10,title:"dibayarkan"},{id:11,title:"hutang"},{id:12,title:"angsuran terakhir"},{id:13,title:"diterima"},{id:27,title:"sisa hutang"},{id:14,title:"kas"},{id:15,title:"lunas"},{id:16,title:"status"},{id:17,title:"tempo"},{id:18,title:"jatuh tempo"}]),c=n(637),l={name:"bayar-hutang-detail",layout:"admin",data:function(){return{loading:null,headers:Object(r.a)(o),options:"bayar-hutang-detail",query:this.$route.query.query,kode:this.$route.params.kode,item:{},angsurans:[],nama:"",routePath:this.$route.path,stringRoute:null,typeRoute:null}},beforeMount:function(){this.$nuxt.authTokenStorage()},created:function(){this.$nuxt.checkNewData(),this.getDetailHutang(),this.generatePath()},methods:{generatePath:function(){var t=this.routePath.split("/"),e=t[2],n=t[3];this.stringRoute=e,this.typeRoute=n},getDetailHutang:function(){var t=this;this.loading=!0,this.$nuxt.globalLoadingMessage="Proses menyiapkan data pembelian langsung ...",Object(c.b)({api_url:"".concat(this.api_url,"/data-hutang/").concat(this.query),token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){console.log(data),t.item=data.data,t.angsurans=data.angsurans,t.nama=t.angsurans.length>0?"Angsuran":"Hutang"})).finally((function(){t.loading=!1})).catch((function(t){return console.log(t)}))}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}},watch:{notifs:function(){this.$_.size(this.notifs)>0&&this.notifs[0].routes&&this.getDetailHutang()}}},h=n(8),component=Object(h.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex flex-wrap mt-12 px-6"},[e("div",{staticClass:"w-full"},[e("cards-card-detail-data",{attrs:{color:"light",item:t.item,timelines:t.angsurans,headers:t.headers,title:t.nama,timelineTitle:"Detail Item Hutang",timeTitle:"Angsuran Ke",types:"transaksi",cellType:"bayar-hutang",parentRoute:"transaksi/bayar-hutang",stringRoute:t.stringRoute,typeRoute:t.typeRoute}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardDetailData:n(687).default})}}]);