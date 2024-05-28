(window.webpackJsonp=window.webpackJsonp||[]).push([[306,134],{675:function(t,e,n){"use strict";n.r(e);var o={props:["links","paging","category"],data:function(){return{laquo:"<i class='fa-solid fa-chevron-left'></i>",raquo:"<i class='fa-solid fa-chevron-right'></i>",keywords:this.$route.query.keywords}},methods:{fetchAllData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.keywords,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.category_id;this.$emit("fetch-data",t,e,n,o)}}},l=o,r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("nav",{attrs:{"aria-label":"Page navigation example z-0"}},[e("ul",{staticClass:"flex flex-wrap list-style-none"},t._l(t.links,(function(link,n){return e("div",{key:n},["&laquo; Previous"===link.label?e("li",{staticClass:"page-item"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  ".concat(t.paging.current>1?"cursor-pointer text-white bg-blueGray-800":"pointer-events-none text-blueGray-800"," focus:shadow-none"),attrs:{tabindex:"-1","aria-disabled":"true"},domProps:{innerHTML:t._s(t.laquo)},on:{click:function(e){t.fetchAllData(t.paging.current-=1)}}})]):link.active?e("li",{staticClass:"page-item active"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded hover:text-white hover:bg-blueGray-800 shadow-md focus:shadow-md ".concat(link.active?"pointer-events-none text-white bg-blueGray-800":"cursor-pointer text-blueGray-900"),on:{click:function(e){t.fetchAllData(parseInt(link.label))}}},[t._v(t._s(link.label))])]):"Next &raquo;"===link.label?e("li",{class:"page-item ".concat(t.paging.current===t.paging.last?"disabled":"")},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ".concat(t.paging.current===t.paging.last?"pointer-events-none text-blueGray-800":"cursor-pointer text-white bg-blueGray-800"),domProps:{innerHTML:t._s(t.raquo)},on:{click:function(e){t.fetchAllData(t.paging.current+=1)}}})]):e("li",{staticClass:"page-item"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-blueGray-900 font-semibold hover:text-blueGray-700 hover:bg-blueGray-800 focus:shadow-none ".concat(link.active?"pointer-events-none":"cursor-pointer"),on:{click:function(e){t.fetchAllData(parseInt(link.label))}}},[t._v(t._s(link.label))])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},739:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=[{id:1,title:"nama"},{id:2,title:"kode"},{id:3,title:"saldo awal"},{id:4,title:"saldo terkini"}]},915:function(t,e,n){"use strict";n.r(e);var o=n(152),l=(n(53),n(25),n(37),n(36),n(739)),r=n(670),c={name:"kas",layout:"admin",data:function(){return{current:this.$route.query.current,routePath:this.$route.path,stringRoute:null,typeRoute:null,loading:null,options:"",success:null,message_success:"",headers:Object(o.a)(l.a),api_url:"https://sirmuh.api.dksindo.com/api/v1",items:[],links:[],paging:{current:null,from:null,last:null,per_page:null,total:null},orderBy:{field:"nama",name:"nama",type:"ASC"}}},created:function(){this.checkNewData()},mounted:function(){this.$nuxt.checkRolesAccess(),this.generatePath(),this.getDataKas(1,{},!0),this.checkUserLogin()},methods:{generatePath:function(){var t=this.routePath.split("/"),e=t[2],n=t[3];this.stringRoute=e,this.typeRoute=n},handleFilterKas:function(param,t){"kas"===t&&this.getDataKas(1,param,!1)},handleSortData:function(param,t){"kas"===t&&this.getDataKas(1,param,!1)},getDataKas:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,param=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;this.loading=n,this.$nuxt.globalLoadingMessage="Proses menyiapkan data kas ...",Object(r.b)({api_url:"".concat(this.api_url,"/data-kas?page=").concat(e).concat(param.nama?"&keywords="+param.nama:param.kode?"&kode="+param.kode:param.method?"&sort_name="+param.name+"&sort_type="+param.type:""),token:this.token.token,api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}).then((function(data){var e,n,o,l,r,c,d,h=[];null!=data&&data.success&&(null==data||null===(e=data.data)||void 0===e||e.map((function(t){var e={id:null==t?void 0:t.id,kode:null==t?void 0:t.kode,nama:null==t?void 0:t.nama,saldo:null==t?void 0:t.saldo_kas,saldo_awal:null==t?void 0:t.saldo_awal};h.push(e)})),t.items=[].concat(h),t.links=null==data||null===(n=data.meta)||void 0===n?void 0:n.links,t.paging.current=null==data||null===(o=data.meta)||void 0===o?void 0:o.current_page,t.paging.from=null==data||null===(l=data.meta)||void 0===l?void 0:l.from,t.paging.last=null==data||null===(r=data.meta)||void 0===r?void 0:r.last_page,t.paging.per_page=null==data||null===(c=data.meta)||void 0===c?void 0:c.per_page,t.paging.total=null==data||null===(d=data.meta)||void 0===d?void 0:d.total,setTimeout((function(){t.loading=!1}),500))})).catch((function(t){return console.log(t)}))},deleteKas:function(t){var e=this;this.loading=!0,this.options="delete-kas",this.$nuxt.globalLoadingMessage="Proses menghapus data kas ...",Object(r.a)({api_url:"".concat(this.api_url,"/data-kas/").concat(t),token:this.token.token,api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}).then((function(data){data.error&&(e.$swal({icon:"error",title:"Oops...",text:data.message}),e.loading=!1),data.success&&(e.message_success=data.message,e.success=!0,e.scrollToTop(),setTimeout((function(){e.loading=!1,e.options=""}),500))})).catch((function(t){return console.log(t)}))},closeSuccessAlert:function(){this.success=!1,this.message=""}},watch:{notifs:function(){this.$_.size(this.$nuxt.notifs)>0&&(console.log("Yeee Created"),this.$nuxt.notifs[0].routes&&this.getDataKas(this.paging.current,{},!1))}}},d=c,h=n(8),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-wrap mt-4"},[e("div",{class:"".concat(t.$nuxt.showSidebar?"w-full mb-12 px-6":"max-w-full")},[e("cards-card-table",{attrs:{color:"light",title:"DATA KAS",types:"kas",queryType:"DATA_KAS",queryMiddle:"kas",parentRoute:t.stringRoute,typeRoute:t.typeRoute,headers:t.headers,columns:t.items,loading:t.loading,success:t.success,orderBy:t.orderBy,messageAlert:t.message_success},on:{"filter-data":t.handleFilterKas,"close-alert":t.closeSuccessAlert,"deleted-data":t.deleteKas,"sort-data":t.handleSortData}}),t._v(" "),e("div",{staticClass:"mt-6 -mb-2"},[e("div",{staticClass:"flex justify-center items-center"},[e("molecules-pagination",{attrs:{links:t.links,paging:t.paging},on:{"fetch-data":t.getDataKas}})],1)])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardTable:n(709).default,MoleculesPagination:n(675).default})}}]);