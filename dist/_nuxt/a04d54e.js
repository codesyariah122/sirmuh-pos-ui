(window.webpackJsonp=window.webpackJsonp||[]).push([[328,134],{641:function(e,t,n){"use strict";n.r(t);var l={props:["links","paging","category"],data:function(){return{laquo:"<i class='fa-solid fa-chevron-left'></i>",raquo:"<i class='fa-solid fa-chevron-right'></i>",keywords:this.$route.query.keywords}},methods:{fetchAllData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.keywords,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.category_id;this.$emit("fetch-data",e,t,n,l)}}},r=l,o=n(8),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("nav",{attrs:{"aria-label":"Page navigation example z-0"}},[t("ul",{staticClass:"flex flex-wrap list-style-none"},e._l(e.links,(function(link,n){return t("div",{key:n},["&laquo; Previous"===link.label?t("li",{staticClass:"page-item"},[t("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  ".concat(e.paging.current>1?"cursor-pointer text-white bg-blueGray-800":"pointer-events-none text-blueGray-800"," focus:shadow-none"),attrs:{tabindex:"-1","aria-disabled":"true"},domProps:{innerHTML:e._s(e.laquo)},on:{click:function(t){e.fetchAllData(e.paging.current-=1)}}})]):link.active?t("li",{staticClass:"page-item active"},[t("a",{class:"page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded hover:text-white hover:bg-blueGray-800 shadow-md focus:shadow-md ".concat(link.active?"pointer-events-none text-white bg-blueGray-800":"cursor-pointer text-blueGray-900"),on:{click:function(t){e.fetchAllData(parseInt(link.label))}}},[e._v(e._s(link.label))])]):"Next &raquo;"===link.label?t("li",{class:"page-item ".concat(e.paging.current===e.paging.last?"disabled":"")},[t("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ".concat(e.paging.current===e.paging.last?"pointer-events-none text-blueGray-800":"cursor-pointer text-white bg-blueGray-800"),domProps:{innerHTML:e._s(e.raquo)},on:{click:function(t){e.fetchAllData(e.paging.current+=1)}}})]):t("li",{staticClass:"page-item"},[t("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-blueGray-900 font-semibold hover:text-blueGray-700 hover:bg-blueGray-800 focus:shadow-none ".concat(link.active?"pointer-events-none":"cursor-pointer"),on:{click:function(t){e.fetchAllData(parseInt(link.label))}}},[e._v(e._s(link.label))])])])})),0)])}),[],!1,null,null,null);t.default=component.exports},706:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var l=[{id:1,title:"tanggal"},{id:2,title:"no faktur"},{id:7,title:"DP Awal"},{id:13,title:"supplier"},{id:8,title:"lunas"},{id:12,title:"operator"}]},918:function(e,t,n){"use strict";n.r(t);var l=n(150),r=(n(311),n(62),n(15),n(37),n(36),n(115),n(706)),o=n(637),c={name:"purchase-order",layout:"admin",data:function(){return{current:this.$route.query.current,routePath:this.$route.path,stringRoute:null,typeRoute:null,loading:null,options:"",success:null,message_success:"",headers:Object(l.a)(r.a),api_url:"https://sirmuh.api.dksindo.com/api/v1",items:[],links:[],paging:{current:null,from:null,last:null,per_page:null,total:null}}},created:function(){this.checkNewData()},mounted:function(){this.getPurchaseOrder(this.current?Number(this.current):1,{view_all:!1},!0),this.generatePath()},methods:{generatePath:function(){var e=this.routePath.split("/"),t=e[2],n=e[3];this.stringRoute=t,this.typeRoute=n},handleFilterBarang:function(param,e){"purchase-order"===e&&(param.supplier?this.$router.push({path:"/dashboard/transaksi/beli/purchase-order",query:{supplier:param.supplier}}):this.$router.push("/dashboard/transaksi/beli/purchase-order"),this.getPurchaseOrder(1,param,!0))},getPurchaseOrder:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,param=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;this.loading=n,this.$nuxt.globalLoadingMessage="Proses menyiapkan data purchase order ...";var l=this.$route.query.supplier,r="".concat(this.api_url,"/data-purchase-order?").concat(param.keyword?"keywords="+param.keyword+"&":"","page=").concat(t,"&view_all=").concat(this.$nuxt.viewAllPembelianPO).concat(param.date?"&date_transaction="+param.date:"").concat(param.supplier?"&supplier="+param.supplier:l?"&supplier="+l:"");Object(o.b)({api_url:r,token:this.token.token,api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}).then((function(data){var t,n,l,r,o,c,d,h=[];null!=data&&data.success&&(null==data||null===(t=data.data)||void 0===t||t.map((function(e){var t={id:null==e?void 0:e.id,tanggal:null==e?void 0:e.tanggal,kode:null==e?void 0:e.kode,kode_kas:null==e?void 0:e.kode_kas,kas_nama:null==e?void 0:e.kas_nama,jumlah:parseFloat(null==e?void 0:e.jumlah)+parseFloat(null==e?void 0:e.biayabongkar),biayabongkar:null==e?void 0:e.biayabongkar,bayar:null==e?void 0:e.bayar,diterima:null==e?void 0:e.diterima,kembali:null==e?void 0:e.kembali,hutang:null==e?void 0:e.hutang,lunas:null==e?void 0:e.lunas,operator:null==e?void 0:e.operator,supplier:null==e?void 0:e.supplier,nama_supplier:null==e?void 0:e.nama_supplier,stop_qty:null==e?void 0:e.stop_qty,return:null==e?void 0:e.return};h.push(t)})),e.items=[].concat(h),e.links=null==data||null===(n=data.meta)||void 0===n?void 0:n.links,e.paging.current=null==data||null===(l=data.meta)||void 0===l?void 0:l.current_page,e.paging.from=null==data||null===(r=data.meta)||void 0===r?void 0:r.from,e.paging.last=null==data||null===(o=data.meta)||void 0===o?void 0:o.last_page,e.paging.per_page=null==data||null===(c=data.meta)||void 0===c?void 0:c.per_page,e.paging.total=null==data||null===(d=data.meta)||void 0===d?void 0:d.total)})).finally((function(){e.loading=!1,e.$nuxt.globalLoadingMessage=""})).catch((function(t){e.loading=!1,console.log(t)}))},deletedPembelian:function(e){var t=this;this.loading=!0,this.options="delete-purchase-order",Object(o.a)({api_url:"".concat(this.api_url,"/data-purchase-order/").concat(e),token:this.token.token,api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}).then((function(data){data.success&&(t.message_success=data.message,t.success=!0,t.scrollToTop(),t.getPurchaseOrder(1,{},!1),setTimeout((function(){t.loading=!1,t.$swal({position:"top-end",icon:"success",title:data.message,showConfirmButton:!1,timer:1500}),t.options=""}),500)),data.error&&(t.success=!1,t.$swal({icon:"error",title:"Oops...",text:data.message}))})).finally((function(){setTimeout((function(){t.getPurchaseOrder(1,{},!1),t.loading=!1}),500)})).catch((function(e){return console.log(e)}))},closeSuccessAlert:function(){this.success=!1,this.message=""}},watch:{notifs:function(){this.$_.size(this.$nuxt.notifs)>0&&this.$nuxt.notifs.find((function(e){return"purchase-order"===e.routes}))&&this.getPurchaseOrder(this.paging.current,{},!1)}}},d=c,h=n(8),component=Object(h.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-wrap mt-4"},[t("div",{class:"".concat(e.$nuxt.showSidebar?"w-full mb-12 px-6":"max-w-full")},[t("cards-card-table",{attrs:{color:"light",title:"PURCHASE ORDER",types:"purchase-order",queryType:"PURCHASE_ORDER",queryMiddle:"purchase-order",current:e.current,parentRoute:e.stringRoute,typeRoute:e.typeRoute,headers:e.headers,columns:e.items,loading:e.loading,success:e.success,paging:e.paging,messageAlert:e.message_success},on:{"filter-data":e.handleFilterBarang,"close-alert":e.closeSuccessAlert,"deleted-data":e.deletedPembelian}}),e._v(" "),t("div",{staticClass:"mt-6 -mb-2"},[t("div",{staticClass:"flex justify-center items-center"},[t("molecules-pagination",{attrs:{links:e.links,paging:e.paging},on:{"fetch-data":e.getPurchaseOrder}})],1)])],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CardsCardTable:n(674).default,MoleculesPagination:n(641).default})}}]);