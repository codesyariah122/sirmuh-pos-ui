(window.webpackJsonp=window.webpackJsonp||[]).push([[140,43,136,174,187],{637:function(t,e,n){"use strict";n.d(e,"b",(function(){return r.a})),n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return d}));var r=n(639),o=n(18),l=(n(69),n(15),function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()),c=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},638:function(t,e,n){"use strict";n.r(e);var r={props:{success:{type:Boolean,default:!1},messageAlert:{type:String,default:""}},methods:{updateSuccess:function(){this.$emit("close-alert")}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid grid-cols-1 max-w-full px-0 mb-4"},[e("div",{staticClass:"col-span-12"},[t.success?e("div",{staticClass:"flex items-center w-full max-w-xs p-2 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",attrs:{id:"toast-success",role:"alert"}},[e("div",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"},[e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Check icon")])]),t._v(" "),e("div",{staticClass:"ml-3 text-sm font-normal"},[t._v(t._s(t.messageAlert))]),t._v(" "),e("button",{staticClass:"ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",attrs:{type:"button","data-dismiss-target":"#toast-success","aria-label":"Close"},on:{click:t.updateSuccess}},[e("span",{staticClass:"sr-only"},[t._v("Close")]),t._v(" "),e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},639:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(18),o=(n(69),n(15),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}())},646:function(t,e,n){"use strict";n.r(e);var r=n(150),o=(n(53),n(18)),l=(n(69),n(311),n(36),n(37),n(42),n(15),n(25),n(637)),c=n(194),d=(n(312),{props:{type:{type:String,default:null},current:{type:[Number,String],default:null}},components:{Datepicker:c.a},data:function(){return{selectedOwn:null,selectedDest:null,owns:[],dests:[],loadingSave:null,success:null,messageAlert:null,options:"",api_url:"http://192.168.1.8:4041/api/v1",api_token:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u",jumlahDest:0,jumlah:0,input:{tanggal:new Date,reference_code:null},validations:[],showMutasi:null,loadingKas:null,loadingDestKas:null,showDetailKas:null,showDetailDestKas:null,detailDestKas:{},detailKas:{},datePickerConfig:{range:!1},dateFormat:"YYYY-MM-DD",showData:{},takeNewOwnKas:!1}},beforeMount:function(){this.authTokenStorage()},mounted:function(){this.getOwnKasLists(),this.getDestKasLists(),this.generateReferenceCode()},methods:{cleanOwnKas:function(){this.jumlah="",this.input.jumlah=null,this.takeNewOwnKas=!0},newOwnKas:function(t){if(t.target.value){var e=parseFloat(t.target.value);this.input.jumlah=e}},generateReferenceCode:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadingReferenceCode=!0,t.$nuxt.globalLoadingMessage="Proses menyiapkan data kas ...",e.next=4,Object(l.b)({api_url:"".concat(t.api_url,"/generate-reference-code/mutasi-kas"),token:t.token.token,api_key:t.api_token});case 4:data=e.sent,n=null==data?void 0:data.data,null!=data&&data.success&&({ref_code:n.ref_code},t.input.reference_code=n.ref_code,setTimeout((function(){t.loadingReferenceCode=!1}),500));case 7:case"end":return e.stop()}}),e)})))()},handleTanggalPenjualan:function(t){console.log(t.target.value)},inputKeterangan:function(t){this.input.keterangan=t.target.value},closeSuccessAlert:function(){this.success=!1,this.message=""},backTo:function(){this.$router.push("/dashboard/backoffice/mutasi-kas")},inputJumlah:function(t){this.input.jumlah=t.target.value},changeOwnKas:function(t){void 0!==t.id&&(this.showMutasi=!0,this.selectedOwn=null==t?void 0:t.id,this.getKasDetail(t.id))},changeDestKas:function(t){void 0!==t.id&&(this.selectedDest=null==t?void 0:t.id,this.getDestKasDetail(t.id))},transformOwnLists:function(t){return t.filter((function(t){return t&&t.id})).map((function(t){return{id:t.id,text:"".concat(t.nama," - ").concat(t.kode)}}))},getOwnKasLists:function(){var t=this;this.loading=!0;var e=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=1,o=1;case 3:if(!(r<=o)){e.next=12;break}return e.next=6,Object(l.b)({api_url:"".concat(t.api_url,"/data-kas"),token:t.token.token,api_key:t.api_token});case 6:data=e.sent,n=n.concat(null==data?void 0:data.data),o=null==data||null===(c=data.meta)||void 0===c?void 0:c.last_page,r++,e.next=3;break;case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(data){t.owns=t.transformOwnLists(data)})).finally((function(){setTimeout((function(){t.loading=!1}),500)})).catch((function(t){return console.log(t)}))},getDestKasDetail:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var data,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loadingDestKas=!0,n.next=3,Object(l.b)({api_url:"".concat(e.api_url,"/data-kas/").concat(t),token:e.token.token,api_key:e.api_token});case 3:data=n.sent,r=null==data?void 0:data.data[0],setTimeout((function(){e.showDetailDestKas=!0,e.detailDestKas=r,e.input.jumlahDest=r.saldo,e.jumlahDest=e.$format(r.saldo),e.loadingDestKas=!1}),500);case 6:case"end":return n.stop()}}),n)})))()},getKasDetail:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var data,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loadingKas=!0,n.next=3,Object(l.b)({api_url:"".concat(e.api_url,"/data-kas/").concat(t),token:e.token.token,api_key:e.api_token});case 3:data=n.sent,r=null==data?void 0:data.data[0],setTimeout((function(){e.showDetailKas=!0,e.detailKas=r,e.input.jumlah=r.saldo,e.jumlah=e.$format(r.saldo),e.loadingKas=!1}),500);case 6:case"end":return n.stop()}}),n)})))()},transformDestLists:function(t){return t.filter((function(t){return t&&t.id})).map((function(t){return{id:t.id,text:"".concat(t.nama," - ").concat(t.kode)}}))},getDestKasLists:function(){var t=this,e=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=1,o=1;case 3:if(!(r<=o)){e.next=12;break}return e.next=6,Object(l.b)({api_url:"".concat(t.api_url,"/data-kas"),token:t.token.token,api_key:t.api_token});case 6:data=e.sent,n=n.concat(null==data?void 0:data.data),o=null==data||null===(c=data.meta)||void 0===c?void 0:c.last_page,r++,e.next=3;break;case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(data){t.dests=t.transformDestLists(data)})).catch((function(t){return console.log(t)}))},addMutasiKas:function(){var t=this;this.loadingSave=!0,this.options="add-mutasi-kas";var e={kode:this.input.reference_code,kas_id:this.selectedOwn,jumlah:this.input.jumlah,destination:this.selectedDest,operator:this.$nuxt.userData.name,keterangan:this.input.keterangan},n={headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(this.token.token)}};this.$api.post("/mutasi-kas",e,n).then((function(e){var data=e.data;data.success?(t.success=!0,t.messageAlert=data.message,t.validations=[],t.showData=data.data,t.$swal({position:"top-end",icon:"success",title:null==data?void 0:data.message,showConfirmButton:!1,timer:1500}),t.loading=!1):t.$swal({icon:"error",title:"Oops...",text:data.message})})).finally((function(){setTimeout((function(){t.loadingSave=!1,t.input={}}),500)})).catch((function(e){t.validations=e.response.data,t.success=!1,setTimeout((function(){t.loading=!1}),500)}))}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}}),f=d,v=n(8),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"},[t.success?e("div",{ref:"alertNotifs",staticClass:"flex justify-center w-full bg-transparent mt-4"},[e("molecules-success-alert",{attrs:{success:t.success,messageAlert:t.messageAlert},on:{"close-alert":t.closeSuccessAlert}})],1):t._e(),t._v(" "),t.success?e("div",{staticClass:"flex justify-center bg-transparent mt-2 mb-2"},[e("button",{staticClass:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",attrs:{type:"button"},on:{click:t.backTo}},[t._v("\n  Check Data Kas\n")])]):t._e(),t._v(" "),t.success?e("div",{staticClass:"flex justify-center bg-transparent mt-2 mb-2"},[e("div",[e("ul",{staticClass:"w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"},[t._m(0),t._v(" "),e("li",{staticClass:"w-full px-4 py-0 border-b border-gray-200 rounded-t-lg dark:border-gray-600"},[e("div",{staticClass:"flex justify-between space-x-4"},[e("div",[t._v("\n            "+t._s(t.showData.own_kas.nama)+"\n          ")]),t._v(" "),e("div",[t._v("\n            "+t._s(t.showData.dest_kas.nama)+"\n          ")])])]),t._v(" "),e("li",{staticClass:"w-full px-4 py-4 border-b border-gray-200 rounded-t-lg dark:border-gray-600"},[e("div",{staticClass:"flex justify-between space-x-4"},[e("div",[t._v("\n            "+t._s(t.$format(t.showData.own_kas.saldo))+"\n          ")]),t._v(" "),t._m(1),t._v(" "),e("div",[t._v("\n            "+t._s(t.$format(t.showData.dest_kas.saldo))+"\n          ")])])])])])]):t._e(),t._v(" "),e("div",{staticClass:"flex-auto px-4 px-10 py-10 pt-0"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.addMutasiKas.apply(null,arguments)}}},[e("h6",{staticClass:"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"},[t._v("\n      Data Mutasi Kas\n    ")]),t._v(" "),e("div",{staticClass:"flex justify-start space-x-6"},[e("div",{staticClass:"w-full w-6/12"},[e("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"kode_ref"}},[t._v("Kode Referensi")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.reference_code,expression:"input.reference_code"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",attrs:{type:"text",id:"kode_ref"},domProps:{value:t.input.reference_code},on:{input:function(e){e.target.composing||t.$set(t.input,"reference_code",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"w-full w-6/12"},[e("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"tgl"}},[t._v("Tanggal Mutasi")]),t._v(" "),e("datepicker",{style:{width:"100%",height:"10vh"},attrs:{id:"tgl",config:t.datePickerConfig,placeholder:"Tanggal Penjualan",format:t.dateFormat},on:{input:function(e){return t.handleTanggalPenjualan(e)}},model:{value:t.input.tanggal,callback:function(e){t.$set(t.input,"tanggal",e)},expression:"input.tanggal"}})],1)]),t._v(" "),e("div",{staticClass:"flex justify-start space-x-6"},[e("div",{staticClass:"w-6/12"},[e("div",{staticClass:"relative mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"ownKas"}},[t._v("\n          Kas Asal\n        ")]),t._v(" "),e("Select2",{attrs:{id:"ownKas",settings:{allowClear:!0},options:[{id:null,text:"Pilih Kas"}].concat(Object(r.a)(t.owns)),placeholder:"Pilih Kas"},on:{change:function(e){return t.changeOwnKas(e)},select:function(e){return t.changeOwnKas(e)}},model:{value:t.selectedOwn,callback:function(e){t.selectedOwn=e},expression:"selectedOwn"}})],1)]),t._v(" "),e("div",{staticClass:"w-6/12"},[e("div",{staticClass:"relative mb-3"},[t.loadingKas?e("div",[e("div",{attrs:{role:"status"}},[e("svg",{staticClass:"w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",attrs:{"aria-hidden":"true",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),t._v(" "),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Loading...")])]),t._v(" "),e("span",{staticClass:"font-semibold"},[t._v("Preparing data kas")])]):e("div",[t.showDetailKas&&t.detailKas?e("div",{staticClass:"flex justify-start"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"destKas"}},[t._v("\n          Destinasi Kas\n        ")]),t._v(" "),e("Select2",{attrs:{id:"destKas",settings:{allowClear:!0},options:[{id:null,text:"Pilih Kas"}].concat(Object(r.a)(t.dests)),placeholder:"Pilih Kas"},on:{change:function(e){return t.changeDestKas(e)},select:function(e){return t.changeDestKas(e)}},model:{value:t.selectedDest,callback:function(e){t.selectedDest=e},expression:"selectedDest"}})],1)]):t._e()])])])]),t._v(" "),t.showDetailKas?e("div",{staticClass:"flex justify-start space-x-6 mt-12"},[e("div",{staticClass:"w-6/12"},[e("h4",[t._v("Detail Saldo "+t._s(t.detailKas.nama))]),t._v(" "),e("div",{staticClass:"relative mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.jumlah,expression:"jumlah"}],attrs:{type:"text"},domProps:{value:t.jumlah},on:{input:[function(e){e.target.composing||(t.jumlah=e.target.value)},t.newOwnKas],focus:t.cleanOwnKas}})])]),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"w-6/12"},[t.loadingDestKas?e("div",[e("div",{attrs:{role:"status"}},[e("svg",{staticClass:"w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",attrs:{"aria-hidden":"true",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),t._v(" "),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Loading...")])]),t._v(" "),e("span",{staticClass:"font-semibold"},[t._v("Preparing data kas")])]):e("div",[e("h4",[t._v("Destinasi "+t._s(t.detailDestKas.nama))]),t._v(" "),e("div",{staticClass:"relative mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.jumlahDest,expression:"jumlahDest"}],attrs:{type:"text",disabled:""},domProps:{value:t.jumlahDest},on:{input:function(e){e.target.composing||(t.jumlahDest=e.target.value)}}})])])])]):t._e(),t._v(" "),t.showDetailKas?e("div",{staticClass:"flex justify-start space-x-6 mt-12"},[e("div",{staticClass:"w-full w-12/12"},[e("div",{staticClass:"relative mb-3"},[e("label",{staticClass:"block mb-2 text-sm font-medium dark:",attrs:{for:"keterangan"}},[t._v("Keterangan")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input.keterangan,expression:"input.keterangan"}],staticClass:"block p-2.5 w-full text-sm text-blueGray-700 bg-gray-50 rounded-lg border border-gray-300",attrs:{id:"keterangan",rows:"4",placeholder:"Tambahkan keterangan...",disabled:!t.showDetailKas},domProps:{value:t.input.keterangan},on:{input:[function(e){e.target.composing||t.$set(t.input,"keterangan",e.target.value)},function(e){return t.inputKeterangan(e)}]}})])])]):t._e(),t._v(" "),e("hr",{staticClass:"mt-6 border-b-1 border-blueGray-300"}),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full w-12/12 px-4 py-6"},[e("button",{staticClass:"w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",attrs:{disabled:!t.showDetailKas,type:"submit"}},[t.loadingSave?e("div",[e("svg",{staticClass:"inline w-4 h-4 mr-3 text-white animate-spin",attrs:{"aria-hidden":"true",role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}}),t._v(" "),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"}})]),t._v("\n    Loading...\n  ")]):e("span",[e("i",{staticClass:"fa-solid fa-plus"}),t._v(" Mutasikan")])]),t._v(" "),t.loadingSave?e("div",[e("molecules-row-loading",{attrs:{loading:t.loadingSave,options:t.options}})],1):t._e()])])])])])}),[function(){var t=this,e=t._self._c;return e("li",{staticClass:"w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"},[e("div",{staticClass:"flex justify-between space-x-4"},[e("div",[e("b",[t._v("Kas Asal")])]),t._v(" "),e("div",[e("b",[t._v("Kas Tujuan")])])])])},function(){var t=this._self._c;return t("div",[t("i",{staticClass:"fa-solid fa-right-left text-2xl text-emerald-700"})])},function(){var t=this._self._c;return t("div",{staticClass:"w-6/12 text-center mt-6"},[t("i",{staticClass:"fa-solid fa-right-left text-2xl text-emerald-700"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MoleculesSuccessAlert:n(638).default,MoleculesRowLoading:n(195).default})}}]);