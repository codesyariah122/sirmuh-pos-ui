(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{832:function(e,t,r){"use strict";r.r(t);var d={props:{item:{type:Object,default:function(){return{}}},timelines:{type:Array,default:function(){return[]}}},methods:{generateLunas:function(data){return 1==data.lunas||"LUNAS"===data.visa?'<i class="fa-solid fa-check fa-lg text-emerald-600"></i>':'<i class="fa-solid fa-circle-minus text-red-600 fa-lg"></i>'}}},n=r(8),component=Object(n.a)(d,(function(){var e=this,t=e._self._c;return t("tr",{staticClass:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},[t("th",{staticClass:"px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white",attrs:{scope:"row"}},[e._v("\n  "+e._s(e.$moment(e.item.created_at).format("LLLL"))+"\n")]),e._v(" "),t("td",{staticClass:"whitespace-nowrap p-4 text-lg border-l-2 border-r-2"},[t("span",{staticClass:"bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"},[e._v("\n    "+e._s(e.item.kode)+"\n  ")])]),e._v(" "),t("td",{staticClass:"whitespace-nowrap p-4 text-lg border-l-2 border-r-2"},[t("div",{staticClass:"flex justify-between space-x-2"},[t("div",[t("span",{staticClass:"bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"},[e._v("\n        "+e._s(e.item.kode_penjualan)+"\n      ")])]),e._v(" "),t("div",[t("button",{staticClass:"text-info-800 dark:text-blueGray-400 hover:bg-blueGray-100 dark:hover:bg-blueGray-800 rounded-lg inline-flex items-center justify-center",on:{click:function(t){return e.$nuxt.copyClipboard(e.item.kode_penjualan,e.item.id)}}},[e.$nuxt.successCopy&&e.item.id===e.$nuxt.copyId?t("span",{staticClass:"inline-flex items-center"},[t("i",{staticClass:"fa-solid fa-square-check text-info-700"})]):t("span",{attrs:{id:"default-icon-account-id"}},[t("i",{staticClass:"fa-solid fa-copy"})])])])])]),e._v(" "),t("td",{staticClass:"px-6 py-4 text-center"},[t("span",{domProps:{innerHTML:e._s(e.generateLunas({lunas:e.item.lunas,visa:e.item.visa}))}})]),e._v(" "),0==e.item.lunas?t("td",{staticClass:"whitespace-nowrap p-4 text-lg border-l-2 border-r-2"},[e.$_.size(e.timelines)>0?t("span",{staticClass:"bg-red-100 text-red-800 text-lg border-l-2 border-r-2 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"},[e._v("\n  Angsuran\n")]):t("span",{staticClass:"bg-red-100 text-red-800 text-lg border-l-2 border-r-2 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"},[e._v("\n"+e._s(e.item.visa)+"\n")])]):t("td",{staticClass:"px-6 py-4"},[t("span",{class:"".concat("HUTANG"===e.item.visa?"bg-red-100 text-red-800 text-lg border-l-2 border-r-2 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400":"bg-green-100 text-green-800 text-lg border-l-2 border-r-2 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400")},[e._v(e._s(e.item.visa))])]),e._v(" "),t("td",{staticClass:"whitespace-nowrap p-4 text-lg border-l-2 border-r-2 text-center"},[t("span",{staticClass:"bg-green-100 text-green-800 text-lg border-l-2 border-r-2 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"},[e._v("\n    "+e._s(e.item.nama_pelanggan)+"\n  ")])]),e._v(" "),t("td",{staticClass:"whitespace-nowrap p-4 text-lg border-l-2 border-r-2 text-center"},[t("span",{staticClass:"bg-purple-100 text-purple-800 font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400"},[e._v("\n    "+e._s(e.item.operator)+"\n  ")])]),e._v(" "),t("td",{staticClass:"px-6 py-4 text-right text-lg border-l-2 border-r-2"},[e._v("\n  "+e._s(e.$format(e.item.jumlah_penjualan))+"\n")]),e._v(" "),t("td",{staticClass:"px-6 py-4 text-right text-lg border-l-2 border-r-2"},[e._v("\n  "+e._s(e.$format(e.item.jumlah_penjualan-e.item.jumlah_piutang))+"\n")]),e._v(" "),t("td",{staticClass:"px-6 py-4 text-right text-lg border-l-2 border-r-2"},[e._v("\n  "+e._s(e.$format(e.item.jumlah_piutang))+"\n")]),e._v(" "),t("td",{staticClass:"px-6 py-4 text-right text-lg border-l-2 border-r-2"},[e._v("\n  "+e._s(e.$format(e.item.bayar_penjualan))+"\n")]),e._v(" "),t("td",{staticClass:"px-6 py-4 text-right text-lg border-l-2 border-r-2"},[e._v("\n  "+e._s(e.$format(e.item.piutang_penjualan))+"\n")]),e._v(" "),t("td",{staticClass:"whitespace-nowrap p-4 text-lg border-l-2 border-r-2"},[t("span",{staticClass:"bg-green-100 text-green-800 text-lg border-l-2 border-r-2 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"},[e._v("\n    "+e._s(e.item.kas_nama)+" ("+e._s(e.item.kode_kas)+")\n  ")])])])}),[],!1,null,null,null);t.default=component.exports}}]);