(window.webpackJsonp=window.webpackJsonp||[]).push([[22,42,129,161,174],{637:function(t,e,r){"use strict";r.d(e,"b",(function(){return n.a})),r.d(e,"a",(function(){return o})),r.d(e,"d",(function(){return d})),r.d(e,"c",(function(){return c}));var n=r(639),l=r(18),o=(r(69),r(15),function(){var t=Object(l.a)(regeneratorRuntime.mark((function t(e){var r,n,l,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,t.next=5,fetch(r,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Sirmuh-Key":e.api_key}});case 5:if((l=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,l.json();case 10:return o=t.sent,t.abrupt("return",o);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()),d=function(){var t=Object(l.a)(regeneratorRuntime.mark((function t(e){var r,n,l,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,t.next=5,fetch(r,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Sirmuh-Key":e.api_key}});case 5:if((l=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,l.json();case 10:return o=t.sent,t.abrupt("return",o);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=Object(l.a)(regeneratorRuntime.mark((function t(e){var r,n,l,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,t.next=5,fetch(r,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Sirmuh-Key":e.api_key}});case 5:if((l=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,l.json();case 10:return o=t.sent,t.abrupt("return",o);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},638:function(t,e,r){"use strict";r.r(e);var n={props:{success:{type:Boolean,default:!1},messageAlert:{type:String,default:""}},methods:{updateSuccess:function(){this.$emit("close-alert")}}},l=r(8),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid grid-cols-1 max-w-full px-0 mb-4"},[e("div",{staticClass:"col-span-12"},[t.success?e("div",{staticClass:"flex items-center w-full max-w-xs p-2 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",attrs:{id:"toast-success",role:"alert"}},[e("div",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"},[e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Check icon")])]),t._v(" "),e("div",{staticClass:"ml-3 text-sm font-normal"},[t._v(t._s(t.messageAlert))]),t._v(" "),e("button",{staticClass:"ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",attrs:{type:"button","data-dismiss-target":"#toast-success","aria-label":"Close"},on:{click:t.updateSuccess}},[e("span",{staticClass:"sr-only"},[t._v("Close")]),t._v(" "),e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},639:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(18),l=(r(69),r(15),function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,l,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,t.next=5,fetch(r,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Sirmuh-Key":e.api_key}});case 5:if((l=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,l.json();case 10:return o=t.sent,t.abrupt("return",o);case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}())},643:function(t,e,r){"use strict";r.r(e);var n=r(149),l=(r(62),r(63),r(18)),o=(r(69),r(310),r(37),r(42),r(15),r(150),r(36),r(637)),d=r(193),c=(r(311),{props:{type:{type:String,default:null},current:{type:[Number,String],default:null}},components:{Datepicker:d.a},data:function(){return{loading:null,success:null,messageAlert:null,options:"",api_url:"https://sirmuh.api.dksindo.com/api/v1",api_token:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l",input:{diskon:0,tglbeli:null},validations:[],datePickerConfig:{range:!1},selectedCategori:null,dateFormat:"YYYY-MM-DD",previewUrl:"",photo:[],categories:[],purchaseLimits:[],sellingLimits:[],suppliers:[],isDragging:null,selectedCategory:null}},beforeMount:function(){this.authTokenStorage()},mounted:function(){this.getCategoryDataBarang(),this.getSatuanBeliList(),this.getSatuanJualList(),this.getSupplierLists()},methods:{handleDragOver:function(t){t.preventDefault(),this.isDragging=!0},handleDragLeave:function(){this.isDragging=!1},handleDrop:function(t){t.preventDefault(),this.isDragging=!1;var e=t.dataTransfer.files;this.uploadFiles(e)},handleFileInput:function(t){var e=t.target.files;this.uploadFiles(e)},uploadFiles:function(t){var e=this;this.input.photo=t[0];var r=this.$refs.fileInput;if(r.files&&r.files.length>0){var n=r.files[0],l=new FileReader;l.onload=function(t){e.previewUrl=t.target.result},l.readAsDataURL(n)}else{event.preventDefault();var o=t[0],d=new FileReader;d.onload=function(t){e.previewUrl=t.target.result},d.readAsDataURL(o)}},removePreview:function(){this.previewUrl=""},changeCategory:function(t){t&&t.id&&(this.input.kategori=t.text,this.selectedCategori=t.id)},changeSatuanBeli:function(t){t&&(this.input.satuanbeli=t.text)},changeSatuanJual:function(t){t&&(this.input.satuanjual=t.text)},transformCategoryData:function(t){return t.filter((function(t){return t&&t.id})).map((function(t){return{id:t.id,text:t.nama}}))},transformSatuanBeli:function(t){return t.filter((function(t){return t&&t.nama})).map((function(t){return{id:t.nama,text:t.nama}}))},transformSatuanJual:function(t){return t.filter((function(t){return t&&t.nama})).map((function(t){return{id:t.nama,text:t.nama}}))},transformSupplierData:function(t){return t.filter((function(t){return t&&t.nama})).map((function(t){return{id:t.nama,text:t.nama}}))},handleDateChange:function(t){this.input.tglbeli=t},handleExpiredDate:function(t){this.input.expired=t},handleAddExpired:function(){this.input.ada_expired_date,this.input.ada_expired_date},getCategoryDataBarang:function(){var t=this;this.loading=!0;var e=function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(){var r,n,l,d,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],n=1,l=1;case 3:if(!(n<=l)){e.next=12;break}return e.next=6,Object(o.b)({api_url:"".concat(t.api_url,"/data-kategori-barang?page=").concat(n),token:t.token.token,api_key:t.api_token});case 6:data=e.sent,r=r.concat(null==data?void 0:data.data),l=null==data||null===(d=data.meta)||void 0===d?void 0:d.last_page,n++,e.next=3;break;case 12:return e.abrupt("return",r);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(data){t.categories=t.transformCategoryData(data)})).finally((function(){t.loading=!1})).catch((function(t){return console.log(t)}))},getSatuanBeliList:function(){var t=this,e=function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(){var r,n,l,d,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],n=1,l=1;case 3:if(!(n<=l)){e.next=12;break}return e.next=6,Object(o.b)({api_url:"".concat(t.api_url,"/satuan-beli?page=").concat(n),token:t.token.token,api_key:t.api_token});case 6:data=e.sent,r=r.concat(null==data?void 0:data.data),l=null==data||null===(d=data.meta)||void 0===d?void 0:d.last_page,n++,e.next=3;break;case 12:return e.abrupt("return",r);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(data){t.purchaseLimits=t.transformSatuanBeli(data)})).catch((function(t){return console.log(t)}))},getSatuanJualList:function(){var t=this,e=function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(){var r,n,l,d,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],n=1,l=1;case 3:if(!(n<=l)){e.next=12;break}return e.next=6,Object(o.b)({api_url:"".concat(t.api_url,"/satuan-jual?page=").concat(n),token:t.token.token,api_key:t.api_token});case 6:data=e.sent,r=r.concat(null==data?void 0:data.data),l=null==data||null===(d=data.meta)||void 0===d?void 0:d.last_page,n++,e.next=3;break;case 12:return e.abrupt("return",r);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(data){t.sellingLimits=t.transformSatuanJual(data)})).catch((function(t){return console.log(t)}))},getSupplierLists:function(){var t=this,e=function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(){var r,n,l,d,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],n=1,l=1;case 3:if(!(n<=l)){e.next=12;break}return e.next=6,Object(o.b)({api_url:"".concat(t.api_url,"/data-supplier?page=").concat(n),token:t.token.token,api_key:t.api_token});case 6:data=e.sent,r=r.concat(null==data?void 0:data.data),l=null==data||null===(d=data.meta)||void 0===d?void 0:d.last_page,n++,e.next=3;break;case 12:return e.abrupt("return",r);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(data){t.suppliers=t.transformSupplierData(data)})).catch((function(t){return console.log(t)}))},generateKode:function(){var t=this.input.nama.split(" "),e=this.input.kategori?this.input.kategori.split(" "):"",r=[];e.length>0&&(r=[e[0].substring(0,1).toUpperCase(),e[0].length>1?e[0].substring(1,2).toUpperCase():"",e[0].slice(-1).toUpperCase()]);var n=[t[0].substring(0,1).toUpperCase(),t[0].length>2?t[0].substring(2,3).toUpperCase():"",t[0].slice(-1).toUpperCase()];t.length>1&&n.push(t[1].substring(0,1).toUpperCase()),t.length>2&&n.push(t[2].substring(0,1).toUpperCase()),this.input.kode=n.join("")+"."+r.join(""),this.input.barcode=n.join("")+"."+r.join("")},closeSuccessAlert:function(){this.success=!1,this.message=""},backTo:function(){this.$router.push("/dashboard/master/barang/barang-by-suppliers")},addNewBarang:function(){var t=this;this.loading=!0,this.options="add-barang";var data={nama:this.input.nama,kategori_barang:this.input.kategori,kode:this.input.kode,barcode:this.input.barcode,supplier:this.input.supplier,ada_expired_date:this.input.ada_expired_date?"True":"False",expired:"True"===this.input.ada_expired_date?this.$moment(this.input.expired).format("YYYY-MM-DD"):null,satuanbeli:this.input.satuanbeli,hargabeli:this.input.hargabeli,satuanjual:this.input.satuanjual,hargajual:this.input.hargajual,isi:this.input.isi,stok:this.input.stok,diskon:void 0===this.input.diskon||null===this.input.diskon||isNaN(this.input.diskon)?null:parseFloat(this.input.diskon),tglbeli:this.input.tglbeli?this.$moment(this.input.tglbeli).format("YYYY-MM-DD"):null,keterangan:this.input.keterangan?this.input.keterangan:null,photo:this.input.photo?this.input.photo:null};console.log(data);var e={headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(this.token.token)}},r=new FormData;r.append("nama",data.nama),r.append("kategori",data.kategori),r.append("kode",data.kode),r.append("barcode",data.barcode),r.append("supplier",data.supplier),r.append("ada_expired_date",data.ada_expired_date),r.append("expired",data.expired),r.append("satuanbeli",data.satuanbeli),r.append("hargabeli",data.hargabeli),r.append("satuanjual",data.satuanjual),r.append("hargajual",data.hargajual),r.append("isi",data.isi),r.append("stok",data.stok),r.append("diskon",data.diskon),r.append("tglbeli",data.tglbeli),r.append("keterangan",data.keterangan),null!==data.photo&&r.append("photo",data.photo),this.$api.post("/data-barang",r,e).then((function(e){var data=e.data;data.success?(t.success=!0,t.messageAlert=data.message,t.validations=[],t.$swal({title:t.input.nama,text:data.message,imageUrl:t.previewUrl,imageWidth:400,imageHeight:200,imageAlt:t.input.nama}),setTimeout((function(){t.loading=!1,t.input={},t.previewUrl=""}),500)):(t.$swal({icon:"error",title:"Oops...",text:data.message}),setTimeout((function(){t.loading=!1,t.input={},t.previewUrl=""}),1e3))})).catch((function(e){t.validations=e.response.data,t.success=!1,setTimeout((function(){t.loading=!1}),1e3)}))}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}}),v=c,f=r(8),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"},[t.success?e("div",{ref:"alertNotifs",staticClass:"flex justify-center w-full bg-transparent mt-4"},[e("molecules-success-alert",{attrs:{success:t.success,messageAlert:t.messageAlert},on:{"close-alert":t.closeSuccessAlert}})],1):t._e(),t._v(" "),t.success?e("div",{staticClass:"flex justify-center bg-transparent mt-2 mb-2"},[e("button",{staticClass:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",attrs:{type:"button"},on:{click:t.backTo}},[t._v("\n      Check Data Barang\n    ")])]):t._e(),t._v(" "),e("div",{staticClass:"flex-auto px-4 lg:px-10 py-10 pt-0"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.addNewBarang.apply(null,arguments)}}},[e("h6",{staticClass:"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"},[t._v("\n        Identitas Barang\n      ")]),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"kategori"}},[t._v("\n              Kategori Barang\n            ")]),t._v(" "),e("Select2",{attrs:{settings:{allowClear:!0},options:[{id:null,text:"Pilih kategori"}].concat(Object(n.a)(t.categories))},on:{change:function(e){return t.changeCategory(e)},select:function(e){return t.changeCategory(e)}},model:{value:t.selectedCategori,callback:function(e){t.selectedCategori=e},expression:"selectedCategori"}}),t._v(" "),t.validations.kategori?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n                "+t._s(t.validations.kategori[0])+"\n              ")])]):t._e()],1)]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"nama"}},[t._v("\n              Nama Barang\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.nama,expression:"input.nama"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"nama",disabled:!t.input.kategori,type:"text",placeholder:"Nama Barang"},domProps:{value:t.input.nama},on:{input:[function(e){e.target.composing||t.$set(t.input,"nama",e.target.value)},t.generateKode]}})]),t._v(" "),t.validations.nama?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n              "+t._s(t.validations.nama[0])+"\n            ")])]):t._e()]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"kode"}},[t._v("\n              Kode Barang\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.kode,expression:"input.kode"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"kode",disabled:!t.input.kategori,type:"text"},domProps:{value:t.input.kode},on:{input:function(e){e.target.composing||t.$set(t.input,"kode",e.target.value)}}}),t._v(" "),t.validations.kode?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n                "+t._s(t.validations.kode[0])+"\n              ")])]):t._e()])]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"barcode"}},[t._v("\n              Barcode\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.barcode,expression:"input.barcode"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"barcode",type:"text",disabled:!t.input.kategori},domProps:{value:t.input.barcode},on:{input:function(e){e.target.composing||t.$set(t.input,"barcode",e.target.value)}}}),t._v(" "),t.validations.barcode?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n                "+t._s(t.validations.barcode[0])+"\n              ")])]):t._e()])]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"supplier"}},[t._v("\n              Supplier\n            ")]),t._v(" "),e("Select2",{attrs:{id:"supplier",disabled:!t.input.kategori,options:[{id:null,text:"Pilih Supplier"}].concat(Object(n.a)(t.suppliers))},on:{change:t.changeSatuanBeli,select:t.changeSatuanBeli},model:{value:t.input.supplier,callback:function(e){t.$set(t.input,"supplier",e)},expression:"input.supplier"}}),t._v(" "),t.validations.supplier?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n                "+t._s(t.validations.supplier[0])+"\n              ")])]):t._e()],1)]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[t.input.ada_expired_date?e("div",{staticClass:"relative w-full"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"expired"}},[t._v("\n              Expired\n            ")]),t._v(" "),e("datepicker",{style:{width:"100%",height:"10vh"},attrs:{id:"expired",disabled:!t.input.kategori,config:t.datePickerConfig,placeholder:"Tanggal Expired",format:t.dateFormat},on:{input:t.handleExpiredDate},model:{value:t.input.expired,callback:function(e){t.$set(t.input,"expired",e)},expression:"input.expired"}})],1):t._e(),t._v(" "),e("div",{class:"relative w-full ".concat(t.input.ada_expired_date?"py-0":"py-4 mb-3")},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.ada_expired_date,expression:"input.ada_expired_date"}],staticClass:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",attrs:{disabled:!t.input.kategori,id:"bordered-checkbox-1",type:"checkbox",name:"ada_expired_date"},domProps:{checked:Array.isArray(t.input.ada_expired_date)?t._i(t.input.ada_expired_date,null)>-1:t.input.ada_expired_date},on:{change:[function(e){var r=t.input.ada_expired_date,n=e.target,l=!!n.checked;if(Array.isArray(r)){var o=t._i(r,null);n.checked?o<0&&t.$set(t.input,"ada_expired_date",r.concat([null])):o>-1&&t.$set(t.input,"ada_expired_date",r.slice(0,o).concat(r.slice(o+1)))}else t.$set(t.input,"ada_expired_date",l)},t.handleAddExpired]}}),t._v(" "),e("label",{staticClass:"w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",attrs:{htmlFor:"bordered-checkbox-1"}},[t._v("\n              "+t._s(t.input.ada_expired_date?"Tidak Ada Expired":"Ada Expired")+"\n            ")])])])]),t._v(" "),e("hr",{staticClass:"mt-6 border-b-1 border-blueGray-300"}),t._v(" "),e("h6",{staticClass:"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"},[t._v("\n        Satuan Isi\n      ")]),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"satuanbeli"}},[t._v("\n              Satuan Beli\n            ")]),t._v(" "),e("Select2",{attrs:{id:"satuanbeli",disabled:!t.input.kategori,options:[{id:null,text:"Pilih Satuan Beli"}].concat(Object(n.a)(t.purchaseLimits))},on:{change:t.changeSatuanBeli,select:t.changeSatuanBeli},model:{value:t.input.satuanbeli,callback:function(e){t.$set(t.input,"satuanbeli",e)},expression:"input.satuanbeli"}}),t._v(" "),t.validations.satuanbeli?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n                "+t._s(t.validations.satuanbeli[0])+"\n              ")])]):t._e()],1)]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"hargabeli"}},[t._v("\n              Harga Beli\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.hargabeli,expression:"input.hargabeli"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"hargabeli",disabled:!t.input.kategori,type:"number"},domProps:{value:t.input.hargabeli},on:{input:function(e){e.target.composing||t.$set(t.input,"hargabeli",e.target.value)}}}),t._v(" "),t.validations.hargabeli?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n                "+t._s(t.validations.hargabeli[0])+"\n              ")])]):t._e()])]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"satuanjual"}},[t._v("\n              Satuan Jual\n            ")]),t._v(" "),e("Select2",{attrs:{id:"satuanjual",disabled:!t.input.kategori,options:[{id:null,text:"Pilih Satuan Jual"}].concat(Object(n.a)(t.sellingLimits))},on:{change:t.changeSatuanJual,select:t.changeSatuanJual},model:{value:t.input.satuanjual,callback:function(e){t.$set(t.input,"satuanjual",e)},expression:"input.satuanjual"}}),t._v(" "),t.validations.satuanjual?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n                "+t._s(t.validations.satuanjual[0])+"\n              ")])]):t._e()],1)]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"hargajual"}},[t._v("\n              Harga Jual\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.hargajual,expression:"input.hargajual"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"hargajual",disabled:!t.input.kategori,type:"number"},domProps:{value:t.input.hargajual},on:{input:function(e){e.target.composing||t.$set(t.input,"hargajual",e.target.value)}}}),t._v(" "),t.validations.hargajual?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n                "+t._s(t.validations.hargajual[0])+"\n              ")])]):t._e()])]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"isi"}},[t._v("\n              Isi\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.isi,expression:"input.isi"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"isi",disabled:!t.input.kategori,type:"number"},domProps:{value:t.input.isi},on:{input:function(e){e.target.composing||t.$set(t.input,"isi",e.target.value)}}}),t._v(" "),t.validations.isi?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n                "+t._s(t.validations.isi[0])+"\n              ")])]):t._e()])]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"stok"}},[t._v("\n              Stok\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.stok,expression:"input.stok"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"stok",disabled:!t.input.kategori,type:"number"},domProps:{value:t.input.stok},on:{input:function(e){e.target.composing||t.$set(t.input,"stok",e.target.value)}}}),t._v(" "),t.validations.stok?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n                "+t._s(t.validations.stok[0])+"\n              ")])]):t._e()])])]),t._v(" "),e("hr",{staticClass:"mt-6 border-b-1 border-blueGray-300"}),t._v(" "),e("h6",{staticClass:"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"},[t._v("\n        Diskon Dan Point\n      ")]),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"diskon"}},[t._v("\n              Diskon\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.diskon,expression:"input.diskon"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"diskon",disabled:!t.input.kategori,type:"number"},domProps:{value:t.input.diskon},on:{input:function(e){e.target.composing||t.$set(t.input,"diskon",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"tglbeli"}},[t._v("\n              Tgl beli\n            ")]),t._v(" "),e("datepicker",{style:{width:"100%",height:"10vh"},attrs:{id:"tglbeli",disabled:!t.input.kategori,config:t.datePickerConfig,placeholder:"Tanggal Beli",format:t.dateFormat},on:{input:t.handleDateChange},model:{value:t.input.tglbeli,callback:function(e){t.$set(t.input,"tglbeli",e)},expression:"input.tglbeli"}})],1)]),t._v(" "),e("div",{staticClass:"w-full lg:w-12/12 px-4 py-6"},[e("div",{staticClass:"relative"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"description"}},[t._v("Keterangan")]),t._v(" "),e("wysiwyg",{attrs:{id:"description"},model:{value:t.input.keterangan,callback:function(e){t.$set(t.input,"keterangan",e)},expression:"input.keterangan"}})],1),t._v(" "),t.validations.keterangan?e("div",{staticClass:"flex p-4 py-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n              "+t._s(t.validations.keterangan[0])+"\n            ")])]):t._e()])]),t._v(" "),e("hr",{staticClass:"mt-6 border-b-1 border-blueGray-300"}),t._v(" "),e("h6",{staticClass:"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"},[t._v("\n        Foto Barang\n      ")]),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-12/12 px-4 py-6"},[t.previewUrl?e("div",{staticClass:"flex justify-between w-full"},[e("div",{staticClass:"grow"},[e("img",{staticClass:"h-auto w-full",attrs:{src:t.previewUrl}})]),t._v(" "),e("div",{staticClass:"relative h-32 w-32"},[e("button",{staticClass:"bg-transparent rounded-lg absolute top-[-1rem] right-[-2rem] h-16 w-16",attrs:{disabled:!t.input.kategori},on:{click:t.removePreview}},[e("i",{staticClass:"fa-solid fa-xmark text-2xl text-gray-700 font-bold"})])])]):e("div",{staticClass:"flex items-center justify-center w-full"},[e("label",{staticClass:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",attrs:{for:"dropzone-file"}},[e("div",{staticClass:"flex flex-col items-center justify-center pt-5 pb-6 w-full",on:{dragover:t.handleDragOver,dragleave:t.handleDragLeave,drop:t.handleDrop}},[e("h2",{staticClass:"mb-4 text-sm text-gray-500 dark:text-gray-400"},[t._v("\n                  Upload Foto Barang Disini !\n                ")]),t._v(" "),e("i",{staticClass:"fa-solid fa-cloud-arrow-up text-5xl text-gray-500"}),t._v(" "),t._m(0)]),t._v(" "),e("input",{ref:"fileInput",staticClass:"w-full hidden",attrs:{disabled:!t.input.kategori,id:"dropzone-file",type:"file"},on:{change:t.handleFileInput}})])]),t._v(" "),t.validations.photo?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n              "+t._s(t.validations.photo[0])+"\n            ")])]):t._e()])]),t._v(" "),e("hr",{staticClass:"mt-6 border-b-1 border-blueGray-300"}),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-12/12 px-4 py-6"},[e("button",{staticClass:"w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",attrs:{disabled:!t.input.kategori,type:"submit"}},[t.loading?e("div",[e("svg",{staticClass:"inline w-4 h-4 mr-3 text-white animate-spin",attrs:{"aria-hidden":"true",role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}}),t._v(" "),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"}})]),t._v("\n              Loading...\n            ")]):e("span",[e("i",{staticClass:"fa-solid fa-plus"}),t._v(" Tambah Barang")])]),t._v(" "),t.loading?e("div",[e("molecules-row-loading",{attrs:{loading:t.loading,options:t.options}})],1):t._e()])])])])])}),[function(){var t=this,e=t._self._c;return e("p",{staticClass:"mb-2 text-sm text-gray-500 dark:text-gray-400"},[e("span",{staticClass:"font-semibold"},[t._v("Click to upload")]),t._v(" or drag\n                  and drop\n                ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MoleculesSuccessAlert:r(638).default,MoleculesRowLoading:r(194).default})}}]);