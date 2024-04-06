(window.webpackJsonp=window.webpackJsonp||[]).push([[213,127],{641:function(e,t,n){"use strict";n.r(t);var l={props:["links","paging","category"],data:function(){return{laquo:"<i class='fa-solid fa-chevron-left'></i>",raquo:"<i class='fa-solid fa-chevron-right'></i>",keywords:this.$route.query.keywords}},methods:{fetchAllData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.keywords,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.category_id;this.$emit("fetch-data",e,t,n,l)}}},o=l,r=n(8),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("nav",{attrs:{"aria-label":"Page navigation example z-0"}},[t("ul",{staticClass:"flex flex-wrap list-style-none"},e._l(e.links,(function(link,n){return t("div",{key:n},["&laquo; Previous"===link.label?t("li",{staticClass:"page-item"},[t("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  ".concat(e.paging.current>1?"cursor-pointer text-white bg-blueGray-800":"pointer-events-none text-blueGray-800"," focus:shadow-none"),attrs:{tabindex:"-1","aria-disabled":"true"},domProps:{innerHTML:e._s(e.laquo)},on:{click:function(t){e.fetchAllData(e.paging.current-=1)}}})]):link.active?t("li",{staticClass:"page-item active"},[t("a",{class:"page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded hover:text-white hover:bg-blueGray-800 shadow-md focus:shadow-md ".concat(link.active?"pointer-events-none text-white bg-blueGray-800":"cursor-pointer text-blueGray-900"),on:{click:function(t){e.fetchAllData(parseInt(link.label))}}},[e._v(e._s(link.label))])]):"Next &raquo;"===link.label?t("li",{class:"page-item ".concat(e.paging.current===e.paging.last?"disabled":"")},[t("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ".concat(e.paging.current===e.paging.last?"pointer-events-none text-blueGray-800":"cursor-pointer text-white bg-blueGray-800"),domProps:{innerHTML:e._s(e.raquo)},on:{click:function(t){e.fetchAllData(e.paging.current+=1)}}})]):t("li",{staticClass:"page-item"},[t("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-blueGray-900 font-semibold hover:text-blueGray-700 hover:bg-blueGray-800 focus:shadow-none ".concat(link.active?"pointer-events-none":"cursor-pointer"),on:{click:function(t){e.fetchAllData(parseInt(link.label))}}},[e._v(e._s(link.label))])])])})),0)])}),[],!1,null,null,null);t.default=component.exports},822:function(e,t,n){"use strict";n.r(t);var l=n(15),o=n(149),r=(n(62),n(37),n(36),n(311),n(14),[{id:11,title:"tanggal"},{id:1,title:"kode"},{id:2,title:"jenis pemasukan"},{id:7,title:"kode kas"},{id:9,title:"jumlah"},{id:8,title:"operator"}]),c=n(637),d={name:"pemasukan",layout:"admin",data:function(){return{current:this.$route.query.current,routePath:this.$route.path,stringRoute:null,typeRoute:null,loading:null,options:"",success:null,message_success:"",headers:Object(o.a)(r),api_url:"https://sirmuh.api.dksindo.com/api/v1",items:[],links:[],paging:{current:null,from:null,last:null,per_page:null,total:null}}},created:function(){this.checkNewData()},mounted:function(){this.getDataPemasukan(1,{view_all:!1},!0),this.checkUserLogin(),this.generatePath()},methods:{generatePath:function(){var e=this.routePath.split("/"),t=e[2],n=e[3];this.stringRoute=t,this.typeRoute=n},handleFilterSupplier:function(param,e){"pemasukan"===e&&(param.jenis?this.$router.push({path:"/dashboard/backoffice/pemasukan",query:{jenis:param.jenis}}):this.$router.push("/dashboard/backoffice/pemasukan"),this.getDataPemasukan(1,param,!1))},getDataPemasukan:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,param=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;this.loading=n,this.$nuxt.globalLoadingMessage="Proses menyiapkan data pemasukan ...";var o=this.$route.query.jenis,r="".concat(this.api_url,"/data-pemasukan?page=").concat(t,"&view_all=").concat(void 0===param.view_all||param.view_all).concat(param.date?"&date_transaction="+param.date:"").concat(param.jenis?"&jenis="+param.jenis:o?"&jenis="+o:"");Object(c.b)({api_url:r,token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){var t,n,o,r,c,d,h=[];null!=data&&data.success&&(data.data.map((function(e){var t=Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)({id:null==e?void 0:e.id,tanggal:null==e?void 0:e.tanggal,kode:null==e?void 0:e.kode,jenispelanggan:null==e?void 0:e.jenis_pemasukan_nama},"tanggal",null==e?void 0:e.tanggal),"kode_kas",null==e?void 0:e.kode_kas),"nama_kas",null==e?void 0:e.nama_kas),"jumlah",null==e?void 0:e.jumlah),"operator",null==e?void 0:e.operator),"deleted_at",null==e?void 0:e.deleted_at);h.push(t)})),e.items=[].concat(h),e.links=null==data||null===(t=data.meta)||void 0===t?void 0:t.links,e.paging.current=null==data||null===(n=data.meta)||void 0===n?void 0:n.current_page,e.paging.from=null==data||null===(o=data.meta)||void 0===o?void 0:o.from,e.paging.last=null==data||null===(r=data.meta)||void 0===r?void 0:r.last_page,e.paging.per_page=null==data||null===(c=data.meta)||void 0===c?void 0:c.per_page,e.paging.total=null==data||null===(d=data.meta)||void 0===d?void 0:d.total,setTimeout((function(){e.loading=!1}),1500))})).catch((function(e){return console.log(e)}))},deletePemasukan:function(e){var t=this;this.loading=!0,this.options="delete-pemasukan",Object(c.a)({api_url:"".concat(this.api_url,"/data-pemasukan/").concat(e),token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){data.success&&(t.message_success=data.message,t.success=!0,t.scrollToTop(),setTimeout((function(){t.loading=!1,t.options=""}),1500))})).catch((function(e){return console.log(e)}))},closeSuccessAlert:function(){this.success=!1,this.message=""}},watch:{notifs:function(){this.$_.size(this.$nuxt.notifs)>0&&this.$nuxt.notifs.find((function(e){return"pemasukan"===e.routes}))&&this.getDataPemasukan(this.paging.current,{},!1)}}},h=d,m=n(8),component=Object(m.a)(h,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-wrap mt-4"},[t("div",{class:"".concat(e.$nuxt.showSidebar?"w-full mb-12 px-6":"max-w-full")},[t("cards-card-table",{attrs:{color:"light",title:"DATA PEMASUKAN",types:"pemasukan",queryType:"DATA_PEMASUKAN",queryMiddle:"pemasukan",parentRoute:"backoffice",typeRoute:e.typeRoute,headers:e.headers,columns:e.items,loading:e.loading,success:e.success,messageAlert:e.message_success},on:{"filter-data":e.handleFilterSupplier,"close-alert":e.closeSuccessAlert,"deleted-data":e.deletePemasukan}}),e._v(" "),t("div",{staticClass:"mt-6 -mb-2"},[t("div",{staticClass:"flex justify-center items-center"},[t("molecules-pagination",{attrs:{links:e.links,paging:e.paging},on:{"fetch-data":e.getDataPemasukan}})],1)])],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CardsCardTable:n(642).default,MoleculesPagination:n(641).default})}}]);