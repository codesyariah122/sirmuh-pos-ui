(window.webpackJsonp=window.webpackJsonp||[]).push([[104,85],{1034:function(t,e,r){"use strict";r.r(e);r(53),r(25);var o={props:{columns:{type:Array,default:function(){return{}}},types:{type:String}},data:function(){return{image_url:"https://sirmuh.api.dksindo.com"}},mounted:function(){},methods:{deletedData:function(t){this.$emit("deleted-data",t)},restoredData:function(t){console.log(t),this.$emit("restored-data",t)}}},n=r(8),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("tbody",t._l(t.columns,(function(o){return e("tr",{key:o.id},[e("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[null!==o.image?e("img",{staticClass:"w-42 h-24",attrs:{src:"".concat(t.image_url,"/").concat(o.image)}}):e("img",{staticClass:"w-42 h-24",attrs:{src:r(155)}})]),t._v(" "),o.name?e("th",{staticClass:"border-t-0 px-6 border-l-0 border-r-0 text-xs w-12 p-4 text-left",staticStyle:{width:"50px"}},[t._v("\n      "+t._s(o.name)+"\n    ")]):t._e(),t._v(" "),e("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[t._v("\n      "+t._s(o.norek)+"\n    ")]),t._v(" "),e("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[t._v("\n      "+t._s(o.owner)+"\n    ")]),t._v(" "),e("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[t._v("\n      "+t._s(o.status)+"\n    ")]),t._v(" "),e("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[t._v("\n      "+t._s(o.type)+"\n    ")]),t._v(" "),o.token!==t.token.token&&"VICKY ANDRIANI"!==o.name?e("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"},[e("dropdowns-table-dropdown",{attrs:{id:o.id,types:t.types,cellType:"trash"},on:{"deleted-data":t.deletedData,"restored-data":t.restoredData}})],1):t._e()])})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DropdownsTableDropdown:r(674).default})},674:function(t,e,r){"use strict";r.r(e);r(344),r(36),r(53);var o=r(669),n={props:{dataItem:{type:Object,default:function(){return{}}},id:{type:[Number,String],default:""},role:{tye:[Number,String],default:""},types:{type:String,default:""},pembelianType:{type:String,default:""},username:{type:String,default:""},userStatus:{type:Object,default:function(){return{status:"",user_id:null}}},paramData:{type:Object,default:function(){return{lunas:null,hutang:0}}},cellType:{type:String,default:"data"},queryMiddle:{type:String,default:""},queryType:{type:String,default:""},detailUrl:{type:String,default:""},queryData:{type:[String,Number],default:""},param:{type:[String,Number],default:""},parentRoute:{type:String,default:null},typeRoute:{type:String,default:null},campaigns:{type:Number,default:0},donationStatus:{type:String,default:"PENDING"},transactionId:{type:String,default:""},transactionReceipt:{type:String,default:""},paging:{type:[Array,Object],default:function(){return{}}},cetakTitle:{type:String,default:"-"}},data:function(){return{dropdownPopoverShow:!1,showModal:!1}},mounted:function(){},methods:{toggleDropdown:function(t){t.preventDefault(),this.dropdownPopoverShow=!this.dropdownPopoverShow,this.dropdownPopoverShow?(Object(o.a)(this.$refs.btnDropdownRef,this.$refs.popoverDropdownRef,{placement:"bottom-start"}),document.addEventListener("click",this.hideDropdown)):document.removeEventListener("click",this.hideDropdown)},toggleModal:function(){var t=this;this.showModal=!this.showModal,setTimeout((function(){t.dropdownPopoverShow=!1}),500)},sendBarang:function(t){var e="/dashboard/transaksi/return-pembelian/kirim/".concat(this.id);this.$router.push({path:e,query:{current:this.paging.current,type:this.types,kode:t}})},returnDataRedirect:function(t){var e;switch(this.types){case"pembelian-langsung":case"purchase-order":e="/dashboard/transaksi/return-pembelian/".concat(this.id);break;case"penjualan-toko":case"penjualan-partai":case"penjualan-po":e="/dashboard/transaksi/return-penjualan/".concat(this.id)}this.$router.push({path:e,query:{current:this.paging.current,type:this.types,faktur:t}})},redirectResultPemakaian:function(t){console.log(this.id),console.log(this.paramData.kode);var e="/dashboard/backoffice/pemakaian-barang/result/".concat(t);this.$router.push({path:e,query:{current:this.paging.current,query:this.id}})},redirectBayarHutang:function(t){var e;switch(this.types){case"bayar-hutang":e="/dashboard/transaksi/bayar-hutang/".concat(t);break;case"piutang-pelanggan":e="/dashboard/transaksi/terima-piutang/piutang-pelanggan/".concat(t)}this.$router.push({path:e,query:{current:this.paging.current,id:this.id}})},redirectTerimaPo:function(t){var e="/dashboard/transaksi/beli/purchase-order/terima-po/".concat(this.id);this.$router.push({path:e,query:{type:this.queryType,faktur:t,accept:"terima-po"}})},redirectKirimPo:function(t){var e="/dashboard/transaksi/jual/penjualan-po/kirim-po/".concat(this.id);this.$router.push({path:e,query:{type:this.queryType,faktur:t,accept:"terima-po"}})},redirectCetak:function(t){localStorage.setItem("cetak_code",JSON.stringify({ref_code:t}));var e="";switch(console.log(this.cetakTitle),this.cetakTitle){case"Pembelian":e="/dashboard/transaksi/beli/".concat(this.queryMiddle,"/cetak");break;case"Penjualan":e="/dashboard/transaksi/jual/".concat(this.queryMiddle,"/cetak");break;case"bayarHutang":e="/dashboard/transaksi/bayar-hutang/cetak";break;case"piutangPelanggan":e="/dashboard/transaksi/terima-piutang/piutang-pelanggan/cetak";break;case"returnPembelian":e="/dashboard/transaksi/return-pembelian/cetak";break;case"returnPenjualan":e="/dashboard/transaksi/return-penjualan/cetak"}this.$router.push({path:e,query:{kode:t}})},hideDropdown:function(t){var e=t.target;this.$refs.btnDropdownRef&&!this.$refs.btnDropdownRef.contains(e)&&this.$refs.popoverDropdownRef&&!this.$refs.popoverDropdownRef.contains(e)&&(this.dropdownPopoverShow=!1,document.removeEventListener("click",this.hideDropdown))},redirectEditPage:function(){"barang-by-suppliers"===this.types||"barang-by-warehouse"===this.types||"barang-all"===this.types||"pembelian-langsung"===this.types||"purchase-order"===this.types||"penjualan-toko"===this.types||"penjualan-po"===this.types?this.$router.push({path:"/dashboard/".concat(this.parentRoute,"/").concat(this.typeRoute,"/").concat(this.queryMiddle,"/edit/").concat(this.param),query:{type:this.queryType,current:this.paging.current}}):this.$router.push({path:"/dashboard/".concat(this.parentRoute,"/").concat(this.queryMiddle,"/edit/").concat(this.param)})},deletedData:function(){var t=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&(t.$emit("deleted-data",t.id),t.dropdownPopoverShow=!1)}))},activationUser:function(t){var e=this;this.$emit("activation-user",t),setTimeout((function(){e.dropdownPopoverShow=!1}),500)},restoredData:function(){this.$emit("restored-data",this.id),this.dropdownPopoverShow=!1},detailDataRedirect:function(param){switch(this.queryType){case"BARANG_BY_SUPPLIERS":case"BARANG_BY_WAREHOUSE":this.$router.push({path:"/dashboard/".concat(this.parentRoute,"/").concat(this.typeRoute,"/").concat(this.queryMiddle,"/detail/").concat(param),query:{type:this.queryType,current:this.paging.current}});break;case"PEMBELIAN_LANGSUNG":case"PURCHASE_ORDER":case"PENJUALAN_TOKO":case"PENJUALAN_PARTAI":case"PENJUALAN_PO":case"PIUTANG_PELANGGAN":case"DATA_ROLE_USER":case"DATA_ROLE_MANAGEMENT":this.$router.push({path:"/dashboard/".concat(this.parentRoute,"/").concat(this.typeRoute,"/").concat(this.queryMiddle,"/detail/").concat(this.param),query:{type:this.queryType,current:this.paging.current}});break;case"BAYAR_HUTANG":case"DATA_PENGELUARAN":case"KOREKSI_STOK":case"PEMAKAIAN_BARANG":case"RETURN_PENJUALAN":this.$router.push({path:"/dashboard/".concat(this.parentRoute,"/").concat(this.typeRoute,"/detail/").concat(param),query:{type:this.queryType,query:this.id}});break;default:this.$router.push({path:"/detail/".concat(this.queryMiddle,"/").concat(param),query:{type:this.queryType,current:this.paging.current}})}},acceptPayment:function(t){var e=this;this.$emit("accept-payment",t),setTimeout((function(){e.dropdownPopoverShow=!1}),500)}}},l=r(8),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-center"},["data"===t.cellType?e("div",[e("ul",{staticClass:"py-2 text-2xl text-gray-700 dark:text-gray-200 flex justify-start space-x-4",attrs:{"aria-labelledby":"dropdownDefaultButton"}},["pemakaian-barang"===t.types?e("li",[1===t.paramData.draft?e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-emerald-700 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md border border-gray-800 me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg",on:{click:function(e){return t.redirectResultPemakaian(t.paramData.kode)}}},[e("i",{staticClass:"fa-solid fa-recycle"})]):t._e()]):t._e(),t._v(" "),"data-pelanggan"!==t.types&&"data-supplier"!==t.types&&"karyawan"!==t.types&&"kas"!==t.types&&"data-laporan-hutang"!==t.types&&"bayar-hutang"!==t.types&&"data-biaya"!==t.types&&"purchase-order"!==t.types?e("li",[e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full bg-transparent text-sky-400 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md border border-gray-800 me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg",attrs:{role:"button"},on:{click:function(e){return t.detailDataRedirect(t.queryData)}}},[e("i",{staticClass:"fa-solid fa-circle-info"})])]):t._e(),t._v(" "),"data-role-management"!==t.types&&"bayar-hutang"!==t.types?e("li",[e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-cyan-800 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md border border-gray-800 me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg",on:{click:t.redirectEditPage}},[e("i",{staticClass:"fa-solid fa-pen-to-square"})])]):t._e(),t._v(" "),"data-role-management"!==t.types&&"bayar-hutang"!==t.types?e("li",[e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-red-700 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md border border-gray-800 me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg",on:{click:function(e){return e.preventDefault(),t.deletedData.apply(null,arguments)}}},[e("i",{staticClass:"fa-solid fa-trash"})])]):e("li",[1===t.role&&"bayar-hutang"!==t.types&&"data-role-management"!==t.types?e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-cyan-800 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md border border-gray-800 me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg",on:{click:t.redirectEditPage}},[e("i",{staticClass:"fa-solid fa-pen-to-square"})]):t._e()])])]):t._e(),t._v(" "),"transaksi"===t.cellType&&"bayar-hutang"!==t.types&&"terima-piutang"!==t.types?e("div",[e("ul",{staticClass:"flex justify-start space-x-2 py-2 text-2xl dark:text-gray-200",attrs:{"aria-labelledby":"dropdownDefaultButton"}},["return-pembelian"!==t.types&&null!==t.paramData.return?e("li",["Pembelian"===t.cetakTitle?e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full bg-transparent text-emerald-700 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md border border-gray-800 me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg",attrs:{role:"button"},on:{click:function(e){return t.returnDataRedirect(t.queryData)}}},[e("i",{staticClass:"fa-solid fa-arrows-rotate"})]):t._e(),t._v(" "),"Penjualan"===t.cetakTitle&&"False"!==t.paramData.receive?e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full bg-transparent text-emerald-700 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md border border-gray-800 me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg",attrs:{role:"button"},on:{click:function(e){return t.returnDataRedirect(t.queryData)}}},[e("i",{staticClass:"fa-solid fa-arrows-rotate"})]):t._e()]):t._e(),t._v(" "),e("li",[e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full bg-transparent text-sky-400 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md border border-gray-800 me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg",attrs:{role:"button"},on:{click:function(e){return t.detailDataRedirect(t.queryData)}}},[e("i",{staticClass:"fa-solid fa-circle-info"})])]),t._v(" "),e("li",[e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full bg-transparent text-blue-700 cursor-pointer hover:bg-gray-400 hover:text-white hover:rounded-md border border-gray-800 me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg",attrs:{role:"button"},on:{click:function(e){return t.redirectCetak(t.queryData)}}},[e("i",{staticClass:"fa-solid fa-print"})])]),t._v(" "),e("li",[1===t.role&&"pembelian-langsung"===t.types?e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-cyan-800 hover:text-white cursor-pointer hover:bg-gray-400 border border-gray-800 me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg",on:{click:t.redirectEditPage}},[e("i",{staticClass:"fa-solid fa-pen-to-square"})]):t._e()]),t._v(" "),"purchase-order"===t.types||"penjualan-po"===t.types?e("li",["False"===t.paramData.lunas&&0==Number(t.paramData.hutang)?e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-emerald-700 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md border border-gray-800 me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg",on:{click:function(e){return t.redirectTerimaPo(t.queryData)}}},[e("i",{staticClass:"fa-solid fa-cart-shopping"})]):t._e(),t._v(" "),"False"===t.paramData.lunas&&0==Number(t.paramData.piutang)?e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-emerald-700 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md border border-gray-800 me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg",on:{click:function(e){return t.redirectKirimPo(t.queryData)}}},[e("i",{staticClass:"fa-solid fa-truck-ramp-box"})]):t._e()]):t._e(),t._v(" "),1===t.role?e("li",["purchase-order"===t.types||"penjualan-po"===t.types?e("div",["True"===t.paramData.stop_qty?e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-red-700 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md border border-gray-800 me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg",on:{click:function(e){return e.preventDefault(),t.deletedData.apply(null,arguments)}}},[e("i",{staticClass:"fa-solid fa-trash"})]):e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-red-700 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md border border-gray-800 me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg",attrs:{disabled:""}},[e("i",{staticClass:"fa-solid fa-ban"})])]):e("div",["False"!==t.paramData.lunas?e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-red-700 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md border border-gray-800 me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg",on:{click:function(e){return e.preventDefault(),t.deletedData.apply(null,arguments)}}},[e("i",{staticClass:"fa-solid fa-trash"})]):t._e()])]):t._e()])]):t._e(),t._v(" "),e("div",["trash"===t.cellType?e("ul",{staticClass:"py-2 text-2xl dark:text-gray-200 flex justify-start space-x-4",attrs:{"aria-labelledby":"dropdownDefaultButton"}},[e("li",[e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blue-700 cursor-pointer hover:bg-gray-400 hover:text-white hover:rounded-md border border-gray-800 me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg",on:{click:t.restoredData}},[e("i",{staticClass:"fa-solid fa-rotate"})])]),t._v(" "),e("li",[e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-red-700 cursor-pointer hover:bg-gray-400 hover:text-white hover:rounded-md border border-gray-800 me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg",on:{click:t.deletedData}},[e("i",{staticClass:"fa-solid fa-trash"})])])]):t._e()]),t._v(" "),"bayar"===t.cellType?e("div",[e("ul",{staticClass:"py-2 text-2xl dark:text-gray-200 flex justify-start space-x-4",attrs:{"aria-labelledby":"dropdownDefaultButton"}},[e("li",[e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full bg-transparent text-sky-400 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md border border-gray-800 me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg",on:{click:function(e){return t.detailDataRedirect(t.queryData)}}},[e("i",{staticClass:"fa-solid fa-circle-info"})])]),t._v(" "),"bayar-hutang"===t.types||"piutang-pelanggan"===t.types?e("li",[e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full bg-transparent text-blue-700 cursor-pointer hover:bg-gray-400 hover:text-white hover:rounded-md border border-gray-800 me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg",on:{click:function(e){return t.redirectCetak(t.queryData)}}},[e("i",{staticClass:"fa-solid fa-print"})])]):t._e(),t._v(" "),"bayar-hutang"===t.types||"piutang-pelanggan"===t.types?e("li",["False"===t.dataItem.lunas||0==t.dataItem.lunas&&0!==parseFloat(t.dataItem.jumlah)?e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full bg-transparent text-emerald-600 cursor-pointer hover:bg-gray-400 hover:text-white hover:rounded-md border border-gray-800 me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg",on:{click:function(e){return t.redirectBayarHutang(t.queryData)}}},["bayar-hutang"===t.types?e("i",{staticClass:"fa-solid fa-credit-card"}):t._e(),t._v(" "),"piutang-pelanggan"===t.types?e("i",{staticClass:"fa-solid fa-cash-register"}):t._e()]):t._e()]):t._e()])]):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);