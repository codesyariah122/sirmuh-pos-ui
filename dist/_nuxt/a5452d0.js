(window.webpackJsonp=window.webpackJsonp||[]).push([[277,132],{641:function(t,e,n){"use strict";n.r(e);var o={props:["links","paging","category"],data:function(){return{laquo:"<i class='fa-solid fa-chevron-left'></i>",raquo:"<i class='fa-solid fa-chevron-right'></i>",keywords:this.$route.query.keywords}},methods:{fetchAllData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.keywords,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.category_id;this.$emit("fetch-data",t,e,n,o)}}},l=o,r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("nav",{attrs:{"aria-label":"Page navigation example z-0"}},[e("ul",{staticClass:"flex flex-wrap list-style-none"},t._l(t.links,(function(link,n){return e("div",{key:n},["&laquo; Previous"===link.label?e("li",{staticClass:"page-item"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  ".concat(t.paging.current>1?"cursor-pointer text-white bg-blueGray-800":"pointer-events-none text-blueGray-800"," focus:shadow-none"),attrs:{tabindex:"-1","aria-disabled":"true"},domProps:{innerHTML:t._s(t.laquo)},on:{click:function(e){t.fetchAllData(t.paging.current-=1)}}})]):link.active?e("li",{staticClass:"page-item active"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded hover:text-white hover:bg-blueGray-800 shadow-md focus:shadow-md ".concat(link.active?"pointer-events-none text-white bg-blueGray-800":"cursor-pointer text-blueGray-900"),on:{click:function(e){t.fetchAllData(parseInt(link.label))}}},[t._v(t._s(link.label))])]):"Next &raquo;"===link.label?e("li",{class:"page-item ".concat(t.paging.current===t.paging.last?"disabled":"")},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ".concat(t.paging.current===t.paging.last?"pointer-events-none text-blueGray-800":"cursor-pointer text-white bg-blueGray-800"),domProps:{innerHTML:t._s(t.raquo)},on:{click:function(e){t.fetchAllData(t.paging.current+=1)}}})]):e("li",{staticClass:"page-item"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-blueGray-900 font-semibold hover:text-blueGray-700 hover:bg-blueGray-800 focus:shadow-none ".concat(link.active?"pointer-events-none":"cursor-pointer"),on:{click:function(e){t.fetchAllData(parseInt(link.label))}}},[t._v(t._s(link.label))])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},843:function(t,e,n){"use strict";n.r(e);var o=n(150),l=(n(310),n(15),n(62),n(25),n(37),n(36),[{id:1,title:"nama"},{id:3,title:"total stok"}]),r=n(637),c={name:"barang-by-warehouse",layout:"admin",data:function(){return{current:this.$route.query.current,routePath:this.$route.path,stringRoute:null,typeRoute:null,loading:null,options:"",success:null,message_success:"",headers:Object(o.a)(l),api_url:"http://192.168.1.8:4041/api/v1",items:[],links:[],paging:{current:null,from:null,last:null,per_page:null,total:null},orderBy:{field:"nama",name:"nama",type:"ASC"}}},created:function(){this.checkNewData()},mounted:function(){this.getBarangByWareHouse(this.current?Number(this.current):1,{},!0),this.checkUserLogin(),this.generatePath()},methods:{generatePath:function(){var t=this.routePath.split("/"),e=t[2],n=t[3];this.stringRoute=e,this.typeRoute=n},handleFilterKategoriBarang:function(param,t){"barang-by-warehouse"===t&&this.getBarangByWareHouse(1,param,!1)},handleSortData:function(param,t){"barang-by-warehouse"===t&&this.getBarangByWareHouse(1,param,!1)},getBarangByWareHouse:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,param=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;this.loading=n,this.$nuxt.globalLoadingMessage="Proses menyiapkan data barang ...",Object(r.b)({api_url:"".concat(this.api_url,"/barang-by-warehouse?page=").concat(e).concat(param.nama?"&keywords="+param.nama:param.kategori?"&kategori="+param.kategori:param.start_date&&param.end_date?"&tgl_terakhir="+param.start_date+param.end_date:param.start_date?"&tgl_terakhir="+param.start_date:param.end_date?"&tgl_terakhir="+param.end_date:param.method?"&sort_name="+param.name+"&sort_type="+param.type:""),token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){var e,n,o,l,r,c,d;data.success&&(t.loading=!1);var h=[];null==data||null===(e=data.data)||void 0===e||e.map((function(t){var e={id:null==t?void 0:t.id,nama:null==t?void 0:t.nama,total:null==t?void 0:t.total_stok,satuan:null==t?void 0:t.satuan};h.push(e)})),t.items=[].concat(h),t.links=null==data||null===(n=data.meta)||void 0===n?void 0:n.links,t.paging.current=null==data||null===(o=data.meta)||void 0===o?void 0:o.current_page,t.paging.from=null==data||null===(l=data.meta)||void 0===l?void 0:l.from,t.paging.last=null==data||null===(r=data.meta)||void 0===r?void 0:r.last_page,t.paging.per_page=null==data||null===(c=data.meta)||void 0===c?void 0:c.per_page,t.paging.total=null==data||null===(d=data.meta)||void 0===d?void 0:d.total})).finally((function(){setTimeout((function(){t.loading=!1}),500)})).catch((function(e){t.loading=!1,console.log(e)}))},deleteBarang:function(t){var e=this;this.loading=!0,this.options="delete-barang",Object(r.a)({api_url:"".concat(this.api_url,"/data-barang/").concat(t),token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){data.success&&(e.message_success=data.message,e.success=!0,e.scrollToTop(),setTimeout((function(){e.loading=!1,e.options=""}),1500)),data.error&&(e.$swal({icon:"error",title:"Oops...",text:data.message}),e.loading=!1)})).catch((function(t){return console.log(t)}))},closeSuccessAlert:function(){this.success=!1,this.message=""}},watch:{notifs:function(){this.$_.size(this.notifs)>0&&this.getBarangByWareHouse(this.paging.current)},dataNotifs:function(){this.$_.size(this.notifs)>0&&(this.token.token===this.tokenLogins&&(this.message_success=this.messageNotif),this.getBarangByWareHouse(this.current_page,{},!1))}}},d=c,h=n(8),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-wrap mt-4"},[e("div",{class:"".concat(t.$nuxt.showSidebar?"w-full px-6 mb-12":"max-w-full")},[e("cards-card-table",{attrs:{color:"light",title:"BARANG BY WAREHOUSE",types:"barang-by-warehouse",queryType:"DATA_BARANG",queryMiddle:"barang-by-warehouse",orderBy:t.orderBy,parentRoute:t.stringRoute,typeRoute:t.typeRoute,headers:t.headers,columns:t.items,loading:t.loading,success:t.success,messageAlert:t.message_success},on:{"filter-data":t.handleFilterKategoriBarang,"close-alert":t.closeSuccessAlert,"deleted-data":t.deleteBarang,"sort-data":t.handleSortData}}),t._v(" "),e("div",{staticClass:"mt-6 -mb-2"},[e("div",{staticClass:"flex justify-center items-center"},[e("molecules-pagination",{attrs:{links:t.links,paging:t.paging},on:{"fetch-data":t.getBarangByWareHouse}})],1)])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardTable:n(672).default,MoleculesPagination:n(641).default})}}]);