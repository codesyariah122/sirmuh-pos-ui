(window.webpackJsonp=window.webpackJsonp||[]).push([[152,43,136,174,187],{637:function(t,e,n){"use strict";n.d(e,"b",(function(){return r.a})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return d}));var r=n(639),l=n(18),o=(n(69),n(15),function(){var t=Object(l.a)(regeneratorRuntime.mark((function t(e){var n,r,l,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((l=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,l.json();case 10:return o=t.sent,t.abrupt("return",o);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()),c=function(){var t=Object(l.a)(regeneratorRuntime.mark((function t(e){var n,r,l,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((l=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,l.json();case 10:return o=t.sent,t.abrupt("return",o);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(l.a)(regeneratorRuntime.mark((function t(e){var n,r,l,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((l=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,l.json();case 10:return o=t.sent,t.abrupt("return",o);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},638:function(t,e,n){"use strict";n.r(e);var r={props:{success:{type:Boolean,default:!1},messageAlert:{type:String,default:""}},methods:{updateSuccess:function(){this.$emit("close-alert")}}},l=n(8),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid grid-cols-1 max-w-full px-0 mb-4"},[e("div",{staticClass:"col-span-12"},[t.success?e("div",{staticClass:"flex items-center w-full max-w-xs p-2 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",attrs:{id:"toast-success",role:"alert"}},[e("div",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"},[e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Check icon")])]),t._v(" "),e("div",{staticClass:"ml-3 text-sm font-normal"},[t._v(t._s(t.messageAlert))]),t._v(" "),e("button",{staticClass:"ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",attrs:{type:"button","data-dismiss-target":"#toast-success","aria-label":"Close"},on:{click:t.updateSuccess}},[e("span",{staticClass:"sr-only"},[t._v("Close")]),t._v(" "),e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},639:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(18),l=(n(69),n(15),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,l,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((l=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,l.json();case 10:return o=t.sent,t.abrupt("return",o);case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}())},647:function(t,e,n){"use strict";n.r(e);var r=n(150),l=(n(53),n(18)),o=(n(69),n(311),n(36),n(37),n(42),n(15),n(637)),c=n(194),d=(n(312),{props:{type:{type:String,default:null},current:{type:[Number,String],default:null}},components:{Datepicker:c.a},data:function(){return{loadingBarangAsal:null,loadingBarangTujuan:null,selectedBarangAsal:null,selectedBarangTujuan:null,selectedKeperluan:null,barangs:[],barangDests:[],keperluans:[],loadingSave:null,success:null,messageAlert:null,options:"",api_url:"https://sirmuh.api.dksindo.com/api/v1",api_token:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u",jumlahDest:0,input:{tanggal:new Date,reference_code:null,qty:0,keterangan:""},validations:[],datePickerConfig:{range:!1},dateFormat:"YYYY-MM-DD",showData:{},showdetailBarangAsal:null,detailBarangAsal:{},showDetailBarangTujuan:null,detailBarangTujuan:{}}},beforeMount:function(){this.authTokenStorage()},mounted:function(){this.getBarangAsalLists(),this.getBarangTujuanLists(),this.getJenisKeperluan(),this.generateReferenceCode()},methods:{cleanQty:function(){this.input.qty=null},generateReferenceCode:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadingReferenceCode=!0,t.$nuxt.globalLoadingMessage="Proses menyiapkan data pemakaian barang ...",e.next=4,Object(o.b)({api_url:"".concat(t.api_url,"/generate-reference-code/pemakaian-barang"),token:t.token.token,api_key:t.api_token});case 4:data=e.sent,n=null==data?void 0:data.data,null!=data&&data.success&&({ref_code:n.ref_code},t.input.reference_code=n.ref_code,setTimeout((function(){t.loadingReferenceCode=!1}),500));case 7:case"end":return e.stop()}}),e)})))()},handleTanggalPenjualan:function(t){console.log(t.target.value)},inputKeterangan:function(t){this.input.keterangan=t.target.value},closeSuccessAlert:function(){this.success=!1,this.message=""},backTo:function(){this.$router.push("/dashboard/backoffice/pemakaian-barang")},inputQty:function(t){void 0!==t.target.value&&(this.input.qty=t.target.value)},changeBarangAsal:function(t){void 0!==t.id&&(this.selectedBarangAsal=null==t?void 0:t.id,this.getDetailBarangAsal(this.selectedBarangAsal))},changeBarangTujuan:function(t){void 0!==t.id&&(this.selectedBarangTujuan=null==t?void 0:t.id,this.getDetailBarangTujuan(this.selectedBarangTujuan))},changeJenisKeperluan:function(t){void 0!==t.id&&(this.selectedKeperluan=null==t?void 0:t.id)},transformBarangAsalLists:function(t){return t.filter((function(t){return t&&t.kode})).map((function(t){return{id:t.kode,text:"".concat(t.nama," - ").concat(t.kategori," (").concat(t.kode,")")}}))},transformBarangTujuanLists:function(t){return t.filter((function(t){return t&&t.kode})).map((function(t){return{id:t.kode,text:"".concat(t.nama," - ").concat(t.kategori," (").concat(t.kode,")")}}))},transformJenisKeperluan:function(t){return t.filter((function(t){return t&&t.id})).map((function(t){return{id:t.kode,text:"".concat(t.kode)}}))},getBarangAsalLists:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!0,n=function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=1,l=1;case 3:if(!(r<=l)){e.next=12;break}return e.next=6,Object(o.b)({api_url:"".concat(t.api_url,"/barang-list-pemakaian"),token:t.token.token,api_key:t.api_token});case 6:data=e.sent,n=n.concat(null==data?void 0:data.data),l=null==data||null===(c=data.meta)||void 0===c?void 0:c.last_page,r++,e.next=3;break;case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n().then((function(data){t.barangs=t.transformBarangAsalLists(data)})).finally((function(){setTimeout((function(){t.loading=!1}),500)})).catch((function(t){return console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},getBarangTujuanLists:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!0,n=function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=1,l=1;case 3:if(!(r<=l)){e.next=12;break}return e.next=6,Object(o.b)({api_url:"".concat(t.api_url,"/barang-cetak-pemakaian"),token:t.token.token,api_key:t.api_token});case 6:data=e.sent,n=n.concat(null==data?void 0:data.data),l=null==data||null===(c=data.meta)||void 0===c?void 0:c.last_page,r++,e.next=3;break;case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n().then((function(data){t.barangDests=t.transformBarangTujuanLists(data)})).finally((function(){setTimeout((function(){t.loading=!1}),500)})).catch((function(t){return console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},getJenisKeperluan:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=1,l=1;case 3:if(!(r<=l)){e.next=12;break}return e.next=6,Object(o.b)({api_url:"".concat(t.api_url,"/jenis-keperluan"),token:t.token.token,api_key:t.api_token});case 6:data=e.sent,n=n.concat(null==data?void 0:data.data),l=null==data||null===(c=data.meta)||void 0===c?void 0:c.last_page,r++,e.next=3;break;case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n().then((function(data){t.keperluans=t.transformJenisKeperluan(data)})).catch((function(t){return console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},getDetailBarangAsal:function(t){var e=this;this.loadingBarangAsal=!0;var n="/detail-barang-by-kode?kode=".concat(t),r={headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(this.token.token)}};this.$api.get(n,r).then((function(t){var data=t.data;data.success&&(e.showDetailBarangAsal=!0,e.detailBarangAsal=null==data?void 0:data.data)})).finally((function(){setTimeout((function(){e.loadingBarangAsal=!1}),500)})).catch((function(t){e.loadingBarangAsal=!1,console.log(t)}))},getDetailBarangTujuan:function(t){var e=this;this.loadingBarangTujuan=!0;var n="/detail-barang-by-kode?kode=".concat(t),r={headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(this.token.token)}};this.$api.get(n,r).then((function(t){var data=t.data;data.success&&(e.showDetailBarangTujuan=!0,e.detailBarangTujuan=null==data?void 0:data.data)})).finally((function(){setTimeout((function(){e.loadingBarangTujuan=!1}),500)})).catch((function(t){e.loadingBarangTujuan=!1,console.log(t)}))},addPemakaianBarang:function(){var t=this;this.loadingSave=!0,this.options="add-mutasi-kas";var e={kode:this.input.reference_code,barang_asal:this.selectedBarangAsal,qty:this.input.qty,barang_tujuan:this.selectedBarangTujuan,keperluan:this.selectedKeperluan,keterangan:this.input.keterangan},n={headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(this.token.token)}};console.log(e),this.$api.post("/pemakaian-barang",e,n).then((function(e){var data=e.data;data.success?(t.success=!0,t.messageAlert=data.message,t.validations=[],t.showData=data.data,t.$swal({position:"top-end",icon:"success",title:null==data?void 0:data.message,showConfirmButton:!1,timer:1500}),t.loading=!1):t.$swal({icon:"error",title:"Oops...",text:data.message})})).finally((function(){setTimeout((function(){t.loadingSave=!1,t.input={}}),500)})).catch((function(e){t.validations=e.response.data,t.success=!1,setTimeout((function(){t.loading=!1}),500)}))}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}}),v=d,f=n(8),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"},[t.success?e("div",{ref:"alertNotifs",staticClass:"flex justify-center w-full bg-transparent mt-4"},[e("molecules-success-alert",{attrs:{success:t.success,messageAlert:t.messageAlert},on:{"close-alert":t.closeSuccessAlert}})],1):t._e(),t._v(" "),t.success?e("div",{staticClass:"flex justify-center bg-transparent mt-2 mb-2"},[e("button",{staticClass:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",attrs:{type:"button"},on:{click:t.backTo}},[t._v("\n  Check Data Pemakaian Barang\n")])]):t._e(),t._v(" "),t.success?e("div",{staticClass:"flex justify-center bg-transparent mt-2 mb-2"},[e("div",[e("ul",{staticClass:"w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"},[t._m(0),t._v(" "),e("li",{staticClass:"w-full px-4 py-0 border-b border-gray-200 rounded-t-lg dark:border-gray-600"},[e("div",{staticClass:"flex justify-between space-x-4"},[e("div",[t._v("\n            "+t._s(t.showData.nama_barang_asal)+"("+t._s(t.showData.kode_barang_asal)+")\n          ")]),t._v(" "),e("div",[t._v("\n            "+t._s(parseFloat(t.showData.qty))+" "+t._s(t.showData.satuan_asal)+"\n          ")]),t._v(" "),e("div",[t._v("\n            "+t._s(t.showData.keperluan)+"\n          ")])])]),t._v(" "),e("li",{staticClass:"w-full px-4 py-0 border-b border-gray-200 rounded-t-lg dark:border-gray-600"},[e("div",{staticClass:"flex justify-between space-x-4"},[e("div",[t._v("\n            "+t._s(t.showData.nama_barang_tujuan)+"("+t._s(t.showData.kode_barang_tujuan)+") "),e("i",{staticClass:"fa-solid fa-right-left text-2xl text-emerald-700"}),t._v(" "+t._s(parseFloat(t.showData.stok_tujuan))+t._s(t.showData.satuan_tujuan)+"\n          ")])])])])])]):t._e(),t._v(" "),e("div",{staticClass:"flex-auto px-4 px-10 py-10 pt-0"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.addPemakaianBarang.apply(null,arguments)}}},[e("h6",{staticClass:"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"},[t._v("\n      Data Pemakaian Barang\n    ")]),t._v(" "),e("div",{staticClass:"flex justify-start space-x-6"},[e("div",{staticClass:"w-full w-6/12"},[e("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"kode_ref"}},[t._v("Kode Referensi")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.reference_code,expression:"input.reference_code"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",attrs:{type:"text",id:"kode_ref"},domProps:{value:t.input.reference_code},on:{input:function(e){e.target.composing||t.$set(t.input,"reference_code",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"w-full w-6/12"},[e("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"tgl"}},[t._v("Tanggal Pemakaian Barang")]),t._v(" "),e("datepicker",{style:{width:"100%",height:"10vh"},attrs:{id:"tgl",config:t.datePickerConfig,placeholder:"Tanggal Penjualan",format:t.dateFormat},on:{input:function(e){return t.handleTanggalPenjualan(e)}},model:{value:t.input.tanggal,callback:function(e){t.$set(t.input,"tanggal",e)},expression:"input.tanggal"}})],1)]),t._v(" "),e("div",{staticClass:"flex justify-start space-x-6"},[e("div",{staticClass:"w-6/12"},[e("div",{staticClass:"relative mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"barang_asal"}},[t._v("\n          Pilih Barang\n        ")]),t._v(" "),e("Select2",{attrs:{id:"barang_asal",settings:{allowClear:!0},options:[{id:null,text:"Pilih Barang"}].concat(Object(r.a)(t.barangs)),placeholder:"Pilih Barang"},on:{change:function(e){return t.changeBarangAsal(e)},select:function(e){return t.changeBarangAsal(e)}},model:{value:t.selectedBarangAsal,callback:function(e){t.selectedBarangAsal=e},expression:"selectedBarangAsal"}})],1),t._v(" "),t.validations.barang_asal?e("div",{staticClass:"w-full w-12/12"},[e("div",[e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n              "+t._s(t.validations.barang_asal[0])+"\n            ")])])])]):t._e(),t._v(" "),t.loadingBarangAsal?e("div",[e("div",{attrs:{role:"status"}},[e("svg",{staticClass:"w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",attrs:{"aria-hidden":"true",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),t._v(" "),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Loading...")])]),t._v(" "),e("span",{staticClass:"text-white"},[t._v("Preparing data barang")])]):t._e(),t._v(" "),e("div",[parseFloat(t.detailBarangAsal.toko)<=0?e("div",{staticClass:"flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",attrs:{role:"alert"}},[e("svg",{staticClass:"flex-shrink-0 inline w-4 h-4 me-3",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Info")]),t._v(" "),e("div",[e("span",{staticClass:"font-medium"},[t._v(t._s(t.detailBarangAsal.nama)+", stok tersedia :")]),t._v(" "+t._s(parseFloat(t.detailBarangAsal.toko))+" "+t._s(t.detailBarangAsal.satuan)+"\n        ")])]):e("div",{staticClass:"flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800",attrs:{role:"alert"}},[e("svg",{staticClass:"flex-shrink-0 inline w-4 h-4 me-3",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Info")]),t._v(" "),e("div",[e("span",{staticClass:"font-medium"},[t._v(t._s(t.detailBarangAsal.nama)+", stok tersedia :")]),t._v(" "+t._s(parseFloat(t.detailBarangAsal.toko))+" "+t._s(t.detailBarangAsal.satuan)+"\n        ")])])])]),t._v(" "),e("div",{staticClass:"w-6/12"},[e("h4",[t._v("Qty")]),t._v(" "),e("div",{staticClass:"relative mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.qty,expression:"input.qty"}],staticClass:"w-full",attrs:{disabled:parseFloat(t.detailBarangAsal.toko)<=0,type:"text"},domProps:{value:t.input.qty},on:{input:[function(e){e.target.composing||t.$set(t.input,"qty",e.target.value)},t.inputQty],focus:t.cleanQty}})]),t._v(" "),t.validations.qty?e("div",{staticClass:"w-full w-12/12"},[e("div",[e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n            "+t._s(t.validations.qty[0])+"\n          ")])])])]):t._e()])]),t._v(" "),e("div",{staticClass:"flex justify-start space-x-6 mt-12"},[e("div",{staticClass:"w-full w-6/12"},[e("div",{staticClass:"relative mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"keperluan"}},[t._v("\n      Jenis Keperluan\n    ")]),t._v(" "),e("Select2",{attrs:{disabled:parseFloat(t.detailBarangAsal.toko)<=0,id:"keperluan",settings:{allowClear:!0},options:[{id:null,text:"Jenis Keperluan"}].concat(Object(r.a)(t.keperluans)),placeholder:"Jenis Keperluan"},on:{change:function(e){return t.changeJenisKeperluan(e)},select:function(e){return t.changeJenisKeperluan(e)}},model:{value:t.selectedKeperluan,callback:function(e){t.selectedKeperluan=e},expression:"selectedKeperluan"}})],1),t._v(" "),t.validations.keperluan?e("div",{staticClass:"w-full w-12/12"},[e("div",[e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n          "+t._s(t.validations.keperluan[0])+"\n        ")])])])]):t._e()]),t._v(" "),"CETAK"===t.selectedKeperluan?e("div",{staticClass:"w-full w-6/12"},[e("div",{staticClass:"relative mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"barang_tujuan"}},[t._v("\n    Pilih Barang Cetak\n  ")]),t._v(" "),e("Select2",{attrs:{id:"barang_tujuan",settings:{allowClear:!0},options:[{id:null,text:"Pilih Barang"}].concat(Object(r.a)(t.barangDests)),placeholder:"Pilih Barang"},on:{change:function(e){return t.changeBarangTujuan(e)},select:function(e){return t.changeBarangTujuan(e)}},model:{value:t.selectedBarangTujuan,callback:function(e){t.selectedBarangTujuan=e},expression:"selectedBarangTujuan"}})],1),t._v(" "),t.loadingBarangTujuan?e("div",[e("div",{attrs:{role:"status"}},[e("svg",{staticClass:"w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",attrs:{"aria-hidden":"true",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),t._v(" "),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Loading...")])]),t._v(" "),e("span",{staticClass:"text-white"},[t._v("Preparing data barang")])]):t._e(),t._v(" "),t.showDetailBarangTujuan?e("div",[parseFloat(t.detailBarangTujuan.toko)<=0?e("div",{staticClass:"flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",attrs:{role:"alert"}},[e("svg",{staticClass:"flex-shrink-0 inline w-4 h-4 me-3",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Info")]),t._v(" "),e("div",[e("span",{staticClass:"font-medium"},[t._v(t._s(t.detailBarangTujuan.nama)+", stok tersedia :")]),t._v(" "+t._s(parseFloat(t.detailBarangTujuan.toko))+" "+t._s(t.detailBarangTujuan.satuan)+"\n    ")])]):e("div",{staticClass:"flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800",attrs:{role:"alert"}},[e("svg",{staticClass:"flex-shrink-0 inline w-4 h-4 me-3",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Info")]),t._v(" "),e("div",[e("span",{staticClass:"font-medium"},[t._v(t._s(t.detailBarangTujuan.nama)+", stok terkini :")]),t._v(" "+t._s(parseFloat(t.detailBarangTujuan.toko))+" "+t._s(t.detailBarangTujuan.satuan)+"\n    ")])])]):t._e()]):t._e()]),t._v(" "),e("div",{staticClass:"flex justify-start space-x-6 mt-12"},[e("div",{staticClass:"w-full w-12/12"},[e("div",{staticClass:"relative mb-3"},[e("label",{staticClass:"block mb-2 text-sm font-medium dark:",attrs:{for:"keterangan"}},[t._v("Keterangan")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input.keterangan,expression:"input.keterangan"}],staticClass:"block p-2.5 w-full text-sm text-blueGray-700 bg-gray-50 rounded-lg border border-gray-300",attrs:{disabled:parseFloat(t.detailBarangAsal.toko)<=0,id:"keterangan",rows:"4",placeholder:"Tambahkan keterangan..."},domProps:{value:t.input.keterangan},on:{input:[function(e){e.target.composing||t.$set(t.input,"keterangan",e.target.value)},function(e){return t.inputKeterangan(e)}]}})]),t._v(" "),t.validations.keterangan?e("div",{staticClass:"w-full w-12/12"},[e("div",[e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n            "+t._s(t.validations.keterangan[0])+"\n          ")])])])]):t._e()])]),t._v(" "),e("hr",{staticClass:"mt-6 border-b-1 border-blueGray-300"}),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full w-12/12 px-4 py-6"},[e("button",{staticClass:"w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",attrs:{type:"submit"}},[t.loadingSave?e("div",[e("svg",{staticClass:"inline w-4 h-4 mr-3 text-white animate-spin",attrs:{"aria-hidden":"true",role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}}),t._v(" "),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"}})]),t._v("\n    Loading...\n  ")]):e("span",[e("i",{staticClass:"fa-solid fa-plus"}),t._v(" Simpan Data")])]),t._v(" "),t.loadingSave?e("div",[e("molecules-row-loading",{attrs:{loading:t.loadingSave,options:t.options}})],1):t._e()])])])])])}),[function(){var t=this,e=t._self._c;return e("li",{staticClass:"w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"},[e("div",{staticClass:"flex justify-between space-x-4"},[e("div",[e("b",[t._v("Barang")])]),t._v(" "),e("div",[e("b",[t._v("QTY")])]),t._v(" "),e("div",[e("b",[t._v("Jenis")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MoleculesSuccessAlert:n(638).default,MoleculesRowLoading:n(195).default})}}]);