(window.webpackJsonp=window.webpackJsonp||[]).push([[29,25,26],{575:function(t,e,r){"use strict";r.d(e,"c",(function(){return n.a})),r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return c})),r.d(e,"e",(function(){return d})),r.d(e,"d",(function(){return f}));var n=r(579),o=r(14),l=(r(64),r(9),function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,data,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,data=e.data?JSON.stringify({activation_id:e.data}):null,t.next=6,fetch(r,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Dku-Api-Key":e.api_key},body:data});case 6:return o=t.sent,t.next=9,o.json();case 9:return l=t.sent,t.abrupt("return",l);case 13:t.prev=13,t.t0=t.catch(0),console.error(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()),c=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,t.next=5,fetch(r,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Dku-Api-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=10;break}t.t0=o,t.next=13;break;case 10:return t.next=12,o.json();case 12:t.t0=t.sent;case 13:return l=t.t0,t.abrupt("return",l);case 17:t.prev=17,t.t1=t.catch(0),console.error(t.t1);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,t.next=5,fetch(r,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Dku-Api-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=10;break}t.t0=o,t.next=13;break;case 10:return t.next=12,o.json();case 12:t.t0=t.sent;case 13:return l=t.t0,t.abrupt("return",l);case 17:t.prev=17,t.t1=t.catch(0),console.error(t.t1);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,t.next=5,fetch(r,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Dku-Api-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=10;break}t.t0=o,t.next=13;break;case 10:return t.next=12,o.json();case 12:t.t0=t.sent;case 13:return l=t.t0,t.abrupt("return",l);case 17:t.prev=17,t.t1=t.catch(0),console.error(t.t1);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(e){return t.apply(this,arguments)}}()},576:function(t,e,r){var content=r(586);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("51c54c0e",content,!0,{sourceMap:!1})},577:function(t,e,r){"use strict";r.r(e);var n={props:{success:{type:Boolean,default:!1},messageAlert:{type:String,default:""}},methods:{updateSuccess:function(){this.$emit("close-alert")}}},o=r(3),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid grid-cols-1 max-w-full px-0 mb-4"},[e("div",{staticClass:"col-span-12"},[t.success?e("div",{staticClass:"flex items-center w-full max-w-xs p-2 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",attrs:{id:"toast-success",role:"alert"}},[e("div",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"},[e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Check icon")])]),t._v(" "),e("div",{staticClass:"ml-3 text-sm font-normal"},[t._v(t._s(t.messageAlert))]),t._v(" "),e("button",{staticClass:"ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",attrs:{type:"button","data-dismiss-target":"#toast-success","aria-label":"Close"},on:{click:t.updateSuccess}},[e("span",{staticClass:"sr-only"},[t._v("Close")]),t._v(" "),e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},579:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(14),o=(r(64),r(9),function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,t.next=5,fetch(r,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Dku-Api-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=10;break}t.t0=o,t.next=13;break;case 10:return t.next=12,o.json();case 12:t.t0=t.sent;case 13:return l=t.t0,t.abrupt("return",l);case 17:t.prev=17,t.t1=t.catch(0),console.log(t.t1);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(e){return t.apply(this,arguments)}}())},581:function(t,e,r){"use strict";r.r(e);var n={props:{loading:{type:Boolean,default:null},options:{type:String,default:""}}},o=(r(585),r(3)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return t.loading||t.options?e("div",{staticClass:"fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-95 flex flex-col items-center justify-center",attrs:{"wire:loading":""}},[e("div",{staticClass:"loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-16 w-16 mb-4"}),t._v(" "),e("p",{staticClass:"w-1/3 text-center text-white"},[t._v("This may take a few seconds, please don't close this page.")])]):t._e()}),[],!1,null,"fb2cd47a",null);e.default=component.exports},585:function(t,e,r){"use strict";r(576)},586:function(t,e,r){var n=r(40)((function(i){return i[1]}));n.push([t.i,".loader[data-v-fb2cd47a]{border-top-color:#3498db;animation:spinner-fb2cd47a 1.5s linear infinite}@keyframes spinner-fb2cd47a{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),n.locals={},t.exports=n},615:function(t,e,r){"use strict";r.r(e);r(23);var n=r(125),o=(r(33),r(9),r(35),r(30),r(575)),l={props:{type:{type:String,default:null}},data:function(){return{loading:null,options:"",hidePassword:!0,api_url:"http://api.dompetkebaikanumat.cc.id/api/v1",api_token:"zPl71ZUii2HJebSKS9qD3baeWqgjxZTJ",roles:[],error:null,input:{},validations:[],success:null,message_success:""}},created:function(){this.dataManagementEvent()},mounted:function(){this.getRoleLists()},methods:{showingPassword:function(){var t=document.querySelector("#password");"password"===t.type?(t.type="text",this.hidePassword=!1):(t.type="password",this.hidePassword=!0)},closeSuccessAlert:function(){this.success=!1,this.message="",this.detailUser()},getRoleLists:function(){var t=this;Object(o.c)({api_url:"".concat(this.api_url,"/fitur/roles-management"),token:this.token.token,api_key:this.api_token}).then((function(e){var data=e.data,r=[];if("DASHBOARD"===t.type){var o=data.data.map((function(t){return t})).filter((function(e){return"USER"!==t.$role(e.name)}));r=Object(n.a)(o)}else{var l=data.data.map((function(t){return t})).filter((function(e){return"USER"===t.$role(e.name)}));r=Object(n.a)(l),t.input.role=l.map((function(t){return t.id}))[0]}t.roles=Object(n.a)(r)})).catch((function(t){return console.log(t)}))},changeRoles:function(t){this.validations.role="",this.input.role=t.target.value},changeStatus:function(t){this.validations.status="",this.input.status=t.target.value},AddNewUser:function(){var t=this;this.loading=!0,this.options="add-user";var e={name:this.input.name,email:this.input.email,password:this.input.password,phone:this.input.phone,role:this.input.role,status:this.input.status};this.$api.defaults.headers.common.Authorization="Bearer ".concat(this.token.token),this.$api.defaults.headers.common["Dku-Api-Key"]=this.api_token,this.$api.post("/fitur/user-management",e).then((function(e){var data=e.data;console.log(data),data.success&&(t.success=!0,t.scrollToTop(),t.detailUser(null==data?void 0:data.profiles[0]),t.$store.dispatch("success/storeSuccessFormData",null==data?void 0:data.profiles[0]),t.input={},t.input.role="",t.input.status="")})).finally((function(){setTimeout((function(){t.loading=!1,t.options=""}),1e3)})).catch((function(e){t.validations=e.response.data}))},detailUser:function(t){this.$emit("detail-data",t)}},watch:{dataNotifs:function(){this.$_.size(this.dataNotifs)>0&&(this.token.token&&(this.message_success=this.messageNotif),this.getTotalUser())}}},c=r(3),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.AddNewUser.apply(null,arguments)}}},[e("molecules-success-alert",{attrs:{success:t.success,messageAlert:t.message_success},on:{"close-alert":t.closeSuccessAlert}}),t._v(" "),e("h6",{staticClass:"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"},[t._v("\n\t\tNew user data\n\t")]),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"relative"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{for:"name"}},[t._v("Fullname")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.name,expression:"input.name"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{type:"text",name:"name",id:"name",placeholder:"your fullname"},domProps:{value:t.input.name},on:{keyup:function(){return t.validations.name=""},input:function(e){e.target.composing||t.$set(t.input,"name",e.target.value)}}})]),t._v(" "),t.validations.name?e("div",{staticClass:"flex p-4 py-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n\t\t\t\t\t"+t._s(t.validations.name[0])+"\n\t\t\t\t")])]):t._e()]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4 sm:py-6 lg:py-0 xl:py-0"},[e("div",{staticClass:"relative"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{for:"email"}},[t._v("Email Address")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.email,expression:"input.email"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{type:"email",name:"email",id:"email",placeholder:"your_email@email.com"},domProps:{value:t.input.email},on:{keyup:function(){return t.validations.email=""},input:function(e){e.target.composing||t.$set(t.input,"email",e.target.value)}}})]),t._v(" "),t.validations.email?e("div",{staticClass:"flex p-4 py-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n\t\t\t\t\t"+t._s(t.validations.email[0])+"\n\t\t\t\t")])]):t._e()]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4 py-6"},[e("div",{staticClass:"relative"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.password,expression:"input.password"}],class:"".concat(t.error?"pass1 h-12 w-full rounded-lg outline-none p-2 border border-solid border-red-600 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-red-600":"pass1 h-12 w-full border mt-0 rounded-lg outline-none p-2"),attrs:{id:"password",type:"password",placeholder:"Password"},domProps:{value:t.input.password},on:{keyup:function(){return t.validations.password=""},input:function(e){e.target.composing||t.$set(t.input,"password",e.target.value)}}}),t._v(" "),e("i",{class:"fa ".concat(t.hidePassword?"fa-eye-slash":"fa-eye"," eye_1 absolute top-[40px] right-3 cursor-pointer"),on:{click:t.showingPassword}})]),t._v(" "),t.validations.password?e("div",{staticClass:"flex p-4 py-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n\t\t\t\t\t"+t._s(t.validations.password[0])+"\n\t\t\t\t")])]):t._e()]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4 py-6"},[e("div",{staticClass:"relative"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{for:"phone"}},[t._v("Phone")]),t._v(" "),e("vue-tel-input",{staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",staticStyle:{height:"50px"},attrs:{name:"phone",id:"phone",placeholder:"62+xxxx xxxx xxx"},model:{value:t.input.phone,callback:function(e){t.$set(t.input,"phone",e)},expression:"input.phone"}})],1)]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4 py-6"},[e("div",{staticClass:"relative"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{for:"role"}},[t._v("\n\t\t\t\t\tRole User\n\t\t\t\t")]),t._v(" "),e("select",{staticClass:"block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer",attrs:{id:"role"},on:{change:function(e){return t.changeRoles(e)}}},["USER"!==t.type?e("option",{attrs:{selected:""}},[t._v("Choose a role")]):t._e(),t._v(" "),t._l(t.roles,(function(r){return e("option",{key:r.id,domProps:{value:r.id}},[t._v("\n\t\t\t\t\t\t"+t._s(t.$role(r.name))+"\n\t\t\t\t\t")])}))],2)]),t._v(" "),t.validations.role?e("div",{staticClass:"flex p-4 py-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n\t\t\t\t\t"+t._s(t.validations.role[0])+"\n\t\t\t\t")])]):t._e()]),t._v(" "),e("div",{staticClass:"w-full lg:w-6/12 px-4 py-6"},[e("div",{staticClass:"relative"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{for:"status"}},[t._v("\n\t\t\t\t\tStatus User\n\t\t\t\t")]),t._v(" "),e("select",{staticClass:"block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer",attrs:{id:"status"},on:{change:function(e){return t.changeStatus(e)}}},[e("option",{attrs:{selected:""}},[t._v("Choose a status")]),t._v(" "),e("option",{attrs:{value:"ACTIVE"}},[t._v("\n\t\t\t\t\t\tACTIVE\n\t\t\t\t\t")]),t._v(" "),e("option",{attrs:{value:"INACTIVE"}},[t._v("\n\t\t\t\t\t\tINACTIVE\n\t\t\t\t\t")])])]),t._v(" "),t.validations.status?e("div",{staticClass:"flex p-4 py-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n\t\t\t\t\t"+t._s(t.validations.status[0])+"\n\t\t\t\t")])]):t._e()]),t._v(" "),e("div",{staticClass:"flex-shrink-0 lg:w-12/12 w-full py-10"},[e("button",{staticClass:"w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",attrs:{type:"submit"}},[t.loading?e("div",[e("svg",{staticClass:"inline w-4 h-4 mr-3 text-white animate-spin",attrs:{"aria-hidden":"true",role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}}),t._v(" "),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"}})]),t._v("\n\t\t\t\t\tLoading...\n\t\t\t\t")]):e("span",[e("i",{staticClass:"fa-solid fa-plus"}),t._v(" Add User")])])])]),t._v(" "),t.loading?e("div",[e("molecules-row-loading",{attrs:{loading:t.loading,options:t.options}})],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MoleculesSuccessAlert:r(577).default,MoleculesRowLoading:r(581).default})}}]);