(window.webpackJsonp=window.webpackJsonp||[]).push([[152,85],{640:function(t,e,r){"use strict";r.r(e);r(310),r(36),r(62);var n=r(636),o={props:{dataItem:{type:Object,default:function(){return{}}},id:{type:[Number,String],default:""},role:{tye:[Number,String],default:""},types:{type:String,default:""},pembelianType:{type:String,default:""},username:{type:String,default:""},userStatus:{type:Object,default:function(){return{status:"",user_id:null}}},paramData:{type:Object,default:function(){return{lunas:null,hutang:0}}},cellType:{type:String,default:"data"},queryMiddle:{type:String,default:""},queryType:{type:String,default:""},detailUrl:{type:String,default:""},queryData:{type:[String,Number],default:""},param:{type:[String,Number],default:""},parentRoute:{type:String,default:null},typeRoute:{type:String,default:null},campaigns:{type:Number,default:0},donationStatus:{type:String,default:"PENDING"},transactionId:{type:String,default:""},transactionReceipt:{type:String,default:""},paging:{type:[Array,Object],default:function(){return{}}},cetakTitle:{type:String,default:"-"}},data:function(){return{dropdownPopoverShow:!1,showModal:!1}},mounted:function(){},methods:{toggleDropdown:function(t){t.preventDefault(),this.dropdownPopoverShow=!this.dropdownPopoverShow,this.dropdownPopoverShow?(Object(n.a)(this.$refs.btnDropdownRef,this.$refs.popoverDropdownRef,{placement:"bottom-start"}),document.addEventListener("click",this.hideDropdown)):document.removeEventListener("click",this.hideDropdown)},toggleModal:function(){var t=this;this.showModal=!this.showModal,setTimeout((function(){t.dropdownPopoverShow=!1}),500)},sendBarang:function(t){var e="/dashboard/transaksi/return-pembelian/kirim/".concat(this.id);this.$router.push({path:e,query:{current:this.paging.current,type:this.types,kode:t}})},returnDataRedirect:function(t){var e;switch(console.log(this.types),this.types){case"pembelian-langsung":case"purchase-order":e="/dashboard/transaksi/return-pembelian/".concat(this.id);break;case"penjualan-toko":case"penjualan-partai":case"penjualan-po":e="/dashboard/transaksi/return-penjualan/".concat(this.id)}this.$router.push({path:e,query:{current:this.paging.current,type:this.types,faktur:t}})},redirectBayarHutang:function(t){var e;switch(this.types){case"bayar-hutang":e="/dashboard/transaksi/bayar-hutang/".concat(t);break;case"piutang-pelanggan":e="/dashboard/transaksi/terima-piutang/piutang-pelanggan/".concat(t)}this.$router.push({path:e,query:{current:this.paging.current,id:this.id}})},redirectTerimaPo:function(t){var e="/dashboard/transaksi/beli/purchase-order/terima-po/".concat(this.id);this.$router.push({path:e,query:{type:this.queryType,faktur:t,accept:"terima-po"}})},redirectKirimPo:function(t){var e="/dashboard/transaksi/jual/penjualan-po/kirim-po/".concat(this.id);this.$router.push({path:e,query:{type:this.queryType,faktur:t,accept:"terima-po"}})},redirectCetak:function(t){localStorage.setItem("cetak_code",JSON.stringify({ref_code:t}));var e="";switch(console.log(this.cetakTitle),this.cetakTitle){case"Pembelian":e="/dashboard/transaksi/beli/".concat(this.queryMiddle,"/cetak");break;case"Penjualan":e="/dashboard/transaksi/jual/".concat(this.queryMiddle,"/cetak");break;case"bayarHutang":e="/dashboard/transaksi/bayar-hutang/cetak";break;case"piutangPelanggan":e="/dashboard/transaksi/terima-piutang/piutang-pelanggan/cetak";break;case"returnPembelian":e="/dashboard/transaksi/return-pembelian/cetak";break;case"returnPenjualan":e="/dashboard/transaksi/return-penjualan/cetak"}this.$router.push({path:e,query:{kode:t}})},hideDropdown:function(t){var e=t.target;this.$refs.btnDropdownRef&&!this.$refs.btnDropdownRef.contains(e)&&this.$refs.popoverDropdownRef&&!this.$refs.popoverDropdownRef.contains(e)&&(this.dropdownPopoverShow=!1,document.removeEventListener("click",this.hideDropdown))},redirectEditPage:function(){"barang-by-suppliers"===this.types||"barang-by-warehouse"===this.types||"barang-all"===this.types||"pembelian-langsung"===this.types||"purchase-order"===this.types||"penjualan-toko"===this.types||"penjualan-po"===this.types?(console.log(this.parentRoute),console.log(this.typeRoute),console.log(this.queryMiddle),console.log(this.param),console.log(this.queryType),console.log(this.queryType),this.$router.push({path:"/dashboard/".concat(this.parentRoute,"/").concat(this.typeRoute,"/").concat(this.queryMiddle,"/edit/").concat(this.param),query:{type:this.queryType,current:this.paging.current}})):this.$router.push({path:"/dashboard/".concat(this.parentRoute,"/").concat(this.queryMiddle,"/edit/").concat(this.param)})},deletedData:function(){var t=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&(t.$emit("deleted-data",t.id),t.dropdownPopoverShow=!1)}))},activationUser:function(t){var e=this;this.$emit("activation-user",t),setTimeout((function(){e.dropdownPopoverShow=!1}),500)},restoredData:function(){this.$emit("restored-data",this.id),this.dropdownPopoverShow=!1},detailDataRedirect:function(param){switch(this.queryType){case"BARANG_BY_SUPPLIERS":case"BARANG_BY_WAREHOUSE":this.$router.push({path:"/dashboard/".concat(this.parentRoute,"/").concat(this.typeRoute,"/").concat(this.queryMiddle,"/detail/").concat(param),query:{type:this.queryType,current:this.paging.current}});break;case"PEMBELIAN_LANGSUNG":case"PURCHASE_ORDER":case"PENJUALAN_TOKO":case"PENJUALAN_PARTAI":case"PENJUALAN_PO":case"PIUTANG_PELANGGAN":case"DATA_ROLE_USER":case"DATA_ROLE_MANAGEMENT":this.$router.push({path:"/dashboard/".concat(this.parentRoute,"/").concat(this.typeRoute,"/").concat(this.queryMiddle,"/detail/").concat(this.param),query:{type:this.queryType,current:this.paging.current}});break;case"BAYAR_HUTANG":case"DATA_PENGELUARAN":case"KOREKSI_STOK":this.$router.push({path:"/dashboard/".concat(this.parentRoute,"/").concat(this.typeRoute,"/detail/").concat(param),query:{type:this.queryType,query:this.id}});break;default:this.$router.push({path:"/detail/".concat(this.queryMiddle,"/").concat(param),query:{type:this.queryType,current:this.paging.current}})}},acceptPayment:function(t){var e=this;this.$emit("accept-payment",t),setTimeout((function(){e.dropdownPopoverShow=!1}),500)}}},l=r(8),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-center space-x-2"},["data"===t.cellType?e("div",[e("ul",{staticClass:"py-2 text-2xl text-gray-700 dark:text-gray-200 flex justify-center space-x-2",attrs:{"aria-labelledby":"dropdownDefaultButton"}},["data-pelanggan"!==t.types&&"data-supplier"!==t.types&&"karyawan"!==t.types&&"kas"!==t.types&&"data-laporan-hutang"!==t.types&&"bayar-hutang"!==t.types&&"data-biaya"!==t.types&&"purchase-order"!==t.types?e("li",[e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full bg-transparent text-sky-400 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md",attrs:{role:"button"},on:{click:function(e){return t.detailDataRedirect(t.queryData)}}},[e("i",{staticClass:"fa-solid fa-circle-info"})])]):t._e(),t._v(" "),"data-role-management"!==t.types&&"bayar-hutang"!==t.types?e("li",[e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-cyan-800 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md",on:{click:t.redirectEditPage}},[e("i",{staticClass:"fa-solid fa-pen-to-square"})])]):t._e(),t._v(" "),"data-role-management"!==t.types&&"bayar-hutang"!==t.types?e("li",[e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-red-700 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md",on:{click:function(e){return e.preventDefault(),t.deletedData.apply(null,arguments)}}},[e("i",{staticClass:"fa-solid fa-trash"})])]):e("li",[1===t.role&&"bayar-hutang"!==t.types&&"data-role-management"!==t.types?e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-cyan-800 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md",on:{click:t.redirectEditPage}},[e("i",{staticClass:"fa-solid fa-pen-to-square"})]):t._e()])])]):t._e(),t._v(" "),"transaksi"===t.cellType&&"bayar-hutang"!==t.types&&"terima-piutang"!==t.types?e("div",[e("ul",{staticClass:"flex justify-start py-2 text-2xl dark:text-gray-200",attrs:{"aria-labelledby":"dropdownDefaultButton"}},["return-pembelian"!==t.types&&null!==t.paramData.return?e("li",["Pembelian"===t.cetakTitle?e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full bg-transparent text-emerald-700 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md",attrs:{role:"button"},on:{click:function(e){return t.returnDataRedirect(t.queryData)}}},[e("i",{staticClass:"fa-solid fa-arrows-rotate"})]):t._e(),t._v(" "),"Penjualan"===t.cetakTitle&&"False"!==t.paramData.receive?e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full bg-transparent text-emerald-700 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md",attrs:{role:"button"},on:{click:function(e){return t.returnDataRedirect(t.queryData)}}},[e("i",{staticClass:"fa-solid fa-arrows-rotate"})]):t._e()]):t._e(),t._v(" "),e("li",[e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full bg-transparent text-sky-400 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md",attrs:{role:"button"},on:{click:function(e){return t.detailDataRedirect(t.queryData)}}},[e("i",{staticClass:"fa-solid fa-circle-info"})])]),t._v(" "),e("li",[e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full bg-transparent text-blue-700 cursor-pointer hover:bg-gray-400 hover:text-white hover:rounded-md",attrs:{role:"button"},on:{click:function(e){return t.redirectCetak(t.queryData)}}},[e("i",{staticClass:"fa-solid fa-print"})])]),t._v(" "),"purchase-order"===t.types||"penjualan-po"===t.types?e("li",["False"===t.paramData.lunas&&0==Number(t.paramData.hutang)?e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-emerald-700 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md",on:{click:function(e){return t.redirectTerimaPo(t.queryData)}}},[e("i",{staticClass:"fa-solid fa-cart-shopping"})]):t._e(),t._v(" "),"False"===t.paramData.lunas&&0==Number(t.paramData.piutang)?e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-emerald-700 hover:text-white cursor-pointer hover:bg-gray-400 hover:rounded-md",on:{click:function(e){return t.redirectKirimPo(t.queryData)}}},[e("i",{staticClass:"fa-solid fa-truck-ramp-box"})]):t._e()]):t._e()])]):t._e(),t._v(" "),"trash"===t.cellType?e("div",[e("ul",{staticClass:"py-2 text-2xl dark:text-gray-200 flex justify-center space-x-2",attrs:{"aria-labelledby":"dropdownDefaultButton"}},[e("li",[e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blue-700 cursor-pointer hover:bg-gray-400 hover:text-white hover:rounded-md",on:{click:t.restoredData}},[e("i",{staticClass:"fa-solid fa-rotate"})])]),t._v(" "),e("li",[e("button",{staticClass:"text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-red-700 cursor-pointer hover:bg-gray-400 hover:text-white hover:rounded-md",on:{click:t.deletedData}},[e("i",{staticClass:"fa-solid fa-trash"})])])])]):t._e(),t._v(" "),"bayar"===t.cellType?e("div",[e("ul",{staticClass:"flex justify-center space-x-4 py-2 text-2xl text-gray-700 dark:text-gray-200",attrs:{"aria-labelledby":"dropdownDefaultButton"}},[e("li",[e("button",{staticClass:"text-2xl font-normal block w-full whitespace-nowrap bg-transparent text-blue-700 cursor-pointer hover:bg-gray-400 hover:text-blue-600 hover:rounded-md",on:{click:function(e){return t.detailDataRedirect(t.queryData)}}},[e("i",{staticClass:"fa-solid fa-circle-info"})])]),t._v(" "),"bayar-hutang"===t.types||"piutang-pelanggan"===t.types?e("li",[e("button",{staticClass:"text-md py-0 font-normal block w-full whitespace-nowrap bg-transparent text-teal-400 cursor-pointer hover:bg-gray-400 hover:text-teal-600 hover:rounded-md",on:{click:function(e){return t.redirectCetak(t.queryData)}}},[e("i",{staticClass:"fa-solid fa-print"})])]):t._e(),t._v(" "),"bayar-hutang"===t.types||"piutang-pelanggan"===t.types?e("li",["False"==t.dataItem.lunas||0==t.dataItem.lunas?e("button",{staticClass:"text-md py-0 font-normal block w-full whitespace-nowrap bg-transparent text-emerald-700 cursor-pointer hover:bg-gray-400 hover:text-emerald-600 hover:rounded-md",on:{click:function(e){return t.redirectBayarHutang(t.queryData)}}},["bayar-hutang"===t.types?e("i",{staticClass:"fa-solid fa-credit-card"}):t._e(),t._v(" "),"piutang-pelanggan"===t.types?e("i",{staticClass:"fa-solid fa-cash-register"}):t._e()]):t._e()]):t._e()])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},764:function(t,e,r){"use strict";r.r(e);r(25),r(62),r(20),r(29);var n={props:{columns:{type:[Array,Object],default:function(){return{}}},parentRoute:{type:String,default:null},typeRoute:{type:String,default:null},types:{type:String},paging:{type:[Array,Object],default:function(){return{}}}},data:function(){return{image_url:"https://sirmuh.api.dksindo.com/storage",userData:[],name:"",roleId:null}},beforeMount:function(){this.authTokenStorage()},mounted:function(){this.checkUserLogin()},methods:{redirectUpload:function(t,e){this.$router.push({path:"/dashboard/".concat(this.parentRoute,"/").concat(this.typeRoute,"/data-barang/upload/").concat(t),query:{type:e,current:this.paging.current}})},deletedData:function(t){this.$emit("deleted-data",t)},restoredData:function(t){this.$emit("restored-data",t)},checkUserLogin:function(){var t=this;if(this.$_.isObject(this.token)){var e,r="".concat(this.api_url,"/user-data"),n={headers:{Accept:"application/json",Authorization:"Bearer ".concat(null==this||null===(e=this.token)||void 0===e?void 0:e.token),"Content-Type":"application/json","Sirmuh-Key":"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}};this.$api.get(r,n).then((function(e){var r,n,data=e.data;t.userData=null==data?void 0:data.data,t.name=null==data||null===(r=data.data)||void 0===r?void 0:r.name,t.roleId=null==data||null===(n=data.data)||void 0===n?void 0:n.role})).catch((function(t){console.log(t)}))}else this.$swal({icon:"error",title:"Oops...",text:"Error Access!"}),this.$router.replace("/")}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}},o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("tbody",t._l(t.columns,(function(r){return e("tr",{key:r.id},[e("th",{staticClass:"whitespace-nowrap p-4 text-lg text-left"},[t._v("\n            "+t._s(t.$moment(r.tanggal).format("LL"))+"\n        ")]),t._v(" "),e("th",{staticClass:"whitespace-nowrap p-4 text-lg text-left"},[e("span",{staticClass:"bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"},[t._v("\n                "+t._s(r.kode)+"\n            ")])]),t._v(" "),e("td",{staticClass:"border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4"},[e("span",{staticClass:"bg-gray-100 text-gray-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500"},[t._v("\n                "+t._s(r.jenispelanggan)+"\n            ")])]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg"},[e("span",{staticClass:"bg-green-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"},[t._v("\n              "+t._s(r.nama_kas)+" ("+t._s(r.kode_kas)+")\n            ")])]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg text-right"},[t._v("\n            "+t._s(t.$format(r.jumlah))+"\n        ")]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg"},[e("span",{staticClass:"bg-purple-100 text-purple-800 font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400"},[t._v("\n              "+t._s(r.operator)+"\n            ")])]),t._v(" "),r.token!==t.token.token&&"VICKY ANDRIANI"!==r.name?e("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left"},[e("dropdowns-table-dropdown",{attrs:{id:r.id,types:t.types,param:r.id,paging:t.paging,cellType:"data",role:t.roleId,queryData:r.kode,parentRoute:t.parentRoute,typeRoute:t.typeRoute,queryMiddle:"pemasukan",queryType:"DATA_PEMASUKAN"},on:{"deleted-data":t.deletedData,"restored-data":t.restoredData}})],1):t._e()])})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DropdownsTableDropdown:r(640).default})}}]);