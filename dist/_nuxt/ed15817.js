(window.webpackJsonp=window.webpackJsonp||[]).push([[272,127],{641:function(t,e,n){"use strict";n.r(e);var o={props:["links","paging","category"],data:function(){return{laquo:"<i class='fa-solid fa-chevron-left'></i>",raquo:"<i class='fa-solid fa-chevron-right'></i>",keywords:this.$route.query.keywords}},methods:{fetchAllData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.keywords,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.category_id;this.$emit("fetch-data",t,e,n,o)}}},l=o,r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("nav",{attrs:{"aria-label":"Page navigation example z-0"}},[e("ul",{staticClass:"flex flex-wrap list-style-none"},t._l(t.links,(function(link,n){return e("div",{key:n},["&laquo; Previous"===link.label?e("li",{staticClass:"page-item"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  ".concat(t.paging.current>1?"cursor-pointer text-white bg-blueGray-800":"pointer-events-none text-blueGray-800"," focus:shadow-none"),attrs:{tabindex:"-1","aria-disabled":"true"},domProps:{innerHTML:t._s(t.laquo)},on:{click:function(e){t.fetchAllData(t.paging.current-=1)}}})]):link.active?e("li",{staticClass:"page-item active"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded hover:text-white hover:bg-blueGray-800 shadow-md focus:shadow-md ".concat(link.active?"pointer-events-none text-white bg-blueGray-800":"cursor-pointer text-blueGray-900"),on:{click:function(e){t.fetchAllData(parseInt(link.label))}}},[t._v(t._s(link.label))])]):"Next &raquo;"===link.label?e("li",{class:"page-item ".concat(t.paging.current===t.paging.last?"disabled":"")},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ".concat(t.paging.current===t.paging.last?"pointer-events-none text-blueGray-800":"cursor-pointer text-white bg-blueGray-800"),domProps:{innerHTML:t._s(t.raquo)},on:{click:function(e){t.fetchAllData(t.paging.current+=1)}}})]):e("li",{staticClass:"page-item"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-blueGray-900 font-semibold hover:text-blueGray-700 hover:bg-blueGray-800 focus:shadow-none ".concat(link.active?"pointer-events-none":"cursor-pointer"),on:{click:function(e){t.fetchAllData(parseInt(link.label))}}},[t._v(t._s(link.label))])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},696:function(t,e,n){"use strict";var o=n(5),l=n(7),r=n(50),c=n(49),d=n(64),h=n(333),f=n(21),v=n(6),m=n(332),y=n(196),k=n(697),x=n(698),_=n(115),w=n(699),A=[],G=l(A.sort),C=l(A.push),D=v((function(){A.sort(void 0)})),R=v((function(){A.sort(null)})),P=y("sort"),T=!v((function(){if(_)return _<70;if(!(k&&k>3)){if(x)return!0;if(w)return w<603;var code,t,e,n,o="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)A.push({k:t+n,v:e})}for(A.sort((function(a,b){return b.v-a.v})),n=0;n<A.length;n++)t=A[n].k.charAt(0),o.charAt(o.length-1)!==t&&(o+=t);return"DGBEFHACIJK"!==o}}));o({target:"Array",proto:!0,forced:D||!R||!P||!T},{sort:function(t){void 0!==t&&r(t);var e=c(this);if(T)return void 0===t?G(e):G(e,t);var n,o,l=[],v=d(e);for(o=0;o<v;o++)o in e&&C(l,e[o]);for(m(l,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:f(e)>f(n)?1:-1}}(t)),n=d(l),o=0;o<n;)e[o]=l[o++];for(;o<v;)h(e,o++);return e}})},697:function(t,e,n){"use strict";var o=n(93).match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},698:function(t,e,n){"use strict";var o=n(93);t.exports=/MSIE|Trident/.test(o)},699:function(t,e,n){"use strict";var o=n(93).match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},839:function(t,e,n){"use strict";n.r(e);var o=n(149),l=(n(696),n(14),n(62),n(37),n(36),[{id:3,title:"nama"}]),r=n(637),c={name:"biaya",layout:"admin",data:function(){return{current:this.$route.query.current,sort:this.$route.query.sort,routePath:this.$route.path,stringRoute:null,typeRoute:null,loading:null,options:"",success:null,message_success:"",headers:Object(o.a)(l),api_url:"https://sirmuh.api.dksindo.com/api/v1",items:[],links:[],paging:{current:null,from:null,last:null,per_page:null,total:null}}},created:function(){this.checkNewData()},mounted:function(){this.getDataBiaya(1,{},!0),this.generatePath()},methods:{generatePath:function(){var t=this.routePath.split("/"),e=t[2],n=t[3];this.stringRoute=e,this.typeRoute=n},handleFilterKas:function(param,t){"data-biaya"===t&&this.getDataBiaya(1,param,!1)},getDataBiaya:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,param=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;this.loading=n,Object(r.b)({api_url:"".concat(this.api_url,"/data-kategori-barang?page=").concat(e).concat(param.nama?"&keywords="+param.nama:""),token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){var e,n,o,l,r,c,d,h=[];null!=data&&data.success&&(null==data||null===(e=data.data)||void 0===e||e.map((function(t){var e={id:null==t?void 0:t.id,nama:null==t?void 0:t.nama};h.push(e)})),t.items=[].concat(h),t.links=null==data||null===(n=data.meta)||void 0===n?void 0:n.links,t.paging.current=null==data||null===(o=data.meta)||void 0===o?void 0:o.current_page,t.paging.from=null==data||null===(l=data.meta)||void 0===l?void 0:l.from,t.paging.last=null==data||null===(r=data.meta)||void 0===r?void 0:r.last_page,t.paging.per_page=null==data||null===(c=data.meta)||void 0===c?void 0:c.per_page,t.paging.total=null==data||null===(d=data.meta)||void 0===d?void 0:d.total,setTimeout((function(){t.loading=!1}),500))})).finally((function(){t.loading=!1})).catch((function(t){return console.log(t)}))},deletePelanggan:function(t){var e=this;this.loading=!0,this.options="delete-biaya",Object(r.a)({api_url:"".concat(this.api_url,"/data-biaya/").concat(t),token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){data.success&&(e.message_success=data.message,e.success=!0,e.scrollToTop(),setTimeout((function(){e.loading=!1,e.options=""}),1500))})).catch((function(t){return console.log(t)}))},closeSuccessAlert:function(){this.success=!1,this.message=""}},watch:{notifs:function(){this.$_.size(this.$nuxt.notifs)>0&&"biaya"===this.$nuxt.notifs[0].routes&&this.getDataBiaya(this.paging.current,{},!1)}}},d=c,h=n(8),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-wrap mt-4"},[e("div",{class:"".concat(t.$nuxt.showSidebar?"w-full mb-12  px-6":"max-w-full")},[e("cards-card-table",{attrs:{color:"light",title:"KATEGORI BARANG",types:"kategori-barang",queryType:"KATEGORI_BARANG",queryMiddle:"barang",headers:t.headers,columns:t.items,loading:t.loading,success:t.success,parentRoute:t.stringRoute,typeRoute:t.typeRoute,messageAlert:t.message_success},on:{"filter-data":t.handleFilterKas,"close-alert":t.closeSuccessAlert,"deleted-data":t.deletePelanggan}}),t._v(" "),e("div",{staticClass:"mt-6 -mb-2"},[e("div",{staticClass:"flex justify-center items-center"},[e("molecules-pagination",{attrs:{links:t.links,paging:t.paging},on:{"fetch-data":t.getDataBiaya}})],1)])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardTable:n(642).default,MoleculesPagination:n(641).default})}}]);