(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{679:function(t,e,r){t.exports=r.p+"img/team-2-800x800.3e08ef1.jpg"},983:function(t,e,r){"use strict";r.r(e);var n=r(679),l=r.n(n),o={props:{item:{type:Object,default:function(){return{}}},angsurans:{type:Array,default:function(){return[]}},title:{type:String},stringRoute:{type:String,default:null},parentRoute:{type:String,default:null},typeRoute:{type:String,default:null},selectedRoute:{type:String,default:null},types:{type:String,default:null}},data:function(){return{image_url:"http://192.168.1.8:4041/storage",team2:l.a}},methods:{backTo:function(){this.$router.go(-1)},generateLunas:function(data){return 1===data.lunas||"LUNAS"===data.visa?'<i class="fa-solid fa-check fa-lg text-emerald-600"></i>':'<i class="fa-solid fa-circle-minus text-red-600 fa-lg"></i>'}}},d=r(8),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-24"},[e("div",{staticClass:"flex flex-wrap items-between mt-6 p-4"},[e("div",{staticClass:"relative w-full max-w-full flex-grow flex-1"},[e("h3",{staticClass:"font-bold text-xl text-blueGray-700"},[t._v("\n        Detail "+t._s(t.$_.size(t.angsurans)>0?"Angsuran":"")+" Hutang\n      ")])]),t._v(" "),e("div",[e("button",{staticClass:"bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150",on:{click:t.backTo}},[e("i",{staticClass:"fa-solid fa-arrow-left-long"}),t._v(" Kembali\n      ")])])]),t._v(" "),e("div",{staticClass:"mt-6 p-4"},[e("div",{staticClass:"overflow-auto shadow-md sm:rounded-lg"},[e("table",{staticClass:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"},[t._m(0),t._v(" "),e("tbody",[e("tr",{staticClass:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},[e("th",{staticClass:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",attrs:{scope:"row"}},[e("span",{staticClass:"bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"},[t._v("\n                "+t._s(t.item.kode)+"\n              ")])]),t._v(" "),e("td",{staticClass:"px-6 py-4"},[t._v("\n              "+t._s(t.$moment(t.item.tanggal).format("LL"))+"\n            ")]),t._v(" "),e("td",{staticClass:"px-6 py-4"},[t._v("\n              "+t._s(t.item.nama_supplier)+"\n            ")]),t._v(" "),e("td",{staticClass:"px-6 py-4"},[t._v("\n              "+t._s(t.item.alamat)+"\n            ")]),t._v(" "),e("td",{staticClass:"px-6 py-4"},[t._v("\n              "+t._s(t.item.operator)+"\n            ")]),t._v(" "),e("td",{staticClass:"px-6 py-4"},[t._v("\n              "+t._s(t.item.nama_barang)+" ("+t._s(t.item.kode_barang)+")\n            ")]),t._v(" "),e("td",{staticClass:"px-6 py-4"},[t._v("\n              "+t._s(t.$format(t.item.harga_beli))+"\n            ")]),t._v(" "),e("td",{staticClass:"px-6 py-4"},[t._v("\n              "+t._s(t.$roundup(t.item.qty_pembelian))+"\n              "+t._s(t.item.satuan_pembelian_barang)+"\n            ")]),t._v(" "),e("td",{staticClass:"px-6 py-4"},[t._v("\n              "+t._s(t.$format(t.item.jumlah_pembelian))+"\n            ")]),t._v(" "),e("td",{staticClass:"px-6 py-4"},[t._v("\n              "+t._s(t.$format(t.item.jumlah_pembelian-t.item.jumlah_hutang))+"\n            ")]),t._v(" "),e("td",{staticClass:"px-6 py-4"},[t._v("\n              "+t._s(t.$format(t.item.jumlah_hutang))+"\n            ")]),t._v(" "),e("td",{staticClass:"px-6 py-4"},[t._v("\n              "+t._s(t.$format(t.item.bayar))+"\n            ")]),t._v(" "),e("td",{staticClass:"px-6 py-4"},[t._v("\n              "+t._s(t.$format(t.item.diterima))+"\n            ")]),t._v(" "),e("td",{staticClass:"px-6 py-4"},[t._v("\n              "+t._s(t.item.kas_nama)+" ("+t._s(t.item.kode_kas)+")\n            ")]),t._v(" "),e("td",{staticClass:"px-6 py-4"},[e("span",{domProps:{innerHTML:t._s(t.generateLunas({lunas:t.item.lunas,visa:t.item.visa}))}})]),t._v(" "),0==t.item.lunas?e("td",{staticClass:"px-6 py-4 w-80"},[t.$_.size(t.angsurans)>0?e("span",{staticClass:"bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"},[t._v("\n                Angsuran\n              ")]):e("span",{staticClass:"bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"},[t._v("\n                "+t._s(t.item.visa)+"\n              ")])]):e("td",{staticClass:"px-6 py-4"},[e("span",{staticClass:"bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"},[t._v(t._s(t.item.visa))])]),t._v(" "),e("td",{staticClass:"px-6 py-4"},[t._v(t._s(t.$roundup(t.item.jatuh_tempo))+" Hari")]),t._v(" "),e("td",{staticClass:"px-6 py-4"},[t._v("\n              "+t._s(t.$moment(t.item.tanggal).add(t.item.tempo,"days").format("LL"))+"\n            ")])])])])])]),t._v(" "),e("div",{staticClass:"mt-10 p-4"},[t._m(1),t._v(" "),e("ol",{staticClass:"relative border-s border-gray-200 dark:border-gray-700"},t._l(t.angsurans,(function(r){return e("li",{key:r.id,staticClass:"mb-10 ms-4"},[e("div",{staticClass:"absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"}),t._v(" "),e("time",{staticClass:"mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"},[t._v("\n          Angsuran Ke "+t._s(r.angsuran_ke)+"\n        ")]),t._v(" "),e("h3",{staticClass:"text-lg font-semibold text-gray-900 dark:text-white"},[t._v("\n          Dibayarkan : "+t._s(t.$format(r.bayar_angsuran))+"\n        ")]),t._v(" "),e("p",{staticClass:"mb-4 text-base font-normal text-gray-500 dark:text-gray-400"},[t._v("\n          Sisa HUtang : "+t._s(t.$format(r.jumlah))+"\n        ")])])})),0)])])}),[function(){var t=this,e=t._self._c;return e("thead",{staticClass:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",[e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Kode Hutang")]),t._v(" "),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Tanggal")]),t._v(" "),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Supplier")]),t._v(" "),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Alamat Supplier")]),t._v(" "),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Operator")]),t._v(" "),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Barang")]),t._v(" "),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Harga Beli")]),t._v(" "),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("QTY")]),t._v(" "),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Total Bayar")]),t._v(" "),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Dibayarkan")]),t._v(" "),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Hutang")]),t._v(" "),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Angsuran Terakhir")]),t._v(" "),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Diterima")]),t._v(" "),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Kas")]),t._v(" "),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Lunas")]),t._v(" "),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Tempo")]),t._v(" "),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Jatuh Tempo")])])])},function(){var t=this._self._c;return t("div",{staticClass:"flex justify-start mb-8"},[t("div",[t("h2",{staticClass:"text-lg font-semibold text-gray-900 dark:text-white"},[this._v("\n          Detail Pembayaran Angsuran\n        ")])])])}],!1,null,null,null);e.default=component.exports}}]);