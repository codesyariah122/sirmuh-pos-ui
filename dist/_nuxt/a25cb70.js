(window.webpackJsonp=window.webpackJsonp||[]).push([[66,43,166,179],{637:function(e,t,n){"use strict";n.d(t,"b",(function(){return r.a})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return d}));var r=n(639),o=n(18),c=(n(69),n(15),function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.api_url,r=t.token,e.next=5,fetch(n,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":t.api_key}});case 5:if((o=e.sent).ok){e.next=8;break}throw new Error("Data not found!");case 8:return e.next=10,o.json();case 10:return c=e.sent,e.abrupt("return",c);case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()),l=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.api_url,r=t.token,e.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":t.api_key}});case 5:if((o=e.sent).ok){e.next=8;break}throw new Error("Data not found!");case 8:return e.next=10,o.json();case 10:return c=e.sent,e.abrupt("return",c);case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.api_url,r=t.token,e.next=5,fetch(n,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":t.api_key}});case 5:if((o=e.sent).ok){e.next=8;break}throw new Error("Data not found!");case 8:return e.next=10,o.json();case 10:return c=e.sent,e.abrupt("return",c);case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()},639:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(18),o=(n(69),n(15),function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.api_url,r=t.token,e.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":t.api_key}});case 5:if((o=e.sent).ok){e.next=8;break}throw new Error("Data not found!");case 8:return e.next=10,o.json();case 10:return c=e.sent,e.abrupt("return",c);case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}())},735:function(e,t,n){"use strict";n.r(t);var r=n(150),o=(n(62),n(18)),c=(n(69),n(36),n(37),n(42),n(15),n(25),n(637)),l={data:function(){return{api_url:"http://192.168.1.8:4041/api/v1",api_token:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l",server_url:"http://192.168.1.8:4041",kode:this.$route.query.kode,loading:null,showModalPembelian:!1,selectedPerusahaan:null,perusahaans:[],type:"",showType:null,detailPerusahaan:{},showPrint:!1}},beforeMount:function(){this.authTokenStorage()},mounted:function(){this.getPerusahaanLists()},methods:{changeType:function(e){this.type=e,this.showModalPembelian=!this.showModalPembelian},changePerusahaan:function(e){var t=this,n=e.id;if(void 0!==n){var r="".concat(this.server_url,"/transaksi/beli/cetak-nota/").concat(this.type,"/").concat(this.kode,"/").concat(n);window.open(r,"_blank"),this.showModalPembelian=!this.showModalPembelian,this.selectedPerusahaan=null,setTimeout((function(){t.showType=null,t.type=""}),500)}},transformPerusahaanLists:function(e){return e.filter((function(e){return e&&e.id})).map((function(e){return{id:e.id,text:e.name}}))},getPerusahaanLists:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loading=!0,n=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],r=1,o=1;case 3:if(!(r<=o)){t.next=12;break}return t.next=6,Object(c.b)({api_url:"".concat(e.api_url,"/data-perusahaan?page=").concat(r),token:e.token.token,api_key:e.api_token});case 6:data=t.sent,n=n.concat(null==data?void 0:data.data),o=null==data||null===(l=data.meta)||void 0===l?void 0:l.last_page,r++,t.next=3;break;case 12:return t.abrupt("return",n);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n().then((function(data){e.perusahaans=e.transformPerusahaanLists(data)})).finally((function(){setTimeout((function(){e.loading=!1}),500)})).catch((function(e){return console.log(e)}));case 3:case"end":return t.stop()}}),t)})))()},toggleModal:function(){this.showModalPembelian=!this.showModalPembelian}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}},d=l,h=n(8),component=Object(h.a)(d,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"flex justify-start space-x-4 p-2 mb-2"},[t("div",[t("button",{staticClass:"bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150",on:{click:function(t){return e.changeType("nota-kecil")}}},[e._v("\n        Cetak Nota Kecil\n      ")])]),e._v(" "),t("div",[t("button",{staticClass:"bg-yellow-600 text-white active:bg-yellow-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150",on:{click:function(t){return e.changeType("nota-besar")}}},[e._v("\n        Cetak Nota Besar\n      ")])]),e._v(" "),e.showModalPembelian?t("div",[t("div",{staticClass:"overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"},[t("div",{staticClass:"relative w-96 my-6 mx-auto max-w-sm"},[t("div",{staticClass:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"},[t("div",{staticClass:"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"},[t("button",{staticClass:"p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold",on:{click:function(t){return e.toggleModal()}}},[e._m(0)])]),e._v(" "),t("div",{staticClass:"relative p-6 flex-auto"},[e.loading?t("div",{staticClass:"flex"},[t("div",{attrs:{role:"status"}},[t("svg",{staticClass:"w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",attrs:{"aria-hidden":"true",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),t("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})]),e._v(" "),t("span",{staticClass:"sr-only"},[e._v("Loading...")])]),e._v(" "),t("span",{staticClass:"text-black font-bold"},[e._v("\n                  Preparing data perusahaan\n                ")])]):t("div",[t("Select2",{attrs:{settings:{allowClear:!0,dropdownCss:{top:"auto",bottom:"auto"}},options:[{id:null,text:"Pilih Perusahaan"}].concat(Object(r.a)(e.perusahaans)),placeholder:"Pilih Perusahaan"},on:{change:function(t){return e.changePerusahaan(t)},select:function(t){return e.changePerusahaan(t)}},model:{value:e.selectedPerusahaan,callback:function(t){e.selectedPerusahaan=t},expression:"selectedPerusahaan"}})],1)])])])]),e._v(" "),e.showModalPembelian?t("div",{staticClass:"opacity-25 fixed inset-0 z-40 bg-black"}):e._e()]):e._e()])])}),[function(){var e=this._self._c;return e("span",{staticClass:"text-black h-6 w-6 text-2xl block"},[e("i",{staticClass:"fa-solid fa-xmark text-lg"})])}],!1,null,null,null);t.default=component.exports}}]);