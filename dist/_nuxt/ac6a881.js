(window.webpackJsonp=window.webpackJsonp||[]).push([[186,42,189,194],{670:function(e,t,n){"use strict";n.d(t,"b",(function(){return r.a})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return d}));var r=n(672),l=n(18),o=(n(70),n(15),function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(t){var n,r,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.api_url,r=t.token,e.next=5,fetch(n,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":t.api_key}});case 5:if((l=e.sent).ok){e.next=8;break}throw new Error("Data not found!");case 8:return e.next=10,l.json();case 10:return o=e.sent,e.abrupt("return",o);case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()),c=function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(t){var n,r,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.api_url,r=t.token,e.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":t.api_key}});case 5:if((l=e.sent).ok){e.next=8;break}throw new Error("Data not found!");case 8:return e.next=10,l.json();case 10:return o=e.sent,e.abrupt("return",o);case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(t){var n,r,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.api_url,r=t.token,e.next=5,fetch(n,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":t.api_key}});case 5:if((l=e.sent).ok){e.next=8;break}throw new Error("Data not found!");case 8:return e.next=10,l.json();case 10:return o=e.sent,e.abrupt("return",o);case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()},672:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(18),l=(n(70),n(15),function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){var n,r,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.api_url,r=t.token,e.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":t.api_key}});case 5:if((l=e.sent).ok){e.next=9;break}throw new Error("Data not found!");case 9:return e.next=11,l.json();case 11:return o=e.sent,e.abrupt("return",o);case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}())},763:function(e,t,n){"use strict";n.r(t);var r=n(14),l=n(152),o=(n(53),n(64),n(18)),c=(n(70),n(30),n(42),n(15),n(37),n(670)),d=n(225),f=(n(345),{name:"emerald-tabs",components:{Datepicker:d.a},props:{resetFilterProcess:{type:Boolean}},data:function(){return Object(r.a)(Object(r.a)({loadingSupplier:null,openTab:1,api_url:"https://sirmuh.api.dksindo.com/api/v1",api_token:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u",input:{},categories:[],selectedPelanggan:null,clearKey:0,currentPage:1,totalPages:1,startDate:null,endDate:null,selectedDate:[],datePickerConfig:{range:!1},dateFormat:"YYYY-MM-DD"},"selectedPelanggan",null),"pelanggans",[])},beforeMount:function(){this.authTokenStorage()},created:function(){this.getCategoryDataBarang()},mounted:function(){this.getPelangganLists()},methods:{toggleTabs:function(e){this.openTab=e},clearSelectedData:function(){this.selectedPelanggan="",this.clearKey+=1,this.$nuxt.viewAllPenjualanPO=!0,this.$emit("filter-data",{keywords:"",pelanggan:this.selectedPelanggan,date:"",view_all:!0})},changePelanggan:function(e){var t=e.id;void 0!==t&&this.$emit("filter-data",{keywords:"",pelanggan:t,date:"",view_all:this.$nuxt.viewAllPenjualanPO})},transformPelangganLists:function(e){return e.filter((function(e){return e&&e.kode})).map((function(e){return{id:e.kode,text:"".concat(e.nama," - ").concat(e.kode)}}))},getPelangganLists:function(){var e=this;this.loadingSupplier=!0;var t=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,l,o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],r=1,l=1;case 3:if(!(r<=l)){t.next=12;break}return t.next=6,Object(c.b)({api_url:"".concat(e.api_url,"/data-pelanggan?page=").concat(r),token:e.token.token,api_key:e.api_token});case 6:data=t.sent,n=n.concat(null==data?void 0:data.data),l=null==data||null===(o=data.meta)||void 0===o?void 0:o.last_page,r++,t.next=3;break;case 12:return t.abrupt("return",n);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t().then((function(data){e.pelanggans=e.transformPelangganLists(data)})).finally((function(){e.loadingSupplier=!1})).catch((function(e){return console.log(e)}))},handleView:function(){this.$emit("filter-data",{keywords:"",pelanggan:null,date:"",view_all:this.$nuxt.viewAllPenjualanPO})},clearSelectedCategory:function(){this.selectedCategory=null,this.clearKey+=1,this.$emit("filter-data",{keywords:"",pelanggan:null,date:"",view_all:!1})},changeCategory:function(e){this.selectedCategory=null==e?void 0:e.id,void 0!==this.selectedCategory?e.selected&&this.$emit("filter-data",{keywords:"",pelanggan:this.selectedCategory,date:"",view_all:!1}):(this.selectedCategory=null,this.clearKey+=1,this.$emit("filter-data",{keywords:"",pelanggan:"",start_date:"",end_date:"",view_all:!1}))},transformCategoryData:function(e){return e.filter((function(e){return e&&e.kode})).map((function(e){return{id:e.kode,text:"".concat(e.nama," - ").concat(e.kode)}}))},getCategoryDataBarang:function(){var e=this;this.loadingCategory=!0;var t=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,l,o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],r=1,l=1;case 3:if(!(r<=l)){t.next=12;break}return t.next=6,Object(c.b)({api_url:"".concat(e.api_url,"/data-supplier?page=").concat(r),token:e.token.token,api_key:e.api_token});case 6:data=t.sent,n=n.concat(null==data?void 0:data.data),l=null==data||null===(o=data.meta)||void 0===o?void 0:o.last_page,r++,t.next=3;break;case 12:return t.abrupt("return",n);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t().then((function(data){e.categories=e.transformCategoryData(data)})).finally((function(){setTimeout((function(){e.loadingCategory=!1}),1500)})).catch((function(e){return console.log(e)}))},handleDateChange:function(e){if(null!==e&&2===e.length){this.$nuxt.startDownload=!0;var t=this.$moment(e[0]).format("YYYY-MM-DD"),n=this.$moment(e[1]).format("YYYY-MM-DD");this.$emit("filter-data",{keywords:"",supplier:"",kategori:"",start_date:t,end_date:n,view_all:this.$nuxt.viewAllPenjualanPO})}else{var r=this.$moment(e).format("YYYY-MM-DD");this.$emit("filter-data",{keywords:"",supplier:"",kategori:"",date:r,view_all:this.$nuxt.viewAllPenjualanPO})}},handleFilter:function(e){var t=e.target.value;this.$emit("filter-data",{keyword:t,kategori:"",date:"",view_all:this.$nuxt.viewAllPenjualanPO})}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}}),h=f,v=n(8),component=Object(v.a)(h,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-wrap"},[t("div",{staticClass:"w-full mb-12"},[t("div",{staticClass:"relative flex w-full flex-wrap items-stretch"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.input.nama,expression:"input.nama"}],staticClass:"px-3 py-3 placeholder-blueGray-500 relative bg-blueGray-900 rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10 border hover:border-[#060501]",attrs:{type:"text",placeholder:"Pencarian data ..."},domProps:{value:e.input.nama},on:{keyup:function(t){return e.handleFilter(t)},input:function(t){t.target.composing||e.$set(e.input,"nama",t.target.value)}}}),e._v(" "),e._m(0)])]),e._v(" "),t("div",{staticClass:"w-full"},[t("div",{staticClass:"flex justify-start space-x-6"},[t("div",[t("datepicker",{style:{width:"20vw"},attrs:{config:e.datePickerConfig,placeholder:"Tanggal Beli",format:e.dateFormat},on:{input:e.handleDateChange},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1),e._v(" "),e.loadingSupplier?t("div",[t("div",{attrs:{role:"status"}},[t("svg",{staticClass:"w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",attrs:{"aria-hidden":"true",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),t("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})]),e._v(" "),t("span",{staticClass:"sr-only"},[e._v("Loading...")])]),e._v("\n        Preparing data pelanggan ...\n      ")]):t("div",{staticClass:"shrink-0 w-80"},[t("Select2",{attrs:{settings:{allowClear:!0,dropdownCss:{top:"auto",bottom:"auto"}},options:[{id:null,text:"Pilih Pelanggan"}].concat(Object(l.a)(e.pelanggans)),placeholder:"Pilih Pelanggan"},on:{change:function(t){return e.changePelanggan(t)},select:function(t){return e.changePelanggan(t)}},model:{value:e.selectedPelanggan,callback:function(t){e.selectedPelanggan=t},expression:"selectedPelanggan"}})],1),e._v(" "),t("div",[t("button",{staticClass:"text-white bg-red-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",on:{click:e.clearSelectedData}},[t("i",{staticClass:"fa-solid fa-filter-circle-xmark"})])])]),e._v(" "),t("div",{staticClass:"flex justify-start space-x-6 mt-6"},[t("div",{staticClass:"col-span-full"},[t("div",{staticClass:"flex items-center"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.$nuxt.viewAllPenjualanPO,expression:"$nuxt.viewAllPenjualanPO"}],staticClass:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",attrs:{id:"checked-checkbox",type:"checkbox",value:""},domProps:Object(r.a)({checked:e.$nuxt.viewAllPenjualanPO},"checked",Array.isArray(e.$nuxt.viewAllPenjualanPO)?e._i(e.$nuxt.viewAllPenjualanPO,"")>-1:e.$nuxt.viewAllPenjualanPO),on:{change:[function(t){var n=e.$nuxt.viewAllPenjualanPO,r=t.target,l=!!r.checked;if(Array.isArray(n)){var o=e._i(n,"");r.checked?o<0&&e.$set(e.$nuxt,"viewAllPenjualanPO",n.concat([""])):o>-1&&e.$set(e.$nuxt,"viewAllPenjualanPO",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.$nuxt,"viewAllPenjualanPO",l)},e.handleView]}}),e._v(" "),t("label",{staticClass:"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",attrs:{for:"checked-checkbox"}},[e._v(e._s(e.$nuxt.viewAllPenjualanPO?"Menampilkan data bulan ini":"Menampilkan seluruh data"))])])])])])])}),[function(){var e=this._self._c;return e("span",{staticClass:"z-10 h-full leading-snug font-normal text-center text-blueGray-500 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"},[e("i",{staticClass:"fa-solid fa-magnifying-glass"})])}],!1,null,null,null);t.default=component.exports}}]);