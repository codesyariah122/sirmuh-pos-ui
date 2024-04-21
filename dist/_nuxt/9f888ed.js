(window.webpackJsonp=window.webpackJsonp||[]).push([[190,134],{638:function(t,e,l){"use strict";l.r(e);var r={props:{success:{type:Boolean,default:!1},messageAlert:{type:String,default:""}},methods:{updateSuccess:function(){this.$emit("close-alert")}}},n=l(8),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid grid-cols-1 max-w-full px-0 mb-4"},[e("div",{staticClass:"col-span-12"},[t.success?e("div",{staticClass:"flex items-center w-full max-w-xs p-2 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",attrs:{id:"toast-success",role:"alert"}},[e("div",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"},[e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Check icon")])]),t._v(" "),e("div",{staticClass:"ml-3 text-sm font-normal"},[t._v(t._s(t.messageAlert))]),t._v(" "),e("button",{staticClass:"ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",attrs:{type:"button","data-dismiss-target":"#toast-success","aria-label":"Close"},on:{click:t.updateSuccess}},[e("span",{staticClass:"sr-only"},[t._v("Close")]),t._v(" "),e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},652:function(t,e,l){"use strict";l.r(e);l(310),l(62),l(36);var r={props:{type:{type:String,default:null},detail:{type:[Object,Array]},slug:{type:String},current:{type:[Number,String],default:null},pageData:{type:String,default:null},parentRoute:{type:String,default:null},typeRoute:{type:String,default:null}},data:function(){return{image_url:"http://192.168.1.8:4041/storage",loading:null,success:null,messageAlert:null,options:"",api_url:"http://192.168.1.8:4041/api/v1",api_token:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l",input:{},validations:[]}},beforeMount:function(){this.authTokenStorage()},methods:{closeSuccessAlert:function(){this.success=!1,this.message=""},backTo:function(){this.current?this.$router.push({path:"/dashboard/".concat(this.parentRoute,"/").concat(this.pageData),query:{current:this.current}}):this.$router.go(-1)},updateSuppplier:function(){var t=this;this.loading=!0,this.options="data-supplier";var e={nama:this.input.nama?this.input.nama:this.detail.nama,email:this.input.email?this.input.email:this.detail.email,telp:this.input.telp?this.input.telp:this.detail.telp,alamat:this.input.alamat?this.input.alamat:this.detail.alamat,npwp:this.input.no_npwp?this.input.no_npwp:this.detail.no_npwp},l="/data-supplier/".concat(this.slug),r={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.token.token)}};this.$api.put(l,e,r).then((function(e){var data=e.data;data.success?(t.success=!0,t.messageAlert=data.message,t.validations=[],t.$swal({position:"top-end",icon:"success",title:null==data?void 0:data.message,showConfirmButton:!1,timer:1500}),setTimeout((function(){t.loading=!1,t.input={}}),500)):(t.$swal({icon:"error",title:"Oops...",text:data.message}),setTimeout((function(){t.loading=!1,t.input={}}),1e3))})).catch((function(e){t.validations=e.response.data,t.success=!1,setTimeout((function(){t.loading=!1}),1e3)}))}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}},n=l(8),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"},[t.success?e("div",{ref:"alertNotifs",staticClass:"flex justify-center w-full bg-transparent mt-4"},[e("molecules-success-alert",{attrs:{success:t.success,messageAlert:t.messageAlert},on:{"close-alert":t.closeSuccessAlert}})],1):t._e(),t._v(" "),t.success?e("div",{staticClass:"flex justify-center bg-transparent mt-2 mb-2"},[e("button",{staticClass:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",attrs:{type:"button"},on:{click:t.backTo}},[t._v("\n      Check Data Supplier\n    ")])]):t._e(),t._v(" "),e("div",{staticClass:"flex-auto px-4 lg:px-10 py-10 pt-0"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.updateSuppplier.apply(null,arguments)}}},[e("h6",{staticClass:"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"},[t._v("\n        Data Supplier\n      ")]),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"nama"}},[t._v("\n              Nama Supplier\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.detail.nama,expression:"detail.nama"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"nama",type:"text",placeholder:"Nama Barang"},domProps:{value:t.detail.nama},on:{input:function(e){e.target.composing||t.$set(t.detail,"nama",e.target.value)}}})]),t._v(" "),t.validations.nama?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n              "+t._s(t.validations.nama[0])+"\n            ")])]):t._e()]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"email"}},[t._v("\n              Email Supplier\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.detail.email,expression:"detail.email"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"email",type:"text",placeholder:"Email Pelanggan"},domProps:{value:t.detail.email},on:{input:function(e){e.target.composing||t.$set(t.detail,"email",e.target.value)}}})]),t._v(" "),t.validations.email?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n              "+t._s(t.validations.email[0])+"\n            ")])]):t._e()]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"telp"}},[t._v("\n              Telpon Supplier\n            ")]),t._v(" "),e("vue-tel-input",{staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",staticStyle:{height:"50px"},attrs:{name:"telp",id:"telp",placeholder:"62+xxxx xxxx xxx"},model:{value:t.detail.telp,callback:function(e){t.$set(t.detail,"telp",e)},expression:"detail.telp"}})],1),t._v(" "),t.validations.telp?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n              "+t._s(t.validations.telp[0])+"\n            ")])]):t._e()]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"supplier"}},[t._v("\n              NPWP Supplier\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.detail.no_npwp,expression:"detail.no_npwp"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"supplier",type:"text",placeholder:"Npwp Supplier"},domProps:{value:t.detail.no_npwp},on:{input:function(e){e.target.composing||t.$set(t.detail,"no_npwp",e.target.value)}}})]),t._v(" "),t.validations.no_npwp?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n              "+t._s(t.validations.no_npwp[0])+"\n            ")])]):t._e()])]),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-12/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"nama"}},[t._v("\n              Alamat Supplier\n            ")]),t._v(" "),e("wysiwyg",{staticClass:"w-full",model:{value:t.detail.alamat,callback:function(e){t.$set(t.detail,"alamat",e)},expression:"detail.alamat"}})],1),t._v(" "),t.validations.alamat?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n              "+t._s(t.validations.alamat[0])+"\n            ")])]):t._e()])]),t._v(" "),e("hr",{staticClass:"mt-6 border-b-1 border-blueGray-300"}),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-12/12 px-4 py-6"},[e("button",{staticClass:"w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",attrs:{type:"submit"}},[t.loading?e("div",[e("svg",{staticClass:"inline w-4 h-4 mr-3 text-white animate-spin",attrs:{"aria-hidden":"true",role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}}),t._v(" "),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"}})]),t._v("\n              Loading...\n            ")]):e("span",[e("i",{staticClass:"fa-solid fa-plus"}),t._v(" Update Supplier")])]),t._v(" "),t.loading?e("div",[e("molecules-row-loading",{attrs:{loading:t.loading,options:t.options}})],1):t._e()])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MoleculesSuccessAlert:l(638).default,MoleculesRowLoading:l(195).default})}}]);