(window.webpackJsonp=window.webpackJsonp||[]).push([[308,43,52,169,182,187],{670:function(t,e,r){"use strict";r.d(e,"b",(function(){return n.a})),r.d(e,"a",(function(){return c})),r.d(e,"d",(function(){return l})),r.d(e,"c",(function(){return d}));var n=r(672),o=r(18),c=(r(70),r(15),function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,t.next=5,fetch(r,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return c=t.sent,t.abrupt("return",c);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()),l=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,t.next=5,fetch(r,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return c=t.sent,t.abrupt("return",c);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,t.next=5,fetch(r,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return c=t.sent,t.abrupt("return",c);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},672:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(18),o=(r(70),r(15),function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,t.next=5,fetch(r,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=9;break}throw new Error("Data not found!");case 9:return t.next=11,o.json();case 11:return c=t.sent,t.abrupt("return",c);case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}())},722:function(t,e,r){"use strict";r.r(e);r(53),r(64);var n={props:{type:{type:String,default:null},detail:{type:[Object,Array],default:function(){return{}}},headers:{type:[Object,Array],default:function(){return{}}},loading:{type:Boolean,default:null}},data:function(){return{role:this.$route.params.role}}},o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[t.loading?e("div",{staticClass:"text-center p-8"},[e("div",{attrs:{role:"status"}},[e("svg",{staticClass:"inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",attrs:{"aria-hidden":"true",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),t._v(" "),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Loading...")])])]):e("tabs",{attrs:{options:{useUrlFragment:!1,defaultTabHash:"MASTER"}}},t._l(t.detail.menus,(function(menu){return e("tab",{key:menu.id,attrs:{name:menu.menu,id:menu.menu}},[e("div",{staticClass:"flex justify-start items-center"},[e("div",[e("div",{staticClass:"relative overflow-x-auto shadow-md sm:rounded-lg"},[e("table",{staticClass:"w-full text-sm text-left rtl:text-right text-gray-500"},[e("thead",{staticClass:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700"},[e("tr",[e("th",{staticClass:"p-4",attrs:{scope:"col"}},[e("div",{staticClass:"flex items-center"},[e("input",{staticClass:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500",attrs:{id:"checkbox-all-search",type:"checkbox"}}),t._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"checkbox-all-search"}},[t._v("checkbox")])])]),t._v(" "),t._l(t.headers,(function(header){return e("th",{key:header.id,staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("\n                    "+t._s(header.title)+"\n                  ")])}))],2)]),t._v(" "),e("tbody",t._l(menu.sub_menus,(function(sub){return e("tr",{key:sub.id,staticClass:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},[e("td",{staticClass:"w-4 p-4"},[e("div",{staticClass:"flex items-center"},[e("input",{directives:[{name:"model",rawName:"v-model",value:sub.menu,expression:"sub.menu"}],staticClass:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded",attrs:{id:"checkbox-table-search-1",type:"checkbox"},domProps:{checked:Array.isArray(sub.menu)?t._i(sub.menu,null)>-1:sub.menu},on:{change:function(e){var r=sub.menu,n=e.target,o=!!n.checked;if(Array.isArray(r)){var c=t._i(r,null);n.checked?c<0&&t.$set(sub,"menu",r.concat([null])):c>-1&&t.$set(sub,"menu",r.slice(0,c).concat(r.slice(c+1)))}else t.$set(sub,"menu",o)}}}),t._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"checkbox-table-search-1"}},[t._v("checkbox")])])]),t._v(" "),e("th",{staticClass:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap",attrs:{scope:"row"}},[t._v("\n                    "+t._s(sub.menu)+"\n                  ")])])})),0)])])])])])})),1)],1)}),[],!1,null,null,null);e.default=component.exports},725:function(t,e,r){"use strict";r.r(e);r(36);var n={props:{detail:{type:Object,default:function(){return{}}},headers:{type:[Array,Object]},type:{type:String,default:""},loading:{type:Boolean,default:null}},data:function(){return{image_url:"https://sirmuh.api.dksindo.com/storage",public_asset:"https://sirmuh.api.dksindo.com"}},methods:{backTo:function(){var t=this;setTimeout((function(){t.$router.go(-1)}),500)}}},o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg"},["data-role-management"===t.type?e("roles-detail-cell",{attrs:{detail:t.detail,headers:t.headers,loading:t.loading},on:{"back-to":t.backTo}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RolesDetailCell:r(722).default})},730:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=[{id:1,title:"fitur"},{id:2,title:"create"},{id:3,title:"read"},{id:4,title:"update"}]},993:function(t,e,r){"use strict";r.r(e);var n=r(152),o=(r(15),r(53),r(36),r(730)),c=r(670),l={name:"detail-role-user",layout:"admin",data:function(){return{role:this.$route.params.role,loadingDetail:null,current:this.$route.query.current,item:{},headers:Object(n.a)(o.a),nama:"",routePath:this.$route.path,stringRoute:null,typeRoute:null}},beforeMount:function(){this.authTokenStorage()},created:function(){this.getDetailBarang(),this.generatePath()},methods:{generatePath:function(){var t=this.routePath.split("/"),e=t[2],r=t[3];this.stringRoute=e,this.typeRoute=r},getDetailBarang:function(){var t=this;this.loadingDetail=!0,Object(c.b)({api_url:"".concat(this.api_url,"/data-role-management/").concat(this.role),api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u",token:this.token.token}).then((function(e){var data=e.data;t.item=data})).finally((function(){setTimeout((function(){t.loadingDetail=!1}),500)})).catch((function(t){return console.log(t)}))}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}},d=r(8),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex flex-wrap pt-6"},[e("div",{staticClass:"w-full"},[e("cards-card-detail-master",{attrs:{detail:t.item,headers:t.headers,loading:t.loadingDetail,type:"data-role-management"}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardDetailMaster:r(725).default})}}]);