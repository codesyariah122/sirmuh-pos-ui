(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{616:function(t,e,l){t.exports=l.p+"img/default.b5025c5.jpg"},622:function(t,e,l){"use strict";l.r(e);var n=l(130),r=(l(59),l(48),l(13)),o=(l(58),l(36),l(38),l(11),l(131),l(35),l(610)),d=l(194),c=(l(316),{props:{type:{type:String,default:null},detail:{type:[Object,Array]},slug:{type:String}},components:{Datepicker:d.a},data:function(){return{image_url:"https://sirmuh.api.dksindo.com/storage",loading:null,success:null,messageAlert:null,options:"",api_url:"https://sirmuh.api.dksindo.com/api/v1",api_token:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l",input:{},validations:[],datePickerConfig:{range:!1},dateFormat:"YYYY-MM-DD",previewUrl:"",photo:[],categories:[],purchaseLimits:[],sellingLimits:[],suppliers:[],isDragging:null,selectedCategory:null}},beforeMount:function(){this.authTokenStorage()},mounted:function(){this.getCategoryDataBarang(),this.getSatuanBeliList(),this.getSatuanJualList(),this.getSupplierLists()},methods:{handleDragOver:function(t){t.preventDefault(),this.isDragging=!0},handleDragLeave:function(){this.isDragging=!1},handleDrop:function(t){t.preventDefault(),this.isDragging=!1;var e=t.dataTransfer.files;this.uploadFiles(e)},handleFileInput:function(t){var e=t.target.files;this.uploadFiles(e)},uploadFiles:function(t){var e=this;this.input.photo=t[0];var l=this.$refs.fileInput;if(l.files&&l.files.length>0){var n=l.files[0],r=new FileReader;r.onload=function(t){e.previewUrl=t.target.result},r.readAsDataURL(n)}else{event.preventDefault();var o=t[0],d=new FileReader;d.onload=function(t){e.previewUrl=t.target.result},d.readAsDataURL(o)}},removePreview:function(){this.previewUrl=""},changeCategory:function(t){t&&t.text&&(this.input.kategori=t.text)},changeSatuanBeli:function(t){t&&(this.input.satuanbeli=t.text)},changeSatuanJual:function(t){t&&(this.input.satuanjual=t.text)},transformCategoryData:function(t){return t.filter((function(t){return t&&t.kode})).map((function(t){return{id:t.kode,text:t.kode}}))},transformSatuanBeli:function(t){return t.filter((function(t){return t&&t.nama})).map((function(t){return{id:t.nama,text:t.nama}}))},transformSatuanJual:function(t){return t.filter((function(t){return t&&t.nama})).map((function(t){return{id:t.nama,text:t.nama}}))},transformSupplierData:function(t){return t.filter((function(t){return t&&t.nama})).map((function(t){return{id:t.nama,text:t.nama}}))},handleDateChange:function(t){console.log(t),this.input.tglbeli=t},handleExpiredDate:function(t){this.input.expired=t},handleAddExpired:function(){this.input.ada_expired_date,this.input.ada_expired_date},getCategoryDataBarang:function(){var t=this,e=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var l,n,r,d,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=[],n=1,r=1;case 3:if(!(n<=r)){e.next=12;break}return e.next=6,Object(o.c)({api_url:"".concat(t.api_url,"/data-kategori?page=").concat(n),token:t.token.token,api_key:t.api_token});case 6:data=e.sent,l=l.concat(null==data?void 0:data.data),r=null==data||null===(d=data.meta)||void 0===d?void 0:d.last_page,n++,e.next=3;break;case 12:return e.abrupt("return",l);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(data){t.categories=t.transformCategoryData(data)})).catch((function(t){return console.log(t)}))},getSatuanBeliList:function(){var t=this,e=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var l,n,r,d,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=[],n=1,r=1;case 3:if(!(n<=r)){e.next=12;break}return e.next=6,Object(o.c)({api_url:"".concat(t.api_url,"/satuan-beli?page=").concat(n),token:t.token.token,api_key:t.api_token});case 6:data=e.sent,l=l.concat(null==data?void 0:data.data),r=null==data||null===(d=data.meta)||void 0===d?void 0:d.last_page,n++,e.next=3;break;case 12:return e.abrupt("return",l);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(data){t.purchaseLimits=t.transformSatuanBeli(data)})).catch((function(t){return console.log(t)}))},getSatuanJualList:function(){var t=this,e=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var l,n,r,d,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=[],n=1,r=1;case 3:if(!(n<=r)){e.next=12;break}return e.next=6,Object(o.c)({api_url:"".concat(t.api_url,"/satuan-jual?page=").concat(n),token:t.token.token,api_key:t.api_token});case 6:data=e.sent,l=l.concat(null==data?void 0:data.data),r=null==data||null===(d=data.meta)||void 0===d?void 0:d.last_page,n++,e.next=3;break;case 12:return e.abrupt("return",l);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(data){t.sellingLimits=t.transformSatuanJual(data)})).catch((function(t){return console.log(t)}))},getSupplierLists:function(){var t=this,e=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var l,n,r,d,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=[],n=1,r=1;case 3:if(!(n<=r)){e.next=12;break}return e.next=6,Object(o.c)({api_url:"".concat(t.api_url,"/data-supplier?page=").concat(n),token:t.token.token,api_key:t.api_token});case 6:data=e.sent,l=l.concat(null==data?void 0:data.data),r=null==data||null===(d=data.meta)||void 0===d?void 0:d.last_page,n++,e.next=3;break;case 12:return e.abrupt("return",l);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(data){t.suppliers=t.transformSupplierData(data)})).catch((function(t){return console.log(t)}))},generateKode:function(){var t=this.input.nama.split(" "),e=this.input.kategori?this.input.kategori.split(" "):"",l=[];e.length>0&&(l=[e[0].substring(0,1).toUpperCase(),e[0].length>1?e[0].substring(1,2).toUpperCase():"",e[0].slice(-1).toUpperCase()]);var n=[t[0].substring(0,1).toUpperCase(),t[0].length>2?t[0].substring(2,3).toUpperCase():"",t[0].slice(-1).toUpperCase()];t.length>1&&n.push(t[1].substring(0,1).toUpperCase()),t.length>2&&n.push(t[2].substring(0,1).toUpperCase()),this.input.kode=n.join("")+"."+l.join(""),this.input.barcode=n.join("")+"."+l.join("")},closeSuccessAlert:function(){this.success=!1,this.message=""},backTo:function(){this.$router.push("/dashboard/barang")},addNewBarang:function(){var t=this;this.loading=!0,this.options="add-barang";var e={nama:this.input.nama?this.input.nama:this.detail.nama,kategori:this.input.kategori?this.input.kategori:this.detail.kategori,kode:this.input.kode?this.input.kode:this.detail.kode,barcode:this.input.barcode?this.input.barcode:this.detail.kode_barcode,supplier:this.input.supplier?this.input.supplier:this.detail.supplier,ada_expired_date:this.input.ada_expired_date?"True":this.detail.ada_expired_date,expired:"True"===this.input.ada_expired_date?this.$moment(this.input.expired).format("YYYY-MM-DD"):this.detail.expired,satuanbeli:this.input.satuanbeli?this.input.satuanbeli:this.detail.satuanbeli,hargabeli:this.input.hargabeli?this.input.hargabeli:this.detail.hpp,satuanjual:this.input.satuanjual?this.input.satuanjual:this.detail.satuan,hargajual:this.input.hargajual?this.input.hargajual:this.detail.harga_toko,isi:this.input.isi?this.input.isi:this.detail.isi,stok:this.input.stok?this.input.stok:this.detail.toko,diskon:this.input.diskon?this.input.diskon:this.detail.diskon,tglbeli:this.input.tglbeli?this.$moment(this.input.tglbeli).format("YYYY-MM-DD"):this.detail.tgl_terakhir,photo:this.input.photo?this.input.photo:this.detail.photo},l="/data-barang/".concat(this.slug),n={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.token.token)}};this.$api.put(l,e,n).then((function(e){var data=e.data;data.success?(t.success=!0,t.messageAlert=data.message+","+t.input.nama,t.validations=[],t.$swal({title:t.input.nama?t.input.nama:t.detail.nama,text:data.message+","+t.input.nama?t.input.nama:t.detail.nama,imageUrl:t.previewUrl?t.previewUrl:t.image_url+"/"+t.detail.photo,imageWidth:400,imageHeight:200,imageAlt:t.input.nama?t.input.nama:t.detail.nama}),setTimeout((function(){t.loading=!1,t.input={},t.previewUrl=""}),500)):(t.$swal({icon:"error",title:"Oops...",text:data.message}),setTimeout((function(){t.loading=!1,t.input={},t.previewUrl=""}),1e3))})).catch((function(e){t.validations=e.response.data,t.success=!1,setTimeout((function(){t.loading=!1}),1e3)}))},getDefaultDate:function(){return new Date}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]},computedExpiredDate:{get:function(){return"False"!==this.input.ada_expired_date},set:function(t){this.input.ada_expired_date=t?"True":"False"}},previewImg:function(){return this.detail.photo?"".concat("https://sirmuh.api.dksindo.com/storage","/").concat(this.detail.photo):l(616)},supplier:function(){var t;return this.detail.suppliers&&null!==(t=this.detail)&&void 0!==t&&t.suppliers[0]?this.detail.suppliers[0].nama:"Loading.."},formattedDate:{get:function(){console.log(this.input.tgl_terakhir);var t=new Date(this.detail.tgl_terakhir);return isNaN(t.getTime())?this.getDefaultDate():t},set:function(t){this.handleDateChange(t)}}}}),v=c,f=l(5),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"},[t.success?e("div",{ref:"alertNotifs",staticClass:"flex justify-center w-full bg-transparent mt-4"},[e("molecules-success-alert",{attrs:{success:t.success,messageAlert:t.messageAlert},on:{"close-alert":t.closeSuccessAlert}}),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",attrs:{type:"button"},on:{click:t.backTo}},[t._v("\n      Check Data Barang\n    ")])],1):t._e(),t._v(" "),e("div",{staticClass:"flex-auto px-4 lg:px-10 py-10 pt-0"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.addNewBarang.apply(null,arguments)}}},[e("h6",{staticClass:"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"},[t._v("\n        Identitas Barang\n      ")]),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"kategori"}},[t._v("\n              Kategori Barang\n            ")]),t._v(" "),e("Select2",{attrs:{settings:{allowClear:!0},options:[{id:null,text:"Pilih kategori"}].concat(Object(n.a)(t.categories))},on:{change:function(e){return t.changeCategory(e)},select:function(e){return t.changeCategory(e)}},model:{value:t.detail.kategori,callback:function(e){t.$set(t.detail,"kategori",e)},expression:"detail.kategori"}}),t._v(" "),t.validations.kategori?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n                "+t._s(t.validations.kategori[0])+"\n              ")])]):t._e()],1)]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"nama"}},[t._v("\n              Nama Barang\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.detail.nama,expression:"detail.nama"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"nama",type:"text",placeholder:"Nama Barang"},domProps:{value:t.detail.nama},on:{input:[function(e){e.target.composing||t.$set(t.detail,"nama",e.target.value)},t.generateKode]}})]),t._v(" "),t.validations.nama?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n              "+t._s(t.validations.nama[0])+"\n            ")])]):t._e()]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"kode"}},[t._v("\n              Kode Barang\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.detail.kode,expression:"detail.kode"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"kode",type:"text"},domProps:{value:t.detail.kode},on:{input:function(e){e.target.composing||t.$set(t.detail,"kode",e.target.value)}}}),t._v(" "),t.validations.kode?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n                "+t._s(t.validations.kode[0])+"\n              ")])]):t._e()])]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"barcode"}},[t._v("\n              Barcode\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.detail.kode_barcode,expression:"detail.kode_barcode"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{type:"text"},domProps:{value:t.detail.kode_barcode},on:{input:function(e){e.target.composing||t.$set(t.detail,"kode_barcode",e.target.value)}}}),t._v(" "),t.validations.barcode?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n                "+t._s(t.validations.barcode[0])+"\n              ")])]):t._e()])]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"supplier"}},[t._v("\n              Supplier\n            ")]),t._v(" "),e("Select2",{attrs:{options:[{id:null,text:"Pilih Supplier"}].concat(Object(n.a)(t.suppliers))},on:{change:t.changeSatuanBeli,select:t.changeSatuanBeli},model:{value:t.supplier,callback:function(e){t.supplier=e},expression:"supplier"}}),t._v(" "),t.validations.supplier?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n                "+t._s(t.validations.supplier[0])+"\n              ")])]):t._e()],1)]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[t.input.ada_expired_date?e("div",{staticClass:"relative w-full"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"barcode"}},[t._v("\n              Expired\n            ")]),t._v(" "),e("datepicker",{style:{width:"100%",height:"10vh"},attrs:{config:t.datePickerConfig,placeholder:"Tanggal Expired",format:t.dateFormat},on:{input:t.handleExpiredDate},model:{value:t.detail.expired,callback:function(e){t.$set(t.detail,"expired",e)},expression:"detail.expired"}})],1):t._e(),t._v(" "),e("div",{class:"relative w-full ".concat(t.input.ada_expired_date?"py-0":"py-4 mb-3")},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.computedExpiredDate,expression:"computedExpiredDate"}],staticClass:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",attrs:{id:"bordered-checkbox-1",type:"checkbox",name:"ada_expired_date"},domProps:{checked:Array.isArray(t.computedExpiredDate)?t._i(t.computedExpiredDate,null)>-1:t.computedExpiredDate},on:{change:[function(e){var l=t.computedExpiredDate,n=e.target,r=!!n.checked;if(Array.isArray(l)){var o=t._i(l,null);n.checked?o<0&&(t.computedExpiredDate=l.concat([null])):o>-1&&(t.computedExpiredDate=l.slice(0,o).concat(l.slice(o+1)))}else t.computedExpiredDate=r},t.handleAddExpired]}}),t._v(" "),e("label",{staticClass:"w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",attrs:{for:"bordered-checkbox-1"}},[t._v("\n              "+t._s(t.input.ada_expired_date?"Tidak Ada Expired":"Ada Expired")+"\n            ")])])])]),t._v(" "),e("hr",{staticClass:"mt-6 border-b-1 border-blueGray-300"}),t._v(" "),e("h6",{staticClass:"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"},[t._v("\n        Satuan Isi\n      ")]),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"satuanbeli"}},[t._v("\n              Satuan Beli\n            ")]),t._v(" "),e("Select2",{attrs:{options:[{id:null,text:"Pilih Satuan Beli"}].concat(Object(n.a)(t.purchaseLimits))},on:{change:t.changeSatuanBeli,select:t.changeSatuanBeli},model:{value:t.detail.satuanbeli,callback:function(e){t.$set(t.detail,"satuanbeli",e)},expression:"detail.satuanbeli"}}),t._v(" "),t.validations.satuanbeli?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n                "+t._s(t.validations.satuanbeli[0])+"\n              ")])]):t._e()],1)]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"hargabeli"}},[t._v("\n              Harga Beli\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.detail.hpp,expression:"detail.hpp"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{type:"number"},domProps:{value:t.detail.hpp},on:{input:function(e){e.target.composing||t.$set(t.detail,"hpp",e.target.value)}}}),t._v(" "),t.validations.hargabeli?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n                "+t._s(t.validations.hargabeli[0])+"\n              ")])]):t._e()])]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"satuanjual"}},[t._v("\n              Satuan Jual\n            ")]),t._v(" "),e("Select2",{attrs:{options:[{id:null,text:"Pilih Satuan Jual"}].concat(Object(n.a)(t.sellingLimits))},on:{change:t.changeSatuanJual,select:t.changeSatuanJual},model:{value:t.detail.satuan,callback:function(e){t.$set(t.detail,"satuan",e)},expression:"detail.satuan"}}),t._v(" "),t.validations.satuanjual?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n                "+t._s(t.validations.satuanjual[0])+"\n              ")])]):t._e()],1)]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"hargajual"}},[t._v("\n              Harga Jual\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.detail.harga_toko,expression:"detail.harga_toko"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{type:"number"},domProps:{value:t.detail.harga_toko},on:{input:function(e){e.target.composing||t.$set(t.detail,"harga_toko",e.target.value)}}}),t._v(" "),t.validations.hargajual?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n                "+t._s(t.validations.hargajual[0])+"\n              ")])]):t._e()])]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"hargajual"}},[t._v("\n              Isi\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.detail.isi,expression:"detail.isi"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{type:"number"},domProps:{value:t.detail.isi},on:{input:function(e){e.target.composing||t.$set(t.detail,"isi",e.target.value)}}}),t._v(" "),t.validations.isi?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n                "+t._s(t.validations.isi[0])+"\n              ")])]):t._e()])]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"hargajual"}},[t._v("\n              Stok\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.detail.toko,expression:"detail.toko"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{type:"number"},domProps:{value:t.detail.toko},on:{input:function(e){e.target.composing||t.$set(t.detail,"toko",e.target.value)}}}),t._v(" "),t.validations.stok?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n                "+t._s(t.validations.stok[0])+"\n              ")])]):t._e()])])]),t._v(" "),e("hr",{staticClass:"mt-6 border-b-1 border-blueGray-300"}),t._v(" "),e("h6",{staticClass:"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"},[t._v("\n        Diskon Dan Point\n      ")]),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"diskon"}},[t._v("\n              Diskon\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.detail.diskon,expression:"detail.diskon"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{type:"number"},domProps:{value:t.detail.diskon},on:{input:function(e){e.target.composing||t.$set(t.detail,"diskon",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"tglbeli"}},[t._v("\n              Tgl beli\n            ")]),t._v(" "),e("datepicker",{style:{width:"100%",height:"10vh"},attrs:{config:t.datePickerConfig,placeholder:"Tanggal Beli",format:t.dateFormat},on:{input:t.handleDateChange},model:{value:t.formattedDate,callback:function(e){t.formattedDate=e},expression:"formattedDate"}})],1)])]),t._v(" "),e("hr",{staticClass:"mt-6 border-b-1 border-blueGray-300"}),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-12/12 px-4 py-6"},[e("button",{staticClass:"w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",attrs:{type:"submit"}},[t.loading?e("div",[e("svg",{staticClass:"inline w-4 h-4 mr-3 text-white animate-spin",attrs:{"aria-hidden":"true",role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}}),t._v(" "),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"}})]),t._v("\n              Loading...\n            ")]):e("span",[e("i",{staticClass:"fa-solid fa-plus"}),t._v(" Update Barang")])]),t._v(" "),t.loading?e("div",[e("molecules-row-loading",{attrs:{loading:t.loading,options:t.options}})],1):t._e()])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MoleculesSuccessAlert:l(614).default,MoleculesRowLoading:l(315).default})}}]);