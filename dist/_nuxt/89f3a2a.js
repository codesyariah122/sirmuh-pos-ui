(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{839:function(t,e,r){"use strict";r.r(e);var n={props:{item:{type:Object,default:function(){return{}}},timelines:{type:Array,default:function(){return[]}}},methods:{generateLunas:function(data){return 1==data.lunas||"True"===data.lunas||"LUNAS"===data.visa?'<i class="fa-solid fa-check fa-lg text-emerald-600"></i>':'<i class="fa-solid fa-circle-minus text-red-600 fa-lg"></i>'}}},d=r(8),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;return e("tr",{staticClass:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},[e("th",{staticClass:"px-6 py-4 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white font-medium",attrs:{scope:"row"}},[t._v("\n    "+t._s(t.$moment(t.item.tanggal).format("LL"))+"\n  ")]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg"},[e("span",{staticClass:"bg-blue-100 text-blue-800 me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"},[t._v("\n      "+t._s(t.item.kode)+"\n    ")])]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg"},[e("span",{staticClass:"bg-indigo-100 text-indigo-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400"},[t._v("\n      "+t._s(t.item.kas_kode)+" ("+t._s(t.item.kas_nama)+")\n    ")])]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg"},[e("span",{staticClass:"bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"},[t._v("\n      "+t._s(t.item.nama_pelanggan)+" - ("+t._s(t.item.pelanggan)+")\n    ")])]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-right text-lg"},[t._v("\n    "+t._s(t.$format(t.item.jumlah))+"\n  ")]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-right text-lg"},[t._v("\n    "+t._s(t.$format(t.item.bayar))+"\n  ")]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-right text-lg"},[t._v("\n    "+t._s(t.$format(t.item.dikirim))+"\n  ")]),t._v(" "),"PIUTANG"===t.item.visa?e("td",{staticClass:"px-6 py-4 text-right text-lg"},[t._v("\n    "+t._s("-")+"\n  ")]):e("td",{staticClass:"px-6 py-4 text-right text-lg"},[t._v("\n    "+t._s(t.$format(t.item.kembali))+"\n  ")]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-right text-lg"},[t._v("\n    "+t._s(t.$format(t.item.biayakirim))+"\n  ")]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-lg"},[e("span",{domProps:{innerHTML:t._s(t.generateLunas({lunas:t.item.lunas,visa:t.item.visa}))}})]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg"},["DIKIRIM"===t.item.status?e("span",{staticClass:"bg-green-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"},[t._v("\n      "+t._s(t.item.status)+"\n    ")]):t._e(),t._v(" "),"PROSES"===t.item.status?e("span",{staticClass:"bg-yellow-100 text-yellow-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-400 border border-yellow-400"},[t._v("\n      "+t._s(t.item.status)+"\n    ")]):t._e(),t._v(" "),"HOLD"===t.item.status?e("span",{staticClass:"bg-red-100 text-red-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"},[t._v("\n      "+t._s(t.item.status)+"\n    ")]):t._e()]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-right text-lg"},[t._v("\n    "+t._s(t.$format(t.item.piutang))+"\n  ")]),t._v(" "),e("td",{staticClass:"px-6 py-4"},[t._v("\n    "+t._s(t.$roundup(t.item.tempo)>0?"".concat(t.$roundup(t.item.tempo),"  Hari"):"-")+"\n  ")]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg"},[t._v("\n    "+t._s(t.$roundup(t.item.tempo)>0?t.$moment(t.item.tanggal).add(t.item.tempo,"days").format("LL"):"-")+"\n  ")]),t._v(" "),e("td",{staticClass:"px-6 py-4"},[t._v("\n    "+t._s("undefined"!==t.item.keterangan||null!==t.item.keterangan?t.item.keterangan:"-")+"\n  ")]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg"},[e("span",{staticClass:"bg-blue-100 text-blue-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"},[t._v("\n      "+t._s(t.item.operator)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports}}]);