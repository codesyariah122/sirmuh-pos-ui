(window.webpackJsonp=window.webpackJsonp||[]).push([[319,142,199],{671:function(t,e,o){"use strict";o.r(e);var r={props:{success:{type:Boolean,default:!1},messageAlert:{type:String,default:""}},methods:{updateSuccess:function(){this.$emit("close-alert")}}},n=o(8),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid grid-cols-1 max-w-full px-0 mb-4"},[e("div",{staticClass:"col-span-12"},[t.success?e("div",{staticClass:"flex items-center w-full max-w-xs p-2 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",attrs:{id:"toast-success",role:"alert"}},[e("div",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"},[e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Check icon")])]),t._v(" "),e("div",{staticClass:"ml-3 text-sm font-normal"},[t._v(t._s(t.messageAlert))]),t._v(" "),e("button",{staticClass:"ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",attrs:{type:"button","data-dismiss-target":"#toast-success","aria-label":"Close"},on:{click:t.updateSuccess}},[e("span",{staticClass:"sr-only"},[t._v("Close")]),t._v(" "),e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},831:function(t,e,o){"use strict";o.r(e);o(15),o(37);var r={data:function(){return{loading:null,success:null,message_success:"",options:"",api_token:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u",user:{},input:{},error:!1,hidePassword:!0,message_error:"",validations:[]}},methods:{changePassword:function(){var t=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Change Password!"}).then((function(e){if(e.isConfirmed)try{if(null!==t.token){t.error=!1,t.validations=[],t.loading=!0,t.options="change-password";var o={current_password:t.input.current_password,new_password:t.input.new_password,new_password_confirmation:t.input.new_password_confirmation};t.$api.defaults.headers.common.Authorization="Bearer ".concat(t.token.token),t.$api.defaults.headers.common["Dku-Api-Key"]=t.api_token,t.$api.put("/change-password",o,{headers:{Accept:"application/json"}}).then((function(e){var data=e.data;data.error&&(t.$toast.show(data.message,{type:"error",duration:1500,position:"top-right",icon:"triangle-exclamation"}),t.error=!0,t.message_error=data.message),data.success&&(t.$toast.show(data.message,{type:"success",duration:1500,position:"top-right",icon:"check-double"}),t.success=!0,t.message_success=data.message)})).finally((function(){setTimeout((function(){t.loading=!1,t.options="",t.input={}}),1500)})).catch((function(e){var o;t.validations=null==e||null===(o=e.response)||void 0===o?void 0:o.data}))}}catch(t){console.error(t)}}))},showingPassword:function(t){var e=document.querySelector(t);"password"===e.type?(e.type="text",this.hidePassword=!1):(e.type="password",this.hidePassword=!0)},closeSuccessAlert:function(){this.success=!1,this.message_success="",this.$router.go(-1)}}},n=o(8),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col max-w-full break-words w-screen mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"},[e("div",{staticClass:"rounded-t bg-white mb-0 px-6 py-6"},[e("div",{staticClass:"text-center flex justify-between"},[e("h6",{staticClass:"text-blueGray-700 text-xl font-bold"},[t._v("Change Password")]),t._v(" "),e("button",{staticClass:"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150",attrs:{type:"button"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("\n      Back\n    ")])]),t._v(" "),e("div",{staticClass:"flex justify-center mt-4 mb-4"},[e("div",[e("molecules-success-alert",{attrs:{success:t.success,messageAlert:t.message_success},on:{"close-alert":t.closeSuccessAlert}})],1)])]),t._v(" "),e("div",{staticClass:"flex-auto px-4 lg:px-10 py-10 pt-0"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.changePassword.apply(null,arguments)}}},[e("h6",{staticClass:"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"},[t._v("\n      User Password\n    ")]),t._v(" "),t.error?e("div",{staticClass:"flex justify-center mt-4 mb-4"},[e("div",[e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-triangle-exclamation text-md"}),t._v("  \n        "),e("div",[e("span",{staticClass:"font-medium"},[t._v("Ooops!")]),t._v(" "+t._s(t.message_error)+"\n        ")])])])]):t._e(),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-12/12 px-4"},[e("div",{staticClass:"relative w-full mb-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.current_password,expression:"input.current_password"}],class:"".concat(t.error?"pass1 h-12 w-full mt-6 rounded-lg outline-none p-2 border border-solid border-red-600 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-red-600":"pass1 h-12 w-full border mt-6 rounded-lg outline-none p-2"),attrs:{id:"current-password",type:"password",placeholder:"Current Password"},domProps:{value:t.input.current_password},on:{input:function(e){e.target.composing||t.$set(t.input,"current_password",e.target.value)}}}),t._v(" "),e("i",{class:"fa ".concat(t.hidePassword?"fa-eye-slash":"fa-eye"," eye_1 absolute top-10 right-3 cursor-pointer"),on:{click:function(e){return t.showingPassword("#current-password")}}})]),t._v(" "),t.validations.current_password?e("div",{staticClass:"flex py-6"},[e("div",{staticClass:"flex p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300",attrs:{role:"alert"}},[e("span",{staticClass:"font-medium"},[e("i",{staticClass:"fa-solid fa-circle-exclamation"}),t._v(" "+t._s(t.validations.current_password[0]))])])]):t._e()]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.new_password,expression:"input.new_password"}],class:"".concat(t.error?"pass1 h-12 w-full mt-6 rounded-lg outline-none p-2 border border-solid border-red-600 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-red-600":"pass1 h-12 w-full border mt-6 rounded-lg outline-none p-2"),attrs:{id:"new-password",type:"password",placeholder:"New Password"},domProps:{value:t.input.new_password},on:{input:function(e){e.target.composing||t.$set(t.input,"new_password",e.target.value)}}}),t._v(" "),e("i",{class:"fa ".concat(t.hidePassword?"fa-eye-slash":"fa-eye"," eye_1 absolute top-10 right-3 cursor-pointer"),on:{click:function(e){return t.showingPassword("#new-password")}}})]),t._v(" "),t.validations.new_password?e("div",{staticClass:"flex py-6"},[e("div",{staticClass:"flex p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300",attrs:{role:"alert"}},[e("span",{staticClass:"font-medium"},[e("i",{staticClass:"fa-solid fa-circle-exclamation"}),t._v(" "+t._s(t.validations.new_password[0]))])])]):t._e()]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative w-full mb-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.new_password_confirmation,expression:"input.new_password_confirmation"}],class:"".concat(t.error?"pass1 h-12 w-full mt-6 rounded-lg outline-none p-2 border border-solid border-red-600 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-red-600":"pass1 h-12 w-full border mt-6 rounded-lg outline-none p-2"),attrs:{id:"new-password-confirmation",type:"password",placeholder:"New Password Confirmation"},domProps:{value:t.input.new_password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.input,"new_password_confirmation",e.target.value)}}}),t._v(" "),e("i",{class:"fa ".concat(t.hidePassword?"fa-eye-slash":"fa-eye"," eye_1 absolute top-10 right-3 cursor-pointer"),on:{click:function(e){return t.showingPassword("#new-password-confirmation")}}})]),t._v(" "),t.validations.new_password_confirmation?e("div",{staticClass:"flex py-6"},[e("div",{staticClass:"flex p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300",attrs:{role:"alert"}},[e("span",{staticClass:"font-medium"},[e("i",{staticClass:"fa-solid fa-circle-exclamation"}),t._v(" "+t._s(t.validations.new_password_confirmation[0]))])])]):t._e()])]),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"flex-shrink-0 lg:w-12/12 w-full py-10"},[e("button",{staticClass:"w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",attrs:{type:"submit"}},[t.loading?e("div",[e("svg",{staticClass:"inline w-4 h-4 mr-3 text-white animate-spin",attrs:{"aria-hidden":"true",role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}}),t._v(" "),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"}})]),t._v("\n    Loading...\n  ")]):e("span",[e("i",{staticClass:"fa-solid fa-plus"}),t._v(" Change Password")])])])]),t._v(" "),t.loading?e("div",[e("molecules-row-loading",{attrs:{loading:t.loading,options:t.options}})],1):t._e()])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MoleculesSuccessAlert:o(671).default,MoleculesRowLoading:o(226).default})},930:function(t,e,o){"use strict";o.r(e);var r={name:"settings-change-password",layout:"admin"},n=o(8),component=Object(n.a)(r,(function(){var t=this._self._c;return t("div",{staticClass:"flex flex-wrap mt-4"},[t("div",{class:"".concat(this.$nuxt.showSidebar?"w-full mb-12  px-6":"max-w-full")},[t("settings-change-password-form")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SettingsChangePasswordForm:o(831).default})}}]);