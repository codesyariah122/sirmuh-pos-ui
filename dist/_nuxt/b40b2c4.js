(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{686:function(t,e,r){"use strict";r.r(e);r(62),r(63);var l={props:{type:{type:String,default:null},detail:{type:[Object,Array],default:function(){return{}}},headers:{type:[Object,Array],default:function(){return{}}},loading:{type:Boolean,default:null}},data:function(){return{role:this.$route.params.role}}},n=r(8),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",[t.loading?e("div",{staticClass:"text-center p-8"},[e("div",{attrs:{role:"status"}},[e("svg",{staticClass:"inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",attrs:{"aria-hidden":"true",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),t._v(" "),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Loading...")])])]):e("tabs",{attrs:{options:{useUrlFragment:!1,defaultTabHash:"MASTER"}}},t._l(t.detail.menus,(function(menu){return e("tab",{key:menu.id,attrs:{name:menu.menu,id:menu.menu}},[e("div",{staticClass:"flex justify-start items-center"},[e("div",[e("div",{staticClass:"relative overflow-x-auto shadow-md sm:rounded-lg"},[e("table",{staticClass:"w-full text-sm text-left rtl:text-right text-gray-500"},[e("thead",{staticClass:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700"},[e("tr",[e("th",{staticClass:"p-4",attrs:{scope:"col"}},[e("div",{staticClass:"flex items-center"},[e("input",{staticClass:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500",attrs:{id:"checkbox-all-search",type:"checkbox"}}),t._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"checkbox-all-search"}},[t._v("checkbox")])])]),t._v(" "),t._l(t.headers,(function(header){return e("th",{key:header.id,staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("\n                    "+t._s(header.title)+"\n                  ")])}))],2)]),t._v(" "),e("tbody",t._l(menu.sub_menus,(function(sub){return e("tr",{key:sub.id,staticClass:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},[e("td",{staticClass:"w-4 p-4"},[e("div",{staticClass:"flex items-center"},[e("input",{directives:[{name:"model",rawName:"v-model",value:sub.menu,expression:"sub.menu"}],staticClass:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded",attrs:{id:"checkbox-table-search-1",type:"checkbox"},domProps:{checked:Array.isArray(sub.menu)?t._i(sub.menu,null)>-1:sub.menu},on:{change:function(e){var r=sub.menu,l=e.target,n=!!l.checked;if(Array.isArray(r)){var c=t._i(r,null);l.checked?c<0&&t.$set(sub,"menu",r.concat([null])):c>-1&&t.$set(sub,"menu",r.slice(0,c).concat(r.slice(c+1)))}else t.$set(sub,"menu",n)}}}),t._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"checkbox-table-search-1"}},[t._v("checkbox")])])]),t._v(" "),e("th",{staticClass:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap",attrs:{scope:"row"}},[t._v("\n                    "+t._s(sub.menu)+"\n                  ")])])})),0)])])])])])})),1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);