(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{696:function(e,t,r){"use strict";r.r(t);var n={props:{headers:{type:Array},types:{type:String,default:""},orderBy:{type:Object,default:function(){return{}}},tableSetting:{type:String,default:""}},data:function(){return{orderByType:this.orderBy.type}},mounted:function(){},methods:{sortData:function(e){var t;switch(this.types){case"data-pelanggan":case"data-supplier":case"karyawan":case"kas":t={method:"sortData",field:"nama",name:"nama",type:e};break;case"barang-by-suppliers":case"barang-by-warehouse":t={method:"sortData",field:"nama",name:"barang.nama",type:e};break;case"data-laporan-hutang":t={method:"sortData",field:"tanggal",name:"tanggal",type:e}}this.orderByType="ASC"===e?"DESC":"ASC",this.$emit("sort-data",t)},generateOrderBy:function(e){if(e===this.orderBy.field)return'<span class="mr-2 cursor-pointer text-md">'.concat("ASC"===this.orderByType?'<i class="fa-solid fa-sort-up"></i>':'<i class="fa-solid fa-sort-down"></i>',"</span>")}}},l=r(8),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("thead",{staticClass:"sticky-header"},[t("tr",[e._l(e.headers,(function(header){return t("th",{key:header.id,staticClass:"px-6 align-middle border border-solid py-3 text-lg uppercase border-l-0 border-r-0 font-semibold text-left",class:["".concat("light"===e.$nuxt.color?"bg-blueGray-50 text-blueGray-500 border-blueGray-100":"bg-blueGray-900 text-blueGray-300 border-blueGray-700")]},[t("div",{staticClass:"flex justify-between space-x-4"},[t("div",[e._v(e._s(header.title))]),e._v(" "),t("div",[t("div",{domProps:{innerHTML:e._s(e.generateOrderBy(header.title))},on:{click:function(t){return e.sortData(e.orderByType)}}})])])])})),e._v(" "),"user-role"!==e.types&&"transaksi"!==e.types&&"barang-by-warehouse"!==e.types&&""===e.tableSetting||null===e.tableSetting||"detail"!==e.tableSetting||"laporan"!==e.tableSetting?t("th",{staticClass:"px-6 align-middle border border-solid py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left",class:["light"===e.$nuxt.color?"bg-blueGray-50 text-blueGray-500 border-blueGray-100":"bg-blueGray-900 text-blueGray-300 border-blueGray-700"]},[e._v("\n      Options\n    ")]):e._e()],2)])}),[],!1,null,null,null);t.default=component.exports}}]);