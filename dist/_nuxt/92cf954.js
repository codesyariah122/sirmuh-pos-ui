(window.webpackJsonp=window.webpackJsonp||[]).push([[287,42,60,189,194],{670:function(t,e,r){"use strict";r.d(e,"b",(function(){return n.a})),r.d(e,"a",(function(){return l})),r.d(e,"d",(function(){return c})),r.d(e,"c",(function(){return d}));var n=r(672),o=r(18),l=(r(70),r(15),function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,t.next=5,fetch(r,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()),c=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,t.next=5,fetch(r,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,t.next=5,fetch(r,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},672:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(18),o=(r(70),r(15),function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,t.next=5,fetch(r,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=9;break}throw new Error("Data not found!");case 9:return t.next=11,o.json();case 11:return l=t.sent,t.abrupt("return",l);case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}())},715:function(t,e,r){t.exports=r.p+"img/team-2-800x800.3e08ef1.jpg"},719:function(t,e,r){"use strict";r.r(e);r(53);var n=r(715),o=r.n(n),l={props:{item:{type:Object,default:function(){return{}}},title:{type:String},current:{type:String,default:null},stringRoute:{type:String,default:null},parentRoute:{type:String,default:null},typeRoute:{type:String,default:null},selectedRoute:{type:String,default:null},types:{type:String,default:null}},data:function(){return{image_url:"https://sirmuh.api.dksindo.com/storage",asset_url:"".concat("https://sirmuh.api.dksindo.com","/assets/images/"),team2:o.a}},beforeMount:function(){this.authTokenStorage()},methods:{redirectUpload:function(t,e){this.$router.push({path:"/dashboard/".concat(this.parentRoute,"/").concat(this.types,"/upload/").concat(t),query:{type:e,current:this.current}})}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}},c=r(8),component=Object(c.a)(l,(function(){var t,e,n,o,l,c=this,d=c._self._c;return d("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-24"},[d("div",{staticClass:"px-6"},[d("div",{staticClass:"flex flex-wrap justify-center"},[d("div",{staticClass:"w-full px-4 flex justify-center"},[d("div",{staticClass:"relative"},[c.item.photo?d("img",{staticClass:"shadow-xl rounded-full h-36 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px",attrs:{alt:c.title,src:"".concat(c.image_url,"/").concat(c.item.photo)}}):d("div",[d("img",{staticClass:"shadow-xl rounded-full h-36 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px",attrs:{src:r(155),alt:"no-photo-barang"}}),c._v(" "),d("button",{staticClass:"mt-2 ml-24 px-3 py-2 font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-800",attrs:{type:"button"},on:{click:function(t){return c.redirectUpload(c.item.id,"upload-gambar")}}},[d("i",{staticClass:"fa-solid fa-plus"}),c._v("   Upload Gambar\n          ")])])])]),c._v(" "),d("div",{staticClass:"w-full px-4 text-center mt-20"},[d("div",{staticClass:"flex justify-center py-4 lg:pt-4 pt-8"},[d("div",{staticClass:"mr-2 p-6 text-center"},[d("span",{staticClass:"text-xl font-bold block uppercase tracking-wide text-blueGray-600"},[c._v("\n          "+c._s(c.$roundup(c.item.toko))+"\n        ")]),c._v(" "),d("span",{staticClass:"text-sm text-blueGray-400"},[c._v("Stok")])]),c._v(" "),d("div",{staticClass:"mr-2 p-6 text-center"},[d("span",{staticClass:"text-xl font-bold block uppercase tracking-wide text-blueGray-600"},[c._v("\n        "+c._s(c.item.satuanbeli)+"\n      ")]),c._v(" "),d("span",{staticClass:"text-sm text-blueGray-400"},[c._v("Satuan Beli")])]),c._v(" "),d("div",{staticClass:"lg:mr-2 p-3 text-center"},[d("span",{staticClass:"text-xl font-bold block uppercase tracking-wide text-blueGray-600"},[d("img",{staticClass:"w-80",attrs:{src:"".concat(c.image_url,"/qrcodes/").concat(c.item.kode_barcode,".png"),alt:c.item.kode_barcode}})]),c._v(" "),d("span",{staticClass:"text-sm text-blueGray-400"},[c._v("Qr Code")])])])])]),c._v(" "),d("div",{staticClass:"text-center mt-6"},[d("h3",{staticClass:"text-xl font-semibold leading-normal mb-2 text-blueGray-700"},[c._v("\n    "+c._s(c.$capitalize(c.title))+"\n  ")]),c._v(" "),d("div",{staticClass:"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"},[d("i",{staticClass:"fa-solid fa-layer-group mr-2 text-lg text-blueGray-400"}),c._v("\n  Kategori - "+c._s(null===(t=c.item)||void 0===t?void 0:t.kategori_barang)+"\n")]),c._v(" "),d("div",{staticClass:"mb-2 text-blueGray-600 mt-10"},[d("i",{staticClass:"fa-solid fa-boxes-packing mr-2 text-lg text-blueGray-400"}),c._v("\n  Supplier -\n  "+c._s((null===(e=c.item)||void 0===e||null===(e=e.suppliers)||void 0===e||null===(e=e[0])||void 0===e?void 0:e.nama)||c.item.supplier||c.item.supplier)+"\n")]),c._v(" "),d("div",{staticClass:"mb-2 text-blueGray-600"},[d("i",{staticClass:"fa-solid fa-table-list mr-2 text-lg text-blueGray-400"}),c._v("\n  Kategori -\n  "+c._s((null===(n=c.item)||void 0===n||null===(n=n.kategoris)||void 0===n||null===(n=n[0])||void 0===n?void 0:n.kode)||(null===(o=c.item)||void 0===o?void 0:o.kategori)||c.item.kategori)+"\n")]),c._v(" "),d("div",{staticClass:"mb-2 text-blueGray-600"},[d("i",{staticClass:"fa-solid fa-coins mr-2 text-lg text-blueGray-400"}),c._v("\n  Harga Beli -\n  "+c._s(c.$format(null===(l=c.item)||void 0===l?void 0:l.hpp))+"\n")])]),c._v(" "),d("div",{staticClass:"mt-10 py-10 border-t border-blueGray-200 text-center"},[d("div",{staticClass:"flex flex-wrap justify-center"},[d("div",{staticClass:"w-full lg:w-9/12 px-4"},[d("p",{staticClass:"mb-4 text-lg leading-relaxed text-blueGray-700"},[c._v("\n        "+c._s(c.item.keterangan?c.item.keterangan:"Belum ada keterangan ...")+"\n      ")]),c._v(" "),d("a",{staticClass:"font-normal text-emerald-500",attrs:{href:"javascript:void(0);"}},[c._v("\n        Show more\n      ")])])])]),c._v(" "),d("div",{staticClass:"mt-10 py-10 border-t border-bluGray-400 text-center"},[d("div",{staticClass:"flex flex-wrap justify-center"},[d("div",{staticClass:"w-full lg:w-9/12 px-4"},[c.token.token?d("button",{staticClass:"text-white bg-emerald-600 hover:bg-[#d6b02e] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none",attrs:{type:"button"},on:{click:function(t){return c.$router.push({path:"/dashboard/".concat(c.parentRoute,"/").concat(c.selectedRoute,"?current=").concat(c.current)})}}},[d("i",{staticClass:"fa-solid fa-arrow-left"}),c._v(" Kembali\n    ")]):c._e()])])])])])}),[],!1,null,null,null);e.default=component.exports},997:function(t,e,r){"use strict";r.r(e);r(28),r(31),r(42),r(15),r(55),r(38),r(56);var n=r(14),o=(r(53),r(670));function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var c={name:"detail-barang-by-suppliers",layout:"admin",data:function(){return{current:this.$route.query.current,barcode:this.$route.params.barcode,item:{},nama:"",routePath:this.$route.path,stringRoute:null,typeRoute:null,selectedRoute:null}},created:function(){this.getDetailBarang(),this.generatePath()},methods:{generatePath:function(){var t=this.routePath.split("/"),e=t[2],r=t[3],n=t[4];this.stringRoute=e,this.typeRoute=r,this.selectedRoute=n},getDetailBarang:function(){var t=this;Object(o.b)({api_url:"".concat(this.api_url,"/detail?type=barang").concat(this.barcode?"&query="+this.barcode:""),api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}).then((function(e){var r,data=e.data;t.nama=null===(r=data[0])||void 0===r?void 0:r.nama,t.item=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},data[0])})).catch((function(t){return console.log(t)}))}}},d=c,f=r(8),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex flex-wrap mt-12"},[e("div",{staticClass:"w-full"},[e("cards-card-profile",{attrs:{item:t.item,title:t.nama,current:t.current,tableSetting:"detail",types:"barang-by-suppliers",parentRoute:"master/barang",stringRoute:t.stringRoute,typeRoute:t.typeRoute,selectedRoute:t.selectedRoute}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardProfile:r(719).default})}}]);