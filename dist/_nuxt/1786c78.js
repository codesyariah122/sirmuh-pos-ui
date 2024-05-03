(window.webpackJsonp=window.webpackJsonp||[]).push([[310,132],{641:function(t,e,n){"use strict";n.r(e);var l={props:["links","paging","category"],data:function(){return{laquo:"<i class='fa-solid fa-chevron-left'></i>",raquo:"<i class='fa-solid fa-chevron-right'></i>",keywords:this.$route.query.keywords}},methods:{fetchAllData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.keywords,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.category_id;this.$emit("fetch-data",t,e,n,l)}}},o=l,r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("nav",{attrs:{"aria-label":"Page navigation example z-0"}},[e("ul",{staticClass:"flex flex-wrap list-style-none"},t._l(t.links,(function(link,n){return e("div",{key:n},["&laquo; Previous"===link.label?e("li",{staticClass:"page-item"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  ".concat(t.paging.current>1?"cursor-pointer text-white bg-blueGray-800":"pointer-events-none text-blueGray-800"," focus:shadow-none"),attrs:{tabindex:"-1","aria-disabled":"true"},domProps:{innerHTML:t._s(t.laquo)},on:{click:function(e){t.fetchAllData(t.paging.current-=1)}}})]):link.active?e("li",{staticClass:"page-item active"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded hover:text-white hover:bg-blueGray-800 shadow-md focus:shadow-md ".concat(link.active?"pointer-events-none text-white bg-blueGray-800":"cursor-pointer text-blueGray-900"),on:{click:function(e){t.fetchAllData(parseInt(link.label))}}},[t._v(t._s(link.label))])]):"Next &raquo;"===link.label?e("li",{class:"page-item ".concat(t.paging.current===t.paging.last?"disabled":"")},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ".concat(t.paging.current===t.paging.last?"pointer-events-none text-blueGray-800":"cursor-pointer text-white bg-blueGray-800"),domProps:{innerHTML:t._s(t.raquo)},on:{click:function(e){t.fetchAllData(t.paging.current+=1)}}})]):e("li",{staticClass:"page-item"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-blueGray-900 font-semibold hover:text-blueGray-700 hover:bg-blueGray-800 focus:shadow-none ".concat(link.active?"pointer-events-none":"cursor-pointer"),on:{click:function(e){t.fetchAllData(parseInt(link.label))}}},[t._v(t._s(link.label))])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},832:function(t,e,n){"use strict";n.r(e);var l=n(150),o=(n(310),n(62),n(15),n(37),n(36),n(115),[{id:1,title:"tanggal transaksi"},{id:2,title:"kode hutang"},{id:7,title:"supplier"},{id:17,title:"lunas"},{id:3,title:"jumlah hutang"},{id:6,title:"operator"}]),r=n(637),c={name:"bayar-hutang",layout:"admin",data:function(){return{current:this.$route.query.current,routePath:this.$route.path,stringRoute:null,typeRoute:null,loading:null,options:"",success:null,message_success:"",headers:Object(l.a)(o),api_url:"https://sirmuh.api.dksindo.com/api/v1",items:[],links:[],paging:{current:null,from:null,last:null,per_page:null,total:null}}},created:function(){this.$nuxt.checkNewData()},mounted:function(){this.getLaporanHutang(this.current?Number(this.current):1,{view_all:!0},!0),this.generatePath()},methods:{generatePath:function(){var t=this.routePath.split("/"),e=t[2],n=t[3];this.stringRoute=e,this.typeRoute=n},handleFilterData:function(param,t){"bayar-hutang"===t&&(param.supplier?this.$router.push({path:"/dashboard/transaksi/bayar-hutang",query:{supplier:param.supplier}}):this.$router.push("/dashboard/transaksi/bayar-hutang"),this.getLaporanHutang(1,param,!0))},getLaporanHutang:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,param=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;this.loading=n,this.$nuxt.globalLoadingMessage="Proses menyiapkan data hutang  ...";var l=this.$route.query.supplier,o="".concat(this.api_url,"/data-hutang?page=").concat(e,"&view_all=").concat(void 0===param.view_all||param.view_all).concat(param.date?"&date_transaction="+param.date:"").concat(param.supplier?"&supplier="+param.supplier:l?"&supplier="+l:"");Object(r.b)({api_url:o,token:this.token.token,api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}).then((function(data){var e,n,l,o,r,c,d,h=[];null!=data&&data.success&&(null==data||null===(e=data.data)||void 0===e||e.map((function(t){var e={id:null==t?void 0:t.id,kode:null==t?void 0:t.kode,tanggal:null==t?void 0:t.tanggal_pembelian,supplier:null==t?void 0:t.supplier,jumlah:null==t?void 0:t.jumlah_hutang,sisa:"True"==(null==t?void 0:t.po)?(null==t?void 0:t.jumlah)-(null==t?void 0:t.bayar):null==t?void 0:t.jumlah,tempo:null==t?void 0:t.jatuh_tempo,operator:null==t?void 0:t.operator,lunas:null==t?void 0:t.lunas,visa:null==t?void 0:t.visa,nama_supplier:null==t?void 0:t.nama_supplier};h.push(e)})),t.items=[].concat(h),t.links=null==data||null===(n=data.meta)||void 0===n?void 0:n.links,t.paging.current=null==data||null===(l=data.meta)||void 0===l?void 0:l.current_page,t.paging.from=null==data||null===(o=data.meta)||void 0===o?void 0:o.from,t.paging.last=null==data||null===(r=data.meta)||void 0===r?void 0:r.last_page,t.paging.per_page=null==data||null===(c=data.meta)||void 0===c?void 0:c.per_page,t.paging.total=null==data||null===(d=data.meta)||void 0===d?void 0:d.total)})).finally((function(){setTimeout((function(){t.loading=!1,t.$nuxt.globalLoadingMessage=""}),1500)})).catch((function(t){console.log("ERROR ANJIGN"),console.log(t)}))},deleteBarang:function(t){var e=this;this.loading=!0,this.options="delete-barang",Object(r.a)({api_url:"".concat(this.api_url,"/data-barang/").concat(t),token:this.token.token,api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}).then((function(data){console.log(data),data.success&&(e.message_success=data.message,e.success=!0,e.scrollToTop(),setTimeout((function(){e.loading=!1,e.options=""}),1500))})).catch((function(t){return console.log(t)}))},closeSuccessAlert:function(){this.success=!1,this.message=""}},watch:{notifs:function(){this.$_.size(this.notifs)>0&&(console.log(this.notifs[0]),(this.$nuxt.notifs.find((function(t){return"data-barang"===t.routes}))||this.$nuxt.notifs.find((function(t){return"bayar-hutang"===t.routes}))||this.$nuxt.notifs.find((function(t){return"pembelian-langsung"===t.routes}))||this.$nuxt.notifs.find((function(t){return"purchase-order"===t.routes})))&&this.getLaporanHutang(this.paging.current,{},!1))}}},d=c,h=n(8),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-wrap mt-4"},[e("div",{class:"".concat(t.$nuxt.showSidebar?"w-full px-6":"max-w-full")},[e("cards-card-table",{attrs:{color:"light",title:"BAYAR HUTANG",types:"bayar-hutang",queryType:"BAYAR_HUTANG",queryMiddle:"bayar-hutang",current:t.current,parentRoute:t.stringRoute,typeRoute:t.typeRoute,headers:t.headers,columns:t.items,loading:t.loading,success:t.success,paging:t.paging,messageAlert:t.message_success},on:{"filter-data":t.handleFilterData,"close-alert":t.closeSuccessAlert,"deleted-data":t.deleteBarang}}),t._v(" "),e("div",{staticClass:"mt-6 -mb-2"},[e("div",{staticClass:"flex justify-center items-center"},[e("molecules-pagination",{attrs:{links:t.links,paging:t.paging},on:{"fetch-data":t.getLaporanHutang}})],1)])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardTable:n(672).default,MoleculesPagination:n(641).default})}}]);