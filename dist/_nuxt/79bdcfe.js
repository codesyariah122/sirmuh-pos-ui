(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{798:function(t,e,r){"use strict";r.r(e);var n={props:{item:{type:Object,default:function(){return{}}},timelines:{type:Array,default:function(){return[]}}},methods:{generateLunas:function(data){return 1==data.lunas||"LUNAS"===data.visa?'<i class="fa-solid fa-check fa-lg text-emerald-600"></i>':'<i class="fa-solid fa-circle-minus text-red-600 fa-lg"></i>'}}},d=r(8),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;return e("tr",{staticClass:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},[e("th",{staticClass:"px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white",attrs:{scope:"row"}},[t._v("\n  "+t._s(t.$moment(t.item.tanggal).format("L"))+"\n")]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg"},[e("span",{staticClass:"bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"},[t._v("\n    "+t._s(t.item.kode)+"\n  ")])]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg"},[e("div",{staticClass:"flex justify-between space-x-2"},[e("div",[e("span",{staticClass:"bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"},[t._v("\n        "+t._s(t.item.kode_penjualan)+"\n      ")])]),t._v(" "),e("div",[e("button",{staticClass:"text-info-800 dark:text-blueGray-400 hover:bg-blueGray-100 dark:hover:bg-blueGray-800 rounded-lg inline-flex items-center justify-center",on:{click:function(e){return t.$nuxt.copyClipboard(t.item.kode_penjualan,t.item.id)}}},[t.$nuxt.successCopy&&t.item.id===t.$nuxt.copyId?e("span",{staticClass:"inline-flex items-center"},[e("i",{staticClass:"fa-solid fa-square-check text-info-700"})]):e("span",{attrs:{id:"default-icon-account-id"}},[e("i",{staticClass:"fa-solid fa-copy"})])])])])]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-center"},[e("span",{domProps:{innerHTML:t._s(t.generateLunas({lunas:t.item.lunas,visa:t.item.visa}))}})]),t._v(" "),0==t.item.lunas?e("td",{staticClass:"whitespace-nowrap p-4 text-lg"},[t.$_.size(t.timelines)>0?e("span",{staticClass:"bg-red-100 text-red-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"},[t._v("\n  Angsuran\n")]):e("span",{staticClass:"bg-red-100 text-red-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"},[t._v("\n"+t._s(t.item.visa)+"\n")])]):e("td",{staticClass:"px-6 py-4"},[e("span",{class:"".concat("HUTANG"===t.item.visa?"bg-red-100 text-red-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400":"bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400")},[t._v(t._s(t.item.visa))])]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg text-center"},[e("span",{staticClass:"bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"},[t._v("\n    "+t._s(t.item.nama_pelanggan)+"\n  ")])]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg text-center"},[e("span",{staticClass:"bg-purple-100 text-purple-800 font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400"},[t._v("\n    "+t._s(t.item.operator)+"\n  ")])]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-right text-lg"},[t._v("\n  "+t._s(t.$format(t.item.jumlah_penjualan))+"\n")]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-right text-lg"},[t._v("\n  "+t._s(t.$format(t.item.jumlah_penjualan-t.item.jumlah_piutang))+"\n")]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-right text-lg"},[t._v("\n  "+t._s(t.$format(t.item.jumlah_piutang))+"\n")]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-right text-lg"},[t._v("\n  "+t._s(t.$format(t.item.bayar_penjualan))+"\n")]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-right text-lg"},[t._v("\n  "+t._s(t.$format(t.item.piutang_penjualan))+"\n")]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg"},[e("span",{staticClass:"bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"},[t._v("\n    "+t._s(t.item.kas_nama)+" ("+t._s(t.item.kode_penjualan_kas)+")\n  ")])])])}),[],!1,null,null,null);e.default=component.exports}}]);