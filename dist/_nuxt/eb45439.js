(window.webpackJsonp=window.webpackJsonp||[]).push([[248,127],{641:function(t,e,n){"use strict";n.r(e);var l={props:["links","paging","category"],data:function(){return{laquo:"<i class='fa-solid fa-chevron-left'></i>",raquo:"<i class='fa-solid fa-chevron-right'></i>",keywords:this.$route.query.keywords}},methods:{fetchAllData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.keywords,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.category_id;this.$emit("fetch-data",t,e,n,l)}}},o=l,r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("nav",{attrs:{"aria-label":"Page navigation example z-0"}},[e("ul",{staticClass:"flex flex-wrap list-style-none"},t._l(t.links,(function(link,n){return e("div",{key:n},["&laquo; Previous"===link.label?e("li",{staticClass:"page-item"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  ".concat(t.paging.current>1?"cursor-pointer text-white bg-blueGray-800":"pointer-events-none text-blueGray-800"," focus:shadow-none"),attrs:{tabindex:"-1","aria-disabled":"true"},domProps:{innerHTML:t._s(t.laquo)},on:{click:function(e){t.fetchAllData(t.paging.current-=1)}}})]):link.active?e("li",{staticClass:"page-item active"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded hover:text-white hover:bg-blueGray-800 shadow-md focus:shadow-md ".concat(link.active?"pointer-events-none text-white bg-blueGray-800":"cursor-pointer text-blueGray-900"),on:{click:function(e){t.fetchAllData(parseInt(link.label))}}},[t._v(t._s(link.label))])]):"Next &raquo;"===link.label?e("li",{class:"page-item ".concat(t.paging.current===t.paging.last?"disabled":"")},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ".concat(t.paging.current===t.paging.last?"pointer-events-none text-blueGray-800":"cursor-pointer text-white bg-blueGray-800"),domProps:{innerHTML:t._s(t.raquo)},on:{click:function(e){t.fetchAllData(t.paging.current+=1)}}})]):e("li",{staticClass:"page-item"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-blueGray-900 font-semibold hover:text-blueGray-700 hover:bg-blueGray-800 focus:shadow-none ".concat(link.active?"pointer-events-none":"cursor-pointer"),on:{click:function(e){t.fetchAllData(parseInt(link.label))}}},[t._v(t._s(link.label))])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},673:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var l=[{id:1,title:"kode"},{id:2,title:"nama"},{id:5,title:"stok"},{id:25,title:"stok terakhir"},{id:10,title:"harga beli"},{id:11,title:"harga jual"},{id:13,title:"supplier"},{id:14,title:"barcode"},{id:15,title:"expired"}]},887:function(t,e,n){"use strict";n.r(e);var l=n(149),o=(n(309),n(62),n(37),n(36),n(673)),r=n(637),c={name:"data-laporan-stok-kategori",layout:"admin",data:function(){return{current:this.$route.query.current,loading:null,options:"",success:null,message_success:"",headers:Object(l.a)(o.a),api_url:"https://sirmuh.api.dksindo.com/api/v1",items:[],links:[],paging:{current:null,from:null,last:null,per_page:null,total:null}}},created:function(){this.checkNewData()},mounted:function(){this.getBarangData(this.current?Number(this.current):1,{})},methods:{handleFilterBarang:function(param,t){"data-laporan-stok-kategori"===t&&this.getBarangData(1,param)},getBarangData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,param=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$_.size(this.$nuxt.notifs)>0?this.$nuxt.notifs[0].user.email===this.$nuxt.userData.email?(console.log("Kesini loading bro"),this.loading=!0):this.loading=!1:this.loading=!0,Object(r.b)({api_url:"".concat(this.api_url,"/data-barang?page=").concat(e).concat(param.nama?"&keywords="+param.nama:param.kategori?"&kategori="+param.kategori:param.tgl_terakhir?"&tgl_terakhir="+param.tgl_terakhir:""),token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){var e,n,l,o,r,c,d,h=[];null!=data&&data.success&&(null==data||null===(e=data.data)||void 0===e||e.map((function(t){var e={id:null==t?void 0:t.id,kode:null==t?void 0:t.kode,nama:null==t?void 0:t.nama,photo:null==t?void 0:t.photo,kategori:null==t?void 0:t.kategori,satuanbeli:null==t?void 0:t.satuanbeli,satuan:null==t?void 0:t.satuan,hargabeli:null==t?void 0:t.hargabeli,isi:null==t?void 0:t.isi,stok:null==t?void 0:t.toko,hpp:null==t?void 0:t.hpp,harga_toko:null==t?void 0:t.harga_toko,diskon:null==t?void 0:t.diskon,supplier:null==t?void 0:t.supplier,barcode:null==t?void 0:t.kode_barcode,tgl_terakhir:null==t?void 0:t.tgl_terakhir,expired:"False"!==(null==t?void 0:t.ada_expired_date)?null==t?void 0:t.expired:null,suppliers:(null==t?void 0:t.suppliers)&&(null==t?void 0:t.suppliers)};h.push(e)})),t.items=[].concat(h),t.links=null==data||null===(n=data.meta)||void 0===n?void 0:n.links,t.paging.current=null==data||null===(l=data.meta)||void 0===l?void 0:l.current_page,t.paging.from=null==data||null===(o=data.meta)||void 0===o?void 0:o.from,t.paging.last=null==data||null===(r=data.meta)||void 0===r?void 0:r.last_page,t.paging.per_page=null==data||null===(c=data.meta)||void 0===c?void 0:c.per_page,t.paging.total=null==data||null===(d=data.meta)||void 0===d?void 0:d.total,setTimeout((function(){t.loading=!1}),1500))})).catch((function(t){return console.log(t)}))},deleteBarang:function(t){var e=this;this.loading=!0,this.options="delete-data-laporan-stok-kategori",Object(r.a)({api_url:"".concat(this.api_url,"/data-stok/").concat(t),token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){data.success&&(e.message_success=data.message,e.success=!0,e.scrollToTop(),setTimeout((function(){e.loading=!1,e.options=""}),1500))})).catch((function(t){return console.log(t)}))},closeSuccessAlert:function(){this.success=!1,this.message=""}},watch:{notifs:function(){this.$_.size(this.$nuxt.notifs)>0&&this.getBarangData(this.paging.current)}}},d=c,h=n(8),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-wrap mt-4"},[e("div",{class:"".concat(t.$nuxt.showSidebar?"w-full mb-12":"-ml-10 max-w-full")},[e("cards-card-table",{attrs:{color:"light",title:"DATA LAPORAN STOK",types:"data-barang",queryType:"DATA_LAPORAN_STOK",queryMiddle:"data-barang",headers:t.headers,columns:t.items,loading:t.loading,success:t.success,paging:t.paging,messageAlert:t.message_success},on:{"filter-data":t.handleFilterBarang,"close-alert":t.closeSuccessAlert,"deleted-data":t.deleteBarang}}),t._v(" "),e("div",{staticClass:"mt-6 -mb-2"},[e("div",{staticClass:"flex justify-center items-center"},[e("molecules-pagination",{attrs:{links:t.links,paging:t.paging},on:{"fetch-data":t.getBarangData}})],1)])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardTable:n(642).default,MoleculesPagination:n(641).default})}}]);