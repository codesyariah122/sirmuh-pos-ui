(window.webpackJsonp=window.webpackJsonp||[]).push([[81,43,134,166,179],{637:function(e,t,l){"use strict";l.d(t,"b",(function(){return r.a})),l.d(t,"a",(function(){return o})),l.d(t,"d",(function(){return d})),l.d(t,"c",(function(){return c}));var r=l(639),n=l(18),o=(l(69),l(15),function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var l,r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l=t.api_url,r=t.token,e.next=5,fetch(l,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":t.api_key}});case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("Data not found!");case 8:return e.next=10,n.json();case 10:return o=e.sent,e.abrupt("return",o);case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()),d=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var l,r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l=t.api_url,r=t.token,e.next=5,fetch(l,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":t.api_key}});case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("Data not found!");case 8:return e.next=10,n.json();case 10:return o=e.sent,e.abrupt("return",o);case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var l,r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l=t.api_url,r=t.token,e.next=5,fetch(l,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":t.api_key}});case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("Data not found!");case 8:return e.next=10,n.json();case 10:return o=e.sent,e.abrupt("return",o);case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()},638:function(e,t,l){"use strict";l.r(t);var r={props:{success:{type:Boolean,default:!1},messageAlert:{type:String,default:""}},methods:{updateSuccess:function(){this.$emit("close-alert")}}},n=l(8),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"grid grid-cols-1 max-w-full px-0 mb-4"},[t("div",{staticClass:"col-span-12"},[e.success?t("div",{staticClass:"flex items-center w-full max-w-xs p-2 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",attrs:{id:"toast-success",role:"alert"}},[t("div",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"},[t("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),e._v(" "),t("span",{staticClass:"sr-only"},[e._v("Check icon")])]),e._v(" "),t("div",{staticClass:"ml-3 text-sm font-normal"},[e._v(e._s(e.messageAlert))]),e._v(" "),t("button",{staticClass:"ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",attrs:{type:"button","data-dismiss-target":"#toast-success","aria-label":"Close"},on:{click:e.updateSuccess}},[t("span",{staticClass:"sr-only"},[e._v("Close")]),e._v(" "),t("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]):e._e()])])}),[],!1,null,null,null);t.default=component.exports},639:function(e,t,l){"use strict";l.d(t,"a",(function(){return n}));var r=l(18),n=(l(69),l(15),function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){var l,r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l=t.api_url,r=t.token,e.next=5,fetch(l,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":t.api_key}});case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("Data not found!");case 8:return e.next=10,n.json();case 10:return o=e.sent,e.abrupt("return",o);case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}())},649:function(e,t,l){"use strict";l.r(t);l(62),l(310),l(36),l(15),l(637);var r=l(194),n=(l(311),{props:{type:{type:String,default:null},detail:{type:[Object,Array]},slug:{type:String},current:{type:[Number,String],default:null},pageData:{type:String,default:null},parentRoute:{type:String,default:null},typeRoute:{type:String,default:null}},components:{Datepicker:r.a},data:function(){return{image_url:"http://192.168.1.8:4041/storage",img_url:"http://192.168.1.8:4041",loading:null,success:null,messageAlert:null,showModal:!1,options:"",api_url:"http://192.168.1.8:4041/api/v1",api_token:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l",input:{},previewUrl:"",validations:[]}},beforeMount:function(){this.authTokenStorage()},methods:{toggleModal:function(){this.showModal=!this.showModal,this.previewUrl=""!==this.previewUrl?"":this.previewUrl},closeSuccessAlert:function(){this.success=!1,this.message=""},backTo:function(){this.current?this.$router.push({path:"/dashboard/".concat(this.parentRoute,"/").concat(this.pageData),query:{current:this.current}}):this.$router.go(-1)},updatePelanggan:function(){var e=this;this.loading=!0,this.options="data-pelanggan";var t={nama:this.input.nama?this.input.nama:this.detail.nama,email:this.input.email?this.input.email:this.detail.email,telp:this.input.telp?this.input.telp:this.detail.telp,alamat:this.input.alamat?this.input.alamat:this.detail.alamat,pekerjaan:this.input.pekerjaan?this.input.pekerjaan:this.detail.pekerjaan},l="/data-pelanggan/".concat(this.slug),r={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.token.token)}};this.$api.put(l,t,r).then((function(t){var data=t.data;data.success?(e.success=!0,e.messageAlert=data.message,e.validations=[],e.$swal({position:"top-end",icon:"success",title:null==data?void 0:data.message,showConfirmButton:!1,timer:1500}),setTimeout((function(){e.loading=!1,e.input={}}),500)):(e.$swal({icon:"error",title:"Oops...",text:data.message}),setTimeout((function(){e.loading=!1,e.input={}}),1e3))})).catch((function(t){e.validations=t.response.data,e.success=!1,setTimeout((function(){e.loading=!1}),1e3)}))},handleDragOver:function(e){e.preventDefault(),this.isDragging=!0},handleDragLeave:function(){this.isDragging=!1},handleDrop:function(e){e.preventDefault(),this.isDragging=!1;var t=e.dataTransfer.files;this.uploadFiles(t)},handleFileInput:function(e){var t=e.target.files;this.uploadFiles(t)},uploadFiles:function(e){var t=this;this.uploadProcess(e[0]);var l=this.$refs.fileInput;if(l.files&&l.files.length>0){console.log("kesini");var r=l.files[0],n=new FileReader;n.onload=function(e){t.previewUrl=e.target.result},n.readAsDataURL(r)}else{event.preventDefault();var o=e[0],d=new FileReader;d.onload=function(e){t.previewUrl=e.target.result},d.readAsDataURL(o)}},uploadProcess:function(e){var t=this;try{if(null!==this.token){this.loading=!0,this.options="change-photo";var l=new FormData;l.append("photo",e);this.$api.defaults.headers.common.Authorization="Bearer ".concat(this.token.token),this.$api.defaults.headers.common["Dku-Api-Key"]=this.api_token,this.$api.post("/update-profile-photo",l,{headers:{Accept:"application/json"}}).then((function(e){var data=e.data;data.success&&(t.$toast.show(data.message,{type:"success",duration:1500,position:"top-right",icon:"check-double"}),t.$emit("refetch-data"),t.success=!0,t.message_success=data.message,t.showModal=!1)})).finally((function(){setTimeout((function(){t.loading=!1,t.options=""}),1500)})).catch((function(e){console.log(e)}))}}catch(e){console.error(e)}},removePreview:function(){this.previewUrl=""}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}}),o=l(8),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"},[e.success?t("div",{ref:"alertNotifs",staticClass:"flex justify-center w-full bg-transparent mt-4"},[t("molecules-success-alert",{attrs:{success:e.success,messageAlert:e.messageAlert},on:{"close-alert":e.closeSuccessAlert}})],1):e._e(),e._v(" "),e.success?t("div",{staticClass:"flex justify-center bg-transparent mt-2 mb-2"},[t("button",{staticClass:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",attrs:{type:"button"},on:{click:e.backTo}},[e._v("\n      Check Data Perusahaan\n    ")])]):e._e(),e._v(" "),t("div",{staticClass:"flex-auto px-4 lg:px-10 py-10 pt-0"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.updatePelanggan.apply(null,arguments)}}},[t("h6",{staticClass:"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"},[e._v("\n        Data Perusahaan\n      ")]),e._v(" "),t("div",{staticClass:"flex flex-wrap"},[t("div",{staticClass:"w-full lg:w-6/12 px-4"},[t("div",{staticClass:"relative w-full mb-12"},[t("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"nama"}},[e._v("\n              Nama Perusahaan\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.detail.nama,expression:"detail.nama"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"nama",type:"text",placeholder:"Nama Barang"},domProps:{value:e.detail.nama},on:{input:function(t){t.target.composing||e.$set(e.detail,"nama",t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"w-full lg:w-6/12 px-12"},[t("div",{staticClass:"relative w-full mb-2"},[t("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"email"}},[e._v("\n              Logo\n            ")]),e._v(" "),t("span",{staticClass:"w-12 h-12 text-sm text-white bg-blueGray-200 border-0 border-none inline-flex items-center justify-center rounded-full"},[null===e.detail.logo?t("div",[t("div",{attrs:{role:"status"}},[t("svg",{staticClass:"w-4 h-4 me-0 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",attrs:{"aria-hidden":"true",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),t("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})]),e._v(" "),t("span",{staticClass:"sr-only"},[e._v("Loading...")])]),e._v(" "),t("span",{staticClass:"text-3xl"},[e._v("😖")])]):t("img",{staticClass:"shadow-xl rounded-full h-16 align-middle border-none absolute max-w-120-px",attrs:{alt:e.detail.nama,src:"".concat(e.image_url,"/tokos/").concat(e.detail.logo)}})])]),e._v(" "),t("div",{staticClass:"px-2"},[t("button",{staticClass:"relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800",attrs:{type:"button"},on:{click:function(t){return e.toggleModal()}}},[t("span",{staticClass:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"},[e._v("\n                Change Logo\n              ")])]),e._v(" "),e.showModal?t("div",{staticClass:"overflow-x-hidden overflow-y-auto fixed inset-0 bg-gray-300 dark:bg-gray-300 bg-opacity-50 z-50 outline-none focus:outline-none justify-center items-center flex"},[t("div",{staticClass:"relative w-auto my-6 mx-auto max-w-6xl inset-0"},[t("form",[t("div",{staticClass:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"},[t("div",{staticClass:"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"},[t("h3",{staticClass:"text-3xl font-semibold"},[e._v("Change Logo")]),e._v(" "),t("button",{staticClass:"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",on:{click:function(t){return e.toggleModal()}}},[t("span",{staticClass:"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"},[e._v("\n                          ×\n                        ")])])]),e._v(" "),t("div",{staticClass:"relative p-6 flex-auto"},[t("div",{staticClass:"w-full lg:w-12/12 px-4 py-6"},[e.previewUrl&&null!==e.input.photo?t("div",{staticClass:"flex justify-between w-full"},[t("div",{staticClass:"grow"},[t("img",{staticClass:"h-auto w-full",attrs:{src:e.previewUrl}})]),e._v(" "),t("div",{staticClass:"relative h-32 w-32"},[t("button",{staticClass:"bg-transparent rounded-lg absolute top-[-1rem] right-[-2rem] h-16 w-16",on:{click:e.removePreview}},[t("i",{staticClass:"fa-solid fa-xmark text-2xl text-gray-700 font-bold"})])])]):t("div",{staticClass:"flex items-center justify-center w-full"},[t("label",{staticClass:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",attrs:{for:"dropzone-file"}},[t("div",{staticClass:"flex flex-col items-center justify-center pt-5 pb-6",on:{dragover:e.handleDragOver,dragleave:e.handleDragLeave,drop:e.handleDrop}},[t("h2",{staticClass:"mb-4 text-sm text-gray-500 dark:text-gray-400"},[e._v("\n                                Upload Foto Here !\n                              ")]),e._v(" "),t("i",{staticClass:"fa-solid fa-cloud-arrow-up text-5xl text-gray-500"}),e._v(" "),e._m(0)]),e._v(" "),t("input",{ref:"fileInput",staticClass:"hidden",attrs:{id:"dropzone-file",type:"file"},on:{change:e.handleFileInput}})])])])]),e._v(" "),t("div",{staticClass:"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"},[t("button",{staticClass:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",attrs:{type:"button"},on:{click:function(t){return e.toggleModal()}}},[e._v("\n                        Close\n                      ")])])])])])]):e._e()])]),e._v(" "),t("div",{staticClass:"w-full lg:w-6/12 px-4"},[t("div",{staticClass:"relative w-full mb-3"},[t("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"telp"}},[e._v("\n              Telpon Perusahaan\n            ")]),e._v(" "),t("vue-tel-input",{staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",staticStyle:{height:"50px"},attrs:{name:"telp",id:"telp",placeholder:"62+xxxx xxxx xxx"},model:{value:e.detail.telp,callback:function(t){e.$set(e.detail,"telp",t)},expression:"detail.telp"}})],1)]),e._v(" "),t("div",{staticClass:"w-full lg:w-6/12 px-4"},[t("div",{staticClass:"relative w-full mb-3"},[t("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"pekerjaan"}},[e._v("\n              Kode Lokasi\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.detail.pekerjaan,expression:"detail.pekerjaan"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"pekerjaan",type:"text",placeholder:"Pekerjaan Pelanggan"},domProps:{value:e.detail.pekerjaan},on:{input:function(t){t.target.composing||e.$set(e.detail,"pekerjaan",t.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"flex flex-wrap"},[t("div",{staticClass:"w-full lg:w-12/12 px-4"},[t("div",{staticClass:"relative w-full mb-3"},[t("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"nama"}},[e._v("\n              Alamat Pelanggan\n            ")]),e._v(" "),t("wysiwyg",{staticClass:"w-full",model:{value:e.detail.alamat,callback:function(t){e.$set(e.detail,"alamat",t)},expression:"detail.alamat"}})],1)])]),e._v(" "),t("div",{staticClass:"flex flex-wrap"},[t("div",{staticClass:"w-full lg:w-6/12 px-4"},[t("div",{staticClass:"relative w-full mb-3"},[t("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"pekerjaan"}},[e._v("\n              Kota\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.detail.kota,expression:"detail.kota"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"pekerjaan",type:"text",placeholder:"Pekerjaan Pelanggan"},domProps:{value:e.detail.kota},on:{input:function(t){t.target.composing||e.$set(e.detail,"kota",t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"w-full lg:w-6/12 px-4"},[t("div",{staticClass:"relative w-full mb-3"},[t("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"pekerjaan"}},[e._v("\n              Propinsi\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.detail.propinsi,expression:"detail.propinsi"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"pekerjaan",type:"text",placeholder:"Pekerjaan Pelanggan"},domProps:{value:e.detail.propinsi},on:{input:function(t){t.target.composing||e.$set(e.detail,"propinsi",t.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"flex flex-wrap"},[t("div",{staticClass:"w-full lg:w-6/12 px-4"},[t("div",{staticClass:"relative w-full mb-3"},[t("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"pekerjaan"}},[e._v("\n              Negara\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.detail.negara,expression:"detail.negara"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"pekerjaan",type:"text",placeholder:"Pekerjaan Pelanggan"},domProps:{value:e.detail.negara},on:{input:function(t){t.target.composing||e.$set(e.detail,"negara",t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"w-full lg:w-6/12 px-4"},[t("div",{staticClass:"relative w-full mb-3"},[t("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"pekerjaan"}},[e._v("\n              Slogan\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.detail.header,expression:"detail.header"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"pekerjaan",type:"text",placeholder:"Pekerjaan Pelanggan"},domProps:{value:e.detail.header},on:{input:function(t){t.target.composing||e.$set(e.detail,"header",t.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"flex flex-wrap"},[e._m(1),e._v(" "),t("div",{staticClass:"w-full lg:w-6/12 px-4"},[t("div",{staticClass:"relative w-full mb-3"},[t("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"pekerjaan"}},[e._v("\n              Pembelian\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.detail.kd_pembelian,expression:"detail.kd_pembelian"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"pekerjaan",type:"text",placeholder:"Pekerjaan Pelanggan"},domProps:{value:e.detail.kd_pembelian},on:{input:function(t){t.target.composing||e.$set(e.detail,"kd_pembelian",t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"w-full lg:w-6/12 px-4"},[t("div",{staticClass:"relative w-full mb-3"},[t("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"pekerjaan"}},[e._v("\n              Pengeluaran Biaya\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.detail.kd_pengeluaran,expression:"detail.kd_pengeluaran"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"pekerjaan",type:"text",placeholder:"Pekerjaan Pelanggan"},domProps:{value:e.detail.kd_pengeluaran},on:{input:function(t){t.target.composing||e.$set(e.detail,"kd_pengeluaran",t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"w-full lg:w-6/12 px-4"},[t("div",{staticClass:"relative w-full mb-3"},[t("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"pekerjaan"}},[e._v("\n              Return Pembelian\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.detail.kd_return_pembelian,expression:"detail.kd_return_pembelian"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"pekerjaan",type:"text",placeholder:"Pekerjaan Pelanggan"},domProps:{value:e.detail.kd_return_pembelian},on:{input:function(t){t.target.composing||e.$set(e.detail,"kd_return_pembelian",t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"w-full lg:w-6/12 px-4"},[t("div",{staticClass:"relative w-full mb-3"},[t("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"pekerjaan"}},[e._v("\n              Bayar Piutang\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.detail.kd_bayar_piutang,expression:"detail.kd_bayar_piutang"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"pekerjaan",type:"text",placeholder:"Pekerjaan Pelanggan"},domProps:{value:e.detail.kd_bayar_piutang},on:{input:function(t){t.target.composing||e.$set(e.detail,"kd_bayar_piutang",t.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"flex flex-wrap"},[t("div",{staticClass:"w-full lg:w-6/12 px-4"},[t("div",{staticClass:"relative w-full mb-3"},[t("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"pekerjaan"}},[e._v("\n              Terima Barang Return\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.detail.kd_terima_return,expression:"detail.kd_terima_return"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"pekerjaan",type:"text",placeholder:"Pekerjaan Pelanggan"},domProps:{value:e.detail.kd_terima_return},on:{input:function(t){t.target.composing||e.$set(e.detail,"kd_terima_return",t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"w-full lg:w-6/12 px-4"},[t("div",{staticClass:"relative w-full mb-3"},[t("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"pekerjaan"}},[e._v("\n              Mutasi Kas\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.detail.kd_mutasi_kas,expression:"detail.kd_mutasi_kas"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"pekerjaan",type:"text",placeholder:"Pekerjaan Pelanggan"},domProps:{value:e.detail.kd_mutasi_kas},on:{input:function(t){t.target.composing||e.$set(e.detail,"kd_mutasi_kas",t.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"flex flex-wrap"},[t("div",{staticClass:"w-full lg:w-6/12 px-4"},[t("div",{staticClass:"relative w-full mb-3"},[t("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"pekerjaan"}},[e._v("\n              Penjualan Toko\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.detail.kd_penjualan_toko,expression:"detail.kd_penjualan_toko"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"pekerjaan",type:"text",placeholder:"Pekerjaan Pelanggan"},domProps:{value:e.detail.kd_penjualan_toko},on:{input:function(t){t.target.composing||e.$set(e.detail,"kd_penjualan_toko",t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"w-full lg:w-6/12 px-4"},[t("div",{staticClass:"relative w-full mb-3"},[t("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"pekerjaan"}},[e._v("\n              Penyesuaian Stok\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.detail.kd_penyesuaian_stok,expression:"detail.kd_penyesuaian_stok"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"pekerjaan",type:"text",placeholder:"Pekerjaan Pelanggan"},domProps:{value:e.detail.kd_penyesuaian_stok},on:{input:function(t){t.target.composing||e.$set(e.detail,"kd_penyesuaian_stok",t.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"flex flex-wrap"},[t("div",{staticClass:"w-full lg:w-6/12 px-4"},[t("div",{staticClass:"relative w-full mb-3"},[t("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"pekerjaan"}},[e._v("\n              Return Penjualan\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.detail.kd_return_penjualan,expression:"detail.kd_return_penjualan"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"pekerjaan",type:"text",placeholder:"Pekerjaan Pelanggan"},domProps:{value:e.detail.kd_return_penjualan},on:{input:function(t){t.target.composing||e.$set(e.detail,"kd_return_penjualan",t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"w-full lg:w-6/12 px-4"},[t("div",{staticClass:"relative w-full mb-3"},[t("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"pekerjaan"}},[e._v("\n              Penukaran Point\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.detail.kd_tukar_point,expression:"detail.kd_tukar_point"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"pekerjaan",type:"text",placeholder:"Pekerjaan Pelanggan"},domProps:{value:e.detail.kd_tukar_point},on:{input:function(t){t.target.composing||e.$set(e.detail,"kd_tukar_point",t.target.value)}}})])])]),e._v(" "),t("hr",{staticClass:"mt-6 border-b-1 border-blueGray-300"}),e._v(" "),t("div",{staticClass:"flex flex-wrap"},[t("div",{staticClass:"w-full lg:w-12/12 px-4 py-6"},[t("button",{staticClass:"w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",attrs:{type:"submit"}},[e.loading?t("div",[t("svg",{staticClass:"inline w-4 h-4 mr-3 text-white animate-spin",attrs:{"aria-hidden":"true",role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}}),e._v(" "),t("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"}})]),e._v("\n              Loading...\n            ")]):t("span",[t("i",{staticClass:"fa-solid fa-plus"}),e._v(" Update Data")])]),e._v(" "),e.loading?t("div",[t("molecules-row-loading",{attrs:{loading:e.loading,options:e.options}})],1):e._e()])])])])])}),[function(){var e=this,t=e._self._c;return t("p",{staticClass:"mb-2 text-sm text-gray-500 dark:text-gray-400"},[t("span",{staticClass:"font-semibold"},[e._v("Click to upload")]),e._v("\n                                or drag and drop\n                              ")])},function(){var e=this._self._c;return e("div",{staticClass:"w-full lg:w-12/12 px-4"},[e("h6",{staticClass:"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"},[this._v("\n            Referensi\n          ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{MoleculesSuccessAlert:l(638).default,MoleculesRowLoading:l(195).default})}}]);