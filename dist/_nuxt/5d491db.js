(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{669:function(t,e,r){"use strict";r.r(e);r(15),r(36);var l=r(194),o=(r(311),{props:{detail:{type:Object,default:function(){return{}}}},components:{Datepicker:l.a},data:function(){return{loadingReturn:!1,id:this.$route.params.id,kode:this.$route.query.faktur,initialdetailQty:null,editingdetailQtyId:null,input:{qty:null,qtyReturn:null,harga_beli:null,subtotal:null,alasan:null},success:null,messageAlert:"",datePickerConfig:{range:!1},validations:[],dateFormat:"YYYY-MM-DD",api_url:"http://192.168.1.8:4041/api/v1",api_token:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}},beforeMount:function(){this.authTokenStorage()},mounted:function(){"True"===this.detail.kembali&&this.$router.go(-1)},methods:{handleTanggalPenjualan:function(){},closeSuccessAlert:function(){this.success=!1,this.messageAlert=""},handleInputAlasan:function(t,e){this.editingdetailQtyId=e,this.input.alasan=t.target.value},setInitialQty:function(t){this.initialdetailQty=t.qty},changeGantidetailQty:function(t,e,r){var l=parseFloat(this.initialdetailQty)-parseFloat(t.target.value);this.editingdetailQtyId=r.id,r.subtotal=parseFloat(r.harga)*l,r.harga_beli=parseFloat(r.harga),this.input.qty=l,this.input.qtyReturn=parseFloat(t.target.value),this.input.harga_beli=r.harga,this.input.subtotal=r.subtotal},returnPembelian:function(){var t=this;this.loadingReturn=!0;var e={pembelian_id:this.detail.id_pembelian,kas_id:this.detail.kas_id,kode_barang:this.detail.kode_barang,item_qty:this.detail.qty,item_hargabeli:this.detail.harga,item_subtotal:this.detail.jumlah,alasan:null!==this.input.alasan?this.input.alasan:this.detail.alasan},r="/data-return-pembelian/".concat(e.pembelian_id),l={headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(this.token.token)}};console.log(e),this.$api.put(r,e,l).then((function(e){var data=e.data;data.error&&(t.$swal({icon:"error",title:"Oops...",text:data.message}),t.loadingReturn=!1),data.success&&(localStorage.setItem("cetak_code",JSON.stringify(null==data?void 0:data.data)),t.$swal({position:"top-end",icon:"success",title:null==data?void 0:data.message,showConfirmButton:!1,timer:1500}),t.success=!0,t.messageAlert=null==data?void 0:data.message,t.$emit("rebuild-data",!1),setTimeout((function(){t.loadingReturn=!1;t.$router.push({path:"/dashboard/transaksi/return-pembelian/cetak",query:{kode:data.data}})}),1e3))})).finally((function(){t.loadingReturn=!1})).catch((function(e){t.loadingReturn=!1,t.validations=e.response.data}))}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}}),n=r(8),component=Object(n.a)(o,(function(){var t,e,r=this,l=r._self._c;return l("div",{staticClass:"flex justify-start details-center overflow-x-auto"},[l("div",[l("div",{staticClass:"relative w-screen overflow-x-auto shadow-sm sm:rounded-lg"},[l("form",{staticClass:"max-w-lg",on:{submit:function(t){return t.preventDefault(),r.returnPembelian.apply(null,arguments)}}},[l("div",{staticClass:"mb-0"},[l("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"base-input"}},[r._v("Tanggal Transaksi")]),r._v(" "),l("datepicker",{style:{width:"100%",height:"10vh"},attrs:{config:r.datePickerConfig,placeholder:r.detail.tanggal,format:r.dateFormat},on:{input:function(t){return r.handleTanggalPenjualan(t)}},model:{value:r.detail.tanggal,callback:function(t){r.$set(r.detail,"tanggal",t)},expression:"detail.tanggal"}})],1),r._v(" "),l("div",{staticClass:"mb-2"},[l("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"base-input"}},[r._v("No Faktur")]),r._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:r.detail.no_faktur,expression:"detail.no_faktur"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{disabled:"",type:"text",id:"base-input"},domProps:{value:r.detail.no_faktur},on:{input:function(t){t.target.composing||r.$set(r.detail,"no_faktur",t.target.value)}}})]),r._v(" "),l("div",{staticClass:"mb-2"},[l("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"base-input"}},[r._v("Barang")]),r._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:r.detail.nama_barang,expression:"detail.nama_barang"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{disabled:"",type:"text",id:"base-input"},domProps:{value:r.detail.nama_barang},on:{input:function(t){t.target.composing||r.$set(r.detail,"nama_barang",t.target.value)}}})]),r._v(" "),l("div",{staticClass:"mb-2"},[l("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"base-input"}},[r._v("Supplier")]),r._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:r.detail.supplier,expression:"detail.supplier"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{disabled:"",type:"text",id:"base-input"},domProps:{value:r.detail.supplier},on:{input:function(t){t.target.composing||r.$set(r.detail,"supplier",t.target.value)}}})]),r._v(" "),l("div",{staticClass:"mb-2"},[l("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"base-input"}},[r._v("Kas")]),r._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:r.detail.nama_kas,expression:"detail.nama_kas"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{disabled:"",type:"text",id:"base-input"},domProps:{value:r.detail.nama_kas},on:{input:function(t){t.target.composing||r.$set(r.detail,"nama_kas",t.target.value)}}})]),r._v(" "),l("div",{staticClass:"mb-2"},[l("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"base-input"}},[r._v("Quantity")]),r._v(" "),l("div",{staticClass:"flex justify-start space-x-4"},[l("div",{staticClass:"shrink-0 w-80"},[l("input",{directives:[{name:"model",rawName:"v-model",value:r.detail.qty,expression:"detail.qty"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{max:r.detail.qty,type:"number",id:"base-input"},domProps:{value:r.detail.qty},on:{input:[function(t){t.target.composing||r.$set(r.detail,"qty",t.target.value)},function(t){return r.changeGantidetailQty(t,r.detail.id,r.detail)}],focus:function(t){return r.setInitialQty(r.detail)}}})]),r._v(" "),l("div",[r._v("\n\t\t\t\t\t\t\t\t"+r._s(r.detail.satuan)+"\n\t\t\t\t\t\t\t")])])]),r._v(" "),l("div",{staticClass:"mb-2"},[l("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"base-input"}},[r._v("Harga Satuan")]),r._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:r.detail.harga,expression:"detail.harga"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{disabled:"",type:"number",id:"base-input"},domProps:{value:r.detail.harga},on:{input:function(t){t.target.composing||r.$set(r.detail,"harga",t.target.value)}}})]),r._v(" "),l("div",{staticClass:"mb-2"},[l("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"base-input"}},[r._v("Subtotal")]),r._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:r.detail.jumlah,expression:"detail.jumlah"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{disabled:"",type:"number",id:"base-input"},domProps:{value:r.detail.jumlah},on:{input:function(t){t.target.composing||r.$set(r.detail,"jumlah",t.target.value)}}})]),r._v(" "),l("div",{staticClass:"mb-2"},[l("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"base-input"}},[r._v("Alasan")]),r._v(" "),l("textarea",{directives:[{name:"model",rawName:"v-model",value:r.detail.alasan,expression:"detail.alasan"}],staticClass:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{id:"message",rows:"4",placeholder:"Leave a comment..."},domProps:{value:r.detail.alasan},on:{input:[function(t){t.target.composing||r.$set(r.detail,"alasan",t.target.value)},function(t){return r.handleInputAlasan(t,r.detail.id)}]}}),r._v(" "),null!==(t=r.validations)&&void 0!==t&&t.alasan?l("div",{staticClass:"mt-6 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[l("span",{staticClass:"font-medium"},[r._v(r._s(null===(e=r.validations)||void 0===e?void 0:e.alasan[0]))])]):r._e()]),r._v(" "),l("div",{staticClass:"mb-2"},[l("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"base-input"}},[r._v("Operator")]),r._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:r.detail.operator,expression:"detail.operator"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{disabled:"",type:"text",id:"base-input"},domProps:{value:r.detail.operator},on:{input:function(t){t.target.composing||r.$set(r.detail,"operator",t.target.value)}}})]),r._v(" "),l("div",{staticClass:"mb-6 mt-6"},[l("button",{staticClass:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",attrs:{type:"submit"}},[r.loadingReturn?l("div",[l("svg",{staticClass:"inline w-4 h-4 mr-3 text-white animate-spin",attrs:{"aria-hidden":"true",role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}}),r._v(" "),l("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"}})]),r._v("\n\t\t\t\t\t\tLoading...\n\t\t\t\t\t")]):l("span",[l("i",{staticClass:"fa-solid fa-arrows-rotate"}),r._v(" Kembalikan Barang\n\t\t\t\t\t")])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);