(window.webpackJsonp=window.webpackJsonp||[]).push([[193,136],{638:function(t,e,l){"use strict";l.r(e);var r={props:{success:{type:Boolean,default:!1},messageAlert:{type:String,default:""}},methods:{updateSuccess:function(){this.$emit("close-alert")}}},n=l(8),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid grid-cols-1 max-w-full px-0 mb-4"},[e("div",{staticClass:"col-span-12"},[t.success?e("div",{staticClass:"flex items-center w-full max-w-xs p-2 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",attrs:{id:"toast-success",role:"alert"}},[e("div",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"},[e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Check icon")])]),t._v(" "),e("div",{staticClass:"ml-3 text-sm font-normal"},[t._v(t._s(t.messageAlert))]),t._v(" "),e("button",{staticClass:"ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",attrs:{type:"button","data-dismiss-target":"#toast-success","aria-label":"Close"},on:{click:t.updateSuccess}},[e("span",{staticClass:"sr-only"},[t._v("Close")]),t._v(" "),e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},810:function(t,e,l){"use strict";l.r(e);l(25),l(15),l(36);var r={props:{user:{type:Object,default:function(){return{}},karyawans:{type:Array,default:[]}}},data:function(){return{id:this.$route.params.id,loadingUpdate:null,loading:null,success:null,message_success:"",options:"",image:"",img_url:"https://sirmuh.api.dksindo.com",api_token:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u",input:{},validations:[]}},beforeMount:function(){this.authTokenStorage()},methods:{updateProfile:function(){var t=this;this.loadingUpdate=!0,this.options="profile-settings";var e={name:this.input.name?this.input.name:this.user.name,email:this.input.email?this.input.email:this.user.email,phone:this.input.phone?this.input.phone:this.user.phone,alamat:this.input.alamat?this.input.alamat:this.user.karyawans[0].alamat},l="/update-user-data/".concat(this.id),r={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.token.token)}};this.$api.put(l,e,r).then((function(e){var data=e.data;data.success?(t.success=!0,t.message_success=data.message,t.validations=[],t.$swal({position:"top-end",icon:"success",title:null==data?void 0:data.message,showConfirmButton:!1,timer:1500}),t.$emit("refetch-data",!1)):(t.$swal({icon:"error",title:"Oops...",text:data.message}),setTimeout((function(){t.loading=!1,t.input={}}),1e3))})).finally((function(){setTimeout((function(){t.loadingUpdate=!1,t.input={}}),500)})).catch((function(e){t.validations=e.response.data,t.success=!1,setTimeout((function(){t.loadingUpdate=!1}),1e3)}))},closeSuccessAlert:function(){this.success=!1,this.message_success=""}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}},n=l(8),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"},[e("div",{staticClass:"rounded-t bg-white mb-0 px-6 py-6"},[e("div",{staticClass:"text-center flex justify-between"},[e("h6",{staticClass:"text-blueGray-700 text-xl font-bold"},[t._v("My account")]),t._v(" "),e("button",{staticClass:"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150",attrs:{type:"button"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("\n      Back\n    ")])]),t._v(" "),e("div",{staticClass:"flex justify-center mt-4 mb-4"},[e("div",[e("molecules-success-alert",{attrs:{success:t.success,messageAlert:t.message_success},on:{"close-alert":t.closeSuccessAlert}})],1)])]),t._v(" "),e("div",{staticClass:"flex-auto px-4 lg:px-10 py-10 pt-0"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.updateProfile.apply(null,arguments)}}},[e("h6",{staticClass:"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"},[t._v("\n      User Information\n    ")]),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"name"}},[t._v("\n          Fullname\n        ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{type:"text",id:"name"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"email"}},[t._v("\n        Email address\n      ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{type:"text",id:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"phone"}},[t._v("\n      Phone\n    ")]),t._v(" "),t.user.phone?e("vue-tel-input",{staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",staticStyle:{height:"50px"},attrs:{name:"phone",id:"phone",placeholder:"62+xxxx xxxx xxx"},model:{value:t.user.phone,callback:function(e){t.$set(t.user,"phone",e)},expression:"user.phone"}}):e("vue-tel-input",{staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",staticStyle:{height:"50px"},attrs:{name:"phone",id:"phone",placeholder:"62+xxxx xxxx xxx"},model:{value:t.input.phone,callback:function(e){t.$set(t.input,"phone",e)},expression:"input.phone"}})],1)]),t._v(" "),e("hr",{staticClass:"mt-6 border-b-1 border-blueGray-300"}),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4 py-8"},[e("div",{staticClass:"relative w-full mb-3"},[e("nuxt-link",{staticClass:"relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800",attrs:{to:"/dashboard/master/password"}},[e("span",{staticClass:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"},[e("i",{staticClass:"fa-solid fa-user-shield"}),t._v(" Ganti Password !\n  ")])])],1)])]),t._v(" "),e("hr",{staticClass:"mt-6 border-b-1 border-blueGray-300"}),t._v(" "),e("h6",{staticClass:"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"},[t._v("\n  Contact Information\n")]),t._v(" "),t.$_.isArray(t.user.karyawans)?e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-12/12 px-4"},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"address"}},[t._v("\n      Address\n    ")]),t._v(" "),e("wysiwyg",{staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{id:"about"},model:{value:t.user.karyawans[0].alamat,callback:function(e){t.$set(t.user.karyawans[0],"alamat",e)},expression:"user.karyawans[0].alamat"}})],1)])]):t._e(),t._v(" "),e("hr",{staticClass:"mt-6 border-b-1 border-blueGray-300"}),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"flex-shrink-0 lg:w-12/12 w-full py-10"},[e("button",{staticClass:"w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",attrs:{type:"submit"}},[t.loadingUpdate?e("div",[e("svg",{staticClass:"inline w-4 h-4 mr-3 text-white animate-spin",attrs:{"aria-hidden":"true",role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}}),t._v(" "),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"}})]),t._v("\n    Loading...\n  ")]):e("span",[e("i",{staticClass:"fa-solid fa-plus"}),t._v(" Update Data")])])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MoleculesSuccessAlert:l(638).default})}}]);