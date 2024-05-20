(window.webpackJsonp=window.webpackJsonp||[]).push([[233,134],{641:function(e,t,n){"use strict";n.r(t);var l={props:["links","paging","category"],data:function(){return{laquo:"<i class='fa-solid fa-chevron-left'></i>",raquo:"<i class='fa-solid fa-chevron-right'></i>",keywords:this.$route.query.keywords}},methods:{fetchAllData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.keywords,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.category_id;this.$emit("fetch-data",e,t,n,l)}}},o=l,r=n(8),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("nav",{attrs:{"aria-label":"Page navigation example z-0"}},[t("ul",{staticClass:"flex flex-wrap list-style-none"},e._l(e.links,(function(link,n){return t("div",{key:n},["&laquo; Previous"===link.label?t("li",{staticClass:"page-item"},[t("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  ".concat(e.paging.current>1?"cursor-pointer text-white bg-blueGray-800":"pointer-events-none text-blueGray-800"," focus:shadow-none"),attrs:{tabindex:"-1","aria-disabled":"true"},domProps:{innerHTML:e._s(e.laquo)},on:{click:function(t){e.fetchAllData(e.paging.current-=1)}}})]):link.active?t("li",{staticClass:"page-item active"},[t("a",{class:"page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded hover:text-white hover:bg-blueGray-800 shadow-md focus:shadow-md ".concat(link.active?"pointer-events-none text-white bg-blueGray-800":"cursor-pointer text-blueGray-900"),on:{click:function(t){e.fetchAllData(parseInt(link.label))}}},[e._v(e._s(link.label))])]):"Next &raquo;"===link.label?t("li",{class:"page-item ".concat(e.paging.current===e.paging.last?"disabled":"")},[t("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ".concat(e.paging.current===e.paging.last?"pointer-events-none text-blueGray-800":"cursor-pointer text-white bg-blueGray-800"),domProps:{innerHTML:e._s(e.raquo)},on:{click:function(t){e.fetchAllData(e.paging.current+=1)}}})]):t("li",{staticClass:"page-item"},[t("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-blueGray-900 font-semibold hover:text-blueGray-700 hover:bg-blueGray-800 focus:shadow-none ".concat(link.active?"pointer-events-none":"cursor-pointer"),on:{click:function(t){e.fetchAllData(parseInt(link.label))}}},[e._v(e._s(link.label))])])])})),0)])}),[],!1,null,null,null);t.default=component.exports},835:function(e,t,n){"use strict";n.r(t);var l=n(150),o=(n(311),n(53),n(37),n(36),n(115),n(15),[{id:1,title:"tanggal"},{id:2,title:"kode"},{id:3,title:"jenis biaya"},{id:4,title:"keterangan"},{id:5,title:"kas"},{id:6,title:"jumlah"},{id:7,title:"operator"}]),r=n(637),c={name:"pengeluaran",layout:"admin",data:function(){return{current:this.$route.query.current,routePath:this.$route.path,stringRoute:null,typeRoute:null,loading:null,options:"",success:null,message_success:"",headers:Object(l.a)(o),api_url:"https://sirmuh.api.dksindo.com/api/v1",items:[],links:[],paging:{current:null,from:null,last:null,per_page:null,total:null}}},created:function(){this.checkNewData()},mounted:function(){this.getDataPengeluaran(this.current?Number(this.current):1,{view_all:!0},!0),this.generatePath()},methods:{handleFilterPengeluaran:function(param,e){"pengeluaran"===e&&(console.log(param),param.biaya?this.$router.push({path:"/dashboard/backoffice/pengeluaran",query:{biaya:param.biaya}}):this.$router.push("/dashboard/backoffice/pengeluaran"),this.getDataPengeluaran(1,param,!1))},generatePath:function(){var e=this.routePath.split("/"),t=e[2],n=e[3];this.stringRoute=t,this.typeRoute=n},getDataPengeluaran:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,param=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;this.loading=n,this.$nuxt.globalLoadingMessage="Proses menyiapkan data pengeluaran ...";var l=this.$route.query.biaya,o="".concat(this.api_url,"/data-pengeluaran?page=").concat(t,"&view_all=").concat(void 0===param.view_all||param.view_all).concat(param.date?"&date_transaction="+param.date:"").concat(param.biaya?"&biaya="+param.biaya:l?"&biaya="+l:"");Object(r.b)({api_url:o,token:this.token.token,api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}).then((function(data){var t,n,l,o,r,c,d=[];null!=data&&data.success&&(data.data.map((function(e){var t={id:null==e?void 0:e.id,kode:null==e?void 0:e.kode,tanggal:null==e?void 0:e.tanggal,kd_biaya:null==e?void 0:e.kd_biaya,nama_biaya:null==e?void 0:e.biaya_nama,keterangan:null==e?void 0:e.keterangan,kode_kas:null==e?void 0:e.kode_kas,nama_kas:null==e?void 0:e.nama_kas,jumlah:null==e?void 0:e.jumlah,operator:null==e?void 0:e.operator,pr:null==e?void 0:e.pr,deleted_at:null==e?void 0:e.deleted_at};d.push(t)})),e.items=[].concat(d),e.links=null==data||null===(t=data.meta)||void 0===t?void 0:t.links,e.paging.current=null==data||null===(n=data.meta)||void 0===n?void 0:n.current_page,e.paging.from=null==data||null===(l=data.meta)||void 0===l?void 0:l.from,e.paging.last=null==data||null===(o=data.meta)||void 0===o?void 0:o.last_page,e.paging.per_page=null==data||null===(r=data.meta)||void 0===r?void 0:r.per_page,e.paging.total=null==data||null===(c=data.meta)||void 0===c?void 0:c.total,setTimeout((function(){e.loading=!1}),1500))})).catch((function(e){return console.log(e)}))},deleteBarang:function(e){var t=this;this.loading=!0,this.options="delete-pengeluaran",Object(r.a)({api_url:"".concat(this.api_url,"/data-pengeluaran/").concat(e),token:this.token.token,api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}).then((function(data){data.success&&(t.message_success=data.message,t.success=!0,t.scrollToTop(),setTimeout((function(){t.loading=!1,t.options=""}),1500))})).catch((function(e){return console.log(e)}))},closeSuccessAlert:function(){this.success=!1,this.message=""}},watch:{notifs:function(){this.$_.size(this.$nuxt.notifs)>0&&(this.$nuxt.notifs.find((function(e){return"pengeluaran"===e.routes}))||this.$nuxt.notifs.find((function(e){return"purchase-order"===e.routes})))&&this.getDataPengeluaran(this.paging.current,{},!1)}}},d=c,h=n(8),component=Object(h.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-wrap mt-4"},[t("div",{class:"".concat(e.$nuxt.showSidebar?"w-full mb-12 px-6":"max-w-full")},[t("cards-card-table",{attrs:{color:"light",title:"DATA PENGELUARAN",types:"pengeluaran",queryType:"DATA_PENGELUARAN",queryMiddle:"pengeluaran",parentRoute:"backoffice",typeRoute:e.typeRoute,headers:e.headers,columns:e.items,loading:e.loading,success:e.success,paging:e.paging,messageAlert:e.message_success},on:{"filter-data":e.handleFilterPengeluaran,"close-alert":e.closeSuccessAlert,"deleted-data":e.deleteBarang}}),e._v(" "),t("div",{staticClass:"mt-6 -mb-2"},[t("div",{staticClass:"flex justify-center items-center"},[t("molecules-pagination",{attrs:{links:e.links,paging:e.paging},on:{"fetch-data":e.getDataPengeluaran}})],1)])],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CardsCardTable:n(674).default,MoleculesPagination:n(641).default})}}]);