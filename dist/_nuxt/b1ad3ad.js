(window.webpackJsonp=window.webpackJsonp||[]).push([[332,127],{641:function(t,n,e){"use strict";e.r(n);var l={props:["links","paging","category"],data:function(){return{laquo:"<i class='fa-solid fa-chevron-left'></i>",raquo:"<i class='fa-solid fa-chevron-right'></i>",keywords:this.$route.query.keywords}},methods:{fetchAllData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.keywords,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.category_id;this.$emit("fetch-data",t,n,e,l)}}},o=l,r=e(8),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("nav",{attrs:{"aria-label":"Page navigation example z-0"}},[n("ul",{staticClass:"flex flex-wrap list-style-none"},t._l(t.links,(function(link,e){return n("div",{key:e},["&laquo; Previous"===link.label?n("li",{staticClass:"page-item"},[n("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  ".concat(t.paging.current>1?"cursor-pointer text-white bg-blueGray-800":"pointer-events-none text-blueGray-800"," focus:shadow-none"),attrs:{tabindex:"-1","aria-disabled":"true"},domProps:{innerHTML:t._s(t.laquo)},on:{click:function(n){t.fetchAllData(t.paging.current-=1)}}})]):link.active?n("li",{staticClass:"page-item active"},[n("a",{class:"page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded hover:text-white hover:bg-blueGray-800 shadow-md focus:shadow-md ".concat(link.active?"pointer-events-none text-white bg-blueGray-800":"cursor-pointer text-blueGray-900"),on:{click:function(n){t.fetchAllData(parseInt(link.label))}}},[t._v(t._s(link.label))])]):"Next &raquo;"===link.label?n("li",{class:"page-item ".concat(t.paging.current===t.paging.last?"disabled":"")},[n("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ".concat(t.paging.current===t.paging.last?"pointer-events-none text-blueGray-800":"cursor-pointer text-white bg-blueGray-800"),domProps:{innerHTML:t._s(t.raquo)},on:{click:function(n){t.fetchAllData(t.paging.current+=1)}}})]):n("li",{staticClass:"page-item"},[n("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-blueGray-900 font-semibold hover:text-blueGray-700 hover:bg-blueGray-800 focus:shadow-none ".concat(link.active?"pointer-events-none":"cursor-pointer"),on:{click:function(n){t.fetchAllData(parseInt(link.label))}}},[t._v(t._s(link.label))])])])})),0)])}),[],!1,null,null,null);n.default=component.exports},686:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var l=[{id:1,title:"tanggal"},{id:2,title:"no faktur"},{id:3,title:"lunas"},{id:16,title:"status"},{id:13,title:"pelanggan"},{id:7,title:"jumlah"},{id:14,title:"biaya kirim"},{id:18,title:"dikirim"},{id:8,title:"kode kas"},{id:12,title:"operator"}]},907:function(t,n,e){"use strict";e.r(n);var l=e(149),o=(e(310),e(62),e(15),e(37),e(36),e(195),e(686)),r=e(637),c={name:"penjualan-toko",layout:"admin",data:function(){return{current:this.$route.query.current,routePath:this.$route.path,stringRoute:null,typeRoute:null,loading:null,options:"",success:null,message_success:"",headers:Object(l.a)(o.a),api_url:"https://sirmuh.api.dksindo.com/api/v1",items:[],links:[],paging:{current:null,from:null,last:null,per_page:null,total:null}}},created:function(){this.checkNewData()},mounted:function(){this.getPenjualanToko(this.current?Number(this.current):1,{view_all:!1},!0),this.generatePath()},methods:{generatePath:function(){var t=this.routePath.split("/"),n=t[2],e=t[3];this.stringRoute=n,this.typeRoute=e},handleFilterBarang:function(param,t){"penjualan-toko"===t&&(param.pelanggan?this.$router.push({path:"/dashboard/transaksi/jual/penjualan-toko",query:{pelanggan:param.pelanggan}}):this.$router.push("/dashboard/transaksi/jual/penjualan-toko"),this.getPenjualanToko(1,param,!0))},getPenjualanToko:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,param=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2?arguments[2]:void 0;this.loading=e,this.$nuxt.globalLoadingMessage="Proses menyiapkan data penjualan toko ...";var l=this.$route.query.pelanggan,o="".concat(this.api_url,"/data-penjualan-toko?page=").concat(n,"&view_all=").concat(void 0!==param.view_all&&param.view_all).concat(param.date?"&date_transaction="+param.date:"").concat(param.pelanggan?"&pelanggan="+param.pelanggan:l?"&pelanggan="+l:"").concat(param.keyword?"&keywords="+param.keyword:"");Object(r.b)({api_url:o,token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){var n,e,l,o,r,c,d,h=[];null!=data&&data.success&&(null==data||null===(n=data.data)||void 0===n||n.map((function(t){var n={id:null==t?void 0:t.id,kode:null==t?void 0:t.kode,tanggal:null==t?void 0:t.tanggal,lunas:null==t?void 0:t.lunas,jumlah:null==t?void 0:t.jumlah,dikirim:null==t?void 0:t.dikirim,bayar:null==t?void 0:t.bayar,kode_kas:null==t?void 0:t.kode_kas,nama_kas:null==t?void 0:t.nama_kas,operator:null==t?void 0:t.operator,pelanggan:null==t?void 0:t.pelanggan,nama_pelanggan:null==t?void 0:t.nama_pelanggan,receive:null==t?void 0:t.receive,status:null==t?void 0:t.status,biayakirim:null==t?void 0:t.biayakirim};h.push(n)})),t.items=[].concat(h),t.links=null==data||null===(e=data.meta)||void 0===e?void 0:e.links,t.paging.current=null==data||null===(l=data.meta)||void 0===l?void 0:l.current_page,t.paging.from=null==data||null===(o=data.meta)||void 0===o?void 0:o.from,t.paging.last=null==data||null===(r=data.meta)||void 0===r?void 0:r.last_page,t.paging.per_page=null==data||null===(c=data.meta)||void 0===c?void 0:c.per_page,t.paging.total=null==data||null===(d=data.meta)||void 0===d?void 0:d.total)})).finally((function(){setTimeout((function(){t.loading=!1,t.$nuxt.globalLoadingMessage=""}),500)})).catch((function(n){t.loading=!1,console.log(n)}))},deleteBarang:function(t){var n=this;this.loading=!0,this.options="delete-penjualan-toko",Object(r.a)({api_url:"".concat(this.api_url,"/data-penjualan-toko/").concat(t),token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){data.success&&(n.message_success=data.message,n.success=!0,n.scrollToTop(),setTimeout((function(){n.loading=!1,n.options=""}),1500))})).catch((function(t){return console.log(t)}))},closeSuccessAlert:function(){this.success=!1,this.message=""}},watch:{notifs:function(){this.$_.size(this.$nuxt.notifs)>0&&(this.$nuxt.notifs.find((function(t){return"penjualan-toko"===t.routes}))||this.$nuxt.notifs.find((function(t){return"penjualan"===t.routes}))||this.$nuxt.notifs.find((function(t){return"piutang-pelanggan"===t.routes}))||this.$nuxt.notifs.find((function(t){return"data-barang"===t.routes})))&&this.getPenjualanToko(this.paging.current?this.paging.current:1)}}},d=c,h=e(8),component=Object(h.a)(d,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"flex flex-wrap mt-4"},[n("div",{class:"".concat(t.$nuxt.showSidebar?"w-full mb-12 px-8":"max-w-full")},[n("cards-card-table",{attrs:{color:"light",title:"PENJUALAN TOKO",types:"penjualan-toko",queryType:"PENJUALAN_TOKO",queryMiddle:"penjualan-toko",parentRoute:t.stringRoute,typeRoute:t.typeRoute,headers:t.headers,columns:t.items,loading:t.loading,success:t.success,paging:t.paging,messageAlert:t.message_success},on:{"filter-data":t.handleFilterBarang,"close-alert":t.closeSuccessAlert,"deleted-data":t.deleteBarang,"rebuild-data":t.getPenjualanToko}}),t._v(" "),n("div",{staticClass:"mt-6 -mb-2"},[n("div",{staticClass:"flex justify-center items-center"},[n("molecules-pagination",{attrs:{links:t.links,paging:t.paging},on:{"fetch-data":t.getPenjualanToko}})],1)])],1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{CardsCardTable:e(642).default,MoleculesPagination:e(641).default})}}]);