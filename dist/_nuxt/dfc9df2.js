(window.webpackJsonp=window.webpackJsonp||[]).push([[201,43,172,184],{637:function(t,e,n){"use strict";n.d(e,"b",(function(){return r.a})),n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return d}));var r=n(639),o=n(18),l=(n(69),n(15),function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()),c=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},639:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(18),o=(n(69),n(15),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}())},666:function(t,e,n){"use strict";n.r(e);var r=n(150),o=(n(62),n(14)),l=n(18),c=(n(69),n(311),n(15),n(36),n(20),n(29),n(37),n(42),n(637)),d=n(194),h=(n(312),{props:{type:{type:String,default:null},slug:{type:String},current:{type:[Number,String],default:null},pageData:{type:String,default:null},parentRoute:{type:String,default:null},typeRoute:{type:String,default:null}},components:{Datepicker:d.a},data:function(){return{loading:null,options:null,detail:{},api_url:"https://sirmuh.api.dksindo.com/api/v1",api_token:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u",idHutang:this.$route.query.id,kodeHutang:this.$route.params.kode,currentPage:1,changeAgain:!1,selectedKodeKas:null,disableSelectedKas:!1,kas:[],detailKas:{},showDetailKas:!0,loadingKas:null,loadingKasList:null,showKembali:null,showAngsuran:null,loadingKembali:null,angsurans:[],input:{kasId:null,tanggal:new Date,reference_code:null,bayar:"Rp. 0",bayarRupiah:"Rp. 0",diterima:null,barang:null,qty:1,diskon:0,ppn:0,total:"Rp. 0",kode_kas:null,kembali:0,diskon_rupiah:0,jatuhTempo:0,kembaliRupiah:"Rp. 0",angsuran:0,sisaHutangRupiah:"Rp. 0"},jumlahRupiah:"Rp. 0",error:!1,validation:[],total:0,bayar:0,kembali:"Rp. 0",angsuran:"Rp. 0",terbilangAngsuran:"Nol Rupiah",terbilangKembali:"Nol Rupiah",addQty:!1,qtyById:1,formatCalculateRupiah:0,changeSupplierShow:!1,draft:!1}},beforeMount:function(){this.authTokenStorage()},created:function(){this.$nuxt.checkNewData()},mounted:function(){this.detailHutang(this.idHutang,!0),this.getKasData()},methods:Object(o.a)(Object(o.a)({generateLunas:function(data){return"False"===data.lunas&&"PIUTANG"!==data.visa?'<i class="fa-solid fa-check fa-lg text-emerald-600"></i>':'<i class="fa-solid fa-circle-minus text-red-600 fa-lg"></i>'},detailHutang:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;try{if(this.$_.isObject(this.token)){var r;this.$nuxt.globalLoading=n,this.$nuxt.globalLoadingMessage="Proses menyiapkan data piutang pelanggan ...";var o="".concat(this.api_url,"/data-piutang/").concat(e),l={headers:{Accept:"application/json",Authorization:"Bearer ".concat(null==this||null===(r=this.token)||void 0===r?void 0:r.token),"Content-Type":"application/json","Sirmuh-Key":"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}};this.$api.get(o,l).then((function(e){var n,r,data=e.data;data.success&&(t.detail=null==data?void 0:data.data,t.angsurans=null==data?void 0:data.angsurans,t.jumlahRupiah=t.$format(null==data||null===(n=data.data)||void 0===n?void 0:n.jumlah),t.getKasDetail(null==data||null===(r=data.data)||void 0===r?void 0:r.kas_id))})).finally((function(){setTimeout((function(){t.loading=!1}),1e3)})).catch((function(t){console.log(t)}))}else this.$swal({icon:"error",title:"Oops...",text:"Error Access!"}),this.$router.replace("/")}catch(t){console.error(t)}},gantiHarga:function(t){t&&(this.showGantiHarga=!0)},changeBayar:function(t){var e,n=this;this.loadingKembali=!0;var r=Number(t.target.value),o="".concat(this.api_url,"/check-bayar-piutang/").concat(this.idHutang,"?bayar=").concat(r),l={headers:{Accept:"application/json",Authorization:"Bearer ".concat(null==this||null===(e=this.token)||void 0===e?void 0:e.token),"Content-Type":"application/json","Sirmuh-Key":"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}};this.$api.get(o,l).then((function(t){var data=t.data;data.lunas||(n.showKembali=!1,n.showAngsuran=!0,n.input.sisaHutangRupiah="Rp. ".concat(data.formatRupiah),n.input.angsuran=data.sisaHutang,n.angsuran="Sisa Piutang : Rp. ".concat(data.formatRupiah),n.terbilangAngsuran=null==data?void 0:data.terbilang,n.input.bayar=null==data?void 0:data.bayar,n.input.bayarRupiah="Rp. ".concat(data.bayarRupiah)),data.lunas&&(n.showAngsuran=!1,n.showKembali=!0,n.input.kembaliRupiah="Rp. ".concat(data.formatRupiah),n.input.kembali=data.kembali,n.kembali="Lunas : Rp. ".concat(data.jmlHutang),n.terbilangKembali=null==data?void 0:data.terbilang,n.input.bayar=null==data?void 0:data.bayar,n.input.bayarRupiah="Rp. ".concat(data.bayarRupiah)),n.input.kasId=data.kasId})).finally((function(){setTimeout((function(){n.loadingKembali=!1}),1e3)})).catch((function(t){console.log(t)}))},clearBayar:function(){this.input.bayar=null,this.input.bayarRupiah=null},transformDataKasLists:function(t){return t.filter((function(t){return t&&t.kode})).map((function(t){return{id:t.id,text:t.nama}}))},inputKeterangan:function(t){this.input.keterangan=t.target.value},changeKodeKas:function(t){if(t&&void 0!==t.id){var e=t.id?Number(t.id):this.detail.kas_id;isNaN(e)||(this.selectedKodeKas=t.id?Number(t.id):this.detail.kas_id,this.getKasDetail(e),this.disableSelectedKas=!!this.selectedKodeKas,this.input.kode_kas=e)}},getKasDetail:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var data,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loadingKas=!0,n.next=3,Object(c.b)({api_url:"".concat(e.api_url,"/data-kas/").concat(t),token:e.token.token,api_key:e.api_token});case 3:data=n.sent,r=null==data?void 0:data.data[0],setTimeout((function(){e.showDetailKas=!0,e.detailKas=r,e.loadingKas=!1,e.selectedKodeKas=t}),1500);case 6:case"end":return n.stop()}}),n)})))()},checkSaldo:function(){var t=this;this.loading=!0,this.$nuxt.globalLoadingMessage="Proses pengecekan saldo ...",this.options="penjualan-tokog";var e="/check-saldo/".concat(this.input.kasId,"?entitas=").concat(this.input.bayar),n={headers:{Authorization:"Bearer ".concat(this.token.token)}};this.$api.get(e,n).then((function(data){var e,n;null!=data&&null!==(e=data.data)&&void 0!==e&&e.error&&(t.input={},t.$swal({icon:"error",title:"Oops...",text:null==data||null===(n=data.data)||void 0===n?void 0:n.message}))})).finally((function(){setTimeout((function(){t.loading=!1}),1500)})).catch((function(t){console.log(t)}))},pad:function(t){return t<10?"0"+t:t},getKasData:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loadingKasList=!0,n=function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=1,o=1;case 3:if(!(r<=o)){e.next=12;break}return e.next=6,Object(c.b)({api_url:"".concat(t.api_url,"/data-kas?page=").concat(r),token:t.token.token,api_key:t.api_token});case 6:data=e.sent,n=n.concat(null==data?void 0:data.data),o=null==data||null===(l=data.meta)||void 0===l?void 0:l.last_page,r++,e.next=3;break;case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n().then((function(data){t.kas=t.transformDataKasLists(data)})).finally((function(){setTimeout((function(){t.loadingKasList=!1}),1500)})).catch((function(t){return console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()}},"checkSaldo",(function(){var t=this;this.loadingSaldo=!0,this.$nuxt.globalLoadingMessage="Proses pengecekan saldo ...",this.options="piutang-pelanggan";var e="/check-saldo/".concat(null!==this.input.kode_kas?this.input.kode_kas:this.detail.kas_id,"?entitas=").concat(this.input.bayar),n={headers:{Authorization:"Bearer ".concat(this.token.token)}};this.$api.get(e,n).then((function(data){var e,n;null!=data&&null!==(e=data.data)&&void 0!==e&&e.error&&(t.input={},t.$swal({icon:"error",title:"Oops...",text:null==data||null===(n=data.data)||void 0===n?void 0:n.message}))})).finally((function(){setTimeout((function(){t.loadingSaldo=!1}),500)})).catch((function(t){console.log(t)}))})),"simpanBayarHutang",(function(t){var e=this;this.loading=!t,this.checkSaldo(),this.options="piutang-pelanggan";var n="/data-piutang/".concat(this.idHutang),r={headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(this.token.token)}},o={bayar:this.input.bayar,kode_kas:this.input.kode_kas,ket:this.input.keterangan};this.$api.put(n,o,r).then((function(n){var data=n.data;if(null!=data&&data.success&&!t){var r={ref_code:e.kodeHutang};localStorage.removeItem("ref_code"),localStorage.setItem("cetak_code",JSON.stringify(r)),e.$swal({position:"top-end",icon:"success",title:null==data?void 0:data.message,showConfirmButton:!1,timer:1500}),setTimeout((function(){e.$router.push({path:"/dashboard/transaksi/terima-piutang/piutang-pelanggan/cetak",query:{kode:e.kodeHutang}})}),1e3)}})).finally((function(){e.loading=!1,e.detailHutang(e.idHutang,!1)})).catch((function(t){var n;null!=t&&t.message&&(e.loading=!1,e.error=!0,e.$swal({title:"Data belum lengkap?",text:"Periksa kembali kolom input data!!",icon:"question"}),e.validation=null==t||null===(n=t.response)||void 0===n?void 0:n.data)}))})),computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}},watch:{notifs:function(){this.$nuxt.notifs&&this.$_.size(this.$nuxt.notifs)>0&&"bayar-hutang"===this.$nuxt.notifs[0].routes&&this.detailHutang(this.idHutang,!1)}}}),v=h,f=n(8),component=Object(f.a)(v,(function(){var t,e,n=this,o=n._self._c;return o("div",[n._m(0),n._v(" "),o("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-transparent w-96 mb-6 shadow-sm rounded"},[o("div",[o("div",{staticClass:"flex justify-start space-x-0"},[n._m(1),n._v(" "),o("div",{staticClass:"shrink-0 w-full"},[o("div",{staticClass:"flex justify-between space-x-2"},[o("div",{staticClass:"shrink-0 w-30 text-black"},[o("input",{directives:[{name:"model",rawName:"v-model",value:n.detail.kode,expression:"detail.kode"}],attrs:{type:"text"},domProps:{value:n.detail.kode},on:{input:function(t){t.target.composing||n.$set(n.detail,"kode",t.target.value)}}})])])])])]),n._v(" "),o("div",[o("div",{staticClass:"flex justify-start space-x-0 py-6"},[n._m(2),n._v(" "),o("div",{staticClass:"shrink-0 w-60 text-black"},[n.loadingKasList||n.loadingKas?o("div",[o("div",{attrs:{role:"status"}},[o("svg",{staticClass:"w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",attrs:{"aria-hidden":"true",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),n._v(" "),o("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})]),n._v(" "),o("span",{staticClass:"sr-only"},[n._v("Loading...")])]),n._v(" "),o("span",{},[n._v("Preparing data kas ...")])]):o("div",[o("Select2",{attrs:{settings:{allowClear:!0,dropdownCss:{top:"auto",bottom:"auto"}},options:[{id:null,text:"Pilih Kode Kas"}].concat(Object(r.a)(n.kas)),placeholder:"Pilih Kode Kas"},on:{change:function(t){return n.changeKodeKas(t)},select:function(t){return n.changeKodeKas(t)}},model:{value:n.selectedKodeKas,callback:function(t){n.selectedKodeKas=t},expression:"selectedKodeKas"}})],1)])]),n._v(" "),n.error&&null!==(t=n.validation)&&void 0!==t&&t.kode_kas?o("div",{staticClass:"mt-6 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[o("span",{staticClass:"font-medium"},[n._v("Danger alert!")]),n._v("\n  "+n._s(null===(e=n.validation)||void 0===e?void 0:e.kode_kas[0])+"\n")]):n._e()]),n._v(" "),n.loadingKas?o("div",[o("div",{attrs:{role:"status"}},[o("svg",{staticClass:"w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",attrs:{"aria-hidden":"true",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),n._v(" "),o("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})]),n._v(" "),o("span",{staticClass:"sr-only"},[n._v("Loading...")])]),n._v(" "),o("span",{staticClass:"font-semibold"},[n._v("Preparing data kas")])]):o("div",[n.showDetailKas&&n.detailKas?o("div",{staticClass:"flex justify-start space-x-0 mt-6"},[n._m(3),n._v(" "),o("div",{staticClass:"shrink-0 w-60 text-black"},[o("input",{attrs:{type:"text",disabled:""},domProps:{value:n.$format(n.detailKas.saldo)}})])]):n._e()]),n._v(" "),o("div",[o("div",{staticClass:"flex justify-start space-x-0 py-6"},[n._m(4),n._v(" "),o("div",{staticClass:"shrink-0 w-full"},[o("label",{staticClass:"block mb-2 text-sm font-medium dark:",attrs:{for:"keterangan"}},[n._v("Keterangan")]),n._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:n.detail.keterangan,expression:"detail.keterangan"}],staticClass:"block text-black p-2.5 w-full text-sm text-blueGray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{id:"keterangan",rows:"4",placeholder:"Tambahkan keterangan...",disabled:!n.showDetailKas},domProps:{value:n.detail.keterangan},on:{input:[function(t){t.target.composing||n.$set(n.detail,"keterangan",t.target.value)},function(t){return n.inputKeterangan(t)}]}})])])])]),n._v(" "),o("div",{staticClass:"bg-transparent mb-4 shadow-sm rounded w-full overflow-x-auto overflow-y-auto"},[o("div",[o("table",{staticClass:"w-full text-md border-collapse border-b"},[n._m(5),n._v(" "),o("tbody",[o("tr",{staticClass:"bg-transparent border-b"},[o("th",{staticClass:"whitespace-nowrap p-8 text-lg",attrs:{scope:"row"}},[o("span",{staticClass:"bg-blue-100 text-blue-800 me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 font-bold"},[n._v("\n      "+n._s(n.detail.kode)+"\n    ")])]),n._v(" "),o("td",{staticClass:"whitespace-nowrap p-8 text-lg"},[o("span",{domProps:{innerHTML:n._s(n.generateLunas({lunas:n.detail.lunas,visa:n.detail.visa}))}})]),n._v(" "),o("td",{staticClass:"whitespace-nowrap p-8 text-lg"},[n._v("\n    "+n._s(n.$moment(n.detail.tanggal).format("LL"))+"\n  ")]),n._v(" "),o("td",{staticClass:"whitespace-nowrap p-8 text-lg"},[o("span",{staticClass:"bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"},[n._v("\n      "+n._s(n.detail.pelanggan)+" ( "+n._s(n.detail.nama_pelanggan)+" )\n    ")])]),n._v(" "),o("td",{staticClass:"whitespace-nowrap p-8 text-lg"},[n._v("\n    "+n._s(n.detail.nama_barang)+" ("+n._s(n.detail.kode_barang)+")\n  ")]),n._v(" "),o("td",{staticClass:"whitespace-nowrap p-8 text-lg"},[n._v("\n    "+n._s(n.$roundup(n.detail.qty_penjualan))+" "+n._s(n.detail.satuan_penjualan_barang)+"\n  ")]),n._v(" "),o("td",{staticClass:"px-10 py-4 font-bold text-right"},[n._v("\n    "+n._s(n.$format(n.detail.jumlah))+"\n  ")])])])])])]),n._v(" "),o("form",{on:{submit:function(t){return t.preventDefault(),n.simpanBayarHutang(!1)}}},[o("div",{staticClass:"bg-transparent shadow-sm rounded w-full flex justify-start space-x-4 mt-6"},[o("div",{staticClass:"shrink w-[80vw]"},[o("div",{staticClass:"grid grid-cols-1 bg-emerald-600 h-48 content-evenly justify-items-center"},[o("div",{staticClass:"col-span-full"},[o("h4",{staticClass:"text-white font-bold text-4xl"},[n._v("\n        "+n._s(n.showKembali?n.kembali:n.angsuran)+"\n      ")])])]),n._v(" "),o("div",{staticClass:"grid grid-cols-1 bg-blueGray-600 h-12"},[o("div",{staticClass:"col-span-full p-2"},[o("h6",{staticClass:"text-white text-lg font-bold"},[n._v("\n        "+n._s(n.showKembali?n.terbilangKembali:n.terbilangAngsuran)+"\n      ")])])])]),n._v(" "),o("div",[o("ul",{staticClass:"w-80 text-sm font-medium bg-transparent"},[o("li",{staticClass:"w-full py-2"},[o("div",{staticClass:"grid grid-cols-3 gap-0"},[n._m(6),n._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:n.jumlahRupiah,expression:"jumlahRupiah"}],staticClass:"h-8 text-black",attrs:{type:"text",disabled:""},domProps:{value:n.jumlahRupiah},on:{input:function(t){t.target.composing||(n.jumlahRupiah=t.target.value)}}})])])]),n._v(" "),o("li",{staticClass:"w-full py-2"},[o("div",{staticClass:"grid grid-cols-3 gap-0"},[n._m(7),n._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:n.input.ppn,expression:"input.ppn"}],staticClass:"h-8 text-black",attrs:{disabled:"",type:"number",value:"0"},domProps:{value:n.input.ppn},on:{input:[function(t){t.target.composing||n.$set(n.input,"ppn",t.target.value)},function(t){return n.recalculateTotalBayar(n.input.diskon)}]}})])])]),n._v(" "),o("li",{staticClass:"w-full py-2"},[o("div",{staticClass:"grid grid-cols-3 gap-0"},[n._m(8),n._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:n.input.bayar,expression:"input.bayar"}],staticClass:"h-8 text-black",attrs:{type:"text",tabindex:"0"},domProps:{value:n.input.bayar},on:{input:[function(t){t.target.composing||n.$set(n.input,"bayar",t.target.value)},function(t){return n.changeBayar(t)}],focus:n.clearBayar}})])])]),n._v(" "),n.loadingKembali?o("div",[o("div",{attrs:{role:"status"}},[o("svg",{staticClass:"w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",attrs:{"aria-hidden":"true",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),n._v(" "),o("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})]),n._v(" "),o("span",{staticClass:"sr-only"},[n._v("Loading...")])]),n._v(" "),o("span",{staticClass:"font-semibold"},[n._v("Preparing bayar")])]):o("li",{staticClass:"w-full py-2"},[n.showKembali?o("div",{staticClass:"grid grid-cols-3 gap-0"},[n._m(9),n._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:n.input.kembaliRupiah,expression:"input.kembaliRupiah"}],staticClass:"h-8 text-black",attrs:{type:"text",disabled:""},domProps:{value:n.input.kembaliRupiah},on:{input:function(t){t.target.composing||n.$set(n.input,"kembaliRupiah",t.target.value)}}})])]):n._e(),n._v(" "),n.showAngsuran?o("div",{staticClass:"grid grid-cols-3 gap-0"},[n._m(10),n._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:n.input.sisaHutangRupiah,expression:"input.sisaHutangRupiah"}],staticClass:"h-8 text-black",attrs:{type:"text",disabled:""},domProps:{value:n.input.sisaHutangRupiah},on:{input:function(t){t.target.composing||n.$set(n.input,"sisaHutangRupiah",t.target.value)}}})])]):n._e()])])])]),n._v(" "),o("div",{staticClass:"flex justify-end mt-2"},[o("div",[o("button",{staticClass:"bg-emerald-600 hover:bg-[#d6b02e] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"},[n.loading?o("div",[o("svg",{staticClass:"inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600",attrs:{"aria-hidden":"true",role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),n._v(" "),o("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"#1C64F2"}})]),n._v("\n    Loading...\n  ")]):o("div",[o("i",{staticClass:"fa-regular fa-floppy-disk"}),n._v(" Simpan Transaksi\n  ")])])])])]),n._v(" "),n.loading?o("div",[o("molecules-row-loading",{attrs:{loading:n.loading,options:n.options}})],1):n._e()])}),[function(){var t=this._self._c;return t("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-transparent mb-4 shadow-sm rounded"},[t("hr",{staticClass:"w-full"})])},function(){var t=this._self._c;return t("div",{staticClass:"flex-none w-36"},[t("h4",{staticClass:"font-bold text-md"},[this._v("Ref No")])])},function(){var t=this._self._c;return t("div",{staticClass:"flex-none w-36"},[t("h4",{staticClass:"font-bold text-md"},[this._v("Pilih Kode Kas")])])},function(){var t=this._self._c;return t("div",{staticClass:"flex-none w-36"},[t("h4",{staticClass:"font-bold text-md"},[this._v("Saldo Kas")])])},function(){var t=this._self._c;return t("div",{staticClass:"flex-none w-36"},[t("h4",{staticClass:"font-bold text-md"},[this._v("Keterangan")])])},function(){var t=this,e=t._self._c;return e("thead",{staticClass:"text-xs bg-transparent border-b border-t dark:border-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"},[e("tr",[e("th",{staticClass:"px-6 py-3"},[t._v("No Piutang")]),t._v(" "),e("th",{staticClass:"px-6 py-3"},[t._v("Lunas")]),t._v(" "),e("th",{staticClass:"px-6 py-3"},[t._v("Tgl Piutang")]),t._v(" "),e("th",{staticClass:"px-6 py-3"},[t._v("Pelanggan")]),t._v(" "),e("th",{staticClass:"px-6 py-3"},[t._v("Barang")]),t._v(" "),e("th",{staticClass:"px-6 py-3"},[t._v("QTY")]),t._v(" "),e("th",{staticClass:"px-6 py-3"},[t._v("Jumlah Piutang")])])])},function(){var t=this._self._c;return t("div",[t("label",{staticClass:"font-bold"},[this._v("Piutang")])])},function(){var t=this._self._c;return t("div",[t("label",{staticClass:"font-bold"},[this._v("Return")])])},function(){var t=this._self._c;return t("div",[t("label",{staticClass:"font-bold"},[this._v("Bayar")])])},function(){var t=this._self._c;return t("div",[t("label",{staticClass:"font-bold"},[this._v("Kembali")])])},function(){var t=this._self._c;return t("div",[t("label",{staticClass:"font-bold"},[this._v("Sisa Piutang")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MoleculesRowLoading:n(195).default})}}]);