(window.webpackJsonp=window.webpackJsonp||[]).push([[232,127],{641:function(t,e,n){"use strict";n.r(e);var l={props:["links","paging","category"],data:function(){return{laquo:"<i class='fa-solid fa-chevron-left'></i>",raquo:"<i class='fa-solid fa-chevron-right'></i>",keywords:this.$route.query.keywords}},methods:{fetchAllData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.keywords,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.category_id;this.$emit("fetch-data",t,e,n,l)}}},o=l,r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("nav",{attrs:{"aria-label":"Page navigation example z-0"}},[e("ul",{staticClass:"flex flex-wrap list-style-none"},t._l(t.links,(function(link,n){return e("div",{key:n},["&laquo; Previous"===link.label?e("li",{staticClass:"page-item"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  ".concat(t.paging.current>1?"cursor-pointer text-white bg-blueGray-800":"pointer-events-none text-blueGray-800"," focus:shadow-none"),attrs:{tabindex:"-1","aria-disabled":"true"},domProps:{innerHTML:t._s(t.laquo)},on:{click:function(e){t.fetchAllData(t.paging.current-=1)}}})]):link.active?e("li",{staticClass:"page-item active"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded hover:text-white hover:bg-blueGray-800 shadow-md focus:shadow-md ".concat(link.active?"pointer-events-none text-white bg-blueGray-800":"cursor-pointer text-blueGray-900"),on:{click:function(e){t.fetchAllData(parseInt(link.label))}}},[t._v(t._s(link.label))])]):"Next &raquo;"===link.label?e("li",{class:"page-item ".concat(t.paging.current===t.paging.last?"disabled":"")},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ".concat(t.paging.current===t.paging.last?"pointer-events-none text-blueGray-800":"cursor-pointer text-white bg-blueGray-800"),domProps:{innerHTML:t._s(t.raquo)},on:{click:function(e){t.fetchAllData(t.paging.current+=1)}}})]):e("li",{staticClass:"page-item"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-blueGray-900 font-semibold hover:text-blueGray-700 hover:bg-blueGray-800 focus:shadow-none ".concat(link.active?"pointer-events-none":"cursor-pointer"),on:{click:function(e){t.fetchAllData(parseInt(link.label))}}},[t._v(t._s(link.label))])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},825:function(t,e,n){"use strict";n.r(e);var l=n(149),o=(n(62),n(37),n(36),[{id:1,title:"tanggal"},{id:2,title:"no faktur"},{id:3,title:"keterangan"},{id:4,title:"penjualan"},{id:5,title:"harga beli"},{id:7,title:"laba rugi"},{id:8,title:"operator"},{id:9,title:"pelanggan"}]),r=n(637),c={name:"laporan-laba-rugi",layout:"admin",data:function(){return{current:this.$route.query.current,loading:null,options:"",success:null,message_success:"",headers:Object(l.a)(o),api_url:"https://sirmuh.api.dksindo.com/api/v1",items:[],links:[],showModalLaporanLabaRugi:"",paging:{current:null,from:null,last:null,per_page:null,total:null}}},created:function(){this.checkNewData()},mounted:function(){this.getDataLabaRugi(),this.checkUserLogin()},methods:{handleFilterLabaRugi:function(param,t){"data-laba-rugi"===t&&(param.pelanggan?this.$router.push({path:"/dashboard/laporan/laba-rugi",query:{pelanggan:param.pelanggan}}):this.$router.push("/dashboard/laporan/laba-rugi"),this.getDataLabaRugi(1,param,!1))},getDataLabaRugi:function(){var t,e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,param=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=arguments.length>2?arguments[2]:void 0;this.$_.size(this.$nuxt.notifs)>0?(null===(t=this.$nuxt.notifs[0])||void 0===t||null===(t=t.user)||void 0===t?void 0:t.email)===this.$nuxt.userData.email?this.loading=!0:this.loading=!1:this.loading=l||!0;this.$nuxt.globalLoadingMessage="Proses menyiapkan data laba rugi ...";var o=this.$route.query.pelanggan,c="".concat(this.api_url,"/data-laba-rugi?page=").concat(n,"&view_all=").concat(param.view_all).concat(param.date?"&date_transaction="+param.date:"").concat(param.pelanggan?"&pelanggan="+param.pelanggan:o?"&pelanggan="+o:"").concat(param.keyword?"&keywords="+param.keyword:"");Object(r.b)({api_url:c,token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){var t,n,l,o,r,c,d,h=[];null!=data&&data.success&&(null==data||null===(t=data.data)||void 0===t||t.map((function(t){var e={id:null==t?void 0:t.id,tanggal:null==t?void 0:t.tanggal,kode:null==t?void 0:t.kode,kode_barang:null==t?void 0:t.kode_barang,nama_barang:null==t?void 0:t.nama_barang,h_jual:null==t?void 0:t.harga_toko,penjualan:null==t?void 0:t.penjualan,hpp:null==t?void 0:t.hpp_barang,diskon:null==t?void 0:t.diskon,labarugi:null==t?void 0:t.labarugi,operator:null==t?void 0:t.operator,pelanggan:null==t?void 0:t.pelanggan,nama_pelanggan:null==t?void 0:t.nama_pelanggan,keterangan:null==t?void 0:t.keterangan};h.push(e)})),e.items=[].concat(h),e.links=null==data||null===(n=data.meta)||void 0===n?void 0:n.links,e.paging.current=null==data||null===(l=data.meta)||void 0===l?void 0:l.current_page,e.paging.from=null==data||null===(o=data.meta)||void 0===o?void 0:o.from,e.paging.last=null==data||null===(r=data.meta)||void 0===r?void 0:r.last_page,e.paging.per_page=null==data||null===(c=data.meta)||void 0===c?void 0:c.per_page,e.paging.total=null==data||null===(d=data.meta)||void 0===d?void 0:d.total,setTimeout((function(){e.loading=!1}),1500))})).catch((function(t){return console.log(t)}))},deletePelanggan:function(t){var e=this;this.loading=!0,this.options="delete-pemasukan",Object(r.a)({api_url:"".concat(this.api_url,"/laporan-pembelian-barang/").concat(t),token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){data.success&&(e.message_success=data.message,e.success=!0,e.scrollToTop(),setTimeout((function(){e.loading=!1,e.options=""}),1500))})).catch((function(t){return console.log(t)}))},closeSuccessAlert:function(){this.success=!1,this.message=""},downloadData:function(t){t&&(this.showModalLaporanPeriode=!0)}},watch:{notifs:function(){this.$_.size(this.$nuxt.notifs)>0&&"penjualan-toko"===this.$nuxt.notifs[0].routes&&this.getDataLabaRugi(this.paging.current,{},!1)}}},d=c,h=n(8),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-wrap mt-4"},[e("div",{class:"".concat(t.$nuxt.showSidebar?"w-full mb-12 px-12":"max-w-full")},[e("cards-card-table",{attrs:{color:"light",title:"LAPORAN LABA RUGI",types:"data-laba-rugi",queryType:"DATA_LABA_RUGI",queryMiddle:"data-laba-rugi",headers:t.headers,columns:t.items,loading:t.loading,success:t.success,messageAlert:t.message_success},on:{"filter-data":t.handleFilterLabaRugi,"close-alert":t.closeSuccessAlert,"deleted-data":t.deletePelanggan,"download-data":t.downloadData}}),t._v(" "),e("div",{staticClass:"mt-6 -mb-2"},[e("div",{staticClass:"flex justify-center items-center"},[e("molecules-pagination",{attrs:{links:t.links,paging:t.paging},on:{"fetch-data":t.getDataLabaRugi}})],1)])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardTable:n(642).default,MoleculesPagination:n(641).default})}}]);