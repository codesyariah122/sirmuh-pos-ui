(window.webpackJsonp=window.webpackJsonp||[]).push([[67,43,166,179],{637:function(t,e,n){"use strict";n.d(e,"b",(function(){return r.a})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"c",(function(){return h}));var r=n(639),o=n(18),c=(n(69),n(15),function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return c=t.sent,t.abrupt("return",c);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()),l=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return c=t.sent,t.abrupt("return",c);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return c=t.sent,t.abrupt("return",c);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},639:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(18),o=(n(69),n(15),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return c=t.sent,t.abrupt("return",c);case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}())},739:function(t,e,n){"use strict";n.r(e);var r=n(150),o=(n(62),n(18)),c=(n(69),n(36),n(15),n(37),n(42),n(25),n(637)),l={data:function(){return{api_url:"http://192.168.1.8:4041/api/v1",api_token:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l",server_url:"http://192.168.1.8:4041",kode:this.$route.query.kode,loading:null,showModalPenjualanToko:!1,selectedPerusahaan:null,perusahaans:[],type:"",showType:null,detailPerusahaan:{},showPrint:!1}},beforeMount:function(){this.authTokenStorage()},mounted:function(){this.getPerusahaanLists()},methods:{changeType:function(t){this.type=t,this.showModalPenjualanToko=!this.showModalPenjualanToko},changePerusahaan:function(t){var e=this,n=t.id;if(void 0!==n){this.updateFakturTerakhir();var r="".concat(this.server_url,"/transaksi/jual/partai/cetak-nota/").concat(this.type,"/").concat(this.kode,"/").concat(n);window.open(r,"_blank"),this.showModalPenjualanToko=!this.showModalPenjualanToko,this.selectedPerusahaan=null,setTimeout((function(){e.showType=null,e.type=""}),500)}},updateFakturTerakhir:function(){var t=this;this.loading=!0,this.$nuxt.globalLoadingMessage="Proses pengecekan saldo ...",this.options="pembelian-langsung";var e={headers:{Authorization:"Bearer ".concat(this.token.token)}},n={faktur:this.kode},r=new FormData;r.append("faktur",n.faktur),this.$api.post("/update-faktur-terakhir",r,e).then((function(data){null!=data&&data.success&&t.$swal({position:"top-end",icon:"success",title:null==data?void 0:data.message,showConfirmButton:!1,timer:500})})).finally((function(){setTimeout((function(){t.loading=!1}),500)})).catch((function(t){console.log(t)}))},transformPerusahaanLists:function(t){return t.filter((function(t){return t&&t.id})).map((function(t){return{id:t.id,text:t.name}}))},getPerusahaanLists:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!0,n=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=1,o=1;case 3:if(!(r<=o)){e.next=12;break}return e.next=6,Object(c.b)({api_url:"".concat(t.api_url,"/data-perusahaan?page=").concat(r),token:t.token.token,api_key:t.api_token});case 6:data=e.sent,n=n.concat(null==data?void 0:data.data),o=null==data||null===(l=data.meta)||void 0===l?void 0:l.last_page,r++,e.next=3;break;case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n().then((function(data){t.perusahaans=t.transformPerusahaanLists(data)})).finally((function(){setTimeout((function(){t.loading=!1}),500)})).catch((function(t){return console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},toggleModal:function(){this.showModalPenjualanToko=!this.showModalPenjualanToko}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}},h=l,d=n(8),component=Object(d.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex justify-start space-x-4 p-2 mb-2"},[e("div",[e("button",{staticClass:"bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150",on:{click:function(e){return t.changeType("nota-kecil")}}},[t._v("\n        Cetak Nota\n      ")])]),t._v(" "),e("div",[e("button",{staticClass:"bg-yellow-600 text-white active:bg-yellow-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150",on:{click:function(e){return t.changeType("nota-besar")}}},[t._v("\n        Faktur Penjualan\n      ")])]),t._v(" "),t.showModalPenjualanToko?e("div",[e("div",{staticClass:"overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"},[e("div",{staticClass:"relative w-96 my-6 mx-auto max-w-sm"},[e("div",{staticClass:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"},[e("div",{staticClass:"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"},[e("button",{staticClass:"p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold",on:{click:function(e){return t.toggleModal()}}},[t._m(0)])]),t._v(" "),e("div",{staticClass:"relative p-6 flex-auto"},[t.loading?e("div",[e("div",{attrs:{role:"status"}},[e("svg",{staticClass:"w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",attrs:{"aria-hidden":"true",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Loading...")])]),t._v(" "),e("span",{staticClass:"text-black font-bold"},[t._v("\n                  Preparing data perusahaan\n                ")])]):e("div",[e("Select2",{attrs:{settings:{allowClear:!0,dropdownCss:{top:"auto",bottom:"auto"}},options:[{id:null,text:"Pilih Perusahaan"}].concat(Object(r.a)(t.perusahaans)),placeholder:"Pilih Perusahaan"},on:{change:function(e){return t.changePerusahaan(e)},select:function(e){return t.changePerusahaan(e)}},model:{value:t.selectedPerusahaan,callback:function(e){t.selectedPerusahaan=e},expression:"selectedPerusahaan"}})],1)])])])]),t._v(" "),t.showModalPenjualanToko?e("div",{staticClass:"opacity-25 fixed inset-0 z-40 bg-black"}):t._e()]):t._e()])])}),[function(){var t=this._self._c;return t("span",{staticClass:"text-black h-6 w-6 text-2xl block"},[t("i",{staticClass:"fa-solid fa-xmark text-lg"})])}],!1,null,null,null);e.default=component.exports}}]);