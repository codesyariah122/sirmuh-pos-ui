(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{688:function(t,e,o){t.exports=o.p+"img/new-logo.d6e35f2.png"},864:function(t,e,o){"use strict";o.r(e);o(15),o(25),o(36),o(20),o(29),o(54);var r={name:"IndexPage",layout:"auth",data:function(){return{loadingData:null,loadingLogin:null,loadingCheck:null,api_url:"http://192.168.1.8:4041/api/v1",form:{},validation:[],errorLogin:"",hidePassword:!0,error:!1,showLogin:!1,errorUsers:null}},beforeMount:function(){this.authTokenStorage()},mounted:function(){this.checkIsLogin()},methods:{remember_me:function(){this.form.checked=!0},showingPassword:function(){var t=document.querySelector("#password");"password"===t.type?(t.type="text",this.hidePassword=!1):(t.type="password",this.hidePassword=!0)},checkIsLogin:function(){var t=this;if(null!==this.token){this.loadingCheck=!0;var e={headers:{Accept:"application/json",Authorization:"Bearer ".concat(this.token.token)}};this.$api.get("/user-data",e).then((function(e){var data=e.data;data.data.logins[0].user_token_login===t.token.token&&(t.$swal("You are login","You are login as a ".concat(t.getRoles(data.data.roles[0].name)),"warning"),setTimeout((function(){t.$router.replace({path:"/dashboard/".concat(t.getRoles(data.data.roles[0].name))})}),1500))})).finally((function(){return t.loadingCheck=!1})).catch((function(t){return console.log(t)}))}},login:function(){var t=this;this.errorLogin=!1,this.loadingLogin=!0,this.validation=[];this.$api.post("/login",{email:this.form.email,password:this.form.password,remember_me:!!this.form.checked&&this.form.checked}).then((function(data){var e;if(null!=data&&null!==(e=data.data)&&void 0!==e&&e.success){var o,r,n=t.getRoles(null==data||null===(o=data.data)||void 0===o||null===(o=o.data)||void 0===o||null===(o=o.roles[0])||void 0===o?void 0:o.name),l=null==data||null===(r=data.data)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.logins[0].user_token_login,d=[{expires_at:data.data.expires_at,remember_token:data.data.remember_token}];t.saveMenus(null==data?void 0:data.menus),t.saveExpires(d[0]),t.saveLogin(l),t.$swal({position:"top-end",icon:"success",title:"Selamat datang , ".concat(data.data.data.name),showConfirmButton:!1,timer:1500}),setTimeout((function(){t.$router.replace({path:"/dashboard/".concat(n)})}),1e3)}else t.errorLogin=data.data.message,t.errorUsers=!0,t.error=!0,t.form={},t.$swal({icon:"warning",title:"Oops...",text:data.data.message}),setTimeout((function(){var e,o=t.getRoles(null==data||null===(e=data.data)||void 0===e||null===(e=e.data)||void 0===e||null===(e=e.roles[0])||void 0===e?void 0:e.name),r=[{expires_at:data.data.expires_at,remember_token:data.data.remember_token}];t.saveMenus(null==data?void 0:data.menus),t.saveExpires(r[0]),t.saveLogin(data.data.data.logins[0].user_token_login),t.$swal({position:"top-end",icon:"success",title:"Selamat datang kembali, ".concat(data.data.data.name),showConfirmButton:!1,timer:10}),t.$router.replace({path:"/dashboard/".concat(o)})}),1e3)})).catch((function(e){var o;"Request failed with status code 400"===(null==e?void 0:e.message)&&(t.$swal({icon:"warning",title:"Oops...",text:"Column email & password cannot be empty"}),t.errorUsers=!0,t.error=!0,t.errorLogin="",t.validation=null==e||null===(o=e.response)||void 0===o?void 0:o.data,t.errorUsers="User cannot access dashboard!"===e.response.data.message)})).finally((function(){setTimeout((function(){t.loadingLogin=!1}),1e3)}))},saveMenus:function(t){this.$store.dispatch("menu/storeUserMenu",t)},saveLogin:function(data){this.$store.dispatch("auth/storeAuthLogin",data)},saveExpires:function(data){this.$store.dispatch("auth/storeExpiredLogin",data)},getRoles:function(data){return data.toString().toLowerCase()},authTokenStorage:function(){this.$store.dispatch("auth/storeAuthToken","auth")}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}},n=o(8),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto px-4 py-4 h-full"},[e("div",{staticClass:"flex content-center items-center justify-center h-full"},[e("div",{staticClass:"w-full lg:w-4/12 px-4"},[t.globalLoading?e("div",[e("molecules-row-loading",{attrs:{loading:t.globalLoading,options:"user-login"}})],1):t._e(),t._v(" "),t.errorUsers?e("div",{staticClass:"flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",attrs:{id:"toast-warning",role:"alert"}},[e("div",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200"},[e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Warning icon")])]),t._v(" "),e("div",{staticClass:"ml-3 text-sm font-normal"},[t._v("\n      Improve password difficulty.\n    ")]),t._v(" "),e("button",{staticClass:"ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",attrs:{type:"button","data-dismiss-target":"#toast-warning","aria-label":"Close"}},[e("span",{staticClass:"sr-only"},[t._v("Close")]),t._v(" "),e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]):t._e(),t._v(" "),e("div",{staticClass:"relative flex flex-col min-w-0 break-words lg:w-full sm:w-[90vw] mb-6 shadow-lg rounded-lg bg-gray-800 border-0 h-auto opacity-75"},[e("div",{staticClass:"rounded-t mb-0 px-6 py-6"},[e("div",{staticClass:"text-center mb-3"},[e("router-link",{staticClass:"text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase",attrs:{to:"/"}},[e("img",{staticClass:"lg:max-width-[300px] sm:max-width-[200px]",attrs:{src:o(688)}})])],1)]),t._v(" "),t.errorLogin?e("div",{staticClass:"flex py-6"},[e("div",{class:"".concat("Your email not registered !"===t.errorLogin?"bg-danger-600":"bg-warning-300"," rounded-sm mb-4 text-base text-white font-bold capitalize w-full h-auto p-2"),attrs:{role:"alert"}},[t._v("\n  "+t._s(t.errorLogin)+"\n")])]):t._e(),t._v(" "),e("div",{staticClass:"flex-auto px-4 lg:px-10 py-10 pt-0"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[e("div",{staticClass:"relative w-full mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],class:"".concat(t.error?"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-red-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-red-600":"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"),attrs:{type:"text",id:"exampleFormControlInput1",placeholder:"Email Address"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),t.validation.email?e("div",{staticClass:"flex py-6"},[e("div",{staticClass:"flex p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300",attrs:{role:"alert"}},[e("span",{staticClass:"font-medium"},[e("i",{staticClass:"fa-solid fa-circle-exclamation"}),t._v(" "+t._s(t.validation.email[0]))])])]):t._e()]),t._v(" "),e("div",{staticClass:"relative"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],class:"".concat(t.error?"pass1 h-12 w-full mt-6 rounded-lg outline-none p-2 border border-solid border-red-600 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-red-600":"pass1 h-12 w-full border mt-6 rounded-lg outline-none p-2"),attrs:{id:"password",type:"password",placeholder:"Password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),e("i",{class:"fa ".concat(t.hidePassword?"fa-eye-slash":"fa-eye"," eye_1 absolute top-10 right-3 cursor-pointer"),on:{click:t.showingPassword}}),t._v(" "),t.validation.password?e("div",{staticClass:"flex py-6"},[e("div",{staticClass:"flex p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300",attrs:{role:"alert"}},[e("span",{staticClass:"font-medium"},[e("i",{staticClass:"fa-solid fa-circle-exclamation"}),t._v(" "+t._s(t.validation.password[0]))])])]):t._e()]),t._v(" "),e("div",[e("label",{staticClass:"inline-flex items-center cursor-pointer py-6"},[e("input",{staticClass:"form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150",attrs:{id:"customCheckLogin",type:"checkbox"},on:{change:t.remember_me}}),t._v(" "),e("span",{staticClass:"ml-2 text-sm font-semibold text-blueGray-400"},[t._v("\n      Remember me\n    ")])])]),t._v(" "),e("div",{staticClass:"text-center mt-6"},[e("button",{staticClass:"bg-blueGray-600 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",attrs:{type:"submit"}},[t.loadingLogin?e("div",{staticClass:"flex justify-center",attrs:{role:"status"}},[e("svg",{staticClass:"inline w-4 h-4 mr-3 text-white animate-spin",attrs:{"aria-hidden":"true",role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}}),t._v(" "),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"}})]),t._v("\nLoading...\n")]):e("span",[t._v(" Sign in ")])])])])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MoleculesRowLoading:o(195).default})}}]);